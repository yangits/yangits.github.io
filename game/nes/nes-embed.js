var SCREEN_WIDTH = 256;
var SCREEN_HEIGHT = 240;
var FRAMEBUFFER_SIZE = SCREEN_WIDTH * SCREEN_HEIGHT;
var canvas_ctx, image;
var framebuffer_u8, framebuffer_u32F;
var AUDIO_BUFFERING = 512;
var SAMPLE_COUNT = 4 * 1024;
var SAMPLE_MASK = SAMPLE_COUNT - 1;
var audio_samples_L = new Float32Array(SAMPLE_COUNT);
var audio_samples_R = new Float32Array(SAMPLE_COUNT);
var audio_write_cursor = 0, audio_read_cursor = 0;
var nes = new jsnes.NES({
    onFrame: function (framebuffer_24) {
        for (var i = 0; i < FRAMEBUFFER_SIZE; i++) {
            framebuffer_u32[i] = 0xFF000000 | framebuffer_24[i];
        }
    },
    onAudioSample: function (l, r) {
        audio_samples_L[audio_write_cursor] = l;
        audio_samples_R[audio_write_cursor] = r;
        audio_write_cursor = (audio_write_cursor + 1) & SAMPLE_MASK;
    },
});
var fps = 64.098;
var now;
var then = Date.now();
var interval = 1000 / fps;
var delta;
function onAnimationFrame() {
    window.requestAnimationFrame(onAnimationFrame);
    now = Date.now();
    delta = now - then;
    if (delta > interval) {
        then = now - (delta % interval);
        nes.frame();
        image.data.set(framebuffer_u8);
        canvas_ctx.putImageData(image, 0, 0);
    }
}
function audio_remain() {
    return (audio_write_cursor - audio_read_cursor) & SAMPLE_MASK;
}
function audio_callback(event) {
    var dst = event.outputBuffer;
    var len = dst.length;
    if (audio_remain() < AUDIO_BUFFERING) nes.frame();
    var dst_l = dst.getChannelData(0);
    var dst_r = dst.getChannelData(1);
    for (var i = 0; i < len; i++) {
        var src_idx = (audio_read_cursor + i) & SAMPLE_MASK;
        dst_l[i] = audio_samples_L[src_idx];
        dst_r[i] = audio_samples_R[src_idx];
    }
    audio_read_cursor = (audio_read_cursor + len) & SAMPLE_MASK;
}
function keyboard(callback, event) {
    var player = 1;
    switch (event.keyCode) {
        case 38: // UP
        case 87: // w
            callback(player, jsnes.Controller.BUTTON_UP); break;
        case 40: // Down
        case 83://x
            callback(player, jsnes.Controller.BUTTON_DOWN); break;
        case 37: // Left
        case 65://a
            callback(player, jsnes.Controller.BUTTON_LEFT); break;
        case 39: // Right
        case 68: // d
            callback(player, jsnes.Controller.BUTTON_RIGHT); break;
        case 80: // o
        case 104: // 7
            callback(player, jsnes.Controller.BUTTON_A); break;
        case 103: // 8
        case 79: // p
            callback(player, jsnes.Controller.BUTTON_B); break;
        case 9: // Tab
            callback(player, jsnes.Controller.BUTTON_SELECT); break;
        case 13: // Return
            callback(player, jsnes.Controller.BUTTON_START); break;
        default:break;
    }
}
function nes_init(canvas_id) {
    var canvas = document.getElementById(canvas_id);
    canvas_ctx = canvas.getContext("2d");
    image = canvas_ctx.getImageData(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    canvas_ctx.fillStyle = "black";
    canvas_ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    var buffer = new ArrayBuffer(image.data.length);
    framebuffer_u8 = new Uint8ClampedArray(buffer);
    framebuffer_u32 = new Uint32Array(buffer);
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audio_ctx = new AudioContext();
    var script_processor = audio_ctx.createScriptProcessor(AUDIO_BUFFERING, 0, 2);
    script_processor.onaudioprocess = audio_callback;
    script_processor.connect(audio_ctx.destination);
}
function nes_boot(rom_data) {
    nes.loadROM(rom_data);
    window.requestAnimationFrame(onAnimationFrame);
}
function nes_load_data(canvas_id, rom_data) {
    nes_init(canvas_id);
    nes_boot(rom_data);
}
function nes_load_url(canvas_id, path) {
    nes_init(canvas_id);
    var XML = new XMLHttpRequest();
    XML.open("GET", path);
    XML.overrideMimeType("text/plain; charset=x-user-defined");
    XML.onload = function () {
        if (this.status === 200) {
            nes_boot(this.responseText);
        }
    };
    XML.send();
}
document.addEventListener('keydown', (event) => { keyboard(nes.buttonDown, event) });
document.addEventListener('keyup', (event) => { keyboard(nes.buttonUp, event) });
document.addEventListener('touchstart', (event) => {
    event.preventDefault();touchEvent(nes.buttonDown, event)}, { passive: false });
document.addEventListener('touchend', (event) => {
    touchEvent(nes.buttonUp, event)}, { passive: false });
document.addEventListener('contextmenu', function (e) {e.preventDefault();});
function touchEvent(callback, event) {
    var key = event.target.getAttribute("key");
    if (!key) return;
    var player = 1;
    switch (key) {
    case "up":
        callback(player, jsnes.Controller.BUTTON_UP);
        break;
    case "down":
        callback(player, jsnes.Controller.BUTTON_DOWN);
        break;
    case "left":
        callback(player, jsnes.Controller.BUTTON_LEFT);
        break;
    case "right":
        callback(player, jsnes.Controller.BUTTON_RIGHT);
        break;
    case "a":
        callback(player, jsnes.Controller.BUTTON_A);
        break;
    case "b":
        callback(player, jsnes.Controller.BUTTON_B);
        break;
    case "select":
        callback(player, jsnes.Controller.BUTTON_SELECT);
        break;
    case "start":
        callback(player, jsnes.Controller.BUTTON_START);
        break;
    }
}