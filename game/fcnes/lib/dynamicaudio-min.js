
var swfobject = function() {
    var m = "undefined", t = "object", W = "Shockwave Flash", bh = "ShockwaveFlash.ShockwaveFlash", F = "application/x-shockwave-flash", X = "SWFObjectExprInst", Y = "onreadystatechange", r = window, j = document, w = navigator, Z = false, G = [bi], x = [], H = [], B = [], D, I, O, ba, z = false, J = false, u, P, bb = true, f = function() {
        var a = typeof j.getElementById != m && typeof j.getElementsByTagName != m && typeof j.createElement != m
          , c = w.userAgent.toLowerCase()
          , b = w.platform.toLowerCase()
          , d = b ? /win/.test(b) : /win/.test(c)
          , g = b ? /mac/.test(b) : /mac/.test(c)
          , i = /webkit/.test(c) ? parseFloat(c.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false
          , h = !+"\v1"
          , o = [0, 0, 0]
          , l = null;
        if (typeof w.plugins != m && typeof w.plugins[W] == t) {
            l = w.plugins[W].description;
            if (l && !(typeof w.mimeTypes != m && w.mimeTypes[F] && !w.mimeTypes[F].enabledPlugin)) {
                Z = true;
                h = false;
                l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                o[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10);
                o[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                o[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            }
        } else if (typeof r.ActiveXObject != m) {
            try {
                var q = new ActiveXObject(bh);
                if (q) {
                    l = q.GetVariable("$version");
                    if (l) {
                        h = true;
                        l = l.split(" ")[1].split(",");
                        o = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]
                    }
                }
            } catch (e) {}
        }
        return {
            w3: a,
            pv: o,
            wk: i,
            ie: h,
            win: d,
            mac: g
        }
    }(), bo = function() {
        if (!f.w3) {
            return
        }
        if ((typeof j.readyState != m && j.readyState == "complete") || (typeof j.readyState == m && (j.getElementsByTagName("body")[0] || j.body))) {
            C()
        }
        if (!z) {
            if (typeof j.addEventListener != m) {
                j.addEventListener("DOMContentLoaded", C, false)
            }
            if (f.ie && f.win) {
                j.attachEvent(Y, function() {
                    if (j.readyState == "complete") {
                        j.detachEvent(Y, arguments.callee);
                        C()
                    }
                });
                if (r == top) {
                    (function() {
                        if (z) {
                            return
                        }
                        try {
                            j.documentElement.doScroll("left")
                        } catch (e) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        C()
                    }
                    )()
                }
            }
            if (f.wk) {
                (function() {
                    if (z) {
                        return
                    }
                    if (!/loaded|complete/.test(j.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    C()
                }
                )()
            }
            bc(C)
        }
    }();
    function C() {
        if (z) {
            return
        }
        try {
            var a = j.getElementsByTagName("body")[0].appendChild(y("span"));
            a.parentNode.removeChild(a)
        } catch (e) {
            return
        }
        z = true;
        var c = G.length;
        for (var b = 0; b < c; b++) {
            G[b]()
        }
    }
    function bd(a) {
        if (z) {
            a()
        } else {
            G[G.length] = a
        }
    }
    function bc(a) {
        if (typeof r.addEventListener != m) {
            r.addEventListener("load", a, false)
        } else if (typeof j.addEventListener != m) {
            j.addEventListener("load", a, false)
        } else if (typeof r.attachEvent != m) {
            bj(r, "onload", a)
        } else if (typeof r.onload == "function") {
            var c = r.onload;
            r.onload = function() {
                c();
                a()
            }
        } else {
            r.onload = a
        }
    }
    function bi() {
        if (Z) {
            bk()
        } else {
            Q()
        }
    }
    function bk() {
        var c = j.getElementsByTagName("body")[0];
        var b = y(t);
        b.setAttribute("type", F);
        var d = c.appendChild(b);
        if (d) {
            var g = 0;
            (function() {
                if (typeof d.GetVariable != m) {
                    var a = d.GetVariable("$version");
                    if (a) {
                        a = a.split(" ")[1].split(",");
                        f.pv = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]
                    }
                } else if (g < 10) {
                    g++;
                    setTimeout(arguments.callee, 10);
                    return
                }
                c.removeChild(b);
                d = null;
                Q()
            }
            )()
        } else {
            Q()
        }
    }
    function Q() {
        var a = x.length;
        if (a > 0) {
            for (var c = 0; c < a; c++) {
                var b = x[c].id;
                var d = x[c].callbackFn;
                var g = {
                    success: false,
                    id: b
                };
                if (f.pv[0] > 0) {
                    var i = s(b);
                    if (i) {
                        if (K(x[c].swfVersion) && !(f.wk && f.wk < 312)) {
                            A(b, true);
                            if (d) {
                                g.success = true;
                                g.ref = R(b);
                                d(g)
                            }
                        } else if (x[c].expressInstall && S()) {
                            var h = {};
                            h.data = x[c].expressInstall;
                            h.width = i.getAttribute("width") || "0";
                            h.height = i.getAttribute("height") || "0";
                            if (i.getAttribute("class")) {
                                h.styleclass = i.getAttribute("class")
                            }
                            if (i.getAttribute("align")) {
                                h.align = i.getAttribute("align")
                            }
                            var o = {};
                            var l = i.getElementsByTagName("param");
                            var q = l.length;
                            for (var p = 0; p < q; p++) {
                                if (l[p].getAttribute("name").toLowerCase() != "movie") {
                                    o[l[p].getAttribute("name")] = l[p].getAttribute("value")
                                }
                            }
                            T(h, o, b, d)
                        } else {
                            bl(i);
                            if (d) {
                                d(g)
                            }
                        }
                    }
                } else {
                    A(b, true);
                    if (d) {
                        var v = R(b);
                        if (v && typeof v.SetVariable != m) {
                            g.success = true;
                            g.ref = v
                        }
                        d(g)
                    }
                }
            }
        }
    }
    function R(a) {
        var c = null;
        var b = s(a);
        if (b && b.nodeName == "OBJECT") {
            if (typeof b.SetVariable != m) {
                c = b
            } else {
                var d = b.getElementsByTagName(t)[0];
                if (d) {
                    c = d
                }
            }
        }
        return c
    }
    function S() {
        return !J && K("6.0.65") && (f.win || f.mac) && !(f.wk && f.wk < 312)
    }
    function T(a, c, b, d) {
        J = true;
        O = d || null;
        ba = {
            success: false,
            id: b
        };
        var g = s(b);
        if (g) {
            if (g.nodeName == "OBJECT") {
                D = U(g);
                I = null
            } else {
                D = g;
                I = b
            }
            a.id = X;
            if (typeof a.width == m || (!/%$/.test(a.width) && parseInt(a.width, 10) < 310)) {
                a.width = "310"
            }
            if (typeof a.height == m || (!/%$/.test(a.height) && parseInt(a.height, 10) < 137)) {
                a.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var i = f.ie && f.win ? "ActiveX" : "PlugIn"
              , h = "MMredirectURL=" + r.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + i + "&MMdoctitle=" + j.title;
            if (typeof c.flashvars != m) {
                c.flashvars += "&" + h
            } else {
                c.flashvars = h
            }
            if (f.ie && f.win && g.readyState != 4) {
                var o = y("div");
                b += "SWFObjectNew";
                o.setAttribute("id", b);
                g.parentNode.insertBefore(o, g);
                g.style.display = "none";
                (function() {
                    if (g.readyState == 4) {
                        g.parentNode.removeChild(g)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                }
                )()
            }
            V(a, c, b)
        }
    }
    function bl(a) {
        if (f.ie && f.win && a.readyState != 4) {
            var c = y("div");
            a.parentNode.insertBefore(c, a);
            c.parentNode.replaceChild(U(a), c);
            a.style.display = "none";
            (function() {
                if (a.readyState == 4) {
                    a.parentNode.removeChild(a)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            }
            )()
        } else {
            a.parentNode.replaceChild(U(a), a)
        }
    }
    function U(a) {
        var c = y("div");
        if (f.win && f.ie) {
            c.innerHTML = a.innerHTML
        } else {
            var b = a.getElementsByTagName(t)[0];
            if (b) {
                var d = b.childNodes;
                if (d) {
                    var g = d.length;
                    for (var i = 0; i < g; i++) {
                        if (!(d[i].nodeType == 1 && d[i].nodeName == "PARAM") && !(d[i].nodeType == 8)) {
                            c.appendChild(d[i].cloneNode(true))
                        }
                    }
                }
            }
        }
        return c
    }
    function V(a, c, b) {
        var d, g = s(b);
        if (f.wk && f.wk < 312) {
            return d
        }
        if (g) {
            if (typeof a.id == m) {
                a.id = b
            }
            if (f.ie && f.win) {
                var i = "";
                for (var h in a) {
                    if (a[h] != Object.prototype[h]) {
                        if (h.toLowerCase() == "data") {
                            c.movie = a[h]
                        } else if (h.toLowerCase() == "styleclass") {
                            i += ' class="' + a[h] + '"'
                        } else if (h.toLowerCase() != "classid") {
                            i += ' ' + h + '="' + a[h] + '"'
                        }
                    }
                }
                var o = "";
                for (var l in c) {
                    if (c[l] != Object.prototype[l]) {
                        o += '<param name="' + l + '" value="' + c[l] + '" />'
                    }
                }
                g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + '>' + o + '</object>';
                H[H.length] = a.id;
                d = s(a.id)
            } else {
                var q = y(t);
                q.setAttribute("type", F);
                for (var p in a) {
                    if (a[p] != Object.prototype[p]) {
                        if (p.toLowerCase() == "styleclass") {
                            q.setAttribute("class", a[p])
                        } else if (p.toLowerCase() != "classid") {
                            q.setAttribute(p, a[p])
                        }
                    }
                }
                for (var n in c) {
                    if (c[n] != Object.prototype[n] && n.toLowerCase() != "movie") {
                        bm(q, n, c[n])
                    }
                }
                g.parentNode.replaceChild(q, g);
                d = q
            }
        }
        return d
    }
    function bm(a, c, b) {
        var d = y("param");
        d.setAttribute("name", c);
        d.setAttribute("value", b);
        a.appendChild(d)
    }
    function be(a) {
        var c = s(a);
        if (c && c.nodeName == "OBJECT") {
            if (f.ie && f.win) {
                c.style.display = "none";
                (function() {
                    if (c.readyState == 4) {
                        bn(a)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                }
                )()
            } else {
                c.parentNode.removeChild(c)
            }
        }
    }
    function bn(a) {
        var c = s(a);
        if (c) {
            for (var b in c) {
                if (typeof c[b] == "function") {
                    c[b] = null
                }
            }
            c.parentNode.removeChild(c)
        }
    }
    function s(a) {
        var c = null;
        try {
            c = j.getElementById(a)
        } catch (e) {}
        return c
    }
    function y(a) {
        return j.createElement(a)
    }
    function bj(a, c, b) {
        a.attachEvent(c, b);
        B[B.length] = [a, c, b]
    }
    function K(a) {
        var c = f.pv
          , b = a.split(".");
        b[0] = parseInt(b[0], 10);
        b[1] = parseInt(b[1], 10) || 0;
        b[2] = parseInt(b[2], 10) || 0;
        return (c[0] > b[0] || (c[0] == b[0] && c[1] > b[1]) || (c[0] == b[0] && c[1] == b[1] && c[2] >= b[2])) ? true : false
    }
    function bf(a, c, b, d) {
        if (f.ie && f.mac) {
            return
        }
        var g = j.getElementsByTagName("head")[0];
        if (!g) {
            return
        }
        var i = (b && typeof b == "string") ? b : "screen";
        if (d) {
            u = null;
            P = null
        }
        if (!u || P != i) {
            var h = y("style");
            h.setAttribute("type", "text/css");
            h.setAttribute("media", i);
            u = g.appendChild(h);
            if (f.ie && f.win && typeof j.styleSheets != m && j.styleSheets.length > 0) {
                u = j.styleSheets[j.styleSheets.length - 1]
            }
            P = i
        }
        if (f.ie && f.win) {
            if (u && typeof u.addRule == t) {
                u.addRule(a, c)
            }
        } else {
            if (u && typeof j.createTextNode != m) {
                u.appendChild(j.createTextNode(a + " {" + c + "}"))
            }
        }
    }
    function A(a, c) {
        if (!bb) {
            return
        }
        var b = c ? "visible" : "hidden";
        if (z && s(a)) {
            s(a).style.visibility = b
        } else {
            bf("#" + a, "visibility:" + b)
        }
    }
    function bg(a) {
        var c = /[\\\"<>\.;]/;
        var b = c.exec(a) != null;
        return b && typeof encodeURIComponent != m ? encodeURIComponent(a) : a
    }
    var bp = function() {
        if (f.ie && f.win) {
            window.attachEvent("onunload", function() {
                var a = B.length;
                for (var c = 0; c < a; c++) {
                    B[c][0].detachEvent(B[c][1], B[c][2])
                }
                var b = H.length;
                for (var d = 0; d < b; d++) {
                    be(H[d])
                }
                for (var g in f) {
                    f[g] = null
                }
                f = null;
                for (var i in swfobject) {
                    swfobject[i] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(a, c, b, d) {
            if (f.w3 && a && c) {
                var g = {};
                g.id = a;
                g.swfVersion = c;
                g.expressInstall = b;
                g.callbackFn = d;
                x[x.length] = g;
                A(a, false)
            } else if (d) {
                d({
                    success: false,
                    id: a
                })
            }
        },
        getObjectById: function(a) {
            if (f.w3) {
                return R(a)
            }
        },
        embedSWF: function(i, h, o, l, q, p, v, L, M, E) {
            var N = {
                success: false,
                id: h
            };
            if (f.w3 && !(f.wk && f.wk < 312) && i && h && o && l && q) {
                A(h, false);
                bd(function() {
                    o += "";
                    l += "";
                    var a = {};
                    if (M && typeof M === t) {
                        for (var c in M) {
                            a[c] = M[c]
                        }
                    }
                    a.data = i;
                    a.width = o;
                    a.height = l;
                    var b = {};
                    if (L && typeof L === t) {
                        for (var d in L) {
                            b[d] = L[d]
                        }
                    }
                    if (v && typeof v === t) {
                        for (var k in v) {
                            if (typeof b.flashvars != m) {
                                b.flashvars += "&" + k + "=" + v[k]
                            } else {
                                b.flashvars = k + "=" + v[k]
                            }
                        }
                    }
                    if (K(q)) {
                        var g = V(a, b, h);
                        if (a.id == h) {
                            A(h, true)
                        }
                        N.success = true;
                        N.ref = g
                    } else if (p && S()) {
                        a.data = p;
                        T(a, b, h, E);
                        return
                    } else {
                        A(h, true)
                    }
                    if (E) {
                        E(N)
                    }
                })
            } else if (E) {
                E(N)
            }
        },
        switchOffAutoHideShow: function() {
            bb = false
        },
        ua: f,
        getFlashPlayerVersion: function() {
            return {
                major: f.pv[0],
                minor: f.pv[1],
                release: f.pv[2]
            }
        },
        hasFlashPlayerVersion: K,
        createSWF: function(a, c, b) {
            if (f.w3) {
                return V(a, c, b)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(a, c, b, d) {
            if (f.w3 && S()) {
                T(a, c, b, d)
            }
        },
        removeSWF: function(a) {
            if (f.w3) {
                be(a)
            }
        },
        createCSS: function(a, c, b, d) {
            if (f.w3) {
                bf(a, c, b, d)
            }
        },
        addDomLoadEvent: bd,
        addLoadEvent: bc,
        getQueryParamValue: function(a) {
            var c = j.location.search || j.location.hash;
            if (c) {
                if (/\?/.test(c)) {
                    c = c.split("?")[1]
                }
                if (a == null) {
                    return bg(c)
                }
                var b = c.split("&");
                for (var d = 0; d < b.length; d++) {
                    if (b[d].substring(0, b[d].indexOf("=")) == a) {
                        return bg(b[d].substring((b[d].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (J) {
                var a = s(X);
                if (a && D) {
                    a.parentNode.replaceChild(D, a);
                    if (I) {
                        A(I, true);
                        if (f.ie && f.win) {
                            D.style.display = "block"
                        }
                    }
                    if (O) {
                        O(ba)
                    }
                }
                J = false
            }
        }
    }
}();
window.AudioContext = window.AudioContext || window.webkitAudioContext;
function DynamicAudio(a) {
    if (this instanceof arguments.callee) {
        if (typeof this.init === "function") {
            this.init.apply(this, (a && a.callee) ? a : arguments)
        }
    } else {
        return new arguments.callee(arguments)
    }
}
DynamicAudio.VERSION = "0.2";
DynamicAudio.nextId = 1;
DynamicAudio.prototype = {
    nextId: null,
    swf: 'dynamicaudio.swf',
    audioContext: null,
    flashWrapper: null,
    flashElement: null,
    init: function(c) {
        var b = this;
        b.id = DynamicAudio.nextId++;
        if (c && typeof c['swf'] !== 'undefined') {
            b.swf = c['swf']
        }
        try {
            b.audioContext = new AudioContext()
        } catch (e) {
            console.log('Couldn\'t create AudioContext:' + e + ', falling back to flash player');
            b.flashWrapper = document.createElement('div');
            b.flashWrapper.id = 'dynamicaudio-flashwrapper-' + b.id;
            var d = b.flashWrapper.style;
            d['position'] = 'fixed';
            d['width'] = d['height'] = '8px';
            d['bottom'] = d['left'] = '0px';
            d['overflow'] = 'hidden';
            b.flashElement = document.createElement('div');
            b.flashElement.id = 'dynamicaudio-flashelement-' + b.id;
            b.flashWrapper.appendChild(b.flashElement);
            document.body.appendChild(b.flashWrapper);
            swfobject.embedSWF(b.swf, b.flashElement.id, "8", "8", "9.0.0", null, null, {
                'allowScriptAccess': 'always'
            }, null, function(a) {
                b.flashElement = a.ref
            })
        }
    },
    write: function(a) {
        if (this.audioContext !== null) {
            this.webAudioWrite(a)
        } else if (this.flashElement !== null) {
            var c = new Array(a.length);
            for (var b = a.length - 1; b !== 0; b--) {
                c[b] = this.floatToIntSample(a[b])
            }
            this.flashElement.write(c.join(' '))
        }
    },
    writeInt: function(a) {
        if (this.audioContext !== null) {
            this.webAudioWrite(a, this.intToFloatSample)
        } else if (this.flashElement !== null) {
            this.flashElement.write(a.join(' '))
        }
    },
    webAudioWrite: function(a, c) {
        var b = this.audioContext.createBuffer(2, a.length, this.audioContext.sampleRate);
        var d = b.getChannelData(0);
        var g = b.getChannelData(1);
        var i = 0;
        if (c) {
            for (var h = 0; h < a.length; h += 2) {
                d[i] = c(a[h]);
                g[i] = c(a[h + 1]);
                i++
            }
        } else {
            for (var h = 0; h < a.length; h += 2) {
                d[i] = a[h];
                g[i] = a[h + 1];
                i++
            }
        }
        var o = this.audioContext.createBufferSource();
        o.buffer = b;
        o.connect(this.audioContext.destination);
        o.start()
    },
    intToFloatSample: function(a) {
        return a / 32768
    },
    floatToIntSample: function(a) {
        return Math.floor(a * 32768)
    }
};
