  (function a(n, o, h) {
    function l(e, t) {
        if (!o[e]) {
            if (!n[e]) {
                if (u) return u(e, !0);
                    var r = new Error("找不到模块'" + e + "'");
                throw ((r.code = "模块未找到"), r);
            }
            var s = (o[e] = { exports: {} });
            n[e][0].call(s.exports,function (t) {return l(n[e][1][t] || t);},s,s.exports,a,n,o,h);
        }
        return o[e].exports;
    }
    for (var t = 0; t < h.length;t++) l(h[t]);
    return l;
  })(
    {
    5:[ function(a, b) {
        function h(a, b) {
            this.tableau = new d(a), this.name = b, this.variables = [], this.integerVariables = [], 
            this.unrestrictedVariables = {}, this.constraints = [], this.nConstraints = 0, this.nVariables = 0, 
            this.isMinimization = !0, this.tableauInitialized = !1, this.relaxationIndex = 1, 
            this.useMIRCuts = !1, this.checkForCycles = !0, this.messages = [];
        }
        var d = a("9"), e = a("20"), f = e.Constraint, g = e.Variable;
        b.exports = h, h.prototype._addConstraint = function(a) {
            var b = a.slack;
            this.tableau.variablesPerIndex[b.index] = b, this.constraints.push(a), this.nConstraints += 1, 
            this.tableauInitialized === !0 && this.tableau.addConstraint(a);
        }, h.prototype.greaterThan = function(a) {
            var b = new f(a, !1, this.tableau.getNewElementIndex(), this);
            return this._addConstraint(b), b;
        }, h.prototype.addVariable = function(a, b, c, d, e) {
            var f, h;
            if ("string" == typeof e) switch (e) {
            case "required":
                e = 0;
                break;

            case "strong":
                e = 1;
                break;

            case "medium":
                e = 2;
                break;

            case "weak":
                e = 3;
                break;

            default:
                e = 0;
            }
            return f = this.tableau.getNewElementIndex(), (null === b || void 0 === b) && (b = "v" + f), 
            (null === a || void 0 === a) && (a = 0), (null === e || void 0 === e) && (e = 0), 
            c ? (h = new IntegerVariable(b, a, f, e), this.integerVariables.push(h)) :h = new g(b, a, f, e), 
            this.variables.push(h), this.tableau.variablesPerIndex[f] = h, d && (this.unrestrictedVariables[f] = !0), 
            this.nVariables += 1, this.tableauInitialized === !0 && this.tableau.addVariable(h), 
            h;
        }, h.prototype.updateConstraintCoefficient = function(a, b, c) {
            return this.tableauInitialized === !0 && this.tableau.updateConstraintCoefficient(a, b, c), 
            this;
        }, h.prototype.loadJson = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L;
            for (this.isMinimization = "max" !== a.opType, b = a.variables, c = a.constraints, 
            d = {}, e = {}, f = Object.keys(c), g = f.length, h = 0; g > h; h += 1) i = f[h], 
            j = c[i], k = j.equal, l = j.weight, m = j.priority, n = void 0 !== l || void 0 !== m, 
            void 0 === k ? (q = j.min, void 0 !== q && (o = this.greaterThan(q), d[i] = o, n && o.relax(l, m)), 
            r = j.max, void 0 !== r && (p = this.smallerThan(r), e[i] = p, n && p.relax(l, m))) :(o = this.greaterThan(k), 
            d[i] = o, p = this.smallerThan(k), e[i] = p, s = new Equality(o, p), n && s.relax(l, m));
            for (t = Object.keys(b), u = t.length, this.tolerance = a.tolerance || 0, a.timeout && (this.timeout = a.timeout), 
            a.options && (a.options.timeout && (this.timeout = a.options.timeout), 0 === this.tolerance && (this.tolerance = a.options.tolerance || 0), 
            a.options.useMIRCuts && (this.useMIRCuts = a.options.useMIRCuts), this.checkForCycles = "undefined" == typeof a.options.exitOnCycles ? !0 :a.options.exitOnCycles), 
            v = a.ints || {}, w = a.binaries || {}, x = a.unrestricted || {}, y = a.optimize, 
            z = 0; u > z; z += 1) for (A = t[z], B = b[A], C = B[y] || 0, D = !!w[A], E = !!v[A] || D, 
            F = !!x[A], G = this.addVariable(C, A, E, F), D && this.smallerThan(1).addTerm(1, G), 
            H = Object.keys(B), h = 0; h < H.length; h += 1) I = H[h], I !== y && (J = B[I], 
            K = d[I], void 0 !== K && K.addTerm(J, G), L = e[I], void 0 !== L && L.addTerm(J, G));
            return this;
        }, h.prototype.getNumberOfIntegerVariables = function() {
            return this.integerVariables.length;
        }, h.prototype.solve = function() {
            return this.tableauInitialized === !1 && (this.tableau.setModel(this), this.tableauInitialized = !0), 
            this.tableau.solve();
        };
    }, {
        "9":9,
        "20":20
    } ],
    7:[ function() {}, {
        "8":8
    } ],
    8:[ function(a, b) {
        function d(a, b, c, d) {
            this.feasible = c, this.evaluation = b, this.bounded = d, this._tableau = a;
        }
        b.exports = d, d.prototype.generateSolutionSet = function() {
            var i, j, k, l, a = {}, b = this._tableau, c = b.varIndexByRow, d = b.variablesPerIndex, e = b.matrix, f = b.rhsColumn, g = b.height - 1, h = Math.round(1 / b.precision);
            for (i = 1; g >= i; i += 1) j = c[i], k = d[j], void 0 !== k && k.isSlack !== !0 && (l = e[i][f], 
            a[k.id] = Math.round((Number.EPSILON + l) * h) / h);
            return a;
        };
    }, {} ],
    9:[ function(a, b) {
        function f(a) {
            this.model = null, this.matrix = null, this.width = 0, this.height = 0, this.costRowIndex = 0, 
            this.rhsColumn = 0, this.variablesPerIndex = [], this.unrestrictedVars = null, this.feasible = !0, 
            this.evaluation = 0, this.simplexIters = 0, this.varIndexByRow = null, this.varIndexByCol = null, 
            this.rowByVarIndex = null, this.colByVarIndex = null, this.precision = a || 1e-8, 
            this.optionalObjectives = [], this.objectivesByPriority = {}, this.savedState = null, 
            this.availableIndexes = [], this.lastElementIndex = 0, this.variables = null, this.nVars = 0, 
            this.bounded = !0, this.unboundedVarIndex = null, this.branchAndCutIterations = 0;
        }
        function g(a, b) {
            this.priority = a, this.reducedCosts = new Array(b);
            for (var c = 0; b > c; c += 1) this.reducedCosts[c] = 0;
        }
        var d = a("8"), e = a("7");
        b.exports = f, f.prototype.solve = function() {
            return this.model.getNumberOfIntegerVariables() > 0 ? this.branchAndCut() :this.simplex(), 
            this.updateVariableValues(), this.getSolution();
        }, g.prototype.copy = function() {
            var a = new g(this.priority, this.reducedCosts.length);
            return a.reducedCosts = this.reducedCosts.slice(), a;
        }, f.prototype.setOptionalObjective = function(a, b, c) {
            var e, d = this.objectivesByPriority[a];
            void 0 === d && (e = Math.max(this.width, b + 1), d = new g(a, e), this.objectivesByPriority[a] = d, 
            this.optionalObjectives.push(d), this.optionalObjectives.sort(function(a, b) {
                return a.priority - b.priority;
            })), d.reducedCosts[b] = c;
        }, f.prototype.initialize = function(a, b, c, d) {
            var e, f, g;
            for (this.variables = c, this.unrestrictedVars = d, this.width = a, this.height = b, 
            e = new Array(a), f = 0; a > f; f++) e[f] = 0;
            for (this.matrix = new Array(b), g = 0; b > g; g++) this.matrix[g] = e.slice();
            this.varIndexByRow = new Array(this.height), this.varIndexByCol = new Array(this.width), 
            this.varIndexByRow[0] = -1, this.varIndexByCol[0] = -1, this.nVars = a + b - 2, 
            this.rowByVarIndex = new Array(this.nVars), this.colByVarIndex = new Array(this.nVars), 
            this.lastElementIndex = this.nVars;
        }, f.prototype._resetMatrix = function() {
            var e, f, i, j, k, l, m, n, o, p, q, r, s, t, u, a = this.model.variables, b = this.model.constraints, c = a.length, d = b.length, g = this.matrix[0], h = this.model.isMinimization === !0 ? -1 :1;
            for (e = 0; c > e; e += 1) i = a[e], j = i.priority, k = h * i.cost, 0 === j ? g[e + 1] = k :this.setOptionalObjective(j, e + 1, k), 
            f = a[e].index, this.rowByVarIndex[f] = -1, this.colByVarIndex[f] = e + 1, this.varIndexByCol[e + 1] = f;
            for (l = 1, m = 0; d > m; m += 1) if (n = b[m], o = n.index, this.rowByVarIndex[o] = l, 
            this.colByVarIndex[o] = -1, this.varIndexByRow[l] = o, s = n.terms, t = s.length, 
            u = this.matrix[l++], n.isUpperBound) {
                for (p = 0; t > p; p += 1) q = s[p], r = this.colByVarIndex[q.variable.index], u[r] = q.coefficient;
                u[0] = n.rhs;
            } else {
                for (p = 0; t > p; p += 1) q = s[p], r = this.colByVarIndex[q.variable.index], u[r] = -q.coefficient;
                u[0] = -n.rhs;
            }
        }, f.prototype.setModel = function(a) {
            var b, c;
            return this.model = a, b = a.nVariables + 1, c = a.nConstraints + 1, this.initialize(b, c, a.variables, a.unrestrictedVariables), 
            this._resetMatrix(), this;
        }, f.prototype.getNewElementIndex = function() {
            if (this.availableIndexes.length > 0) return this.availableIndexes.pop();
            var a = this.lastElementIndex;
            return this.lastElementIndex += 1, a;
        }, f.prototype.density = function() {
            var c, d, e, a = 0, b = this.matrix;
            for (c = 0; c < this.height; c++) for (d = b[c], e = 0; e < this.width; e++) 0 !== d[e] && (a += 1);
            return a / (this.height * this.width);
        }, f.prototype.setEvaluation = function() {
            var a = Math.round(1 / this.precision), b = this.matrix[this.costRowIndex][this.rhsColumn], c = Math.round((Number.EPSILON + b) * a) / a;
            this.evaluation = c, 0 === this.simplexIters && (this.bestPossibleEval = c);
        }, f.prototype.getSolution = function() {
            var a = this.model.isMinimization === !0 ? this.evaluation :-this.evaluation;
            return this.model.getNumberOfIntegerVariables() > 0 ? new e(this, a, this.feasible, this.bounded, this.branchAndCutIterations) :new d(this, a, this.feasible, this.bounded);
        };
    }, {
        "7":7,
        "8":8
    } ],
    10:[ function() {}, {
        "9":9
    } ],
    11:[ function() {}, {
        "9":9
    } ],
    12:[ function() {}, {
        "9":9
    } ],
    13:[ function() {}, {
        "20":20,
        "9":9
    } ],
    14:[ function(a) {
        var d = a("9");
        d.prototype._putInBase = function(a) {
            var c, d, e, b = this.rowByVarIndex[a];
            if (-1 === b) {
                for (c = this.colByVarIndex[a], d = 1; d < this.height; d += 1) if (e = this.matrix[d][c], 
                e < -this.precision || this.precision < e) {
                    b = d;
                    break;
                }
                this.pivot(b, c);
            }
            return b;
        }, d.prototype._takeOutOfBase = function(a) {
            var c, d, e, f, b = this.colByVarIndex[a];
            if (-1 === b) {
                for (c = this.rowByVarIndex[a], d = this.matrix[c], e = 1; e < this.height; e += 1) if (f = d[e], 
                f < -this.precision || this.precision < f) {
                    b = e;
                    break;
                }
                this.pivot(c, b);
            }
            return b;
        }, d.prototype.updateVariableValues = function() {
            var c, d, e, f, g, a = this.variables.length, b = Math.round(1 / this.precision);
            for (c = 0; a > c; c += 1) d = this.variables[c], e = d.index, f = this.rowByVarIndex[e], 
            -1 === f ? d.value = 0 :(g = this.matrix[f][this.rhsColumn], d.value = Math.round((g + Number.EPSILON) * b) / b);
        }, d.prototype.updateRightHandSide = function(a, b) {
            var e, f, g, h, i, j, c = this.height - 1, d = this.rowByVarIndex[a.index];
            if (-1 === d) {
                for (e = this.colByVarIndex[a.index], f = 0; c >= f; f += 1) g = this.matrix[f], 
                g[this.rhsColumn] -= b * g[e];
                if (h = this.optionalObjectives.length, h > 0) for (i = 0; h > i; i += 1) j = this.optionalObjectives[i].reducedCosts, 
                j[this.rhsColumn] -= b * j[e];
            } else this.matrix[d][this.rhsColumn] -= b;
        }, d.prototype.updateConstraintCoefficient = function(a, b, c) {
            var d, e, f, g;
            if (a.index === b.index) throw new Error("[Tableau.updateConstraintCoefficient] constraint index should not be equal to variable index !");
            if (d = this._putInBase(a.index), e = this.colByVarIndex[b.index], -1 === e) for (f = this.rowByVarIndex[b.index], 
            g = 0; g < this.width; g += 1) this.matrix[d][g] += c * this.matrix[f][g]; else this.matrix[d][e] -= c;
        }, d.prototype.updateCost = function(a, b) {
            var f, g, h, i, c = a.index, d = this.width - 1, e = this.colByVarIndex[c];
            if (-1 === e) if (f = this.matrix[this.rowByVarIndex[c]], 0 === a.priority) for (h = this.matrix[0], 
            g = 0; d >= g; g += 1) h[g] += b * f[g]; else for (i = this.objectivesByPriority[a.priority].reducedCosts, 
            g = 0; d >= g; g += 1) i[g] += b * f[g]; else this.matrix[0][e] -= b;
        }, d.prototype.addConstraint = function(a) {
            var e, f, g, h, i, j, k, l, m, n, p, b = a.isUpperBound ? 1 :-1, c = this.height, d = this.matrix[c];
            for (void 0 === d && (d = this.matrix[0].slice(), this.matrix[c] = d), e = this.width - 1, 
            f = 0; e >= f; f += 1) d[f] = 0;
            for (d[this.rhsColumn] = b * a.rhs, g = a.terms, h = g.length, i = 0; h > i; i += 1) if (j = g[i], 
            k = j.coefficient, l = j.variable.index, m = this.rowByVarIndex[l], -1 === m) d[this.colByVarIndex[l]] += b * k; else for (n = this.matrix[m], 
            n[this.rhsColumn], f = 0; e >= f; f += 1) d[f] -= b * k * n[f];
            p = a.index, this.varIndexByRow[c] = p, this.rowByVarIndex[p] = c, this.colByVarIndex[p] = -1, 
            this.height += 1;
        }, d.prototype.removeConstraint = function(a) {
            var b = a.index, c = this.height - 1, d = this._putInBase(b), e = this.matrix[c];
            this.matrix[c] = this.matrix[d], this.matrix[d] = e, this.varIndexByRow[d] = this.varIndexByRow[c], 
            this.varIndexByRow[c] = -1, this.rowByVarIndex[b] = -1, this.availableIndexes[this.availableIndexes.length] = b, 
            a.slack.index = -1, this.height -= 1;
        }, d.prototype.addVariable = function(a) {
            var g, h, i, b = this.height - 1, c = this.width, d = this.model.isMinimization === !0 ? -a.cost :a.cost, e = a.priority, f = this.optionalObjectives.length;
            if (f > 0) for (g = 0; f > g; g += 1) this.optionalObjectives[g].reducedCosts[c] = 0;
            for (0 === e ? this.matrix[0][c] = d :(this.setOptionalObjective(e, c, d), this.matrix[0][c] = 0), 
            h = 1; b >= h; h += 1) this.matrix[h][c] = 0;
            i = a.index, this.varIndexByCol[c] = i, this.rowByVarIndex[i] = -1, this.colByVarIndex[i] = c, 
            this.width += 1;
        }, d.prototype.removeVariable = function(a) {
            var e, f, g, h, i, j, k, b = a.index, c = this._takeOutOfBase(b), d = this.width - 1;
            if (c !== d) {
                for (e = this.height - 1, f = 0; e >= f; f += 1) g = this.matrix[f], g[c] = g[d];
                if (h = this.optionalObjectives.length, h > 0) for (i = 0; h > i; i += 1) j = this.optionalObjectives[i].reducedCosts, 
                j[c] = j[d];
                k = this.varIndexByCol[d], this.varIndexByCol[c] = k, this.colByVarIndex[k] = c;
            }
            this.varIndexByCol[d] = -1, this.colByVarIndex[b] = -1, this.availableIndexes[this.availableIndexes.length] = b, 
            a.index = -1, this.width -= 1;
        };
    }, {
        "9":9
    } ],
    15:[ function(a) {
        a("18"), a("13"), a("14"), a("17"), 
        a("10"), a("12"), a("16");
    }, {
        "9":9,
        "10":10,
        "12":12,
        "13":13,
        "14":14,
        "16":16,
        "17":17,
        "18":18
    } ],
    16:[ function() {}, {
        "9":9
    } ],
    17:[ function() {}, {
        "9":9
    } ],
    18:[ function(a) {
        var e, d = a("9");
        d.prototype.simplex = function() {
            return this.bounded = !0, this.phase1(), this.feasible === !0 && this.phase2(), 
            this;
        }, d.prototype.phase1 = function() {
            for (var g, i, j, k, l, m, n, o, p, q, r, s, t, a = this.model.checkForCycles, b = [], c = this.matrix, d = this.rhsColumn, e = this.width - 1, f = this.height - 1, h = 0; ;) {
                for (i = 0, j = -this.precision, k = 1; f >= k; k++) g = this.unrestrictedVars[this.varIndexByRow[k]] === !0, 
                l = c[k][d], j > l && (j = l, i = k);
                if (0 === i) return this.feasible = !0, h;
                for (m = 0, n = -1 / 0, o = c[0], p = c[i], q = 1; e >= q; q++) r = p[q], g = this.unrestrictedVars[this.varIndexByCol[q]] === !0, 
                (g || r < -this.precision) && (s = -o[q] / r, s > n && (n = s, m = q));
                if (0 === m) return this.feasible = !1, h;
                if (a && (b.push([ this.varIndexByRow[i], this.varIndexByCol[m] ]), t = this.checkForCycles(b), 
                t.length > 0)) return this.model.messages.push("Cycle in phase 1"), this.model.messages.push("Start :" + t[0]), 
                this.model.messages.push("Length :" + t[1]), this.feasible = !1, h;
                this.pivot(i, m), h += 1;
            }
        }, d.prototype.phase2 = function() {
            for (var k, l, m, n, o, p, q, r, s, t, u, v, w, y, z, A, B, C, D, a = this.model.checkForCycles, b = [], c = this.matrix, d = this.rhsColumn, e = this.width - 1, f = this.height - 1, g = this.precision, h = this.optionalObjectives.length, i = null, j = 0; ;) {
                for (m = c[this.costRowIndex], h > 0 && (i = []), n = 0, o = g, p = !1, q = 1; e >= q; q++) k = m[q], 
                l = this.unrestrictedVars[this.varIndexByCol[q]] === !0, h > 0 && k > -g && g > k ? i.push(q) :l && 0 > k ? -k > o && (o = -k, 
                n = q, p = !0) :k > o && (o = k, n = q, p = !1);
                if (h > 0) for (r = 0; 0 === n && i.length > 0 && h > r; ) {
                    for (s = [], t = this.optionalObjectives[r].reducedCosts, o = g, u = 0; u < i.length; u++) q = i[u], 
                    k = t[q], l = this.unrestrictedVars[this.varIndexByCol[q]] === !0, k > -g && g > k ? s.push(q) :l && 0 > k ? -k > o && (o = -k, 
                    n = q, p = !0) :k > o && (o = k, n = q, p = !1);
                    i = s, r += 1;
                }
                if (0 === n) return this.setEvaluation(), this.simplexIters += 1, j;
                for (v = 0, w = 1 / 0, this.varIndexByRow, y = 1; f >= y; y++) if (z = c[y], A = z[d], 
                B = z[n], !(B > -g && g > B)) {
                    if (B > 0 && g > A && A > -g) {
                        w = 0, v = y;
                        break;
                    }
                    C = p ? -A / B :A / B, C > g && w > C && (w = C, v = y);
                }
                if (1 / 0 === w) return this.evaluation = -1 / 0, this.bounded = !1, this.unboundedVarIndex = this.varIndexByCol[n], 
                j;
                if (a && (b.push([ this.varIndexByRow[v], this.varIndexByCol[n] ]), D = this.checkForCycles(b), 
                D.length > 0)) return this.model.messages.push("Cycle in phase 2"), this.model.messages.push("Start :" + D[0]), 
                this.model.messages.push("Length :" + D[1]), this.feasible = !1, j;
                this.pivot(v, n, !0), j += 1;
            }
        }, e = [], d.prototype.pivot = function(a, b) {
            var j, k, l, m, n, o, q, r, s, t, u, c = this.matrix, d = c[a][b], f = this.height - 1, g = this.width - 1, h = this.varIndexByRow[a], i = this.varIndexByCol[b];
            for (this.varIndexByRow[a] = i, this.varIndexByCol[b] = h, this.rowByVarIndex[i] = a, 
            this.rowByVarIndex[h] = -1, this.colByVarIndex[i] = -1, this.colByVarIndex[h] = b, 
            j = c[a], k = 0, l = 0; g >= l; l++) j[l] >= -1e-16 && j[l] <= 1e-16 ? j[l] = 0 :(j[l] /= d, 
            e[k] = l, k += 1);
            for (j[b] = 1 / d, this.precision, q = 0; f >= q; q++) if (q !== a && !(c[q][b] >= -1e-16 && c[q][b] <= 1e-16)) if (r = c[q], 
            m = r[b], m >= -1e-16 && 1e-16 >= m) 0 !== m && (r[b] = 0); else {
                for (n = 0; k > n; n++) l = e[n], o = j[l], o >= -1e-16 && 1e-16 >= o ? 0 !== o && (j[l] = 0) :r[l] = r[l] - m * o;
                r[b] = -m / d;
            }
            if (s = this.optionalObjectives.length, s > 0) for (t = 0; s > t; t += 1) if (u = this.optionalObjectives[t].reducedCosts, 
            m = u[b], 0 !== m) {
                for (n = 0; k > n; n++) l = e[n], o = j[l], 0 !== o && (u[l] = u[l] - m * o);
                u[b] = -m / d;
            }
        }, d.prototype.checkForCycles = function(a) {
            var b, c, d, e, f, g, h, i;
            for (b = 0; b < a.length - 1; b++) for (c = b + 1; c < a.length; c++) if (d = a[b], 
            e = a[c], d[0] === e[0] && d[1] === e[1]) {
                if (c - b > a.length - c) break;
                for (f = !0, g = 1; c - b > g; g++) if (h = a[b + g], i = a[c + g], h[0] !== i[0] || h[1] !== i[1]) {
                    f = !1;
                    break;
                }
                if (f) return [ b, c - b ];
            }
            return [];
        };
    }, {
        "9":9
    } ],
    20:[ function(a, b) {
        function d(a, b, c, d) {
            this.id = a, this.cost = b, this.index = c, this.value = 0, this.priority = d;
        }
        function e(a, b, c, e) {
            d.call(this, a, b, c, e);
        }
        function f(a, b) {
            d.call(this, a, 0, b, 0);
        }
        function g(a, b) {
            this.variable = a, this.coefficient = b;
        }
        function h(a, b, c, d) {
            this.slack = new f("s" + c, c), this.index = c, this.model = d, this.rhs = a, this.isUpperBound = b, 
            this.terms = [], this.termsByVarIndex = {}, this.relaxation = null;
        }
        function i(a, b) {
            this.upperBound = a, this.lowerBound = b, this.model = a.model, this.rhs = a.rhs, 
            this.relaxation = null;
        }
        e.prototype.isInteger = !0, f.prototype.isSlack = !0, h.prototype.addTerm = function(a, b) {
            var e, c = b.index, d = this.termsByVarIndex[c];
            return void 0 === d ? (d = new g(b, a), this.termsByVarIndex[c] = d, this.terms.push(d), 
            this.isUpperBound === !0 && (a = -a), this.model.updateConstraintCoefficient(this, b, a)) :(e = d.coefficient + a, 
            this.setVariableCoefficient(e, b)), this;
        }, b.exports = {
            Constraint:h,
            Variable:d,
            IntegerVariable:e,
            SlackVariable:f,
            Equality:i,
            Term:g
        };
    }, {} ],
    21:[ function(a) {
        var e, f;
        a("15"), e = a("5"), f = function() {
            this.Solve = function(a, b, c, d) {
                var f, h, i;
                if (d) for (f in validation) a = validation[f](a);
                return a instanceof e == !1 && (a = new e(b).loadJson(a)), h = a.solve(), this.lastSolvedModel = a, 
                h.solutionSet = h.generateSolutionSet(), c ? h :(i = {}, i.feasible = h.feasible, 
                i.result = h.evaluation, i.bounded = h.bounded, h._tableau.__isIntegral && (i.isIntegral = !0), 
                Object.keys(h.solutionSet).forEach(function(a) {
                    0 !== h.solutionSet[a] && (i[a] = h.solutionSet[a]);
                }), i);
            };
        }, self.solver = new f();
    }, {
        "5":5,
        "15":15,
        "20":20
    } ]
}, {}, [ 21 ]);