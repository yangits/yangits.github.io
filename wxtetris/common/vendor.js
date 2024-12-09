var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    "0102": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.music = e.hasWebAudioAPI = void 0;
            var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("d5f3")), o = {
                data: !!t.createInnerAudioContext
            };
            e.hasWebAudioAPI = o;
            var i = {};
            e.music = i, function() {
                function e() {
                    var e = t.createInnerAudioContext();
                    return e.src = "/static/music.mp3", {
                        start: function(t, n, r) {
                            e.startTime = n, e.play(), setTimeout(function() {
                                e.pause(), e.destroy();
                            }, 1e3 * (r + 0));
                        }
                    };
                }
                o.data && (i.killStart = function() {
                    i.start = function() {};
                }, i.start = function() {
                    i.killStart(), r.default.state.music;
                }, i.clear = function() {
                    r.default.state.music && e().start(0, 0, .7175);
                }, i.fall = function() {
                    r.default.state.music && e().start(0, 1.2558, .3546);
                }, i.gameover = function() {
                    r.default.state.music && e().start(0, 8.1276, 1.1437);
                }, i.rotate = function() {
                    r.default.state.music && e().start(0, 2.2471, .0807);
                }, i.move = function() {
                    r.default.state.music && e().start(0, 2.9088, .1437);
                });
            }();
        }).call(this, n("543d").default);
    },
    "02ee": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = n("7530"), o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("7cd9")), i = {
            nextBlock: function(t, e) {
                e || (e = (0, r.getNextType)()), t.next = e;
            },
            moveBlock: function(t, e) {
                t.cur = !0 === e.reset ? null : new o.default(e);
            },
            speedStart: function(t, e) {
                t.speedStart = e;
            },
            speedRun: function(t, e) {
                t.speedRun = e;
            },
            startLines: function(t, e) {
                t.startLines = e;
            },
            matrix: function(t, e) {
                t.matrix = e;
            },
            lock: function(t, e) {
                t.lock = e;
            },
            clearLines: function(t, e) {
                t.clearLines = e;
            },
            points: function(t, e) {
                t.points = e;
            },
            max: function(t, e) {
                t.max = e;
            },
            reset: function(t, e) {
                t.reset = e;
            },
            drop: function(t, e) {
                t.drop = e;
            },
            pause: function(t, e) {
                t.pause = e;
            },
            music: function(t, e) {
                t.music = e;
            },
            focus: function(t, e) {
                t.focus = e;
            },
            key_drop: function(t, e) {
                t.keyboard.drop = e;
            },
            key_down: function(t, e) {
                t.keyboard.down = e;
            },
            key_left: function(t, e) {
                t.keyboard.left = e;
            },
            key_right: function(t, e) {
                t.keyboard.right = e;
            },
            key_rotate: function(t, e) {
                t.keyboard.rotate = e;
            },
            key_reset: function(t, e) {
                t.keyboard.reset = e;
            },
            key_music: function(t, e) {
                t.keyboard.music = e;
            },
            key_pause: function(t, e) {
                t.keyboard.pause = e;
            }
        };
        e.default = i;
    },
    "03b1": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("8f37")).default);
        }).call(this, n("543d").createPage);
    },
    "0554": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("d6e9")).default);
        }).call(this, n("543d").createPage);
    },
    "0ef0": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            props: [ "dat" ]
        };
        e.default = r;
    },
    "0efa": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("7909")).default);
        }).call(this, n("543d").createPage);
    },
    "1cca": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {};
            !function() {
                function e(t) {
                    var e, n, r;
                    return t < 128 ? [ t ] : t < 2048 ? (e = 192 + (t >> 6), n = 128 + (63 & t), [ e, n ]) : (e = 224 + (t >> 12), 
                    n = 128 + (t >> 6 & 63), r = 128 + (63 & t), [ e, n, r ]);
                }
                function r(t) {
                    for (var n = [], r = 0; r < t.length; r++) for (var o = e(t.charCodeAt(r)), i = 0; i < o.length; i++) n.push(o[i]);
                    return n;
                }
                function o(t, e) {
                    this.typeNumber = -1, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, 
                    this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = t, 
                    this.utf8bytes = r(t), this.make();
                }
                function i(t, e) {
                    if (void 0 == t.length) throw new Error(t.length + "/" + e);
                    for (var n = 0; n < t.length && 0 == t[n]; ) n++;
                    this.num = new Array(t.length - n + e);
                    for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n];
                }
                function a() {
                    this.buffer = new Array(), this.length = 0;
                }
                o.prototype = {
                    constructor: o,
                    getModuleCount: function() {
                        return this.moduleCount;
                    },
                    make: function() {
                        this.getRightType(), this.dataCache = this.createData(), this.createQrcode();
                    },
                    makeImpl: function(t) {
                        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                        for (var e = 0; e < this.moduleCount; e++) this.modules[e] = new Array(this.moduleCount);
                        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), 
                        this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), 
                        this.setupTimingPattern(), this.setupTypeInfo(!0, t), this.typeNumber >= 7 && this.setupTypeNumber(!0), 
                        this.mapData(this.dataCache, t);
                    },
                    setupPositionProbePattern: function(t, e) {
                        for (var n = -1; n <= 7; n++) if (!(t + n <= -1 || this.moduleCount <= t + n)) for (var r = -1; r <= 7; r++) e + r <= -1 || this.moduleCount <= e + r || (this.modules[t + n][e + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4);
                    },
                    createQrcode: function() {
                        for (var t = 0, e = 0, n = null, r = 0; r < 8; r++) {
                            this.makeImpl(r);
                            var o = c.getLostPoint(this);
                            (0 == r || t > o) && (t = o, e = r, n = this.modules);
                        }
                        this.modules = n, this.setupTypeInfo(!1, e), this.typeNumber >= 7 && this.setupTypeNumber(!1);
                    },
                    setupTimingPattern: function() {
                        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0, 
                        null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0));
                    },
                    setupPositionAdjustPattern: function() {
                        for (var t = c.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var n = 0; n < t.length; n++) {
                            var r = t[e], o = t[n];
                            if (null == this.modules[r][o]) for (var i = -2; i <= 2; i++) for (var a = -2; a <= 2; a++) this.modules[r + i][o + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a;
                        }
                    },
                    setupTypeNumber: function(t) {
                        for (var e = c.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                            var r = !t && 1 == (e >> n & 1);
                            this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r, this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r;
                        }
                    },
                    setupTypeInfo: function(t, e) {
                        for (var n = u[this.errorCorrectLevel] << 3 | e, r = c.getBCHTypeInfo(n), o = 0; o < 15; o++) {
                            var i = !t && 1 == (r >> o & 1);
                            o < 6 ? this.modules[o][8] = i : o < 8 ? this.modules[o + 1][8] = i : this.modules[this.moduleCount - 15 + o][8] = i, 
                            i = !t && 1 == (r >> o & 1), o < 8 ? this.modules[8][this.moduleCount - o - 1] = i : o < 9 ? this.modules[8][15 - o - 1 + 1] = i : this.modules[8][15 - o - 1] = i;
                        }
                        this.modules[this.moduleCount - 8][8] = !t;
                    },
                    createData: function() {
                        var t = new a(), e = this.typeNumber > 9 ? 16 : 8;
                        t.put(4, 4), t.put(this.utf8bytes.length, e);
                        for (var n = 0, r = this.utf8bytes.length; n < r; n++) t.put(this.utf8bytes[n], 8);
                        for (t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4); t.length % 8 != 0; ) t.putBit(!1);
                        for (;;) {
                            if (t.length >= 8 * this.totalDataCount) break;
                            if (t.put(o.PAD0, 8), t.length >= 8 * this.totalDataCount) break;
                            t.put(o.PAD1, 8);
                        }
                        return this.createBytes(t);
                    },
                    createBytes: function(t) {
                        for (var e = 0, n = 0, r = 0, o = this.rsBlock.length / 3, a = new Array(), u = 0; u < o; u++) for (var s = this.rsBlock[3 * u + 0], f = this.rsBlock[3 * u + 1], l = this.rsBlock[3 * u + 2], h = 0; h < s; h++) a.push([ l, f ]);
                        for (var p = new Array(a.length), d = new Array(a.length), v = 0; v < a.length; v++) {
                            var _ = a[v][0], y = a[v][1] - _;
                            for (n = Math.max(n, _), r = Math.max(r, y), p[v] = new Array(_), u = 0; u < p[v].length; u++) p[v][u] = 255 & t.buffer[u + e];
                            e += _;
                            var m = c.getErrorCorrectPolynomial(y), g = new i(p[v], m.getLength() - 1).mod(m);
                            for (d[v] = new Array(m.getLength() - 1), u = 0; u < d[v].length; u++) {
                                var b = u + g.getLength() - d[v].length;
                                d[v][u] = b >= 0 ? g.get(b) : 0;
                            }
                        }
                        var w = new Array(this.totalDataCount), A = 0;
                        for (u = 0; u < n; u++) for (v = 0; v < a.length; v++) u < p[v].length && (w[A++] = p[v][u]);
                        for (u = 0; u < r; u++) for (v = 0; v < a.length; v++) u < d[v].length && (w[A++] = d[v][u]);
                        return w;
                    },
                    mapData: function(t, e) {
                        for (var n = -1, r = this.moduleCount - 1, o = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
                            for (var u = 0; u < 2; u++) if (null == this.modules[r][a - u]) {
                                var s = !1;
                                i < t.length && (s = 1 == (t[i] >>> o & 1)), c.getMask(e, r, a - u) && (s = !s), 
                                this.modules[r][a - u] = s, -1 == --o && (i++, o = 7);
                            }
                            if ((r += n) < 0 || this.moduleCount <= r) {
                                r -= n, n = -n;
                                break;
                            }
                        }
                    }
                }, o.PAD0 = 236, o.PAD1 = 17;
                for (var u = [ 1, 0, 3, 2 ], s = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, c = {
                    PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(t) {
                        for (var e = t << 10; c.getBCHDigit(e) - c.getBCHDigit(c.G15) >= 0; ) e ^= c.G15 << c.getBCHDigit(e) - c.getBCHDigit(c.G15);
                        return (t << 10 | e) ^ c.G15_MASK;
                    },
                    getBCHTypeNumber: function(t) {
                        for (var e = t << 12; c.getBCHDigit(e) - c.getBCHDigit(c.G18) >= 0; ) e ^= c.G18 << c.getBCHDigit(e) - c.getBCHDigit(c.G18);
                        return t << 12 | e;
                    },
                    getBCHDigit: function(t) {
                        for (var e = 0; 0 != t; ) e++, t >>>= 1;
                        return e;
                    },
                    getPatternPosition: function(t) {
                        return c.PATTERN_POSITION_TABLE[t - 1];
                    },
                    getMask: function(t, e, n) {
                        switch (t) {
                          case s.PATTERN000:
                            return (e + n) % 2 == 0;

                          case s.PATTERN001:
                            return e % 2 == 0;

                          case s.PATTERN010:
                            return n % 3 == 0;

                          case s.PATTERN011:
                            return (e + n) % 3 == 0;

                          case s.PATTERN100:
                            return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;

                          case s.PATTERN101:
                            return e * n % 2 + e * n % 3 == 0;

                          case s.PATTERN110:
                            return (e * n % 2 + e * n % 3) % 2 == 0;

                          case s.PATTERN111:
                            return (e * n % 3 + (e + n) % 2) % 2 == 0;

                          default:
                            throw new Error("bad maskPattern:" + t);
                        }
                    },
                    getErrorCorrectPolynomial: function(t) {
                        for (var e = new i([ 1 ], 0), n = 0; n < t; n++) e = e.multiply(new i([ 1, f.gexp(n) ], 0));
                        return e;
                    },
                    getLostPoint: function(t) {
                        for (var e = t.getModuleCount(), n = 0, r = 0, o = 0; o < e; o++) for (var i = 0, a = t.modules[o][0], u = 0; u < e; u++) {
                            var s = t.modules[o][u];
                            if (u < e - 6 && s && !t.modules[o][u + 1] && t.modules[o][u + 2] && t.modules[o][u + 3] && t.modules[o][u + 4] && !t.modules[o][u + 5] && t.modules[o][u + 6] && (u < e - 10 ? t.modules[o][u + 7] && t.modules[o][u + 8] && t.modules[o][u + 9] && t.modules[o][u + 10] && (n += 40) : u > 3 && t.modules[o][u - 1] && t.modules[o][u - 2] && t.modules[o][u - 3] && t.modules[o][u - 4] && (n += 40)), 
                            o < e - 1 && u < e - 1) {
                                var c = 0;
                                s && c++, t.modules[o + 1][u] && c++, t.modules[o][u + 1] && c++, t.modules[o + 1][u + 1] && c++, 
                                0 != c && 4 != c || (n += 3);
                            }
                            a ^ s ? i++ : (a = s, i >= 5 && (n += 3 + i - 5), i = 1), s && r++;
                        }
                        for (u = 0; u < e; u++) for (i = 0, a = t.modules[0][u], o = 0; o < e; o++) s = t.modules[o][u], 
                        o < e - 6 && s && !t.modules[o + 1][u] && t.modules[o + 2][u] && t.modules[o + 3][u] && t.modules[o + 4][u] && !t.modules[o + 5][u] && t.modules[o + 6][u] && (o < e - 10 ? t.modules[o + 7][u] && t.modules[o + 8][u] && t.modules[o + 9][u] && t.modules[o + 10][u] && (n += 40) : o > 3 && t.modules[o - 1][u] && t.modules[o - 2][u] && t.modules[o - 3][u] && t.modules[o - 4][u] && (n += 40)), 
                        a ^ s ? i++ : (a = s, i >= 5 && (n += 3 + i - 5), i = 1);
                        return n += 10 * (Math.abs(100 * r / e / e - 50) / 5);
                    }
                }, f = {
                    glog: function(t) {
                        if (t < 1) throw new Error("glog(" + t + ")");
                        return f.LOG_TABLE[t];
                    },
                    gexp: function(t) {
                        for (;t < 0; ) t += 255;
                        for (;t >= 256; ) t -= 255;
                        return f.EXP_TABLE[t];
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, l = 0; l < 8; l++) f.EXP_TABLE[l] = 1 << l;
                for (l = 8; l < 256; l++) f.EXP_TABLE[l] = f.EXP_TABLE[l - 4] ^ f.EXP_TABLE[l - 5] ^ f.EXP_TABLE[l - 6] ^ f.EXP_TABLE[l - 8];
                for (l = 0; l < 255; l++) f.LOG_TABLE[f.EXP_TABLE[l]] = l;
                i.prototype = {
                    get: function(t) {
                        return this.num[t];
                    },
                    getLength: function() {
                        return this.num.length;
                    },
                    multiply: function(t) {
                        for (var e = new Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++) for (var r = 0; r < t.getLength(); r++) e[n + r] ^= f.gexp(f.glog(this.get(n)) + f.glog(t.get(r)));
                        return new i(e, 0);
                    },
                    mod: function(t) {
                        var e = this.getLength(), n = t.getLength();
                        if (e - n < 0) return this;
                        for (var r = new Array(e), o = 0; o < e; o++) r[o] = this.get(o);
                        for (;r.length >= n; ) {
                            var a = f.glog(r[0]) - f.glog(t.get(0));
                            for (o = 0; o < t.getLength(); o++) r[o] ^= f.gexp(f.glog(t.get(o)) + a);
                            for (;0 == r[0]; ) r.shift();
                        }
                        return new i(r, 0);
                    }
                };
                var h = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ];
                o.prototype.getRightType = function() {
                    for (var t = 1; t < 41; t++) {
                        var e = h[4 * (t - 1) + this.errorCorrectLevel];
                        if (void 0 == e) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + this.errorCorrectLevel);
                        for (var n = e.length / 3, r = 0, o = 0; o < n; o++) {
                            var i = e[3 * o + 0];
                            r += e[3 * o + 2] * i;
                        }
                        var a = t > 9 ? 2 : 1;
                        if (this.utf8bytes.length + a < r || 40 == t) {
                            this.typeNumber = t, this.rsBlock = e, this.totalDataCount = r;
                            break;
                        }
                    }
                }, a.prototype = {
                    get: function(t) {
                        var e = Math.floor(t / 8);
                        return this.buffer[e] >>> 7 - t % 8 & 1;
                    },
                    put: function(t, e) {
                        for (var n = 0; n < e; n++) this.putBit(t >>> e - n - 1 & 1);
                    },
                    putBit: function(t) {
                        var e = Math.floor(this.length / 8);
                        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), 
                        this.length++;
                    }
                };
                var p = [];
                (n = function(e) {
                    if (this.options = {
                        text: "",
                        size: 256,
                        correctLevel: 3,
                        background: "#ffffff",
                        foreground: "#000000",
                        pdground: "#000000",
                        image: "",
                        imageSize: 30,
                        canvasId: e.canvasId,
                        context: e.context,
                        usingComponents: e.usingComponents,
                        showLoading: e.showLoading,
                        loadingText: e.loadingText
                    }, "string" == typeof e && (e = {
                        text: e
                    }), e) for (var n in e) this.options[n] = e[n];
                    for (var r = null, i = (n = 0, p.length); n < i; n++) if (p[n].text == this.options.text && p[n].text.correctLevel == this.options.correctLevel) {
                        r = p[n].obj;
                        break;
                    }
                    n == i && (r = new o(this.options.text, this.options.correctLevel), p.push({
                        text: this.options.text,
                        correctLevel: this.options.correctLevel,
                        obj: r
                    }));
                    var a = function(t) {
                        var e = t.options;
                        return e.pdground && (t.row > 1 && t.row < 5 && t.col > 1 && t.col < 5 || t.row > t.count - 6 && t.row < t.count - 2 && t.col > 1 && t.col < 5 || t.row > 1 && t.row < 5 && t.col > t.count - 6 && t.col < t.count - 2) ? e.pdground : e.foreground;
                    };
                    !function(e) {
                        e.showLoading && t.showLoading({
                            title: e.loadingText,
                            mask: !0
                        });
                        for (var n = t.createCanvasContext(e.canvasId, e.context), o = r.getModuleCount(), i = e.size, s = e.imageSize, c = (i / o).toPrecision(4), f = (i / o).toPrecision(4), l = 0; l < o; l++) for (var h = 0; h < o; h++) {
                            var p = Math.ceil((h + 1) * c) - Math.floor(h * c), d = Math.ceil((l + 1) * c) - Math.floor(l * c), v = a({
                                row: l,
                                col: h,
                                count: o,
                                options: e
                            });
                            n.setFillStyle(r.modules[l][h] ? v : e.background), n.fillRect(Math.round(h * c), Math.round(l * f), p, d);
                        }
                        if (e.image) {
                            var _ = Number(((i - s) / 2).toFixed(2)), y = Number(((i - s) / 2).toFixed(2));
                            (function(t, n, r, o, i, a, u, s, c) {
                                t.setLineWidth(u), t.setFillStyle(e.background), t.setStrokeStyle(e.background), 
                                t.beginPath(), t.moveTo(n + a, r), t.arcTo(n + o, r, n + o, r + a, a), t.arcTo(n + o, r + i, n + o - a, r + i, a), 
                                t.arcTo(n, r + i, n, r + i - a, a), t.arcTo(n, r, n + a, r, a), t.closePath(), s && t.fill(), 
                                c && t.stroke();
                            })(n, _, y, s, s, 2, 6, !0, !0), n.drawImage(e.image, _, y, s, s);
                        }
                        setTimeout(function() {
                            n.draw(!0, function() {
                                setTimeout(function() {
                                    t.canvasToTempFilePath({
                                        width: e.width,
                                        height: e.height,
                                        destWidth: e.width,
                                        destHeight: e.height,
                                        canvasId: e.canvasId,
                                        quality: Number(1),
                                        success: function(t) {
                                            e.cbResult && (u(t.tempFilePath) ? u(t.apFilePath) ? e.cbResult(t.tempFilePath) : e.cbResult(t.apFilePath) : e.cbResult(t.tempFilePath));
                                        },
                                        fail: function(t) {
                                            e.cbResult && e.cbResult(t);
                                        },
                                        complete: function() {
                                            t.hideLoading();
                                        }
                                    }, e.context);
                                }, e.text.length + 100);
                            });
                        }, e.usingComponents ? 0 : 150);
                    }(this.options);
                    var u = function(t) {
                        var e = void 0 === t ? "undefined" : _typeof(t), n = !1;
                        return "number" == e && "" == String(t) ? n = !0 : "undefined" == e ? n = !0 : "object" == e ? "{}" != JSON.stringify(t) && "[]" != JSON.stringify(t) && null != t || (n = !0) : "string" == e ? "" != t && "undefined" != t && "null" != t && "{}" != t && "[]" != t || (n = !0) : "function" == e && (n = !1), 
                        n;
                    };
                }).prototype.clear = function(e) {
                    var n = t.createCanvasContext(this.options.canvasId, this.options.context);
                    n.clearRect(0, 0, this.options.size, this.options.size), n.draw(!1, function() {
                        e && e();
                    });
                };
            }();
            var r = n;
            e.default = r;
        }).call(this, n("543d").default);
    },
    "1e53": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("7566")).default);
        }).call(this, n("543d").createPage);
    },
    "1f8d": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("4c15")).default);
        }).call(this, n("543d").createPage);
    },
    "1fb5": function(t, e, n) {
        function r(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = t.indexOf("=");
            return -1 === n && (n = e), [ n, n === e ? 0 : 4 - n % 4 ];
        }
        function o(t, e, n) {
            return 3 * (e + n) / 4 - n;
        }
        function i(t) {
            return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t];
        }
        function a(t, e, n) {
            for (var r, o = [], a = e; a < n; a += 3) r = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), 
            o.push(i(r));
            return o.join("");
        }
        e.byteLength = function(t) {
            var e = r(t), n = e[0], o = e[1];
            return 3 * (n + o) / 4 - o;
        }, e.toByteArray = function(t) {
            for (var e, n = r(t), i = n[0], a = n[1], u = new c(o(t, i, a)), f = 0, l = a > 0 ? i - 4 : i, h = 0; h < l; h += 4) e = s[t.charCodeAt(h)] << 18 | s[t.charCodeAt(h + 1)] << 12 | s[t.charCodeAt(h + 2)] << 6 | s[t.charCodeAt(h + 3)], 
            u[f++] = e >> 16 & 255, u[f++] = e >> 8 & 255, u[f++] = 255 & e;
            return 2 === a && (e = s[t.charCodeAt(h)] << 2 | s[t.charCodeAt(h + 1)] >> 4, u[f++] = 255 & e), 
            1 === a && (e = s[t.charCodeAt(h)] << 10 | s[t.charCodeAt(h + 1)] << 4 | s[t.charCodeAt(h + 2)] >> 2, 
            u[f++] = e >> 8 & 255, u[f++] = 255 & e), u;
        }, e.fromByteArray = function(t) {
            for (var e, n = t.length, r = n % 3, o = [], i = 16383, s = 0, c = n - r; s < c; s += i) o.push(a(t, s, s + i > c ? c : s + i));
            return 1 === r ? (e = t[n - 1], o.push(u[e >> 2] + u[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], 
            o.push(u[e >> 10] + u[e >> 4 & 63] + u[e << 2 & 63] + "=")), o.join("");
        };
        for (var u = [], s = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, h = f.length; l < h; ++l) u[l] = f[l], 
        s[f.charCodeAt(l)] = l;
        s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63;
    },
    "21b1": function(t, e, n) {
        n.r(e);
        var r = n("cb1a"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    2637: function(t, e, n) {},
    2744: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("8076")).default);
        }).call(this, n("543d").createPage);
    },
    2877: function(t, e, n) {
        function r(t, e, n, r, o, i, a, u) {
            var s, c = "function" == typeof t ? t.options : t;
            if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), 
            i && (c._scopeId = "data-v-" + i), a ? (s = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), 
                o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a);
            }, c._ssrRegister = s) : o && (s = u ? function() {
                o.call(this, this.$root.$options.shadowRoot);
            } : o), s) if (c.functional) {
                c._injectStyles = s;
                var f = c.render;
                c.render = function(t, e) {
                    return s.call(e), f(t, e);
                };
            } else {
                var l = c.beforeCreate;
                c.beforeCreate = l ? [].concat(l, s) : [ s ];
            }
            return {
                exports: t,
                options: c
            };
        }
        n.d(e, "a", function() {
            return r;
        });
    },
    "2d56": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = n("f6b1"), o = r.i18n.point[r.lan], i = r.i18n.highestScore[r.lan], a = r.i18n.lastRound[r.lan], u = {
            timeout: null
        }, s = {
            props: [ "cur", "point", "max" ],
            mounted: function() {
                this.onChange(this.$props);
            },
            components: {
                Number: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/number/index") ]).then(n.bind(null, "6a70"));
                }
            },
            data: function() {
                return {
                    label: "",
                    number: 0
                };
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function(t) {
                        this.onChange(t);
                    }
                }
            },
            methods: {
                onChange: function(t) {
                    var e = this, n = t.cur, r = t.point, s = t.max;
                    if (clearInterval(u.timeout), n) this.label = r >= s ? i : o, this.number = r; else {
                        0 !== r ? function t() {
                            e.label = a, e.number = r, u.timeout = setTimeout(function() {
                                e.label = i, e.number = s, u.timeout = setTimeout(t, 3e3);
                            }, 3e3);
                        }() : (this.label = i, this.number = s);
                    }
                }
            }
        };
        e.default = s;
    },
    "2f62": function(t, e, n) {
        function r(t) {
            E && (t._devtoolHook = E, E.emit("vuex:init", t), E.on("vuex:travel-to-state", function(e) {
                t.replaceState(e);
            }), t.subscribe(function(t, e) {
                E.emit("vuex:mutation", t, e);
            }));
        }
        function o(t, e) {
            Object.keys(t).forEach(function(n) {
                return e(t[n], n);
            });
        }
        function i(t) {
            return null !== t && "object" === (void 0 === t ? "undefined" : _typeof(t));
        }
        function a(t) {
            return t && "function" == typeof t.then;
        }
        function u(t, e, n) {
            if (e.update(n), n.modules) for (var r in n.modules) {
                if (!e.getChild(r)) return;
                u(t.concat(r), e.getChild(r), n.modules[r]);
            }
        }
        function s(t, e) {
            return e.indexOf(t) < 0 && e.push(t), function() {
                var n = e.indexOf(t);
                n > -1 && e.splice(n, 1);
            };
        }
        function c(t, e) {
            t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), 
            t._modulesNamespaceMap = Object.create(null);
            var n = t.state;
            l(t, n, [], t._modules.root, !0), f(t, n, e);
        }
        function f(t, e, n) {
            var r = t._vm;
            t.getters = {};
            var i = {};
            o(t._wrappedGetters, function(e, n) {
                i[n] = function() {
                    return e(t);
                }, Object.defineProperty(t.getters, n, {
                    get: function() {
                        return t._vm[n];
                    },
                    enumerable: !0
                });
            });
            var a = C.config.silent;
            C.config.silent = !0, t._vm = new C({
                data: {
                    $$state: e
                },
                computed: i
            }), C.config.silent = a, t.strict && y(t), r && (n && t._withCommit(function() {
                r._data.$$state = null;
            }), C.nextTick(function() {
                return r.$destroy();
            }));
        }
        function l(t, e, n, r, o) {
            var i = !n.length, a = t._modules.getNamespace(n);
            if (r.namespaced && (t._modulesNamespaceMap[a] = r), !i && !o) {
                var u = m(e, n.slice(0, -1)), s = n[n.length - 1];
                t._withCommit(function() {
                    C.set(u, s, r.state);
                });
            }
            var c = r.context = h(t, a, n);
            r.forEachMutation(function(e, n) {
                d(t, a + n, e, c);
            }), r.forEachAction(function(e, n) {
                var r = e.root ? n : a + n, o = e.handler || e;
                v(t, r, o, c);
            }), r.forEachGetter(function(e, n) {
                _(t, a + n, e, c);
            }), r.forEachChild(function(r, i) {
                l(t, e, n.concat(i), r, o);
            });
        }
        function h(t, e, n) {
            var r = "" === e, o = {
                dispatch: r ? t.dispatch : function(n, r, o) {
                    var i = g(n, r, o), a = i.payload, u = i.options, s = i.type;
                    return u && u.root || (s = e + s), t.dispatch(s, a);
                },
                commit: r ? t.commit : function(n, r, o) {
                    var i = g(n, r, o), a = i.payload, u = i.options, s = i.type;
                    u && u.root || (s = e + s), t.commit(s, a, u);
                }
            };
            return Object.defineProperties(o, {
                getters: {
                    get: r ? function() {
                        return t.getters;
                    } : function() {
                        return p(t, e);
                    }
                },
                state: {
                    get: function() {
                        return m(t.state, n);
                    }
                }
            }), o;
        }
        function p(t, e) {
            var n = {}, r = e.length;
            return Object.keys(t.getters).forEach(function(o) {
                if (o.slice(0, r) === e) {
                    var i = o.slice(r);
                    Object.defineProperty(n, i, {
                        get: function() {
                            return t.getters[o];
                        },
                        enumerable: !0
                    });
                }
            }), n;
        }
        function d(t, e, n, r) {
            (t._mutations[e] || (t._mutations[e] = [])).push(function(e) {
                n.call(t, r.state, e);
            });
        }
        function v(t, e, n, r) {
            (t._actions[e] || (t._actions[e] = [])).push(function(e, o) {
                var i = n.call(t, {
                    dispatch: r.dispatch,
                    commit: r.commit,
                    getters: r.getters,
                    state: r.state,
                    rootGetters: t.getters,
                    rootState: t.state
                }, e, o);
                return a(i) || (i = Promise.resolve(i)), t._devtoolHook ? i.catch(function(e) {
                    throw t._devtoolHook.emit("vuex:error", e), e;
                }) : i;
            });
        }
        function _(t, e, n, r) {
            t._wrappedGetters[e] || (t._wrappedGetters[e] = function(t) {
                return n(r.state, r.getters, t.state, t.getters);
            });
        }
        function y(t) {
            t._vm.$watch(function() {
                return this._data.$$state;
            }, function() {}, {
                deep: !0,
                sync: !0
            });
        }
        function m(t, e) {
            return e.length ? e.reduce(function(t, e) {
                return t[e];
            }, t) : t;
        }
        function g(t, e, n) {
            return i(t) && t.type && (n = e, e = t, t = t.type), {
                type: t,
                payload: e,
                options: n
            };
        }
        function b(t) {
            C && t === C || (C = t, k(C));
        }
        function w(t) {
            return Array.isArray(t) ? t.map(function(t) {
                return {
                    key: t,
                    val: t
                };
            }) : Object.keys(t).map(function(e) {
                return {
                    key: e,
                    val: t[e]
                };
            });
        }
        function A(t) {
            return function(e, n) {
                return "string" != typeof e ? (n = e, e = "") : "/" !== e.charAt(e.length - 1) && (e += "/"), 
                t(e, n);
            };
        }
        function S(t, e, n) {
            return t._modulesNamespaceMap[n];
        }
        n.r(e), n.d(e, "Store", function() {
            return T;
        }), n.d(e, "install", function() {
            return b;
        }), n.d(e, "mapState", function() {
            return I;
        }), n.d(e, "mapMutations", function() {
            return M;
        }), n.d(e, "mapGetters", function() {
            return j;
        }), n.d(e, "mapActions", function() {
            return $;
        }), n.d(e, "createNamespacedHelpers", function() {
            return D;
        });
        var k = function(t) {
            function e() {
                var t = this.$options;
                t.store ? this.$store = "function" == typeof t.store ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store);
            }
            if (Number(t.version.split(".")[0]) >= 2) t.mixin({
                beforeCreate: e
            }); else {
                var n = t.prototype._init;
                t.prototype._init = function(t) {
                    void 0 === t && (t = {}), t.init = t.init ? [ e ].concat(t.init) : e, n.call(this, t);
                };
            }
        }, E = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, x = function(t, e) {
            this.runtime = e, this._children = Object.create(null), this._rawModule = t;
            var n = t.state;
            this.state = ("function" == typeof n ? n() : n) || {};
        }, O = {
            namespaced: {
                configurable: !0
            }
        };
        O.namespaced.get = function() {
            return !!this._rawModule.namespaced;
        }, x.prototype.addChild = function(t, e) {
            this._children[t] = e;
        }, x.prototype.removeChild = function(t) {
            delete this._children[t];
        }, x.prototype.getChild = function(t) {
            return this._children[t];
        }, x.prototype.update = function(t) {
            this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), 
            t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
        }, x.prototype.forEachChild = function(t) {
            o(this._children, t);
        }, x.prototype.forEachGetter = function(t) {
            this._rawModule.getters && o(this._rawModule.getters, t);
        }, x.prototype.forEachAction = function(t) {
            this._rawModule.actions && o(this._rawModule.actions, t);
        }, x.prototype.forEachMutation = function(t) {
            this._rawModule.mutations && o(this._rawModule.mutations, t);
        }, Object.defineProperties(x.prototype, O);
        var R = function(t) {
            this.register([], t, !1);
        };
        R.prototype.get = function(t) {
            return t.reduce(function(t, e) {
                return t.getChild(e);
            }, this.root);
        }, R.prototype.getNamespace = function(t) {
            var e = this.root;
            return t.reduce(function(t, n) {
                return e = e.getChild(n), t + (e.namespaced ? n + "/" : "");
            }, "");
        }, R.prototype.update = function(t) {
            u([], this.root, t);
        }, R.prototype.register = function(t, e, n) {
            var r = this;
            void 0 === n && (n = !0);
            var i = new x(e, n);
            0 === t.length ? this.root = i : this.get(t.slice(0, -1)).addChild(t[t.length - 1], i), 
            e.modules && o(e.modules, function(e, o) {
                r.register(t.concat(o), e, n);
            });
        }, R.prototype.unregister = function(t) {
            var e = this.get(t.slice(0, -1)), n = t[t.length - 1];
            e.getChild(n).runtime && e.removeChild(n);
        };
        var C, T = function(t) {
            var e = this;
            void 0 === t && (t = {}), !C && "undefined" != typeof window && window.Vue && b(window.Vue);
            var n = t.plugins;
            void 0 === n && (n = []);
            var o = t.strict;
            void 0 === o && (o = !1);
            var i = t.state;
            void 0 === i && (i = {}), "function" == typeof i && (i = i() || {}), this._committing = !1, 
            this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), 
            this._wrappedGetters = Object.create(null), this._modules = new R(t), this._modulesNamespaceMap = Object.create(null), 
            this._subscribers = [], this._watcherVM = new C();
            var a = this, u = this, s = u.dispatch, c = u.commit;
            this.dispatch = function(t, e) {
                return s.call(a, t, e);
            }, this.commit = function(t, e, n) {
                return c.call(a, t, e, n);
            }, this.strict = o, l(this, i, [], this._modules.root), f(this, i), n.forEach(function(t) {
                return t(e);
            }), C.config.devtools && r(this);
        }, P = {
            state: {
                configurable: !0
            }
        };
        P.state.get = function() {
            return this._vm._data.$$state;
        }, P.state.set = function(t) {}, T.prototype.commit = function(t, e, n) {
            var r = this, o = g(t, e, n), i = o.type, a = o.payload, u = (o.options, {
                type: i,
                payload: a
            }), s = this._mutations[i];
            s && (this._withCommit(function() {
                s.forEach(function(t) {
                    t(a);
                });
            }), this._subscribers.forEach(function(t) {
                return t(u, r.state);
            }));
        }, T.prototype.dispatch = function(t, e) {
            var n = this, r = g(t, e), o = r.type, i = r.payload, a = {
                type: o,
                payload: i
            }, u = this._actions[o];
            if (u) return this._actionSubscribers.forEach(function(t) {
                return t(a, n.state);
            }), u.length > 1 ? Promise.all(u.map(function(t) {
                return t(i);
            })) : u[0](i);
        }, T.prototype.subscribe = function(t) {
            return s(t, this._subscribers);
        }, T.prototype.subscribeAction = function(t) {
            return s(t, this._actionSubscribers);
        }, T.prototype.watch = function(t, e, n) {
            var r = this;
            return this._watcherVM.$watch(function() {
                return t(r.state, r.getters);
            }, e, n);
        }, T.prototype.replaceState = function(t) {
            var e = this;
            this._withCommit(function() {
                e._vm._data.$$state = t;
            });
        }, T.prototype.registerModule = function(t, e, n) {
            void 0 === n && (n = {}), "string" == typeof t && (t = [ t ]), this._modules.register(t, e), 
            l(this, this.state, t, this._modules.get(t), n.preserveState), f(this, this.state);
        }, T.prototype.unregisterModule = function(t) {
            var e = this;
            "string" == typeof t && (t = [ t ]), this._modules.unregister(t), this._withCommit(function() {
                var n = m(e.state, t.slice(0, -1));
                C.delete(n, t[t.length - 1]);
            }), c(this);
        }, T.prototype.hotUpdate = function(t) {
            this._modules.update(t), c(this, !0);
        }, T.prototype._withCommit = function(t) {
            var e = this._committing;
            this._committing = !0, t(), this._committing = e;
        }, Object.defineProperties(T.prototype, P);
        var I = A(function(t, e) {
            var n = {};
            return w(e).forEach(function(e) {
                var r = e.key, o = e.val;
                n[r] = function() {
                    var e = this.$store.state, n = this.$store.getters;
                    if (t) {
                        var r = S(this.$store, 0, t);
                        if (!r) return;
                        e = r.context.state, n = r.context.getters;
                    }
                    return "function" == typeof o ? o.call(this, e, n) : e[o];
                }, n[r].vuex = !0;
            }), n;
        }), M = A(function(t, e) {
            var n = {};
            return w(e).forEach(function(e) {
                var r = e.key, o = e.val;
                n[r] = function() {
                    for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                    var r = this.$store.commit;
                    if (t) {
                        var i = S(this.$store, 0, t);
                        if (!i) return;
                        r = i.context.commit;
                    }
                    return "function" == typeof o ? o.apply(this, [ r ].concat(e)) : r.apply(this.$store, [ o ].concat(e));
                };
            }), n;
        }), j = A(function(t, e) {
            var n = {};
            return w(e).forEach(function(e) {
                var r = e.key, o = e.val;
                o = t + o, n[r] = function() {
                    if (!t || S(this.$store, 0, t)) return this.$store.getters[o];
                }, n[r].vuex = !0;
            }), n;
        }), $ = A(function(t, e) {
            var n = {};
            return w(e).forEach(function(e) {
                var r = e.key, o = e.val;
                n[r] = function() {
                    for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                    var r = this.$store.dispatch;
                    if (t) {
                        var i = S(this.$store, 0, t);
                        if (!i) return;
                        r = i.context.dispatch;
                    }
                    return "function" == typeof o ? o.apply(this, [ r ].concat(e)) : r.apply(this.$store, [ o ].concat(e));
                };
            }), n;
        }), D = function(t) {
            return {
                mapState: I.bind(null, t),
                mapGetters: j.bind(null, t),
                mapMutations: M.bind(null, t),
                mapActions: $.bind(null, t)
            };
        }, B = {
            Store: T,
            install: b,
            version: "3.0.1",
            mapState: I,
            mapMutations: M,
            mapGetters: j,
            mapActions: $,
            createNamespacedHelpers: D
        };
        e.default = B;
    },
    "2f6c": function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = r(n("9682")), i = r(n("6bca")), a = r(n("6c47")), u = r(n("92a7")), s = r(n("76a8")), c = r(n("4cc3")), f = r(n("c69d")), l = r(n("7658")), h = {
            left: o.default,
            down: a.default,
            rotate: u.default,
            right: i.default,
            space: s.default,
            r: f.default,
            p: l.default,
            s: c.default
        };
        e.default = h;
    },
    "31fa": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {}, o = {
            down: function(t) {
                if (Object.keys(r).forEach(function(t) {
                    clearTimeout(r[t]), r[t] = null;
                }), t.callback) {
                    var e = function() {
                        clearTimeout(r[t.key]);
                    };
                    if (t.callback(e), !0 !== t.once) {
                        var n = t.begin || 100, o = t.interval || 50;
                        !function i() {
                            r[t.key] = setTimeout(function() {
                                n = null, i(), t.callback(e);
                            }, n || o);
                        }();
                    }
                }
            },
            up: function(t) {
                clearTimeout(r[t.key]), r[t.key] = null, t.callback && t.callback();
            },
            clearAll: function() {
                Object.keys(r).forEach(function(t) {
                    clearTimeout(r[t]), r[t] = null;
                });
            }
        };
        e.default = o;
    },
    3558: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("3b26")).default);
        }).call(this, n("543d").createPage);
    },
    "364e": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("f4c4")).default);
        }).call(this, n("543d").createPage);
    },
    "3ace": function(t, e, n) {
        n.r(e);
        var r = n("7faa"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    "3c35": function(t, e) {
        (function(e) {
            t.exports = e;
        }).call(this, {});
    },
    4362: function(t, e, n) {
        e.nextTick = function(t) {
            setTimeout(t, 0);
        }, e.platform = e.arch = e.execPath = e.title = "browser", e.pid = 1, e.browser = !0, 
        e.env = {}, e.argv = [], e.binding = function(t) {
            throw new Error("No such module. (Possibly not yet loaded)");
        }, function() {
            var t, r = "/";
            e.cwd = function() {
                return r;
            }, e.chdir = function(e) {
                t || (t = n("df7c")), r = t.resolve(e, r);
            };
        }(), e.exit = e.kill = e.umask = e.dlopen = e.uptime = e.memoryUsage = e.uvCounters = function() {}, 
        e.features = {};
    },
    4752: function(t, e, n) {
        function r(t) {
            if (0 === t.indexOf("_www") || 0 === t.indexOf("_doc") || 0 === t.indexOf("_documents") || 0 === t.indexOf("_downloads")) return t;
            if (0 === t.indexOf("file://")) return t;
            if (0 === t.indexOf("/storage/emulated/0/")) return t;
            if (0 === t.indexOf("/")) {
                var e = plus.io.convertAbsoluteFileSystem(t);
                if (e !== t) return e;
                t = t.substr(1);
            }
            return "_www/" + t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.pathToBase64 = function(t) {
            return new Promise(function(e, n) {
                if ("object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && "document" in window) {
                    var o = document.createElement("canvas"), i = o.getContext("2d"), a = new Image();
                    return a.onload = function() {
                        o.width = a.width, o.height = a.height, i.drawImage(a, 0, 0), e(o.toDataURL());
                    }, a.onerror = n, void (a.src = t);
                }
                "object" !== ("undefined" == typeof plus ? "undefined" : _typeof(plus)) ? "object" === ("undefined" == typeof wx ? "undefined" : _typeof(wx)) && wx.canIUse("getFileSystemManager") ? wx.getFileSystemManager().readFile({
                    filePath: t,
                    encoding: "base64",
                    success: function(t) {
                        e("data:image/png;base64," + t.data);
                    },
                    fail: function(t) {
                        n(t);
                    }
                }) : n(new Error("not support")) : plus.io.resolveLocalFileSystemURL(r(t), function(t) {
                    t.file(function(t) {
                        var r = new plus.io.FileReader();
                        r.onload = function(t) {
                            e(t.target.result);
                        }, r.onerror = function(t) {
                            n(t);
                        }, r.readAsDataURL(t);
                    }, function(t) {
                        n(t);
                    });
                }, function(t) {
                    n(t);
                });
            });
        }, e.base64ToPath = function(t) {
            return new Promise(function(e, n) {
                if ("object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && "document" in window) {
                    for (var r = (t = t.split(","))[0].match(/:(.*?);/)[1], o = atob(t[1]), i = o.length, a = new Uint8Array(i); i--; ) a[i] = o.charCodeAt(i);
                    return e((window.URL || window.webkitURL).createObjectURL(new Blob([ a ], {
                        type: r
                    })));
                }
                var u = t.match(/data\:\S+\/(\S+);/);
                u ? u = u[1] : n(new Error("base64 error"));
                var s = Date.now() + "." + u;
                if ("object" !== ("undefined" == typeof plus ? "undefined" : _typeof(plus))) if ("object" === ("undefined" == typeof wx ? "undefined" : _typeof(wx)) && wx.canIUse("getFileSystemManager")) {
                    var c = wx.env.USER_DATA_PATH + "/" + s;
                    wx.getFileSystemManager().writeFile({
                        filePath: c,
                        data: t.replace(/^data:\S+\/\S+;base64,/, ""),
                        encoding: "base64",
                        success: function() {
                            e(c);
                        },
                        fail: function(t) {
                            n(t);
                        }
                    });
                } else n(new Error("not support")); else {
                    var f = new plus.nativeObj.Bitmap("bitmap" + Date.now());
                    f.loadBase64Data(t, function() {
                        var t = "_doc/uniapp_temp/" + s;
                        f.save(t, {}, function() {
                            f.clear(), e(t);
                        }, function(t) {
                            f.clear(), n(t);
                        });
                    }, function(t) {
                        f.clear(), n(t);
                    });
                }
            });
        };
    },
    "47f3": function(t, e, n) {
        n.r(e);
        var r = n("c019"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    "4cc3": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("31fa")), o = {
            down: function(t) {
                t.commit("key_music", !0), t.state.lock || r.default.down({
                    key: "s",
                    once: !0,
                    callback: function() {
                        t.state.lock || t.commit("music", !t.state.music);
                    }
                });
            },
            up: function(t) {
                t.commit("key_music", !1), r.default.up({
                    key: "s"
                });
            }
        };
        e.default = o;
    },
    "51a0": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("b869")).default);
        }).call(this, n("543d").createPage);
    },
    "543d": function(t, e, n) {
        function r(t, e) {
            return a(t) || i(t, e) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function i(t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), 
                !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t;
            } finally {
                try {
                    r || null == u.return || u.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }
        function a(t) {
            if (Array.isArray(t)) return t;
        }
        function u(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function s(t) {
            return "function" == typeof t;
        }
        function c(t) {
            return "string" == typeof t;
        }
        function f(t) {
            return "[object Object]" === ft.call(t);
        }
        function l(t, e) {
            return lt.call(t, e);
        }
        function h() {}
        function p(t) {
            var e = Object.create(null);
            return function(n) {
                return e[n] || (e[n] = t(n));
            };
        }
        function d(t) {
            return vt.test(t);
        }
        function v(t) {
            return dt.test(t);
        }
        function _(t) {
            return _t.test(t);
        }
        function y(t) {
            return t.then(function(t) {
                return [ null, t ];
            }).catch(function(t) {
                return [ t ];
            });
        }
        function m(t) {
            return !(d(t) || v(t) || _(t));
        }
        function g(t, e) {
            return m(t) ? function() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                return s(t.success) || s(t.fail) || s(t.complete) ? e.apply(void 0, [ t ].concat(r)) : y(new Promise(function(n, o) {
                    e.apply(void 0, [ Object.assign({}, t, {
                        success: n,
                        fail: o
                    }) ].concat(r)), Promise.prototype.finally || (Promise.prototype.finally = function(t) {
                        var e = this.constructor;
                        return this.then(function(n) {
                            return e.resolve(t()).then(function() {
                                return n;
                            });
                        }, function(n) {
                            return e.resolve(t()).then(function() {
                                throw n;
                            });
                        });
                    });
                }));
            } : e;
        }
        function b() {
            var t = wx.getSystemInfoSync(), e = t.platform, n = t.pixelRatio, r = t.windowWidth;
            bt = r, wt = n, gt = "ios" === e;
        }
        function w(t, e) {
            if (0 === bt && b(), 0 === (t = Number(t))) return 0;
            var n = t / mt * (e || bt);
            return n < 0 && (n = -n), 0 === (n = Math.floor(n + yt)) ? 1 !== wt && gt ? .5 : 1 : t < 0 ? -n : n;
        }
        function A(t, e, n) {
            return function(r) {
                return e(k(t, r, n));
            };
        }
        function S(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (f(e)) {
                var i = !0 === o ? e : {};
                for (var a in s(n) && (n = n(e, i) || {}), e) if (l(n, a)) {
                    var u = n[a];
                    s(u) && (u = u(e[a], e, i)), u ? c(u) ? i[u] = e[a] : f(u) && (i[u.name ? u.name : a] = u.value) : console.warn("微信小程序 ".concat(t, "暂不支持").concat(a));
                } else -1 !== Et.indexOf(a) ? i[a] = A(t, e[a], r) : o || (i[a] = e[a]);
                return i;
            }
            return s(e) && (e = A(t, e, r)), e;
        }
        function k(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return s(At.returnValue) && (e = At.returnValue(t, e)), S(t, e, n, {}, r);
        }
        function E(t, e) {
            if (l(At, t)) {
                var n = At[t];
                return n ? function(e, r) {
                    var o = n;
                    s(n) && (o = n(e));
                    var i = [ e = S(t, e, o.args, o.returnValue) ];
                    void 0 !== r && i.push(r);
                    var a = wx[o.name || t].apply(wx, i);
                    return v(t) ? k(t, a, o.returnValue, d(t)) : a;
                } : function() {
                    console.error("微信小程序 暂不支持".concat(t));
                };
            }
            return e;
        }
        function x(t) {
            return function(e) {
                var n = e.fail, r = e.complete, o = {
                    errMsg: "".concat(t, ":fail:暂不支持 ").concat(t, " 方法")
                };
                s(n) && n(o), s(r) && r(o);
            };
        }
        function O(t, e, n) {
            return t[e].apply(t, n);
        }
        function R(t) {
            if (wx.canIUse("nextTick")) {
                var e = t.triggerEvent;
                t.triggerEvent = function(n) {
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    return e.apply(t, [ $t(n) ].concat(o));
                };
            }
        }
        function C(t, e) {
            var n = e[t];
            e[t] = n ? function() {
                R(this);
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return n.apply(this, e);
            } : function() {
                R(this);
            };
        }
        function T(t, e) {
            var n = t.$mp[t.mpType];
            e.forEach(function(e) {
                l(n, e) && (t[e] = n[e]);
            });
        }
        function P(t, e) {
            if (!e) return !0;
            if (ct.default.options && Array.isArray(ct.default.options[t])) return !0;
            if (e = e.default || e, s(e)) return !!s(e.extendOptions[t]) || !!(e.super && e.super.options && Array.isArray(e.super.options[t]));
            if (s(e[t])) return !0;
            var n = e.mixins;
            return Array.isArray(n) ? !!n.find(function(e) {
                return P(t, e);
            }) : void 0;
        }
        function I(t, e, n) {
            e.forEach(function(e) {
                P(e, n) && (t[e] = function(t) {
                    return this.$vm && this.$vm.__call_hook(e, t);
                });
            });
        }
        function M(t, e) {
            var n;
            return e = e.default || e, s(e) ? (n = e, e = n.extendOptions) : n = t.extend(e), 
            [ n, e ];
        }
        function j(t, e) {
            if (Array.isArray(e) && e.length) {
                var n = Object.create(null);
                e.forEach(function(t) {
                    n[t] = !0;
                }), t.$scopedSlots = t.$slots = n;
            }
        }
        function $(t, e) {
            var n = (t = (t || "").split(",")).length;
            1 === n ? e._$vueId = t[0] : 2 === n && (e._$vueId = t[0], e._$vuePid = t[1]);
        }
        function D(t, e) {
            var n = t.data || {}, r = t.methods || {};
            if ("function" == typeof n) try {
                n = n.call(e);
            } catch (t) {
                Object({
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
            } else try {
                n = JSON.parse(JSON.stringify(n));
            } catch (t) {}
            return f(n) || (n = {}), Object.keys(r).forEach(function(t) {
                -1 !== e.__lifecycle_hooks__.indexOf(t) || l(n, t) || (n[t] = r[t]);
            }), n;
        }
        function B(t) {
            return function(e, n) {
                this.$vm && (this.$vm[t] = e);
            };
        }
        function L(t, e) {
            var n = t.behaviors, r = t.extends, o = t.mixins, i = t.props;
            i || (t.props = i = []);
            var a = [];
            return Array.isArray(n) && n.forEach(function(t) {
                a.push(t.replace("uni://", "wx".concat("://"))), "uni://form-field" === t && (Array.isArray(i) ? (i.push("name"), 
                i.push("value")) : (i.name = {
                    type: String,
                    default: ""
                }, i.value = {
                    type: [ String, Number, Boolean, Array, Object, Date ],
                    default: ""
                }));
            }), f(r) && r.props && a.push(e({
                properties: z(r.props, !0)
            })), Array.isArray(o) && o.forEach(function(t) {
                f(t) && t.props && a.push(e({
                    properties: z(t.props, !0)
                }));
            }), a;
        }
        function U(t, e, n, r) {
            return Array.isArray(e) && 1 === e.length ? e[0] : e;
        }
        function z(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", r = {};
            return e || (r.vueId = {
                type: String,
                value: ""
            }, r.vueSlots = {
                type: null,
                value: [],
                observer: function(t, e) {
                    var n = Object.create(null);
                    t.forEach(function(t) {
                        n[t] = !0;
                    }), this.setData({
                        $slots: n
                    });
                }
            }), Array.isArray(t) ? t.forEach(function(t) {
                r[t] = {
                    type: null,
                    observer: B(t)
                };
            }) : f(t) && Object.keys(t).forEach(function(e) {
                var o = t[e];
                if (f(o)) {
                    var i = o.default;
                    s(i) && (i = i()), o.type = U(e, o.type, i, n), r[e] = {
                        type: -1 !== Bt.indexOf(o.type) ? o.type : null,
                        value: i,
                        observer: B(e)
                    };
                } else {
                    var a = U(e, o, null, n);
                    r[e] = {
                        type: -1 !== Bt.indexOf(a) ? a : null,
                        observer: B(e)
                    };
                }
            }), r;
        }
        function N(t) {
            try {
                t.mp = JSON.parse(JSON.stringify(t));
            } catch (t) {}
            return t.stopPropagation = h, t.preventDefault = h, t.target = t.target || {}, l(t, "detail") || (t.detail = {}), 
            f(t.detail) && (t.target = Object.assign({}, t.target, t.detail)), t;
        }
        function q(t, e) {
            var n = t;
            return e.forEach(function(e) {
                var r = e[0], o = e[2];
                if (r || void 0 !== o) {
                    var i = e[1], a = e[3], u = r ? t.__get_value(r, n) : n;
                    Number.isInteger(u) ? n = o : i ? Array.isArray(u) ? n = u.find(function(e) {
                        return t.__get_value(i, e) === o;
                    }) : f(u) ? n = Object.keys(u).find(function(e) {
                        return t.__get_value(i, u[e]) === o;
                    }) : console.error("v-for 暂不支持循环数据：", u) : n = u[o], a && (n = t.__get_value(a, n));
                }
            }), n;
        }
        function F(t, e, n) {
            var r = {};
            return Array.isArray(e) && e.length && e.forEach(function(e, o) {
                "string" == typeof e ? e ? "$event" === e ? r["$" + o] = n : 0 === e.indexOf("$event.") ? r["$" + o] = t.__get_value(e.replace("$event.", ""), n) : r["$" + o] = t.__get_value(e) : r["$" + o] = t : r["$" + o] = q(t, e);
            }), r;
        }
        function H(t) {
            for (var e = {}, n = 1; n < t.length; n++) {
                var r = t[n];
                e[r[0]] = r[1];
            }
            return e;
        }
        function W(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, a = !1;
            if (o && (a = e.currentTarget && e.currentTarget.dataset && "wx" === e.currentTarget.dataset.comType, 
            !n.length)) return a ? [ e ] : e.detail.__args__ || e.detail;
            var u = F(t, r, e), s = [];
            return n.forEach(function(t) {
                "$event" === t ? "__set_model" !== i || o ? o && !a ? s.push(e.detail.__args__[0]) : s.push(e) : s.push(e.target.value) : Array.isArray(t) && "o" === t[0] ? s.push(H(t)) : "string" == typeof t && l(u, t) ? s.push(u[t]) : s.push(t);
            }), s;
        }
        function V(t, e) {
            return t === e || "regionchange" === e && ("begin" === t || "end" === t);
        }
        function Y(t) {
            var e = this, n = ((t = N(t)).currentTarget || t.target).dataset;
            if (!n) return console.warn("事件信息不存在");
            var r = n.eventOpts || n["event-opts"];
            if (!r) return console.warn("事件信息不存在");
            var o = t.type;
            r.forEach(function(n) {
                var r = n[0], i = n[1], a = r.charAt(0) === Ut, u = (r = a ? r.slice(1) : r).charAt(0) === Lt;
                r = u ? r.slice(1) : r, i && V(o, r) && i.forEach(function(n) {
                    var r = n[0];
                    if (r) {
                        var o = e.$vm;
                        o.$options.generic && o.$parent && o.$parent.$parent && (o = o.$parent.$parent);
                        var i = o[r];
                        if (!s(i)) throw new Error(" _vm.".concat(r, " is not a function"));
                        if (u) {
                            if (i.once) return;
                            i.once = !0;
                        }
                        i.apply(o, W(e.$vm, t, n[1], n[2], a, r));
                    }
                });
            });
        }
        function J(t, e) {
            var n = e.mocks, r = e.initRefs;
            ct.default.prototype.mpHost = "mp-weixin", ct.default.mixin({
                beforeCreate: function() {
                    this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = u({
                        data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                    delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (r(this), 
                    T(this, n)));
                }
            });
            var o = {
                onLaunch: function(e) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                    this.$vm = t, this.$vm.$mp = {
                        app: this
                    }, this.$vm.$scope = this, this.$vm._isMounted = !0, this.$vm.__call_hook("mounted", e), 
                    this.$vm.__call_hook("onLaunch", e));
                }
            };
            return o.globalData = t.$options.globalData || {}, I(o, zt), o;
        }
        function K(t, e) {
            var n = t.$children, r = n.find(function(t) {
                return t.$scope._$vueId === e;
            });
            if (r) return r;
            for (var o = n.length - 1; o >= 0; o--) if (r = K(n[o], e)) return r;
        }
        function X(t) {
            return Behavior(t);
        }
        function G() {
            return !!this.route;
        }
        function Q(t) {
            this.triggerEvent("__l", t);
        }
        function Z(t) {
            var e = t.$scope;
            Object.defineProperty(t, "$refs", {
                get: function() {
                    var t = {};
                    return e.selectAllComponents(".vue-ref").forEach(function(e) {
                        var n = e.dataset.ref;
                        t[n] = e.$vm || e;
                    }), e.selectAllComponents(".vue-ref-in-for").forEach(function(e) {
                        var n = e.dataset.ref;
                        t[n] || (t[n] = []), t[n].push(e.$vm || e);
                    }), t;
                }
            });
        }
        function tt(t) {
            var e, n = t.detail || t.value, r = n.vuePid, o = n.vueOptions;
            r && (e = K(this.$vm, r)), e || (e = this.$vm), o.parent = e;
        }
        function et(t) {
            return J(t, {
                mocks: Nt,
                initRefs: Z
            });
        }
        function nt(t) {
            return App(et(t)), t;
        }
        function rt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.isPage, o = e.initRelation, i = r(M(ct.default, t), 2), a = i[0], u = i[1], s = {
                options: {
                    multipleSlots: !0,
                    addGlobalClass: !0
                },
                data: D(u, ct.default.prototype),
                behaviors: L(u, X),
                properties: z(u.props, !1, u.__file),
                lifetimes: {
                    attached: function() {
                        var t = this.properties, e = {
                            mpType: n.call(this) ? "page" : "component",
                            mpInstance: this,
                            propsData: t
                        };
                        $(t.vueId, this), o.call(this, {
                            vuePid: this._$vuePid,
                            vueOptions: e
                        }), this.$vm = new a(e), j(this.$vm, t.vueSlots), this.$vm.$mount();
                    },
                    ready: function() {
                        this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                    },
                    detached: function() {
                        this.$vm.$destroy();
                    }
                },
                pageLifetimes: {
                    show: function(t) {
                        this.$vm && this.$vm.__call_hook("onPageShow", t);
                    },
                    hide: function() {
                        this.$vm && this.$vm.__call_hook("onPageHide");
                    },
                    resize: function(t) {
                        this.$vm && this.$vm.__call_hook("onPageResize", t);
                    }
                },
                methods: {
                    __l: tt,
                    __e: Y
                }
            };
            return n ? s : [ s, a ];
        }
        function ot(t) {
            return rt(t, {
                isPage: G,
                initRelation: Q
            });
        }
        function it(t, e) {
            var n = ot(t, {
                isPage: e.isPage,
                initRelation: e.initRelation
            });
            return I(n.methods, qt, t), n.methods.onLoad = function(t) {
                this.$vm.$mp.query = t, this.$vm.__call_hook("onLoad", t);
            }, n;
        }
        function at(t) {
            return it(t, {
                isPage: G,
                initRelation: Q
            });
        }
        function ut(t) {
            return Component(at(t));
        }
        function st(t) {
            return Component(ot(t));
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.createApp = nt, e.createPage = ut, e.createComponent = st, e.default = void 0;
        var ct = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("66fd")), ft = Object.prototype.toString, lt = Object.prototype.hasOwnProperty, ht = /-(\w)/g, pt = p(function(t) {
            return t.replace(ht, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        }), dt = /^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, vt = /^create|Manager$/, _t = /^on/, yt = 1e-4, mt = 750, gt = !1, bt = 0, wt = 0, At = {
            previewImage: {
                args: function(t) {
                    var e = parseInt(t.current);
                    if (!isNaN(e)) {
                        var n = t.urls;
                        if (Array.isArray(n)) {
                            var r = n.length;
                            if (r) return e < 0 ? e = 0 : e >= r && (e = r - 1), e > 0 ? (t.current = n[e], 
                            t.urls = n.filter(function(t, r) {
                                return !(r < e) || t !== n[e];
                            })) : t.current = n[0], {
                                indicator: !1,
                                loop: !1
                            };
                        }
                    }
                }
            }
        }, St = [], kt = [], Et = [ "success", "fail", "cancel", "complete" ], xt = Object.create(null);
        [ "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(t) {
            xt[t] = x(t);
        });
        var Ot = {
            oauth: [ "weixin" ],
            share: [ "weixin" ],
            payment: [ "wxpay" ],
            push: [ "weixin" ]
        }, Rt = Object.freeze({
            getProvider: function(t) {
                var e = t.service, n = t.success, r = t.fail, o = t.complete, i = !1;
                Ot[e] ? (i = {
                    errMsg: "getProvider:ok",
                    service: e,
                    provider: Ot[e]
                }, s(n) && n(i)) : (i = {
                    errMsg: "getProvider:fail:服务[" + e + "]不存在"
                }, s(r) && r(i)), s(o) && o(i);
            }
        }), Ct = function() {
            return "function" == typeof getUniEmitter ? getUniEmitter : function() {
                return t || (t = new ct.default()), t;
            };
            var t;
        }(), Tt = Object.freeze({
            $on: function() {
                return O(Ct(), "$on", Array.prototype.slice.call(arguments));
            },
            $off: function() {
                return O(Ct(), "$off", Array.prototype.slice.call(arguments));
            },
            $once: function() {
                return O(Ct(), "$once", Array.prototype.slice.call(arguments));
            },
            $emit: function() {
                return O(Ct(), "$emit", Array.prototype.slice.call(arguments));
            }
        }), Pt = Object.freeze({}), It = Page, Mt = Component, jt = /:/g, $t = p(function(t) {
            return pt(t.replace(jt, "-"));
        });
        Page = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C("onLoad", t), It(t);
        }, Component = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C("created", t), Mt(t);
        };
        var Dt = [ "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ], Bt = [ String, Number, Boolean, Object, Array, null ], Lt = "~", Ut = "^", zt = [ "onShow", "onHide", "onError", "onPageNotFound" ], Nt = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ], qt = [ "onShow", "onHide", "onUnload" ];
        qt.push.apply(qt, Dt), St.forEach(function(t) {
            At[t] = !1;
        }), kt.forEach(function(t) {
            var e = At[t] && At[t].name ? At[t].name : t;
            wx.canIUse(e) || (At[t] = !1);
        });
        var Ft = {};
        "undefined" != typeof Proxy ? Ft = new Proxy({}, {
            get: function(t, e) {
                return "upx2px" === e ? w : Pt[e] ? g(e, Pt[e]) : Rt[e] ? g(e, Rt[e]) : xt[e] ? g(e, xt[e]) : Tt[e] ? Tt[e] : l(wx, e) || l(At, e) ? g(e, E(e, wx[e])) : void 0;
            }
        }) : (Ft.upx2px = w, Object.keys(xt).forEach(function(t) {
            Ft[t] = g(t, xt[t]);
        }), Object.keys(Rt).forEach(function(t) {
            Ft[t] = g(t, xt[t]);
        }), Object.keys(Tt).forEach(function(t) {
            Ft[t] = Tt[t];
        }), Object.keys(Pt).forEach(function(t) {
            Ft[t] = g(t, Pt[t]);
        }), Object.keys(wx).forEach(function(t) {
            (l(wx, t) || l(At, t)) && (Ft[t] = g(t, E(t, wx[t])));
        })), wx.createApp = nt, wx.createPage = ut, wx.createComponent = st;
        var Ht = Ft;
        e.default = Ht;
    },
    5655: function(t, e, n) {
        function r(t) {
            return a(t) || i(t) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function i(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        }
        function a(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = n("f6b1"), s = {
            I: [ 1, 0 ],
            L: [ 0, 0 ],
            J: [ 0, 0 ],
            Z: [ 0, 0 ],
            S: [ 0, 0 ],
            O: [ 0, 1 ],
            T: [ 0, 0 ]
        }, c = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ], f = {
            props: [ "dat" ],
            mounted: function() {
                this.build(this.dat);
            },
            data: function() {
                return {
                    block: c
                };
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function(t) {
                        this.build(t.dat);
                    }
                }
            },
            methods: {
                build: function(t) {
                    var e = u.blockShape[t], n = c.map(function(t) {
                        return r(t);
                    });
                    e.forEach(function(e, r) {
                        e.forEach(function(e, o) {
                            e && (n[r + s[t][0]][o + s[t][1]] = 1);
                        });
                    }), this.block = n;
                }
            }
        };
        e.default = f;
    },
    "57f2": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("e91b")).default);
        }).call(this, n("543d").createPage);
    },
    "58ea": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("a832")).default);
        }).call(this, n("543d").createPage);
    },
    "5c85": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("8616")).default);
        }).call(this, n("543d").createPage);
    },
    "5d84": function(t, e, n) {
        n.r(e);
        var r = n("e084"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    "630e": function(t, e, n) {
        function r(t) {
            this.key = t.key, this.requestConfig = {
                key: t.key,
                s: "rsx",
                platform: "WXJS",
                appname: t.key,
                sdkversion: "1.2.0",
                logversion: "2.0"
            };
        }
        r.prototype.getWxLocation = function(t, e) {
            wx.getLocation({
                type: "gcj02",
                success: function(t) {
                    var n = t.longitude + "," + t.latitude;
                    wx.setStorage({
                        key: "userLocation",
                        data: n
                    }), e(n);
                },
                fail: function(n) {
                    wx.getStorage({
                        key: "userLocation",
                        success: function(t) {
                            t.data && e(t.data);
                        }
                    }), t.fail({
                        errCode: "0",
                        errMsg: n.errMsg || ""
                    });
                }
            });
        }, r.prototype.getRegeo = function(t) {
            function e(e) {
                var r = n.requestConfig;
                wx.request({
                    url: "https://restapi.amap.com/v3/geocode/regeo",
                    data: {
                        key: n.key,
                        location: e,
                        extensions: "all",
                        s: r.s,
                        platform: r.platform,
                        appname: n.key,
                        sdkversion: r.sdkversion,
                        logversion: r.logversion
                    },
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(n) {
                        var r, o, i, a, u, s, c, f, l;
                        n.data.status && "1" == n.data.status ? (r = n.data.regeocode, o = r.addressComponent, 
                        i = [], a = "", r && r.roads[0] && r.roads[0].name && (a = r.roads[0].name + "附近"), 
                        u = e.split(",")[0], s = e.split(",")[1], r.pois && r.pois[0] && (a = r.pois[0].name + "附近", 
                        (c = r.pois[0].location) && (u = parseFloat(c.split(",")[0]), s = parseFloat(c.split(",")[1]))), 
                        o.provice && i.push(o.provice), o.city && i.push(o.city), o.district && i.push(o.district), 
                        o.streetNumber && o.streetNumber.street && o.streetNumber.number ? (i.push(o.streetNumber.street), 
                        i.push(o.streetNumber.number)) : (f = "", r && r.roads[0] && r.roads[0].name && (f = r.roads[0].name), 
                        i.push(f)), i = i.join(""), l = [ {
                            iconPath: t.iconPath,
                            width: t.iconWidth,
                            height: t.iconHeight,
                            name: i,
                            desc: a,
                            longitude: u,
                            latitude: s,
                            id: 0,
                            regeocodeData: r
                        } ], t.success(l)) : t.fail({
                            errCode: n.data.infocode,
                            errMsg: n.data.info
                        });
                    },
                    fail: function(e) {
                        t.fail({
                            errCode: "0",
                            errMsg: e.errMsg || ""
                        });
                    }
                });
            }
            var n = this;
            t.location ? e(t.location) : n.getWxLocation(t, function(t) {
                e(t);
            });
        }, r.prototype.getWeather = function(t) {
            function e(e) {
                var n = "base";
                t.type && "forecast" == t.type && (n = "all"), wx.request({
                    url: "https://restapi.amap.com/v3/weather/weatherInfo",
                    data: {
                        key: r.key,
                        city: e,
                        extensions: n,
                        s: o.s,
                        platform: o.platform,
                        appname: r.key,
                        sdkversion: o.sdkversion,
                        logversion: o.logversion
                    },
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        var n, r;
                        e.data.status && "1" == e.data.status ? e.data.lives ? (n = e.data.lives) && n.length > 0 && (n = n[0], 
                        r = function(t) {
                            return {
                                city: {
                                    text: "城市",
                                    data: t.city
                                },
                                weather: {
                                    text: "天气",
                                    data: t.weather
                                },
                                temperature: {
                                    text: "温度",
                                    data: t.temperature
                                },
                                winddirection: {
                                    text: "风向",
                                    data: t.winddirection + "风"
                                },
                                windpower: {
                                    text: "风力",
                                    data: t.windpower + "级"
                                },
                                humidity: {
                                    text: "湿度",
                                    data: t.humidity + "%"
                                }
                            };
                        }(n), r.liveData = n, t.success(r)) : e.data.forecasts && e.data.forecasts[0] && t.success({
                            forecast: e.data.forecasts[0]
                        }) : t.fail({
                            errCode: e.data.infocode,
                            errMsg: e.data.info
                        });
                    },
                    fail: function(e) {
                        t.fail({
                            errCode: "0",
                            errMsg: e.errMsg || ""
                        });
                    }
                });
            }
            function n(n) {
                wx.request({
                    url: "https://restapi.amap.com/v3/geocode/regeo",
                    data: {
                        key: r.key,
                        location: n,
                        extensions: "all",
                        s: o.s,
                        platform: o.platform,
                        appname: r.key,
                        sdkversion: o.sdkversion,
                        logversion: o.logversion
                    },
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(n) {
                        var r, o;
                        n.data.status && "1" == n.data.status ? ((o = n.data.regeocode).addressComponent ? r = o.addressComponent.adcode : o.aois && o.aois.length > 0 && (r = o.aois[0].adcode), 
                        e(r)) : t.fail({
                            errCode: n.data.infocode,
                            errMsg: n.data.info
                        });
                    },
                    fail: function(e) {
                        t.fail({
                            errCode: "0",
                            errMsg: e.errMsg || ""
                        });
                    }
                });
            }
            var r = this, o = r.requestConfig;
            t.city ? e(t.city) : r.getWxLocation(t, function(t) {
                n(t);
            });
        }, r.prototype.getPoiAround = function(t) {
            function e(e) {
                var o = {
                    key: n.key,
                    location: e,
                    s: r.s,
                    platform: r.platform,
                    appname: n.key,
                    sdkversion: r.sdkversion,
                    logversion: r.logversion
                };
                t.querytypes && (o.types = t.querytypes), t.querykeywords && (o.keywords = t.querykeywords), 
                wx.request({
                    url: "https://restapi.amap.com/v3/place/around",
                    data: o,
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        var n, r, o, i;
                        if (e.data.status && "1" == e.data.status) {
                            if ((e = e.data) && e.pois) {
                                for (n = [], r = 0; r < e.pois.length; r++) o = 0 == r ? t.iconPathSelected : t.iconPath, 
                                n.push({
                                    latitude: parseFloat(e.pois[r].location.split(",")[1]),
                                    longitude: parseFloat(e.pois[r].location.split(",")[0]),
                                    iconPath: o,
                                    width: 22,
                                    height: 32,
                                    id: r,
                                    name: e.pois[r].name,
                                    address: e.pois[r].address
                                });
                                i = {
                                    markers: n,
                                    poisData: e.pois
                                }, t.success(i);
                            }
                        } else t.fail({
                            errCode: e.data.infocode,
                            errMsg: e.data.info
                        });
                    },
                    fail: function(e) {
                        t.fail({
                            errCode: "0",
                            errMsg: e.errMsg || ""
                        });
                    }
                });
            }
            var n = this, r = n.requestConfig;
            t.location ? e(t.location) : n.getWxLocation(t, function(t) {
                e(t);
            });
        }, r.prototype.getStaticmap = function(t) {
            function e(e) {
                o.push("location=" + e), t.zoom && o.push("zoom=" + t.zoom), t.size && o.push("size=" + t.size), 
                t.scale && o.push("scale=" + t.scale), t.markers && o.push("markers=" + t.markers), 
                t.labels && o.push("labels=" + t.labels), t.paths && o.push("paths=" + t.paths), 
                t.traffic && o.push("traffic=" + t.traffic);
                var n = i + o.join("&");
                t.success({
                    url: n
                });
            }
            var n, r = this, o = [], i = "https://restapi.amap.com/v3/staticmap?";
            o.push("key=" + r.key), n = r.requestConfig, o.push("s=" + n.s), o.push("platform=" + n.platform), 
            o.push("appname=" + n.appname), o.push("sdkversion=" + n.sdkversion), o.push("logversion=" + n.logversion), 
            t.location ? e(t.location) : r.getWxLocation(t, function(t) {
                e(t);
            });
        }, r.prototype.getInputtips = function(t) {
            var e = this, n = e.requestConfig, r = {
                key: e.key,
                s: n.s,
                platform: n.platform,
                appname: e.key,
                sdkversion: n.sdkversion,
                logversion: n.logversion
            };
            t.location && (r.location = t.location), t.keywords && (r.keywords = t.keywords), 
            t.type && (r.type = t.type), t.city && (r.city = t.city), t.citylimit && (r.citylimit = t.citylimit), 
            wx.request({
                url: "https://restapi.amap.com/v3/assistant/inputtips",
                data: r,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    e && e.data && e.data.tips && t.success({
                        tips: e.data.tips
                    });
                },
                fail: function(e) {
                    t.fail({
                        errCode: "0",
                        errMsg: e.errMsg || ""
                    });
                }
            });
        }, r.prototype.getDrivingRoute = function(t) {
            var e = this, n = e.requestConfig, r = {
                key: e.key,
                s: n.s,
                platform: n.platform,
                appname: e.key,
                sdkversion: n.sdkversion,
                logversion: n.logversion
            };
            t.origin && (r.origin = t.origin), t.destination && (r.destination = t.destination), 
            t.strategy && (r.strategy = t.strategy), t.waypoints && (r.waypoints = t.waypoints), 
            t.avoidpolygons && (r.avoidpolygons = t.avoidpolygons), t.avoidroad && (r.avoidroad = t.avoidroad), 
            wx.request({
                url: "https://restapi.amap.com/v3/direction/driving",
                data: r,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    e && e.data && e.data.route && t.success({
                        paths: e.data.route.paths,
                        taxi_cost: e.data.route.taxi_cost || ""
                    });
                },
                fail: function(e) {
                    t.fail({
                        errCode: "0",
                        errMsg: e.errMsg || ""
                    });
                }
            });
        }, r.prototype.getWalkingRoute = function(t) {
            var e = this, n = e.requestConfig, r = {
                key: e.key,
                s: n.s,
                platform: n.platform,
                appname: e.key,
                sdkversion: n.sdkversion,
                logversion: n.logversion
            };
            t.origin && (r.origin = t.origin), t.destination && (r.destination = t.destination), 
            wx.request({
                url: "https://restapi.amap.com/v3/direction/walking",
                data: r,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    e && e.data && e.data.route && t.success({
                        paths: e.data.route.paths
                    });
                },
                fail: function(e) {
                    t.fail({
                        errCode: "0",
                        errMsg: e.errMsg || ""
                    });
                }
            });
        }, r.prototype.getTransitRoute = function(t) {
            var e = this, n = e.requestConfig, r = {
                key: e.key,
                s: n.s,
                platform: n.platform,
                appname: e.key,
                sdkversion: n.sdkversion,
                logversion: n.logversion
            };
            t.origin && (r.origin = t.origin), t.destination && (r.destination = t.destination), 
            t.strategy && (r.strategy = t.strategy), t.city && (r.city = t.city), t.cityd && (r.cityd = t.cityd), 
            wx.request({
                url: "https://restapi.amap.com/v3/direction/transit/integrated",
                data: r,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    if (e && e.data && e.data.route) {
                        var n = e.data.route;
                        t.success({
                            distance: n.distance || "",
                            taxi_cost: n.taxi_cost || "",
                            transits: n.transits
                        });
                    }
                },
                fail: function(e) {
                    t.fail({
                        errCode: "0",
                        errMsg: e.errMsg || ""
                    });
                }
            });
        }, r.prototype.getRidingRoute = function(t) {
            var e = this, n = e.requestConfig, r = {
                key: e.key,
                s: n.s,
                platform: n.platform,
                appname: e.key,
                sdkversion: n.sdkversion,
                logversion: n.logversion
            };
            t.origin && (r.origin = t.origin), t.destination && (r.destination = t.destination), 
            wx.request({
                url: "https://restapi.amap.com/v4/direction/bicycling",
                data: r,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    e && e.data && e.data.data && t.success({
                        paths: e.data.data.paths
                    });
                },
                fail: function(e) {
                    t.fail({
                        errCode: "0",
                        errMsg: e.errMsg || ""
                    });
                }
            });
        }, t.exports.AMapWX = r;
    },
    6493: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = n("a1c4"), o = n("7530"), i = n("f6b1"), a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("8ed7")), u = setTimeout, s = {
            props: [ "cur", "reset", "propMatrix" ],
            watch: {
                $props: {
                    handler: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        arguments.length > 1 && arguments[1], this.propsChange(t);
                    },
                    deep: !0
                }
            },
            computed: {
                matrix: function() {
                    return (this.isOver ? this.overState : this.getResult()).toJS() || [];
                }
            },
            data: function() {
                return {
                    clearLines: !1,
                    animateColor: 2,
                    isOver: !1,
                    overState: null
                };
            },
            methods: {
                propsChange: function(t) {
                    var e = this, n = (0, o.isClear)(t.propMatrix), r = t.reset;
                    setTimeout(function() {
                        e.clearLines = n, e.isOver = r;
                    }, 0), n && !this.clearLines && this.clearAnimate(n), n || !r || this.isOver || this.over(t);
                },
                getResult: function(t) {
                    t || (t = this.$props);
                    var e = t.cur, n = e && e.shape, o = (0, r.fromJS)(e && e.xy), i = (0, r.fromJS)(t.propMatrix), a = this.clearLines;
                    if (a) {
                        var u = this.animateColor;
                        a.forEach(function(t) {
                            i = i.set(t, (0, r.List)([ u, u, u, u, u, u, u, u, u, u ]));
                        });
                    } else n && n.forEach(function(t, e) {
                        return t.forEach(function(t, n) {
                            if (t && o.get(0) + e >= 0) {
                                var r, u = i.get(o.get(0) + e);
                                r = 1 !== u.get(o.get(1) + n) || a ? 1 : 2, u = u.set(o.get(1) + n, r), i = i.set(o.get(0) + e, u);
                            }
                        });
                    });
                    return i;
                },
                clearAnimate: function() {
                    var t = this, e = function(e) {
                        u(function() {
                            t.animateColor = 0, u(function() {
                                t.animateColor = 2, "function" == typeof e && e();
                            }, 100);
                        }, 100);
                    };
                    e(function() {
                        e(function() {
                            e(function() {
                                u(function() {
                                    a.default.clearLines(t.propMatrix, t.clearLines);
                                }, 100);
                            });
                        });
                    });
                },
                over: function(t) {
                    var e = this, n = this.getResult(t);
                    this.overState = n;
                    for (var o = 0; o <= 40; o++) u(function(t) {
                        if (t <= 19) n = n.set(19 - t, (0, r.List)(i.fillLine)); else {
                            if (!(t >= 20 && t <= 39)) return void a.default.overEnd();
                            n = n.set(t - 20, (0, r.List)(i.blankLine));
                        }
                        e.overState = n;
                    }.bind(null, o), 40 * (o + 1));
                }
            }
        };
        e.default = s;
    },
    "66fd": function(t, e, n) {
        n.r(e), function(t) {
            function n(t) {
                return void 0 === t || null === t;
            }
            function r(t) {
                return void 0 !== t && null !== t;
            }
            function o(t) {
                return !0 === t;
            }
            function i(t) {
                return !1 === t;
            }
            function a(t) {
                return "string" == typeof t || "number" == typeof t || "symbol" === (void 0 === t ? "undefined" : _typeof(t)) || "boolean" == typeof t;
            }
            function u(t) {
                return null !== t && "object" === (void 0 === t ? "undefined" : _typeof(t));
            }
            function s(t) {
                return "[object Object]" === _n.call(t);
            }
            function c(t) {
                return "[object RegExp]" === _n.call(t);
            }
            function f(t) {
                var e = parseFloat(String(t));
                return e >= 0 && Math.floor(e) === e && isFinite(t);
            }
            function l(t) {
                return r(t) && "function" == typeof t.then && "function" == typeof t.catch;
            }
            function h(t) {
                return null == t ? "" : Array.isArray(t) || s(t) && t.toString === _n ? JSON.stringify(t, null, 2) : String(t);
            }
            function p(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e;
            }
            function d(t, e) {
                for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                return e ? function(t) {
                    return n[t.toLowerCase()];
                } : function(t) {
                    return n[t];
                };
            }
            function v(t, e) {
                if (t.length) {
                    var n = t.indexOf(e);
                    if (n > -1) return t.splice(n, 1);
                }
            }
            function _(t, e) {
                return gn.call(t, e);
            }
            function y(t) {
                var e = Object.create(null);
                return function(n) {
                    return e[n] || (e[n] = t(n));
                };
            }
            function m(t, e) {
                e = e || 0;
                for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
                return r;
            }
            function g(t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            }
            function b(t) {
                for (var e = {}, n = 0; n < t.length; n++) t[n] && g(e, t[n]);
                return e;
            }
            function w(t, e, n) {}
            function A(t, e) {
                if (t === e) return !0;
                var n = u(t), r = u(e);
                if (!n || !r) return !n && !r && String(t) === String(e);
                try {
                    var o = Array.isArray(t), i = Array.isArray(e);
                    if (o && i) return t.length === e.length && t.every(function(t, n) {
                        return A(t, e[n]);
                    });
                    if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                    if (o || i) return !1;
                    var a = Object.keys(t), s = Object.keys(e);
                    return a.length === s.length && a.every(function(n) {
                        return A(t[n], e[n]);
                    });
                } catch (t) {
                    return !1;
                }
            }
            function S(t, e) {
                for (var n = 0; n < t.length; n++) if (A(t[n], e)) return n;
                return -1;
            }
            function k(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t.apply(this, arguments));
                };
            }
            function E(t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e;
            }
            function x(t, e, n, r) {
                Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                });
            }
            function O(t) {
                if (!In.test(t)) {
                    var e = t.split(".");
                    return function(t) {
                        for (var n = 0; n < e.length; n++) {
                            if (!t) return;
                            t = t[e[n]];
                        }
                        return t;
                    };
                }
            }
            function R(t) {
                return "function" == typeof t && /native code/.test(t.toString());
            }
            function C(t) {
                Kn.push(t), Jn.target = t;
            }
            function T() {
                Kn.pop(), Jn.target = Kn[Kn.length - 1];
            }
            function P(t) {
                return new Xn(void 0, void 0, void 0, String(t));
            }
            function I(t) {
                var e = new Xn(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, 
                e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, 
                e.asyncMeta = t.asyncMeta, e.isCloned = !0, e;
            }
            function M(t) {
                nr = t;
            }
            function j(t, e) {
                t.__proto__ = e;
            }
            function $(t, e, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    x(t, i, e[i]);
                }
            }
            function D(t, e) {
                var n;
                if (u(t) && !(t instanceof Xn)) return _(t, "__ob__") && t.__ob__ instanceof rr ? n = t.__ob__ : nr && !Fn() && (Array.isArray(t) || s(t)) && Object.isExtensible(t) && !t._isVue && (n = new rr(t)), 
                e && n && n.vmCount++, n;
            }
            function B(t, e, n, r, o) {
                var i = new Jn(), a = Object.getOwnPropertyDescriptor(t, e);
                if (!a || !1 !== a.configurable) {
                    var u = a && a.get, s = a && a.set;
                    u && !s || 2 !== arguments.length || (n = t[e]);
                    var c = !o && D(n);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var e = u ? u.call(t) : n;
                            return Jn.target && (i.depend(), c && (c.dep.depend(), Array.isArray(e) && z(e))), 
                            e;
                        },
                        set: function(e) {
                            var r = u ? u.call(t) : n;
                            e === r || e !== e && r !== r || u && !s || (s ? s.call(t, e) : n = e, c = !o && D(e), 
                            i.notify());
                        }
                    });
                }
            }
            function L(t, e, n) {
                if (Array.isArray(t) && f(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), 
                n;
                if (e in t && !(e in Object.prototype)) return t[e] = n, n;
                var r = t.__ob__;
                return t._isVue || r && r.vmCount ? n : r ? (B(r.value, e, n), r.dep.notify(), n) : (t[e] = n, 
                n);
            }
            function U(t, e) {
                if (Array.isArray(t) && f(e)) t.splice(e, 1); else {
                    var n = t.__ob__;
                    t._isVue || n && n.vmCount || _(t, e) && (delete t[e], n && n.dep.notify());
                }
            }
            function z(t) {
                for (var e = void 0, n = 0, r = t.length; n < r; n++) (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), 
                Array.isArray(e) && z(e);
            }
            function N(t, e) {
                if (!e) return t;
                for (var n, r, o, i = Wn ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < i.length; a++) "__ob__" !== (n = i[a]) && (r = t[n], 
                o = e[n], _(t, n) ? r !== o && s(r) && s(o) && N(r, o) : L(t, n, o));
                return t;
            }
            function q(t, e, n) {
                return n ? function() {
                    var r = "function" == typeof e ? e.call(n, n) : e, o = "function" == typeof t ? t.call(n, n) : t;
                    return r ? N(r, o) : o;
                } : e ? t ? function() {
                    return N("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t);
                } : e : t;
            }
            function F(t, e) {
                var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
                return n ? H(n) : n;
            }
            function H(t) {
                for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
                return e;
            }
            function W(t, e, n, r) {
                var o = Object.create(t || null);
                return e ? g(o, e) : o;
            }
            function V(t, e) {
                var n = t.props;
                if (n) {
                    var r, o, i, a = {};
                    if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (o = n[r]) && (i = wn(o), 
                    a[i] = {
                        type: null
                    }); else if (s(n)) for (var u in n) o = n[u], a[i = wn(u)] = s(o) ? o : {
                        type: o
                    };
                    t.props = a;
                }
            }
            function Y(t, e) {
                var n = t.inject;
                if (n) {
                    var r = t.inject = {};
                    if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                        from: n[o]
                    }; else if (s(n)) for (var i in n) {
                        var a = n[i];
                        r[i] = s(a) ? g({
                            from: i
                        }, a) : {
                            from: a
                        };
                    }
                }
            }
            function J(t) {
                var e = t.directives;
                if (e) for (var n in e) {
                    var r = e[n];
                    "function" == typeof r && (e[n] = {
                        bind: r,
                        update: r
                    });
                }
            }
            function K(t, e, n) {
                function r(r) {
                    var o = or[r] || ar;
                    u[r] = o(t[r], e[r], n, r);
                }
                if ("function" == typeof e && (e = e.options), V(e, n), Y(e, n), J(e), !e._base && (e.extends && (t = K(t, e.extends, n)), 
                e.mixins)) for (var o = 0, i = e.mixins.length; o < i; o++) t = K(t, e.mixins[o], n);
                var a, u = {};
                for (a in t) r(a);
                for (a in e) _(t, a) || r(a);
                return u;
            }
            function X(t, e, n, r) {
                if ("string" == typeof n) {
                    var o = t[e];
                    if (_(o, n)) return o[n];
                    var i = wn(n);
                    if (_(o, i)) return o[i];
                    var a = An(i);
                    return _(o, a) ? o[a] : o[n] || o[i] || o[a];
                }
            }
            function G(t, e, n, r) {
                var o = e[t], i = !_(n, t), a = n[t], u = et(Boolean, o.type);
                if (u > -1) if (i && !_(o, "default")) a = !1; else if ("" === a || a === kn(t)) {
                    var s = et(String, o.type);
                    (s < 0 || u < s) && (a = !0);
                }
                if (void 0 === a) {
                    a = Q(r, o, t);
                    var c = nr;
                    M(!0), D(a), M(c);
                }
                return a;
            }
            function Q(t, e, n) {
                if (_(e, "default")) {
                    var r = e.default;
                    return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== Z(e.type) ? r.call(t) : r;
                }
            }
            function Z(t) {
                var e = t && t.toString().match(/^\s*function (\w+)/);
                return e ? e[1] : "";
            }
            function tt(t, e) {
                return Z(t) === Z(e);
            }
            function et(t, e) {
                if (!Array.isArray(e)) return tt(e, t) ? 0 : -1;
                for (var n = 0, r = e.length; n < r; n++) if (tt(e[n], t)) return n;
                return -1;
            }
            function nt(t, e, n) {
                C();
                try {
                    if (e) for (var r = e; r = r.$parent; ) {
                        var o = r.$options.errorCaptured;
                        if (o) for (var i = 0; i < o.length; i++) try {
                            if (!1 === o[i].call(r, t, e, n)) return;
                        } catch (t) {
                            ot(t, r, "errorCaptured hook");
                        }
                    }
                    ot(t, e, n);
                } finally {
                    T();
                }
            }
            function rt(t, e, n, r, o) {
                var i;
                try {
                    (i = n ? t.apply(e, n) : t.call(e)) && !i._isVue && l(i) && !i._handled && (i.catch(function(t) {
                        return nt(t, r, o + " (Promise/async)");
                    }), i._handled = !0);
                } catch (t) {
                    nt(t, r, o);
                }
                return i;
            }
            function ot(t, e, n) {
                if (Tn.errorHandler) try {
                    return Tn.errorHandler.call(null, t, e, n);
                } catch (e) {
                    e !== t && it(e, null, "config.errorHandler");
                }
                it(t, e, n);
            }
            function it(t, e, n) {
                if (!jn && !$n || "undefined" == typeof console) throw t;
                console.error(t);
            }
            function at() {
                sr = !1;
                var t = ur.slice(0);
                ur.length = 0;
                for (var e = 0; e < t.length; e++) t[e]();
            }
            function ut(t, e) {
                var n;
                if (ur.push(function() {
                    if (t) try {
                        t.call(e);
                    } catch (t) {
                        nt(t, e, "nextTick");
                    } else n && n(e);
                }), sr || (sr = !0, ir()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                    n = t;
                });
            }
            function st(t) {
                ct(t, pr), pr.clear();
            }
            function ct(t, e) {
                var n, r, o = Array.isArray(t);
                if (!(!o && !u(t) || Object.isFrozen(t) || t instanceof Xn)) {
                    if (t.__ob__) {
                        var i = t.__ob__.dep.id;
                        if (e.has(i)) return;
                        e.add(i);
                    }
                    if (o) for (n = t.length; n--; ) ct(t[n], e); else for (n = (r = Object.keys(t)).length; n--; ) ct(t[r[n]], e);
                }
            }
            function ft(t, e) {
                function n() {
                    var t = arguments, r = n.fns;
                    if (!Array.isArray(r)) return rt(r, null, arguments, e, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++) rt(o[i], null, t, e, "v-on handler");
                }
                return n.fns = t, n;
            }
            function lt(t, e, r, i, a, u) {
                var s, c, f, l;
                for (s in t) c = t[s], f = e[s], l = dr(s), n(c) || (n(f) ? (n(c.fns) && (c = t[s] = ft(c, u)), 
                o(l.once) && (c = t[s] = a(l.name, c, l.capture)), r(l.name, c, l.capture, l.passive, l.params)) : c !== f && (f.fns = c, 
                t[s] = f));
                for (s in e) n(t[s]) && (l = dr(s), i(l.name, e[s], l.capture));
            }
            function ht(t, e, o) {
                var i = e.options.props;
                if (!n(i)) {
                    var a = {}, u = t.attrs, s = t.props;
                    if (r(u) || r(s)) for (var c in i) {
                        var f = kn(c);
                        pt(a, s, c, f, !0) || pt(a, u, c, f, !1);
                    }
                    return a;
                }
            }
            function pt(t, e, n, o, i) {
                if (r(e)) {
                    if (_(e, n)) return t[n] = e[n], i || delete e[n], !0;
                    if (_(e, o)) return t[n] = e[o], i || delete e[o], !0;
                }
                return !1;
            }
            function dt(t) {
                for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t;
            }
            function vt(t) {
                return a(t) ? [ P(t) ] : Array.isArray(t) ? yt(t) : void 0;
            }
            function _t(t) {
                return r(t) && r(t.text) && i(t.isComment);
            }
            function yt(t, e) {
                var i, u, s, c, f = [];
                for (i = 0; i < t.length; i++) n(u = t[i]) || "boolean" == typeof u || (s = f.length - 1, 
                c = f[s], Array.isArray(u) ? u.length > 0 && (u = yt(u, (e || "") + "_" + i), _t(u[0]) && _t(c) && (f[s] = P(c.text + u[0].text), 
                u.shift()), f.push.apply(f, u)) : a(u) ? _t(c) ? f[s] = P(c.text + u) : "" !== u && f.push(P(u)) : _t(u) && _t(c) ? f[s] = P(c.text + u.text) : (o(t._isVList) && r(u.tag) && n(u.key) && r(e) && (u.key = "__vlist" + e + "_" + i + "__"), 
                f.push(u)));
                return f;
            }
            function mt(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e);
            }
            function gt(t) {
                var e = bt(t.$options.inject, t);
                e && (M(!1), Object.keys(e).forEach(function(n) {
                    B(t, n, e[n]);
                }), M(!0));
            }
            function bt(t, e) {
                if (t) {
                    for (var n = Object.create(null), r = Wn ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var a = t[i].from, u = e; u; ) {
                                if (u._provided && _(u._provided, a)) {
                                    n[i] = u._provided[a];
                                    break;
                                }
                                u = u.$parent;
                            }
                            if (!u && "default" in t[i]) {
                                var s = t[i].default;
                                n[i] = "function" == typeof s ? s.call(e) : s;
                            }
                        }
                    }
                    return n;
                }
            }
            function wt(t, e) {
                if (!t || !t.length) return {};
                for (var n = {}, r = 0, o = t.length; r < o; r++) {
                    var i = t[r], a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== e && i.fnContext !== e || !a || null == a.slot) (n.default || (n.default = [])).push(i); else {
                        var u = a.slot, s = n[u] || (n[u] = []);
                        "template" === i.tag ? s.push.apply(s, i.children || []) : s.push(i);
                    }
                }
                for (var c in n) n[c].every(At) && delete n[c];
                return n;
            }
            function At(t) {
                return t.isComment && !t.asyncFactory || " " === t.text;
            }
            function St(t, e, n) {
                var r, o = Object.keys(e).length > 0, i = t ? !!t.$stable : !o, a = t && t.$key;
                if (t) {
                    if (t._normalized) return t._normalized;
                    if (i && n && n !== vn && a === n.$key && !o && !n.$hasNormal) return n;
                    for (var u in r = {}, t) t[u] && "$" !== u[0] && (r[u] = kt(e, u, t[u]));
                } else r = {};
                for (var s in e) s in r || (r[s] = Et(e, s));
                return t && Object.isExtensible(t) && (t._normalized = r), x(r, "$stable", i), x(r, "$key", a), 
                x(r, "$hasNormal", o), r;
            }
            function kt(t, e, n) {
                var r = function() {
                    var t = arguments.length ? n.apply(null, arguments) : n({});
                    return (t = t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && !Array.isArray(t) ? [ t ] : vt(t)) && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t;
                };
                return n.proxy && Object.defineProperty(t, e, {
                    get: r,
                    enumerable: !0,
                    configurable: !0
                }), r;
            }
            function Et(t, e) {
                return function() {
                    return t[e];
                };
            }
            function xt(t, e) {
                var n, o, i, a, s;
                if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), o = 0, 
                i = t.length; o < i; o++) n[o] = e(t[o], o); else if ("number" == typeof t) for (n = new Array(t), 
                o = 0; o < t; o++) n[o] = e(o + 1, o); else if (u(t)) if (Wn && t[Symbol.iterator]) {
                    n = [];
                    for (var c = t[Symbol.iterator](), f = c.next(); !f.done; ) n.push(e(f.value, n.length)), 
                    f = c.next();
                } else for (a = Object.keys(t), n = new Array(a.length), o = 0, i = a.length; o < i; o++) s = a[o], 
                n[o] = e(t[s], s, o);
                return r(n) || (n = []), n._isVList = !0, n;
            }
            function Ot(t, e, n, r) {
                var o, i = this.$scopedSlots[t];
                i ? (n = n || {}, r && (n = g(g({}, r), n)), o = i(n) || e) : o = this.$slots[t] || e;
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o;
            }
            function Rt(t) {
                return X(this.$options, "filters", t, !0) || On;
            }
            function Ct(t, e) {
                return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
            }
            function Tt(t, e, n, r, o) {
                var i = Tn.keyCodes[e] || n;
                return o && r && !Tn.keyCodes[e] ? Ct(o, r) : i ? Ct(i, t) : r ? kn(r) !== e : void 0;
            }
            function Pt(t, e, n, r, o) {
                if (n && u(n)) {
                    var i;
                    Array.isArray(n) && (n = b(n));
                    for (var a in n) !function(a) {
                        if ("class" === a || "style" === a || mn(a)) i = t; else {
                            var u = t.attrs && t.attrs.type;
                            i = r || Tn.mustUseProp(e, u, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                        }
                        var s = wn(a), c = kn(a);
                        s in i || c in i || (i[a] = n[a], !o) || ((t.on || (t.on = {}))["update:" + a] = function(t) {
                            n[a] = t;
                        });
                    }(a);
                }
                return t;
            }
            function It(t, e) {
                var n = this._staticTrees || (this._staticTrees = []), r = n[t];
                return r && !e ? r : (r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), 
                jt(r, "__static__" + t, !1), r);
            }
            function Mt(t, e, n) {
                return jt(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
            }
            function jt(t, e, n) {
                if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && $t(t[r], e + "_" + r, n); else $t(t, e, n);
            }
            function $t(t, e, n) {
                t.isStatic = !0, t.key = e, t.isOnce = n;
            }
            function Dt(t, e) {
                if (e && s(e)) {
                    var n = t.on = t.on ? g({}, t.on) : {};
                    for (var r in e) {
                        var o = n[r], i = e[r];
                        n[r] = o ? [].concat(o, i) : i;
                    }
                }
                return t;
            }
            function Bt(t, e, n, r) {
                e = e || {
                    $stable: !n
                };
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    Array.isArray(i) ? Bt(i, e, n) : i && (i.proxy && (i.fn.proxy = !0), e[i.key] = i.fn);
                }
                return r && (e.$key = r), e;
            }
            function Lt(t, e) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n];
                    "string" == typeof r && r && (t[e[n]] = e[n + 1]);
                }
                return t;
            }
            function Ut(t, e) {
                return "string" == typeof t ? e + t : t;
            }
            function zt(t) {
                t._o = Mt, t._n = p, t._s = h, t._l = xt, t._t = Ot, t._q = A, t._i = S, t._m = It, 
                t._f = Rt, t._k = Tt, t._b = Pt, t._v = P, t._e = Qn, t._u = Bt, t._g = Dt, t._d = Lt, 
                t._p = Ut;
            }
            function Nt(t, e, n, r, i) {
                var a, u = this, s = i.options;
                _(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
                var c = o(s._compiled), f = !c;
                this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || vn, 
                this.injections = bt(s.inject, r), this.slots = function() {
                    return u.$slots || St(t.scopedSlots, u.$slots = wt(n, r)), u.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return St(t.scopedSlots, this.slots());
                    }
                }), c && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = St(t.scopedSlots, this.$slots)), 
                s._scopeId ? this._c = function(t, e, n, o) {
                    var i = Xt(a, t, e, n, o, f);
                    return i && !Array.isArray(i) && (i.fnScopeId = s._scopeId, i.fnContext = r), i;
                } : this._c = function(t, e, n, r) {
                    return Xt(a, t, e, n, r, f);
                };
            }
            function qt(t, e, n, o, i) {
                var a = t.options, u = {}, s = a.props;
                if (r(s)) for (var c in s) u[c] = G(c, s, e || vn); else r(n.attrs) && Ht(u, n.attrs), 
                r(n.props) && Ht(u, n.props);
                var f = new Nt(n, u, i, o, t), l = a.render.call(null, f._c, f);
                if (l instanceof Xn) return Ft(l, n, f.parent, a, f);
                if (Array.isArray(l)) {
                    for (var h = vt(l) || [], p = new Array(h.length), d = 0; d < h.length; d++) p[d] = Ft(h[d], n, f.parent, a, f);
                    return p;
                }
            }
            function Ft(t, e, n, r, o) {
                var i = I(t);
                return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), 
                i;
            }
            function Ht(t, e) {
                for (var n in e) t[wn(n)] = e[n];
            }
            function Wt(t, e, i, a, s) {
                if (!n(t)) {
                    var c = i.$options._base;
                    if (u(t) && (t = c.extend(t)), "function" == typeof t) {
                        var f;
                        if (n(t.cid) && (f = t, void 0 === (t = re(f, c)))) return ne(f, e, i, a, s);
                        e = e || {}, Be(t), r(e.model) && Kt(t.options, e);
                        var l = ht(e, t, s);
                        if (o(t.options.functional)) return qt(t, l, e, i, a);
                        var h = e.on;
                        if (e.on = e.nativeOn, o(t.options.abstract)) {
                            var p = e.slot;
                            e = {}, p && (e.slot = p);
                        }
                        Yt(e);
                        var d = t.options.name || s;
                        return new Xn("vue-component-" + t.cid + (d ? "-" + d : ""), e, void 0, void 0, void 0, i, {
                            Ctor: t,
                            propsData: l,
                            listeners: h,
                            tag: s,
                            children: a
                        }, f);
                    }
                }
            }
            function Vt(t, e) {
                var n = {
                    _isComponent: !0,
                    _parentVnode: t,
                    parent: e
                }, o = t.data.inlineTemplate;
                return r(o) && (n.render = o.render, n.staticRenderFns = o.staticRenderFns), new t.componentOptions.Ctor(n);
            }
            function Yt(t) {
                for (var e = t.hook || (t.hook = {}), n = 0; n < yr.length; n++) {
                    var r = yr[n], o = e[r], i = _r[r];
                    o === i || o && o._merged || (e[r] = o ? Jt(i, o) : i);
                }
            }
            function Jt(t, e) {
                var n = function(n, r) {
                    t(n, r), e(n, r);
                };
                return n._merged = !0, n;
            }
            function Kt(t, e) {
                var n = t.model && t.model.prop || "value", o = t.model && t.model.event || "input";
                (e.attrs || (e.attrs = {}))[n] = e.model.value;
                var i = e.on || (e.on = {}), a = i[o], u = e.model.callback;
                r(a) ? (Array.isArray(a) ? -1 === a.indexOf(u) : a !== u) && (i[o] = [ u ].concat(a)) : i[o] = u;
            }
            function Xt(t, e, n, r, i, u) {
                return (Array.isArray(n) || a(n)) && (i = r, r = n, n = void 0), o(u) && (i = gr), 
                Gt(t, e, n, r, i);
            }
            function Gt(t, e, n, o, i) {
                if (r(n) && r(n.__ob__)) return Qn();
                if (r(n) && r(n.is) && (e = n.is), !e) return Qn();
                var a, u, s;
                return Array.isArray(o) && "function" == typeof o[0] && (n = n || {}, n.scopedSlots = {
                    default: o[0]
                }, o.length = 0), i === gr ? o = vt(o) : i === mr && (o = dt(o)), "string" == typeof e ? (u = t.$vnode && t.$vnode.ns || Tn.getTagNamespace(e), 
                a = Tn.isReservedTag(e) ? new Xn(Tn.parsePlatformTagName(e), n, o, void 0, void 0, t) : n && n.pre || !r(s = X(t.$options, "components", e)) ? new Xn(e, n, o, void 0, void 0, t) : Wt(s, n, t, o, e)) : a = Wt(e, n, t, o), 
                Array.isArray(a) ? a : r(a) ? (r(u) && Qt(a, u), r(n) && Zt(n), a) : Qn();
            }
            function Qt(t, e, i) {
                if (t.ns = e, "foreignObject" === t.tag && (e = void 0, i = !0), r(t.children)) for (var a = 0, u = t.children.length; a < u; a++) {
                    var s = t.children[a];
                    r(s.tag) && (n(s.ns) || o(i) && "svg" !== s.tag) && Qt(s, e, i);
                }
            }
            function Zt(t) {
                u(t.style) && st(t.style), u(t.class) && st(t.class);
            }
            function te(t) {
                t._vnode = null, t._staticTrees = null;
                var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
                t.$slots = wt(e._renderChildren, r), t.$scopedSlots = vn, t._c = function(e, n, r, o) {
                    return Xt(t, e, n, r, o, !1);
                }, t.$createElement = function(e, n, r, o) {
                    return Xt(t, e, n, r, o, !0);
                };
                var o = n && n.data;
                B(t, "$attrs", o && o.attrs || vn, null, !0), B(t, "$listeners", e._parentListeners || vn, null, !0);
            }
            function ee(t, e) {
                return (t.__esModule || Wn && "Module" === t[Symbol.toStringTag]) && (t = t.default), 
                u(t) ? e.extend(t) : t;
            }
            function ne(t, e, n, r, o) {
                var i = Qn();
                return i.asyncFactory = t, i.asyncMeta = {
                    data: e,
                    context: n,
                    children: r,
                    tag: o
                }, i;
            }
            function re(t, e) {
                if (o(t.error) && r(t.errorComp)) return t.errorComp;
                if (r(t.resolved)) return t.resolved;
                var i = br;
                if (i && r(t.owners) && -1 === t.owners.indexOf(i) && t.owners.push(i), o(t.loading) && r(t.loadingComp)) return t.loadingComp;
                if (i && !r(t.owners)) {
                    var a = t.owners = [ i ], s = !0, c = null, f = null;
                    i.$on("hook:destroyed", function() {
                        return v(a, i);
                    });
                    var h = function(t) {
                        for (var e = 0, n = a.length; e < n; e++) a[e].$forceUpdate();
                        t && (a.length = 0, null !== c && (clearTimeout(c), c = null), null !== f && (clearTimeout(f), 
                        f = null));
                    }, p = k(function(n) {
                        t.resolved = ee(n, e), s ? a.length = 0 : h(!0);
                    }), d = k(function(e) {
                        r(t.errorComp) && (t.error = !0, h(!0));
                    }), _ = t(p, d);
                    return u(_) && (l(_) ? n(t.resolved) && _.then(p, d) : l(_.component) && (_.component.then(p, d), 
                    r(_.error) && (t.errorComp = ee(_.error, e)), r(_.loading) && (t.loadingComp = ee(_.loading, e), 
                    0 === _.delay ? t.loading = !0 : c = setTimeout(function() {
                        c = null, n(t.resolved) && n(t.error) && (t.loading = !0, h(!1));
                    }, _.delay || 200)), r(_.timeout) && (f = setTimeout(function() {
                        f = null, n(t.resolved) && d(null);
                    }, _.timeout)))), s = !1, t.loading ? t.loadingComp : t.resolved;
                }
            }
            function oe(t) {
                return t.isComment && t.asyncFactory;
            }
            function ie(t) {
                if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (r(n) && (r(n.componentOptions) || oe(n))) return n;
                }
            }
            function ae(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && fe(t, e);
            }
            function ue(t, e) {
                vr.$on(t, e);
            }
            function se(t, e) {
                vr.$off(t, e);
            }
            function ce(t, e) {
                var n = vr;
                return function r() {
                    null !== e.apply(null, arguments) && n.$off(t, r);
                };
            }
            function fe(t, e, n) {
                vr = t, lt(e, n || {}, ue, se, ce, t), vr = void 0;
            }
            function le(t) {
                var e = wr;
                return wr = t, function() {
                    wr = e;
                };
            }
            function he(t) {
                var e = t.$options, n = e.parent;
                if (n && !e.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(t);
                }
                t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
                t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
                t._isBeingDestroyed = !1;
            }
            function pe(t, e, n, r, o) {
                var i = r.data.scopedSlots, a = t.$scopedSlots, u = !!(i && !i.$stable || a !== vn && !a.$stable || i && t.$scopedSlots.$key !== i.$key), s = !!(o || t.$options._renderChildren || u);
                if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), 
                t.$options._renderChildren = o, t.$attrs = r.data.attrs || vn, t.$listeners = n || vn, 
                e && t.$options.props) {
                    M(!1);
                    for (var c = t._props, f = t.$options._propKeys || [], l = 0; l < f.length; l++) {
                        var h = f[l], p = t.$options.props;
                        c[h] = G(h, p, e, t);
                    }
                    M(!0), t.$options.propsData = e;
                }
                n = n || vn;
                var d = t.$options._parentListeners;
                t.$options._parentListeners = n, fe(t, n, d), s && (t.$slots = wt(o, r.context), 
                t.$forceUpdate());
            }
            function de(t) {
                for (;t && (t = t.$parent); ) if (t._inactive) return !0;
                return !1;
            }
            function ve(t, e) {
                if (e) {
                    if (t._directInactive = !1, de(t)) return;
                } else if (t._directInactive) return;
                if (t._inactive || null === t._inactive) {
                    t._inactive = !1;
                    for (var n = 0; n < t.$children.length; n++) ve(t.$children[n]);
                    ye(t, "activated");
                }
            }
            function _e(t, e) {
                if (!(e && (t._directInactive = !0, de(t)) || t._inactive)) {
                    t._inactive = !0;
                    for (var n = 0; n < t.$children.length; n++) _e(t.$children[n]);
                    ye(t, "deactivated");
                }
            }
            function ye(t, e) {
                C();
                var n = t.$options[e], r = e + " hook";
                if (n) for (var o = 0, i = n.length; o < i; o++) rt(n[o], t, null, t, r);
                t._hasHookEvent && t.$emit("hook:" + e), T();
            }
            function me() {
                Or = Ar.length = Sr.length = 0, kr = {}, Er = xr = !1;
            }
            function ge() {
                var t, e;
                for (Rr(), xr = !0, Ar.sort(function(t, e) {
                    return t.id - e.id;
                }), Or = 0; Or < Ar.length; Or++) (t = Ar[Or]).before && t.before(), e = t.id, kr[e] = null, 
                t.run();
                var n = Sr.slice(), r = Ar.slice();
                me(), Ae(n), be(r), Hn && Tn.devtools && Hn.emit("flush");
            }
            function be(t) {
                for (var e = t.length; e--; ) {
                    var n = t[e], r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && ye(r, "updated");
                }
            }
            function we(t) {
                t._inactive = !1, Sr.push(t);
            }
            function Ae(t) {
                for (var e = 0; e < t.length; e++) t[e]._inactive = !0, ve(t[e], !0);
            }
            function Se(t) {
                var e = t.id;
                if (null == kr[e]) {
                    if (kr[e] = !0, xr) {
                        for (var n = Ar.length - 1; n > Or && Ar[n].id > t.id; ) n--;
                        Ar.splice(n + 1, 0, t);
                    } else Ar.push(t);
                    Er || (Er = !0, ut(ge));
                }
            }
            function ke(t, e, n) {
                Ir.get = function() {
                    return this[e][n];
                }, Ir.set = function(t) {
                    this[e][n] = t;
                }, Object.defineProperty(t, n, Ir);
            }
            function Ee(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && xe(t, e.props), e.methods && Me(t, e.methods), e.data ? Oe(t) : D(t._data = {}, !0), 
                e.computed && Ce(t, e.computed), e.watch && e.watch !== zn && je(t, e.watch);
            }
            function xe(t, e) {
                var n = t.$options.propsData || {}, r = t._props = {}, o = t.$options._propKeys = [];
                !t.$parent || M(!1);
                for (var i in e) !function(i) {
                    o.push(i);
                    var a = G(i, e, n, t);
                    B(r, i, a), i in t || ke(t, "_props", i);
                }(i);
                M(!0);
            }
            function Oe(t) {
                var e = t.$options.data;
                s(e = t._data = "function" == typeof e ? Re(e, t) : e || {}) || (e = {});
                for (var n = Object.keys(e), r = t.$options.props, o = (t.$options.methods, n.length); o--; ) {
                    var i = n[o];
                    r && _(r, i) || E(i) || ke(t, "_data", i);
                }
                D(e, !0);
            }
            function Re(t, e) {
                C();
                try {
                    return t.call(e, e);
                } catch (t) {
                    return nt(t, e, "data()"), {};
                } finally {
                    T();
                }
            }
            function Ce(t, e) {
                var n = t._computedWatchers = Object.create(null), r = Fn();
                for (var o in e) {
                    var i = e[o], a = "function" == typeof i ? i : i.get;
                    r || (n[o] = new Pr(t, a || w, w, Mr)), o in t || Te(t, o, i);
                }
            }
            function Te(t, e, n) {
                var r = !Fn();
                "function" == typeof n ? (Ir.get = r ? Pe(e) : Ie(n), Ir.set = w) : (Ir.get = n.get ? r && !1 !== n.cache ? Pe(e) : Ie(n.get) : w, 
                Ir.set = n.set || w), Object.defineProperty(t, e, Ir);
            }
            function Pe(t) {
                return function() {
                    var e = this._computedWatchers && this._computedWatchers[t];
                    if (e) return e.dirty && e.evaluate(), Jn.target && e.depend(), e.value;
                };
            }
            function Ie(t) {
                return function() {
                    return t.call(this, this);
                };
            }
            function Me(t, e) {
                t.$options.props;
                for (var n in e) t[n] = "function" != typeof e[n] ? w : En(e[n], t);
            }
            function je(t, e) {
                for (var n in e) {
                    var r = e[n];
                    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) $e(t, n, r[o]); else $e(t, n, r);
                }
            }
            function $e(t, e, n, r) {
                return s(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
            }
            function De(t, e) {
                var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
                n.parent = e.parent, n._parentVnode = r;
                var o = r.componentOptions;
                n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, 
                n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
            }
            function Be(t) {
                var e = t.options;
                if (t.super) {
                    var n = Be(t.super);
                    if (n !== t.superOptions) {
                        t.superOptions = n;
                        var r = Le(t);
                        r && g(t.extendOptions, r), (e = t.options = K(n, t.extendOptions)).name && (e.components[e.name] = t);
                    }
                }
                return e;
            }
            function Le(t) {
                var e, n = t.options, r = t.sealedOptions;
                for (var o in n) n[o] !== r[o] && (e || (e = {}), e[o] = n[o]);
                return e;
            }
            function Ue(t) {
                this._init(t);
            }
            function ze(t) {
                t.use = function(t) {
                    var e = this._installedPlugins || (this._installedPlugins = []);
                    if (e.indexOf(t) > -1) return this;
                    var n = m(arguments, 1);
                    return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                    e.push(t), this;
                };
            }
            function Ne(t) {
                t.mixin = function(t) {
                    return this.options = K(this.options, t), this;
                };
            }
            function qe(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function(t) {
                    t = t || {};
                    var n = this, r = n.cid, o = t._Ctor || (t._Ctor = {});
                    if (o[r]) return o[r];
                    var i = t.name || n.options.name, a = function(t) {
                        this._init(t);
                    };
                    return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, 
                    a.options = K(n.options, t), a.super = n, a.options.props && Fe(a), a.options.computed && He(a), 
                    a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Rn.forEach(function(t) {
                        a[t] = n[t];
                    }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = t, 
                    a.sealedOptions = g({}, a.options), o[r] = a, a;
                };
            }
            function Fe(t) {
                var e = t.options.props;
                for (var n in e) ke(t.prototype, "_props", n);
            }
            function He(t) {
                var e = t.options.computed;
                for (var n in e) Te(t.prototype, n, e[n]);
            }
            function We(t) {
                Rn.forEach(function(e) {
                    t[e] = function(t, n) {
                        return n ? ("component" === e && s(n) && (n.name = n.name || t, n = this.options._base.extend(n)), 
                        "directive" === e && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                    };
                });
            }
            function Ve(t) {
                return t && (t.Ctor.options.name || t.tag);
            }
            function Ye(t, e) {
                return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!c(t) && t.test(e);
            }
            function Je(t, e) {
                var n = t.cache, r = t.keys, o = t._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var u = Ve(a.componentOptions);
                        u && !e(u) && Ke(n, i, r, o);
                    }
                }
            }
            function Ke(t, e, n, r) {
                var o = t[e];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(), t[e] = null, v(n, e);
            }
            function Xe(t, e) {
                var n = {};
                return Ge(t, e), Qe(t, e, "", n), n;
            }
            function Ge(t, e) {
                if (t !== e) {
                    var n = tn(t), r = tn(e);
                    if (n == Lr && r == Lr) {
                        if (Object.keys(t).length >= Object.keys(e).length) for (var o in e) {
                            var i = t[o];
                            void 0 === i ? t[o] = null : Ge(i, e[o]);
                        }
                    } else n == Br && r == Br && t.length >= e.length && e.forEach(function(e, n) {
                        Ge(t[n], e);
                    });
                }
            }
            function Qe(t, e, n, r) {
                if (t !== e) {
                    var o = tn(t), i = tn(e);
                    if (o == Lr) if (i != Lr || Object.keys(t).length < Object.keys(e).length) Ze(r, n, t); else {
                        for (var a in t) !function(o) {
                            var i = t[o], a = e[o], u = tn(i), s = tn(a);
                            if (u != Br && u != Lr) i != e[o] && Ze(r, ("" == n ? "" : n + ".") + o, i); else if (u == Br) s != Br ? Ze(r, ("" == n ? "" : n + ".") + o, i) : i.length < a.length ? Ze(r, ("" == n ? "" : n + ".") + o, i) : i.forEach(function(t, e) {
                                Qe(t, a[e], ("" == n ? "" : n + ".") + o + "[" + e + "]", r);
                            }); else if (u == Lr) if (s != Lr || Object.keys(i).length < Object.keys(a).length) Ze(r, ("" == n ? "" : n + ".") + o, i); else for (var c in i) Qe(i[c], a[c], ("" == n ? "" : n + ".") + o + "." + c, r);
                        }(a);
                    } else o == Br ? i != Br ? Ze(r, n, t) : t.length < e.length ? Ze(r, n, t) : t.forEach(function(t, o) {
                        Qe(t, e[o], n + "[" + o + "]", r);
                    }) : Ze(r, n, t);
                }
            }
            function Ze(t, e, n) {
                t[e] = n;
            }
            function tn(t) {
                return Object.prototype.toString.call(t);
            }
            function en(t) {
                if (t.__next_tick_callbacks && t.__next_tick_callbacks.length) {
                    if (Object({
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var e = t.$scope;
                        console.log("[" + +new Date() + "][" + (e.is || e.route) + "][" + t._uid + "]:flushCallbacks[" + t.__next_tick_callbacks.length + "]");
                    }
                    var n = t.__next_tick_callbacks.slice(0);
                    t.__next_tick_callbacks.length = 0;
                    for (var r = 0; r < n.length; r++) n[r]();
                }
            }
            function nn(t) {
                return Ar.find(function(e) {
                    return t._watcher === e;
                });
            }
            function rn(t, e) {
                if (!t.__next_tick_pending && !nn(t)) {
                    if (Object({
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var n = t.$scope;
                        console.log("[" + +new Date() + "][" + (n.is || n.route) + "][" + t._uid + "]:nextVueTick");
                    }
                    return ut(e, t);
                }
                if (Object({
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var r = t.$scope;
                    console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + t._uid + "]:nextMPTick");
                }
                var o;
                if (t.__next_tick_callbacks || (t.__next_tick_callbacks = []), t.__next_tick_callbacks.push(function() {
                    if (e) try {
                        e.call(t);
                    } catch (e) {
                        nt(e, t, "nextTick");
                    } else o && o(t);
                }), !e && "undefined" != typeof Promise) return new Promise(function(t) {
                    o = t;
                });
            }
            function on(t) {
                var e = [].concat(Object.keys(t._data || {}), Object.keys(t._computedWatchers || {})).reduce(function(e, n) {
                    return e[n] = t[n], e;
                }, Object.create(null));
                return Object.assign(e, t.$mp.data || {}), Array.isArray(t.$options.behaviors) && -1 !== t.$options.behaviors.indexOf("uni://form-field") && (e.name = t.name, 
                e.value = t.value), JSON.parse(JSON.stringify(e));
            }
            function an() {}
            function un(t, e, n) {
                if (!t.mpType) return t;
                "app" === t.mpType && (t.$options.render = an), t.$options.render || (t.$options.render = an), 
                "mp-toutiao" !== t.mpHost && ye(t, "beforeMount");
                return new Pr(t, function() {
                    t._update(t._render(), n);
                }, w, {
                    before: function() {
                        t._isMounted && !t._isDestroyed && ye(t, "beforeUpdate");
                    }
                }, !0), n = !1, t;
            }
            function sn(t, e) {
                return r(t) || r(e) ? cn(t, fn(e)) : "";
            }
            function cn(t, e) {
                return t ? e ? t + " " + e : t : e || "";
            }
            function fn(t) {
                return Array.isArray(t) ? ln(t) : u(t) ? hn(t) : "string" == typeof t ? t : "";
            }
            function ln(t) {
                for (var e, n = "", o = 0, i = t.length; o < i; o++) r(e = fn(t[o])) && "" !== e && (n && (n += " "), 
                n += e);
                return n;
            }
            function hn(t) {
                var e = "";
                for (var n in t) t[n] && (e && (e += " "), e += n);
                return e;
            }
            function pn(t) {
                return Array.isArray(t) ? b(t) : "string" == typeof t ? Ur(t) : t;
            }
            function dn(t, e) {
                var n = e.split("."), r = n[0];
                return 0 === r.indexOf("__$n") && (r = parseInt(r.replace("__$n", ""))), 1 === n.length ? t[r] : dn(t[r], n.slice(1).join("."));
            }
            var vn = Object.freeze({}), _n = Object.prototype.toString;
            d("slot,component", !0);
            var yn, mn = d("key,ref,slot,slot-scope,is"), gn = Object.prototype.hasOwnProperty, bn = /-(\w)/g, wn = y(function(t) {
                return t.replace(bn, function(t, e) {
                    return e ? e.toUpperCase() : "";
                });
            }), An = y(function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
            }), Sn = /\B([A-Z])/g, kn = y(function(t) {
                return t.replace(Sn, "-$1").toLowerCase();
            }), En = Function.prototype.bind ? function(t, e) {
                return t.bind(e);
            } : function(t, e) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
                }
                return n._length = t.length, n;
            }, xn = function(t, e, n) {
                return !1;
            }, On = function(t) {
                return t;
            }, Rn = [ "component", "directive", "filter" ], Cn = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], Tn = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: xn,
                isReservedAttr: xn,
                isUnknownElement: xn,
                getTagNamespace: w,
                parsePlatformTagName: On,
                mustUseProp: xn,
                async: !0,
                _lifecycleHooks: Cn
            }, Pn = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/, In = new RegExp("[^" + Pn.source + ".$_\\d]"), Mn = "__proto__" in {}, jn = "undefined" != typeof window, $n = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Dn = $n && WXEnvironment.platform.toLowerCase(), Bn = jn && window.navigator.userAgent.toLowerCase(), Ln = Bn && /msie|trident/.test(Bn), Un = (Bn && Bn.indexOf("msie 9.0"), 
            Bn && Bn.indexOf("edge/"), Bn && Bn.indexOf("android"), Bn && /iphone|ipad|ipod|ios/.test(Bn) || "ios" === Dn), zn = (Bn && /chrome\/\d+/.test(Bn), 
            Bn && /phantomjs/.test(Bn), Bn && Bn.match(/firefox\/(\d+)/), {}.watch);
            if (jn) try {
                var Nn = {};
                Object.defineProperty(Nn, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, Nn);
            } catch (t) {}
            var qn, Fn = function() {
                return void 0 === yn && (yn = !jn && !$n && void 0 !== t && t.process && "server" === t.process.env.VUE_ENV), 
                yn;
            }, Hn = jn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, Wn = "undefined" != typeof Symbol && R(Symbol) && "undefined" != typeof Reflect && R(Reflect.ownKeys);
            qn = "undefined" != typeof Set && R(Set) ? Set : function() {
                function t() {
                    this.set = Object.create(null);
                }
                return t.prototype.has = function(t) {
                    return !0 === this.set[t];
                }, t.prototype.add = function(t) {
                    this.set[t] = !0;
                }, t.prototype.clear = function() {
                    this.set = Object.create(null);
                }, t;
            }();
            var Vn = w, Yn = 0, Jn = function() {
                this.id = Yn++, this.subs = [];
            };
            Jn.prototype.addSub = function(t) {
                this.subs.push(t);
            }, Jn.prototype.removeSub = function(t) {
                v(this.subs, t);
            }, Jn.prototype.depend = function() {
                Jn.target && Jn.target.addDep(this);
            }, Jn.prototype.notify = function() {
                for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
            }, Jn.target = null;
            var Kn = [], Xn = function(t, e, n, r, o, i, a, u) {
                this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = o, this.ns = void 0, 
                this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = u, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, Gn = {
                child: {
                    configurable: !0
                }
            };
            Gn.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(Xn.prototype, Gn);
            var Qn = function(t) {
                void 0 === t && (t = "");
                var e = new Xn();
                return e.text = t, e.isComment = !0, e;
            }, Zn = Array.prototype, tr = Object.create(Zn);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
                var e = Zn[t];
                x(tr, t, function() {
                    for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                    var o, i = e.apply(this, n), a = this.__ob__;
                    switch (t) {
                      case "push":
                      case "unshift":
                        o = n;
                        break;

                      case "splice":
                        o = n.slice(2);
                    }
                    return o && a.observeArray(o), a.dep.notify(), i;
                });
            });
            var er = Object.getOwnPropertyNames(tr), nr = !0, rr = function(t) {
                this.value = t, this.dep = new Jn(), this.vmCount = 0, x(t, "__ob__", this), Array.isArray(t) ? (Mn ? j(t, tr) : $(t, tr, er), 
                this.observeArray(t)) : this.walk(t);
            };
            rr.prototype.walk = function(t) {
                for (var e = Object.keys(t), n = 0; n < e.length; n++) B(t, e[n]);
            }, rr.prototype.observeArray = function(t) {
                for (var e = 0, n = t.length; e < n; e++) D(t[e]);
            };
            var or = Tn.optionMergeStrategies;
            or.data = function(t, e, n) {
                return n ? q(t, e, n) : e && "function" != typeof e ? t : q(t, e);
            }, Cn.forEach(function(t) {
                or[t] = F;
            }), Rn.forEach(function(t) {
                or[t + "s"] = W;
            }), or.watch = function(t, e, n, r) {
                if (t === zn && (t = void 0), e === zn && (e = void 0), !e) return Object.create(t || null);
                if (!t) return e;
                var o = {};
                for (var i in g(o, t), e) {
                    var a = o[i], u = e[i];
                    a && !Array.isArray(a) && (a = [ a ]), o[i] = a ? a.concat(u) : Array.isArray(u) ? u : [ u ];
                }
                return o;
            }, or.props = or.methods = or.inject = or.computed = function(t, e, n, r) {
                if (!t) return e;
                var o = Object.create(null);
                return g(o, t), e && g(o, e), o;
            }, or.provide = q;
            var ir, ar = function(t, e) {
                return void 0 === e ? t : e;
            }, ur = [], sr = !1;
            if ("undefined" != typeof Promise && R(Promise)) {
                var cr = Promise.resolve();
                ir = function() {
                    cr.then(at), Un && setTimeout(w);
                };
            } else if (Ln || "undefined" == typeof MutationObserver || !R(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ir = "undefined" != typeof setImmediate && R(setImmediate) ? function() {
                setImmediate(at);
            } : function() {
                setTimeout(at, 0);
            }; else {
                var fr = 1, lr = new MutationObserver(at), hr = document.createTextNode(String(fr));
                lr.observe(hr, {
                    characterData: !0
                }), ir = function() {
                    fr = (fr + 1) % 2, hr.data = String(fr);
                };
            }
            var pr = new qn(), dr = y(function(t) {
                var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), r = "!" === (t = n ? t.slice(1) : t).charAt(0);
                return t = r ? t.slice(1) : t, {
                    name: t,
                    once: n,
                    capture: r,
                    passive: e
                };
            });
            zt(Nt.prototype);
            var vr, _r = {
                init: function(t, e) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var n = t;
                        _r.prepatch(n, n);
                    } else (t.componentInstance = Vt(t, wr)).$mount(e ? t.elm : void 0, e);
                },
                prepatch: function(t, e) {
                    var n = e.componentOptions;
                    pe(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
                },
                insert: function(t) {
                    var e = t.context, n = t.componentInstance;
                    n._isMounted || (n._isMounted = !0, ye(n, "mounted")), t.data.keepAlive && (e._isMounted ? we(n) : ve(n, !0));
                },
                destroy: function(t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? _e(e, !0) : e.$destroy());
                }
            }, yr = Object.keys(_r), mr = 1, gr = 2, br = null, wr = null, Ar = [], Sr = [], kr = {}, Er = !1, xr = !1, Or = 0, Rr = Date.now;
            if (jn && !Ln) {
                var Cr = window.performance;
                Cr && "function" == typeof Cr.now && Rr() > document.createEvent("Event").timeStamp && (Rr = function() {
                    return Cr.now();
                });
            }
            var Tr = 0, Pr = function(t, e, n, r, o) {
                this.vm = t, o && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, 
                this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = n, this.id = ++Tr, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new qn(), this.newDepIds = new qn(), this.expression = "", 
                "function" == typeof e ? this.getter = e : (this.getter = O(e), this.getter || (this.getter = w)), 
                this.value = this.lazy ? void 0 : this.get();
            };
            Pr.prototype.get = function() {
                var t;
                C(this);
                var e = this.vm;
                try {
                    t = this.getter.call(e, e);
                } catch (t) {
                    if (!this.user) throw t;
                    nt(t, e, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && st(t), T(), this.cleanupDeps();
                }
                return t;
            }, Pr.prototype.addDep = function(t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
            }, Pr.prototype.cleanupDeps = function() {
                for (var t = this.deps.length; t--; ) {
                    var e = this.deps[t];
                    this.newDepIds.has(e.id) || e.removeSub(this);
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
                this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
            }, Pr.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : Se(this);
            }, Pr.prototype.run = function() {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || u(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user) try {
                            this.cb.call(this.vm, t, e);
                        } catch (t) {
                            nt(t, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, t, e);
                    }
                }
            }, Pr.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, Pr.prototype.depend = function() {
                for (var t = this.deps.length; t--; ) this.deps[t].depend();
            }, Pr.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || v(this.vm._watchers, this);
                    for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
                    this.active = !1;
                }
            };
            var Ir = {
                enumerable: !0,
                configurable: !0,
                get: w,
                set: w
            }, Mr = {
                lazy: !0
            }, jr = 0;
            (function(t) {
                t.prototype._init = function(t) {
                    var e = this;
                    e._uid = jr++, e._isVue = !0, t && t._isComponent ? De(e, t) : e.$options = K(Be(e.constructor), t || {}, e), 
                    e._renderProxy = e, e._self = e, he(e), ae(e), te(e), ye(e, "beforeCreate"), "mp-toutiao" !== e.mpHost && gt(e), 
                    Ee(e), "mp-toutiao" !== e.mpHost && mt(e), "mp-toutiao" !== e.mpHost && ye(e, "created"), 
                    e.$options.el && e.$mount(e.$options.el);
                };
            })(Ue), function(t) {
                var e = {
                    get: function() {
                        return this._data;
                    }
                }, n = {
                    get: function() {
                        return this._props;
                    }
                };
                Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), 
                t.prototype.$set = L, t.prototype.$delete = U, t.prototype.$watch = function(t, e, n) {
                    var r = this;
                    if (s(e)) return $e(r, t, e, n);
                    (n = n || {}).user = !0;
                    var o = new Pr(r, t, e, n);
                    if (n.immediate) try {
                        e.call(r, o.value);
                    } catch (t) {
                        nt(t, r, 'callback for immediate watcher "' + o.expression + '"');
                    }
                    return function() {
                        o.teardown();
                    };
                };
            }(Ue), function(t) {
                var e = /^hook:/;
                t.prototype.$on = function(t, n) {
                    var r = this;
                    if (Array.isArray(t)) for (var o = 0, i = t.length; o < i; o++) r.$on(t[o], n); else (r._events[t] || (r._events[t] = [])).push(n), 
                    e.test(t) && (r._hasHookEvent = !0);
                    return r;
                }, t.prototype.$once = function(t, e) {
                    function n() {
                        r.$off(t, n), e.apply(r, arguments);
                    }
                    var r = this;
                    return n.fn = e, r.$on(t, n), r;
                }, t.prototype.$off = function(t, e) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(t)) {
                        for (var r = 0, o = t.length; r < o; r++) n.$off(t[r], e);
                        return n;
                    }
                    var i, a = n._events[t];
                    if (!a) return n;
                    if (!e) return n._events[t] = null, n;
                    for (var u = a.length; u--; ) if ((i = a[u]) === e || i.fn === e) {
                        a.splice(u, 1);
                        break;
                    }
                    return n;
                }, t.prototype.$emit = function(t) {
                    var e = this, n = e._events[t];
                    if (n) {
                        n = n.length > 1 ? m(n) : n;
                        for (var r = m(arguments, 1), o = 'event handler for "' + t + '"', i = 0, a = n.length; i < a; i++) rt(n[i], e, r, e, o);
                    }
                    return e;
                };
            }(Ue), function(t) {
                t.prototype._update = function(t, e) {
                    var n = this, r = n.$el, o = n._vnode, i = le(n);
                    n._vnode = t, n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1), i(), 
                    r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                }, t.prototype.$forceUpdate = function() {
                    var t = this;
                    t._watcher && t._watcher.update();
                }, t.prototype.$destroy = function() {
                    var t = this;
                    if (!t._isBeingDestroyed) {
                        ye(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                        var e = t.$parent;
                        !e || e._isBeingDestroyed || t.$options.abstract || v(e.$children, t), t._watcher && t._watcher.teardown();
                        for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                        t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), 
                        ye(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
                    }
                };
            }(Ue), function(t) {
                zt(t.prototype), t.prototype.$nextTick = function(t) {
                    return ut(t, this);
                }, t.prototype._render = function() {
                    var t, e = this, n = e.$options, r = n.render, o = n._parentVnode;
                    o && (e.$scopedSlots = St(o.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = o;
                    try {
                        br = e, t = r.call(e._renderProxy, e.$createElement);
                    } catch (n) {
                        nt(n, e, "render"), t = e._vnode;
                    } finally {
                        br = null;
                    }
                    return Array.isArray(t) && 1 === t.length && (t = t[0]), t instanceof Xn || (t = Qn()), 
                    t.parent = o, t;
                };
            }(Ue);
            var $r = [ String, RegExp, Array ], Dr = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: $r,
                        exclude: $r,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var t in this.cache) Ke(this.cache, t, this.keys);
                    },
                    mounted: function() {
                        var t = this;
                        this.$watch("include", function(e) {
                            Je(t, function(t) {
                                return Ye(e, t);
                            });
                        }), this.$watch("exclude", function(e) {
                            Je(t, function(t) {
                                return !Ye(e, t);
                            });
                        });
                    },
                    render: function() {
                        var t = this.$slots.default, e = ie(t), n = e && e.componentOptions;
                        if (n) {
                            var r = Ve(n), o = this, i = o.include, a = o.exclude;
                            if (i && (!r || !Ye(i, r)) || a && r && Ye(a, r)) return e;
                            var u = this, s = u.cache, c = u.keys, f = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                            s[f] ? (e.componentInstance = s[f].componentInstance, v(c, f), c.push(f)) : (s[f] = e, 
                            c.push(f), this.max && c.length > parseInt(this.max) && Ke(s, c[0], c, this._vnode)), 
                            e.data.keepAlive = !0;
                        }
                        return e || t && t[0];
                    }
                }
            };
            (function(t) {
                var e = {
                    get: function() {
                        return Tn;
                    }
                };
                Object.defineProperty(t, "config", e), t.util = {
                    warn: Vn,
                    extend: g,
                    mergeOptions: K,
                    defineReactive: B
                }, t.set = L, t.delete = U, t.nextTick = ut, t.observable = function(t) {
                    return D(t), t;
                }, t.options = Object.create(null), Rn.forEach(function(e) {
                    t.options[e + "s"] = Object.create(null);
                }), t.options._base = t, g(t.options.components, Dr), ze(t), Ne(t), qe(t), We(t);
            })(Ue), Object.defineProperty(Ue.prototype, "$isServer", {
                get: Fn
            }), Object.defineProperty(Ue.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(Ue, "FunctionalRenderContext", {
                value: Nt
            }), Ue.version = "2.6.10";
            var Br = "[object Array]", Lr = "[object Object]", Ur = y(function(t) {
                var e = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
                return t.split(n).forEach(function(t) {
                    if (t) {
                        var n = t.split(r);
                        n.length > 1 && (e[n[0].trim()] = n[1].trim());
                    }
                }), e;
            }), zr = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ], Nr = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onError", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
            Ue.prototype.__patch__ = function(t, e) {
                var n = this;
                if (null !== e && ("page" === this.mpType || "component" === this.mpType)) {
                    var r = this.$scope, o = on(this);
                    o.__webviewId__ = r.data.__webviewId__;
                    var i = Object.create(null);
                    Object.keys(o).forEach(function(t) {
                        i[t] = r.data[t];
                    });
                    var a = Xe(o, i);
                    Object.keys(a).length ? (Object({
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(a)), 
                    this.__next_tick_pending = !0, r.setData(a, function() {
                        n.__next_tick_pending = !1, en(n);
                    })) : en(this);
                }
            }, Ue.prototype.$mount = function(t, e) {
                return un(this, 0, e);
            }, function(t) {
                var e = t.extend;
                t.extend = function(t) {
                    var n = (t = t || {}).methods;
                    return n && Object.keys(n).forEach(function(e) {
                        -1 !== Nr.indexOf(e) && (t[e] = n[e], delete n[e]);
                    }), e.call(this, t);
                };
                var n = t.config.optionMergeStrategies, r = n.created;
                Nr.forEach(function(t) {
                    n[t] = r;
                }), t.prototype.__lifecycle_hooks__ = Nr;
            }(Ue), function(t) {
                var e = t.prototype.$emit;
                t.prototype.$emit = function(t) {
                    return this.$scope && t && this.$scope.triggerEvent(t, {
                        __args__: m(arguments, 1)
                    }), e.apply(this, arguments);
                }, t.prototype.$nextTick = function(t) {
                    return rn(this, t);
                }, zr.forEach(function(e) {
                    t.prototype[e] = function(t) {
                        if (this.$scope) return this.$scope[e](t);
                    };
                }), t.prototype.__init_provide = mt, t.prototype.__init_injections = gt, t.prototype.__call_hook = function(t, e) {
                    var n = this;
                    C();
                    var r, o = n.$options[t], i = t + " hook";
                    if (o) for (var a = 0, u = o.length; a < u; a++) r = rt(o[a], n, e ? [ e ] : null, n, i);
                    return n._hasHookEvent && n.$emit("hook:" + t), T(), r;
                }, t.prototype.__set_model = function(t, e, n, r) {
                    Array.isArray(r) && (-1 !== r.indexOf("trim") && (n = n.trim()), -1 !== r.indexOf("number") && (n = this._n(n))), 
                    t || (t = this), t[e] = n;
                }, t.prototype.__set_sync = function(t, e, n) {
                    t || (t = this), t[e] = n;
                }, t.prototype.__get_orig = function(t) {
                    return s(t) && t.$orig || t;
                }, t.prototype.__get_value = function(t, e) {
                    return dn(e || this, t);
                }, t.prototype.__get_class = function(t, e) {
                    return sn(e, t);
                }, t.prototype.__get_style = function(t, e) {
                    if (!t && !e) return "";
                    var n = pn(t), r = e ? g(e, n) : n;
                    return Object.keys(r).map(function(t) {
                        return kn(t) + ":" + r[t];
                    }).join(";");
                }, t.prototype.__map = function(t, e) {
                    var n, r, o, i, a;
                    if (Array.isArray(t)) {
                        for (n = new Array(t.length), r = 0, o = t.length; r < o; r++) n[r] = e(t[r], r);
                        return n;
                    }
                    if (u(t)) {
                        for (i = Object.keys(t), n = Object.create(null), r = 0, o = i.length; r < o; r++) n[a = i[r]] = e(t[a], a, r);
                        return n;
                    }
                    return [];
                };
            }(Ue), e.default = Ue;
        }.call(this, n("c8ba"));
    },
    "6bca": function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("7530"), i = r(n("31fa")), a = r(n("8ed7")), u = n("f6b1"), s = n("0102"), c = {
            down: function(t) {
                t.commit("key_right", !0), i.default.down({
                    key: "right",
                    begin: 200,
                    interval: 100,
                    callback: function() {
                        var e = t.state;
                        if (!e.lock) {
                            s.music.move && s.music.move();
                            var n = e.cur;
                            if (null !== n) {
                                if (e.pause) return void a.default.pause(!1);
                                var r, i = n.right(), c = u.delays[e.speedRun - 1];
                                (0, o.want)(i, e.matrix) ? (i.timeStamp += parseInt(c, 10), t.commit("moveBlock", i), 
                                r = i.timeStamp) : (n.timeStamp += parseInt(parseInt(c, 10) / 1.5, 10), t.commit("moveBlock", n), 
                                r = n.timeStamp);
                                var f = u.speeds[e.speedRun - 1] - (Date.now() - r);
                                a.default.auto(f);
                            } else {
                                var l = e.speedStart;
                                l = l + 1 > 6 ? 1 : l + 1, t.commit("speedStart", l);
                            }
                        }
                    }
                });
            },
            up: function(t) {
                t.commit("key_right", !1), i.default.up({
                    key: "right"
                });
            }
        };
        e.default = c;
    },
    "6c47": function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("7530"), i = r(n("31fa")), a = r(n("8ed7")), u = n("0102"), s = n("a1c4"), c = {
            down: function(t) {
                t.commit("key_down", !0), null !== t.state.cur ? i.default.down({
                    key: "down",
                    begin: 40,
                    interval: 40,
                    callback: function(e) {
                        var n = t.state;
                        if (!n.lock) {
                            u.music.move && u.music.move();
                            var r = n.cur;
                            if (null !== r) if (n.pause) a.default.pause(!1); else {
                                var i = r.fall();
                                if ((0, o.want)(i, n.matrix)) t.commit("moveBlock", i), a.default.auto(); else {
                                    var c = (0, s.fromJS)(n.matrix), f = r.shape, l = (0, s.fromJS)(r.xy);
                                    f.forEach(function(t, e) {
                                        return t.forEach(function(t, n) {
                                            if (t && l.get(0) + e >= 0) {
                                                var r = c.get(l.get(0) + e);
                                                r = r.set(l.get(1) + n, 1), c = c.set(l.get(0) + e, r);
                                            }
                                        });
                                    }), a.default.nextAround(c, e);
                                }
                            }
                        }
                    }
                }) : i.default.down({
                    key: "down",
                    begin: 200,
                    interval: 100,
                    callback: function() {
                        if (!t.state.lock) {
                            var e = t.state;
                            if (!e.cur) {
                                u.music.move && u.music.move();
                                var n = e.startLines;
                                n = n - 1 < 0 ? 10 : n - 1, t.commit("startLines", n);
                            }
                        }
                    }
                });
            },
            up: function(t) {
                t.commit("key_down", !1), i.default.up({
                    key: "down"
                });
            }
        };
        e.default = c;
    },
    "6dfb": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("098f")).default);
        }).call(this, n("543d").createPage);
    },
    "6f6d": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("dee9")).default);
        }).call(this, n("543d").createPage);
    },
    7092: function(t, e, n) {
        n.r(e);
        var r = n("de72"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    7530: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.isFocus = e.visibilityChangeEvent = e.subscribeRecord = e.isOver = e.isClear = e.want = e.isMobile = e.getNextType = void 0;
        var r = n("f6b1"), o = n("a1c4"), i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("df06")), a = !1, u = {
            getNextType: function() {
                var t = r.blockType.length;
                return r.blockType[Math.floor(Math.random() * t)];
            },
            want: function(t, e) {
                e = (0, o.fromJS)(e);
                var n = t.xy, r = (0, o.fromJS)(t.shape), i = r.get(0).size;
                return r.every(function(t, r) {
                    return t.every(function(t, o) {
                        return !(n[1] < 0 || n[1] + i > 10 || !(n[0] + r < 0) && (n[0] + r >= 20 || t && e.get(n[0] + r).get(n[1] + o)));
                    });
                });
            },
            isClear: function(t) {
                var e = [];
                return t.forEach(function(t, n) {
                    t.every(function(t) {
                        return !!t;
                    }) && e.push(n);
                }), 0 !== e.length && e;
            },
            isOver: function(t) {
                return o.List.isList(t) && (t = t.toJS()), t[0].some(function(t) {
                    return !!t;
                });
            },
            subscribeRecord: function(t) {
                t.subscribe(function() {
                    var e = t.state;
                    e.lock || (e = JSON.stringify(e), e = encodeURIComponent(e), i.default && (e = (0, 
                    i.default)(e)), wx.setStorage({
                        key: r.StorageKey,
                        data: e
                    }));
                });
            },
            isMobile: function() {
                return !0;
            },
            visibilityChangeEvent: !!a && a.replace(/hidden/i, "visibilitychange"),
            isFocus: function() {
                return !0;
            }
        }, s = u.getNextType, c = u.isMobile, f = u.want, l = u.isClear, h = u.isOver, p = u.subscribeRecord, d = u.visibilityChangeEvent, v = u.isFocus;
        e.isFocus = v, e.visibilityChangeEvent = d, e.subscribeRecord = p, e.isOver = h, 
        e.isClear = l, e.want = f, e.isMobile = c, e.getNextType = s;
    },
    "75c1": function(t, e, n) {
        (function(e) {
            !function() {
                function n(t) {
                    t.region ? a.qiniuRegion = t.region : console.error("qiniu uploader need your bucket region"), 
                    t.uptoken ? a.qiniuUploadToken = t.uptoken : t.uptokenURL ? a.qiniuUploadTokenURL = t.uptokenURL : t.uptokenFunc && (a.qiniuUploadTokenFunction = t.uptokenFunc), 
                    t.domain && (a.qiniuImageURLPrefix = t.domain), a.qiniuShouldUseQiniuFileName = t.shouldUseQiniuFileName;
                }
                function r(t, n, r, o, u, s, c, f) {
                    if (null == a.qiniuUploadToken && a.qiniuUploadToken.length > 0) console.error("qiniu UploadToken is null, please check the init config or networking"); else {
                        var l = i(a.qiniuRegion), h = {
                            token: a.qiniuUploadToken
                        };
                        a.qiniuShouldUseQiniuFileName || (h.key = Math.random().toString(36).substr(9)), 
                        c && c();
                        var p = e.uploadFile({
                            url: l,
                            filePath: t,
                            name: "file",
                            formData: h,
                            success: function(t) {
                                console.log(t);
                                var e = t.data;
                                try {
                                    var o = JSON.parse(e), i = a.qiniuImageURLPrefix + "/" + o.key;
                                    o.fileUrl = i, o.imageURL = i, n && n(o);
                                } catch (t) {
                                    console.log("parse JSON failed, origin String is: " + e), r && r(t);
                                }
                            },
                            fail: function(t) {
                                console.error(t), r && r(t);
                            },
                            complete: function(t) {
                                f && f(t);
                            }
                        });
                        p.onProgressUpdate(function(t) {
                            u && u(t);
                        }), s && s(function() {
                            p.abort();
                        });
                    }
                }
                function o(t) {
                    wx.request({
                        url: a.qiniuUploadTokenURL,
                        success: function(e) {
                            var n = e.data.uptoken;
                            n && n.length > 0 ? (a.qiniuUploadToken = n, t && t()) : console.error("qiniuUploader cannot get your token, please check the uptokenURL or server");
                        },
                        fail: function(t) {
                            console.error("qiniu UploadToken is null, please check the init config or networking: " + t);
                        }
                    });
                }
                function i(t) {
                    var e = null;
                    switch (t) {
                      case "ECN":
                        e = "https://up.qiniup.com";
                        break;

                      case "NCN":
                        e = "https://up-z1.qiniup.com";
                        break;

                      case "SCN":
                        e = "https://up-z2.qiniup.com";
                        break;

                      case "NA":
                        e = "https://up-na0.qiniup.com";
                        break;

                      case "ASG":
                        e = "https://up-as0.qiniup.com";
                        break;

                      default:
                        console.error("please make the region is with one of [ECN, SCN, NCN, NA, ASG]");
                    }
                    return e;
                }
                var a = {
                    qiniuRegion: "",
                    qiniuImageURLPrefix: "",
                    qiniuUploadToken: "",
                    qiniuUploadTokenURL: "",
                    qiniuUploadTokenFunction: null,
                    qiniuShouldUseQiniuFileName: !1
                };
                t.exports = {
                    init: function(t) {
                        a = {
                            qiniuRegion: "",
                            qiniuImageURLPrefix: "",
                            qiniuUploadToken: "",
                            qiniuUploadTokenURL: "",
                            qiniuUploadTokenFunction: null,
                            qiniuShouldUseQiniuFileName: !1
                        }, n(t);
                    },
                    upload: function(t, e, i, u, s, c, f, l) {
                        if (null != t) if (u && n(u), a.qiniuUploadToken) r(t, e, i, 0, s, c, f, l); else if (a.qiniuUploadTokenURL) o(function() {
                            r(t, e, i, 0, s, c, f, l);
                        }); else {
                            if (!a.qiniuUploadTokenFunction) return void console.error("qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]");
                            if (a.qiniuUploadToken = a.qiniuUploadTokenFunction(), null == a.qiniuUploadToken && a.qiniuUploadToken.length > 0) return void console.error("qiniu UploadTokenFunction result is null, please check the return value");
                            r(t, e, i, 0, s, c, f, l);
                        } else console.error("qiniu uploader need filePath to upload");
                    }
                };
            }();
        }).call(this, n("543d").default);
    },
    7658: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = r(n("31fa")), i = r(n("8ed7")), a = {
            down: function(t) {
                t.commit("key_pause", !0), o.default.down({
                    key: "p",
                    once: !0,
                    callback: function() {
                        var e = t.state;
                        if (!e.lock) {
                            var n = e.cur, r = e.pause;
                            null !== n ? i.default.pause(!r) : i.default.start();
                        }
                    }
                });
            },
            up: function(t) {
                t.commit("key_pause", !1), o.default.up({
                    key: "p"
                });
            }
        };
        e.default = a;
    },
    "76a8": function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("7530"), i = r(n("31fa")), a = r(n("8ed7")), u = n("0102"), s = n("a1c4"), c = {
            down: function(t) {
                t.commit("key_drop", !0), i.default.down({
                    key: "space",
                    once: !0,
                    callback: function() {
                        var e = t.state;
                        if (!e.lock) {
                            var n = e.cur;
                            if (null !== n) {
                                if (e.pause) return void a.default.pause(!1);
                                u.music.fall && u.music.fall();
                                for (var r = 0, i = n.fall(r); (0, o.want)(i, e.matrix); ) i = n.fall(r), r++;
                                var c = (0, s.fromJS)(e.matrix);
                                i = n.fall(r - 2), t.commit("moveBlock", i);
                                var f = i.shape, l = i.xy;
                                f.forEach(function(t, e) {
                                    return t.forEach(function(t, n) {
                                        if (t && l[0] + e >= 0) {
                                            var r = c.get(l[0] + e);
                                            r = r.set(l[1] + n, 1), c = c.set(l[0] + e, r);
                                        }
                                    });
                                }), t.commit("drop", !0), setTimeout(function() {
                                    t.commit("drop", !1);
                                }, 100), a.default.nextAround(c);
                            } else a.default.start();
                        }
                    }
                });
            },
            up: function(t) {
                t.commit("key_drop", !1), i.default.up({
                    key: "space"
                });
            }
        };
        e.default = c;
    },
    "77b7": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("f13a")).default);
        }).call(this, n("543d").createPage);
    },
    "783d": function(t, e, n) {
        n.r(e);
        var r = n("0ef0"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    "7c44": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("1e56")).default);
        }).call(this, n("543d").createPage);
    },
    "7cd9": function(t, e, n) {
        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function i(t, e, n) {
            return e && o(t.prototype, e), n && o(t, n), t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = n("a1c4"), u = n("f6b1"), s = function() {
            function t(e) {
                if (r(this, t), this.type = e.type, e.rotateIndex ? this.rotateIndex = e.rotateIndex : this.rotateIndex = 0, 
                e.timeStamp ? this.timeStamp = e.timeStamp : this.timeStamp = Date.now(), e.shape ? this.shape = e.shape : this.shape = u.blockShape[e.type], 
                e.xy) this.xy = e.xy; else switch (e.type) {
                  case "I":
                    this.xy = [ 0, 3 ];
                    break;

                  case "L":
                  case "J":
                  case "Z":
                  case "S":
                  case "O":
                  case "T":
                    this.xy = [ -1, 4 ];
                }
            }
            return i(t, [ {
                key: "rotate",
                value: function() {
                    var t = (0, a.fromJS)(this.shape), e = (0, a.List)([]);
                    t.forEach(function(t) {
                        return t.forEach(function(n, r) {
                            var o = t.size - r - 1;
                            void 0 === e.get(o) && (e = e.set(o, (0, a.List)([])));
                            var i = e.get(o).push(n);
                            e = e.set(o, i);
                        });
                    });
                    var n = [ this.xy[0] + u.origin[this.type][this.rotateIndex][0], this.xy[1] + u.origin[this.type][this.rotateIndex][1] ], r = this.rotateIndex + 1 >= u.origin[this.type].length ? 0 : this.rotateIndex + 1;
                    return {
                        shape: e.toJS(),
                        type: this.type,
                        xy: n,
                        rotateIndex: r,
                        timeStamp: this.timeStamp
                    };
                }
            }, {
                key: "fall",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return {
                        shape: this.shape,
                        type: this.type,
                        xy: [ this.xy[0] + t, this.xy[1] ],
                        rotateIndex: this.rotateIndex,
                        timeStamp: Date.now()
                    };
                }
            }, {
                key: "right",
                value: function() {
                    return {
                        shape: this.shape,
                        type: this.type,
                        xy: [ this.xy[0], this.xy[1] + 1 ],
                        rotateIndex: this.rotateIndex,
                        timeStamp: this.timeStamp
                    };
                }
            }, {
                key: "left",
                value: function() {
                    return {
                        shape: this.shape,
                        type: this.type,
                        xy: [ this.xy[0], this.xy[1] - 1 ],
                        rotateIndex: this.rotateIndex,
                        timeStamp: this.timeStamp
                    };
                }
            } ]), t;
        }();
        e.default = s;
    },
    "7faa": function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("f6b1"), i = r(n("d5f3")), a = r(n("2f6c")), u = {
            props: [ "filling" ],
            data: function() {
                return {
                    fillingNum: 0
                };
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function(t) {
                        this.fillingNum = t.filling + 20;
                    }
                }
            },
            computed: {
                keyboard: function() {
                    return this.$store.state.keyboard;
                },
                rotation: function() {
                    return o.i18n.rotation[o.lan];
                },
                labelLeft: function() {
                    return o.i18n.left[o.lan];
                },
                labelRight: function() {
                    return o.i18n.right[o.lan];
                },
                labelDown: function() {
                    return o.i18n.down[o.lan];
                },
                labelDropSpace: function() {
                    return "".concat(o.i18n.drop[o.lan], " (SPACE)");
                },
                labelResetR: function() {
                    return "".concat(o.i18n.reset[o.lan], "(R)");
                },
                labelSoundS: function() {
                    return "".concat(o.i18n.sound[o.lan], "(S)");
                },
                labelPauseP: function() {
                    return "".concat(o.i18n.pause[o.lan], "(P)");
                }
            },
            mounted: function() {
                Object.keys(a.default).forEach(function(t) {});
            },
            methods: {
                handleTouchStart: function(t) {
                    a.default[t].down(i.default);
                },
                handleTouchEnd: function(t) {
                    a.default[t].up(i.default);
                }
            },
            components: {
                Vbutton: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/keyboard/button/index") ]).then(n.bind(null, "0419"));
                }
            }
        };
        e.default = u;
    },
    8703: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("3363")).default);
        }).call(this, n("543d").createPage);
    },
    "8be1": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("6401")).default);
        }).call(this, n("543d").createPage);
    },
    "8e78": function e78(module, exports, __webpack_require__) {
        (function(global) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !function(t, e) {
                module.exports = e(t);
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== global ? global : void 0, function(global) {
                global = global || {};
                var _Base64 = global.Base64, version = "2.5.1", buffer;
                if (module.exports) try {
                    buffer = eval("require('buffer').Buffer");
                } catch (t) {
                    buffer = void 0;
                }
                var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b64tab = function(t) {
                    for (var e = {}, n = 0, r = t.length; n < r; n++) e[t.charAt(n)] = n;
                    return e;
                }(b64chars), fromCharCode = String.fromCharCode, cb_utob = function(t) {
                    if (t.length < 2) {
                        var e = t.charCodeAt(0);
                        return e < 128 ? t : e < 2048 ? fromCharCode(192 | e >>> 6) + fromCharCode(128 | 63 & e) : fromCharCode(224 | e >>> 12 & 15) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e);
                    }
                    return e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320), 
                    fromCharCode(240 | e >>> 18 & 7) + fromCharCode(128 | e >>> 12 & 63) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e);
                }, re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, utob = function(t) {
                    return t.replace(re_utob, cb_utob);
                }, cb_encode = function(t) {
                    var e = [ 0, 2, 1 ][t.length % 3], n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                    return [ b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), e >= 2 ? "=" : b64chars.charAt(n >>> 6 & 63), e >= 1 ? "=" : b64chars.charAt(63 & n) ].join("");
                }, btoa = global.btoa ? function(t) {
                    return global.btoa(t);
                } : function(t) {
                    return t.replace(/[\s\S]{1,3}/g, cb_encode);
                }, _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(t) {
                    return (t.constructor === buffer.constructor ? t : buffer.from(t)).toString("base64");
                } : function(t) {
                    return (t.constructor === buffer.constructor ? t : new buffer(t)).toString("base64");
                } : function(t) {
                    return btoa(utob(t));
                }, encode = function(t, e) {
                    return e ? _encode(String(t)).replace(/[+\/]/g, function(t) {
                        return "+" == t ? "-" : "_";
                    }).replace(/=/g, "") : _encode(String(t));
                }, encodeURI = function(t) {
                    return encode(t, !0);
                }, re_btou = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), cb_btou = function(t) {
                    switch (t.length) {
                      case 4:
                        var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                        return fromCharCode(55296 + (e >>> 10)) + fromCharCode(56320 + (1023 & e));

                      case 3:
                        return fromCharCode((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));

                      default:
                        return fromCharCode((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
                    }
                }, btou = function(t) {
                    return t.replace(re_btou, cb_btou);
                }, cb_decode = function(t) {
                    var e = t.length, n = e % 4, r = (e > 0 ? b64tab[t.charAt(0)] << 18 : 0) | (e > 1 ? b64tab[t.charAt(1)] << 12 : 0) | (e > 2 ? b64tab[t.charAt(2)] << 6 : 0) | (e > 3 ? b64tab[t.charAt(3)] : 0), o = [ fromCharCode(r >>> 16), fromCharCode(r >>> 8 & 255), fromCharCode(255 & r) ];
                    return o.length -= [ 0, 0, 2, 1 ][n], o.join("");
                }, _atob = global.atob ? function(t) {
                    return global.atob(t);
                } : function(t) {
                    return t.replace(/\S{1,4}/g, cb_decode);
                }, atob = function(t) {
                    return _atob(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""));
                }, _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(t) {
                    return (t.constructor === buffer.constructor ? t : buffer.from(t, "base64")).toString();
                } : function(t) {
                    return (t.constructor === buffer.constructor ? t : new buffer(t, "base64")).toString();
                } : function(t) {
                    return btou(_atob(t));
                }, decode = function(t) {
                    return _decode(String(t).replace(/[-_]/g, function(t) {
                        return "-" == t ? "+" : "/";
                    }).replace(/[^A-Za-z0-9\+\/]/g, ""));
                }, noConflict = function() {
                    var t = global.Base64;
                    return global.Base64 = _Base64, t;
                };
                if (global.Base64 = {
                    VERSION: version,
                    atob: atob,
                    btoa: btoa,
                    fromBase64: decode,
                    toBase64: encode,
                    utob: utob,
                    encode: encode,
                    encodeURI: encodeURI,
                    btou: btou,
                    decode: decode,
                    noConflict: noConflict,
                    __buffer__: buffer
                }, "function" == typeof Object.defineProperty) {
                    var noEnum = function(t) {
                        return {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        };
                    };
                    global.Base64.extendString = function() {
                        Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                            return decode(this);
                        })), Object.defineProperty(String.prototype, "toBase64", noEnum(function(t) {
                            return encode(this, t);
                        })), Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                            return encode(this, !0);
                        }));
                    };
                }
                return global.Meteor && (Base64 = global.Base64), module.exports ? module.exports.Base64 = global.Base64 : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
                void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return global.Base64;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), 
                {
                    Base64: global.Base64
                };
            });
        }).call(this, __webpack_require__("c8ba"));
    },
    "8ed7": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("d5f3")), o = n("7530"), i = n("f6b1"), a = n("0102"), u = n("a1c4"), s = u.fromJS, c = u.List, f = function(t) {
            for (var e = function(t, e) {
                for (var n = parseInt((e - t + 1) * Math.random() + t, 10), r = [], o = 0; o < n; o++) r.push(1);
                for (var i = 0, a = 10 - n; i < a; i++) {
                    var u = parseInt((r.length + 1) * Math.random(), 10);
                    r.splice(u, 0, 0);
                }
                return c(r);
            }, n = c([]), r = 0; r < t; r++) n = r <= 2 ? n.push(e(5, 8)) : r <= 6 ? n.push(e(4, 9)) : n.push(e(3, 9));
            for (var o = 0, a = 20 - t; o < a; o++) n = n.unshift(c(i.blankLine));
            return n.toJS();
        }, l = {
            fallInterval: null,
            start: function() {
                a.music.start && a.music.start();
                var t = r.default.state;
                l.dispatchPoints(0), r.default.commit("speedRun", t.speedStart);
                var e = t.startLines, n = f(e);
                r.default.commit("matrix", n), r.default.commit("moveBlock", {
                    type: t.next
                }), r.default.commit("nextBlock", ""), l.auto();
            },
            auto: function(t) {
                var e = t < 0 ? 0 : t, n = r.default.state, a = n.cur;
                clearTimeout(l.fallInterval), l.fallInterval = setTimeout(function t() {
                    n = r.default.state;
                    var e = (a = n.cur).fall();
                    if ((0, o.want)(e, n.matrix)) r.default.commit("moveBlock", e), l.fallInterval = setTimeout(t, i.speeds[n.speedRun - 1]); else {
                        var u = s(n.matrix), c = a && a.shape, f = s(a && a.xy);
                        c.forEach(function(t, e) {
                            return t.forEach(function(t, n) {
                                if (t && f.get(0) + e >= 0) {
                                    var r = u.get(f.get(0) + e);
                                    r = r.set(f.get(1) + n, 1), u = u.set(f.get(0) + e, r);
                                }
                            });
                        }), l.nextAround(u);
                    }
                }, void 0 === e ? i.speeds[n.speedRun - 1] : e);
            },
            nextAround: function(t, e) {
                clearTimeout(l.fallInterval), r.default.commit("lock", !0), r.default.commit("matrix", t), 
                "function" == typeof e && e();
                var n = r.default.state.points + 10 + 2 * (r.default.state.speedRun - 1);
                if (l.dispatchPoints(n), !(0, o.isClear)(t)) return (0, o.isOver)(t) ? (a.music.gameover && a.music.gameover(), 
                void l.overStart()) : void setTimeout(function() {
                    r.default.commit("lock", !1), r.default.commit("moveBlock", {
                        type: r.default.state.next
                    }), r.default.commit("nextBlock", ""), l.auto();
                }, 100);
                a.music.clear && a.music.clear();
            },
            focus: function(t) {
                if (r.default.commit("focus", t), t) {
                    var e = r.default.state;
                    !e.cur || e.reset || e.pause || l.auto();
                } else clearTimeout(l.fallInterval);
            },
            pause: function(t) {
                r.default.commit("pause", t), t ? clearTimeout(l.fallInterval) : l.auto();
            },
            clearLines: function(t, e) {
                var n = r.default.state, o = s(t);
                e.forEach(function(t) {
                    o = o.splice(t, 1), o = o.unshift(c(i.blankLine));
                }), r.default.commit("matrix", o.toJS()), r.default.commit("moveBlock", {
                    type: n.next
                }), r.default.commit("nextBlock", ""), l.auto(), r.default.commit("lock", !1);
                var a = n.clearLines + e.length;
                r.default.commit("clearLines", a);
                var u = r.default.state.points + i.clearPoints[e.length - 1];
                l.dispatchPoints(u);
                var f = Math.floor(a / i.eachLines), h = n.speedStart + f;
                h = h > 6 ? 6 : h, r.default.commit("speedRun", h);
            },
            overStart: function() {
                clearTimeout(l.fallInterval), r.default.commit("lock", !0), r.default.commit("reset", !0), 
                r.default.commit("pause", !1);
            },
            overEnd: function() {
                r.default.commit("matrix", i.blankMatrix), r.default.commit("moveBlock", {
                    reset: !0
                }), r.default.commit("reset", !1), r.default.commit("lock", !1), r.default.commit("clearLines", 0);
            },
            dispatchPoints: function(t) {
                r.default.commit("points", t), t > 0 && t > r.default.state.max && r.default.commit("max", t);
            }
        }, h = l;
        e.default = h;
    },
    "90e6": function(t, e, n) {},
    9152: function(t, e) {
        e.read = function(t, e, n, r, o) {
            var i, a, u = 8 * o - r - 1, s = (1 << u) - 1, c = s >> 1, f = -7, l = n ? o - 1 : 0, h = n ? -1 : 1, p = t[e + l];
            for (l += h, i = p & (1 << -f) - 1, p >>= -f, f += u; f > 0; i = 256 * i + t[e + l], 
            l += h, f -= 8) ;
            for (a = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; a = 256 * a + t[e + l], l += h, 
            f -= 8) ;
            if (0 === i) i = 1 - c; else {
                if (i === s) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                a += Math.pow(2, r), i -= c;
            }
            return (p ? -1 : 1) * a * Math.pow(2, i - r);
        }, e.write = function(t, e, n, r, o, i) {
            var a, u, s, c = 8 * i - o - 1, f = (1 << c) - 1, l = f >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, d = r ? 1 : -1, v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, a = f) : (a = Math.floor(Math.log(e) / Math.LN2), 
            e * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (e += a + l >= 1 ? h / s : h * Math.pow(2, 1 - l)) * s >= 2 && (a++, 
            s /= 2), a + l >= f ? (u = 0, a = f) : a + l >= 1 ? (u = (e * s - 1) * Math.pow(2, o), 
            a += l) : (u = e * Math.pow(2, l - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + p] = 255 & u, 
            p += d, u /= 256, o -= 8) ;
            for (a = a << o | u, c += o; c > 0; t[n + p] = 255 & a, p += d, a /= 256, c -= 8) ;
            t[n + p - d] |= 128 * v;
        };
    },
    "92a7": function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("7530"), i = r(n("31fa")), a = r(n("8ed7")), u = n("0102"), s = {
            down: function(t) {
                t.commit("key_rotate", !0), null !== t.state.cur ? i.default.down({
                    key: "rotate",
                    once: !0,
                    callback: function() {
                        var e = t.state;
                        if (!e.lock) {
                            e.pause && a.default.pause(!1);
                            var n = e.cur;
                            if (null !== n) {
                                u.music.rotate && u.music.rotate();
                                var r = n.rotate();
                                (0, o.want)(r, e.matrix) && t.commit("moveBlock", r);
                            }
                        }
                    }
                }) : i.default.down({
                    key: "rotate",
                    begin: 200,
                    interval: 100,
                    callback: function() {
                        if (!t.state.lock) {
                            u.music.move && u.music.move();
                            var e = t.state;
                            if (!e.cur) {
                                var n = e.startLines;
                                n = n + 1 > 10 ? 0 : n + 1, t.commit("startLines", n);
                            }
                        }
                    }
                });
            },
            up: function(t) {
                t.commit("key_rotate", !1), i.default.up({
                    key: "rotate"
                });
            }
        };
        e.default = s;
    },
    9682: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("7530"), i = r(n("31fa")), a = r(n("8ed7")), u = n("f6b1"), s = n("0102"), c = {
            down: function(t) {
                t.commit("key_left", !0), i.default.down({
                    key: "left",
                    begin: 200,
                    interval: 100,
                    callback: function() {
                        var e = t.state;
                        if (!e.lock) {
                            s.music.move && s.music.move();
                            var n = e.cur;
                            if (null !== n) {
                                if (e.pause) return void a.default.pause(!1);
                                var r, i = n.left(), c = u.delays[e.speedRun - 1];
                                (0, o.want)(i, e.matrix) ? (i.timeStamp += parseInt(c, 10), t.commit("moveBlock", i), 
                                r = i.timeStamp) : (n.timeStamp += parseInt(parseInt(c, 10) / 1.5, 10), t.commit("moveBlock", n), 
                                r = n.timeStamp);
                                var f = u.speeds[e.speedRun - 1] - (Date.now() - r);
                                a.default.auto(f);
                            } else {
                                var l = e.speedStart;
                                l = l - 1 < 1 ? 6 : l - 1, t.commit("speedStart", l);
                            }
                        }
                    }
                });
            },
            up: function(t) {
                t.commit("key_left", !1), i.default.up({
                    key: "left"
                });
            }
        };
        e.default = c;
    },
    a03f: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("9a05")).default);
        }).call(this, n("543d").createPage);
    },
    a1c4: function(t, e, n) {
        function r() {
            return {
                value: !1
            };
        }
        function o(t) {
            t && (t.value = !0);
        }
        function i() {}
        function a(t) {
            return void 0 === t.size && (t.size = t.__iterate(s)), t.size;
        }
        function u(t, e) {
            if ("number" != typeof e) {
                var n = e >>> 0;
                if ("" + n !== e || 4294967295 === n) return NaN;
                e = n;
            }
            return e < 0 ? a(t) + e : e;
        }
        function s() {
            return !0;
        }
        function c(t, e, n) {
            return (0 === t && !p(t) || void 0 !== n && t <= -n) && (void 0 === e || void 0 !== n && e >= n);
        }
        function f(t, e) {
            return h(t, e, 0);
        }
        function l(t, e) {
            return h(t, e, e);
        }
        function h(t, e, n) {
            return void 0 === t ? n : p(t) ? e === 1 / 0 ? e : 0 | Math.max(0, e + t) : void 0 === e || e === t ? t : 0 | Math.min(e, t);
        }
        function p(t) {
            return t < 0 || 0 === t && 1 / t == -1 / 0;
        }
        function d(t) {
            return Boolean(t && t[pn]);
        }
        function v(t) {
            return Boolean(t && t[dn]);
        }
        function _(t) {
            return Boolean(t && t[vn]);
        }
        function y(t) {
            return v(t) || _(t);
        }
        function m(t) {
            return Boolean(t && t[bn]);
        }
        function g(t) {
            return Boolean(t && t[wn]);
        }
        function b(t) {
            return d(t) || g(t);
        }
        function w(t) {
            return Boolean(t && t[An]);
        }
        function A(t, e, n, r) {
            var o = 0 === t ? e : 1 === t ? n : [ e, n ];
            return r ? r.value = o : r = {
                value: o,
                done: !1
            }, r;
        }
        function S() {
            return {
                value: void 0,
                done: !0
            };
        }
        function k(t) {
            return !!O(t);
        }
        function E(t) {
            return t && "function" == typeof t.next;
        }
        function x(t) {
            var e = O(t);
            return e && e.call(t);
        }
        function O(t) {
            var e = t && (xn && t[xn] || t[On]);
            if ("function" == typeof e) return e;
        }
        function R(t) {
            return !(!Array.isArray(t) && "string" != typeof t) || t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && Number.isInteger(t.length) && t.length >= 0 && (0 === t.length ? 1 === Object.keys(t).length : t.hasOwnProperty(t.length - 1));
        }
        function C() {
            return Bn || (Bn = new $n([]));
        }
        function T(t) {
            var e = Array.isArray(t) ? new $n(t) : k(t) ? new Un(t) : void 0;
            if (e) return e.fromEntrySeq();
            if ("object" === (void 0 === t ? "undefined" : _typeof(t))) return new Dn(t);
            throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: " + t);
        }
        function P(t) {
            var e = M(t);
            if (e) return e;
            throw new TypeError("Expected Array or collection object of values: " + t);
        }
        function I(t) {
            var e = M(t);
            if (e) return e;
            if ("object" === (void 0 === t ? "undefined" : _typeof(t))) return new Dn(t);
            throw new TypeError("Expected Array or collection object of values, or keyed object: " + t);
        }
        function M(t) {
            return R(t) ? new $n(t) : k(t) ? new Un(t) : void 0;
        }
        function j(t) {
            return Boolean(t && t[zn]);
        }
        function $(t) {
            return j(t) && w(t);
        }
        function D(t) {
            return Boolean(t && "function" == typeof t.equals && "function" == typeof t.hashCode);
        }
        function B(t, e) {
            if (t === e || t !== t && e !== e) return !0;
            if (!t || !e) return !1;
            if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
                if (t = t.valueOf(), e = e.valueOf(), t === e || t !== t && e !== e) return !0;
                if (!t || !e) return !1;
            }
            return !!(D(t) && D(e) && t.equals(e));
        }
        function L(t) {
            return t >>> 1 & 1073741824 | 3221225471 & t;
        }
        function U(t) {
            switch (void 0 === t ? "undefined" : _typeof(t)) {
              case "boolean":
                return t ? 1108378657 : 1108378656;

              case "number":
                return z(t);

              case "string":
                return t.length > Jn ? N(t) : q(t);

              case "object":
              case "function":
                return null === t ? 1108378658 : "function" == typeof t.hashCode ? L(t.hashCode(t)) : (t.valueOf !== qn && "function" == typeof t.valueOf && (t = t.valueOf(t)), 
                F(t));

              case "undefined":
                return 1108378659;

              default:
                if ("function" == typeof t.toString) return q(t.toString());
                throw new Error("Value type " + (void 0 === t ? "undefined" : _typeof(t)) + " cannot be hashed.");
            }
        }
        function z(t) {
            if (t !== t || t === 1 / 0) return 0;
            var e = 0 | t;
            for (e !== t && (e ^= 4294967295 * t); t > 4294967295; ) e ^= t /= 4294967295;
            return L(e);
        }
        function N(t) {
            var e = Gn[t];
            return void 0 === e && (e = q(t), Xn === Kn && (Xn = 0, Gn = {}), Xn++, Gn[t] = e), 
            e;
        }
        function q(t) {
            for (var e = 0, n = 0; n < t.length; n++) e = 31 * e + t.charCodeAt(n) | 0;
            return L(e);
        }
        function F(t) {
            var e;
            if (Wn && void 0 !== (e = Ln.get(t))) return e;
            if (void 0 !== (e = t[Yn])) return e;
            if (!Hn) {
                if (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Yn])) return e;
                if (void 0 !== (e = H(t))) return e;
            }
            if (e = ++Vn, 1073741824 & Vn && (Vn = 0), Wn) Ln.set(t, e); else {
                if (void 0 !== Fn && !1 === Fn(t)) throw new Error("Non-extensible objects are not allowed as keys.");
                if (Hn) Object.defineProperty(t, Yn, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: e
                }); else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) t.propertyIsEnumerable = function() {
                    return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
                }, t.propertyIsEnumerable[Yn] = e; else {
                    if (void 0 === t.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                    t[Yn] = e;
                }
            }
            return e;
        }
        function H(t) {
            if (t && t.nodeType > 0) switch (t.nodeType) {
              case 1:
                return t.uniqueID;

              case 9:
                return t.documentElement && t.documentElement.uniqueID;
            }
        }
        function W(t) {
            var e = lt(t);
            return e._iter = t, e.size = t.size, e.flip = function() {
                return t;
            }, e.reverse = function() {
                var e = t.reverse.apply(this);
                return e.flip = function() {
                    return t.reverse();
                }, e;
            }, e.has = function(e) {
                return t.includes(e);
            }, e.includes = function(e) {
                return t.has(e);
            }, e.cacheResult = ht, e.__iterateUncached = function(e, n) {
                var r = this;
                return t.__iterate(function(t, n) {
                    return !1 !== e(n, t, r);
                }, n);
            }, e.__iteratorUncached = function(e, n) {
                if (e === En) {
                    var r = t.__iterator(e, n);
                    return new Cn(function() {
                        var t = r.next();
                        if (!t.done) {
                            var e = t.value[0];
                            t.value[0] = t.value[1], t.value[1] = e;
                        }
                        return t;
                    });
                }
                return t.__iterator(e === kn ? Sn : kn, n);
            }, e;
        }
        function V(t, e, n) {
            var r = lt(t);
            return r.size = t.size, r.has = function(e) {
                return t.has(e);
            }, r.get = function(r, o) {
                var i = t.get(r, hn);
                return i === hn ? o : e.call(n, i, r, t);
            }, r.__iterateUncached = function(r, o) {
                var i = this;
                return t.__iterate(function(t, o, a) {
                    return !1 !== r(e.call(n, t, o, a), o, i);
                }, o);
            }, r.__iteratorUncached = function(r, o) {
                var i = t.__iterator(En, o);
                return new Cn(function() {
                    var o = i.next();
                    if (o.done) return o;
                    var a = o.value, u = a[0];
                    return A(r, u, e.call(n, a[1], u, t), o);
                });
            }, r;
        }
        function Y(t, e) {
            var n = this, r = lt(t);
            return r._iter = t, r.size = t.size, r.reverse = function() {
                return t;
            }, t.flip && (r.flip = function() {
                var e = W(t);
                return e.reverse = function() {
                    return t.flip();
                }, e;
            }), r.get = function(n, r) {
                return t.get(e ? n : -1 - n, r);
            }, r.has = function(n) {
                return t.has(e ? n : -1 - n);
            }, r.includes = function(e) {
                return t.includes(e);
            }, r.cacheResult = ht, r.__iterate = function(n, r) {
                var o = this, i = 0;
                return r && a(t), t.__iterate(function(t, a) {
                    return n(t, e ? a : r ? o.size - ++i : i++, o);
                }, !r);
            }, r.__iterator = function(r, o) {
                var i = 0;
                o && a(t);
                var u = t.__iterator(En, !o);
                return new Cn(function() {
                    var t = u.next();
                    if (t.done) return t;
                    var a = t.value;
                    return A(r, e ? a[0] : o ? n.size - ++i : i++, a[1], t);
                });
            }, r;
        }
        function J(t, e, n, r) {
            var o = lt(t);
            return r && (o.has = function(r) {
                var o = t.get(r, hn);
                return o !== hn && !!e.call(n, o, r, t);
            }, o.get = function(r, o) {
                var i = t.get(r, hn);
                return i !== hn && e.call(n, i, r, t) ? i : o;
            }), o.__iterateUncached = function(o, i) {
                var a = this, u = 0;
                return t.__iterate(function(t, i, s) {
                    if (e.call(n, t, i, s)) return u++, o(t, r ? i : u - 1, a);
                }, i), u;
            }, o.__iteratorUncached = function(o, i) {
                var a = t.__iterator(En, i), u = 0;
                return new Cn(function() {
                    for (;;) {
                        var i = a.next();
                        if (i.done) return i;
                        var s = i.value, c = s[0], f = s[1];
                        if (e.call(n, f, c, t)) return A(o, r ? c : u++, f, i);
                    }
                });
            }, o;
        }
        function K(t, e, n) {
            var r = nr().asMutable();
            return t.__iterate(function(o, i) {
                r.update(e.call(n, o, i, t), 0, function(t) {
                    return t + 1;
                });
            }), r.asImmutable();
        }
        function X(t, e, n) {
            var r = v(t), o = (w(t) ? wr() : nr()).asMutable();
            t.__iterate(function(i, a) {
                o.update(e.call(n, i, a, t), function(t) {
                    return (t = t || []).push(r ? [ a, i ] : i), t;
                });
            });
            var i = ft(t);
            return o.map(function(e) {
                return st(t, i(e));
            }).asImmutable();
        }
        function G(t, e, n, r) {
            var o = t.size;
            if (c(e, n, o)) return t;
            var i = f(e, o), a = l(n, o);
            if (i !== i || a !== a) return G(t.toSeq().cacheResult(), e, n, r);
            var s, h = a - i;
            h === h && (s = h < 0 ? 0 : h);
            var p = lt(t);
            return p.size = 0 === s ? s : t.size && s || void 0, !r && m(t) && s >= 0 && (p.get = function(e, n) {
                return (e = u(this, e)) >= 0 && e < s ? t.get(e + i, n) : n;
            }), p.__iterateUncached = function(e, n) {
                var o = this;
                if (0 === s) return 0;
                if (n) return this.cacheResult().__iterate(e, n);
                var a = 0, u = !0, c = 0;
                return t.__iterate(function(t, n) {
                    if (!u || !(u = a++ < i)) return c++, !1 !== e(t, r ? n : c - 1, o) && c !== s;
                }), c;
            }, p.__iteratorUncached = function(e, n) {
                if (0 !== s && n) return this.cacheResult().__iterator(e, n);
                if (0 === s) return new Cn(S);
                var o = t.__iterator(e, n), a = 0, u = 0;
                return new Cn(function() {
                    for (;a++ < i; ) o.next();
                    if (++u > s) return S();
                    var t = o.next();
                    return r || e === kn || t.done ? t : A(e, u - 1, e === Sn ? void 0 : t.value[1], t);
                });
            }, p;
        }
        function Q(t, e, n) {
            var r = lt(t);
            return r.__iterateUncached = function(r, o) {
                var i = this;
                if (o) return this.cacheResult().__iterate(r, o);
                var a = 0;
                return t.__iterate(function(t, o, u) {
                    return e.call(n, t, o, u) && ++a && r(t, o, i);
                }), a;
            }, r.__iteratorUncached = function(r, o) {
                var i = this;
                if (o) return this.cacheResult().__iterator(r, o);
                var a = t.__iterator(En, o), u = !0;
                return new Cn(function() {
                    if (!u) return S();
                    var t = a.next();
                    if (t.done) return t;
                    var o = t.value, s = o[0], c = o[1];
                    return e.call(n, c, s, i) ? r === En ? t : A(r, s, c, t) : (u = !1, S());
                });
            }, r;
        }
        function Z(t, e, n, r) {
            var o = lt(t);
            return o.__iterateUncached = function(o, i) {
                var a = this;
                if (i) return this.cacheResult().__iterate(o, i);
                var u = !0, s = 0;
                return t.__iterate(function(t, i, c) {
                    if (!u || !(u = e.call(n, t, i, c))) return s++, o(t, r ? i : s - 1, a);
                }), s;
            }, o.__iteratorUncached = function(o, i) {
                var a = this;
                if (i) return this.cacheResult().__iterator(o, i);
                var u = t.__iterator(En, i), s = !0, c = 0;
                return new Cn(function() {
                    var t, i, f;
                    do {
                        if ((t = u.next()).done) return r || o === kn ? t : A(o, c++, o === Sn ? void 0 : t.value[1], t);
                        var l = t.value;
                        i = l[0], f = l[1], s && (s = e.call(n, f, i, a));
                    } while (s);
                    return o === En ? t : A(o, i, f, t);
                });
            }, o;
        }
        function tt(t, e) {
            var n = v(t), r = [ t ].concat(e).map(function(t) {
                return d(t) ? n && (t = yn(t)) : t = n ? T(t) : P(Array.isArray(t) ? t : [ t ]), 
                t;
            }).filter(function(t) {
                return 0 !== t.size;
            });
            if (0 === r.length) return t;
            if (1 === r.length) {
                var o = r[0];
                if (o === t || n && v(o) || _(t) && _(o)) return o;
            }
            var i = new $n(r);
            return n ? i = i.toKeyedSeq() : _(t) || (i = i.toSetSeq()), i = i.flatten(!0), i.size = r.reduce(function(t, e) {
                if (void 0 !== t) {
                    var n = e.size;
                    if (void 0 !== n) return t + n;
                }
            }, 0), i;
        }
        function et(t, e, n) {
            var r = lt(t);
            return r.__iterateUncached = function(o, i) {
                function a(t, c) {
                    t.__iterate(function(t, i) {
                        return (!e || c < e) && d(t) ? a(t, c + 1) : (u++, !1 === o(t, n ? i : u - 1, r) && (s = !0)), 
                        !s;
                    }, i);
                }
                if (i) return this.cacheResult().__iterate(o, i);
                var u = 0, s = !1;
                return a(t, 0), u;
            }, r.__iteratorUncached = function(r, o) {
                if (o) return this.cacheResult().__iterator(r, o);
                var i = t.__iterator(r, o), a = [], u = 0;
                return new Cn(function() {
                    for (;i; ) {
                        var t = i.next();
                        if (!1 === t.done) {
                            var s = t.value;
                            if (r === En && (s = s[1]), e && !(a.length < e) || !d(s)) return n ? t : A(r, u++, s, t);
                            a.push(i), i = s.__iterator(r, o);
                        } else i = a.pop();
                    }
                    return S();
                });
            }, r;
        }
        function nt(t, e, n) {
            var r = ft(t);
            return t.toSeq().map(function(o, i) {
                return r(e.call(n, o, i, t));
            }).flatten(!0);
        }
        function rt(t, e) {
            var n = lt(t);
            return n.size = t.size && 2 * t.size - 1, n.__iterateUncached = function(n, r) {
                var o = this, i = 0;
                return t.__iterate(function(t) {
                    return (!i || !1 !== n(e, i++, o)) && !1 !== n(t, i++, o);
                }, r), i;
            }, n.__iteratorUncached = function(n, r) {
                var o, i = t.__iterator(kn, r), a = 0;
                return new Cn(function() {
                    return (!o || a % 2) && (o = i.next()).done ? o : a % 2 ? A(n, a++, e) : A(n, a++, o.value, o);
                });
            }, n;
        }
        function ot(t, e, n) {
            e || (e = pt);
            var r = v(t), o = 0, i = t.toSeq().map(function(e, r) {
                return [ r, e, o++, n ? n(e, r, t) : e ];
            }).valueSeq().toArray();
            return i.sort(function(t, n) {
                return e(t[3], n[3]) || t[2] - n[2];
            }).forEach(r ? function(t, e) {
                i[e].length = 2;
            } : function(t, e) {
                i[e] = t[1];
            }), r ? In(i) : _(t) ? Mn(i) : jn(i);
        }
        function it(t, e, n) {
            if (e || (e = pt), n) {
                var r = t.toSeq().map(function(e, r) {
                    return [ e, n(e, r, t) ];
                }).reduce(function(t, n) {
                    return at(e, t[1], n[1]) ? n : t;
                });
                return r && r[0];
            }
            return t.reduce(function(t, n) {
                return at(e, t, n) ? n : t;
            });
        }
        function at(t, e, n) {
            var r = t(n, e);
            return 0 === r && n !== e && (void 0 === n || null === n || n !== n) || r > 0;
        }
        function ut(t, e, n, r) {
            var o = lt(t), i = new $n(n).map(function(t) {
                return t.size;
            });
            return o.size = r ? i.max() : i.min(), o.__iterate = function(t, e) {
                for (var n, r = this.__iterator(kn, e), o = 0; !(n = r.next()).done && !1 !== t(n.value, o++, this); ) ;
                return o;
            }, o.__iteratorUncached = function(t, o) {
                var i = n.map(function(t) {
                    return t = _n(t), x(o ? t.reverse() : t);
                }), a = 0, u = !1;
                return new Cn(function() {
                    var n;
                    return u || (n = i.map(function(t) {
                        return t.next();
                    }), u = r ? n.every(function(t) {
                        return t.done;
                    }) : n.some(function(t) {
                        return t.done;
                    })), u ? S() : A(t, a++, e.apply(null, n.map(function(t) {
                        return t.value;
                    })));
                });
            }, o;
        }
        function st(t, e) {
            return t === e ? t : m(t) ? e : t.constructor(e);
        }
        function ct(t) {
            if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t);
        }
        function ft(t) {
            return v(t) ? yn : _(t) ? mn : gn;
        }
        function lt(t) {
            return Object.create((v(t) ? In : _(t) ? Mn : jn).prototype);
        }
        function ht() {
            return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, 
            this) : Pn.prototype.cacheResult.call(this);
        }
        function pt(t, e) {
            return void 0 === t && void 0 === e ? 0 : void 0 === t ? 1 : void 0 === e ? -1 : t > e ? 1 : t < e ? -1 : 0;
        }
        function dt(t, e) {
            e = e || 0;
            for (var n = Math.max(0, t.length - e), r = new Array(n), o = 0; o < n; o++) r[o] = t[o + e];
            return r;
        }
        function vt(t, e) {
            if (!t) throw new Error(e);
        }
        function _t(t) {
            vt(t !== 1 / 0, "Cannot perform this action with an infinite size.");
        }
        function yt(t) {
            if (R(t) && "string" != typeof t) return t;
            if (w(t)) return t.toArray();
            throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: " + t);
        }
        function mt(t) {
            return t && ("function" != typeof t.constructor || "Object" === t.constructor.name);
        }
        function gt(t) {
            return "object" === (void 0 === t ? "undefined" : _typeof(t)) && (b(t) || Array.isArray(t) || mt(t));
        }
        function bt(t) {
            try {
                return "string" == typeof t ? JSON.stringify(t) : String(t);
            } catch (e) {
                return JSON.stringify(t);
            }
        }
        function wt(t, e) {
            return b(t) ? t.has(e) : gt(t) && Tn.call(t, e);
        }
        function At(t, e, n) {
            return b(t) ? t.get(e, n) : wt(t, e) ? "function" == typeof t.get ? t.get(e) : t[e] : n;
        }
        function St(t) {
            if (Array.isArray(t)) return dt(t);
            var e = {};
            for (var n in t) Tn.call(t, n) && (e[n] = t[n]);
            return e;
        }
        function kt(t, e) {
            if (!gt(t)) throw new TypeError("Cannot update non-data-structure value: " + t);
            if (b(t)) {
                if (!t.remove) throw new TypeError("Cannot update immutable value without .remove() method: " + t);
                return t.remove(e);
            }
            if (!Tn.call(t, e)) return t;
            var n = St(t);
            return Array.isArray(n) ? n.splice(e, 1) : delete n[e], n;
        }
        function Et(t, e, n) {
            if (!gt(t)) throw new TypeError("Cannot update non-data-structure value: " + t);
            if (b(t)) {
                if (!t.set) throw new TypeError("Cannot update immutable value without .set() method: " + t);
                return t.set(e, n);
            }
            if (Tn.call(t, e) && n === t[e]) return t;
            var r = St(t);
            return r[e] = n, r;
        }
        function xt(t, e, n, r) {
            r || (r = n, n = void 0);
            var o = Ot(b(t), t, yt(e), 0, n, r);
            return o === hn ? n : o;
        }
        function Ot(t, e, n, r, o, i) {
            var a = e === hn;
            if (r === n.length) {
                var u = a ? o : e, s = i(u);
                return s === u ? e : s;
            }
            if (!a && !gt(e)) throw new TypeError("Cannot update within non-data-structure value in path [" + n.slice(0, r).map(bt) + "]: " + e);
            var c = n[r], f = a ? hn : At(e, c, hn), l = Ot(f === hn ? t : b(f), f, n, r + 1, o, i);
            return l === f ? e : l === hn ? kt(e, c) : Et(a ? t ? ne() : {} : e, c, l);
        }
        function Rt(t, e, n) {
            return xt(t, e, hn, function() {
                return n;
            });
        }
        function Ct(t, e) {
            return Rt(this, t, e);
        }
        function Tt(t, e) {
            return xt(t, e, function() {
                return hn;
            });
        }
        function Pt(t) {
            return Tt(this, t);
        }
        function It(t, e, n, r) {
            return xt(t, [ e ], n, r);
        }
        function Mt(t, e, n) {
            return 1 === arguments.length ? t(this) : It(this, t, e, n);
        }
        function jt(t, e, n) {
            return xt(this, t, e, n);
        }
        function $t() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return Bt(this, t);
        }
        function Dt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; ) e[n] = arguments[n + 1];
            if ("function" != typeof t) throw new TypeError("Invalid merger function: " + t);
            return Bt(this, e, t);
        }
        function Bt(t, e, n) {
            for (var r = [], o = 0; o < e.length; o++) {
                var i = yn(e[o]);
                0 !== i.size && r.push(i);
            }
            return 0 === r.length ? t : 0 !== t.toSeq().size || t.__ownerID || 1 !== r.length ? t.withMutations(function(t) {
                for (var e = n ? function(e, r) {
                    It(t, r, hn, function(t) {
                        return t === hn ? e : n(t, e, r);
                    });
                } : function(e, n) {
                    t.set(n, e);
                }, o = 0; o < r.length; o++) r[o].forEach(e);
            }) : t.constructor(r[0]);
        }
        function Lt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; ) e[n] = arguments[n + 1];
            return Ft(t, e);
        }
        function Ut(t, e) {
            for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
            return Ft(e, n, t);
        }
        function zt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; ) e[n] = arguments[n + 1];
            return qt(t, e);
        }
        function Nt(t, e) {
            for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
            return qt(e, n, t);
        }
        function qt(t, e, n) {
            return Ft(t, e, Ht(n));
        }
        function Ft(t, e, n) {
            if (!gt(t)) throw new TypeError("Cannot merge into non-data-structure value: " + t);
            if (b(t)) return "function" == typeof n && t.mergeWith ? t.mergeWith.apply(t, [ n ].concat(e)) : t.merge ? t.merge.apply(t, e) : t.concat.apply(t, e);
            for (var r = Array.isArray(t), o = t, i = r ? mn : yn, a = r ? function(e) {
                o === t && (o = St(o)), o.push(e);
            } : function(e, r) {
                var i = Tn.call(o, r), a = i && n ? n(o[r], e, r) : e;
                i && a === o[r] || (o === t && (o = St(o)), o[r] = a);
            }, u = 0; u < e.length; u++) i(e[u]).forEach(a);
            return o;
        }
        function Ht(t) {
            function e(n, r, o) {
                return gt(n) && gt(r) ? Ft(n, [ r ], e) : t ? t(n, r, o) : r;
            }
            return e;
        }
        function Wt() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return qt(this, t);
        }
        function Vt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; ) e[n] = arguments[n + 1];
            return qt(this, e, t);
        }
        function Yt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; ) e[n] = arguments[n + 1];
            return xt(this, t, ne(), function(t) {
                return Ft(t, e);
            });
        }
        function Jt(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; ) e[n] = arguments[n + 1];
            return xt(this, t, ne(), function(t) {
                return qt(t, e);
            });
        }
        function Kt(t) {
            var e = this.asMutable();
            return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
        }
        function Xt() {
            return this.__ownerID ? this : this.__ensureOwner(new i());
        }
        function Gt() {
            return this.__ensureOwner();
        }
        function Qt() {
            return this.__altered;
        }
        function Zt(t, e) {
            return A(t, e[0], e[1]);
        }
        function te(t, e) {
            return {
                node: t,
                index: 0,
                __prev: e
            };
        }
        function ee(t, e, n, r) {
            var o = Object.create(rr);
            return o.size = t, o._root = e, o.__ownerID = n, o.__hash = r, o.__altered = !1, 
            o;
        }
        function ne() {
            return cr || (cr = ee(0));
        }
        function re(t, e, n) {
            var o, i;
            if (t._root) {
                var a = r(), u = r();
                if (o = oe(t._root, t.__ownerID, 0, void 0, e, n, a, u), !u.value) return t;
                i = t.size + (a.value ? n === hn ? -1 : 1 : 0);
            } else {
                if (n === hn) return t;
                i = 1, o = new or(t.__ownerID, [ [ e, n ] ]);
            }
            return t.__ownerID ? (t.size = i, t._root = o, t.__hash = void 0, t.__altered = !0, 
            t) : o ? ee(i, o) : ne();
        }
        function oe(t, e, n, r, i, a, u, s) {
            return t ? t.update(e, n, r, i, a, u, s) : a === hn ? t : (o(s), o(u), new sr(e, r, [ i, a ]));
        }
        function ie(t) {
            return t.constructor === sr || t.constructor === ur;
        }
        function ae(t, e, n, r, o) {
            if (t.keyHash === r) return new ur(e, r, [ t.entry, o ]);
            var i, a = (0 === n ? t.keyHash : t.keyHash >>> n) & ln, u = (0 === n ? r : r >>> n) & ln, s = a === u ? [ ae(t, e, n + cn, r, o) ] : (i = new sr(e, r, o), 
            a < u ? [ t, i ] : [ i, t ]);
            return new ir(e, 1 << a | 1 << u, s);
        }
        function ue(t, e, n, r) {
            t || (t = new i());
            for (var o = new sr(t, U(n), [ n, r ]), a = 0; a < e.length; a++) {
                var u = e[a];
                o = o.update(t, 0, void 0, u[0], u[1]);
            }
            return o;
        }
        function se(t, e, n, r) {
            for (var o = 0, i = 0, a = new Array(n), u = 0, s = 1, c = e.length; u < c; u++, 
            s <<= 1) {
                var f = e[u];
                void 0 !== f && u !== r && (o |= s, a[i++] = f);
            }
            return new ir(t, o, a);
        }
        function ce(t, e, n, r, o) {
            for (var i = 0, a = new Array(fn), u = 0; 0 !== n; u++, n >>>= 1) a[u] = 1 & n ? e[i++] : void 0;
            return a[r] = o, new ar(t, i + 1, a);
        }
        function fe(t) {
            return t -= t >> 1 & 1431655765, t = (858993459 & t) + (t >> 2 & 858993459), t = t + (t >> 4) & 252645135, 
            t += t >> 8, 127 & (t += t >> 16);
        }
        function le(t, e, n, r) {
            var o = r ? t : dt(t);
            return o[e] = n, o;
        }
        function he(t, e, n, r) {
            var o = t.length + 1;
            if (r && e + 1 === o) return t[e] = n, t;
            for (var i = new Array(o), a = 0, u = 0; u < o; u++) u === e ? (i[u] = n, a = -1) : i[u] = t[u + a];
            return i;
        }
        function pe(t, e, n) {
            var r = t.length - 1;
            if (n && e === r) return t.pop(), t;
            for (var o = new Array(r), i = 0, a = 0; a < r; a++) a === e && (i = 1), o[a] = t[a + i];
            return o;
        }
        function de(t) {
            return Boolean(t && t[dr]);
        }
        function ve(t, e) {
            function n(t, e, n) {
                return 0 === e ? r(t, n) : o(t, e, n);
            }
            function r(t, n) {
                var r = n === u ? s && s.array : t && t.array, o = n > i ? 0 : i - n, c = a - n;
                return c > fn && (c = fn), function() {
                    if (o === c) return br;
                    var t = e ? --c : o++;
                    return r && r[t];
                };
            }
            function o(t, r, o) {
                var u, s = t && t.array, c = o > i ? 0 : i - o >> r, f = 1 + (a - o >> r);
                return f > fn && (f = fn), function() {
                    for (;;) {
                        if (u) {
                            var t = u();
                            if (t !== br) return t;
                            u = null;
                        }
                        if (c === f) return br;
                        var i = e ? --f : c++;
                        u = n(s && s[i], r - cn, o + (i << r));
                    }
                };
            }
            var i = t._origin, a = t._capacity, u = Se(a), s = t._tail;
            return n(t._root, t._level, 0);
        }
        function _e(t, e, n, r, o, i, a) {
            var u = Object.create(_r);
            return u.size = e - t, u._origin = t, u._capacity = e, u._level = n, u._root = r, 
            u._tail = o, u.__ownerID = i, u.__hash = a, u.__altered = !1, u;
        }
        function ye() {
            return mr || (mr = _e(0, 0, cn));
        }
        function me(t, e, n) {
            if ((e = u(t, e)) !== e) return t;
            if (e >= t.size || e < 0) return t.withMutations(function(t) {
                e < 0 ? Ae(t, e).set(0, n) : Ae(t, 0, e + 1).set(e, n);
            });
            e += t._origin;
            var o = t._tail, i = t._root, a = r();
            return e >= Se(t._capacity) ? o = ge(o, t.__ownerID, 0, e, n, a) : i = ge(i, t.__ownerID, t._level, e, n, a), 
            a.value ? t.__ownerID ? (t._root = i, t._tail = o, t.__hash = void 0, t.__altered = !0, 
            t) : _e(t._origin, t._capacity, t._level, i, o) : t;
        }
        function ge(t, e, n, r, i, a) {
            var u, s = r >>> n & ln, c = t && s < t.array.length;
            if (!c && void 0 === i) return t;
            if (n > 0) {
                var f = t && t.array[s], l = ge(f, e, n - cn, r, i, a);
                return l === f ? t : (u = be(t, e), u.array[s] = l, u);
            }
            return c && t.array[s] === i ? t : (a && o(a), u = be(t, e), void 0 === i && s === u.array.length - 1 ? u.array.pop() : u.array[s] = i, 
            u);
        }
        function be(t, e) {
            return e && t && e === t.ownerID ? t : new yr(t ? t.array.slice() : [], e);
        }
        function we(t, e) {
            if (e >= Se(t._capacity)) return t._tail;
            if (e < 1 << t._level + cn) {
                for (var n = t._root, r = t._level; n && r > 0; ) n = n.array[e >>> r & ln], r -= cn;
                return n;
            }
        }
        function Ae(t, e, n) {
            void 0 !== e && (e |= 0), void 0 !== n && (n |= 0);
            var r = t.__ownerID || new i(), o = t._origin, a = t._capacity, u = o + e, s = void 0 === n ? a : n < 0 ? a + n : o + n;
            if (u === o && s === a) return t;
            if (u >= s) return t.clear();
            for (var c = t._level, f = t._root, l = 0; u + l < 0; ) f = new yr(f && f.array.length ? [ void 0, f ] : [], r), 
            l += 1 << (c += cn);
            l && (u += l, o += l, s += l, a += l);
            for (var h = Se(a), p = Se(s); p >= 1 << c + cn; ) f = new yr(f && f.array.length ? [ f ] : [], r), 
            c += cn;
            var d = t._tail, v = p < h ? we(t, s - 1) : p > h ? new yr([], r) : d;
            if (d && p > h && u < a && d.array.length) {
                for (var _ = f = be(f, r), y = c; y > cn; y -= cn) {
                    var m = h >>> y & ln;
                    _ = _.array[m] = be(_.array[m], r);
                }
                _.array[h >>> cn & ln] = d;
            }
            if (s < a && (v = v && v.removeAfter(r, 0, s)), u >= p) u -= p, s -= p, c = cn, 
            f = null, v = v && v.removeBefore(r, 0, u); else if (u > o || p < h) {
                for (l = 0; f; ) {
                    var g = u >>> c & ln;
                    if (g !== p >>> c & ln) break;
                    g && (l += (1 << c) * g), c -= cn, f = f.array[g];
                }
                f && u > o && (f = f.removeBefore(r, c, u - l)), f && p < h && (f = f.removeAfter(r, c, p - l)), 
                l && (u -= l, s -= l);
            }
            return t.__ownerID ? (t.size = s - u, t._origin = u, t._capacity = s, t._level = c, 
            t._root = f, t._tail = v, t.__hash = void 0, t.__altered = !0, t) : _e(u, s, c, f, v);
        }
        function Se(t) {
            return t < fn ? 0 : t - 1 >>> cn << cn;
        }
        function ke(t, e, n, r) {
            var o = Object.create(wr.prototype);
            return o.size = t ? t.size : 0, o._map = t, o._list = e, o.__ownerID = n, o.__hash = r, 
            o;
        }
        function Ee() {
            return gr || (gr = ke(ne(), ye()));
        }
        function xe(t, e, n) {
            var r, o, i = t._map, a = t._list, u = i.get(e), s = void 0 !== u;
            if (n === hn) {
                if (!s) return t;
                a.size >= fn && a.size >= 2 * i.size ? (o = a.filter(function(t, e) {
                    return void 0 !== t && u !== e;
                }), r = o.toKeyedSeq().map(function(t) {
                    return t[0];
                }).flip().toMap(), t.__ownerID && (r.__ownerID = o.__ownerID = t.__ownerID)) : (r = i.remove(e), 
                o = u === a.size - 1 ? a.pop() : a.set(u, void 0));
            } else if (s) {
                if (n === a.get(u)[1]) return t;
                r = i, o = a.set(u, [ e, n ]);
            } else r = i.set(e, a.size), o = a.set(a.size, [ e, n ]);
            return t.__ownerID ? (t.size = r.size, t._map = r, t._list = o, t.__hash = void 0, 
            t) : ke(r, o);
        }
        function Oe(t) {
            return Boolean(t && t[Ar]);
        }
        function Re(t, e, n, r) {
            var o = Object.create(Er);
            return o.size = t, o._head = e, o.__ownerID = n, o.__hash = r, o.__altered = !1, 
            o;
        }
        function Ce() {
            return kr || (kr = Re(0));
        }
        function Te(t) {
            return Boolean(t && t[xr]);
        }
        function Pe(t) {
            return Te(t) && w(t);
        }
        function Ie(t, e) {
            if (t === e) return !0;
            if (!d(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || v(t) !== v(e) || _(t) !== _(e) || w(t) !== w(e)) return !1;
            if (0 === t.size && 0 === e.size) return !0;
            var n = !y(t);
            if (w(t)) {
                var r = t.entries();
                return e.every(function(t, e) {
                    var o = r.next().value;
                    return o && B(o[1], t) && (n || B(o[0], e));
                }) && r.next().done;
            }
            var o = !1;
            if (void 0 === t.size) if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult(); else {
                o = !0;
                var i = t;
                t = e, e = i;
            }
            var a = !0, u = e.__iterate(function(e, r) {
                if (n ? !t.has(e) : o ? !B(e, t.get(r, hn)) : !B(t.get(r, hn), e)) return a = !1, 
                !1;
            });
            return a && t.size === u;
        }
        function Me(t, e) {
            var n = function(n) {
                t.prototype[n] = e[n];
            };
            return Object.keys(e).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(n), 
            t;
        }
        function je(t) {
            if (!t || "object" !== (void 0 === t ? "undefined" : _typeof(t))) return t;
            if (!d(t)) {
                if (!gt(t)) return t;
                t = Pn(t);
            }
            if (v(t)) {
                var e = {};
                return t.__iterate(function(t, n) {
                    e[n] = je(t);
                }), e;
            }
            var n = [];
            return t.__iterate(function(t) {
                n.push(je(t));
            }), n;
        }
        function $e(t, e) {
            return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e);
        }
        function De(t, e) {
            var n = Object.create(Cr);
            return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n;
        }
        function Be() {
            return Rr || (Rr = De(ne()));
        }
        function Le(t, e, n) {
            for (var r = yt(e), o = 0; o !== r.length; ) if ((t = At(t, r[o++], hn)) === hn) return n;
            return t;
        }
        function Ue(t, e) {
            return Le(this, t, e);
        }
        function ze(t, e) {
            return Le(t, e, hn) !== hn;
        }
        function Ne() {
            _t(this.size);
            var t = {};
            return this.__iterate(function(e, n) {
                t[n] = e;
            }), t;
        }
        function qe(t, e, n, r, o, i) {
            return _t(t.size), t.__iterate(function(t, i, a) {
                o ? (o = !1, n = t) : n = e.call(r, n, t, i, a);
            }, i), n;
        }
        function Fe(t, e) {
            return e;
        }
        function He(t, e) {
            return [ e, t ];
        }
        function We(t) {
            return function() {
                return !t.apply(this, arguments);
            };
        }
        function Ve(t) {
            return function() {
                return -t.apply(this, arguments);
            };
        }
        function Ye() {
            return dt(arguments);
        }
        function Je(t, e) {
            return t < e ? 1 : t > e ? -1 : 0;
        }
        function Ke(t) {
            if (t.size === 1 / 0) return 0;
            var e = w(t), n = v(t), r = e ? 1 : 0;
            return Xe(t.__iterate(n ? e ? function(t, e) {
                r = 31 * r + Ge(U(t), U(e)) | 0;
            } : function(t, e) {
                r = r + Ge(U(t), U(e)) | 0;
            } : e ? function(t) {
                r = 31 * r + U(t) | 0;
            } : function(t) {
                r = r + U(t) | 0;
            }), r);
        }
        function Xe(t, e) {
            return e = Nn(e, 3432918353), e = Nn(e << 15 | e >>> -15, 461845907), e = Nn(e << 13 | e >>> -13, 5), 
            e = (e + 3864292196 | 0) ^ t, e = Nn(e ^ e >>> 16, 2246822507), e = Nn(e ^ e >>> 13, 3266489909), 
            e = L(e ^ e >>> 16);
        }
        function Ge(t, e) {
            return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0;
        }
        function Qe(t, e) {
            var n = Object.create(Br);
            return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n;
        }
        function Ze() {
            return Dr || (Dr = Qe(Ee()));
        }
        function tn(t, e, n) {
            var r = Object.create(Object.getPrototypeOf(t));
            return r._values = e, r.__ownerID = n, r;
        }
        function en(t) {
            return t.constructor.displayName || t.constructor.name || "Record";
        }
        function nn(t) {
            return T(t._keys.map(function(e) {
                return [ e, t.get(e) ];
            }));
        }
        function rn(t, e) {
            try {
                Object.defineProperty(t, e, {
                    get: function() {
                        return this.get(e);
                    },
                    set: function(t) {
                        vt(this.__ownerID, "Cannot set on an immutable record."), this.set(e, t);
                    }
                });
            } catch (t) {}
        }
        function on(t, e) {
            return an([], e || un, t, "", e && e.length > 2 ? [] : void 0, {
                "": t
            });
        }
        function an(t, e, n, r, o, i) {
            var a = Array.isArray(n) ? Mn : mt(n) ? In : null;
            if (a) {
                if (~t.indexOf(n)) throw new TypeError("Cannot convert circular structure to Immutable");
                t.push(n), o && "" !== r && o.push(r);
                var u = e.call(i, r, a(n).map(function(r, i) {
                    return an(t, e, r, i, o, n);
                }), o && o.slice());
                return t.pop(), o && o.pop(), u;
            }
            return n;
        }
        function un(t, e) {
            return v(e) ? e.toMap() : e.toList();
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.is = B, e.fromJS = on, e.hash = U, e.isImmutable = b, e.isCollection = d, 
        e.isKeyed = v, e.isIndexed = _, e.isAssociative = y, e.isOrdered = w, e.isValueObject = D, 
        e.get = At, e.getIn = Le, e.has = wt, e.hasIn = ze, e.merge = Lt, e.mergeDeep = zt, 
        e.mergeWith = Ut, e.mergeDeepWith = Nt, e.remove = kt, e.removeIn = Tt, e.set = Et, 
        e.setIn = Rt, e.update = It, e.updateIn = xt, e.Repeat = e.Range = e.Record = e.OrderedSet = e.Set = e.Stack = e.List = e.OrderedMap = e.Map = e.Seq = e.Iterable = e.Collection = e.version = e.default = void 0;
        var sn = "delete", cn = 5, fn = 1 << cn, ln = fn - 1, hn = {}, pn = "@@__IMMUTABLE_ITERABLE__@@", dn = "@@__IMMUTABLE_KEYED__@@", vn = "@@__IMMUTABLE_INDEXED__@@", _n = function(t) {
            return d(t) ? t : Pn(t);
        };
        e.Collection = _n;
        var yn = function(t) {
            function e(t) {
                return v(t) ? t : In(t);
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e;
        }(_n), mn = function(t) {
            function e(t) {
                return _(t) ? t : Mn(t);
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e;
        }(_n), gn = function(t) {
            function e(t) {
                return d(t) && !y(t) ? t : jn(t);
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e;
        }(_n);
        _n.Keyed = yn, _n.Indexed = mn, _n.Set = gn;
        var bn = "@@__IMMUTABLE_SEQ__@@", wn = "@@__IMMUTABLE_RECORD__@@", An = "@@__IMMUTABLE_ORDERED__@@", Sn = 0, kn = 1, En = 2, xn = "function" == typeof Symbol && Symbol.iterator, On = "@@iterator", Rn = xn || On, Cn = function(t) {
            this.next = t;
        };
        Cn.prototype.toString = function() {
            return "[Iterator]";
        }, Cn.KEYS = Sn, Cn.VALUES = kn, Cn.ENTRIES = En, Cn.prototype.inspect = Cn.prototype.toSource = function() {
            return this.toString();
        }, Cn.prototype[Rn] = function() {
            return this;
        };
        var Tn = Object.prototype.hasOwnProperty, Pn = function(t) {
            function e(t) {
                return null === t || void 0 === t ? C() : b(t) ? t.toSeq() : I(t);
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.toSeq = function() {
                return this;
            }, e.prototype.toString = function() {
                return this.__toString("Seq {", "}");
            }, e.prototype.cacheResult = function() {
                return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), 
                this.size = this._cache.length), this;
            }, e.prototype.__iterate = function(t, e) {
                var n = this._cache;
                if (n) {
                    for (var r = n.length, o = 0; o !== r; ) {
                        var i = n[e ? r - ++o : o++];
                        if (!1 === t(i[1], i[0], this)) break;
                    }
                    return o;
                }
                return this.__iterateUncached(t, e);
            }, e.prototype.__iterator = function(t, e) {
                var n = this._cache;
                if (n) {
                    var r = n.length, o = 0;
                    return new Cn(function() {
                        if (o === r) return S();
                        var i = n[e ? r - ++o : o++];
                        return A(t, i[0], i[1]);
                    });
                }
                return this.__iteratorUncached(t, e);
            }, e;
        }(_n);
        e.Seq = Pn;
        var In = function(t) {
            function e(t) {
                return null === t || void 0 === t ? C().toKeyedSeq() : d(t) ? v(t) ? t.toSeq() : t.fromEntrySeq() : g(t) ? t.toSeq() : T(t);
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.toKeyedSeq = function() {
                return this;
            }, e;
        }(Pn), Mn = function(t) {
            function e(t) {
                return null === t || void 0 === t ? C() : d(t) ? v(t) ? t.entrySeq() : t.toIndexedSeq() : g(t) ? t.toSeq().entrySeq() : P(t);
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.of = function() {
                return e(arguments);
            }, e.prototype.toIndexedSeq = function() {
                return this;
            }, e.prototype.toString = function() {
                return this.__toString("Seq [", "]");
            }, e;
        }(Pn), jn = function(t) {
            function e(t) {
                return (d(t) && !y(t) ? t : Mn(t)).toSetSeq();
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.of = function() {
                return e(arguments);
            }, e.prototype.toSetSeq = function() {
                return this;
            }, e;
        }(Pn);
        Pn.isSeq = m, Pn.Keyed = In, Pn.Set = jn, Pn.Indexed = Mn, Pn.prototype[bn] = !0;
        var $n = function(t) {
            function e(t) {
                this._array = t, this.size = t.length;
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.get = function(t, e) {
                return this.has(t) ? this._array[u(this, t)] : e;
            }, e.prototype.__iterate = function(t, e) {
                for (var n = this._array, r = n.length, o = 0; o !== r; ) {
                    var i = e ? r - ++o : o++;
                    if (!1 === t(n[i], i, this)) break;
                }
                return o;
            }, e.prototype.__iterator = function(t, e) {
                var n = this._array, r = n.length, o = 0;
                return new Cn(function() {
                    if (o === r) return S();
                    var i = e ? r - ++o : o++;
                    return A(t, i, n[i]);
                });
            }, e;
        }(Mn), Dn = function(t) {
            function e(t) {
                var e = Object.keys(t);
                this._object = t, this._keys = e, this.size = e.length;
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.get = function(t, e) {
                return void 0 === e || this.has(t) ? this._object[t] : e;
            }, e.prototype.has = function(t) {
                return Tn.call(this._object, t);
            }, e.prototype.__iterate = function(t, e) {
                for (var n = this._object, r = this._keys, o = r.length, i = 0; i !== o; ) {
                    var a = r[e ? o - ++i : i++];
                    if (!1 === t(n[a], a, this)) break;
                }
                return i;
            }, e.prototype.__iterator = function(t, e) {
                var n = this._object, r = this._keys, o = r.length, i = 0;
                return new Cn(function() {
                    if (i === o) return S();
                    var a = r[e ? o - ++i : i++];
                    return A(t, a, n[a]);
                });
            }, e;
        }(In);
        Dn.prototype[An] = !0;
        var Bn, Ln, Un = function(t) {
            function e(t) {
                this._collection = t, this.size = t.length || t.size;
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.__iterateUncached = function(t, e) {
                if (e) return this.cacheResult().__iterate(t, e);
                var n, r = x(this._collection), o = 0;
                if (E(r)) for (;!(n = r.next()).done && !1 !== t(n.value, o++, this); ) ;
                return o;
            }, e.prototype.__iteratorUncached = function(t, e) {
                if (e) return this.cacheResult().__iterator(t, e);
                var n = x(this._collection);
                if (!E(n)) return new Cn(S);
                var r = 0;
                return new Cn(function() {
                    var e = n.next();
                    return e.done ? e : A(t, r++, e.value);
                });
            }, e;
        }(Mn), zn = "@@__IMMUTABLE_MAP__@@", Nn = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(t, e) {
            var n = 65535 & (t |= 0), r = 65535 & (e |= 0);
            return n * r + ((t >>> 16) * r + n * (e >>> 16) << 16 >>> 0) | 0;
        }, qn = Object.prototype.valueOf, Fn = Object.isExtensible, Hn = function() {
            try {
                return Object.defineProperty({}, "@", {}), !0;
            } catch (t) {
                return !1;
            }
        }(), Wn = "function" == typeof WeakMap;
        Wn && (Ln = new WeakMap());
        var Vn = 0, Yn = "__immutablehash__";
        "function" == typeof Symbol && (Yn = Symbol(Yn));
        var Jn = 16, Kn = 255, Xn = 0, Gn = {}, Qn = function(t) {
            function e(t, e) {
                this._iter = t, this._useKeys = e, this.size = t.size;
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.get = function(t, e) {
                return this._iter.get(t, e);
            }, e.prototype.has = function(t) {
                return this._iter.has(t);
            }, e.prototype.valueSeq = function() {
                return this._iter.valueSeq();
            }, e.prototype.reverse = function() {
                var t = this, e = Y(this, !0);
                return this._useKeys || (e.valueSeq = function() {
                    return t._iter.toSeq().reverse();
                }), e;
            }, e.prototype.map = function(t, e) {
                var n = this, r = V(this, t, e);
                return this._useKeys || (r.valueSeq = function() {
                    return n._iter.toSeq().map(t, e);
                }), r;
            }, e.prototype.__iterate = function(t, e) {
                var n = this;
                return this._iter.__iterate(function(e, r) {
                    return t(e, r, n);
                }, e);
            }, e.prototype.__iterator = function(t, e) {
                return this._iter.__iterator(t, e);
            }, e;
        }(In);
        Qn.prototype[An] = !0;
        var Zn = function(t) {
            function e(t) {
                this._iter = t, this.size = t.size;
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.includes = function(t) {
                return this._iter.includes(t);
            }, e.prototype.__iterate = function(t, e) {
                var n = this, r = 0;
                return e && a(this), this._iter.__iterate(function(o) {
                    return t(o, e ? n.size - ++r : r++, n);
                }, e);
            }, e.prototype.__iterator = function(t, e) {
                var n = this, r = this._iter.__iterator(kn, e), o = 0;
                return e && a(this), new Cn(function() {
                    var i = r.next();
                    return i.done ? i : A(t, e ? n.size - ++o : o++, i.value, i);
                });
            }, e;
        }(Mn), tr = function(t) {
            function e(t) {
                this._iter = t, this.size = t.size;
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.has = function(t) {
                return this._iter.includes(t);
            }, e.prototype.__iterate = function(t, e) {
                var n = this;
                return this._iter.__iterate(function(e) {
                    return t(e, e, n);
                }, e);
            }, e.prototype.__iterator = function(t, e) {
                var n = this._iter.__iterator(kn, e);
                return new Cn(function() {
                    var e = n.next();
                    return e.done ? e : A(t, e.value, e.value, e);
                });
            }, e;
        }(jn), er = function(t) {
            function e(t) {
                this._iter = t, this.size = t.size;
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.entrySeq = function() {
                return this._iter.toSeq();
            }, e.prototype.__iterate = function(t, e) {
                var n = this;
                return this._iter.__iterate(function(e) {
                    if (e) {
                        ct(e);
                        var r = d(e);
                        return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n);
                    }
                }, e);
            }, e.prototype.__iterator = function(t, e) {
                var n = this._iter.__iterator(kn, e);
                return new Cn(function() {
                    for (;;) {
                        var e = n.next();
                        if (e.done) return e;
                        var r = e.value;
                        if (r) {
                            ct(r);
                            var o = d(r);
                            return A(t, o ? r.get(0) : r[0], o ? r.get(1) : r[1], e);
                        }
                    }
                });
            }, e;
        }(In);
        Zn.prototype.cacheResult = Qn.prototype.cacheResult = tr.prototype.cacheResult = er.prototype.cacheResult = ht;
        var nr = function(t) {
            function e(e) {
                return null === e || void 0 === e ? ne() : j(e) && !w(e) ? e : ne().withMutations(function(n) {
                    var r = t(e);
                    _t(r.size), r.forEach(function(t, e) {
                        return n.set(e, t);
                    });
                });
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.of = function() {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                return ne().withMutations(function(e) {
                    for (var n = 0; n < t.length; n += 2) {
                        if (n + 1 >= t.length) throw new Error("Missing value for key: " + t[n]);
                        e.set(t[n], t[n + 1]);
                    }
                });
            }, e.prototype.toString = function() {
                return this.__toString("Map {", "}");
            }, e.prototype.get = function(t, e) {
                return this._root ? this._root.get(0, void 0, t, e) : e;
            }, e.prototype.set = function(t, e) {
                return re(this, t, e);
            }, e.prototype.remove = function(t) {
                return re(this, t, hn);
            }, e.prototype.deleteAll = function(t) {
                var e = _n(t);
                return 0 === e.size ? this : this.withMutations(function(t) {
                    e.forEach(function(e) {
                        return t.remove(e);
                    });
                });
            }, e.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, 
                this.__hash = void 0, this.__altered = !0, this) : ne();
            }, e.prototype.sort = function(t) {
                return wr(ot(this, t));
            }, e.prototype.sortBy = function(t, e) {
                return wr(ot(this, e, t));
            }, e.prototype.map = function(t, e) {
                return this.withMutations(function(n) {
                    n.forEach(function(r, o) {
                        n.set(o, t.call(e, r, o, n));
                    });
                });
            }, e.prototype.__iterator = function(t, e) {
                return new fr(this, t, e);
            }, e.prototype.__iterate = function(t, e) {
                var n = this, r = 0;
                return this._root && this._root.iterate(function(e) {
                    return r++, t(e[1], e[0], n);
                }, e), r;
            }, e.prototype.__ensureOwner = function(t) {
                return t === this.__ownerID ? this : t ? ee(this.size, this._root, t, this.__hash) : 0 === this.size ? ne() : (this.__ownerID = t, 
                this.__altered = !1, this);
            }, e;
        }(yn);
        e.Map = nr, nr.isMap = j;
        var rr = nr.prototype;
        rr[zn] = !0, rr[sn] = rr.remove, rr.removeAll = rr.deleteAll, rr.setIn = Ct, rr.removeIn = rr.deleteIn = Pt, 
        rr.update = Mt, rr.updateIn = jt, rr.merge = rr.concat = $t, rr.mergeWith = Dt, 
        rr.mergeDeep = Wt, rr.mergeDeepWith = Vt, rr.mergeIn = Yt, rr.mergeDeepIn = Jt, 
        rr.withMutations = Kt, rr.wasAltered = Qt, rr.asImmutable = Gt, rr["@@transducer/init"] = rr.asMutable = Xt, 
        rr["@@transducer/step"] = function(t, e) {
            return t.set(e[0], e[1]);
        }, rr["@@transducer/result"] = function(t) {
            return t.asImmutable();
        };
        var or = function(t, e) {
            this.ownerID = t, this.entries = e;
        };
        or.prototype.get = function(t, e, n, r) {
            for (var o = this.entries, i = 0, a = o.length; i < a; i++) if (B(n, o[i][0])) return o[i][1];
            return r;
        }, or.prototype.update = function(t, e, n, r, i, a, u) {
            for (var s = i === hn, c = this.entries, f = 0, l = c.length; f < l && !B(r, c[f][0]); f++) ;
            var h = f < l;
            if (h ? c[f][1] === i : s) return this;
            if (o(u), (s || !h) && o(a), !s || 1 !== c.length) {
                if (!h && !s && c.length >= lr) return ue(t, c, r, i);
                var p = t && t === this.ownerID, d = p ? c : dt(c);
                return h ? s ? f === l - 1 ? d.pop() : d[f] = d.pop() : d[f] = [ r, i ] : d.push([ r, i ]), 
                p ? (this.entries = d, this) : new or(t, d);
            }
        };
        var ir = function(t, e, n) {
            this.ownerID = t, this.bitmap = e, this.nodes = n;
        };
        ir.prototype.get = function(t, e, n, r) {
            void 0 === e && (e = U(n));
            var o = 1 << ((0 === t ? e : e >>> t) & ln), i = this.bitmap;
            return 0 == (i & o) ? r : this.nodes[fe(i & o - 1)].get(t + cn, e, n, r);
        }, ir.prototype.update = function(t, e, n, r, o, i, a) {
            void 0 === n && (n = U(r));
            var u = (0 === e ? n : n >>> e) & ln, s = 1 << u, c = this.bitmap, f = 0 != (c & s);
            if (!f && o === hn) return this;
            var l = fe(c & s - 1), h = this.nodes, p = f ? h[l] : void 0, d = oe(p, t, e + cn, n, r, o, i, a);
            if (d === p) return this;
            if (!f && d && h.length >= hr) return ce(t, h, c, u, d);
            if (f && !d && 2 === h.length && ie(h[1 ^ l])) return h[1 ^ l];
            if (f && d && 1 === h.length && ie(d)) return d;
            var v = t && t === this.ownerID, _ = f ? d ? c : c ^ s : c | s, y = f ? d ? le(h, l, d, v) : pe(h, l, v) : he(h, l, d, v);
            return v ? (this.bitmap = _, this.nodes = y, this) : new ir(t, _, y);
        };
        var ar = function(t, e, n) {
            this.ownerID = t, this.count = e, this.nodes = n;
        };
        ar.prototype.get = function(t, e, n, r) {
            void 0 === e && (e = U(n));
            var o = (0 === t ? e : e >>> t) & ln, i = this.nodes[o];
            return i ? i.get(t + cn, e, n, r) : r;
        }, ar.prototype.update = function(t, e, n, r, o, i, a) {
            void 0 === n && (n = U(r));
            var u = (0 === e ? n : n >>> e) & ln, s = o === hn, c = this.nodes, f = c[u];
            if (s && !f) return this;
            var l = oe(f, t, e + cn, n, r, o, i, a);
            if (l === f) return this;
            var h = this.count;
            if (f) {
                if (!l && --h < pr) return se(t, c, h, u);
            } else h++;
            var p = t && t === this.ownerID, d = le(c, u, l, p);
            return p ? (this.count = h, this.nodes = d, this) : new ar(t, h, d);
        };
        var ur = function(t, e, n) {
            this.ownerID = t, this.keyHash = e, this.entries = n;
        };
        ur.prototype.get = function(t, e, n, r) {
            for (var o = this.entries, i = 0, a = o.length; i < a; i++) if (B(n, o[i][0])) return o[i][1];
            return r;
        }, ur.prototype.update = function(t, e, n, r, i, a, u) {
            void 0 === n && (n = U(r));
            var s = i === hn;
            if (n !== this.keyHash) return s ? this : (o(u), o(a), ae(this, t, e, n, [ r, i ]));
            for (var c = this.entries, f = 0, l = c.length; f < l && !B(r, c[f][0]); f++) ;
            var h = f < l;
            if (h ? c[f][1] === i : s) return this;
            if (o(u), (s || !h) && o(a), s && 2 === l) return new sr(t, this.keyHash, c[1 ^ f]);
            var p = t && t === this.ownerID, d = p ? c : dt(c);
            return h ? s ? f === l - 1 ? d.pop() : d[f] = d.pop() : d[f] = [ r, i ] : d.push([ r, i ]), 
            p ? (this.entries = d, this) : new ur(t, this.keyHash, d);
        };
        var sr = function(t, e, n) {
            this.ownerID = t, this.keyHash = e, this.entry = n;
        };
        sr.prototype.get = function(t, e, n, r) {
            return B(n, this.entry[0]) ? this.entry[1] : r;
        }, sr.prototype.update = function(t, e, n, r, i, a, u) {
            var s = i === hn, c = B(r, this.entry[0]);
            return (c ? i === this.entry[1] : s) ? this : (o(u), s ? void o(a) : c ? t && t === this.ownerID ? (this.entry[1] = i, 
            this) : new sr(t, this.keyHash, [ r, i ]) : (o(a), ae(this, t, e, U(r), [ r, i ])));
        }, or.prototype.iterate = ur.prototype.iterate = function(t, e) {
            for (var n = this.entries, r = 0, o = n.length - 1; r <= o; r++) if (!1 === t(n[e ? o - r : r])) return !1;
        }, ir.prototype.iterate = ar.prototype.iterate = function(t, e) {
            for (var n = this.nodes, r = 0, o = n.length - 1; r <= o; r++) {
                var i = n[e ? o - r : r];
                if (i && !1 === i.iterate(t, e)) return !1;
            }
        }, sr.prototype.iterate = function(t, e) {
            return t(this.entry);
        };
        var cr, fr = function(t) {
            function e(t, e, n) {
                this._type = e, this._reverse = n, this._stack = t._root && te(t._root);
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.next = function() {
                for (var t = this._type, e = this._stack; e; ) {
                    var n = e.node, r = e.index++, o = void 0;
                    if (n.entry) {
                        if (0 === r) return Zt(t, n.entry);
                    } else if (n.entries) {
                        if (o = n.entries.length - 1, r <= o) return Zt(t, n.entries[this._reverse ? o - r : r]);
                    } else if (o = n.nodes.length - 1, r <= o) {
                        var i = n.nodes[this._reverse ? o - r : r];
                        if (i) {
                            if (i.entry) return Zt(t, i.entry);
                            e = this._stack = te(i, e);
                        }
                        continue;
                    }
                    e = this._stack = this._stack.__prev;
                }
                return S();
            }, e;
        }(Cn), lr = fn / 4, hr = fn / 2, pr = fn / 4, dr = "@@__IMMUTABLE_LIST__@@", vr = function(t) {
            function e(e) {
                var n = ye();
                if (null === e || void 0 === e) return n;
                if (de(e)) return e;
                var r = t(e), o = r.size;
                return 0 === o ? n : (_t(o), o > 0 && o < fn ? _e(0, o, cn, null, new yr(r.toArray())) : n.withMutations(function(t) {
                    t.setSize(o), r.forEach(function(e, n) {
                        return t.set(n, e);
                    });
                }));
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.of = function() {
                return this(arguments);
            }, e.prototype.toString = function() {
                return this.__toString("List [", "]");
            }, e.prototype.get = function(t, e) {
                if ((t = u(this, t)) >= 0 && t < this.size) {
                    var n = we(this, t += this._origin);
                    return n && n.array[t & ln];
                }
                return e;
            }, e.prototype.set = function(t, e) {
                return me(this, t, e);
            }, e.prototype.remove = function(t) {
                return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this;
            }, e.prototype.insert = function(t, e) {
                return this.splice(t, 0, e);
            }, e.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, 
                this._level = cn, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, 
                this) : ye();
            }, e.prototype.push = function() {
                var t = arguments, e = this.size;
                return this.withMutations(function(n) {
                    Ae(n, 0, e + t.length);
                    for (var r = 0; r < t.length; r++) n.set(e + r, t[r]);
                });
            }, e.prototype.pop = function() {
                return Ae(this, 0, -1);
            }, e.prototype.unshift = function() {
                var t = arguments;
                return this.withMutations(function(e) {
                    Ae(e, -t.length);
                    for (var n = 0; n < t.length; n++) e.set(n, t[n]);
                });
            }, e.prototype.shift = function() {
                return Ae(this, 1);
            }, e.prototype.concat = function() {
                for (var e = arguments, n = [], r = 0; r < arguments.length; r++) {
                    var o = e[r], i = t("string" != typeof o && k(o) ? o : [ o ]);
                    0 !== i.size && n.push(i);
                }
                return 0 === n.length ? this : 0 !== this.size || this.__ownerID || 1 !== n.length ? this.withMutations(function(t) {
                    n.forEach(function(e) {
                        return e.forEach(function(e) {
                            return t.push(e);
                        });
                    });
                }) : this.constructor(n[0]);
            }, e.prototype.setSize = function(t) {
                return Ae(this, 0, t);
            }, e.prototype.map = function(t, e) {
                var n = this;
                return this.withMutations(function(r) {
                    for (var o = 0; o < n.size; o++) r.set(o, t.call(e, r.get(o), o, r));
                });
            }, e.prototype.slice = function(t, e) {
                var n = this.size;
                return c(t, e, n) ? this : Ae(this, f(t, n), l(e, n));
            }, e.prototype.__iterator = function(t, e) {
                var n = e ? this.size : 0, r = ve(this, e);
                return new Cn(function() {
                    var o = r();
                    return o === br ? S() : A(t, e ? --n : n++, o);
                });
            }, e.prototype.__iterate = function(t, e) {
                for (var n, r = e ? this.size : 0, o = ve(this, e); (n = o()) !== br && !1 !== t(n, e ? --r : r++, this); ) ;
                return r;
            }, e.prototype.__ensureOwner = function(t) {
                return t === this.__ownerID ? this : t ? _e(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : 0 === this.size ? ye() : (this.__ownerID = t, 
                this.__altered = !1, this);
            }, e;
        }(mn);
        e.List = vr, vr.isList = de;
        var _r = vr.prototype;
        _r[dr] = !0, _r[sn] = _r.remove, _r.merge = _r.concat, _r.setIn = Ct, _r.deleteIn = _r.removeIn = Pt, 
        _r.update = Mt, _r.updateIn = jt, _r.mergeIn = Yt, _r.mergeDeepIn = Jt, _r.withMutations = Kt, 
        _r.wasAltered = Qt, _r.asImmutable = Gt, _r["@@transducer/init"] = _r.asMutable = Xt, 
        _r["@@transducer/step"] = function(t, e) {
            return t.push(e);
        }, _r["@@transducer/result"] = function(t) {
            return t.asImmutable();
        };
        var yr = function(t, e) {
            this.array = t, this.ownerID = e;
        };
        yr.prototype.removeBefore = function(t, e, n) {
            if (n === e ? 1 << e : 0 === this.array.length) return this;
            var r = n >>> e & ln;
            if (r >= this.array.length) return new yr([], t);
            var o, i = 0 === r;
            if (e > 0) {
                var a = this.array[r];
                if ((o = a && a.removeBefore(t, e - cn, n)) === a && i) return this;
            }
            if (i && !o) return this;
            var u = be(this, t);
            if (!i) for (var s = 0; s < r; s++) u.array[s] = void 0;
            return o && (u.array[r] = o), u;
        }, yr.prototype.removeAfter = function(t, e, n) {
            if (n === (e ? 1 << e : 0) || 0 === this.array.length) return this;
            var r, o = n - 1 >>> e & ln;
            if (o >= this.array.length) return this;
            if (e > 0) {
                var i = this.array[o];
                if ((r = i && i.removeAfter(t, e - cn, n)) === i && o === this.array.length - 1) return this;
            }
            var a = be(this, t);
            return a.array.splice(o + 1), r && (a.array[o] = r), a;
        };
        var mr, gr, br = {}, wr = function(t) {
            function e(t) {
                return null === t || void 0 === t ? Ee() : $(t) ? t : Ee().withMutations(function(e) {
                    var n = yn(t);
                    _t(n.size), n.forEach(function(t, n) {
                        return e.set(n, t);
                    });
                });
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.of = function() {
                return this(arguments);
            }, e.prototype.toString = function() {
                return this.__toString("OrderedMap {", "}");
            }, e.prototype.get = function(t, e) {
                var n = this._map.get(t);
                return void 0 !== n ? this._list.get(n)[1] : e;
            }, e.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), 
                this._list.clear(), this) : Ee();
            }, e.prototype.set = function(t, e) {
                return xe(this, t, e);
            }, e.prototype.remove = function(t) {
                return xe(this, t, hn);
            }, e.prototype.wasAltered = function() {
                return this._map.wasAltered() || this._list.wasAltered();
            }, e.prototype.__iterate = function(t, e) {
                var n = this;
                return this._list.__iterate(function(e) {
                    return e && t(e[1], e[0], n);
                }, e);
            }, e.prototype.__iterator = function(t, e) {
                return this._list.fromEntrySeq().__iterator(t, e);
            }, e.prototype.__ensureOwner = function(t) {
                if (t === this.__ownerID) return this;
                var e = this._map.__ensureOwner(t), n = this._list.__ensureOwner(t);
                return t ? ke(e, n, t, this.__hash) : 0 === this.size ? Ee() : (this.__ownerID = t, 
                this._map = e, this._list = n, this);
            }, e;
        }(nr);
        e.OrderedMap = wr, wr.isOrderedMap = $, wr.prototype[An] = !0, wr.prototype[sn] = wr.prototype.remove;
        var Ar = "@@__IMMUTABLE_STACK__@@", Sr = function(t) {
            function e(t) {
                return null === t || void 0 === t ? Ce() : Oe(t) ? t : Ce().pushAll(t);
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.of = function() {
                return this(arguments);
            }, e.prototype.toString = function() {
                return this.__toString("Stack [", "]");
            }, e.prototype.get = function(t, e) {
                var n = this._head;
                for (t = u(this, t); n && t--; ) n = n.next;
                return n ? n.value : e;
            }, e.prototype.peek = function() {
                return this._head && this._head.value;
            }, e.prototype.push = function() {
                var t = arguments;
                if (0 === arguments.length) return this;
                for (var e = this.size + arguments.length, n = this._head, r = arguments.length - 1; r >= 0; r--) n = {
                    value: t[r],
                    next: n
                };
                return this.__ownerID ? (this.size = e, this._head = n, this.__hash = void 0, this.__altered = !0, 
                this) : Re(e, n);
            }, e.prototype.pushAll = function(e) {
                if (0 === (e = t(e)).size) return this;
                if (0 === this.size && Oe(e)) return e;
                _t(e.size);
                var n = this.size, r = this._head;
                return e.__iterate(function(t) {
                    n++, r = {
                        value: t,
                        next: r
                    };
                }, !0), this.__ownerID ? (this.size = n, this._head = r, this.__hash = void 0, this.__altered = !0, 
                this) : Re(n, r);
            }, e.prototype.pop = function() {
                return this.slice(1);
            }, e.prototype.clear = function() {
                return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, 
                this.__hash = void 0, this.__altered = !0, this) : Ce();
            }, e.prototype.slice = function(e, n) {
                if (c(e, n, this.size)) return this;
                var r = f(e, this.size);
                if (l(n, this.size) !== this.size) return t.prototype.slice.call(this, e, n);
                for (var o = this.size - r, i = this._head; r--; ) i = i.next;
                return this.__ownerID ? (this.size = o, this._head = i, this.__hash = void 0, this.__altered = !0, 
                this) : Re(o, i);
            }, e.prototype.__ensureOwner = function(t) {
                return t === this.__ownerID ? this : t ? Re(this.size, this._head, t, this.__hash) : 0 === this.size ? Ce() : (this.__ownerID = t, 
                this.__altered = !1, this);
            }, e.prototype.__iterate = function(t, e) {
                var n = this;
                if (e) return new $n(this.toArray()).__iterate(function(e, r) {
                    return t(e, r, n);
                }, e);
                for (var r = 0, o = this._head; o && !1 !== t(o.value, r++, this); ) o = o.next;
                return r;
            }, e.prototype.__iterator = function(t, e) {
                if (e) return new $n(this.toArray()).__iterator(t, e);
                var n = 0, r = this._head;
                return new Cn(function() {
                    if (r) {
                        var e = r.value;
                        return r = r.next, A(t, n++, e);
                    }
                    return S();
                });
            }, e;
        }(mn);
        e.Stack = Sr, Sr.isStack = Oe;
        var kr, Er = Sr.prototype;
        Er[Ar] = !0, Er.shift = Er.pop, Er.unshift = Er.push, Er.unshiftAll = Er.pushAll, 
        Er.withMutations = Kt, Er.wasAltered = Qt, Er.asImmutable = Gt, Er["@@transducer/init"] = Er.asMutable = Xt, 
        Er["@@transducer/step"] = function(t, e) {
            return t.unshift(e);
        }, Er["@@transducer/result"] = function(t) {
            return t.asImmutable();
        };
        var xr = "@@__IMMUTABLE_SET__@@", Or = function(t) {
            function e(e) {
                return null === e || void 0 === e ? Be() : Te(e) && !w(e) ? e : Be().withMutations(function(n) {
                    var r = t(e);
                    _t(r.size), r.forEach(function(t) {
                        return n.add(t);
                    });
                });
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.of = function() {
                return this(arguments);
            }, e.fromKeys = function(t) {
                return this(yn(t).keySeq());
            }, e.intersect = function(t) {
                return (t = _n(t).toArray()).length ? Cr.intersect.apply(e(t.pop()), t) : Be();
            }, e.union = function(t) {
                return (t = _n(t).toArray()).length ? Cr.union.apply(e(t.pop()), t) : Be();
            }, e.prototype.toString = function() {
                return this.__toString("Set {", "}");
            }, e.prototype.has = function(t) {
                return this._map.has(t);
            }, e.prototype.add = function(t) {
                return $e(this, this._map.set(t, t));
            }, e.prototype.remove = function(t) {
                return $e(this, this._map.remove(t));
            }, e.prototype.clear = function() {
                return $e(this, this._map.clear());
            }, e.prototype.map = function(t, e) {
                var n = this, r = [], o = [];
                return this.forEach(function(i) {
                    var a = t.call(e, i, i, n);
                    a !== i && (r.push(i), o.push(a));
                }), this.withMutations(function(t) {
                    r.forEach(function(e) {
                        return t.remove(e);
                    }), o.forEach(function(e) {
                        return t.add(e);
                    });
                });
            }, e.prototype.union = function() {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                return 0 === (e = e.filter(function(t) {
                    return 0 !== t.size;
                })).length ? this : 0 !== this.size || this.__ownerID || 1 !== e.length ? this.withMutations(function(n) {
                    for (var r = 0; r < e.length; r++) t(e[r]).forEach(function(t) {
                        return n.add(t);
                    });
                }) : this.constructor(e[0]);
            }, e.prototype.intersect = function() {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if (0 === e.length) return this;
                e = e.map(function(e) {
                    return t(e);
                });
                var r = [];
                return this.forEach(function(t) {
                    e.every(function(e) {
                        return e.includes(t);
                    }) || r.push(t);
                }), this.withMutations(function(t) {
                    r.forEach(function(e) {
                        t.remove(e);
                    });
                });
            }, e.prototype.subtract = function() {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if (0 === e.length) return this;
                e = e.map(function(e) {
                    return t(e);
                });
                var r = [];
                return this.forEach(function(t) {
                    e.some(function(e) {
                        return e.includes(t);
                    }) && r.push(t);
                }), this.withMutations(function(t) {
                    r.forEach(function(e) {
                        t.remove(e);
                    });
                });
            }, e.prototype.sort = function(t) {
                return $r(ot(this, t));
            }, e.prototype.sortBy = function(t, e) {
                return $r(ot(this, e, t));
            }, e.prototype.wasAltered = function() {
                return this._map.wasAltered();
            }, e.prototype.__iterate = function(t, e) {
                var n = this;
                return this._map.__iterate(function(e) {
                    return t(e, e, n);
                }, e);
            }, e.prototype.__iterator = function(t, e) {
                return this._map.__iterator(t, e);
            }, e.prototype.__ensureOwner = function(t) {
                if (t === this.__ownerID) return this;
                var e = this._map.__ensureOwner(t);
                return t ? this.__make(e, t) : 0 === this.size ? this.__empty() : (this.__ownerID = t, 
                this._map = e, this);
            }, e;
        }(gn);
        e.Set = Or, Or.isSet = Te;
        var Rr, Cr = Or.prototype;
        Cr[xr] = !0, Cr[sn] = Cr.remove, Cr.merge = Cr.concat = Cr.union, Cr.withMutations = Kt, 
        Cr.asImmutable = Gt, Cr["@@transducer/init"] = Cr.asMutable = Xt, Cr["@@transducer/step"] = function(t, e) {
            return t.add(e);
        }, Cr["@@transducer/result"] = function(t) {
            return t.asImmutable();
        }, Cr.__empty = Be, Cr.__make = De;
        var Tr, Pr = function(t) {
            function e(t, n, r) {
                if (!(this instanceof e)) return new e(t, n, r);
                if (vt(0 !== r, "Cannot step a Range by 0"), t = t || 0, void 0 === n && (n = 1 / 0), 
                r = void 0 === r ? 1 : Math.abs(r), n < t && (r = -r), this._start = t, this._end = n, 
                this._step = r, this.size = Math.max(0, Math.ceil((n - t) / r - 1) + 1), 0 === this.size) {
                    if (Tr) return Tr;
                    Tr = this;
                }
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.toString = function() {
                return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]";
            }, e.prototype.get = function(t, e) {
                return this.has(t) ? this._start + u(this, t) * this._step : e;
            }, e.prototype.includes = function(t) {
                var e = (t - this._start) / this._step;
                return e >= 0 && e < this.size && e === Math.floor(e);
            }, e.prototype.slice = function(t, n) {
                return c(t, n, this.size) ? this : (t = f(t, this.size), (n = l(n, this.size)) <= t ? new e(0, 0) : new e(this.get(t, this._end), this.get(n, this._end), this._step));
            }, e.prototype.indexOf = function(t) {
                var e = t - this._start;
                if (e % this._step == 0) {
                    var n = e / this._step;
                    if (n >= 0 && n < this.size) return n;
                }
                return -1;
            }, e.prototype.lastIndexOf = function(t) {
                return this.indexOf(t);
            }, e.prototype.__iterate = function(t, e) {
                for (var n = this.size, r = this._step, o = e ? this._start + (n - 1) * r : this._start, i = 0; i !== n && !1 !== t(o, e ? n - ++i : i++, this); ) o += e ? -r : r;
                return i;
            }, e.prototype.__iterator = function(t, e) {
                var n = this.size, r = this._step, o = e ? this._start + (n - 1) * r : this._start, i = 0;
                return new Cn(function() {
                    if (i === n) return S();
                    var a = o;
                    return o += e ? -r : r, A(t, e ? n - ++i : i++, a);
                });
            }, e.prototype.equals = function(t) {
                return t instanceof e ? this._start === t._start && this._end === t._end && this._step === t._step : Ie(this, t);
            }, e;
        }(Mn);
        e.Range = Pr, _n.isIterable = d, _n.isKeyed = v, _n.isIndexed = _, _n.isAssociative = y, 
        _n.isOrdered = w, _n.Iterator = Cn, Me(_n, {
            toArray: function() {
                _t(this.size);
                var t = new Array(this.size || 0), e = v(this), n = 0;
                return this.__iterate(function(r, o) {
                    t[n++] = e ? [ o, r ] : r;
                }), t;
            },
            toIndexedSeq: function() {
                return new Zn(this);
            },
            toJS: function() {
                return je(this);
            },
            toKeyedSeq: function() {
                return new Qn(this, !0);
            },
            toMap: function() {
                return nr(this.toKeyedSeq());
            },
            toObject: Ne,
            toOrderedMap: function() {
                return wr(this.toKeyedSeq());
            },
            toOrderedSet: function() {
                return $r(v(this) ? this.valueSeq() : this);
            },
            toSet: function() {
                return Or(v(this) ? this.valueSeq() : this);
            },
            toSetSeq: function() {
                return new tr(this);
            },
            toSeq: function() {
                return _(this) ? this.toIndexedSeq() : v(this) ? this.toKeyedSeq() : this.toSetSeq();
            },
            toStack: function() {
                return Sr(v(this) ? this.valueSeq() : this);
            },
            toList: function() {
                return vr(v(this) ? this.valueSeq() : this);
            },
            toString: function() {
                return "[Collection]";
            },
            __toString: function(t, e) {
                return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e;
            },
            concat: function() {
                for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                return st(this, tt(this, t));
            },
            includes: function(t) {
                return this.some(function(e) {
                    return B(e, t);
                });
            },
            entries: function() {
                return this.__iterator(En);
            },
            every: function(t, e) {
                _t(this.size);
                var n = !0;
                return this.__iterate(function(r, o, i) {
                    if (!t.call(e, r, o, i)) return n = !1, !1;
                }), n;
            },
            filter: function(t, e) {
                return st(this, J(this, t, e, !0));
            },
            find: function(t, e, n) {
                var r = this.findEntry(t, e);
                return r ? r[1] : n;
            },
            forEach: function(t, e) {
                return _t(this.size), this.__iterate(e ? t.bind(e) : t);
            },
            join: function(t) {
                _t(this.size), t = void 0 !== t ? "" + t : ",";
                var e = "", n = !0;
                return this.__iterate(function(r) {
                    n ? n = !1 : e += t, e += null !== r && void 0 !== r ? r.toString() : "";
                }), e;
            },
            keys: function() {
                return this.__iterator(Sn);
            },
            map: function(t, e) {
                return st(this, V(this, t, e));
            },
            reduce: function(t, e, n) {
                return qe(this, t, e, n, arguments.length < 2, !1);
            },
            reduceRight: function(t, e, n) {
                return qe(this, t, e, n, arguments.length < 2, !0);
            },
            reverse: function() {
                return st(this, Y(this, !0));
            },
            slice: function(t, e) {
                return st(this, G(this, t, e, !0));
            },
            some: function(t, e) {
                return !this.every(We(t), e);
            },
            sort: function(t) {
                return st(this, ot(this, t));
            },
            values: function() {
                return this.__iterator(kn);
            },
            butLast: function() {
                return this.slice(0, -1);
            },
            isEmpty: function() {
                return void 0 !== this.size ? 0 === this.size : !this.some(function() {
                    return !0;
                });
            },
            count: function(t, e) {
                return a(t ? this.toSeq().filter(t, e) : this);
            },
            countBy: function(t, e) {
                return K(this, t, e);
            },
            equals: function(t) {
                return Ie(this, t);
            },
            entrySeq: function() {
                var t = this;
                if (t._cache) return new $n(t._cache);
                var e = t.toSeq().map(He).toIndexedSeq();
                return e.fromEntrySeq = function() {
                    return t.toSeq();
                }, e;
            },
            filterNot: function(t, e) {
                return this.filter(We(t), e);
            },
            findEntry: function(t, e, n) {
                var r = n;
                return this.__iterate(function(n, o, i) {
                    if (t.call(e, n, o, i)) return r = [ o, n ], !1;
                }), r;
            },
            findKey: function(t, e) {
                var n = this.findEntry(t, e);
                return n && n[0];
            },
            findLast: function(t, e, n) {
                return this.toKeyedSeq().reverse().find(t, e, n);
            },
            findLastEntry: function(t, e, n) {
                return this.toKeyedSeq().reverse().findEntry(t, e, n);
            },
            findLastKey: function(t, e) {
                return this.toKeyedSeq().reverse().findKey(t, e);
            },
            first: function(t) {
                return this.find(s, null, t);
            },
            flatMap: function(t, e) {
                return st(this, nt(this, t, e));
            },
            flatten: function(t) {
                return st(this, et(this, t, !0));
            },
            fromEntrySeq: function() {
                return new er(this);
            },
            get: function(t, e) {
                return this.find(function(e, n) {
                    return B(n, t);
                }, void 0, e);
            },
            getIn: Ue,
            groupBy: function(t, e) {
                return X(this, t, e);
            },
            has: function(t) {
                return this.get(t, hn) !== hn;
            },
            hasIn: function(t) {
                return ze(this, t);
            },
            isSubset: function(t) {
                return t = "function" == typeof t.includes ? t : _n(t), this.every(function(e) {
                    return t.includes(e);
                });
            },
            isSuperset: function(t) {
                return (t = "function" == typeof t.isSubset ? t : _n(t)).isSubset(this);
            },
            keyOf: function(t) {
                return this.findKey(function(e) {
                    return B(e, t);
                });
            },
            keySeq: function() {
                return this.toSeq().map(Fe).toIndexedSeq();
            },
            last: function(t) {
                return this.toSeq().reverse().first(t);
            },
            lastKeyOf: function(t) {
                return this.toKeyedSeq().reverse().keyOf(t);
            },
            max: function(t) {
                return it(this, t);
            },
            maxBy: function(t, e) {
                return it(this, e, t);
            },
            min: function(t) {
                return it(this, t ? Ve(t) : Je);
            },
            minBy: function(t, e) {
                return it(this, e ? Ve(e) : Je, t);
            },
            rest: function() {
                return this.slice(1);
            },
            skip: function(t) {
                return 0 === t ? this : this.slice(Math.max(0, t));
            },
            skipLast: function(t) {
                return 0 === t ? this : this.slice(0, -Math.max(0, t));
            },
            skipWhile: function(t, e) {
                return st(this, Z(this, t, e, !0));
            },
            skipUntil: function(t, e) {
                return this.skipWhile(We(t), e);
            },
            sortBy: function(t, e) {
                return st(this, ot(this, e, t));
            },
            take: function(t) {
                return this.slice(0, Math.max(0, t));
            },
            takeLast: function(t) {
                return this.slice(-Math.max(0, t));
            },
            takeWhile: function(t, e) {
                return st(this, Q(this, t, e));
            },
            takeUntil: function(t, e) {
                return this.takeWhile(We(t), e);
            },
            update: function(t) {
                return t(this);
            },
            valueSeq: function() {
                return this.toIndexedSeq();
            },
            hashCode: function() {
                return this.__hash || (this.__hash = Ke(this));
            }
        });
        var Ir = _n.prototype;
        Ir[pn] = !0, Ir[Rn] = Ir.values, Ir.toJSON = Ir.toArray, Ir.__toStringMapper = bt, 
        Ir.inspect = Ir.toSource = function() {
            return this.toString();
        }, Ir.chain = Ir.flatMap, Ir.contains = Ir.includes, Me(yn, {
            flip: function() {
                return st(this, W(this));
            },
            mapEntries: function(t, e) {
                var n = this, r = 0;
                return st(this, this.toSeq().map(function(o, i) {
                    return t.call(e, [ i, o ], r++, n);
                }).fromEntrySeq());
            },
            mapKeys: function(t, e) {
                var n = this;
                return st(this, this.toSeq().flip().map(function(r, o) {
                    return t.call(e, r, o, n);
                }).flip());
            }
        });
        var Mr = yn.prototype;
        Mr[dn] = !0, Mr[Rn] = Ir.entries, Mr.toJSON = Ne, Mr.__toStringMapper = function(t, e) {
            return bt(e) + ": " + bt(t);
        }, Me(mn, {
            toKeyedSeq: function() {
                return new Qn(this, !1);
            },
            filter: function(t, e) {
                return st(this, J(this, t, e, !1));
            },
            findIndex: function(t, e) {
                var n = this.findEntry(t, e);
                return n ? n[0] : -1;
            },
            indexOf: function(t) {
                var e = this.keyOf(t);
                return void 0 === e ? -1 : e;
            },
            lastIndexOf: function(t) {
                var e = this.lastKeyOf(t);
                return void 0 === e ? -1 : e;
            },
            reverse: function() {
                return st(this, Y(this, !1));
            },
            slice: function(t, e) {
                return st(this, G(this, t, e, !1));
            },
            splice: function(t, e) {
                var n = arguments.length;
                if (e = Math.max(e || 0, 0), 0 === n || 2 === n && !e) return this;
                t = f(t, t < 0 ? this.count() : this.size);
                var r = this.slice(0, t);
                return st(this, 1 === n ? r : r.concat(dt(arguments, 2), this.slice(t + e)));
            },
            findLastIndex: function(t, e) {
                var n = this.findLastEntry(t, e);
                return n ? n[0] : -1;
            },
            first: function(t) {
                return this.get(0, t);
            },
            flatten: function(t) {
                return st(this, et(this, t, !1));
            },
            get: function(t, e) {
                return (t = u(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function(e, n) {
                    return n === t;
                }, void 0, e);
            },
            has: function(t) {
                return (t = u(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
            },
            interpose: function(t) {
                return st(this, rt(this, t));
            },
            interleave: function() {
                var t = [ this ].concat(dt(arguments)), e = ut(this.toSeq(), Mn.of, t), n = e.flatten(!0);
                return e.size && (n.size = e.size * t.length), st(this, n);
            },
            keySeq: function() {
                return Pr(0, this.size);
            },
            last: function(t) {
                return this.get(-1, t);
            },
            skipWhile: function(t, e) {
                return st(this, Z(this, t, e, !1));
            },
            zip: function() {
                return st(this, ut(this, Ye, [ this ].concat(dt(arguments))));
            },
            zipAll: function() {
                return st(this, ut(this, Ye, [ this ].concat(dt(arguments)), !0));
            },
            zipWith: function(t) {
                var e = dt(arguments);
                return e[0] = this, st(this, ut(this, t, e));
            }
        });
        var jr = mn.prototype;
        jr[vn] = !0, jr[An] = !0, Me(gn, {
            get: function(t, e) {
                return this.has(t) ? t : e;
            },
            includes: function(t) {
                return this.has(t);
            },
            keySeq: function() {
                return this.valueSeq();
            }
        }), gn.prototype.has = Ir.includes, gn.prototype.contains = gn.prototype.includes, 
        Me(In, yn.prototype), Me(Mn, mn.prototype), Me(jn, gn.prototype);
        var $r = function(t) {
            function e(t) {
                return null === t || void 0 === t ? Ze() : Pe(t) ? t : Ze().withMutations(function(e) {
                    var n = gn(t);
                    _t(n.size), n.forEach(function(t) {
                        return e.add(t);
                    });
                });
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.of = function() {
                return this(arguments);
            }, e.fromKeys = function(t) {
                return this(yn(t).keySeq());
            }, e.prototype.toString = function() {
                return this.__toString("OrderedSet {", "}");
            }, e;
        }(Or);
        e.OrderedSet = $r, $r.isOrderedSet = Pe;
        var Dr, Br = $r.prototype;
        Br[An] = !0, Br.zip = jr.zip, Br.zipWith = jr.zipWith, Br.__empty = Ze, Br.__make = Qe;
        var Lr = function(t, e) {
            var n, r = function r(i) {
                var a = this;
                if (i instanceof r) return i;
                if (!(this instanceof r)) return new r(i);
                if (!n) {
                    n = !0;
                    var u = Object.keys(t), s = o._indices = {};
                    o._name = e, o._keys = u, o._defaultValues = t;
                    for (var c = 0; c < u.length; c++) {
                        var f = u[c];
                        s[f] = c, o[f] ? "object" === ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.warn && console.warn("Cannot define " + en(this) + ' with property "' + f + '" since that property name is part of the Record API.') : rn(o, f);
                    }
                }
                this.__ownerID = void 0, this._values = vr().withMutations(function(t) {
                    t.setSize(a._keys.length), yn(i).forEach(function(e, n) {
                        t.set(a._indices[n], e === a._defaultValues[n] ? void 0 : e);
                    });
                });
            }, o = r.prototype = Object.create(Ur);
            return o.constructor = r, e && (r.displayName = e), r;
        };
        e.Record = Lr, Lr.prototype.toString = function() {
            for (var t, e = en(this) + " { ", n = this._keys, r = 0, o = n.length; r !== o; r++) t = n[r], 
            e += (r ? ", " : "") + t + ": " + bt(this.get(t));
            return e + " }";
        }, Lr.prototype.equals = function(t) {
            return this === t || t && this._keys === t._keys && nn(this).equals(nn(t));
        }, Lr.prototype.hashCode = function() {
            return nn(this).hashCode();
        }, Lr.prototype.has = function(t) {
            return this._indices.hasOwnProperty(t);
        }, Lr.prototype.get = function(t, e) {
            if (!this.has(t)) return e;
            var n = this._indices[t], r = this._values.get(n);
            return void 0 === r ? this._defaultValues[t] : r;
        }, Lr.prototype.set = function(t, e) {
            if (this.has(t)) {
                var n = this._values.set(this._indices[t], e === this._defaultValues[t] ? void 0 : e);
                if (n !== this._values && !this.__ownerID) return tn(this, n);
            }
            return this;
        }, Lr.prototype.remove = function(t) {
            return this.set(t);
        }, Lr.prototype.clear = function() {
            var t = this._values.clear().setSize(this._keys.length);
            return this.__ownerID ? this : tn(this, t);
        }, Lr.prototype.wasAltered = function() {
            return this._values.wasAltered();
        }, Lr.prototype.toSeq = function() {
            return nn(this);
        }, Lr.prototype.toJS = function() {
            return je(this);
        }, Lr.prototype.entries = function() {
            return this.__iterator(En);
        }, Lr.prototype.__iterator = function(t, e) {
            return nn(this).__iterator(t, e);
        }, Lr.prototype.__iterate = function(t, e) {
            return nn(this).__iterate(t, e);
        }, Lr.prototype.__ensureOwner = function(t) {
            if (t === this.__ownerID) return this;
            var e = this._values.__ensureOwner(t);
            return t ? tn(this, e, t) : (this.__ownerID = t, this._values = e, this);
        }, Lr.isRecord = g, Lr.getDescriptiveName = en;
        var Ur = Lr.prototype;
        Ur[wn] = !0, Ur[sn] = Ur.remove, Ur.deleteIn = Ur.removeIn = Pt, Ur.getIn = Ue, 
        Ur.hasIn = Ir.hasIn, Ur.merge = $t, Ur.mergeWith = Dt, Ur.mergeIn = Yt, Ur.mergeDeep = Wt, 
        Ur.mergeDeepWith = Vt, Ur.mergeDeepIn = Jt, Ur.setIn = Ct, Ur.update = Mt, Ur.updateIn = jt, 
        Ur.withMutations = Kt, Ur.asMutable = Xt, Ur.asImmutable = Gt, Ur[Rn] = Ur.entries, 
        Ur.toJSON = Ur.toObject = Ir.toObject, Ur.inspect = Ur.toSource = function() {
            return this.toString();
        };
        var zr, Nr = function(t) {
            function e(t, n) {
                if (!(this instanceof e)) return new e(t, n);
                if (this._value = t, this.size = void 0 === n ? 1 / 0 : Math.max(0, n), 0 === this.size) {
                    if (zr) return zr;
                    zr = this;
                }
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, 
            e.prototype.toString = function() {
                return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
            }, e.prototype.get = function(t, e) {
                return this.has(t) ? this._value : e;
            }, e.prototype.includes = function(t) {
                return B(this._value, t);
            }, e.prototype.slice = function(t, n) {
                var r = this.size;
                return c(t, n, r) ? this : new e(this._value, l(n, r) - f(t, r));
            }, e.prototype.reverse = function() {
                return this;
            }, e.prototype.indexOf = function(t) {
                return B(this._value, t) ? 0 : -1;
            }, e.prototype.lastIndexOf = function(t) {
                return B(this._value, t) ? this.size : -1;
            }, e.prototype.__iterate = function(t, e) {
                for (var n = this.size, r = 0; r !== n && !1 !== t(this._value, e ? n - ++r : r++, this); ) ;
                return r;
            }, e.prototype.__iterator = function(t, e) {
                var n = this, r = this.size, o = 0;
                return new Cn(function() {
                    return o === r ? S() : A(t, e ? r - ++o : o++, n._value);
                });
            }, e.prototype.equals = function(t) {
                return t instanceof e ? B(this._value, t._value) : Ie(t);
            }, e;
        }(Mn);
        e.Repeat = Nr;
        var qr = "4.0.0-rc.11";
        e.version = qr;
        var Fr = {
            version: qr,
            Collection: _n,
            Iterable: _n,
            Seq: Pn,
            Map: nr,
            OrderedMap: wr,
            List: vr,
            Stack: Sr,
            Set: Or,
            OrderedSet: $r,
            Record: Lr,
            Range: Pr,
            Repeat: Nr,
            is: B,
            fromJS: on,
            hash: U,
            isImmutable: b,
            isCollection: d,
            isKeyed: v,
            isIndexed: _,
            isAssociative: y,
            isOrdered: w,
            isValueObject: D,
            isSeq: m,
            isList: de,
            isMap: j,
            isOrderedMap: $,
            isStack: Oe,
            isSet: Te,
            isOrderedSet: Pe,
            isRecord: g,
            get: At,
            getIn: Le,
            has: wt,
            hasIn: ze,
            merge: Lt,
            mergeDeep: zt,
            mergeWith: Ut,
            mergeDeepWith: Nt,
            remove: kt,
            removeIn: Tt,
            set: Et,
            setIn: Rt,
            update: It,
            updateIn: xt
        }, Hr = _n;
        e.Iterable = Hr;
        var Wr = Fr;
        e.default = Wr;
    },
    abad: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = n("f6b1"), o = {
            name: "Decorate",
            computed: {
                title: function() {
                    return r.i18n.title[r.lan];
                },
                github: function() {
                    return r.i18n.github[r.lan];
                },
                QRTitle: function() {
                    return r.i18n.QRNotice[r.lan];
                },
                QRCode: function() {
                    return r.i18n.QRCode[r.lan];
                }
            }
        };
        e.default = o;
    },
    acf5: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("3807")).default);
        }).call(this, n("543d").createPage);
    },
    b147: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("b311")).default);
        }).call(this, n("543d").createPage);
    },
    b3de: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("16c8")).default);
        }).call(this, n("543d").createPage);
    },
    b639: function(t, e, n) {
        (function(t) {
            function r() {
                return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function o(t, e) {
                if (r() < e) throw new RangeError("Invalid typed array length");
                return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = i.prototype) : (null === t && (t = new i(e)), 
                t.length = e), t;
            }
            function i(t, e, n) {
                if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i)) return new i(t, e, n);
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                    return c(this, t);
                }
                return a(this, t, e, n);
            }
            function a(t, e, n, r) {
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? h(t, e, n, r) : "string" == typeof e ? f(t, e, n) : p(t, e);
            }
            function u(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative');
            }
            function s(t, e, n, r) {
                return u(e), e <= 0 ? o(t, e) : void 0 !== n ? "string" == typeof r ? o(t, e).fill(n, r) : o(t, e).fill(n) : o(t, e);
            }
            function c(t, e) {
                if (u(e), t = o(t, e < 0 ? 0 : 0 | d(e)), !i.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
                return t;
            }
            function f(t, e, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !i.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | v(e, n), a = (t = o(t, r)).write(e, n);
                return a !== r && (t = t.slice(0, a)), t;
            }
            function l(t, e) {
                var n = e.length < 0 ? 0 : 0 | d(e.length);
                t = o(t, n);
                for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                return t;
            }
            function h(t, e, n, r) {
                if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), 
                i.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = i.prototype) : t = l(t, e), t;
            }
            function p(t, e) {
                if (i.isBuffer(e)) {
                    var n = 0 | d(e.length);
                    return 0 === (t = o(t, n)).length ? t : (e.copy(t, 0, 0, n), t);
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || J(e.length) ? o(t, 0) : l(t, e);
                    if ("Buffer" === e.type && G(e.data)) return l(t, e.data);
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }
            function d(t) {
                if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
                return 0 | t;
            }
            function v(t, e) {
                if (i.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var n = t.length;
                if (0 === n) return 0;
                for (var r = !1; ;) switch (e) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return n;

                  case "utf8":
                  case "utf-8":
                  case void 0:
                    return F(t).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * n;

                  case "hex":
                    return n >>> 1;

                  case "base64":
                    return V(t).length;

                  default:
                    if (r) return F(t).length;
                    e = ("" + e).toLowerCase(), r = !0;
                }
            }
            function _(t, e, n) {
                var r = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if (n >>>= 0, e >>>= 0, n <= e) return "";
                for (t || (t = "utf8"); ;) switch (t) {
                  case "hex":
                    return P(this, e, n);

                  case "utf8":
                  case "utf-8":
                    return O(this, e, n);

                  case "ascii":
                    return C(this, e, n);

                  case "latin1":
                  case "binary":
                    return T(this, e, n);

                  case "base64":
                    return x(this, e, n);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return I(this, e, n);

                  default:
                    if (r) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), r = !0;
                }
            }
            function y(t, e, n) {
                var r = t[e];
                t[e] = t[n], t[n] = r;
            }
            function m(t, e, n, r, o) {
                if (0 === t.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
                n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                    if (o) return -1;
                    n = t.length - 1;
                } else if (n < 0) {
                    if (!o) return -1;
                    n = 0;
                }
                if ("string" == typeof e && (e = i.from(e, r)), i.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, n, r, o);
                if ("number" == typeof e) return e &= 255, i.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : g(t, [ e ], n, r, o);
                throw new TypeError("val must be string, number or Buffer");
            }
            function g(t, e, n, r, o) {
                function i(t, e) {
                    return 1 === u ? t[e] : t.readUInt16BE(e * u);
                }
                var a, u = 1, s = t.length, c = e.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    u = 2, s /= 2, c /= 2, n /= 2;
                }
                if (o) {
                    var f = -1;
                    for (a = n; a < s; a++) if (i(t, a) === i(e, -1 === f ? 0 : a - f)) {
                        if (-1 === f && (f = a), a - f + 1 === c) return f * u;
                    } else -1 !== f && (a -= a - f), f = -1;
                } else for (n + c > s && (n = s - c), a = n; a >= 0; a--) {
                    for (var l = !0, h = 0; h < c; h++) if (i(t, a + h) !== i(e, h)) {
                        l = !1;
                        break;
                    }
                    if (l) return a;
                }
                return -1;
            }
            function b(t, e, n, r) {
                n = Number(n) || 0;
                var o = t.length - n;
                r ? (r = Number(r)) > o && (r = o) : r = o;
                var i = e.length;
                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2);
                for (var a = 0; a < r; ++a) {
                    var u = parseInt(e.substr(2 * a, 2), 16);
                    if (isNaN(u)) return a;
                    t[n + a] = u;
                }
                return a;
            }
            function w(t, e, n, r) {
                return Y(F(e, t.length - n), t, n, r);
            }
            function A(t, e, n, r) {
                return Y(H(e), t, n, r);
            }
            function S(t, e, n, r) {
                return A(t, e, n, r);
            }
            function k(t, e, n, r) {
                return Y(V(e), t, n, r);
            }
            function E(t, e, n, r) {
                return Y(W(e, t.length - n), t, n, r);
            }
            function x(t, e, n) {
                return 0 === e && n === t.length ? K.fromByteArray(t) : K.fromByteArray(t.slice(e, n));
            }
            function O(t, e, n) {
                n = Math.min(t.length, n);
                for (var r = [], o = e; o < n; ) {
                    var i, a, u, s, c = t[o], f = null, l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (o + l <= n) switch (l) {
                      case 1:
                        c < 128 && (f = c);
                        break;

                      case 2:
                        128 == (192 & (i = t[o + 1])) && (s = (31 & c) << 6 | 63 & i) > 127 && (f = s);
                        break;

                      case 3:
                        i = t[o + 1], a = t[o + 2], 128 == (192 & i) && 128 == (192 & a) && (s = (15 & c) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (f = s);
                        break;

                      case 4:
                        i = t[o + 1], a = t[o + 2], u = t[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & u) && (s = (15 & c) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & u) > 65535 && s < 1114112 && (f = s);
                    }
                    null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), 
                    f = 56320 | 1023 & f), r.push(f), o += l;
                }
                return R(r);
            }
            function R(t) {
                var e = t.length;
                if (e <= Q) return String.fromCharCode.apply(String, t);
                for (var n = "", r = 0; r < e; ) n += String.fromCharCode.apply(String, t.slice(r, r += Q));
                return n;
            }
            function C(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                return r;
            }
            function T(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                return r;
            }
            function P(t, e, n) {
                var r = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                for (var o = "", i = e; i < n; ++i) o += q(t[i]);
                return o;
            }
            function I(t, e, n) {
                for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return o;
            }
            function M(t, e, n) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
            }
            function j(t, e, n, r, o, a) {
                if (!i.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > o || e < a) throw new RangeError('"value" argument is out of bounds');
                if (n + r > t.length) throw new RangeError("Index out of range");
            }
            function $(t, e, n, r) {
                e < 0 && (e = 65535 + e + 1);
                for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
            }
            function D(t, e, n, r) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255;
            }
            function B(t, e, n, r, o, i) {
                if (n + r > t.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range");
            }
            function L(t, e, n, r, o) {
                return o || B(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(t, e, n, r, 23, 4), 
                n + 4;
            }
            function U(t, e, n, r, o) {
                return o || B(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(t, e, n, r, 52, 8), 
                n + 8;
            }
            function z(t) {
                if ((t = N(t).replace(Z, "")).length < 2) return "";
                for (;t.length % 4 != 0; ) t += "=";
                return t;
            }
            function N(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
            }
            function q(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16);
            }
            function F(t, e) {
                var n;
                e = e || 1 / 0;
                for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
                    if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue;
                            }
                            if (a + 1 === r) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue;
                            }
                            o = n;
                            continue;
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                            continue;
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320);
                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, n < 128) {
                        if ((e -= 1) < 0) break;
                        i.push(n);
                    } else if (n < 2048) {
                        if ((e -= 2) < 0) break;
                        i.push(n >> 6 | 192, 63 & n | 128);
                    } else if (n < 65536) {
                        if ((e -= 3) < 0) break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
                    }
                }
                return i;
            }
            function H(t) {
                for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                return e;
            }
            function W(t, e) {
                for (var n, r, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) r = (n = t.charCodeAt(a)) >> 8, 
                o = n % 256, i.push(o), i.push(r);
                return i;
            }
            function V(t) {
                return K.toByteArray(z(t));
            }
            function Y(t, e, n, r) {
                for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                return o;
            }
            function J(t) {
                return t !== t;
            }
            var K = n("1fb5"), X = n("9152"), G = n("e3db");
            e.Buffer = i, e.SlowBuffer = function(t) {
                return +t != t && (t = 0), i.alloc(+t);
            }, e.INSPECT_MAX_BYTES = 50, i.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42;
                        }
                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
                } catch (t) {
                    return !1;
                }
            }(), e.kMaxLength = r(), i.poolSize = 8192, i._augment = function(t) {
                return t.__proto__ = i.prototype, t;
            }, i.from = function(t, e, n) {
                return a(null, t, e, n);
            }, i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, 
            "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
                value: null,
                configurable: !0
            })), i.alloc = function(t, e, n) {
                return s(null, t, e, n);
            }, i.allocUnsafe = function(t) {
                return c(null, t);
            }, i.allocUnsafeSlow = function(t) {
                return c(null, t);
            }, i.isBuffer = function(t) {
                return !(null == t || !t._isBuffer);
            }, i.compare = function(t, e) {
                if (!i.isBuffer(t) || !i.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var n = t.length, r = e.length, o = 0, a = Math.min(n, r); o < a; ++o) if (t[o] !== e[o]) {
                    n = t[o], r = e[o];
                    break;
                }
                return n < r ? -1 : r < n ? 1 : 0;
            }, i.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return !0;

                  default:
                    return !1;
                }
            }, i.concat = function(t, e) {
                if (!G(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return i.alloc(0);
                var n;
                if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                var r = i.allocUnsafe(e), o = 0;
                for (n = 0; n < t.length; ++n) {
                    var a = t[n];
                    if (!i.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(r, o), o += a.length;
                }
                return r;
            }, i.byteLength = v, i.prototype._isBuffer = !0, i.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                return this;
            }, i.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                return this;
            }, i.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), 
                y(this, e + 3, e + 4);
                return this;
            }, i.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? O(this, 0, t) : _.apply(this, arguments);
            }, i.prototype.equals = function(t) {
                if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === i.compare(this, t);
            }, i.prototype.inspect = function() {
                var t = "", n = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), 
                this.length > n && (t += " ... ")), "<Buffer " + t + ">";
            }, i.prototype.compare = function(t, e, n, r, o) {
                if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), 
                void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                if (r >= o && e >= n) return 0;
                if (r >= o) return -1;
                if (e >= n) return 1;
                if (e >>>= 0, n >>>= 0, r >>>= 0, o >>>= 0, this === t) return 0;
                for (var a = o - r, u = n - e, s = Math.min(a, u), c = this.slice(r, o), f = t.slice(e, n), l = 0; l < s; ++l) if (c[l] !== f[l]) {
                    a = c[l], u = f[l];
                    break;
                }
                return a < u ? -1 : u < a ? 1 : 0;
            }, i.prototype.includes = function(t, e, n) {
                return -1 !== this.indexOf(t, e, n);
            }, i.prototype.indexOf = function(t, e, n) {
                return m(this, t, e, n, !0);
            }, i.prototype.lastIndexOf = function(t, e, n) {
                return m(this, t, e, n, !1);
            }, i.prototype.write = function(t, e, n, r) {
                if (void 0 === e) r = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) r = e, 
                n = this.length, e = 0; else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
                }
                var o = this.length - e;
                if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var i = !1; ;) switch (r) {
                  case "hex":
                    return b(this, t, e, n);

                  case "utf8":
                  case "utf-8":
                    return w(this, t, e, n);

                  case "ascii":
                    return A(this, t, e, n);

                  case "latin1":
                  case "binary":
                    return S(this, t, e, n);

                  case "base64":
                    return k(this, t, e, n);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return E(this, t, e, n);

                  default:
                    if (i) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), i = !0;
                }
            }, i.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            var Q = 4096;
            i.prototype.slice = function(t, e) {
                var n, r = this.length;
                if (t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), 
                e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), i.TYPED_ARRAY_SUPPORT) n = this.subarray(t, e), 
                n.__proto__ = i.prototype; else {
                    var o = e - t;
                    n = new i(o, void 0);
                    for (var a = 0; a < o; ++a) n[a] = this[a + t];
                }
                return n;
            }, i.prototype.readUIntLE = function(t, e, n) {
                t |= 0, e |= 0, n || M(t, e, this.length);
                for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
                return r;
            }, i.prototype.readUIntBE = function(t, e, n) {
                t |= 0, e |= 0, n || M(t, e, this.length);
                for (var r = this[t + --e], o = 1; e > 0 && (o *= 256); ) r += this[t + --e] * o;
                return r;
            }, i.prototype.readUInt8 = function(t, e) {
                return e || M(t, 1, this.length), this[t];
            }, i.prototype.readUInt16LE = function(t, e) {
                return e || M(t, 2, this.length), this[t] | this[t + 1] << 8;
            }, i.prototype.readUInt16BE = function(t, e) {
                return e || M(t, 2, this.length), this[t] << 8 | this[t + 1];
            }, i.prototype.readUInt32LE = function(t, e) {
                return e || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
            }, i.prototype.readUInt32BE = function(t, e) {
                return e || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
            }, i.prototype.readIntLE = function(t, e, n) {
                t |= 0, e |= 0, n || M(t, e, this.length);
                for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
                return o *= 128, r >= o && (r -= Math.pow(2, 8 * e)), r;
            }, i.prototype.readIntBE = function(t, e, n) {
                t |= 0, e |= 0, n || M(t, e, this.length);
                for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256); ) i += this[t + --r] * o;
                return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i;
            }, i.prototype.readInt8 = function(t, e) {
                return e || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
            }, i.prototype.readInt16LE = function(t, e) {
                e || M(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n;
            }, i.prototype.readInt16BE = function(t, e) {
                e || M(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n;
            }, i.prototype.readInt32LE = function(t, e) {
                return e || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
            }, i.prototype.readInt32BE = function(t, e) {
                return e || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
            }, i.prototype.readFloatLE = function(t, e) {
                return e || M(t, 4, this.length), X.read(this, t, !0, 23, 4);
            }, i.prototype.readFloatBE = function(t, e) {
                return e || M(t, 4, this.length), X.read(this, t, !1, 23, 4);
            }, i.prototype.readDoubleLE = function(t, e) {
                return e || M(t, 8, this.length), X.read(this, t, !0, 52, 8);
            }, i.prototype.readDoubleBE = function(t, e) {
                return e || M(t, 8, this.length), X.read(this, t, !1, 52, 8);
            }, i.prototype.writeUIntLE = function(t, e, n, r) {
                t = +t, e |= 0, n |= 0, r || j(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var o = 1, i = 0;
                for (this[e] = 255 & t; ++i < n && (o *= 256); ) this[e + i] = t / o & 255;
                return e + n;
            }, i.prototype.writeUIntBE = function(t, e, n, r) {
                t = +t, e |= 0, n |= 0, r || j(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var o = n - 1, i = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); ) this[e + o] = t / i & 255;
                return e + n;
            }, i.prototype.writeUInt8 = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                this[e] = 255 & t, e + 1;
            }, i.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                this[e + 1] = t >>> 8) : $(this, t, e, !0), e + 2;
            }, i.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                this[e + 1] = 255 & t) : $(this, t, e, !1), e + 2;
            }, i.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, 
                this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : D(this, t, e, !0), 
                e + 4;
            }, i.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, 
                this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : D(this, t, e, !1), 
                e + 4;
            }, i.prototype.writeIntLE = function(t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    j(this, t, e, n, o - 1, -o);
                }
                var i = 0, a = 1, u = 0;
                for (this[e] = 255 & t; ++i < n && (a *= 256); ) t < 0 && 0 === u && 0 !== this[e + i - 1] && (u = 1), 
                this[e + i] = (t / a >> 0) - u & 255;
                return e + n;
            }, i.prototype.writeIntBE = function(t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    j(this, t, e, n, o - 1, -o);
                }
                var i = n - 1, a = 1, u = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (a *= 256); ) t < 0 && 0 === u && 0 !== this[e + i + 1] && (u = 1), 
                this[e + i] = (t / a >> 0) - u & 255;
                return e + n;
            }, i.prototype.writeInt8 = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
            }, i.prototype.writeInt16LE = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                this[e + 1] = t >>> 8) : $(this, t, e, !0), e + 2;
            }, i.prototype.writeInt16BE = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                this[e + 1] = 255 & t) : $(this, t, e, !1), e + 2;
            }, i.prototype.writeInt32LE = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : D(this, t, e, !0), 
                e + 4;
            }, i.prototype.writeInt32BE = function(t, e, n) {
                return t = +t, e |= 0, n || j(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
                i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, 
                this[e + 3] = 255 & t) : D(this, t, e, !1), e + 4;
            }, i.prototype.writeFloatLE = function(t, e, n) {
                return L(this, t, e, !0, n);
            }, i.prototype.writeFloatBE = function(t, e, n) {
                return L(this, t, e, !1, n);
            }, i.prototype.writeDoubleLE = function(t, e, n) {
                return U(this, t, e, !0, n);
            }, i.prototype.writeDoubleBE = function(t, e, n) {
                return U(this, t, e, !1, n);
            }, i.prototype.copy = function(t, e, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), 
                e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var o, a = r - n;
                if (this === t && n < e && e < r) for (o = a - 1; o >= 0; --o) t[o + e] = this[o + n]; else if (a < 1e3 || !i.TYPED_ARRAY_SUPPORT) for (o = 0; o < a; ++o) t[o + e] = this[o + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);
                return a;
            }, i.prototype.fill = function(t, e, n, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, 
                    n = this.length), 1 === t.length) {
                        var o = t.charCodeAt(0);
                        o < 256 && (t = o);
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !i.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                if (n <= e) return this;
                var a;
                if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (a = e; a < n; ++a) this[a] = t; else {
                    var u = i.isBuffer(t) ? t : F(new i(t, r).toString()), s = u.length;
                    for (a = 0; a < n - e; ++a) this[a + e] = u[a % s];
                }
                return this;
            };
            var Z = /[^+\/0-9A-Za-z-_]/g;
        }).call(this, n("c8ba"));
    },
    b981: function(t) {
        t.exports = {
            lan: [ "cn", "en", "fr", "fa" ],
            default: "cn",
            data: {
                title: {
                    cn: "俄罗斯方块",
                    en: "T E T R I S",
                    fr: "T E T R I S",
                    fa: "خانه سازی"
                },
                github: {
                    cn: "GitHub",
                    en: "GitHub",
                    fr: "GitHub",
                    fa: "گیت‌هاب"
                },
                linkTitle: {
                    cn: "查看源代码",
                    en: "View data source",
                    fr: "Afficher la source des données",
                    fa: "مشاهده سورس پروژه"
                },
                QRCode: {
                    cn: "二维码",
                    en: "QR code",
                    fr: "QR code",
                    fa: "کیوآر کد"
                },
                QRNotice: {
                    cn: "扫一扫用手机玩",
                    en: "Scan QR code to play with a mobile phone",
                    fr: "Numérisez le code QR pour jouer avec un téléphone mobile",
                    fa: "اسکن کیوآر کد برای بازی در تلفن همراه"
                },
                titleCenter: {
                    cn: "俄罗斯方块 TETRIS",
                    en: "TETRIS",
                    fr: "TETRIS",
                    fa: "خانه سازی"
                },
                point: {
                    cn: "得分",
                    en: "Point",
                    fr: "Score",
                    fa: "امتیاز"
                },
                highestScore: {
                    cn: "最高分",
                    en: "Max",
                    fr: "Max",
                    fa: "حداکثر"
                },
                lastRound: {
                    cn: "上轮得分",
                    en: "Last Round",
                    fr: "Dernier Tour",
                    fa: "آخرین دور"
                },
                cleans: {
                    cn: "消除行",
                    en: "Cleans",
                    fr: "Lignes",
                    fa: "پاک کرد"
                },
                level: {
                    cn: "级别",
                    en: "Level",
                    fr: "Difficulté",
                    fa: "سطح"
                },
                startLine: {
                    cn: "起始行",
                    en: "Start Line",
                    fr: "Ligne Départ",
                    fa: "خط شروع"
                },
                next: {
                    cn: "下一个",
                    en: "Next",
                    fr: "Prochain",
                    fa: "بعدی"
                },
                pause: {
                    cn: "暂停",
                    en: "Pause",
                    fr: "Pause",
                    fa: "مکث"
                },
                sound: {
                    cn: "音效",
                    en: "Sound",
                    fr: "Sonore",
                    fa: "صدا"
                },
                reset: {
                    cn: "重玩",
                    en: "Reset",
                    fr: "Réinitialiser",
                    fa: "ریست"
                },
                rotation: {
                    cn: "旋转",
                    en: "Rotation",
                    fr: "Rotation",
                    fa: "چرخش"
                },
                left: {
                    cn: "左移",
                    en: "Left",
                    fr: "Gauche",
                    fa: "چپ"
                },
                right: {
                    cn: "右移",
                    en: "Right",
                    fr: "Droite",
                    fa: "راست"
                },
                down: {
                    cn: "下移",
                    en: "Down",
                    fr: "Bas",
                    fa: "پایین"
                },
                drop: {
                    cn: "掉落",
                    en: "Drop",
                    fr: "Tomber",
                    fa: "سقوط"
                }
            }
        };
    },
    bb6e: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("5462")).default);
        }).call(this, n("543d").createPage);
    },
    c019: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = function(t) {
            return t < 10 ? "0".concat(t).split("") : "".concat(t).split("");
        }, o = {
            timeInterval: null,
            time_count: null
        }, i = {
            watch: {
                $props: {
                    deep: !0,
                    handler: function(t) {
                        this.render();
                    }
                }
            },
            props: {
                propTime: {
                    type: Boolean
                },
                number: {
                    type: Number
                },
                length: {
                    type: Number,
                    default: 6
                }
            },
            data: function() {
                return {
                    time_count: "",
                    time: new Date(),
                    data: []
                };
            },
            destroyed: function() {
                this.propTime && clearTimeout(o.timeInterval);
            },
            methods: {
                render: function() {
                    if (this.propTime) {
                        var t = this.time, e = r(t.getHours()), n = r(t.getMinutes()), o = t.getSeconds() % 2, i = e.concat(o ? "d" : "d_c", n);
                        this.data = i;
                    } else {
                        for (var a = "".concat(this.number).split(""), u = 0, s = this.length - a.length; u < s; u++) a.unshift("n");
                        this.data = a;
                    }
                }
            },
            beforeMount: function() {
                var t = this;
                if (this.length || (this.length = 6), this.propTime) {
                    !function e() {
                        var n = +o.timeInterval;
                        o.timeInterval = setTimeout(function() {
                            t.time = new Date(), t.time_count = n, t.render(), e();
                        }, 1e3);
                    }();
                }
            },
            mounted: function() {
                this.render();
            }
        };
        e.default = i;
    },
    c1c6: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("b156")).default);
        }).call(this, n("543d").createPage);
    },
    c69d: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = r(n("31fa")), i = r(n("8ed7")), a = {
            down: function(t) {
                t.commit("key_reset", !0), t.state.lock || (null !== t.state.cur ? o.default.down({
                    key: "r",
                    once: !0,
                    callback: function() {
                        i.default.overStart();
                    }
                }) : o.default.down({
                    key: "r",
                    once: !0,
                    callback: function() {
                        t.state.lock || i.default.start();
                    }
                }));
            },
            up: function(t) {
                t.commit("key_reset", !1), o.default.up({
                    key: "r"
                });
            }
        };
        e.default = a;
    },
    c70c: function(t, e, n) {
        !function(e, n) {
            t.exports = n();
        }(0, function() {
            return function(t) {
                function e(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
                }
                var n = {};
                return e.m = t, e.c = n, e.d = function(t, n, r) {
                    e.o(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: r
                    });
                }, e.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, e.t = function(t, n) {
                    if (1 & n && (t = e(t)), 8 & n) return t;
                    if (4 & n && "object" === (void 0 === t ? "undefined" : _typeof(t)) && t && t.__esModule) return t;
                    var r = Object.create(null);
                    if (e.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function(e) {
                        return t[e];
                    }.bind(null, o));
                    return r;
                }, e.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return e.d(n, "a", n), n;
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, e.p = "", e(e.s = 0);
            }([ function(t, e, n) {
                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }
                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function i(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== (void 0 === e ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
                }
                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : _typeof(e)));
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
                }
                function u(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n)) return e.getAttribute(n);
                }
                var s = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(t) {
                    return void 0 === t ? "undefined" : _typeof(t);
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : _typeof(t);
                }, c = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(t, r.key, r);
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e;
                    };
                }(), f = r(n(1)), l = r(n(3)), h = r(n(4)), p = function(t) {
                    function e(t, n) {
                        o(this, e);
                        var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return r.resolveOptions(n), r.listenClick(t), r;
                    }
                    return a(e, l.default), c(e, [ {
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, 
                            this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === s(t.container) ? t.container : document.body;
                        }
                    }, {
                        key: "listenClick",
                        value: function(t) {
                            var e = this;
                            this.listener = (0, h.default)(t, "click", function(t) {
                                return e.onClick(t);
                            });
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            var e = t.delegateTarget || t.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new f.default({
                                action: this.action(e),
                                target: this.target(e),
                                text: this.text(e),
                                container: this.container,
                                trigger: e,
                                emitter: this
                            });
                        }
                    }, {
                        key: "defaultAction",
                        value: function(t) {
                            return u("action", t);
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(t) {
                            var e = u("target", t);
                            if (e) return document.querySelector(e);
                        }
                    }, {
                        key: "defaultText",
                        value: function(t) {
                            return u("text", t);
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), 
                            this.clipboardAction = null);
                        }
                    } ], [ {
                        key: "isSupported",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [ "copy", "cut" ], e = "string" == typeof t ? [ t ] : t, n = !!document.queryCommandSupported;
                            return e.forEach(function(t) {
                                n = n && !!document.queryCommandSupported(t);
                            }), n;
                        }
                    } ]), e;
                }();
                t.exports = p;
            }, function(t, e, n) {
                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                var o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(t) {
                    return void 0 === t ? "undefined" : _typeof(t);
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : _typeof(t);
                }, i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(t, r.key, r);
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e;
                    };
                }(), a = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }(n(2)), u = function() {
                    function t(e) {
                        r(this, t), this.resolveOptions(e), this.initSelection();
                    }
                    return i(t, [ {
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = t.action, this.container = t.container, this.emitter = t.emitter, 
                            this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget();
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var t = this, e = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return t.removeFake();
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, 
                            this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", 
                            this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", 
                            this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), 
                            this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, 
                            a.default)(this.fakeElem), this.copyText();
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), 
                            this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), 
                            this.fakeElem = null);
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, a.default)(this.target), this.copyText();
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action);
                            } catch (e) {
                                t = !1;
                            }
                            this.handleResult(t);
                        }
                    }, {
                        key: "handleResult",
                        value: function(t) {
                            this.emitter.emit(t ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            });
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake();
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                        },
                        get: function() {
                            return this._action;
                        }
                    }, {
                        key: "target",
                        set: function(t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = t;
                            }
                        },
                        get: function() {
                            return this._target;
                        }
                    } ]), t;
                }();
                t.exports = u;
            }, function(t, e) {
                t.exports = function(t) {
                    var e;
                    if ("SELECT" === t.nodeName) t.focus(), e = t.value; else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                        var n = t.hasAttribute("readonly");
                        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), 
                        n || t.removeAttribute("readonly"), e = t.value;
                    } else {
                        t.hasAttribute("contenteditable") && t.focus();
                        var r = window.getSelection(), o = document.createRange();
                        o.selectNodeContents(t), r.removeAllRanges(), r.addRange(o), e = r.toString();
                    }
                    return e;
                };
            }, function(t, e) {
                function n() {}
                n.prototype = {
                    on: function(t, e, n) {
                        var r = this.e || (this.e = {});
                        return (r[t] || (r[t] = [])).push({
                            fn: e,
                            ctx: n
                        }), this;
                    },
                    once: function(t, e, n) {
                        function r() {
                            o.off(t, r), e.apply(n, arguments);
                        }
                        var o = this;
                        return r._ = e, this.on(t, r, n);
                    },
                    emit: function(t) {
                        var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, o = n.length;
                        for (r; r < o; r++) n[r].fn.apply(n[r].ctx, e);
                        return this;
                    },
                    off: function(t, e) {
                        var n = this.e || (this.e = {}), r = n[t], o = [];
                        if (r && e) for (var i = 0, a = r.length; i < a; i++) r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                        return o.length ? n[t] = o : delete n[t], this;
                    }
                }, t.exports = n;
            }, function(t, e, n) {
                function r(t, e, n) {
                    return t.addEventListener(e, n), {
                        destroy: function() {
                            t.removeEventListener(e, n);
                        }
                    };
                }
                function o(t, e, n) {
                    return Array.prototype.forEach.call(t, function(t) {
                        t.addEventListener(e, n);
                    }), {
                        destroy: function() {
                            Array.prototype.forEach.call(t, function(t) {
                                t.removeEventListener(e, n);
                            });
                        }
                    };
                }
                function i(t, e, n) {
                    return u(document.body, t, e, n);
                }
                var a = n(5), u = n(6);
                t.exports = function(t, e, n) {
                    if (!t && !e && !n) throw new Error("Missing required arguments");
                    if (!a.string(e)) throw new TypeError("Second argument must be a String");
                    if (!a.fn(n)) throw new TypeError("Third argument must be a Function");
                    if (a.node(t)) return r(t, e, n);
                    if (a.nodeList(t)) return o(t, e, n);
                    if (a.string(t)) return i(t, e, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                };
            }, function(t, e) {
                e.node = function(t) {
                    return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
                }, e.nodeList = function(t) {
                    var n = Object.prototype.toString.call(t);
                    return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]));
                }, e.string = function(t) {
                    return "string" == typeof t || t instanceof String;
                }, e.fn = function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t);
                };
            }, function(t, e, n) {
                function r(t, e, n, r, i) {
                    var a = o.apply(this, arguments);
                    return t.addEventListener(n, a, i), {
                        destroy: function() {
                            t.removeEventListener(n, a, i);
                        }
                    };
                }
                function o(t, e, n, r) {
                    return function(n) {
                        n.delegateTarget = i(n.target, e), n.delegateTarget && r.call(t, n);
                    };
                }
                var i = n(7);
                t.exports = function(t, e, n, o, i) {
                    return "function" == typeof t.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), 
                    Array.prototype.map.call(t, function(t) {
                        return r(t, e, n, o, i);
                    }));
                };
            }, function(t, e) {
                var n = 9;
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var r = Element.prototype;
                    r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
                }
                t.exports = function(t, e) {
                    for (;t && t.nodeType !== n; ) {
                        if ("function" == typeof t.matches && t.matches(e)) return t;
                        t = t.parentNode;
                    }
                };
            } ]);
        });
    },
    c8ba: function(t, e) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && (n = window);
        }
        t.exports = n;
    },
    c923: function(t, e, n) {
        n.r(e);
        var r = n("5655"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    cb1a: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, n("f6b1");
        var r = {
            props: [ "active", "color", "size", "top", "left", "label", "position", "arrow" ]
        };
        e.default = r;
    },
    ce91: function(t, e, n) {
        var r = n("90e6");
        n.n(r).a;
    },
    d158: function(t, e, n) {
        n.r(e);
        var r = n("abad"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    d15f: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        r(n("d5f3")), r(n("2f6c"));
        var o = {
            37: "left",
            38: "rotate",
            39: "right",
            40: "down",
            32: "space",
            83: "s",
            82: "r",
            80: "p"
        };
        Object.keys(o).map(function(t) {
            return parseInt(t, 10);
        });
    },
    d5f3: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = r(n("66fd")), i = r(n("2f62")), a = n("7530"), u = r(n("02ee")), s = n("7530"), c = n("f6b1"), f = r(n("7cd9")), l = n("0102");
        o.default.use(i.default);
        var h = c.lastRecord && !isNaN(parseInt(c.lastRecord.clearLines, 10)) ? parseInt(c.lastRecord.clearLines, 10) : 0;
        h < 0 && (h = 0);
        var p = function() {
            if (!c.lastRecord || !c.lastRecord.cur) return null;
            var t = c.lastRecord.cur, e = {
                type: t.type,
                rotateIndex: t.rotateIndex,
                shape: t.shape,
                xy: t.xy
            };
            return new f.default(e);
        }(), d = !(!c.lastRecord || void 0 === c.lastRecord.drop || !c.lastRecord.drop), v = !(!c.lastRecord || void 0 === c.lastRecord.lock || !c.lastRecord.lock), _ = c.lastRecord && Array.isArray(c.lastRecord.matrix) ? c.lastRecord.matrix : c.blankMatrix, y = c.lastRecord && !isNaN(parseInt(c.lastRecord.max, 10)) ? parseInt(c.lastRecord.max, 10) : 0;
        y < 0 ? y = 0 : y > c.maxPoint && (y = c.maxPoint);
        var m = !c.lastRecord || void 0 === c.lastRecord.music || !!c.lastRecord.music;
        l.hasWebAudioAPI.data || (m = !1);
        var g = c.lastRecord && -1 !== c.blockType.indexOf(c.lastRecord.next) ? c.lastRecord.next : (0, 
        a.getNextType)(), b = !(!c.lastRecord || void 0 === c.lastRecord.pause || !c.lastRecord.pause), w = c.lastRecord && !isNaN(parseInt(c.lastRecord.points, 10)) ? parseInt(c.lastRecord.points, 10) : 0;
        w < 0 ? w = 0 : w > c.maxPoint && (w = c.maxPoint);
        var A = c.lastRecord && !isNaN(parseInt(c.lastRecord.speedRun, 10)) ? parseInt(c.lastRecord.speedRun, 10) : 1;
        (A < 1 || A > 6) && (A = 1);
        var S = c.lastRecord && !isNaN(parseInt(c.lastRecord.speedStart, 10)) ? parseInt(c.lastRecord.speedStart, 10) : 1;
        (S < 1 || S > 6) && (S = 1);
        var k = c.lastRecord && !isNaN(parseInt(c.lastRecord.startLines, 10)) ? parseInt(c.lastRecord.startLines, 10) : 0;
        (k < 0 || k > 10) && (k = 0);
        var E = {
            music: m,
            pause: b,
            matrix: _,
            next: g,
            cur: p,
            speedStart: S,
            speedRun: A,
            startLines: k,
            clearLines: h,
            points: w,
            max: y,
            reset: !(!c.lastRecord || !c.lastRecord.reset || !c.lastRecord.reset),
            drop: d,
            keyboard: {
                drop: !1,
                down: !1,
                left: !1,
                right: !1,
                rotate: !1,
                reset: !1,
                music: !1,
                pause: !1
            },
            lock: v,
            focus: (0, s.isFocus)()
        }, x = new i.default.Store({
            state: E,
            mutations: u.default
        });
        e.default = x;
    },
    d82a: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("13b2")).default);
        }).call(this, n("543d").createPage);
    },
    d83c: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("3318")).default);
        }).call(this, n("543d").createPage);
    },
    d893: function(t, e, n) {
        n.r(e);
        var r = n("2d56"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    daee: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("9fe3")).default);
        }).call(this, n("543d").createPage);
    },
    dbee: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("eddb")).default);
        }).call(this, n("543d").createPage);
    },
    de0d: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("7295")).default);
        }).call(this, n("543d").createPage);
    },
    de72: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = n("f6b1"), o = {
            timeout: null
        }, i = {
            props: [ "cur", "reset" ],
            data: function() {
                return {
                    style: "r1",
                    display: "none"
                };
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function(t, e) {
                        this.animate(t), (-1 !== [ e.cur, t.cur ].indexOf(!1) && e.cur !== t.cur || e.reset !== t.reset) && this.animate(t);
                    }
                }
            },
            computed: {
                titleCenter: function() {
                    return r.i18n.titleCenter[r.lan];
                }
            },
            beforeMount: function() {
                this.animate(this.$props);
            },
            methods: {
                animate: function(t) {
                    var e = this, n = t.cur, r = t.reset;
                    if (clearTimeout(o.timeout), this.style = "r1", this.display = "none", n || r) this.display = "none"; else {
                        var i = "r", a = 0, u = function(t, e) {
                            t && (o.timeout = setTimeout(t, e));
                        }, s = function(t) {
                            u(function() {
                                e.display = "block", t && t();
                            }, 150);
                        }, c = function(t) {
                            u(function() {
                                e.display = "none", t && t();
                            }, 150);
                        }, f = function(t, n, r) {
                            u(function() {
                                e.style = i + 2, u(function() {
                                    e.style = i + 1, t && t();
                                }, r);
                            }, n);
                        }, l = function t(n) {
                            u(function() {
                                e.style = i + 4, u(function() {
                                    e.style = i + 3, 10 !== ++a && 20 !== a && 30 !== a || (i = "r" === i ? "l" : "r"), 
                                    a < 40 ? t(n) : (e.style = i + 1, n && u(n, 4e3));
                                }, 100);
                            }, 100);
                        }, h = function t() {
                            a = 0, f(function() {
                                f(function() {
                                    f(function() {
                                        e.style = i + 2, l(t);
                                    }, 150, 150);
                                }, 150, 150);
                            }, 1e3, 1500);
                        };
                        s(function() {
                            c(function() {
                                s(function() {
                                    c(function() {
                                        s(function() {
                                            h();
                                        });
                                    });
                                });
                            });
                        });
                    }
                }
            }
        };
        e.default = i;
    },
    df06: function(t, e, n) {
        (function(e) {
            !function() {
                t.exports = function(t) {
                    return (t instanceof e ? t : e.from(t.toString(), "binary")).toString("base64");
                };
            }();
        }).call(this, n("b639").Buffer);
    },
    df7c: function(t, e, n) {
        (function(t) {
            function n(t, e) {
                for (var n = 0, r = t.length - 1; r >= 0; r--) {
                    var o = t[r];
                    "." === o ? t.splice(r, 1) : ".." === o ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), 
                    n--);
                }
                if (e) for (;n--; n) t.unshift("..");
                return t;
            }
            function r(t, e) {
                if (t.filter) return t.filter(e);
                for (var n = [], r = 0; r < t.length; r++) e(t[r], r, t) && n.push(t[r]);
                return n;
            }
            var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, i = function(t) {
                return o.exec(t).slice(1);
            };
            e.resolve = function() {
                for (var e = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
                    var a = i >= 0 ? arguments[i] : t.cwd();
                    if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                    a && (e = a + "/" + e, o = "/" === a.charAt(0));
                }
                return e = n(r(e.split("/"), function(t) {
                    return !!t;
                }), !o).join("/"), (o ? "/" : "") + e || ".";
            }, e.normalize = function(t) {
                var o = e.isAbsolute(t), i = "/" === a(t, -1);
                return (t = n(r(t.split("/"), function(t) {
                    return !!t;
                }), !o).join("/")) || o || (t = "."), t && i && (t += "/"), (o ? "/" : "") + t;
            }, e.isAbsolute = function(t) {
                return "/" === t.charAt(0);
            }, e.join = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return e.normalize(r(t, function(t, e) {
                    if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                    return t;
                }).join("/"));
            }, e.relative = function(t, n) {
                function r(t) {
                    for (var e = 0; e < t.length && "" === t[e]; e++) ;
                    for (var n = t.length - 1; n >= 0 && "" === t[n]; n--) ;
                    return e > n ? [] : t.slice(e, n - e + 1);
                }
                t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);
                for (var o = r(t.split("/")), i = r(n.split("/")), a = Math.min(o.length, i.length), u = a, s = 0; s < a; s++) if (o[s] !== i[s]) {
                    u = s;
                    break;
                }
                var c = [];
                for (s = u; s < o.length; s++) c.push("..");
                return (c = c.concat(i.slice(u))).join("/");
            }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
                var e = i(t), n = e[0], r = e[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
            }, e.basename = function(t, e) {
                var n = i(t)[2];
                return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), 
                n;
            }, e.extname = function(t) {
                return i(t)[3];
            };
            var a = "b" === "ab".substr(-1) ? function(t, e, n) {
                return t.substr(e, n);
            } : function(t, e, n) {
                return e < 0 && (e = t.length + e), t.substr(e, n);
            };
        }).call(this, n("4362"));
    },
    dfe6: function dfe6(module, exports, __webpack_require__) {
        (function(process, global) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !function() {
                function Md5(t) {
                    if (t) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, 
                    this.blocks = blocks, this.buffer8 = buffer8; else if (ARRAY_BUFFER) {
                        var e = new ArrayBuffer(68);
                        this.buffer8 = new Uint8Array(e), this.blocks = new Uint32Array(e);
                    } else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, 
                    this.finalized = this.hashed = !1, this.first = !0;
                }
                var ERROR = "input is invalid type", WINDOW = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)), root = WINDOW ? window : {};
                root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                var WEB_WORKER = !WINDOW && "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)), NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
                NODE_JS ? root = global : WEB_WORKER && (root = self);
                var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === (void 0 === module ? "undefined" : _typeof(module)) && module.exports, AMD = __webpack_require__("3c35"), ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [ 128, 32768, 8388608, -2147483648 ], SHIFT = [ 0, 8, 16, 24 ], OUTPUT_TYPES = [ "hex", "array", "digest", "buffer", "arrayBuffer", "base64" ], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8;
                if (ARRAY_BUFFER) {
                    var buffer = new ArrayBuffer(68);
                    buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer);
                }
                !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t);
                }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
                    return "object" === (void 0 === t ? "undefined" : _typeof(t)) && t.buffer && t.buffer.constructor === ArrayBuffer;
                });
                var createOutputMethod = function(t) {
                    return function(e) {
                        return new Md5(!0).update(e)[t]();
                    };
                }, createMethod = function() {
                    var t = createOutputMethod("hex");
                    NODE_JS && (t = nodeWrap(t)), t.create = function() {
                        return new Md5();
                    }, t.update = function(e) {
                        return t.create().update(e);
                    };
                    for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                        var n = OUTPUT_TYPES[e];
                        t[n] = createOutputMethod(n);
                    }
                    return t;
                }, nodeWrap = function nodeWrap(method) {
                    var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"), nodeMethod = function(t) {
                        if ("string" == typeof t) return crypto.createHash("md5").update(t, "utf8").digest("hex");
                        if (null === t || void 0 === t) throw ERROR;
                        return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(t)).digest("hex") : method(t);
                    };
                    return nodeMethod;
                };
                Md5.prototype.update = function(t) {
                    if (!this.finalized) {
                        var e, n = void 0 === t ? "undefined" : _typeof(t);
                        if ("string" !== n) {
                            if ("object" !== n) throw ERROR;
                            if (null === t) throw ERROR;
                            if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t); else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw ERROR;
                            e = !0;
                        }
                        for (var r, o, i = 0, a = t.length, u = this.blocks, s = this.buffer8; i < a; ) {
                            if (this.hashed && (this.hashed = !1, u[0] = u[16], u[16] = u[1] = u[2] = u[3] = u[4] = u[5] = u[6] = u[7] = u[8] = u[9] = u[10] = u[11] = u[12] = u[13] = u[14] = u[15] = 0), 
                            e) if (ARRAY_BUFFER) for (o = this.start; i < a && o < 64; ++i) s[o++] = t[i]; else for (o = this.start; i < a && o < 64; ++i) u[o >> 2] |= t[i] << SHIFT[3 & o++]; else if (ARRAY_BUFFER) for (o = this.start; i < a && o < 64; ++i) (r = t.charCodeAt(i)) < 128 ? s[o++] = r : r < 2048 ? (s[o++] = 192 | r >> 6, 
                            s[o++] = 128 | 63 & r) : r < 55296 || r >= 57344 ? (s[o++] = 224 | r >> 12, s[o++] = 128 | r >> 6 & 63, 
                            s[o++] = 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++i)), 
                            s[o++] = 240 | r >> 18, s[o++] = 128 | r >> 12 & 63, s[o++] = 128 | r >> 6 & 63, 
                            s[o++] = 128 | 63 & r); else for (o = this.start; i < a && o < 64; ++i) (r = t.charCodeAt(i)) < 128 ? u[o >> 2] |= r << SHIFT[3 & o++] : r < 2048 ? (u[o >> 2] |= (192 | r >> 6) << SHIFT[3 & o++], 
                            u[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]) : r < 55296 || r >= 57344 ? (u[o >> 2] |= (224 | r >> 12) << SHIFT[3 & o++], 
                            u[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++], u[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++i)), 
                            u[o >> 2] |= (240 | r >> 18) << SHIFT[3 & o++], u[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & o++], 
                            u[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++], u[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]);
                            this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.start = o - 64, 
                            this.hash(), this.hashed = !0) : this.start = o;
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
                        this.bytes = this.bytes % 4294967296), this;
                    }
                }, Md5.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks, e = this.lastByteIndex;
                        t[e >> 2] |= EXTRA[3 & e], e >= 56 && (this.hashed || this.hash(), t[0] = t[16], 
                        t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), 
                        t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
                    }
                }, Md5.prototype.hash = function() {
                    var t, e, n, r, o, i, a = this.blocks;
                    this.first ? (t = a[0] - 680876937, t = (t << 7 | t >>> 25) - 271733879 << 0, r = (-1732584194 ^ 2004318071 & t) + a[1] - 117830708, 
                    r = (r << 12 | r >>> 20) + t << 0, n = (-271733879 ^ r & (-271733879 ^ t)) + a[2] - 1126478375, 
                    n = (n << 17 | n >>> 15) + r << 0, e = (t ^ n & (r ^ t)) + a[3] - 1316259209, e = (e << 22 | e >>> 10) + n << 0) : (t = this.h0, 
                    e = this.h1, n = this.h2, r = this.h3, t += (r ^ e & (n ^ r)) + a[0] - 680876936, 
                    t = (t << 7 | t >>> 25) + e << 0, r += (n ^ t & (e ^ n)) + a[1] - 389564586, r = (r << 12 | r >>> 20) + t << 0, 
                    n += (e ^ r & (t ^ e)) + a[2] + 606105819, n = (n << 17 | n >>> 15) + r << 0, e += (t ^ n & (r ^ t)) + a[3] - 1044525330, 
                    e = (e << 22 | e >>> 10) + n << 0), e = ((e += ((t = ((t += (r ^ e & (n ^ r)) + a[4] - 176418897) << 7 | t >>> 25) + e << 0) ^ (n = ((n += (e ^ (r = ((r += (n ^ t & (e ^ n)) + a[5] + 1200080426) << 12 | r >>> 20) + t << 0) & (t ^ e)) + a[6] - 1473231341) << 17 | n >>> 15) + r << 0) & (r ^ t)) + a[7] - 45705983) << 22 | e >>> 10) + n << 0, 
                    e = ((e += ((t = ((t += (r ^ e & (n ^ r)) + a[8] + 1770035416) << 7 | t >>> 25) + e << 0) ^ (n = ((n += (e ^ (r = ((r += (n ^ t & (e ^ n)) + a[9] - 1958414417) << 12 | r >>> 20) + t << 0) & (t ^ e)) + a[10] - 42063) << 17 | n >>> 15) + r << 0) & (r ^ t)) + a[11] - 1990404162) << 22 | e >>> 10) + n << 0, 
                    e = ((e += ((t = ((t += (r ^ e & (n ^ r)) + a[12] + 1804603682) << 7 | t >>> 25) + e << 0) ^ (n = ((n += (e ^ (r = ((r += (n ^ t & (e ^ n)) + a[13] - 40341101) << 12 | r >>> 20) + t << 0) & (t ^ e)) + a[14] - 1502002290) << 17 | n >>> 15) + r << 0) & (r ^ t)) + a[15] + 1236535329) << 22 | e >>> 10) + n << 0, 
                    e = ((e += ((r = ((r += (e ^ n & ((t = ((t += (n ^ r & (e ^ n)) + a[1] - 165796510) << 5 | t >>> 27) + e << 0) ^ e)) + a[6] - 1069501632) << 9 | r >>> 23) + t << 0) ^ t & ((n = ((n += (t ^ e & (r ^ t)) + a[11] + 643717713) << 14 | n >>> 18) + r << 0) ^ r)) + a[0] - 373897302) << 20 | e >>> 12) + n << 0, 
                    e = ((e += ((r = ((r += (e ^ n & ((t = ((t += (n ^ r & (e ^ n)) + a[5] - 701558691) << 5 | t >>> 27) + e << 0) ^ e)) + a[10] + 38016083) << 9 | r >>> 23) + t << 0) ^ t & ((n = ((n += (t ^ e & (r ^ t)) + a[15] - 660478335) << 14 | n >>> 18) + r << 0) ^ r)) + a[4] - 405537848) << 20 | e >>> 12) + n << 0, 
                    e = ((e += ((r = ((r += (e ^ n & ((t = ((t += (n ^ r & (e ^ n)) + a[9] + 568446438) << 5 | t >>> 27) + e << 0) ^ e)) + a[14] - 1019803690) << 9 | r >>> 23) + t << 0) ^ t & ((n = ((n += (t ^ e & (r ^ t)) + a[3] - 187363961) << 14 | n >>> 18) + r << 0) ^ r)) + a[8] + 1163531501) << 20 | e >>> 12) + n << 0, 
                    e = ((e += ((r = ((r += (e ^ n & ((t = ((t += (n ^ r & (e ^ n)) + a[13] - 1444681467) << 5 | t >>> 27) + e << 0) ^ e)) + a[2] - 51403784) << 9 | r >>> 23) + t << 0) ^ t & ((n = ((n += (t ^ e & (r ^ t)) + a[7] + 1735328473) << 14 | n >>> 18) + r << 0) ^ r)) + a[12] - 1926607734) << 20 | e >>> 12) + n << 0, 
                    e = ((e += ((i = (r = ((r += ((o = e ^ n) ^ (t = ((t += (o ^ r) + a[5] - 378558) << 4 | t >>> 28) + e << 0)) + a[8] - 2022574463) << 11 | r >>> 21) + t << 0) ^ t) ^ (n = ((n += (i ^ e) + a[11] + 1839030562) << 16 | n >>> 16) + r << 0)) + a[14] - 35309556) << 23 | e >>> 9) + n << 0, 
                    e = ((e += ((i = (r = ((r += ((o = e ^ n) ^ (t = ((t += (o ^ r) + a[1] - 1530992060) << 4 | t >>> 28) + e << 0)) + a[4] + 1272893353) << 11 | r >>> 21) + t << 0) ^ t) ^ (n = ((n += (i ^ e) + a[7] - 155497632) << 16 | n >>> 16) + r << 0)) + a[10] - 1094730640) << 23 | e >>> 9) + n << 0, 
                    e = ((e += ((i = (r = ((r += ((o = e ^ n) ^ (t = ((t += (o ^ r) + a[13] + 681279174) << 4 | t >>> 28) + e << 0)) + a[0] - 358537222) << 11 | r >>> 21) + t << 0) ^ t) ^ (n = ((n += (i ^ e) + a[3] - 722521979) << 16 | n >>> 16) + r << 0)) + a[6] + 76029189) << 23 | e >>> 9) + n << 0, 
                    e = ((e += ((i = (r = ((r += ((o = e ^ n) ^ (t = ((t += (o ^ r) + a[9] - 640364487) << 4 | t >>> 28) + e << 0)) + a[12] - 421815835) << 11 | r >>> 21) + t << 0) ^ t) ^ (n = ((n += (i ^ e) + a[15] + 530742520) << 16 | n >>> 16) + r << 0)) + a[2] - 995338651) << 23 | e >>> 9) + n << 0, 
                    e = ((e += ((r = ((r += (e ^ ((t = ((t += (n ^ (e | ~r)) + a[0] - 198630844) << 6 | t >>> 26) + e << 0) | ~n)) + a[7] + 1126891415) << 10 | r >>> 22) + t << 0) ^ ((n = ((n += (t ^ (r | ~e)) + a[14] - 1416354905) << 15 | n >>> 17) + r << 0) | ~t)) + a[5] - 57434055) << 21 | e >>> 11) + n << 0, 
                    e = ((e += ((r = ((r += (e ^ ((t = ((t += (n ^ (e | ~r)) + a[12] + 1700485571) << 6 | t >>> 26) + e << 0) | ~n)) + a[3] - 1894986606) << 10 | r >>> 22) + t << 0) ^ ((n = ((n += (t ^ (r | ~e)) + a[10] - 1051523) << 15 | n >>> 17) + r << 0) | ~t)) + a[1] - 2054922799) << 21 | e >>> 11) + n << 0, 
                    e = ((e += ((r = ((r += (e ^ ((t = ((t += (n ^ (e | ~r)) + a[8] + 1873313359) << 6 | t >>> 26) + e << 0) | ~n)) + a[15] - 30611744) << 10 | r >>> 22) + t << 0) ^ ((n = ((n += (t ^ (r | ~e)) + a[6] - 1560198380) << 15 | n >>> 17) + r << 0) | ~t)) + a[13] + 1309151649) << 21 | e >>> 11) + n << 0, 
                    e = ((e += ((r = ((r += (e ^ ((t = ((t += (n ^ (e | ~r)) + a[4] - 145523070) << 6 | t >>> 26) + e << 0) | ~n)) + a[11] - 1120210379) << 10 | r >>> 22) + t << 0) ^ ((n = ((n += (t ^ (r | ~e)) + a[2] + 718787259) << 15 | n >>> 17) + r << 0) | ~t)) + a[9] - 343485551) << 21 | e >>> 11) + n << 0, 
                    this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = e - 271733879 << 0, this.h2 = n - 1732584194 << 0, 
                    this.h3 = r + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + e << 0, 
                    this.h2 = this.h2 + n << 0, this.h3 = this.h3 + r << 0);
                }, Md5.prototype.hex = function() {
                    this.finalize();
                    var t = this.h0, e = this.h1, n = this.h2, r = this.h3;
                    return HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15];
                }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function() {
                    this.finalize();
                    var t = this.h0, e = this.h1, n = this.h2, r = this.h3;
                    return [ 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255 ];
                }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t = new ArrayBuffer(16), e = new Uint32Array(t);
                    return e[0] = this.h0, e[1] = this.h1, e[2] = this.h2, e[3] = this.h3, t;
                }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function() {
                    for (var t, e, n, r = "", o = this.array(), i = 0; i < 15; ) t = o[i++], e = o[i++], 
                    n = o[i++], r += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & (t << 4 | e >>> 4)] + BASE64_ENCODE_CHAR[63 & (e << 2 | n >>> 6)] + BASE64_ENCODE_CHAR[63 & n];
                    return t = o[i], r += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[t << 4 & 63] + "==";
                };
                var exports = createMethod();
                COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && (void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return exports;
                }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
            }();
        }).call(this, __webpack_require__("4362"), __webpack_require__("c8ba"));
    },
    e084: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            timeout: null
        }, o = {
            props: [ "dat" ],
            mounted: function() {
                this.setShake(this.dat);
            },
            data: function() {
                return {
                    showPause: !1
                };
            },
            watch: {
                $props: {
                    deep: !0,
                    handler: function(t) {
                        this.setShake(t.data);
                    }
                }
            },
            methods: {
                setShake: function(t) {
                    var e = this;
                    t && !r.timeout && (r.timeout = setInterval(function() {
                        e.showPause = !e.showPause;
                    }, 250)), !t && r.timeout && (clearInterval(r.timeout), this.showPause = !1, r.timeout = null);
                }
            }
        };
        e.default = o;
    },
    e3db: function(t, e) {
        var n = {}.toString;
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == n.call(t);
        };
    },
    e59f: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("12e8")).default);
        }).call(this, n("543d").createPage);
    },
    ea2e: function(t, e, n) {
        n.r(e);
        var r = n("6493"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    ef2c: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("2637"), e(n("66fd")), t(e(n("0cb9")).default);
        }).call(this, n("543d").createPage);
    },
    f295: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.pathToBase64 = function(t) {
            return new Promise(function(e, n) {
                if ("object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && "document" in window) {
                    var r = document.createElement("canvas"), o = r.getContext("2d"), i = new Image();
                    return i.onload = function() {
                        r.width = i.width, r.height = i.height, o.drawImage(i, 0, 0), e(r.toDataURL());
                    }, i.onerror = n, void (i.src = t);
                }
                if ("object" !== ("undefined" == typeof plus ? "undefined" : _typeof(plus))) "object" === ("undefined" == typeof wx ? "undefined" : _typeof(wx)) && wx.canIUse("getFileSystemManager") ? wx.getFileSystemManager().readFile({
                    filePath: t,
                    encoding: "base64",
                    success: function(t) {
                        e("data:image/png;base64," + t.data);
                    },
                    fail: function(t) {
                        n(t);
                    }
                }) : n(new Error("not support")); else {
                    var a = new plus.nativeObj.Bitmap("bitmap" + Date.now());
                    a.load(t, function() {
                        try {
                            var t = a.toBase64Data();
                        } catch (t) {
                            n(t);
                        }
                        a.clear(), e(t);
                    }, function(t) {
                        a.clear(), n(t);
                    });
                }
            });
        }, e.base64ToPath = function(t) {
            return new Promise(function(e, n) {
                if ("object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && "document" in window) {
                    for (var r = (t = t.split(","))[0].match(/:(.*?);/)[1], o = atob(t[1]), i = o.length, a = new Uint8Array(i); i--; ) a[i] = o.charCodeAt(i);
                    return e((window.URL || window.webkitURL).createObjectURL(new Blob([ a ], {
                        type: r
                    })));
                }
                var u = t.match(/data\:\S+\/(\S+);/);
                u ? u = u[1] : n(new Error("base64 error"));
                var s = Date.now() + "." + u;
                if ("object" !== ("undefined" == typeof plus ? "undefined" : _typeof(plus))) if ("object" === ("undefined" == typeof wx ? "undefined" : _typeof(wx)) && wx.canIUse("getFileSystemManager")) {
                    var c = wx.env.USER_DATA_PATH + "/" + s;
                    wx.getFileSystemManager().writeFile({
                        filePath: c,
                        data: t.replace(/^data:\S+\/\S+;base64,/, ""),
                        encoding: "base64",
                        success: function() {
                            e(c);
                        },
                        fail: function(t) {
                            n(t);
                        }
                    });
                } else n(new Error("not support")); else {
                    var f = new plus.nativeObj.Bitmap("bitmap" + Date.now());
                    f.loadBase64Data(t, function() {
                        var t = "_doc/uniapp_temp/" + s;
                        f.save(t, {}, function() {
                            f.clear(), e(t);
                        }, function(t) {
                            f.clear(), n(t);
                        });
                    }, function(t) {
                        f.clear(), n(t);
                    });
                }
            });
        };
    },
    f31c: function(t, e, n) {
        (function(t, e) {
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            n("2637");
            var i = r(n("66fd")), a = r(n("0601")), u = r(n("d5f3"));
            n("f6b1"), n("d15f");
            var s = r(n("8616")), c = r(n("dee9")), f = r(n("16c8")), l = n("7530");
            i.default.config.productionTip = !1, a.default.mpType = "app", t(new i.default(function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                    }))), r.forEach(function(e) {
                        o(t, e, n[e]);
                    });
                }
                return t;
            }({}, a.default))).$mount(), i.default.component("home", s.default), i.default.component("my", c.default), 
            i.default.component("myclass", f.default), (0, l.subscribeRecord)(u.default), i.default.prototype.goPage = function(t) {
                e.navigateTo({
                    url: t
                });
            }, i.default.prototype.token = function(t) {
                var n = e.getStorageSync("token_time");
                if (console.log("token_time:" + n), console.log("time:" + new Date().getTime()), 
                "" != n) {
                    if (n > new Date().getTime()) return t(e.getStorageSync("token")), e.getStorageSync("token");
                    e.request({
                        url: "https://aip.baidubce.com/oauth/2.0/token",
                        data: {
                            grant_type: "client_credentials",
                            client_id: "IRR081qIr3jssAZtv94yQ2oy",
                            client_secret: "0aNj1SBYO07TuUCpTEFv3ZyXcoCvvTZV"
                        },
                        success: function(n) {
                            return console.log(n.data), e.setStorageSync("token", n.data.access_token), e.setStorageSync("token_time", new Date().getTime() + 259e4), 
                            t(n.data.access_token), n.data.access_token;
                        }
                    });
                } else e.request({
                    url: "https://aip.baidubce.com/oauth/2.0/token",
                    data: {
                        grant_type: "client_credentials",
                        client_id: "IRR081qIr3jssAZtv94yQ2oy",
                        client_secret: "0aNj1SBYO07TuUCpTEFv3ZyXcoCvvTZV"
                    },
                    success: function(n) {
                        return console.log(n.data), e.setStorageSync("token", n.data.access_token), e.setStorageSync("token_time", new Date().getTime() + 259e4), 
                        t(n.data.access_token), n.data.access_token;
                    }
                });
            };
        }).call(this, n("543d").createApp, n("543d").default);
    },
    f694: function(t, e, n) {
        function r(t, e) {
            return a(t) || i(t, e) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function i(t, e) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), 
                !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t;
            } finally {
                try {
                    r || null == u.return || u.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }
        function a(t) {
            if (Array.isArray(t)) return t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.base64src = function(t, e) {
            var n = r(/data:image\/(\w+);base64,(.*)/.exec(t) || [], 3), o = n[1], i = n[2];
            if (!o) return new Error("ERROR_BASE64SRC_PARSE");
            var a = "".concat(wx.env.USER_DATA_PATH, "/").concat(s, ".").concat(o), c = wx.base64ToArrayBuffer(i);
            u.writeFile({
                filePath: a,
                data: c,
                encoding: "binary",
                success: function() {
                    e(a);
                },
                fail: function() {
                    return new Error("ERROR_BASE64SRC_WRITE");
                }
            });
        };
        var u = wx.getFileSystemManager(), s = "tmp_base64src";
    },
    f6b1: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.i18n = e.lan = e.getParam = e.eachLines = e.transform = e.maxPoint = e.lastRecord = e.StorageKey = e.clearPoints = e.blankMatrix = e.blankLine = e.fillLine = e.delays = e.speeds = e.blockType = e.origin = e.blockShape = void 0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("b981")), o = {
            I: [ [ 1, 1, 1, 1 ] ],
            L: [ [ 0, 0, 1 ], [ 1, 1, 1 ] ],
            J: [ [ 1, 0, 0 ], [ 1, 1, 1 ] ],
            Z: [ [ 1, 1, 0 ], [ 0, 1, 1 ] ],
            S: [ [ 0, 1, 1 ], [ 1, 1, 0 ] ],
            O: [ [ 1, 1 ], [ 1, 1 ] ],
            T: [ [ 0, 1, 0 ], [ 1, 1, 1 ] ]
        };
        e.blockShape = o;
        var i = {
            I: [ [ -1, 1 ], [ 1, -1 ] ],
            L: [ [ 0, 0 ] ],
            J: [ [ 0, 0 ] ],
            Z: [ [ 0, 0 ] ],
            S: [ [ 0, 0 ] ],
            O: [ [ 0, 0 ] ],
            T: [ [ 0, 0 ], [ 1, 0 ], [ -1, 1 ], [ 0, -1 ] ]
        };
        e.origin = i;
        var a = Object.keys(o);
        e.blockType = a;
        var u = [ 800, 650, 500, 370, 250, 160 ];
        e.speeds = u;
        var s = [ 50, 60, 70, 80, 90, 100 ];
        e.delays = s;
        var c = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
        e.fillLine = c;
        var f = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        e.blankLine = f;
        var l = function() {
            for (var t = [], e = 0; e < 20; e++) t.push(f);
            return t;
        }();
        e.blankMatrix = l;
        var h = [ 100, 300, 700, 1500 ];
        e.clearPoints = h;
        var p = "VUE_TETRIS";
        e.StorageKey = p;
        var d = function() {
            var t;
            try {
                t = wx.getStorageSync(p);
            } catch (t) {}
            if (!t) return !1;
            try {
                t = atob(t), t = decodeURIComponent(t), t = JSON.parse(t);
            } catch (t) {
                return (console || console.error) && console.error("读取记录错误:", t), !1;
            }
            return t;
        }();
        e.lastRecord = d;
        e.maxPoint = 999999;
        var v = [ "transform", "webkitTransform", "msTransform", "mozTransform", "oTransform" ][0];
        e.transform = v;
        e.eachLines = 20;
        e.getParam = function(t) {
            return "";
        };
        var _ = r.default.default;
        e.lan = _;
        var y = r.default.data;
        e.i18n = y;
    }
} ]);