import {
  h as Dt,
  r as eu,
  a as Vr,
  t as Gr
} from './vue.esm-bundler-af39f383.js';
import {
  e as Xr,
  S as Hr,
  a as zr,
  h as Wr,
  b as Yr,
  c as Qr,
  d as tu
} from './index-826364cc.js';
import './_commonjsHelpers-725317a4.js';
const { sanitizeStoryContextUpdate: Jr } = __STORYBOOK_MODULE_PREVIEW_API__;
var Zr = Object.create,
  nu = Object.defineProperty,
  Kr = Object.getOwnPropertyDescriptor,
  su = Object.getOwnPropertyNames,
  en = Object.getPrototypeOf,
  tn = Object.prototype.hasOwnProperty,
  un = (w, k) =>
    function () {
      return k || (0, w[su(w)[0]])((k = { exports: {} }).exports, k), k.exports;
    },
  rn = (w, k, g, q) => {
    if ((k && typeof k == 'object') || typeof k == 'function')
      for (let X of su(k))
        !tn.call(w, X) &&
          X !== g &&
          nu(w, X, {
            get: () => k[X],
            enumerable: !(q = Kr(k, X)) || q.enumerable
          });
    return w;
  },
  nn = (w, k, g) => (
    (g = w != null ? Zr(en(w)) : {}),
    rn(
      k || !w || !w.__esModule
        ? nu(g, 'default', { value: w, enumerable: !0 })
        : g,
      w
    )
  );
function sn(w) {
  return typeof w == 'function' ? { render: w, name: w.name } : w;
}
function uu(w, k) {
  let g = w;
  return g == null
    ? null
    : k
    ? { ...sn(g), components: { ...(g.components || {}), story: k } }
    : {
        render() {
          return Dt(g);
        }
      };
}
function wn(w, k) {
  return k.reduce(
    (g, q) => (X) => {
      let ee,
        ue = q((se) => {
          let Ee = Jr(se);
          return (
            se && (Ee.args = Object.assign(X.args, Ee.args)),
            (ee = g({ ...X, ...Ee })),
            ee
          );
        }, X);
      return ee || (ee = g(X)), ue === ee ? ee : uu(ue, Dt(ee));
    },
    (g) => uu(w(g))
  );
}
var xn = (w, k) => {
    let { id: g, component: q } = k;
    if (!q)
      throw new Error(
        `Unable to render story ${g} as the component annotation is missing from the default export`
      );
    return () => Dt(q, w, an(w, k));
  },
  ot = new Map(),
  ru = new Map();
function Nn(
  {
    storyFn: w,
    forceRemount: k,
    showMain: g,
    showException: q,
    storyContext: X
  },
  ee
) {
  var ye;
  X.args = eu(X.args);
  let ue = w();
  ru.set(ee, ue);
  let se = (ye = ue.render) == null ? void 0 : ye.call(ue).props,
    Ee = se ? eu(se) : X.args,
    Ae = ot.get(ee);
  if (Ae && !k)
    return (
      on(Ae.reactiveArgs, Ee),
      () => {
        _t(Ae.vueApp, ee);
      }
    );
  Ae && k && _t(Ae.vueApp, ee);
  let me = Vr({
    render() {
      let Oe = ru.get(ee),
        qe = Oe && Oe.template ? Oe : ue;
      return ot.set(ee, { vueApp: me, reactiveArgs: Ee }), Dt(qe);
    }
  });
  return (
    (me.config.errorHandler = (Oe) => q(Oe)),
    me.mount(ee),
    g(),
    () => {
      _t(me, ee);
    }
  );
}
function an(w, k) {
  let { argTypes: g } = k,
    q = Object.entries(w)
      .filter(([X, ee]) => {
        var ue, se;
        return (
          ((se = (ue = g[X]) == null ? void 0 : ue.table) == null
            ? void 0
            : se.category) === 'slots'
        );
      })
      .map(([X, ee]) => [X, typeof ee == 'function' ? ee : () => ee]);
  return Object.fromEntries(q);
}
function on(w, k) {
  k &&
    (Object.keys(w).forEach((g) => {
      delete w[g];
    }),
    Object.assign(w, k));
}
function _t(w, k) {
  w == null || w.unmount(), ot.has(k) && ot.delete(k);
}
const { addons: Dn, useEffect: ln } = __STORYBOOK_MODULE_PREVIEW_API__;
var cn = un({
    '../../node_modules/prettier/parser-html.js'(w, k) {
      (function (g) {
        if (typeof w == 'object' && typeof k == 'object') k.exports = g();
        else if (typeof define == 'function' && define.amd) define(g);
        else {
          var q =
            typeof globalThis < 'u'
              ? globalThis
              : typeof global < 'u'
              ? global
              : typeof self < 'u'
              ? self
              : this || {};
          (q.prettierPlugins = q.prettierPlugins || {}),
            (q.prettierPlugins.html = g());
        }
      })(function () {
        var g = (R, p) => () => (
            p || R((p = { exports: {} }).exports, p), p.exports
          ),
          q = g((R, p) => {
            var c = function (E) {
              return E && E.Math == Math && E;
            };
            p.exports =
              c(typeof globalThis == 'object' && globalThis) ||
              c(typeof window == 'object' && window) ||
              c(typeof self == 'object' && self) ||
              c(typeof global == 'object' && global) ||
              (function () {
                return this;
              })() ||
              Function('return this')();
          }),
          X = g((R, p) => {
            p.exports = function (c) {
              try {
                return !!c();
              } catch {
                return !0;
              }
            };
          }),
          ee = g((R, p) => {
            var c = X();
            p.exports = !c(function () {
              return (
                Object.defineProperty({}, 1, {
                  get: function () {
                    return 7;
                  }
                })[1] != 7
              );
            });
          }),
          ue = g((R, p) => {
            var c = X();
            p.exports = !c(function () {
              var E = function () {}.bind();
              return typeof E != 'function' || E.hasOwnProperty('prototype');
            });
          }),
          se = g((R, p) => {
            var c = ue(),
              E = Function.prototype.call;
            p.exports = c
              ? E.bind(E)
              : function () {
                  return E.apply(E, arguments);
                };
          }),
          Ee = g((R) => {
            var p = {}.propertyIsEnumerable,
              c = Object.getOwnPropertyDescriptor,
              E = c && !p.call({ 1: 2 }, 1);
            R.f = E
              ? function (F) {
                  var f = c(this, F);
                  return !!f && f.enumerable;
                }
              : p;
          }),
          Ae = g((R, p) => {
            p.exports = function (c, E) {
              return {
                enumerable: !(c & 1),
                configurable: !(c & 2),
                writable: !(c & 4),
                value: E
              };
            };
          }),
          me = g((R, p) => {
            var c = ue(),
              E = Function.prototype,
              F = E.bind,
              f = E.call,
              S = c && F.bind(f, f);
            p.exports = c
              ? function (N) {
                  return N && S(N);
                }
              : function (N) {
                  return (
                    N &&
                    function () {
                      return f.apply(N, arguments);
                    }
                  );
                };
          }),
          ye = g((R, p) => {
            var c = me(),
              E = c({}.toString),
              F = c(''.slice);
            p.exports = function (f) {
              return F(E(f), 8, -1);
            };
          }),
          Oe = g((R, p) => {
            var c = q(),
              E = me(),
              F = X(),
              f = ye(),
              S = c.Object,
              N = E(''.split);
            p.exports = F(function () {
              return !S('z').propertyIsEnumerable(0);
            })
              ? function (O) {
                  return f(O) == 'String' ? N(O, '') : S(O);
                }
              : S;
          }),
          qe = g((R, p) => {
            var c = q(),
              E = c.TypeError;
            p.exports = function (F) {
              if (F == null) throw E("Can't call method on " + F);
              return F;
            };
          }),
          Se = g((R, p) => {
            var c = Oe(),
              E = qe();
            p.exports = function (F) {
              return c(E(F));
            };
          }),
          fe = g((R, p) => {
            p.exports = function (c) {
              return typeof c == 'function';
            };
          }),
          ve = g((R, p) => {
            var c = fe();
            p.exports = function (E) {
              return typeof E == 'object' ? E !== null : c(E);
            };
          }),
          Xe = g((R, p) => {
            var c = q(),
              E = fe(),
              F = function (f) {
                return E(f) ? f : void 0;
              };
            p.exports = function (f, S) {
              return arguments.length < 2 ? F(c[f]) : c[f] && c[f][S];
            };
          }),
          Ze = g((R, p) => {
            var c = me();
            p.exports = c({}.isPrototypeOf);
          }),
          Du = g((R, p) => {
            var c = Xe();
            p.exports = c('navigator', 'userAgent') || '';
          }),
          lu = g((R, p) => {
            var c = q(),
              E = Du(),
              F = c.process,
              f = c.Deno,
              S = (F && F.versions) || (f && f.version),
              N = S && S.v8,
              O,
              L;
            N &&
              ((O = N.split('.')),
              (L = O[0] > 0 && O[0] < 4 ? 1 : +(O[0] + O[1]))),
              !L &&
                E &&
                ((O = E.match(/Edge\/(\d+)/)),
                (!O || O[1] >= 74) &&
                  ((O = E.match(/Chrome\/(\d+)/)), O && (L = +O[1]))),
              (p.exports = L);
          }),
          vt = g((R, p) => {
            var c = lu(),
              E = X();
            p.exports =
              !!Object.getOwnPropertySymbols &&
              !E(function () {
                var F = Symbol();
                return (
                  !String(F) ||
                  !(Object(F) instanceof Symbol) ||
                  (!Symbol.sham && c && c < 41)
                );
              });
          }),
          Tt = g((R, p) => {
            var c = vt();
            p.exports = c && !Symbol.sham && typeof Symbol.iterator == 'symbol';
          }),
          yt = g((R, p) => {
            var c = q(),
              E = Xe(),
              F = fe(),
              f = Ze(),
              S = Tt(),
              N = c.Object;
            p.exports = S
              ? function (O) {
                  return typeof O == 'symbol';
                }
              : function (O) {
                  var L = E('Symbol');
                  return F(L) && f(L.prototype, N(O));
                };
          }),
          lt = g((R, p) => {
            var c = q(),
              E = c.String;
            p.exports = function (F) {
              try {
                return E(F);
              } catch {
                return 'Object';
              }
            };
          }),
          Ke = g((R, p) => {
            var c = q(),
              E = fe(),
              F = lt(),
              f = c.TypeError;
            p.exports = function (S) {
              if (E(S)) return S;
              throw f(F(S) + ' is not a function');
            };
          }),
          ct = g((R, p) => {
            var c = Ke();
            p.exports = function (E, F) {
              var f = E[F];
              return f == null ? void 0 : c(f);
            };
          }),
          cu = g((R, p) => {
            var c = q(),
              E = se(),
              F = fe(),
              f = ve(),
              S = c.TypeError;
            p.exports = function (N, O) {
              var L, M;
              if (
                (O === 'string' && F((L = N.toString)) && !f((M = E(L, N)))) ||
                (F((L = N.valueOf)) && !f((M = E(L, N)))) ||
                (O !== 'string' && F((L = N.toString)) && !f((M = E(L, N))))
              )
                return M;
              throw S("Can't convert object to primitive value");
            };
          }),
          pu = g((R, p) => {
            p.exports = !1;
          }),
          pt = g((R, p) => {
            var c = q(),
              E = Object.defineProperty;
            p.exports = function (F, f) {
              try {
                E(c, F, { value: f, configurable: !0, writable: !0 });
              } catch {
                c[F] = f;
              }
              return f;
            };
          }),
          ht = g((R, p) => {
            var c = q(),
              E = pt(),
              F = '__core-js_shared__',
              f = c[F] || E(F, {});
            p.exports = f;
          }),
          St = g((R, p) => {
            var c = pu(),
              E = ht();
            (p.exports = function (F, f) {
              return E[F] || (E[F] = f !== void 0 ? f : {});
            })('versions', []).push({
              version: '3.22.2',
              mode: c ? 'pure' : 'global',
              copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
              license:
                'https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE',
              source: 'https://github.com/zloirock/core-js'
            });
          }),
          Bt = g((R, p) => {
            var c = q(),
              E = qe(),
              F = c.Object;
            p.exports = function (f) {
              return F(E(f));
            };
          }),
          Ve = g((R, p) => {
            var c = me(),
              E = Bt(),
              F = c({}.hasOwnProperty);
            p.exports =
              Object.hasOwn ||
              function (f, S) {
                return F(E(f), S);
              };
          }),
          bt = g((R, p) => {
            var c = me(),
              E = 0,
              F = Math.random(),
              f = c((1).toString);
            p.exports = function (S) {
              return (
                'Symbol(' + (S === void 0 ? '' : S) + ')_' + f(++E + F, 36)
              );
            };
          }),
          He = g((R, p) => {
            var c = q(),
              E = St(),
              F = Ve(),
              f = bt(),
              S = vt(),
              N = Tt(),
              O = E('wks'),
              L = c.Symbol,
              M = L && L.for,
              V = N ? L : (L && L.withoutSetter) || f;
            p.exports = function (y) {
              if (!F(O, y) || !(S || typeof O[y] == 'string')) {
                var z = 'Symbol.' + y;
                S && F(L, y)
                  ? (O[y] = L[y])
                  : N && M
                  ? (O[y] = M(z))
                  : (O[y] = V(z));
              }
              return O[y];
            };
          }),
          hu = g((R, p) => {
            var c = q(),
              E = se(),
              F = ve(),
              f = yt(),
              S = ct(),
              N = cu(),
              O = He(),
              L = c.TypeError,
              M = O('toPrimitive');
            p.exports = function (V, y) {
              if (!F(V) || f(V)) return V;
              var z = S(V, M),
                J;
              if (z) {
                if (
                  (y === void 0 && (y = 'default'),
                  (J = E(z, V, y)),
                  !F(J) || f(J))
                )
                  return J;
                throw L("Can't convert object to primitive value");
              }
              return y === void 0 && (y = 'number'), N(V, y);
            };
          }),
          dt = g((R, p) => {
            var c = hu(),
              E = yt();
            p.exports = function (F) {
              var f = c(F, 'string');
              return E(f) ? f : f + '';
            };
          }),
          du = g((R, p) => {
            var c = q(),
              E = ve(),
              F = c.document,
              f = E(F) && E(F.createElement);
            p.exports = function (S) {
              return f ? F.createElement(S) : {};
            };
          }),
          wt = g((R, p) => {
            var c = ee(),
              E = X(),
              F = du();
            p.exports =
              !c &&
              !E(function () {
                return (
                  Object.defineProperty(F('div'), 'a', {
                    get: function () {
                      return 7;
                    }
                  }).a != 7
                );
              });
          }),
          xt = g((R) => {
            var p = ee(),
              c = se(),
              E = Ee(),
              F = Ae(),
              f = Se(),
              S = dt(),
              N = Ve(),
              O = wt(),
              L = Object.getOwnPropertyDescriptor;
            R.f = p
              ? L
              : function (M, V) {
                  if (((M = f(M)), (V = S(V)), O))
                    try {
                      return L(M, V);
                    } catch {}
                  if (N(M, V)) return F(!c(E.f, M, V), M[V]);
                };
          }),
          Cu = g((R, p) => {
            var c = ee(),
              E = X();
            p.exports =
              c &&
              E(function () {
                return (
                  Object.defineProperty(function () {}, 'prototype', {
                    value: 42,
                    writable: !1
                  }).prototype != 42
                );
              });
          }),
          ze = g((R, p) => {
            var c = q(),
              E = ve(),
              F = c.String,
              f = c.TypeError;
            p.exports = function (S) {
              if (E(S)) return S;
              throw f(F(S) + ' is not an object');
            };
          }),
          Ct = g((R) => {
            var p = q(),
              c = ee(),
              E = wt(),
              F = Cu(),
              f = ze(),
              S = dt(),
              N = p.TypeError,
              O = Object.defineProperty,
              L = Object.getOwnPropertyDescriptor,
              M = 'enumerable',
              V = 'configurable',
              y = 'writable';
            R.f = c
              ? F
                ? function (z, J, Z) {
                    if (
                      (f(z),
                      (J = S(J)),
                      f(Z),
                      typeof z == 'function' &&
                        J === 'prototype' &&
                        'value' in Z &&
                        y in Z &&
                        !Z[y])
                    ) {
                      var W = L(z, J);
                      W &&
                        W[y] &&
                        ((z[J] = Z.value),
                        (Z = {
                          configurable: V in Z ? Z[V] : W[V],
                          enumerable: M in Z ? Z[M] : W[M],
                          writable: !1
                        }));
                    }
                    return O(z, J, Z);
                  }
                : O
              : function (z, J, Z) {
                  if ((f(z), (J = S(J)), f(Z), E))
                    try {
                      return O(z, J, Z);
                    } catch {}
                  if ('get' in Z || 'set' in Z)
                    throw N('Accessors not supported');
                  return 'value' in Z && (z[J] = Z.value), z;
                };
          }),
          Et = g((R, p) => {
            var c = ee(),
              E = Ct(),
              F = Ae();
            p.exports = c
              ? function (f, S, N) {
                  return E.f(f, S, F(1, N));
                }
              : function (f, S, N) {
                  return (f[S] = N), f;
                };
          }),
          mt = g((R, p) => {
            var c = me(),
              E = fe(),
              F = ht(),
              f = c(Function.toString);
            E(F.inspectSource) ||
              (F.inspectSource = function (S) {
                return f(S);
              }),
              (p.exports = F.inspectSource);
          }),
          Eu = g((R, p) => {
            var c = q(),
              E = fe(),
              F = mt(),
              f = c.WeakMap;
            p.exports = E(f) && /native code/.test(F(f));
          }),
          mu = g((R, p) => {
            var c = St(),
              E = bt(),
              F = c('keys');
            p.exports = function (f) {
              return F[f] || (F[f] = E(f));
            };
          }),
          Nt = g((R, p) => {
            p.exports = {};
          }),
          fu = g((R, p) => {
            var c = Eu(),
              E = q(),
              F = me(),
              f = ve(),
              S = Et(),
              N = Ve(),
              O = ht(),
              L = mu(),
              M = Nt(),
              V = 'Object already initialized',
              y = E.TypeError,
              z = E.WeakMap,
              J,
              Z,
              W,
              Ce = function (oe) {
                return W(oe) ? Z(oe) : J(oe, {});
              },
              de = function (oe) {
                return function (Fe) {
                  var je;
                  if (!f(Fe) || (je = Z(Fe)).type !== oe)
                    throw y('Incompatible receiver, ' + oe + ' required');
                  return je;
                };
              };
            c || O.state
              ? ((ce = O.state || (O.state = new z())),
                (U = F(ce.get)),
                (ke = F(ce.has)),
                (Ge = F(ce.set)),
                (J = function (oe, Fe) {
                  if (ke(ce, oe)) throw new y(V);
                  return (Fe.facade = oe), Ge(ce, oe, Fe), Fe;
                }),
                (Z = function (oe) {
                  return U(ce, oe) || {};
                }),
                (W = function (oe) {
                  return ke(ce, oe);
                }))
              : ((we = L('state')),
                (M[we] = !0),
                (J = function (oe, Fe) {
                  if (N(oe, we)) throw new y(V);
                  return (Fe.facade = oe), S(oe, we, Fe), Fe;
                }),
                (Z = function (oe) {
                  return N(oe, we) ? oe[we] : {};
                }),
                (W = function (oe) {
                  return N(oe, we);
                }));
            var ce, U, ke, Ge, we;
            p.exports = { set: J, get: Z, has: W, enforce: Ce, getterFor: de };
          }),
          gu = g((R, p) => {
            var c = ee(),
              E = Ve(),
              F = Function.prototype,
              f = c && Object.getOwnPropertyDescriptor,
              S = E(F, 'name'),
              N = S && function () {}.name === 'something',
              O = S && (!c || (c && f(F, 'name').configurable));
            p.exports = { EXISTS: S, PROPER: N, CONFIGURABLE: O };
          }),
          Fu = g((R, p) => {
            var c = q(),
              E = fe(),
              F = Ve(),
              f = Et(),
              S = pt(),
              N = mt(),
              O = fu(),
              L = gu().CONFIGURABLE,
              M = O.get,
              V = O.enforce,
              y = String(String).split('String');
            (p.exports = function (z, J, Z, W) {
              var Ce = W ? !!W.unsafe : !1,
                de = W ? !!W.enumerable : !1,
                ce = W ? !!W.noTargetGet : !1,
                U = W && W.name !== void 0 ? W.name : J,
                ke;
              if (
                (E(Z) &&
                  (String(U).slice(0, 7) === 'Symbol(' &&
                    (U =
                      '[' +
                      String(U).replace(/^Symbol\(([^)]*)\)/, '$1') +
                      ']'),
                  (!F(Z, 'name') || (L && Z.name !== U)) && f(Z, 'name', U),
                  (ke = V(Z)),
                  ke.source ||
                    (ke.source = y.join(typeof U == 'string' ? U : ''))),
                z === c)
              ) {
                de ? (z[J] = Z) : S(J, Z);
                return;
              } else Ce ? !ce && z[J] && (de = !0) : delete z[J];
              de ? (z[J] = Z) : f(z, J, Z);
            })(Function.prototype, 'toString', function () {
              return (E(this) && M(this).source) || N(this);
            });
          }),
          Ot = g((R, p) => {
            var c = Math.ceil,
              E = Math.floor;
            p.exports = function (F) {
              var f = +F;
              return f !== f || f === 0 ? 0 : (f > 0 ? E : c)(f);
            };
          }),
          Au = g((R, p) => {
            var c = Ot(),
              E = Math.max,
              F = Math.min;
            p.exports = function (f, S) {
              var N = c(f);
              return N < 0 ? E(N + S, 0) : F(N, S);
            };
          }),
          _u = g((R, p) => {
            var c = Ot(),
              E = Math.min;
            p.exports = function (F) {
              return F > 0 ? E(c(F), 9007199254740991) : 0;
            };
          }),
          et = g((R, p) => {
            var c = _u();
            p.exports = function (E) {
              return c(E.length);
            };
          }),
          vu = g((R, p) => {
            var c = Se(),
              E = Au(),
              F = et(),
              f = function (S) {
                return function (N, O, L) {
                  var M = c(N),
                    V = F(M),
                    y = E(L, V),
                    z;
                  if (S && O != O) {
                    for (; V > y; ) if (((z = M[y++]), z != z)) return !0;
                  } else
                    for (; V > y; y++)
                      if ((S || y in M) && M[y] === O) return S || y || 0;
                  return !S && -1;
                };
              };
            p.exports = { includes: f(!0), indexOf: f(!1) };
          }),
          Tu = g((R, p) => {
            var c = me(),
              E = Ve(),
              F = Se(),
              f = vu().indexOf,
              S = Nt(),
              N = c([].push);
            p.exports = function (O, L) {
              var M = F(O),
                V = 0,
                y = [],
                z;
              for (z in M) !E(S, z) && E(M, z) && N(y, z);
              for (; L.length > V; )
                E(M, (z = L[V++])) && (~f(y, z) || N(y, z));
              return y;
            };
          }),
          yu = g((R, p) => {
            p.exports = [
              'constructor',
              'hasOwnProperty',
              'isPrototypeOf',
              'propertyIsEnumerable',
              'toLocaleString',
              'toString',
              'valueOf'
            ];
          }),
          Su = g((R) => {
            var p = Tu(),
              c = yu(),
              E = c.concat('length', 'prototype');
            R.f =
              Object.getOwnPropertyNames ||
              function (F) {
                return p(F, E);
              };
          }),
          Bu = g((R) => {
            R.f = Object.getOwnPropertySymbols;
          }),
          bu = g((R, p) => {
            var c = Xe(),
              E = me(),
              F = Su(),
              f = Bu(),
              S = ze(),
              N = E([].concat);
            p.exports =
              c('Reflect', 'ownKeys') ||
              function (O) {
                var L = F.f(S(O)),
                  M = f.f;
                return M ? N(L, M(O)) : L;
              };
          }),
          wu = g((R, p) => {
            var c = Ve(),
              E = bu(),
              F = xt(),
              f = Ct();
            p.exports = function (S, N, O) {
              for (var L = E(N), M = f.f, V = F.f, y = 0; y < L.length; y++) {
                var z = L[y];
                !c(S, z) && !(O && c(O, z)) && M(S, z, V(N, z));
              }
            };
          }),
          xu = g((R, p) => {
            var c = X(),
              E = fe(),
              F = /#|\.prototype\./,
              f = function (M, V) {
                var y = N[S(M)];
                return y == L ? !0 : y == O ? !1 : E(V) ? c(V) : !!V;
              },
              S = (f.normalize = function (M) {
                return String(M).replace(F, '.').toLowerCase();
              }),
              N = (f.data = {}),
              O = (f.NATIVE = 'N'),
              L = (f.POLYFILL = 'P');
            p.exports = f;
          }),
          ft = g((R, p) => {
            var c = q(),
              E = xt().f,
              F = Et(),
              f = Fu(),
              S = pt(),
              N = wu(),
              O = xu();
            p.exports = function (L, M) {
              var V = L.target,
                y = L.global,
                z = L.stat,
                J,
                Z,
                W,
                Ce,
                de,
                ce;
              if (
                (y
                  ? (Z = c)
                  : z
                  ? (Z = c[V] || S(V, {}))
                  : (Z = (c[V] || {}).prototype),
                Z)
              )
                for (W in M) {
                  if (
                    ((de = M[W]),
                    L.noTargetGet
                      ? ((ce = E(Z, W)), (Ce = ce && ce.value))
                      : (Ce = Z[W]),
                    (J = O(y ? W : V + (z ? '.' : '#') + W, L.forced)),
                    !J && Ce !== void 0)
                  ) {
                    if (typeof de == typeof Ce) continue;
                    N(de, Ce);
                  }
                  (L.sham || (Ce && Ce.sham)) && F(de, 'sham', !0),
                    f(Z, W, de, L);
                }
            };
          }),
          Nu = g(() => {
            var R = ft(),
              p = q();
            R({ global: !0 }, { globalThis: p });
          }),
          Ou = g(() => {
            Nu();
          }),
          kt = g((R, p) => {
            var c = ye();
            p.exports =
              Array.isArray ||
              function (E) {
                return c(E) == 'Array';
              };
          }),
          Pt = g((R, p) => {
            var c = me(),
              E = Ke(),
              F = ue(),
              f = c(c.bind);
            p.exports = function (S, N) {
              return (
                E(S),
                N === void 0
                  ? S
                  : F
                  ? f(S, N)
                  : function () {
                      return S.apply(N, arguments);
                    }
              );
            };
          }),
          ku = g((R, p) => {
            var c = q(),
              E = kt(),
              F = et(),
              f = Pt(),
              S = c.TypeError,
              N = function (O, L, M, V, y, z, J, Z) {
                for (
                  var W = y, Ce = 0, de = J ? f(J, Z) : !1, ce, U;
                  Ce < V;

                ) {
                  if (Ce in M) {
                    if (((ce = de ? de(M[Ce], Ce, L) : M[Ce]), z > 0 && E(ce)))
                      (U = F(ce)), (W = N(O, L, ce, U, W, z - 1) - 1);
                    else {
                      if (W >= 9007199254740991)
                        throw S('Exceed the acceptable array length');
                      O[W] = ce;
                    }
                    W++;
                  }
                  Ce++;
                }
                return W;
              };
            p.exports = N;
          }),
          Pu = g((R, p) => {
            var c = He(),
              E = c('toStringTag'),
              F = {};
            (F[E] = 'z'), (p.exports = String(F) === '[object z]');
          }),
          Rt = g((R, p) => {
            var c = q(),
              E = Pu(),
              F = fe(),
              f = ye(),
              S = He(),
              N = S('toStringTag'),
              O = c.Object,
              L =
                f(
                  (function () {
                    return arguments;
                  })()
                ) == 'Arguments',
              M = function (V, y) {
                try {
                  return V[y];
                } catch {}
              };
            p.exports = E
              ? f
              : function (V) {
                  var y, z, J;
                  return V === void 0
                    ? 'Undefined'
                    : V === null
                    ? 'Null'
                    : typeof (z = M((y = O(V)), N)) == 'string'
                    ? z
                    : L
                    ? f(y)
                    : (J = f(y)) == 'Object' && F(y.callee)
                    ? 'Arguments'
                    : J;
                };
          }),
          Ru = g((R, p) => {
            var c = me(),
              E = X(),
              F = fe(),
              f = Rt(),
              S = Xe(),
              N = mt(),
              O = function () {},
              L = [],
              M = S('Reflect', 'construct'),
              V = /^\s*(?:class|function)\b/,
              y = c(V.exec),
              z = !V.exec(O),
              J = function (W) {
                if (!F(W)) return !1;
                try {
                  return M(O, L, W), !0;
                } catch {
                  return !1;
                }
              },
              Z = function (W) {
                if (!F(W)) return !1;
                switch (f(W)) {
                  case 'AsyncFunction':
                  case 'GeneratorFunction':
                  case 'AsyncGeneratorFunction':
                    return !1;
                }
                try {
                  return z || !!y(V, N(W));
                } catch {
                  return !0;
                }
              };
            (Z.sham = !0),
              (p.exports =
                !M ||
                E(function () {
                  var W;
                  return (
                    J(J.call) ||
                    !J(Object) ||
                    !J(function () {
                      W = !0;
                    }) ||
                    W
                  );
                })
                  ? Z
                  : J);
          }),
          Iu = g((R, p) => {
            var c = q(),
              E = kt(),
              F = Ru(),
              f = ve(),
              S = He(),
              N = S('species'),
              O = c.Array;
            p.exports = function (L) {
              var M;
              return (
                E(L) &&
                  ((M = L.constructor),
                  F(M) && (M === O || E(M.prototype))
                    ? (M = void 0)
                    : f(M) && ((M = M[N]), M === null && (M = void 0))),
                M === void 0 ? O : M
              );
            };
          }),
          $u = g((R, p) => {
            var c = Iu();
            p.exports = function (E, F) {
              return new (c(E))(F === 0 ? 0 : F);
            };
          }),
          Lu = g(() => {
            var R = ft(),
              p = ku(),
              c = Ke(),
              E = Bt(),
              F = et(),
              f = $u();
            R(
              { target: 'Array', proto: !0 },
              {
                flatMap: function (S) {
                  var N = E(this),
                    O = F(N),
                    L;
                  return (
                    c(S),
                    (L = f(N, 0)),
                    (L.length = p(
                      L,
                      N,
                      N,
                      O,
                      0,
                      1,
                      S,
                      arguments.length > 1 ? arguments[1] : void 0
                    )),
                    L
                  );
                }
              }
            );
          }),
          It = g((R, p) => {
            p.exports = {};
          }),
          qu = g((R, p) => {
            var c = He(),
              E = It(),
              F = c('iterator'),
              f = Array.prototype;
            p.exports = function (S) {
              return S !== void 0 && (E.Array === S || f[F] === S);
            };
          }),
          $t = g((R, p) => {
            var c = Rt(),
              E = ct(),
              F = It(),
              f = He(),
              S = f('iterator');
            p.exports = function (N) {
              if (N != null) return E(N, S) || E(N, '@@iterator') || F[c(N)];
            };
          }),
          ju = g((R, p) => {
            var c = q(),
              E = se(),
              F = Ke(),
              f = ze(),
              S = lt(),
              N = $t(),
              O = c.TypeError;
            p.exports = function (L, M) {
              var V = arguments.length < 2 ? N(L) : M;
              if (F(V)) return f(E(V, L));
              throw O(S(L) + ' is not iterable');
            };
          }),
          Mu = g((R, p) => {
            var c = se(),
              E = ze(),
              F = ct();
            p.exports = function (f, S, N) {
              var O, L;
              E(f);
              try {
                if (((O = F(f, 'return')), !O)) {
                  if (S === 'throw') throw N;
                  return N;
                }
                O = c(O, f);
              } catch (M) {
                (L = !0), (O = M);
              }
              if (S === 'throw') throw N;
              if (L) throw O;
              return E(O), N;
            };
          }),
          Uu = g((R, p) => {
            var c = q(),
              E = Pt(),
              F = se(),
              f = ze(),
              S = lt(),
              N = qu(),
              O = et(),
              L = Ze(),
              M = ju(),
              V = $t(),
              y = Mu(),
              z = c.TypeError,
              J = function (W, Ce) {
                (this.stopped = W), (this.result = Ce);
              },
              Z = J.prototype;
            p.exports = function (W, Ce, de) {
              var ce = de && de.that,
                U = !!(de && de.AS_ENTRIES),
                ke = !!(de && de.IS_ITERATOR),
                Ge = !!(de && de.INTERRUPTED),
                we = E(Ce, ce),
                oe,
                Fe,
                je,
                We,
                Re,
                Ye,
                tt,
                ut = function (Be) {
                  return oe && y(oe, 'normal', Be), new J(!0, Be);
                },
                Qe = function (Be) {
                  return U
                    ? (f(Be), Ge ? we(Be[0], Be[1], ut) : we(Be[0], Be[1]))
                    : Ge
                    ? we(Be, ut)
                    : we(Be);
                };
              if (ke) oe = W;
              else {
                if (((Fe = V(W)), !Fe)) throw z(S(W) + ' is not iterable');
                if (N(Fe)) {
                  for (je = 0, We = O(W); We > je; je++)
                    if (((Re = Qe(W[je])), Re && L(Z, Re))) return Re;
                  return new J(!1);
                }
                oe = M(W, Fe);
              }
              for (Ye = oe.next; !(tt = F(Ye, oe)).done; ) {
                try {
                  Re = Qe(tt.value);
                } catch (Be) {
                  y(oe, 'throw', Be);
                }
                if (typeof Re == 'object' && Re && L(Z, Re)) return Re;
              }
              return new J(!1);
            };
          }),
          Vu = g((R, p) => {
            var c = dt(),
              E = Ct(),
              F = Ae();
            p.exports = function (f, S, N) {
              var O = c(S);
              O in f ? E.f(f, O, F(0, N)) : (f[O] = N);
            };
          }),
          Gu = g(() => {
            var R = ft(),
              p = Uu(),
              c = Vu();
            R(
              { target: 'Object', stat: !0 },
              {
                fromEntries: function (E) {
                  var F = {};
                  return (
                    p(
                      E,
                      function (f, S) {
                        c(F, f, S);
                      },
                      { AS_ENTRIES: !0 }
                    ),
                    F
                  );
                }
              }
            );
          }),
          Xu = g((R, p) => {
            var c = ['cliName', 'cliCategory', 'cliDescription'];
            function E(e, u) {
              if (e == null) return {};
              var a = F(e, u),
                o,
                l;
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (l = 0; l < r.length; l++)
                  (o = r[l]),
                    !(u.indexOf(o) >= 0) &&
                      (!Object.prototype.propertyIsEnumerable.call(e, o) ||
                        (a[o] = e[o]));
              }
              return a;
            }
            function F(e, u) {
              if (e == null) return {};
              var a = {},
                o = Object.keys(e),
                l,
                r;
              for (r = 0; r < o.length; r++)
                (l = o[r]), !(u.indexOf(l) >= 0) && (a[l] = e[l]);
              return a;
            }
            Ou(), Lu(), Gu();
            var f = Object.create,
              S = Object.defineProperty,
              N = Object.getOwnPropertyDescriptor,
              O = Object.getOwnPropertyNames,
              L = Object.getPrototypeOf,
              M = Object.prototype.hasOwnProperty,
              V = (e, u) =>
                function () {
                  return e && (u = (0, e[O(e)[0]])((e = 0))), u;
                },
              y = (e, u) =>
                function () {
                  return (
                    u || (0, e[O(e)[0]])((u = { exports: {} }).exports, u),
                    u.exports
                  );
                },
              z = (e, u) => {
                for (var a in u) S(e, a, { get: u[a], enumerable: !0 });
              },
              J = (e, u, a, o) => {
                if ((u && typeof u == 'object') || typeof u == 'function')
                  for (let l of O(u))
                    !M.call(e, l) &&
                      l !== a &&
                      S(e, l, {
                        get: () => u[l],
                        enumerable: !(o = N(u, l)) || o.enumerable
                      });
                return e;
              },
              Z = (e, u, a) => (
                (a = e != null ? f(L(e)) : {}),
                J(
                  u || !e || !e.__esModule
                    ? S(a, 'default', { value: e, enumerable: !0 })
                    : a,
                  e
                )
              ),
              W = (e) => J(S({}, '__esModule', { value: !0 }), e),
              Ce,
              de,
              ce,
              U = V({
                '<define:process>'() {
                  (Ce = {}), (de = []), (ce = { env: Ce, argv: de });
                }
              }),
              ke = y({
                'node_modules/angular-html-parser/lib/compiler/src/chars.js'(
                  e
                ) {
                  U(),
                    Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.$EOF = 0),
                    (e.$BSPACE = 8),
                    (e.$TAB = 9),
                    (e.$LF = 10),
                    (e.$VTAB = 11),
                    (e.$FF = 12),
                    (e.$CR = 13),
                    (e.$SPACE = 32),
                    (e.$BANG = 33),
                    (e.$DQ = 34),
                    (e.$HASH = 35),
                    (e.$$ = 36),
                    (e.$PERCENT = 37),
                    (e.$AMPERSAND = 38),
                    (e.$SQ = 39),
                    (e.$LPAREN = 40),
                    (e.$RPAREN = 41),
                    (e.$STAR = 42),
                    (e.$PLUS = 43),
                    (e.$COMMA = 44),
                    (e.$MINUS = 45),
                    (e.$PERIOD = 46),
                    (e.$SLASH = 47),
                    (e.$COLON = 58),
                    (e.$SEMICOLON = 59),
                    (e.$LT = 60),
                    (e.$EQ = 61),
                    (e.$GT = 62),
                    (e.$QUESTION = 63),
                    (e.$0 = 48),
                    (e.$7 = 55),
                    (e.$9 = 57),
                    (e.$A = 65),
                    (e.$E = 69),
                    (e.$F = 70),
                    (e.$X = 88),
                    (e.$Z = 90),
                    (e.$LBRACKET = 91),
                    (e.$BACKSLASH = 92),
                    (e.$RBRACKET = 93),
                    (e.$CARET = 94),
                    (e.$_ = 95),
                    (e.$a = 97),
                    (e.$b = 98),
                    (e.$e = 101),
                    (e.$f = 102),
                    (e.$n = 110),
                    (e.$r = 114),
                    (e.$t = 116),
                    (e.$u = 117),
                    (e.$v = 118),
                    (e.$x = 120),
                    (e.$z = 122),
                    (e.$LBRACE = 123),
                    (e.$BAR = 124),
                    (e.$RBRACE = 125),
                    (e.$NBSP = 160),
                    (e.$PIPE = 124),
                    (e.$TILDA = 126),
                    (e.$AT = 64),
                    (e.$BT = 96);
                  function u(C) {
                    return (C >= e.$TAB && C <= e.$SPACE) || C == e.$NBSP;
                  }
                  e.isWhitespace = u;
                  function a(C) {
                    return e.$0 <= C && C <= e.$9;
                  }
                  e.isDigit = a;
                  function o(C) {
                    return (C >= e.$a && C <= e.$z) || (C >= e.$A && C <= e.$Z);
                  }
                  e.isAsciiLetter = o;
                  function l(C) {
                    return (
                      (C >= e.$a && C <= e.$f) ||
                      (C >= e.$A && C <= e.$F) ||
                      a(C)
                    );
                  }
                  e.isAsciiHexDigit = l;
                  function r(C) {
                    return C === e.$LF || C === e.$CR;
                  }
                  e.isNewLine = r;
                  function i(C) {
                    return e.$0 <= C && C <= e.$7;
                  }
                  e.isOctalDigit = i;
                }
              }),
              Ge = y({
                'node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = class {
                    constructor(o, l, r) {
                      (this.filePath = o), (this.name = l), (this.members = r);
                    }
                    assertNoMembers() {
                      if (this.members.length)
                        throw new Error(
                          `Illegal state: symbol without members expected, but got ${JSON.stringify(
                            this
                          )}.`
                        );
                    }
                  };
                  e.StaticSymbol = u;
                  var a = class {
                    constructor() {
                      this.cache = new Map();
                    }
                    get(o, l, r) {
                      r = r || [];
                      let i = r.length ? `.${r.join('.')}` : '',
                        C = `"${o}".${l}${i}`,
                        m = this.cache.get(C);
                      return (
                        m || ((m = new u(o, l, r)), this.cache.set(C, m)), m
                      );
                    }
                  };
                  e.StaticSymbolCache = a;
                }
              }),
              we = y({
                'node_modules/angular-html-parser/lib/compiler/src/util.js'(e) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = /-+([a-z0-9])/g;
                  function a(n) {
                    return n.replace(u, function () {
                      for (
                        var _ = arguments.length, h = new Array(_), b = 0;
                        b < _;
                        b++
                      )
                        h[b] = arguments[b];
                      return h[1].toUpperCase();
                    });
                  }
                  e.dashCaseToCamelCase = a;
                  function o(n, _) {
                    return r(n, ':', _);
                  }
                  e.splitAtColon = o;
                  function l(n, _) {
                    return r(n, '.', _);
                  }
                  e.splitAtPeriod = l;
                  function r(n, _, h) {
                    let b = n.indexOf(_);
                    return b == -1
                      ? h
                      : [n.slice(0, b).trim(), n.slice(b + 1).trim()];
                  }
                  function i(n, _, h) {
                    return Array.isArray(n)
                      ? _.visitArray(n, h)
                      : P(n)
                      ? _.visitStringMap(n, h)
                      : n == null ||
                        typeof n == 'string' ||
                        typeof n == 'number' ||
                        typeof n == 'boolean'
                      ? _.visitPrimitive(n, h)
                      : _.visitOther(n, h);
                  }
                  e.visitValue = i;
                  function C(n) {
                    return n != null;
                  }
                  e.isDefined = C;
                  function m(n) {
                    return n === void 0 ? null : n;
                  }
                  e.noUndefined = m;
                  var $ = class {
                    visitArray(n, _) {
                      return n.map((h) => i(h, this, _));
                    }
                    visitStringMap(n, _) {
                      let h = {};
                      return (
                        Object.keys(n).forEach((b) => {
                          h[b] = i(n[b], this, _);
                        }),
                        h
                      );
                    }
                    visitPrimitive(n, _) {
                      return n;
                    }
                    visitOther(n, _) {
                      return n;
                    }
                  };
                  (e.ValueTransformer = $),
                    (e.SyncAsync = {
                      assertSync: (n) => {
                        if (B(n))
                          throw new Error(
                            'Illegal state: value cannot be a promise'
                          );
                        return n;
                      },
                      then: (n, _) => (B(n) ? n.then(_) : _(n)),
                      all: (n) => (n.some(B) ? Promise.all(n) : n)
                    });
                  function s(n) {
                    throw new Error(`Internal Error: ${n}`);
                  }
                  e.error = s;
                  function D(n, _) {
                    let h = Error(n);
                    return (h[d] = !0), _ && (h[v] = _), h;
                  }
                  e.syntaxError = D;
                  var d = 'ngSyntaxError',
                    v = 'ngParseErrors';
                  function A(n) {
                    return n[d];
                  }
                  e.isSyntaxError = A;
                  function T(n) {
                    return n[v] || [];
                  }
                  e.getParseErrors = T;
                  function j(n) {
                    return n.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
                  }
                  e.escapeRegExp = j;
                  var Q = Object.getPrototypeOf({});
                  function P(n) {
                    return (
                      typeof n == 'object' &&
                      n !== null &&
                      Object.getPrototypeOf(n) === Q
                    );
                  }
                  function Y(n) {
                    let _ = '';
                    for (let h = 0; h < n.length; h++) {
                      let b = n.charCodeAt(h);
                      if (b >= 55296 && b <= 56319 && n.length > h + 1) {
                        let ne = n.charCodeAt(h + 1);
                        ne >= 56320 &&
                          ne <= 57343 &&
                          (h++, (b = ((b - 55296) << 10) + ne - 56320 + 65536));
                      }
                      b <= 127
                        ? (_ += String.fromCharCode(b))
                        : b <= 2047
                        ? (_ += String.fromCharCode(
                            ((b >> 6) & 31) | 192,
                            (b & 63) | 128
                          ))
                        : b <= 65535
                        ? (_ += String.fromCharCode(
                            (b >> 12) | 224,
                            ((b >> 6) & 63) | 128,
                            (b & 63) | 128
                          ))
                        : b <= 2097151 &&
                          (_ += String.fromCharCode(
                            ((b >> 18) & 7) | 240,
                            ((b >> 12) & 63) | 128,
                            ((b >> 6) & 63) | 128,
                            (b & 63) | 128
                          ));
                    }
                    return _;
                  }
                  e.utf8Encode = Y;
                  function te(n) {
                    if (typeof n == 'string') return n;
                    if (n instanceof Array)
                      return '[' + n.map(te).join(', ') + ']';
                    if (n == null) return '' + n;
                    if (n.overriddenName) return `${n.overriddenName}`;
                    if (n.name) return `${n.name}`;
                    if (!n.toString) return 'object';
                    let _ = n.toString();
                    if (_ == null) return '' + _;
                    let h = _.indexOf(`
`);
                    return h === -1 ? _ : _.substring(0, h);
                  }
                  e.stringify = te;
                  function pe(n) {
                    return typeof n == 'function' &&
                      n.hasOwnProperty('__forward_ref__')
                      ? n()
                      : n;
                  }
                  e.resolveForwardRef = pe;
                  function B(n) {
                    return !!n && typeof n.then == 'function';
                  }
                  e.isPromise = B;
                  var K = class {
                    constructor(n) {
                      this.full = n;
                      let _ = n.split('.');
                      (this.major = _[0]),
                        (this.minor = _[1]),
                        (this.patch = _.slice(2).join('.'));
                    }
                  };
                  e.Version = K;
                  var re = typeof window < 'u' && window,
                    ie =
                      typeof self < 'u' &&
                      typeof WorkerGlobalScope < 'u' &&
                      self instanceof WorkerGlobalScope &&
                      self,
                    le = typeof globalThis < 'u' && globalThis,
                    t = le || re || ie;
                  e.global = t;
                }
              }),
              oe = y({
                'node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = Ge(),
                    a = we(),
                    o = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
                  function l(h) {
                    return h.replace(/\W/g, '_');
                  }
                  e.sanitizeIdentifier = l;
                  var r = 0;
                  function i(h) {
                    if (!h || !h.reference) return null;
                    let b = h.reference;
                    if (b instanceof u.StaticSymbol) return b.name;
                    if (b.__anonymousType) return b.__anonymousType;
                    let ne = a.stringify(b);
                    return (
                      ne.indexOf('(') >= 0
                        ? ((ne = `anonymous_${r++}`), (b.__anonymousType = ne))
                        : (ne = l(ne)),
                      ne
                    );
                  }
                  e.identifierName = i;
                  function C(h) {
                    let b = h.reference;
                    return b instanceof u.StaticSymbol
                      ? b.filePath
                      : `./${a.stringify(b)}`;
                  }
                  e.identifierModuleUrl = C;
                  function m(h, b) {
                    return `View_${i({ reference: h })}_${b}`;
                  }
                  e.viewClassName = m;
                  function $(h) {
                    return `RenderType_${i({ reference: h })}`;
                  }
                  e.rendererTypeName = $;
                  function s(h) {
                    return `HostView_${i({ reference: h })}`;
                  }
                  e.hostViewClassName = s;
                  function D(h) {
                    return `${i({ reference: h })}NgFactory`;
                  }
                  e.componentFactoryName = D;
                  var d;
                  (function (h) {
                    (h[(h.Pipe = 0)] = 'Pipe'),
                      (h[(h.Directive = 1)] = 'Directive'),
                      (h[(h.NgModule = 2)] = 'NgModule'),
                      (h[(h.Injectable = 3)] = 'Injectable');
                  })((d = e.CompileSummaryKind || (e.CompileSummaryKind = {})));
                  function v(h) {
                    return h.value != null ? l(h.value) : i(h.identifier);
                  }
                  e.tokenName = v;
                  function A(h) {
                    return h.identifier != null
                      ? h.identifier.reference
                      : h.value;
                  }
                  e.tokenReference = A;
                  var T = class {
                    constructor() {
                      let {
                        moduleUrl: h,
                        styles: b,
                        styleUrls: ne
                      } = arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {};
                      (this.moduleUrl = h || null),
                        (this.styles = B(b)),
                        (this.styleUrls = B(ne));
                    }
                  };
                  e.CompileStylesheetMetadata = T;
                  var j = class {
                    constructor(h) {
                      let {
                        encapsulation: b,
                        template: ne,
                        templateUrl: De,
                        htmlAst: Te,
                        styles: _e,
                        styleUrls: xe,
                        externalStylesheets: be,
                        animations: Pe,
                        ngContentSelectors: Ie,
                        interpolation: $e,
                        isInline: x,
                        preserveWhitespaces: I
                      } = h;
                      if (
                        ((this.encapsulation = b),
                        (this.template = ne),
                        (this.templateUrl = De),
                        (this.htmlAst = Te),
                        (this.styles = B(_e)),
                        (this.styleUrls = B(xe)),
                        (this.externalStylesheets = B(be)),
                        (this.animations = Pe ? re(Pe) : []),
                        (this.ngContentSelectors = Ie || []),
                        $e && $e.length != 2)
                      )
                        throw new Error(
                          "'interpolation' should have a start and an end symbol."
                        );
                      (this.interpolation = $e),
                        (this.isInline = x),
                        (this.preserveWhitespaces = I);
                    }
                    toSummary() {
                      return {
                        ngContentSelectors: this.ngContentSelectors,
                        encapsulation: this.encapsulation,
                        styles: this.styles,
                        animations: this.animations
                      };
                    }
                  };
                  e.CompileTemplateMetadata = j;
                  var Q = class {
                    static create(h) {
                      let {
                          isHost: b,
                          type: ne,
                          isComponent: De,
                          selector: Te,
                          exportAs: _e,
                          changeDetection: xe,
                          inputs: be,
                          outputs: Pe,
                          host: Ie,
                          providers: $e,
                          viewProviders: x,
                          queries: I,
                          guards: G,
                          viewQueries: H,
                          entryComponents: ae,
                          template: he,
                          componentViewType: ge,
                          rendererType: Ne,
                          componentFactory: Me
                        } = h,
                        it = {},
                        at = {},
                        Jt = {};
                      Ie != null &&
                        Object.keys(Ie).forEach((Le) => {
                          let Ue = Ie[Le],
                            Je = Le.match(o);
                          Je === null
                            ? (Jt[Le] = Ue)
                            : Je[1] != null
                            ? (at[Je[1]] = Ue)
                            : Je[2] != null && (it[Je[2]] = Ue);
                        });
                      let Zt = {};
                      be == null ||
                        be.forEach((Le) => {
                          let Ue = a.splitAtColon(Le, [Le, Le]);
                          Zt[Ue[0]] = Ue[1];
                        });
                      let Kt = {};
                      return (
                        Pe == null ||
                          Pe.forEach((Le) => {
                            let Ue = a.splitAtColon(Le, [Le, Le]);
                            Kt[Ue[0]] = Ue[1];
                          }),
                        new Q({
                          isHost: b,
                          type: ne,
                          isComponent: !!De,
                          selector: Te,
                          exportAs: _e,
                          changeDetection: xe,
                          inputs: Zt,
                          outputs: Kt,
                          hostListeners: it,
                          hostProperties: at,
                          hostAttributes: Jt,
                          providers: $e,
                          viewProviders: x,
                          queries: I,
                          guards: G,
                          viewQueries: H,
                          entryComponents: ae,
                          template: he,
                          componentViewType: ge,
                          rendererType: Ne,
                          componentFactory: Me
                        })
                      );
                    }
                    constructor(h) {
                      let {
                        isHost: b,
                        type: ne,
                        isComponent: De,
                        selector: Te,
                        exportAs: _e,
                        changeDetection: xe,
                        inputs: be,
                        outputs: Pe,
                        hostListeners: Ie,
                        hostProperties: $e,
                        hostAttributes: x,
                        providers: I,
                        viewProviders: G,
                        queries: H,
                        guards: ae,
                        viewQueries: he,
                        entryComponents: ge,
                        template: Ne,
                        componentViewType: Me,
                        rendererType: it,
                        componentFactory: at
                      } = h;
                      (this.isHost = !!b),
                        (this.type = ne),
                        (this.isComponent = De),
                        (this.selector = Te),
                        (this.exportAs = _e),
                        (this.changeDetection = xe),
                        (this.inputs = be),
                        (this.outputs = Pe),
                        (this.hostListeners = Ie),
                        (this.hostProperties = $e),
                        (this.hostAttributes = x),
                        (this.providers = B(I)),
                        (this.viewProviders = B(G)),
                        (this.queries = B(H)),
                        (this.guards = ae),
                        (this.viewQueries = B(he)),
                        (this.entryComponents = B(ge)),
                        (this.template = Ne),
                        (this.componentViewType = Me),
                        (this.rendererType = it),
                        (this.componentFactory = at);
                    }
                    toSummary() {
                      return {
                        summaryKind: d.Directive,
                        type: this.type,
                        isComponent: this.isComponent,
                        selector: this.selector,
                        exportAs: this.exportAs,
                        inputs: this.inputs,
                        outputs: this.outputs,
                        hostListeners: this.hostListeners,
                        hostProperties: this.hostProperties,
                        hostAttributes: this.hostAttributes,
                        providers: this.providers,
                        viewProviders: this.viewProviders,
                        queries: this.queries,
                        guards: this.guards,
                        viewQueries: this.viewQueries,
                        entryComponents: this.entryComponents,
                        changeDetection: this.changeDetection,
                        template: this.template && this.template.toSummary(),
                        componentViewType: this.componentViewType,
                        rendererType: this.rendererType,
                        componentFactory: this.componentFactory
                      };
                    }
                  };
                  e.CompileDirectiveMetadata = Q;
                  var P = class {
                    constructor(h) {
                      let { type: b, name: ne, pure: De } = h;
                      (this.type = b), (this.name = ne), (this.pure = !!De);
                    }
                    toSummary() {
                      return {
                        summaryKind: d.Pipe,
                        type: this.type,
                        name: this.name,
                        pure: this.pure
                      };
                    }
                  };
                  e.CompilePipeMetadata = P;
                  var Y = class {};
                  e.CompileShallowModuleMetadata = Y;
                  var te = class {
                    constructor(h) {
                      let {
                        type: b,
                        providers: ne,
                        declaredDirectives: De,
                        exportedDirectives: Te,
                        declaredPipes: _e,
                        exportedPipes: xe,
                        entryComponents: be,
                        bootstrapComponents: Pe,
                        importedModules: Ie,
                        exportedModules: $e,
                        schemas: x,
                        transitiveModule: I,
                        id: G
                      } = h;
                      (this.type = b || null),
                        (this.declaredDirectives = B(De)),
                        (this.exportedDirectives = B(Te)),
                        (this.declaredPipes = B(_e)),
                        (this.exportedPipes = B(xe)),
                        (this.providers = B(ne)),
                        (this.entryComponents = B(be)),
                        (this.bootstrapComponents = B(Pe)),
                        (this.importedModules = B(Ie)),
                        (this.exportedModules = B($e)),
                        (this.schemas = B(x)),
                        (this.id = G || null),
                        (this.transitiveModule = I || null);
                    }
                    toSummary() {
                      let h = this.transitiveModule;
                      return {
                        summaryKind: d.NgModule,
                        type: this.type,
                        entryComponents: h.entryComponents,
                        providers: h.providers,
                        modules: h.modules,
                        exportedDirectives: h.exportedDirectives,
                        exportedPipes: h.exportedPipes
                      };
                    }
                  };
                  e.CompileNgModuleMetadata = te;
                  var pe = class {
                    constructor() {
                      (this.directivesSet = new Set()),
                        (this.directives = []),
                        (this.exportedDirectivesSet = new Set()),
                        (this.exportedDirectives = []),
                        (this.pipesSet = new Set()),
                        (this.pipes = []),
                        (this.exportedPipesSet = new Set()),
                        (this.exportedPipes = []),
                        (this.modulesSet = new Set()),
                        (this.modules = []),
                        (this.entryComponentsSet = new Set()),
                        (this.entryComponents = []),
                        (this.providers = []);
                    }
                    addProvider(h, b) {
                      this.providers.push({ provider: h, module: b });
                    }
                    addDirective(h) {
                      this.directivesSet.has(h.reference) ||
                        (this.directivesSet.add(h.reference),
                        this.directives.push(h));
                    }
                    addExportedDirective(h) {
                      this.exportedDirectivesSet.has(h.reference) ||
                        (this.exportedDirectivesSet.add(h.reference),
                        this.exportedDirectives.push(h));
                    }
                    addPipe(h) {
                      this.pipesSet.has(h.reference) ||
                        (this.pipesSet.add(h.reference), this.pipes.push(h));
                    }
                    addExportedPipe(h) {
                      this.exportedPipesSet.has(h.reference) ||
                        (this.exportedPipesSet.add(h.reference),
                        this.exportedPipes.push(h));
                    }
                    addModule(h) {
                      this.modulesSet.has(h.reference) ||
                        (this.modulesSet.add(h.reference),
                        this.modules.push(h));
                    }
                    addEntryComponent(h) {
                      this.entryComponentsSet.has(h.componentType) ||
                        (this.entryComponentsSet.add(h.componentType),
                        this.entryComponents.push(h));
                    }
                  };
                  e.TransitiveCompileNgModuleMetadata = pe;
                  function B(h) {
                    return h || [];
                  }
                  var K = class {
                    constructor(h, b) {
                      let {
                        useClass: ne,
                        useValue: De,
                        useExisting: Te,
                        useFactory: _e,
                        deps: xe,
                        multi: be
                      } = b;
                      (this.token = h),
                        (this.useClass = ne || null),
                        (this.useValue = De),
                        (this.useExisting = Te),
                        (this.useFactory = _e || null),
                        (this.dependencies = xe || null),
                        (this.multi = !!be);
                    }
                  };
                  e.ProviderMeta = K;
                  function re(h) {
                    return h.reduce((b, ne) => {
                      let De = Array.isArray(ne) ? re(ne) : ne;
                      return b.concat(De);
                    }, []);
                  }
                  e.flatten = re;
                  function ie(h) {
                    return h.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, 'ng:///');
                  }
                  function le(h, b, ne) {
                    let De;
                    return (
                      ne.isInline
                        ? b.type.reference instanceof u.StaticSymbol
                          ? (De = `${b.type.reference.filePath}.${b.type.reference.name}.html`)
                          : (De = `${i(h)}/${i(b.type)}.html`)
                        : (De = ne.templateUrl),
                      b.type.reference instanceof u.StaticSymbol ? De : ie(De)
                    );
                  }
                  e.templateSourceUrl = le;
                  function t(h, b) {
                    let ne = h.moduleUrl.split(/\/\\/g),
                      De = ne[ne.length - 1];
                    return ie(`css/${b}${De}.ngstyle.js`);
                  }
                  e.sharedStylesheetJitUrl = t;
                  function n(h) {
                    return ie(`${i(h.type)}/module.ngfactory.js`);
                  }
                  e.ngModuleJitUrl = n;
                  function _(h, b) {
                    return ie(`${i(h)}/${i(b.type)}.ngfactory.js`);
                  }
                  e.templateJitUrl = _;
                }
              }),
              Fe = y({
                'node_modules/angular-html-parser/lib/compiler/src/parse_util.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = ke(),
                    a = oe(),
                    o = class {
                      constructor(s, D, d, v) {
                        (this.file = s),
                          (this.offset = D),
                          (this.line = d),
                          (this.col = v);
                      }
                      toString() {
                        return this.offset != null
                          ? `${this.file.url}@${this.line}:${this.col}`
                          : this.file.url;
                      }
                      moveBy(s) {
                        let D = this.file.content,
                          d = D.length,
                          v = this.offset,
                          A = this.line,
                          T = this.col;
                        for (; v > 0 && s < 0; )
                          if ((v--, s++, D.charCodeAt(v) == u.$LF)) {
                            A--;
                            let j = D.substr(0, v - 1).lastIndexOf(
                              String.fromCharCode(u.$LF)
                            );
                            T = j > 0 ? v - j : v;
                          } else T--;
                        for (; v < d && s > 0; ) {
                          let j = D.charCodeAt(v);
                          v++, s--, j == u.$LF ? (A++, (T = 0)) : T++;
                        }
                        return new o(this.file, v, A, T);
                      }
                      getContext(s, D) {
                        let d = this.file.content,
                          v = this.offset;
                        if (v != null) {
                          v > d.length - 1 && (v = d.length - 1);
                          let A = v,
                            T = 0,
                            j = 0;
                          for (
                            ;
                            T < s &&
                            v > 0 &&
                            (v--,
                            T++,
                            !(
                              d[v] ==
                                `
` && ++j == D
                            ));

                          );
                          for (
                            T = 0, j = 0;
                            T < s &&
                            A < d.length - 1 &&
                            (A++,
                            T++,
                            !(
                              d[A] ==
                                `
` && ++j == D
                            ));

                          );
                          return {
                            before: d.substring(v, this.offset),
                            after: d.substring(this.offset, A + 1)
                          };
                        }
                        return null;
                      }
                    };
                  e.ParseLocation = o;
                  var l = class {
                    constructor(s, D) {
                      (this.content = s), (this.url = D);
                    }
                  };
                  e.ParseSourceFile = l;
                  var r = class {
                    constructor(s, D) {
                      let d =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : null;
                      (this.start = s), (this.end = D), (this.details = d);
                    }
                    toString() {
                      return this.start.file.content.substring(
                        this.start.offset,
                        this.end.offset
                      );
                    }
                  };
                  (e.ParseSourceSpan = r),
                    (e.EMPTY_PARSE_LOCATION = new o(new l('', ''), 0, 0, 0)),
                    (e.EMPTY_SOURCE_SPAN = new r(
                      e.EMPTY_PARSE_LOCATION,
                      e.EMPTY_PARSE_LOCATION
                    ));
                  var i;
                  (function (s) {
                    (s[(s.WARNING = 0)] = 'WARNING'),
                      (s[(s.ERROR = 1)] = 'ERROR');
                  })((i = e.ParseErrorLevel || (e.ParseErrorLevel = {})));
                  var C = class {
                    constructor(s, D) {
                      let d =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : i.ERROR;
                      (this.span = s), (this.msg = D), (this.level = d);
                    }
                    contextualMessage() {
                      let s = this.span.start.getContext(100, 3);
                      return s
                        ? `${this.msg} ("${s.before}[${i[this.level]} ->]${
                            s.after
                          }")`
                        : this.msg;
                    }
                    toString() {
                      let s = this.span.details ? `, ${this.span.details}` : '';
                      return `${this.contextualMessage()}: ${
                        this.span.start
                      }${s}`;
                    }
                  };
                  e.ParseError = C;
                  function m(s, D) {
                    let d = a.identifierModuleUrl(D),
                      v =
                        d != null
                          ? `in ${s} ${a.identifierName(D)} in ${d}`
                          : `in ${s} ${a.identifierName(D)}`,
                      A = new l('', v);
                    return new r(new o(A, -1, -1, -1), new o(A, -1, -1, -1));
                  }
                  e.typeSourceSpan = m;
                  function $(s, D, d) {
                    let v = `in ${s} ${D} in ${d}`,
                      A = new l('', v);
                    return new r(new o(A, -1, -1, -1), new o(A, -1, -1, -1));
                  }
                  e.r3JitTypeSourceSpan = $;
                }
              }),
              je = y({
                'src/utils/front-matter/parse.js'(e, u) {
                  U();
                  var a = new RegExp(
                    '^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)',
                    's'
                  );
                  function o(l) {
                    let r = l.match(a);
                    if (!r) return { content: l };
                    let {
                        startDelimiter: i,
                        language: C,
                        value: m = '',
                        endDelimiter: $
                      } = r.groups,
                      s = C.trim() || 'yaml';
                    if ((i === '+++' && (s = 'toml'), s !== 'yaml' && i !== $))
                      return { content: l };
                    let [D] = r;
                    return {
                      frontMatter: {
                        type: 'front-matter',
                        lang: s,
                        value: m,
                        startDelimiter: i,
                        endDelimiter: $,
                        raw: D.replace(/\n$/, '')
                      },
                      content: D.replace(/[^\n]/g, ' ') + l.slice(D.length)
                    };
                  }
                  u.exports = o;
                }
              }),
              We = y({
                'src/utils/get-last.js'(e, u) {
                  U();
                  var a = (o) => o[o.length - 1];
                  u.exports = a;
                }
              }),
              Re = y({
                'src/common/parser-create-error.js'(e, u) {
                  U();
                  function a(o, l) {
                    let r = new SyntaxError(
                      o + ' (' + l.start.line + ':' + l.start.column + ')'
                    );
                    return (r.loc = l), r;
                  }
                  u.exports = a;
                }
              }),
              Ye = {};
            z(Ye, { default: () => tt });
            function tt(e) {
              if (typeof e != 'string')
                throw new TypeError('Expected a string');
              return e
                .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
                .replace(/-/g, '\\x2d');
            }
            var ut = V({
                'node_modules/escape-string-regexp/index.js'() {
                  U();
                }
              }),
              Qe = y({
                'node_modules/semver/internal/debug.js'(e, u) {
                  U();
                  var a =
                    typeof ce == 'object' &&
                    ce.env &&
                    ce.env.NODE_DEBUG &&
                    /\bsemver\b/i.test(ce.env.NODE_DEBUG)
                      ? function () {
                          for (
                            var o = arguments.length, l = new Array(o), r = 0;
                            r < o;
                            r++
                          )
                            l[r] = arguments[r];
                          return console.error('SEMVER', ...l);
                        }
                      : () => {};
                  u.exports = a;
                }
              }),
              Be = y({
                'node_modules/semver/internal/constants.js'(e, u) {
                  U();
                  var a = '2.0.0',
                    o = 256,
                    l = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    r = 16;
                  u.exports = {
                    SEMVER_SPEC_VERSION: a,
                    MAX_LENGTH: o,
                    MAX_SAFE_INTEGER: l,
                    MAX_SAFE_COMPONENT_LENGTH: r
                  };
                }
              }),
              Hu = y({
                'node_modules/semver/internal/re.js'(e, u) {
                  U();
                  var { MAX_SAFE_COMPONENT_LENGTH: a } = Be(),
                    o = Qe();
                  e = u.exports = {};
                  var l = (e.re = []),
                    r = (e.src = []),
                    i = (e.t = {}),
                    C = 0,
                    m = ($, s, D) => {
                      let d = C++;
                      o($, d, s),
                        (i[$] = d),
                        (r[d] = s),
                        (l[d] = new RegExp(s, D ? 'g' : void 0));
                    };
                  m('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
                    m('NUMERICIDENTIFIERLOOSE', '[0-9]+'),
                    m('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'),
                    m(
                      'MAINVERSION',
                      `(${r[i.NUMERICIDENTIFIER]})\\.(${
                        r[i.NUMERICIDENTIFIER]
                      })\\.(${r[i.NUMERICIDENTIFIER]})`
                    ),
                    m(
                      'MAINVERSIONLOOSE',
                      `(${r[i.NUMERICIDENTIFIERLOOSE]})\\.(${
                        r[i.NUMERICIDENTIFIERLOOSE]
                      })\\.(${r[i.NUMERICIDENTIFIERLOOSE]})`
                    ),
                    m(
                      'PRERELEASEIDENTIFIER',
                      `(?:${r[i.NUMERICIDENTIFIER]}|${
                        r[i.NONNUMERICIDENTIFIER]
                      })`
                    ),
                    m(
                      'PRERELEASEIDENTIFIERLOOSE',
                      `(?:${r[i.NUMERICIDENTIFIERLOOSE]}|${
                        r[i.NONNUMERICIDENTIFIER]
                      })`
                    ),
                    m(
                      'PRERELEASE',
                      `(?:-(${r[i.PRERELEASEIDENTIFIER]}(?:\\.${
                        r[i.PRERELEASEIDENTIFIER]
                      })*))`
                    ),
                    m(
                      'PRERELEASELOOSE',
                      `(?:-?(${r[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
                        r[i.PRERELEASEIDENTIFIERLOOSE]
                      })*))`
                    ),
                    m('BUILDIDENTIFIER', '[0-9A-Za-z-]+'),
                    m(
                      'BUILD',
                      `(?:\\+(${r[i.BUILDIDENTIFIER]}(?:\\.${
                        r[i.BUILDIDENTIFIER]
                      })*))`
                    ),
                    m(
                      'FULLPLAIN',
                      `v?${r[i.MAINVERSION]}${r[i.PRERELEASE]}?${r[i.BUILD]}?`
                    ),
                    m('FULL', `^${r[i.FULLPLAIN]}$`),
                    m(
                      'LOOSEPLAIN',
                      `[v=\\s]*${r[i.MAINVERSIONLOOSE]}${
                        r[i.PRERELEASELOOSE]
                      }?${r[i.BUILD]}?`
                    ),
                    m('LOOSE', `^${r[i.LOOSEPLAIN]}$`),
                    m('GTLT', '((?:<|>)?=?)'),
                    m(
                      'XRANGEIDENTIFIERLOOSE',
                      `${r[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`
                    ),
                    m('XRANGEIDENTIFIER', `${r[i.NUMERICIDENTIFIER]}|x|X|\\*`),
                    m(
                      'XRANGEPLAIN',
                      `[v=\\s]*(${r[i.XRANGEIDENTIFIER]})(?:\\.(${
                        r[i.XRANGEIDENTIFIER]
                      })(?:\\.(${r[i.XRANGEIDENTIFIER]})(?:${
                        r[i.PRERELEASE]
                      })?${r[i.BUILD]}?)?)?`
                    ),
                    m(
                      'XRANGEPLAINLOOSE',
                      `[v=\\s]*(${r[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
                        r[i.XRANGEIDENTIFIERLOOSE]
                      })(?:\\.(${r[i.XRANGEIDENTIFIERLOOSE]})(?:${
                        r[i.PRERELEASELOOSE]
                      })?${r[i.BUILD]}?)?)?`
                    ),
                    m('XRANGE', `^${r[i.GTLT]}\\s*${r[i.XRANGEPLAIN]}$`),
                    m(
                      'XRANGELOOSE',
                      `^${r[i.GTLT]}\\s*${r[i.XRANGEPLAINLOOSE]}$`
                    ),
                    m(
                      'COERCE',
                      `(^|[^\\d])(\\d{1,${a}})(?:\\.(\\d{1,${a}}))?(?:\\.(\\d{1,${a}}))?(?:$|[^\\d])`
                    ),
                    m('COERCERTL', r[i.COERCE], !0),
                    m('LONETILDE', '(?:~>?)'),
                    m('TILDETRIM', `(\\s*)${r[i.LONETILDE]}\\s+`, !0),
                    (e.tildeTrimReplace = '$1~'),
                    m('TILDE', `^${r[i.LONETILDE]}${r[i.XRANGEPLAIN]}$`),
                    m(
                      'TILDELOOSE',
                      `^${r[i.LONETILDE]}${r[i.XRANGEPLAINLOOSE]}$`
                    ),
                    m('LONECARET', '(?:\\^)'),
                    m('CARETTRIM', `(\\s*)${r[i.LONECARET]}\\s+`, !0),
                    (e.caretTrimReplace = '$1^'),
                    m('CARET', `^${r[i.LONECARET]}${r[i.XRANGEPLAIN]}$`),
                    m(
                      'CARETLOOSE',
                      `^${r[i.LONECARET]}${r[i.XRANGEPLAINLOOSE]}$`
                    ),
                    m(
                      'COMPARATORLOOSE',
                      `^${r[i.GTLT]}\\s*(${r[i.LOOSEPLAIN]})$|^$`
                    ),
                    m('COMPARATOR', `^${r[i.GTLT]}\\s*(${r[i.FULLPLAIN]})$|^$`),
                    m(
                      'COMPARATORTRIM',
                      `(\\s*)${r[i.GTLT]}\\s*(${r[i.LOOSEPLAIN]}|${
                        r[i.XRANGEPLAIN]
                      })`,
                      !0
                    ),
                    (e.comparatorTrimReplace = '$1$2$3'),
                    m(
                      'HYPHENRANGE',
                      `^\\s*(${r[i.XRANGEPLAIN]})\\s+-\\s+(${
                        r[i.XRANGEPLAIN]
                      })\\s*$`
                    ),
                    m(
                      'HYPHENRANGELOOSE',
                      `^\\s*(${r[i.XRANGEPLAINLOOSE]})\\s+-\\s+(${
                        r[i.XRANGEPLAINLOOSE]
                      })\\s*$`
                    ),
                    m('STAR', '(<|>)?=?\\s*\\*'),
                    m('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
                    m('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
                }
              }),
              zu = y({
                'node_modules/semver/internal/parse-options.js'(e, u) {
                  U();
                  var a = ['includePrerelease', 'loose', 'rtl'],
                    o = (l) =>
                      l
                        ? typeof l != 'object'
                          ? { loose: !0 }
                          : a
                              .filter((r) => l[r])
                              .reduce((r, i) => ((r[i] = !0), r), {})
                        : {};
                  u.exports = o;
                }
              }),
              Wu = y({
                'node_modules/semver/internal/identifiers.js'(e, u) {
                  U();
                  var a = /^[0-9]+$/,
                    o = (r, i) => {
                      let C = a.test(r),
                        m = a.test(i);
                      return (
                        C && m && ((r = +r), (i = +i)),
                        r === i
                          ? 0
                          : C && !m
                          ? -1
                          : m && !C
                          ? 1
                          : r < i
                          ? -1
                          : 1
                      );
                    },
                    l = (r, i) => o(i, r);
                  u.exports = { compareIdentifiers: o, rcompareIdentifiers: l };
                }
              }),
              Yu = y({
                'node_modules/semver/classes/semver.js'(e, u) {
                  U();
                  var a = Qe(),
                    { MAX_LENGTH: o, MAX_SAFE_INTEGER: l } = Be(),
                    { re: r, t: i } = Hu(),
                    C = zu(),
                    { compareIdentifiers: m } = Wu(),
                    $ = class {
                      constructor(s, D) {
                        if (((D = C(D)), s instanceof $)) {
                          if (
                            s.loose === !!D.loose &&
                            s.includePrerelease === !!D.includePrerelease
                          )
                            return s;
                          s = s.version;
                        } else if (typeof s != 'string')
                          throw new TypeError(`Invalid Version: ${s}`);
                        if (s.length > o)
                          throw new TypeError(
                            `version is longer than ${o} characters`
                          );
                        a('SemVer', s, D),
                          (this.options = D),
                          (this.loose = !!D.loose),
                          (this.includePrerelease = !!D.includePrerelease);
                        let d = s
                          .trim()
                          .match(D.loose ? r[i.LOOSE] : r[i.FULL]);
                        if (!d) throw new TypeError(`Invalid Version: ${s}`);
                        if (
                          ((this.raw = s),
                          (this.major = +d[1]),
                          (this.minor = +d[2]),
                          (this.patch = +d[3]),
                          this.major > l || this.major < 0)
                        )
                          throw new TypeError('Invalid major version');
                        if (this.minor > l || this.minor < 0)
                          throw new TypeError('Invalid minor version');
                        if (this.patch > l || this.patch < 0)
                          throw new TypeError('Invalid patch version');
                        d[4]
                          ? (this.prerelease = d[4].split('.').map((v) => {
                              if (/^[0-9]+$/.test(v)) {
                                let A = +v;
                                if (A >= 0 && A < l) return A;
                              }
                              return v;
                            }))
                          : (this.prerelease = []),
                          (this.build = d[5] ? d[5].split('.') : []),
                          this.format();
                      }
                      format() {
                        return (
                          (this.version = `${this.major}.${this.minor}.${this.patch}`),
                          this.prerelease.length &&
                            (this.version += `-${this.prerelease.join('.')}`),
                          this.version
                        );
                      }
                      toString() {
                        return this.version;
                      }
                      compare(s) {
                        if (
                          (a('SemVer.compare', this.version, this.options, s),
                          !(s instanceof $))
                        ) {
                          if (typeof s == 'string' && s === this.version)
                            return 0;
                          s = new $(s, this.options);
                        }
                        return s.version === this.version
                          ? 0
                          : this.compareMain(s) || this.comparePre(s);
                      }
                      compareMain(s) {
                        return (
                          s instanceof $ || (s = new $(s, this.options)),
                          m(this.major, s.major) ||
                            m(this.minor, s.minor) ||
                            m(this.patch, s.patch)
                        );
                      }
                      comparePre(s) {
                        if (
                          (s instanceof $ || (s = new $(s, this.options)),
                          this.prerelease.length && !s.prerelease.length)
                        )
                          return -1;
                        if (!this.prerelease.length && s.prerelease.length)
                          return 1;
                        if (!this.prerelease.length && !s.prerelease.length)
                          return 0;
                        let D = 0;
                        do {
                          let d = this.prerelease[D],
                            v = s.prerelease[D];
                          if (
                            (a('prerelease compare', D, d, v),
                            d === void 0 && v === void 0)
                          )
                            return 0;
                          if (v === void 0) return 1;
                          if (d === void 0) return -1;
                          if (d !== v) return m(d, v);
                        } while (++D);
                      }
                      compareBuild(s) {
                        s instanceof $ || (s = new $(s, this.options));
                        let D = 0;
                        do {
                          let d = this.build[D],
                            v = s.build[D];
                          if (
                            (a('prerelease compare', D, d, v),
                            d === void 0 && v === void 0)
                          )
                            return 0;
                          if (v === void 0) return 1;
                          if (d === void 0) return -1;
                          if (d !== v) return m(d, v);
                        } while (++D);
                      }
                      inc(s, D) {
                        switch (s) {
                          case 'premajor':
                            (this.prerelease.length = 0),
                              (this.patch = 0),
                              (this.minor = 0),
                              this.major++,
                              this.inc('pre', D);
                            break;
                          case 'preminor':
                            (this.prerelease.length = 0),
                              (this.patch = 0),
                              this.minor++,
                              this.inc('pre', D);
                            break;
                          case 'prepatch':
                            (this.prerelease.length = 0),
                              this.inc('patch', D),
                              this.inc('pre', D);
                            break;
                          case 'prerelease':
                            this.prerelease.length === 0 &&
                              this.inc('patch', D),
                              this.inc('pre', D);
                            break;
                          case 'major':
                            (this.minor !== 0 ||
                              this.patch !== 0 ||
                              this.prerelease.length === 0) &&
                              this.major++,
                              (this.minor = 0),
                              (this.patch = 0),
                              (this.prerelease = []);
                            break;
                          case 'minor':
                            (this.patch !== 0 ||
                              this.prerelease.length === 0) &&
                              this.minor++,
                              (this.patch = 0),
                              (this.prerelease = []);
                            break;
                          case 'patch':
                            this.prerelease.length === 0 && this.patch++,
                              (this.prerelease = []);
                            break;
                          case 'pre':
                            if (this.prerelease.length === 0)
                              this.prerelease = [0];
                            else {
                              let d = this.prerelease.length;
                              for (; --d >= 0; )
                                typeof this.prerelease[d] == 'number' &&
                                  (this.prerelease[d]++, (d = -2));
                              d === -1 && this.prerelease.push(0);
                            }
                            D &&
                              (m(this.prerelease[0], D) === 0
                                ? isNaN(this.prerelease[1]) &&
                                  (this.prerelease = [D, 0])
                                : (this.prerelease = [D, 0]));
                            break;
                          default:
                            throw new Error(`invalid increment argument: ${s}`);
                        }
                        return this.format(), (this.raw = this.version), this;
                      }
                    };
                  u.exports = $;
                }
              }),
              gt = y({
                'node_modules/semver/functions/compare.js'(e, u) {
                  U();
                  var a = Yu(),
                    o = (l, r, i) => new a(l, i).compare(new a(r, i));
                  u.exports = o;
                }
              }),
              Qu = y({
                'node_modules/semver/functions/lt.js'(e, u) {
                  U();
                  var a = gt(),
                    o = (l, r, i) => a(l, r, i) < 0;
                  u.exports = o;
                }
              }),
              Ju = y({
                'node_modules/semver/functions/gte.js'(e, u) {
                  U();
                  var a = gt(),
                    o = (l, r, i) => a(l, r, i) >= 0;
                  u.exports = o;
                }
              }),
              Zu = y({
                'src/utils/arrayify.js'(e, u) {
                  U(),
                    (u.exports = (a, o) =>
                      Object.entries(a).map((l) => {
                        let [r, i] = l;
                        return Object.assign({ [o]: r }, i);
                      }));
                }
              }),
              Ku = y({
                'package.json'(e, u) {
                  u.exports = { version: '2.8.0' };
                }
              }),
              er = y({
                'node_modules/outdent/lib/index.js'(e, u) {
                  U(),
                    Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.outdent = void 0);
                  function a() {
                    for (var P = [], Y = 0; Y < arguments.length; Y++)
                      P[Y] = arguments[Y];
                  }
                  function o() {
                    return typeof WeakMap < 'u' ? new WeakMap() : l();
                  }
                  function l() {
                    return {
                      add: a,
                      delete: a,
                      get: a,
                      set: a,
                      has: function (P) {
                        return !1;
                      }
                    };
                  }
                  var r = Object.prototype.hasOwnProperty,
                    i = function (P, Y) {
                      return r.call(P, Y);
                    };
                  function C(P, Y) {
                    for (var te in Y) i(Y, te) && (P[te] = Y[te]);
                    return P;
                  }
                  var m = /^[ \t]*(?:\r\n|\r|\n)/,
                    $ = /(?:\r\n|\r|\n)[ \t]*$/,
                    s = /^(?:[\r\n]|$)/,
                    D = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
                    d = /^[ \t]*[\r\n][ \t\r\n]*$/;
                  function v(P, Y, te) {
                    var pe = 0,
                      B = P[0].match(D);
                    B && (pe = B[1].length);
                    var K = '(\\r\\n|\\r|\\n).{0,' + pe + '}',
                      re = new RegExp(K, 'g');
                    Y && (P = P.slice(1));
                    var ie = te.newline,
                      le = te.trimLeadingNewline,
                      t = te.trimTrailingNewline,
                      n = typeof ie == 'string',
                      _ = P.length,
                      h = P.map(function (b, ne) {
                        return (
                          (b = b.replace(re, '$1')),
                          ne === 0 && le && (b = b.replace(m, '')),
                          ne === _ - 1 && t && (b = b.replace($, '')),
                          n &&
                            (b = b.replace(/\r\n|\n|\r/g, function (De) {
                              return ie;
                            })),
                          b
                        );
                      });
                    return h;
                  }
                  function A(P, Y) {
                    for (var te = '', pe = 0, B = P.length; pe < B; pe++)
                      (te += P[pe]), pe < B - 1 && (te += Y[pe]);
                    return te;
                  }
                  function T(P) {
                    return i(P, 'raw') && i(P, 'length');
                  }
                  function j(P) {
                    var Y = o(),
                      te = o();
                    function pe(K) {
                      for (var re = [], ie = 1; ie < arguments.length; ie++)
                        re[ie - 1] = arguments[ie];
                      if (T(K)) {
                        var le = K,
                          t =
                            (re[0] === pe || re[0] === Q) &&
                            d.test(le[0]) &&
                            s.test(le[1]),
                          n = t ? te : Y,
                          _ = n.get(le);
                        if (
                          (_ || ((_ = v(le, t, P)), n.set(le, _)),
                          re.length === 0)
                        )
                          return _[0];
                        var h = A(_, t ? re.slice(1) : re);
                        return h;
                      } else return j(C(C({}, P), K || {}));
                    }
                    var B = C(pe, {
                      string: function (K) {
                        return v([K], !1, P)[0];
                      }
                    });
                    return B;
                  }
                  var Q = j({
                    trimLeadingNewline: !0,
                    trimTrailingNewline: !0
                  });
                  if (((e.outdent = Q), (e.default = Q), typeof u < 'u'))
                    try {
                      (u.exports = Q),
                        Object.defineProperty(Q, '__esModule', { value: !0 }),
                        (Q.default = Q),
                        (Q.outdent = Q);
                    } catch {}
                }
              }),
              tr = y({
                'src/main/core-options.js'(e, u) {
                  U();
                  var { outdent: a } = er(),
                    o = 'Config',
                    l = 'Editor',
                    r = 'Format',
                    i = 'Other',
                    C = 'Output',
                    m = 'Global',
                    $ = 'Special',
                    s = {
                      cursorOffset: {
                        since: '1.4.0',
                        category: $,
                        type: 'int',
                        default: -1,
                        range: {
                          start: -1,
                          end: Number.POSITIVE_INFINITY,
                          step: 1
                        },
                        description: a`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `,
                        cliCategory: l
                      },
                      endOfLine: {
                        since: '1.15.0',
                        category: m,
                        type: 'choice',
                        default: [
                          { since: '1.15.0', value: 'auto' },
                          { since: '2.0.0', value: 'lf' }
                        ],
                        description: 'Which end of line characters to apply.',
                        choices: [
                          {
                            value: 'lf',
                            description:
                              'Line Feed only (\\n), common on Linux and macOS as well as inside git repos'
                          },
                          {
                            value: 'crlf',
                            description:
                              'Carriage Return + Line Feed characters (\\r\\n), common on Windows'
                          },
                          {
                            value: 'cr',
                            description:
                              'Carriage Return character only (\\r), used very rarely'
                          },
                          {
                            value: 'auto',
                            description: a`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        `
                          }
                        ]
                      },
                      filepath: {
                        since: '1.4.0',
                        category: $,
                        type: 'path',
                        description:
                          'Specify the input filepath. This will be used to do parser inference.',
                        cliName: 'stdin-filepath',
                        cliCategory: i,
                        cliDescription:
                          'Path to the file to pretend that stdin comes from.'
                      },
                      insertPragma: {
                        since: '1.8.0',
                        category: $,
                        type: 'boolean',
                        default: !1,
                        description:
                          "Insert @format pragma into file's first docblock comment.",
                        cliCategory: i
                      },
                      parser: {
                        since: '0.0.10',
                        category: m,
                        type: 'choice',
                        default: [
                          { since: '0.0.10', value: 'babylon' },
                          { since: '1.13.0', value: void 0 }
                        ],
                        description: 'Which parser to use.',
                        exception: (D) =>
                          typeof D == 'string' || typeof D == 'function',
                        choices: [
                          { value: 'flow', description: 'Flow' },
                          {
                            value: 'babel',
                            since: '1.16.0',
                            description: 'JavaScript'
                          },
                          {
                            value: 'babel-flow',
                            since: '1.16.0',
                            description: 'Flow'
                          },
                          {
                            value: 'babel-ts',
                            since: '2.0.0',
                            description: 'TypeScript'
                          },
                          {
                            value: 'typescript',
                            since: '1.4.0',
                            description: 'TypeScript'
                          },
                          {
                            value: 'acorn',
                            since: '2.6.0',
                            description: 'JavaScript'
                          },
                          {
                            value: 'espree',
                            since: '2.2.0',
                            description: 'JavaScript'
                          },
                          {
                            value: 'meriyah',
                            since: '2.2.0',
                            description: 'JavaScript'
                          },
                          { value: 'css', since: '1.7.1', description: 'CSS' },
                          {
                            value: 'less',
                            since: '1.7.1',
                            description: 'Less'
                          },
                          {
                            value: 'scss',
                            since: '1.7.1',
                            description: 'SCSS'
                          },
                          {
                            value: 'json',
                            since: '1.5.0',
                            description: 'JSON'
                          },
                          {
                            value: 'json5',
                            since: '1.13.0',
                            description: 'JSON5'
                          },
                          {
                            value: 'json-stringify',
                            since: '1.13.0',
                            description: 'JSON.stringify'
                          },
                          {
                            value: 'graphql',
                            since: '1.5.0',
                            description: 'GraphQL'
                          },
                          {
                            value: 'markdown',
                            since: '1.8.0',
                            description: 'Markdown'
                          },
                          { value: 'mdx', since: '1.15.0', description: 'MDX' },
                          { value: 'vue', since: '1.10.0', description: 'Vue' },
                          {
                            value: 'yaml',
                            since: '1.14.0',
                            description: 'YAML'
                          },
                          {
                            value: 'glimmer',
                            since: '2.3.0',
                            description: 'Ember / Handlebars'
                          },
                          {
                            value: 'html',
                            since: '1.15.0',
                            description: 'HTML'
                          },
                          {
                            value: 'angular',
                            since: '1.15.0',
                            description: 'Angular'
                          },
                          {
                            value: 'lwc',
                            since: '1.17.0',
                            description: 'Lightning Web Components'
                          }
                        ]
                      },
                      plugins: {
                        since: '1.10.0',
                        type: 'path',
                        array: !0,
                        default: [{ value: [] }],
                        category: m,
                        description:
                          'Add a plugin. Multiple plugins can be passed as separate `--plugin`s.',
                        exception: (D) =>
                          typeof D == 'string' || typeof D == 'object',
                        cliName: 'plugin',
                        cliCategory: o
                      },
                      pluginSearchDirs: {
                        since: '1.13.0',
                        type: 'path',
                        array: !0,
                        default: [{ value: [] }],
                        category: m,
                        description: a`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `,
                        exception: (D) =>
                          typeof D == 'string' || typeof D == 'object',
                        cliName: 'plugin-search-dir',
                        cliCategory: o
                      },
                      printWidth: {
                        since: '0.0.0',
                        category: m,
                        type: 'int',
                        default: 80,
                        description:
                          'The line length where Prettier will try wrap.',
                        range: {
                          start: 0,
                          end: Number.POSITIVE_INFINITY,
                          step: 1
                        }
                      },
                      rangeEnd: {
                        since: '1.4.0',
                        category: $,
                        type: 'int',
                        default: Number.POSITIVE_INFINITY,
                        range: {
                          start: 0,
                          end: Number.POSITIVE_INFINITY,
                          step: 1
                        },
                        description: a`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `,
                        cliCategory: l
                      },
                      rangeStart: {
                        since: '1.4.0',
                        category: $,
                        type: 'int',
                        default: 0,
                        range: {
                          start: 0,
                          end: Number.POSITIVE_INFINITY,
                          step: 1
                        },
                        description: a`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `,
                        cliCategory: l
                      },
                      requirePragma: {
                        since: '1.7.0',
                        category: $,
                        type: 'boolean',
                        default: !1,
                        description: a`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `,
                        cliCategory: i
                      },
                      tabWidth: {
                        type: 'int',
                        category: m,
                        default: 2,
                        description: 'Number of spaces per indentation level.',
                        range: {
                          start: 0,
                          end: Number.POSITIVE_INFINITY,
                          step: 1
                        }
                      },
                      useTabs: {
                        since: '1.0.0',
                        category: m,
                        type: 'boolean',
                        default: !1,
                        description: 'Indent with tabs instead of spaces.'
                      },
                      embeddedLanguageFormatting: {
                        since: '2.1.0',
                        category: m,
                        type: 'choice',
                        default: [{ since: '2.1.0', value: 'auto' }],
                        description:
                          'Control how Prettier formats quoted code embedded in the file.',
                        choices: [
                          {
                            value: 'auto',
                            description:
                              'Format embedded code if Prettier can automatically identify it.'
                          },
                          {
                            value: 'off',
                            description:
                              'Never automatically format embedded code.'
                          }
                        ]
                      }
                    };
                  u.exports = {
                    CATEGORY_CONFIG: o,
                    CATEGORY_EDITOR: l,
                    CATEGORY_FORMAT: r,
                    CATEGORY_OTHER: i,
                    CATEGORY_OUTPUT: C,
                    CATEGORY_GLOBAL: m,
                    CATEGORY_SPECIAL: $,
                    options: s
                  };
                }
              }),
              ur = y({
                'src/main/support.js'(e, u) {
                  U();
                  var a = { compare: gt(), lt: Qu(), gte: Ju() },
                    o = Zu(),
                    l = Ku().version,
                    r = tr().options;
                  function i() {
                    let {
                        plugins: m = [],
                        showUnreleased: $ = !1,
                        showDeprecated: s = !1,
                        showInternal: D = !1
                      } = arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {},
                      d = l.split('-', 1)[0],
                      v = m.flatMap((P) => P.languages || []).filter(T),
                      A = o(
                        Object.assign(
                          {},
                          ...m.map((P) => {
                            let { options: Y } = P;
                            return Y;
                          }),
                          r
                        ),
                        'name'
                      )
                        .filter((P) => T(P) && j(P))
                        .sort((P, Y) =>
                          P.name === Y.name ? 0 : P.name < Y.name ? -1 : 1
                        )
                        .map(Q)
                        .map((P) => {
                          (P = Object.assign({}, P)),
                            Array.isArray(P.default) &&
                              (P.default =
                                P.default.length === 1
                                  ? P.default[0].value
                                  : P.default
                                      .filter(T)
                                      .sort((te, pe) =>
                                        a.compare(pe.since, te.since)
                                      )[0].value),
                            Array.isArray(P.choices) &&
                              ((P.choices = P.choices.filter(
                                (te) => T(te) && j(te)
                              )),
                              P.name === 'parser' && C(P, v, m));
                          let Y = Object.fromEntries(
                            m
                              .filter(
                                (te) =>
                                  te.defaultOptions &&
                                  te.defaultOptions[P.name] !== void 0
                              )
                              .map((te) => [te.name, te.defaultOptions[P.name]])
                          );
                          return Object.assign(
                            Object.assign({}, P),
                            {},
                            { pluginDefaults: Y }
                          );
                        });
                    return { languages: v, options: A };
                    function T(P) {
                      return (
                        $ || !('since' in P) || (P.since && a.gte(d, P.since))
                      );
                    }
                    function j(P) {
                      return (
                        s ||
                        !('deprecated' in P) ||
                        (P.deprecated && a.lt(d, P.deprecated))
                      );
                    }
                    function Q(P) {
                      return D ? P : E(P, c);
                    }
                  }
                  function C(m, $, s) {
                    let D = new Set(m.choices.map((d) => d.value));
                    for (let d of $)
                      if (d.parsers) {
                        for (let v of d.parsers)
                          if (!D.has(v)) {
                            D.add(v);
                            let A = s.find((j) => j.parsers && j.parsers[v]),
                              T = d.name;
                            A && A.name && (T += ` (plugin: ${A.name})`),
                              m.choices.push({ value: v, description: T });
                          }
                      }
                  }
                  u.exports = { getSupportInfo: i };
                }
              }),
              rr = y({
                'src/utils/is-non-empty-array.js'(e, u) {
                  U();
                  function a(o) {
                    return Array.isArray(o) && o.length > 0;
                  }
                  u.exports = a;
                }
              });
            function nr() {
              let { onlyFirst: e = !1 } =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                u = [
                  '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
                  '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
                ].join('|');
              return new RegExp(u, e ? void 0 : 'g');
            }
            var sr = V({
              'node_modules/strip-ansi/node_modules/ansi-regex/index.js'() {
                U();
              }
            });
            function ir(e) {
              if (typeof e != 'string')
                throw new TypeError(
                  `Expected a \`string\`, got \`${typeof e}\``
                );
              return e.replace(nr(), '');
            }
            var ar = V({
              'node_modules/strip-ansi/index.js'() {
                U(), sr();
              }
            });
            function or(e) {
              return Number.isInteger(e)
                ? e >= 4352 &&
                    (e <= 4447 ||
                      e === 9001 ||
                      e === 9002 ||
                      (11904 <= e && e <= 12871 && e !== 12351) ||
                      (12880 <= e && e <= 19903) ||
                      (19968 <= e && e <= 42182) ||
                      (43360 <= e && e <= 43388) ||
                      (44032 <= e && e <= 55203) ||
                      (63744 <= e && e <= 64255) ||
                      (65040 <= e && e <= 65049) ||
                      (65072 <= e && e <= 65131) ||
                      (65281 <= e && e <= 65376) ||
                      (65504 <= e && e <= 65510) ||
                      (110592 <= e && e <= 110593) ||
                      (127488 <= e && e <= 127569) ||
                      (131072 <= e && e <= 262141))
                : !1;
            }
            var Dr = V({
                'node_modules/is-fullwidth-code-point/index.js'() {
                  U();
                }
              }),
              lr = y({
                'node_modules/emoji-regex/index.js'(e, u) {
                  U(),
                    (u.exports = function () {
                      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
                    });
                }
              }),
              Lt = {};
            z(Lt, { default: () => cr });
            function cr(e) {
              if (
                typeof e != 'string' ||
                e.length === 0 ||
                ((e = ir(e)), e.length === 0)
              )
                return 0;
              e = e.replace((0, qt.default)(), '  ');
              let u = 0;
              for (let a = 0; a < e.length; a++) {
                let o = e.codePointAt(a);
                o <= 31 ||
                  (o >= 127 && o <= 159) ||
                  (o >= 768 && o <= 879) ||
                  (o > 65535 && a++, (u += or(o) ? 2 : 1));
              }
              return u;
            }
            var qt,
              pr = V({
                'node_modules/string-width/index.js'() {
                  U(), ar(), Dr(), (qt = Z(lr()));
                }
              }),
              hr = y({
                'src/utils/get-string-width.js'(e, u) {
                  U();
                  var a = (pr(), W(Lt)).default,
                    o = /[^\x20-\x7F]/;
                  function l(r) {
                    return r ? (o.test(r) ? a(r) : r.length) : 0;
                  }
                  u.exports = l;
                }
              }),
              Ft = y({
                'src/utils/text/skip.js'(e, u) {
                  U();
                  function a(C) {
                    return (m, $, s) => {
                      let D = s && s.backwards;
                      if ($ === !1) return !1;
                      let { length: d } = m,
                        v = $;
                      for (; v >= 0 && v < d; ) {
                        let A = m.charAt(v);
                        if (C instanceof RegExp) {
                          if (!C.test(A)) return v;
                        } else if (!C.includes(A)) return v;
                        D ? v-- : v++;
                      }
                      return v === -1 || v === d ? v : !1;
                    };
                  }
                  var o = a(/\s/),
                    l = a(' 	'),
                    r = a(',; 	'),
                    i = a(/[^\n\r]/);
                  u.exports = {
                    skipWhitespace: o,
                    skipSpaces: l,
                    skipToLineEnd: r,
                    skipEverythingButNewLine: i
                  };
                }
              }),
              jt = y({
                'src/utils/text/skip-inline-comment.js'(e, u) {
                  U();
                  function a(o, l) {
                    if (l === !1) return !1;
                    if (o.charAt(l) === '/' && o.charAt(l + 1) === '*') {
                      for (let r = l + 2; r < o.length; ++r)
                        if (o.charAt(r) === '*' && o.charAt(r + 1) === '/')
                          return r + 2;
                    }
                    return l;
                  }
                  u.exports = a;
                }
              }),
              Mt = y({
                'src/utils/text/skip-trailing-comment.js'(e, u) {
                  U();
                  var { skipEverythingButNewLine: a } = Ft();
                  function o(l, r) {
                    return r === !1
                      ? !1
                      : l.charAt(r) === '/' && l.charAt(r + 1) === '/'
                      ? a(l, r)
                      : r;
                  }
                  u.exports = o;
                }
              }),
              Ut = y({
                'src/utils/text/skip-newline.js'(e, u) {
                  U();
                  function a(o, l, r) {
                    let i = r && r.backwards;
                    if (l === !1) return !1;
                    let C = o.charAt(l);
                    if (i) {
                      if (
                        o.charAt(l - 1) === '\r' &&
                        C ===
                          `
`
                      )
                        return l - 2;
                      if (
                        C ===
                          `
` ||
                        C === '\r' ||
                        C === '\u2028' ||
                        C === '\u2029'
                      )
                        return l - 1;
                    } else {
                      if (
                        C === '\r' &&
                        o.charAt(l + 1) ===
                          `
`
                      )
                        return l + 2;
                      if (
                        C ===
                          `
` ||
                        C === '\r' ||
                        C === '\u2028' ||
                        C === '\u2029'
                      )
                        return l + 1;
                    }
                    return l;
                  }
                  u.exports = a;
                }
              }),
              dr = y({
                'src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js'(
                  e,
                  u
                ) {
                  U();
                  var a = jt(),
                    o = Ut(),
                    l = Mt(),
                    { skipSpaces: r } = Ft();
                  function i(C, m) {
                    let $ = null,
                      s = m;
                    for (; s !== $; )
                      ($ = s),
                        (s = r(C, s)),
                        (s = a(C, s)),
                        (s = l(C, s)),
                        (s = o(C, s));
                    return s;
                  }
                  u.exports = i;
                }
              }),
              Cr = y({
                'src/common/util.js'(e, u) {
                  U();
                  var { default: a } = (ut(), W(Ye)),
                    o = We(),
                    { getSupportInfo: l } = ur(),
                    r = rr(),
                    i = hr(),
                    {
                      skipWhitespace: C,
                      skipSpaces: m,
                      skipToLineEnd: $,
                      skipEverythingButNewLine: s
                    } = Ft(),
                    D = jt(),
                    d = Mt(),
                    v = Ut(),
                    A = dr(),
                    T = (x) => x[x.length - 2];
                  function j(x) {
                    return (I, G, H) => {
                      let ae = H && H.backwards;
                      if (G === !1) return !1;
                      let { length: he } = I,
                        ge = G;
                      for (; ge >= 0 && ge < he; ) {
                        let Ne = I.charAt(ge);
                        if (x instanceof RegExp) {
                          if (!x.test(Ne)) return ge;
                        } else if (!x.includes(Ne)) return ge;
                        ae ? ge-- : ge++;
                      }
                      return ge === -1 || ge === he ? ge : !1;
                    };
                  }
                  function Q(x, I) {
                    let G =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {},
                      H = m(x, G.backwards ? I - 1 : I, G),
                      ae = v(x, H, G);
                    return H !== ae;
                  }
                  function P(x, I, G) {
                    for (let H = I; H < G; ++H)
                      if (
                        x.charAt(H) ===
                        `
`
                      )
                        return !0;
                    return !1;
                  }
                  function Y(x, I, G) {
                    let H = G(I) - 1;
                    (H = m(x, H, { backwards: !0 })),
                      (H = v(x, H, { backwards: !0 })),
                      (H = m(x, H, { backwards: !0 }));
                    let ae = v(x, H, { backwards: !0 });
                    return H !== ae;
                  }
                  function te(x, I) {
                    let G = null,
                      H = I;
                    for (; H !== G; )
                      (G = H), (H = $(x, H)), (H = D(x, H)), (H = m(x, H));
                    return (H = d(x, H)), (H = v(x, H)), H !== !1 && Q(x, H);
                  }
                  function pe(x, I, G) {
                    return te(x, G(I));
                  }
                  function B(x, I, G) {
                    return A(x, G(I));
                  }
                  function K(x, I, G) {
                    return x.charAt(B(x, I, G));
                  }
                  function re(x, I) {
                    let G =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : {};
                    return m(x, G.backwards ? I - 1 : I, G) !== I;
                  }
                  function ie(x, I) {
                    let G =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : 0,
                      H = 0;
                    for (let ae = G; ae < x.length; ++ae)
                      x[ae] === '	' ? (H = H + I - (H % I)) : H++;
                    return H;
                  }
                  function le(x, I) {
                    let G = x.lastIndexOf(`
`);
                    return G === -1
                      ? 0
                      : ie(x.slice(G + 1).match(/^[\t ]*/)[0], I);
                  }
                  function t(x, I) {
                    let G = { quote: '"', regex: /"/g, escaped: '&quot;' },
                      H = { quote: "'", regex: /'/g, escaped: '&apos;' },
                      ae = I === "'" ? H : G,
                      he = ae === H ? G : H,
                      ge = ae;
                    if (x.includes(ae.quote) || x.includes(he.quote)) {
                      let Ne = (x.match(ae.regex) || []).length,
                        Me = (x.match(he.regex) || []).length;
                      ge = Ne > Me ? he : ae;
                    }
                    return ge;
                  }
                  function n(x, I) {
                    let G = x.slice(1, -1),
                      H =
                        I.parser === 'json' ||
                        (I.parser === 'json5' &&
                          I.quoteProps === 'preserve' &&
                          !I.singleQuote)
                          ? '"'
                          : I.__isInHtmlAttribute
                          ? "'"
                          : t(G, I.singleQuote ? "'" : '"').quote;
                    return _(
                      G,
                      H,
                      !(
                        I.parser === 'css' ||
                        I.parser === 'less' ||
                        I.parser === 'scss' ||
                        I.__embeddedInHtml
                      )
                    );
                  }
                  function _(x, I, G) {
                    let H = I === '"' ? "'" : '"',
                      ae = /\\(.)|(["'])/gs,
                      he = x.replace(ae, (ge, Ne, Me) =>
                        Ne === H
                          ? Ne
                          : Me === I
                          ? '\\' + Me
                          : Me ||
                            (G &&
                            /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(Ne)
                              ? Ne
                              : '\\' + Ne)
                      );
                    return I + he + I;
                  }
                  function h(x) {
                    return x
                      .toLowerCase()
                      .replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, '$1$2$3')
                      .replace(/^([+-]?[\d.]+)e[+-]?0+$/, '$1')
                      .replace(/^([+-])?\./, '$10.')
                      .replace(/(\.\d+?)0+(?=e|$)/, '$1')
                      .replace(/\.(?=e|$)/, '');
                  }
                  function b(x, I) {
                    let G = x.match(new RegExp(`(${a(I)})+`, 'g'));
                    return G === null
                      ? 0
                      : G.reduce(
                          (H, ae) => Math.max(H, ae.length / I.length),
                          0
                        );
                  }
                  function ne(x, I) {
                    let G = x.match(new RegExp(`(${a(I)})+`, 'g'));
                    if (G === null) return 0;
                    let H = new Map(),
                      ae = 0;
                    for (let he of G) {
                      let ge = he.length / I.length;
                      H.set(ge, !0), ge > ae && (ae = ge);
                    }
                    for (let he = 1; he < ae; he++) if (!H.get(he)) return he;
                    return ae + 1;
                  }
                  function De(x, I) {
                    (x.comments || (x.comments = [])).push(I),
                      (I.printed = !1),
                      (I.nodeDescription = $e(x));
                  }
                  function Te(x, I) {
                    (I.leading = !0), (I.trailing = !1), De(x, I);
                  }
                  function _e(x, I, G) {
                    (I.leading = !1),
                      (I.trailing = !1),
                      G && (I.marker = G),
                      De(x, I);
                  }
                  function xe(x, I) {
                    (I.leading = !1), (I.trailing = !0), De(x, I);
                  }
                  function be(x, I) {
                    let { languages: G } = l({ plugins: I.plugins }),
                      H =
                        G.find((ae) => {
                          let { name: he } = ae;
                          return he.toLowerCase() === x;
                        }) ||
                        G.find((ae) => {
                          let { aliases: he } = ae;
                          return Array.isArray(he) && he.includes(x);
                        }) ||
                        G.find((ae) => {
                          let { extensions: he } = ae;
                          return Array.isArray(he) && he.includes(`.${x}`);
                        });
                    return H && H.parsers[0];
                  }
                  function Pe(x) {
                    return x && x.type === 'front-matter';
                  }
                  function Ie(x) {
                    let I = new WeakMap();
                    return function (G) {
                      return I.has(G) || I.set(G, Symbol(x)), I.get(G);
                    };
                  }
                  function $e(x) {
                    let I = x.type || x.kind || '(unknown type)',
                      G = String(
                        x.name ||
                          (x.id &&
                            (typeof x.id == 'object' ? x.id.name : x.id)) ||
                          (x.key &&
                            (typeof x.key == 'object' ? x.key.name : x.key)) ||
                          (x.value &&
                            (typeof x.value == 'object'
                              ? ''
                              : String(x.value))) ||
                          x.operator ||
                          ''
                      );
                    return (
                      G.length > 20 && (G = G.slice(0, 19) + '…'),
                      I + (G ? ' ' + G : '')
                    );
                  }
                  u.exports = {
                    inferParserByLanguage: be,
                    getStringWidth: i,
                    getMaxContinuousCount: b,
                    getMinNotPresentContinuousCount: ne,
                    getPenultimate: T,
                    getLast: o,
                    getNextNonSpaceNonCommentCharacterIndexWithStartIndex: A,
                    getNextNonSpaceNonCommentCharacterIndex: B,
                    getNextNonSpaceNonCommentCharacter: K,
                    skip: j,
                    skipWhitespace: C,
                    skipSpaces: m,
                    skipToLineEnd: $,
                    skipEverythingButNewLine: s,
                    skipInlineComment: D,
                    skipTrailingComment: d,
                    skipNewline: v,
                    isNextLineEmptyAfterIndex: te,
                    isNextLineEmpty: pe,
                    isPreviousLineEmpty: Y,
                    hasNewline: Q,
                    hasNewlineInRange: P,
                    hasSpaces: re,
                    getAlignmentSize: ie,
                    getIndentSize: le,
                    getPreferredQuote: t,
                    printString: n,
                    printNumber: h,
                    makeString: _,
                    addLeadingComment: Te,
                    addDanglingComment: _e,
                    addTrailingComment: xe,
                    isFrontMatterNode: Pe,
                    isNonEmptyArray: r,
                    createGroupIdMapper: Ie
                  };
                }
              }),
              Er = y({
                'vendors/html-tag-names.json'(e, u) {
                  u.exports = {
                    htmlTagNames: [
                      'a',
                      'abbr',
                      'acronym',
                      'address',
                      'applet',
                      'area',
                      'article',
                      'aside',
                      'audio',
                      'b',
                      'base',
                      'basefont',
                      'bdi',
                      'bdo',
                      'bgsound',
                      'big',
                      'blink',
                      'blockquote',
                      'body',
                      'br',
                      'button',
                      'canvas',
                      'caption',
                      'center',
                      'cite',
                      'code',
                      'col',
                      'colgroup',
                      'command',
                      'content',
                      'data',
                      'datalist',
                      'dd',
                      'del',
                      'details',
                      'dfn',
                      'dialog',
                      'dir',
                      'div',
                      'dl',
                      'dt',
                      'element',
                      'em',
                      'embed',
                      'fieldset',
                      'figcaption',
                      'figure',
                      'font',
                      'footer',
                      'form',
                      'frame',
                      'frameset',
                      'h1',
                      'h2',
                      'h3',
                      'h4',
                      'h5',
                      'h6',
                      'head',
                      'header',
                      'hgroup',
                      'hr',
                      'html',
                      'i',
                      'iframe',
                      'image',
                      'img',
                      'input',
                      'ins',
                      'isindex',
                      'kbd',
                      'keygen',
                      'label',
                      'legend',
                      'li',
                      'link',
                      'listing',
                      'main',
                      'map',
                      'mark',
                      'marquee',
                      'math',
                      'menu',
                      'menuitem',
                      'meta',
                      'meter',
                      'multicol',
                      'nav',
                      'nextid',
                      'nobr',
                      'noembed',
                      'noframes',
                      'noscript',
                      'object',
                      'ol',
                      'optgroup',
                      'option',
                      'output',
                      'p',
                      'param',
                      'picture',
                      'plaintext',
                      'pre',
                      'progress',
                      'q',
                      'rb',
                      'rbc',
                      'rp',
                      'rt',
                      'rtc',
                      'ruby',
                      's',
                      'samp',
                      'script',
                      'section',
                      'select',
                      'shadow',
                      'slot',
                      'small',
                      'source',
                      'spacer',
                      'span',
                      'strike',
                      'strong',
                      'style',
                      'sub',
                      'summary',
                      'sup',
                      'svg',
                      'table',
                      'tbody',
                      'td',
                      'template',
                      'textarea',
                      'tfoot',
                      'th',
                      'thead',
                      'time',
                      'title',
                      'tr',
                      'track',
                      'tt',
                      'u',
                      'ul',
                      'var',
                      'video',
                      'wbr',
                      'xmp'
                    ]
                  };
                }
              }),
              Vt = y({
                'src/language-html/utils/array-to-map.js'(e, u) {
                  U();
                  function a(o) {
                    let l = Object.create(null);
                    for (let r of o) l[r] = !0;
                    return l;
                  }
                  u.exports = a;
                }
              }),
              mr = y({
                'src/language-html/utils/html-tag-names.js'(e, u) {
                  U();
                  var { htmlTagNames: a } = Er(),
                    o = Vt(),
                    l = o(a);
                  u.exports = l;
                }
              }),
              fr = y({
                'vendors/html-element-attributes.json'(e, u) {
                  u.exports = {
                    htmlElementAttributes: {
                      '*': [
                        'accesskey',
                        'autocapitalize',
                        'autofocus',
                        'class',
                        'contenteditable',
                        'dir',
                        'draggable',
                        'enterkeyhint',
                        'hidden',
                        'id',
                        'inputmode',
                        'is',
                        'itemid',
                        'itemprop',
                        'itemref',
                        'itemscope',
                        'itemtype',
                        'lang',
                        'nonce',
                        'slot',
                        'spellcheck',
                        'style',
                        'tabindex',
                        'title',
                        'translate'
                      ],
                      a: [
                        'charset',
                        'coords',
                        'download',
                        'href',
                        'hreflang',
                        'name',
                        'ping',
                        'referrerpolicy',
                        'rel',
                        'rev',
                        'shape',
                        'target',
                        'type'
                      ],
                      applet: [
                        'align',
                        'alt',
                        'archive',
                        'code',
                        'codebase',
                        'height',
                        'hspace',
                        'name',
                        'object',
                        'vspace',
                        'width'
                      ],
                      area: [
                        'alt',
                        'coords',
                        'download',
                        'href',
                        'hreflang',
                        'nohref',
                        'ping',
                        'referrerpolicy',
                        'rel',
                        'shape',
                        'target',
                        'type'
                      ],
                      audio: [
                        'autoplay',
                        'controls',
                        'crossorigin',
                        'loop',
                        'muted',
                        'preload',
                        'src'
                      ],
                      base: ['href', 'target'],
                      basefont: ['color', 'face', 'size'],
                      blockquote: ['cite'],
                      body: [
                        'alink',
                        'background',
                        'bgcolor',
                        'link',
                        'text',
                        'vlink'
                      ],
                      br: ['clear'],
                      button: [
                        'disabled',
                        'form',
                        'formaction',
                        'formenctype',
                        'formmethod',
                        'formnovalidate',
                        'formtarget',
                        'name',
                        'type',
                        'value'
                      ],
                      canvas: ['height', 'width'],
                      caption: ['align'],
                      col: [
                        'align',
                        'char',
                        'charoff',
                        'span',
                        'valign',
                        'width'
                      ],
                      colgroup: [
                        'align',
                        'char',
                        'charoff',
                        'span',
                        'valign',
                        'width'
                      ],
                      data: ['value'],
                      del: ['cite', 'datetime'],
                      details: ['open'],
                      dialog: ['open'],
                      dir: ['compact'],
                      div: ['align'],
                      dl: ['compact'],
                      embed: ['height', 'src', 'type', 'width'],
                      fieldset: ['disabled', 'form', 'name'],
                      font: ['color', 'face', 'size'],
                      form: [
                        'accept',
                        'accept-charset',
                        'action',
                        'autocomplete',
                        'enctype',
                        'method',
                        'name',
                        'novalidate',
                        'target'
                      ],
                      frame: [
                        'frameborder',
                        'longdesc',
                        'marginheight',
                        'marginwidth',
                        'name',
                        'noresize',
                        'scrolling',
                        'src'
                      ],
                      frameset: ['cols', 'rows'],
                      h1: ['align'],
                      h2: ['align'],
                      h3: ['align'],
                      h4: ['align'],
                      h5: ['align'],
                      h6: ['align'],
                      head: ['profile'],
                      hr: ['align', 'noshade', 'size', 'width'],
                      html: ['manifest', 'version'],
                      iframe: [
                        'align',
                        'allow',
                        'allowfullscreen',
                        'allowpaymentrequest',
                        'allowusermedia',
                        'frameborder',
                        'height',
                        'loading',
                        'longdesc',
                        'marginheight',
                        'marginwidth',
                        'name',
                        'referrerpolicy',
                        'sandbox',
                        'scrolling',
                        'src',
                        'srcdoc',
                        'width'
                      ],
                      img: [
                        'align',
                        'alt',
                        'border',
                        'crossorigin',
                        'decoding',
                        'height',
                        'hspace',
                        'ismap',
                        'loading',
                        'longdesc',
                        'name',
                        'referrerpolicy',
                        'sizes',
                        'src',
                        'srcset',
                        'usemap',
                        'vspace',
                        'width'
                      ],
                      input: [
                        'accept',
                        'align',
                        'alt',
                        'autocomplete',
                        'checked',
                        'dirname',
                        'disabled',
                        'form',
                        'formaction',
                        'formenctype',
                        'formmethod',
                        'formnovalidate',
                        'formtarget',
                        'height',
                        'ismap',
                        'list',
                        'max',
                        'maxlength',
                        'min',
                        'minlength',
                        'multiple',
                        'name',
                        'pattern',
                        'placeholder',
                        'readonly',
                        'required',
                        'size',
                        'src',
                        'step',
                        'type',
                        'usemap',
                        'value',
                        'width'
                      ],
                      ins: ['cite', 'datetime'],
                      isindex: ['prompt'],
                      label: ['for', 'form'],
                      legend: ['align'],
                      li: ['type', 'value'],
                      link: [
                        'as',
                        'charset',
                        'color',
                        'crossorigin',
                        'disabled',
                        'href',
                        'hreflang',
                        'imagesizes',
                        'imagesrcset',
                        'integrity',
                        'media',
                        'referrerpolicy',
                        'rel',
                        'rev',
                        'sizes',
                        'target',
                        'type'
                      ],
                      map: ['name'],
                      menu: ['compact'],
                      meta: [
                        'charset',
                        'content',
                        'http-equiv',
                        'media',
                        'name',
                        'scheme'
                      ],
                      meter: ['high', 'low', 'max', 'min', 'optimum', 'value'],
                      object: [
                        'align',
                        'archive',
                        'border',
                        'classid',
                        'codebase',
                        'codetype',
                        'data',
                        'declare',
                        'form',
                        'height',
                        'hspace',
                        'name',
                        'standby',
                        'type',
                        'typemustmatch',
                        'usemap',
                        'vspace',
                        'width'
                      ],
                      ol: ['compact', 'reversed', 'start', 'type'],
                      optgroup: ['disabled', 'label'],
                      option: ['disabled', 'label', 'selected', 'value'],
                      output: ['for', 'form', 'name'],
                      p: ['align'],
                      param: ['name', 'type', 'value', 'valuetype'],
                      pre: ['width'],
                      progress: ['max', 'value'],
                      q: ['cite'],
                      script: [
                        'async',
                        'charset',
                        'crossorigin',
                        'defer',
                        'integrity',
                        'language',
                        'nomodule',
                        'referrerpolicy',
                        'src',
                        'type'
                      ],
                      select: [
                        'autocomplete',
                        'disabled',
                        'form',
                        'multiple',
                        'name',
                        'required',
                        'size'
                      ],
                      slot: ['name'],
                      source: [
                        'height',
                        'media',
                        'sizes',
                        'src',
                        'srcset',
                        'type',
                        'width'
                      ],
                      style: ['media', 'type'],
                      table: [
                        'align',
                        'bgcolor',
                        'border',
                        'cellpadding',
                        'cellspacing',
                        'frame',
                        'rules',
                        'summary',
                        'width'
                      ],
                      tbody: ['align', 'char', 'charoff', 'valign'],
                      td: [
                        'abbr',
                        'align',
                        'axis',
                        'bgcolor',
                        'char',
                        'charoff',
                        'colspan',
                        'headers',
                        'height',
                        'nowrap',
                        'rowspan',
                        'scope',
                        'valign',
                        'width'
                      ],
                      textarea: [
                        'autocomplete',
                        'cols',
                        'dirname',
                        'disabled',
                        'form',
                        'maxlength',
                        'minlength',
                        'name',
                        'placeholder',
                        'readonly',
                        'required',
                        'rows',
                        'wrap'
                      ],
                      tfoot: ['align', 'char', 'charoff', 'valign'],
                      th: [
                        'abbr',
                        'align',
                        'axis',
                        'bgcolor',
                        'char',
                        'charoff',
                        'colspan',
                        'headers',
                        'height',
                        'nowrap',
                        'rowspan',
                        'scope',
                        'valign',
                        'width'
                      ],
                      thead: ['align', 'char', 'charoff', 'valign'],
                      time: ['datetime'],
                      tr: ['align', 'bgcolor', 'char', 'charoff', 'valign'],
                      track: ['default', 'kind', 'label', 'src', 'srclang'],
                      ul: ['compact', 'type'],
                      video: [
                        'autoplay',
                        'controls',
                        'crossorigin',
                        'height',
                        'loop',
                        'muted',
                        'playsinline',
                        'poster',
                        'preload',
                        'src',
                        'width'
                      ]
                    }
                  };
                }
              }),
              gr = y({
                'src/language-html/utils/map-object.js'(e, u) {
                  U();
                  function a(o, l) {
                    let r = Object.create(null);
                    for (let [i, C] of Object.entries(o)) r[i] = l(C, i);
                    return r;
                  }
                  u.exports = a;
                }
              }),
              Fr = y({
                'src/language-html/utils/html-elements-attributes.js'(e, u) {
                  U();
                  var { htmlElementAttributes: a } = fr(),
                    o = gr(),
                    l = Vt(),
                    r = o(a, l);
                  u.exports = r;
                }
              }),
              Ar = y({
                'src/language-html/utils/is-unknown-namespace.js'(e, u) {
                  U();
                  function a(o) {
                    return (
                      o.type === 'element' &&
                      !o.hasExplicitNamespace &&
                      !['html', 'svg'].includes(o.namespace)
                    );
                  }
                  u.exports = a;
                }
              }),
              _r = y({
                'src/language-html/pragma.js'(e, u) {
                  U();
                  function a(l) {
                    return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(l);
                  }
                  function o(l) {
                    return (
                      `<!-- @format -->

` + l.replace(/^\s*\n/, '')
                    );
                  }
                  u.exports = { hasPragma: a, insertPragma: o };
                }
              }),
              vr = y({
                'src/language-html/ast.js'(e, u) {
                  U();
                  var a = { attrs: !0, children: !0 },
                    o = new Set(['parent']),
                    l = class {
                      constructor() {
                        let i =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : {};
                        for (let C of new Set([...o, ...Object.keys(i)]))
                          this.setProperty(C, i[C]);
                      }
                      setProperty(i, C) {
                        if (this[i] !== C) {
                          if (
                            (i in a && (C = C.map((m) => this.createChild(m))),
                            !o.has(i))
                          ) {
                            this[i] = C;
                            return;
                          }
                          Object.defineProperty(this, i, {
                            value: C,
                            enumerable: !1,
                            configurable: !0
                          });
                        }
                      }
                      map(i) {
                        let C;
                        for (let m in a) {
                          let $ = this[m];
                          if ($) {
                            let s = r($, (D) => D.map(i));
                            C !== $ &&
                              (C || (C = new l({ parent: this.parent })),
                              C.setProperty(m, s));
                          }
                        }
                        if (C) for (let m in this) m in a || (C[m] = this[m]);
                        return i(C || this);
                      }
                      walk(i) {
                        for (let C in a) {
                          let m = this[C];
                          if (m)
                            for (let $ = 0; $ < m.length; $++) m[$].walk(i);
                        }
                        i(this);
                      }
                      createChild(i) {
                        let C = i instanceof l ? i.clone() : new l(i);
                        return C.setProperty('parent', this), C;
                      }
                      insertChildBefore(i, C) {
                        this.children.splice(
                          this.children.indexOf(i),
                          0,
                          this.createChild(C)
                        );
                      }
                      removeChild(i) {
                        this.children.splice(this.children.indexOf(i), 1);
                      }
                      replaceChild(i, C) {
                        this.children[this.children.indexOf(i)] =
                          this.createChild(C);
                      }
                      clone() {
                        return new l(this);
                      }
                      get firstChild() {
                        var i;
                        return (i = this.children) === null || i === void 0
                          ? void 0
                          : i[0];
                      }
                      get lastChild() {
                        var i;
                        return (i = this.children) === null || i === void 0
                          ? void 0
                          : i[this.children.length - 1];
                      }
                      get prev() {
                        var i;
                        return (i = this.parent) === null || i === void 0
                          ? void 0
                          : i.children[this.parent.children.indexOf(this) - 1];
                      }
                      get next() {
                        var i;
                        return (i = this.parent) === null || i === void 0
                          ? void 0
                          : i.children[this.parent.children.indexOf(this) + 1];
                      }
                      get rawName() {
                        return this.hasExplicitNamespace
                          ? this.fullName
                          : this.name;
                      }
                      get fullName() {
                        return this.namespace
                          ? this.namespace + ':' + this.name
                          : this.name;
                      }
                      get attrMap() {
                        return Object.fromEntries(
                          this.attrs.map((i) => [i.fullName, i.value])
                        );
                      }
                    };
                  function r(i, C) {
                    let m = i.map(C);
                    return m.some(($, s) => $ !== i[s]) ? m : i;
                  }
                  u.exports = { Node: l };
                }
              }),
              Tr = y({
                'src/language-html/conditional-comment.js'(e, u) {
                  U();
                  var { ParseSourceSpan: a } = Fe(),
                    o = [
                      {
                        regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s,
                        parse: r
                      },
                      { regex: /^\[if([^\]]*)]><!$/, parse: i },
                      { regex: /^<!\s*\[endif]$/, parse: C }
                    ];
                  function l(m, $) {
                    if (m.value)
                      for (let { regex: s, parse: D } of o) {
                        let d = m.value.match(s);
                        if (d) return D(m, $, d);
                      }
                    return null;
                  }
                  function r(m, $, s) {
                    let [, D, d, v] = s,
                      A = 4 + D.length,
                      T = m.sourceSpan.start.moveBy(A),
                      j = T.moveBy(v.length),
                      [Q, P] = (() => {
                        try {
                          return [!0, $(v, T).children];
                        } catch {
                          return [
                            !1,
                            [
                              {
                                type: 'text',
                                value: v,
                                sourceSpan: new a(T, j)
                              }
                            ]
                          ];
                        }
                      })();
                    return {
                      type: 'ieConditionalComment',
                      complete: Q,
                      children: P,
                      condition: d.trim().replace(/\s+/g, ' '),
                      sourceSpan: m.sourceSpan,
                      startSourceSpan: new a(m.sourceSpan.start, T),
                      endSourceSpan: new a(j, m.sourceSpan.end)
                    };
                  }
                  function i(m, $, s) {
                    let [, D] = s;
                    return {
                      type: 'ieConditionalStartComment',
                      condition: D.trim().replace(/\s+/g, ' '),
                      sourceSpan: m.sourceSpan
                    };
                  }
                  function C(m) {
                    return {
                      type: 'ieConditionalEndComment',
                      sourceSpan: m.sourceSpan
                    };
                  }
                  u.exports = { parseIeConditionalComment: l };
                }
              }),
              yr = y({
                'src/language-html/loc.js'(e, u) {
                  U();
                  function a(l) {
                    return l.sourceSpan.start.offset;
                  }
                  function o(l) {
                    return l.sourceSpan.end.offset;
                  }
                  u.exports = { locStart: a, locEnd: o };
                }
              }),
              rt = y({
                'node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js'(
                  e
                ) {
                  U(),
                    Object.defineProperty(e, '__esModule', { value: !0 }),
                    (function (C) {
                      (C[(C.RAW_TEXT = 0)] = 'RAW_TEXT'),
                        (C[(C.ESCAPABLE_RAW_TEXT = 1)] = 'ESCAPABLE_RAW_TEXT'),
                        (C[(C.PARSABLE_DATA = 2)] = 'PARSABLE_DATA');
                    })(e.TagContentType || (e.TagContentType = {}));
                  function u(C) {
                    if (C[0] != ':') return [null, C];
                    let m = C.indexOf(':', 1);
                    if (m == -1)
                      throw new Error(
                        `Unsupported format "${C}" expecting ":namespace:name"`
                      );
                    return [C.slice(1, m), C.slice(m + 1)];
                  }
                  e.splitNsName = u;
                  function a(C) {
                    return u(C)[1] === 'ng-container';
                  }
                  e.isNgContainer = a;
                  function o(C) {
                    return u(C)[1] === 'ng-content';
                  }
                  e.isNgContent = o;
                  function l(C) {
                    return u(C)[1] === 'ng-template';
                  }
                  e.isNgTemplate = l;
                  function r(C) {
                    return C === null ? null : u(C)[0];
                  }
                  e.getNsPrefix = r;
                  function i(C, m) {
                    return C ? `:${C}:${m}` : m;
                  }
                  (e.mergeNsAndName = i),
                    (e.NAMED_ENTITIES = {
                      Aacute: 'Á',
                      aacute: 'á',
                      Abreve: 'Ă',
                      abreve: 'ă',
                      ac: '∾',
                      acd: '∿',
                      acE: '∾̳',
                      Acirc: 'Â',
                      acirc: 'â',
                      acute: '´',
                      Acy: 'А',
                      acy: 'а',
                      AElig: 'Æ',
                      aelig: 'æ',
                      af: '⁡',
                      Afr: '𝔄',
                      afr: '𝔞',
                      Agrave: 'À',
                      agrave: 'à',
                      alefsym: 'ℵ',
                      aleph: 'ℵ',
                      Alpha: 'Α',
                      alpha: 'α',
                      Amacr: 'Ā',
                      amacr: 'ā',
                      amalg: '⨿',
                      AMP: '&',
                      amp: '&',
                      And: '⩓',
                      and: '∧',
                      andand: '⩕',
                      andd: '⩜',
                      andslope: '⩘',
                      andv: '⩚',
                      ang: '∠',
                      ange: '⦤',
                      angle: '∠',
                      angmsd: '∡',
                      angmsdaa: '⦨',
                      angmsdab: '⦩',
                      angmsdac: '⦪',
                      angmsdad: '⦫',
                      angmsdae: '⦬',
                      angmsdaf: '⦭',
                      angmsdag: '⦮',
                      angmsdah: '⦯',
                      angrt: '∟',
                      angrtvb: '⊾',
                      angrtvbd: '⦝',
                      angsph: '∢',
                      angst: 'Å',
                      angzarr: '⍼',
                      Aogon: 'Ą',
                      aogon: 'ą',
                      Aopf: '𝔸',
                      aopf: '𝕒',
                      ap: '≈',
                      apacir: '⩯',
                      apE: '⩰',
                      ape: '≊',
                      apid: '≋',
                      apos: "'",
                      ApplyFunction: '⁡',
                      approx: '≈',
                      approxeq: '≊',
                      Aring: 'Å',
                      aring: 'å',
                      Ascr: '𝒜',
                      ascr: '𝒶',
                      Assign: '≔',
                      ast: '*',
                      asymp: '≈',
                      asympeq: '≍',
                      Atilde: 'Ã',
                      atilde: 'ã',
                      Auml: 'Ä',
                      auml: 'ä',
                      awconint: '∳',
                      awint: '⨑',
                      backcong: '≌',
                      backepsilon: '϶',
                      backprime: '‵',
                      backsim: '∽',
                      backsimeq: '⋍',
                      Backslash: '∖',
                      Barv: '⫧',
                      barvee: '⊽',
                      Barwed: '⌆',
                      barwed: '⌅',
                      barwedge: '⌅',
                      bbrk: '⎵',
                      bbrktbrk: '⎶',
                      bcong: '≌',
                      Bcy: 'Б',
                      bcy: 'б',
                      bdquo: '„',
                      becaus: '∵',
                      Because: '∵',
                      because: '∵',
                      bemptyv: '⦰',
                      bepsi: '϶',
                      bernou: 'ℬ',
                      Bernoullis: 'ℬ',
                      Beta: 'Β',
                      beta: 'β',
                      beth: 'ℶ',
                      between: '≬',
                      Bfr: '𝔅',
                      bfr: '𝔟',
                      bigcap: '⋂',
                      bigcirc: '◯',
                      bigcup: '⋃',
                      bigodot: '⨀',
                      bigoplus: '⨁',
                      bigotimes: '⨂',
                      bigsqcup: '⨆',
                      bigstar: '★',
                      bigtriangledown: '▽',
                      bigtriangleup: '△',
                      biguplus: '⨄',
                      bigvee: '⋁',
                      bigwedge: '⋀',
                      bkarow: '⤍',
                      blacklozenge: '⧫',
                      blacksquare: '▪',
                      blacktriangle: '▴',
                      blacktriangledown: '▾',
                      blacktriangleleft: '◂',
                      blacktriangleright: '▸',
                      blank: '␣',
                      blk12: '▒',
                      blk14: '░',
                      blk34: '▓',
                      block: '█',
                      bne: '=⃥',
                      bnequiv: '≡⃥',
                      bNot: '⫭',
                      bnot: '⌐',
                      Bopf: '𝔹',
                      bopf: '𝕓',
                      bot: '⊥',
                      bottom: '⊥',
                      bowtie: '⋈',
                      boxbox: '⧉',
                      boxDL: '╗',
                      boxDl: '╖',
                      boxdL: '╕',
                      boxdl: '┐',
                      boxDR: '╔',
                      boxDr: '╓',
                      boxdR: '╒',
                      boxdr: '┌',
                      boxH: '═',
                      boxh: '─',
                      boxHD: '╦',
                      boxHd: '╤',
                      boxhD: '╥',
                      boxhd: '┬',
                      boxHU: '╩',
                      boxHu: '╧',
                      boxhU: '╨',
                      boxhu: '┴',
                      boxminus: '⊟',
                      boxplus: '⊞',
                      boxtimes: '⊠',
                      boxUL: '╝',
                      boxUl: '╜',
                      boxuL: '╛',
                      boxul: '┘',
                      boxUR: '╚',
                      boxUr: '╙',
                      boxuR: '╘',
                      boxur: '└',
                      boxV: '║',
                      boxv: '│',
                      boxVH: '╬',
                      boxVh: '╫',
                      boxvH: '╪',
                      boxvh: '┼',
                      boxVL: '╣',
                      boxVl: '╢',
                      boxvL: '╡',
                      boxvl: '┤',
                      boxVR: '╠',
                      boxVr: '╟',
                      boxvR: '╞',
                      boxvr: '├',
                      bprime: '‵',
                      Breve: '˘',
                      breve: '˘',
                      brvbar: '¦',
                      Bscr: 'ℬ',
                      bscr: '𝒷',
                      bsemi: '⁏',
                      bsim: '∽',
                      bsime: '⋍',
                      bsol: '\\',
                      bsolb: '⧅',
                      bsolhsub: '⟈',
                      bull: '•',
                      bullet: '•',
                      bump: '≎',
                      bumpE: '⪮',
                      bumpe: '≏',
                      Bumpeq: '≎',
                      bumpeq: '≏',
                      Cacute: 'Ć',
                      cacute: 'ć',
                      Cap: '⋒',
                      cap: '∩',
                      capand: '⩄',
                      capbrcup: '⩉',
                      capcap: '⩋',
                      capcup: '⩇',
                      capdot: '⩀',
                      CapitalDifferentialD: 'ⅅ',
                      caps: '∩︀',
                      caret: '⁁',
                      caron: 'ˇ',
                      Cayleys: 'ℭ',
                      ccaps: '⩍',
                      Ccaron: 'Č',
                      ccaron: 'č',
                      Ccedil: 'Ç',
                      ccedil: 'ç',
                      Ccirc: 'Ĉ',
                      ccirc: 'ĉ',
                      Cconint: '∰',
                      ccups: '⩌',
                      ccupssm: '⩐',
                      Cdot: 'Ċ',
                      cdot: 'ċ',
                      cedil: '¸',
                      Cedilla: '¸',
                      cemptyv: '⦲',
                      cent: '¢',
                      CenterDot: '·',
                      centerdot: '·',
                      Cfr: 'ℭ',
                      cfr: '𝔠',
                      CHcy: 'Ч',
                      chcy: 'ч',
                      check: '✓',
                      checkmark: '✓',
                      Chi: 'Χ',
                      chi: 'χ',
                      cir: '○',
                      circ: 'ˆ',
                      circeq: '≗',
                      circlearrowleft: '↺',
                      circlearrowright: '↻',
                      circledast: '⊛',
                      circledcirc: '⊚',
                      circleddash: '⊝',
                      CircleDot: '⊙',
                      circledR: '®',
                      circledS: 'Ⓢ',
                      CircleMinus: '⊖',
                      CirclePlus: '⊕',
                      CircleTimes: '⊗',
                      cirE: '⧃',
                      cire: '≗',
                      cirfnint: '⨐',
                      cirmid: '⫯',
                      cirscir: '⧂',
                      ClockwiseContourIntegral: '∲',
                      CloseCurlyDoubleQuote: '”',
                      CloseCurlyQuote: '’',
                      clubs: '♣',
                      clubsuit: '♣',
                      Colon: '∷',
                      colon: ':',
                      Colone: '⩴',
                      colone: '≔',
                      coloneq: '≔',
                      comma: ',',
                      commat: '@',
                      comp: '∁',
                      compfn: '∘',
                      complement: '∁',
                      complexes: 'ℂ',
                      cong: '≅',
                      congdot: '⩭',
                      Congruent: '≡',
                      Conint: '∯',
                      conint: '∮',
                      ContourIntegral: '∮',
                      Copf: 'ℂ',
                      copf: '𝕔',
                      coprod: '∐',
                      Coproduct: '∐',
                      COPY: '©',
                      copy: '©',
                      copysr: '℗',
                      CounterClockwiseContourIntegral: '∳',
                      crarr: '↵',
                      Cross: '⨯',
                      cross: '✗',
                      Cscr: '𝒞',
                      cscr: '𝒸',
                      csub: '⫏',
                      csube: '⫑',
                      csup: '⫐',
                      csupe: '⫒',
                      ctdot: '⋯',
                      cudarrl: '⤸',
                      cudarrr: '⤵',
                      cuepr: '⋞',
                      cuesc: '⋟',
                      cularr: '↶',
                      cularrp: '⤽',
                      Cup: '⋓',
                      cup: '∪',
                      cupbrcap: '⩈',
                      CupCap: '≍',
                      cupcap: '⩆',
                      cupcup: '⩊',
                      cupdot: '⊍',
                      cupor: '⩅',
                      cups: '∪︀',
                      curarr: '↷',
                      curarrm: '⤼',
                      curlyeqprec: '⋞',
                      curlyeqsucc: '⋟',
                      curlyvee: '⋎',
                      curlywedge: '⋏',
                      curren: '¤',
                      curvearrowleft: '↶',
                      curvearrowright: '↷',
                      cuvee: '⋎',
                      cuwed: '⋏',
                      cwconint: '∲',
                      cwint: '∱',
                      cylcty: '⌭',
                      Dagger: '‡',
                      dagger: '†',
                      daleth: 'ℸ',
                      Darr: '↡',
                      dArr: '⇓',
                      darr: '↓',
                      dash: '‐',
                      Dashv: '⫤',
                      dashv: '⊣',
                      dbkarow: '⤏',
                      dblac: '˝',
                      Dcaron: 'Ď',
                      dcaron: 'ď',
                      Dcy: 'Д',
                      dcy: 'д',
                      DD: 'ⅅ',
                      dd: 'ⅆ',
                      ddagger: '‡',
                      ddarr: '⇊',
                      DDotrahd: '⤑',
                      ddotseq: '⩷',
                      deg: '°',
                      Del: '∇',
                      Delta: 'Δ',
                      delta: 'δ',
                      demptyv: '⦱',
                      dfisht: '⥿',
                      Dfr: '𝔇',
                      dfr: '𝔡',
                      dHar: '⥥',
                      dharl: '⇃',
                      dharr: '⇂',
                      DiacriticalAcute: '´',
                      DiacriticalDot: '˙',
                      DiacriticalDoubleAcute: '˝',
                      DiacriticalGrave: '`',
                      DiacriticalTilde: '˜',
                      diam: '⋄',
                      Diamond: '⋄',
                      diamond: '⋄',
                      diamondsuit: '♦',
                      diams: '♦',
                      die: '¨',
                      DifferentialD: 'ⅆ',
                      digamma: 'ϝ',
                      disin: '⋲',
                      div: '÷',
                      divide: '÷',
                      divideontimes: '⋇',
                      divonx: '⋇',
                      DJcy: 'Ђ',
                      djcy: 'ђ',
                      dlcorn: '⌞',
                      dlcrop: '⌍',
                      dollar: '$',
                      Dopf: '𝔻',
                      dopf: '𝕕',
                      Dot: '¨',
                      dot: '˙',
                      DotDot: '⃜',
                      doteq: '≐',
                      doteqdot: '≑',
                      DotEqual: '≐',
                      dotminus: '∸',
                      dotplus: '∔',
                      dotsquare: '⊡',
                      doublebarwedge: '⌆',
                      DoubleContourIntegral: '∯',
                      DoubleDot: '¨',
                      DoubleDownArrow: '⇓',
                      DoubleLeftArrow: '⇐',
                      DoubleLeftRightArrow: '⇔',
                      DoubleLeftTee: '⫤',
                      DoubleLongLeftArrow: '⟸',
                      DoubleLongLeftRightArrow: '⟺',
                      DoubleLongRightArrow: '⟹',
                      DoubleRightArrow: '⇒',
                      DoubleRightTee: '⊨',
                      DoubleUpArrow: '⇑',
                      DoubleUpDownArrow: '⇕',
                      DoubleVerticalBar: '∥',
                      DownArrow: '↓',
                      Downarrow: '⇓',
                      downarrow: '↓',
                      DownArrowBar: '⤓',
                      DownArrowUpArrow: '⇵',
                      DownBreve: '̑',
                      downdownarrows: '⇊',
                      downharpoonleft: '⇃',
                      downharpoonright: '⇂',
                      DownLeftRightVector: '⥐',
                      DownLeftTeeVector: '⥞',
                      DownLeftVector: '↽',
                      DownLeftVectorBar: '⥖',
                      DownRightTeeVector: '⥟',
                      DownRightVector: '⇁',
                      DownRightVectorBar: '⥗',
                      DownTee: '⊤',
                      DownTeeArrow: '↧',
                      drbkarow: '⤐',
                      drcorn: '⌟',
                      drcrop: '⌌',
                      Dscr: '𝒟',
                      dscr: '𝒹',
                      DScy: 'Ѕ',
                      dscy: 'ѕ',
                      dsol: '⧶',
                      Dstrok: 'Đ',
                      dstrok: 'đ',
                      dtdot: '⋱',
                      dtri: '▿',
                      dtrif: '▾',
                      duarr: '⇵',
                      duhar: '⥯',
                      dwangle: '⦦',
                      DZcy: 'Џ',
                      dzcy: 'џ',
                      dzigrarr: '⟿',
                      Eacute: 'É',
                      eacute: 'é',
                      easter: '⩮',
                      Ecaron: 'Ě',
                      ecaron: 'ě',
                      ecir: '≖',
                      Ecirc: 'Ê',
                      ecirc: 'ê',
                      ecolon: '≕',
                      Ecy: 'Э',
                      ecy: 'э',
                      eDDot: '⩷',
                      Edot: 'Ė',
                      eDot: '≑',
                      edot: 'ė',
                      ee: 'ⅇ',
                      efDot: '≒',
                      Efr: '𝔈',
                      efr: '𝔢',
                      eg: '⪚',
                      Egrave: 'È',
                      egrave: 'è',
                      egs: '⪖',
                      egsdot: '⪘',
                      el: '⪙',
                      Element: '∈',
                      elinters: '⏧',
                      ell: 'ℓ',
                      els: '⪕',
                      elsdot: '⪗',
                      Emacr: 'Ē',
                      emacr: 'ē',
                      empty: '∅',
                      emptyset: '∅',
                      EmptySmallSquare: '◻',
                      emptyv: '∅',
                      EmptyVerySmallSquare: '▫',
                      emsp: ' ',
                      emsp13: ' ',
                      emsp14: ' ',
                      ENG: 'Ŋ',
                      eng: 'ŋ',
                      ensp: ' ',
                      Eogon: 'Ę',
                      eogon: 'ę',
                      Eopf: '𝔼',
                      eopf: '𝕖',
                      epar: '⋕',
                      eparsl: '⧣',
                      eplus: '⩱',
                      epsi: 'ε',
                      Epsilon: 'Ε',
                      epsilon: 'ε',
                      epsiv: 'ϵ',
                      eqcirc: '≖',
                      eqcolon: '≕',
                      eqsim: '≂',
                      eqslantgtr: '⪖',
                      eqslantless: '⪕',
                      Equal: '⩵',
                      equals: '=',
                      EqualTilde: '≂',
                      equest: '≟',
                      Equilibrium: '⇌',
                      equiv: '≡',
                      equivDD: '⩸',
                      eqvparsl: '⧥',
                      erarr: '⥱',
                      erDot: '≓',
                      Escr: 'ℰ',
                      escr: 'ℯ',
                      esdot: '≐',
                      Esim: '⩳',
                      esim: '≂',
                      Eta: 'Η',
                      eta: 'η',
                      ETH: 'Ð',
                      eth: 'ð',
                      Euml: 'Ë',
                      euml: 'ë',
                      euro: '€',
                      excl: '!',
                      exist: '∃',
                      Exists: '∃',
                      expectation: 'ℰ',
                      ExponentialE: 'ⅇ',
                      exponentiale: 'ⅇ',
                      fallingdotseq: '≒',
                      Fcy: 'Ф',
                      fcy: 'ф',
                      female: '♀',
                      ffilig: 'ﬃ',
                      fflig: 'ﬀ',
                      ffllig: 'ﬄ',
                      Ffr: '𝔉',
                      ffr: '𝔣',
                      filig: 'ﬁ',
                      FilledSmallSquare: '◼',
                      FilledVerySmallSquare: '▪',
                      fjlig: 'fj',
                      flat: '♭',
                      fllig: 'ﬂ',
                      fltns: '▱',
                      fnof: 'ƒ',
                      Fopf: '𝔽',
                      fopf: '𝕗',
                      ForAll: '∀',
                      forall: '∀',
                      fork: '⋔',
                      forkv: '⫙',
                      Fouriertrf: 'ℱ',
                      fpartint: '⨍',
                      frac12: '½',
                      frac13: '⅓',
                      frac14: '¼',
                      frac15: '⅕',
                      frac16: '⅙',
                      frac18: '⅛',
                      frac23: '⅔',
                      frac25: '⅖',
                      frac34: '¾',
                      frac35: '⅗',
                      frac38: '⅜',
                      frac45: '⅘',
                      frac56: '⅚',
                      frac58: '⅝',
                      frac78: '⅞',
                      frasl: '⁄',
                      frown: '⌢',
                      Fscr: 'ℱ',
                      fscr: '𝒻',
                      gacute: 'ǵ',
                      Gamma: 'Γ',
                      gamma: 'γ',
                      Gammad: 'Ϝ',
                      gammad: 'ϝ',
                      gap: '⪆',
                      Gbreve: 'Ğ',
                      gbreve: 'ğ',
                      Gcedil: 'Ģ',
                      Gcirc: 'Ĝ',
                      gcirc: 'ĝ',
                      Gcy: 'Г',
                      gcy: 'г',
                      Gdot: 'Ġ',
                      gdot: 'ġ',
                      gE: '≧',
                      ge: '≥',
                      gEl: '⪌',
                      gel: '⋛',
                      geq: '≥',
                      geqq: '≧',
                      geqslant: '⩾',
                      ges: '⩾',
                      gescc: '⪩',
                      gesdot: '⪀',
                      gesdoto: '⪂',
                      gesdotol: '⪄',
                      gesl: '⋛︀',
                      gesles: '⪔',
                      Gfr: '𝔊',
                      gfr: '𝔤',
                      Gg: '⋙',
                      gg: '≫',
                      ggg: '⋙',
                      gimel: 'ℷ',
                      GJcy: 'Ѓ',
                      gjcy: 'ѓ',
                      gl: '≷',
                      gla: '⪥',
                      glE: '⪒',
                      glj: '⪤',
                      gnap: '⪊',
                      gnapprox: '⪊',
                      gnE: '≩',
                      gne: '⪈',
                      gneq: '⪈',
                      gneqq: '≩',
                      gnsim: '⋧',
                      Gopf: '𝔾',
                      gopf: '𝕘',
                      grave: '`',
                      GreaterEqual: '≥',
                      GreaterEqualLess: '⋛',
                      GreaterFullEqual: '≧',
                      GreaterGreater: '⪢',
                      GreaterLess: '≷',
                      GreaterSlantEqual: '⩾',
                      GreaterTilde: '≳',
                      Gscr: '𝒢',
                      gscr: 'ℊ',
                      gsim: '≳',
                      gsime: '⪎',
                      gsiml: '⪐',
                      GT: '>',
                      Gt: '≫',
                      gt: '>',
                      gtcc: '⪧',
                      gtcir: '⩺',
                      gtdot: '⋗',
                      gtlPar: '⦕',
                      gtquest: '⩼',
                      gtrapprox: '⪆',
                      gtrarr: '⥸',
                      gtrdot: '⋗',
                      gtreqless: '⋛',
                      gtreqqless: '⪌',
                      gtrless: '≷',
                      gtrsim: '≳',
                      gvertneqq: '≩︀',
                      gvnE: '≩︀',
                      Hacek: 'ˇ',
                      hairsp: ' ',
                      half: '½',
                      hamilt: 'ℋ',
                      HARDcy: 'Ъ',
                      hardcy: 'ъ',
                      hArr: '⇔',
                      harr: '↔',
                      harrcir: '⥈',
                      harrw: '↭',
                      Hat: '^',
                      hbar: 'ℏ',
                      Hcirc: 'Ĥ',
                      hcirc: 'ĥ',
                      hearts: '♥',
                      heartsuit: '♥',
                      hellip: '…',
                      hercon: '⊹',
                      Hfr: 'ℌ',
                      hfr: '𝔥',
                      HilbertSpace: 'ℋ',
                      hksearow: '⤥',
                      hkswarow: '⤦',
                      hoarr: '⇿',
                      homtht: '∻',
                      hookleftarrow: '↩',
                      hookrightarrow: '↪',
                      Hopf: 'ℍ',
                      hopf: '𝕙',
                      horbar: '―',
                      HorizontalLine: '─',
                      Hscr: 'ℋ',
                      hscr: '𝒽',
                      hslash: 'ℏ',
                      Hstrok: 'Ħ',
                      hstrok: 'ħ',
                      HumpDownHump: '≎',
                      HumpEqual: '≏',
                      hybull: '⁃',
                      hyphen: '‐',
                      Iacute: 'Í',
                      iacute: 'í',
                      ic: '⁣',
                      Icirc: 'Î',
                      icirc: 'î',
                      Icy: 'И',
                      icy: 'и',
                      Idot: 'İ',
                      IEcy: 'Е',
                      iecy: 'е',
                      iexcl: '¡',
                      iff: '⇔',
                      Ifr: 'ℑ',
                      ifr: '𝔦',
                      Igrave: 'Ì',
                      igrave: 'ì',
                      ii: 'ⅈ',
                      iiiint: '⨌',
                      iiint: '∭',
                      iinfin: '⧜',
                      iiota: '℩',
                      IJlig: 'Ĳ',
                      ijlig: 'ĳ',
                      Im: 'ℑ',
                      Imacr: 'Ī',
                      imacr: 'ī',
                      image: 'ℑ',
                      ImaginaryI: 'ⅈ',
                      imagline: 'ℐ',
                      imagpart: 'ℑ',
                      imath: 'ı',
                      imof: '⊷',
                      imped: 'Ƶ',
                      Implies: '⇒',
                      in: '∈',
                      incare: '℅',
                      infin: '∞',
                      infintie: '⧝',
                      inodot: 'ı',
                      Int: '∬',
                      int: '∫',
                      intcal: '⊺',
                      integers: 'ℤ',
                      Integral: '∫',
                      intercal: '⊺',
                      Intersection: '⋂',
                      intlarhk: '⨗',
                      intprod: '⨼',
                      InvisibleComma: '⁣',
                      InvisibleTimes: '⁢',
                      IOcy: 'Ё',
                      iocy: 'ё',
                      Iogon: 'Į',
                      iogon: 'į',
                      Iopf: '𝕀',
                      iopf: '𝕚',
                      Iota: 'Ι',
                      iota: 'ι',
                      iprod: '⨼',
                      iquest: '¿',
                      Iscr: 'ℐ',
                      iscr: '𝒾',
                      isin: '∈',
                      isindot: '⋵',
                      isinE: '⋹',
                      isins: '⋴',
                      isinsv: '⋳',
                      isinv: '∈',
                      it: '⁢',
                      Itilde: 'Ĩ',
                      itilde: 'ĩ',
                      Iukcy: 'І',
                      iukcy: 'і',
                      Iuml: 'Ï',
                      iuml: 'ï',
                      Jcirc: 'Ĵ',
                      jcirc: 'ĵ',
                      Jcy: 'Й',
                      jcy: 'й',
                      Jfr: '𝔍',
                      jfr: '𝔧',
                      jmath: 'ȷ',
                      Jopf: '𝕁',
                      jopf: '𝕛',
                      Jscr: '𝒥',
                      jscr: '𝒿',
                      Jsercy: 'Ј',
                      jsercy: 'ј',
                      Jukcy: 'Є',
                      jukcy: 'є',
                      Kappa: 'Κ',
                      kappa: 'κ',
                      kappav: 'ϰ',
                      Kcedil: 'Ķ',
                      kcedil: 'ķ',
                      Kcy: 'К',
                      kcy: 'к',
                      Kfr: '𝔎',
                      kfr: '𝔨',
                      kgreen: 'ĸ',
                      KHcy: 'Х',
                      khcy: 'х',
                      KJcy: 'Ќ',
                      kjcy: 'ќ',
                      Kopf: '𝕂',
                      kopf: '𝕜',
                      Kscr: '𝒦',
                      kscr: '𝓀',
                      lAarr: '⇚',
                      Lacute: 'Ĺ',
                      lacute: 'ĺ',
                      laemptyv: '⦴',
                      lagran: 'ℒ',
                      Lambda: 'Λ',
                      lambda: 'λ',
                      Lang: '⟪',
                      lang: '⟨',
                      langd: '⦑',
                      langle: '⟨',
                      lap: '⪅',
                      Laplacetrf: 'ℒ',
                      laquo: '«',
                      Larr: '↞',
                      lArr: '⇐',
                      larr: '←',
                      larrb: '⇤',
                      larrbfs: '⤟',
                      larrfs: '⤝',
                      larrhk: '↩',
                      larrlp: '↫',
                      larrpl: '⤹',
                      larrsim: '⥳',
                      larrtl: '↢',
                      lat: '⪫',
                      lAtail: '⤛',
                      latail: '⤙',
                      late: '⪭',
                      lates: '⪭︀',
                      lBarr: '⤎',
                      lbarr: '⤌',
                      lbbrk: '❲',
                      lbrace: '{',
                      lbrack: '[',
                      lbrke: '⦋',
                      lbrksld: '⦏',
                      lbrkslu: '⦍',
                      Lcaron: 'Ľ',
                      lcaron: 'ľ',
                      Lcedil: 'Ļ',
                      lcedil: 'ļ',
                      lceil: '⌈',
                      lcub: '{',
                      Lcy: 'Л',
                      lcy: 'л',
                      ldca: '⤶',
                      ldquo: '“',
                      ldquor: '„',
                      ldrdhar: '⥧',
                      ldrushar: '⥋',
                      ldsh: '↲',
                      lE: '≦',
                      le: '≤',
                      LeftAngleBracket: '⟨',
                      LeftArrow: '←',
                      Leftarrow: '⇐',
                      leftarrow: '←',
                      LeftArrowBar: '⇤',
                      LeftArrowRightArrow: '⇆',
                      leftarrowtail: '↢',
                      LeftCeiling: '⌈',
                      LeftDoubleBracket: '⟦',
                      LeftDownTeeVector: '⥡',
                      LeftDownVector: '⇃',
                      LeftDownVectorBar: '⥙',
                      LeftFloor: '⌊',
                      leftharpoondown: '↽',
                      leftharpoonup: '↼',
                      leftleftarrows: '⇇',
                      LeftRightArrow: '↔',
                      Leftrightarrow: '⇔',
                      leftrightarrow: '↔',
                      leftrightarrows: '⇆',
                      leftrightharpoons: '⇋',
                      leftrightsquigarrow: '↭',
                      LeftRightVector: '⥎',
                      LeftTee: '⊣',
                      LeftTeeArrow: '↤',
                      LeftTeeVector: '⥚',
                      leftthreetimes: '⋋',
                      LeftTriangle: '⊲',
                      LeftTriangleBar: '⧏',
                      LeftTriangleEqual: '⊴',
                      LeftUpDownVector: '⥑',
                      LeftUpTeeVector: '⥠',
                      LeftUpVector: '↿',
                      LeftUpVectorBar: '⥘',
                      LeftVector: '↼',
                      LeftVectorBar: '⥒',
                      lEg: '⪋',
                      leg: '⋚',
                      leq: '≤',
                      leqq: '≦',
                      leqslant: '⩽',
                      les: '⩽',
                      lescc: '⪨',
                      lesdot: '⩿',
                      lesdoto: '⪁',
                      lesdotor: '⪃',
                      lesg: '⋚︀',
                      lesges: '⪓',
                      lessapprox: '⪅',
                      lessdot: '⋖',
                      lesseqgtr: '⋚',
                      lesseqqgtr: '⪋',
                      LessEqualGreater: '⋚',
                      LessFullEqual: '≦',
                      LessGreater: '≶',
                      lessgtr: '≶',
                      LessLess: '⪡',
                      lesssim: '≲',
                      LessSlantEqual: '⩽',
                      LessTilde: '≲',
                      lfisht: '⥼',
                      lfloor: '⌊',
                      Lfr: '𝔏',
                      lfr: '𝔩',
                      lg: '≶',
                      lgE: '⪑',
                      lHar: '⥢',
                      lhard: '↽',
                      lharu: '↼',
                      lharul: '⥪',
                      lhblk: '▄',
                      LJcy: 'Љ',
                      ljcy: 'љ',
                      Ll: '⋘',
                      ll: '≪',
                      llarr: '⇇',
                      llcorner: '⌞',
                      Lleftarrow: '⇚',
                      llhard: '⥫',
                      lltri: '◺',
                      Lmidot: 'Ŀ',
                      lmidot: 'ŀ',
                      lmoust: '⎰',
                      lmoustache: '⎰',
                      lnap: '⪉',
                      lnapprox: '⪉',
                      lnE: '≨',
                      lne: '⪇',
                      lneq: '⪇',
                      lneqq: '≨',
                      lnsim: '⋦',
                      loang: '⟬',
                      loarr: '⇽',
                      lobrk: '⟦',
                      LongLeftArrow: '⟵',
                      Longleftarrow: '⟸',
                      longleftarrow: '⟵',
                      LongLeftRightArrow: '⟷',
                      Longleftrightarrow: '⟺',
                      longleftrightarrow: '⟷',
                      longmapsto: '⟼',
                      LongRightArrow: '⟶',
                      Longrightarrow: '⟹',
                      longrightarrow: '⟶',
                      looparrowleft: '↫',
                      looparrowright: '↬',
                      lopar: '⦅',
                      Lopf: '𝕃',
                      lopf: '𝕝',
                      loplus: '⨭',
                      lotimes: '⨴',
                      lowast: '∗',
                      lowbar: '_',
                      LowerLeftArrow: '↙',
                      LowerRightArrow: '↘',
                      loz: '◊',
                      lozenge: '◊',
                      lozf: '⧫',
                      lpar: '(',
                      lparlt: '⦓',
                      lrarr: '⇆',
                      lrcorner: '⌟',
                      lrhar: '⇋',
                      lrhard: '⥭',
                      lrm: '‎',
                      lrtri: '⊿',
                      lsaquo: '‹',
                      Lscr: 'ℒ',
                      lscr: '𝓁',
                      Lsh: '↰',
                      lsh: '↰',
                      lsim: '≲',
                      lsime: '⪍',
                      lsimg: '⪏',
                      lsqb: '[',
                      lsquo: '‘',
                      lsquor: '‚',
                      Lstrok: 'Ł',
                      lstrok: 'ł',
                      LT: '<',
                      Lt: '≪',
                      lt: '<',
                      ltcc: '⪦',
                      ltcir: '⩹',
                      ltdot: '⋖',
                      lthree: '⋋',
                      ltimes: '⋉',
                      ltlarr: '⥶',
                      ltquest: '⩻',
                      ltri: '◃',
                      ltrie: '⊴',
                      ltrif: '◂',
                      ltrPar: '⦖',
                      lurdshar: '⥊',
                      luruhar: '⥦',
                      lvertneqq: '≨︀',
                      lvnE: '≨︀',
                      macr: '¯',
                      male: '♂',
                      malt: '✠',
                      maltese: '✠',
                      Map: '⤅',
                      map: '↦',
                      mapsto: '↦',
                      mapstodown: '↧',
                      mapstoleft: '↤',
                      mapstoup: '↥',
                      marker: '▮',
                      mcomma: '⨩',
                      Mcy: 'М',
                      mcy: 'м',
                      mdash: '—',
                      mDDot: '∺',
                      measuredangle: '∡',
                      MediumSpace: ' ',
                      Mellintrf: 'ℳ',
                      Mfr: '𝔐',
                      mfr: '𝔪',
                      mho: '℧',
                      micro: 'µ',
                      mid: '∣',
                      midast: '*',
                      midcir: '⫰',
                      middot: '·',
                      minus: '−',
                      minusb: '⊟',
                      minusd: '∸',
                      minusdu: '⨪',
                      MinusPlus: '∓',
                      mlcp: '⫛',
                      mldr: '…',
                      mnplus: '∓',
                      models: '⊧',
                      Mopf: '𝕄',
                      mopf: '𝕞',
                      mp: '∓',
                      Mscr: 'ℳ',
                      mscr: '𝓂',
                      mstpos: '∾',
                      Mu: 'Μ',
                      mu: 'μ',
                      multimap: '⊸',
                      mumap: '⊸',
                      nabla: '∇',
                      Nacute: 'Ń',
                      nacute: 'ń',
                      nang: '∠⃒',
                      nap: '≉',
                      napE: '⩰̸',
                      napid: '≋̸',
                      napos: 'ŉ',
                      napprox: '≉',
                      natur: '♮',
                      natural: '♮',
                      naturals: 'ℕ',
                      nbsp: ' ',
                      nbump: '≎̸',
                      nbumpe: '≏̸',
                      ncap: '⩃',
                      Ncaron: 'Ň',
                      ncaron: 'ň',
                      Ncedil: 'Ņ',
                      ncedil: 'ņ',
                      ncong: '≇',
                      ncongdot: '⩭̸',
                      ncup: '⩂',
                      Ncy: 'Н',
                      ncy: 'н',
                      ndash: '–',
                      ne: '≠',
                      nearhk: '⤤',
                      neArr: '⇗',
                      nearr: '↗',
                      nearrow: '↗',
                      nedot: '≐̸',
                      NegativeMediumSpace: '​',
                      NegativeThickSpace: '​',
                      NegativeThinSpace: '​',
                      NegativeVeryThinSpace: '​',
                      nequiv: '≢',
                      nesear: '⤨',
                      nesim: '≂̸',
                      NestedGreaterGreater: '≫',
                      NestedLessLess: '≪',
                      NewLine: `
`,
                      nexist: '∄',
                      nexists: '∄',
                      Nfr: '𝔑',
                      nfr: '𝔫',
                      ngE: '≧̸',
                      nge: '≱',
                      ngeq: '≱',
                      ngeqq: '≧̸',
                      ngeqslant: '⩾̸',
                      nges: '⩾̸',
                      nGg: '⋙̸',
                      ngsim: '≵',
                      nGt: '≫⃒',
                      ngt: '≯',
                      ngtr: '≯',
                      nGtv: '≫̸',
                      nhArr: '⇎',
                      nharr: '↮',
                      nhpar: '⫲',
                      ni: '∋',
                      nis: '⋼',
                      nisd: '⋺',
                      niv: '∋',
                      NJcy: 'Њ',
                      njcy: 'њ',
                      nlArr: '⇍',
                      nlarr: '↚',
                      nldr: '‥',
                      nlE: '≦̸',
                      nle: '≰',
                      nLeftarrow: '⇍',
                      nleftarrow: '↚',
                      nLeftrightarrow: '⇎',
                      nleftrightarrow: '↮',
                      nleq: '≰',
                      nleqq: '≦̸',
                      nleqslant: '⩽̸',
                      nles: '⩽̸',
                      nless: '≮',
                      nLl: '⋘̸',
                      nlsim: '≴',
                      nLt: '≪⃒',
                      nlt: '≮',
                      nltri: '⋪',
                      nltrie: '⋬',
                      nLtv: '≪̸',
                      nmid: '∤',
                      NoBreak: '⁠',
                      NonBreakingSpace: ' ',
                      Nopf: 'ℕ',
                      nopf: '𝕟',
                      Not: '⫬',
                      not: '¬',
                      NotCongruent: '≢',
                      NotCupCap: '≭',
                      NotDoubleVerticalBar: '∦',
                      NotElement: '∉',
                      NotEqual: '≠',
                      NotEqualTilde: '≂̸',
                      NotExists: '∄',
                      NotGreater: '≯',
                      NotGreaterEqual: '≱',
                      NotGreaterFullEqual: '≧̸',
                      NotGreaterGreater: '≫̸',
                      NotGreaterLess: '≹',
                      NotGreaterSlantEqual: '⩾̸',
                      NotGreaterTilde: '≵',
                      NotHumpDownHump: '≎̸',
                      NotHumpEqual: '≏̸',
                      notin: '∉',
                      notindot: '⋵̸',
                      notinE: '⋹̸',
                      notinva: '∉',
                      notinvb: '⋷',
                      notinvc: '⋶',
                      NotLeftTriangle: '⋪',
                      NotLeftTriangleBar: '⧏̸',
                      NotLeftTriangleEqual: '⋬',
                      NotLess: '≮',
                      NotLessEqual: '≰',
                      NotLessGreater: '≸',
                      NotLessLess: '≪̸',
                      NotLessSlantEqual: '⩽̸',
                      NotLessTilde: '≴',
                      NotNestedGreaterGreater: '⪢̸',
                      NotNestedLessLess: '⪡̸',
                      notni: '∌',
                      notniva: '∌',
                      notnivb: '⋾',
                      notnivc: '⋽',
                      NotPrecedes: '⊀',
                      NotPrecedesEqual: '⪯̸',
                      NotPrecedesSlantEqual: '⋠',
                      NotReverseElement: '∌',
                      NotRightTriangle: '⋫',
                      NotRightTriangleBar: '⧐̸',
                      NotRightTriangleEqual: '⋭',
                      NotSquareSubset: '⊏̸',
                      NotSquareSubsetEqual: '⋢',
                      NotSquareSuperset: '⊐̸',
                      NotSquareSupersetEqual: '⋣',
                      NotSubset: '⊂⃒',
                      NotSubsetEqual: '⊈',
                      NotSucceeds: '⊁',
                      NotSucceedsEqual: '⪰̸',
                      NotSucceedsSlantEqual: '⋡',
                      NotSucceedsTilde: '≿̸',
                      NotSuperset: '⊃⃒',
                      NotSupersetEqual: '⊉',
                      NotTilde: '≁',
                      NotTildeEqual: '≄',
                      NotTildeFullEqual: '≇',
                      NotTildeTilde: '≉',
                      NotVerticalBar: '∤',
                      npar: '∦',
                      nparallel: '∦',
                      nparsl: '⫽⃥',
                      npart: '∂̸',
                      npolint: '⨔',
                      npr: '⊀',
                      nprcue: '⋠',
                      npre: '⪯̸',
                      nprec: '⊀',
                      npreceq: '⪯̸',
                      nrArr: '⇏',
                      nrarr: '↛',
                      nrarrc: '⤳̸',
                      nrarrw: '↝̸',
                      nRightarrow: '⇏',
                      nrightarrow: '↛',
                      nrtri: '⋫',
                      nrtrie: '⋭',
                      nsc: '⊁',
                      nsccue: '⋡',
                      nsce: '⪰̸',
                      Nscr: '𝒩',
                      nscr: '𝓃',
                      nshortmid: '∤',
                      nshortparallel: '∦',
                      nsim: '≁',
                      nsime: '≄',
                      nsimeq: '≄',
                      nsmid: '∤',
                      nspar: '∦',
                      nsqsube: '⋢',
                      nsqsupe: '⋣',
                      nsub: '⊄',
                      nsubE: '⫅̸',
                      nsube: '⊈',
                      nsubset: '⊂⃒',
                      nsubseteq: '⊈',
                      nsubseteqq: '⫅̸',
                      nsucc: '⊁',
                      nsucceq: '⪰̸',
                      nsup: '⊅',
                      nsupE: '⫆̸',
                      nsupe: '⊉',
                      nsupset: '⊃⃒',
                      nsupseteq: '⊉',
                      nsupseteqq: '⫆̸',
                      ntgl: '≹',
                      Ntilde: 'Ñ',
                      ntilde: 'ñ',
                      ntlg: '≸',
                      ntriangleleft: '⋪',
                      ntrianglelefteq: '⋬',
                      ntriangleright: '⋫',
                      ntrianglerighteq: '⋭',
                      Nu: 'Ν',
                      nu: 'ν',
                      num: '#',
                      numero: '№',
                      numsp: ' ',
                      nvap: '≍⃒',
                      nVDash: '⊯',
                      nVdash: '⊮',
                      nvDash: '⊭',
                      nvdash: '⊬',
                      nvge: '≥⃒',
                      nvgt: '>⃒',
                      nvHarr: '⤄',
                      nvinfin: '⧞',
                      nvlArr: '⤂',
                      nvle: '≤⃒',
                      nvlt: '<⃒',
                      nvltrie: '⊴⃒',
                      nvrArr: '⤃',
                      nvrtrie: '⊵⃒',
                      nvsim: '∼⃒',
                      nwarhk: '⤣',
                      nwArr: '⇖',
                      nwarr: '↖',
                      nwarrow: '↖',
                      nwnear: '⤧',
                      Oacute: 'Ó',
                      oacute: 'ó',
                      oast: '⊛',
                      ocir: '⊚',
                      Ocirc: 'Ô',
                      ocirc: 'ô',
                      Ocy: 'О',
                      ocy: 'о',
                      odash: '⊝',
                      Odblac: 'Ő',
                      odblac: 'ő',
                      odiv: '⨸',
                      odot: '⊙',
                      odsold: '⦼',
                      OElig: 'Œ',
                      oelig: 'œ',
                      ofcir: '⦿',
                      Ofr: '𝔒',
                      ofr: '𝔬',
                      ogon: '˛',
                      Ograve: 'Ò',
                      ograve: 'ò',
                      ogt: '⧁',
                      ohbar: '⦵',
                      ohm: 'Ω',
                      oint: '∮',
                      olarr: '↺',
                      olcir: '⦾',
                      olcross: '⦻',
                      oline: '‾',
                      olt: '⧀',
                      Omacr: 'Ō',
                      omacr: 'ō',
                      Omega: 'Ω',
                      omega: 'ω',
                      Omicron: 'Ο',
                      omicron: 'ο',
                      omid: '⦶',
                      ominus: '⊖',
                      Oopf: '𝕆',
                      oopf: '𝕠',
                      opar: '⦷',
                      OpenCurlyDoubleQuote: '“',
                      OpenCurlyQuote: '‘',
                      operp: '⦹',
                      oplus: '⊕',
                      Or: '⩔',
                      or: '∨',
                      orarr: '↻',
                      ord: '⩝',
                      order: 'ℴ',
                      orderof: 'ℴ',
                      ordf: 'ª',
                      ordm: 'º',
                      origof: '⊶',
                      oror: '⩖',
                      orslope: '⩗',
                      orv: '⩛',
                      oS: 'Ⓢ',
                      Oscr: '𝒪',
                      oscr: 'ℴ',
                      Oslash: 'Ø',
                      oslash: 'ø',
                      osol: '⊘',
                      Otilde: 'Õ',
                      otilde: 'õ',
                      Otimes: '⨷',
                      otimes: '⊗',
                      otimesas: '⨶',
                      Ouml: 'Ö',
                      ouml: 'ö',
                      ovbar: '⌽',
                      OverBar: '‾',
                      OverBrace: '⏞',
                      OverBracket: '⎴',
                      OverParenthesis: '⏜',
                      par: '∥',
                      para: '¶',
                      parallel: '∥',
                      parsim: '⫳',
                      parsl: '⫽',
                      part: '∂',
                      PartialD: '∂',
                      Pcy: 'П',
                      pcy: 'п',
                      percnt: '%',
                      period: '.',
                      permil: '‰',
                      perp: '⊥',
                      pertenk: '‱',
                      Pfr: '𝔓',
                      pfr: '𝔭',
                      Phi: 'Φ',
                      phi: 'φ',
                      phiv: 'ϕ',
                      phmmat: 'ℳ',
                      phone: '☎',
                      Pi: 'Π',
                      pi: 'π',
                      pitchfork: '⋔',
                      piv: 'ϖ',
                      planck: 'ℏ',
                      planckh: 'ℎ',
                      plankv: 'ℏ',
                      plus: '+',
                      plusacir: '⨣',
                      plusb: '⊞',
                      pluscir: '⨢',
                      plusdo: '∔',
                      plusdu: '⨥',
                      pluse: '⩲',
                      PlusMinus: '±',
                      plusmn: '±',
                      plussim: '⨦',
                      plustwo: '⨧',
                      pm: '±',
                      Poincareplane: 'ℌ',
                      pointint: '⨕',
                      Popf: 'ℙ',
                      popf: '𝕡',
                      pound: '£',
                      Pr: '⪻',
                      pr: '≺',
                      prap: '⪷',
                      prcue: '≼',
                      prE: '⪳',
                      pre: '⪯',
                      prec: '≺',
                      precapprox: '⪷',
                      preccurlyeq: '≼',
                      Precedes: '≺',
                      PrecedesEqual: '⪯',
                      PrecedesSlantEqual: '≼',
                      PrecedesTilde: '≾',
                      preceq: '⪯',
                      precnapprox: '⪹',
                      precneqq: '⪵',
                      precnsim: '⋨',
                      precsim: '≾',
                      Prime: '″',
                      prime: '′',
                      primes: 'ℙ',
                      prnap: '⪹',
                      prnE: '⪵',
                      prnsim: '⋨',
                      prod: '∏',
                      Product: '∏',
                      profalar: '⌮',
                      profline: '⌒',
                      profsurf: '⌓',
                      prop: '∝',
                      Proportion: '∷',
                      Proportional: '∝',
                      propto: '∝',
                      prsim: '≾',
                      prurel: '⊰',
                      Pscr: '𝒫',
                      pscr: '𝓅',
                      Psi: 'Ψ',
                      psi: 'ψ',
                      puncsp: ' ',
                      Qfr: '𝔔',
                      qfr: '𝔮',
                      qint: '⨌',
                      Qopf: 'ℚ',
                      qopf: '𝕢',
                      qprime: '⁗',
                      Qscr: '𝒬',
                      qscr: '𝓆',
                      quaternions: 'ℍ',
                      quatint: '⨖',
                      quest: '?',
                      questeq: '≟',
                      QUOT: '"',
                      quot: '"',
                      rAarr: '⇛',
                      race: '∽̱',
                      Racute: 'Ŕ',
                      racute: 'ŕ',
                      radic: '√',
                      raemptyv: '⦳',
                      Rang: '⟫',
                      rang: '⟩',
                      rangd: '⦒',
                      range: '⦥',
                      rangle: '⟩',
                      raquo: '»',
                      Rarr: '↠',
                      rArr: '⇒',
                      rarr: '→',
                      rarrap: '⥵',
                      rarrb: '⇥',
                      rarrbfs: '⤠',
                      rarrc: '⤳',
                      rarrfs: '⤞',
                      rarrhk: '↪',
                      rarrlp: '↬',
                      rarrpl: '⥅',
                      rarrsim: '⥴',
                      Rarrtl: '⤖',
                      rarrtl: '↣',
                      rarrw: '↝',
                      rAtail: '⤜',
                      ratail: '⤚',
                      ratio: '∶',
                      rationals: 'ℚ',
                      RBarr: '⤐',
                      rBarr: '⤏',
                      rbarr: '⤍',
                      rbbrk: '❳',
                      rbrace: '}',
                      rbrack: ']',
                      rbrke: '⦌',
                      rbrksld: '⦎',
                      rbrkslu: '⦐',
                      Rcaron: 'Ř',
                      rcaron: 'ř',
                      Rcedil: 'Ŗ',
                      rcedil: 'ŗ',
                      rceil: '⌉',
                      rcub: '}',
                      Rcy: 'Р',
                      rcy: 'р',
                      rdca: '⤷',
                      rdldhar: '⥩',
                      rdquo: '”',
                      rdquor: '”',
                      rdsh: '↳',
                      Re: 'ℜ',
                      real: 'ℜ',
                      realine: 'ℛ',
                      realpart: 'ℜ',
                      reals: 'ℝ',
                      rect: '▭',
                      REG: '®',
                      reg: '®',
                      ReverseElement: '∋',
                      ReverseEquilibrium: '⇋',
                      ReverseUpEquilibrium: '⥯',
                      rfisht: '⥽',
                      rfloor: '⌋',
                      Rfr: 'ℜ',
                      rfr: '𝔯',
                      rHar: '⥤',
                      rhard: '⇁',
                      rharu: '⇀',
                      rharul: '⥬',
                      Rho: 'Ρ',
                      rho: 'ρ',
                      rhov: 'ϱ',
                      RightAngleBracket: '⟩',
                      RightArrow: '→',
                      Rightarrow: '⇒',
                      rightarrow: '→',
                      RightArrowBar: '⇥',
                      RightArrowLeftArrow: '⇄',
                      rightarrowtail: '↣',
                      RightCeiling: '⌉',
                      RightDoubleBracket: '⟧',
                      RightDownTeeVector: '⥝',
                      RightDownVector: '⇂',
                      RightDownVectorBar: '⥕',
                      RightFloor: '⌋',
                      rightharpoondown: '⇁',
                      rightharpoonup: '⇀',
                      rightleftarrows: '⇄',
                      rightleftharpoons: '⇌',
                      rightrightarrows: '⇉',
                      rightsquigarrow: '↝',
                      RightTee: '⊢',
                      RightTeeArrow: '↦',
                      RightTeeVector: '⥛',
                      rightthreetimes: '⋌',
                      RightTriangle: '⊳',
                      RightTriangleBar: '⧐',
                      RightTriangleEqual: '⊵',
                      RightUpDownVector: '⥏',
                      RightUpTeeVector: '⥜',
                      RightUpVector: '↾',
                      RightUpVectorBar: '⥔',
                      RightVector: '⇀',
                      RightVectorBar: '⥓',
                      ring: '˚',
                      risingdotseq: '≓',
                      rlarr: '⇄',
                      rlhar: '⇌',
                      rlm: '‏',
                      rmoust: '⎱',
                      rmoustache: '⎱',
                      rnmid: '⫮',
                      roang: '⟭',
                      roarr: '⇾',
                      robrk: '⟧',
                      ropar: '⦆',
                      Ropf: 'ℝ',
                      ropf: '𝕣',
                      roplus: '⨮',
                      rotimes: '⨵',
                      RoundImplies: '⥰',
                      rpar: ')',
                      rpargt: '⦔',
                      rppolint: '⨒',
                      rrarr: '⇉',
                      Rrightarrow: '⇛',
                      rsaquo: '›',
                      Rscr: 'ℛ',
                      rscr: '𝓇',
                      Rsh: '↱',
                      rsh: '↱',
                      rsqb: ']',
                      rsquo: '’',
                      rsquor: '’',
                      rthree: '⋌',
                      rtimes: '⋊',
                      rtri: '▹',
                      rtrie: '⊵',
                      rtrif: '▸',
                      rtriltri: '⧎',
                      RuleDelayed: '⧴',
                      ruluhar: '⥨',
                      rx: '℞',
                      Sacute: 'Ś',
                      sacute: 'ś',
                      sbquo: '‚',
                      Sc: '⪼',
                      sc: '≻',
                      scap: '⪸',
                      Scaron: 'Š',
                      scaron: 'š',
                      sccue: '≽',
                      scE: '⪴',
                      sce: '⪰',
                      Scedil: 'Ş',
                      scedil: 'ş',
                      Scirc: 'Ŝ',
                      scirc: 'ŝ',
                      scnap: '⪺',
                      scnE: '⪶',
                      scnsim: '⋩',
                      scpolint: '⨓',
                      scsim: '≿',
                      Scy: 'С',
                      scy: 'с',
                      sdot: '⋅',
                      sdotb: '⊡',
                      sdote: '⩦',
                      searhk: '⤥',
                      seArr: '⇘',
                      searr: '↘',
                      searrow: '↘',
                      sect: '§',
                      semi: ';',
                      seswar: '⤩',
                      setminus: '∖',
                      setmn: '∖',
                      sext: '✶',
                      Sfr: '𝔖',
                      sfr: '𝔰',
                      sfrown: '⌢',
                      sharp: '♯',
                      SHCHcy: 'Щ',
                      shchcy: 'щ',
                      SHcy: 'Ш',
                      shcy: 'ш',
                      ShortDownArrow: '↓',
                      ShortLeftArrow: '←',
                      shortmid: '∣',
                      shortparallel: '∥',
                      ShortRightArrow: '→',
                      ShortUpArrow: '↑',
                      shy: '­',
                      Sigma: 'Σ',
                      sigma: 'σ',
                      sigmaf: 'ς',
                      sigmav: 'ς',
                      sim: '∼',
                      simdot: '⩪',
                      sime: '≃',
                      simeq: '≃',
                      simg: '⪞',
                      simgE: '⪠',
                      siml: '⪝',
                      simlE: '⪟',
                      simne: '≆',
                      simplus: '⨤',
                      simrarr: '⥲',
                      slarr: '←',
                      SmallCircle: '∘',
                      smallsetminus: '∖',
                      smashp: '⨳',
                      smeparsl: '⧤',
                      smid: '∣',
                      smile: '⌣',
                      smt: '⪪',
                      smte: '⪬',
                      smtes: '⪬︀',
                      SOFTcy: 'Ь',
                      softcy: 'ь',
                      sol: '/',
                      solb: '⧄',
                      solbar: '⌿',
                      Sopf: '𝕊',
                      sopf: '𝕤',
                      spades: '♠',
                      spadesuit: '♠',
                      spar: '∥',
                      sqcap: '⊓',
                      sqcaps: '⊓︀',
                      sqcup: '⊔',
                      sqcups: '⊔︀',
                      Sqrt: '√',
                      sqsub: '⊏',
                      sqsube: '⊑',
                      sqsubset: '⊏',
                      sqsubseteq: '⊑',
                      sqsup: '⊐',
                      sqsupe: '⊒',
                      sqsupset: '⊐',
                      sqsupseteq: '⊒',
                      squ: '□',
                      Square: '□',
                      square: '□',
                      SquareIntersection: '⊓',
                      SquareSubset: '⊏',
                      SquareSubsetEqual: '⊑',
                      SquareSuperset: '⊐',
                      SquareSupersetEqual: '⊒',
                      SquareUnion: '⊔',
                      squarf: '▪',
                      squf: '▪',
                      srarr: '→',
                      Sscr: '𝒮',
                      sscr: '𝓈',
                      ssetmn: '∖',
                      ssmile: '⌣',
                      sstarf: '⋆',
                      Star: '⋆',
                      star: '☆',
                      starf: '★',
                      straightepsilon: 'ϵ',
                      straightphi: 'ϕ',
                      strns: '¯',
                      Sub: '⋐',
                      sub: '⊂',
                      subdot: '⪽',
                      subE: '⫅',
                      sube: '⊆',
                      subedot: '⫃',
                      submult: '⫁',
                      subnE: '⫋',
                      subne: '⊊',
                      subplus: '⪿',
                      subrarr: '⥹',
                      Subset: '⋐',
                      subset: '⊂',
                      subseteq: '⊆',
                      subseteqq: '⫅',
                      SubsetEqual: '⊆',
                      subsetneq: '⊊',
                      subsetneqq: '⫋',
                      subsim: '⫇',
                      subsub: '⫕',
                      subsup: '⫓',
                      succ: '≻',
                      succapprox: '⪸',
                      succcurlyeq: '≽',
                      Succeeds: '≻',
                      SucceedsEqual: '⪰',
                      SucceedsSlantEqual: '≽',
                      SucceedsTilde: '≿',
                      succeq: '⪰',
                      succnapprox: '⪺',
                      succneqq: '⪶',
                      succnsim: '⋩',
                      succsim: '≿',
                      SuchThat: '∋',
                      Sum: '∑',
                      sum: '∑',
                      sung: '♪',
                      Sup: '⋑',
                      sup: '⊃',
                      sup1: '¹',
                      sup2: '²',
                      sup3: '³',
                      supdot: '⪾',
                      supdsub: '⫘',
                      supE: '⫆',
                      supe: '⊇',
                      supedot: '⫄',
                      Superset: '⊃',
                      SupersetEqual: '⊇',
                      suphsol: '⟉',
                      suphsub: '⫗',
                      suplarr: '⥻',
                      supmult: '⫂',
                      supnE: '⫌',
                      supne: '⊋',
                      supplus: '⫀',
                      Supset: '⋑',
                      supset: '⊃',
                      supseteq: '⊇',
                      supseteqq: '⫆',
                      supsetneq: '⊋',
                      supsetneqq: '⫌',
                      supsim: '⫈',
                      supsub: '⫔',
                      supsup: '⫖',
                      swarhk: '⤦',
                      swArr: '⇙',
                      swarr: '↙',
                      swarrow: '↙',
                      swnwar: '⤪',
                      szlig: 'ß',
                      Tab: '	',
                      target: '⌖',
                      Tau: 'Τ',
                      tau: 'τ',
                      tbrk: '⎴',
                      Tcaron: 'Ť',
                      tcaron: 'ť',
                      Tcedil: 'Ţ',
                      tcedil: 'ţ',
                      Tcy: 'Т',
                      tcy: 'т',
                      tdot: '⃛',
                      telrec: '⌕',
                      Tfr: '𝔗',
                      tfr: '𝔱',
                      there4: '∴',
                      Therefore: '∴',
                      therefore: '∴',
                      Theta: 'Θ',
                      theta: 'θ',
                      thetasym: 'ϑ',
                      thetav: 'ϑ',
                      thickapprox: '≈',
                      thicksim: '∼',
                      ThickSpace: '  ',
                      thinsp: ' ',
                      ThinSpace: ' ',
                      thkap: '≈',
                      thksim: '∼',
                      THORN: 'Þ',
                      thorn: 'þ',
                      Tilde: '∼',
                      tilde: '˜',
                      TildeEqual: '≃',
                      TildeFullEqual: '≅',
                      TildeTilde: '≈',
                      times: '×',
                      timesb: '⊠',
                      timesbar: '⨱',
                      timesd: '⨰',
                      tint: '∭',
                      toea: '⤨',
                      top: '⊤',
                      topbot: '⌶',
                      topcir: '⫱',
                      Topf: '𝕋',
                      topf: '𝕥',
                      topfork: '⫚',
                      tosa: '⤩',
                      tprime: '‴',
                      TRADE: '™',
                      trade: '™',
                      triangle: '▵',
                      triangledown: '▿',
                      triangleleft: '◃',
                      trianglelefteq: '⊴',
                      triangleq: '≜',
                      triangleright: '▹',
                      trianglerighteq: '⊵',
                      tridot: '◬',
                      trie: '≜',
                      triminus: '⨺',
                      TripleDot: '⃛',
                      triplus: '⨹',
                      trisb: '⧍',
                      tritime: '⨻',
                      trpezium: '⏢',
                      Tscr: '𝒯',
                      tscr: '𝓉',
                      TScy: 'Ц',
                      tscy: 'ц',
                      TSHcy: 'Ћ',
                      tshcy: 'ћ',
                      Tstrok: 'Ŧ',
                      tstrok: 'ŧ',
                      twixt: '≬',
                      twoheadleftarrow: '↞',
                      twoheadrightarrow: '↠',
                      Uacute: 'Ú',
                      uacute: 'ú',
                      Uarr: '↟',
                      uArr: '⇑',
                      uarr: '↑',
                      Uarrocir: '⥉',
                      Ubrcy: 'Ў',
                      ubrcy: 'ў',
                      Ubreve: 'Ŭ',
                      ubreve: 'ŭ',
                      Ucirc: 'Û',
                      ucirc: 'û',
                      Ucy: 'У',
                      ucy: 'у',
                      udarr: '⇅',
                      Udblac: 'Ű',
                      udblac: 'ű',
                      udhar: '⥮',
                      ufisht: '⥾',
                      Ufr: '𝔘',
                      ufr: '𝔲',
                      Ugrave: 'Ù',
                      ugrave: 'ù',
                      uHar: '⥣',
                      uharl: '↿',
                      uharr: '↾',
                      uhblk: '▀',
                      ulcorn: '⌜',
                      ulcorner: '⌜',
                      ulcrop: '⌏',
                      ultri: '◸',
                      Umacr: 'Ū',
                      umacr: 'ū',
                      uml: '¨',
                      UnderBar: '_',
                      UnderBrace: '⏟',
                      UnderBracket: '⎵',
                      UnderParenthesis: '⏝',
                      Union: '⋃',
                      UnionPlus: '⊎',
                      Uogon: 'Ų',
                      uogon: 'ų',
                      Uopf: '𝕌',
                      uopf: '𝕦',
                      UpArrow: '↑',
                      Uparrow: '⇑',
                      uparrow: '↑',
                      UpArrowBar: '⤒',
                      UpArrowDownArrow: '⇅',
                      UpDownArrow: '↕',
                      Updownarrow: '⇕',
                      updownarrow: '↕',
                      UpEquilibrium: '⥮',
                      upharpoonleft: '↿',
                      upharpoonright: '↾',
                      uplus: '⊎',
                      UpperLeftArrow: '↖',
                      UpperRightArrow: '↗',
                      Upsi: 'ϒ',
                      upsi: 'υ',
                      upsih: 'ϒ',
                      Upsilon: 'Υ',
                      upsilon: 'υ',
                      UpTee: '⊥',
                      UpTeeArrow: '↥',
                      upuparrows: '⇈',
                      urcorn: '⌝',
                      urcorner: '⌝',
                      urcrop: '⌎',
                      Uring: 'Ů',
                      uring: 'ů',
                      urtri: '◹',
                      Uscr: '𝒰',
                      uscr: '𝓊',
                      utdot: '⋰',
                      Utilde: 'Ũ',
                      utilde: 'ũ',
                      utri: '▵',
                      utrif: '▴',
                      uuarr: '⇈',
                      Uuml: 'Ü',
                      uuml: 'ü',
                      uwangle: '⦧',
                      vangrt: '⦜',
                      varepsilon: 'ϵ',
                      varkappa: 'ϰ',
                      varnothing: '∅',
                      varphi: 'ϕ',
                      varpi: 'ϖ',
                      varpropto: '∝',
                      vArr: '⇕',
                      varr: '↕',
                      varrho: 'ϱ',
                      varsigma: 'ς',
                      varsubsetneq: '⊊︀',
                      varsubsetneqq: '⫋︀',
                      varsupsetneq: '⊋︀',
                      varsupsetneqq: '⫌︀',
                      vartheta: 'ϑ',
                      vartriangleleft: '⊲',
                      vartriangleright: '⊳',
                      Vbar: '⫫',
                      vBar: '⫨',
                      vBarv: '⫩',
                      Vcy: 'В',
                      vcy: 'в',
                      VDash: '⊫',
                      Vdash: '⊩',
                      vDash: '⊨',
                      vdash: '⊢',
                      Vdashl: '⫦',
                      Vee: '⋁',
                      vee: '∨',
                      veebar: '⊻',
                      veeeq: '≚',
                      vellip: '⋮',
                      Verbar: '‖',
                      verbar: '|',
                      Vert: '‖',
                      vert: '|',
                      VerticalBar: '∣',
                      VerticalLine: '|',
                      VerticalSeparator: '❘',
                      VerticalTilde: '≀',
                      VeryThinSpace: ' ',
                      Vfr: '𝔙',
                      vfr: '𝔳',
                      vltri: '⊲',
                      vnsub: '⊂⃒',
                      vnsup: '⊃⃒',
                      Vopf: '𝕍',
                      vopf: '𝕧',
                      vprop: '∝',
                      vrtri: '⊳',
                      Vscr: '𝒱',
                      vscr: '𝓋',
                      vsubnE: '⫋︀',
                      vsubne: '⊊︀',
                      vsupnE: '⫌︀',
                      vsupne: '⊋︀',
                      Vvdash: '⊪',
                      vzigzag: '⦚',
                      Wcirc: 'Ŵ',
                      wcirc: 'ŵ',
                      wedbar: '⩟',
                      Wedge: '⋀',
                      wedge: '∧',
                      wedgeq: '≙',
                      weierp: '℘',
                      Wfr: '𝔚',
                      wfr: '𝔴',
                      Wopf: '𝕎',
                      wopf: '𝕨',
                      wp: '℘',
                      wr: '≀',
                      wreath: '≀',
                      Wscr: '𝒲',
                      wscr: '𝓌',
                      xcap: '⋂',
                      xcirc: '◯',
                      xcup: '⋃',
                      xdtri: '▽',
                      Xfr: '𝔛',
                      xfr: '𝔵',
                      xhArr: '⟺',
                      xharr: '⟷',
                      Xi: 'Ξ',
                      xi: 'ξ',
                      xlArr: '⟸',
                      xlarr: '⟵',
                      xmap: '⟼',
                      xnis: '⋻',
                      xodot: '⨀',
                      Xopf: '𝕏',
                      xopf: '𝕩',
                      xoplus: '⨁',
                      xotime: '⨂',
                      xrArr: '⟹',
                      xrarr: '⟶',
                      Xscr: '𝒳',
                      xscr: '𝓍',
                      xsqcup: '⨆',
                      xuplus: '⨄',
                      xutri: '△',
                      xvee: '⋁',
                      xwedge: '⋀',
                      Yacute: 'Ý',
                      yacute: 'ý',
                      YAcy: 'Я',
                      yacy: 'я',
                      Ycirc: 'Ŷ',
                      ycirc: 'ŷ',
                      Ycy: 'Ы',
                      ycy: 'ы',
                      yen: '¥',
                      Yfr: '𝔜',
                      yfr: '𝔶',
                      YIcy: 'Ї',
                      yicy: 'ї',
                      Yopf: '𝕐',
                      yopf: '𝕪',
                      Yscr: '𝒴',
                      yscr: '𝓎',
                      YUcy: 'Ю',
                      yucy: 'ю',
                      Yuml: 'Ÿ',
                      yuml: 'ÿ',
                      Zacute: 'Ź',
                      zacute: 'ź',
                      Zcaron: 'Ž',
                      zcaron: 'ž',
                      Zcy: 'З',
                      zcy: 'з',
                      Zdot: 'Ż',
                      zdot: 'ż',
                      zeetrf: 'ℨ',
                      ZeroWidthSpace: '​',
                      Zeta: 'Ζ',
                      zeta: 'ζ',
                      Zfr: 'ℨ',
                      zfr: '𝔷',
                      ZHcy: 'Ж',
                      zhcy: 'ж',
                      zigrarr: '⇝',
                      Zopf: 'ℤ',
                      zopf: '𝕫',
                      Zscr: '𝒵',
                      zscr: '𝓏',
                      zwj: '‍',
                      zwnj: '‌'
                    }),
                    (e.NGSP_UNICODE = ''),
                    (e.NAMED_ENTITIES.ngsp = e.NGSP_UNICODE);
                }
              }),
              Gt = y({
                'node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = rt(),
                    a = class {
                      constructor() {
                        let {
                          closedByChildren: i,
                          implicitNamespacePrefix: C,
                          contentType: m = u.TagContentType.PARSABLE_DATA,
                          closedByParent: $ = !1,
                          isVoid: s = !1,
                          ignoreFirstLf: D = !1
                        } = arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : {};
                        (this.closedByChildren = {}),
                          (this.closedByParent = !1),
                          (this.canSelfClose = !1),
                          i &&
                            i.length > 0 &&
                            i.forEach((d) => (this.closedByChildren[d] = !0)),
                          (this.isVoid = s),
                          (this.closedByParent = $ || s),
                          (this.implicitNamespacePrefix = C || null),
                          (this.contentType = m),
                          (this.ignoreFirstLf = D);
                      }
                      isClosedByChild(i) {
                        return (
                          this.isVoid ||
                          i.toLowerCase() in this.closedByChildren
                        );
                      }
                    };
                  e.HtmlTagDefinition = a;
                  var o, l;
                  function r(i) {
                    return (
                      l ||
                        ((o = new a()),
                        (l = {
                          base: new a({ isVoid: !0 }),
                          meta: new a({ isVoid: !0 }),
                          area: new a({ isVoid: !0 }),
                          embed: new a({ isVoid: !0 }),
                          link: new a({ isVoid: !0 }),
                          img: new a({ isVoid: !0 }),
                          input: new a({ isVoid: !0 }),
                          param: new a({ isVoid: !0 }),
                          hr: new a({ isVoid: !0 }),
                          br: new a({ isVoid: !0 }),
                          source: new a({ isVoid: !0 }),
                          track: new a({ isVoid: !0 }),
                          wbr: new a({ isVoid: !0 }),
                          p: new a({
                            closedByChildren: [
                              'address',
                              'article',
                              'aside',
                              'blockquote',
                              'div',
                              'dl',
                              'fieldset',
                              'footer',
                              'form',
                              'h1',
                              'h2',
                              'h3',
                              'h4',
                              'h5',
                              'h6',
                              'header',
                              'hgroup',
                              'hr',
                              'main',
                              'nav',
                              'ol',
                              'p',
                              'pre',
                              'section',
                              'table',
                              'ul'
                            ],
                            closedByParent: !0
                          }),
                          thead: new a({
                            closedByChildren: ['tbody', 'tfoot']
                          }),
                          tbody: new a({
                            closedByChildren: ['tbody', 'tfoot'],
                            closedByParent: !0
                          }),
                          tfoot: new a({
                            closedByChildren: ['tbody'],
                            closedByParent: !0
                          }),
                          tr: new a({
                            closedByChildren: ['tr'],
                            closedByParent: !0
                          }),
                          td: new a({
                            closedByChildren: ['td', 'th'],
                            closedByParent: !0
                          }),
                          th: new a({
                            closedByChildren: ['td', 'th'],
                            closedByParent: !0
                          }),
                          col: new a({ isVoid: !0 }),
                          svg: new a({ implicitNamespacePrefix: 'svg' }),
                          math: new a({ implicitNamespacePrefix: 'math' }),
                          li: new a({
                            closedByChildren: ['li'],
                            closedByParent: !0
                          }),
                          dt: new a({ closedByChildren: ['dt', 'dd'] }),
                          dd: new a({
                            closedByChildren: ['dt', 'dd'],
                            closedByParent: !0
                          }),
                          rb: new a({
                            closedByChildren: ['rb', 'rt', 'rtc', 'rp'],
                            closedByParent: !0
                          }),
                          rt: new a({
                            closedByChildren: ['rb', 'rt', 'rtc', 'rp'],
                            closedByParent: !0
                          }),
                          rtc: new a({
                            closedByChildren: ['rb', 'rtc', 'rp'],
                            closedByParent: !0
                          }),
                          rp: new a({
                            closedByChildren: ['rb', 'rt', 'rtc', 'rp'],
                            closedByParent: !0
                          }),
                          optgroup: new a({
                            closedByChildren: ['optgroup'],
                            closedByParent: !0
                          }),
                          option: new a({
                            closedByChildren: ['option', 'optgroup'],
                            closedByParent: !0
                          }),
                          pre: new a({ ignoreFirstLf: !0 }),
                          listing: new a({ ignoreFirstLf: !0 }),
                          style: new a({
                            contentType: u.TagContentType.RAW_TEXT
                          }),
                          script: new a({
                            contentType: u.TagContentType.RAW_TEXT
                          }),
                          title: new a({
                            contentType: u.TagContentType.ESCAPABLE_RAW_TEXT
                          }),
                          textarea: new a({
                            contentType: u.TagContentType.ESCAPABLE_RAW_TEXT,
                            ignoreFirstLf: !0
                          })
                        })),
                      l[i] || o
                    );
                  }
                  e.getHtmlTagDefinition = r;
                }
              }),
              Sr = y({
                'node_modules/angular-html-parser/lib/compiler/src/ast_path.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = class {
                    constructor(a) {
                      let o =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : -1;
                      (this.path = a), (this.position = o);
                    }
                    get empty() {
                      return !this.path || !this.path.length;
                    }
                    get head() {
                      return this.path[0];
                    }
                    get tail() {
                      return this.path[this.path.length - 1];
                    }
                    parentOf(a) {
                      return a && this.path[this.path.indexOf(a) - 1];
                    }
                    childOf(a) {
                      return this.path[this.path.indexOf(a) + 1];
                    }
                    first(a) {
                      for (let o = this.path.length - 1; o >= 0; o--) {
                        let l = this.path[o];
                        if (l instanceof a) return l;
                      }
                    }
                    push(a) {
                      this.path.push(a);
                    }
                    pop() {
                      return this.path.pop();
                    }
                  };
                  e.AstPath = u;
                }
              }),
              Xt = y({
                'node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = Sr(),
                    a = class {
                      constructor(A, T, j) {
                        (this.value = A),
                          (this.sourceSpan = T),
                          (this.i18n = j),
                          (this.type = 'text');
                      }
                      visit(A, T) {
                        return A.visitText(this, T);
                      }
                    };
                  e.Text = a;
                  var o = class {
                    constructor(A, T) {
                      (this.value = A),
                        (this.sourceSpan = T),
                        (this.type = 'cdata');
                    }
                    visit(A, T) {
                      return A.visitCdata(this, T);
                    }
                  };
                  e.CDATA = o;
                  var l = class {
                    constructor(A, T, j, Q, P, Y) {
                      (this.switchValue = A),
                        (this.type = T),
                        (this.cases = j),
                        (this.sourceSpan = Q),
                        (this.switchValueSourceSpan = P),
                        (this.i18n = Y);
                    }
                    visit(A, T) {
                      return A.visitExpansion(this, T);
                    }
                  };
                  e.Expansion = l;
                  var r = class {
                    constructor(A, T, j, Q, P) {
                      (this.value = A),
                        (this.expression = T),
                        (this.sourceSpan = j),
                        (this.valueSourceSpan = Q),
                        (this.expSourceSpan = P);
                    }
                    visit(A, T) {
                      return A.visitExpansionCase(this, T);
                    }
                  };
                  e.ExpansionCase = r;
                  var i = class {
                    constructor(A, T, j) {
                      let Q =
                          arguments.length > 3 && arguments[3] !== void 0
                            ? arguments[3]
                            : null,
                        P =
                          arguments.length > 4 && arguments[4] !== void 0
                            ? arguments[4]
                            : null,
                        Y =
                          arguments.length > 5 && arguments[5] !== void 0
                            ? arguments[5]
                            : null;
                      (this.name = A),
                        (this.value = T),
                        (this.sourceSpan = j),
                        (this.valueSpan = Q),
                        (this.nameSpan = P),
                        (this.i18n = Y),
                        (this.type = 'attribute');
                    }
                    visit(A, T) {
                      return A.visitAttribute(this, T);
                    }
                  };
                  e.Attribute = i;
                  var C = class {
                    constructor(A, T, j, Q) {
                      let P =
                          arguments.length > 4 && arguments[4] !== void 0
                            ? arguments[4]
                            : null,
                        Y =
                          arguments.length > 5 && arguments[5] !== void 0
                            ? arguments[5]
                            : null,
                        te =
                          arguments.length > 6 && arguments[6] !== void 0
                            ? arguments[6]
                            : null,
                        pe =
                          arguments.length > 7 && arguments[7] !== void 0
                            ? arguments[7]
                            : null;
                      (this.name = A),
                        (this.attrs = T),
                        (this.children = j),
                        (this.sourceSpan = Q),
                        (this.startSourceSpan = P),
                        (this.endSourceSpan = Y),
                        (this.nameSpan = te),
                        (this.i18n = pe),
                        (this.type = 'element');
                    }
                    visit(A, T) {
                      return A.visitElement(this, T);
                    }
                  };
                  e.Element = C;
                  var m = class {
                    constructor(A, T) {
                      (this.value = A),
                        (this.sourceSpan = T),
                        (this.type = 'comment');
                    }
                    visit(A, T) {
                      return A.visitComment(this, T);
                    }
                  };
                  e.Comment = m;
                  var $ = class {
                    constructor(A, T) {
                      (this.value = A),
                        (this.sourceSpan = T),
                        (this.type = 'docType');
                    }
                    visit(A, T) {
                      return A.visitDocType(this, T);
                    }
                  };
                  e.DocType = $;
                  function s(A, T) {
                    let j =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : null,
                      Q = [],
                      P = A.visit
                        ? (Y) => A.visit(Y, j) || Y.visit(A, j)
                        : (Y) => Y.visit(A, j);
                    return (
                      T.forEach((Y) => {
                        let te = P(Y);
                        te && Q.push(te);
                      }),
                      Q
                    );
                  }
                  e.visitAll = s;
                  var D = class {
                    constructor() {}
                    visitElement(A, T) {
                      this.visitChildren(T, (j) => {
                        j(A.attrs), j(A.children);
                      });
                    }
                    visitAttribute(A, T) {}
                    visitText(A, T) {}
                    visitCdata(A, T) {}
                    visitComment(A, T) {}
                    visitDocType(A, T) {}
                    visitExpansion(A, T) {
                      return this.visitChildren(T, (j) => {
                        j(A.cases);
                      });
                    }
                    visitExpansionCase(A, T) {}
                    visitChildren(A, T) {
                      let j = [],
                        Q = this;
                      function P(Y) {
                        Y && j.push(s(Q, Y, A));
                      }
                      return T(P), Array.prototype.concat.apply([], j);
                    }
                  };
                  e.RecursiveVisitor = D;
                  function d(A) {
                    let T = A.sourceSpan.start.offset,
                      j = A.sourceSpan.end.offset;
                    return (
                      A instanceof C &&
                        (A.endSourceSpan
                          ? (j = A.endSourceSpan.end.offset)
                          : A.children &&
                            A.children.length &&
                            (j = d(A.children[A.children.length - 1]).end)),
                      { start: T, end: j }
                    );
                  }
                  function v(A, T) {
                    let j = [],
                      Q = new (class extends D {
                        visit(P, Y) {
                          let te = d(P);
                          if (te.start <= T && T < te.end) j.push(P);
                          else return !0;
                        }
                      })();
                    return s(Q, A), new u.AstPath(j, T);
                  }
                  e.findNode = v;
                }
              }),
              Br = y({
                'node_modules/angular-html-parser/lib/compiler/src/assertions.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  function u(l, r) {
                    if (r != null) {
                      if (!Array.isArray(r))
                        throw new Error(
                          `Expected '${l}' to be an array of strings.`
                        );
                      for (let i = 0; i < r.length; i += 1)
                        if (typeof r[i] != 'string')
                          throw new Error(
                            `Expected '${l}' to be an array of strings.`
                          );
                    }
                  }
                  e.assertArrayOfStrings = u;
                  var a = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
                  function o(l, r) {
                    if (r != null && !(Array.isArray(r) && r.length == 2))
                      throw new Error(
                        `Expected '${l}' to be an array, [start, end].`
                      );
                    if (r != null) {
                      let i = r[0],
                        C = r[1];
                      a.forEach((m) => {
                        if (m.test(i) || m.test(C))
                          throw new Error(
                            `['${i}', '${C}'] contains unusable interpolation symbol.`
                          );
                      });
                    }
                  }
                  e.assertInterpolationSymbols = o;
                }
              }),
              br = y({
                'node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = Br(),
                    a = class {
                      constructor(o, l) {
                        (this.start = o), (this.end = l);
                      }
                      static fromArray(o) {
                        return o
                          ? (u.assertInterpolationSymbols('interpolation', o),
                            new a(o[0], o[1]))
                          : e.DEFAULT_INTERPOLATION_CONFIG;
                      }
                    };
                  (e.InterpolationConfig = a),
                    (e.DEFAULT_INTERPOLATION_CONFIG = new a('{{', '}}'));
                }
              }),
              wr = y({
                'node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = ke(),
                    a = Fe(),
                    o = br(),
                    l = rt(),
                    r;
                  (function (t) {
                    (t[(t.TAG_OPEN_START = 0)] = 'TAG_OPEN_START'),
                      (t[(t.TAG_OPEN_END = 1)] = 'TAG_OPEN_END'),
                      (t[(t.TAG_OPEN_END_VOID = 2)] = 'TAG_OPEN_END_VOID'),
                      (t[(t.TAG_CLOSE = 3)] = 'TAG_CLOSE'),
                      (t[(t.TEXT = 4)] = 'TEXT'),
                      (t[(t.ESCAPABLE_RAW_TEXT = 5)] = 'ESCAPABLE_RAW_TEXT'),
                      (t[(t.RAW_TEXT = 6)] = 'RAW_TEXT'),
                      (t[(t.COMMENT_START = 7)] = 'COMMENT_START'),
                      (t[(t.COMMENT_END = 8)] = 'COMMENT_END'),
                      (t[(t.CDATA_START = 9)] = 'CDATA_START'),
                      (t[(t.CDATA_END = 10)] = 'CDATA_END'),
                      (t[(t.ATTR_NAME = 11)] = 'ATTR_NAME'),
                      (t[(t.ATTR_QUOTE = 12)] = 'ATTR_QUOTE'),
                      (t[(t.ATTR_VALUE = 13)] = 'ATTR_VALUE'),
                      (t[(t.DOC_TYPE_START = 14)] = 'DOC_TYPE_START'),
                      (t[(t.DOC_TYPE_END = 15)] = 'DOC_TYPE_END'),
                      (t[(t.EXPANSION_FORM_START = 16)] =
                        'EXPANSION_FORM_START'),
                      (t[(t.EXPANSION_CASE_VALUE = 17)] =
                        'EXPANSION_CASE_VALUE'),
                      (t[(t.EXPANSION_CASE_EXP_START = 18)] =
                        'EXPANSION_CASE_EXP_START'),
                      (t[(t.EXPANSION_CASE_EXP_END = 19)] =
                        'EXPANSION_CASE_EXP_END'),
                      (t[(t.EXPANSION_FORM_END = 20)] = 'EXPANSION_FORM_END'),
                      (t[(t.EOF = 21)] = 'EOF');
                  })((r = e.TokenType || (e.TokenType = {})));
                  var i = class {
                    constructor(t, n, _) {
                      (this.type = t), (this.parts = n), (this.sourceSpan = _);
                    }
                  };
                  e.Token = i;
                  var C = class extends a.ParseError {
                    constructor(t, n, _) {
                      super(_, t), (this.tokenType = n);
                    }
                  };
                  e.TokenError = C;
                  var m = class {
                    constructor(t, n) {
                      (this.tokens = t), (this.errors = n);
                    }
                  };
                  e.TokenizeResult = m;
                  function $(t, n, _) {
                    let h =
                      arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : {};
                    return new A(new a.ParseSourceFile(t, n), _, h).tokenize();
                  }
                  e.tokenize = $;
                  var s = /\r\n?/g;
                  function D(t) {
                    return `Unexpected character "${
                      t === u.$EOF ? 'EOF' : String.fromCharCode(t)
                    }"`;
                  }
                  function d(t) {
                    return `Unknown entity "${t}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
                  }
                  var v = class {
                      constructor(t) {
                        this.error = t;
                      }
                    },
                    A = class {
                      constructor(t, n, _) {
                        (this._getTagContentType = n),
                          (this._currentTokenStart = null),
                          (this._currentTokenType = null),
                          (this._expansionCaseStack = []),
                          (this._inInterpolation = !1),
                          (this._fullNameStack = []),
                          (this.tokens = []),
                          (this.errors = []),
                          (this._tokenizeIcu = _.tokenizeExpansionForms || !1),
                          (this._interpolationConfig =
                            _.interpolationConfig ||
                            o.DEFAULT_INTERPOLATION_CONFIG),
                          (this._leadingTriviaCodePoints =
                            _.leadingTriviaChars &&
                            _.leadingTriviaChars.map(
                              (b) => b.codePointAt(0) || 0
                            )),
                          (this._canSelfClose = _.canSelfClose || !1),
                          (this._allowHtmComponentClosingTags =
                            _.allowHtmComponentClosingTags || !1);
                        let h = _.range || {
                          endPos: t.content.length,
                          startPos: 0,
                          startLine: 0,
                          startCol: 0
                        };
                        this._cursor = _.escapedString
                          ? new ie(t, h)
                          : new re(t, h);
                        try {
                          this._cursor.init();
                        } catch (b) {
                          this.handleError(b);
                        }
                      }
                      _processCarriageReturns(t) {
                        return t.replace(
                          s,
                          `
`
                        );
                      }
                      tokenize() {
                        for (; this._cursor.peek() !== u.$EOF; ) {
                          let t = this._cursor.clone();
                          try {
                            if (this._attemptCharCode(u.$LT))
                              if (this._attemptCharCode(u.$BANG))
                                this._attemptStr('[CDATA[')
                                  ? this._consumeCdata(t)
                                  : this._attemptStr('--')
                                  ? this._consumeComment(t)
                                  : this._attemptStrCaseInsensitive('doctype')
                                  ? this._consumeDocType(t)
                                  : this._consumeBogusComment(t);
                              else if (this._attemptCharCode(u.$SLASH))
                                this._consumeTagClose(t);
                              else {
                                let n = this._cursor.clone();
                                this._attemptCharCode(u.$QUESTION)
                                  ? ((this._cursor = n),
                                    this._consumeBogusComment(t))
                                  : this._consumeTagOpen(t);
                              }
                            else
                              (this._tokenizeIcu &&
                                this._tokenizeExpansionForm()) ||
                                this._consumeText();
                          } catch (n) {
                            this.handleError(n);
                          }
                        }
                        return (
                          this._beginToken(r.EOF),
                          this._endToken([]),
                          new m(K(this.tokens), this.errors)
                        );
                      }
                      _tokenizeExpansionForm() {
                        if (this.isExpansionFormStart())
                          return this._consumeExpansionFormStart(), !0;
                        if (
                          te(this._cursor.peek()) &&
                          this._isInExpansionForm()
                        )
                          return this._consumeExpansionCaseStart(), !0;
                        if (this._cursor.peek() === u.$RBRACE) {
                          if (this._isInExpansionCase())
                            return this._consumeExpansionCaseEnd(), !0;
                          if (this._isInExpansionForm())
                            return this._consumeExpansionFormEnd(), !0;
                        }
                        return !1;
                      }
                      _beginToken(t) {
                        let n =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this._cursor.clone();
                        (this._currentTokenStart = n),
                          (this._currentTokenType = t);
                      }
                      _endToken(t) {
                        let n =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this._cursor.clone();
                        if (this._currentTokenStart === null)
                          throw new C(
                            'Programming error - attempted to end a token when there was no start to the token',
                            this._currentTokenType,
                            this._cursor.getSpan(n)
                          );
                        if (this._currentTokenType === null)
                          throw new C(
                            'Programming error - attempted to end a token which has no token type',
                            null,
                            this._cursor.getSpan(this._currentTokenStart)
                          );
                        let _ = new i(
                          this._currentTokenType,
                          t,
                          this._cursor.getSpan(
                            this._currentTokenStart,
                            this._leadingTriviaCodePoints
                          )
                        );
                        return (
                          this.tokens.push(_),
                          (this._currentTokenStart = null),
                          (this._currentTokenType = null),
                          _
                        );
                      }
                      _createError(t, n) {
                        this._isInExpansionForm() &&
                          (t += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
                        let _ = new C(t, this._currentTokenType, n);
                        return (
                          (this._currentTokenStart = null),
                          (this._currentTokenType = null),
                          new v(_)
                        );
                      }
                      handleError(t) {
                        if (
                          (t instanceof le &&
                            (t = this._createError(
                              t.msg,
                              this._cursor.getSpan(t.cursor)
                            )),
                          t instanceof v)
                        )
                          this.errors.push(t.error);
                        else throw t;
                      }
                      _attemptCharCode(t) {
                        return this._cursor.peek() === t
                          ? (this._cursor.advance(), !0)
                          : !1;
                      }
                      _attemptCharCodeCaseInsensitive(t) {
                        return pe(this._cursor.peek(), t)
                          ? (this._cursor.advance(), !0)
                          : !1;
                      }
                      _requireCharCode(t) {
                        let n = this._cursor.clone();
                        if (!this._attemptCharCode(t))
                          throw this._createError(
                            D(this._cursor.peek()),
                            this._cursor.getSpan(n)
                          );
                      }
                      _attemptStr(t) {
                        let n = t.length;
                        if (this._cursor.charsLeft() < n) return !1;
                        let _ = this._cursor.clone();
                        for (let h = 0; h < n; h++)
                          if (!this._attemptCharCode(t.charCodeAt(h)))
                            return (this._cursor = _), !1;
                        return !0;
                      }
                      _attemptStrCaseInsensitive(t) {
                        for (let n = 0; n < t.length; n++)
                          if (
                            !this._attemptCharCodeCaseInsensitive(
                              t.charCodeAt(n)
                            )
                          )
                            return !1;
                        return !0;
                      }
                      _requireStr(t) {
                        let n = this._cursor.clone();
                        if (!this._attemptStr(t))
                          throw this._createError(
                            D(this._cursor.peek()),
                            this._cursor.getSpan(n)
                          );
                      }
                      _requireStrCaseInsensitive(t) {
                        let n = this._cursor.clone();
                        if (!this._attemptStrCaseInsensitive(t))
                          throw this._createError(
                            D(this._cursor.peek()),
                            this._cursor.getSpan(n)
                          );
                      }
                      _attemptCharCodeUntilFn(t) {
                        for (; !t(this._cursor.peek()); )
                          this._cursor.advance();
                      }
                      _requireCharCodeUntilFn(t, n) {
                        let _ = this._cursor.clone();
                        if (
                          (this._attemptCharCodeUntilFn(t),
                          this._cursor.clone().diff(_) < n)
                        )
                          throw this._createError(
                            D(this._cursor.peek()),
                            this._cursor.getSpan(_)
                          );
                      }
                      _attemptUntilChar(t) {
                        for (; this._cursor.peek() !== t; )
                          this._cursor.advance();
                      }
                      _readChar(t) {
                        if (t && this._cursor.peek() === u.$AMPERSAND)
                          return this._decodeEntity();
                        {
                          let n = String.fromCodePoint(this._cursor.peek());
                          return this._cursor.advance(), n;
                        }
                      }
                      _decodeEntity() {
                        let t = this._cursor.clone();
                        if (
                          (this._cursor.advance(),
                          this._attemptCharCode(u.$HASH))
                        ) {
                          let n =
                              this._attemptCharCode(u.$x) ||
                              this._attemptCharCode(u.$X),
                            _ = this._cursor.clone();
                          if (
                            (this._attemptCharCodeUntilFn(P),
                            this._cursor.peek() != u.$SEMICOLON)
                          )
                            throw this._createError(
                              D(this._cursor.peek()),
                              this._cursor.getSpan()
                            );
                          let h = this._cursor.getChars(_);
                          this._cursor.advance();
                          try {
                            let b = parseInt(h, n ? 16 : 10);
                            return String.fromCharCode(b);
                          } catch {
                            throw this._createError(
                              d(this._cursor.getChars(t)),
                              this._cursor.getSpan()
                            );
                          }
                        } else {
                          let n = this._cursor.clone();
                          if (
                            (this._attemptCharCodeUntilFn(Y),
                            this._cursor.peek() != u.$SEMICOLON)
                          )
                            return (this._cursor = n), '&';
                          let _ = this._cursor.getChars(n);
                          this._cursor.advance();
                          let h = l.NAMED_ENTITIES[_];
                          if (!h)
                            throw this._createError(
                              d(_),
                              this._cursor.getSpan(t)
                            );
                          return h;
                        }
                      }
                      _consumeRawText(t, n) {
                        this._beginToken(t ? r.ESCAPABLE_RAW_TEXT : r.RAW_TEXT);
                        let _ = [];
                        for (;;) {
                          let h = this._cursor.clone(),
                            b = n();
                          if (((this._cursor = h), b)) break;
                          _.push(this._readChar(t));
                        }
                        return this._endToken([
                          this._processCarriageReturns(_.join(''))
                        ]);
                      }
                      _consumeComment(t) {
                        this._beginToken(r.COMMENT_START, t),
                          this._endToken([]),
                          this._consumeRawText(!1, () =>
                            this._attemptStr('-->')
                          ),
                          this._beginToken(r.COMMENT_END),
                          this._requireStr('-->'),
                          this._endToken([]);
                      }
                      _consumeBogusComment(t) {
                        this._beginToken(r.COMMENT_START, t),
                          this._endToken([]),
                          this._consumeRawText(
                            !1,
                            () => this._cursor.peek() === u.$GT
                          ),
                          this._beginToken(r.COMMENT_END),
                          this._cursor.advance(),
                          this._endToken([]);
                      }
                      _consumeCdata(t) {
                        this._beginToken(r.CDATA_START, t),
                          this._endToken([]),
                          this._consumeRawText(!1, () =>
                            this._attemptStr(']]>')
                          ),
                          this._beginToken(r.CDATA_END),
                          this._requireStr(']]>'),
                          this._endToken([]);
                      }
                      _consumeDocType(t) {
                        this._beginToken(r.DOC_TYPE_START, t),
                          this._endToken([]),
                          this._consumeRawText(
                            !1,
                            () => this._cursor.peek() === u.$GT
                          ),
                          this._beginToken(r.DOC_TYPE_END),
                          this._cursor.advance(),
                          this._endToken([]);
                      }
                      _consumePrefixAndName() {
                        let t = this._cursor.clone(),
                          n = '';
                        for (
                          ;
                          this._cursor.peek() !== u.$COLON &&
                          !Q(this._cursor.peek());

                        )
                          this._cursor.advance();
                        let _;
                        this._cursor.peek() === u.$COLON
                          ? ((n = this._cursor.getChars(t)),
                            this._cursor.advance(),
                            (_ = this._cursor.clone()))
                          : (_ = t),
                          this._requireCharCodeUntilFn(j, n === '' ? 0 : 1);
                        let h = this._cursor.getChars(_);
                        return [n, h];
                      }
                      _consumeTagOpen(t) {
                        let n,
                          _,
                          h,
                          b = this.tokens.length,
                          ne = this._cursor.clone(),
                          De = [];
                        try {
                          if (!u.isAsciiLetter(this._cursor.peek()))
                            throw this._createError(
                              D(this._cursor.peek()),
                              this._cursor.getSpan(t)
                            );
                          for (
                            h = this._consumeTagOpenStart(t),
                              _ = h.parts[0],
                              n = h.parts[1],
                              this._attemptCharCodeUntilFn(T);
                            this._cursor.peek() !== u.$SLASH &&
                            this._cursor.peek() !== u.$GT;

                          ) {
                            let [_e, xe] = this._consumeAttributeName();
                            if (
                              (this._attemptCharCodeUntilFn(T),
                              this._attemptCharCode(u.$EQ))
                            ) {
                              this._attemptCharCodeUntilFn(T);
                              let be = this._consumeAttributeValue();
                              De.push({ prefix: _e, name: xe, value: be });
                            } else De.push({ prefix: _e, name: xe });
                            this._attemptCharCodeUntilFn(T);
                          }
                          this._consumeTagOpenEnd();
                        } catch (_e) {
                          if (_e instanceof v) {
                            (this._cursor = ne),
                              h && (this.tokens.length = b),
                              this._beginToken(r.TEXT, t),
                              this._endToken(['<']);
                            return;
                          }
                          throw _e;
                        }
                        if (
                          this._canSelfClose &&
                          this.tokens[this.tokens.length - 1].type ===
                            r.TAG_OPEN_END_VOID
                        )
                          return;
                        let Te = this._getTagContentType(
                          n,
                          _,
                          this._fullNameStack.length > 0,
                          De
                        );
                        this._handleFullNameStackForTagOpen(_, n),
                          Te === l.TagContentType.RAW_TEXT
                            ? this._consumeRawTextWithTagClose(_, n, !1)
                            : Te === l.TagContentType.ESCAPABLE_RAW_TEXT &&
                              this._consumeRawTextWithTagClose(_, n, !0);
                      }
                      _consumeRawTextWithTagClose(t, n, _) {
                        this._consumeRawText(_, () =>
                          !this._attemptCharCode(u.$LT) ||
                          !this._attemptCharCode(u.$SLASH) ||
                          (this._attemptCharCodeUntilFn(T),
                          !this._attemptStrCaseInsensitive(t ? `${t}:${n}` : n))
                            ? !1
                            : (this._attemptCharCodeUntilFn(T),
                              this._attemptCharCode(u.$GT))
                        ),
                          this._beginToken(r.TAG_CLOSE),
                          this._requireCharCodeUntilFn((h) => h === u.$GT, 3),
                          this._cursor.advance(),
                          this._endToken([t, n]),
                          this._handleFullNameStackForTagClose(t, n);
                      }
                      _consumeTagOpenStart(t) {
                        this._beginToken(r.TAG_OPEN_START, t);
                        let n = this._consumePrefixAndName();
                        return this._endToken(n);
                      }
                      _consumeAttributeName() {
                        let t = this._cursor.peek();
                        if (t === u.$SQ || t === u.$DQ)
                          throw this._createError(D(t), this._cursor.getSpan());
                        this._beginToken(r.ATTR_NAME);
                        let n = this._consumePrefixAndName();
                        return this._endToken(n), n;
                      }
                      _consumeAttributeValue() {
                        let t;
                        if (
                          this._cursor.peek() === u.$SQ ||
                          this._cursor.peek() === u.$DQ
                        ) {
                          this._beginToken(r.ATTR_QUOTE);
                          let n = this._cursor.peek();
                          this._cursor.advance(),
                            this._endToken([String.fromCodePoint(n)]),
                            this._beginToken(r.ATTR_VALUE);
                          let _ = [];
                          for (; this._cursor.peek() !== n; )
                            _.push(this._readChar(!0));
                          (t = this._processCarriageReturns(_.join(''))),
                            this._endToken([t]),
                            this._beginToken(r.ATTR_QUOTE),
                            this._cursor.advance(),
                            this._endToken([String.fromCodePoint(n)]);
                        } else {
                          this._beginToken(r.ATTR_VALUE);
                          let n = this._cursor.clone();
                          this._requireCharCodeUntilFn(j, 1),
                            (t = this._processCarriageReturns(
                              this._cursor.getChars(n)
                            )),
                            this._endToken([t]);
                        }
                        return t;
                      }
                      _consumeTagOpenEnd() {
                        let t = this._attemptCharCode(u.$SLASH)
                          ? r.TAG_OPEN_END_VOID
                          : r.TAG_OPEN_END;
                        this._beginToken(t),
                          this._requireCharCode(u.$GT),
                          this._endToken([]);
                      }
                      _consumeTagClose(t) {
                        if (
                          (this._beginToken(r.TAG_CLOSE, t),
                          this._attemptCharCodeUntilFn(T),
                          this._allowHtmComponentClosingTags &&
                            this._attemptCharCode(u.$SLASH))
                        )
                          this._attemptCharCodeUntilFn(T),
                            this._requireCharCode(u.$GT),
                            this._endToken([]);
                        else {
                          let [n, _] = this._consumePrefixAndName();
                          this._attemptCharCodeUntilFn(T),
                            this._requireCharCode(u.$GT),
                            this._endToken([n, _]),
                            this._handleFullNameStackForTagClose(n, _);
                        }
                      }
                      _consumeExpansionFormStart() {
                        this._beginToken(r.EXPANSION_FORM_START),
                          this._requireCharCode(u.$LBRACE),
                          this._endToken([]),
                          this._expansionCaseStack.push(r.EXPANSION_FORM_START),
                          this._beginToken(r.RAW_TEXT);
                        let t = this._readUntil(u.$COMMA);
                        this._endToken([t]),
                          this._requireCharCode(u.$COMMA),
                          this._attemptCharCodeUntilFn(T),
                          this._beginToken(r.RAW_TEXT);
                        let n = this._readUntil(u.$COMMA);
                        this._endToken([n]),
                          this._requireCharCode(u.$COMMA),
                          this._attemptCharCodeUntilFn(T);
                      }
                      _consumeExpansionCaseStart() {
                        this._beginToken(r.EXPANSION_CASE_VALUE);
                        let t = this._readUntil(u.$LBRACE).trim();
                        this._endToken([t]),
                          this._attemptCharCodeUntilFn(T),
                          this._beginToken(r.EXPANSION_CASE_EXP_START),
                          this._requireCharCode(u.$LBRACE),
                          this._endToken([]),
                          this._attemptCharCodeUntilFn(T),
                          this._expansionCaseStack.push(
                            r.EXPANSION_CASE_EXP_START
                          );
                      }
                      _consumeExpansionCaseEnd() {
                        this._beginToken(r.EXPANSION_CASE_EXP_END),
                          this._requireCharCode(u.$RBRACE),
                          this._endToken([]),
                          this._attemptCharCodeUntilFn(T),
                          this._expansionCaseStack.pop();
                      }
                      _consumeExpansionFormEnd() {
                        this._beginToken(r.EXPANSION_FORM_END),
                          this._requireCharCode(u.$RBRACE),
                          this._endToken([]),
                          this._expansionCaseStack.pop();
                      }
                      _consumeText() {
                        let t = this._cursor.clone();
                        this._beginToken(r.TEXT, t);
                        let n = [];
                        do
                          this._interpolationConfig &&
                          this._attemptStr(this._interpolationConfig.start)
                            ? (n.push(this._interpolationConfig.start),
                              (this._inInterpolation = !0))
                            : this._interpolationConfig &&
                              this._inInterpolation &&
                              this._attemptStr(this._interpolationConfig.end)
                            ? (n.push(this._interpolationConfig.end),
                              (this._inInterpolation = !1))
                            : n.push(this._readChar(!0));
                        while (!this._isTextEnd());
                        this._endToken([
                          this._processCarriageReturns(n.join(''))
                        ]);
                      }
                      _isTextEnd() {
                        return !!(
                          this._cursor.peek() === u.$LT ||
                          this._cursor.peek() === u.$EOF ||
                          (this._tokenizeIcu &&
                            !this._inInterpolation &&
                            (this.isExpansionFormStart() ||
                              (this._cursor.peek() === u.$RBRACE &&
                                this._isInExpansionCase())))
                        );
                      }
                      _readUntil(t) {
                        let n = this._cursor.clone();
                        return (
                          this._attemptUntilChar(t), this._cursor.getChars(n)
                        );
                      }
                      _isInExpansionCase() {
                        return (
                          this._expansionCaseStack.length > 0 &&
                          this._expansionCaseStack[
                            this._expansionCaseStack.length - 1
                          ] === r.EXPANSION_CASE_EXP_START
                        );
                      }
                      _isInExpansionForm() {
                        return (
                          this._expansionCaseStack.length > 0 &&
                          this._expansionCaseStack[
                            this._expansionCaseStack.length - 1
                          ] === r.EXPANSION_FORM_START
                        );
                      }
                      isExpansionFormStart() {
                        if (this._cursor.peek() !== u.$LBRACE) return !1;
                        if (this._interpolationConfig) {
                          let t = this._cursor.clone(),
                            n = this._attemptStr(
                              this._interpolationConfig.start
                            );
                          return (this._cursor = t), !n;
                        }
                        return !0;
                      }
                      _handleFullNameStackForTagOpen(t, n) {
                        let _ = l.mergeNsAndName(t, n);
                        (this._fullNameStack.length === 0 ||
                          this._fullNameStack[
                            this._fullNameStack.length - 1
                          ] === _) &&
                          this._fullNameStack.push(_);
                      }
                      _handleFullNameStackForTagClose(t, n) {
                        let _ = l.mergeNsAndName(t, n);
                        this._fullNameStack.length !== 0 &&
                          this._fullNameStack[
                            this._fullNameStack.length - 1
                          ] === _ &&
                          this._fullNameStack.pop();
                      }
                    };
                  function T(t) {
                    return !u.isWhitespace(t) || t === u.$EOF;
                  }
                  function j(t) {
                    return (
                      u.isWhitespace(t) ||
                      t === u.$GT ||
                      t === u.$SLASH ||
                      t === u.$SQ ||
                      t === u.$DQ ||
                      t === u.$EQ
                    );
                  }
                  function Q(t) {
                    return (
                      (t < u.$a || u.$z < t) &&
                      (t < u.$A || u.$Z < t) &&
                      (t < u.$0 || t > u.$9)
                    );
                  }
                  function P(t) {
                    return (
                      t == u.$SEMICOLON || t == u.$EOF || !u.isAsciiHexDigit(t)
                    );
                  }
                  function Y(t) {
                    return (
                      t == u.$SEMICOLON || t == u.$EOF || !u.isAsciiLetter(t)
                    );
                  }
                  function te(t) {
                    return t === u.$EQ || u.isAsciiLetter(t) || u.isDigit(t);
                  }
                  function pe(t, n) {
                    return B(t) == B(n);
                  }
                  function B(t) {
                    return t >= u.$a && t <= u.$z ? t - u.$a + u.$A : t;
                  }
                  function K(t) {
                    let n = [],
                      _;
                    for (let h = 0; h < t.length; h++) {
                      let b = t[h];
                      _ && _.type == r.TEXT && b.type == r.TEXT
                        ? ((_.parts[0] += b.parts[0]),
                          (_.sourceSpan.end = b.sourceSpan.end))
                        : ((_ = b), n.push(_));
                    }
                    return n;
                  }
                  var re = class {
                      constructor(t, n) {
                        if (t instanceof re)
                          (this.file = t.file),
                            (this.input = t.input),
                            (this.end = t.end),
                            (this.state = Object.assign({}, t.state));
                        else {
                          if (!n)
                            throw new Error(
                              'Programming error: the range argument must be provided with a file argument.'
                            );
                          (this.file = t),
                            (this.input = t.content),
                            (this.end = n.endPos),
                            (this.state = {
                              peek: -1,
                              offset: n.startPos,
                              line: n.startLine,
                              column: n.startCol
                            });
                        }
                      }
                      clone() {
                        return new re(this);
                      }
                      peek() {
                        return this.state.peek;
                      }
                      charsLeft() {
                        return this.end - this.state.offset;
                      }
                      diff(t) {
                        return this.state.offset - t.state.offset;
                      }
                      advance() {
                        this.advanceState(this.state);
                      }
                      init() {
                        this.updatePeek(this.state);
                      }
                      getSpan(t, n) {
                        if (((t = t || this), n))
                          for (
                            t = t.clone();
                            this.diff(t) > 0 && n.indexOf(t.peek()) !== -1;

                          )
                            t.advance();
                        return new a.ParseSourceSpan(
                          new a.ParseLocation(
                            t.file,
                            t.state.offset,
                            t.state.line,
                            t.state.column
                          ),
                          new a.ParseLocation(
                            this.file,
                            this.state.offset,
                            this.state.line,
                            this.state.column
                          )
                        );
                      }
                      getChars(t) {
                        return this.input.substring(
                          t.state.offset,
                          this.state.offset
                        );
                      }
                      charAt(t) {
                        return this.input.charCodeAt(t);
                      }
                      advanceState(t) {
                        if (t.offset >= this.end)
                          throw (
                            ((this.state = t),
                            new le('Unexpected character "EOF"', this))
                          );
                        let n = this.charAt(t.offset);
                        n === u.$LF
                          ? (t.line++, (t.column = 0))
                          : u.isNewLine(n) || t.column++,
                          t.offset++,
                          this.updatePeek(t);
                      }
                      updatePeek(t) {
                        t.peek =
                          t.offset >= this.end ? u.$EOF : this.charAt(t.offset);
                      }
                    },
                    ie = class extends re {
                      constructor(t, n) {
                        t instanceof ie
                          ? (super(t),
                            (this.internalState = Object.assign(
                              {},
                              t.internalState
                            )))
                          : (super(t, n), (this.internalState = this.state));
                      }
                      advance() {
                        (this.state = this.internalState),
                          super.advance(),
                          this.processEscapeSequence();
                      }
                      init() {
                        super.init(), this.processEscapeSequence();
                      }
                      clone() {
                        return new ie(this);
                      }
                      getChars(t) {
                        let n = t.clone(),
                          _ = '';
                        for (
                          ;
                          n.internalState.offset < this.internalState.offset;

                        )
                          (_ += String.fromCodePoint(n.peek())), n.advance();
                        return _;
                      }
                      processEscapeSequence() {
                        let t = () => this.internalState.peek;
                        if (t() === u.$BACKSLASH)
                          if (
                            ((this.internalState = Object.assign(
                              {},
                              this.state
                            )),
                            this.advanceState(this.internalState),
                            t() === u.$n)
                          )
                            this.state.peek = u.$LF;
                          else if (t() === u.$r) this.state.peek = u.$CR;
                          else if (t() === u.$v) this.state.peek = u.$VTAB;
                          else if (t() === u.$t) this.state.peek = u.$TAB;
                          else if (t() === u.$b) this.state.peek = u.$BSPACE;
                          else if (t() === u.$f) this.state.peek = u.$FF;
                          else if (t() === u.$u)
                            if (
                              (this.advanceState(this.internalState),
                              t() === u.$LBRACE)
                            ) {
                              this.advanceState(this.internalState);
                              let n = this.clone(),
                                _ = 0;
                              for (; t() !== u.$RBRACE; )
                                this.advanceState(this.internalState), _++;
                              this.state.peek = this.decodeHexDigits(n, _);
                            } else {
                              let n = this.clone();
                              this.advanceState(this.internalState),
                                this.advanceState(this.internalState),
                                this.advanceState(this.internalState),
                                (this.state.peek = this.decodeHexDigits(n, 4));
                            }
                          else if (t() === u.$x) {
                            this.advanceState(this.internalState);
                            let n = this.clone();
                            this.advanceState(this.internalState),
                              (this.state.peek = this.decodeHexDigits(n, 2));
                          } else if (u.isOctalDigit(t())) {
                            let n = '',
                              _ = 0,
                              h = this.clone();
                            for (; u.isOctalDigit(t()) && _ < 3; )
                              (h = this.clone()),
                                (n += String.fromCodePoint(t())),
                                this.advanceState(this.internalState),
                                _++;
                            (this.state.peek = parseInt(n, 8)),
                              (this.internalState = h.internalState);
                          } else
                            u.isNewLine(this.internalState.peek)
                              ? (this.advanceState(this.internalState),
                                (this.state = this.internalState))
                              : (this.state.peek = this.internalState.peek);
                      }
                      decodeHexDigits(t, n) {
                        let _ = this.input.substr(t.internalState.offset, n),
                          h = parseInt(_, 16);
                        if (isNaN(h))
                          throw (
                            ((t.state = t.internalState),
                            new le('Invalid hexadecimal escape sequence', t))
                          );
                        return h;
                      }
                    },
                    le = class {
                      constructor(t, n) {
                        (this.msg = t), (this.cursor = n);
                      }
                    };
                  e.CursorError = le;
                }
              }),
              Ht = y({
                'node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = Fe(),
                    a = Xt(),
                    o = wr(),
                    l = rt(),
                    r = class extends u.ParseError {
                      constructor(s, D, d) {
                        super(D, d), (this.elementName = s);
                      }
                      static create(s, D, d) {
                        return new r(s, D, d);
                      }
                    };
                  e.TreeError = r;
                  var i = class {
                    constructor(s, D) {
                      (this.rootNodes = s), (this.errors = D);
                    }
                  };
                  e.ParseTreeResult = i;
                  var C = class {
                    constructor(s) {
                      this.getTagDefinition = s;
                    }
                    parse(s, D, d) {
                      let v =
                          arguments.length > 3 && arguments[3] !== void 0
                            ? arguments[3]
                            : !1,
                        A = arguments.length > 4 ? arguments[4] : void 0,
                        T = (re) =>
                          function (ie) {
                            for (
                              var le = arguments.length,
                                t = new Array(le > 1 ? le - 1 : 0),
                                n = 1;
                              n < le;
                              n++
                            )
                              t[n - 1] = arguments[n];
                            return re(ie.toLowerCase(), ...t);
                          },
                        j = v
                          ? this.getTagDefinition
                          : T(this.getTagDefinition),
                        Q = (re) => j(re).contentType,
                        P = v ? A : T(A),
                        Y = A
                          ? (re, ie, le, t) => {
                              let n = P(re, ie, le, t);
                              return n !== void 0 ? n : Q(re);
                            }
                          : Q,
                        te = o.tokenize(s, D, Y, d),
                        pe = (d && d.canSelfClose) || !1,
                        B = (d && d.allowHtmComponentClosingTags) || !1,
                        K = new m(te.tokens, j, pe, B, v).build();
                      return new i(K.rootNodes, te.errors.concat(K.errors));
                    }
                  };
                  e.Parser = C;
                  var m = class {
                    constructor(s, D, d, v, A) {
                      (this.tokens = s),
                        (this.getTagDefinition = D),
                        (this.canSelfClose = d),
                        (this.allowHtmComponentClosingTags = v),
                        (this.isTagNameCaseSensitive = A),
                        (this._index = -1),
                        (this._rootNodes = []),
                        (this._errors = []),
                        (this._elementStack = []),
                        this._advance();
                    }
                    build() {
                      for (; this._peek.type !== o.TokenType.EOF; )
                        this._peek.type === o.TokenType.TAG_OPEN_START
                          ? this._consumeStartTag(this._advance())
                          : this._peek.type === o.TokenType.TAG_CLOSE
                          ? (this._closeVoidElement(),
                            this._consumeEndTag(this._advance()))
                          : this._peek.type === o.TokenType.CDATA_START
                          ? (this._closeVoidElement(),
                            this._consumeCdata(this._advance()))
                          : this._peek.type === o.TokenType.COMMENT_START
                          ? (this._closeVoidElement(),
                            this._consumeComment(this._advance()))
                          : this._peek.type === o.TokenType.TEXT ||
                            this._peek.type === o.TokenType.RAW_TEXT ||
                            this._peek.type === o.TokenType.ESCAPABLE_RAW_TEXT
                          ? (this._closeVoidElement(),
                            this._consumeText(this._advance()))
                          : this._peek.type === o.TokenType.EXPANSION_FORM_START
                          ? this._consumeExpansion(this._advance())
                          : this._peek.type === o.TokenType.DOC_TYPE_START
                          ? this._consumeDocType(this._advance())
                          : this._advance();
                      return new i(this._rootNodes, this._errors);
                    }
                    _advance() {
                      let s = this._peek;
                      return (
                        this._index < this.tokens.length - 1 && this._index++,
                        (this._peek = this.tokens[this._index]),
                        s
                      );
                    }
                    _advanceIf(s) {
                      return this._peek.type === s ? this._advance() : null;
                    }
                    _consumeCdata(s) {
                      let D = this._advance(),
                        d = this._getText(D),
                        v = this._advanceIf(o.TokenType.CDATA_END);
                      this._addToParent(
                        new a.CDATA(
                          d,
                          new u.ParseSourceSpan(
                            s.sourceSpan.start,
                            (v || D).sourceSpan.end
                          )
                        )
                      );
                    }
                    _consumeComment(s) {
                      let D = this._advanceIf(o.TokenType.RAW_TEXT),
                        d = this._advanceIf(o.TokenType.COMMENT_END),
                        v = D != null ? D.parts[0].trim() : null,
                        A = new u.ParseSourceSpan(
                          s.sourceSpan.start,
                          (d || D || s).sourceSpan.end
                        );
                      this._addToParent(new a.Comment(v, A));
                    }
                    _consumeDocType(s) {
                      let D = this._advanceIf(o.TokenType.RAW_TEXT),
                        d = this._advanceIf(o.TokenType.DOC_TYPE_END),
                        v = D != null ? D.parts[0].trim() : null,
                        A = new u.ParseSourceSpan(
                          s.sourceSpan.start,
                          (d || D || s).sourceSpan.end
                        );
                      this._addToParent(new a.DocType(v, A));
                    }
                    _consumeExpansion(s) {
                      let D = this._advance(),
                        d = this._advance(),
                        v = [];
                      for (
                        ;
                        this._peek.type === o.TokenType.EXPANSION_CASE_VALUE;

                      ) {
                        let T = this._parseExpansionCase();
                        if (!T) return;
                        v.push(T);
                      }
                      if (this._peek.type !== o.TokenType.EXPANSION_FORM_END) {
                        this._errors.push(
                          r.create(
                            null,
                            this._peek.sourceSpan,
                            "Invalid ICU message. Missing '}'."
                          )
                        );
                        return;
                      }
                      let A = new u.ParseSourceSpan(
                        s.sourceSpan.start,
                        this._peek.sourceSpan.end
                      );
                      this._addToParent(
                        new a.Expansion(
                          D.parts[0],
                          d.parts[0],
                          v,
                          A,
                          D.sourceSpan
                        )
                      ),
                        this._advance();
                    }
                    _parseExpansionCase() {
                      let s = this._advance();
                      if (
                        this._peek.type !== o.TokenType.EXPANSION_CASE_EXP_START
                      )
                        return (
                          this._errors.push(
                            r.create(
                              null,
                              this._peek.sourceSpan,
                              "Invalid ICU message. Missing '{'."
                            )
                          ),
                          null
                        );
                      let D = this._advance(),
                        d = this._collectExpansionExpTokens(D);
                      if (!d) return null;
                      let v = this._advance();
                      d.push(new o.Token(o.TokenType.EOF, [], v.sourceSpan));
                      let A = new m(
                        d,
                        this.getTagDefinition,
                        this.canSelfClose,
                        this.allowHtmComponentClosingTags,
                        this.isTagNameCaseSensitive
                      ).build();
                      if (A.errors.length > 0)
                        return (
                          (this._errors = this._errors.concat(A.errors)), null
                        );
                      let T = new u.ParseSourceSpan(
                          s.sourceSpan.start,
                          v.sourceSpan.end
                        ),
                        j = new u.ParseSourceSpan(
                          D.sourceSpan.start,
                          v.sourceSpan.end
                        );
                      return new a.ExpansionCase(
                        s.parts[0],
                        A.rootNodes,
                        T,
                        s.sourceSpan,
                        j
                      );
                    }
                    _collectExpansionExpTokens(s) {
                      let D = [],
                        d = [o.TokenType.EXPANSION_CASE_EXP_START];
                      for (;;) {
                        if (
                          ((this._peek.type ===
                            o.TokenType.EXPANSION_FORM_START ||
                            this._peek.type ===
                              o.TokenType.EXPANSION_CASE_EXP_START) &&
                            d.push(this._peek.type),
                          this._peek.type ===
                            o.TokenType.EXPANSION_CASE_EXP_END)
                        )
                          if ($(d, o.TokenType.EXPANSION_CASE_EXP_START)) {
                            if ((d.pop(), d.length == 0)) return D;
                          } else
                            return (
                              this._errors.push(
                                r.create(
                                  null,
                                  s.sourceSpan,
                                  "Invalid ICU message. Missing '}'."
                                )
                              ),
                              null
                            );
                        if (this._peek.type === o.TokenType.EXPANSION_FORM_END)
                          if ($(d, o.TokenType.EXPANSION_FORM_START)) d.pop();
                          else
                            return (
                              this._errors.push(
                                r.create(
                                  null,
                                  s.sourceSpan,
                                  "Invalid ICU message. Missing '}'."
                                )
                              ),
                              null
                            );
                        if (this._peek.type === o.TokenType.EOF)
                          return (
                            this._errors.push(
                              r.create(
                                null,
                                s.sourceSpan,
                                "Invalid ICU message. Missing '}'."
                              )
                            ),
                            null
                          );
                        D.push(this._advance());
                      }
                    }
                    _getText(s) {
                      let D = s.parts[0];
                      if (
                        D.length > 0 &&
                        D[0] ==
                          `
`
                      ) {
                        let d = this._getParentElement();
                        d != null &&
                          d.children.length == 0 &&
                          this.getTagDefinition(d.name).ignoreFirstLf &&
                          (D = D.substring(1));
                      }
                      return D;
                    }
                    _consumeText(s) {
                      let D = this._getText(s);
                      D.length > 0 &&
                        this._addToParent(new a.Text(D, s.sourceSpan));
                    }
                    _closeVoidElement() {
                      let s = this._getParentElement();
                      s &&
                        this.getTagDefinition(s.name).isVoid &&
                        this._elementStack.pop();
                    }
                    _consumeStartTag(s) {
                      let D = s.parts[0],
                        d = s.parts[1],
                        v = [];
                      for (; this._peek.type === o.TokenType.ATTR_NAME; )
                        v.push(this._consumeAttr(this._advance()));
                      let A = this._getElementFullName(
                          D,
                          d,
                          this._getParentElement()
                        ),
                        T = !1;
                      if (this._peek.type === o.TokenType.TAG_OPEN_END_VOID) {
                        this._advance(), (T = !0);
                        let te = this.getTagDefinition(A);
                        this.canSelfClose ||
                          te.canSelfClose ||
                          l.getNsPrefix(A) !== null ||
                          te.isVoid ||
                          this._errors.push(
                            r.create(
                              A,
                              s.sourceSpan,
                              `Only void and foreign elements can be self closed "${s.parts[1]}"`
                            )
                          );
                      } else
                        this._peek.type === o.TokenType.TAG_OPEN_END &&
                          (this._advance(), (T = !1));
                      let j = this._peek.sourceSpan.start,
                        Q = new u.ParseSourceSpan(s.sourceSpan.start, j),
                        P = new u.ParseSourceSpan(
                          s.sourceSpan.start.moveBy(1),
                          s.sourceSpan.end
                        ),
                        Y = new a.Element(A, v, [], Q, Q, void 0, P);
                      this._pushElement(Y),
                        T && (this._popElement(A), (Y.endSourceSpan = Q));
                    }
                    _pushElement(s) {
                      let D = this._getParentElement();
                      D &&
                        this.getTagDefinition(D.name).isClosedByChild(s.name) &&
                        this._elementStack.pop(),
                        this._addToParent(s),
                        this._elementStack.push(s);
                    }
                    _consumeEndTag(s) {
                      let D =
                        this.allowHtmComponentClosingTags &&
                        s.parts.length === 0
                          ? null
                          : this._getElementFullName(
                              s.parts[0],
                              s.parts[1],
                              this._getParentElement()
                            );
                      if (
                        (this._getParentElement() &&
                          (this._getParentElement().endSourceSpan =
                            s.sourceSpan),
                        D && this.getTagDefinition(D).isVoid)
                      )
                        this._errors.push(
                          r.create(
                            D,
                            s.sourceSpan,
                            `Void elements do not have end tags "${s.parts[1]}"`
                          )
                        );
                      else if (!this._popElement(D)) {
                        let d = `Unexpected closing tag "${D}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
                        this._errors.push(r.create(D, s.sourceSpan, d));
                      }
                    }
                    _popElement(s) {
                      for (let D = this._elementStack.length - 1; D >= 0; D--) {
                        let d = this._elementStack[D];
                        if (
                          !s ||
                          (l.getNsPrefix(d.name)
                            ? d.name == s
                            : d.name.toLowerCase() == s.toLowerCase())
                        )
                          return (
                            this._elementStack.splice(
                              D,
                              this._elementStack.length - D
                            ),
                            !0
                          );
                        if (!this.getTagDefinition(d.name).closedByParent)
                          return !1;
                      }
                      return !1;
                    }
                    _consumeAttr(s) {
                      let D = l.mergeNsAndName(s.parts[0], s.parts[1]),
                        d = s.sourceSpan.end,
                        v = '',
                        A,
                        T;
                      if (
                        (this._peek.type === o.TokenType.ATTR_QUOTE &&
                          (T = this._advance().sourceSpan.start),
                        this._peek.type === o.TokenType.ATTR_VALUE)
                      ) {
                        let j = this._advance();
                        (v = j.parts[0]),
                          (d = j.sourceSpan.end),
                          (A = j.sourceSpan);
                      }
                      return (
                        this._peek.type === o.TokenType.ATTR_QUOTE &&
                          ((d = this._advance().sourceSpan.end),
                          (A = new u.ParseSourceSpan(T, d))),
                        new a.Attribute(
                          D,
                          v,
                          new u.ParseSourceSpan(s.sourceSpan.start, d),
                          A,
                          s.sourceSpan
                        )
                      );
                    }
                    _getParentElement() {
                      return this._elementStack.length > 0
                        ? this._elementStack[this._elementStack.length - 1]
                        : null;
                    }
                    _getParentElementSkippingContainers() {
                      let s = null;
                      for (let D = this._elementStack.length - 1; D >= 0; D--) {
                        if (!l.isNgContainer(this._elementStack[D].name))
                          return {
                            parent: this._elementStack[D],
                            container: s
                          };
                        s = this._elementStack[D];
                      }
                      return { parent: null, container: s };
                    }
                    _addToParent(s) {
                      let D = this._getParentElement();
                      D != null ? D.children.push(s) : this._rootNodes.push(s);
                    }
                    _insertBeforeContainer(s, D, d) {
                      if (!D) this._addToParent(d), this._elementStack.push(d);
                      else {
                        if (s) {
                          let v = s.children.indexOf(D);
                          s.children[v] = d;
                        } else this._rootNodes.push(d);
                        d.children.push(D),
                          this._elementStack.splice(
                            this._elementStack.indexOf(D),
                            0,
                            d
                          );
                      }
                    }
                    _getElementFullName(s, D, d) {
                      return (
                        s === '' &&
                          ((s =
                            this.getTagDefinition(D).implicitNamespacePrefix ||
                            ''),
                          s === '' && d != null && (s = l.getNsPrefix(d.name))),
                        l.mergeNsAndName(s, D)
                      );
                    }
                  };
                  function $(s, D) {
                    return s.length > 0 && s[s.length - 1] === D;
                  }
                }
              }),
              xr = y({
                'node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = Gt(),
                    a = Ht(),
                    o = Ht();
                  (e.ParseTreeResult = o.ParseTreeResult),
                    (e.TreeError = o.TreeError);
                  var l = class extends a.Parser {
                    constructor() {
                      super(u.getHtmlTagDefinition);
                    }
                    parse(r, i, C) {
                      let m =
                          arguments.length > 3 && arguments[3] !== void 0
                            ? arguments[3]
                            : !1,
                        $ = arguments.length > 4 ? arguments[4] : void 0;
                      return super.parse(r, i, C, m, $);
                    }
                  };
                  e.HtmlParser = l;
                }
              }),
              zt = y({
                'node_modules/angular-html-parser/lib/angular-html-parser/src/index.js'(
                  e
                ) {
                  U(), Object.defineProperty(e, '__esModule', { value: !0 });
                  var u = xr(),
                    a = rt();
                  e.TagContentType = a.TagContentType;
                  var o = null,
                    l = () => (o || (o = new u.HtmlParser()), o);
                  function r(i) {
                    let C =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : {},
                      {
                        canSelfClose: m = !1,
                        allowHtmComponentClosingTags: $ = !1,
                        isTagNameCaseSensitive: s = !1,
                        getTagContentType: D
                      } = C;
                    return l().parse(
                      i,
                      'angular-html-parser',
                      {
                        tokenizeExpansionForms: !1,
                        interpolationConfig: void 0,
                        canSelfClose: m,
                        allowHtmComponentClosingTags: $
                      },
                      s,
                      D
                    );
                  }
                  e.parse = r;
                }
              });
            U();
            var {
                ParseSourceSpan: nt,
                ParseLocation: Wt,
                ParseSourceFile: Nr
              } = Fe(),
              Or = je(),
              kr = We(),
              Pr = Re(),
              { inferParserByLanguage: Rr } = Cr(),
              Ir = mr(),
              At = Fr(),
              Yt = Ar(),
              { hasPragma: $r } = _r(),
              { Node: Lr } = vr(),
              { parseIeConditionalComment: qr } = Tr(),
              { locStart: jr, locEnd: Mr } = yr();
            function Ur(e, u, a) {
              let {
                  recognizeSelfClosing: o,
                  normalizeTagName: l,
                  normalizeAttributeName: r,
                  allowHtmComponentClosingTags: i,
                  isTagNameCaseSensitive: C,
                  getTagContentType: m
                } = u,
                $ = zt(),
                { RecursiveVisitor: s, visitAll: D } = Xt(),
                { ParseSourceSpan: d } = Fe(),
                { getHtmlTagDefinition: v } = Gt(),
                { rootNodes: A, errors: T } = $.parse(e, {
                  canSelfClose: o,
                  allowHtmComponentClosingTags: i,
                  isTagNameCaseSensitive: C,
                  getTagContentType: m
                });
              if (a.parser === 'vue')
                if (
                  A.some(
                    (B) =>
                      (B.type === 'docType' && B.value === 'html') ||
                      (B.type === 'element' && B.name.toLowerCase() === 'html')
                  )
                ) {
                  (o = !0), (l = !0), (r = !0), (i = !0), (C = !1);
                  let B = $.parse(e, {
                    canSelfClose: o,
                    allowHtmComponentClosingTags: i,
                    isTagNameCaseSensitive: C
                  });
                  (A = B.rootNodes), (T = B.errors);
                } else {
                  let B = (K) => {
                    if (!K || K.type !== 'element' || K.name !== 'template')
                      return !1;
                    let re = K.attrs.find((le) => le.name === 'lang'),
                      ie = re && re.value;
                    return !ie || Rr(ie, a) === 'html';
                  };
                  if (A.some(B)) {
                    let K,
                      re = () =>
                        $.parse(e, {
                          canSelfClose: o,
                          allowHtmComponentClosingTags: i,
                          isTagNameCaseSensitive: C
                        }),
                      ie = () => K || (K = re()),
                      le = (t) =>
                        ie().rootNodes.find((n) => {
                          let { startSourceSpan: _ } = n;
                          return (
                            _ &&
                            _.start.offset === t.startSourceSpan.start.offset
                          );
                        });
                    for (let t = 0; t < A.length; t++) {
                      let n = A[t],
                        { endSourceSpan: _, startSourceSpan: h } = n;
                      if (_ === null) (T = ie().errors), (A[t] = le(n) || n);
                      else if (B(n)) {
                        let b = ie(),
                          ne = h.end.offset,
                          De = _.start.offset;
                        for (let Te of b.errors) {
                          let { offset: _e } = Te.span.start;
                          if (ne < _e && _e < De) {
                            T = [Te];
                            break;
                          }
                        }
                        A[t] = le(n) || n;
                      }
                    }
                  }
                }
              if (T.length > 0) {
                let {
                  msg: B,
                  span: { start: K, end: re }
                } = T[0];
                throw Pr(B, {
                  start: { line: K.line + 1, column: K.col + 1 },
                  end: { line: re.line + 1, column: re.col + 1 }
                });
              }
              let j = (B) => {
                  let K = B.name.startsWith(':')
                      ? B.name.slice(1).split(':')[0]
                      : null,
                    re = B.nameSpan.toString(),
                    ie = K !== null && re.startsWith(`${K}:`),
                    le = ie ? re.slice(K.length + 1) : re;
                  (B.name = le),
                    (B.namespace = K),
                    (B.hasExplicitNamespace = ie);
                },
                Q = (B) => {
                  switch (B.type) {
                    case 'element':
                      j(B);
                      for (let K of B.attrs)
                        j(K),
                          K.valueSpan
                            ? ((K.value = K.valueSpan.toString()),
                              /["']/.test(K.value[0]) &&
                                (K.value = K.value.slice(1, -1)))
                            : (K.value = null);
                      break;
                    case 'comment':
                      B.value = B.sourceSpan.toString().slice(4, -3);
                      break;
                    case 'text':
                      B.value = B.sourceSpan.toString();
                      break;
                  }
                },
                P = (B, K) => {
                  let re = B.toLowerCase();
                  return K(re) ? re : B;
                },
                Y = (B) => {
                  if (
                    B.type === 'element' &&
                    (l &&
                      (!B.namespace ||
                        B.namespace ===
                          B.tagDefinition.implicitNamespacePrefix ||
                        Yt(B)) &&
                      (B.name = P(B.name, (K) => K in Ir)),
                    r)
                  ) {
                    let K = At[B.name] || Object.create(null);
                    for (let re of B.attrs)
                      re.namespace ||
                        (re.name = P(
                          re.name,
                          (ie) => B.name in At && (ie in At['*'] || ie in K)
                        ));
                  }
                },
                te = (B) => {
                  B.sourceSpan &&
                    B.endSourceSpan &&
                    (B.sourceSpan = new d(
                      B.sourceSpan.start,
                      B.endSourceSpan.end
                    ));
                },
                pe = (B) => {
                  if (B.type === 'element') {
                    let K = v(C ? B.name : B.name.toLowerCase());
                    !B.namespace ||
                    B.namespace === K.implicitNamespacePrefix ||
                    Yt(B)
                      ? (B.tagDefinition = K)
                      : (B.tagDefinition = v(''));
                  }
                };
              return (
                D(
                  new (class extends s {
                    visit(B) {
                      Q(B), pe(B), Y(B), te(B);
                    }
                  })(),
                  A
                ),
                A
              );
            }
            function Qt(e, u, a) {
              let o =
                  arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : !0,
                { frontMatter: l, content: r } = o
                  ? Or(e)
                  : { frontMatter: null, content: e },
                i = new Nr(e, u.filepath),
                C = new Wt(i, 0, 0, 0),
                m = C.moveBy(e.length),
                $ = {
                  type: 'root',
                  sourceSpan: new nt(C, m),
                  children: Ur(r, a, u)
                };
              if (l) {
                let d = new Wt(i, 0, 0, 0),
                  v = d.moveBy(l.raw.length);
                (l.sourceSpan = new nt(d, v)), $.children.unshift(l);
              }
              let s = new Lr($),
                D = (d, v) => {
                  let { offset: A } = v,
                    T = e.slice(0, A).replace(/[^\n\r]/g, ' '),
                    j = Qt(T + d, u, a, !1);
                  j.sourceSpan = new nt(v, kr(j.children).sourceSpan.end);
                  let Q = j.children[0];
                  return (
                    Q.length === A
                      ? j.children.shift()
                      : ((Q.sourceSpan = new nt(
                          Q.sourceSpan.start.moveBy(A),
                          Q.sourceSpan.end
                        )),
                        (Q.value = Q.value.slice(A))),
                    j
                  );
                };
              return (
                s.walk((d) => {
                  if (d.type === 'comment') {
                    let v = qr(d, D);
                    v && d.parent.replaceChild(d, v);
                  }
                }),
                s
              );
            }
            function st() {
              let {
                name: e,
                recognizeSelfClosing: u = !1,
                normalizeTagName: a = !1,
                normalizeAttributeName: o = !1,
                allowHtmComponentClosingTags: l = !1,
                isTagNameCaseSensitive: r = !1,
                getTagContentType: i
              } = arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {};
              return {
                parse: (C, m, $) =>
                  Qt(C, Object.assign({ parser: e }, $), {
                    recognizeSelfClosing: u,
                    normalizeTagName: a,
                    normalizeAttributeName: o,
                    allowHtmComponentClosingTags: l,
                    isTagNameCaseSensitive: r,
                    getTagContentType: i
                  }),
                hasPragma: $r,
                astFormat: 'html',
                locStart: jr,
                locEnd: Mr
              };
            }
            p.exports = {
              parsers: {
                html: st({
                  name: 'html',
                  recognizeSelfClosing: !0,
                  normalizeTagName: !0,
                  normalizeAttributeName: !0,
                  allowHtmComponentClosingTags: !0
                }),
                angular: st({ name: 'angular' }),
                vue: st({
                  name: 'vue',
                  recognizeSelfClosing: !0,
                  isTagNameCaseSensitive: !0,
                  getTagContentType: (e, u, a, o) => {
                    if (
                      e.toLowerCase() !== 'html' &&
                      !a &&
                      (e !== 'template' ||
                        o.some((l) => {
                          let { name: r, value: i } = l;
                          return (
                            r === 'lang' &&
                            i !== 'html' &&
                            i !== '' &&
                            i !== void 0
                          );
                        }))
                    )
                      return zt().TagContentType.RAW_TEXT;
                  }
                }),
                lwc: st({ name: 'lwc' })
              }
            };
          });
        return Xu();
      });
    }
  }),
  pn = ['props', 'events', 'slots', 'methods'],
  hn = (w) => {
    if (!Wr(w)) return null;
    let k = {};
    return (
      pn.forEach((g) => {
        Yr(w, g).forEach(({ propDef: q, docgenInfo: X, jsDocTags: ee }) => {
          let {
              name: ue,
              type: se,
              description: Ee,
              defaultValue: Ae,
              required: me
            } = q,
            ye = g === 'props' ? Qr(X) : { name: 'void' };
          k[ue] = {
            name: ue,
            description: Ee,
            type: { required: me, ...ye },
            table: { type: se, jsDocTags: ee, defaultValue: Ae, category: g }
          };
        });
      }),
      k
    );
  },
  dn = nn(cn());
function Cn(w, k) {
  let g = Object.create(null),
    q = w.split(',');
  for (let X = 0; X < q.length; X++) g[q[X]] = !0;
  return k ? (X) => !!g[X.toLowerCase()] : (X) => !!g[X];
}
var En =
  'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly';
Cn(
  En +
    ',async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected'
);
var iu = Array.isArray,
  mn = (w) => {
    var q;
    let k =
        (q = w == null ? void 0 : w.parameters.docs) == null
          ? void 0
          : q.source,
      g = w == null ? void 0 : w.parameters.__isArgsStory;
    return (k == null ? void 0 : k.type) === tu.DYNAMIC
      ? !1
      : !g ||
          (k == null ? void 0 : k.code) ||
          (k == null ? void 0 : k.type) === tu.CODE;
  };
function fn(w) {
  var k;
  return {
    name:
      (w == null ? void 0 : w.name) ||
      (w == null ? void 0 : w.__name) ||
      ((k = w == null ? void 0 : w.__docgenInfo) == null ? void 0 : k.__name) ||
      null,
    children: (w == null ? void 0 : w.children) || null,
    attributes:
      (w == null ? void 0 : w.attributes) ||
      (w == null ? void 0 : w.attrs) ||
      null
  };
}
function gn(w, k, g) {
  let q = { ...Gr(w) },
    X = Object.keys(q)
      .filter((ue) => {
        var se, Ee;
        return (
          ['children', 'slots'].indexOf(
            (Ee = (se = k[ue]) == null ? void 0 : se.table) == null
              ? void 0
              : Ee.category
          ) === -1 || !k[ue]
        );
      })
      .map((ue) => {
        var Ee, Ae;
        let se =
          ((Ae = (Ee = k[ue]) == null ? void 0 : Ee.table) == null
            ? void 0
            : Ae.category) !== 'events'
            ? ue
                .replace(/([A-Z])/g, '-$1')
                .replace(/^on-/, 'v-on:')
                .replace(/^:/, '')
                .toLowerCase()
            : `v-on:${ue}`;
        return (q[se] = q[ue]), se;
      })
      .filter((ue, se, Ee) => Ee.indexOf(ue) === se),
    ee = (ue) => ue.replace(/-([a-z])/g, (se) => se[1].toUpperCase());
  return X.map((ue) =>
    Fn(
      g && !ue.includes(':') ? `:${ue}` : ue,
      g && !ue.includes(':') ? ee(ue) : q[ue],
      k[ue]
    )
  ).join(' ');
}
function Fn(w, k, g) {
  return k
    ? k === !0
      ? w
      : w.startsWith('v-on:')
      ? `${w}='() => {}'`
      : typeof k == 'string'
      ? `${w}='${k}'`
      : `:${w}='${JSON.stringify(k)}'`
    : '';
}
function An(w, k, g) {
  let q = Object.keys(w).map(
    (X) =>
      `const ${X} = ${
        typeof w[X] == 'function' ? '()=>{}' : `ref(${JSON.stringify(w[X])});`
      }`
  );
  return (
    q.unshift('import { ref } from "vue";'),
    `<script lang='ts' setup>${q.join(`
`)}<\/script>`
  );
}
function au(w) {
  var k;
  try {
    let g =
      (k = dn.default.parsers.vue.parse(w.toString()).children) == null
        ? void 0
        : k.filter(
            ({ name: q = '', type: X = '' }) =>
              q &&
              !['template', 'script', 'style', 'slot'].includes(q) &&
              X === 'element'
          );
    return iu(g)
      ? ((g = g.map(({ attrs: q = [], name: X = '', children: ee = [] }) => ({
          name: X,
          attrs: q,
          children: ee
        }))),
        g)
      : [];
  } catch {}
  return [];
}
function ou(w, k, g, q) {
  if (!w) return null;
  let X = (ue) => {
      let { name: se, children: Ee, attributes: Ae } = fn(ue);
      if (!se) return '';
      let me = Ae ? vn(k, Ae) : k,
        ye = gn(me, g, q),
        Oe = Object.entries(me).filter(([Se]) => {
          var fe, ve;
          return (
            ((ve = (fe = g[Se]) == null ? void 0 : fe.table) == null
              ? void 0
              : ve.category) === 'slots'
          );
        }),
        qe = Object.entries(g).filter(([Se]) => {
          var fe, ve;
          return (
            ((ve = (fe = g[Se]) == null ? void 0 : fe.table) == null
              ? void 0
              : ve.category) === 'slots'
          );
        });
      if (Oe && Oe.length > 0) {
        let Se = _n(Oe, qe, q);
        return `<${se} ${ye}>
${Se}
</${se}>`;
      }
      if (Ee && Ee.length > 0) {
        let Se = Ee.map((ve) =>
          ou(typeof ve.value == 'string' ? au(ve.value) : ve.value, k, g, q)
        );
        if (Se.join('').trim() === '') return `<${se} ${ye}/>`;
        let fe =
          se.includes('template') ||
          se.match(/^[a-z]/) ||
          (se === 'Fragment' && !se.includes('-'));
        return `<${se} ${fe ? '' : ye}>
${Se}
</${se}>`;
      }
      return `<${se} ${ye}/>`;
    },
    ee = iu(w) ? w : [w];
  return Object.keys(ee).map((ue) => `${X(ee[ue])}`).join(`
`);
}
function _n(w, k, g) {
  if (!w) return '';
  let q = k.length > 1;
  return w.map(([X, ee]) => {
    let ue = g ? `{{ ${X} }}` : JSON.stringify(ee);
    return q ? `  <template #${X}>${ue}</template>` : `  ${ue}`;
  }).join(`
`);
}
function vn(w, k) {
  return Object.keys(w).reduce((g, q) => {
    k != null && k.find((ee) => ee.name === 'v-bind') && (g[q] = w[q]);
    let X =
      k == null ? void 0 : k.find((ee) => ee.name === q || ee.name === `:${q}`);
    return (
      X && (g[q] = X.name === `:${q}` ? w[q] : X.value),
      Object.keys(g).length === 0 &&
        (k == null ||
          k.forEach((ee) => {
            g[ee.name] = JSON.parse(JSON.stringify(ee.value));
          })),
      g
    );
  }, {});
}
var Tn = (w, k) => {
    var Se, fe, ve;
    let g = Dn.getChannel(),
      q = mn(k),
      X = w(),
      ee;
    if (
      (ln(() => {
        if (!q && ee) {
          let { id: Xe, unmappedArgs: Ze } = k;
          g.emit(Hr, { id: Xe, args: Ze, source: ee, format: 'vue' });
        }
      }),
      q)
    )
      return X;
    let { args: ue = {}, component: se, argTypes: Ee = {} } = k || {},
      Ae = au(k == null ? void 0 : k.originalStoryFn),
      me = Ae.length ? Ae : se,
      ye =
        ((ve =
          (fe =
            (Se = k == null ? void 0 : k.parameters) == null
              ? void 0
              : Se.docs) == null
            ? void 0
            : fe.source) == null
          ? void 0
          : ve.withScriptSetup) || !1,
      Oe = ye ? An(ue) : '',
      qe = ou(me, ue, Ee, ye);
    return (
      qe &&
        (ee = `${Oe}
 <template>
 ${qe} 
</template>`),
      X
    );
  },
  yn = {
    docs: {
      story: { inline: !0 },
      extractArgTypes: hn,
      extractComponentDescription: zr
    }
  },
  On = [Tn],
  kn = [Xr],
  Pn = { renderer: 'vue3', ...yn };
export {
  wn as applyDecorators,
  kn as argTypesEnhancers,
  On as decorators,
  Pn as parameters,
  xn as render,
  Nn as renderToCanvas
};
//# sourceMappingURL=config-c9698127.js.map
