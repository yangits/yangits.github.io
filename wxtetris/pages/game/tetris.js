
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/game/tetris" ], {
    "1ee1": function(n, e, t) {
        var o = t("4169");
        t.n(o).a;
    },
    "31c6": function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, r = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return r;
        });
    },
    4169: function(n, e, t) {},
    "5f26": function(n, e, t) {
        t.r(e);
        var o = t("e0ca"), r = t.n(o);
        for (var i in o) "default" !== i && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        e.default = r.a;
    },
    e0ca: function(n, e, t) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function r(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t, n;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = t("2f62"), a = t("f6b1"), u = o(t("8ed7")), l = o(t("d5f3")), c = wx.getSystemInfoSync(), d = c.pixelRatio, s = c.windowWidth, f = c.windowHeight, m = {
            store: l.default,
            data: function() {
                return {
                    paddingBottom: void 0,
                    paddingTop: void 0,
                    transform: void 0,
                    marginTop: void 0,
                    w: s,
                    h: f,
                    filling: ""
                };
            },
            mounted: function() {
                console.log(wx.getSystemInfoSync()), this.mRender();
            },
            components: {
                Decorate: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/decorate/index") ]).then(t.bind(null, "cd13"));
                },
                Next: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/next/index") ]).then(t.bind(null, "a028"));
                },
                Music: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/music/index") ]).then(t.bind(null, "0249"));
                },
                Pause: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/pause/index") ]).then(t.bind(null, "712a"));
                },
                Number: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/number/index") ]).then(t.bind(null, "6a70"));
                },
                Point: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/point/index") ]).then(t.bind(null, "931a"));
                },
                Logo: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/logo/index") ]).then(t.bind(null, "7bb5"));
                },
                Keyboard: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/keyboard/index") ]).then(t.bind(null, "3583"));
                },
                Matrix: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/matrix/index") ]).then(t.bind(null, "febf"));
                }
            },
            computed: function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}, o = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    }))), o.forEach(function(e) {
                        r(n, e, t[e]);
                    });
                }
                return n;
            }({
                pContent: function() {
                    return this.cur ? a.i18n.cleans[a.lan] : a.i18n.startLine[a.lan];
                },
                level: function() {
                    return a.i18n.level[a.lan];
                },
                nextText: function() {
                    return a.i18n.next[a.lan];
                }
            }, (0, i.mapState)([ "matrix", "keyboard", "music", "pause", "next", "cur", "speedStart", "speedRun", "startLines", "clearLines", "points", "max", "reset", "drop" ])),
            methods: {
                mRender: function() {
                    var n = this, e = 0, t = function() {
                        var t, o = n.w, r = n.h, i = r / o, u = {};
                        return i < 1.5 ? t = r / 960 : (t = o / 640, e = (r - 960 * t) / t / d, u = {
                            "padding-top": Math.floor(e) + 42 + "px",
                            "padding-bottom": Math.floor(e) - 0 + "px",
                            "margin-top": Math.floor(-483 - e * i) + "px"
                        }), u[a.transform] = "scale(".concat(t, ")"), u;
                    }();
                    this.paddingBottom = t["padding-bottom"], this.paddingTop = t["padding-top"], this.marginTop = t["margin-top"], 
                    this.transform = t.transform, this.start(), this.filling = e;
                },
                start: function() {
                    if (a.lastRecord) {
                        if (console.log(a.lastRecord), a.lastRecord.cur && !a.lastRecord.pause) {
                            var n = this.$store.state.speedRun, e = a.speeds[n - 1] / 2;
                            e = n < a.speeds[a.speeds.length - 1] ? a.speeds[a.speeds.length - 1] : n, u.default.auto(e);
                        }
                        a.lastRecord.cur || u.default.overStart();
                    } else u.default.overStart();
                }
            }
        };
        e.default = m;
    },
    f13a: function(n, e, t) {
        t.r(e);
        var o = t("31c6"), r = t("5f26");
        for (var i in r) "default" !== i && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(i);
        t("1ee1");
        var a = t("2877"), u = Object(a.a)(r.default, o.a, o.b, !1, null, null, null);
        e.default = u.exports;
    }
}, [ [ "77b7", "common/runtime", "common/vendor" ] ] ]);