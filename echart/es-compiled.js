/**
 * Created by jinx on 2020/4/14.
 */
!function (r, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ecStat = t() : r.ecStat = t();
}(this, function () {
  return function (r) {
    function t(e) {
      if (n[e]) return n[e].exports;var o = n[e] = { exports: {}, id: e, loaded: !1 };return r[e].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
    }var n = {};return t.m = r, t.c = n, t.p = "", t(0);
  }([function (r, t, n) {
    var e;e = function (r) {
      return { clustering: n(11), regression: n(13), statistics: n(14), histogram: n(12) };
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r) {
        return r = null === r ? NaN : +r, "number" == typeof r && !isNaN(r);
      }function n(r) {
        return isFinite(r) && r === Math.round(r);
      }return { isNumber: t, isInteger: n };
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r) {
        if (!a(r)) throw new Error("Invalid data type, you should input an array");var t = [],
            n = u(r);if (1 === n.length) for (var e = 0; e < n[0]; e++) f(r[e]) && t.push(r[e]);else if (2 === n.length) for (var e = 0; e < n[0]; e++) {
          for (var o = !0, i = 0; i < n[1]; i++) f(r[e][i]) || (o = !1);o && t.push(r[e]);
        }return t;
      }function e(r) {
        var t = r.toString(),
            n = t.indexOf(".");return n < 0 ? 0 : t.length - 1 - n;
      }var o = n(4),
          a = o.isArray,
          u = o.size,
          i = n(1),
          f = i.isNumber;return { dataPreprocess: t, getPrecision: e };
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      return function (r, t) {
        var n = r.length;if (!n) return 0;if (t <= 0 || n < 2) return r[0];if (t >= 1) return r[n - 1];var e = (n - 1) * t,
            o = Math.floor(e),
            a = r[o],
            u = r[o + 1];return a + (u - a) * (e - o);
      };
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r) {
        for (var t = []; n(r);) t.push(r.length), r = r[0];return t;
      }function n(r) {
        return "[object Array]" === l.call(r);
      }function e(r, t) {
        for (var n = [], e = 0; e < r; e++) {
          n[e] = [];for (var o = 0; o < t; o++) n[e][o] = 0;
        }return n;
      }function o(r) {
        for (var t = 0, n = 0; n < r.length; n++) t += r[n];return t;
      }function a(r, t) {
        for (var n = 0, e = 0; e < r.length; e++) n += r[e][t];return n;
      }function u(r, t) {
        return r > t ? 1 : r < t ? -1 : r === t ? 0 : NaN;
      }function i(r, t, n, e) {
        for (null == n && (n = 0), null == e && (e = r.length); n < e;) {
          var o = Math.floor((n + e) / 2),
              a = u(r[o], t);if (a > 0) e = o;else {
            if (!(a < 0)) return o + 1;n = o + 1;
          }
        }return n;
      }function f(r, t, n) {
        if (r && t) {
          if (r.map && r.map === c) return r.map(t, n);for (var e = [], o = 0, a = r.length; o < a; o++) e.push(t.call(n, r[o], o, r));return e;
        }
      }var l = Object.prototype.toString,
          s = Array.prototype,
          c = s.map;return { size: t, isArray: n, zeros: e, sum: o, sumOfColumn: a, ascending: u, bisect: i, map: f };
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      var t = n(9);return function (r) {
        var n = t(r);return n ? Math.sqrt(n) : n;
      };
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r) {
        for (var t = -(1 / 0), n = 0; n < r.length; n++) o(r[n]) && r[n] > t && (t = r[n]);return t;
      }var e = n(1),
          o = e.isNumber;return t;
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r) {
        var t = r.length;return t ? e(r) / r.length : 0;
      }var e = n(10);return t;
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r) {
        for (var t = 1 / 0, n = 0; n < r.length; n++) o(r[n]) && r[n] < t && (t = r[n]);return t;
      }var e = n(1),
          o = e.isNumber;return t;
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r) {
        var t = r.length;if (!t || t < 2) return 0;if (r.length >= 2) {
          for (var n, e = a(r), u = 0, i = 0; i < r.length; i++) o(r[i]) && (n = r[i] - e, u += n * n);return u / (r.length - 1);
        }
      }var e = n(1),
          o = e.isNumber,
          a = n(7);return t;
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r) {
        var t = r.length;if (!t) return 0;for (var n = 0, e = 0; e < t; e++) o(r[e]) && (n += r[e]);return n;
      }var e = n(1),
          o = e.isNumber;return t;
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r, t) {
        for (var n, o, i, f, l = s(r), c = v(l[0], 2), h = a(r, t), p = !0; p;) {
          p = !1;for (var g = 0; g < l[0]; g++) {
            n = 1 / 0, o = -1;for (var M = 0; M < t; M++) i = u(r[g], h[M]), i < n && (n = i, o = M);c[g][0] !== o && (p = !0), c[g][0] = o, c[g][1] = d(n, 2);
          }for (var g = 0; g < t; g++) {
            f = [];for (var M = 0; M < c.length; M++) c[M][0] === g && f.push(r[M]);h[g] = e(f);
          }
        }var x = { centroids: h, clusterAssigned: c };return x;
      }function e(r) {
        for (var t, n, e = s(r), o = [], a = 0; a < e[1]; a++) {
          t = 0;for (var u = 0; u < e[0]; u++) t += r[u][a];n = t / e[0], o.push(n);
        }return o;
      }function o(r, n, o) {
        function a() {
          if (F < n) {
            y = 1 / 0;for (var r, e, o, a = 0; a < x.length; a++) {
              b = [], w = [];for (var u = 0; u < g.length; u++) g[u][0] === a ? b.push(l[u]) : w.push(g[u][1]);N = t(b, 2), A = c(N.clusterAssigned, 1), q = h(w), A + q < y && (y = q + A, r = a, e = N.centroids, o = N.clusterAssigned);
            }for (var u = 0; u < o.length; u++) 0 === o[u][0] ? o[u][0] = r : 1 === o[u][0] && (o[u][0] = x.length);for (x[r] = e[0], x.push(e[1]), u = 0, a = 0; u < g.length && a < o.length; u++) g[u][0] === r && (g[u][0] = o[a][0], g[u][1] = o[a++][1]);for (var i = [], u = 0; u < x.length; u++) {
              i[u] = [];for (var a = 0; a < g.length; a++) g[a][0] === u && i[u].push(l[a]);
            }P.clusterAssment = g, P.centroids = x, P.pointsInCluster = i, F++;
          } else P.isEnd = !0;return P;
        }if (!(n < 2)) {
          for (var i, l = f(r), p = s(l), g = v(p[0], 2), M = e(l), x = [M], m = 0; m < p[0]; m++) i = u(l[m], M), g[m][1] = d(i, 2);var y,
              b,
              w,
              N,
              A,
              q,
              F = 1,
              P = { isEnd: !1 },
              E = { next: a };if (o) return E;for (var P; !(P = E.next()).isEnd;);return P;
        }
      }function a(r, t) {
        for (var n, e, o, a = s(r), u = v(t, a[1]), i = 0; i < a[1]; i++) {
          n = r[0][i], e = r[0][i];for (var f = 1; f < a[0]; f++) r[f][i] < n && (n = r[f][i]), r[f][i] > e && (e = r[f][i]);o = e - n;for (var f = 0; f < t; f++) u[f][i] = n + o * Math.random();
        }return u;
      }function u(r, t) {
        if (!p(r) && !p(t)) return g(d(r - t, 2));for (var n = 0, e = 0; e < r.length; e++) n += d(r[e] - t[e], 2);return g(n);
      }var i = n(2),
          f = i.dataPreprocess,
          l = n(4),
          s = l.size,
          c = l.sumOfColumn,
          h = l.sum,
          v = l.zeros,
          p = l.isArray,
          g = Math.sqrt,
          d = Math.pow;return { kMeans: t, hierarchicalKMeans: o };
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r, t) {
        t = null == t ? g.squareRoot : g[t];for (var n = f(r), a = e(n), u = o(n), i = t(n, u, a), l = p(u, a, i), s = -Math.floor(Math.log(Math.abs(a - u) / i) / Math.LN10), d = h(+(Math.ceil(u / l) * l).toFixed(s), +(Math.floor(a / l) * l).toFixed(s), l, s), M = d.length, x = new Array(M + 1), m = 0; m <= M; m++) x[m] = {}, x[m].sample = [], x[m].x0 = m > 0 ? d[m - 1] : d[m] - u === l ? u : d[m] - l, x[m].x1 = m < M ? d[m] : a - d[m - 1] === l ? a : d[m - 1] + l;for (var m = 0; m < n.length; m++) u <= n[m] && n[m] <= a && x[v(d, n[m], 0, M)].sample.push(n[m]);var r = c(x, function (r) {
          return [+((r.x0 + r.x1) / 2).toFixed(s), r.sample.length];
        }),
            y = c(x, function (r) {
          return [r.x0, r.x1, r.sample.length];
        });return { bins: x, data: r, customData: y };
      }var e = n(6),
          o = n(8),
          a = n(3),
          u = n(5),
          i = n(2),
          f = i.dataPreprocess,
          l = (i.getPrecision, n(4)),
          s = l.ascending,
          c = l.map,
          h = n(16),
          v = l.bisect,
          p = n(17),
          g = { squareRoot: function (r) {
          var t = Math.ceil(Math.sqrt(r.length));return t > 50 ? 50 : t;
        }, scott: function (r, t, n) {
          return Math.ceil((n - t) / (3.5 * u(r) * Math.pow(r.length, -1 / 3)));
        }, freedmanDiaconis: function (r, t, n) {
          return r.sort(s), Math.ceil((n - t) / (2 * (a(r, .75) - a(r, .25)) * Math.pow(r.length, -1 / 3)));
        }, sturges: function (r) {
          return Math.ceil(Math.log(r.length) / Math.LN2) + 1;
        } };return t;
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r, t) {
        for (var n = 0; n < r.length - 1; n++) {
          for (var e = n, o = n + 1; o < r.length - 1; o++) Math.abs(r[n][o]) > Math.abs(r[n][e]) && (e = o);for (var a = n; a < r.length; a++) {
            var u = r[a][n];r[a][n] = r[a][e], r[a][e] = u;
          }for (var i = n + 1; i < r.length - 1; i++) for (var f = r.length - 1; f >= n; f--) r[f][i] -= r[f][n] / r[n][n] * r[n][i];
        }for (var l = new Array(t), s = r.length - 1, o = r.length - 2; o >= 0; o--) {
          for (var u = 0, n = o + 1; n < r.length - 1; n++) u += r[n][o] * l[n];l[o] = (r[s][o] - u) / r[o][o];
        }return l;
      }var e = n(2),
          o = e.dataPreprocess,
          a = { linear: function (r) {
          for (var t = o(r), n = 0, e = 0, a = 0, u = 0, i = t.length, f = 0; f < i; f++) n += t[f][0], e += t[f][1], a += t[f][0] * t[f][1], u += t[f][0] * t[f][0];for (var l = (i * a - n * e) / (i * u - n * n), s = e / i - l * n / i, c = [], h = 0; h < t.length; h++) {
            var v = [t[h][0], l * t[h][0] + s];c.push(v);
          }var p = "y = " + Math.round(100 * l) / 100 + "x + " + Math.round(100 * s) / 100;return { points: c, parameter: { gradient: l, intercept: s }, expression: p };
        }, linearThroughOrigin: function (r) {
          for (var t = o(r), n = 0, e = 0, a = 0; a < t.length; a++) n += t[a][0] * t[a][0], e += t[a][0] * t[a][1];for (var u = e / n, i = [], f = 0; f < t.length; f++) {
            var l = [t[f][0], t[f][0] * u];i.push(l);
          }var s = "y = " + Math.round(100 * u) / 100 + "x";return { points: i, parameter: { gradient: u }, expression: s };
        }, exponential: function (r) {
          for (var t = o(r), n = 0, e = 0, a = 0, u = 0, i = 0, f = 0, l = 0; l < t.length; l++) n += t[l][0], e += t[l][1], f += t[l][0] * t[l][1], a += t[l][0] * t[l][0] * t[l][1], u += t[l][1] * Math.log(t[l][1]), i += t[l][0] * t[l][1] * Math.log(t[l][1]);for (var s = e * a - f * f, c = Math.pow(Math.E, (a * u - f * i) / s), h = (e * i - f * u) / s, v = [], p = 0; p < t.length; p++) {
            var g = [t[p][0], c * Math.pow(Math.E, h * t[p][0])];v.push(g);
          }var d = "y = " + Math.round(100 * c) / 100 + "e^(" + Math.round(100 * h) / 100 + "x)";return { points: v, parameter: { coefficient: c, index: h }, expression: d };
        }, logarithmic: function (r) {
          for (var t = o(r), n = 0, e = 0, a = 0, u = 0, i = 0; i < t.length; i++) n += Math.log(t[i][0]), e += t[i][1] * Math.log(t[i][0]), a += t[i][1], u += Math.pow(Math.log(t[i][0]), 2);for (var f = (i * e - a * n) / (i * u - n * n), l = (a - f * n) / i, s = [], c = 0; c < t.length; c++) {
            var h = [t[c][0], f * Math.log(t[c][0]) + l];s.push(h);
          }var v = "y = " + Math.round(100 * l) / 100 + " + " + Math.round(100 * f) / 100 + "ln(x)";return { points: s, parameter: { gradient: f, intercept: l }, expression: v };
        }, polynomial: function (r, n) {
          var e = o(r);"undefined" == typeof n && (n = 2);for (var a = [], u = [], i = n + 1, f = 0; f < i; f++) {
            for (var l = 0, s = 0; s < e.length; s++) l += e[s][1] * Math.pow(e[s][0], f);u.push(l);for (var c = [], h = 0; h < i; h++) {
              for (var v = 0, p = 0; p < e.length; p++) v += Math.pow(e[p][0], f + h);c.push(v);
            }a.push(c);
          }a.push(u);for (var g = t(a, i), d = [], f = 0; f < e.length; f++) {
            for (var M = 0, s = 0; s < g.length; s++) M += g[s] * Math.pow(e[f][0], s);d.push([e[f][0], M]);
          }for (var x = "y = ", f = g.length - 1; f >= 0; f--) x += f > 1 ? Math.round(g[f] * Math.pow(10, f + 1)) / Math.pow(10, f + 1) + "x^" + f + " + " : 1 === f ? Math.round(100 * g[f]) / 100 + "x + " : Math.round(100 * g[f]) / 100;return { points: d, parameter: g, expression: x };
        } },
          u = function (r, t, n) {
        return a[r](t, n);
      };return u;
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      var t = {};return t.max = n(6), t.deviation = n(5), t.mean = n(7), t.median = n(15), t.min = n(8), t.quantile = n(3), t.sampleVariance = n(9), t.sum = n(10), t;
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      function t(r) {
        return e(r, .5);
      }var e = n(3);return t;
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      var t = n(2),
          e = t.getPrecision;return function (r, t, n, o) {
        var a = arguments.length;a < 2 ? (t = r, r = 0, n = 1) : a < 3 ? n = 1 : a < 4 ? (n = +n, o = e(n)) : o = +o;for (var u = Math.ceil(((t - r) / n).toFixed(o)), i = new Array(u + 1), f = 0; f < u + 1; f++) i[f] = +(r + f * n).toFixed(o);return i;
      };
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }, function (r, t, n) {
    var e;e = function (r) {
      return function (r, t, n) {
        var e = Math.abs(t - r) / n,
            o = Math.floor(Math.log(e) / Math.LN10),
            a = Math.pow(10, o),
            u = e / a;return u >= Math.sqrt(50) ? a *= 10 : u >= Math.sqrt(10) ? a *= 5 : u >= Math.sqrt(2) && (a *= 2), +(t >= r ? a : -a).toFixed(-o);
      };
    }.call(t, n, t, r), !(void 0 !== e && (r.exports = e));
  }]);
});

//# sourceMappingURL=es-compiled.js.map