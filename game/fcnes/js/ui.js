

JSNES.DummyUI = function(nes) {
    this.nes = nes;
    this.enable = function() {};
    this.updateStatus = function() {};
    this.writeAudio = function() {};
    this.writeFrame = function() {};
};

if (typeof jQuery !== 'undefined') {
    (function($) {
        $.fn.JSNESUI = function(roms) {
            var parent = this;
            var UI = function(nes) {
                var self = this;
                self.nes = nes;
                self.status = $('<p class="nes-status">Booting up...</p>').appendTo(self.root);
                self.root = $('<div></div>');
                self.screen = $('<canvas class="nes-screen" width="256" height="240"></canvas>').appendTo(self.root);

                if (!self.screen[0].getContext) {
                    parent.html("Try Google Chrome, Safari, Opera or Firefox!");
                    return;
                }
                self.romContainer = $('<div class="nes-roms"></div>').appendTo(self.root);
                self.romSelect = $('<select></select>').appendTo(self.romContainer);
                self.controls = $('<div class="nes-controls"></div>').appendTo(self.root);
                self.buttons = {
                    pause: $('<input type="button" value="暂停" class="nes-pause" disabled="disabled">').appendTo(self.controls),
                    restart: $('<input type="button" value="重启" class="nes-restart" disabled="disabled">').appendTo(self.controls),
                    sound: $('<input type="button" value="开启声音" class="nes-enablesound">').appendTo(self.controls),
                };
                self.root.appendTo(parent);
                self.romSelect.change(function() {
                    self.loadROM();
                });

                self.buttons.pause.click(function() {
                    if (self.nes.isRunning) {
                        self.nes.stop();
                        self.updateStatus("Paused");
                        self.buttons.pause.attr("value", "继续");
                    } else {
                        self.nes.start();
                        self.buttons.pause.attr("value", "暂停");
                    }
                });

                self.buttons.restart.click(function() {
                    self.nes.reloadRom();
                    self.nes.start();
                });

                self.buttons.sound.click(function() {
                    if (self.nes.opts.emulateSound) {
                        self.nes.opts.emulateSound = false;
                        self.buttons.sound.attr("value", "打开声音");
                    } else {
                        self.nes.opts.emulateSound = true;
                        self.buttons.sound.attr("value", "关闭声音");

                        var source = self.audio.createBufferSource();
                        source.connect(self.audio.destination);
                        source.start();
                    }
                });

                $('.nes-screen').css({
                    height:'85%',
                    width: '100%',
                })

                if ($.offset) {
                    self.screen.mousedown(function(e) {
                        if (self.nes.mmap) {
                            self.nes.mmap.mousePressed = true;
                            self.nes.mmap.mouseX = e.pageX - self.screen.offset().left;
                            self.nes.mmap.mouseY = e.pageY - self.screen.offset().top;
                        }
                    }).mouseup(function() {
                        setTimeout(function() {
                            if (self.nes.mmap) {
                                self.nes.mmap.mousePressed = false;
                                self.nes.mmap.mouseX = 0;
                                self.nes.mmap.mouseY = 0;
                            }
                        }, 500);
                    });
                }

                if (typeof roms != 'undefined') {
                    self.setRoms(roms);
                }
                self.canvasContext = self.screen[0].getContext('2d');

                self.canvasImageData = self.canvasContext.getImageData(0, 0, 256, 240);
                self.resetCanvas();

                $(document).
                bind('keydown', function(evt) {
                    self.nes.keyboard.keyDown(evt);
                }).
                bind('keyup', function(evt) {
                    self.nes.keyboard.keyUp(evt);
                }).
                bind('keypress', function(evt) {
                    self.nes.keyboard.keyPress(evt);
                });

                $('#controls-direction').bind('touchstart', function(e) {
                    e.preventDefault();
                })
                $('#controls-direction').bind('gesturestart', function(e) {
                    e.preventDefault();
                })
                $('#joystick_btn_A').bind('touchstart', function(e) {
                    self.nes.keyboard.keyDown({
                        keyCode: 74
                    });
                    e.preventDefault();
                });
                $('#joystick_btn_A').bind('touchend', function(e) {
                    self.nes.keyboard.keyUp({
                        keyCode: 74
                    });
                    e.preventDefault();
                });
                $('#joystick_btn_B').bind('touchstart', function(e) {
                    self.nes.keyboard.keyDown({
                        keyCode: 75
                    });
                    e.preventDefault();
                });
                $('#joystick_btn_B').bind('touchend', function(e) {
                    self.nes.keyboard.keyUp({
                        keyCode: 75
                    });
                    e.preventDefault();
                });
                $('#joystick_btn_select').bind('touchstart', function(e) {
                    self.nes.keyboard.keyDown({
                        keyCode: 17
                    });
                    e.preventDefault();
                });
                $('#joystick_btn_select').bind('touchend', function(e) {
                    self.nes.keyboard.keyUp({
                        keyCode: 17
                    });
                    e.preventDefault();
                });
                $('#joystick_btn_start').bind('touchstart', function(e) {
                    self.nes.keyboard.keyDown({
                        keyCode: 13
                    });
                    e.preventDefault();
                });
                $('#joystick_btn_start').bind('touchend', function(e) {
                    self.nes.keyboard.keyUp({
                        keyCode: 13
                    });
                    e.preventDefault();
                });

                window.AudioContext = window.webkitAudioContext || window.AudioContext;
                try {
                    self.audio = new AudioContext();
                } catch (e) {
                    self.dynamicaudio = new DynamicAudio({
                        swf: nes.opts.swfPath + 'dynamicaudio.swf'
                    });
                }
            };
            UI.prototype = {
                loadROM: function() {
                    var self = this;
                    self.updateStatus("下载中...");
                    $.ajax({
                        url: "https://yangits.github.io/data/"+self.romSelect.val(),
                        xhr: function() {
                            var xhr = $.ajaxSettings.xhr();
                            if (typeof xhr.overrideMimeType !== 'undefined') {
                                xhr.overrideMimeType('text/plain; charset=x-user-defined');
                            }
                            self.xhr = xhr;
                            return xhr;
                        },
                        complete: function(xhr, status) {
                            var i, data;
                            if (JSNES.Utils.isIE()) {
                                var charCodes = JSNESBinaryToArray(
                                    xhr.responseBody
                                ).toArray();
                                data = String.fromCharCode.apply(
                                    undefined,
                                    charCodes
                                );
                            } else {
                                data = xhr.responseText;
                            }
                            self.nes.loadRom(data);
                            self.nes.start();
                            self.enable();
                        }
                    });
                },

                resetCanvas: function() {
                    this.canvasContext.fillStyle = 'black';
                    this.canvasContext.fillRect(0, 0, 256, 240);
                    for (var i = 3; i < this.canvasImageData.data.length - 3; i += 4) {
                        this.canvasImageData.data[i] = 0xFF;
                    }
                },
                screenshot: function() {
                    var data = this.screen[0].toDataURL("image/png"),
                        img = new Image();
                    img.src = data;
                    return img;
                },
                
                enable: function() {
                    this.buttons.pause.attr("disabled", null);
                    if (this.nes.isRunning) {
                        this.buttons.pause.attr("value", "暂停");
                    } else {
                        this.buttons.pause.attr("value", "继续");
                    }
                    this.buttons.restart.attr("disabled", null);
                    if (this.nes.opts.emulateSound) {
                        this.buttons.sound.attr("value", "关闭声音");
                    } else {
                        this.buttons.sound.attr("value", "打开声音");
                    }
                },

                updateStatus: function(s) {
                    this.status.text(s);
                },

                setRoms: function(roms) {
                    this.romSelect.children().remove();
                    $("<option>选择游戏...</option>").appendTo(this.romSelect);
                    for (var groupName in roms) {
                        if (roms.hasOwnProperty(groupName)) {
                            var optgroup = $('<optgroup></optgroup>').
                            attr("label", groupName);
                            for (var i = 0; i < roms[groupName].length; i++) {
                                $('<option>' + roms[groupName][i][0] + '</option>')
                                    .attr("value", roms[groupName][i][1])
                                    .appendTo(optgroup);
                            }
                            this.romSelect.append(optgroup);
                        }
                    }
                },

                writeAudio: function(samples) {
                    if (this.dynamicaudio) {
                        return this.dynamicaudio.writeInt(samples);
                    }
                    var buffer = this.audio.createBuffer(2, samples.length, this.audio.sampleRate);
                    var channelLeft = buffer.getChannelData(0);
                    var channelRight = buffer.getChannelData(1);
                    var j = 0;
                    for (var i = 0; i < samples.length; i += 2) {
                        channelLeft[j] = this.intToFloatSample(samples[i]);
                        channelRight[j] = this.intToFloatSample(samples[i + 1]);
                        j++;
                    }
                    var source = this.audio.createBufferSource();
                    source.buffer = buffer;
                    source.connect(this.audio.destination); // Output to sound
                    source.start();
                },
                intToFloatSample: function(value) {
                    return value / 32767; // from -32767..32768 to -1..1 range
                },

                writeFrame: function(buffer, prevBuffer) {
                    var imageData = this.canvasImageData.data;
                    var pixel, i, j;

                    for (i = 0; i < 256 * 240; i++) {
                        pixel = buffer[i];

                        if (pixel != prevBuffer[i]) {
                            j = i * 4;
                            imageData[j] = pixel & 0xFF;
                            imageData[j + 1] = (pixel >> 8) & 0xFF;
                            imageData[j + 2] = (pixel >> 16) & 0xFF;
                            prevBuffer[i] = pixel;
                        }
                    }

                    this.canvasContext.putImageData(this.canvasImageData, 0, 0);
                }
            };

            return UI;
        };
    })(jQuery);
}