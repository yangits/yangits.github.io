!(function (t) {
    var e = {};
    function s(o) {
      if (e[o]) return e[o].exports;
      var i = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
    }
    (s.m = t),
      (s.c = e),
      (s.d = function (t, e, o) {
        s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (s.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (s.t = function (t, e) {
        if ((1 & e && (t = s(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (s.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            s.d(
              o,
              i,
              function (e) {
                return t[e];
              }.bind(null, i),
            );
        return o;
      }),
      (s.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return s.d(e, "a", e), e;
      }),
      (s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (s.p = "./"),
      s((s.s = 2));
  })([
    function (t, e) {
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var o = {
          width: 193,
          height: 255,
          atomRowCount: 21,
          atomColCount: 11,
          atomBorder: 2,
          atomInset: 2,
          atomSpace: 3,
          splitPosition: 0.7,
          splitSize: 2,
          fontSize: 13,
          fontHeight: 15,
          background: "#9facaa",
          color1: "#191919",
          color2: "#9aa5a3",
        },
        i = {
          score: "Score",
          best: "Best",
          level: "Level",
          pause: "PAUSE",
          fps: "FPS",
        };
      function n(t, e) {
        if ("string" == typeof t) this.dom = document.querySelector(t);
        else {
          if ("object" !== s(t)) throw new Error("未知的选择器。");
          t.jquery && t.length > 0 ? (this.dom = t[0]) : (this.dom = t);
        }
        (this.option = n.assign({}, o, e || {})),
          r.call(this),
          h.call(this),
          a.call(this),
          l.call(this);
      }
      function r() {
        (this.atoms = void 0),
          (this.statusAtoms = void 0),
          (this.fps = 60),
          (this.score = 0),
          (this.paused = !1),
          (this.level = 0),
          (this.best = 0);
      }
      function h() {
        var t = document.createElement("canvas");
        (t.width = t.style.width = this.option.width),
          (t.height = t.style.height = this.option.height),
          (t.style.margin = "0"),
          (t.style.padding = "0"),
          (t.style.background = this.option.background),
          (t.style.display = "block"),
          (this.canvasDom = t),
          this.dom.appendChild(t),
          (this.canvas = this.canvasDom.getContext("2d"));
      }
      function a() {
        var t = {};
        (t.splitPosition = Math.round(
          this.option.width * this.option.splitPosition,
        )),
          (t.atomSpace = this.option.atomSpace || 1),
          (t.atomWidth =
            (t.splitPosition - t.atomSpace * (this.option.atomColCount + 1)) /
            this.option.atomColCount),
          (t.atomHeight =
            (this.option.height - t.atomSpace * (this.option.atomRowCount + 1)) /
            this.option.atomRowCount),
          (t.fontItalic = "italic normal " + this.option.fontSize + "px arial"),
          (t.fontBold = "normal bold " + this.option.fontSize + "px arial"),
          (this.drawParam = t);
      }
      function f() {
        this.logicFun && this.logicFun();
      }
      function l() {
        var t = this,
          e = 0,
          s = "";
        setInterval(function () {
          (t.fps = e), (e = 0);
        }, 1e3),
          (function o() {
            var i = Date.now();
            (e += 1), f.call(t);
            var n = Date.now();
            u.call(t, t.canvas);
            var r = Date.now();
            window.requestAnimationFrame
              ? ((s = "requestAnimationFrame"), window.requestAnimationFrame(o))
              : window.webkitRequestAnimationFrame
                ? ((s = "webkitRequestAnimationFrame"),
                  window.webkitRequestAnimationFrame(o))
                : ((s = "setTimeout"), setTimeout(o, 16));
            var h = Date.now();

          })();
      }
      function u(t) {
        t.clearRect(0, 0, this.option.width, this.option.height),
          t.save(),
          t.beginPath();
        var e = t.fillStyle;
        (t.fillStyle = this.option.background),
          t.fillRect(0, 0, this.option.width, this.option.height),
          (t.fillStyle = e),
          c.call(this, t);
        var s = t.strokeStyle,
          o = t.lineWidth;
        (t.strokeStyle = this.option.color1),
          (t.lineWidth = this.option.splitSize),
          t.moveTo(this.drawParam.splitPosition + this.option.splitSize / 2, 0),
          t.lineTo(
            this.drawParam.splitPosition + this.option.splitSize / 2,
            this.option.height,
          ),
          t.stroke(),
          (t.strokeStyle = s),
          (t.lineWidth = o),
          m.call(this, t),
          t.closePath(),
          t.restore();
      }
      function c(t) {
        var e = this,
          s = 0,
          o = 0,
          i = t.fillStyle,
          r = t.strokeStyle,
          h = t.lineWidth;
        n.each(e.option.atomRowCount, function (i, r) {
          (s += e.drawParam.atomSpace),
            (o = 0),
            n.each(e.option.atomColCount, function (i, n) {
              o += e.drawParam.atomSpace;
              var h = 0;
              if (
                (e.atoms
                  ? ((h = e.atoms[r][n]), p.call(e, t, h, s, o))
                  : p.call(e, t, h, s, o),
                e.animArr)
              ) {
                var a = e.animArr[r][n];
                a !== h && 1 === a && p.call(e, t, a, s, o);
              }
              o += e.drawParam.atomWidth;
            }),
            (s += e.drawParam.atomHeight);
        }),
          (t.fillStyle = i),
          (t.strokeStyle = r),
          (t.lineWidth = h);
      }
      function p(t, e, s, o) {
        (t.strokeStyle = t.fillStyle =
          e > 0 ? this.option.color1 : this.option.color2),
          (t.lineWidth = this.option.atomBorder),
          t.strokeRect(o, s, this.drawParam.atomWidth, this.drawParam.atomHeight),
          t.fillRect(
            o + this.option.atomInset,
            s + this.option.atomInset,
            this.drawParam.atomWidth - 2 * this.option.atomInset,
            this.drawParam.atomHeight - 2 * this.option.atomInset,
          );
      }
      function m(t) {
        var e = this,
          s = t.fillStyle,
          o = t.lineWidth,
          r = t.strokeStyle,
          h = t.font,
          a = e.option.fontHeight,
          f = e.drawParam.splitPosition + 5;
        (t.strokeStyle = e.option.color1),
          (t.fillStyle = e.option.color1),
          (t.font = e.drawParam.fontItalic),
          t.fillText(i.score, f, a),
          (t.font = e.drawParam.fontBold),
          t.fillText(e.score, f, (a += e.option.fontHeight)),
          (t.font = e.drawParam.fontItalic),
          t.fillText(i.level, f, (a += e.option.fontHeight)),
          (t.font = e.drawParam.fontBold),
          t.fillText(e.level, f, (a += e.option.fontHeight));
        var l = a + 5,
          u = f;
        n.each(4, function (s, o) {
          (l += e.drawParam.atomSpace),
            (u = f),
            n.each(4, function (s, i) {
              (u += e.drawParam.atomSpace),
                p.call(e, t, e.statusAtoms ? e.statusAtoms[o][i] : 0, l, u),
                (u += e.drawParam.atomWidth);
            }),
            (l += e.drawParam.atomHeight);
        }),
          (a = l + 5),
          (t.strokeStyle = t.fillStyle = e.option.color1),
          (t.font = e.drawParam.fontItalic),
          t.fillText(i.best, f, (a += e.option.fontHeight)),
          (t.font = e.drawParam.fontBold),
          t.fillText(e.best, f, (a += e.option.fontHeight)),
          (a += 5),
          (t.fillStyle = e.paused ? e.option.color1 : e.option.color2),
          (t.font = e.drawParam.fontItalic),
          t.fillText(i.pause, f, (a += e.option.fontHeight)),
          (t.strokeStyle = t.fillStyle = e.option.color1),
          (t.font = e.drawParam.fontItalic),
          t.fillText(i.fps, f, e.option.height - e.option.fontHeight - 2),
          (t.font = e.drawParam.fontBold),
          t.fillText(e.fps, f, e.option.height - 2),
          (t.font = h),
          (t.strokeStyle = r),
          (t.fillStyle = s),
          (t.lineWidth = o);
      }
      function w(t, e, s) {/////
        var o = this;
        if (e < t.animArr.length) {
          var i = function (e) {
              var s = r[e];
              if (s) return o.animResult !== t ? "kill" : void (o.animArr = s);
            },
            r = t.animArr[e],
            h = t.animTime[e];
          n.scroll(
            0,
            r.length,
            {
              goo: i,
              end: function (n) {
                i(n), s && s(t.animName, e), w.call(o, t, e + 1, s);
              },
              kill: function () {
                s && s(t.animName, -1);
              },
            },
            h,
          );
        } else o.animArr = void 0;
      }
      function d() {
        return this.makeNewArr(function (t, e) {
          return [t, e];
        });
      }
      (n.prototype.getAtomSize = function () {
        return {
          width: this.drawParam.atomWidth,
          height: this.drawParam.atomHeight,
        };
      }),
        (n.prototype.reset = function () {
          r.call(this);
        }),
        (n.prototype.makeNewArr = function (t) {
          var e = this,
            s = [];
          return (
            n.each(e.option.atomRowCount, function (o, i) {
              (s[i] = []),
                n.each(e.option.atomColCount, function (e, o) {
                  s[i][o] = t ? t(i, o) : 0;
                });
            }),
            s
          );
        }),
        (n.prototype.playAnim = function (t, e) {
          if (!t) throw new Error("请指定要执行的动画。");
          var s = t.call(this);
          if (s.animArr.length !== s.animTime.length)
            throw new Error("时间配置与动画不匹配。");
          (this.animArr = this.makeNewArr()),
            (this.animResult = s),
            w.call(this, s, 0, e);
        }),
        (n.prototype.updateAtomArr = function (t) {
          (this.atoms = void 0), (this.atoms = t);
        }),
        (n.prototype.updateStatusAtoms = function (t) {
          (this.statusAtoms = void 0), (this.statusAtoms = t);
        }),
        (n.prototype.regLogic = function (t) {
          this.logicFun = t;
        }),
        (n.prototype.setLevel = function (t) {
          this.level = t;
        }),
        (n.prototype.setScore = function (t) {
          this.score = t;
        }),
        (n.prototype.setPause = function (t) {
          this.paused = t;
        }),
        (n.prototype.setBest = function (t) {
          this.best = t;
        }),
        (n.ScreenSizeCalculator = function (t, e, s, o, i, n, r) {
          var h = 2 * e + 2 * s + o,
            a = (h + t) * n + t,
            f = ((h + t) * i + t) / r;
          return { width: Math.round(f), height: a };
        }),
        (n.assign = function () {
          var t = arguments[0];
          if (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e];
              if (s) for (var o in s) t[o] = s[o];
            }
            return t;
          }
        }),
        (n.each = function (t, e) {
          if (t)
            if (Array.isArray(t))
              for (var s = 0; s < t.length; s++) e && e(t[s], s, t);
            else if (Number.isInteger(t))
              for (var o = 1; o <= t; o++) e && e(o, o - 1, t);
        }),
        (n.each2 = function (t, e) {
          t &&
            e &&
            n.each(t.length, function (s, o) {
              n.each(s, function (s, i) {
                e(s, o, i, t);
              });
            });
        }),
        (n.scroll = function (t, e, s, o) {
          var i = t,
            n = (i = i || 0),
            r = e - n;
          if (0 !== r) {
            var h = !1,
              a = o || 500,
              f = Date.now();
            !(function t() {
              setTimeout(function () {
                var o = Date.now() - f,
                  i = o / a,
                  l = n + Math.floor(i * r);
                if (!h && "kill" === (s && s.goo && s.goo(l)))
                  return void (s.kill && s.kill());
                a <= o ? ((h = !0), s.end(e)) : setTimeout(t, 1e3 / 60);
              }, 1e3 / 60);
            })();
          } else s && s.end && s.end(e);
        }),
        (n.mergeArr = function (t, e, s, o, i) {
          (s = s || 0),
            (o = o || 0),
            n.each(t, function (t, r) {
              n.each(t, function (t, n) {
                if (r + s < e.length && n + o < e[r].length) {
                  var h = r + s,
                    a = n + o;
                  if (a < 0 || h < 0) return;
                  e[h][a] = i ? i(h, a, r, n) : t;
                }
              });
            });
        }),
        (n.mergeArr2 = function (t, e, s, o, i) {
          (s = s || 0), (o = o || 0);
          var r = [];
          return (
            n.each(e, function (e, h) {
              (r[h] = []),
                n.each(e, function (e, n) {
                  (r[h][n] = e),
                    h >= s &&
                      n >= o &&
                      h < s + t.length &&
                      n < o + t[0].length &&
                      (r[h][n] = i ? i(h, n, h - s, n - o) : t[h - s][n - o]);
                });
            }),
            r
          );
        }),
        (n.random = function (t, e) {
          return Math.floor(Math.random() * (e - t) + t);
        }),
        (n.arrCopy = function (t) {
          for (var e = [], s = 0; s < t.length; s++)
            Array.isArray(t[s]) ? (e[s] = n.arrCopy(t[s])) : (e[s] = t[s]);
          return e;
        });
      var v = {
        getItem: function (t) {
          console.warn("getItem不支持localstorage、sessionstorage");
        },
        setItem: function (t, e) {
          console.warn("setItem不支持localstorage、sessionstorage");
        },
        removeItem: function (t) {
          console.warn("removeItem不支持localstorage、sessionstorage");
        },
      };
      function y(t) {
        (t = t || {}),
          (this.height = 4),
          (this.width = 4),
          (this.time = 50),
          (this.offsetRow = t.offsetRow),
          (this.offsetCol = t.offsetCol),
          (this.frams = [
            [
              [1, 0, 0, 1],
              [0, 1, 1, 0],
              [0, 1, 1, 0],
              [1, 0, 0, 1],
            ],
            [
              [0, 1, 1, 0],
              [1, 0, 0, 1],
              [1, 0, 0, 1],
              [0, 1, 1, 0],
            ],
          ]),
          (this.currentFram = 0),
          (this.keepTime = t.keepTime || 1e3);
        var e = this;
        setTimeout(function () {
          t.onEnd && t.onEnd.call(e);
        }, this.keepTime);
      }
      (n.storeGet = function (t) {
        var e = (localStorage || sessionStorage || v).getItem(t);
        return e ? JSON.parse(e) : e;
      }),
        (n.storeSet = function (t, e) {
          return (localStorage || sessionStorage || v).setItem(
            t,
            JSON.stringify(e),
          );
        }),
        (n.storeRemove = function (t) {
          return (localStorage || sessionStorage || v).removeItem(t);
        }),
        (n.ANIM = {
          CIRCLE: function () {
            for (
              var t = this,
                e = [],
                s = "l",
                o = t.option.atomRowCount * t.option.atomColCount,
                i = d.call(t);
              e.length < o;
  
            ) {
              var r = void 0;
              if ("l" === s) {
                for (r = 0; r < i.length; r++) e.push(i[r].shift());
                s = "b";
              } else if ("b" === s) {
                var h = i.pop();
                for (r = 0; r < h.length; r++) e.push(h[r]);
                s = "r";
              } else if ("r" === s) {
                for (r = i.length - 1; r >= 0; r--) e.push(i[r].pop());
                s = "t";
              } else if ("t" === s) {
                var a = i.shift();
                for (r = a.length - 1; r >= 0; r--) e.push(a[r]);
                s = "l";
              }
            }
            var f = [];
            return (
              n.each(e, function (s, o) {
                var i = t.makeNewArr();
                n.each(o + 1, function (t, s) {
                  var o = e[s];
                  i[o[0]][o[1]] = 1;
                }),
                  f.push(i);
              }),
              {
                animName: "CIRCLE",
                animArr: [f, f.concat([]).reverse()],
                animTime: [2e3, 2e3],
              }
            );
          },
          B2T: function () {
            var t = this,
              e = [];
            return (
              n.each(t.option.atomRowCount, function (s, o) {
                o = t.option.atomRowCount - s;
                for (
                  var i = t.makeNewArr(), n = o;
                  n < t.option.atomRowCount;
                  n++
                )
                  for (var r = 0; r < t.option.atomColCount; r++) i[n][r] = 1;
                e.push(i);
              }),
              {
                animName: "B2T",
                animArr: [e, e.concat([]).reverse()],
                animTime: [700, 700],
              }
            );
          },
          T2B: function () {
            var t = this,
              e = [];
            return (
              n.each(t.option.atomRowCount, function (s, o) {
                for (var i = t.makeNewArr(), n = 0; n <= o; n++)
                  for (var r = 0; r < t.option.atomColCount; r++) i[n][r] = 1;
                e.push(i);
              }),
              {
                animName: "T2B",
                animArr: [e, e.concat([]).reverse()],
                animTime: [700, 700],
              }
            );
          },
          COP: function () {
            for (var t = [], e = 0, s = 0, o = 0; ; ) {
              var i = e,
                n = this.option.atomRowCount - (e + 1),
                r = this.makeNewArr();
              for (s = 0; s <= i; s++)
                for (o = 0; o < this.option.atomColCount; o++) r[s][o] = 1;
              for (s = this.option.atomRowCount - 1; s >= n; s--)
                for (o = 0; o < this.option.atomColCount; o++) r[s][o] = 1;
              if ((t.push(r), i === n || 1 === Math.abs(i - n))) break;
              e++;
            }
            return {
              animName: "COP",
              animArr: [t, t.concat([]).reverse()],
              animTime: [600, 600],
            };
          },
        }),
        (n.LETTER = {
          A: [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
          ],
          B: [
            [1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1],
            [0, 1, 1, 1, 0],
            [0, 1, 0, 0, 1],
            [1, 1, 1, 1, 0],
          ],
          C: [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
          ],
          D: [
            [1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1],
            [1, 1, 1, 1, 0],
          ],
          E: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
          ],
          F: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
          ],
          G: [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
          ],
          H: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
          ],
          I: [
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
          ],
          J: [
            [0, 1, 1, 1, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 1, 0],
            [1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0],
          ],
          K: [
            [0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1],
          ],
          L: [
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0],
          ],
          M: [
            [1, 1, 1, 1, 0],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
          ],
          N: [
            [1, 0, 0, 0, 1],
            [1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1],
            [1, 0, 0, 0, 1],
          ],
          O: [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
          ],
          P: [
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
          ],
          Q: [
            [0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1],
          ],
          R: [
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 0],
            [1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1],
          ],
          S: [
            [0, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0],
          ],
          T: [
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
          ],
          U: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
          ],
          V: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
          ],
          W: [
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 0],
          ],
          X: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1],
          ],
          Y: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
          ],
          Z: [
            [1, 1, 1, 1, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0],
            [1, 1, 1, 1, 1],
          ],
        }),
        (y.prototype.update = function () {
          Date.now() - (this.lastTime || 0) >= this.time &&
            ((this.currentFram = 0 === this.currentFram ? 1 : 0),
            (this.lastTime = Date.now()));
        }),
        (y.prototype.getCurrentFrame = function () {
          return this.frams[this.currentFram];
        }),
        (y.prototype.render = function (t) {
          n.mergeArr(
            this.getCurrentFrame(),
            t,
            this.offsetRow,
            this.offsetCol,
            void 0,
          );
        }),
        (e.DEFAULT_OPTION = o),
        (e.WzwBomb = y),
        (e.WzwScreen = n);
    },
    function (t, e, s) {//速度
      var o = s(0),
        i = o.WzwScreen,
        n = o.WzwBomb,
        r = [320, 280, 240, 200, 160, 120, 80, 40],
        h = [
          21, 23, 26, 29, 31, 34, 37, 40, 45, 50, 60, 70, 80, 90, 100, 120, 140,
          160, 200, 250, 300, 400, 500, 1e3,
        ],
        a = 0,
        f = 1,
        l = 2,
        u = 3,
        c = 4;
      function p(t, e, s, o) {
        (this.atoms = [
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0],
          [1, 0, 1],
        ]),
          (this.offsetCol = s),
          (this.offsetRow = e),
          (this.wzwScreen = o),
          (this.screen = o),
          (this.name = t);
      }
      function m(t) {
        (this.left = []),
          (this.right = []),
          (this.wzwScreen = t),
          (this.offsetRow = -t.option.atomRowCount);
        for (var e = 1, s = 0; s < t.option.atomRowCount; s++)
          this.left.push([e > 0 ? 1 : 0]),
            this.right.push([e > 0 ? 1 : 0]),
            e + 1 > 2 ? (e = 0) : (e += 1);
      }
      function w() {
        (this.status = a), this.initPreview();
      }
      (p.prototype.setOnOutScreenListener = function (t) {
        this.outScreenListener = t;
      }),
        (p.prototype.left = function () {
          "free" !== this.name
            ? this.offsetCol - 3 > 0 && (this.offsetCol = this.offsetCol - 3)
            : this.offsetCol - 1 >= 0 && (this.offsetCol = this.offsetCol - 1);
        }),
        (p.prototype.right = function () {
          "free" !== this.name
            ? this.offsetCol + 3 <= 7 && (this.offsetCol = this.offsetCol + 3)
            : this.offsetCol + 1 <= this.screen.option.atomColCount - 3 &&
              (this.offsetCol = this.offsetCol + 1);
        }),
        (p.prototype.isCarBoom = function (t) {
          return (
            !!t &&
            this.offsetCol === t.offsetCol &&
            ((t.offsetRow >= this.offsetRow &&
              t.offsetRow <= this.offsetRow + 3) ||
              (this.offsetRow >= t.offsetRow &&
                this.offsetRow <= t.offsetRow + 3))
          );
        }),
        (p.prototype.update = function () {
          "other" === this.name &&
            ((this.offsetRow = this.offsetRow + 1),
            this.offsetRow > this.wzwScreen.option.atomRowCount &&
              this.outScreenListener &&
              this.outScreenListener(this));
        }),
        (p.prototype.render = function (t) {
          var e = this;
          i.mergeArr(
            this.atoms,
            t,
            this.offsetRow,
            this.offsetCol,
            function (s, o, i, n) {
              return 1 === t[s][o] ? 1 : e.atoms[i][n];
            },
          );
        }),
        (m.prototype.update = function () {
          if (this.offsetRow < 0) this.offsetRow += 1;
          else {
            var t = this.left.pop();
            this.left.splice(0, 0, t);
            var e = this.right.pop();
            this.right.splice(0, 0, e);
          }
        }),
        (m.prototype.render = function (t) {
          i.mergeArr(this.left, t, this.offsetRow, 0, void 0),
            i.mergeArr(
              this.right,
              t,
              this.offsetRow,
              this.wzwScreen.option.atomColCount - 1,
              void 0,
            );
        }),
        (w.prototype.onRegLaunch = function (t) {
          (this.launch = t), (this.wzwScreen = t.screen);
        }),
        (w.prototype.getPreviewAtoms = function () {
          var t;
          return (
            Date.now() - (this.previewLastTime || 0) >= this.previewTimeSpace &&
              ((t = this.previewArr[this.previewIndex]),
              this.previewIndex++,
              this.previewIndex >= this.previewArr.length &&
                (this.previewIndex = 0),
              (this.previewLastTime = Date.now())),
            t
          );
        }),
        (w.prototype.useNewPlayer = function () {
          for (var t = void 0, e = 0; e < this.life.length; e++)
            if (1 === this.life[e][0]) {
              (this.life[e][0] = 0),
                (this.life[e][1] = 0),
                (this.life[e][2] = 0),
                (this.life[e][3] = 0),
                (this.turbo = !1),
                (t = new p(
                  "me",
                  this.wzwScreen.option.atomRowCount - 6,
                  this.wzwScreen.option.atomColCount - 7,
                  this.wzwScreen,
                ));
              break;
            }
          if (void 0 === t) {
            this.status = c;
            var s = this;
            this.launch.screen.playAnim(i.ANIM.B2T, function (t, e) {
              0 === e && s.onDestroy();
            });
          } else
            (this.boom = void 0),
              (this.others = []),
              (this.road = new m(this.wzwScreen)),
              (this.status = l);
          return t;
        }),
        (w.prototype.onLaunch = function () {
          (this.atoms = this.wzwScreen.makeNewArr()),
            (this.status = l),
            (this.turbo = !1),
            (this.level = ininlevel+1),////速度开始等级
            (this.score = 0),
            (this.count = 0),
            (this.best = i.storeGet("speed_best") || 0),
            (this.boom = void 0),
            (this.life = [
              [0, 0, 0, 0],
              [1, 1, 1, 1],
              [1, 1, 1, 1],
              [1, 1, 1, 1],
            ]),
            this.wzwScreen.setBest(this.best),
            (this.player = this.useNewPlayer());
        }),
        (w.prototype.onScroeChange = function (t) {
          (this.score = t),
            this.score > this.best &&
              ((this.best = this.score),
              this.wzwScreen.setBest(this.best),
              i.storeSet("speed_best", this.best)),
            (this.count = this.count + 1),
            this.wzwScreen.setScore(this.score),
            this.count > h[this.level - 1] &&
              ((this.count = 0),
              (this.level = this.level + 1),
              this.wzwScreen.setLevel(this.level));
        }),
        (w.prototype.createOther = function (t) {
          var e = new p("other", t, [1, 4, 7][i.random(0, 3)], this.wzwScreen),
            s = this;
          return (
            e.setOnOutScreenListener(function (t) {
              if (s.others) {
                var e = s.others.findIndex(function (e) {
                  return t === e;
                });
                -1 !== e &&
                  ((s.score += 100),
                  s.onScroeChange(s.score),
                  s.others.splice(e, 1));
              }
            }),
            e
          );
        }),
        (w.prototype.randomCreateOthers = function () {
          void 0 === this.others && (this.others = []),
            this.others.length <= 0 && this.others.push(this.createOther(-5));
          var t = this.others[0];
          t &&
            t.offsetRow >= 0 &&
            this.others.length < 4 &&
            this.others.splice(0, 0, this.createOther(t.offsetRow - 10));
        }),
        (w.prototype.onPlayerDie = function () {
          var t = this;
          (t.status = u),
            (t.boom = new n({
              offsetRow: t.player.offsetRow,
              offsetCol: t.player.offsetCol,
              onEnd: function () {
                (t.status = l), (t.player = t.useNewPlayer());
              },
            }));
        }),
        (w.prototype.onUpdate = function () {
          if (this.atoms) {
            if (this.status === f) return this.atoms;
            if (
              ((this.atoms = this.wzwScreen.makeNewArr()),
              this.status === l &&
                Date.now() - (this.gameLastTime || 0) >
                  (this.turbo ? 20 : r[this.level - 1] || r[r.length - 1]))
            ) {
              if (
                (this.randomCreateOthers(),
                this.road.update(this.atoms),
                this.player && this.player.update(),
                this.others && this.others.length > 0)
              )
                for (var t = 0; t < this.others.length; t++)
                  this.others[t].update();
              if (this.others && this.others.length > 0)
                for (var e = 0; e < this.others.length; e++)
                  if (this.others[e].isCarBoom(this.player)) {
                    this.onPlayerDie();
                    break;
                  }
              this.gameLastTime = Date.now();
            }
            if (this.others && this.others.length > 0)
              for (var s = 0; s < this.others.length; s++)
                this.others[s].render(this.atoms);
            return (
              this.road.render(this.atoms),
              this.player && this.player.render(this.atoms),
              this.boom && this.boom.update(),
              this.boom && this.boom.render(this.atoms),
              this.wzwScreen.setLevel(this.level),
              this.atoms
            );
          }
        }),
        (w.prototype.onUpdateStatus = function () {
          if (this.life) return this.life;
        }),
        (w.prototype.onDestroy = function () {
          this.wzwScreen.setLevel(0),//////速度1结束等级
          ininlevel=0,
            this.wzwScreen.setScore(0),
            this.wzwScreen.setPause(!1),
            this.wzwScreen.setBest(0),
            (this.boom = void 0),
            (this.turbo = !1),
            this.launch.exitCurentGame();
        }),
        (w.prototype.onKeyup = function (t) {
          "rotate" === t && (this.turbo = !1);
        }),
        (w.prototype.onKeyDown = function (t) {
          this.status !== f
            ? ("rotate" === t && (this.turbo = !0),
              this.status === l &&
                ("left" === t//速度按键
                  ? this.player.left()
                  : "right" === t
                    ? this.player.right()
                    : "start" === t &&
                      ((this.status = f), this.wzwScreen.setPause(!0))))
            : "start" === t && ((this.status = l), this.wzwScreen.setPause(!1));
        }),
        (w.prototype.initPreview = function () {
          (this.previewIndex = 0),
            (this.previewTimeSpace = 120),
            (this.previewArr = [
              [
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
                [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
                [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
                [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
              ],
              [
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
              ],
              [
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0],
                [1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
              ],
              [
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                [1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
                [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
              ],
            ]);
        }),
        (e.Speed = w),
        (e.Car = p),
        (e.Road = m),
        (e.NAME_FREE = "free");
    },//速度
    function (t, e, s) {   
      for (
        var o = s(3).WzwLauncher,
          i = s(4).Clicker,
          n = s(5),
          r = new o("#screen"),
          h = "ABCDEFGHIJKLMN".split(""),
          a = [
            new n.Tetris(),  // 俄罗斯方块
            new n.Tank(),
            new n.Speed(),
            new n.Speed2(),
            new n.Shooter(),
            new n.Snake(),
            new n.Copyor(),
          ],
          f = 0;
        f < a.length;
        f++
      )
        r.regGame(h[f], a[f]);
      var l = {};
      function u(t) {
        r.onKeyUp(t),
          (function (t) {
            var e = document.querySelector("[key='" + t + "']");
            "DIV" === e.tagName && (e = e.children[0]);
            e.className = e.className.replace(/ active/g, "");
          })(t);
        var e = l[t];
        e && e.release();
      }
      function c(t) {
        var e = l[t];
        e ||
          (e = l[t] = new i()).onClick(function () {
            r.onKeyDown(t),
              (function (t) {
                var e = document.querySelector("[key='" + t + "']");
                "DIV" === e.tagName && (e = e.children[0]);
                e.className.indexOf("active") < 0 &&
                  (e.className = e.className + " active");
              })(t);
          }),
          e.push();
      }
      var p = {
          87: function () {
            u("up");
          },
          38: function () {
            u("up");
          },
          65: function () {
            u("left");
          },
          37: function () {
            u("left");
          },
          83: function () {
            u("down");
          },
          40: function () {
            u("down");
          },
          68: function () {
            u("right");
          },
          39: function () {
            u("right");
          },
          32: function () {
            u("rotate");
          },
          13: function () {
            u("rotate");
          },
          90: function () {
            u("start");
          },
          88: function () {
            u("voice");
          },
          67: function () {
            u("onoff");
          },
          86: function () {
            u("reset");
          },
        },
        m = {
          87: function () {
            c("up");
          },
          38: function () {
            c("up");
          },
          65: function () {
            c("left");
          },
          37: function () {
            c("left");
          },
          83: function () {
            c("down");
          },
          40: function () {
            c("down");
          },
          68: function () {
            c("right");
          },
          39: function () {
            c("right");
          },
          32: function () {
            c("rotate");
          },
          13: function () {
            c("rotate");
          },
          90: function () {
            c("start");
          },
          88: function () {
            c("voice");
          },
          67: function () {
            c("onoff");
          },
          86: function () {
            c("reset");
          },
        };
      (window.onkeyup = function (t) {
        var e = p[String(t.keyCode).toLowerCase()];
        e && e(),
          t.stopPropagation(),
          t.preventDefault
            ? t.preventDefault()
            : ((t.returnValue = !1), (window.event.returnValue = !1));
      }),
        (window.onkeydown = function (t) {
          var e = m[String(t.keyCode).toLowerCase()];
          e && e(),
            t.stopPropagation(),
            t.preventDefault
              ? t.preventDefault()
              : ((t.returnValue = !1), (window.event.returnValue = !1));
        });
      var w = "mousedown",
        d = "mouseup",
        v = navigator.userAgent;
      (v.indexOf("Android") > -1 ||
        v.indexOf("Linux") > -1 ||
        v.indexOf("iPhone") > -1) &&
        ((w = "touchstart"), (d = "touchend"));
      for (
        var y = document.querySelectorAll(".controller-div"), g = 0;
        g < y.length;
        g++
      )
        y[g].addEventListener(w, function (t) {
          c(this.getAttribute("key")),
            t.stopPropagation(),
            t.preventDefault
              ? t.preventDefault()
              : ((t.returnValue = !1), (window.event.returnValue = !1));
        }),
          y[g].addEventListener(d, function (t) {
            u(this.getAttribute("key")),
              t.stopPropagation(),
              t.preventDefault
                ? t.preventDefault()
                : ((t.returnValue = !1), (window.event.returnValue = !1));
          });
        setTimeout(function () {
          r.reboot();
        }, 300);
    },
    function (t, e, s) {
      var o = s(0).WzwScreen;
      function i(t, e) {
        (this.screen = new o(t, e)),
          (this.games = []),
          (this.atoms = void 0),
          (this.currentGame = void 0),
          this.screen.regLogic(h.bind(this)),
          (this.letterCache = {}),
          (this.current = 0),
          (this.status = i.STATUS.OFFED);
      }
      function n(t) {
        this.status !== i.STATUS.OFFED &&
          this.status !== i.STATUS.OFFINGHALF &&
          (!this.games ||
            this.games.length < 1 ||
            (this.currentGame &&
              this.currentGame.onKeyDown &&
              this.currentGame.onKeyDown(t)));
      }
      function r(t) {
        if (this.status !== i.STATUS.OFFED) {
          if (
            this.status === i.STATUS.BOOTED ||
            this.status === i.STATUS.GAMEING
          ) {
            if ("onoff" === t) return void this.turnOff();
            if (!this.games || this.games.length < 1) return;
            if (this.currentGame)
              this.currentGame.onKeyup && this.currentGame.onKeyup(t);
            else {
              if ("left" === t) {ininlevel !=0 ? ininlevel -= 1:ininlevel = 15; return this.screen.setLevel(ininlevel)};//按键
              if ("right" === t) {ininlevel !=15 ? ininlevel += 1:ininlevel = 0; return this.screen.setLevel(ininlevel)};//按键
              if ("rotate" === t)
                return void (this.current >= this.games.length - 1
                  ? (this.current = 0)
                  : this.current++);
              if ("start" === t) {return void this.start()} ;
            }
            if ("reset" === t) return void this.reboot();
          }
        } else "onoff" === t && this.reboot();
      }
      function h() {
        if (this.status === i.STATUS.OFFED || this.status === i.STATUS.OFFINGHALF)
          return (
            this.screen.updateAtomArr(null),
            this.screen.updateStatusAtoms(null),
            this.screen.setScore(0),
            this.screen.setLevel(0),  //首页等级
            this.screen.setBest(0),
            void this.screen.setPause(!1)
          );
        if (this.status !== i.STATUS.BOOTING) {
          if (!this.games || this.games.length <= 0)
            return (
              (this.atoms = a.call(this)),
              this.screen.updateAtomArr(this.atoms),
              void this.screen.updateStatusAtoms(null)
            );
          this.currentGame
            ? ((this.atoms = this.currentGame.onUpdate()),
              (this.statusAtoms = this.currentGame.onUpdateStatus()))
            : ((this.atoms = f.call(this)), (this.statusAtoms = void 0)),
            this.screen.updateAtomArr(this.atoms),
            this.screen.updateStatusAtoms(this.statusAtoms);
        }
      }
      function a() {
        if (this.emptyArr) return this.emptyArr;
        var t = this,
          e = Math.floor(t.screen.option.atomRowCount / 2) - 4;
        return (
          (this.emptyArr = t.screen.makeNewArr(function (s, o) {
            return s < e || s >= t.screen.option.atomRowCount - e ? 1 : 0;
          })),
          o.mergeArr(o.LETTER.M, t.emptyArr, e + 1, 2),

          this.emptyArr
        );
      }
      function f() {
        var t = this.games[this.current],
          e = this.letterCache[t.letter],
          s = Math.floor(this.screen.option.atomRowCount / 2);
        if (!e) {
          var i = o.LETTER[t.letter];
          (e = this.screen.makeNewArr(function (t, e) {
            if (t <= s) {
              var o = t - 3,
                n = e - 3;
              return i.length > o && o > -1 && i[o].length > n && n > -1
                ? 0 === i[o][n]
                  ? 1
                  : 0
                : 1;
            }
            return 0;
          })),
            (this.letterCache[t.letter] = e);
        }
        return o.mergeArr(t.game.getPreviewAtoms(), e, s + 1, 0), e;
      }
      (i.prototype.regGame = function (t, e) {
        this.games.push({ game: e, letter: t }), e.onRegLaunch(this);
      }),
        (i.prototype.nextGame = function () {
          this.currentGame ||
            this.current >= this.games.length - 1 ||
            this.current++;
        }),
        (i.prototype.prevGame = function () {
          this.currentGame || this.current <= 0 || this.current--;
        }),
        (i.prototype.start = function () {
          var t = this;
          t.starting ||
            ((t.starting = !0),
            t.status === i.STATUS.BOOTED &&
              t.games.length > 0 &&
              (t.currentGame ||
                ((t.status = i.STATUS.GAMEING),
                t.screen.playAnim(o.ANIM.COP, function (e, s) {
                  0 === s
                    ? ((t.currentGame = t.games[t.current].game),
                      (t.starting = !1))
                    : 1 === s
                      ? t.currentGame.onLaunch()
                      : -1 === s &&
                        (t.currentGame
                          ? (t.status = i.STATUS.GAMEING)
                          : (t.status = i.STATUS.BOOTED),
                        (t.starting = !1));
                }))));
        }),
        (i.prototype.exitCurentGame = function () {
          (this.status = i.STATUS.BOOTED), (this.currentGame = void 0);
        }),
        (i.prototype.reboot = function () {
          ininlevel=0;
          var t = this;
          (t.status = i.STATUS.BOOTING),
            t.screen.playAnim(o.ANIM.CIRCLE, function (e, s) {
              0 === s
                ? ((t.status = i.STATUS.BOOTINGHALF),
                  t.currentGame &&
                    (t.currentGame.onDestroy && t.currentGame.onDestroy(),
                    t.screen.setPause(!1),
                    t.screen.setScore(0),
                    t.screen.setLevel(0),
                    t.screen.setBest(0)),
                  (t.currentGame = null))
                : 1 === s && (t.status = i.STATUS.BOOTED);
            });
        }),
        (i.prototype.turnOff = function () {
          var t = this;
          (t.status = i.STATUS.OFFING),
            t.screen.playAnim(o.ANIM.T2B, function (e, s) {
              0 === s
                ? (t.status = i.STATUS.OFFINGHALF)
                : 1 === s &&
                  ((t.status = i.STATUS.OFFED),
                  (t.current = 0),
                  (t.currentGame = null));
            });
        }),
        (i.prototype.onKeyUp = function (t) {
          r.call(this, t);
        }),
        (i.prototype.onKeyDown = function (t) {
          n.call(this, t);
        }),
        (i.STATUS = {
          BOOTING: 2,
          BOOTINGHALF: 3,
          BOOTED: 4,
          GAMEING: 5,
          OFFING: 6,
          OFFINGHALF: 7,
          OFFED: 8,
        }),
        (e.WzwLauncher = i);
    },
    function (t, e) {
      function s(t) {
        (this.option = t || { timeout: 240, dely: 45 }),
          (this.clicks = []),
          (this.tasks = []);
      }
      function o() {
        for (var t = this.clicks || [], e = 0; e < t.length; e++) {
          var s = t[e];
          s && s();
        }
      }
      (s.prototype.onClick = function (t) {
        this.clicks.push(t);
      }),
        (s.prototype.push = function (t, e) {
          if (!this.holding) {
            (this.holding = !0), (e = e || this.option.timeout), o.call(this, t);
            var s = this;
            s.tasks.push(
              setTimeout(function e() {
                s.holding &&
                  (o.call(s, t), s.tasks.push(setTimeout(e, s.option.dely)));
              }, e),
            );
          }
        }),
        (s.prototype.release = function () {
          for (this.holding = !1; this.tasks.length > 0; ) {
            var t = this.tasks.shift();
            clearTimeout(t);
          }
        }),
        (e.Clicker = s);
    },
    function (t, e, s) {
      var o = s(6).Snake,
        i = s(7).Tank,
        n = s(8).Tetris,
        r = s(9).Copyor,
        h = s(1).Speed,
        a = s(10).Speed2,
        f = s(11).Shooter;
      t.exports = {
        Snake: o,
        Tank: i,
        Tetris: n,
        Copyor: r,
        Speed: h,
        Speed2: a,
        Shooter: f,
      };
    },
    function (t, e, s) {///贪吃蛇
      var o = s(0),
        i = o.WzwScreen,
        n = o.WzwBomb,
        r = 1,
        h = 2,
        a = 3,
        f = 4,
        l = 0;
      function u(t, e, s, o, i) {
        (this.offsetRow = t),
          (this.offsetCol = e),
          (this.direction = s),
          (this.pre = o),
          (this.next = i);
      }
      function c() {
        (this.timeSpace = 320), this.initPreview();
      }
      (window.putGif = function (t) {
        l += t;
      }),
        (u.prototype.pushFood = function (t) {
          this.food = t;
        }),
        (u.prototype.update = function () {
          if (this.food) {
            var t = this.next;
            (this.next = new u(this.food[0], this.food[1], void 0, this, t)),
              (t.pre = this.next),
              (this.food = void 0);
          } else
            this.next
              ? this.next.update()
              : l > 0 &&
                ((l -= 1),
                (this.next = new u(
                  this.offsetRow,
                  this.offsetCol,
                  this.direction,
                  this,
                  void 0,
                )));
          if (this.pre)
            (this.offsetRow = this.pre.offsetRow),
              (this.offsetCol = this.pre.offsetCol);
          else
            switch (
              (this.nextDirection &&
                ((this.direction = this.nextDirection),
                (this.nextDirection = void 0)),
              this.direction)
            ) {
              case r:
                this.offsetRow -= 1;
                break;
              case f:
                this.offsetCol -= 1;
                break;
              case a:
                this.offsetRow += 1;
                break;
              case h:
                this.offsetCol += 1;
            }
        }),
        (u.prototype.applyAtoms = function (t) {
          this.next && this.next.applyAtoms(t);
          try {
            t[this.offsetRow][this.offsetCol] = 1;
          } catch (t) {}
        }),
        (u.prototype.turnTo = function (t) {
          this.pre ||
            (((this.direction === a && t !== r) ||
              (this.direction === f && t !== h) ||
              (this.direction === h && t !== f) ||
              (this.direction === r && t !== a)) &&
              (this.nextDirection = t));
        }),
        (u.prototype.isAtomsIn = function (t, e) {
          return (
            (this.offsetRow === t && this.offsetCol === e) ||
            (!!this.next && this.next.isAtomsIn(t, e))
          );
        }),
        (c.prototype.onRegLaunch = function (t) {
          this.launch = t;
        }),
        (c.prototype.getPreviewAtoms = function () {
          var t;
          return (
            Date.now() - (this.previewLastTime || 0) >= this.previewTimeSpace &&
              ((t = this.previewArr[this.previewIndex]),
              this.previewIndex++,
              this.previewIndex >= this.previewArr.length - 1 &&
                (this.previewIndex = 0),
              (this.previewLastTime = Date.now())),
            t
          );
        }),
        (c.prototype.onLaunch = function () {
          l = 0;
          var t = parseInt(this.launch.screen.option.atomRowCount / 2),
            e = parseInt(this.launch.screen.option.atomColCount / 2);
          this.snakeHead = new u(t, e, r, void 0, void 0);
          var s = new u(
            this.snakeHead.offsetRow + 1,
            e,
            null,
            this.snakeHead,
            void 0,
          );
          (this.snakeHead.next = s),
            (s.next = new u(s.offsetRow + 1, e, null, s, void 0)),
            (this.food = this.makeFood()),
            (this.live = !0),
            (this.paused = !1),
            (this.score = 0),
            (this.best = i.storeGet("snakeBest") || 0),
            this.launch.screen.setBest(this.best);
        }),
        (c.prototype.onUpdate = function () {
          if (((this.atoms = this.launch.screen.makeNewArr()), this.snakeHead)) {
            if (
              Date.now() - (this.gameLastTime || 0) >
              (this.turbo ? 30 : this.timeSpace)
            ) {
              if (
                (this.food &&
                  this.snakeHead.isAtomsIn(this.food[0], this.food[1]) &&
                  ((this.score += 100),
                  this.launch.screen.setScore(this.score),
                  this.score >= this.best &&
                    ((this.best = this.score),
                    this.launch.screen.setBest(this.best),
                    i.storeSet("snakeBest", this.best)),
                  this.snakeHead.pushFood(this.food),
                  (this.food = this.makeFood())),
                this.live && !this.paused && this.snakeHead.update(),
                (this.snakeHead.next.isAtomsIn(
                  this.snakeHead.offsetRow,
                  this.snakeHead.offsetCol,
                ) ||
                  this.snakeHead.offsetRow < 0 ||
                  this.snakeHead.offsetCol < 0 ||
                  this.snakeHead.offsetRow >=
                    this.launch.screen.option.atomRowCount ||
                  this.snakeHead.offsetCol >=
                    this.launch.screen.option.atomColCount) &&
                  (this.live = !1),
                !this.live && !this.bomb)
              ) {
                var t = this;
                this.bomb = new n({
                  offsetRow: t.snakeHead.offsetRow - 2,
                  offsetCol: t.snakeHead.offsetCol - 2,
                  onEnd: function () {
                    t.uiGameover();
                  },
                });
              }
              this.gameLastTime = Date.now();
            }
            this.atoms &&
              (this.food &&
                Date.now() - (this.foodLastTime || 0) > 60 &&
                ((this.atoms[this.food[0]][this.food[1]] =
                  1 === this.atoms[this.food[0]][this.food[1]] ? 0 : 1),
                (this.foodLastTime = Date.now())),
              this.snakeHead.applyAtoms(this.atoms));
          }
          return (
            this.atoms &&
              this.bomb &&
              (this.bomb.update(),
              i.mergeArr(
                this.bomb.getCurrentFrame(),
                this.atoms,
                this.bomb.offsetRow,
                this.bomb.offsetCol,
              )),
            this.atoms
          );
        }),
        (c.prototype.onUpdateStatus = function () {this.launch.screen.setLevel(0)}),////贪吃蛇开始
        (c.prototype.onDestroy = function () {
          this.launch.screen.setScore(0),
            this.launch.screen.setBest(0),
            this.launch.screen.setPause(!1),
            this.launch.screen.setLevel(0),////贪吃蛇结束等级
            (ininlevel= 0),
            (this.snakeHead = void 0),
            (this.bomb = void 0),
            (this.live = !1),
            (this.turbo = !1),
            (this.food = void 0),
            (this.paused = !1),
            (this.best = 0),
            this.launch.exitCurentGame();
        }),
        (c.prototype.onKeyup = function (t) {
          "rotate" === t && (this.turbo = !1);
        }),
        (c.prototype.onKeyDown = function (t) {
          if (
            ("start" === t &&
              ((this.paused = !this.paused),
              this.launch.screen.setPause(this.paused)),
            this.snakeHead)
          ) {
            if (this.paused) return;//贪吃蛇按键
            switch (t) {
              case "up":
                this.snakeHead.turnTo(r);
                break;
              case "right":
                this.snakeHead.turnTo(h);
                break;
              case "down":
                this.snakeHead.turnTo(a);
                break;
              case "left":
                this.snakeHead.turnTo(f);
                break;
              case "rotate":
                this.turbo = !0;
            }
          }
        }),
        (c.prototype.initPreview = function () {
          (this.previewIndex = 0),
            (this.previewTimeSpace = 200),
            (this.previewArr = [
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
            ]);
        }),
        (c.prototype.makeFood = function () {
          var t = [
            i.random(0, this.launch.screen.option.atomRowCount),
            i.random(0, this.launch.screen.option.atomColCount),
          ];
          if (this.snakeHead)
            for (; this.snakeHead.isAtomsIn(t[0], t[1]); )
              t = [
                i.random(0, this.launch.screen.option.atomRowCount),
                i.random(0, this.launch.screen.option.atomColCount),
              ];
          return t;
        }),
        (c.prototype.uiGameover = function () {
          var t = this;
          this.launch.screen.playAnim(i.ANIM.B2T, function (e, s) {
            0 === s && t.onDestroy();
          });
        }),
        (e.Snake = c);
    },///贪吃蛇
    function (t, e, s) {//坦克
      var o = s(0),
        i = o.WzwScreen,
        n = o.WzwBomb,
        r = [
          550, 540, 530, 520, 500, 490, 480, 470, 450, 430, 410, 400, 380, 350,
          340, 330, 300, 280, 260, 240, 200,
        ],
        h = {
          0: 15,
          1: 20,
          2: 25,
          3: 32,
          4: 40,
          5: 50,
          6: 60,
          7: 75,
          8: 90,
          9: 100,
          10: 110,
          11: 120,
          12: 130,
          13: 140,
          14: 150,
          15: 160,
          16: 170,
          17: 180,
          18: 190,
          19: 200,
          20: 300,
        },
        a = 1,
        f = 2,
        l = 1,
        u = 2,
        c = 3,
        p = 4,
        m = function () {
          return [
            [0, 1, 0],
            [1, 1, 1],
            [1, 0, 1],
          ];
        },
        w = function () {
          return [
            [1, 1, 0],
            [0, 1, 1],
            [1, 1, 0],
          ];
        },
        d = function () {
          return [
            [1, 0, 1],
            [1, 1, 1],
            [0, 1, 0],
          ];
        },
        v = function () {
          return [
            [0, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
          ];
        },
        y = 1,
        g = 2,
        C = 3,
        b = 6;
      function S(t, e) {
        (this.tanker = t),
          (this.direction = this.tanker.direction),
          (this.time = 42),
          (this.available = !0),
          (this.onUnAvailable = e),
          this.initBallOffset();
      }
      function k(t, e, s, o, i) {
        (this.width = 3),
          (this.height = 3),
          (this.offsetRow = t),
          (this.offsetCol = e),
          (this.role = s),
          (this.direction = o),
          (this.balls = []),
          (this.tank = i),
          (this.launch = i.launch),
          (this.heropointtime = 20),
          this.initAtoms(),
          this.init();
      }
      function A(t, e, s, o) {
        (this.boss = !0),
          (this.direction = c),
          (this.offsetRow = -8),
          (this.offsetCol = t),
          (this.hp = e),
          (this.tank = o),
          (this.launch = o.launch),
          (this.balls = []),
          (this.role = f),
          (this.fram = [
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 0, 0, 0, 1, 0],
            [1, 0, 1, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 1],
            [0, 0, 0, 1, 0, 0, 0],
          ]),
          (this.status = A.STATUS.SHOWING),
          (this.moveStepTime = s),
          (this.way = "left"),
          (this.wayCount = 1),
          (this.showingStepTime = 100);
      }
      function T() {
        R.call(this);
      }
      function R() {
        (this.preview_index = 0),
          (this.preview_lasttime = Date.now()),
          (this.preview_timespace = 200),
          (this.previewAtom = [
            [
              [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
              [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            ],
            [
              [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
              [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            ],
            [
              [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
              [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            ],
            [
              [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
              [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1],
              [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            ],
            [
              [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
              [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
              [0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0],
            ],
            [
              [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
              [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
            ],
            [
              [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
              [0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
              [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            [
              [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
              [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
              [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
              [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
          ]);
      }
      function O() {
        (this.level = ininlevel),////坦克开始等级
          (this.shotCount = 0),
          (this.score = 0),
          (this.best = i.storeGet("tankBest") || 0),
          this.launch.screen.setBest(this.best),
          (this.lifes = [[0, 0, 0, 0]]),
          (this.lifeCount = 3);
        for (var t = 0; t < this.lifeCount; t++) this.lifes.push([1, 1, 1, 1]);
        D.call(this);
      }
      function D() {
        if (((this.bomb = void 0), (this.hreo = L.call(this)), !this.hreo))
          return (this.status = b), void B.call(this);
        (this.tankers = []), (this.status = y);
      }
      function L() {
        if (this.lifeCount <= 0) return null;
        this.lifeCount = this.lifeCount - 1;
        for (var t = 0; t < 4 - this.lifeCount; t++) this.lifes[t] = [0, 0, 0, 0];
        var e = 9,
          s = 4;
        return (
          this.bossMod &&
            ((e = this.launch.screen.option.atomRowCount - 3), (s = 0)),
          new k(e, s, a, l, this)
        );
      }
      function I() {
        if (!(this.tankers.length >= 3)) {
          var t = x.call(this, this.tankers, this.hreo),
            e = t[i.random(0, t.length)];
          "top_left" === e
            ? this.tankers.push(new k(0, 0, f, c, this))
            : "top_right" === e
              ? this.tankers.push(
                  new k(
                    0,
                    this.launch.screen.option.atomColCount - 3,
                    f,
                    c,
                    this,
                  ),
                )
              : "bottom_left" === e
                ? this.tankers.push(
                    new k(
                      this.launch.screen.option.atomRowCount - 3,
                      0,
                      f,
                      l,
                      this,
                    ),
                  )
                : "bottom_right" === e &&
                  this.tankers.push(
                    new k(
                      this.launch.screen.option.atomRowCount - 3,
                      this.launch.screen.option.atomColCount - 3,
                      f,
                      l,
                      this,
                    ),
                  );
        }
      }
      function x(t, e) {
        var s = [];
        return (
          P(
            (this.topLeftJudgeArr = this.topLeftJudgeArr || [
              [0, 2],
              [1, 2],
              [2, 2],
              [2, 0],
              [2, 1],
            ]),
            t,
            e,
          ) || s.push("top_left"),
          P(
            (this.topRightJudgeArr = this.topRightJudgeArr || [
              [0, this.launch.screen.option.atomColCount - 3],
              [1, this.launch.screen.option.atomColCount - 3],
              [2, this.launch.screen.option.atomColCount - 3],
              [2, this.launch.screen.option.atomColCount - 2],
              [2, this.launch.screen.option.atomColCount - 1],
            ]),
            t,
            e,
          ) || s.push("top_right"),
          P(
            (this.bottomLeftJudgeArr = this.bottomLeftJudgeArr || [
              [this.launch.screen.option.atomRowCount - 1, 2],
              [this.launch.screen.option.atomRowCount - 2, 2],
              [this.launch.screen.option.atomRowCount - 3, 2],
              [this.launch.screen.option.atomRowCount - 3, 1],
              [this.launch.screen.option.atomRowCount - 3, 0],
            ]),
            t,
            e,
          ) || s.push("bottom_left"),
          P(
            (this.bottomRightJudgeArr = this.bottomRightJudgeArr || [
              [
                this.launch.screen.option.atomRowCount - 1,
                this.launch.screen.option.atomColCount - 3,
              ],
              [
                this.launch.screen.option.atomRowCount - 2,
                this.launch.screen.option.atomColCount - 3,
              ],
              [
                this.launch.screen.option.atomRowCount - 3,
                this.launch.screen.option.atomColCount - 3,
              ],
              [
                this.launch.screen.option.atomRowCount - 3,
                this.launch.screen.option.atomColCount - 2,
              ],
              [
                this.launch.screen.option.atomRowCount - 3,
                this.launch.screen.option.atomColCount - 1,
              ],
            ]),
            t,
            e,
          ) || s.push("bottom_right"),
          s
        );
      }
      function P(t, e, s) {
        for (var o = 0; o < t.length; o++) {
          for (var i = 0; i < e.length; i++)
            if (e[i].isAtomIn(t[o][0], t[o][1])) return !0;
          if (s && s.isAtomIn(t[o][0], t[o][1])) return !0;
        }
        return !1;
      }
      function B() {
        var t = this;
        (t.status = C),
          t.launch.screen.playAnim(i.ANIM.B2T, function (e, s) {
            0 === s && (t.onDestroy(), t.launch.exitCurentGame());
          });
      }
      (S.prototype.initBallOffset = function () {
        if (this.tanker.boss)
          return (
            (this.offsetRow = this.tanker.offsetRow + 7),
            void (this.offsetCol = this.tanker.offsetCol + 3)
          );
        if (this.tanker.direction === l)
          (this.offsetRow = this.tanker.offsetRow),
            (this.offsetCol = this.tanker.offsetCol + 1);
        else if (this.tanker.direction === u)
          (this.offsetRow = this.tanker.offsetRow + 1),
            (this.offsetCol = this.tanker.offsetCol + 2);
        else if (this.tanker.direction === c)
          (this.offsetRow = this.tanker.offsetRow + 2),
            (this.offsetCol = this.tanker.offsetCol + 1);
        else {
          if (this.tanker.direction !== p) throw new Error("未知的坦克方向。");
          (this.offsetRow = this.tanker.offsetRow + 1),
            (this.offsetCol = this.tanker.offsetCol);
        }
      }),
        (S.prototype.update = function () {
          this.available &&
            (Date.now() - (this.lastTime || 0) >= this.time &&
              (this.direction === l
                ? (this.offsetRow = this.offsetRow - 1)
                : this.direction === u
                  ? (this.offsetCol = this.offsetCol + 1)
                  : this.direction === c
                    ? (this.offsetRow = this.offsetRow + 1)
                    : this.direction === p &&
                      (this.offsetCol = this.offsetCol - 1),
              (this.lastTime = Date.now())),
            this.offsetAvailable(),
            this.checkKilled());
        }),
        (S.prototype.offsetAvailable = function () {
          (this.offsetRow < 0 ||
            this.offsetRow >= this.tanker.launch.screen.option.atomRowCount ||
            this.offsetCol < 0 ||
            this.offsetCol >= this.tanker.launch.screen.option.atomColCount) &&
            ((this.available = !1),
            this.onUnAvailable && this.onUnAvailable(this));
        }),
        (S.prototype.checkKilled = function () {
          var t = this;
          try {
            if (t.tanker.role === a) {
              if (
                (i.each(t.tanker.tank.tankers, function (e, s) {
                  if (e.isAtomIn(t.offsetRow, t.offsetCol))
                    throw { message: "killed", index: s, tanker: e };
                }),
                t.tanker.tank.boss &&
                  t.tanker.tank.boss.isAtomIn(t.offsetRow, t.offsetCol))
              ) {
                if (t.tanker.tank.boss.isAtomInGun(t.offsetRow, t.offsetCol))
                  throw {
                    message: "killed",
                    index: 0,
                    tanker: t.tanker.tank.boss,
                  };
                throw { message: "hited", index: 0 };
              }
            } else if (t.tanker.role === f) {
              if (
                t.tanker.tank.hreo &&
                t.tanker.tank.hreo.isAtomIn(t.offsetRow, t.offsetCol)
              )
                throw { message: "killed", index: 0, tanker: t.tanker.tank.hreo };
              if (
                t.tanker.tank.hreo &&
                t.tanker.tank.hreo.isAtomInAtom(t.offsetRow, t.offsetCol)
              )
                throw { message: "hited", index: 0 };
            }
          } catch (e) {
            "killed" === e.message
              ? (e.tanker.role === f
                  ? e.tanker.boss
                    ? t.tanker.tank.onBossKill()
                    : (t.tanker.tank.tankers.splice(e.index, 1),
                      t.tanker.tank.onEofKill())
                  : e.tanker.role === a &&
                    t.available &&
                    t.tanker.tank.status === y &&
                    t.tanker.tank.onHeroKill(),
                (t.available = !1),
                t.onUnAvailable && t.onUnAvailable(t))
              : "hited" === e.message
                ? ((t.available = !1), t.onUnAvailable && t.onUnAvailable(t))
                : console.warn("异常：", e);
          }
        }),
        (k.prototype.init = function () {
          this.role === f && i.random(0, 10) > 6 && this.shoot();
        }),
        (k.prototype.initAtoms = function () {
          switch (this.direction) {
            case l:
              this.atoms = m();
              break;
            case u:
              this.atoms = w();
              break;
            case c:
              this.atoms = d();
              break;
            case p:
              this.atoms = v();
              break;
            default:
              throw new Error("不支持的方向");
          }
        }),
        (k.prototype.applyAtom = function (t) {
          for (var e = 0; e < this.height; e++)
            for (var s = 0; s < this.width; s++)
              ((1 === e && 1 === s) || 1 === this.atoms[e][s]) &&
                (t[this.offsetRow + e][this.offsetCol + s] = this.atoms[e][s]);
          for (var o = 0; o < this.balls.length; o++) {
            var i = this.balls[o];
            i.available && (t[i.offsetRow][i.offsetCol] = 1);
          }
        }),
        (k.prototype.update = function () {
          this.role === a &&
            Date.now() - (this.heropointLastTime || 0) >= this.heropointtime &&
            ((this.atoms[1][1] = 1 === this.atoms[1][1] ? 0 : 1),
            (this.heropointLastTime = Date.now()));
          for (var t = 0; t < this.balls.length; t++)
            this.balls[t].available && this.balls[t].update();
        }),
        (k.prototype.updateEOF = function () {
          i.random(0, 100) >= 30
            ? this.moveTo(this.direction, 1)
            : this.moveTo(this.getDiffDirection(), 1),
            i.random(0, 100) >= 70 && this.shoot();
        }),
        (k.prototype.turnTo = function (t) {
          (this.atoms = m()), (this.direction = l);
        }),
        (k.prototype.moveTo = function (t, e) {
          switch (t) {
            case l:
              this.moveToUp(e);
              break;
            case u:
              this.moveToRight(e);
              break;
            case c:
              this.moveToBottom(e);
              break;
            case p:
              this.moveToLeft(e);
              break;
            default:
              throw new Error("未知的方向:" + t);
          }
        }),
        (k.prototype.moveToUp = function (t, e) {
          if (this.direction !== l && !e)
            return (this.direction = l), void (this.atoms = m());
          this.offsetRow <= 0 || this.hasTankerOn(l) || (this.offsetRow -= t);
        }),
        (k.prototype.moveToRight = function (t, e) {
          if (this.direction !== u && !e)
            return (this.direction = u), void (this.atoms = w());
          this.offsetCol + 2 >= this.launch.screen.option.atomColCount - 1 ||
            this.hasTankerOn(u) ||
            (this.offsetCol += t);
        }),
        (k.prototype.moveToBottom = function (t, e) {
          if (this.direction !== c && !e)
            return (this.direction = c), void (this.atoms = d());
          this.offsetRow + 2 >= this.launch.screen.option.atomRowCount - 1 ||
            this.hasTankerOn(c) ||
            (this.offsetRow += t);
        }),
        (k.prototype.moveToLeft = function (t, e) {
          if (this.direction !== p && !e)
            return (this.direction = p), void (this.atoms = v());
          this.offsetCol <= 0 || this.hasTankerOn(p) || (this.offsetCol -= t);
        }),
        (k.prototype.hasTankerOn = function (t) {
          try {
            var e = 0,
              s = 0;
            switch (t) {
              case p:
                e = -1;
                break;
              case l:
                s = -1;
                break;
              case u:
                e = 1;
                break;
              case c:
                s = 1;
            }
            var o = this,
              n = o.getSideAtoms(t);
            i.each(o.tank.tankers, function (t) {
              o !== t &&
                i.each(n, function (o) {
                  if (t.isAtomIn(o[0] + s, o[1] + e)) throw "yes";
                });
            }),
              o.role === f &&
                i.each(n, function (t) {
                  if (o.tank.hreo && o.tank.hreo.isAtomIn(t[0] + s, t[1] + e))
                    throw "yes";
                });
          } catch (t) {
            return !0;
          }
          return !1;
        }),
        (k.prototype.getSideAtoms = function (t) {
          switch (t) {
            case p:
              return [
                [this.offsetRow + 0, this.offsetCol + 1],
                [this.offsetRow + 1, this.offsetCol + 0],
                [this.offsetRow + 2, this.offsetCol + 1],
              ];
            case l:
              return [
                [this.offsetRow + 1, this.offsetCol + 0],
                [this.offsetRow + 0, this.offsetCol + 1],
                [this.offsetRow + 1, this.offsetCol + 2],
              ];
            case u:
              return [
                [this.offsetRow + 0, this.offsetCol + 1],
                [this.offsetRow + 1, this.offsetCol + 2],
                [this.offsetRow + 2, this.offsetCol + 1],
              ];
            case c:
              return [
                [this.offsetRow + 1, this.offsetCol + 0],
                [this.offsetRow + 2, this.offsetCol + 1],
                [this.offsetRow + 1, this.offsetCol + 2],
              ];
          }
        }),
        (k.prototype.shoot = function () {
          var t = this;
          if (!((t.tank.status === g && t.role === a) || t.balls.length >= 2)) {
            var e = new S(this, function (e) {
              var s = t.balls.indexOf(e);
              s <= -1 || t.balls.splice(s, 1);
            });
            t.balls.push(e);
          }
        }),
        (k.prototype.isAtomIn = function (t, e) {
          return (
            this.offsetRow <= t &&
            t <= this.offsetRow + 2 &&
            this.offsetCol <= e &&
            e <= this.offsetCol + 2
          );
        }),
        (k.prototype.isAtomInAtom = function (t, e) {
          for (var s = 0; s < this.balls.length; s++) {
            var o = this.balls[s];
            if (o.available && o.offsetRow === t && o.offsetCol === e)
              return (
                (o.available = !1), o.onUnAvailable && o.onUnAvailable(o), !0
              );
          }
          return !1;
        }),
        (k.prototype.getDiffDirection = function () {
          var t;
          return (
            this.direction === l
              ? (t = [u, c, p])
              : this.direction === u
                ? (t = [p, c, p])
                : this.direction === c
                  ? (t = [u, l, p])
                  : this.direction === p && (t = [u, c, l]),
            t[i.random(0, t.length)]
          );
        }),
        (A.prototype.updateAndApply = function (t) {
          if (
            (this.status === A.STATUS.SHOWING
              ? Date.now() - (this.lastStepTime || 0) >= this.showingStepTime &&
                ((this.offsetRow += 1),
                this.offsetRow >= 0 && (this.status = A.STATUS.SHOWED),
                (this.lastStepTime = Date.now()))
              : this.status === A.STATUS.SHOWED
                ? Date.now() - (this.lastStepTime || 0) >= this.moveStepTime &&
                  ("left" === this.way &&
                    ((this.offsetCol -= this.wayCount),
                    this.offsetCol < 0 && (this.way = "right")),
                  "right" === this.way &&
                    ((this.offsetCol += this.wayCount),
                    this.offsetCol + 7 >=
                      this.tank.launch.screen.option.atomColCount &&
                      (this.way = "left")),
                  this.shoot(),
                  (this.lastStepTime = Date.now()))
                : this.status === A.STATUS.RUNAWAYING &&
                  Date.now() - (this.lastStepTime || 0) >= this.showingStepTime &&
                  ((this.offsetRow -= 1),
                  this.offsetRow <= -8 &&
                    ((this.status = A.STATUS.RUNAWAYED),
                    this.onRunAwayFun && this.onRunAwayFun.call(this)),
                  (this.lastStepTime = Date.now())),
            i.mergeArr(this.fram, t, this.offsetRow, this.offsetCol),
            this.status === A.STATUS.SHOWED)
          )
            for (var e = 0; e < this.balls.length; e++) {
              var s = this.balls[e];
              s.update(), s.available && (t[s.offsetRow][s.offsetCol] = 1);
            }
        }),
        (A.prototype.shoot = function () {
          var t = this;
          if (t.shooted) t.shooted = !1;
          else {
            t.shooted = !0;
            var e = new S(t, function (e) {
              var s = t.balls.indexOf(e);
              s <= -1 || t.balls.splice(s, 1);
            });
            t.balls.push(e);
          }
        }),
        (A.prototype.hpDown = function () {
          this.hp -= 1;
        }),
        (A.prototype.getHp = function () {
          return this.hp;
        }),
        (A.prototype.runAway = function () {
          this.status = A.STATUS.RUNAWAYING;
        }),
        (A.prototype.setOnRunAway = function (t) {
          this.onRunAwayFun = t;
        }),
        (A.prototype.isAtomInGun = function (t, e) {
          return (
            this.status === A.STATUS.SHOWED &&
            t === this.offsetRow + 6 &&
            this.offsetCol + 3 === e
          );
        }),
        (A.prototype.isAtomIn = function (t, e) {
          return (
            this.offsetRow <= t &&
            t <= this.offsetRow + 6 &&
            this.offsetCol <= e &&
            e <= this.offsetCol + 6
          );
        }),
        (A.STATUS = { SHOWING: 1, SHOWED: 2, RUNAWAYING: 3, RUNAWAYED: 4 }),
        (T.prototype.onRegLaunch = function (t) {
          this.launch = t;
        }),
        (T.prototype.getPreviewAtoms = function () {
          return (
            Date.now() - this.preview_lasttime >= this.preview_timespace &&
              (this.preview_index++,
              this.preview_index >= this.previewAtom.length - 1 &&
                (this.preview_index = 0),
              (this.preview_lasttime = Date.now())),
            this.previewAtom[this.preview_index]
          );
        }),
        (T.prototype.onLaunch = function () {
          O.call(this);
        }),
        (T.prototype.onUpdate = function () {
          if (this.status === C) return this.atoms;
          if (((this.atoms = this.launch.screen.makeNewArr()), this.bossMod))
            this.boss && this.boss.updateAndApply(this.atoms);
          else {
            if (this.tankers)
              for (var t = 0; t < this.tankers.length; t++)
                this.tankers[t].update(), this.tankers[t].applyAtom(this.atoms);
            if (Date.now() - (this.gameLastTime || 0) >= r[this.level]) {
              if ((I.call(this), this.tankers))
                for (var e = 0; e < this.tankers.length; e++)
                  this.tankers[e].updateEOF();
              this.gameLastTime = Date.now();
            }
          }
          return (
            this.hreo && (this.hreo.update(), this.hreo.applyAtom(this.atoms)),
            this.bomb &&
              this.status === g &&
              (this.bomb.update(),
              i.mergeArr(
                this.bomb.getCurrentFrame(),
                this.atoms,
                this.bomb.offsetRow,
                this.bomb.offsetCol,
              )),
            this.atoms
          );
        }),
        (T.prototype.onUpdateStatus = function () {
          return this.lifes;
        }),
        (T.prototype.onDestroy = function () {
          (this.hreo = void 0),
            (this.score = 0),
            (ininlevel = 0),
            (this.level = 0),//////坦克结束等级
            (this.tankers = []),
            (this.bomb = void 0),
            (this.status = b),
            (this.boss = void 0),
            (this.bossMod = !1),
            (this.best = 0),
            this.launch.screen.setBest(0),
            this.launch.screen.setScore(0),
            this.launch.screen.setLevel(this.level),
            this.launch.screen.setPause(!1);
        }),
        (T.prototype.onKeyup = function (t) {
          "start" === t &&
            (this.status === C
              ? ((this.status = this.oldStatus), this.launch.screen.setPause(!1))
              : ((this.oldStatus = this.status),
                (this.status = C),
                this.launch.screen.setPause(!0)));
        }),
        (T.prototype.onKeyDown = function (t) {
          if (this.hreo && !this.autoMoving && this.status !== C)
            if ("up" === t) {
              if (this.bossMod) return;
              this.hreo.moveToUp(1);
            } else if ("right" === t) this.hreo.moveToRight(1, !!this.bossMod);
            else if ("down" === t) {
              if (this.bossMod) return;
              this.hreo.moveToBottom(1);
            } else
              "left" === t
                ? this.hreo.moveToLeft(1, !!this.bossMod)
                : "rotate" === t && this.hreo.shoot();
        }),
        (T.prototype.goto = function (t, e) {
          var s = this;
          (s.autoMoving = !0),
            setTimeout(function o() {
              if (s.hreo.offsetCol !== t[1]) {
                if (s.hreo.offsetCol < t[1])
                  return s.hreo.moveToRight(1), void setTimeout(o, 100);
                if (s.hreo.offsetCol > t[1])
                  return s.hreo.moveToLeft(1), void setTimeout(o, 100);
              } else if (s.hreo.offsetRow !== t[0]) {
                if (s.hreo.offsetRow < t[0])
                  return s.hreo.moveToBottom(1), void setTimeout(o, 100);
                if (s.hreo.offsetRow > t[0])
                  return s.hreo.moveToUp(1), void setTimeout(o, 100);
              } else e && e.call(s), (s.autoMoving = !1);
            }, 200);
        }),
        (T.prototype.onEofKill = function () {
          (this.score += 100),
            (this.shotCount += 1),
            this.launch.screen.setScore(this.score),
            this.score >= this.best &&
              ((this.best = this.score),
              this.launch.screen.setBest(this.best),
              i.storeSet("tankBest", this.best)),
            this.shotCount >= h[String(this.level)] && this.levelUp();
        }),
        (T.prototype.levelUp = function () {
          var t = this;
          (t.bossMod = !0),
            (t.tankers = []),
            t.goto(
              [
                this.launch.screen.option.atomRowCount - 3,
                parseInt((this.launch.screen.option.atomColCount - 1) / 2 - 1),
              ],
              function () {
                t.hreo.turnTo(l),
                  (t.boss = new A(2, t.level + 3, 460, t)),
                  t.boss.setOnRunAway(function () {
                    (t.level += 1),
                      (t.shotCount = 0),
                      t.launch.screen.setLevel(t.level),
                      (t.boss = void 0),
                      t.goto(
                        [
                          parseInt(
                            (this.launch.screen.option.atomRowCount - 1) / 2 - 1,
                          ),
                          parseInt(
                            (this.launch.screen.option.atomColCount - 1) / 2 - 1,
                          ),
                        ],
                        function () {
                          t.bossMod = !1;
                        },
                      );
                  });
              },
            );
        }),
        (T.prototype.onBossKill = function () {
          this.boss.hpDown(), this.boss.getHp() <= 0 && this.boss.runAway();
        }),
        (T.prototype.onHeroKill = function () {
          this.status = g;
          var t = this;
          (t.bomb = new n({
            offsetRow: t.hreo.offsetRow,
            offsetCol: t.hreo.offsetCol,
            onEnd: function () {
              D.call(t);
            },
          })),
            (this.hreo = void 0);
        }),
        (e.Tank = T);
    },//坦克
    function (t, e, s) {    //俄罗斯方块
      var o = s(0).WzwScreen,
        i = "playing",
        n = "pause",
        r = "over",
        h = [
          [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
          ],
          [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
          ],
          [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 0, 1],
            [0, 1, 1, 1],
            [0, 0, 0, 0],
          ],
          [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 1, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 1, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 0, 1, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
          ],
          [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
          ],
        ],
        a = [800, 700, 600, 500, 400, 350, 300, 250, 200, 150, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20,],
        f = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 20, 20, 20, 20, 20,];  //俄罗斯方块得分升级
      function l() {
        g.call(this), (this.best = o.storeGet("tetrisBest") || 0);
      }
      function u() {
        var t = this;
        t.launch.screen.playAnim(o.ANIM.B2T, function (e, s) {
          0 === s && t.onDestroy();
        });
      }
      function c(t) {
        t > this.best && p.call(this, t), this.launch.screen.setScore(t);
      }
      function p(t) {
        (this.best = t),
          o.storeSet("tetrisBest", t),
          this.launch.screen.setBest(t);
      }
      function m(t) {
        this.launch.screen.setLevel(t);
      }
      function w() {
        for (var t = this, e = [], s = 0; s < t.atomsed.length; s++) {
          for (var i = !0, n = 0; n < t.atomsed[s].length; n++)
            if (1 !== t.atomsed[s][n]) {
              i = !1;
              break;
            }
          i &&
            ((t.succAniming = !0),
            (t.score += 100),
            void 0 === t.succLineCount
              ? (t.succLineCount = 1)
              : ((t.succLineCount = t.succLineCount + 1),
                t.succLineCount >= f[t.level] &&
                  ((t.level = t.level + 1),
                  (t.succLineCount = 0),
                  m.call(t, t.level))),
            e.push(s));
        }
        if (e.length > 0) {
          e.length >= 2 && (t.score += 100),
          e.length >= 3 && (t.score += 100),
          e.length >= 4 && (t.score += 100),
            c.call(t, t.score),
            (function s() {
              if (e.length > 0) {
                !(function (e, s) {
                  var i = Math.floor(t.launch.screen.option.atomColCount / 2);
                  function n(s) {
                    for (var o = i; o >= i - s; o--) {
                      var n = o;
                      n < 0 && (n = 0), (t.atoms[e][n] = 0);
                    }
                    for (var r = i; r < i + s; r++) {
                      var h = r;
                      h > t.launch.screen.option.atomColCount - 1 &&
                        (h = t.launch.screen.option.atomColCount - 1),
                        (t.atoms[e][r] = 0);
                    }
                  }
                  o.scroll(
                    0,
                    i,
                    {
                      goo: function (t) {
                        n(t);
                      },
                      end: function (i) {
                        n(i);
                        for (
                          var r = function (e) {
                              var s = e - 1;
                              (t.atoms[e] = [].concat(t.atomsed[s])),
                                (t.atomsed[e] = [].concat(t.atomsed[s])),
                                0 === s &&
                                  ((t.atoms[s] = []),
                                  (t.atomsed[s] = []),
                                  o.each(
                                    t.launch.screen.option.atomColCount,
                                    function (e, o) {
                                      (t.atoms[s][o] = 0), (t.atomsed[s][o] = 0);
                                    },
                                  ));
                            },
                            h = e;
                          h >= 1;
                          h--
                        )
                        
                          r(h);
                        s && s();
                      },
                    },
                    230,
                  );
                })(e.pop(), s);
                for (var i = 0; i < e.length; i++) e[i] = e[i] + 1;
              } else t.succAniming = !1;
            })();
        }
      }
      function d() {
        var t = this;
        if (t.atoms && t.stuff && i === t.status) {
          for (
            var e = [[], [], [], []], s = t.stuffOffsetCol, n = 0;
            n < t.stuff.length;
            n++
          )
            for (var r = 0; r < t.stuff[n].length; r++) {
              var h = r,
                a = t.stuff.length - 1 - n;
              if (((e[h][a] = t.stuff[n][r]), !(t.stuffOffsetRow + h < 0))) {
                if (t.stuffOffsetRow + h >= t.atoms.length) return;
                if (
                  (t.stuffOffsetCol + a >= t.atoms[0].length &&
                    (t.stuffOffsetCol = t.atoms[0].length - a - 1),
                  t.stuffOffsetCol + a < 0 && (t.stuffOffsetCol = 0 - a),
                  1 === t.atomsed[t.stuffOffsetRow + h][t.stuffOffsetCol + a])
                )
                  return void (t.stuffOffsetCol = s);
              }
            }
          (t.stuff = e),
            (t.atoms = o.mergeArr2(
              t.stuff,
              t.atomsed,
              t.stuffOffsetRow,
              t.stuffOffsetCol,
              function (e, s, o, i) {
                return 1 === t.stuff[o][i] ? t.stuff[o][i] : t.atomsed[e][s];
              },
            ));
        }
      }
      function v(t) {
        var e = this,
          s = e.stuffOffsetCol + t;
        if (e.atoms && e.stuff && e.atomsed && e.status === i) {
          for (var n = 0; n < e.stuff.length; n++)
            for (var r = 0; r < e.stuff[n].length; r++)
              if (
                1 === e.stuff[n][r] &&
                (s + r < 0
                  ? (s = -r)
                  : s + r > e.atomsed[0].length - 1 &&
                    (s = e.atomsed[0].length - r - 1),
                !(e.stuffOffsetRow + n < 0) &&
                  1 === e.atomsed[e.stuffOffsetRow + n][s + r])
              )
                return;
          (e.stuffOffsetCol = s),
            (e.atoms = o.mergeArr2(
              e.stuff,
              e.atomsed,
              e.stuffOffsetRow,
              e.stuffOffsetCol,
              function (t, s, o, i) {
                return 1 === e.stuff[o][i] ? e.stuff[o][i] : e.atomsed[t][s];
              },
            ));
        }
      }
      function y() {
        return [].concat(h[o.random(0, h.length)]);
      }
      function g() {
        (this.preview_index = 0),
          (this.preview_lasttime = Date.now()),
          (this.preview_timespace = 200),
          (this.previewAtom = [
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            ],
            [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            ],
          ]);
      }
      function C(t, e, s, o) {
        var i = !1;
        t: for (var n = s.length - 1; n >= 0; n--)
          for (var r = s[n].length - 1; r >= 0; r--)
            if (1 === s[n][r]) {
              var h = e + n;
              if (!(h < 0)) {
                var a = t + r;
                if (!(a < 0)) {
                  if (
                    ((h !== o.length - 1 && 1 !== o[h + 1][a]) || (i = !0),
                    0 === h && i)
                  )
                    throw new Error("gameover");
                  if (i) break t;
                }
              }
            }
        return i;
      }
      (l.prototype.onRegLaunch = function (t) {
        this.launch = t;
      }),
      (l.prototype.getPreviewAtoms = function () {
        return (
          Date.now() - this.preview_lasttime >= this.preview_timespace &&
            (this.preview_index++,
            this.preview_index >= this.previewAtom.length - 1 &&
              (this.preview_index = 0),
            (this.preview_lasttime = Date.now())),
          this.previewAtom[this.preview_index]
        );
      }),
      (l.prototype.reset = function () {
        (this.atoms = this.launch.screen.makeNewArr()),
          (this.atomsed = this.launch.screen.makeNewArr()),
          (this.level = ininlevel),//俄罗斯方块等级
          (this.succAniming = !1),
          (this.score = 0),
          (this.stuffOffsetRow = -3),
          (this.stuffOffsetCol = 3),
          (this.gameLastTime = 0),
          (this.status = r),
          (this.turbo = !1),
          this.launch.screen.setLevel(this.level),
          this.launch.screen.setScore(this.score),
          this.launch.screen.setBest(this.best);
      }),
      (l.prototype.turboModeON = function () {
        this.canTurbo && ((this.canTurbo = !1), (this.turbo = !0));
      }),
      (l.prototype.turboModeOFF = function () {
        this.turbo = !1;
      }),
      (l.prototype.onLaunch = function () {
        this.reset(),
          (this.stuff = y.call(this)),
          (this.nextStuff = y.call(this)),
          (this.status = i),
          (this.canTurbo = !0);
      }),
      (l.prototype.onUpdate = function () {
        var t = this;
        if (t.atoms) {
          if (
            Date.now() - t.gameLastTime >= (t.turbo ? 10 : a[t.level]) &&
            !t.succAniming
          ) {
            if (t.status === i)
              try {
                var e = !1;
                t.stuff ||
                  ((t.stuff = t.nextStuff),
                  (t.nextStuff = null),
                  (e = !!t.stuff)),
                  t.stuff ||
                    ((t.stuff = y.call(t)),
                    (t.nextStuff = null),
                    (e = !!t.stuff)),
                  t.nextStuff || ((t.nextStuff = y.call(t)), (e = !!t.stuff)),
                  e && t.turboModeOFF();
                var s = C.call(
                  t,
                  t.stuffOffsetCol,
                  t.stuffOffsetRow,
                  t.stuff,
                  t.atomsed,
                );
                s ||
                  ((t.stuffOffsetRow += 1),
                  (t.atoms = o.mergeArr2(
                    t.stuff,
                    t.atomsed,
                    t.stuffOffsetRow,
                    t.stuffOffsetCol,
                    function (e, s, o, i) {
                      return 1 === t.stuff[o][i]
                        ? t.stuff[o][i]
                        : t.atomsed[e][s];
                    },
                  ))),
                  s &&
                    ((t.atomsed = (function (t) {
                      for (var e = [], s = 0; s < t.length; s++) {
                        e[s] = [];
                        for (var o = 0; o < t[o].length; o++) e[s][o] = t[s][o];
                      }
                      return e;
                    })(t.atoms)),
                    (t.stuff = void 0),
                    (t.stuffOffsetRow = -3),
                    (t.stuffOffsetCol = 3),
                    w.call(t));
              } catch (e) {
                "gameover" === e.message
                  ? ((t.status = r), u.call(t),ininlevel=0)////俄罗斯方块结束
                  : console.error(e);
              }
            else t.status === n || t.status;
            t.gameLastTime = Date.now();
          }
          return t.atoms;
        }
      }),
      (l.prototype.onUpdateStatus = function () {
        return this.nextStuff;
      }),
      (l.prototype.pause = function () {
        this.status === i
          ? ((this.status = n),
            (this.tempNextStuff = this.nextStuff),
            (this.nextStuff = null),
            this.launch.screen.setPause(!0))
          : ((this.status = i),
            (this.nextStuff = this.tempNextStuff),
            (this.tempNextStuff = null),
            this.launch.screen.setPause(!1));
      }),
      (l.prototype.onKeyup = function (t) {
        "down" === t && (this.turboModeOFF(), (this.canTurbo = !0));
      }),
      (l.prototype.onKeyDown = function (t) {
        if ("reset" === t || "start" === t) this.pause();
        else if ("left" === t) {
          if (this.status === n) {return};//俄罗斯方块按键
          v.call(this, -1);
        } else if ("right" === t) {
          if (this.status === n) {return};
          v.call(this, 1);
        } else if ("rotate" === t || "up" === t) {
          if (this.status === n) return;
          d.call(this);
        } else if ("down" === t) {
          if (this.status === n) return;
          this.turboModeON();
        }
      }),
      (l.prototype.onDestroy = function () {
        this.reset(),
          this.launch.screen.setBest(0),
          this.launch.screen.setScore(0),
          this.launch.screen.setPause(!1),
          this.launch.exitCurentGame();
      }),
      (e.Tetris = l);
    },   //俄罗斯方块
    function (t, e, s) {
      var o = s(0).WzwScreen,
        i = [
          [
            [0, 0],
            [1, 0],
          ],
          [
            [1, 0],
            [1, 0],
          ],
          [
            [1, 0],
            [1, 1],
          ],
          [
            [1, 1],
            [1, 1],
          ],
        ],
        n = [800, 600, 500, 400, 300, 200, 100],
        r = [15, 15, 15, 12, 12, 10, 10];
      function h(t, e, s) {
        (this.blocktype = t), (this.rowOffset = e), (this.colOffset = s);
      }
      function a() {
        this.initPreview();
      }
      function f() {
        this.blocks = [
          c(this.screen.option.atomRowCount - 2, 0),
          c(this.screen.option.atomRowCount - 2, 3),
          c(this.screen.option.atomRowCount - 2, 6),
        ];
      }
      function l() {
        f.call(this),
          (this.life -= 1),
          0 === this.life && this.launch.exitCurentGame();
      }
      function u() {
        this.checkBlocks = [c(-2, 0), c(-2, 3), c(-2, 6)];
      }
      function c(t, e) {
        return new h(o.random(0, i.length), t, e);
      }
      (h.prototype.setOnCheckListener = function (t) {
        this.checkListener = t;
      }),
        (h.prototype.downdown = function () {
          this.rowOffset += 1;
        }),
        (h.prototype.upup = function () {
          this.rowOffset -= 1;
        }),
        (h.prototype.isSameWith = function (t) {
          return this.blocktype === t.blocktype;
        }),
        (h.prototype.renderInAtoms = function (t) {
          var e = i[this.blocktype];
          o.mergeArr(e, t, this.rowOffset, this.colOffset, function (s, o, i, n) {
            return 1 === t[s][o] || 1 === e[i][n] ? 1 : 0;
          });
        }),
        (h.prototype.change = function () {
          this.blocktype + 1 >= i.length
            ? (this.blocktype = 0)
            : (this.blocktype += 1);
        }),
        (a.prototype.onRegLaunch = function (t) {
          (this.launch = t), (this.screen = t.screen);
        }),
        (a.prototype.getPreviewAtoms = function () {
          var t;
          return (
            Date.now() - (this.previewLastTime || 0) >= this.previewTimeSpace &&
              ((t = this.previewArr[this.previewIndex]),
              this.previewIndex++,
              this.previewIndex >= this.previewArr.length - 1 &&
                (this.previewIndex = 0),
              (this.previewLastTime = Date.now())),
            t
          );
        }),
        (a.prototype.onLaunch = function () {
          (this.status = "playing"),
            (this.best = o.storeGet("Copyor_best") || 0),
            this.screen.setBest(this.best),
            (this.life = 3),
            (this.score = 0),
            (this.level = 0),
            (this.levelDissCount = 0),
            (this.lastCheckerTime = Date.now()),
            (this.lastBlockTime = Date.now()),
            l.call(this),
            u.call(this);
        }),
        (a.prototype.getLevelTime = function () {
          return this.level >= n.length ? n[n.length - 1] : n[this.level];
        }),
        (a.prototype.canLevelUp = function () {
          var t;
          return (
            (t = this.level >= r.length ? r[r.length - 1] : r[this.level]),
            this.levelDissCount >= t
          );
        }),
        (a.prototype.onUpdate = function () {
          if (void 0 !== this.blocks) {
            var t = this.screen.makeNewArr();
            if (void 0 !== this.checkBlocks) {
              for (var e = 0; e < this.checkBlocks.length; e++)
                this.checkBlocks[e].renderInAtoms(t);
              if (Date.now() >= this.lastCheckerTime + this.getLevelTime()) {
                for (var s = 0; s < this.checkBlocks.length; s++)
                  this.checkBlocks[s].downdown();
                this.lastCheckerTime = Date.now();
              }
            }
            for (var i = 0; i < this.blocks.length; i++)
              if (
                (this.blocks[i].renderInAtoms(t),
                Date.now() >= this.lastBlockTime + 30 && this.autoUp)
              ) {
                for (var n = 0; n < this.blocks.length; n++)
                  this.blocks[n].upup();
                this.lastBlockTime = Date.now();
              }
            if ("playing" !== this.status) return t;
            if (
              void 0 !== this.checkBlocks &&
              void 0 !== this.blocks &&
              this.checkBlocks[0].rowOffset >= this.blocks[0].rowOffset
            ) {
              for (var r = !1, h = 0; h < this.checkBlocks.length; h++) {
                if (!this.checkBlocks[h].isSameWith(this.blocks[h])) {
                  r = !1;
                  break;
                }
                r = !0;
              }
              if (r)
                (this.score += 100),
                  this.screen.setScore(this.score),
                  (this.levelDissCount += 1),
                  this.score >= this.best &&
                    ((this.best = this.score),
                    this.screen.setBest(this.best),
                    o.storeSet("Copyor_best", this.best)),
                  this.canLevelUp() &&
                    ((this.level += 1),
                    (this.levelDissCount = 0),
                    this.screen.setLevel(this.level)),
                  f.call(this),
                  u.call(this);
              else if (
                this.checkBlocks[0].rowOffset >=
                this.screen.option.atomRowCount - 2
              ) {
                (this.oldStatus = this.status), (this.status = "dieing");
                var a = this;
                this.screen.playAnim(o.ANIM.T2B, function (t, e) {
                  1 === e && ((a.status = a.oldStatus), l.call(a), u.call(a));
                });
              } else
                for (var c = 0; c < this.blocks.length; c++)
                  this.blocks[c].rowOffset = this.screen.option.atomRowCount - 2;
              this.autoUp = !1;
            }
            return t;
          }
        }),
        (a.prototype.onUpdateStatus = function () {
          for (
            var t = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
              ],
              e = 0;
            e < this.life;
            e++
          )
            t[3 - e] = [1, 1, 1, 1];
          return t;
        }),
        (a.prototype.onDestroy = function () {
          (this.blocks = void 0),
            (this.life = 0),
            (this.level = 0),//对对朋结束
            (this.levelDissCount = 0),
            (this.blocks = void 0),
            (this.checkBlocks = void 0),
            this.screen.setLevel(0),
            this.screen.setScore(0),
            this.screen.setBest(0),
            this.screen.setPause(!1),
            (this.status = "stoped"),
            (this.autoUp = !1);
        }),
        (a.prototype.onKeyup = function (t) {
          if (void 0 !== this.blocks)
            return "pause" === this.status && "start" === t
              ? ((this.status = "playing"), void this.screen.setPause(!1))
              : void (
                  "playing" === this.status &&
                  ("left" === t//对对碰按键
                    ? this.blocks[0].change()
                    : "up" === t
                      ? this.blocks[1].change()
                      : "right" === t
                        ? this.blocks[2].change()
                        : "rotate" === t
                          ? (this.autoUp = !0)
                          : "start" === t &&
                            (this.screen.setPause(!0), (this.status = "pause")))
                );
        }),
        (a.prototype.onKeyDown = function () {}),
        (a.prototype.initPreview = function () {
          (this.previewIndex = 0),
            (this.previewTimeSpace = 200),
            (this.previewArr = [
              [
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
              ],
              [
                [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
            ]);
        }),
        (e.Copyor = a);
    },
    function (t, e, s) {////////速度2
      var o = s(1),
        i = o.Car,
        n = o.NAME_FREE,
        r = (o.Road, s(0)),
        h = r.WzwScreen,
        a = r.WzwBomb,
        f = [150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40],//ffffff
        l = [50, 50, 60, 60, 70, 70, 80, 80, 90, 90],
        u = 0,
        c = 1,
        p = 2,
        m = 3,
        w = 4,
        d = "left";
      function v(t, e) {
        if (((this.screen = t), void 0 === e))
          (this.offsetCol = h.random(0, this.screen.option.atomColCount - 5)),
            (this.offsetRow = -10);
        else {
          (this.offsetRow = e.offsetRow - 10),
            e.offsetCol == t.option.atomColCount - 5
              ? (d = "left")
              : 0 == e.offsetCol && (d = "right"),
            e.offsetCol >= 2 &&
              e.offsetCol <= this.screen.option.atomColCount - 5 - 2 &&
              Math.random() > 0.5 &&
              (d = "left" === d ? "right" : "left");
          var s = Math.random() > 0.3;
          this.offsetCol = s
            ? "left" === d
              ? e.offsetCol - 1
              : e.offsetCol + 1
            : e.offsetCol;
        }
        for (var o = [], i = 0; i < 10; i++) {
          for (var n = [], r = 0; r < this.screen.option.atomColCount; r++)
            r < this.offsetCol
              ? n.push(1)
              : this.offsetCol <= r && r < this.offsetCol + 5
                ? n.push(0)
                : this.offsetCol + 5 <= r && n.push(1);
          o.push(n);
        }
        (this.atom = o),
          (this.disabled = !1),
          (this.outOfScreenListener = void 0);
      }
      function y() {
        (this.score = 0),
          (this.level = 1),//weizhi
          (this.bestScore = 0),
          (this.status = u),
          this.initPreview();
      }
      (v.prototype.setOnOutOfScreenListener = function (t) {
        this.outOfScreenListener = t;
      }),
        (v.prototype.update = function () {
          this.disabled ||
            ((this.offsetRow = this.offsetRow + 1),
            this.offsetRow >= this.screen.option.atomRowCount &&
              ((this.disabled = !0),
              this.outOfScreenListener && this.outOfScreenListener(this)));
        }),
        (v.prototype.isCarBoom = function (t) {
          if (!t) return !1;
          var e = !1;
          if (
            (t.offsetCol < this.offsetCol && (e = !0),
            t.offsetCol + 3 > this.offsetCol + 5 && (e = !0),
            e)
          ) {
            if (
              this.offsetRow >= t.offsetRow &&
              this.offsetRow <= t.offsetRow + 4
            )
              return !0;
            if (
              t.offsetRow >= this.offsetRow &&
              t.offsetRow < this.offsetRow + 10
            )
              return !0;
          }
          return !1;
        }),
        (v.prototype.render = function (t) {
          if (!this.disabled) {
            var e = this;
            h.mergeArr(this.atom, t, this.offsetRow, 0, function (s, o, i, n) {
              return 1 === t[s][o] ? 1 : e.atom[i][n];
            });
          }
        }),
        (y.prototype.onRegLaunch = function (t) {
          (this.launch = t), (this.screen = t.screen);
        }),
        (y.prototype.getPreviewAtoms = function () {
          var t;
          return (
            Date.now() - (this.previewLastTime || 0) >= this.previewTimeSpace &&
              ((t = this.previewArr[this.previewIndex]),
              this.previewIndex++,
              this.previewIndex >= this.previewArr.length &&
                (this.previewIndex = 0),
              (this.previewLastTime = Date.now())),
            t
          );
        }),
        (y.prototype.startNewGame = function () {
          for (var t = void 0, e = 0; e < this.life.length; e++)
            if (1 === this.life[e][0]) {
              (this.life[e][0] = 0),
                (this.life[e][1] = 0),
                (this.life[e][2] = 0),
                (this.life[e][3] = 0),
                (t = new i(
                  n,
                  this.screen.option.atomRowCount - 6,
                  this.screen.option.atomColCount - 7,
                  this.screen,
                ));
              break;
            }
          if (t) (this.status = p), (this.walls = []), (this.turbo = !1);
          else {
            var s = this;
            (s.status = w),
              s.screen.playAnim(h.ANIM.B2T, function (t, e) {
                0 === e && s.onDestroy();
              });
          }
          return t;
        }),
        (y.prototype.onLaunch = function () {
          (this.score = 0),
            (this.bestScore = h.storeGet("speed2_best") || 0),
            this.screen.setBest(this.bestScore),
            (this.boom = void 0),
            (this.turbo = !1),
            (this.level = ininlevel+1),//开始等级速度2
            (this.status = u),
            (this.life = [
              [0, 0, 0, 0],
              [1, 1, 1, 1],
              [1, 1, 1, 1],
              [1, 1, 1, 1],
            ]),
            (this.player = this.startNewGame());
        }),
        (y.prototype.onUpdate = function () {
          if (this.screen) {
            var t = this.screen.makeNewArr(),
              e = this;
            if (this.player) {
              if (this.status === p) {
                if ((this.player.update(), this.walls.length < 5)) {
                  var s = new v(this.screen, this.walls[this.walls.length - 1]);
                  s.setOnOutOfScreenListener(function (t) {
                    var s = e.walls.indexOf(t);
                    s > -1 && e.walls.splice(s, 1),
                      (e.score = e.score + 100),
                      e.screen.setScore(e.score),
                      e.score > e.bestScore &&
                        ((e.bestScore = e.score),
                        e.screen.setBest(e.bestScore),
                        h.storeSet("speed2_best", e.bestScore)),
                      void 0 === e.wallCount
                        ? (e.wallCount = 1)
                        : (e.wallCount = e.wallCount + 1),
                      e.wallCount >= (l[e.level - 1] || l[l.length - 1]) &&
                        ((e.wallCount = 0),
                        (e.level = e.level + 1),
                        e.screen.setLevel(e.level));
                  }),
                    this.walls.push(s);
                }
                if (
                  Date.now() - (this.gameLastTime || 0) >
                  (this.turbo ? 18 : f[this.level - 1] || f[f.length - 1])
                ) {
                  for (var o = 0; o < this.walls.length; o++)
                    this.walls[o] && this.walls[o].update();
                  this.gameLastTime = Date.now();
                }
                for (var i = 0; i < this.walls.length; i++)
                  if (this.walls[i] && this.walls[i].isCarBoom(this.player)) {
                    (this.status = m),
                      (this.boom = new a({
                        offsetCol: this.player.offsetCol,
                        offsetRow: this.player.offsetRow,
                        onEnd: function () {
                          (e.boom = void 0), e.startNewGame();
                        },
                      }));
                    break;
                  }
              }
              for (var n = 0; n < this.walls.length; n++)
                this.walls[n] && this.walls[n].render(t);
              this.boom && this.boom.update(),
                this.player.render(t),
                this.boom && this.boom.render(t);
            }
            return t;
          }
        }),
        (y.prototype.onUpdateStatus = function () {
          return this.life;
        }),
        (y.prototype.onDestroy = function () {
          (this.score = 0),
            (this.bestScore = 0),
            (this.boom = void 0),
            (this.turbo = !1),
            (this.level = 1),//结束显示等级速度2
            (ininlevel=0),
            (this.player = void 0),
            this.screen.setPause(!1),
            this.screen.setBest(0),
            this.screen.setScore(0),
            this.screen.setLevel(0),
            this.launch.exitCurentGame();
        }),
        (y.prototype.onKeyup = function (t) {
          this.status === p && this.player && "rotate" === t && (this.turbo = !1);
        }),
        (y.prototype.onKeyDown = function (t) {
          if (this.player && this.status === c && "start" === t)
            return (this.status = p), void this.screen.setPause(!1);
          this.status === p &&
            this.player &&
            ("left" === t//速度2按键
              ? this.player.left()
              : "right" === t
                ? this.player.right()
                : "start" === t
                  ? ((this.status = c), this.screen.setPause(!0))
                  : "rotate" === t && (this.turbo = !0));
        }),
        (y.prototype.initPreview = function () {
          (this.previewIndex = 0),
            (this.previewTimeSpace = 40),
            (this.previewArr = [
              [
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1],
                [1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
                [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
                [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
              ],
              [
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
              ],
              [
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
              ],
              [
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
              ],
              [
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
              ],
              [
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
              ],
            ]);
        }),
        (e.Speed2 = y);
    },///////速度2
    function (t, e, s) {/////消消消
      var o = s(0),
        i = o.WzwScreen,
        n = o.WzwBomb,
        r = 0,
        h = 1,
        a = 2,
        f = 3,
        l = 4,
        u = [
          700, 650, 600, 550, 500, 450, 430, 410, 390, 370, 350, 330, 310, 290,
          270, 250, 240, 240, 230, 230, 230, 230, 230,
        ],
        c = [
          400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1e3, 1100,
          1200, 1300, 1400, 1500,
        ];
      function p(t, e, s, o) {
        (this.disabled = !1),
          (this.screen = s),
          (this.offsetCol = t),
          (this.offsetRow = e),
          (this.initOffsetRow = e),
          (this.disabledListener = void 0),
          (this.atoms = [[1]]),
          (this.wall = o),
          (this.distance = 0),
          (this.speed = 180),
          (this.speed = this.speed / 1e3);
      }
      function m(t, e) {
        (this.screen = t),
          (this.atoms = [
            [0, 1, 0],
            [1, 1, 1],
          ]),
          (this.wall = e),
          (this.bullets = []),
          (this.offsetRow = t.option.atomRowCount - this.atoms.length),
          (this.offsetCol = Math.floor(
            (t.option.atomColCount - 1 - this.atoms[0].length) / 2,
          )),
          (this.onWallHinted = void 0);
      }
      function w() {
        (this.status = r), this.initPreview();
      }
      (p.prototype.setDisabledListener = function (t) {
        this.disabledListener = t;
      }),
        (p.prototype.getMyTargetWallRowIndex = function () {
          for (var t = this.wall.length - 1; t >= 0; t--)
            if (1 === this.wall[t][this.offsetCol]) return t;
          return -999;
        }),
        (p.prototype.getScore = function () {
          return this.score || 0;
        }),
        (p.prototype.update = function () {
          if (!this.disabled) {
            void 0 === this.lastTime && (this.lastTime = Date.now());
            var t = (Date.now() - this.lastTime) * this.speed;
            (this.distance = this.distance + t),
              (this.offsetRow = this.initOffsetRow - Math.round(this.distance));
            var e = this.getMyTargetWallRowIndex();
            this.offsetRow <= e &&
              !this.disabled &&
              ((this.disabled = !1),
              (this.score = 100),
              (this.wall[e][this.offsetCol] = 0),
              this.disabledListener && this.disabledListener(this)),
              this.offsetRow < 0 &&
                !this.disabled &&
                ((this.disabled = !0),
                this.disabledListener && this.disabledListener(this)),
              (this.lastTime = Date.now());
          }
        }),
        (p.prototype.render = function (t) {
          this.disabled ||
            i.mergeArr(this.atoms, t, this.offsetRow, this.offsetCol, void 0);
        }),
        (m.prototype.setOnWallHintedListener = function (t) {
          this.onWallHinted = t;
        }),
        (m.prototype.left = function () {
          this.offsetCol - 1 <= -2 || (this.offsetCol = this.offsetCol - 1);
        }),
        (m.prototype.right = function () {
          this.offsetCol + 1 >= this.screen.option.atomColCount - 1 ||
            (this.offsetCol = this.offsetCol + 1);
        }),
        (m.prototype.shoot = function () {
          var t = this;
          if (!(t.bullets.length > 2)) {
            var e = new p(
              this.offsetCol + 1,
              this.offsetRow - 1,
              this.screen,
              this.wall,
            );
            e.setDisabledListener(function (e) {
              e.getScore() > 0 && t.onWallHinted && t.onWallHinted(e.getScore());
              var s = t.bullets.indexOf(e);
              -1 !== s && t.bullets.splice(s, 1);
            }),
              this.bullets.push(e);
          }
        }),
        (m.prototype.update = function () {
          for (var t = 0; t < this.bullets.length; t++)
            this.bullets[t] && this.bullets[t].update();
        }),
        (m.prototype.render = function (t) {
          i.mergeArr(this.atoms, t, this.offsetRow, this.offsetCol, void 0);
          for (var e = 0; e < this.bullets.length; e++)
            this.bullets[e] && this.bullets[e].render(t);
        }),
        (w.prototype.onRegLaunch = function (t) {
          (this.launch = t), (this.screen = t.screen);
        }),
        (w.prototype.getPreviewAtoms = function () {
          var t;
          return (
            Date.now() - (this.previewLastTime || 0) >= this.previewTimeSpace &&
              ((t = this.previewArr[this.previewIndex]),
              this.previewIndex++,
              this.previewIndex >= this.previewArr.length &&
                (this.previewIndex = 0),
              (this.previewLastTime = Date.now())),
            t
          );
        }),
        (w.prototype.startNewGame = function () {
          var t = void 0,
            e = this;
          this.wall = [];
          for (var s = 0; s < e.life.length; s++)
            if (1 === e.life[s][0]) {
              (t = new m(e.screen, e.wall)).setOnWallHintedListener(function (t) {
                (e.wallShootedCount = e.wallShootedCount + 1),
                  (e.score = e.score + t),
                  e.screen.setScore(e.score),
                  e.score > e.bestScore &&
                    ((e.bestScore = e.score),
                    e.screen.setBest(e.bestScore),
                    i.storeSet("shooter_best", e.bestScore)),
                  e.wallShootedCount >= (c[e.level] || c[c.length - 1]) &&
                    ((e.wallShootedCount = 0),
                    (e.level = e.level + 1),
                    e.screen.setLevel(e.level + 1));
              }),
                (e.life[s][0] = 0),
                (e.life[s][1] = 0),
                (e.life[s][2] = 0),
                (e.life[s][3] = 0);
              break;
            }
          if (t) (this.player = t), (this.status = a);
          else {
            this.status = l;
            var o = this;
            this.launch.screen.playAnim(i.ANIM.B2T, function (t, e) {
              0 === e && o.onDestroy();
            });
          }
        }),
        (w.prototype.onLaunch = function () {
          (this.life = [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
          ]),
            (this.player = void 0),
            (this.boom = void 0),
            (this.score = 0),
            (this.bestScore = i.storeGet("shooter_best") || 0),
            (this.level = ininlevel),//////消消消  等级
            (this.wallShootedCount = 0),
            this.screen.setLevel(this.level),
            this.screen.setBest(this.bestScore),
            this.startNewGame();
        }),
        (w.prototype.growWall = function () {
          if (
            (void 0 === this.lastTime && (this.lastTime = 0),
            this.wall.length > 0)
          ) {
            for (
              var t = this.wall[this.wall.length - 1], e = !0, s = 0;
              s < t.length;
              s++
            )
              if (1 === t[s]) {
                e = !1;
                break;
              }
            e && this.wall.pop();
          }
          if (Date.now() - this.lastTime >= (u[this.level] || 30)) {
            var o = [];
            for (s = 0; s < this.screen.option.atomColCount; s++)
              o.push(Math.random() > 0.8 ? 0 : 1);
            this.wall.splice(0, 0, o), (this.lastTime = Date.now());
          }
        }),
        (w.prototype.onUpdate = function () {
          var t = this.screen.makeNewArr();
          if (
            this.status === a &&
            this.player &&
            (this.player.update(),
            this.growWall(),
            this.wall.length > this.player.offsetRow)
          ) {
            this.status = f;
            var e = this;
            this.boom = new n({
              offsetCol: this.player.offsetCol,
              offsetRow: this.player.offsetRow,
              onEnd: function () {
                (e.boom = void 0), e.startNewGame();
              },
            });
          }
          return (
            this.boom && this.boom.update(),
            this.player && this.player.render(t),
            this.wall && i.mergeArr(this.wall, t, 0, 0, void 0),
            this.boom && this.boom.render(t),
            t
          );
        }),
        (w.prototype.onUpdateStatus = function () {
          if (this.life) return this.life;
        }),
        (w.prototype.onDestroy = function () {
          this.launch.exitCurentGame(),
            this.screen.setPause(!1),
            this.screen.setScore(0),
            this.screen.setBest(0),
            ininlevel=0,
            this.screen.setLevel(0),/////消消消结束等级
            i.storeSet("shooter_best", this.bestScore);
        }),
        (w.prototype.onKeyup = function (t) {
          "start" === t &&
            (this.status === h
              ? ((this.status = a), this.screen.setPause(!1))
              : this.status === a &&
                ((this.status = h), this.screen.setPause(!0)));
        }),
        (w.prototype.onKeyDown = function (t) {
          this.player &&
            this.status === a &&
            ("left" === t
              ? this.player.left()
              : "right" === t//消方块按键
                ? this.player.right()
                : "rotate" === t && this.player.shoot());
        }),
        (w.prototype.initPreview = function () {
          (this.previewIndex = 0),
            (this.previewTimeSpace = 120),
            (this.previewArr = [
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
                [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
                [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
              ],
              [
                [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
              ],
            ]);
        }),
      (e.Shooter = w);
    },ininlevel=0,
  ]);
  