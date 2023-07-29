import { _ as un } from './iframe-0fe055d1.js';
import { g as ba } from './_commonjsHelpers-725317a4.js';
import { s as Pe } from './index-d475d2ea.js';
import { L as If, v as uy } from './index-d37d4223.js';
import {
  g as Pf,
  j as sy,
  k as Nf,
  l as cy,
  i as Fi,
  m as dy,
  n as py,
  o as fy,
  p as my,
  q as jf,
  s as gy,
  r as Hf,
  t as hy,
  u as yy,
  v as vy,
  w as by,
  x as Ey,
  y as xy,
  z as Zf,
  A as wy,
  B as Sy,
  C as zf,
  _ as Ay,
  D as Cy,
  E as ky,
  F as Vc,
  G as Vf,
  H as Uf,
  I as qf,
  J as _y,
  K as Fy,
  L as Ty,
  M as Oy,
  S as Gd,
  N as vs,
  d as vu
} from './index-826364cc.js';
import { d as Ye } from './index-356e4a49.js';
function Ry(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const a in r)
        if (a !== 'default' && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(r, a);
          o &&
            Object.defineProperty(
              e,
              a,
              o.get ? o : { enumerable: !0, get: () => r[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
var Wf = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ho = Symbol.for('react.element'),
  Dy = Symbol.for('react.portal'),
  Ly = Symbol.for('react.fragment'),
  My = Symbol.for('react.strict_mode'),
  $y = Symbol.for('react.profiler'),
  By = Symbol.for('react.provider'),
  Iy = Symbol.for('react.context'),
  Py = Symbol.for('react.forward_ref'),
  Ny = Symbol.for('react.suspense'),
  jy = Symbol.for('react.memo'),
  Hy = Symbol.for('react.lazy'),
  Kd = Symbol.iterator;
function Zy(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Kd && e[Kd]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Gf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Kf = Object.assign,
  Yf = {};
function Ea(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yf),
    (this.updater = n || Gf);
}
Ea.prototype.isReactComponent = {};
Ea.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ea.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Xf() {}
Xf.prototype = Ea.prototype;
function Uc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yf),
    (this.updater = n || Gf);
}
var qc = (Uc.prototype = new Xf());
qc.constructor = Uc;
Kf(qc, Ea.prototype);
qc.isPureReactComponent = !0;
var Yd = Array.isArray,
  Qf = Object.prototype.hasOwnProperty,
  Wc = { current: null },
  Jf = { key: !0, ref: !0, __self: !0, __source: !0 };
function e2(e, t, n) {
  var r,
    a = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Qf.call(t, r) && !Jf.hasOwnProperty(r) && (a[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) a.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    a.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) a[r] === void 0 && (a[r] = s[r]);
  return {
    $$typeof: Ho,
    type: e,
    key: o,
    ref: i,
    props: a,
    _owner: Wc.current
  };
}
function zy(e, t) {
  return {
    $$typeof: Ho,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}
function Gc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ho;
}
function Vy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Xd = /\/+/g;
function bu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Vy('' + e.key)
    : t.toString(36);
}
function Al(e, t, n, r, a) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Ho:
          case Dy:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (a = a(i)),
      (e = r === '' ? '.' + bu(i, 0) : r),
      Yd(a)
        ? ((n = ''),
          e != null && (n = e.replace(Xd, '$&/') + '/'),
          Al(a, t, n, '', function (c) {
            return c;
          }))
        : a != null &&
          (Gc(a) &&
            (a = zy(
              a,
              n +
                (!a.key || (i && i.key === a.key)
                  ? ''
                  : ('' + a.key).replace(Xd, '$&/') + '/') +
                e
            )),
          t.push(a)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Yd(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + bu(o, s);
      i += Al(o, t, n, u, a);
    }
  else if (((u = Zy(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + bu(o, s++)), (i += Al(o, t, n, u, a));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function el(e, t, n) {
  if (e == null) return e;
  var r = [],
    a = 0;
  return (
    Al(e, r, '', '', function (o) {
      return t.call(n, o, a++);
    }),
    r
  );
}
function Uy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ue = { current: null },
  Cl = { transition: null },
  qy = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: Cl,
    ReactCurrentOwner: Wc
  };
Y.Children = {
  map: el,
  forEach: function (e, t, n) {
    el(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      el(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      el(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  }
};
Y.Component = Ea;
Y.Fragment = Ly;
Y.Profiler = $y;
Y.PureComponent = Uc;
Y.StrictMode = My;
Y.Suspense = Ny;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qy;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Kf({}, e.props),
    a = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Wc.current)),
      t.key !== void 0 && (a = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Qf.call(t, u) &&
        !Jf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Ho, type: e.type, key: a, ref: o, props: r, _owner: i };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Iy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: By, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = e2;
Y.createFactory = function (e) {
  var t = e2.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Py, render: e };
};
Y.isValidElement = Gc;
Y.lazy = function (e) {
  return { $$typeof: Hy, _payload: { _status: -1, _result: e }, _init: Uy };
};
Y.memo = function (e, t) {
  return { $$typeof: jy, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Cl.transition;
  Cl.transition = {};
  try {
    e();
  } finally {
    Cl.transition = t;
  }
};
Y.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
Y.useCallback = function (e, t) {
  return Ue.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return Ue.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return Ue.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return Ue.current.useEffect(e, t);
};
Y.useId = function () {
  return Ue.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return Ue.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return Ue.current.useRef(e);
};
Y.useState = function (e) {
  return Ue.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return Ue.current.useTransition();
};
Y.version = '18.2.0';
Wf.exports = Y;
var k = Wf.exports;
const l = ba(k),
  Qd = Ry({ __proto__: null, default: l }, [k]);
var bs = {},
  t2 = { exports: {} },
  dt = {},
  n2 = { exports: {} },
  r2 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, D) {
    var $ = R.length;
    R.push(D);
    e: for (; 0 < $; ) {
      var V = ($ - 1) >>> 1,
        G = R[V];
      if (0 < a(G, D)) (R[V] = D), (R[$] = G), ($ = V);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var D = R[0],
      $ = R.pop();
    if ($ !== D) {
      R[0] = $;
      e: for (var V = 0, G = R.length, Q = G >>> 1; V < Q; ) {
        var J = 2 * (V + 1) - 1,
          j = R[J],
          W = J + 1,
          K = R[W];
        if (0 > a(j, $))
          W < G && 0 > a(K, j)
            ? ((R[V] = K), (R[W] = $), (V = W))
            : ((R[V] = j), (R[J] = $), (V = J));
        else if (W < G && 0 > a(K, $)) (R[V] = K), (R[W] = $), (V = W);
        else break e;
      }
    }
    return D;
  }
  function a(R, D) {
    var $ = R.sortIndex - D.sortIndex;
    return $ !== 0 ? $ : R.id - D.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    c = [],
    d = 1,
    g = null,
    f = 3,
    p = !1,
    h = !1,
    m = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    y = typeof clearTimeout == 'function' ? clearTimeout : null,
    b = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= R)
        r(c), (D.sortIndex = D.expirationTime), t(u, D);
      else break;
      D = n(c);
    }
  }
  function E(R) {
    if (((m = !1), v(R), !h))
      if (n(u) !== null) (h = !0), P(x);
      else {
        var D = n(c);
        D !== null && z(E, D.startTime - R);
      }
  }
  function x(R, D) {
    (h = !1), m && ((m = !1), y(C), (C = -1)), (p = !0);
    var $ = f;
    try {
      for (
        v(D), g = n(u);
        g !== null && (!(g.expirationTime > D) || (R && !O()));

      ) {
        var V = g.callback;
        if (typeof V == 'function') {
          (g.callback = null), (f = g.priorityLevel);
          var G = V(g.expirationTime <= D);
          (D = e.unstable_now()),
            typeof G == 'function' ? (g.callback = G) : g === n(u) && r(u),
            v(D);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var Q = !0;
      else {
        var J = n(c);
        J !== null && z(E, J.startTime - D), (Q = !1);
      }
      return Q;
    } finally {
      (g = null), (f = $), (p = !1);
    }
  }
  var S = !1,
    A = null,
    C = -1,
    T = 5,
    _ = -1;
  function O() {
    return !(e.unstable_now() - _ < T);
  }
  function B() {
    if (A !== null) {
      var R = e.unstable_now();
      _ = R;
      var D = !0;
      try {
        D = A(!0, R);
      } finally {
        D ? M() : ((S = !1), (A = null));
      }
    } else S = !1;
  }
  var M;
  if (typeof b == 'function')
    M = function () {
      b(B);
    };
  else if (typeof MessageChannel < 'u') {
    var Z = new MessageChannel(),
      I = Z.port2;
    (Z.port1.onmessage = B),
      (M = function () {
        I.postMessage(null);
      });
  } else
    M = function () {
      w(B, 0);
    };
  function P(R) {
    (A = R), S || ((S = !0), M());
  }
  function z(R, D) {
    C = w(function () {
      R(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || p || ((h = !0), P(x));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = f;
      }
      var $ = f;
      f = D;
      try {
        return R();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, D) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var $ = f;
      f = R;
      try {
        return D();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (R, D, $) {
      var V = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? V + $ : V))
          : ($ = V),
        R)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = $ + G),
        (R = {
          id: d++,
          callback: D,
          priorityLevel: R,
          startTime: $,
          expirationTime: G,
          sortIndex: -1
        }),
        $ > V
          ? ((R.sortIndex = $),
            t(c, R),
            n(u) === null &&
              R === n(c) &&
              (m ? (y(C), (C = -1)) : (m = !0), z(E, $ - V)))
          : ((R.sortIndex = G), t(u, R), h || p || ((h = !0), P(x))),
        R
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (R) {
      var D = f;
      return function () {
        var $ = f;
        f = D;
        try {
          return R.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    });
})(r2);
n2.exports = r2;
var Wy = n2.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a2 = k,
  st = Wy;
function L(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var o2 = new Set(),
  io = {};
function _r(e, t) {
  aa(e, t), aa(e + 'Capture', t);
}
function aa(e, t) {
  for (io[e] = t, e = 0; e < t.length; e++) o2.add(t[e]);
}
var En = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Es = Object.prototype.hasOwnProperty,
  Gy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Jd = {},
  e1 = {};
function Ky(e) {
  return Es.call(e1, e)
    ? !0
    : Es.call(Jd, e)
    ? !1
    : Gy.test(e)
    ? (e1[e] = !0)
    : ((Jd[e] = !0), !1);
}
function Yy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Xy(e, t, n, r) {
  if (t === null || typeof t > 'u' || Yy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function qe(e, t, n, r, a, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var De = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    De[e] = new qe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0];
  De[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  De[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (e) {
  De[e] = new qe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    De[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  De[e] = new qe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  De[e] = new qe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  De[e] = new qe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  De[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Kc = /[\-:]([a-z])/g;
function Yc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Kc, Yc);
    De[t] = new qe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Kc, Yc);
    De[t] = new qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Kc, Yc);
  De[t] = new qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  De[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new qe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  De[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xc(e, t, n, r) {
  var a = De.hasOwnProperty(t) ? De[t] : null;
  (a !== null
    ? a.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Xy(t, n, a, r) && (n = null),
    r || a === null
      ? Ky(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : a.mustUseProperty
      ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : '') : n)
      : ((t = a.attributeName),
        (r = a.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((a = a.type),
            (n = a === 3 || (a === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Cn = a2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  tl = Symbol.for('react.element'),
  Ir = Symbol.for('react.portal'),
  Pr = Symbol.for('react.fragment'),
  Qc = Symbol.for('react.strict_mode'),
  xs = Symbol.for('react.profiler'),
  l2 = Symbol.for('react.provider'),
  i2 = Symbol.for('react.context'),
  Jc = Symbol.for('react.forward_ref'),
  ws = Symbol.for('react.suspense'),
  Ss = Symbol.for('react.suspense_list'),
  e0 = Symbol.for('react.memo'),
  Dn = Symbol.for('react.lazy'),
  u2 = Symbol.for('react.offscreen'),
  t1 = Symbol.iterator;
function Da(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (t1 && e[t1]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var pe = Object.assign,
  Eu;
function Ua(e) {
  if (Eu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Eu = (t && t[1]) || '';
    }
  return (
    `
` +
    Eu +
    e
  );
}
var xu = !1;
function wu(e, t) {
  if (!e || xu) return '';
  xu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var a = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = a.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && a[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (a[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || a[i] !== o[s])) {
                var u =
                  `
` + a[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (xu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ua(e) : '';
}
function Qy(e) {
  switch (e.tag) {
    case 5:
      return Ua(e.type);
    case 16:
      return Ua('Lazy');
    case 13:
      return Ua('Suspense');
    case 19:
      return Ua('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = wu(e.type, !1)), e;
    case 11:
      return (e = wu(e.type.render, !1)), e;
    case 1:
      return (e = wu(e.type, !0)), e;
    default:
      return '';
  }
}
function As(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Pr:
      return 'Fragment';
    case Ir:
      return 'Portal';
    case xs:
      return 'Profiler';
    case Qc:
      return 'StrictMode';
    case ws:
      return 'Suspense';
    case Ss:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case i2:
        return (e.displayName || 'Context') + '.Consumer';
      case l2:
        return (e._context.displayName || 'Context') + '.Provider';
      case Jc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case e0:
        return (
          (t = e.displayName || null), t !== null ? t : As(e.type) || 'Memo'
        );
      case Dn:
        (t = e._payload), (e = e._init);
        try {
          return As(e(t));
        } catch {}
    }
  return null;
}
function Jy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return As(t);
    case 8:
      return t === Qc ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Kn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function s2(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function ev(e) {
  var t = s2(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var a = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        }
      }
    );
  }
}
function nl(e) {
  e._valueTracker || (e._valueTracker = ev(e));
}
function c2(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = s2(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cs(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  });
}
function n1(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null
    });
}
function d2(e, t) {
  (t = t.checked), t != null && Xc(e, 'checked', t, !1);
}
function ks(e, t) {
  d2(e, t);
  var n = Kn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? _s(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && _s(e, t.type, Kn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function r1(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function _s(e, t, n) {
  (t !== 'number' || Gl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var qa = Array.isArray;
function Xr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Kn(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        (e[a].selected = !0), r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  });
}
function a1(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (qa(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Kn(n) };
}
function p2(e, t) {
  var n = Kn(t.value),
    r = Kn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function o1(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function f2(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ts(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? f2(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var rl,
  m2 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, a);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        rl = rl || document.createElement('div'),
          rl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = rl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function uo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ya = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  tv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ya).forEach(function (e) {
  tv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ya[t] = Ya[e]);
  });
});
function g2(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ya.hasOwnProperty(e) && Ya[e])
    ? ('' + t).trim()
    : t + 'px';
}
function h2(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        a = g2(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
    }
}
var nv = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
);
function Os(e, t) {
  if (t) {
    if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(L(62));
  }
}
function Rs(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Ds = null;
function t0(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ls = null,
  Qr = null,
  Jr = null;
function l1(e) {
  if ((e = Vo(e))) {
    if (typeof Ls != 'function') throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Li(t)), Ls(e.stateNode, e.type, t));
  }
}
function y2(e) {
  Qr ? (Jr ? Jr.push(e) : (Jr = [e])) : (Qr = e);
}
function v2() {
  if (Qr) {
    var e = Qr,
      t = Jr;
    if (((Jr = Qr = null), l1(e), t)) for (e = 0; e < t.length; e++) l1(t[e]);
  }
}
function b2(e, t) {
  return e(t);
}
function E2() {}
var Su = !1;
function x2(e, t, n) {
  if (Su) return e(t, n);
  Su = !0;
  try {
    return b2(e, t, n);
  } finally {
    (Su = !1), (Qr !== null || Jr !== null) && (E2(), v2());
  }
}
function so(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Li(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(L(231, t, typeof n));
  return n;
}
var Ms = !1;
if (En)
  try {
    var La = {};
    Object.defineProperty(La, 'passive', {
      get: function () {
        Ms = !0;
      }
    }),
      window.addEventListener('test', La, La),
      window.removeEventListener('test', La, La);
  } catch {
    Ms = !1;
  }
function rv(e, t, n, r, a, o, i, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Xa = !1,
  Kl = null,
  Yl = !1,
  $s = null,
  av = {
    onError: function (e) {
      (Xa = !0), (Kl = e);
    }
  };
function ov(e, t, n, r, a, o, i, s, u) {
  (Xa = !1), (Kl = null), rv.apply(av, arguments);
}
function lv(e, t, n, r, a, o, i, s, u) {
  if ((ov.apply(this, arguments), Xa)) {
    if (Xa) {
      var c = Kl;
      (Xa = !1), (Kl = null);
    } else throw Error(L(198));
    Yl || ((Yl = !0), ($s = c));
  }
}
function Fr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function w2(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function i1(e) {
  if (Fr(e) !== e) throw Error(L(188));
}
function iv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fr(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var a = n.return;
    if (a === null) break;
    var o = a.alternate;
    if (o === null) {
      if (((r = a.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (a.child === o.child) {
      for (o = a.child; o; ) {
        if (o === n) return i1(a), e;
        if (o === r) return i1(a), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = a), (r = o);
    else {
      for (var i = !1, s = a.child; s; ) {
        if (s === n) {
          (i = !0), (n = a), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = a), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = a);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = a);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function S2(e) {
  return (e = iv(e)), e !== null ? A2(e) : null;
}
function A2(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = A2(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var C2 = st.unstable_scheduleCallback,
  u1 = st.unstable_cancelCallback,
  uv = st.unstable_shouldYield,
  sv = st.unstable_requestPaint,
  he = st.unstable_now,
  cv = st.unstable_getCurrentPriorityLevel,
  n0 = st.unstable_ImmediatePriority,
  k2 = st.unstable_UserBlockingPriority,
  Xl = st.unstable_NormalPriority,
  dv = st.unstable_LowPriority,
  _2 = st.unstable_IdlePriority,
  Ti = null,
  rn = null;
function pv(e) {
  if (rn && typeof rn.onCommitFiberRoot == 'function')
    try {
      rn.onCommitFiberRoot(Ti, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Mt = Math.clz32 ? Math.clz32 : gv,
  fv = Math.log,
  mv = Math.LN2;
function gv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((fv(e) / mv) | 0)) | 0;
}
var al = 64,
  ol = 4194304;
function Wa(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    a = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~a;
    s !== 0 ? (r = Wa(s)) : ((o &= i), o !== 0 && (r = Wa(o)));
  } else (i = n & ~a), i !== 0 ? (r = Wa(i)) : o !== 0 && (r = Wa(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & a) &&
    ((a = r & -r), (o = t & -t), a >= o || (a === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Mt(t)), (a = 1 << n), (r |= e[n]), (t &= ~a);
  return r;
}
function hv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function yv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      a = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Mt(o),
      s = 1 << i,
      u = a[i];
    u === -1
      ? (!(s & n) || s & r) && (a[i] = hv(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Bs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function F2() {
  var e = al;
  return (al <<= 1), !(al & 4194240) && (al = 64), e;
}
function Au(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Mt(t)),
    (e[t] = n);
}
function vv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - Mt(n),
      o = 1 << a;
    (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
  }
}
function r0(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Mt(n),
      a = 1 << r;
    (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
  }
}
var re = 0;
function T2(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var O2,
  a0,
  R2,
  D2,
  L2,
  Is = !1,
  ll = [],
  Hn = null,
  Zn = null,
  zn = null,
  co = new Map(),
  po = new Map(),
  $n = [],
  bv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function s1(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Hn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Zn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      zn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      co.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      po.delete(t.pointerId);
  }
}
function Ma(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [a]
      }),
      t !== null && ((t = Vo(t)), t !== null && a0(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      a !== null && t.indexOf(a) === -1 && t.push(a),
      e);
}
function Ev(e, t, n, r, a) {
  switch (t) {
    case 'focusin':
      return (Hn = Ma(Hn, e, t, n, r, a)), !0;
    case 'dragenter':
      return (Zn = Ma(Zn, e, t, n, r, a)), !0;
    case 'mouseover':
      return (zn = Ma(zn, e, t, n, r, a)), !0;
    case 'pointerover':
      var o = a.pointerId;
      return co.set(o, Ma(co.get(o) || null, e, t, n, r, a)), !0;
    case 'gotpointercapture':
      return (
        (o = a.pointerId), po.set(o, Ma(po.get(o) || null, e, t, n, r, a)), !0
      );
  }
  return !1;
}
function M2(e) {
  var t = mr(e.target);
  if (t !== null) {
    var n = Fr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = w2(n)), t !== null)) {
          (e.blockedOn = t),
            L2(e.priority, function () {
              R2(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ps(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ds = r), n.target.dispatchEvent(r), (Ds = null);
    } else return (t = Vo(n)), t !== null && a0(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function c1(e, t, n) {
  kl(e) && n.delete(t);
}
function xv() {
  (Is = !1),
    Hn !== null && kl(Hn) && (Hn = null),
    Zn !== null && kl(Zn) && (Zn = null),
    zn !== null && kl(zn) && (zn = null),
    co.forEach(c1),
    po.forEach(c1);
}
function $a(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Is ||
      ((Is = !0),
      st.unstable_scheduleCallback(st.unstable_NormalPriority, xv)));
}
function fo(e) {
  function t(a) {
    return $a(a, e);
  }
  if (0 < ll.length) {
    $a(ll[0], e);
    for (var n = 1; n < ll.length; n++) {
      var r = ll[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Hn !== null && $a(Hn, e),
      Zn !== null && $a(Zn, e),
      zn !== null && $a(zn, e),
      co.forEach(t),
      po.forEach(t),
      n = 0;
    n < $n.length;
    n++
  )
    (r = $n[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $n.length && ((n = $n[0]), n.blockedOn === null); )
    M2(n), n.blockedOn === null && $n.shift();
}
var ea = Cn.ReactCurrentBatchConfig,
  Jl = !0;
function wv(e, t, n, r) {
  var a = re,
    o = ea.transition;
  ea.transition = null;
  try {
    (re = 1), o0(e, t, n, r);
  } finally {
    (re = a), (ea.transition = o);
  }
}
function Sv(e, t, n, r) {
  var a = re,
    o = ea.transition;
  ea.transition = null;
  try {
    (re = 4), o0(e, t, n, r);
  } finally {
    (re = a), (ea.transition = o);
  }
}
function o0(e, t, n, r) {
  if (Jl) {
    var a = Ps(e, t, n, r);
    if (a === null) Mu(e, t, r, ei, n), s1(e, r);
    else if (Ev(a, e, t, n, r)) r.stopPropagation();
    else if ((s1(e, r), t & 4 && -1 < bv.indexOf(e))) {
      for (; a !== null; ) {
        var o = Vo(a);
        if (
          (o !== null && O2(o),
          (o = Ps(e, t, n, r)),
          o === null && Mu(e, t, r, ei, n),
          o === a)
        )
          break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else Mu(e, t, r, null, n);
  }
}
var ei = null;
function Ps(e, t, n, r) {
  if (((ei = null), (e = t0(r)), (e = mr(e)), e !== null))
    if (((t = Fr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = w2(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ei = e), null;
}
function $2(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (cv()) {
        case n0:
          return 1;
        case k2:
          return 4;
        case Xl:
        case dv:
          return 16;
        case _2:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var In = null,
  l0 = null,
  _l = null;
function B2() {
  if (_l) return _l;
  var e,
    t = l0,
    n = t.length,
    r,
    a = 'value' in In ? In.value : In.textContent,
    o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === a[o - r]; r++);
  return (_l = a.slice(e, 1 < r ? 1 - r : void 0));
}
function Fl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function il() {
  return !0;
}
function d1() {
  return !1;
}
function pt(e) {
  function t(n, r, a, o, i) {
    (this._reactName = n),
      (this._targetInst = a),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? il
        : d1),
      (this.isPropagationStopped = d1),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = il));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = il));
      },
      persist: function () {},
      isPersistent: il
    }),
    t
  );
}
var xa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  i0 = pt(xa),
  zo = pe({}, xa, { view: 0, detail: 0 }),
  Av = pt(zo),
  Cu,
  ku,
  Ba,
  Oi = pe({}, zo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: u0,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ba &&
            (Ba && e.type === 'mousemove'
              ? ((Cu = e.screenX - Ba.screenX), (ku = e.screenY - Ba.screenY))
              : (ku = Cu = 0),
            (Ba = e)),
          Cu);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ku;
    }
  }),
  p1 = pt(Oi),
  Cv = pe({}, Oi, { dataTransfer: 0 }),
  kv = pt(Cv),
  _v = pe({}, zo, { relatedTarget: 0 }),
  _u = pt(_v),
  Fv = pe({}, xa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tv = pt(Fv),
  Ov = pe({}, xa, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    }
  }),
  Rv = pt(Ov),
  Dv = pe({}, xa, { data: 0 }),
  f1 = pt(Dv),
  Lv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  Mv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  $v = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey'
  };
function Bv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $v[e]) ? !!t[e] : !1;
}
function u0() {
  return Bv;
}
var Iv = pe({}, zo, {
    key: function (e) {
      if (e.key) {
        var t = Lv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Fl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Mv[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: u0,
    charCode: function (e) {
      return e.type === 'keypress' ? Fl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Fl(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    }
  }),
  Pv = pt(Iv),
  Nv = pe({}, Oi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  m1 = pt(Nv),
  jv = pe({}, zo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: u0
  }),
  Hv = pt(jv),
  Zv = pe({}, xa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zv = pt(Zv),
  Vv = pe({}, Oi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Uv = pt(Vv),
  qv = [9, 13, 27, 32],
  s0 = En && 'CompositionEvent' in window,
  Qa = null;
En && 'documentMode' in document && (Qa = document.documentMode);
var Wv = En && 'TextEvent' in window && !Qa,
  I2 = En && (!s0 || (Qa && 8 < Qa && 11 >= Qa)),
  g1 = String.fromCharCode(32),
  h1 = !1;
function P2(e, t) {
  switch (e) {
    case 'keyup':
      return qv.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function N2(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Nr = !1;
function Gv(e, t) {
  switch (e) {
    case 'compositionend':
      return N2(t);
    case 'keypress':
      return t.which !== 32 ? null : ((h1 = !0), g1);
    case 'textInput':
      return (e = t.data), e === g1 && h1 ? null : e;
    default:
      return null;
  }
}
function Kv(e, t) {
  if (Nr)
    return e === 'compositionend' || (!s0 && P2(e, t))
      ? ((e = B2()), (_l = l0 = In = null), (Nr = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return I2 && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Yv = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function y1(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Yv[e.type] : t === 'textarea';
}
function j2(e, t, n, r) {
  y2(r),
    (t = ti(t, 'onChange')),
    0 < t.length &&
      ((n = new i0('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ja = null,
  mo = null;
function Xv(e) {
  X2(e, 0);
}
function Ri(e) {
  var t = Zr(e);
  if (c2(t)) return e;
}
function Qv(e, t) {
  if (e === 'change') return t;
}
var H2 = !1;
if (En) {
  var Fu;
  if (En) {
    var Tu = 'oninput' in document;
    if (!Tu) {
      var v1 = document.createElement('div');
      v1.setAttribute('oninput', 'return;'),
        (Tu = typeof v1.oninput == 'function');
    }
    Fu = Tu;
  } else Fu = !1;
  H2 = Fu && (!document.documentMode || 9 < document.documentMode);
}
function b1() {
  Ja && (Ja.detachEvent('onpropertychange', Z2), (mo = Ja = null));
}
function Z2(e) {
  if (e.propertyName === 'value' && Ri(mo)) {
    var t = [];
    j2(t, mo, e, t0(e)), x2(Xv, t);
  }
}
function Jv(e, t, n) {
  e === 'focusin'
    ? (b1(), (Ja = t), (mo = n), Ja.attachEvent('onpropertychange', Z2))
    : e === 'focusout' && b1();
}
function e3(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ri(mo);
}
function t3(e, t) {
  if (e === 'click') return Ri(t);
}
function n3(e, t) {
  if (e === 'input' || e === 'change') return Ri(t);
}
function r3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Bt = typeof Object.is == 'function' ? Object.is : r3;
function go(e, t) {
  if (Bt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Es.call(t, a) || !Bt(e[a], t[a])) return !1;
  }
  return !0;
}
function E1(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function x1(e, t) {
  var n = E1(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = E1(n);
  }
}
function z2(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? z2(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function V2() {
  for (var e = window, t = Gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gl(e.document);
  }
  return t;
}
function c0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function a3(e) {
  var t = V2(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    z2(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && c0(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var a = n.textContent.length,
          o = Math.min(r.start, a);
        (r = r.end === void 0 ? o : Math.min(r.end, a)),
          !e.extend && o > r && ((a = r), (r = o), (o = a)),
          (a = x1(n, o));
        var i = x1(n, r);
        a &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(a.node, a.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var o3 = En && 'documentMode' in document && 11 >= document.documentMode,
  jr = null,
  Ns = null,
  eo = null,
  js = !1;
function w1(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  js ||
    jr == null ||
    jr !== Gl(r) ||
    ((r = jr),
    'selectionStart' in r && c0(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (eo && go(eo, r)) ||
      ((eo = r),
      (r = ti(Ns, 'onSelect')),
      0 < r.length &&
        ((t = new i0('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jr))));
}
function ul(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Hr = {
    animationend: ul('Animation', 'AnimationEnd'),
    animationiteration: ul('Animation', 'AnimationIteration'),
    animationstart: ul('Animation', 'AnimationStart'),
    transitionend: ul('Transition', 'TransitionEnd')
  },
  Ou = {},
  U2 = {};
En &&
  ((U2 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Hr.animationend.animation,
    delete Hr.animationiteration.animation,
    delete Hr.animationstart.animation),
  'TransitionEvent' in window || delete Hr.transitionend.transition);
function Di(e) {
  if (Ou[e]) return Ou[e];
  if (!Hr[e]) return e;
  var t = Hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in U2) return (Ou[e] = t[n]);
  return e;
}
var q2 = Di('animationend'),
  W2 = Di('animationiteration'),
  G2 = Di('animationstart'),
  K2 = Di('transitionend'),
  Y2 = new Map(),
  S1 =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Jn(e, t) {
  Y2.set(e, t), _r(t, [e]);
}
for (var Ru = 0; Ru < S1.length; Ru++) {
  var Du = S1[Ru],
    l3 = Du.toLowerCase(),
    i3 = Du[0].toUpperCase() + Du.slice(1);
  Jn(l3, 'on' + i3);
}
Jn(q2, 'onAnimationEnd');
Jn(W2, 'onAnimationIteration');
Jn(G2, 'onAnimationStart');
Jn('dblclick', 'onDoubleClick');
Jn('focusin', 'onFocus');
Jn('focusout', 'onBlur');
Jn(K2, 'onTransitionEnd');
aa('onMouseEnter', ['mouseout', 'mouseover']);
aa('onMouseLeave', ['mouseout', 'mouseover']);
aa('onPointerEnter', ['pointerout', 'pointerover']);
aa('onPointerLeave', ['pointerout', 'pointerover']);
_r(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
_r(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
_r('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
_r(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
_r(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
_r(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Ga =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  u3 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ga));
function A1(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), lv(r, t, void 0, e), (e.currentTarget = null);
}
function X2(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== o && a.isPropagationStopped())) break e;
          A1(a, s, c), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && a.isPropagationStopped())
          )
            break e;
          A1(a, s, c), (o = u);
        }
    }
  }
  if (Yl) throw ((e = $s), (Yl = !1), ($s = null), e);
}
function le(e, t) {
  var n = t[Us];
  n === void 0 && (n = t[Us] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Q2(t, e, 2, !1), n.add(r));
}
function Lu(e, t, n) {
  var r = 0;
  t && (r |= 4), Q2(n, e, r, t);
}
var sl = '_reactListening' + Math.random().toString(36).slice(2);
function ho(e) {
  if (!e[sl]) {
    (e[sl] = !0),
      o2.forEach(function (n) {
        n !== 'selectionchange' && (u3.has(n) || Lu(n, !1, e), Lu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sl] || ((t[sl] = !0), Lu('selectionchange', !1, t));
  }
}
function Q2(e, t, n, r) {
  switch ($2(t)) {
    case 1:
      var a = wv;
      break;
    case 4:
      a = Sv;
      break;
    default:
      a = o0;
  }
  (n = a.bind(null, t, n, e)),
    (a = void 0),
    !Ms ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (a = !0),
    r
      ? a !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : a !== void 0
      ? e.addEventListener(t, n, { passive: a })
      : e.addEventListener(t, n, !1);
}
function Mu(e, t, n, r, a) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === a || (s.nodeType === 8 && s.parentNode === a)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === a || (u.nodeType === 8 && u.parentNode === a))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = mr(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  x2(function () {
    var c = o,
      d = t0(n),
      g = [];
    e: {
      var f = Y2.get(e);
      if (f !== void 0) {
        var p = i0,
          h = e;
        switch (e) {
          case 'keypress':
            if (Fl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            p = Pv;
            break;
          case 'focusin':
            (h = 'focus'), (p = _u);
            break;
          case 'focusout':
            (h = 'blur'), (p = _u);
            break;
          case 'beforeblur':
          case 'afterblur':
            p = _u;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            p = p1;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            p = kv;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            p = Hv;
            break;
          case q2:
          case W2:
          case G2:
            p = Tv;
            break;
          case K2:
            p = zv;
            break;
          case 'scroll':
            p = Av;
            break;
          case 'wheel':
            p = Uv;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            p = Rv;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            p = m1;
        }
        var m = (t & 4) !== 0,
          w = !m && e === 'scroll',
          y = m ? (f !== null ? f + 'Capture' : null) : f;
        m = [];
        for (var b = c, v; b !== null; ) {
          v = b;
          var E = v.stateNode;
          if (
            (v.tag === 5 &&
              E !== null &&
              ((v = E),
              y !== null && ((E = so(b, y)), E != null && m.push(yo(b, E, v)))),
            w)
          )
            break;
          b = b.return;
        }
        0 < m.length &&
          ((f = new p(f, h, null, n, d)), g.push({ event: f, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (p = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== Ds &&
            (h = n.relatedTarget || n.fromElement) &&
            (mr(h) || h[xn]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((h = n.relatedTarget || n.toElement),
              (p = c),
              (h = h ? mr(h) : null),
              h !== null &&
                ((w = Fr(h)), h !== w || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((p = null), (h = c)),
          p !== h)
        ) {
          if (
            ((m = p1),
            (E = 'onMouseLeave'),
            (y = 'onMouseEnter'),
            (b = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((m = m1),
              (E = 'onPointerLeave'),
              (y = 'onPointerEnter'),
              (b = 'pointer')),
            (w = p == null ? f : Zr(p)),
            (v = h == null ? f : Zr(h)),
            (f = new m(E, b + 'leave', p, n, d)),
            (f.target = w),
            (f.relatedTarget = v),
            (E = null),
            mr(d) === c &&
              ((m = new m(y, b + 'enter', h, n, d)),
              (m.target = v),
              (m.relatedTarget = w),
              (E = m)),
            (w = E),
            p && h)
          )
            t: {
              for (m = p, y = h, b = 0, v = m; v; v = Mr(v)) b++;
              for (v = 0, E = y; E; E = Mr(E)) v++;
              for (; 0 < b - v; ) (m = Mr(m)), b--;
              for (; 0 < v - b; ) (y = Mr(y)), v--;
              for (; b--; ) {
                if (m === y || (y !== null && m === y.alternate)) break t;
                (m = Mr(m)), (y = Mr(y));
              }
              m = null;
            }
          else m = null;
          p !== null && C1(g, f, p, m, !1),
            h !== null && w !== null && C1(g, w, h, m, !0);
        }
      }
      e: {
        if (
          ((f = c ? Zr(c) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === 'select' || (p === 'input' && f.type === 'file'))
        )
          var x = Qv;
        else if (y1(f))
          if (H2) x = n3;
          else {
            x = e3;
            var S = Jv;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (x = t3);
        if (x && (x = x(e, c))) {
          j2(g, x, n, d);
          break e;
        }
        S && S(e, f, c),
          e === 'focusout' &&
            (S = f._wrapperState) &&
            S.controlled &&
            f.type === 'number' &&
            _s(f, 'number', f.value);
      }
      switch (((S = c ? Zr(c) : window), e)) {
        case 'focusin':
          (y1(S) || S.contentEditable === 'true') &&
            ((jr = S), (Ns = c), (eo = null));
          break;
        case 'focusout':
          eo = Ns = jr = null;
          break;
        case 'mousedown':
          js = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (js = !1), w1(g, n, d);
          break;
        case 'selectionchange':
          if (o3) break;
        case 'keydown':
        case 'keyup':
          w1(g, n, d);
      }
      var A;
      if (s0)
        e: {
          switch (e) {
            case 'compositionstart':
              var C = 'onCompositionStart';
              break e;
            case 'compositionend':
              C = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              C = 'onCompositionUpdate';
              break e;
          }
          C = void 0;
        }
      else
        Nr
          ? P2(e, n) && (C = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
      C &&
        (I2 &&
          n.locale !== 'ko' &&
          (Nr || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && Nr && (A = B2())
            : ((In = d),
              (l0 = 'value' in In ? In.value : In.textContent),
              (Nr = !0))),
        (S = ti(c, C)),
        0 < S.length &&
          ((C = new f1(C, e, null, n, d)),
          g.push({ event: C, listeners: S }),
          A ? (C.data = A) : ((A = N2(n)), A !== null && (C.data = A)))),
        (A = Wv ? Gv(e, n) : Kv(e, n)) &&
          ((c = ti(c, 'onBeforeInput')),
          0 < c.length &&
            ((d = new f1('onBeforeInput', 'beforeinput', null, n, d)),
            g.push({ event: d, listeners: c }),
            (d.data = A)));
    }
    X2(g, t);
  });
}
function yo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ti(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var a = e,
      o = a.stateNode;
    a.tag === 5 &&
      o !== null &&
      ((a = o),
      (o = so(e, n)),
      o != null && r.unshift(yo(e, o, a)),
      (o = so(e, t)),
      o != null && r.push(yo(e, o, a))),
      (e = e.return);
  }
  return r;
}
function Mr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function C1(e, t, n, r, a) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      a
        ? ((u = so(n, o)), u != null && i.unshift(yo(n, u, s)))
        : a || ((u = so(n, o)), u != null && i.push(yo(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var s3 = /\r\n?/g,
  c3 = /\u0000|\uFFFD/g;
function k1(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      s3,
      `
`
    )
    .replace(c3, '');
}
function cl(e, t, n) {
  if (((t = k1(t)), k1(e) !== t && n)) throw Error(L(425));
}
function ni() {}
var Hs = null,
  Zs = null;
function zs(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vs = typeof setTimeout == 'function' ? setTimeout : void 0,
  d3 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  _1 = typeof Promise == 'function' ? Promise : void 0,
  p3 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof _1 < 'u'
      ? function (e) {
          return _1.resolve(null).then(e).catch(f3);
        }
      : Vs;
function f3(e) {
  setTimeout(function () {
    throw e;
  });
}
function $u(e, t) {
  var n = t,
    r = 0;
  do {
    var a = n.nextSibling;
    if ((e.removeChild(n), a && a.nodeType === 8))
      if (((n = a.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(a), fo(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = a;
  } while (n);
  fo(t);
}
function Vn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function F1(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wa = Math.random().toString(36).slice(2),
  Jt = '__reactFiber$' + wa,
  vo = '__reactProps$' + wa,
  xn = '__reactContainer$' + wa,
  Us = '__reactEvents$' + wa,
  m3 = '__reactListeners$' + wa,
  g3 = '__reactHandles$' + wa;
function mr(e) {
  var t = e[Jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xn] || n[Jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = F1(e); e !== null; ) {
          if ((n = e[Jt])) return n;
          e = F1(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Vo(e) {
  return (
    (e = e[Jt] || e[xn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Li(e) {
  return e[vo] || null;
}
var qs = [],
  zr = -1;
function er(e) {
  return { current: e };
}
function ie(e) {
  0 > zr || ((e.current = qs[zr]), (qs[zr] = null), zr--);
}
function oe(e, t) {
  zr++, (qs[zr] = e.current), (e.current = t);
}
var Yn = {},
  Ne = er(Yn),
  Qe = er(!1),
  xr = Yn;
function oa(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    o;
  for (o in n) a[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function Je(e) {
  return (e = e.childContextTypes), e != null;
}
function ri() {
  ie(Qe), ie(Ne);
}
function T1(e, t, n) {
  if (Ne.current !== Yn) throw Error(L(168));
  oe(Ne, t), oe(Qe, n);
}
function J2(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(L(108, Jy(e) || 'Unknown', a));
  return pe({}, n, r);
}
function ai(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yn),
    (xr = Ne.current),
    oe(Ne, e),
    oe(Qe, Qe.current),
    !0
  );
}
function O1(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = J2(e, t, xr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(Qe),
      ie(Ne),
      oe(Ne, e))
    : ie(Qe),
    oe(Qe, n);
}
var gn = null,
  Mi = !1,
  Bu = !1;
function e5(e) {
  gn === null ? (gn = [e]) : gn.push(e);
}
function h3(e) {
  (Mi = !0), e5(e);
}
function tr() {
  if (!Bu && gn !== null) {
    Bu = !0;
    var e = 0,
      t = re;
    try {
      var n = gn;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gn = null), (Mi = !1);
    } catch (a) {
      throw (gn !== null && (gn = gn.slice(e + 1)), C2(n0, tr), a);
    } finally {
      (re = t), (Bu = !1);
    }
  }
  return null;
}
var Vr = [],
  Ur = 0,
  oi = null,
  li = 0,
  yt = [],
  vt = 0,
  wr = null,
  yn = 1,
  vn = '';
function ir(e, t) {
  (Vr[Ur++] = li), (Vr[Ur++] = oi), (oi = e), (li = t);
}
function t5(e, t, n) {
  (yt[vt++] = yn), (yt[vt++] = vn), (yt[vt++] = wr), (wr = e);
  var r = yn;
  e = vn;
  var a = 32 - Mt(r) - 1;
  (r &= ~(1 << a)), (n += 1);
  var o = 32 - Mt(t) + a;
  if (30 < o) {
    var i = a - (a % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (a -= i),
      (yn = (1 << (32 - Mt(t) + a)) | (n << a) | r),
      (vn = o + e);
  } else (yn = (1 << o) | (n << a) | r), (vn = e);
}
function d0(e) {
  e.return !== null && (ir(e, 1), t5(e, 1, 0));
}
function p0(e) {
  for (; e === oi; )
    (oi = Vr[--Ur]), (Vr[Ur] = null), (li = Vr[--Ur]), (Vr[Ur] = null);
  for (; e === wr; )
    (wr = yt[--vt]),
      (yt[vt] = null),
      (vn = yt[--vt]),
      (yt[vt] = null),
      (yn = yt[--vt]),
      (yt[vt] = null);
}
var it = null,
  lt = null,
  se = !1,
  Lt = null;
function n5(e, t) {
  var n = bt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function R1(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (it = e), (lt = Vn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (it = e), (lt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wr !== null ? { id: yn, overflow: vn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = bt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (it = e),
            (lt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ws(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gs(e) {
  if (se) {
    var t = lt;
    if (t) {
      var n = t;
      if (!R1(e, t)) {
        if (Ws(e)) throw Error(L(418));
        t = Vn(n.nextSibling);
        var r = it;
        t && R1(e, t)
          ? n5(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (it = e));
      }
    } else {
      if (Ws(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (it = e);
    }
  }
}
function D1(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function dl(e) {
  if (e !== it) return !1;
  if (!se) return D1(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !zs(e.type, e.memoizedProps))),
    t && (t = lt))
  ) {
    if (Ws(e)) throw (r5(), Error(L(418)));
    for (; t; ) n5(e, t), (t = Vn(t.nextSibling));
  }
  if ((D1(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              lt = Vn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      lt = null;
    }
  } else lt = it ? Vn(e.stateNode.nextSibling) : null;
  return !0;
}
function r5() {
  for (var e = lt; e; ) e = Vn(e.nextSibling);
}
function la() {
  (lt = it = null), (se = !1);
}
function f0(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
var y3 = Cn.ReactCurrentBatchConfig;
function Rt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ii = er(null),
  ui = null,
  qr = null,
  m0 = null;
function g0() {
  m0 = qr = ui = null;
}
function h0(e) {
  var t = ii.current;
  ie(ii), (e._currentValue = t);
}
function Ks(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ta(e, t) {
  (ui = e),
    (m0 = qr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function wt(e) {
  var t = e._currentValue;
  if (m0 !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qr === null)) {
      if (ui === null) throw Error(L(308));
      (qr = e), (ui.dependencies = { lanes: 0, firstContext: e });
    } else qr = qr.next = e;
  return t;
}
var gr = null;
function y0(e) {
  gr === null ? (gr = [e]) : gr.push(e);
}
function a5(e, t, n, r) {
  var a = t.interleaved;
  return (
    a === null ? ((n.next = n), y0(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    wn(e, r)
  );
}
function wn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ln = !1;
function v0(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function o5(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      });
}
function bn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function Un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var a = r.pending;
    return (
      a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (r.pending = t),
      wn(e, n)
    );
  }
  return (
    (a = r.interleaved),
    a === null ? ((t.next = t), y0(r)) : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    wn(e, n)
  );
}
function Tl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), r0(e, n);
  }
}
function L1(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var a = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        o === null ? (a = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (a = o = t) : (o = o.next = t);
    } else a = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function si(e, t, n, r) {
  var a = e.updateQueue;
  Ln = !1;
  var o = a.firstBaseUpdate,
    i = a.lastBaseUpdate,
    s = a.shared.pending;
  if (s !== null) {
    a.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var g = a.baseState;
    (i = 0), (d = c = u = null), (s = o);
    do {
      var f = s.lane,
        p = s.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null
            });
        e: {
          var h = e,
            m = s;
          switch (((f = t), (p = n), m.tag)) {
            case 1:
              if (((h = m.payload), typeof h == 'function')) {
                g = h.call(p, g, f);
                break e;
              }
              g = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = m.payload),
                (f = typeof h == 'function' ? h.call(p, g, f) : h),
                f == null)
              )
                break e;
              g = pe({}, g, f);
              break e;
            case 2:
              Ln = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = a.effects),
          f === null ? (a.effects = [s]) : f.push(s));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        }),
          d === null ? ((c = d = p), (u = g)) : (d = d.next = p),
          (i |= f);
      if (((s = s.next), s === null)) {
        if (((s = a.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (a.lastBaseUpdate = f),
          (a.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = g),
      (a.baseState = u),
      (a.firstBaseUpdate = c),
      (a.lastBaseUpdate = d),
      (t = a.shared.interleaved),
      t !== null)
    ) {
      a = t;
      do (i |= a.lane), (a = a.next);
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    (Ar |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function M1(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (a !== null) {
        if (((r.callback = null), (r = n), typeof a != 'function'))
          throw Error(L(191, a));
        a.call(r);
      }
    }
}
var l5 = new a2.Component().refs;
function Ys(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $i = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      a = Wn(e),
      o = bn(r, a);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Un(e, o, a)),
      t !== null && ($t(t, e, a, r), Tl(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      a = Wn(e),
      o = bn(r, a);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Un(e, o, a)),
      t !== null && ($t(t, e, a, r), Tl(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      r = Wn(e),
      a = bn(n, r);
    (a.tag = 2),
      t != null && (a.callback = t),
      (t = Un(e, a, r)),
      t !== null && ($t(t, e, r, n), Tl(t, e, r));
  }
};
function $1(e, t, n, r, a, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !go(n, r) || !go(a, o)
      : !0
  );
}
function i5(e, t, n) {
  var r = !1,
    a = Yn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = wt(o))
      : ((a = Je(t) ? xr : Ne.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? oa(e, a) : Yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $i),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function B1(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $i.enqueueReplaceState(t, t.state, null);
}
function Xs(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = l5), v0(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (a.context = wt(o))
    : ((o = Je(t) ? xr : Ne.current), (a.context = oa(e, o))),
    (a.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Ys(e, t, o, n), (a.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function' ||
      (typeof a.UNSAFE_componentWillMount != 'function' &&
        typeof a.componentWillMount != 'function') ||
      ((t = a.state),
      typeof a.componentWillMount == 'function' && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == 'function' &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && $i.enqueueReplaceState(a, a.state, null),
      si(e, n, a, r),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ia(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var a = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = a.refs;
            s === l5 && (s = a.refs = {}),
              i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function pl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function I1(e) {
  var t = e._init;
  return t(e._payload);
}
function u5(e) {
  function t(y, b) {
    if (e) {
      var v = y.deletions;
      v === null ? ((y.deletions = [b]), (y.flags |= 16)) : v.push(b);
    }
  }
  function n(y, b) {
    if (!e) return null;
    for (; b !== null; ) t(y, b), (b = b.sibling);
    return null;
  }
  function r(y, b) {
    for (y = new Map(); b !== null; )
      b.key !== null ? y.set(b.key, b) : y.set(b.index, b), (b = b.sibling);
    return y;
  }
  function a(y, b) {
    return (y = Gn(y, b)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, b, v) {
    return (
      (y.index = v),
      e
        ? ((v = y.alternate),
          v !== null
            ? ((v = v.index), v < b ? ((y.flags |= 2), b) : v)
            : ((y.flags |= 2), b))
        : ((y.flags |= 1048576), b)
    );
  }
  function i(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function s(y, b, v, E) {
    return b === null || b.tag !== 6
      ? ((b = zu(v, y.mode, E)), (b.return = y), b)
      : ((b = a(b, v)), (b.return = y), b);
  }
  function u(y, b, v, E) {
    var x = v.type;
    return x === Pr
      ? d(y, b, v.props.children, E, v.key)
      : b !== null &&
        (b.elementType === x ||
          (typeof x == 'object' &&
            x !== null &&
            x.$$typeof === Dn &&
            I1(x) === b.type))
      ? ((E = a(b, v.props)), (E.ref = Ia(y, b, v)), (E.return = y), E)
      : ((E = $l(v.type, v.key, v.props, null, y.mode, E)),
        (E.ref = Ia(y, b, v)),
        (E.return = y),
        E);
  }
  function c(y, b, v, E) {
    return b === null ||
      b.tag !== 4 ||
      b.stateNode.containerInfo !== v.containerInfo ||
      b.stateNode.implementation !== v.implementation
      ? ((b = Vu(v, y.mode, E)), (b.return = y), b)
      : ((b = a(b, v.children || [])), (b.return = y), b);
  }
  function d(y, b, v, E, x) {
    return b === null || b.tag !== 7
      ? ((b = vr(v, y.mode, E, x)), (b.return = y), b)
      : ((b = a(b, v)), (b.return = y), b);
  }
  function g(y, b, v) {
    if ((typeof b == 'string' && b !== '') || typeof b == 'number')
      return (b = zu('' + b, y.mode, v)), (b.return = y), b;
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case tl:
          return (
            (v = $l(b.type, b.key, b.props, null, y.mode, v)),
            (v.ref = Ia(y, null, b)),
            (v.return = y),
            v
          );
        case Ir:
          return (b = Vu(b, y.mode, v)), (b.return = y), b;
        case Dn:
          var E = b._init;
          return g(y, E(b._payload), v);
      }
      if (qa(b) || Da(b))
        return (b = vr(b, y.mode, v, null)), (b.return = y), b;
      pl(y, b);
    }
    return null;
  }
  function f(y, b, v, E) {
    var x = b !== null ? b.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return x !== null ? null : s(y, b, '' + v, E);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case tl:
          return v.key === x ? u(y, b, v, E) : null;
        case Ir:
          return v.key === x ? c(y, b, v, E) : null;
        case Dn:
          return (x = v._init), f(y, b, x(v._payload), E);
      }
      if (qa(v) || Da(v)) return x !== null ? null : d(y, b, v, E, null);
      pl(y, v);
    }
    return null;
  }
  function p(y, b, v, E, x) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (y = y.get(v) || null), s(b, y, '' + E, x);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case tl:
          return (y = y.get(E.key === null ? v : E.key) || null), u(b, y, E, x);
        case Ir:
          return (y = y.get(E.key === null ? v : E.key) || null), c(b, y, E, x);
        case Dn:
          var S = E._init;
          return p(y, b, v, S(E._payload), x);
      }
      if (qa(E) || Da(E)) return (y = y.get(v) || null), d(b, y, E, x, null);
      pl(b, E);
    }
    return null;
  }
  function h(y, b, v, E) {
    for (
      var x = null, S = null, A = b, C = (b = 0), T = null;
      A !== null && C < v.length;
      C++
    ) {
      A.index > C ? ((T = A), (A = null)) : (T = A.sibling);
      var _ = f(y, A, v[C], E);
      if (_ === null) {
        A === null && (A = T);
        break;
      }
      e && A && _.alternate === null && t(y, A),
        (b = o(_, b, C)),
        S === null ? (x = _) : (S.sibling = _),
        (S = _),
        (A = T);
    }
    if (C === v.length) return n(y, A), se && ir(y, C), x;
    if (A === null) {
      for (; C < v.length; C++)
        (A = g(y, v[C], E)),
          A !== null &&
            ((b = o(A, b, C)), S === null ? (x = A) : (S.sibling = A), (S = A));
      return se && ir(y, C), x;
    }
    for (A = r(y, A); C < v.length; C++)
      (T = p(A, y, C, v[C], E)),
        T !== null &&
          (e && T.alternate !== null && A.delete(T.key === null ? C : T.key),
          (b = o(T, b, C)),
          S === null ? (x = T) : (S.sibling = T),
          (S = T));
    return (
      e &&
        A.forEach(function (O) {
          return t(y, O);
        }),
      se && ir(y, C),
      x
    );
  }
  function m(y, b, v, E) {
    var x = Da(v);
    if (typeof x != 'function') throw Error(L(150));
    if (((v = x.call(v)), v == null)) throw Error(L(151));
    for (
      var S = (x = null), A = b, C = (b = 0), T = null, _ = v.next();
      A !== null && !_.done;
      C++, _ = v.next()
    ) {
      A.index > C ? ((T = A), (A = null)) : (T = A.sibling);
      var O = f(y, A, _.value, E);
      if (O === null) {
        A === null && (A = T);
        break;
      }
      e && A && O.alternate === null && t(y, A),
        (b = o(O, b, C)),
        S === null ? (x = O) : (S.sibling = O),
        (S = O),
        (A = T);
    }
    if (_.done) return n(y, A), se && ir(y, C), x;
    if (A === null) {
      for (; !_.done; C++, _ = v.next())
        (_ = g(y, _.value, E)),
          _ !== null &&
            ((b = o(_, b, C)), S === null ? (x = _) : (S.sibling = _), (S = _));
      return se && ir(y, C), x;
    }
    for (A = r(y, A); !_.done; C++, _ = v.next())
      (_ = p(A, y, C, _.value, E)),
        _ !== null &&
          (e && _.alternate !== null && A.delete(_.key === null ? C : _.key),
          (b = o(_, b, C)),
          S === null ? (x = _) : (S.sibling = _),
          (S = _));
    return (
      e &&
        A.forEach(function (B) {
          return t(y, B);
        }),
      se && ir(y, C),
      x
    );
  }
  function w(y, b, v, E) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === Pr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case tl:
          e: {
            for (var x = v.key, S = b; S !== null; ) {
              if (S.key === x) {
                if (((x = v.type), x === Pr)) {
                  if (S.tag === 7) {
                    n(y, S.sibling),
                      (b = a(S, v.props.children)),
                      (b.return = y),
                      (y = b);
                    break e;
                  }
                } else if (
                  S.elementType === x ||
                  (typeof x == 'object' &&
                    x !== null &&
                    x.$$typeof === Dn &&
                    I1(x) === S.type)
                ) {
                  n(y, S.sibling),
                    (b = a(S, v.props)),
                    (b.ref = Ia(y, S, v)),
                    (b.return = y),
                    (y = b);
                  break e;
                }
                n(y, S);
                break;
              } else t(y, S);
              S = S.sibling;
            }
            v.type === Pr
              ? ((b = vr(v.props.children, y.mode, E, v.key)),
                (b.return = y),
                (y = b))
              : ((E = $l(v.type, v.key, v.props, null, y.mode, E)),
                (E.ref = Ia(y, b, v)),
                (E.return = y),
                (y = E));
          }
          return i(y);
        case Ir:
          e: {
            for (S = v.key; b !== null; ) {
              if (b.key === S)
                if (
                  b.tag === 4 &&
                  b.stateNode.containerInfo === v.containerInfo &&
                  b.stateNode.implementation === v.implementation
                ) {
                  n(y, b.sibling),
                    (b = a(b, v.children || [])),
                    (b.return = y),
                    (y = b);
                  break e;
                } else {
                  n(y, b);
                  break;
                }
              else t(y, b);
              b = b.sibling;
            }
            (b = Vu(v, y.mode, E)), (b.return = y), (y = b);
          }
          return i(y);
        case Dn:
          return (S = v._init), w(y, b, S(v._payload), E);
      }
      if (qa(v)) return h(y, b, v, E);
      if (Da(v)) return m(y, b, v, E);
      pl(y, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        b !== null && b.tag === 6
          ? (n(y, b.sibling), (b = a(b, v)), (b.return = y), (y = b))
          : (n(y, b), (b = zu(v, y.mode, E)), (b.return = y), (y = b)),
        i(y))
      : n(y, b);
  }
  return w;
}
var ia = u5(!0),
  s5 = u5(!1),
  Uo = {},
  an = er(Uo),
  bo = er(Uo),
  Eo = er(Uo);
function hr(e) {
  if (e === Uo) throw Error(L(174));
  return e;
}
function b0(e, t) {
  switch ((oe(Eo, t), oe(bo, e), oe(an, Uo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ts(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ts(t, e));
  }
  ie(an), oe(an, t);
}
function ua() {
  ie(an), ie(bo), ie(Eo);
}
function c5(e) {
  hr(Eo.current);
  var t = hr(an.current),
    n = Ts(t, e.type);
  t !== n && (oe(bo, e), oe(an, n));
}
function E0(e) {
  bo.current === e && (ie(an), ie(bo));
}
var ce = er(0);
function ci(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Iu = [];
function x0() {
  for (var e = 0; e < Iu.length; e++)
    Iu[e]._workInProgressVersionPrimary = null;
  Iu.length = 0;
}
var Ol = Cn.ReactCurrentDispatcher,
  Pu = Cn.ReactCurrentBatchConfig,
  Sr = 0,
  de = null,
  xe = null,
  ke = null,
  di = !1,
  to = !1,
  xo = 0,
  v3 = 0;
function Me() {
  throw Error(L(321));
}
function w0(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Bt(e[n], t[n])) return !1;
  return !0;
}
function S0(e, t, n, r, a, o) {
  if (
    ((Sr = o),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ol.current = e === null || e.memoizedState === null ? w3 : S3),
    (e = n(r, a)),
    to)
  ) {
    o = 0;
    do {
      if (((to = !1), (xo = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (ke = xe = null),
        (t.updateQueue = null),
        (Ol.current = A3),
        (e = n(r, a));
    } while (to);
  }
  if (
    ((Ol.current = pi),
    (t = xe !== null && xe.next !== null),
    (Sr = 0),
    (ke = xe = de = null),
    (di = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function A0() {
  var e = xo !== 0;
  return (xo = 0), e;
}
function Gt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function St() {
  if (xe === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = ke === null ? de.memoizedState : ke.next;
  if (t !== null) (ke = t), (xe = e);
  else {
    if (e === null) throw Error(L(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null
      }),
      ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function wo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Nu(e) {
  var t = St(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = xe,
    a = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (a !== null) {
      var i = a.next;
      (a.next = o.next), (o.next = i);
    }
    (r.baseQueue = a = o), (n.pending = null);
  }
  if (a !== null) {
    (o = a.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      c = o;
    do {
      var d = c.lane;
      if ((Sr & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var g = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? ((s = u = g), (i = r)) : (u = u.next = g),
          (de.lanes |= d),
          (Ar |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = s),
      Bt(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    a = e;
    do (o = a.lane), (de.lanes |= o), (Ar |= o), (a = a.next);
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ju(e) {
  var t = St(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    a = n.pending,
    o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var i = (a = a.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== a);
    Bt(o, t.memoizedState) || (Xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function d5() {}
function p5(e, t) {
  var n = de,
    r = St(),
    a = t(),
    o = !Bt(r.memoizedState, a);
  if (
    (o && ((r.memoizedState = a), (Xe = !0)),
    (r = r.queue),
    C0(g5.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      So(9, m5.bind(null, n, r, a, t), void 0, null),
      _e === null)
    )
      throw Error(L(349));
    Sr & 30 || f5(n, t, a);
  }
  return a;
}
function f5(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function m5(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), h5(t) && y5(e);
}
function g5(e, t, n) {
  return n(function () {
    h5(t) && y5(e);
  });
}
function h5(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Bt(e, n);
  } catch {
    return !0;
  }
}
function y5(e) {
  var t = wn(e, 1);
  t !== null && $t(t, e, 1, -1);
}
function P1(e) {
  var t = Gt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wo,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = x3.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function So(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function v5() {
  return St().memoizedState;
}
function Rl(e, t, n, r) {
  var a = Gt();
  (de.flags |= e),
    (a.memoizedState = So(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bi(e, t, n, r) {
  var a = St();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (xe !== null) {
    var i = xe.memoizedState;
    if (((o = i.destroy), r !== null && w0(r, i.deps))) {
      a.memoizedState = So(t, n, o, r);
      return;
    }
  }
  (de.flags |= e), (a.memoizedState = So(1 | t, n, o, r));
}
function N1(e, t) {
  return Rl(8390656, 8, e, t);
}
function C0(e, t) {
  return Bi(2048, 8, e, t);
}
function b5(e, t) {
  return Bi(4, 2, e, t);
}
function E5(e, t) {
  return Bi(4, 4, e, t);
}
function x5(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function w5(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bi(4, 4, x5.bind(null, t, e), n)
  );
}
function k0() {}
function S5(e, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && w0(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function A5(e, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && w0(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function C5(e, t, n) {
  return Sr & 21
    ? (Bt(n, t) || ((n = F2()), (de.lanes |= n), (Ar |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function b3(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Pu.transition;
  Pu.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (Pu.transition = r);
  }
}
function k5() {
  return St().memoizedState;
}
function E3(e, t, n) {
  var r = Wn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    _5(e))
  )
    F5(t, n);
  else if (((n = a5(e, t, n, r)), n !== null)) {
    var a = Ve();
    $t(n, e, r, a), T5(n, t, r);
  }
}
function x3(e, t, n) {
  var r = Wn(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_5(e)) F5(t, a);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((a.hasEagerState = !0), (a.eagerState = s), Bt(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((a.next = a), y0(t))
            : ((a.next = u.next), (u.next = a)),
            (t.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (n = a5(e, t, a, r)),
      n !== null && ((a = Ve()), $t(n, e, r, a), T5(n, t, r));
  }
}
function _5(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function F5(e, t) {
  to = di = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function T5(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), r0(e, n);
  }
}
var pi = {
    readContext: wt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1
  },
  w3 = {
    readContext: wt,
    useCallback: function (e, t) {
      return (Gt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wt,
    useEffect: N1,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Rl(4194308, 4, x5.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Gt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Gt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = E3.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Gt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: P1,
    useDebugValue: k0,
    useDeferredValue: function (e) {
      return (Gt().memoizedState = e);
    },
    useTransition: function () {
      var e = P1(!1),
        t = e[0];
      return (e = b3.bind(null, e[1])), (Gt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        a = Gt();
      if (se) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), _e === null)) throw Error(L(349));
        Sr & 30 || f5(r, t, n);
      }
      a.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (a.queue = o),
        N1(g5.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        So(9, m5.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Gt(),
        t = _e.identifierPrefix;
      if (se) {
        var n = vn,
          r = yn;
        (n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = xo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = v3++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1
  },
  S3 = {
    readContext: wt,
    useCallback: S5,
    useContext: wt,
    useEffect: C0,
    useImperativeHandle: w5,
    useInsertionEffect: b5,
    useLayoutEffect: E5,
    useMemo: A5,
    useReducer: Nu,
    useRef: v5,
    useState: function () {
      return Nu(wo);
    },
    useDebugValue: k0,
    useDeferredValue: function (e) {
      var t = St();
      return C5(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Nu(wo)[0],
        t = St().memoizedState;
      return [e, t];
    },
    useMutableSource: d5,
    useSyncExternalStore: p5,
    useId: k5,
    unstable_isNewReconciler: !1
  },
  A3 = {
    readContext: wt,
    useCallback: S5,
    useContext: wt,
    useEffect: C0,
    useImperativeHandle: w5,
    useInsertionEffect: b5,
    useLayoutEffect: E5,
    useMemo: A5,
    useReducer: ju,
    useRef: v5,
    useState: function () {
      return ju(wo);
    },
    useDebugValue: k0,
    useDeferredValue: function (e) {
      var t = St();
      return xe === null ? (t.memoizedState = e) : C5(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = ju(wo)[0],
        t = St().memoizedState;
      return [e, t];
    },
    useMutableSource: d5,
    useSyncExternalStore: p5,
    useId: k5,
    unstable_isNewReconciler: !1
  };
function sa(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Qy(r)), (r = r.return);
    while (r);
    var a = n;
  } catch (o) {
    a =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Hu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var C3 = typeof WeakMap == 'function' ? WeakMap : Map;
function O5(e, t, n) {
  (n = bn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mi || ((mi = !0), (uc = r)), Qs(e, t);
    }),
    n
  );
}
function R5(e, t, n) {
  (n = bn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var a = t.value;
    (n.payload = function () {
      return r(a);
    }),
      (n.callback = function () {
        Qs(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Qs(e, t),
          typeof r != 'function' &&
            (qn === null ? (qn = new Set([this])) : qn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : ''
        });
      }),
    n
  );
}
function j1(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new C3();
    var a = new Set();
    r.set(t, a);
  } else (a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a));
  a.has(n) || (a.add(n), (e = N3.bind(null, e, t, n)), t.then(e, e));
}
function H1(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Z1(e, t, n, r, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = bn(-1, 1)), (t.tag = 2), Un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var k3 = Cn.ReactCurrentOwner,
  Xe = !1;
function ze(e, t, n, r) {
  t.child = e === null ? s5(t, null, n, r) : ia(t, e.child, n, r);
}
function z1(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return (
    ta(t, a),
    (r = S0(e, t, n, r, o, a)),
    (n = A0()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Sn(e, t, a))
      : (se && n && d0(t), (t.flags |= 1), ze(e, t, r, a), t.child)
  );
}
function V1(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !M0(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), D5(e, t, o, r, a))
      : ((e = $l(n.type, null, r, t, t.mode, a)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & a))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : go), n(i, r) && e.ref === t.ref)
    )
      return Sn(e, t, a);
  }
  return (
    (t.flags |= 1),
    (e = Gn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function D5(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (go(o, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & a) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), Sn(e, t, a);
  }
  return Js(e, t, n, r, a);
}
function L5(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(Gr, ot),
        (ot |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }),
          (t.updateQueue = null),
          oe(Gr, ot),
          (ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        oe(Gr, ot),
        (ot |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(Gr, ot),
      (ot |= r);
  return ze(e, t, a, n), t.child;
}
function M5(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Js(e, t, n, r, a) {
  var o = Je(n) ? xr : Ne.current;
  return (
    (o = oa(t, o)),
    ta(t, a),
    (n = S0(e, t, n, r, o, a)),
    (r = A0()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Sn(e, t, a))
      : (se && r && d0(t), (t.flags |= 1), ze(e, t, n, a), t.child)
  );
}
function U1(e, t, n, r, a) {
  if (Je(n)) {
    var o = !0;
    ai(t);
  } else o = !1;
  if ((ta(t, a), t.stateNode === null))
    Dl(e, t), i5(t, n, r), Xs(t, n, r, a), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = wt(c))
      : ((c = Je(n) ? xr : Ne.current), (c = oa(t, c)));
    var d = n.getDerivedStateFromProps,
      g =
        typeof d == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== c) && B1(t, i, r, c)),
      (Ln = !1);
    var f = t.memoizedState;
    (i.state = f),
      si(t, r, i, a),
      (u = t.memoizedState),
      s !== r || f !== u || Qe.current || Ln
        ? (typeof d == 'function' && (Ys(t, n, d, r), (u = t.memoizedState)),
          (s = Ln || $1(t, n, s, r, f, u, c))
            ? (g ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      o5(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Rt(t.type, s)),
      (i.props = c),
      (g = t.pendingProps),
      (f = i.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = wt(u))
        : ((u = Je(n) ? xr : Ne.current), (u = oa(t, u)));
    var p = n.getDerivedStateFromProps;
    (d =
      typeof p == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((s !== g || f !== u) && B1(t, i, r, u)),
      (Ln = !1),
      (f = t.memoizedState),
      (i.state = f),
      si(t, r, i, a);
    var h = t.memoizedState;
    s !== g || f !== h || Qe.current || Ln
      ? (typeof p == 'function' && (Ys(t, n, p, r), (h = t.memoizedState)),
        (c = Ln || $1(t, n, c, r, f, h, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, h, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, h, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (i.props = r),
        (i.state = h),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ec(e, t, n, r, o, a);
}
function ec(e, t, n, r, a, o) {
  M5(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return a && O1(t, n, !1), Sn(e, t, o);
  (r = t.stateNode), (k3.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ia(t, e.child, null, o)), (t.child = ia(t, null, s, o)))
      : ze(e, t, s, o),
    (t.memoizedState = r.state),
    a && O1(t, n, !0),
    t.child
  );
}
function $5(e) {
  var t = e.stateNode;
  t.pendingContext
    ? T1(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && T1(e, t.context, !1),
    b0(e, t.containerInfo);
}
function q1(e, t, n, r, a) {
  return la(), f0(a), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var tc = { dehydrated: null, treeContext: null, retryLane: 0 };
function nc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function B5(e, t, n) {
  var r = t.pendingProps,
    a = ce.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    oe(ce, a & 1),
    e === null)
  )
    return (
      Gs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ni(i, r, 0, null)),
              (e = vr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = nc(n)),
              (t.memoizedState = tc),
              e)
            : _0(t, i))
    );
  if (((a = e.memoizedState), a !== null && ((s = a.dehydrated), s !== null)))
    return _3(e, t, i, r, s, a, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (a = e.child), (s = a.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== a
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Gn(a, u)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
      s !== null ? (o = Gn(s, o)) : ((o = vr(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? nc(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = tc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Gn(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _0(e, t) {
  return (
    (t = Ni({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fl(e, t, n, r) {
  return (
    r !== null && f0(r),
    ia(t, e.child, null, n),
    (e = _0(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _3(e, t, n, r, a, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hu(Error(L(422)))), fl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (a = t.mode),
        (r = Ni({ mode: 'visible', children: r.children }, a, 0, null)),
        (o = vr(o, a, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ia(t, e.child, null, i),
        (t.child.memoizedState = nc(i)),
        (t.memoizedState = tc),
        o);
  if (!(t.mode & 1)) return fl(e, t, i, null);
  if (a.data === '$!') {
    if (((r = a.nextSibling && a.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(L(419))), (r = Hu(o, r, void 0)), fl(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Xe || s)) {
    if (((r = _e), r !== null)) {
      switch (i & -i) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      (a = a & (r.suspendedLanes | i) ? 0 : a),
        a !== 0 &&
          a !== o.retryLane &&
          ((o.retryLane = a), wn(e, a), $t(r, e, a, -1));
    }
    return L0(), (r = Hu(Error(L(421)))), fl(e, t, i, r);
  }
  return a.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = j3.bind(null, e)),
      (a._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (lt = Vn(a.nextSibling)),
      (it = t),
      (se = !0),
      (Lt = null),
      e !== null &&
        ((yt[vt++] = yn),
        (yt[vt++] = vn),
        (yt[vt++] = wr),
        (yn = e.id),
        (vn = e.overflow),
        (wr = t)),
      (t = _0(t, r.children)),
      (t.flags |= 4096),
      t);
}
function W1(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ks(e.return, t, n);
}
function Zu(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = a));
}
function I5(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    o = r.tail;
  if ((ze(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && W1(e, n, t);
        else if (e.tag === 19) W1(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (a) {
      case 'forwards':
        for (n = t.child, a = null; n !== null; )
          (e = n.alternate),
            e !== null && ci(e) === null && (a = n),
            (n = n.sibling);
        (n = a),
          n === null
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
          Zu(t, !1, a, n, o);
        break;
      case 'backwards':
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && ci(e) === null)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        Zu(t, !0, n, null, o);
        break;
      case 'together':
        Zu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Sn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ar |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function F3(e, t, n) {
  switch (t.tag) {
    case 3:
      $5(t), la();
      break;
    case 5:
      c5(t);
      break;
    case 1:
      Je(t.type) && ai(t);
      break;
    case 4:
      b0(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        a = t.memoizedProps.value;
      oe(ii, r._currentValue), (r._currentValue = a);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? B5(e, t, n)
          : (oe(ce, ce.current & 1),
            (e = Sn(e, t, n)),
            e !== null ? e.sibling : null);
      oe(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return I5(e, t, n);
        t.flags |= 128;
      }
      if (
        ((a = t.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        oe(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), L5(e, t, n);
  }
  return Sn(e, t, n);
}
var P5, rc, N5, j5;
P5 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
rc = function () {};
N5 = function (e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    (e = t.stateNode), hr(an.current);
    var o = null;
    switch (n) {
      case 'input':
        (a = Cs(e, a)), (r = Cs(e, r)), (o = []);
        break;
      case 'select':
        (a = pe({}, a, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (a = Fs(e, a)), (r = Fs(e, r)), (o = []);
        break;
      default:
        typeof a.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ni);
    }
    Os(n, r);
    var i;
    n = null;
    for (c in a)
      if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && a[c] != null)
        if (c === 'style') {
          var s = a[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (io.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = a != null ? a[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === 'style')
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (o = o || []).push(c, '' + u)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (io.hasOwnProperty(c)
                ? (u != null && c === 'onScroll' && le('scroll', e),
                  o || s === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push('style', n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
j5 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pa(e, t) {
  if (!se)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags & 14680064),
        (r |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags),
        (r |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function T3(e, t, n) {
  var r = t.pendingProps;
  switch ((p0(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null;
    case 1:
      return Je(t.type) && ri(), $e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ua(),
        ie(Qe),
        ie(Ne),
        x0(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Lt !== null && (dc(Lt), (Lt = null)))),
        rc(e, t),
        $e(t),
        null
      );
    case 5:
      E0(t);
      var a = hr(Eo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        N5(e, t, n, r, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return $e(t), null;
        }
        if (((e = hr(an.current)), dl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Jt] = t), (r[vo] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              le('cancel', r), le('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              le('load', r);
              break;
            case 'video':
            case 'audio':
              for (a = 0; a < Ga.length; a++) le(Ga[a], r);
              break;
            case 'source':
              le('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              le('error', r), le('load', r);
              break;
            case 'details':
              le('toggle', r);
              break;
            case 'input':
              n1(r, o), le('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                le('invalid', r);
              break;
            case 'textarea':
              a1(r, o), le('invalid', r);
          }
          Os(n, o), (a = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      cl(r.textContent, s, e),
                    (a = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      cl(r.textContent, s, e),
                    (a = ['children', '' + s]))
                : io.hasOwnProperty(i) &&
                  s != null &&
                  i === 'onScroll' &&
                  le('scroll', r);
            }
          switch (n) {
            case 'input':
              nl(r), r1(r, o, !0);
              break;
            case 'textarea':
              nl(r), o1(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = ni);
          }
          (r = a), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = a.nodeType === 9 ? a : a.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = f2(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Jt] = t),
            (e[vo] = r),
            P5(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Rs(n, r)), n)) {
              case 'dialog':
                le('cancel', e), le('close', e), (a = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                le('load', e), (a = r);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < Ga.length; a++) le(Ga[a], e);
                a = r;
                break;
              case 'source':
                le('error', e), (a = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                le('error', e), le('load', e), (a = r);
                break;
              case 'details':
                le('toggle', e), (a = r);
                break;
              case 'input':
                n1(e, r), (a = Cs(e, r)), le('invalid', e);
                break;
              case 'option':
                a = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = pe({}, r, { value: void 0 })),
                  le('invalid', e);
                break;
              case 'textarea':
                a1(e, r), (a = Fs(e, r)), le('invalid', e);
                break;
              default:
                a = r;
            }
            Os(n, a), (s = a);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === 'style'
                  ? h2(e, u)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && m2(e, u))
                  : o === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && uo(e, u)
                    : typeof u == 'number' && uo(e, '' + u)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (io.hasOwnProperty(o)
                      ? u != null && o === 'onScroll' && le('scroll', e)
                      : u != null && Xc(e, o, u, i));
              }
            switch (n) {
              case 'input':
                nl(e), r1(e, r, !1);
                break;
              case 'textarea':
                nl(e), o1(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Kn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Xr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Xr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof a.onClick == 'function' && (e.onclick = ni);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) j5(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(L(166));
        if (((n = hr(Eo.current)), hr(an.current), dl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Jt] = t),
            (o = r.nodeValue !== n) && ((e = it), e !== null))
          )
            switch (e.tag) {
              case 3:
                cl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  cl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Jt] = t),
            (t.stateNode = r);
      }
      return $e(t), null;
    case 13:
      if (
        (ie(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && lt !== null && t.mode & 1 && !(t.flags & 128))
          r5(), la(), (t.flags |= 98560), (o = !1);
        else if (((o = dl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[Jt] = t;
          } else
            la(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $e(t), (o = !1);
        } else Lt !== null && (dc(Lt), (Lt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? we === 0 && (we = 3) : L0())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null);
    case 4:
      return (
        ua(), rc(e, t), e === null && ho(t.stateNode.containerInfo), $e(t), null
      );
    case 10:
      return h0(t.type._context), $e(t), null;
    case 17:
      return Je(t.type) && ri(), $e(t), null;
    case 19:
      if ((ie(ce), (o = t.memoizedState), o === null)) return $e(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Pa(o, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ci(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Pa(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                              })),
                    (n = n.sibling);
                return oe(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            he() > ca &&
            ((t.flags |= 128), (r = !0), Pa(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ci(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pa(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !se)
            )
              return $e(t), null;
          } else
            2 * he() - o.renderingStartTime > ca &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pa(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = he()),
          (t.sibling = null),
          (n = ce.current),
          oe(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null);
    case 22:
    case 23:
      return (
        D0(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ot & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function O3(e, t) {
  switch ((p0(t), t.tag)) {
    case 1:
      return (
        Je(t.type) && ri(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ua(),
        ie(Qe),
        ie(Ne),
        x0(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return E0(t), null;
    case 13:
      if (
        (ie(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        la();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ce), null;
    case 4:
      return ua(), null;
    case 10:
      return h0(t.type._context), null;
    case 22:
    case 23:
      return D0(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ml = !1,
  Ie = !1,
  R3 = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null;
function Wr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function ac(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var G1 = !1;
function D3(e, t) {
  if (((Hs = Jl), (e = V2()), c0(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            c = 0,
            d = 0,
            g = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              g !== n || (a !== 0 && g.nodeType !== 3) || (s = i + a),
                g !== o || (r !== 0 && g.nodeType !== 3) || (u = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (p = g.firstChild) !== null;

            )
              (f = g), (g = p);
            for (;;) {
              if (g === e) break t;
              if (
                (f === n && ++c === a && (s = i),
                f === o && ++d === r && (u = i),
                (p = g.nextSibling) !== null)
              )
                break;
              (g = f), (f = g.parentNode);
            }
            g = p;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zs = { focusedElem: e, selectionRange: n }, Jl = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var m = h.memoizedProps,
                    w = h.memoizedState,
                    y = t.stateNode,
                    b = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : Rt(t.type, m),
                      w
                    );
                  y.__reactInternalSnapshotBeforeUpdate = b;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          ge(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (h = G1), (G1 = !1), h;
}
function no(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var a = (r = r.next);
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        (a.destroy = void 0), o !== void 0 && ac(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Ii(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function oc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function H5(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), H5(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[vo], delete t[Us], delete t[m3], delete t[g3])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Z5(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function K1(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Z5(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ni));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lc(e, t, n), e = e.sibling; e !== null; ) lc(e, t, n), (e = e.sibling);
}
function ic(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ic(e, t, n), e = e.sibling; e !== null; ) ic(e, t, n), (e = e.sibling);
}
var Fe = null,
  Dt = !1;
function _n(e, t, n) {
  for (n = n.child; n !== null; ) z5(e, t, n), (n = n.sibling);
}
function z5(e, t, n) {
  if (rn && typeof rn.onCommitFiberUnmount == 'function')
    try {
      rn.onCommitFiberUnmount(Ti, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || Wr(n, t);
    case 6:
      var r = Fe,
        a = Dt;
      (Fe = null),
        _n(e, t, n),
        (Fe = r),
        (Dt = a),
        Fe !== null &&
          (Dt
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Fe.removeChild(n.stateNode));
      break;
    case 18:
      Fe !== null &&
        (Dt
          ? ((e = Fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? $u(e.parentNode, n)
              : e.nodeType === 1 && $u(e, n),
            fo(e))
          : $u(Fe, n.stateNode));
      break;
    case 4:
      (r = Fe),
        (a = Dt),
        (Fe = n.stateNode.containerInfo),
        (Dt = !0),
        _n(e, t, n),
        (Fe = r),
        (Dt = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        a = r = r.next;
        do {
          var o = a,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ac(n, t, i),
            (a = a.next);
        } while (a !== r);
      }
      _n(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (Wr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ge(n, t, s);
        }
      _n(e, t, n);
      break;
    case 21:
      _n(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), _n(e, t, n), (Ie = r))
        : _n(e, t, n);
      break;
    default:
      _n(e, t, n);
  }
}
function Y1(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new R3()),
      t.forEach(function (r) {
        var a = H3.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
  }
}
function Ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Fe = s.stateNode), (Dt = !1);
              break e;
            case 3:
              (Fe = s.stateNode.containerInfo), (Dt = !0);
              break e;
            case 4:
              (Fe = s.stateNode.containerInfo), (Dt = !0);
              break e;
          }
          s = s.return;
        }
        if (Fe === null) throw Error(L(160));
        z5(o, i, a), (Fe = null), (Dt = !1);
        var u = a.alternate;
        u !== null && (u.return = null), (a.return = null);
      } catch (c) {
        ge(a, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) V5(t, e), (t = t.sibling);
}
function V5(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(t, e), Wt(e), r & 4)) {
        try {
          no(3, e, e.return), Ii(3, e);
        } catch (m) {
          ge(e, e.return, m);
        }
        try {
          no(5, e, e.return);
        } catch (m) {
          ge(e, e.return, m);
        }
      }
      break;
    case 1:
      Ot(t, e), Wt(e), r & 512 && n !== null && Wr(n, n.return);
      break;
    case 5:
      if (
        (Ot(t, e),
        Wt(e),
        r & 512 && n !== null && Wr(n, n.return),
        e.flags & 32)
      ) {
        var a = e.stateNode;
        try {
          uo(a, '');
        } catch (m) {
          ge(e, e.return, m);
        }
      }
      if (r & 4 && ((a = e.stateNode), a != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && o.type === 'radio' && o.name != null && d2(a, o),
              Rs(s, i);
            var c = Rs(s, o);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                g = u[i + 1];
              d === 'style'
                ? h2(a, g)
                : d === 'dangerouslySetInnerHTML'
                ? m2(a, g)
                : d === 'children'
                ? uo(a, g)
                : Xc(a, d, g, c);
            }
            switch (s) {
              case 'input':
                ks(a, o);
                break;
              case 'textarea':
                p2(a, o);
                break;
              case 'select':
                var f = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? Xr(a, !!o.multiple, p, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Xr(a, !!o.multiple, o.defaultValue, !0)
                      : Xr(a, !!o.multiple, o.multiple ? [] : '', !1));
            }
            a[vo] = o;
          } catch (m) {
            ge(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((Ot(t, e), Wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (a = e.stateNode), (o = e.memoizedProps);
        try {
          a.nodeValue = o;
        } catch (m) {
          ge(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (Ot(t, e), Wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          fo(t.containerInfo);
        } catch (m) {
          ge(e, e.return, m);
        }
      break;
    case 4:
      Ot(t, e), Wt(e);
      break;
    case 13:
      Ot(t, e),
        Wt(e),
        (a = e.child),
        a.flags & 8192 &&
          ((o = a.memoizedState !== null),
          (a.stateNode.isHidden = o),
          !o ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (O0 = he())),
        r & 4 && Y1(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (c = Ie) || d), Ot(t, e), (Ie = c)) : Ot(t, e),
        Wt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (N = e, d = e.child; d !== null; ) {
            for (g = N = d; N !== null; ) {
              switch (((f = N), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  no(4, f, f.return);
                  break;
                case 1:
                  Wr(f, f.return);
                  var h = f.stateNode;
                  if (typeof h.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (m) {
                      ge(r, n, m);
                    }
                  }
                  break;
                case 5:
                  Wr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Q1(g);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (N = p)) : Q1(g);
            }
            d = d.sibling;
          }
        e: for (d = null, g = e; ; ) {
          if (g.tag === 5) {
            if (d === null) {
              d = g;
              try {
                (a = g.stateNode),
                  c
                    ? ((o = a.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((s = g.stateNode),
                      (u = g.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = g2('display', i)));
              } catch (m) {
                ge(e, e.return, m);
              }
            }
          } else if (g.tag === 6) {
            if (d === null)
              try {
                g.stateNode.nodeValue = c ? '' : g.memoizedProps;
              } catch (m) {
                ge(e, e.return, m);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            d === g && (d = null), (g = g.return);
          }
          d === g && (d = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Ot(t, e), Wt(e), r & 4 && Y1(e);
      break;
    case 21:
      break;
    default:
      Ot(t, e), Wt(e);
  }
}
function Wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Z5(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (uo(a, ''), (r.flags &= -33));
          var o = K1(e);
          ic(e, o, a);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = K1(e);
          lc(e, s, i);
          break;
        default:
          throw Error(L(161));
      }
    } catch (u) {
      ge(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function L3(e, t, n) {
  (N = e), U5(e);
}
function U5(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var a = N,
      o = a.child;
    if (a.tag === 22 && r) {
      var i = a.memoizedState !== null || ml;
      if (!i) {
        var s = a.alternate,
          u = (s !== null && s.memoizedState !== null) || Ie;
        s = ml;
        var c = Ie;
        if (((ml = i), (Ie = u) && !c))
          for (N = a; N !== null; )
            (i = N),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? J1(a)
                : u !== null
                ? ((u.return = i), (N = u))
                : J1(a);
        for (; o !== null; ) (N = o), U5(o), (o = o.sibling);
        (N = a), (ml = s), (Ie = c);
      }
      X1(e);
    } else
      a.subtreeFlags & 8772 && o !== null ? ((o.return = a), (N = o)) : X1(e);
  }
}
function X1(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || Ii(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var a =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    a,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && M1(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                M1(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var g = d.dehydrated;
                    g !== null && fo(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ie || (t.flags & 512 && oc(t));
      } catch (f) {
        ge(t, t.return, f);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Q1(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function J1(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ii(4, t);
          } catch (u) {
            ge(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ge(t, a, u);
            }
          }
          var o = t.return;
          try {
            oc(t);
          } catch (u) {
            ge(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            oc(t);
          } catch (u) {
            ge(t, i, u);
          }
      }
    } catch (u) {
      ge(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (N = s);
      break;
    }
    N = t.return;
  }
}
var M3 = Math.ceil,
  fi = Cn.ReactCurrentDispatcher,
  F0 = Cn.ReactCurrentOwner,
  Et = Cn.ReactCurrentBatchConfig,
  ee = 0,
  _e = null,
  be = null,
  Re = 0,
  ot = 0,
  Gr = er(0),
  we = 0,
  Ao = null,
  Ar = 0,
  Pi = 0,
  T0 = 0,
  ro = null,
  Ge = null,
  O0 = 0,
  ca = 1 / 0,
  fn = null,
  mi = !1,
  uc = null,
  qn = null,
  gl = !1,
  Pn = null,
  gi = 0,
  ao = 0,
  sc = null,
  Ll = -1,
  Ml = 0;
function Ve() {
  return ee & 6 ? he() : Ll !== -1 ? Ll : (Ll = he());
}
function Wn(e) {
  return e.mode & 1
    ? ee & 2 && Re !== 0
      ? Re & -Re
      : y3.transition !== null
      ? (Ml === 0 && (Ml = F2()), Ml)
      : ((e = re),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $2(e.type))),
        e)
    : 1;
}
function $t(e, t, n, r) {
  if (50 < ao) throw ((ao = 0), (sc = null), Error(L(185)));
  Zo(e, n, r),
    (!(ee & 2) || e !== _e) &&
      (e === _e && (!(ee & 2) && (Pi |= n), we === 4 && Bn(e, Re)),
      et(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((ca = he() + 500), Mi && tr()));
}
function et(e, t) {
  var n = e.callbackNode;
  yv(e, t);
  var r = Ql(e, e === _e ? Re : 0);
  if (r === 0)
    n !== null && u1(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && u1(n), t === 1))
      e.tag === 0 ? h3(ep.bind(null, e)) : e5(ep.bind(null, e)),
        p3(function () {
          !(ee & 6) && tr();
        }),
        (n = null);
    else {
      switch (T2(r)) {
        case 1:
          n = n0;
          break;
        case 4:
          n = k2;
          break;
        case 16:
          n = Xl;
          break;
        case 536870912:
          n = _2;
          break;
        default:
          n = Xl;
      }
      n = J5(n, q5.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function q5(e, t) {
  if (((Ll = -1), (Ml = 0), ee & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (na() && e.callbackNode !== n) return null;
  var r = Ql(e, e === _e ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hi(e, r);
  else {
    t = r;
    var a = ee;
    ee |= 2;
    var o = G5();
    (_e !== e || Re !== t) && ((fn = null), (ca = he() + 500), yr(e, t));
    do
      try {
        I3();
        break;
      } catch (s) {
        W5(e, s);
      }
    while (1);
    g0(),
      (fi.current = o),
      (ee = a),
      be !== null ? (t = 0) : ((_e = null), (Re = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((a = Bs(e)), a !== 0 && ((r = a), (t = cc(e, a)))), t === 1)
    )
      throw ((n = Ao), yr(e, 0), Bn(e, r), et(e, he()), n);
    if (t === 6) Bn(e, r);
    else {
      if (
        ((a = e.current.alternate),
        !(r & 30) &&
          !$3(a) &&
          ((t = hi(e, r)),
          t === 2 && ((o = Bs(e)), o !== 0 && ((r = o), (t = cc(e, o)))),
          t === 1))
      )
        throw ((n = Ao), yr(e, 0), Bn(e, r), et(e, he()), n);
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          ur(e, Ge, fn);
          break;
        case 3:
          if (
            (Bn(e, r), (r & 130023424) === r && ((t = O0 + 500 - he()), 10 < t))
          ) {
            if (Ql(e, 0) !== 0) break;
            if (((a = e.suspendedLanes), (a & r) !== r)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = Vs(ur.bind(null, e, Ge, fn), t);
            break;
          }
          ur(e, Ge, fn);
          break;
        case 4:
          if ((Bn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var i = 31 - Mt(r);
            (o = 1 << i), (i = t[i]), i > a && (a = i), (r &= ~o);
          }
          if (
            ((r = a),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * M3(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vs(ur.bind(null, e, Ge, fn), r);
            break;
          }
          ur(e, Ge, fn);
          break;
        case 5:
          ur(e, Ge, fn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return et(e, he()), e.callbackNode === n ? q5.bind(null, e) : null;
}
function cc(e, t) {
  var n = ro;
  return (
    e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256),
    (e = hi(e, t)),
    e !== 2 && ((t = Ge), (Ge = n), t !== null && dc(t)),
    e
  );
}
function dc(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
}
function $3(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = a.getSnapshot;
          a = a.value;
          try {
            if (!Bt(o(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Bn(e, t) {
  for (
    t &= ~T0,
      t &= ~Pi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ep(e) {
  if (ee & 6) throw Error(L(327));
  na();
  var t = Ql(e, 0);
  if (!(t & 1)) return et(e, he()), null;
  var n = hi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bs(e);
    r !== 0 && ((t = r), (n = cc(e, r)));
  }
  if (n === 1) throw ((n = Ao), yr(e, 0), Bn(e, t), et(e, he()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ur(e, Ge, fn),
    et(e, he()),
    null
  );
}
function R0(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((ca = he() + 500), Mi && tr());
  }
}
function Cr(e) {
  Pn !== null && Pn.tag === 0 && !(ee & 6) && na();
  var t = ee;
  ee |= 1;
  var n = Et.transition,
    r = re;
  try {
    if (((Et.transition = null), (re = 1), e)) return e();
  } finally {
    (re = r), (Et.transition = n), (ee = t), !(ee & 6) && tr();
  }
}
function D0() {
  (ot = Gr.current), ie(Gr);
}
function yr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), d3(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((p0(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ri();
          break;
        case 3:
          ua(), ie(Qe), ie(Ne), x0();
          break;
        case 5:
          E0(r);
          break;
        case 4:
          ua();
          break;
        case 13:
          ie(ce);
          break;
        case 19:
          ie(ce);
          break;
        case 10:
          h0(r.type._context);
          break;
        case 22:
        case 23:
          D0();
      }
      n = n.return;
    }
  if (
    ((_e = e),
    (be = e = Gn(e.current, null)),
    (Re = ot = t),
    (we = 0),
    (Ao = null),
    (T0 = Pi = Ar = 0),
    (Ge = ro = null),
    gr !== null)
  ) {
    for (t = 0; t < gr.length; t++)
      if (((n = gr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var a = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = a), (r.next = i);
        }
        n.pending = r;
      }
    gr = null;
  }
  return e;
}
function W5(e, t) {
  do {
    var n = be;
    try {
      if ((g0(), (Ol.current = pi), di)) {
        for (var r = de.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), (r = r.next);
        }
        di = !1;
      }
      if (
        ((Sr = 0),
        (ke = xe = de = null),
        (to = !1),
        (xo = 0),
        (F0.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (Ao = t), (be = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = Re),
          (s.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var c = u,
            d = s,
            g = d.tag;
          if (!(d.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = H1(i);
          if (p !== null) {
            (p.flags &= -257),
              Z1(p, i, s, o, t),
              p.mode & 1 && j1(o, c, t),
              (t = p),
              (u = c);
            var h = t.updateQueue;
            if (h === null) {
              var m = new Set();
              m.add(u), (t.updateQueue = m);
            } else h.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              j1(o, c, t), L0();
              break e;
            }
            u = Error(L(426));
          }
        } else if (se && s.mode & 1) {
          var w = H1(i);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Z1(w, i, s, o, t),
              f0(sa(u, s));
            break e;
          }
        }
        (o = u = sa(u, s)),
          we !== 4 && (we = 2),
          ro === null ? (ro = [o]) : ro.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var y = O5(o, u, t);
              L1(o, y);
              break e;
            case 1:
              s = u;
              var b = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof b.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (qn === null || !qn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = R5(o, s, t);
                L1(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Y5(n);
    } catch (x) {
      (t = x), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function G5() {
  var e = fi.current;
  return (fi.current = pi), e === null ? pi : e;
}
function L0() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    _e === null || (!(Ar & 268435455) && !(Pi & 268435455)) || Bn(_e, Re);
}
function hi(e, t) {
  var n = ee;
  ee |= 2;
  var r = G5();
  (_e !== e || Re !== t) && ((fn = null), yr(e, t));
  do
    try {
      B3();
      break;
    } catch (a) {
      W5(e, a);
    }
  while (1);
  if ((g0(), (ee = n), (fi.current = r), be !== null)) throw Error(L(261));
  return (_e = null), (Re = 0), we;
}
function B3() {
  for (; be !== null; ) K5(be);
}
function I3() {
  for (; be !== null && !uv(); ) K5(be);
}
function K5(e) {
  var t = Q5(e.alternate, e, ot);
  (e.memoizedProps = e.pendingProps),
    t === null ? Y5(e) : (be = t),
    (F0.current = null);
}
function Y5(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = O3(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (be = null);
        return;
      }
    } else if (((n = T3(n, t, ot)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function ur(e, t, n) {
  var r = re,
    a = Et.transition;
  try {
    (Et.transition = null), (re = 1), P3(e, t, n, r);
  } finally {
    (Et.transition = a), (re = r);
  }
  return null;
}
function P3(e, t, n, r) {
  do na();
  while (Pn !== null);
  if (ee & 6) throw Error(L(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (vv(e, o),
    e === _e && ((be = _e = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gl ||
      ((gl = !0),
      J5(Xl, function () {
        return na(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Et.transition), (Et.transition = null);
    var i = re;
    re = 1;
    var s = ee;
    (ee |= 4),
      (F0.current = null),
      D3(e, n),
      V5(n, e),
      a3(Zs),
      (Jl = !!Hs),
      (Zs = Hs = null),
      (e.current = n),
      L3(n),
      sv(),
      (ee = s),
      (re = i),
      (Et.transition = o);
  } else e.current = n;
  if (
    (gl && ((gl = !1), (Pn = e), (gi = a)),
    (o = e.pendingLanes),
    o === 0 && (qn = null),
    pv(n.stateNode),
    et(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
  if (mi) throw ((mi = !1), (e = uc), (uc = null), e);
  return (
    gi & 1 && e.tag !== 0 && na(),
    (o = e.pendingLanes),
    o & 1 ? (e === sc ? ao++ : ((ao = 0), (sc = e))) : (ao = 0),
    tr(),
    null
  );
}
function na() {
  if (Pn !== null) {
    var e = T2(gi),
      t = Et.transition,
      n = re;
    try {
      if (((Et.transition = null), (re = 16 > e ? 16 : e), Pn === null))
        var r = !1;
      else {
        if (((e = Pn), (Pn = null), (gi = 0), ee & 6)) throw Error(L(331));
        var a = ee;
        for (ee |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (N = c; N !== null; ) {
                  var d = N;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      no(8, d, o);
                  }
                  var g = d.child;
                  if (g !== null) (g.return = d), (N = g);
                  else
                    for (; N !== null; ) {
                      d = N;
                      var f = d.sibling,
                        p = d.return;
                      if ((H5(d), d === c)) {
                        N = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (N = f);
                        break;
                      }
                      N = p;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var m = h.child;
                if (m !== null) {
                  h.child = null;
                  do {
                    var w = m.sibling;
                    (m.sibling = null), (m = w);
                  } while (m !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    no(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (N = y);
                break e;
              }
              N = o.return;
            }
        }
        var b = e.current;
        for (N = b; N !== null; ) {
          i = N;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (N = v);
          else
            e: for (i = b; N !== null; ) {
              if (((s = N), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(9, s);
                  }
                } catch (x) {
                  ge(s, s.return, x);
                }
              if (s === i) {
                N = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (N = E);
                break e;
              }
              N = s.return;
            }
        }
        if (
          ((ee = a), tr(), rn && typeof rn.onPostCommitFiberRoot == 'function')
        )
          try {
            rn.onPostCommitFiberRoot(Ti, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (re = n), (Et.transition = t);
    }
  }
  return !1;
}
function tp(e, t, n) {
  (t = sa(n, t)),
    (t = O5(e, t, 1)),
    (e = Un(e, t, 1)),
    (t = Ve()),
    e !== null && (Zo(e, 1, t), et(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) tp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        tp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (qn === null || !qn.has(r)))
        ) {
          (e = sa(n, e)),
            (e = R5(t, e, 1)),
            (t = Un(t, e, 1)),
            (e = Ve()),
            t !== null && (Zo(t, 1, e), et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function N3(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _e === e &&
      (Re & n) === n &&
      (we === 4 || (we === 3 && (Re & 130023424) === Re && 500 > he() - O0)
        ? yr(e, 0)
        : (T0 |= n)),
    et(e, t);
}
function X5(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ol), (ol <<= 1), !(ol & 130023424) && (ol = 4194304))
      : (t = 1));
  var n = Ve();
  (e = wn(e, t)), e !== null && (Zo(e, t, n), et(e, n));
}
function j3(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), X5(e, n);
}
function H3(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        a = e.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), X5(e, n);
}
var Q5;
Q5 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), F3(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), se && t.flags & 1048576 && t5(t, li, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Dl(e, t), (e = t.pendingProps);
      var a = oa(t, Ne.current);
      ta(t, n), (a = S0(null, t, r, e, a, n));
      var o = A0();
      return (
        (t.flags |= 1),
        typeof a == 'object' &&
        a !== null &&
        typeof a.render == 'function' &&
        a.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Je(r) ? ((o = !0), ai(t)) : (o = !1),
            (t.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            v0(t),
            (a.updater = $i),
            (t.stateNode = a),
            (a._reactInternals = t),
            Xs(t, r, e, n),
            (t = ec(null, t, r, !0, o, n)))
          : ((t.tag = 0), se && o && d0(t), ze(null, t, a, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Dl(e, t),
          (e = t.pendingProps),
          (a = r._init),
          (r = a(r._payload)),
          (t.type = r),
          (a = t.tag = z3(r)),
          (e = Rt(r, e)),
          a)
        ) {
          case 0:
            t = Js(null, t, r, e, n);
            break e;
          case 1:
            t = U1(null, t, r, e, n);
            break e;
          case 11:
            t = z1(null, t, r, e, n);
            break e;
          case 14:
            t = V1(null, t, r, Rt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : Rt(r, a)),
        Js(e, t, r, a, n)
      );
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : Rt(r, a)),
        U1(e, t, r, a, n)
      );
    case 3:
      e: {
        if (($5(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (a = o.element),
          o5(e, t),
          si(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (a = sa(Error(L(423)), t)), (t = q1(e, t, r, n, a));
            break e;
          } else if (r !== a) {
            (a = sa(Error(L(424)), t)), (t = q1(e, t, r, n, a));
            break e;
          } else
            for (
              lt = Vn(t.stateNode.containerInfo.firstChild),
                it = t,
                se = !0,
                Lt = null,
                n = s5(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((la(), r === a)) {
            t = Sn(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        c5(t),
        e === null && Gs(t),
        (r = t.type),
        (a = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = a.children),
        zs(r, a) ? (i = null) : o !== null && zs(r, o) && (t.flags |= 32),
        M5(e, t),
        ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Gs(t), null;
    case 13:
      return B5(e, t, n);
    case 4:
      return (
        b0(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ia(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : Rt(r, a)),
        z1(e, t, r, a, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (o = t.memoizedProps),
          (i = a.value),
          oe(ii, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Bt(o.value, i)) {
            if (o.children === a.children && !Qe.current) {
              t = Sn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = bn(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ks(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(L(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Ks(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ze(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        ta(t, n),
        (a = wt(a)),
        (r = r(a)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (a = Rt(r, t.pendingProps)),
        (a = Rt(r.type, a)),
        V1(e, t, r, a, n)
      );
    case 15:
      return D5(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : Rt(r, a)),
        Dl(e, t),
        (t.tag = 1),
        Je(r) ? ((e = !0), ai(t)) : (e = !1),
        ta(t, n),
        i5(t, r, a),
        Xs(t, r, a, n),
        ec(null, t, r, !0, e, n)
      );
    case 19:
      return I5(e, t, n);
    case 22:
      return L5(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function J5(e, t) {
  return C2(e, t);
}
function Z3(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function bt(e, t, n, r) {
  return new Z3(e, t, n, r);
}
function M0(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function z3(e) {
  if (typeof e == 'function') return M0(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jc)) return 11;
    if (e === e0) return 14;
  }
  return 2;
}
function Gn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = bt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $l(e, t, n, r, a, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) M0(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Pr:
        return vr(n.children, a, o, t);
      case Qc:
        (i = 8), (a |= 8);
        break;
      case xs:
        return (
          (e = bt(12, n, t, a | 2)), (e.elementType = xs), (e.lanes = o), e
        );
      case ws:
        return (e = bt(13, n, t, a)), (e.elementType = ws), (e.lanes = o), e;
      case Ss:
        return (e = bt(19, n, t, a)), (e.elementType = Ss), (e.lanes = o), e;
      case u2:
        return Ni(n, a, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case l2:
              i = 10;
              break e;
            case i2:
              i = 9;
              break e;
            case Jc:
              i = 11;
              break e;
            case e0:
              i = 14;
              break e;
            case Dn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = bt(i, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function vr(e, t, n, r) {
  return (e = bt(7, e, r, t)), (e.lanes = n), e;
}
function Ni(e, t, n, r) {
  return (
    (e = bt(22, e, r, t)),
    (e.elementType = u2),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function zu(e, t, n) {
  return (e = bt(6, e, null, t)), (e.lanes = n), e;
}
function Vu(e, t, n) {
  return (
    (t = bt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  );
}
function V3(e, t, n, r, a) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Au(0)),
    (this.expirationTimes = Au(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Au(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function $0(e, t, n, r, a, o, i, s, u) {
  return (
    (e = new V3(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = bt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    v0(o),
    e
  );
}
function U3(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ir,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  };
}
function em(e) {
  if (!e) return Yn;
  e = e._reactInternals;
  e: {
    if (Fr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return J2(e, n, t);
  }
  return t;
}
function tm(e, t, n, r, a, o, i, s, u) {
  return (
    (e = $0(n, r, !0, e, a, o, i, s, u)),
    (e.context = em(null)),
    (n = e.current),
    (r = Ve()),
    (a = Wn(n)),
    (o = bn(r, a)),
    (o.callback = t ?? null),
    Un(n, o, a),
    (e.current.lanes = a),
    Zo(e, a, r),
    et(e, r),
    e
  );
}
function ji(e, t, n, r) {
  var a = t.current,
    o = Ve(),
    i = Wn(a);
  return (
    (n = em(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bn(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Un(a, t, i)),
    e !== null && ($t(e, a, i, o), Tl(e, a, i)),
    i
  );
}
function yi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function np(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function B0(e, t) {
  np(e, t), (e = e.alternate) && np(e, t);
}
function q3() {
  return null;
}
var nm =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function I0(e) {
  this._internalRoot = e;
}
Hi.prototype.render = I0.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  ji(e, t, null, null);
};
Hi.prototype.unmount = I0.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cr(function () {
      ji(null, e, null, null);
    }),
      (t[xn] = null);
  }
};
function Hi(e) {
  this._internalRoot = e;
}
Hi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = D2();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $n.length && t !== 0 && t < $n[n].priority; n++);
    $n.splice(n, 0, e), n === 0 && M2(e);
  }
};
function P0(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function rp() {}
function W3(e, t, n, r, a) {
  if (a) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var c = yi(i);
        o.call(c);
      };
    }
    var i = tm(t, r, e, 0, null, !1, !1, '', rp);
    return (
      (e._reactRootContainer = i),
      (e[xn] = i.current),
      ho(e.nodeType === 8 ? e.parentNode : e),
      Cr(),
      i
    );
  }
  for (; (a = e.lastChild); ) e.removeChild(a);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var c = yi(u);
      s.call(c);
    };
  }
  var u = $0(e, 0, !1, null, null, !1, !1, '', rp);
  return (
    (e._reactRootContainer = u),
    (e[xn] = u.current),
    ho(e.nodeType === 8 ? e.parentNode : e),
    Cr(function () {
      ji(t, u, n, r);
    }),
    u
  );
}
function zi(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof a == 'function') {
      var s = a;
      a = function () {
        var u = yi(i);
        s.call(u);
      };
    }
    ji(t, i, e, a);
  } else i = W3(n, t, e, a, r);
  return yi(i);
}
O2 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wa(t.pendingLanes);
        n !== 0 &&
          (r0(t, n | 1), et(t, he()), !(ee & 6) && ((ca = he() + 500), tr()));
      }
      break;
    case 13:
      Cr(function () {
        var r = wn(e, 1);
        if (r !== null) {
          var a = Ve();
          $t(r, e, 1, a);
        }
      }),
        B0(e, 1);
  }
};
a0 = function (e) {
  if (e.tag === 13) {
    var t = wn(e, 134217728);
    if (t !== null) {
      var n = Ve();
      $t(t, e, 134217728, n);
    }
    B0(e, 134217728);
  }
};
R2 = function (e) {
  if (e.tag === 13) {
    var t = Wn(e),
      n = wn(e, t);
    if (n !== null) {
      var r = Ve();
      $t(n, e, t, r);
    }
    B0(e, t);
  }
};
D2 = function () {
  return re;
};
L2 = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
Ls = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ks(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Li(r);
            if (!a) throw Error(L(90));
            c2(r), ks(r, a);
          }
        }
      }
      break;
    case 'textarea':
      p2(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Xr(e, !!n.multiple, t, !1);
  }
};
b2 = R0;
E2 = Cr;
var G3 = { usingClientEntryPoint: !1, Events: [Vo, Zr, Li, y2, v2, R0] },
  Na = {
    findFiberByHostInstance: mr,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  K3 = {
    bundleType: Na.bundleType,
    version: Na.version,
    rendererPackageName: Na.rendererPackageName,
    rendererConfig: Na.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = S2(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Na.findFiberByHostInstance || q3,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hl.isDisabled && hl.supportsFiber)
    try {
      (Ti = hl.inject(K3)), (rn = hl);
    } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G3;
dt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!P0(t)) throw Error(L(200));
  return U3(e, t, null, n);
};
dt.createRoot = function (e, t) {
  if (!P0(e)) throw Error(L(299));
  var n = !1,
    r = '',
    a = nm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (t = $0(e, 1, !1, null, null, n, !1, r, a)),
    (e[xn] = t.current),
    ho(e.nodeType === 8 ? e.parentNode : e),
    new I0(t)
  );
};
dt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(L(188))
      : ((e = Object.keys(e).join(',')), Error(L(268, e)));
  return (e = S2(t)), (e = e === null ? null : e.stateNode), e;
};
dt.flushSync = function (e) {
  return Cr(e);
};
dt.hydrate = function (e, t, n) {
  if (!Zi(t)) throw Error(L(200));
  return zi(null, e, t, !0, n);
};
dt.hydrateRoot = function (e, t, n) {
  if (!P0(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    a = !1,
    o = '',
    i = nm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = tm(t, null, e, 1, n ?? null, a, !1, o, i)),
    (e[xn] = t.current),
    ho(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (a = n._getVersion),
        (a = a(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, a])
          : t.mutableSourceEagerHydrationData.push(n, a);
  return new Hi(t);
};
dt.render = function (e, t, n) {
  if (!Zi(t)) throw Error(L(200));
  return zi(null, e, t, !1, n);
};
dt.unmountComponentAtNode = function (e) {
  if (!Zi(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Cr(function () {
        zi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xn] = null);
        });
      }),
      !0)
    : !1;
};
dt.unstable_batchedUpdates = R0;
dt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Zi(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return zi(e, t, n, !1, r);
};
dt.version = '18.2.0-next-9e3b772b8-20220608';
function rm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm);
    } catch (e) {
      console.error(e);
    }
}
rm(), (t2.exports = dt);
var N0 = t2.exports;
const Y3 = ba(N0);
var ap = N0;
(bs.createRoot = ap.createRoot), (bs.hydrateRoot = ap.hydrateRoot);
var bi = new Map(),
  X3 = ({ callback: e, children: t }) => {
    let n = k.useRef();
    return (
      k.useLayoutEffect(() => {
        n.current !== e && ((n.current = e), e());
      }, [e]),
      t
    );
  },
  Q3 = async (e, t) => {
    let n = await e4(t);
    return new Promise((r) => {
      n.render(l.createElement(X3, { callback: () => r(null) }, e));
    });
  },
  J3 = (e, t) => {
    let n = bi.get(e);
    n && (n.unmount(), bi.delete(e));
  },
  e4 = async (e) => {
    let t = bi.get(e);
    return t || ((t = bs.createRoot(e)), bi.set(e, t)), t;
  },
  Pt = (e) => `control-${e.replace(/\s+/g, '-')}`,
  Vi = (e) => `set-${e.replace(/\s+/g, '-')}`;
const { logger: t4 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var n4 = Object.create,
  am = Object.defineProperty,
  r4 = Object.getOwnPropertyDescriptor,
  om = Object.getOwnPropertyNames,
  a4 = Object.getPrototypeOf,
  o4 = Object.prototype.hasOwnProperty,
  j0 = (e, t) =>
    function () {
      return t || (0, e[om(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  l4 = (e, t, n, r) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of om(t))
        !o4.call(e, a) &&
          a !== n &&
          am(e, a, {
            get: () => t[a],
            enumerable: !(r = r4(t, a)) || r.enumerable
          });
    return e;
  },
  lm = (e, t, n) => (
    (n = e != null ? n4(a4(e)) : {}),
    l4(
      t || !e || !e.__esModule
        ? am(n, 'default', { value: e, enumerable: !0 })
        : n,
      e
    )
  );
function Xn() {
  return (
    (Xn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xn.apply(this, arguments)
  );
}
function i4(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Co(e, t) {
  return (
    (Co = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Co(e, t)
  );
}
function u4(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Co(e, t);
}
function pc(e) {
  return (
    (pc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    pc(e)
  );
}
function s4(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1;
}
function c4() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Bl(e, t, n) {
  return (
    c4()
      ? (Bl = Reflect.construct.bind())
      : (Bl = function (r, a, o) {
          var i = [null];
          i.push.apply(i, a);
          var s = Function.bind.apply(r, i),
            u = new s();
          return o && Co(u, o.prototype), u;
        }),
    Bl.apply(null, arguments)
  );
}
function fc(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (fc = function (n) {
      if (n === null || !s4(n)) return n;
      if (typeof n != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (typeof t < 'u') {
        if (t.has(n)) return t.get(n);
        t.set(n, r);
      }
      function r() {
        return Bl(n, arguments, pc(this).constructor);
      }
      return (
        (r.prototype = Object.create(n.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
        Co(r, n)
      );
    }),
    fc(e)
  );
}
var d4 = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: 'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
  22: 'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function p4() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0],
    a = [],
    o;
  for (o = 1; o < t.length; o += 1) a.push(t[o]);
  return (
    a.forEach(function (i) {
      r = r.replace(/%[a-z]/, i);
    }),
    r
  );
}
var en = (function (e) {
  u4(t, e);
  function t(n) {
    for (
      var r, a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1;
      i < a;
      i++
    )
      o[i - 1] = arguments[i];
    return (
      (r = e.call(this, p4.apply(void 0, [d4[n]].concat(o))) || this), i4(r)
    );
  }
  return t;
})(fc(Error));
function Uu(e) {
  return Math.round(e * 255);
}
function f4(e, t, n) {
  return Uu(e) + ',' + Uu(t) + ',' + Uu(n);
}
function ko(e, t, n, r) {
  if ((r === void 0 && (r = f4), t === 0)) return r(n, n, n);
  var a = (((e % 360) + 360) % 360) / 60,
    o = (1 - Math.abs(2 * n - 1)) * t,
    i = o * (1 - Math.abs((a % 2) - 1)),
    s = 0,
    u = 0,
    c = 0;
  a >= 0 && a < 1
    ? ((s = o), (u = i))
    : a >= 1 && a < 2
    ? ((s = i), (u = o))
    : a >= 2 && a < 3
    ? ((u = o), (c = i))
    : a >= 3 && a < 4
    ? ((u = i), (c = o))
    : a >= 4 && a < 5
    ? ((s = i), (c = o))
    : a >= 5 && a < 6 && ((s = o), (c = i));
  var d = n - o / 2,
    g = s + d,
    f = u + d,
    p = c + d;
  return r(g, f, p);
}
var op = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
function m4(e) {
  if (typeof e != 'string') return e;
  var t = e.toLowerCase();
  return op[t] ? '#' + op[t] : e;
}
var g4 = /^#[a-fA-F0-9]{6}$/,
  h4 = /^#[a-fA-F0-9]{8}$/,
  y4 = /^#[a-fA-F0-9]{3}$/,
  v4 = /^#[a-fA-F0-9]{4}$/,
  qu = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  b4 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  E4 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  x4 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Ui(e) {
  if (typeof e != 'string') throw new en(3);
  var t = m4(e);
  if (t.match(g4))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16)
    };
  if (t.match(h4)) {
    var n = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(y4))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16)
    };
  if (t.match(v4)) {
    var r = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: r
    };
  }
  var a = qu.exec(t);
  if (a)
    return {
      red: parseInt('' + a[1], 10),
      green: parseInt('' + a[2], 10),
      blue: parseInt('' + a[3], 10)
    };
  var o = b4.exec(t.substring(0, 50));
  if (o)
    return {
      red: parseInt('' + o[1], 10),
      green: parseInt('' + o[2], 10),
      blue: parseInt('' + o[3], 10),
      alpha:
        parseFloat('' + o[4]) > 1
          ? parseFloat('' + o[4]) / 100
          : parseFloat('' + o[4])
    };
  var i = E4.exec(t);
  if (i) {
    var s = parseInt('' + i[1], 10),
      u = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + ko(s, u, c) + ')',
      g = qu.exec(d);
    if (!g) throw new en(4, t, d);
    return {
      red: parseInt('' + g[1], 10),
      green: parseInt('' + g[2], 10),
      blue: parseInt('' + g[3], 10)
    };
  }
  var f = x4.exec(t.substring(0, 50));
  if (f) {
    var p = parseInt('' + f[1], 10),
      h = parseInt('' + f[2], 10) / 100,
      m = parseInt('' + f[3], 10) / 100,
      w = 'rgb(' + ko(p, h, m) + ')',
      y = qu.exec(w);
    if (!y) throw new en(4, t, w);
    return {
      red: parseInt('' + y[1], 10),
      green: parseInt('' + y[2], 10),
      blue: parseInt('' + y[3], 10),
      alpha:
        parseFloat('' + f[4]) > 1
          ? parseFloat('' + f[4]) / 100
          : parseFloat('' + f[4])
    };
  }
  throw new en(5);
}
function w4(e) {
  var t = e.red / 255,
    n = e.green / 255,
    r = e.blue / 255,
    a = Math.max(t, n, r),
    o = Math.min(t, n, r),
    i = (a + o) / 2;
  if (a === o)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var s,
    u = a - o,
    c = i > 0.5 ? u / (2 - a - o) : u / (a + o);
  switch (a) {
    case t:
      s = (n - r) / u + (n < r ? 6 : 0);
      break;
    case n:
      s = (r - t) / u + 2;
      break;
    default:
      s = (t - n) / u + 4;
      break;
  }
  return (
    (s *= 60),
    e.alpha !== void 0
      ? { hue: s, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: s, saturation: c, lightness: i }
  );
}
function im(e) {
  return w4(Ui(e));
}
var S4 = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? '#' + e[1] + e[3] + e[5]
      : e;
  },
  mc = S4;
function sr(e) {
  var t = e.toString(16);
  return t.length === 1 ? '0' + t : t;
}
function Wu(e) {
  return sr(Math.round(e * 255));
}
function A4(e, t, n) {
  return mc('#' + Wu(e) + Wu(t) + Wu(n));
}
function Ei(e, t, n) {
  return ko(e, t, n, A4);
}
function C4(e, t, n) {
  if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number')
    return Ei(e, t, n);
  if (typeof e == 'object' && t === void 0 && n === void 0)
    return Ei(e.hue, e.saturation, e.lightness);
  throw new en(1);
}
function k4(e, t, n, r) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof n == 'number' &&
    typeof r == 'number'
  )
    return r >= 1 ? Ei(e, t, n) : 'rgba(' + ko(e, t, n) + ',' + r + ')';
  if (typeof e == 'object' && t === void 0 && n === void 0 && r === void 0)
    return e.alpha >= 1
      ? Ei(e.hue, e.saturation, e.lightness)
      : 'rgba(' + ko(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
  throw new en(2);
}
function gc(e, t, n) {
  if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number')
    return mc('#' + sr(e) + sr(t) + sr(n));
  if (typeof e == 'object' && t === void 0 && n === void 0)
    return mc('#' + sr(e.red) + sr(e.green) + sr(e.blue));
  throw new en(6);
}
function _o(e, t, n, r) {
  if (typeof e == 'string' && typeof t == 'number') {
    var a = Ui(e);
    return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof n == 'number' &&
      typeof r == 'number'
    )
      return r >= 1
        ? gc(e, t, n)
        : 'rgba(' + e + ',' + t + ',' + n + ',' + r + ')';
    if (typeof e == 'object' && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1
        ? gc(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
  }
  throw new en(7);
}
var _4 = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    );
  },
  F4 = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      typeof e.alpha == 'number'
    );
  },
  T4 = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    );
  },
  O4 = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      typeof e.alpha == 'number'
    );
  };
function um(e) {
  if (typeof e != 'object') throw new en(8);
  if (F4(e)) return _o(e);
  if (_4(e)) return gc(e);
  if (O4(e)) return k4(e);
  if (T4(e)) return C4(e);
  throw new en(8);
}
function sm(e, t, n) {
  return function () {
    var r = n.concat(Array.prototype.slice.call(arguments));
    return r.length >= t ? e.apply(this, r) : sm(e, t, r);
  };
}
function qi(e) {
  return sm(e, e.length, []);
}
function Wi(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function R4(e, t) {
  if (t === 'transparent') return t;
  var n = im(t);
  return um(Xn({}, n, { lightness: Wi(0, 1, n.lightness - parseFloat(e)) }));
}
var D4 = qi(R4),
  L4 = D4;
function M4(e, t) {
  if (t === 'transparent') return t;
  var n = im(t);
  return um(Xn({}, n, { lightness: Wi(0, 1, n.lightness + parseFloat(e)) }));
}
var $4 = qi(M4),
  B4 = $4;
function I4(e, t) {
  if (t === 'transparent') return t;
  var n = Ui(t),
    r = typeof n.alpha == 'number' ? n.alpha : 1,
    a = Xn({}, n, { alpha: Wi(0, 1, (r * 100 + parseFloat(e) * 100) / 100) });
  return _o(a);
}
var P4 = qi(I4),
  N4 = P4;
function j4(e, t) {
  if (t === 'transparent') return t;
  var n = Ui(t),
    r = typeof n.alpha == 'number' ? n.alpha : 1,
    a = Xn({}, n, {
      alpha: Wi(0, 1, +(r * 100 - parseFloat(e) * 100).toFixed(2) / 100)
    });
  return _o(a);
}
var H4 = qi(j4),
  Z4 = H4,
  q = {
    primary: '#FF4785',
    secondary: '#029CFD',
    tertiary: '#FAFBFC',
    ancillary: '#22a699',
    orange: '#FC521F',
    gold: '#FFAE00',
    green: '#66BF3C',
    seafoam: '#37D5D3',
    purple: '#6F2CAC',
    ultraviolet: '#2A0481',
    lightest: '#FFFFFF',
    lighter: '#F7FAFC',
    light: '#EEF3F6',
    mediumlight: '#ECF4F9',
    medium: '#D9E8F2',
    mediumdark: '#73828C',
    dark: '#5C6870',
    darker: '#454E54',
    darkest: '#2E3438',
    border: 'hsla(203, 50%, 30%, 0.15)',
    positive: '#66BF3C',
    negative: '#FF4400',
    warning: '#E69D00',
    critical: '#FFFFFF',
    defaultText: '#2E3438',
    inverseText: '#FFFFFF',
    positiveText: '#448028',
    negativeText: '#D43900',
    warningText: '#A15C20'
  },
  Mn = {
    app: '#F6F9FC',
    bar: q.lightest,
    content: q.lightest,
    gridCellSize: 10,
    hoverable: Z4(0.93, q.secondary),
    positive: '#E1FFD4',
    negative: '#FEDED2',
    warning: '#FFF5CF',
    critical: '#FF4400'
  },
  Nn = {
    fonts: {
      base: [
        '"Nunito Sans"',
        '-apple-system',
        '".SFNSText-Regular"',
        '"San Francisco"',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Helvetica',
        'Arial',
        'sans-serif'
      ].join(', '),
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Droid Sans Mono"',
        '"Courier New"',
        'monospace'
      ].join(', ')
    },
    weight: { regular: 400, bold: 700 },
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
      code: 90
    }
  },
  z4 = {
    base: 'light',
    colorPrimary: '#FF4785',
    colorSecondary: '#029CFD',
    appBg: Mn.app,
    appContentBg: q.lightest,
    appBorderColor: q.border,
    appBorderRadius: 4,
    fontBase: Nn.fonts.base,
    fontCode: Nn.fonts.mono,
    textColor: q.darkest,
    textInverseColor: q.lightest,
    textMutedColor: q.mediumdark,
    barTextColor: q.mediumdark,
    barSelectedColor: q.secondary,
    barBg: q.lightest,
    buttonBg: Mn.app,
    buttonBorder: q.medium,
    booleanBg: q.mediumlight,
    booleanSelectedBg: q.lightest,
    inputBg: q.lightest,
    inputBorder: q.border,
    inputTextColor: q.darkest,
    inputBorderRadius: 4
  },
  xi = z4,
  V4 = {
    base: 'dark',
    colorPrimary: '#FF4785',
    colorSecondary: '#029CFD',
    appBg: '#222425',
    appContentBg: '#1B1C1D',
    appBorderColor: 'rgba(255,255,255,.1)',
    appBorderRadius: 4,
    fontBase: Nn.fonts.base,
    fontCode: Nn.fonts.mono,
    textColor: '#C9CDCF',
    textInverseColor: '#222425',
    textMutedColor: '#798186',
    barTextColor: '#798186',
    barSelectedColor: q.secondary,
    barBg: '#292C2E',
    buttonBg: '#222425',
    buttonBorder: 'rgba(255,255,255,.1)',
    booleanBg: '#222425',
    booleanSelectedBg: '#2E3438',
    inputBg: '#1B1C1D',
    inputBorder: 'rgba(255,255,255,.1)',
    inputTextColor: q.lightest,
    inputBorderRadius: 4
  },
  U4 = V4,
  { window: Gu } = Pe,
  q4 = (e) => ({ color: e }),
  W4 = (e) =>
    typeof e != 'string'
      ? (t4.warn(
          `Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`
        ),
        !1)
      : !0,
  G4 = (e) => !/(gradient|var|calc)/.test(e),
  K4 = (e, t) =>
    e === 'darken'
      ? _o(`${L4(1, t)}`, 0.95)
      : e === 'lighten'
      ? _o(`${B4(1, t)}`, 0.95)
      : t,
  Y4 = (e) => (t) => {
    if (!W4(t) || !G4(t)) return t;
    try {
      return K4(e, t);
    } catch {
      return t;
    }
  },
  Ka = Y4('lighten'),
  cm = () =>
    !Gu || !Gu.matchMedia
      ? 'light'
      : Gu.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  hc = { light: xi, dark: U4, normal: xi };
cm();
var X4 = function (t) {
    return t();
  },
  dm = Qd['useInsertionEffect'] ? Qd['useInsertionEffect'] : !1,
  H0 = dm || X4,
  lp = dm || k.useLayoutEffect;
function yl(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var pm = { exports: {} };
(function (e, t) {
  (function (n) {
    e.exports = n();
  })(function () {
    return (function n(r, a, o) {
      function i(c, d) {
        if (!a[c]) {
          if (!r[c]) {
            var g = typeof yl == 'function' && yl;
            if (!d && g) return g(c, !0);
            if (s) return s(c, !0);
            var f = new Error("Cannot find module '" + c + "'");
            throw ((f.code = 'MODULE_NOT_FOUND'), f);
          }
          var p = (a[c] = { exports: {} });
          r[c][0].call(
            p.exports,
            function (h) {
              var m = r[c][1][h];
              return i(m || h);
            },
            p,
            p.exports,
            n,
            r,
            a,
            o
          );
        }
        return a[c].exports;
      }
      for (var s = typeof yl == 'function' && yl, u = 0; u < o.length; u++)
        i(o[u]);
      return i;
    })(
      {
        1: [
          function (n, r, a) {
            r.exports = function (o) {
              if (typeof Map != 'function' || o) {
                var i = n('./similar');
                return new i();
              } else return new Map();
            };
          },
          { './similar': 2 }
        ],
        2: [
          function (n, r, a) {
            function o() {
              return (
                (this.list = []),
                (this.lastItem = void 0),
                (this.size = 0),
                this
              );
            }
            (o.prototype.get = function (i) {
              var s;
              if (this.lastItem && this.isEqual(this.lastItem.key, i))
                return this.lastItem.val;
              if (((s = this.indexOf(i)), s >= 0))
                return (this.lastItem = this.list[s]), this.list[s].val;
            }),
              (o.prototype.set = function (i, s) {
                var u;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? ((this.lastItem.val = s), this)
                  : ((u = this.indexOf(i)),
                    u >= 0
                      ? ((this.lastItem = this.list[u]),
                        (this.list[u].val = s),
                        this)
                      : ((this.lastItem = { key: i, val: s }),
                        this.list.push(this.lastItem),
                        this.size++,
                        this));
              }),
              (o.prototype.delete = function (i) {
                var s;
                if (
                  (this.lastItem &&
                    this.isEqual(this.lastItem.key, i) &&
                    (this.lastItem = void 0),
                  (s = this.indexOf(i)),
                  s >= 0)
                )
                  return this.size--, this.list.splice(s, 1)[0];
              }),
              (o.prototype.has = function (i) {
                var s;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? !0
                  : ((s = this.indexOf(i)),
                    s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
              }),
              (o.prototype.forEach = function (i, s) {
                var u;
                for (u = 0; u < this.size; u++)
                  i.call(s || this, this.list[u].val, this.list[u].key, this);
              }),
              (o.prototype.indexOf = function (i) {
                var s;
                for (s = 0; s < this.size; s++)
                  if (this.isEqual(this.list[s].key, i)) return s;
                return -1;
              }),
              (o.prototype.isEqual = function (i, s) {
                return i === s || (i !== i && s !== s);
              }),
              (r.exports = o);
          },
          {}
        ],
        3: [
          function (n, r, a) {
            var o = n('map-or-similar');
            r.exports = function (c) {
              var d = new o(!1),
                g = [];
              return function (f) {
                var p = function () {
                  var h = d,
                    m,
                    w,
                    y = arguments.length - 1,
                    b = Array(y + 1),
                    v = !0,
                    E;
                  if ((p.numArgs || p.numArgs === 0) && p.numArgs !== y + 1)
                    throw new Error(
                      'Memoizerific functions should always be called with the same number of arguments'
                    );
                  for (E = 0; E < y; E++) {
                    if (
                      ((b[E] = { cacheItem: h, arg: arguments[E] }),
                      h.has(arguments[E]))
                    ) {
                      h = h.get(arguments[E]);
                      continue;
                    }
                    (v = !1), (m = new o(!1)), h.set(arguments[E], m), (h = m);
                  }
                  return (
                    v &&
                      (h.has(arguments[y])
                        ? (w = h.get(arguments[y]))
                        : (v = !1)),
                    v ||
                      ((w = f.apply(null, arguments)), h.set(arguments[y], w)),
                    c > 0 &&
                      ((b[y] = { cacheItem: h, arg: arguments[y] }),
                      v ? i(g, b) : g.push(b),
                      g.length > c && s(g.shift())),
                    (p.wasMemoized = v),
                    (p.numArgs = y + 1),
                    w
                  );
                };
                return (
                  (p.limit = c),
                  (p.wasMemoized = !1),
                  (p.cache = d),
                  (p.lru = g),
                  p
                );
              };
            };
            function i(c, d) {
              var g = c.length,
                f = d.length,
                p,
                h,
                m;
              for (h = 0; h < g; h++) {
                for (p = !0, m = 0; m < f; m++)
                  if (!u(c[h][m].arg, d[m].arg)) {
                    p = !1;
                    break;
                  }
                if (p) break;
              }
              c.push(c.splice(h, 1)[0]);
            }
            function s(c) {
              var d = c.length,
                g = c[d - 1],
                f,
                p;
              for (
                g.cacheItem.delete(g.arg), p = d - 2;
                p >= 0 &&
                ((g = c[p]), (f = g.cacheItem.get(g.arg)), !f || !f.size);
                p--
              )
                g.cacheItem.delete(g.arg);
            }
            function u(c, d) {
              return c === d || (c !== c && d !== d);
            }
          },
          { 'map-or-similar': 1 }
        ]
      },
      {},
      [3]
    )(3);
  });
})(pm);
var Q4 = pm.exports;
const Tr = ba(Q4),
  { logger: J4 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var e7 = j0({
    '../../node_modules/react-is/cjs/react-is.development.js'(e) {
      (function () {
        var t = typeof Symbol == 'function' && Symbol.for,
          n = t ? Symbol.for('react.element') : 60103,
          r = t ? Symbol.for('react.portal') : 60106,
          a = t ? Symbol.for('react.fragment') : 60107,
          o = t ? Symbol.for('react.strict_mode') : 60108,
          i = t ? Symbol.for('react.profiler') : 60114,
          s = t ? Symbol.for('react.provider') : 60109,
          u = t ? Symbol.for('react.context') : 60110,
          c = t ? Symbol.for('react.async_mode') : 60111,
          d = t ? Symbol.for('react.concurrent_mode') : 60111,
          g = t ? Symbol.for('react.forward_ref') : 60112,
          f = t ? Symbol.for('react.suspense') : 60113,
          p = t ? Symbol.for('react.suspense_list') : 60120,
          h = t ? Symbol.for('react.memo') : 60115,
          m = t ? Symbol.for('react.lazy') : 60116,
          w = t ? Symbol.for('react.block') : 60121,
          y = t ? Symbol.for('react.fundamental') : 60117,
          b = t ? Symbol.for('react.responder') : 60118,
          v = t ? Symbol.for('react.scope') : 60119;
        function E(H) {
          return (
            typeof H == 'string' ||
            typeof H == 'function' ||
            H === a ||
            H === d ||
            H === i ||
            H === o ||
            H === f ||
            H === p ||
            (typeof H == 'object' &&
              H !== null &&
              (H.$$typeof === m ||
                H.$$typeof === h ||
                H.$$typeof === s ||
                H.$$typeof === u ||
                H.$$typeof === g ||
                H.$$typeof === y ||
                H.$$typeof === b ||
                H.$$typeof === v ||
                H.$$typeof === w))
          );
        }
        function x(H) {
          if (typeof H == 'object' && H !== null) {
            var Ft = H.$$typeof;
            switch (Ft) {
              case n:
                var jt = H.type;
                switch (jt) {
                  case c:
                  case d:
                  case a:
                  case i:
                  case o:
                  case f:
                    return jt;
                  default:
                    var rr = jt && jt.$$typeof;
                    switch (rr) {
                      case u:
                      case g:
                      case m:
                      case h:
                      case s:
                        return rr;
                      default:
                        return Ft;
                    }
                }
              case r:
                return Ft;
            }
          }
        }
        var S = c,
          A = d,
          C = u,
          T = s,
          _ = n,
          O = g,
          B = a,
          M = m,
          Z = h,
          I = r,
          P = i,
          z = o,
          R = f,
          D = !1;
        function $(H) {
          return (
            D ||
              ((D = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
              )),
            V(H) || x(H) === c
          );
        }
        function V(H) {
          return x(H) === d;
        }
        function G(H) {
          return x(H) === u;
        }
        function Q(H) {
          return x(H) === s;
        }
        function J(H) {
          return typeof H == 'object' && H !== null && H.$$typeof === n;
        }
        function j(H) {
          return x(H) === g;
        }
        function W(H) {
          return x(H) === a;
        }
        function K(H) {
          return x(H) === m;
        }
        function Se(H) {
          return x(H) === h;
        }
        function je(H) {
          return x(H) === r;
        }
        function cn(H) {
          return x(H) === i;
        }
        function gt(H) {
          return x(H) === o;
        }
        function Nt(H) {
          return x(H) === f;
        }
        (e.AsyncMode = S),
          (e.ConcurrentMode = A),
          (e.ContextConsumer = C),
          (e.ContextProvider = T),
          (e.Element = _),
          (e.ForwardRef = O),
          (e.Fragment = B),
          (e.Lazy = M),
          (e.Memo = Z),
          (e.Portal = I),
          (e.Profiler = P),
          (e.StrictMode = z),
          (e.Suspense = R),
          (e.isAsyncMode = $),
          (e.isConcurrentMode = V),
          (e.isContextConsumer = G),
          (e.isContextProvider = Q),
          (e.isElement = J),
          (e.isForwardRef = j),
          (e.isFragment = W),
          (e.isLazy = K),
          (e.isMemo = Se),
          (e.isPortal = je),
          (e.isProfiler = cn),
          (e.isStrictMode = gt),
          (e.isSuspense = Nt),
          (e.isValidElementType = E),
          (e.typeOf = x);
      })();
    }
  }),
  t7 = j0({
    '../../node_modules/react-is/index.js'(e, t) {
      t.exports = e7();
    }
  }),
  fm = j0({
    '../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'(
      e,
      t
    ) {
      var n = t7(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};
      (s[n.ForwardRef] = o), (s[n.Memo] = i);
      function u(w) {
        return n.isMemo(w) ? i : s[w.$$typeof] || r;
      }
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        g = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      function m(w, y, b) {
        if (typeof y != 'string') {
          if (h) {
            var v = p(y);
            v && v !== h && m(w, v, b);
          }
          var E = d(y);
          g && (E = E.concat(g(y)));
          for (var x = u(w), S = u(y), A = 0; A < E.length; ++A) {
            var C = E[A];
            if (!a[C] && !(b && b[C]) && !(S && S[C]) && !(x && x[C])) {
              var T = f(y, C);
              try {
                c(w, C, T);
              } catch {}
            }
          }
        }
        return w;
      }
      t.exports = m;
    }
  });
function n7(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var mm = n7,
  r7 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  a7 = mm(function (e) {
    return (
      r7.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  Z0 = a7;
function o7(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function l7(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var i7 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (a) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(a, o),
          r.tags.push(a);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !1 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(l7(this));
        var r = this.tags[this.tags.length - 1],
          a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
        if (
          (a &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                n +
                '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.'
            ),
          (this._alreadyInsertedOrderInsensitiveRule =
            this._alreadyInsertedOrderInsensitiveRule || !a),
          this.isSpeedy)
        ) {
          var o = o7(r);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch (i) {
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              n
            ) ||
              console.error(
                'There was a problem inserting the following rule: "' + n + '"',
                i
              );
          }
        } else r.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      e
    );
  })(),
  Be = '-ms-',
  wi = '-moz-',
  te = '-webkit-',
  z0 = 'comm',
  V0 = 'rule',
  U0 = 'decl',
  u7 = '@import',
  gm = '@keyframes',
  s7 = Math.abs,
  Gi = String.fromCharCode,
  c7 = Object.assign;
function d7(e, t) {
  return Te(e, 0) ^ 45
    ? (((((((t << 2) ^ Te(e, 0)) << 2) ^ Te(e, 1)) << 2) ^ Te(e, 2)) << 2) ^
        Te(e, 3)
    : 0;
}
function hm(e) {
  return e.trim();
}
function p7(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, n) {
  return e.replace(t, n);
}
function yc(e, t) {
  return e.indexOf(t);
}
function Te(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fo(e, t, n) {
  return e.slice(t, n);
}
function Yt(e) {
  return e.length;
}
function q0(e) {
  return e.length;
}
function vl(e, t) {
  return t.push(e), e;
}
function f7(e, t) {
  return e.map(t).join('');
}
var Ki = 1,
  da = 1,
  ym = 0,
  at = 0,
  ve = 0,
  Sa = '';
function Yi(e, t, n, r, a, o, i) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: a,
    children: o,
    line: Ki,
    column: da,
    length: i,
    return: ''
  };
}
function ja(e, t) {
  return c7(Yi('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function m7() {
  return ve;
}
function g7() {
  return (
    (ve = at > 0 ? Te(Sa, --at) : 0), da--, ve === 10 && ((da = 1), Ki--), ve
  );
}
function ut() {
  return (
    (ve = at < ym ? Te(Sa, at++) : 0), da++, ve === 10 && ((da = 1), Ki++), ve
  );
}
function on() {
  return Te(Sa, at);
}
function Il() {
  return at;
}
function qo(e, t) {
  return Fo(Sa, e, t);
}
function To(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vm(e) {
  return (Ki = da = 1), (ym = Yt((Sa = e))), (at = 0), [];
}
function bm(e) {
  return (Sa = ''), e;
}
function Pl(e) {
  return hm(qo(at - 1, vc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function h7(e) {
  for (; (ve = on()) && ve < 33; ) ut();
  return To(e) > 2 || To(ve) > 3 ? '' : ' ';
}
function y7(e, t) {
  for (
    ;
    --t &&
    ut() &&
    !(ve < 48 || ve > 102 || (ve > 57 && ve < 65) || (ve > 70 && ve < 97));

  );
  return qo(e, Il() + (t < 6 && on() == 32 && ut() == 32));
}
function vc(e) {
  for (; ut(); )
    switch (ve) {
      case e:
        return at;
      case 34:
      case 39:
        e !== 34 && e !== 39 && vc(ve);
        break;
      case 40:
        e === 41 && vc(e);
        break;
      case 92:
        ut();
        break;
    }
  return at;
}
function v7(e, t) {
  for (; ut() && e + ve !== 47 + 10 && !(e + ve === 42 + 42 && on() === 47); );
  return '/*' + qo(t, at - 1) + '*' + Gi(e === 47 ? e : ut());
}
function b7(e) {
  for (; !To(on()); ) ut();
  return qo(e, at);
}
function E7(e) {
  return bm(Nl('', null, null, null, [''], (e = vm(e)), 0, [0], e));
}
function Nl(e, t, n, r, a, o, i, s, u) {
  for (
    var c = 0,
      d = 0,
      g = i,
      f = 0,
      p = 0,
      h = 0,
      m = 1,
      w = 1,
      y = 1,
      b = 0,
      v = '',
      E = a,
      x = o,
      S = r,
      A = v;
    w;

  )
    switch (((h = b), (b = ut()))) {
      case 40:
        if (h != 108 && Te(A, g - 1) == 58) {
          yc((A += ne(Pl(b), '&', '&\f')), '&\f') != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Pl(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += h7(h);
        break;
      case 92:
        A += y7(Il() - 1, 7);
        continue;
      case 47:
        switch (on()) {
          case 42:
          case 47:
            vl(x7(v7(ut(), Il()), t, n), u);
            break;
          default:
            A += '/';
        }
        break;
      case 123 * m:
        s[c++] = Yt(A) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            w = 0;
          case 59 + d:
            p > 0 &&
              Yt(A) - g &&
              vl(
                p > 32
                  ? up(A + ';', r, n, g - 1)
                  : up(ne(A, ' ', '') + ';', r, n, g - 2),
                u
              );
            break;
          case 59:
            A += ';';
          default:
            if (
              (vl((S = ip(A, t, n, c, d, a, s, v, (E = []), (x = []), g)), o),
              b === 123)
            )
              if (d === 0) Nl(A, t, S, S, E, o, g, s, x);
              else
                switch (f === 99 && Te(A, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    Nl(
                      e,
                      S,
                      S,
                      r && vl(ip(e, S, S, 0, 0, a, s, v, a, (E = []), g), x),
                      a,
                      x,
                      g,
                      s,
                      r ? E : x
                    );
                    break;
                  default:
                    Nl(A, S, S, S, [''], x, 0, s, x);
                }
        }
        (c = d = p = 0), (m = y = 1), (v = A = ''), (g = i);
        break;
      case 58:
        (g = 1 + Yt(A)), (p = h);
      default:
        if (m < 1) {
          if (b == 123) --m;
          else if (b == 125 && m++ == 0 && g7() == 125) continue;
        }
        switch (((A += Gi(b)), b * m)) {
          case 38:
            y = d > 0 ? 1 : ((A += '\f'), -1);
            break;
          case 44:
            (s[c++] = (Yt(A) - 1) * y), (y = 1);
            break;
          case 64:
            on() === 45 && (A += Pl(ut())),
              (f = on()),
              (d = g = Yt((v = A += b7(Il())))),
              b++;
            break;
          case 45:
            h === 45 && Yt(A) == 2 && (m = 0);
        }
    }
  return o;
}
function ip(e, t, n, r, a, o, i, s, u, c, d) {
  for (
    var g = a - 1, f = a === 0 ? o : [''], p = q0(f), h = 0, m = 0, w = 0;
    h < r;
    ++h
  )
    for (var y = 0, b = Fo(e, g + 1, (g = s7((m = i[h])))), v = e; y < p; ++y)
      (v = hm(m > 0 ? f[y] + ' ' + b : ne(b, /&\f/g, f[y]))) && (u[w++] = v);
  return Yi(e, t, n, a === 0 ? V0 : s, u, c, d);
}
function x7(e, t, n) {
  return Yi(e, t, n, z0, Gi(m7()), Fo(e, 2, -2), 0);
}
function up(e, t, n, r) {
  return Yi(e, t, n, U0, Fo(e, 0, r), Fo(e, r + 1, -1), r);
}
function ra(e, t) {
  for (var n = '', r = q0(e), a = 0; a < r; a++) n += t(e[a], a, e, t) || '';
  return n;
}
function w7(e, t, n, r) {
  switch (e.type) {
    case u7:
    case U0:
      return (e.return = e.return || e.value);
    case z0:
      return '';
    case gm:
      return (e.return = e.value + '{' + ra(e.children, r) + '}');
    case V0:
      e.value = e.props.join(',');
  }
  return Yt((n = ra(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function S7(e) {
  var t = q0(e);
  return function (n, r, a, o) {
    for (var i = '', s = 0; s < t; s++) i += e[s](n, r, a, o) || '';
    return i;
  };
}
var A7 = function (e) {
    var t = new WeakMap();
    return function (n) {
      if (t.has(n)) return t.get(n);
      var r = e(n);
      return t.set(n, r), r;
    };
  },
  sp = A7,
  C7 = function (e, t, n) {
    for (
      var r = 0, a = 0;
      (r = a), (a = on()), r === 38 && a === 12 && (t[n] = 1), !To(a);

    )
      ut();
    return qo(e, at);
  },
  k7 = function (e, t) {
    var n = -1,
      r = 44;
    do
      switch (To(r)) {
        case 0:
          r === 38 && on() === 12 && (t[n] = 1), (e[n] += C7(at - 1, t, n));
          break;
        case 2:
          e[n] += Pl(r);
          break;
        case 4:
          if (r === 44) {
            (e[++n] = on() === 58 ? '&\f' : ''), (t[n] = e[n].length);
            break;
          }
        default:
          e[n] += Gi(r);
      }
    while ((r = ut()));
    return e;
  },
  _7 = function (e, t) {
    return bm(k7(vm(e), t));
  },
  cp = new WeakMap(),
  F7 = function (e) {
    if (!(e.type !== 'rule' || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          n = e.parent,
          r = e.column === n.column && e.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !cp.get(n)) &&
        !r
      ) {
        cp.set(e, !0);
        for (
          var a = [], o = _7(t, a), i = n.props, s = 0, u = 0;
          s < o.length;
          s++
        )
          for (var c = 0; c < i.length; c++, u++)
            e.props[u] = a[s] ? o[s].replace(/&\f/g, i[c]) : i[c] + ' ' + o[s];
      }
    }
  },
  T7 = function (e) {
    if (e.type === 'decl') {
      var t = e.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ''), (e.value = ''));
    }
  },
  O7 =
    'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
  R7 = function (e) {
    return e.type === 'comm' && e.children.indexOf(O7) > -1;
  },
  D7 = function (e) {
    return function (t, n, r) {
      if (!(t.type !== 'rule' || e.compat)) {
        var a = t.value.match(/(:first|:nth|:nth-last)-child/g);
        if (a) {
          for (
            var o = !!t.parent, i = o ? t.parent.children : r, s = i.length - 1;
            s >= 0;
            s--
          ) {
            var u = i[s];
            if (u.line < t.line) break;
            if (u.column < t.column) {
              if (R7(u)) return;
              break;
            }
          }
          a.forEach(function (c) {
            console.error(
              'The pseudo class "' +
                c +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                c.split('-child')[0] +
                '-of-type".'
            );
          });
        }
      }
    };
  },
  Em = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
  },
  L7 = function (e, t) {
    for (var n = e - 1; n >= 0; n--) if (!Em(t[n])) return !0;
    return !1;
  },
  dp = function (e) {
    (e.type = ''),
      (e.value = ''),
      (e.return = ''),
      (e.children = ''),
      (e.props = '');
  },
  M7 = function (e, t, n) {
    Em(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          dp(e))
        : L7(t, n) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          dp(e)));
  };
function xm(e, t) {
  switch (d7(e, t)) {
    case 5103:
      return te + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + wi + e + Be + e + e;
    case 6828:
    case 4268:
      return te + e + Be + e + e;
    case 6165:
      return te + e + Be + 'flex-' + e + e;
    case 5187:
      return (
        te + e + ne(e, /(\w+).+(:[^]+)/, te + 'box-$1$2' + Be + 'flex-$1$2') + e
      );
    case 5443:
      return te + e + Be + 'flex-item-' + ne(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        te +
        e +
        Be +
        'flex-line-pack' +
        ne(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return te + e + Be + ne(e, 'shrink', 'negative') + e;
    case 5292:
      return te + e + Be + ne(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        te +
        'box-' +
        ne(e, '-grow', '') +
        te +
        e +
        Be +
        ne(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return te + ne(e, /([^-])(transform)/g, '$1' + te + '$2') + e;
    case 6187:
      return (
        ne(
          ne(ne(e, /(zoom-|grab)/, te + '$1'), /(image-set)/, te + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, te + '$1$`$1');
    case 4968:
      return (
        ne(
          ne(e, /(.+:)(flex-)?(.*)/, te + 'box-pack:$3' + Be + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        te +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, te + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Yt(e) - 1 - t > 6)
        switch (Te(e, t + 1)) {
          case 109:
            if (Te(e, t + 4) !== 45) break;
          case 102:
            return (
              ne(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  te +
                  '$2-$3$1' +
                  wi +
                  (Te(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~yc(e, 'stretch')
              ? xm(ne(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (Te(e, t + 1) !== 115) break;
    case 6444:
      switch (Te(e, Yt(e) - 3 - (~yc(e, '!important') && 10))) {
        case 107:
          return ne(e, ':', ':' + te) + e;
        case 101:
          return (
            ne(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                te +
                (Te(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                te +
                '$2$3$1' +
                Be +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (Te(e, t + 11)) {
        case 114:
          return te + e + Be + ne(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return te + e + Be + ne(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return te + e + Be + ne(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return te + e + Be + e + e;
  }
  return e;
}
var $7 = function (e, t, n, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case U0:
          e.return = xm(e.value, e.length);
          break;
        case gm:
          return ra([ja(e, { value: ne(e.value, '@', '@' + te) })], r);
        case V0:
          if (e.length)
            return f7(e.props, function (a) {
              switch (p7(a, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return ra(
                    [ja(e, { props: [ne(a, /:(read-\w+)/, ':' + wi + '$1')] })],
                    r
                  );
                case '::placeholder':
                  return ra(
                    [
                      ja(e, {
                        props: [ne(a, /:(plac\w+)/, ':' + te + 'input-$1')]
                      }),
                      ja(e, { props: [ne(a, /:(plac\w+)/, ':' + wi + '$1')] }),
                      ja(e, { props: [ne(a, /:(plac\w+)/, Be + 'input-$1')] })
                    ],
                    r
                  );
              }
              return '';
            });
      }
  },
  B7 = [$7],
  I7 = function (e) {
    var t = e.key;
    if (!t)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
    if (t === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (h) {
        var m = h.getAttribute('data-emotion');
        m.indexOf(' ') !== -1 &&
          (document.head.appendChild(h), h.setAttribute('data-s', ''));
      });
    }
    var r = e.stylisPlugins || B7;
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          t +
          '" was passed'
      );
    var a = {},
      o,
      i = [];
    (o = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (h) {
          for (
            var m = h.getAttribute('data-emotion').split(' '), w = 1;
            w < m.length;
            w++
          )
            a[m[w]] = !0;
          i.push(h);
        }
      );
    var s,
      u = [F7, T7];
    u.push(
      D7({
        get compat() {
          return p.compat;
        }
      }),
      M7
    );
    {
      var c,
        d = [
          w7,
          function (h) {
            h.root ||
              (h.return
                ? c.insert(h.return)
                : h.value && h.type !== z0 && c.insert(h.value + '{}'));
          }
        ],
        g = S7(u.concat(r, d)),
        f = function (h) {
          return ra(E7(h), g);
        };
      s = function (h, m, w, y) {
        (c = w),
          m.map !== void 0 &&
            (c = {
              insert: function (b) {
                w.insert(b + m.map);
              }
            }),
          f(h ? h + '{' + m.styles + '}' : m.styles),
          y && (p.inserted[m.name] = !0);
      };
    }
    var p = {
      key: t,
      sheet: new i7({
        key: t,
        container: o,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint
      }),
      nonce: e.nonce,
      inserted: a,
      registered: {},
      insert: s
    };
    return p.sheet.hydrate(i), p;
  },
  P7 = I7;
lm(fm());
var N7 = !0;
function W0(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ';') : (r += a + ' ');
    }),
    r
  );
}
var Xi = function (e, t, n) {
    var r = e.key + '-' + t.name;
    (n === !1 || N7 === !1) &&
      e.registered[r] === void 0 &&
      (e.registered[r] = t.styles);
  },
  Qi = function (e, t, n) {
    Xi(e, t, n);
    var r = e.key + '-' + t.name;
    if (e.inserted[t.name] === void 0) {
      var a = t;
      do e.insert(t === a ? '.' + r : '', a, e.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function j7(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var H7 = j7,
  Z7 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  z7 = Z7,
  pp = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  V7 =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  U7 = /[A-Z]|^ms/g,
  wm = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  G0 = function (e) {
    return e.charCodeAt(1) === 45;
  },
  fp = function (e) {
    return e != null && typeof e != 'boolean';
  },
  Ku = mm(function (e) {
    return G0(e) ? e : e.replace(U7, '-$&').toLowerCase();
  }),
  Si = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if (typeof t == 'string')
          return t.replace(wm, function (n, r, a) {
            return (Xt = { name: r, styles: a, next: Xt }), r;
          });
    }
    return z7[e] !== 1 && !G0(e) && typeof t == 'number' && t !== 0
      ? t + 'px'
      : t;
  };
(mp =
  /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (gp = ['normal', 'none', 'initial', 'inherit', 'unset']),
  (hp = Si),
  (yp = /^-ms-/),
  (vp = /-(.)/g),
  (Yu = {}),
  (Si = function (e, t) {
    if (
      e === 'content' &&
      (typeof t != 'string' ||
        (gp.indexOf(t) === -1 &&
          !mp.test(t) &&
          (t.charAt(0) !== t.charAt(t.length - 1) ||
            (t.charAt(0) !== '"' && t.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          t +
          '"\'`'
      );
    var n = hp(e, t);
    return (
      n !== '' &&
        !G0(e) &&
        e.indexOf('-') !== -1 &&
        Yu[e] === void 0 &&
        ((Yu[e] = !0),
        console.error(
          'Using kebab-case for css properties in objects is not supported. Did you mean ' +
            e.replace(yp, 'ms-').replace(vp, function (r, a) {
              return a.toUpperCase();
            }) +
            '?'
        )),
      n
    );
  });
var mp,
  gp,
  hp,
  yp,
  vp,
  Yu,
  Sm =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function Oo(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) {
    if (n.toString() === 'NO_COMPONENT_SELECTOR') throw new Error(Sm);
    return n;
  }
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (Xt = { name: n.name, styles: n.styles, next: Xt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Xt = { name: r.name, styles: r.styles, next: Xt }), (r = r.next);
        var a = n.styles + ';';
        return n.map !== void 0 && (a += n.map), a;
      }
      return q7(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var o = Xt,
          i = n(e);
        return (Xt = o), Oo(e, t, i);
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        );
      break;
    }
    case 'string':
      var s = [],
        u = n.replace(wm, function (d, g, f) {
          var p = 'animation' + s.length;
          return (
            s.push(
              'const ' +
                p +
                ' = keyframes`' +
                f.replace(/^@keyframes animation-\w+/, '') +
                '`'
            ),
            '${' + p + '}'
          );
        });
      s.length &&
        console.error(
          '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
            [].concat(s, ['`' + u + '`']).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ('css`' + u + '`')
        );
      break;
  }
  if (t == null) return n;
  var c = t[n];
  return c !== void 0 ? c : n;
}
function q7(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var a = 0; a < n.length; a++) r += Oo(e, t, n[a]) + ';';
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != 'object')
        t != null && t[i] !== void 0
          ? (r += o + '{' + t[i] + '}')
          : fp(i) && (r += Ku(o) + ':' + Si(o, i) + ';');
      else {
        if (o === 'NO_COMPONENT_SELECTOR') throw new Error(Sm);
        if (
          Array.isArray(i) &&
          typeof i[0] == 'string' &&
          (t == null || t[i[0]] === void 0)
        )
          for (var s = 0; s < i.length; s++)
            fp(i[s]) && (r += Ku(o) + ':' + Si(o, i[s]) + ';');
        else {
          var u = Oo(e, t, i);
          switch (o) {
            case 'animation':
            case 'animationName': {
              r += Ku(o) + ':' + u + ';';
              break;
            }
            default:
              o === 'undefined' && console.error(V7), (r += o + '{' + u + '}');
          }
        }
      }
    }
  return r;
}
var bp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Am;
Am = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Xt,
  pa = function (e, t, n) {
    if (
      e.length === 1 &&
      typeof e[0] == 'object' &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var r = !0,
      a = '';
    Xt = void 0;
    var o = e[0];
    o == null || o.raw === void 0
      ? ((r = !1), (a += Oo(n, t, o)))
      : (o[0] === void 0 && console.error(pp), (a += o[0]));
    for (var i = 1; i < e.length; i++)
      (a += Oo(n, t, e[i])),
        r && (o[i] === void 0 && console.error(pp), (a += o[i]));
    var s;
    (a = a.replace(Am, function (g) {
      return (s = g), '';
    })),
      (bp.lastIndex = 0);
    for (var u = '', c; (c = bp.exec(a)) !== null; ) u += '-' + c[1];
    var d = H7(a) + u;
    return {
      name: d,
      styles: a,
      map: s,
      next: Xt,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  },
  W7 = {}.hasOwnProperty,
  K0 = k.createContext(typeof HTMLElement < 'u' ? P7({ key: 'css' }) : null);
K0.displayName = 'EmotionCacheContext';
K0.Provider;
var Ji = function (e) {
    return k.forwardRef(function (t, n) {
      var r = k.useContext(K0);
      return e(t, r, n);
    });
  },
  Qn = k.createContext({});
Qn.displayName = 'EmotionThemeContext';
var G7 = function () {
    return k.useContext(Qn);
  },
  K7 = function (e, t) {
    if (typeof t == 'function') {
      var n = t(e);
      if (n == null || typeof n != 'object' || Array.isArray(n))
        throw new Error(
          '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!'
        );
      return n;
    }
    if (t == null || typeof t != 'object' || Array.isArray(t))
      throw new Error(
        '[ThemeProvider] Please make your theme prop a plain object'
      );
    return Xn({}, e, t);
  },
  Y7 = sp(function (e) {
    return sp(function (t) {
      return K7(e, t);
    });
  }),
  Cm = function (e) {
    var t = k.useContext(Qn);
    return (
      e.theme !== t && (t = Y7(t)(e.theme)),
      k.createElement(Qn.Provider, { value: t }, e.children)
    );
  },
  Ep = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  xp = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
  X7 = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      Xi(t, n, r),
      H0(function () {
        return Qi(t, n, r);
      }),
      null
    );
  },
  Q7 = Ji(function (e, t, n) {
    var r = e.css;
    typeof r == 'string' && t.registered[r] !== void 0 && (r = t.registered[r]);
    var a = e[Ep],
      o = [r],
      i = '';
    typeof e.className == 'string'
      ? (i = W0(t.registered, o, e.className))
      : e.className != null && (i = e.className + ' ');
    var s = pa(o, void 0, k.useContext(Qn));
    if (s.name.indexOf('-') === -1) {
      var u = e[xp];
      u && (s = pa([s, 'label:' + u + ';']));
    }
    i += t.key + '-' + s.name;
    var c = {};
    for (var d in e)
      W7.call(e, d) && d !== 'css' && d !== Ep && d !== xp && (c[d] = e[d]);
    return (
      (c.ref = n),
      (c.className = i),
      k.createElement(
        k.Fragment,
        null,
        k.createElement(X7, {
          cache: t,
          serialized: s,
          isStringTag: typeof a == 'string'
        }),
        k.createElement(a, c)
      )
    );
  });
Q7.displayName = 'EmotionCssPropInternal';
lm(fm());
var J7 = {
    name: '@emotion/react',
    version: '11.10.6',
    main: 'dist/emotion-react.cjs.js',
    module: 'dist/emotion-react.esm.js',
    browser: {
      './dist/emotion-react.esm.js': './dist/emotion-react.browser.esm.js'
    },
    exports: {
      '.': {
        module: {
          worker: './dist/emotion-react.worker.esm.js',
          browser: './dist/emotion-react.browser.esm.js',
          default: './dist/emotion-react.esm.js'
        },
        default: './dist/emotion-react.cjs.js'
      },
      './jsx-runtime': {
        module: {
          worker: './jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js',
          browser:
            './jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js',
          default: './jsx-runtime/dist/emotion-react-jsx-runtime.esm.js'
        },
        default: './jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js'
      },
      './_isolated-hnrs': {
        module: {
          worker:
            './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js',
          browser:
            './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js',
          default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js'
        },
        default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js'
      },
      './jsx-dev-runtime': {
        module: {
          worker:
            './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js',
          browser:
            './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js',
          default: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js'
        },
        default: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js'
      },
      './package.json': './package.json',
      './types/css-prop': './types/css-prop.d.ts',
      './macro': './macro.js'
    },
    types: 'types/index.d.ts',
    files: [
      'src',
      'dist',
      'jsx-runtime',
      'jsx-dev-runtime',
      '_isolated-hnrs',
      'types/*.d.ts',
      'macro.js',
      'macro.d.ts',
      'macro.js.flow'
    ],
    sideEffects: !1,
    author: 'Emotion Contributors',
    license: 'MIT',
    scripts: { 'test:typescript': 'dtslint types' },
    dependencies: {
      '@babel/runtime': '^7.18.3',
      '@emotion/babel-plugin': '^11.10.6',
      '@emotion/cache': '^11.10.5',
      '@emotion/serialize': '^1.1.1',
      '@emotion/use-insertion-effect-with-fallbacks': '^1.0.0',
      '@emotion/utils': '^1.2.0',
      '@emotion/weak-memoize': '^0.3.0',
      'hoist-non-react-statics': '^3.3.1'
    },
    peerDependencies: { react: '>=16.8.0' },
    peerDependenciesMeta: { '@types/react': { optional: !0 } },
    devDependencies: {
      '@definitelytyped/dtslint': '0.0.112',
      '@emotion/css': '11.10.6',
      '@emotion/css-prettifier': '1.1.1',
      '@emotion/server': '11.10.0',
      '@emotion/styled': '11.10.6',
      'html-tag-names': '^1.1.2',
      react: '16.14.0',
      'svg-tag-names': '^1.1.1',
      typescript: '^4.5.5'
    },
    repository:
      'https://github.com/emotion-js/emotion/tree/main/packages/react',
    publishConfig: { access: 'public' },
    'umd:main': 'dist/emotion-react.umd.min.js',
    preconstruct: {
      entrypoints: [
        './index.js',
        './jsx-runtime.js',
        './jsx-dev-runtime.js',
        './_isolated-hnrs.js'
      ],
      umdName: 'emotionReact',
      exports: {
        envConditions: ['browser', 'worker'],
        extra: {
          './types/css-prop': './types/css-prop.d.ts',
          './macro': './macro.js'
        }
      }
    }
  },
  wp = !1,
  eb = Ji(function (e, t) {
    !wp &&
      (e.className || e.css) &&
      (console.error(
        "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"
      ),
      (wp = !0));
    var n = e.styles,
      r = pa([n], void 0, k.useContext(Qn)),
      a = k.useRef();
    return (
      lp(
        function () {
          var o = t.key + '-global',
            i = new t.sheet.constructor({
              key: o,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy
            }),
            s = !1,
            u = document.querySelector(
              'style[data-emotion="' + o + ' ' + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (i.before = t.sheet.tags[0]),
            u !== null &&
              ((s = !0), u.setAttribute('data-emotion', o), i.hydrate([u])),
            (a.current = [i, s]),
            function () {
              i.flush();
            }
          );
        },
        [t]
      ),
      lp(
        function () {
          var o = a.current,
            i = o[0],
            s = o[1];
          if (s) {
            o[1] = !1;
            return;
          }
          if ((r.next !== void 0 && Qi(t, r.next, !0), i.tags.length)) {
            var u = i.tags[i.tags.length - 1].nextElementSibling;
            (i.before = u), i.flush();
          }
          t.insert('', r, i, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
eb.displayName = 'EmotionGlobal';
function Y0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return pa(t);
}
var Aa = function () {
    var e = Y0.apply(void 0, arguments),
      t = 'animation-' + e.name;
    return {
      name: t,
      styles: '@keyframes ' + t + '{' + e.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      }
    };
  },
  tb = function e(t) {
    for (var n = t.length, r = 0, a = ''; r < n; r++) {
      var o = t[r];
      if (o != null) {
        var i = void 0;
        switch (typeof o) {
          case 'boolean':
            break;
          case 'object': {
            if (Array.isArray(o)) i = e(o);
            else {
              o.styles !== void 0 &&
                o.name !== void 0 &&
                console.error(
                  'You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.'
                ),
                (i = '');
              for (var s in o) o[s] && s && (i && (i += ' '), (i += s));
            }
            break;
          }
          default:
            i = o;
        }
        i && (a && (a += ' '), (a += i));
      }
    }
    return a;
  };
function nb(e, t, n) {
  var r = [],
    a = W0(e, r, n);
  return r.length < 2 ? n : a + t(r);
}
var rb = function (e) {
    var t = e.cache,
      n = e.serializedArr;
    return (
      H0(function () {
        for (var r = 0; r < n.length; r++) var a = Qi(t, n[r], !1);
      }),
      null
    );
  },
  ab = Ji(function (e, t) {
    var n = !1,
      r = [],
      a = function () {
        if (n) throw new Error('css can only be used during render');
        for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
          c[d] = arguments[d];
        var g = pa(c, t.registered);
        return r.push(g), Xi(t, g, !1), t.key + '-' + g.name;
      },
      o = function () {
        if (n) throw new Error('cx can only be used during render');
        for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
          c[d] = arguments[d];
        return nb(t.registered, a, tb(c));
      },
      i = { css: a, cx: o, theme: k.useContext(Qn) },
      s = e.children(i);
    return (
      (n = !0),
      k.createElement(
        k.Fragment,
        null,
        k.createElement(rb, { cache: t, serializedArr: r }),
        s
      )
    );
  });
ab.displayName = 'EmotionClassNames';
(Xu = !0),
  (Sp = typeof jest < 'u' || typeof vi < 'u'),
  Xu &&
    !Sp &&
    ((Qu = typeof globalThis < 'u' ? globalThis : Xu ? window : global),
    (Ju = '__EMOTION_REACT_' + J7.version.split('.')[0] + '__'),
    Qu[Ju] &&
      console.warn(
        'You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.'
      ),
    (Qu[Ju] = !0));
var Xu,
  Sp,
  Qu,
  Ju,
  ob = Z0,
  lb = function (e) {
    return e !== 'theme';
  },
  Ap = function (e) {
    return typeof e == 'string' && e.charCodeAt(0) > 96 ? ob : lb;
  },
  Cp = function (e, t, n) {
    var r;
    if (t) {
      var a = t.shouldForwardProp;
      r =
        e.__emotion_forwardProp && a
          ? function (o) {
              return e.__emotion_forwardProp(o) && a(o);
            }
          : a;
    }
    return typeof r != 'function' && n && (r = e.__emotion_forwardProp), r;
  },
  kp = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  ib = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      Xi(t, n, r),
      H0(function () {
        return Qi(t, n, r);
      }),
      null
    );
  },
  ub = function e(t, n) {
    if (t === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
    var r = t.__emotion_real === t,
      a = (r && t.__emotion_base) || t,
      o,
      i;
    n !== void 0 && ((o = n.label), (i = n.target));
    var s = Cp(t, n, r),
      u = s || Ap(a),
      c = !u('as');
    return function () {
      var d = arguments,
        g =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && g.push('label:' + o + ';'),
        d[0] == null || d[0].raw === void 0)
      )
        g.push.apply(g, d);
      else {
        d[0][0] === void 0 && console.error(kp), g.push(d[0][0]);
        for (var f = d.length, p = 1; p < f; p++)
          d[0][p] === void 0 && console.error(kp), g.push(d[p], d[0][p]);
      }
      var h = Ji(function (m, w, y) {
        var b = (c && m.as) || a,
          v = '',
          E = [],
          x = m;
        if (m.theme == null) {
          x = {};
          for (var S in m) x[S] = m[S];
          x.theme = k.useContext(Qn);
        }
        typeof m.className == 'string'
          ? (v = W0(w.registered, E, m.className))
          : m.className != null && (v = m.className + ' ');
        var A = pa(g.concat(E), w.registered, x);
        (v += w.key + '-' + A.name), i !== void 0 && (v += ' ' + i);
        var C = c && s === void 0 ? Ap(b) : u,
          T = {};
        for (var _ in m) (c && _ === 'as') || (C(_) && (T[_] = m[_]));
        return (
          (T.className = v),
          (T.ref = y),
          k.createElement(
            k.Fragment,
            null,
            k.createElement(ib, {
              cache: w,
              serialized: A,
              isStringTag: typeof b == 'string'
            }),
            k.createElement(b, T)
          )
        );
      });
      return (
        (h.displayName =
          o !== void 0
            ? o
            : 'Styled(' +
              (typeof a == 'string'
                ? a
                : a.displayName || a.name || 'Component') +
              ')'),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = a),
        (h.__emotion_styles = g),
        (h.__emotion_forwardProp = s),
        Object.defineProperty(h, 'toString', {
          value: function () {
            return i === void 0 ? 'NO_COMPONENT_SELECTOR' : '.' + i;
          }
        }),
        (h.withComponent = function (m, w) {
          return e(m, Xn({}, n, w, { shouldForwardProp: Cp(h, w, !0) })).apply(
            void 0,
            g
          );
        }),
        h
      );
    };
  },
  sb = ub,
  cb = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
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
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
  ],
  bc = sb.bind();
cb.forEach(function (e) {
  bc[e] = bc(e);
});
var F = bc,
  db = Tr(1)(({ typography: e }) => ({
    body: {
      fontFamily: e.fonts.base,
      fontSize: e.size.s3,
      margin: 0,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      WebkitOverflowScrolling: 'touch'
    },
    '*': { boxSizing: 'border-box' },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: e.weight.regular,
      margin: 0,
      padding: 0
    },
    'button, input, textarea, select': {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box'
    },
    sub: { fontSize: '0.8em', bottom: '-0.2em' },
    sup: { fontSize: '0.8em', top: '-0.2em' },
    'b, strong': { fontWeight: e.weight.bold },
    hr: {
      border: 'none',
      borderTop: '1px solid silver',
      clear: 'both',
      marginBottom: '1.25rem'
    },
    code: {
      fontFamily: e.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'inline-block',
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: 'baseline',
      color: 'inherit'
    },
    pre: {
      fontFamily: e.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      lineHeight: '18px',
      padding: '11px 1rem',
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      borderRadius: 3,
      margin: '1rem 0'
    }
  }));
Tr(1)(({ color: e, background: t, typography: n }) => {
  let r = db({ typography: n });
  return {
    ...r,
    body: {
      ...r.body,
      color: e.defaultText,
      background: t.app,
      overflow: 'hidden'
    },
    hr: { ...r.hr, borderTop: `1px solid ${e.border}` }
  };
});
var pb = { rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)' },
  fb = Aa`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  km = Aa`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  mb = Aa`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  gb = Aa`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  hb = Y0`
  animation: ${km} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
  yb = Y0`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
  vb = {
    rotate360: fb,
    glow: km,
    float: mb,
    jiggle: gb,
    inlineGlow: hb,
    hoverable: yb
  },
  bb = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
    BASE_COLOR: 'rgb(213, 213, 213)',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
    HTML_TAG_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
    HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: 'rgb(145, 145, 145)',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
    TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
    TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
    TABLE_SORT_ICON_COLOR: 'black',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
  },
  Eb = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'white',
    BASE_COLOR: 'black',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
    HTML_TAG_COLOR: 'rgb(168, 148, 166)',
    HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
    HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: '#6e6e6e',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: '#aaa',
    TABLE_TH_BACKGROUND_COLOR: '#eee',
    TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
    TABLE_SORT_ICON_COLOR: '#6e6e6e',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
  },
  xb = (e) =>
    Object.entries(e).reduce((t, [n, r]) => ({ ...t, [n]: q4(r) }), {}),
  wb = ({ colors: e, mono: t }) => {
    let n = xb(e);
    return {
      token: {
        fontFamily: t,
        WebkitFontSmoothing: 'antialiased',
        '&.tag': n.red3,
        '&.comment': { ...n.green1, fontStyle: 'italic' },
        '&.prolog': { ...n.green1, fontStyle: 'italic' },
        '&.doctype': { ...n.green1, fontStyle: 'italic' },
        '&.cdata': { ...n.green1, fontStyle: 'italic' },
        '&.string': n.red1,
        '&.url': n.cyan1,
        '&.symbol': n.cyan1,
        '&.number': n.cyan1,
        '&.boolean': n.cyan1,
        '&.variable': n.cyan1,
        '&.constant': n.cyan1,
        '&.inserted': n.cyan1,
        '&.atrule': n.blue1,
        '&.keyword': n.blue1,
        '&.attr-value': n.blue1,
        '&.punctuation': n.gray1,
        '&.operator': n.gray1,
        '&.function': n.gray1,
        '&.deleted': n.red2,
        '&.important': { fontWeight: 'bold' },
        '&.bold': { fontWeight: 'bold' },
        '&.italic': { fontStyle: 'italic' },
        '&.class-name': n.cyan2,
        '&.selector': n.red3,
        '&.attr-name': n.red4,
        '&.property': n.red4,
        '&.regex': n.red4,
        '&.entity': n.red4,
        '&.directive.tag .tag': { background: '#ffff00', ...n.gray1 }
      },
      'language-json .token.boolean': n.blue1,
      'language-json .token.number': n.blue1,
      'language-json .token.property': n.cyan2,
      namespace: { opacity: 0.7 }
    };
  },
  Sb = {
    green1: '#008000',
    red1: '#A31515',
    red2: '#9a050f',
    red3: '#800000',
    red4: '#ff0000',
    gray1: '#393A34',
    cyan1: '#36acaa',
    cyan2: '#2B91AF',
    blue1: '#0000ff',
    blue2: '#00009f'
  },
  Ab = {
    green1: '#7C7C7C',
    red1: '#92C379',
    red2: '#9a050f',
    red3: '#A8FF60',
    red4: '#96CBFE',
    gray1: '#EDEDED',
    cyan1: '#C6C5FE',
    cyan2: '#FFFFB6',
    blue1: '#B474DD',
    blue2: '#00009f'
  },
  Cb = (e) => ({
    primary: e.colorPrimary,
    secondary: e.colorSecondary,
    tertiary: q.tertiary,
    ancillary: q.ancillary,
    orange: q.orange,
    gold: q.gold,
    green: q.green,
    seafoam: q.seafoam,
    purple: q.purple,
    ultraviolet: q.ultraviolet,
    lightest: q.lightest,
    lighter: q.lighter,
    light: q.light,
    mediumlight: q.mediumlight,
    medium: q.medium,
    mediumdark: q.mediumdark,
    dark: q.dark,
    darker: q.darker,
    darkest: q.darkest,
    border: q.border,
    positive: q.positive,
    negative: q.negative,
    warning: q.warning,
    critical: q.critical,
    defaultText: e.textColor || q.darkest,
    inverseText: e.textInverseColor || q.lightest,
    positiveText: q.positiveText,
    negativeText: q.negativeText,
    warningText: q.warningText
  }),
  Ec = (e = hc[cm()]) => {
    let {
      base: t,
      colorPrimary: n,
      colorSecondary: r,
      appBg: a,
      appContentBg: o,
      appBorderColor: i,
      appBorderRadius: s,
      fontBase: u,
      fontCode: c,
      textColor: d,
      textInverseColor: g,
      barTextColor: f,
      barSelectedColor: p,
      barBg: h,
      buttonBg: m,
      buttonBorder: w,
      booleanBg: y,
      booleanSelectedBg: b,
      inputBg: v,
      inputBorder: E,
      inputTextColor: x,
      inputBorderRadius: S,
      brandTitle: A,
      brandUrl: C,
      brandImage: T,
      brandTarget: _,
      gridCellSize: O,
      ...B
    } = e;
    return {
      ...B,
      base: t,
      color: Cb(e),
      background: {
        app: a,
        bar: h,
        content: o,
        gridCellSize: O || Mn.gridCellSize,
        hoverable: Mn.hoverable,
        positive: Mn.positive,
        negative: Mn.negative,
        warning: Mn.warning,
        critical: Mn.critical
      },
      typography: {
        fonts: { base: u, mono: c },
        weight: Nn.weight,
        size: Nn.size
      },
      animation: vb,
      easing: pb,
      input: { background: v, border: E, borderRadius: S, color: x },
      button: { background: m || v, border: w || E },
      boolean: { background: y || E, selectedBackground: b || v },
      layoutMargin: 10,
      appBorderColor: i,
      appBorderRadius: s,
      barTextColor: f,
      barSelectedColor: p || r,
      barBg: h,
      brand: { title: A, url: C, image: T || (A ? null : void 0), target: _ },
      code: wb({ colors: t === 'light' ? Sb : Ab, mono: c }),
      addonActionsTheme: {
        ...(t === 'light' ? Eb : bb),
        BASE_FONT_FAMILY: c,
        BASE_FONT_SIZE: Nn.size.s2 - 1,
        BASE_LINE_HEIGHT: '18px',
        BASE_BACKGROUND_COLOR: 'transparent',
        BASE_COLOR: d,
        ARROW_COLOR: N4(0.2, i),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: c,
        TREENODE_FONT_SIZE: Nn.size.s2 - 1,
        TREENODE_LINE_HEIGHT: '18px',
        TREENODE_PADDING_LEFT: 12
      }
    };
  },
  kb = (e) => Object.keys(e).length === 0,
  es = (e) => e != null && typeof e == 'object',
  _b = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t),
  Fb = () => Object.create(null),
  _m = (e, t) =>
    e === t || !es(e) || !es(t)
      ? {}
      : Object.keys(e).reduce((n, r) => {
          if (_b(t, r)) {
            let a = _m(e[r], t[r]);
            return (es(a) && kb(a)) || (n[r] = a), n;
          }
          return (n[r] = void 0), n;
        }, Fb()),
  Tb = _m;
function Ob(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Array.from(typeof e == 'string' ? [e] : e);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var a = r.reduce(function (s, u) {
    var c = u.match(/\n([\t ]+|(?!\s).)/g);
    return c
      ? s.concat(
          c.map(function (d) {
            var g, f;
            return (f =
              (g = d.match(/[\t ]/g)) === null || g === void 0
                ? void 0
                : g.length) !== null && f !== void 0
              ? f
              : 0;
          })
        )
      : s;
  }, []);
  if (a.length) {
    var o = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, a) +
        '}',
      'g'
    );
    r = r.map(function (s) {
      return s.replace(
        o,
        `
`
      );
    });
  }
  r[0] = r[0].replace(/^\r?\n/, '');
  var i = r[0];
  return (
    t.forEach(function (s, u) {
      var c = i.match(/(?:^|\n)( *)$/),
        d = c ? c[1] : '',
        g = s;
      typeof s == 'string' &&
        s.includes(`
`) &&
        (g = String(s)
          .split(
            `
`
          )
          .map(function (f, p) {
            return p === 0 ? f : '' + d + f;
          }).join(`
`)),
        (i += g + r[u + 1]);
    }),
    i
  );
}
var Rb = (e) => {
    if (!e) return Ec(xi);
    let t = Tb(xi, e);
    return (
      Object.keys(t).length &&
        J4.warn(
          Ob`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
          t
        ),
      Ec(e)
    );
  },
  xc =
    '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';
function We() {
  return (
    (We = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    We.apply(this, arguments)
  );
}
function X0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    a,
    o;
  for (o = 0; o < r.length; o++)
    (a = r[o]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Db = Object.create,
  Fm = Object.defineProperty,
  Lb = Object.getOwnPropertyDescriptor,
  Tm = Object.getOwnPropertyNames,
  Mb = Object.getPrototypeOf,
  $b = Object.prototype.hasOwnProperty,
  U = (e, t) =>
    function () {
      return t || (0, e[Tm(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Bb = (e, t, n, r) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of Tm(t))
        !$b.call(e, a) &&
          a !== n &&
          Fm(e, a, {
            get: () => t[a],
            enumerable: !(r = Lb(t, a)) || r.enumerable
          });
    return e;
  },
  ft = (e, t, n) => (
    (n = e != null ? Db(Mb(e)) : {}),
    Bb(
      t || !e || !e.__esModule
        ? Fm(n, 'default', { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  Ib = U({
    '../../node_modules/refractor/lang/markdown.js'(e, t) {
      (t.exports = n), (n.displayName = 'markdown'), (n.aliases = ['md']);
      function n(r) {
        (function (a) {
          var o = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function i(h) {
            return (
              (h = h.replace(/<inner>/g, function () {
                return o;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + h + ')')
            );
          }
          var s = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            u = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return s;
              }
            ),
            c =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (a.languages.markdown = a.languages.extend('markup', {})),
            a.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'front-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: a.languages.yaml
                  }
                }
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + u + c + '(?:' + u + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + u + c + ')(?:' + u + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(s),
                        inside: a.languages.markdown
                      },
                      punctuation: /\|/
                    }
                  },
                  'table-line': {
                    pattern: RegExp('^(' + u + ')' + c + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ }
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + u + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(s),
                        alias: 'important',
                        inside: a.languages.markdown
                      },
                      punctuation: /\|/
                    }
                  }
                }
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword'
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0
                    },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/
                  }
                }
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ }
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: { punctuation: /^#+|#+$/ }
                }
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation'
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation'
              },
              'url-reference': {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/
                },
                alias: 'url'
              },
              bold: {
                pattern: i(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {}
                  },
                  punctuation: /\*\*|__/
                }
              },
              italic: {
                pattern: i(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {}
                  },
                  punctuation: /[*_]/
                }
              },
              strike: {
                pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {}
                  },
                  punctuation: /~~?/
                }
              },
              'code-snippet': {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ['code', 'keyword']
              },
              url: {
                pattern: i(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {}
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0
                  }
                }
              }
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (h) {
              ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(
                function (m) {
                  h !== m &&
                    (a.languages.markdown[h].inside.content.inside[m] =
                      a.languages.markdown[m]);
                }
              );
            }),
            a.hooks.add('after-tokenize', function (h) {
              if (h.language !== 'markdown' && h.language !== 'md') return;
              function m(w) {
                if (!(!w || typeof w == 'string'))
                  for (var y = 0, b = w.length; y < b; y++) {
                    var v = w[y];
                    if (v.type !== 'code') {
                      m(v.content);
                      continue;
                    }
                    var E = v.content[1],
                      x = v.content[3];
                    if (
                      E &&
                      x &&
                      E.type === 'code-language' &&
                      x.type === 'code-block' &&
                      typeof E.content == 'string'
                    ) {
                      var S = E.content
                        .replace(/\b#/g, 'sharp')
                        .replace(/\b\+\+/g, 'pp');
                      S = (/[a-z][\w-]*/i.exec(S) || [''])[0].toLowerCase();
                      var A = 'language-' + S;
                      x.alias
                        ? typeof x.alias == 'string'
                          ? (x.alias = [x.alias, A])
                          : x.alias.push(A)
                        : (x.alias = [A]);
                    }
                  }
              }
              m(h.tokens);
            }),
            a.hooks.add('wrap', function (h) {
              if (h.type === 'code-block') {
                for (var m = '', w = 0, y = h.classes.length; w < y; w++) {
                  var b = h.classes[w],
                    v = /language-(.+)/.exec(b);
                  if (v) {
                    m = v[1];
                    break;
                  }
                }
                var E = a.languages[m];
                if (E) h.content = a.highlight(p(h.content.value), E, m);
                else if (m && m !== 'none' && a.plugins.autoloader) {
                  var x =
                    'md-' +
                    new Date().valueOf() +
                    '-' +
                    Math.floor(Math.random() * 1e16);
                  (h.attributes.id = x),
                    a.plugins.autoloader.loadLanguages(m, function () {
                      var S = document.getElementById(x);
                      S &&
                        (S.innerHTML = a.highlight(
                          S.textContent,
                          a.languages[m],
                          m
                        ));
                    });
                }
              }
            });
          var d = RegExp(a.languages.markup.tag.pattern.source, 'gi'),
            g = { amp: '&', lt: '<', gt: '>', quot: '"' },
            f = String.fromCodePoint || String.fromCharCode;
          function p(h) {
            var m = h.replace(d, '');
            return (
              (m = m.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (w, y) {
                if (((y = y.toLowerCase()), y[0] === '#')) {
                  var b;
                  return (
                    y[1] === 'x'
                      ? (b = parseInt(y.slice(2), 16))
                      : (b = Number(y.slice(1))),
                    f(b)
                  );
                } else {
                  var v = g[y];
                  return v || w;
                }
              })),
              m
            );
          }
          a.languages.md = a.languages.markdown;
        })(r);
      }
    }
  }),
  Pb = U({
    '../../node_modules/refractor/lang/yaml.js'(e, t) {
      (t.exports = n), (n.displayName = 'yaml'), (n.aliases = ['yml']);
      function n(r) {
        (function (a) {
          var o = /[*&][^\s[\]{},]+/,
            i =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            s =
              '(?:' +
              i.source +
              '(?:[ 	]+' +
              o.source +
              ')?|' +
              o.source +
              '(?:[ 	]+' +
              i.source +
              ')?)',
            u =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function d(g, f) {
            f = (f || '').replace(/m/g, '') + 'm';
            var p =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return s;
                })
                .replace(/<<value>>/g, function () {
                  return g;
                });
            return RegExp(p, f);
          }
          (a.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return s;
                  }
                )
              ),
              lookbehind: !0,
              alias: 'string'
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return s;
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + u + '|' + c + ')';
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule'
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: 'important'
            },
            datetime: {
              pattern: d(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: 'number'
            },
            boolean: {
              pattern: d(/false|true/.source, 'i'),
              lookbehind: !0,
              alias: 'important'
            },
            null: {
              pattern: d(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important'
            },
            string: { pattern: d(c), lookbehind: !0, greedy: !0 },
            number: {
              pattern: d(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                'i'
              ),
              lookbehind: !0
            },
            tag: i,
            important: o,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
          }),
            (a.languages.yml = a.languages.yaml);
        })(r);
      }
    }
  }),
  Om = U({
    '../../node_modules/refractor/lang/typescript.js'(e, t) {
      (t.exports = n), (n.displayName = 'typescript'), (n.aliases = ['ts']);
      function n(r) {
        (function (a) {
          (a.languages.typescript = a.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
          })),
            a.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete a.languages.typescript.parameter,
            delete a.languages.typescript['literal-property'];
          var o = a.languages.extend('typescript', {});
          delete o['class-name'],
            (a.languages.typescript['class-name'].inside = o),
            a.languages.insertBefore('typescript', 'function', {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: 'operator' },
                  function: /^[\s\S]+/
                }
              },
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: o
                  }
                }
              }
            }),
            (a.languages.ts = a.languages.typescript);
        })(r);
      }
    }
  }),
  Rm = U({
    '../../node_modules/refractor/lang/jsx.js'(e, t) {
      (t.exports = n), (n.displayName = 'jsx'), (n.aliases = []);
      function n(r) {
        (function (a) {
          var o = a.util.clone(a.languages.javascript),
            i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            s = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            u = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function c(f, p) {
            return (
              (f = f
                .replace(/<S>/g, function () {
                  return i;
                })
                .replace(/<BRACES>/g, function () {
                  return s;
                })
                .replace(/<SPREAD>/g, function () {
                  return u;
                })),
              RegExp(f, p)
            );
          }
          (u = c(u).source),
            (a.languages.jsx = a.languages.extend('markup', o)),
            (a.languages.jsx.tag.pattern = c(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (a.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (a.languages.jsx.tag.inside.tag.inside['class-name'] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (a.languages.jsx.tag.inside.comment = o.comment),
            a.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: c(/<SPREAD>/.source),
                  inside: a.languages.jsx
                }
              },
              a.languages.jsx.tag
            ),
            a.languages.insertBefore(
              'inside',
              'special-attr',
              {
                script: {
                  pattern: c(/=<BRACES>/.source),
                  alias: 'language-javascript',
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?=\{)/,
                      alias: 'punctuation'
                    },
                    rest: a.languages.jsx
                  }
                }
              },
              a.languages.jsx.tag
            );
          var d = function (f) {
              return f
                ? typeof f == 'string'
                  ? f
                  : typeof f.content == 'string'
                  ? f.content
                  : f.content.map(d).join('')
                : '';
            },
            g = function (f) {
              for (var p = [], h = 0; h < f.length; h++) {
                var m = f[h],
                  w = !1;
                if (
                  (typeof m != 'string' &&
                    (m.type === 'tag' &&
                    m.content[0] &&
                    m.content[0].type === 'tag'
                      ? m.content[0].content[0].content === '</'
                        ? p.length > 0 &&
                          p[p.length - 1].tagName ===
                            d(m.content[0].content[1]) &&
                          p.pop()
                        : m.content[m.content.length - 1].content === '/>' ||
                          p.push({
                            tagName: d(m.content[0].content[1]),
                            openedBraces: 0
                          })
                      : p.length > 0 &&
                        m.type === 'punctuation' &&
                        m.content === '{'
                      ? p[p.length - 1].openedBraces++
                      : p.length > 0 &&
                        p[p.length - 1].openedBraces > 0 &&
                        m.type === 'punctuation' &&
                        m.content === '}'
                      ? p[p.length - 1].openedBraces--
                      : (w = !0)),
                  (w || typeof m == 'string') &&
                    p.length > 0 &&
                    p[p.length - 1].openedBraces === 0)
                ) {
                  var y = d(m);
                  h < f.length - 1 &&
                    (typeof f[h + 1] == 'string' ||
                      f[h + 1].type === 'plain-text') &&
                    ((y += d(f[h + 1])), f.splice(h + 1, 1)),
                    h > 0 &&
                      (typeof f[h - 1] == 'string' ||
                        f[h - 1].type === 'plain-text') &&
                      ((y = d(f[h - 1]) + y), f.splice(h - 1, 1), h--),
                    (f[h] = new a.Token('plain-text', y, null, y));
                }
                m.content && typeof m.content != 'string' && g(m.content);
              }
            };
          a.hooks.add('after-tokenize', function (f) {
            (f.language !== 'jsx' && f.language !== 'tsx') || g(f.tokens);
          });
        })(r);
      }
    }
  }),
  Nb = U({
    '../../node_modules/refractor/lang/tsx.js'(e, t) {
      var n = Rm(),
        r = Om();
      (t.exports = a), (a.displayName = 'tsx'), (a.aliases = []);
      function a(o) {
        o.register(n),
          o.register(r),
          (function (i) {
            var s = i.util.clone(i.languages.typescript);
            (i.languages.tsx = i.languages.extend('jsx', s)),
              delete i.languages.tsx.parameter,
              delete i.languages.tsx['literal-property'];
            var u = i.languages.tsx.tag;
            (u.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + '(?:' + u.pattern.source + ')',
              u.pattern.flags
            )),
              (u.lookbehind = !0);
          })(o);
      }
    }
  }),
  jb = U({
    '../../node_modules/refractor/lang/clike.js'(e, t) {
      (t.exports = n), (n.displayName = 'clike'), (n.aliases = []);
      function n(r) {
        r.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          },
          'class-name': {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ }
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/
        };
      }
    }
  }),
  Hb = U({
    '../../node_modules/refractor/lang/javascript.js'(e, t) {
      (t.exports = n), (n.displayName = 'javascript'), (n.aliases = ['js']);
      function n(r) {
        (r.languages.javascript = r.languages.extend('clike', {
          'class-name': [
            r.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0
            }
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0
            }
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                '(?:' +
                (/NaN|Infinity/.source +
                  '|' +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  '|' +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  '|' +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  '|' +
                  /\d+(?:_\d+)*n/.source +
                  '|' +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                    .source) +
                ')' +
                /(?![\w$])/.source
            ),
            lookbehind: !0
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        })),
          (r.languages.javascript['class-name'][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          r.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                'regex-source': {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: 'language-regex',
                  inside: r.languages.regex
                },
                'regex-delimiter': /^\/|\/$/,
                'regex-flags': /^[a-z]+$/
              }
            },
            'function-variable': {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: 'function'
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: r.languages.javascript
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: r.languages.javascript
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: r.languages.javascript
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: r.languages.javascript
              }
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
          }),
          r.languages.insertBefore('javascript', 'string', {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
            'template-string': {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    'interpolation-punctuation': {
                      pattern: /^\$\{|\}$/,
                      alias: 'punctuation'
                    },
                    rest: r.languages.javascript
                  }
                },
                string: /[\s\S]+/
              }
            },
            'string-property': {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: 'property'
            }
          }),
          r.languages.insertBefore('javascript', 'operator', {
            'literal-property': {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: 'property'
            }
          }),
          r.languages.markup &&
            (r.languages.markup.tag.addInlined('script', 'javascript'),
            r.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              'javascript'
            )),
          (r.languages.js = r.languages.javascript);
      }
    }
  }),
  Dm = U({
    '../../node_modules/refractor/lang/css.js'(e, t) {
      (t.exports = n), (n.displayName = 'css'), (n.aliases = []);
      function n(r) {
        (function (a) {
          var o =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (a.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector'
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0
                }
              }
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' +
                  o.source +
                  '|' +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ')\\)',
                'i'
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + o.source + '$'), alias: 'url' }
              }
            },
            selector: {
              pattern: RegExp(
                `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                  o.source +
                  ')*(?=\\s*\\{)'
              ),
              lookbehind: !0
            },
            string: { pattern: o, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0
            },
            punctuation: /[(){};:,]/
          }),
            (a.languages.css.atrule.inside.rest = a.languages.css);
          var i = a.languages.markup;
          i &&
            (i.tag.addInlined('style', 'css'),
            i.tag.addAttribute('style', 'css'));
        })(r);
      }
    }
  }),
  Lm = U({
    '../../node_modules/refractor/lang/markup.js'(e, t) {
      (t.exports = n),
        (n.displayName = 'markup'),
        (n.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss']);
      function n(r) {
        (r.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/i,
              name: /[^\s<>'"]+/
            }
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
              },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
                }
              },
              punctuation: /\/?>/,
              'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ }
              }
            }
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
            /&#x?[\da-f]{1,8};/i
          ]
        }),
          (r.languages.markup.tag.inside['attr-value'].inside.entity =
            r.languages.markup.entity),
          (r.languages.markup.doctype.inside['internal-subset'].inside =
            r.languages.markup),
          r.hooks.add('wrap', function (a) {
            a.type === 'entity' &&
              (a.attributes.title = a.content.value.replace(/&amp;/, '&'));
          }),
          Object.defineProperty(r.languages.markup.tag, 'addInlined', {
            value: function (a, o) {
              var i = {};
              (i['language-' + o] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: r.languages[o]
              }),
                (i.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var s = {
                'included-cdata': {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: i
                }
              };
              s['language-' + o] = {
                pattern: /[\s\S]+/,
                inside: r.languages[o]
              };
              var u = {};
              (u[a] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return a;
                    }
                  ),
                  'i'
                ),
                lookbehind: !0,
                greedy: !0,
                inside: s
              }),
                r.languages.insertBefore('markup', 'cdata', u);
            }
          }),
          Object.defineProperty(r.languages.markup.tag, 'addAttribute', {
            value: function (a, o) {
              r.languages.markup.tag.inside['special-attr'].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    '(?:' +
                    a +
                    ')' +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  'i'
                ),
                lookbehind: !0,
                inside: {
                  'attr-name': /^[^\s=]+/,
                  'attr-value': {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [o, 'language-' + o],
                        inside: r.languages[o]
                      },
                      punctuation: [
                        { pattern: /^=/, alias: 'attr-equals' },
                        /"|'/
                      ]
                    }
                  }
                }
              });
            }
          }),
          (r.languages.html = r.languages.markup),
          (r.languages.mathml = r.languages.markup),
          (r.languages.svg = r.languages.markup),
          (r.languages.xml = r.languages.extend('markup', {})),
          (r.languages.ssml = r.languages.xml),
          (r.languages.atom = r.languages.xml),
          (r.languages.rss = r.languages.xml);
      }
    }
  }),
  Zb = U({
    '../../node_modules/xtend/immutable.js'(e, t) {
      t.exports = r;
      var n = Object.prototype.hasOwnProperty;
      function r() {
        for (var a = {}, o = 0; o < arguments.length; o++) {
          var i = arguments[o];
          for (var s in i) n.call(i, s) && (a[s] = i[s]);
        }
        return a;
      }
    }
  }),
  Mm = U({
    '../../node_modules/property-information/lib/util/schema.js'(e, t) {
      t.exports = r;
      var n = r.prototype;
      (n.space = null), (n.normal = {}), (n.property = {});
      function r(a, o, i) {
        (this.property = a), (this.normal = o), i && (this.space = i);
      }
    }
  }),
  zb = U({
    '../../node_modules/property-information/lib/util/merge.js'(e, t) {
      var n = Zb(),
        r = Mm();
      t.exports = a;
      function a(o) {
        for (var i = o.length, s = [], u = [], c = -1, d, g; ++c < i; )
          (d = o[c]), s.push(d.property), u.push(d.normal), (g = d.space);
        return new r(n.apply(null, s), n.apply(null, u), g);
      }
    }
  }),
  Q0 = U({
    '../../node_modules/property-information/normalize.js'(e, t) {
      t.exports = n;
      function n(r) {
        return r.toLowerCase();
      }
    }
  }),
  $m = U({
    '../../node_modules/property-information/lib/util/info.js'(e, t) {
      t.exports = r;
      var n = r.prototype;
      (n.space = null),
        (n.attribute = null),
        (n.property = null),
        (n.boolean = !1),
        (n.booleanish = !1),
        (n.overloadedBoolean = !1),
        (n.number = !1),
        (n.commaSeparated = !1),
        (n.spaceSeparated = !1),
        (n.commaOrSpaceSeparated = !1),
        (n.mustUseProperty = !1),
        (n.defined = !1);
      function r(a, o) {
        (this.property = a), (this.attribute = o);
      }
    }
  }),
  J0 = U({
    '../../node_modules/property-information/lib/util/types.js'(e) {
      var t = 0;
      (e.boolean = n()),
        (e.booleanish = n()),
        (e.overloadedBoolean = n()),
        (e.number = n()),
        (e.spaceSeparated = n()),
        (e.commaSeparated = n()),
        (e.commaOrSpaceSeparated = n());
      function n() {
        return Math.pow(2, ++t);
      }
    }
  }),
  Bm = U({
    '../../node_modules/property-information/lib/util/defined-info.js'(e, t) {
      var n = $m(),
        r = J0();
      (t.exports = i), (i.prototype = new n()), (i.prototype.defined = !0);
      var a = [
          'boolean',
          'booleanish',
          'overloadedBoolean',
          'number',
          'commaSeparated',
          'spaceSeparated',
          'commaOrSpaceSeparated'
        ],
        o = a.length;
      function i(u, c, d, g) {
        var f = -1,
          p;
        for (s(this, 'space', g), n.call(this, u, c); ++f < o; )
          (p = a[f]), s(this, p, (d & r[p]) === r[p]);
      }
      function s(u, c, d) {
        d && (u[c] = d);
      }
    }
  }),
  Wo = U({
    '../../node_modules/property-information/lib/util/create.js'(e, t) {
      var n = Q0(),
        r = Mm(),
        a = Bm();
      t.exports = o;
      function o(i) {
        var s = i.space,
          u = i.mustUseProperty || [],
          c = i.attributes || {},
          d = i.properties,
          g = i.transform,
          f = {},
          p = {},
          h,
          m;
        for (h in d)
          (m = new a(h, g(c, h), d[h], s)),
            u.indexOf(h) !== -1 && (m.mustUseProperty = !0),
            (f[h] = m),
            (p[n(h)] = h),
            (p[n(m.attribute)] = h);
        return new r(f, p, s);
      }
    }
  }),
  Vb = U({
    '../../node_modules/property-information/lib/xlink.js'(e, t) {
      var n = Wo();
      t.exports = n({
        space: 'xlink',
        transform: r,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null
        }
      });
      function r(a, o) {
        return 'xlink:' + o.slice(5).toLowerCase();
      }
    }
  }),
  Ub = U({
    '../../node_modules/property-information/lib/xml.js'(e, t) {
      var n = Wo();
      t.exports = n({
        space: 'xml',
        transform: r,
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
      });
      function r(a, o) {
        return 'xml:' + o.slice(3).toLowerCase();
      }
    }
  }),
  qb = U({
    '../../node_modules/property-information/lib/util/case-sensitive-transform.js'(
      e,
      t
    ) {
      t.exports = n;
      function n(r, a) {
        return a in r ? r[a] : a;
      }
    }
  }),
  Im = U({
    '../../node_modules/property-information/lib/util/case-insensitive-transform.js'(
      e,
      t
    ) {
      var n = qb();
      t.exports = r;
      function r(a, o) {
        return n(a, o.toLowerCase());
      }
    }
  }),
  Wb = U({
    '../../node_modules/property-information/lib/xmlns.js'(e, t) {
      var n = Wo(),
        r = Im();
      t.exports = n({
        space: 'xmlns',
        attributes: { xmlnsxlink: 'xmlns:xlink' },
        transform: r,
        properties: { xmlns: null, xmlnsXLink: null }
      });
    }
  }),
  Gb = U({
    '../../node_modules/property-information/lib/aria.js'(e, t) {
      var n = J0(),
        r = Wo(),
        a = n.booleanish,
        o = n.number,
        i = n.spaceSeparated;
      t.exports = r({
        transform: s,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: a,
          ariaAutoComplete: null,
          ariaBusy: a,
          ariaChecked: a,
          ariaColCount: o,
          ariaColIndex: o,
          ariaColSpan: o,
          ariaControls: i,
          ariaCurrent: null,
          ariaDescribedBy: i,
          ariaDetails: null,
          ariaDisabled: a,
          ariaDropEffect: i,
          ariaErrorMessage: null,
          ariaExpanded: a,
          ariaFlowTo: i,
          ariaGrabbed: a,
          ariaHasPopup: null,
          ariaHidden: a,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: i,
          ariaLevel: o,
          ariaLive: null,
          ariaModal: a,
          ariaMultiLine: a,
          ariaMultiSelectable: a,
          ariaOrientation: null,
          ariaOwns: i,
          ariaPlaceholder: null,
          ariaPosInSet: o,
          ariaPressed: a,
          ariaReadOnly: a,
          ariaRelevant: null,
          ariaRequired: a,
          ariaRoleDescription: i,
          ariaRowCount: o,
          ariaRowIndex: o,
          ariaRowSpan: o,
          ariaSelected: a,
          ariaSetSize: o,
          ariaSort: null,
          ariaValueMax: o,
          ariaValueMin: o,
          ariaValueNow: o,
          ariaValueText: null,
          role: null
        }
      });
      function s(u, c) {
        return c === 'role' ? c : 'aria-' + c.slice(4).toLowerCase();
      }
    }
  }),
  Kb = U({
    '../../node_modules/property-information/lib/html.js'(e, t) {
      var n = J0(),
        r = Wo(),
        a = Im(),
        o = n.boolean,
        i = n.overloadedBoolean,
        s = n.booleanish,
        u = n.number,
        c = n.spaceSeparated,
        d = n.commaSeparated;
      t.exports = r({
        space: 'html',
        attributes: {
          acceptcharset: 'accept-charset',
          classname: 'class',
          htmlfor: 'for',
          httpequiv: 'http-equiv'
        },
        transform: a,
        mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
        properties: {
          abbr: null,
          accept: d,
          acceptCharset: c,
          accessKey: c,
          action: null,
          allow: null,
          allowFullScreen: o,
          allowPaymentRequest: o,
          allowUserMedia: o,
          alt: null,
          as: null,
          async: o,
          autoCapitalize: null,
          autoComplete: c,
          autoFocus: o,
          autoPlay: o,
          capture: o,
          charSet: null,
          checked: o,
          cite: null,
          className: c,
          cols: u,
          colSpan: null,
          content: null,
          contentEditable: s,
          controls: o,
          controlsList: c,
          coords: u | d,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: o,
          defer: o,
          dir: null,
          dirName: null,
          disabled: o,
          download: i,
          draggable: s,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: o,
          formTarget: null,
          headers: c,
          height: u,
          hidden: o,
          high: u,
          href: null,
          hrefLang: null,
          htmlFor: c,
          httpEquiv: c,
          id: null,
          imageSizes: null,
          imageSrcSet: d,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: o,
          itemId: null,
          itemProp: c,
          itemRef: c,
          itemScope: o,
          itemType: c,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: o,
          low: u,
          manifest: null,
          max: null,
          maxLength: u,
          media: null,
          method: null,
          min: null,
          minLength: u,
          multiple: o,
          muted: o,
          name: null,
          nonce: null,
          noModule: o,
          noValidate: o,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: o,
          optimum: u,
          pattern: null,
          ping: c,
          placeholder: null,
          playsInline: o,
          poster: null,
          preload: null,
          readOnly: o,
          referrerPolicy: null,
          rel: c,
          required: o,
          reversed: o,
          rows: u,
          rowSpan: u,
          sandbox: c,
          scope: null,
          scoped: o,
          seamless: o,
          selected: o,
          shape: null,
          size: u,
          sizes: null,
          slot: null,
          span: u,
          spellCheck: s,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: d,
          start: u,
          step: null,
          style: null,
          tabIndex: u,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: o,
          useMap: null,
          value: s,
          width: u,
          wrap: null,
          align: null,
          aLink: null,
          archive: c,
          axis: null,
          background: null,
          bgColor: null,
          border: u,
          borderColor: null,
          bottomMargin: u,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: o,
          declare: o,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: u,
          leftMargin: u,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: u,
          marginWidth: u,
          noResize: o,
          noHref: o,
          noShade: o,
          noWrap: o,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: u,
          rules: null,
          scheme: null,
          scrolling: s,
          standby: null,
          summary: null,
          text: null,
          topMargin: u,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: u,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: o,
          disableRemotePlayback: o,
          prefix: null,
          property: null,
          results: u,
          security: null,
          unselectable: null
        }
      });
    }
  }),
  Yb = U({
    '../../node_modules/property-information/html.js'(e, t) {
      var n = zb(),
        r = Vb(),
        a = Ub(),
        o = Wb(),
        i = Gb(),
        s = Kb();
      t.exports = n([a, r, o, i, s]);
    }
  }),
  Xb = U({
    '../../node_modules/property-information/find.js'(e, t) {
      var n = Q0(),
        r = Bm(),
        a = $m(),
        o = 'data';
      t.exports = c;
      var i = /^data[-\w.:]+$/i,
        s = /-[a-z]/g,
        u = /[A-Z]/g;
      function c(h, m) {
        var w = n(m),
          y = m,
          b = a;
        return w in h.normal
          ? h.property[h.normal[w]]
          : (w.length > 4 &&
              w.slice(0, 4) === o &&
              i.test(m) &&
              (m.charAt(4) === '-' ? (y = d(m)) : (m = g(m)), (b = r)),
            new b(y, m));
      }
      function d(h) {
        var m = h.slice(5).replace(s, p);
        return o + m.charAt(0).toUpperCase() + m.slice(1);
      }
      function g(h) {
        var m = h.slice(4);
        return s.test(m)
          ? h
          : ((m = m.replace(u, f)),
            m.charAt(0) !== '-' && (m = '-' + m),
            o + m);
      }
      function f(h) {
        return '-' + h.toLowerCase();
      }
      function p(h) {
        return h.charAt(1).toUpperCase();
      }
    }
  }),
  Qb = U({
    '../../node_modules/hast-util-parse-selector/index.js'(e, t) {
      t.exports = r;
      var n = /[#.]/g;
      function r(a, o) {
        for (
          var i = a || '', s = o || 'div', u = {}, c = 0, d, g, f;
          c < i.length;

        )
          (n.lastIndex = c),
            (f = n.exec(i)),
            (d = i.slice(c, f ? f.index : i.length)),
            d &&
              (g
                ? g === '#'
                  ? (u.id = d)
                  : u.className
                  ? u.className.push(d)
                  : (u.className = [d])
                : (s = d),
              (c += d.length)),
            f && ((g = f[0]), c++);
        return { type: 'element', tagName: s, properties: u, children: [] };
      }
    }
  }),
  Jb = U({
    '../../node_modules/space-separated-tokens/index.js'(e) {
      (e.parse = a), (e.stringify = o);
      var t = '',
        n = ' ',
        r = /[ \t\n\r\f]+/g;
      function a(i) {
        var s = String(i || t).trim();
        return s === t ? [] : s.split(r);
      }
      function o(i) {
        return i.join(n).trim();
      }
    }
  }),
  e6 = U({
    '../../node_modules/comma-separated-tokens/index.js'(e) {
      (e.parse = a), (e.stringify = o);
      var t = ',',
        n = ' ',
        r = '';
      function a(i) {
        for (
          var s = [], u = String(i || r), c = u.indexOf(t), d = 0, g = !1, f;
          !g;

        )
          c === -1 && ((c = u.length), (g = !0)),
            (f = u.slice(d, c).trim()),
            (f || !g) && s.push(f),
            (d = c + 1),
            (c = u.indexOf(t, d));
        return s;
      }
      function o(i, s) {
        var u = s || {},
          c = u.padLeft === !1 ? r : n,
          d = u.padRight ? n : r;
        return (
          i[i.length - 1] === r && (i = i.concat(r)), i.join(d + t + c).trim()
        );
      }
    }
  }),
  t6 = U({
    '../../node_modules/hastscript/factory.js'(e, t) {
      var n = Xb(),
        r = Q0(),
        a = Qb(),
        o = Jb().parse,
        i = e6().parse;
      t.exports = u;
      var s = {}.hasOwnProperty;
      function u(w, y, b) {
        var v = b ? m(b) : null;
        return E;
        function E(S, A) {
          var C = a(S, y),
            T = Array.prototype.slice.call(arguments, 2),
            _ = C.tagName.toLowerCase(),
            O;
          if (
            ((C.tagName = v && s.call(v, _) ? v[_] : _),
            A && c(A, C) && (T.unshift(A), (A = null)),
            A)
          )
            for (O in A) x(C.properties, O, A[O]);
          return (
            g(C.children, T),
            C.tagName === 'template' &&
              ((C.content = { type: 'root', children: C.children }),
              (C.children = [])),
            C
          );
        }
        function x(S, A, C) {
          var T, _, O;
          C == null ||
            C !== C ||
            ((T = n(w, A)),
            (_ = T.property),
            (O = C),
            typeof O == 'string' &&
              (T.spaceSeparated
                ? (O = o(O))
                : T.commaSeparated
                ? (O = i(O))
                : T.commaOrSpaceSeparated && (O = o(i(O).join(' ')))),
            _ === 'style' && typeof C != 'string' && (O = h(O)),
            _ === 'className' && S.className && (O = S.className.concat(O)),
            (S[_] = f(T, _, O)));
        }
      }
      function c(w, y) {
        return typeof w == 'string' || 'length' in w || d(y.tagName, w);
      }
      function d(w, y) {
        var b = y.type;
        return w === 'input' || !b || typeof b != 'string'
          ? !1
          : typeof y.children == 'object' && 'length' in y.children
          ? !0
          : ((b = b.toLowerCase()),
            w === 'button'
              ? b !== 'menu' &&
                b !== 'submit' &&
                b !== 'reset' &&
                b !== 'button'
              : 'value' in y);
      }
      function g(w, y) {
        var b, v;
        if (typeof y == 'string' || typeof y == 'number') {
          w.push({ type: 'text', value: String(y) });
          return;
        }
        if (typeof y == 'object' && 'length' in y) {
          for (b = -1, v = y.length; ++b < v; ) g(w, y[b]);
          return;
        }
        if (typeof y != 'object' || !('type' in y))
          throw new Error('Expected node, nodes, or string, got `' + y + '`');
        w.push(y);
      }
      function f(w, y, b) {
        var v, E, x;
        if (typeof b != 'object' || !('length' in b)) return p(w, y, b);
        for (E = b.length, v = -1, x = []; ++v < E; ) x[v] = p(w, y, b[v]);
        return x;
      }
      function p(w, y, b) {
        var v = b;
        return (
          w.number || w.positiveNumber
            ? !isNaN(v) && v !== '' && (v = Number(v))
            : (w.boolean || w.overloadedBoolean) &&
              typeof v == 'string' &&
              (v === '' || r(b) === r(y)) &&
              (v = !0),
          v
        );
      }
      function h(w) {
        var y = [],
          b;
        for (b in w) y.push([b, w[b]].join(': '));
        return y.join('; ');
      }
      function m(w) {
        for (var y = w.length, b = -1, v = {}, E; ++b < y; )
          (E = w[b]), (v[E.toLowerCase()] = E);
        return v;
      }
    }
  }),
  n6 = U({
    '../../node_modules/hastscript/html.js'(e, t) {
      var n = Yb(),
        r = t6(),
        a = r(n, 'div');
      (a.displayName = 'html'), (t.exports = a);
    }
  }),
  r6 = U({
    '../../node_modules/hastscript/index.js'(e, t) {
      t.exports = n6();
    }
  }),
  a6 = U({
    '../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json'(
      e,
      t
    ) {
      t.exports = {
        AElig: 'Æ',
        AMP: '&',
        Aacute: 'Á',
        Acirc: 'Â',
        Agrave: 'À',
        Aring: 'Å',
        Atilde: 'Ã',
        Auml: 'Ä',
        COPY: '©',
        Ccedil: 'Ç',
        ETH: 'Ð',
        Eacute: 'É',
        Ecirc: 'Ê',
        Egrave: 'È',
        Euml: 'Ë',
        GT: '>',
        Iacute: 'Í',
        Icirc: 'Î',
        Igrave: 'Ì',
        Iuml: 'Ï',
        LT: '<',
        Ntilde: 'Ñ',
        Oacute: 'Ó',
        Ocirc: 'Ô',
        Ograve: 'Ò',
        Oslash: 'Ø',
        Otilde: 'Õ',
        Ouml: 'Ö',
        QUOT: '"',
        REG: '®',
        THORN: 'Þ',
        Uacute: 'Ú',
        Ucirc: 'Û',
        Ugrave: 'Ù',
        Uuml: 'Ü',
        Yacute: 'Ý',
        aacute: 'á',
        acirc: 'â',
        acute: '´',
        aelig: 'æ',
        agrave: 'à',
        amp: '&',
        aring: 'å',
        atilde: 'ã',
        auml: 'ä',
        brvbar: '¦',
        ccedil: 'ç',
        cedil: '¸',
        cent: '¢',
        copy: '©',
        curren: '¤',
        deg: '°',
        divide: '÷',
        eacute: 'é',
        ecirc: 'ê',
        egrave: 'è',
        eth: 'ð',
        euml: 'ë',
        frac12: '½',
        frac14: '¼',
        frac34: '¾',
        gt: '>',
        iacute: 'í',
        icirc: 'î',
        iexcl: '¡',
        igrave: 'ì',
        iquest: '¿',
        iuml: 'ï',
        laquo: '«',
        lt: '<',
        macr: '¯',
        micro: 'µ',
        middot: '·',
        nbsp: ' ',
        not: '¬',
        ntilde: 'ñ',
        oacute: 'ó',
        ocirc: 'ô',
        ograve: 'ò',
        ordf: 'ª',
        ordm: 'º',
        oslash: 'ø',
        otilde: 'õ',
        ouml: 'ö',
        para: '¶',
        plusmn: '±',
        pound: '£',
        quot: '"',
        raquo: '»',
        reg: '®',
        sect: '§',
        shy: '­',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        szlig: 'ß',
        thorn: 'þ',
        times: '×',
        uacute: 'ú',
        ucirc: 'û',
        ugrave: 'ù',
        uml: '¨',
        uuml: 'ü',
        yacute: 'ý',
        yen: '¥',
        yuml: 'ÿ'
      };
    }
  }),
  o6 = U({
    '../../node_modules/character-reference-invalid/index.json'(e, t) {
      t.exports = {
        0: '�',
        128: '€',
        130: '‚',
        131: 'ƒ',
        132: '„',
        133: '…',
        134: '†',
        135: '‡',
        136: 'ˆ',
        137: '‰',
        138: 'Š',
        139: '‹',
        140: 'Œ',
        142: 'Ž',
        145: '‘',
        146: '’',
        147: '“',
        148: '”',
        149: '•',
        150: '–',
        151: '—',
        152: '˜',
        153: '™',
        154: 'š',
        155: '›',
        156: 'œ',
        158: 'ž',
        159: 'Ÿ'
      };
    }
  }),
  Pm = U({
    '../../node_modules/is-decimal/index.js'(e, t) {
      t.exports = n;
      function n(r) {
        var a = typeof r == 'string' ? r.charCodeAt(0) : r;
        return a >= 48 && a <= 57;
      }
    }
  }),
  l6 = U({
    '../../node_modules/is-hexadecimal/index.js'(e, t) {
      t.exports = n;
      function n(r) {
        var a = typeof r == 'string' ? r.charCodeAt(0) : r;
        return (
          (a >= 97 && a <= 102) || (a >= 65 && a <= 70) || (a >= 48 && a <= 57)
        );
      }
    }
  }),
  i6 = U({
    '../../node_modules/is-alphabetical/index.js'(e, t) {
      t.exports = n;
      function n(r) {
        var a = typeof r == 'string' ? r.charCodeAt(0) : r;
        return (a >= 97 && a <= 122) || (a >= 65 && a <= 90);
      }
    }
  }),
  u6 = U({
    '../../node_modules/is-alphanumerical/index.js'(e, t) {
      var n = i6(),
        r = Pm();
      t.exports = a;
      function a(o) {
        return n(o) || r(o);
      }
    }
  }),
  s6 = U({
    '../../node_modules/parse-entities/node_modules/character-entities/index.json'(
      e,
      t
    ) {
      t.exports = {
        AEli: 'Æ',
        AElig: 'Æ',
        AM: '&',
        AMP: '&',
        Aacut: 'Á',
        Aacute: 'Á',
        Abreve: 'Ă',
        Acir: 'Â',
        Acirc: 'Â',
        Acy: 'А',
        Afr: '𝔄',
        Agrav: 'À',
        Agrave: 'À',
        Alpha: 'Α',
        Amacr: 'Ā',
        And: '⩓',
        Aogon: 'Ą',
        Aopf: '𝔸',
        ApplyFunction: '⁡',
        Arin: 'Å',
        Aring: 'Å',
        Ascr: '𝒜',
        Assign: '≔',
        Atild: 'Ã',
        Atilde: 'Ã',
        Aum: 'Ä',
        Auml: 'Ä',
        Backslash: '∖',
        Barv: '⫧',
        Barwed: '⌆',
        Bcy: 'Б',
        Because: '∵',
        Bernoullis: 'ℬ',
        Beta: 'Β',
        Bfr: '𝔅',
        Bopf: '𝔹',
        Breve: '˘',
        Bscr: 'ℬ',
        Bumpeq: '≎',
        CHcy: 'Ч',
        COP: '©',
        COPY: '©',
        Cacute: 'Ć',
        Cap: '⋒',
        CapitalDifferentialD: 'ⅅ',
        Cayleys: 'ℭ',
        Ccaron: 'Č',
        Ccedi: 'Ç',
        Ccedil: 'Ç',
        Ccirc: 'Ĉ',
        Cconint: '∰',
        Cdot: 'Ċ',
        Cedilla: '¸',
        CenterDot: '·',
        Cfr: 'ℭ',
        Chi: 'Χ',
        CircleDot: '⊙',
        CircleMinus: '⊖',
        CirclePlus: '⊕',
        CircleTimes: '⊗',
        ClockwiseContourIntegral: '∲',
        CloseCurlyDoubleQuote: '”',
        CloseCurlyQuote: '’',
        Colon: '∷',
        Colone: '⩴',
        Congruent: '≡',
        Conint: '∯',
        ContourIntegral: '∮',
        Copf: 'ℂ',
        Coproduct: '∐',
        CounterClockwiseContourIntegral: '∳',
        Cross: '⨯',
        Cscr: '𝒞',
        Cup: '⋓',
        CupCap: '≍',
        DD: 'ⅅ',
        DDotrahd: '⤑',
        DJcy: 'Ђ',
        DScy: 'Ѕ',
        DZcy: 'Џ',
        Dagger: '‡',
        Darr: '↡',
        Dashv: '⫤',
        Dcaron: 'Ď',
        Dcy: 'Д',
        Del: '∇',
        Delta: 'Δ',
        Dfr: '𝔇',
        DiacriticalAcute: '´',
        DiacriticalDot: '˙',
        DiacriticalDoubleAcute: '˝',
        DiacriticalGrave: '`',
        DiacriticalTilde: '˜',
        Diamond: '⋄',
        DifferentialD: 'ⅆ',
        Dopf: '𝔻',
        Dot: '¨',
        DotDot: '⃜',
        DotEqual: '≐',
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
        DownArrowBar: '⤓',
        DownArrowUpArrow: '⇵',
        DownBreve: '̑',
        DownLeftRightVector: '⥐',
        DownLeftTeeVector: '⥞',
        DownLeftVector: '↽',
        DownLeftVectorBar: '⥖',
        DownRightTeeVector: '⥟',
        DownRightVector: '⇁',
        DownRightVectorBar: '⥗',
        DownTee: '⊤',
        DownTeeArrow: '↧',
        Downarrow: '⇓',
        Dscr: '𝒟',
        Dstrok: 'Đ',
        ENG: 'Ŋ',
        ET: 'Ð',
        ETH: 'Ð',
        Eacut: 'É',
        Eacute: 'É',
        Ecaron: 'Ě',
        Ecir: 'Ê',
        Ecirc: 'Ê',
        Ecy: 'Э',
        Edot: 'Ė',
        Efr: '𝔈',
        Egrav: 'È',
        Egrave: 'È',
        Element: '∈',
        Emacr: 'Ē',
        EmptySmallSquare: '◻',
        EmptyVerySmallSquare: '▫',
        Eogon: 'Ę',
        Eopf: '𝔼',
        Epsilon: 'Ε',
        Equal: '⩵',
        EqualTilde: '≂',
        Equilibrium: '⇌',
        Escr: 'ℰ',
        Esim: '⩳',
        Eta: 'Η',
        Eum: 'Ë',
        Euml: 'Ë',
        Exists: '∃',
        ExponentialE: 'ⅇ',
        Fcy: 'Ф',
        Ffr: '𝔉',
        FilledSmallSquare: '◼',
        FilledVerySmallSquare: '▪',
        Fopf: '𝔽',
        ForAll: '∀',
        Fouriertrf: 'ℱ',
        Fscr: 'ℱ',
        GJcy: 'Ѓ',
        G: '>',
        GT: '>',
        Gamma: 'Γ',
        Gammad: 'Ϝ',
        Gbreve: 'Ğ',
        Gcedil: 'Ģ',
        Gcirc: 'Ĝ',
        Gcy: 'Г',
        Gdot: 'Ġ',
        Gfr: '𝔊',
        Gg: '⋙',
        Gopf: '𝔾',
        GreaterEqual: '≥',
        GreaterEqualLess: '⋛',
        GreaterFullEqual: '≧',
        GreaterGreater: '⪢',
        GreaterLess: '≷',
        GreaterSlantEqual: '⩾',
        GreaterTilde: '≳',
        Gscr: '𝒢',
        Gt: '≫',
        HARDcy: 'Ъ',
        Hacek: 'ˇ',
        Hat: '^',
        Hcirc: 'Ĥ',
        Hfr: 'ℌ',
        HilbertSpace: 'ℋ',
        Hopf: 'ℍ',
        HorizontalLine: '─',
        Hscr: 'ℋ',
        Hstrok: 'Ħ',
        HumpDownHump: '≎',
        HumpEqual: '≏',
        IEcy: 'Е',
        IJlig: 'Ĳ',
        IOcy: 'Ё',
        Iacut: 'Í',
        Iacute: 'Í',
        Icir: 'Î',
        Icirc: 'Î',
        Icy: 'И',
        Idot: 'İ',
        Ifr: 'ℑ',
        Igrav: 'Ì',
        Igrave: 'Ì',
        Im: 'ℑ',
        Imacr: 'Ī',
        ImaginaryI: 'ⅈ',
        Implies: '⇒',
        Int: '∬',
        Integral: '∫',
        Intersection: '⋂',
        InvisibleComma: '⁣',
        InvisibleTimes: '⁢',
        Iogon: 'Į',
        Iopf: '𝕀',
        Iota: 'Ι',
        Iscr: 'ℐ',
        Itilde: 'Ĩ',
        Iukcy: 'І',
        Ium: 'Ï',
        Iuml: 'Ï',
        Jcirc: 'Ĵ',
        Jcy: 'Й',
        Jfr: '𝔍',
        Jopf: '𝕁',
        Jscr: '𝒥',
        Jsercy: 'Ј',
        Jukcy: 'Є',
        KHcy: 'Х',
        KJcy: 'Ќ',
        Kappa: 'Κ',
        Kcedil: 'Ķ',
        Kcy: 'К',
        Kfr: '𝔎',
        Kopf: '𝕂',
        Kscr: '𝒦',
        LJcy: 'Љ',
        L: '<',
        LT: '<',
        Lacute: 'Ĺ',
        Lambda: 'Λ',
        Lang: '⟪',
        Laplacetrf: 'ℒ',
        Larr: '↞',
        Lcaron: 'Ľ',
        Lcedil: 'Ļ',
        Lcy: 'Л',
        LeftAngleBracket: '⟨',
        LeftArrow: '←',
        LeftArrowBar: '⇤',
        LeftArrowRightArrow: '⇆',
        LeftCeiling: '⌈',
        LeftDoubleBracket: '⟦',
        LeftDownTeeVector: '⥡',
        LeftDownVector: '⇃',
        LeftDownVectorBar: '⥙',
        LeftFloor: '⌊',
        LeftRightArrow: '↔',
        LeftRightVector: '⥎',
        LeftTee: '⊣',
        LeftTeeArrow: '↤',
        LeftTeeVector: '⥚',
        LeftTriangle: '⊲',
        LeftTriangleBar: '⧏',
        LeftTriangleEqual: '⊴',
        LeftUpDownVector: '⥑',
        LeftUpTeeVector: '⥠',
        LeftUpVector: '↿',
        LeftUpVectorBar: '⥘',
        LeftVector: '↼',
        LeftVectorBar: '⥒',
        Leftarrow: '⇐',
        Leftrightarrow: '⇔',
        LessEqualGreater: '⋚',
        LessFullEqual: '≦',
        LessGreater: '≶',
        LessLess: '⪡',
        LessSlantEqual: '⩽',
        LessTilde: '≲',
        Lfr: '𝔏',
        Ll: '⋘',
        Lleftarrow: '⇚',
        Lmidot: 'Ŀ',
        LongLeftArrow: '⟵',
        LongLeftRightArrow: '⟷',
        LongRightArrow: '⟶',
        Longleftarrow: '⟸',
        Longleftrightarrow: '⟺',
        Longrightarrow: '⟹',
        Lopf: '𝕃',
        LowerLeftArrow: '↙',
        LowerRightArrow: '↘',
        Lscr: 'ℒ',
        Lsh: '↰',
        Lstrok: 'Ł',
        Lt: '≪',
        Map: '⤅',
        Mcy: 'М',
        MediumSpace: ' ',
        Mellintrf: 'ℳ',
        Mfr: '𝔐',
        MinusPlus: '∓',
        Mopf: '𝕄',
        Mscr: 'ℳ',
        Mu: 'Μ',
        NJcy: 'Њ',
        Nacute: 'Ń',
        Ncaron: 'Ň',
        Ncedil: 'Ņ',
        Ncy: 'Н',
        NegativeMediumSpace: '​',
        NegativeThickSpace: '​',
        NegativeThinSpace: '​',
        NegativeVeryThinSpace: '​',
        NestedGreaterGreater: '≫',
        NestedLessLess: '≪',
        NewLine: `
`,
        Nfr: '𝔑',
        NoBreak: '⁠',
        NonBreakingSpace: ' ',
        Nopf: 'ℕ',
        Not: '⫬',
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
        Nscr: '𝒩',
        Ntild: 'Ñ',
        Ntilde: 'Ñ',
        Nu: 'Ν',
        OElig: 'Œ',
        Oacut: 'Ó',
        Oacute: 'Ó',
        Ocir: 'Ô',
        Ocirc: 'Ô',
        Ocy: 'О',
        Odblac: 'Ő',
        Ofr: '𝔒',
        Ograv: 'Ò',
        Ograve: 'Ò',
        Omacr: 'Ō',
        Omega: 'Ω',
        Omicron: 'Ο',
        Oopf: '𝕆',
        OpenCurlyDoubleQuote: '“',
        OpenCurlyQuote: '‘',
        Or: '⩔',
        Oscr: '𝒪',
        Oslas: 'Ø',
        Oslash: 'Ø',
        Otild: 'Õ',
        Otilde: 'Õ',
        Otimes: '⨷',
        Oum: 'Ö',
        Ouml: 'Ö',
        OverBar: '‾',
        OverBrace: '⏞',
        OverBracket: '⎴',
        OverParenthesis: '⏜',
        PartialD: '∂',
        Pcy: 'П',
        Pfr: '𝔓',
        Phi: 'Φ',
        Pi: 'Π',
        PlusMinus: '±',
        Poincareplane: 'ℌ',
        Popf: 'ℙ',
        Pr: '⪻',
        Precedes: '≺',
        PrecedesEqual: '⪯',
        PrecedesSlantEqual: '≼',
        PrecedesTilde: '≾',
        Prime: '″',
        Product: '∏',
        Proportion: '∷',
        Proportional: '∝',
        Pscr: '𝒫',
        Psi: 'Ψ',
        QUO: '"',
        QUOT: '"',
        Qfr: '𝔔',
        Qopf: 'ℚ',
        Qscr: '𝒬',
        RBarr: '⤐',
        RE: '®',
        REG: '®',
        Racute: 'Ŕ',
        Rang: '⟫',
        Rarr: '↠',
        Rarrtl: '⤖',
        Rcaron: 'Ř',
        Rcedil: 'Ŗ',
        Rcy: 'Р',
        Re: 'ℜ',
        ReverseElement: '∋',
        ReverseEquilibrium: '⇋',
        ReverseUpEquilibrium: '⥯',
        Rfr: 'ℜ',
        Rho: 'Ρ',
        RightAngleBracket: '⟩',
        RightArrow: '→',
        RightArrowBar: '⇥',
        RightArrowLeftArrow: '⇄',
        RightCeiling: '⌉',
        RightDoubleBracket: '⟧',
        RightDownTeeVector: '⥝',
        RightDownVector: '⇂',
        RightDownVectorBar: '⥕',
        RightFloor: '⌋',
        RightTee: '⊢',
        RightTeeArrow: '↦',
        RightTeeVector: '⥛',
        RightTriangle: '⊳',
        RightTriangleBar: '⧐',
        RightTriangleEqual: '⊵',
        RightUpDownVector: '⥏',
        RightUpTeeVector: '⥜',
        RightUpVector: '↾',
        RightUpVectorBar: '⥔',
        RightVector: '⇀',
        RightVectorBar: '⥓',
        Rightarrow: '⇒',
        Ropf: 'ℝ',
        RoundImplies: '⥰',
        Rrightarrow: '⇛',
        Rscr: 'ℛ',
        Rsh: '↱',
        RuleDelayed: '⧴',
        SHCHcy: 'Щ',
        SHcy: 'Ш',
        SOFTcy: 'Ь',
        Sacute: 'Ś',
        Sc: '⪼',
        Scaron: 'Š',
        Scedil: 'Ş',
        Scirc: 'Ŝ',
        Scy: 'С',
        Sfr: '𝔖',
        ShortDownArrow: '↓',
        ShortLeftArrow: '←',
        ShortRightArrow: '→',
        ShortUpArrow: '↑',
        Sigma: 'Σ',
        SmallCircle: '∘',
        Sopf: '𝕊',
        Sqrt: '√',
        Square: '□',
        SquareIntersection: '⊓',
        SquareSubset: '⊏',
        SquareSubsetEqual: '⊑',
        SquareSuperset: '⊐',
        SquareSupersetEqual: '⊒',
        SquareUnion: '⊔',
        Sscr: '𝒮',
        Star: '⋆',
        Sub: '⋐',
        Subset: '⋐',
        SubsetEqual: '⊆',
        Succeeds: '≻',
        SucceedsEqual: '⪰',
        SucceedsSlantEqual: '≽',
        SucceedsTilde: '≿',
        SuchThat: '∋',
        Sum: '∑',
        Sup: '⋑',
        Superset: '⊃',
        SupersetEqual: '⊇',
        Supset: '⋑',
        THOR: 'Þ',
        THORN: 'Þ',
        TRADE: '™',
        TSHcy: 'Ћ',
        TScy: 'Ц',
        Tab: '	',
        Tau: 'Τ',
        Tcaron: 'Ť',
        Tcedil: 'Ţ',
        Tcy: 'Т',
        Tfr: '𝔗',
        Therefore: '∴',
        Theta: 'Θ',
        ThickSpace: '  ',
        ThinSpace: ' ',
        Tilde: '∼',
        TildeEqual: '≃',
        TildeFullEqual: '≅',
        TildeTilde: '≈',
        Topf: '𝕋',
        TripleDot: '⃛',
        Tscr: '𝒯',
        Tstrok: 'Ŧ',
        Uacut: 'Ú',
        Uacute: 'Ú',
        Uarr: '↟',
        Uarrocir: '⥉',
        Ubrcy: 'Ў',
        Ubreve: 'Ŭ',
        Ucir: 'Û',
        Ucirc: 'Û',
        Ucy: 'У',
        Udblac: 'Ű',
        Ufr: '𝔘',
        Ugrav: 'Ù',
        Ugrave: 'Ù',
        Umacr: 'Ū',
        UnderBar: '_',
        UnderBrace: '⏟',
        UnderBracket: '⎵',
        UnderParenthesis: '⏝',
        Union: '⋃',
        UnionPlus: '⊎',
        Uogon: 'Ų',
        Uopf: '𝕌',
        UpArrow: '↑',
        UpArrowBar: '⤒',
        UpArrowDownArrow: '⇅',
        UpDownArrow: '↕',
        UpEquilibrium: '⥮',
        UpTee: '⊥',
        UpTeeArrow: '↥',
        Uparrow: '⇑',
        Updownarrow: '⇕',
        UpperLeftArrow: '↖',
        UpperRightArrow: '↗',
        Upsi: 'ϒ',
        Upsilon: 'Υ',
        Uring: 'Ů',
        Uscr: '𝒰',
        Utilde: 'Ũ',
        Uum: 'Ü',
        Uuml: 'Ü',
        VDash: '⊫',
        Vbar: '⫫',
        Vcy: 'В',
        Vdash: '⊩',
        Vdashl: '⫦',
        Vee: '⋁',
        Verbar: '‖',
        Vert: '‖',
        VerticalBar: '∣',
        VerticalLine: '|',
        VerticalSeparator: '❘',
        VerticalTilde: '≀',
        VeryThinSpace: ' ',
        Vfr: '𝔙',
        Vopf: '𝕍',
        Vscr: '𝒱',
        Vvdash: '⊪',
        Wcirc: 'Ŵ',
        Wedge: '⋀',
        Wfr: '𝔚',
        Wopf: '𝕎',
        Wscr: '𝒲',
        Xfr: '𝔛',
        Xi: 'Ξ',
        Xopf: '𝕏',
        Xscr: '𝒳',
        YAcy: 'Я',
        YIcy: 'Ї',
        YUcy: 'Ю',
        Yacut: 'Ý',
        Yacute: 'Ý',
        Ycirc: 'Ŷ',
        Ycy: 'Ы',
        Yfr: '𝔜',
        Yopf: '𝕐',
        Yscr: '𝒴',
        Yuml: 'Ÿ',
        ZHcy: 'Ж',
        Zacute: 'Ź',
        Zcaron: 'Ž',
        Zcy: 'З',
        Zdot: 'Ż',
        ZeroWidthSpace: '​',
        Zeta: 'Ζ',
        Zfr: 'ℨ',
        Zopf: 'ℤ',
        Zscr: '𝒵',
        aacut: 'á',
        aacute: 'á',
        abreve: 'ă',
        ac: '∾',
        acE: '∾̳',
        acd: '∿',
        acir: 'â',
        acirc: 'â',
        acut: '´',
        acute: '´',
        acy: 'а',
        aeli: 'æ',
        aelig: 'æ',
        af: '⁡',
        afr: '𝔞',
        agrav: 'à',
        agrave: 'à',
        alefsym: 'ℵ',
        aleph: 'ℵ',
        alpha: 'α',
        amacr: 'ā',
        amalg: '⨿',
        am: '&',
        amp: '&',
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
        aogon: 'ą',
        aopf: '𝕒',
        ap: '≈',
        apE: '⩰',
        apacir: '⩯',
        ape: '≊',
        apid: '≋',
        apos: "'",
        approx: '≈',
        approxeq: '≊',
        arin: 'å',
        aring: 'å',
        ascr: '𝒶',
        ast: '*',
        asymp: '≈',
        asympeq: '≍',
        atild: 'ã',
        atilde: 'ã',
        aum: 'ä',
        auml: 'ä',
        awconint: '∳',
        awint: '⨑',
        bNot: '⫭',
        backcong: '≌',
        backepsilon: '϶',
        backprime: '‵',
        backsim: '∽',
        backsimeq: '⋍',
        barvee: '⊽',
        barwed: '⌅',
        barwedge: '⌅',
        bbrk: '⎵',
        bbrktbrk: '⎶',
        bcong: '≌',
        bcy: 'б',
        bdquo: '„',
        becaus: '∵',
        because: '∵',
        bemptyv: '⦰',
        bepsi: '϶',
        bernou: 'ℬ',
        beta: 'β',
        beth: 'ℶ',
        between: '≬',
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
        bnot: '⌐',
        bopf: '𝕓',
        bot: '⊥',
        bottom: '⊥',
        bowtie: '⋈',
        boxDL: '╗',
        boxDR: '╔',
        boxDl: '╖',
        boxDr: '╓',
        boxH: '═',
        boxHD: '╦',
        boxHU: '╩',
        boxHd: '╤',
        boxHu: '╧',
        boxUL: '╝',
        boxUR: '╚',
        boxUl: '╜',
        boxUr: '╙',
        boxV: '║',
        boxVH: '╬',
        boxVL: '╣',
        boxVR: '╠',
        boxVh: '╫',
        boxVl: '╢',
        boxVr: '╟',
        boxbox: '⧉',
        boxdL: '╕',
        boxdR: '╒',
        boxdl: '┐',
        boxdr: '┌',
        boxh: '─',
        boxhD: '╥',
        boxhU: '╨',
        boxhd: '┬',
        boxhu: '┴',
        boxminus: '⊟',
        boxplus: '⊞',
        boxtimes: '⊠',
        boxuL: '╛',
        boxuR: '╘',
        boxul: '┘',
        boxur: '└',
        boxv: '│',
        boxvH: '╪',
        boxvL: '╡',
        boxvR: '╞',
        boxvh: '┼',
        boxvl: '┤',
        boxvr: '├',
        bprime: '‵',
        breve: '˘',
        brvba: '¦',
        brvbar: '¦',
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
        bumpeq: '≏',
        cacute: 'ć',
        cap: '∩',
        capand: '⩄',
        capbrcup: '⩉',
        capcap: '⩋',
        capcup: '⩇',
        capdot: '⩀',
        caps: '∩︀',
        caret: '⁁',
        caron: 'ˇ',
        ccaps: '⩍',
        ccaron: 'č',
        ccedi: 'ç',
        ccedil: 'ç',
        ccirc: 'ĉ',
        ccups: '⩌',
        ccupssm: '⩐',
        cdot: 'ċ',
        cedi: '¸',
        cedil: '¸',
        cemptyv: '⦲',
        cen: '¢',
        cent: '¢',
        centerdot: '·',
        cfr: '𝔠',
        chcy: 'ч',
        check: '✓',
        checkmark: '✓',
        chi: 'χ',
        cir: '○',
        cirE: '⧃',
        circ: 'ˆ',
        circeq: '≗',
        circlearrowleft: '↺',
        circlearrowright: '↻',
        circledR: '®',
        circledS: 'Ⓢ',
        circledast: '⊛',
        circledcirc: '⊚',
        circleddash: '⊝',
        cire: '≗',
        cirfnint: '⨐',
        cirmid: '⫯',
        cirscir: '⧂',
        clubs: '♣',
        clubsuit: '♣',
        colon: ':',
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
        conint: '∮',
        copf: '𝕔',
        coprod: '∐',
        cop: '©',
        copy: '©',
        copysr: '℗',
        crarr: '↵',
        cross: '✗',
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
        cup: '∪',
        cupbrcap: '⩈',
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
        curre: '¤',
        curren: '¤',
        curvearrowleft: '↶',
        curvearrowright: '↷',
        cuvee: '⋎',
        cuwed: '⋏',
        cwconint: '∲',
        cwint: '∱',
        cylcty: '⌭',
        dArr: '⇓',
        dHar: '⥥',
        dagger: '†',
        daleth: 'ℸ',
        darr: '↓',
        dash: '‐',
        dashv: '⊣',
        dbkarow: '⤏',
        dblac: '˝',
        dcaron: 'ď',
        dcy: 'д',
        dd: 'ⅆ',
        ddagger: '‡',
        ddarr: '⇊',
        ddotseq: '⩷',
        de: '°',
        deg: '°',
        delta: 'δ',
        demptyv: '⦱',
        dfisht: '⥿',
        dfr: '𝔡',
        dharl: '⇃',
        dharr: '⇂',
        diam: '⋄',
        diamond: '⋄',
        diamondsuit: '♦',
        diams: '♦',
        die: '¨',
        digamma: 'ϝ',
        disin: '⋲',
        div: '÷',
        divid: '÷',
        divide: '÷',
        divideontimes: '⋇',
        divonx: '⋇',
        djcy: 'ђ',
        dlcorn: '⌞',
        dlcrop: '⌍',
        dollar: '$',
        dopf: '𝕕',
        dot: '˙',
        doteq: '≐',
        doteqdot: '≑',
        dotminus: '∸',
        dotplus: '∔',
        dotsquare: '⊡',
        doublebarwedge: '⌆',
        downarrow: '↓',
        downdownarrows: '⇊',
        downharpoonleft: '⇃',
        downharpoonright: '⇂',
        drbkarow: '⤐',
        drcorn: '⌟',
        drcrop: '⌌',
        dscr: '𝒹',
        dscy: 'ѕ',
        dsol: '⧶',
        dstrok: 'đ',
        dtdot: '⋱',
        dtri: '▿',
        dtrif: '▾',
        duarr: '⇵',
        duhar: '⥯',
        dwangle: '⦦',
        dzcy: 'џ',
        dzigrarr: '⟿',
        eDDot: '⩷',
        eDot: '≑',
        eacut: 'é',
        eacute: 'é',
        easter: '⩮',
        ecaron: 'ě',
        ecir: 'ê',
        ecirc: 'ê',
        ecolon: '≕',
        ecy: 'э',
        edot: 'ė',
        ee: 'ⅇ',
        efDot: '≒',
        efr: '𝔢',
        eg: '⪚',
        egrav: 'è',
        egrave: 'è',
        egs: '⪖',
        egsdot: '⪘',
        el: '⪙',
        elinters: '⏧',
        ell: 'ℓ',
        els: '⪕',
        elsdot: '⪗',
        emacr: 'ē',
        empty: '∅',
        emptyset: '∅',
        emptyv: '∅',
        emsp13: ' ',
        emsp14: ' ',
        emsp: ' ',
        eng: 'ŋ',
        ensp: ' ',
        eogon: 'ę',
        eopf: '𝕖',
        epar: '⋕',
        eparsl: '⧣',
        eplus: '⩱',
        epsi: 'ε',
        epsilon: 'ε',
        epsiv: 'ϵ',
        eqcirc: '≖',
        eqcolon: '≕',
        eqsim: '≂',
        eqslantgtr: '⪖',
        eqslantless: '⪕',
        equals: '=',
        equest: '≟',
        equiv: '≡',
        equivDD: '⩸',
        eqvparsl: '⧥',
        erDot: '≓',
        erarr: '⥱',
        escr: 'ℯ',
        esdot: '≐',
        esim: '≂',
        eta: 'η',
        et: 'ð',
        eth: 'ð',
        eum: 'ë',
        euml: 'ë',
        euro: '€',
        excl: '!',
        exist: '∃',
        expectation: 'ℰ',
        exponentiale: 'ⅇ',
        fallingdotseq: '≒',
        fcy: 'ф',
        female: '♀',
        ffilig: 'ﬃ',
        fflig: 'ﬀ',
        ffllig: 'ﬄ',
        ffr: '𝔣',
        filig: 'ﬁ',
        fjlig: 'fj',
        flat: '♭',
        fllig: 'ﬂ',
        fltns: '▱',
        fnof: 'ƒ',
        fopf: '𝕗',
        forall: '∀',
        fork: '⋔',
        forkv: '⫙',
        fpartint: '⨍',
        frac1: '¼',
        frac12: '½',
        frac13: '⅓',
        frac14: '¼',
        frac15: '⅕',
        frac16: '⅙',
        frac18: '⅛',
        frac23: '⅔',
        frac25: '⅖',
        frac3: '¾',
        frac34: '¾',
        frac35: '⅗',
        frac38: '⅜',
        frac45: '⅘',
        frac56: '⅚',
        frac58: '⅝',
        frac78: '⅞',
        frasl: '⁄',
        frown: '⌢',
        fscr: '𝒻',
        gE: '≧',
        gEl: '⪌',
        gacute: 'ǵ',
        gamma: 'γ',
        gammad: 'ϝ',
        gap: '⪆',
        gbreve: 'ğ',
        gcirc: 'ĝ',
        gcy: 'г',
        gdot: 'ġ',
        ge: '≥',
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
        gfr: '𝔤',
        gg: '≫',
        ggg: '⋙',
        gimel: 'ℷ',
        gjcy: 'ѓ',
        gl: '≷',
        glE: '⪒',
        gla: '⪥',
        glj: '⪤',
        gnE: '≩',
        gnap: '⪊',
        gnapprox: '⪊',
        gne: '⪈',
        gneq: '⪈',
        gneqq: '≩',
        gnsim: '⋧',
        gopf: '𝕘',
        grave: '`',
        gscr: 'ℊ',
        gsim: '≳',
        gsime: '⪎',
        gsiml: '⪐',
        g: '>',
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
        hArr: '⇔',
        hairsp: ' ',
        half: '½',
        hamilt: 'ℋ',
        hardcy: 'ъ',
        harr: '↔',
        harrcir: '⥈',
        harrw: '↭',
        hbar: 'ℏ',
        hcirc: 'ĥ',
        hearts: '♥',
        heartsuit: '♥',
        hellip: '…',
        hercon: '⊹',
        hfr: '𝔥',
        hksearow: '⤥',
        hkswarow: '⤦',
        hoarr: '⇿',
        homtht: '∻',
        hookleftarrow: '↩',
        hookrightarrow: '↪',
        hopf: '𝕙',
        horbar: '―',
        hscr: '𝒽',
        hslash: 'ℏ',
        hstrok: 'ħ',
        hybull: '⁃',
        hyphen: '‐',
        iacut: 'í',
        iacute: 'í',
        ic: '⁣',
        icir: 'î',
        icirc: 'î',
        icy: 'и',
        iecy: 'е',
        iexc: '¡',
        iexcl: '¡',
        iff: '⇔',
        ifr: '𝔦',
        igrav: 'ì',
        igrave: 'ì',
        ii: 'ⅈ',
        iiiint: '⨌',
        iiint: '∭',
        iinfin: '⧜',
        iiota: '℩',
        ijlig: 'ĳ',
        imacr: 'ī',
        image: 'ℑ',
        imagline: 'ℐ',
        imagpart: 'ℑ',
        imath: 'ı',
        imof: '⊷',
        imped: 'Ƶ',
        in: '∈',
        incare: '℅',
        infin: '∞',
        infintie: '⧝',
        inodot: 'ı',
        int: '∫',
        intcal: '⊺',
        integers: 'ℤ',
        intercal: '⊺',
        intlarhk: '⨗',
        intprod: '⨼',
        iocy: 'ё',
        iogon: 'į',
        iopf: '𝕚',
        iota: 'ι',
        iprod: '⨼',
        iques: '¿',
        iquest: '¿',
        iscr: '𝒾',
        isin: '∈',
        isinE: '⋹',
        isindot: '⋵',
        isins: '⋴',
        isinsv: '⋳',
        isinv: '∈',
        it: '⁢',
        itilde: 'ĩ',
        iukcy: 'і',
        ium: 'ï',
        iuml: 'ï',
        jcirc: 'ĵ',
        jcy: 'й',
        jfr: '𝔧',
        jmath: 'ȷ',
        jopf: '𝕛',
        jscr: '𝒿',
        jsercy: 'ј',
        jukcy: 'є',
        kappa: 'κ',
        kappav: 'ϰ',
        kcedil: 'ķ',
        kcy: 'к',
        kfr: '𝔨',
        kgreen: 'ĸ',
        khcy: 'х',
        kjcy: 'ќ',
        kopf: '𝕜',
        kscr: '𝓀',
        lAarr: '⇚',
        lArr: '⇐',
        lAtail: '⤛',
        lBarr: '⤎',
        lE: '≦',
        lEg: '⪋',
        lHar: '⥢',
        lacute: 'ĺ',
        laemptyv: '⦴',
        lagran: 'ℒ',
        lambda: 'λ',
        lang: '⟨',
        langd: '⦑',
        langle: '⟨',
        lap: '⪅',
        laqu: '«',
        laquo: '«',
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
        latail: '⤙',
        late: '⪭',
        lates: '⪭︀',
        lbarr: '⤌',
        lbbrk: '❲',
        lbrace: '{',
        lbrack: '[',
        lbrke: '⦋',
        lbrksld: '⦏',
        lbrkslu: '⦍',
        lcaron: 'ľ',
        lcedil: 'ļ',
        lceil: '⌈',
        lcub: '{',
        lcy: 'л',
        ldca: '⤶',
        ldquo: '“',
        ldquor: '„',
        ldrdhar: '⥧',
        ldrushar: '⥋',
        ldsh: '↲',
        le: '≤',
        leftarrow: '←',
        leftarrowtail: '↢',
        leftharpoondown: '↽',
        leftharpoonup: '↼',
        leftleftarrows: '⇇',
        leftrightarrow: '↔',
        leftrightarrows: '⇆',
        leftrightharpoons: '⇋',
        leftrightsquigarrow: '↭',
        leftthreetimes: '⋋',
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
        lessgtr: '≶',
        lesssim: '≲',
        lfisht: '⥼',
        lfloor: '⌊',
        lfr: '𝔩',
        lg: '≶',
        lgE: '⪑',
        lhard: '↽',
        lharu: '↼',
        lharul: '⥪',
        lhblk: '▄',
        ljcy: 'љ',
        ll: '≪',
        llarr: '⇇',
        llcorner: '⌞',
        llhard: '⥫',
        lltri: '◺',
        lmidot: 'ŀ',
        lmoust: '⎰',
        lmoustache: '⎰',
        lnE: '≨',
        lnap: '⪉',
        lnapprox: '⪉',
        lne: '⪇',
        lneq: '⪇',
        lneqq: '≨',
        lnsim: '⋦',
        loang: '⟬',
        loarr: '⇽',
        lobrk: '⟦',
        longleftarrow: '⟵',
        longleftrightarrow: '⟷',
        longmapsto: '⟼',
        longrightarrow: '⟶',
        looparrowleft: '↫',
        looparrowright: '↬',
        lopar: '⦅',
        lopf: '𝕝',
        loplus: '⨭',
        lotimes: '⨴',
        lowast: '∗',
        lowbar: '_',
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
        lscr: '𝓁',
        lsh: '↰',
        lsim: '≲',
        lsime: '⪍',
        lsimg: '⪏',
        lsqb: '[',
        lsquo: '‘',
        lsquor: '‚',
        lstrok: 'ł',
        l: '<',
        lt: '<',
        ltcc: '⪦',
        ltcir: '⩹',
        ltdot: '⋖',
        lthree: '⋋',
        ltimes: '⋉',
        ltlarr: '⥶',
        ltquest: '⩻',
        ltrPar: '⦖',
        ltri: '◃',
        ltrie: '⊴',
        ltrif: '◂',
        lurdshar: '⥊',
        luruhar: '⥦',
        lvertneqq: '≨︀',
        lvnE: '≨︀',
        mDDot: '∺',
        mac: '¯',
        macr: '¯',
        male: '♂',
        malt: '✠',
        maltese: '✠',
        map: '↦',
        mapsto: '↦',
        mapstodown: '↧',
        mapstoleft: '↤',
        mapstoup: '↥',
        marker: '▮',
        mcomma: '⨩',
        mcy: 'м',
        mdash: '—',
        measuredangle: '∡',
        mfr: '𝔪',
        mho: '℧',
        micr: 'µ',
        micro: 'µ',
        mid: '∣',
        midast: '*',
        midcir: '⫰',
        middo: '·',
        middot: '·',
        minus: '−',
        minusb: '⊟',
        minusd: '∸',
        minusdu: '⨪',
        mlcp: '⫛',
        mldr: '…',
        mnplus: '∓',
        models: '⊧',
        mopf: '𝕞',
        mp: '∓',
        mscr: '𝓂',
        mstpos: '∾',
        mu: 'μ',
        multimap: '⊸',
        mumap: '⊸',
        nGg: '⋙̸',
        nGt: '≫⃒',
        nGtv: '≫̸',
        nLeftarrow: '⇍',
        nLeftrightarrow: '⇎',
        nLl: '⋘̸',
        nLt: '≪⃒',
        nLtv: '≪̸',
        nRightarrow: '⇏',
        nVDash: '⊯',
        nVdash: '⊮',
        nabla: '∇',
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
        nbs: ' ',
        nbsp: ' ',
        nbump: '≎̸',
        nbumpe: '≏̸',
        ncap: '⩃',
        ncaron: 'ň',
        ncedil: 'ņ',
        ncong: '≇',
        ncongdot: '⩭̸',
        ncup: '⩂',
        ncy: 'н',
        ndash: '–',
        ne: '≠',
        neArr: '⇗',
        nearhk: '⤤',
        nearr: '↗',
        nearrow: '↗',
        nedot: '≐̸',
        nequiv: '≢',
        nesear: '⤨',
        nesim: '≂̸',
        nexist: '∄',
        nexists: '∄',
        nfr: '𝔫',
        ngE: '≧̸',
        nge: '≱',
        ngeq: '≱',
        ngeqq: '≧̸',
        ngeqslant: '⩾̸',
        nges: '⩾̸',
        ngsim: '≵',
        ngt: '≯',
        ngtr: '≯',
        nhArr: '⇎',
        nharr: '↮',
        nhpar: '⫲',
        ni: '∋',
        nis: '⋼',
        nisd: '⋺',
        niv: '∋',
        njcy: 'њ',
        nlArr: '⇍',
        nlE: '≦̸',
        nlarr: '↚',
        nldr: '‥',
        nle: '≰',
        nleftarrow: '↚',
        nleftrightarrow: '↮',
        nleq: '≰',
        nleqq: '≦̸',
        nleqslant: '⩽̸',
        nles: '⩽̸',
        nless: '≮',
        nlsim: '≴',
        nlt: '≮',
        nltri: '⋪',
        nltrie: '⋬',
        nmid: '∤',
        nopf: '𝕟',
        no: '¬',
        not: '¬',
        notin: '∉',
        notinE: '⋹̸',
        notindot: '⋵̸',
        notinva: '∉',
        notinvb: '⋷',
        notinvc: '⋶',
        notni: '∌',
        notniva: '∌',
        notnivb: '⋾',
        notnivc: '⋽',
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
        nrightarrow: '↛',
        nrtri: '⋫',
        nrtrie: '⋭',
        nsc: '⊁',
        nsccue: '⋡',
        nsce: '⪰̸',
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
        ntild: 'ñ',
        ntilde: 'ñ',
        ntlg: '≸',
        ntriangleleft: '⋪',
        ntrianglelefteq: '⋬',
        ntriangleright: '⋫',
        ntrianglerighteq: '⋭',
        nu: 'ν',
        num: '#',
        numero: '№',
        numsp: ' ',
        nvDash: '⊭',
        nvHarr: '⤄',
        nvap: '≍⃒',
        nvdash: '⊬',
        nvge: '≥⃒',
        nvgt: '>⃒',
        nvinfin: '⧞',
        nvlArr: '⤂',
        nvle: '≤⃒',
        nvlt: '<⃒',
        nvltrie: '⊴⃒',
        nvrArr: '⤃',
        nvrtrie: '⊵⃒',
        nvsim: '∼⃒',
        nwArr: '⇖',
        nwarhk: '⤣',
        nwarr: '↖',
        nwarrow: '↖',
        nwnear: '⤧',
        oS: 'Ⓢ',
        oacut: 'ó',
        oacute: 'ó',
        oast: '⊛',
        ocir: 'ô',
        ocirc: 'ô',
        ocy: 'о',
        odash: '⊝',
        odblac: 'ő',
        odiv: '⨸',
        odot: '⊙',
        odsold: '⦼',
        oelig: 'œ',
        ofcir: '⦿',
        ofr: '𝔬',
        ogon: '˛',
        ograv: 'ò',
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
        omacr: 'ō',
        omega: 'ω',
        omicron: 'ο',
        omid: '⦶',
        ominus: '⊖',
        oopf: '𝕠',
        opar: '⦷',
        operp: '⦹',
        oplus: '⊕',
        or: '∨',
        orarr: '↻',
        ord: 'º',
        order: 'ℴ',
        orderof: 'ℴ',
        ordf: 'ª',
        ordm: 'º',
        origof: '⊶',
        oror: '⩖',
        orslope: '⩗',
        orv: '⩛',
        oscr: 'ℴ',
        oslas: 'ø',
        oslash: 'ø',
        osol: '⊘',
        otild: 'õ',
        otilde: 'õ',
        otimes: '⊗',
        otimesas: '⨶',
        oum: 'ö',
        ouml: 'ö',
        ovbar: '⌽',
        par: '¶',
        para: '¶',
        parallel: '∥',
        parsim: '⫳',
        parsl: '⫽',
        part: '∂',
        pcy: 'п',
        percnt: '%',
        period: '.',
        permil: '‰',
        perp: '⊥',
        pertenk: '‱',
        pfr: '𝔭',
        phi: 'φ',
        phiv: 'ϕ',
        phmmat: 'ℳ',
        phone: '☎',
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
        plusm: '±',
        plusmn: '±',
        plussim: '⨦',
        plustwo: '⨧',
        pm: '±',
        pointint: '⨕',
        popf: '𝕡',
        poun: '£',
        pound: '£',
        pr: '≺',
        prE: '⪳',
        prap: '⪷',
        prcue: '≼',
        pre: '⪯',
        prec: '≺',
        precapprox: '⪷',
        preccurlyeq: '≼',
        preceq: '⪯',
        precnapprox: '⪹',
        precneqq: '⪵',
        precnsim: '⋨',
        precsim: '≾',
        prime: '′',
        primes: 'ℙ',
        prnE: '⪵',
        prnap: '⪹',
        prnsim: '⋨',
        prod: '∏',
        profalar: '⌮',
        profline: '⌒',
        profsurf: '⌓',
        prop: '∝',
        propto: '∝',
        prsim: '≾',
        prurel: '⊰',
        pscr: '𝓅',
        psi: 'ψ',
        puncsp: ' ',
        qfr: '𝔮',
        qint: '⨌',
        qopf: '𝕢',
        qprime: '⁗',
        qscr: '𝓆',
        quaternions: 'ℍ',
        quatint: '⨖',
        quest: '?',
        questeq: '≟',
        quo: '"',
        quot: '"',
        rAarr: '⇛',
        rArr: '⇒',
        rAtail: '⤜',
        rBarr: '⤏',
        rHar: '⥤',
        race: '∽̱',
        racute: 'ŕ',
        radic: '√',
        raemptyv: '⦳',
        rang: '⟩',
        rangd: '⦒',
        range: '⦥',
        rangle: '⟩',
        raqu: '»',
        raquo: '»',
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
        rarrtl: '↣',
        rarrw: '↝',
        ratail: '⤚',
        ratio: '∶',
        rationals: 'ℚ',
        rbarr: '⤍',
        rbbrk: '❳',
        rbrace: '}',
        rbrack: ']',
        rbrke: '⦌',
        rbrksld: '⦎',
        rbrkslu: '⦐',
        rcaron: 'ř',
        rcedil: 'ŗ',
        rceil: '⌉',
        rcub: '}',
        rcy: 'р',
        rdca: '⤷',
        rdldhar: '⥩',
        rdquo: '”',
        rdquor: '”',
        rdsh: '↳',
        real: 'ℜ',
        realine: 'ℛ',
        realpart: 'ℜ',
        reals: 'ℝ',
        rect: '▭',
        re: '®',
        reg: '®',
        rfisht: '⥽',
        rfloor: '⌋',
        rfr: '𝔯',
        rhard: '⇁',
        rharu: '⇀',
        rharul: '⥬',
        rho: 'ρ',
        rhov: 'ϱ',
        rightarrow: '→',
        rightarrowtail: '↣',
        rightharpoondown: '⇁',
        rightharpoonup: '⇀',
        rightleftarrows: '⇄',
        rightleftharpoons: '⇌',
        rightrightarrows: '⇉',
        rightsquigarrow: '↝',
        rightthreetimes: '⋌',
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
        ropf: '𝕣',
        roplus: '⨮',
        rotimes: '⨵',
        rpar: ')',
        rpargt: '⦔',
        rppolint: '⨒',
        rrarr: '⇉',
        rsaquo: '›',
        rscr: '𝓇',
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
        ruluhar: '⥨',
        rx: '℞',
        sacute: 'ś',
        sbquo: '‚',
        sc: '≻',
        scE: '⪴',
        scap: '⪸',
        scaron: 'š',
        sccue: '≽',
        sce: '⪰',
        scedil: 'ş',
        scirc: 'ŝ',
        scnE: '⪶',
        scnap: '⪺',
        scnsim: '⋩',
        scpolint: '⨓',
        scsim: '≿',
        scy: 'с',
        sdot: '⋅',
        sdotb: '⊡',
        sdote: '⩦',
        seArr: '⇘',
        searhk: '⤥',
        searr: '↘',
        searrow: '↘',
        sec: '§',
        sect: '§',
        semi: ';',
        seswar: '⤩',
        setminus: '∖',
        setmn: '∖',
        sext: '✶',
        sfr: '𝔰',
        sfrown: '⌢',
        sharp: '♯',
        shchcy: 'щ',
        shcy: 'ш',
        shortmid: '∣',
        shortparallel: '∥',
        sh: '­',
        shy: '­',
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
        smallsetminus: '∖',
        smashp: '⨳',
        smeparsl: '⧤',
        smid: '∣',
        smile: '⌣',
        smt: '⪪',
        smte: '⪬',
        smtes: '⪬︀',
        softcy: 'ь',
        sol: '/',
        solb: '⧄',
        solbar: '⌿',
        sopf: '𝕤',
        spades: '♠',
        spadesuit: '♠',
        spar: '∥',
        sqcap: '⊓',
        sqcaps: '⊓︀',
        sqcup: '⊔',
        sqcups: '⊔︀',
        sqsub: '⊏',
        sqsube: '⊑',
        sqsubset: '⊏',
        sqsubseteq: '⊑',
        sqsup: '⊐',
        sqsupe: '⊒',
        sqsupset: '⊐',
        sqsupseteq: '⊒',
        squ: '□',
        square: '□',
        squarf: '▪',
        squf: '▪',
        srarr: '→',
        sscr: '𝓈',
        ssetmn: '∖',
        ssmile: '⌣',
        sstarf: '⋆',
        star: '☆',
        starf: '★',
        straightepsilon: 'ϵ',
        straightphi: 'ϕ',
        strns: '¯',
        sub: '⊂',
        subE: '⫅',
        subdot: '⪽',
        sube: '⊆',
        subedot: '⫃',
        submult: '⫁',
        subnE: '⫋',
        subne: '⊊',
        subplus: '⪿',
        subrarr: '⥹',
        subset: '⊂',
        subseteq: '⊆',
        subseteqq: '⫅',
        subsetneq: '⊊',
        subsetneqq: '⫋',
        subsim: '⫇',
        subsub: '⫕',
        subsup: '⫓',
        succ: '≻',
        succapprox: '⪸',
        succcurlyeq: '≽',
        succeq: '⪰',
        succnapprox: '⪺',
        succneqq: '⪶',
        succnsim: '⋩',
        succsim: '≿',
        sum: '∑',
        sung: '♪',
        sup: '⊃',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        supE: '⫆',
        supdot: '⪾',
        supdsub: '⫘',
        supe: '⊇',
        supedot: '⫄',
        suphsol: '⟉',
        suphsub: '⫗',
        suplarr: '⥻',
        supmult: '⫂',
        supnE: '⫌',
        supne: '⊋',
        supplus: '⫀',
        supset: '⊃',
        supseteq: '⊇',
        supseteqq: '⫆',
        supsetneq: '⊋',
        supsetneqq: '⫌',
        supsim: '⫈',
        supsub: '⫔',
        supsup: '⫖',
        swArr: '⇙',
        swarhk: '⤦',
        swarr: '↙',
        swarrow: '↙',
        swnwar: '⤪',
        szli: 'ß',
        szlig: 'ß',
        target: '⌖',
        tau: 'τ',
        tbrk: '⎴',
        tcaron: 'ť',
        tcedil: 'ţ',
        tcy: 'т',
        tdot: '⃛',
        telrec: '⌕',
        tfr: '𝔱',
        there4: '∴',
        therefore: '∴',
        theta: 'θ',
        thetasym: 'ϑ',
        thetav: 'ϑ',
        thickapprox: '≈',
        thicksim: '∼',
        thinsp: ' ',
        thkap: '≈',
        thksim: '∼',
        thor: 'þ',
        thorn: 'þ',
        tilde: '˜',
        time: '×',
        times: '×',
        timesb: '⊠',
        timesbar: '⨱',
        timesd: '⨰',
        tint: '∭',
        toea: '⤨',
        top: '⊤',
        topbot: '⌶',
        topcir: '⫱',
        topf: '𝕥',
        topfork: '⫚',
        tosa: '⤩',
        tprime: '‴',
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
        triplus: '⨹',
        trisb: '⧍',
        tritime: '⨻',
        trpezium: '⏢',
        tscr: '𝓉',
        tscy: 'ц',
        tshcy: 'ћ',
        tstrok: 'ŧ',
        twixt: '≬',
        twoheadleftarrow: '↞',
        twoheadrightarrow: '↠',
        uArr: '⇑',
        uHar: '⥣',
        uacut: 'ú',
        uacute: 'ú',
        uarr: '↑',
        ubrcy: 'ў',
        ubreve: 'ŭ',
        ucir: 'û',
        ucirc: 'û',
        ucy: 'у',
        udarr: '⇅',
        udblac: 'ű',
        udhar: '⥮',
        ufisht: '⥾',
        ufr: '𝔲',
        ugrav: 'ù',
        ugrave: 'ù',
        uharl: '↿',
        uharr: '↾',
        uhblk: '▀',
        ulcorn: '⌜',
        ulcorner: '⌜',
        ulcrop: '⌏',
        ultri: '◸',
        umacr: 'ū',
        um: '¨',
        uml: '¨',
        uogon: 'ų',
        uopf: '𝕦',
        uparrow: '↑',
        updownarrow: '↕',
        upharpoonleft: '↿',
        upharpoonright: '↾',
        uplus: '⊎',
        upsi: 'υ',
        upsih: 'ϒ',
        upsilon: 'υ',
        upuparrows: '⇈',
        urcorn: '⌝',
        urcorner: '⌝',
        urcrop: '⌎',
        uring: 'ů',
        urtri: '◹',
        uscr: '𝓊',
        utdot: '⋰',
        utilde: 'ũ',
        utri: '▵',
        utrif: '▴',
        uuarr: '⇈',
        uum: 'ü',
        uuml: 'ü',
        uwangle: '⦧',
        vArr: '⇕',
        vBar: '⫨',
        vBarv: '⫩',
        vDash: '⊨',
        vangrt: '⦜',
        varepsilon: 'ϵ',
        varkappa: 'ϰ',
        varnothing: '∅',
        varphi: 'ϕ',
        varpi: 'ϖ',
        varpropto: '∝',
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
        vcy: 'в',
        vdash: '⊢',
        vee: '∨',
        veebar: '⊻',
        veeeq: '≚',
        vellip: '⋮',
        verbar: '|',
        vert: '|',
        vfr: '𝔳',
        vltri: '⊲',
        vnsub: '⊂⃒',
        vnsup: '⊃⃒',
        vopf: '𝕧',
        vprop: '∝',
        vrtri: '⊳',
        vscr: '𝓋',
        vsubnE: '⫋︀',
        vsubne: '⊊︀',
        vsupnE: '⫌︀',
        vsupne: '⊋︀',
        vzigzag: '⦚',
        wcirc: 'ŵ',
        wedbar: '⩟',
        wedge: '∧',
        wedgeq: '≙',
        weierp: '℘',
        wfr: '𝔴',
        wopf: '𝕨',
        wp: '℘',
        wr: '≀',
        wreath: '≀',
        wscr: '𝓌',
        xcap: '⋂',
        xcirc: '◯',
        xcup: '⋃',
        xdtri: '▽',
        xfr: '𝔵',
        xhArr: '⟺',
        xharr: '⟷',
        xi: 'ξ',
        xlArr: '⟸',
        xlarr: '⟵',
        xmap: '⟼',
        xnis: '⋻',
        xodot: '⨀',
        xopf: '𝕩',
        xoplus: '⨁',
        xotime: '⨂',
        xrArr: '⟹',
        xrarr: '⟶',
        xscr: '𝓍',
        xsqcup: '⨆',
        xuplus: '⨄',
        xutri: '△',
        xvee: '⋁',
        xwedge: '⋀',
        yacut: 'ý',
        yacute: 'ý',
        yacy: 'я',
        ycirc: 'ŷ',
        ycy: 'ы',
        ye: '¥',
        yen: '¥',
        yfr: '𝔶',
        yicy: 'ї',
        yopf: '𝕪',
        yscr: '𝓎',
        yucy: 'ю',
        yum: 'ÿ',
        yuml: 'ÿ',
        zacute: 'ź',
        zcaron: 'ž',
        zcy: 'з',
        zdot: 'ż',
        zeetrf: 'ℨ',
        zeta: 'ζ',
        zfr: '𝔷',
        zhcy: 'ж',
        zigrarr: '⇝',
        zopf: '𝕫',
        zscr: '𝓏',
        zwj: '‍',
        zwnj: '‌'
      };
    }
  }),
  c6 = U({
    '../../node_modules/parse-entities/decode-entity.js'(e, t) {
      var n = s6();
      t.exports = a;
      var r = {}.hasOwnProperty;
      function a(o) {
        return r.call(n, o) ? n[o] : !1;
      }
    }
  }),
  d6 = U({
    '../../node_modules/parse-entities/index.js'(e, t) {
      var n = a6(),
        r = o6(),
        a = Pm(),
        o = l6(),
        i = u6(),
        s = c6();
      t.exports = V;
      var u = {}.hasOwnProperty,
        c = String.fromCharCode,
        d = Function.prototype,
        g = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0
        },
        f = 9,
        p = 10,
        h = 12,
        m = 32,
        w = 38,
        y = 59,
        b = 60,
        v = 61,
        E = 35,
        x = 88,
        S = 120,
        A = 65533,
        C = 'named',
        T = 'hexadecimal',
        _ = 'decimal',
        O = {};
      (O[T] = 16), (O[_] = 10);
      var B = {};
      (B[C] = i), (B[_] = a), (B[T] = o);
      var M = 1,
        Z = 2,
        I = 3,
        P = 4,
        z = 5,
        R = 6,
        D = 7,
        $ = {};
      ($[M] = 'Named character references must be terminated by a semicolon'),
        ($[Z] =
          'Numeric character references must be terminated by a semicolon'),
        ($[I] = 'Named character references cannot be empty'),
        ($[P] = 'Numeric character references cannot be empty'),
        ($[z] = 'Named character references must be known'),
        ($[R] = 'Numeric character references cannot be disallowed'),
        ($[D] =
          'Numeric character references cannot be outside the permissible Unicode range');
      function V(j, W) {
        var K = {},
          Se,
          je;
        W || (W = {});
        for (je in g) (Se = W[je]), (K[je] = Se ?? g[je]);
        return (
          (K.position.indent || K.position.start) &&
            ((K.indent = K.position.indent || []),
            (K.position = K.position.start)),
          G(j, K)
        );
      }
      function G(j, W) {
        var K = W.additional,
          Se = W.nonTerminated,
          je = W.text,
          cn = W.reference,
          gt = W.warning,
          Nt = W.textContext,
          H = W.referenceContext,
          Ft = W.warningContext,
          jt = W.position,
          rr = W.indent || [],
          Rr = j.length,
          Ht = 0,
          Xo = -1,
          He = jt.column || 1,
          ar = jt.line || 1,
          Zt = '',
          Dr = [],
          zt,
          Lr,
          Vt,
          Le,
          Tt,
          Ae,
          ye,
          Ut,
          Qo,
          hu,
          or,
          Ta,
          lr,
          dn,
          Vd,
          Oa,
          Jo,
          qt,
          Ce;
        for (
          typeof K == 'string' && (K = K.charCodeAt(0)),
            Oa = Ra(),
            Ut = gt ? iy : d,
            Ht--,
            Rr++;
          ++Ht < Rr;

        )
          if (
            (Tt === p && (He = rr[Xo] || 1), (Tt = j.charCodeAt(Ht)), Tt === w)
          ) {
            if (
              ((ye = j.charCodeAt(Ht + 1)),
              ye === f ||
                ye === p ||
                ye === h ||
                ye === m ||
                ye === w ||
                ye === b ||
                ye !== ye ||
                (K && ye === K))
            ) {
              (Zt += c(Tt)), He++;
              continue;
            }
            for (
              lr = Ht + 1,
                Ta = lr,
                Ce = lr,
                ye === E
                  ? ((Ce = ++Ta),
                    (ye = j.charCodeAt(Ce)),
                    ye === x || ye === S ? ((dn = T), (Ce = ++Ta)) : (dn = _))
                  : (dn = C),
                zt = '',
                or = '',
                Le = '',
                Vd = B[dn],
                Ce--;
              ++Ce < Rr && ((ye = j.charCodeAt(Ce)), !!Vd(ye));

            )
              (Le += c(ye)),
                dn === C && u.call(n, Le) && ((zt = Le), (or = n[Le]));
            (Vt = j.charCodeAt(Ce) === y),
              Vt &&
                (Ce++,
                (Lr = dn === C ? s(Le) : !1),
                Lr && ((zt = Le), (or = Lr))),
              (qt = 1 + Ce - lr),
              (!Vt && !Se) ||
                (Le
                  ? dn === C
                    ? (Vt && !or
                        ? Ut(z, 1)
                        : (zt !== Le &&
                            ((Ce = Ta + zt.length),
                            (qt = 1 + Ce - Ta),
                            (Vt = !1)),
                          Vt ||
                            ((Qo = zt ? M : I),
                            W.attribute
                              ? ((ye = j.charCodeAt(Ce)),
                                ye === v
                                  ? (Ut(Qo, qt), (or = null))
                                  : i(ye)
                                  ? (or = null)
                                  : Ut(Qo, qt))
                              : Ut(Qo, qt))),
                      (Ae = or))
                    : (Vt || Ut(Z, qt),
                      (Ae = parseInt(Le, O[dn])),
                      Q(Ae)
                        ? (Ut(D, qt), (Ae = c(A)))
                        : Ae in r
                        ? (Ut(R, qt), (Ae = r[Ae]))
                        : ((hu = ''),
                          J(Ae) && Ut(R, qt),
                          Ae > 65535 &&
                            ((Ae -= 65536),
                            (hu += c((Ae >>> 10) | 55296)),
                            (Ae = 56320 | (Ae & 1023))),
                          (Ae = hu + c(Ae))))
                  : dn !== C && Ut(P, qt)),
              Ae
                ? (Ud(),
                  (Oa = Ra()),
                  (Ht = Ce - 1),
                  (He += Ce - lr + 1),
                  Dr.push(Ae),
                  (Jo = Ra()),
                  Jo.offset++,
                  cn &&
                    cn.call(H, Ae, { start: Oa, end: Jo }, j.slice(lr - 1, Ce)),
                  (Oa = Jo))
                : ((Le = j.slice(lr - 1, Ce)),
                  (Zt += Le),
                  (He += Le.length),
                  (Ht = Ce - 1));
          } else
            Tt === 10 && (ar++, Xo++, (He = 0)),
              Tt === Tt ? ((Zt += c(Tt)), He++) : Ud();
        return Dr.join('');
        function Ra() {
          return { line: ar, column: He, offset: Ht + (jt.offset || 0) };
        }
        function iy(qd, Wd) {
          var yu = Ra();
          (yu.column += Wd), (yu.offset += Wd), gt.call(Ft, $[qd], yu, qd);
        }
        function Ud() {
          Zt &&
            (Dr.push(Zt),
            je && je.call(Nt, Zt, { start: Oa, end: Ra() }),
            (Zt = ''));
        }
      }
      function Q(j) {
        return (j >= 55296 && j <= 57343) || j > 1114111;
      }
      function J(j) {
        return (
          (j >= 1 && j <= 8) ||
          j === 11 ||
          (j >= 13 && j <= 31) ||
          (j >= 127 && j <= 159) ||
          (j >= 64976 && j <= 65007) ||
          (j & 65535) === 65535 ||
          (j & 65535) === 65534
        );
      }
    }
  }),
  p6 = U({
    '../../node_modules/refractor/node_modules/prismjs/components/prism-core.js'(
      e,
      t
    ) {
      var n =
          typeof window < 'u'
            ? window
            : typeof WorkerGlobalScope < 'u' &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
        r = (function (a) {
          var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            i = 0,
            s = {},
            u = {
              manual: a.Prism && a.Prism.manual,
              disableWorkerMessageHandler:
                a.Prism && a.Prism.disableWorkerMessageHandler,
              util: {
                encode: function v(E) {
                  return E instanceof c
                    ? new c(E.type, v(E.content), E.alias)
                    : Array.isArray(E)
                    ? E.map(v)
                    : E.replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ');
                },
                type: function (v) {
                  return Object.prototype.toString.call(v).slice(8, -1);
                },
                objId: function (v) {
                  return (
                    v.__id || Object.defineProperty(v, '__id', { value: ++i }),
                    v.__id
                  );
                },
                clone: function v(E, x) {
                  x = x || {};
                  var S, A;
                  switch (u.util.type(E)) {
                    case 'Object':
                      if (((A = u.util.objId(E)), x[A])) return x[A];
                      (S = {}), (x[A] = S);
                      for (var C in E)
                        E.hasOwnProperty(C) && (S[C] = v(E[C], x));
                      return S;
                    case 'Array':
                      return (
                        (A = u.util.objId(E)),
                        x[A]
                          ? x[A]
                          : ((S = []),
                            (x[A] = S),
                            E.forEach(function (T, _) {
                              S[_] = v(T, x);
                            }),
                            S)
                      );
                    default:
                      return E;
                  }
                },
                getLanguage: function (v) {
                  for (; v; ) {
                    var E = o.exec(v.className);
                    if (E) return E[1].toLowerCase();
                    v = v.parentElement;
                  }
                  return 'none';
                },
                setLanguage: function (v, E) {
                  (v.className = v.className.replace(RegExp(o, 'gi'), '')),
                    v.classList.add('language-' + E);
                },
                currentScript: function () {
                  if (typeof document > 'u') return null;
                  if ('currentScript' in document && 1 < 2)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (S) {
                    var v = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      S.stack
                    ) || [])[1];
                    if (v) {
                      var E = document.getElementsByTagName('script');
                      for (var x in E) if (E[x].src == v) return E[x];
                    }
                    return null;
                  }
                },
                isActive: function (v, E, x) {
                  for (var S = 'no-' + E; v; ) {
                    var A = v.classList;
                    if (A.contains(E)) return !0;
                    if (A.contains(S)) return !1;
                    v = v.parentElement;
                  }
                  return !!x;
                }
              },
              languages: {
                plain: s,
                plaintext: s,
                text: s,
                txt: s,
                extend: function (v, E) {
                  var x = u.util.clone(u.languages[v]);
                  for (var S in E) x[S] = E[S];
                  return x;
                },
                insertBefore: function (v, E, x, S) {
                  S = S || u.languages;
                  var A = S[v],
                    C = {};
                  for (var T in A)
                    if (A.hasOwnProperty(T)) {
                      if (T == E)
                        for (var _ in x) x.hasOwnProperty(_) && (C[_] = x[_]);
                      x.hasOwnProperty(T) || (C[T] = A[T]);
                    }
                  var O = S[v];
                  return (
                    (S[v] = C),
                    u.languages.DFS(u.languages, function (B, M) {
                      M === O && B != v && (this[B] = C);
                    }),
                    C
                  );
                },
                DFS: function v(E, x, S, A) {
                  A = A || {};
                  var C = u.util.objId;
                  for (var T in E)
                    if (E.hasOwnProperty(T)) {
                      x.call(E, T, E[T], S || T);
                      var _ = E[T],
                        O = u.util.type(_);
                      O === 'Object' && !A[C(_)]
                        ? ((A[C(_)] = !0), v(_, x, null, A))
                        : O === 'Array' &&
                          !A[C(_)] &&
                          ((A[C(_)] = !0), v(_, x, T, A));
                    }
                }
              },
              plugins: {},
              highlightAll: function (v, E) {
                u.highlightAllUnder(document, v, E);
              },
              highlightAllUnder: function (v, E, x) {
                var S = {
                  callback: x,
                  container: v,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                u.hooks.run('before-highlightall', S),
                  (S.elements = Array.prototype.slice.apply(
                    S.container.querySelectorAll(S.selector)
                  )),
                  u.hooks.run('before-all-elements-highlight', S);
                for (var A = 0, C; (C = S.elements[A++]); )
                  u.highlightElement(C, E === !0, S.callback);
              },
              highlightElement: function (v, E, x) {
                var S = u.util.getLanguage(v),
                  A = u.languages[S];
                u.util.setLanguage(v, S);
                var C = v.parentElement;
                C &&
                  C.nodeName.toLowerCase() === 'pre' &&
                  u.util.setLanguage(C, S);
                var T = v.textContent,
                  _ = { element: v, language: S, grammar: A, code: T };
                function O(M) {
                  (_.highlightedCode = M),
                    u.hooks.run('before-insert', _),
                    (_.element.innerHTML = _.highlightedCode),
                    u.hooks.run('after-highlight', _),
                    u.hooks.run('complete', _),
                    x && x.call(_.element);
                }
                if (
                  (u.hooks.run('before-sanity-check', _),
                  (C = _.element.parentElement),
                  C &&
                    C.nodeName.toLowerCase() === 'pre' &&
                    !C.hasAttribute('tabindex') &&
                    C.setAttribute('tabindex', '0'),
                  !_.code)
                ) {
                  u.hooks.run('complete', _), x && x.call(_.element);
                  return;
                }
                if ((u.hooks.run('before-highlight', _), !_.grammar)) {
                  O(u.util.encode(_.code));
                  return;
                }
                if (E && a.Worker) {
                  var B = new Worker(u.filename);
                  (B.onmessage = function (M) {
                    O(M.data);
                  }),
                    B.postMessage(
                      JSON.stringify({
                        language: _.language,
                        code: _.code,
                        immediateClose: !0
                      })
                    );
                } else O(u.highlight(_.code, _.grammar, _.language));
              },
              highlight: function (v, E, x) {
                var S = { code: v, grammar: E, language: x };
                if ((u.hooks.run('before-tokenize', S), !S.grammar))
                  throw new Error(
                    'The language "' + S.language + '" has no grammar.'
                  );
                return (
                  (S.tokens = u.tokenize(S.code, S.grammar)),
                  u.hooks.run('after-tokenize', S),
                  c.stringify(u.util.encode(S.tokens), S.language)
                );
              },
              tokenize: function (v, E) {
                var x = E.rest;
                if (x) {
                  for (var S in x) E[S] = x[S];
                  delete E.rest;
                }
                var A = new f();
                return p(A, A.head, v), g(v, A, E, A.head, 0), m(A);
              },
              hooks: {
                all: {},
                add: function (v, E) {
                  var x = u.hooks.all;
                  (x[v] = x[v] || []), x[v].push(E);
                },
                run: function (v, E) {
                  var x = u.hooks.all[v];
                  if (!(!x || !x.length))
                    for (var S = 0, A; (A = x[S++]); ) A(E);
                }
              },
              Token: c
            };
          a.Prism = u;
          function c(v, E, x, S) {
            (this.type = v),
              (this.content = E),
              (this.alias = x),
              (this.length = (S || '').length | 0);
          }
          c.stringify = function v(E, x) {
            if (typeof E == 'string') return E;
            if (Array.isArray(E)) {
              var S = '';
              return (
                E.forEach(function (O) {
                  S += v(O, x);
                }),
                S
              );
            }
            var A = {
                type: E.type,
                content: v(E.content, x),
                tag: 'span',
                classes: ['token', E.type],
                attributes: {},
                language: x
              },
              C = E.alias;
            C &&
              (Array.isArray(C)
                ? Array.prototype.push.apply(A.classes, C)
                : A.classes.push(C)),
              u.hooks.run('wrap', A);
            var T = '';
            for (var _ in A.attributes)
              T +=
                ' ' +
                _ +
                '="' +
                (A.attributes[_] || '').replace(/"/g, '&quot;') +
                '"';
            return (
              '<' +
              A.tag +
              ' class="' +
              A.classes.join(' ') +
              '"' +
              T +
              '>' +
              A.content +
              '</' +
              A.tag +
              '>'
            );
          };
          function d(v, E, x, S) {
            v.lastIndex = E;
            var A = v.exec(x);
            if (A && S && A[1]) {
              var C = A[1].length;
              (A.index += C), (A[0] = A[0].slice(C));
            }
            return A;
          }
          function g(v, E, x, S, A, C) {
            for (var T in x)
              if (!(!x.hasOwnProperty(T) || !x[T])) {
                var _ = x[T];
                _ = Array.isArray(_) ? _ : [_];
                for (var O = 0; O < _.length; ++O) {
                  if (C && C.cause == T + ',' + O) return;
                  var B = _[O],
                    M = B.inside,
                    Z = !!B.lookbehind,
                    I = !!B.greedy,
                    P = B.alias;
                  if (I && !B.pattern.global) {
                    var z = B.pattern.toString().match(/[imsuy]*$/)[0];
                    B.pattern = RegExp(B.pattern.source, z + 'g');
                  }
                  for (
                    var R = B.pattern || B, D = S.next, $ = A;
                    D !== E.tail && !(C && $ >= C.reach);
                    $ += D.value.length, D = D.next
                  ) {
                    var V = D.value;
                    if (E.length > v.length) return;
                    if (!(V instanceof c)) {
                      var G = 1,
                        Q;
                      if (I) {
                        if (((Q = d(R, $, v, Z)), !Q || Q.index >= v.length))
                          break;
                        var K = Q.index,
                          J = Q.index + Q[0].length,
                          j = $;
                        for (j += D.value.length; K >= j; )
                          (D = D.next), (j += D.value.length);
                        if (
                          ((j -= D.value.length), ($ = j), D.value instanceof c)
                        )
                          continue;
                        for (
                          var W = D;
                          W !== E.tail && (j < J || typeof W.value == 'string');
                          W = W.next
                        )
                          G++, (j += W.value.length);
                        G--, (V = v.slice($, j)), (Q.index -= $);
                      } else if (((Q = d(R, 0, V, Z)), !Q)) continue;
                      var K = Q.index,
                        Se = Q[0],
                        je = V.slice(0, K),
                        cn = V.slice(K + Se.length),
                        gt = $ + V.length;
                      C && gt > C.reach && (C.reach = gt);
                      var Nt = D.prev;
                      je && ((Nt = p(E, Nt, je)), ($ += je.length)),
                        h(E, Nt, G);
                      var H = new c(T, M ? u.tokenize(Se, M) : Se, P, Se);
                      if (((D = p(E, Nt, H)), cn && p(E, D, cn), G > 1)) {
                        var Ft = { cause: T + ',' + O, reach: gt };
                        g(v, E, x, D.prev, $, Ft),
                          C && Ft.reach > C.reach && (C.reach = Ft.reach);
                      }
                    }
                  }
                }
              }
          }
          function f() {
            var v = { value: null, prev: null, next: null },
              E = { value: null, prev: v, next: null };
            (v.next = E), (this.head = v), (this.tail = E), (this.length = 0);
          }
          function p(v, E, x) {
            var S = E.next,
              A = { value: x, prev: E, next: S };
            return (E.next = A), (S.prev = A), v.length++, A;
          }
          function h(v, E, x) {
            for (var S = E.next, A = 0; A < x && S !== v.tail; A++) S = S.next;
            (E.next = S), (S.prev = E), (v.length -= A);
          }
          function m(v) {
            for (var E = [], x = v.head.next; x !== v.tail; )
              E.push(x.value), (x = x.next);
            return E;
          }
          if (!a.document)
            return (
              a.addEventListener &&
                (u.disableWorkerMessageHandler ||
                  a.addEventListener(
                    'message',
                    function (v) {
                      var E = JSON.parse(v.data),
                        x = E.language,
                        S = E.code,
                        A = E.immediateClose;
                      a.postMessage(u.highlight(S, u.languages[x], x)),
                        A && a.close();
                    },
                    !1
                  )),
              u
            );
          var w = u.util.currentScript();
          w &&
            ((u.filename = w.src),
            w.hasAttribute('data-manual') && (u.manual = !0));
          function y() {
            u.manual || u.highlightAll();
          }
          if (!u.manual) {
            var b = document.readyState;
            b === 'loading' || (b === 'interactive' && w && w.defer)
              ? document.addEventListener('DOMContentLoaded', y)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(y)
              : window.setTimeout(y, 16);
          }
          return u;
        })(n);
      typeof t < 'u' && t.exports && (t.exports = r),
        typeof global < 'u' && (global.Prism = r);
    }
  }),
  f6 = U({
    '../../node_modules/refractor/core.js'(e, t) {
      var n =
          typeof globalThis == 'object'
            ? globalThis
            : typeof self == 'object'
            ? self
            : typeof window == 'object'
            ? window
            : typeof global == 'object'
            ? global
            : {},
        r = A();
      n.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var a = r6(),
        o = d6(),
        i = p6(),
        s = Lm(),
        u = Dm(),
        c = jb(),
        d = Hb();
      r();
      var g = {}.hasOwnProperty;
      function f() {}
      f.prototype = i;
      var p = new f();
      (t.exports = p),
        (p.highlight = w),
        (p.register = h),
        (p.alias = m),
        (p.registered = y),
        (p.listLanguages = b),
        h(s),
        h(u),
        h(c),
        h(d),
        (p.util.encode = x),
        (p.Token.stringify = v);
      function h(C) {
        if (typeof C != 'function' || !C.displayName)
          throw new Error('Expected `function` for `grammar`, got `' + C + '`');
        p.languages[C.displayName] === void 0 && C(p);
      }
      function m(C, T) {
        var _ = p.languages,
          O = C,
          B,
          M,
          Z,
          I;
        T && ((O = {}), (O[C] = T));
        for (B in O)
          for (
            M = O[B], M = typeof M == 'string' ? [M] : M, Z = M.length, I = -1;
            ++I < Z;

          )
            _[M[I]] = _[B];
      }
      function w(C, T) {
        var _ = i.highlight,
          O;
        if (typeof C != 'string')
          throw new Error('Expected `string` for `value`, got `' + C + '`');
        if (p.util.type(T) === 'Object') (O = T), (T = null);
        else {
          if (typeof T != 'string')
            throw new Error('Expected `string` for `name`, got `' + T + '`');
          if (g.call(p.languages, T)) O = p.languages[T];
          else
            throw new Error('Unknown language: `' + T + '` is not registered');
        }
        return _.call(this, C, O, T);
      }
      function y(C) {
        if (typeof C != 'string')
          throw new Error('Expected `string` for `language`, got `' + C + '`');
        return g.call(p.languages, C);
      }
      function b() {
        var C = p.languages,
          T = [],
          _;
        for (_ in C) g.call(C, _) && typeof C[_] == 'object' && T.push(_);
        return T;
      }
      function v(C, T, _) {
        var O;
        return typeof C == 'string'
          ? { type: 'text', value: C }
          : p.util.type(C) === 'Array'
          ? E(C, T)
          : ((O = {
              type: C.type,
              content: p.Token.stringify(C.content, T, _),
              tag: 'span',
              classes: ['token', C.type],
              attributes: {},
              language: T,
              parent: _
            }),
            C.alias && (O.classes = O.classes.concat(C.alias)),
            p.hooks.run('wrap', O),
            a(O.tag + '.' + O.classes.join('.'), S(O.attributes), O.content));
      }
      function E(C, T) {
        for (var _ = [], O = C.length, B = -1, M; ++B < O; )
          (M = C[B]), M !== '' && M !== null && M !== void 0 && _.push(M);
        for (B = -1, O = _.length; ++B < O; )
          (M = _[B]), (_[B] = p.Token.stringify(M, T, _));
        return _;
      }
      function x(C) {
        return C;
      }
      function S(C) {
        var T;
        for (T in C) C[T] = o(C[T]);
        return C;
      }
      function A() {
        var C = 'Prism' in n,
          T = C ? n.Prism : void 0;
        return _;
        function _() {
          C ? (n.Prism = T) : delete n.Prism, (C = void 0), (T = void 0);
        }
      }
    }
  }),
  m6 = U({
    '../../node_modules/refractor/lang/bash.js'(e, t) {
      (t.exports = n), (n.displayName = 'bash'), (n.aliases = ['shell']);
      function n(r) {
        (function (a) {
          var o =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            i = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: 'punctuation',
              inside: null
            },
            s = {
              bash: i,
              environment: { pattern: RegExp('\\$' + o), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/
                  }
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ }
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp('(\\{)' + o),
                      lookbehind: !0,
                      alias: 'constant'
                    }
                  }
                },
                /\$(?:\w+|[#?*!@$])/
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
            };
          (a.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function'
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' }
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + o),
                  lookbehind: !0,
                  alias: 'constant'
                }
              },
              alias: 'variable',
              lookbehind: !0
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: s
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: i }
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: s
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: s.entity }
              }
            ],
            environment: { pattern: RegExp('\\$?' + o), alias: 'constant' },
            variable: s.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name'
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0
            },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                'file-descriptor': { pattern: /^\d/, alias: 'important' }
              }
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0
            }
          }),
            (i.inside = a.languages.bash);
          for (
            var u = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number'
              ],
              c = s.variable[1].inside,
              d = 0;
            d < u.length;
            d++
          )
            c[u[d]] = a.languages.bash[u[d]];
          a.languages.shell = a.languages.bash;
        })(r);
      }
    }
  }),
  g6 = U({
    '../../node_modules/refractor/lang/js-extras.js'(e, t) {
      (t.exports = n), (n.displayName = 'jsExtras'), (n.aliases = []);
      function n(r) {
        (function (a) {
          a.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' +
                  a.languages.javascript['function-variable'].pattern.source
              ),
              lookbehind: !0,
              alias: [
                'function-variable',
                'method',
                'function',
                'property-access'
              ]
            }
          }),
            a.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(
                  '(\\.\\s*)' + a.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ['function', 'property-access']
              }
            }),
            a.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: 'class-name'
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' }
              ]
            });
          function o(g, f) {
            return RegExp(
              g.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              f
            );
          }
          a.languages.insertBefore('javascript', 'keyword', {
            imports: {
              pattern: o(
                /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                  .source
              ),
              lookbehind: !0,
              inside: a.languages.javascript
            },
            exports: {
              pattern: o(
                /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                  .source
              ),
              lookbehind: !0,
              inside: a.languages.javascript
            }
          }),
            a.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module'
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow'
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' }
            ),
            a.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' }
            }),
            a.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: o(/(\.\s*)#?<ID>/.source),
                lookbehind: !0
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: 'variable'
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' }
            });
          for (
            var i = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access'
              ],
              s = 0;
            s < i.length;
            s++
          ) {
            var u = i[s],
              c = a.languages.javascript[u];
            a.util.type(c) === 'RegExp' &&
              (c = a.languages.javascript[u] = { pattern: c });
            var d = c.inside || {};
            (c.inside = d), (d['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(r);
      }
    }
  }),
  h6 = U({
    '../../node_modules/refractor/lang/json.js'(e, t) {
      (t.exports = n), (n.displayName = 'json'), (n.aliases = ['webmanifest']);
      function n(r) {
        (r.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' }
        }),
          (r.languages.webmanifest = r.languages.json);
      }
    }
  }),
  y6 = U({
    '../../node_modules/refractor/lang/graphql.js'(e, t) {
      (t.exports = n), (n.displayName = 'graphql'), (n.aliases = []);
      function n(r) {
        (r.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: r.languages.markdown
              }
            }
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0
          },
          'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          'class-name': {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function'
          },
          'definition-mutation': {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function'
          },
          'definition-query': {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function'
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          'property-query': /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/
        }),
          r.hooks.add('after-tokenize', function (a) {
            if (a.language !== 'graphql') return;
            var o = a.tokens.filter(function (b) {
                return (
                  typeof b != 'string' &&
                  b.type !== 'comment' &&
                  b.type !== 'scalar'
                );
              }),
              i = 0;
            function s(b) {
              return o[i + b];
            }
            function u(b, v) {
              v = v || 0;
              for (var E = 0; E < b.length; E++) {
                var x = s(E + v);
                if (!x || x.type !== b[E]) return !1;
              }
              return !0;
            }
            function c(b, v) {
              for (var E = 1, x = i; x < o.length; x++) {
                var S = o[x],
                  A = S.content;
                if (S.type === 'punctuation' && typeof A == 'string') {
                  if (b.test(A)) E++;
                  else if (v.test(A) && (E--, E === 0)) return x;
                }
              }
              return -1;
            }
            function d(b, v) {
              var E = b.alias;
              E ? Array.isArray(E) || (b.alias = E = [E]) : (b.alias = E = []),
                E.push(v);
            }
            for (; i < o.length; ) {
              var g = o[i++];
              if (g.type === 'keyword' && g.content === 'mutation') {
                var f = [];
                if (
                  u(['definition-mutation', 'punctuation']) &&
                  s(1).content === '('
                ) {
                  i += 2;
                  var p = c(/^\($/, /^\)$/);
                  if (p === -1) continue;
                  for (; i < p; i++) {
                    var h = s(0);
                    h.type === 'variable' &&
                      (d(h, 'variable-input'), f.push(h.content));
                  }
                  i = p + 1;
                }
                if (
                  u(['punctuation', 'property-query']) &&
                  s(0).content === '{' &&
                  (i++, d(s(0), 'property-mutation'), f.length > 0)
                ) {
                  var m = c(/^\{$/, /^\}$/);
                  if (m === -1) continue;
                  for (var w = i; w < m; w++) {
                    var y = o[w];
                    y.type === 'variable' &&
                      f.indexOf(y.content) >= 0 &&
                      d(y, 'variable-input');
                  }
                }
              }
            }
          });
      }
    }
  });
const { logger: v6 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var b6 = ft(Rm()),
  E6 = b6.default,
  x6 = ft(m6()),
  w6 = x6.default,
  S6 = ft(Dm()),
  A6 = S6.default,
  C6 = ft(g6()),
  k6 = C6.default,
  _6 = ft(h6()),
  F6 = _6.default,
  T6 = ft(y6()),
  O6 = T6.default,
  R6 = ft(Lm()),
  D6 = R6.default,
  L6 = ft(Ib()),
  M6 = L6.default,
  $6 = ft(Pb()),
  B6 = $6.default,
  I6 = ft(Nb()),
  P6 = I6.default,
  N6 = ft(Om()),
  j6 = N6.default;
function H6(e, t) {
  if (e == null) return {};
  var n = X0(e, t),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      (r = o[a]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function wc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Z6(e) {
  if (Array.isArray(e)) return wc(e);
}
function z6(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function V6(e, t) {
  if (e) {
    if (typeof e == 'string') return wc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return wc(e, t);
  }
}
function U6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q6(e) {
  return Z6(e) || z6(e) || V6(e) || U6();
}
function Ro(e) {
  return (
    (Ro =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ro(e)
  );
}
function W6(e, t) {
  if (Ro(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (Ro(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function G6(e) {
  var t = W6(e, 'string');
  return Ro(t) === 'symbol' ? t : String(t);
}
function Nm(e, t, n) {
  return (
    (t = G6(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function _p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _p(Object(n), !0).forEach(function (r) {
          Nm(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : _p(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function K6(e) {
  var t = e.length;
  if (t === 0 || t === 1) return e;
  if (t === 2)
    return [
      e[0],
      e[1],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0])
    ];
  if (t === 3)
    return [
      e[0],
      e[1],
      e[2],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0])
    ];
  if (t >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3]),
      ''.concat(e[3], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1], '.').concat(e[0])
    ];
}
var ts = {};
function Y6(e) {
  if (e.length === 0 || e.length === 1) return e;
  var t = e.join('.');
  return ts[t] || (ts[t] = K6(e)), ts[t];
}
function X6(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0,
    r = e.filter(function (o) {
      return o !== 'token';
    }),
    a = Y6(r);
  return a.reduce(function (o, i) {
    return Kr(Kr({}, o), n[i]);
  }, t);
}
function Fp(e) {
  return e.join(' ');
}
function Q6(e, t) {
  var n = 0;
  return function (r) {
    return (
      (n += 1),
      r.map(function (a, o) {
        return ed({
          node: a,
          stylesheet: e,
          useInlineStyles: t,
          key: 'code-segment-'.concat(n, '-').concat(o)
        });
      })
    );
  };
}
function ed(e) {
  var t = e.node,
    n = e.stylesheet,
    r = e.style,
    a = r === void 0 ? {} : r,
    o = e.useInlineStyles,
    i = e.key,
    s = t.properties,
    u = t.type,
    c = t.tagName,
    d = t.value;
  if (u === 'text') return d;
  if (c) {
    var g = Q6(n, o),
      f;
    if (!o) f = Kr(Kr({}, s), {}, { className: Fp(s.className) });
    else {
      var p = Object.keys(n).reduce(function (y, b) {
          return (
            b.split('.').forEach(function (v) {
              y.includes(v) || y.push(v);
            }),
            y
          );
        }, []),
        h = s.className && s.className.includes('token') ? ['token'] : [],
        m =
          s.className &&
          h.concat(
            s.className.filter(function (y) {
              return !p.includes(y);
            })
          );
      f = Kr(
        Kr({}, s),
        {},
        {
          className: Fp(m) || void 0,
          style: X6(s.className, Object.assign({}, s.style, a), n)
        }
      );
    }
    var w = g(t.children);
    return l.createElement(c, We({ key: i }, f), w);
  }
}
var J6 = function (e, t) {
    var n = e.listLanguages();
    return n.indexOf(t) !== -1;
  },
  eE = [
    'language',
    'children',
    'style',
    'customStyle',
    'codeTagProps',
    'useInlineStyles',
    'showLineNumbers',
    'showInlineLineNumbers',
    'startingLineNumber',
    'lineNumberContainerStyle',
    'lineNumberStyle',
    'wrapLines',
    'wrapLongLines',
    'lineProps',
    'renderer',
    'PreTag',
    'CodeTag',
    'code',
    'astGenerator'
  ];
function Tp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tp(Object(n), !0).forEach(function (r) {
          Nm(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Tp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var tE = /\n/g;
function nE(e) {
  return e.match(tE);
}
function rE(e) {
  var t = e.lines,
    n = e.startingLineNumber,
    r = e.style;
  return t.map(function (a, o) {
    var i = o + n;
    return l.createElement(
      'span',
      {
        key: 'line-'.concat(o),
        className: 'react-syntax-highlighter-line-number',
        style: typeof r == 'function' ? r(i) : r
      },
      ''.concat(
        i,
        `
`
      )
    );
  });
}
function aE(e) {
  var t = e.codeString,
    n = e.codeStyle,
    r = e.containerStyle,
    a = r === void 0 ? { float: 'left', paddingRight: '10px' } : r,
    o = e.numberStyle,
    i = o === void 0 ? {} : o,
    s = e.startingLineNumber;
  return l.createElement(
    'code',
    { style: Object.assign({}, n, a) },
    rE({
      lines: t.replace(/\n$/, '').split(`
`),
      style: i,
      startingLineNumber: s
    })
  );
}
function oE(e) {
  return ''.concat(e.toString().length, '.25em');
}
function jm(e, t) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(e),
      className: [
        'comment',
        'linenumber',
        'react-syntax-highlighter-line-number'
      ],
      style: t
    },
    children: [{ type: 'text', value: e }]
  };
}
function Hm(e, t, n) {
  var r = {
      display: 'inline-block',
      minWidth: oE(n),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none'
    },
    a = typeof e == 'function' ? e(t) : e,
    o = Qt(Qt({}, r), a);
  return o;
}
function jl(e) {
  var t = e.children,
    n = e.lineNumber,
    r = e.lineNumberStyle,
    a = e.largestLineNumber,
    o = e.showInlineLineNumbers,
    i = e.lineProps,
    s = i === void 0 ? {} : i,
    u = e.className,
    c = u === void 0 ? [] : u,
    d = e.showLineNumbers,
    g = e.wrapLongLines,
    f = typeof s == 'function' ? s(n) : s;
  if (((f.className = c), n && o)) {
    var p = Hm(r, n, a);
    t.unshift(jm(n, p));
  }
  return (
    g & d && (f.style = Qt(Qt({}, f.style), {}, { display: 'flex' })),
    { type: 'element', tagName: 'span', properties: f, children: t }
  );
}
function Zm(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      r = 0;
    r < e.length;
    r++
  ) {
    var a = e[r];
    if (a.type === 'text')
      n.push(jl({ children: [a], className: q6(new Set(t)) }));
    else if (a.children) {
      var o = t.concat(a.properties.className);
      Zm(a.children, o).forEach(function (i) {
        return n.push(i);
      });
    }
  }
  return n;
}
function lE(e, t, n, r, a, o, i, s, u) {
  var c,
    d = Zm(e.value),
    g = [],
    f = -1,
    p = 0;
  function h(x, S) {
    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return jl({
      children: x,
      lineNumber: S,
      lineNumberStyle: s,
      largestLineNumber: i,
      showInlineLineNumbers: a,
      lineProps: n,
      className: A,
      showLineNumbers: r,
      wrapLongLines: u
    });
  }
  function m(x, S) {
    if (r && S && a) {
      var A = Hm(s, S, i);
      x.unshift(jm(S, A));
    }
    return x;
  }
  function w(x, S) {
    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || A.length > 0 ? h(x, S, A) : m(x, S);
  }
  for (
    var y = function () {
      var x = d[p],
        S = x.children[0].value,
        A = nE(S);
      if (A) {
        var C = S.split(`
`);
        C.forEach(function (T, _) {
          var O = r && g.length + o,
            B = {
              type: 'text',
              value: ''.concat(
                T,
                `
`
              )
            };
          if (_ === 0) {
            var M = d
                .slice(f + 1, p)
                .concat(
                  jl({ children: [B], className: x.properties.className })
                ),
              Z = w(M, O);
            g.push(Z);
          } else if (_ === C.length - 1) {
            var I = d[p + 1] && d[p + 1].children && d[p + 1].children[0],
              P = { type: 'text', value: ''.concat(T) };
            if (I) {
              var z = jl({ children: [P], className: x.properties.className });
              d.splice(p + 1, 0, z);
            } else {
              var R = [P],
                D = w(R, O, x.properties.className);
              g.push(D);
            }
          } else {
            var $ = [B],
              V = w($, O, x.properties.className);
            g.push(V);
          }
        }),
          (f = p);
      }
      p++;
    };
    p < d.length;

  )
    y();
  if (f !== d.length - 1) {
    var b = d.slice(f + 1, d.length);
    if (b && b.length) {
      var v = r && g.length + o,
        E = w(b, v);
      g.push(E);
    }
  }
  return t ? g : (c = []).concat.apply(c, g);
}
function iE(e) {
  var t = e.rows,
    n = e.stylesheet,
    r = e.useInlineStyles;
  return t.map(function (a, o) {
    return ed({
      node: a,
      stylesheet: n,
      useInlineStyles: r,
      key: 'code-segement'.concat(o)
    });
  });
}
function zm(e) {
  return e && typeof e.highlightAuto < 'u';
}
function uE(e) {
  var t = e.astGenerator,
    n = e.language,
    r = e.code,
    a = e.defaultCodeValue;
  if (zm(t)) {
    var o = J6(t, n);
    return n === 'text'
      ? { value: a, language: 'text' }
      : o
      ? t.highlight(n, r)
      : t.highlightAuto(r);
  }
  try {
    return n && n !== 'text' ? { value: t.highlight(r, n) } : { value: a };
  } catch {
    return { value: a };
  }
}
function sE(e, t) {
  return function (n) {
    var r = n.language,
      a = n.children,
      o = n.style,
      i = o === void 0 ? t : o,
      s = n.customStyle,
      u = s === void 0 ? {} : s,
      c = n.codeTagProps,
      d =
        c === void 0
          ? {
              className: r ? 'language-'.concat(r) : void 0,
              style: Qt(
                Qt({}, i['code[class*="language-"]']),
                i['code[class*="language-'.concat(r, '"]')]
              )
            }
          : c,
      g = n.useInlineStyles,
      f = g === void 0 ? !0 : g,
      p = n.showLineNumbers,
      h = p === void 0 ? !1 : p,
      m = n.showInlineLineNumbers,
      w = m === void 0 ? !0 : m,
      y = n.startingLineNumber,
      b = y === void 0 ? 1 : y,
      v = n.lineNumberContainerStyle,
      E = n.lineNumberStyle,
      x = E === void 0 ? {} : E,
      S = n.wrapLines,
      A = n.wrapLongLines,
      C = A === void 0 ? !1 : A,
      T = n.lineProps,
      _ = T === void 0 ? {} : T,
      O = n.renderer,
      B = n.PreTag,
      M = B === void 0 ? 'pre' : B,
      Z = n.CodeTag,
      I = Z === void 0 ? 'code' : Z,
      P = n.code,
      z = P === void 0 ? (Array.isArray(a) ? a[0] : a) || '' : P,
      R = n.astGenerator,
      D = H6(n, eE);
    R = R || e;
    var $ = h
        ? l.createElement(aE, {
            containerStyle: v,
            codeStyle: d.style || {},
            numberStyle: x,
            startingLineNumber: b,
            codeString: z
          })
        : null,
      V = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: '#fff' },
      G = zm(R) ? 'hljs' : 'prismjs',
      Q = f
        ? Object.assign({}, D, { style: Object.assign({}, V, u) })
        : Object.assign({}, D, {
            className: D.className ? ''.concat(G, ' ').concat(D.className) : G,
            style: Object.assign({}, u)
          });
    if (
      (C
        ? (d.style = Qt(Qt({}, d.style), {}, { whiteSpace: 'pre-wrap' }))
        : (d.style = Qt(Qt({}, d.style), {}, { whiteSpace: 'pre' })),
      !R)
    )
      return l.createElement(M, Q, $, l.createElement(I, d, z));
    ((S === void 0 && O) || C) && (S = !0), (O = O || iE);
    var J = [{ type: 'text', value: z }],
      j = uE({ astGenerator: R, language: r, code: z, defaultCodeValue: J });
    j.language === null && (j.value = J);
    var W = j.value.length + b,
      K = lE(j, S, _, h, w, b, W, x, C);
    return l.createElement(
      M,
      Q,
      l.createElement(
        I,
        d,
        !w && $,
        O({ rows: K, stylesheet: i, useInlineStyles: f })
      )
    );
  };
}
var td = ft(f6()),
  nd = sE(td.default, {});
nd.registerLanguage = function (e, t) {
  return td.default.register(t);
};
nd.alias = function (e, t) {
  return td.default.alias(e, t);
};
var kt = nd,
  cE = F.div(({ theme: e }) => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    maxWidth: '100%',
    display: 'flex',
    background: e.background.content,
    zIndex: 1
  })),
  Vm = F.button(
    ({ theme: e }) => ({
      margin: 0,
      border: '0 none',
      padding: '4px 10px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: e.color.defaultText,
      background: e.background.content,
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: e.typography.fonts.base,
      fontWeight: e.typography.weight.bold,
      borderTop: `1px solid ${e.appBorderColor}`,
      borderLeft: `1px solid ${e.appBorderColor}`,
      marginLeft: -1,
      borderRadius: '4px 0 0 0',
      '&:not(:last-child)': { borderRight: `1px solid ${e.appBorderColor}` },
      '& + *': { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 },
      '&:focus': {
        boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`,
        outline: '0 none'
      }
    }),
    ({ disabled: e }) => e && { cursor: 'not-allowed', opacity: 0.5 }
  );
Vm.displayName = 'ActionButton';
var rd = ({ actionItems: e, ...t }) =>
    l.createElement(
      cE,
      { ...t },
      e.map(({ title: n, className: r, onClick: a, disabled: o }, i) =>
        l.createElement(
          Vm,
          { key: i, className: r, onClick: a, disabled: o },
          n
        )
      )
    ),
  dE = k.lazy(() =>
    un(
      () => import('./GlobalScrollAreaStyles-XIHNDKUY-f4fcb5da.js'),
      [
        './GlobalScrollAreaStyles-XIHNDKUY-f4fcb5da.js',
        './iframe-0fe055d1.js',
        './_commonjsHelpers-725317a4.js',
        './index-d475d2ea.js',
        './index-d37d4223.js',
        './index-826364cc.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    )
  ),
  pE = k.lazy(() =>
    un(
      () => import('./OverlayScrollbars-VAV6LJAB-4b5ece39.js'),
      [
        './OverlayScrollbars-VAV6LJAB-4b5ece39.js',
        './iframe-0fe055d1.js',
        './_commonjsHelpers-725317a4.js',
        './index-d475d2ea.js',
        './index-d37d4223.js',
        './index-826364cc.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    )
  ),
  fE = ({ horizontal: e, vertical: t, ...n }) =>
    l.createElement(
      k.Suspense,
      { fallback: l.createElement('div', { ...n }) },
      l.createElement(dE, null),
      l.createElement(pE, {
        options: { scrollbars: { autoHide: 'leave' } },
        ...n
      })
    ),
  eu = F(fE)(
    ({ vertical: e }) =>
      e ? { overflowY: 'auto', height: '100%' } : { overflowY: 'hidden' },
    ({ horizontal: e }) =>
      e ? { overflowX: 'auto', width: '100%' } : { overflowX: 'hidden' }
  );
eu.defaultProps = { horizontal: !1, vertical: !1 };
var { navigator: bl, document: Ha, window: mE } = Pe;
kt.registerLanguage('jsextra', k6);
kt.registerLanguage('jsx', E6);
kt.registerLanguage('json', F6);
kt.registerLanguage('yml', B6);
kt.registerLanguage('md', M6);
kt.registerLanguage('bash', w6);
kt.registerLanguage('css', A6);
kt.registerLanguage('html', D6);
kt.registerLanguage('tsx', P6);
kt.registerLanguage('typescript', j6);
kt.registerLanguage('graphql', O6);
var gE = Tr(2)((e) =>
    Object.entries(e.code || {}).reduce(
      (t, [n, r]) => ({ ...t, [`* .${n}`]: r }),
      {}
    )
  ),
  hE = Um();
function Um() {
  return bl != null && bl.clipboard
    ? (e) => bl.clipboard.writeText(e)
    : async (e) => {
        let t = Ha.createElement('TEXTAREA'),
          n = Ha.activeElement;
        (t.value = e),
          Ha.body.appendChild(t),
          t.select(),
          Ha.execCommand('copy'),
          Ha.body.removeChild(t),
          n.focus();
      };
}
var yE = F.div(
    ({ theme: e }) => ({
      position: 'relative',
      overflow: 'hidden',
      color: e.color.defaultText
    }),
    ({ theme: e, bordered: t }) =>
      t
        ? {
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.borderRadius,
            background: e.background.content
          }
        : {},
    ({ showLineNumbers: e }) =>
      e
        ? {
            '.react-syntax-highlighter-line-number::before': {
              content: 'attr(data-line-number)'
            }
          }
        : {}
  ),
  vE = ({ children: e, className: t }) =>
    l.createElement(eu, { horizontal: !0, vertical: !0, className: t }, e),
  bE = F(vE)({ position: 'relative' }, ({ theme: e }) => gE(e)),
  EE = F.pre(({ theme: e, padded: t }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 0,
    padding: t ? e.layoutMargin : 0
  })),
  xE = F.div(({ theme: e }) => ({
    flex: 1,
    paddingLeft: 2,
    paddingRight: e.layoutMargin,
    opacity: 1
  })),
  qm = (e) => {
    let t = [...e.children],
      n = t[0],
      r = n.children[0].value,
      a = {
        ...n,
        children: [],
        properties: {
          ...n.properties,
          'data-line-number': r,
          style: { ...n.properties.style, userSelect: 'auto' }
        }
      };
    return (t[0] = a), { ...e, children: t };
  },
  wE = ({ rows: e, stylesheet: t, useInlineStyles: n }) =>
    e.map((r, a) =>
      ed({
        node: qm(r),
        stylesheet: t,
        useInlineStyles: n,
        key: `code-segement${a}`
      })
    ),
  SE = (e, t) =>
    t
      ? e
        ? ({ rows: n, ...r }) => e({ rows: n.map((a) => qm(a)), ...r })
        : wE
      : e,
  Wm = ({
    children: e,
    language: t = 'jsx',
    copyable: n = !1,
    bordered: r = !1,
    padded: a = !1,
    format: o = !0,
    formatter: i = null,
    className: s = null,
    showLineNumbers: u = !1,
    ...c
  }) => {
    if (typeof e != 'string' || !e.trim()) return null;
    let d = i ? i(o, e) : e.trim(),
      [g, f] = k.useState(!1),
      p = k.useCallback(
        (m) => {
          m.preventDefault(),
            hE(d)
              .then(() => {
                f(!0), mE.setTimeout(() => f(!1), 1500);
              })
              .catch(v6.error);
        },
        [d]
      ),
      h = SE(c.renderer, u);
    return l.createElement(
      yE,
      { bordered: r, padded: a, showLineNumbers: u, className: s },
      l.createElement(
        bE,
        null,
        l.createElement(
          kt,
          {
            padded: a || r,
            language: t,
            showLineNumbers: u,
            showInlineLineNumbers: u,
            useInlineStyles: !1,
            PreTag: EE,
            CodeTag: xE,
            lineNumberContainerStyle: {},
            ...c,
            renderer: h
          },
          d
        )
      ),
      n
        ? l.createElement(rd, {
            actionItems: [{ title: g ? 'Copied' : 'Copy', onClick: p }]
          })
        : null
    );
  },
  NL = Wm,
  AE = U({
    '../../node_modules/react-fast-compare/index.js'(e, t) {
      var n = typeof Element < 'u',
        r = typeof Map == 'function',
        a = typeof Set == 'function',
        o = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
      function i(s, u) {
        if (s === u) return !0;
        if (s && u && typeof s == 'object' && typeof u == 'object') {
          if (s.constructor !== u.constructor) return !1;
          var c, d, g;
          if (Array.isArray(s)) {
            if (((c = s.length), c != u.length)) return !1;
            for (d = c; d-- !== 0; ) if (!i(s[d], u[d])) return !1;
            return !0;
          }
          var f;
          if (r && s instanceof Map && u instanceof Map) {
            if (s.size !== u.size) return !1;
            for (f = s.entries(); !(d = f.next()).done; )
              if (!u.has(d.value[0])) return !1;
            for (f = s.entries(); !(d = f.next()).done; )
              if (!i(d.value[1], u.get(d.value[0]))) return !1;
            return !0;
          }
          if (a && s instanceof Set && u instanceof Set) {
            if (s.size !== u.size) return !1;
            for (f = s.entries(); !(d = f.next()).done; )
              if (!u.has(d.value[0])) return !1;
            return !0;
          }
          if (o && ArrayBuffer.isView(s) && ArrayBuffer.isView(u)) {
            if (((c = s.length), c != u.length)) return !1;
            for (d = c; d-- !== 0; ) if (s[d] !== u[d]) return !1;
            return !0;
          }
          if (s.constructor === RegExp)
            return s.source === u.source && s.flags === u.flags;
          if (
            s.valueOf !== Object.prototype.valueOf &&
            typeof s.valueOf == 'function' &&
            typeof u.valueOf == 'function'
          )
            return s.valueOf() === u.valueOf();
          if (
            s.toString !== Object.prototype.toString &&
            typeof s.toString == 'function' &&
            typeof u.toString == 'function'
          )
            return s.toString() === u.toString();
          if (
            ((g = Object.keys(s)), (c = g.length), c !== Object.keys(u).length)
          )
            return !1;
          for (d = c; d-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(u, g[d])) return !1;
          if (n && s instanceof Element) return !1;
          for (d = c; d-- !== 0; )
            if (
              !(
                (g[d] === '_owner' || g[d] === '__v' || g[d] === '__o') &&
                s.$$typeof
              ) &&
              !i(s[g[d]], u[g[d]])
            )
              return !1;
          return !0;
        }
        return s !== s && u !== u;
      }
      t.exports = function (s, u) {
        try {
          return i(s, u);
        } catch (c) {
          if ((c.message || '').match(/stack|recursion/i))
            return (
              console.warn('react-fast-compare cannot handle circular refs'), !1
            );
          throw c;
        }
      };
    }
  }),
  Op = function (e) {
    return e.reduce(function (t, n) {
      var r = n[0],
        a = n[1];
      return (t[r] = a), t;
    }, {});
  },
  Rp =
    typeof window < 'u' && window.document && window.document.createElement
      ? k.useLayoutEffect
      : k.useEffect,
  tt = 'top',
  At = 'bottom',
  Ct = 'right',
  nt = 'left',
  tu = 'auto',
  Go = [tt, At, Ct, nt],
  fa = 'start',
  Do = 'end',
  CE = 'clippingParents',
  Gm = 'viewport',
  Za = 'popper',
  kE = 'reference',
  Dp = Go.reduce(function (e, t) {
    return e.concat([t + '-' + fa, t + '-' + Do]);
  }, []),
  Km = [].concat(Go, [tu]).reduce(function (e, t) {
    return e.concat([t, t + '-' + fa, t + '-' + Do]);
  }, []),
  _E = 'beforeRead',
  FE = 'read',
  TE = 'afterRead',
  OE = 'beforeMain',
  RE = 'main',
  DE = 'afterMain',
  LE = 'beforeWrite',
  ME = 'write',
  $E = 'afterWrite',
  BE = [_E, FE, TE, OE, RE, DE, LE, ME, $E];
function sn(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function ct(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function kr(e) {
  var t = ct(e).Element;
  return e instanceof t || e instanceof Element;
}
function xt(e) {
  var t = ct(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ad(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = ct(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function IE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      a = t.attributes[n] || {},
      o = t.elements[n];
    !xt(o) ||
      !sn(o) ||
      (Object.assign(o.style, r),
      Object.keys(a).forEach(function (i) {
        var s = a[i];
        s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? '' : s);
      }));
  });
}
function PE(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: { position: 'absolute' },
      reference: {}
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var a = t.elements[r],
          o = t.attributes[r] || {},
          i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          s = i.reduce(function (u, c) {
            return (u[c] = ''), u;
          }, {});
        !xt(a) ||
          !sn(a) ||
          (Object.assign(a.style, s),
          Object.keys(o).forEach(function (u) {
            a.removeAttribute(u);
          }));
      });
    }
  );
}
var NE = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: IE,
  effect: PE,
  requires: ['computeStyles']
};
function ln(e) {
  return e.split('-')[0];
}
var br = Math.max,
  Ai = Math.min,
  ma = Math.round;
function Sc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function Ym() {
  return !/^((?!chrome|android).)*safari/i.test(Sc());
}
function ga(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    xt(e) &&
    ((a = (e.offsetWidth > 0 && ma(r.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && ma(r.height) / e.offsetHeight) || 1));
  var i = kr(e) ? ct(e) : window,
    s = i.visualViewport,
    u = !Ym() && n,
    c = (r.left + (u && s ? s.offsetLeft : 0)) / a,
    d = (r.top + (u && s ? s.offsetTop : 0)) / o,
    g = r.width / a,
    f = r.height / o;
  return {
    width: g,
    height: f,
    top: d,
    right: c + g,
    bottom: d + f,
    left: c,
    x: c,
    y: d
  };
}
function od(e) {
  var t = ga(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Xm(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ad(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function An(e) {
  return ct(e).getComputedStyle(e);
}
function jE(e) {
  return ['table', 'td', 'th'].indexOf(sn(e)) >= 0;
}
function nr(e) {
  return ((kr(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function nu(e) {
  return sn(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (ad(e) ? e.host : null) || nr(e);
}
function Lp(e) {
  return !xt(e) || An(e).position === 'fixed' ? null : e.offsetParent;
}
function HE(e) {
  var t = /firefox/i.test(Sc()),
    n = /Trident/i.test(Sc());
  if (n && xt(e)) {
    var r = An(e);
    if (r.position === 'fixed') return null;
  }
  var a = nu(e);
  for (ad(a) && (a = a.host); xt(a) && ['html', 'body'].indexOf(sn(a)) < 0; ) {
    var o = An(a);
    if (
      o.transform !== 'none' ||
      o.perspective !== 'none' ||
      o.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === 'filter') ||
      (t && o.filter && o.filter !== 'none')
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function Ko(e) {
  for (var t = ct(e), n = Lp(e); n && jE(n) && An(n).position === 'static'; )
    n = Lp(n);
  return n &&
    (sn(n) === 'html' || (sn(n) === 'body' && An(n).position === 'static'))
    ? t
    : n || HE(e) || t;
}
function ld(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function oo(e, t, n) {
  return br(e, Ai(t, n));
}
function ZE(e, t, n) {
  var r = oo(e, t, n);
  return r > n ? n : r;
}
function Qm() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Jm(e) {
  return Object.assign({}, Qm(), e);
}
function eg(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var zE = function (e, t) {
  return (
    (e =
      typeof e == 'function'
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    Jm(typeof e != 'number' ? e : eg(e, Go))
  );
};
function VE(e) {
  var t,
    n = e.state,
    r = e.name,
    a = e.options,
    o = n.elements.arrow,
    i = n.modifiersData.popperOffsets,
    s = ln(n.placement),
    u = ld(s),
    c = [nt, Ct].indexOf(s) >= 0,
    d = c ? 'height' : 'width';
  if (!(!o || !i)) {
    var g = zE(a.padding, n),
      f = od(o),
      p = u === 'y' ? tt : nt,
      h = u === 'y' ? At : Ct,
      m =
        n.rects.reference[d] + n.rects.reference[u] - i[u] - n.rects.popper[d],
      w = i[u] - n.rects.reference[u],
      y = Ko(o),
      b = y ? (u === 'y' ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      v = m / 2 - w / 2,
      E = g[p],
      x = b - f[d] - g[h],
      S = b / 2 - f[d] / 2 + v,
      A = oo(E, S, x),
      C = u;
    n.modifiersData[r] = ((t = {}), (t[C] = A), (t.centerOffset = A - S), t);
  }
}
function UE(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    a = r === void 0 ? '[data-popper-arrow]' : r;
  if (
    a != null &&
    !(typeof a == 'string' && ((a = t.elements.popper.querySelector(a)), !a))
  ) {
    if (!Xm(t.elements.popper, a)) return;
    t.elements.arrow = a;
  }
}
var qE = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: VE,
  effect: UE,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
function ha(e) {
  return e.split('-')[1];
}
var WE = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function GE(e, t) {
  var n = e.x,
    r = e.y,
    a = t.devicePixelRatio || 1;
  return { x: ma(n * a) / a || 0, y: ma(r * a) / a || 0 };
}
function Mp(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    a = e.placement,
    o = e.variation,
    i = e.offsets,
    s = e.position,
    u = e.gpuAcceleration,
    c = e.adaptive,
    d = e.roundOffsets,
    g = e.isFixed,
    f = i.x,
    p = f === void 0 ? 0 : f,
    h = i.y,
    m = h === void 0 ? 0 : h,
    w = typeof d == 'function' ? d({ x: p, y: m }) : { x: p, y: m };
  (p = w.x), (m = w.y);
  var y = i.hasOwnProperty('x'),
    b = i.hasOwnProperty('y'),
    v = nt,
    E = tt,
    x = window;
  if (c) {
    var S = Ko(n),
      A = 'clientHeight',
      C = 'clientWidth';
    if (
      (S === ct(n) &&
        ((S = nr(n)),
        An(S).position !== 'static' &&
          s === 'absolute' &&
          ((A = 'scrollHeight'), (C = 'scrollWidth'))),
      (S = S),
      a === tt || ((a === nt || a === Ct) && o === Do))
    ) {
      E = At;
      var T = g && S === x && x.visualViewport ? x.visualViewport.height : S[A];
      (m -= T - r.height), (m *= u ? 1 : -1);
    }
    if (a === nt || ((a === tt || a === At) && o === Do)) {
      v = Ct;
      var _ = g && S === x && x.visualViewport ? x.visualViewport.width : S[C];
      (p -= _ - r.width), (p *= u ? 1 : -1);
    }
  }
  var O = Object.assign({ position: s }, c && WE),
    B = d === !0 ? GE({ x: p, y: m }, ct(n)) : { x: p, y: m };
  if (((p = B.x), (m = B.y), u)) {
    var M;
    return Object.assign(
      {},
      O,
      ((M = {}),
      (M[E] = b ? '0' : ''),
      (M[v] = y ? '0' : ''),
      (M.transform =
        (x.devicePixelRatio || 1) <= 1
          ? 'translate(' + p + 'px, ' + m + 'px)'
          : 'translate3d(' + p + 'px, ' + m + 'px, 0)'),
      M)
    );
  }
  return Object.assign(
    {},
    O,
    ((t = {}),
    (t[E] = b ? m + 'px' : ''),
    (t[v] = y ? p + 'px' : ''),
    (t.transform = ''),
    t)
  );
}
function KE(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    a = r === void 0 ? !0 : r,
    o = n.adaptive,
    i = o === void 0 ? !0 : o,
    s = n.roundOffsets,
    u = s === void 0 ? !0 : s,
    c = {
      placement: ln(t.placement),
      variation: ha(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === 'fixed'
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Mp(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: u
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Mp(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: u
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement
    }));
}
var YE = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: KE,
    data: {}
  },
  El = { passive: !0 };
function XE(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    a = r.scroll,
    o = a === void 0 ? !0 : a,
    i = r.resize,
    s = i === void 0 ? !0 : i,
    u = ct(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      c.forEach(function (d) {
        d.addEventListener('scroll', n.update, El);
      }),
    s && u.addEventListener('resize', n.update, El),
    function () {
      o &&
        c.forEach(function (d) {
          d.removeEventListener('scroll', n.update, El);
        }),
        s && u.removeEventListener('resize', n.update, El);
    }
  );
}
var QE = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: XE,
    data: {}
  },
  JE = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Hl(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return JE[t];
  });
}
var e8 = { start: 'end', end: 'start' };
function $p(e) {
  return e.replace(/start|end/g, function (t) {
    return e8[t];
  });
}
function id(e) {
  var t = ct(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function ud(e) {
  return ga(nr(e)).left + id(e).scrollLeft;
}
function t8(e, t) {
  var n = ct(e),
    r = nr(e),
    a = n.visualViewport,
    o = r.clientWidth,
    i = r.clientHeight,
    s = 0,
    u = 0;
  if (a) {
    (o = a.width), (i = a.height);
    var c = Ym();
    (c || (!c && t === 'fixed')) && ((s = a.offsetLeft), (u = a.offsetTop));
  }
  return { width: o, height: i, x: s + ud(e), y: u };
}
function n8(e) {
  var t,
    n = nr(e),
    r = id(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = br(
      n.scrollWidth,
      n.clientWidth,
      a ? a.scrollWidth : 0,
      a ? a.clientWidth : 0
    ),
    i = br(
      n.scrollHeight,
      n.clientHeight,
      a ? a.scrollHeight : 0,
      a ? a.clientHeight : 0
    ),
    s = -r.scrollLeft + ud(e),
    u = -r.scrollTop;
  return (
    An(a || n).direction === 'rtl' &&
      (s += br(n.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: s, y: u }
  );
}
function sd(e) {
  var t = An(e),
    n = t.overflow,
    r = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function tg(e) {
  return ['html', 'body', '#document'].indexOf(sn(e)) >= 0
    ? e.ownerDocument.body
    : xt(e) && sd(e)
    ? e
    : tg(nu(e));
}
function lo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = tg(e),
    a = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = ct(r),
    i = a ? [o].concat(o.visualViewport || [], sd(r) ? r : []) : r,
    s = t.concat(i);
  return a ? s : s.concat(lo(nu(i)));
}
function Ac(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function r8(e, t) {
  var n = ga(e, !1, t === 'fixed');
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function Bp(e, t, n) {
  return t === Gm ? Ac(t8(e, n)) : kr(t) ? r8(t, n) : Ac(n8(nr(e)));
}
function a8(e) {
  var t = lo(nu(e)),
    n = ['absolute', 'fixed'].indexOf(An(e).position) >= 0,
    r = n && xt(e) ? Ko(e) : e;
  return kr(r)
    ? t.filter(function (a) {
        return kr(a) && Xm(a, r) && sn(a) !== 'body';
      })
    : [];
}
function o8(e, t, n, r) {
  var a = t === 'clippingParents' ? a8(e) : [].concat(t),
    o = [].concat(a, [n]),
    i = o[0],
    s = o.reduce(function (u, c) {
      var d = Bp(e, c, r);
      return (
        (u.top = br(d.top, u.top)),
        (u.right = Ai(d.right, u.right)),
        (u.bottom = Ai(d.bottom, u.bottom)),
        (u.left = br(d.left, u.left)),
        u
      );
    }, Bp(e, i, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function ng(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    a = r ? ln(r) : null,
    o = r ? ha(r) : null,
    i = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    u;
  switch (a) {
    case tt:
      u = { x: i, y: t.y - n.height };
      break;
    case At:
      u = { x: i, y: t.y + t.height };
      break;
    case Ct:
      u = { x: t.x + t.width, y: s };
      break;
    case nt:
      u = { x: t.x - n.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? ld(a) : null;
  if (c != null) {
    var d = c === 'y' ? 'height' : 'width';
    switch (o) {
      case fa:
        u[c] = u[c] - (t[d] / 2 - n[d] / 2);
        break;
      case Do:
        u[c] = u[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return u;
}
function Lo(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    a = r === void 0 ? e.placement : r,
    o = n.strategy,
    i = o === void 0 ? e.strategy : o,
    s = n.boundary,
    u = s === void 0 ? CE : s,
    c = n.rootBoundary,
    d = c === void 0 ? Gm : c,
    g = n.elementContext,
    f = g === void 0 ? Za : g,
    p = n.altBoundary,
    h = p === void 0 ? !1 : p,
    m = n.padding,
    w = m === void 0 ? 0 : m,
    y = Jm(typeof w != 'number' ? w : eg(w, Go)),
    b = f === Za ? kE : Za,
    v = e.rects.popper,
    E = e.elements[h ? b : f],
    x = o8(kr(E) ? E : E.contextElement || nr(e.elements.popper), u, d, i),
    S = ga(e.elements.reference),
    A = ng({ reference: S, element: v, strategy: 'absolute', placement: a }),
    C = Ac(Object.assign({}, v, A)),
    T = f === Za ? C : S,
    _ = {
      top: x.top - T.top + y.top,
      bottom: T.bottom - x.bottom + y.bottom,
      left: x.left - T.left + y.left,
      right: T.right - x.right + y.right
    },
    O = e.modifiersData.offset;
  if (f === Za && O) {
    var B = O[a];
    Object.keys(_).forEach(function (M) {
      var Z = [Ct, At].indexOf(M) >= 0 ? 1 : -1,
        I = [tt, At].indexOf(M) >= 0 ? 'y' : 'x';
      _[M] += B[I] * Z;
    });
  }
  return _;
}
function l8(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    a = n.boundary,
    o = n.rootBoundary,
    i = n.padding,
    s = n.flipVariations,
    u = n.allowedAutoPlacements,
    c = u === void 0 ? Km : u,
    d = ha(r),
    g = d
      ? s
        ? Dp
        : Dp.filter(function (h) {
            return ha(h) === d;
          })
      : Go,
    f = g.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  f.length === 0 && (f = g);
  var p = f.reduce(function (h, m) {
    return (
      (h[m] = Lo(e, { placement: m, boundary: a, rootBoundary: o, padding: i })[
        ln(m)
      ]),
      h
    );
  }, {});
  return Object.keys(p).sort(function (h, m) {
    return p[h] - p[m];
  });
}
function i8(e) {
  if (ln(e) === tu) return [];
  var t = Hl(e);
  return [$p(e), t, $p(t)];
}
function u8(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var a = n.mainAxis,
        o = a === void 0 ? !0 : a,
        i = n.altAxis,
        s = i === void 0 ? !0 : i,
        u = n.fallbackPlacements,
        c = n.padding,
        d = n.boundary,
        g = n.rootBoundary,
        f = n.altBoundary,
        p = n.flipVariations,
        h = p === void 0 ? !0 : p,
        m = n.allowedAutoPlacements,
        w = t.options.placement,
        y = ln(w),
        b = y === w,
        v = u || (b || !h ? [Hl(w)] : i8(w)),
        E = [w].concat(v).reduce(function (J, j) {
          return J.concat(
            ln(j) === tu
              ? l8(t, {
                  placement: j,
                  boundary: d,
                  rootBoundary: g,
                  padding: c,
                  flipVariations: h,
                  allowedAutoPlacements: m
                })
              : j
          );
        }, []),
        x = t.rects.reference,
        S = t.rects.popper,
        A = new Map(),
        C = !0,
        T = E[0],
        _ = 0;
      _ < E.length;
      _++
    ) {
      var O = E[_],
        B = ln(O),
        M = ha(O) === fa,
        Z = [tt, At].indexOf(B) >= 0,
        I = Z ? 'width' : 'height',
        P = Lo(t, {
          placement: O,
          boundary: d,
          rootBoundary: g,
          altBoundary: f,
          padding: c
        }),
        z = Z ? (M ? Ct : nt) : M ? At : tt;
      x[I] > S[I] && (z = Hl(z));
      var R = Hl(z),
        D = [];
      if (
        (o && D.push(P[B] <= 0),
        s && D.push(P[z] <= 0, P[R] <= 0),
        D.every(function (J) {
          return J;
        }))
      ) {
        (T = O), (C = !1);
        break;
      }
      A.set(O, D);
    }
    if (C)
      for (
        var $ = h ? 3 : 1,
          V = function (J) {
            var j = E.find(function (W) {
              var K = A.get(W);
              if (K)
                return K.slice(0, J).every(function (Se) {
                  return Se;
                });
            });
            if (j) return (T = j), 'break';
          },
          G = $;
        G > 0;
        G--
      ) {
        var Q = V(G);
        if (Q === 'break') break;
      }
    t.placement !== T &&
      ((t.modifiersData[r]._skip = !0), (t.placement = T), (t.reset = !0));
  }
}
var s8 = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: u8,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
};
function Ip(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    }
  );
}
function Pp(e) {
  return [tt, Ct, At, nt].some(function (t) {
    return e[t] >= 0;
  });
}
function c8(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Lo(t, { elementContext: 'reference' }),
    s = Lo(t, { altBoundary: !0 }),
    u = Ip(i, r),
    c = Ip(s, a, o),
    d = Pp(u),
    g = Pp(c);
  (t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: g
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': d,
      'data-popper-escaped': g
    }));
}
var d8 = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: c8
};
function p8(e, t, n) {
  var r = ln(e),
    a = [nt, tt].indexOf(r) >= 0 ? -1 : 1,
    o = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    i = o[0],
    s = o[1];
  return (
    (i = i || 0),
    (s = (s || 0) * a),
    [nt, Ct].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function f8(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    a = n.offset,
    o = a === void 0 ? [0, 0] : a,
    i = Km.reduce(function (d, g) {
      return (d[g] = p8(g, t.rects, o)), d;
    }, {}),
    s = i[t.placement],
    u = s.x,
    c = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[r] = i);
}
var m8 = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: f8
};
function g8(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = ng({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement
  });
}
var h8 = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: g8,
  data: {}
};
function y8(e) {
  return e === 'x' ? 'y' : 'x';
}
function v8(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    a = n.mainAxis,
    o = a === void 0 ? !0 : a,
    i = n.altAxis,
    s = i === void 0 ? !1 : i,
    u = n.boundary,
    c = n.rootBoundary,
    d = n.altBoundary,
    g = n.padding,
    f = n.tether,
    p = f === void 0 ? !0 : f,
    h = n.tetherOffset,
    m = h === void 0 ? 0 : h,
    w = Lo(t, { boundary: u, rootBoundary: c, padding: g, altBoundary: d }),
    y = ln(t.placement),
    b = ha(t.placement),
    v = !b,
    E = ld(y),
    x = y8(E),
    S = t.modifiersData.popperOffsets,
    A = t.rects.reference,
    C = t.rects.popper,
    T =
      typeof m == 'function'
        ? m(Object.assign({}, t.rects, { placement: t.placement }))
        : m,
    _ =
      typeof T == 'number'
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    B = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var M,
        Z = E === 'y' ? tt : nt,
        I = E === 'y' ? At : Ct,
        P = E === 'y' ? 'height' : 'width',
        z = S[E],
        R = z + w[Z],
        D = z - w[I],
        $ = p ? -C[P] / 2 : 0,
        V = b === fa ? A[P] : C[P],
        G = b === fa ? -C[P] : -A[P],
        Q = t.elements.arrow,
        J = p && Q ? od(Q) : { width: 0, height: 0 },
        j = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Qm(),
        W = j[Z],
        K = j[I],
        Se = oo(0, A[P], J[P]),
        je = v ? A[P] / 2 - $ - Se - W - _.mainAxis : V - Se - W - _.mainAxis,
        cn = v ? -A[P] / 2 + $ + Se + K + _.mainAxis : G + Se + K + _.mainAxis,
        gt = t.elements.arrow && Ko(t.elements.arrow),
        Nt = gt ? (E === 'y' ? gt.clientTop || 0 : gt.clientLeft || 0) : 0,
        H = (M = O == null ? void 0 : O[E]) != null ? M : 0,
        Ft = z + je - H - Nt,
        jt = z + cn - H,
        rr = oo(p ? Ai(R, Ft) : R, z, p ? br(D, jt) : D);
      (S[E] = rr), (B[E] = rr - z);
    }
    if (s) {
      var Rr,
        Ht = E === 'x' ? tt : nt,
        Xo = E === 'x' ? At : Ct,
        He = S[x],
        ar = x === 'y' ? 'height' : 'width',
        Zt = He + w[Ht],
        Dr = He - w[Xo],
        zt = [tt, nt].indexOf(y) !== -1,
        Lr = (Rr = O == null ? void 0 : O[x]) != null ? Rr : 0,
        Vt = zt ? Zt : He - A[ar] - C[ar] - Lr + _.altAxis,
        Le = zt ? He + A[ar] + C[ar] - Lr - _.altAxis : Dr,
        Tt = p && zt ? ZE(Vt, He, Le) : oo(p ? Vt : Zt, He, p ? Le : Dr);
      (S[x] = Tt), (B[x] = Tt - He);
    }
    t.modifiersData[r] = B;
  }
}
var b8 = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: v8,
  requiresIfExists: ['offset']
};
function E8(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function x8(e) {
  return e === ct(e) || !xt(e) ? id(e) : E8(e);
}
function w8(e) {
  var t = e.getBoundingClientRect(),
    n = ma(t.width) / e.offsetWidth || 1,
    r = ma(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function S8(e, t, n) {
  n === void 0 && (n = !1);
  var r = xt(t),
    a = xt(t) && w8(t),
    o = nr(t),
    i = ga(e, a, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((sn(t) !== 'body' || sd(o)) && (s = x8(t)),
      xt(t)
        ? ((u = ga(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop))
        : o && (u.x = ud(o))),
    {
      x: i.left + s.scrollLeft - u.x,
      y: i.top + s.scrollTop - u.y,
      width: i.width,
      height: i.height
    }
  );
}
function A8(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function a(o) {
    n.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function (s) {
      if (!n.has(s)) {
        var u = t.get(s);
        u && a(u);
      }
    }),
      r.push(o);
  }
  return (
    e.forEach(function (o) {
      n.has(o.name) || a(o);
    }),
    r
  );
}
function C8(e) {
  var t = A8(e);
  return BE.reduce(function (n, r) {
    return n.concat(
      t.filter(function (a) {
        return a.phase === r;
      })
    );
  }, []);
}
function k8(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function _8(e) {
  var t = e.reduce(function (n, r) {
    var a = n[r.name];
    return (
      (n[r.name] = a
        ? Object.assign({}, a, r, {
            options: Object.assign({}, a.options, r.options),
            data: Object.assign({}, a.data, r.data)
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Np = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function jp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == 'function');
  });
}
function F8(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    a = t.defaultOptions,
    o = a === void 0 ? Np : a;
  return function (i, s, u) {
    u === void 0 && (u = o);
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Np, o),
        modifiersData: {},
        elements: { reference: i, popper: s },
        attributes: {},
        styles: {}
      },
      d = [],
      g = !1,
      f = {
        state: c,
        setOptions: function (m) {
          var w = typeof m == 'function' ? m(c.options) : m;
          h(),
            (c.options = Object.assign({}, o, c.options, w)),
            (c.scrollParents = {
              reference: kr(i)
                ? lo(i)
                : i.contextElement
                ? lo(i.contextElement)
                : [],
              popper: lo(s)
            });
          var y = C8(_8([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = y.filter(function (b) {
              return b.enabled;
            })),
            p(),
            f.update()
          );
        },
        forceUpdate: function () {
          if (!g) {
            var m = c.elements,
              w = m.reference,
              y = m.popper;
            if (!jp(w, y)) return;
            (c.rects = {
              reference: S8(w, Ko(y), c.options.strategy === 'fixed'),
              popper: od(y)
            }),
              (c.reset = !1),
              (c.placement = c.options.placement),
              c.orderedModifiers.forEach(function (T) {
                return (c.modifiersData[T.name] = Object.assign({}, T.data));
              });
            for (var b = 0, v = 0; v < c.orderedModifiers.length; v++) {
              if (c.reset === !0) {
                (c.reset = !1), (v = -1);
                continue;
              }
              var E = c.orderedModifiers[v],
                x = E.fn,
                S = E.options,
                A = S === void 0 ? {} : S,
                C = E.name;
              typeof x == 'function' &&
                (c = x({ state: c, options: A, name: C, instance: f }) || c);
            }
          }
        },
        update: k8(function () {
          return new Promise(function (m) {
            f.forceUpdate(), m(c);
          });
        }),
        destroy: function () {
          h(), (g = !0);
        }
      };
    if (!jp(i, s)) return f;
    f.setOptions(u).then(function (m) {
      !g && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function p() {
      c.orderedModifiers.forEach(function (m) {
        var w = m.name,
          y = m.options,
          b = y === void 0 ? {} : y,
          v = m.effect;
        if (typeof v == 'function') {
          var E = v({ state: c, name: w, instance: f, options: b }),
            x = function () {};
          d.push(E || x);
        }
      });
    }
    function h() {
      d.forEach(function (m) {
        return m();
      }),
        (d = []);
    }
    return f;
  };
}
var T8 = [QE, h8, YE, NE, m8, s8, b8, qE, d8],
  O8 = F8({ defaultModifiers: T8 }),
  R8 = ft(AE()),
  D8 = [],
  L8 = function (e, t, n) {
    n === void 0 && (n = {});
    var r = k.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || 'bottom',
        strategy: n.strategy || 'absolute',
        modifiers: n.modifiers || D8
      },
      o = k.useState({
        styles: {
          popper: { position: a.strategy, left: '0', top: '0' },
          arrow: { position: 'absolute' }
        },
        attributes: {}
      }),
      i = o[0],
      s = o[1],
      u = k.useMemo(function () {
        return {
          name: 'updateState',
          enabled: !0,
          phase: 'write',
          fn: function (g) {
            var f = g.state,
              p = Object.keys(f.elements);
            N0.flushSync(function () {
              s({
                styles: Op(
                  p.map(function (h) {
                    return [h, f.styles[h] || {}];
                  })
                ),
                attributes: Op(
                  p.map(function (h) {
                    return [h, f.attributes[h]];
                  })
                )
              });
            });
          },
          requires: ['computeStyles']
        };
      }, []),
      c = k.useMemo(
        function () {
          var g = {
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [
              u,
              { name: 'applyStyles', enabled: !1 }
            ])
          };
          return (0, R8.default)(r.current, g)
            ? r.current || g
            : ((r.current = g), g);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, u]
      ),
      d = k.useRef();
    return (
      Rp(
        function () {
          d.current && d.current.setOptions(c);
        },
        [c]
      ),
      Rp(
        function () {
          if (!(e == null || t == null)) {
            var g = n.createPopper || O8,
              f = g(e, t, c);
            return (
              (d.current = f),
              function () {
                f.destroy(), (d.current = null);
              }
            );
          }
        },
        [e, t, n.createPopper]
      ),
      {
        state: d.current ? d.current.state : null,
        styles: i.styles,
        attributes: i.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null
      }
    );
  };
function rg(e) {
  var t = k.useRef(e);
  return (
    (t.current = e),
    k.useCallback(function () {
      return t.current;
    }, [])
  );
}
var M8 = function () {};
function $8(e) {
  var t = e.initial,
    n = e.value,
    r = e.onChange,
    a = r === void 0 ? M8 : r;
  if (t === void 0 && n === void 0)
    throw new TypeError(
      'Either "value" or "initial" variable must be set. Now both are undefined'
    );
  var o = k.useState(t),
    i = o[0],
    s = o[1],
    u = rg(i),
    c = k.useCallback(
      function (g) {
        var f = u(),
          p = typeof g == 'function' ? g(f) : g;
        typeof p.persist == 'function' && p.persist(),
          s(p),
          typeof a == 'function' && a(p);
      },
      [u, a]
    ),
    d = n !== void 0;
  return [d ? n : i, d ? a : c];
}
function ag(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: t,
        right: e,
        bottom: t,
        left: e,
        x: 0,
        y: 0,
        toJSON: function () {
          return null;
        }
      };
    }
  );
}
var B8 = ['styles', 'attributes'],
  Hp = { getBoundingClientRect: ag() },
  Zp = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 },
    offset: [0, 6],
    trigger: 'hover'
  };
function I8(e, t) {
  var n, r, a;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var o = Object.keys(Zp).reduce(function (I, P) {
      var z;
      return We({}, I, ((z = {}), (z[P] = I[P] !== void 0 ? I[P] : Zp[P]), z));
    }, e),
    i = k.useMemo(
      function () {
        return [{ name: 'offset', options: { offset: o.offset } }];
      },
      Array.isArray(o.offset) ? o.offset : []
    ),
    s = We({}, t, {
      placement: t.placement || o.placement,
      modifiers: t.modifiers || i
    }),
    u = k.useState(null),
    c = u[0],
    d = u[1],
    g = k.useState(null),
    f = g[0],
    p = g[1],
    h = $8({
      initial: o.defaultVisible,
      value: o.visible,
      onChange: o.onVisibleChange
    }),
    m = h[0],
    w = h[1],
    y = k.useRef();
  k.useEffect(function () {
    return function () {
      return clearTimeout(y.current);
    };
  }, []);
  var b = L8(o.followCursor ? Hp : c, f, s),
    v = b.styles,
    E = b.attributes,
    x = X0(b, B8),
    S = x.update,
    A = rg({ visible: m, triggerRef: c, tooltipRef: f, finalConfig: o }),
    C = k.useCallback(
      function (I) {
        return Array.isArray(o.trigger)
          ? o.trigger.includes(I)
          : o.trigger === I;
      },
      Array.isArray(o.trigger) ? o.trigger : [o.trigger]
    ),
    T = k.useCallback(
      function () {
        clearTimeout(y.current),
          (y.current = window.setTimeout(function () {
            return w(!1);
          }, o.delayHide));
      },
      [o.delayHide, w]
    ),
    _ = k.useCallback(
      function () {
        clearTimeout(y.current),
          (y.current = window.setTimeout(function () {
            return w(!0);
          }, o.delayShow));
      },
      [o.delayShow, w]
    ),
    O = k.useCallback(
      function () {
        A().visible ? T() : _();
      },
      [A, T, _]
    );
  k.useEffect(
    function () {
      if (A().finalConfig.closeOnOutsideClick) {
        var I = function (P) {
          var z,
            R = A(),
            D = R.tooltipRef,
            $ = R.triggerRef,
            V =
              (P.composedPath == null || (z = P.composedPath()) == null
                ? void 0
                : z[0]) || P.target;
          V instanceof Node &&
            D != null &&
            $ != null &&
            !D.contains(V) &&
            !$.contains(V) &&
            T();
        };
        return (
          document.addEventListener('mousedown', I),
          function () {
            return document.removeEventListener('mousedown', I);
          }
        );
      }
    },
    [A, T]
  ),
    k.useEffect(
      function () {
        if (!(c == null || !C('click')))
          return (
            c.addEventListener('click', O),
            function () {
              return c.removeEventListener('click', O);
            }
          );
      },
      [c, C, O]
    ),
    k.useEffect(
      function () {
        if (!(c == null || !C('double-click')))
          return (
            c.addEventListener('dblclick', O),
            function () {
              return c.removeEventListener('dblclick', O);
            }
          );
      },
      [c, C, O]
    ),
    k.useEffect(
      function () {
        if (!(c == null || !C('right-click'))) {
          var I = function (P) {
            P.preventDefault(), O();
          };
          return (
            c.addEventListener('contextmenu', I),
            function () {
              return c.removeEventListener('contextmenu', I);
            }
          );
        }
      },
      [c, C, O]
    ),
    k.useEffect(
      function () {
        if (!(c == null || !C('focus')))
          return (
            c.addEventListener('focus', _),
            c.addEventListener('blur', T),
            function () {
              c.removeEventListener('focus', _),
                c.removeEventListener('blur', T);
            }
          );
      },
      [c, C, _, T]
    ),
    k.useEffect(
      function () {
        if (!(c == null || !C('hover')))
          return (
            c.addEventListener('mouseenter', _),
            c.addEventListener('mouseleave', T),
            function () {
              c.removeEventListener('mouseenter', _),
                c.removeEventListener('mouseleave', T);
            }
          );
      },
      [c, C, _, T]
    ),
    k.useEffect(
      function () {
        if (!(f == null || !C('hover') || !A().finalConfig.interactive))
          return (
            f.addEventListener('mouseenter', _),
            f.addEventListener('mouseleave', T),
            function () {
              f.removeEventListener('mouseenter', _),
                f.removeEventListener('mouseleave', T);
            }
          );
      },
      [f, C, _, T, A]
    );
  var B =
    x == null ||
    (n = x.state) == null ||
    (r = n.modifiersData) == null ||
    (a = r.hide) == null
      ? void 0
      : a.isReferenceHidden;
  k.useEffect(
    function () {
      o.closeOnTriggerHidden && B && T();
    },
    [o.closeOnTriggerHidden, T, B]
  ),
    k.useEffect(
      function () {
        if (!o.followCursor || c == null) return;
        function I(P) {
          var z = P.clientX,
            R = P.clientY;
          (Hp.getBoundingClientRect = ag(z, R)), S == null || S();
        }
        return (
          c.addEventListener('mousemove', I),
          function () {
            return c.removeEventListener('mousemove', I);
          }
        );
      },
      [o.followCursor, c, S]
    ),
    k.useEffect(
      function () {
        if (!(f == null || S == null || o.mutationObserverOptions == null)) {
          var I = new MutationObserver(S);
          return (
            I.observe(f, o.mutationObserverOptions),
            function () {
              return I.disconnect();
            }
          );
        }
      },
      [o.mutationObserverOptions, f, S]
    );
  var M = function (I) {
      return (
        I === void 0 && (I = {}),
        We({}, I, { style: We({}, I.style, v.popper) }, E.popper, {
          'data-popper-interactive': o.interactive
        })
      );
    },
    Z = function (I) {
      return (
        I === void 0 && (I = {}),
        We({}, I, E.arrow, {
          style: We({}, I.style, v.arrow),
          'data-popper-arrow': !0
        })
      );
    };
  return We(
    {
      getArrowProps: Z,
      getTooltipProps: M,
      setTooltipRef: p,
      setTriggerRef: d,
      tooltipRef: f,
      triggerRef: c,
      visible: m
    },
    x
  );
}
var ht = Tr(1e3)((e, t, n, r = 0) => (t.split('-')[0] === e ? n : r)),
  Fn = 8,
  P8 = F.div(
    { position: 'absolute', borderStyle: 'solid' },
    ({ placement: e }) => {
      let t = 0,
        n = 0;
      switch (!0) {
        case e.startsWith('left') || e.startsWith('right'): {
          n = 8;
          break;
        }
        case e.startsWith('top') || e.startsWith('bottom'): {
          t = 8;
          break;
        }
      }
      return { transform: `translate3d(${t}px, ${n}px, 0px)` };
    },
    ({ theme: e, color: t, placement: n }) => ({
      bottom: `${ht('top', n, `${Fn * -1}px`, 'auto')}`,
      top: `${ht('bottom', n, `${Fn * -1}px`, 'auto')}`,
      right: `${ht('left', n, `${Fn * -1}px`, 'auto')}`,
      left: `${ht('right', n, `${Fn * -1}px`, 'auto')}`,
      borderBottomWidth: `${ht('top', n, '0', Fn)}px`,
      borderTopWidth: `${ht('bottom', n, '0', Fn)}px`,
      borderRightWidth: `${ht('left', n, '0', Fn)}px`,
      borderLeftWidth: `${ht('right', n, '0', Fn)}px`,
      borderTopColor: ht(
        'top',
        n,
        e.color[t] || t || e.base === 'light'
          ? Ka(e.background.app)
          : e.background.app,
        'transparent'
      ),
      borderBottomColor: ht(
        'bottom',
        n,
        e.color[t] || t || e.base === 'light'
          ? Ka(e.background.app)
          : e.background.app,
        'transparent'
      ),
      borderLeftColor: ht(
        'left',
        n,
        e.color[t] || t || e.base === 'light'
          ? Ka(e.background.app)
          : e.background.app,
        'transparent'
      ),
      borderRightColor: ht(
        'right',
        n,
        e.color[t] || t || e.base === 'light'
          ? Ka(e.background.app)
          : e.background.app,
        'transparent'
      )
    })
  ),
  N8 = F.div(
    ({ hidden: e }) => ({
      display: e ? 'none' : 'inline-block',
      zIndex: 2147483647
    }),
    ({ theme: e, color: t, hasChrome: n }) =>
      n
        ? {
            background:
              e.color[t] || t || e.base === 'light'
                ? Ka(e.background.app)
                : e.background.app,
            filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
            borderRadius: e.appBorderRadius,
            fontSize: e.typography.size.s1
          }
        : {}
  ),
  cd = l.forwardRef(
    (
      {
        placement: e,
        hasChrome: t,
        children: n,
        arrowProps: r,
        tooltipRef: a,
        color: o,
        withArrows: i,
        ...s
      },
      u
    ) =>
      l.createElement(
        N8,
        { 'data-testid': 'tooltip', hasChrome: t, ref: u, ...s, color: o },
        t && i && l.createElement(P8, { placement: e, ...r, color: o }),
        n
      )
  );
cd.displayName = 'Tooltip';
cd.defaultProps = {
  color: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: 'top',
  arrowProps: {}
};
var { document: Zl } = Pe,
  j8 = F.div`
  display: inline-block;
  cursor: ${(e) =>
    e.trigger === 'hover' || e.trigger.includes('hover')
      ? 'default'
      : 'pointer'};
`,
  H8 = F.g`
  cursor: ${(e) =>
    e.trigger === 'hover' || e.trigger.includes('hover')
      ? 'default'
      : 'pointer'};
`,
  og = ({
    svg: e,
    trigger: t,
    closeOnOutsideClick: n,
    placement: r,
    hasChrome: a,
    withArrows: o,
    offset: i,
    tooltip: s,
    children: u,
    closeOnTriggerHidden: c,
    mutationObserverOptions: d,
    closeOnClick: g,
    tooltipShown: f,
    onVisibilityChange: p,
    defaultVisible: h,
    delayHide: m,
    visible: w,
    interactive: y,
    delayShow: b,
    modifiers: v,
    strategy: E,
    followCursor: x,
    onVisibleChange: S,
    ...A
  }) => {
    let C = e ? H8 : j8,
      {
        getArrowProps: T,
        getTooltipProps: _,
        setTooltipRef: O,
        setTriggerRef: B,
        visible: M,
        state: Z
      } = I8(
        {
          trigger: t,
          placement: r,
          defaultVisible: h ?? f,
          delayHide: m,
          interactive: y,
          closeOnOutsideClick: n ?? g,
          closeOnTriggerHidden: c,
          onVisibleChange: (P) => {
            p == null || p(P), S == null || S(P);
          },
          delayShow: b,
          followCursor: x,
          mutationObserverOptions: d,
          visible: w,
          offset: i
        },
        { modifiers: v, strategy: E }
      ),
      I = l.createElement(
        cd,
        {
          placement: Z == null ? void 0 : Z.placement,
          ref: O,
          hasChrome: a,
          arrowProps: T(),
          withArrows: o,
          ..._()
        },
        typeof s == 'function' ? s({ onHide: () => S(!1) }) : s
      );
    return l.createElement(
      l.Fragment,
      null,
      l.createElement(C, { trigger: t, ref: B, ...A }, u),
      M && Y3.createPortal(I, Zl.body)
    );
  };
og.defaultProps = {
  svg: !1,
  trigger: 'click',
  closeOnOutsideClick: !1,
  placement: 'top',
  modifiers: [
    { name: 'preventOverflow', options: { padding: 8 } },
    { name: 'offset', options: { offset: [8, 8] } },
    { name: 'arrow', options: { padding: 8 } }
  ],
  hasChrome: !0,
  defaultVisible: !1
};
var Z8 = ({ startOpen: e = !1, onVisibleChange: t, ...n }) => {
  let [r, a] = k.useState(e),
    o = k.useCallback(
      (i) => {
        (t && t(i) === !1) || a(i);
      },
      [t]
    );
  return (
    k.useEffect(() => {
      let i = () => o(!1);
      Zl.addEventListener('keydown', i, !1);
      let s = Array.from(Zl.getElementsByTagName('iframe')),
        u = [];
      return (
        s.forEach((c) => {
          let d = () => {
            try {
              c.contentWindow.document &&
                (c.contentWindow.document.addEventListener('click', i),
                u.push(() => {
                  try {
                    c.contentWindow.document.removeEventListener('click', i);
                  } catch {}
                }));
            } catch {}
          };
          d(),
            c.addEventListener('load', d),
            u.push(() => {
              c.removeEventListener('load', d);
            });
        }),
        () => {
          Zl.removeEventListener('keydown', i),
            u.forEach((c) => {
              c();
            });
        }
      );
    }),
    l.createElement(og, { ...n, visible: r, onVisibleChange: o })
  );
};
function z8(e, t) {
  var n = k.useRef(null),
    r = k.useRef(null);
  r.current = t;
  var a = k.useRef(null);
  k.useEffect(function () {
    o();
  });
  var o = k.useCallback(
    function () {
      var i = a.current,
        s = r.current,
        u = i || (s ? (s instanceof Element ? s : s.current) : null);
      (n.current && n.current.element === u && n.current.subscriber === e) ||
        (n.current && n.current.cleanup && n.current.cleanup(),
        (n.current = {
          element: u,
          subscriber: e,
          cleanup: u ? e(u) : void 0
        }));
    },
    [e]
  );
  return (
    k.useEffect(function () {
      return function () {
        n.current &&
          n.current.cleanup &&
          (n.current.cleanup(), (n.current = null));
      };
    }, []),
    k.useCallback(
      function (i) {
        (a.current = i), o();
      },
      [o]
    )
  );
}
function zp(e, t, n) {
  return e[t]
    ? e[t][0]
      ? e[t][0][n]
      : e[t][n]
    : t === 'contentBoxSize'
    ? e.contentRect[n === 'inlineSize' ? 'width' : 'height']
    : void 0;
}
function lg(e) {
  e === void 0 && (e = {});
  var t = e.onResize,
    n = k.useRef(void 0);
  n.current = t;
  var r = e.round || Math.round,
    a = k.useRef(),
    o = k.useState({ width: void 0, height: void 0 }),
    i = o[0],
    s = o[1],
    u = k.useRef(!1);
  k.useEffect(function () {
    return (
      (u.current = !1),
      function () {
        u.current = !0;
      }
    );
  }, []);
  var c = k.useRef({ width: void 0, height: void 0 }),
    d = z8(
      k.useCallback(
        function (g) {
          return (
            (!a.current || a.current.box !== e.box || a.current.round !== r) &&
              (a.current = {
                box: e.box,
                round: r,
                instance: new ResizeObserver(function (f) {
                  var p = f[0],
                    h =
                      e.box === 'border-box'
                        ? 'borderBoxSize'
                        : e.box === 'device-pixel-content-box'
                        ? 'devicePixelContentBoxSize'
                        : 'contentBoxSize',
                    m = zp(p, h, 'inlineSize'),
                    w = zp(p, h, 'blockSize'),
                    y = m ? r(m) : void 0,
                    b = w ? r(w) : void 0;
                  if (c.current.width !== y || c.current.height !== b) {
                    var v = { width: y, height: b };
                    (c.current.width = y),
                      (c.current.height = b),
                      n.current ? n.current(v) : u.current || s(v);
                  }
                })
              }),
            a.current.instance.observe(g, { box: e.box }),
            function () {
              a.current && a.current.instance.unobserve(g);
            }
          );
        },
        [e.box, r]
      ),
      e.ref
    );
  return k.useMemo(
    function () {
      return { ref: d, width: i.width, height: i.height };
    },
    [d, i.width, i.height]
  );
}
var ue = ({ ...e }, t) => {
  let n = [e.class, e.className];
  return (
    delete e.class,
    (e.className = ['sbdocs', `sbdocs-${t}`, ...n].filter(Boolean).join(' ')),
    e
  );
};
function V8(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Mo(e, t) {
  return (
    (Mo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Mo(e, t)
  );
}
function U8(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Mo(e, t);
}
function Cc(e) {
  return (
    (Cc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Cc(e)
  );
}
function q8(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1;
}
function W8() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function zl(e, t, n) {
  return (
    W8()
      ? (zl = Reflect.construct.bind())
      : (zl = function (r, a, o) {
          var i = [null];
          i.push.apply(i, a);
          var s = Function.bind.apply(r, i),
            u = new s();
          return o && Mo(u, o.prototype), u;
        }),
    zl.apply(null, arguments)
  );
}
function kc(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (kc = function (n) {
      if (n === null || !q8(n)) return n;
      if (typeof n != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (typeof t < 'u') {
        if (t.has(n)) return t.get(n);
        t.set(n, r);
      }
      function r() {
        return zl(n, arguments, Cc(this).constructor);
      }
      return (
        (r.prototype = Object.create(n.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
        Mo(r, n)
      );
    }),
    kc(e)
  );
}
var tn = (function (e) {
  U8(t, e);
  function t(n) {
    var r;
    return (
      (r =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            n +
            ' for more information.'
        ) || this),
      V8(r)
    );
  }
  return t;
})(kc(Error));
function ns(e) {
  return Math.round(e * 255);
}
function G8(e, t, n) {
  return ns(e) + ',' + ns(t) + ',' + ns(n);
}
function $o(e, t, n, r) {
  if ((r === void 0 && (r = G8), t === 0)) return r(n, n, n);
  var a = (((e % 360) + 360) % 360) / 60,
    o = (1 - Math.abs(2 * n - 1)) * t,
    i = o * (1 - Math.abs((a % 2) - 1)),
    s = 0,
    u = 0,
    c = 0;
  a >= 0 && a < 1
    ? ((s = o), (u = i))
    : a >= 1 && a < 2
    ? ((s = i), (u = o))
    : a >= 2 && a < 3
    ? ((u = o), (c = i))
    : a >= 3 && a < 4
    ? ((u = i), (c = o))
    : a >= 4 && a < 5
    ? ((s = i), (c = o))
    : a >= 5 && a < 6 && ((s = o), (c = i));
  var d = n - o / 2,
    g = s + d,
    f = u + d,
    p = c + d;
  return r(g, f, p);
}
var Vp = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
function K8(e) {
  if (typeof e != 'string') return e;
  var t = e.toLowerCase();
  return Vp[t] ? '#' + Vp[t] : e;
}
var Y8 = /^#[a-fA-F0-9]{6}$/,
  X8 = /^#[a-fA-F0-9]{8}$/,
  Q8 = /^#[a-fA-F0-9]{3}$/,
  J8 = /^#[a-fA-F0-9]{4}$/,
  rs = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  ex =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  tx =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  nx =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function dd(e) {
  if (typeof e != 'string') throw new tn(3);
  var t = K8(e);
  if (t.match(Y8))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16)
    };
  if (t.match(X8)) {
    var n = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(Q8))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16)
    };
  if (t.match(J8)) {
    var r = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: r
    };
  }
  var a = rs.exec(t);
  if (a)
    return {
      red: parseInt('' + a[1], 10),
      green: parseInt('' + a[2], 10),
      blue: parseInt('' + a[3], 10)
    };
  var o = ex.exec(t.substring(0, 50));
  if (o)
    return {
      red: parseInt('' + o[1], 10),
      green: parseInt('' + o[2], 10),
      blue: parseInt('' + o[3], 10),
      alpha:
        parseFloat('' + o[4]) > 1
          ? parseFloat('' + o[4]) / 100
          : parseFloat('' + o[4])
    };
  var i = tx.exec(t);
  if (i) {
    var s = parseInt('' + i[1], 10),
      u = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + $o(s, u, c) + ')',
      g = rs.exec(d);
    if (!g) throw new tn(4, t, d);
    return {
      red: parseInt('' + g[1], 10),
      green: parseInt('' + g[2], 10),
      blue: parseInt('' + g[3], 10)
    };
  }
  var f = nx.exec(t.substring(0, 50));
  if (f) {
    var p = parseInt('' + f[1], 10),
      h = parseInt('' + f[2], 10) / 100,
      m = parseInt('' + f[3], 10) / 100,
      w = 'rgb(' + $o(p, h, m) + ')',
      y = rs.exec(w);
    if (!y) throw new tn(4, t, w);
    return {
      red: parseInt('' + y[1], 10),
      green: parseInt('' + y[2], 10),
      blue: parseInt('' + y[3], 10),
      alpha:
        parseFloat('' + f[4]) > 1
          ? parseFloat('' + f[4]) / 100
          : parseFloat('' + f[4])
    };
  }
  throw new tn(5);
}
function rx(e) {
  var t = e.red / 255,
    n = e.green / 255,
    r = e.blue / 255,
    a = Math.max(t, n, r),
    o = Math.min(t, n, r),
    i = (a + o) / 2;
  if (a === o)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var s,
    u = a - o,
    c = i > 0.5 ? u / (2 - a - o) : u / (a + o);
  switch (a) {
    case t:
      s = (n - r) / u + (n < r ? 6 : 0);
      break;
    case n:
      s = (r - t) / u + 2;
      break;
    default:
      s = (t - n) / u + 4;
      break;
  }
  return (
    (s *= 60),
    e.alpha !== void 0
      ? { hue: s, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: s, saturation: c, lightness: i }
  );
}
function ig(e) {
  return rx(dd(e));
}
var ax = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? '#' + e[1] + e[3] + e[5]
      : e;
  },
  _c = ax;
function cr(e) {
  var t = e.toString(16);
  return t.length === 1 ? '0' + t : t;
}
function as(e) {
  return cr(Math.round(e * 255));
}
function ox(e, t, n) {
  return _c('#' + as(e) + as(t) + as(n));
}
function Ci(e, t, n) {
  return $o(e, t, n, ox);
}
function lx(e, t, n) {
  if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number')
    return Ci(e, t, n);
  if (typeof e == 'object' && t === void 0 && n === void 0)
    return Ci(e.hue, e.saturation, e.lightness);
  throw new tn(1);
}
function ix(e, t, n, r) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof n == 'number' &&
    typeof r == 'number'
  )
    return r >= 1 ? Ci(e, t, n) : 'rgba(' + $o(e, t, n) + ',' + r + ')';
  if (typeof e == 'object' && t === void 0 && n === void 0 && r === void 0)
    return e.alpha >= 1
      ? Ci(e.hue, e.saturation, e.lightness)
      : 'rgba(' + $o(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
  throw new tn(2);
}
function Fc(e, t, n) {
  if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number')
    return _c('#' + cr(e) + cr(t) + cr(n));
  if (typeof e == 'object' && t === void 0 && n === void 0)
    return _c('#' + cr(e.red) + cr(e.green) + cr(e.blue));
  throw new tn(6);
}
function mn(e, t, n, r) {
  if (typeof e == 'string' && typeof t == 'number') {
    var a = dd(e);
    return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof n == 'number' &&
      typeof r == 'number'
    )
      return r >= 1
        ? Fc(e, t, n)
        : 'rgba(' + e + ',' + t + ',' + n + ',' + r + ')';
    if (typeof e == 'object' && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1
        ? Fc(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
  }
  throw new tn(7);
}
var ux = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    );
  },
  sx = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      typeof e.alpha == 'number'
    );
  },
  cx = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    );
  },
  dx = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      typeof e.alpha == 'number'
    );
  };
function ug(e) {
  if (typeof e != 'object') throw new tn(8);
  if (sx(e)) return mn(e);
  if (ux(e)) return Fc(e);
  if (dx(e)) return ix(e);
  if (cx(e)) return lx(e);
  throw new tn(8);
}
function sg(e, t, n) {
  return function () {
    var r = n.concat(Array.prototype.slice.call(arguments));
    return r.length >= t ? e.apply(this, r) : sg(e, t, r);
  };
}
function pd(e) {
  return sg(e, e.length, []);
}
function fd(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function px(e, t) {
  if (t === 'transparent') return t;
  var n = ig(t);
  return ug(We({}, n, { lightness: fd(0, 1, n.lightness - parseFloat(e)) }));
}
var fx = pd(px),
  Yr = fx;
function mx(e, t) {
  if (t === 'transparent') return t;
  var n = ig(t);
  return ug(We({}, n, { lightness: fd(0, 1, n.lightness + parseFloat(e)) }));
}
var gx = pd(mx),
  hx = gx;
function yx(e, t) {
  if (t === 'transparent') return t;
  var n = dd(t),
    r = typeof n.alpha == 'number' ? n.alpha : 1,
    a = We({}, n, {
      alpha: fd(0, 1, +(r * 100 - parseFloat(e) * 100).toFixed(2) / 100)
    });
  return mn(a);
}
var vx = pd(yx),
  Ke = vx,
  Ca = ({ theme: e }) => ({
    margin: '20px 0 8px',
    padding: 0,
    cursor: 'text',
    position: 'relative',
    color: e.color.defaultText,
    '&:first-of-type': { marginTop: 0, paddingTop: 0 },
    '&:hover a.anchor': { textDecoration: 'none' },
    '& tt, & code': { fontSize: 'inherit' }
  }),
  kn = ({ theme: e }) => ({
    lineHeight: 1,
    margin: '0 2px',
    padding: '3px 5px',
    whiteSpace: 'nowrap',
    borderRadius: 3,
    fontSize: e.typography.size.s2 - 1,
    border:
      e.base === 'light'
        ? `1px solid ${e.color.mediumlight}`
        : `1px solid ${e.color.darker}`,
    color:
      e.base === 'light'
        ? Ke(0.1, e.color.defaultText)
        : Ke(0.3, e.color.defaultText),
    backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border
  }),
  me = ({ theme: e }) => ({
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s3,
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch'
  }),
  Or = { margin: '16px 0' },
  bx = ({ href: e, children: t, ...n }) => {
    let r = /^\//.test(e),
      a = /^#.*/.test(e),
      o = r ? `./?path=${e}` : e;
    return l.createElement(
      'a',
      { href: o, target: a ? '_self' : '_top', ...n },
      t
    );
  },
  cg = F(bx)(me, ({ theme: e }) => ({
    fontSize: 'inherit',
    lineHeight: '24px',
    color: e.color.secondary,
    textDecoration: 'none',
    '&.absent': { color: '#cc0000' },
    '&.anchor': {
      display: 'block',
      paddingLeft: 30,
      marginLeft: -30,
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0
    }
  })),
  dg = F.blockquote(me, Or, ({ theme: e }) => ({
    borderLeft: `4px solid ${e.color.medium}`,
    padding: '0 15px',
    color: e.color.dark,
    '& > :first-of-type': { marginTop: 0 },
    '& > :last-child': { marginBottom: 0 }
  })),
  Ex = (e) => typeof e == 'string',
  xx = /[\n\r]/g,
  wx = F.code(
    ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'inline-block',
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: 'baseline',
      color: 'inherit'
    }),
    kn
  ),
  Sx = F(Wm)(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: '19px',
    margin: '25px 0 40px',
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    'pre.prismjs': { padding: 20, background: 'inherit' }
  })),
  md = ({ className: e, children: t, ...n }) => {
    let r = (e || '').match(/lang-(\S+)/),
      a = k.Children.toArray(t);
    return a.filter(Ex).some((o) => o.match(xx))
      ? l.createElement(
          Sx,
          {
            bordered: !0,
            copyable: !0,
            language: (r == null ? void 0 : r[1]) ?? 'plaintext',
            format: !1,
            ...n
          },
          t
        )
      : l.createElement(wx, { ...n, className: e }, a);
  },
  pg = F.div(me),
  fg = F.dl(me, {
    ...Or,
    padding: 0,
    '& dt': {
      fontSize: '14px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      padding: 0,
      margin: '16px 0 4px'
    },
    '& dt:first-of-type': { padding: 0 },
    '& dt > :first-of-type': { marginTop: 0 },
    '& dt > :last-child': { marginBottom: 0 },
    '& dd': { margin: '0 0 16px', padding: '0 15px' },
    '& dd > :first-of-type': { marginTop: 0 },
    '& dd > :last-child': { marginBottom: 0 }
  }),
  mg = F.h1(me, Ca, ({ theme: e }) => ({
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold
  })),
  gd = F.h2(me, Ca, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m2}px`,
    paddingBottom: 4,
    borderBottom: `1px solid ${e.appBorderColor}`
  })),
  hd = F.h3(me, Ca, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m1}px`
  })),
  gg = F.h4(me, Ca, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s3}px`
  })),
  hg = F.h5(me, Ca, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`
  })),
  yg = F.h6(me, Ca, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    color: e.color.dark
  })),
  vg = F.hr(({ theme: e }) => ({
    border: '0 none',
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0
  })),
  bg = F.img({ maxWidth: '100%' }),
  Eg = F.li(me, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    color: e.color.defaultText,
    lineHeight: '24px',
    '& + li': { marginTop: '.25em' },
    '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
    '& code': kn({ theme: e })
  })),
  Ax = {
    paddingLeft: 30,
    '& :first-of-type': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 }
  },
  xg = F.ol(me, Or, { ...Ax, listStyle: 'decimal' }),
  wg = F.p(me, Or, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: '24px',
    color: e.color.defaultText,
    '& code': kn({ theme: e })
  })),
  Sg = F.pre(me, Or, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    lineHeight: '18px',
    padding: '11px 1rem',
    whiteSpace: 'pre-wrap',
    color: 'inherit',
    borderRadius: 3,
    margin: '1rem 0',
    '&:not(.prismjs)': {
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      padding: 0,
      margin: 0
    },
    '& pre, &.prismjs': {
      padding: 15,
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      fontSize: '13px',
      lineHeight: '19px',
      code: { color: 'inherit', fontSize: 'inherit' }
    },
    '& code': { whiteSpace: 'pre' },
    '& code, & tt': { border: 'none' }
  })),
  Ag = F.span(me, ({ theme: e }) => ({
    '&.frame': {
      display: 'block',
      overflow: 'hidden',
      '& > span': {
        border: `1px solid ${e.color.medium}`,
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '13px 0 0',
        padding: 7,
        width: 'auto'
      },
      '& span img': { display: 'block', float: 'left' },
      '& span span': {
        clear: 'both',
        color: e.color.darkest,
        display: 'block',
        padding: '5px 0 0'
      }
    },
    '&.align-center': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'center'
      },
      '& span img': { margin: '0 auto', textAlign: 'center' }
    },
    '&.align-right': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px 0 0',
        textAlign: 'right'
      },
      '& span img': { margin: 0, textAlign: 'right' }
    },
    '&.float-left': {
      display: 'block',
      marginRight: 13,
      overflow: 'hidden',
      float: 'left',
      '& span': { margin: '13px 0 0' }
    },
    '&.float-right': {
      display: 'block',
      marginLeft: 13,
      overflow: 'hidden',
      float: 'right',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'right'
      }
    }
  })),
  Cg = F.table(me, Or, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: '24px',
    padding: 0,
    borderCollapse: 'collapse',
    '& tr': {
      borderTop: `1px solid ${e.appBorderColor}`,
      backgroundColor: e.appContentBg,
      margin: 0,
      padding: 0
    },
    '& tr:nth-of-type(2n)': {
      backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter
    },
    '& tr th': {
      fontWeight: 'bold',
      color: e.color.defaultText,
      border: `1px solid ${e.appBorderColor}`,
      margin: 0,
      padding: '6px 13px'
    },
    '& tr td': {
      border: `1px solid ${e.appBorderColor}`,
      color: e.color.defaultText,
      margin: 0,
      padding: '6px 13px'
    },
    '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
    '& tr th :last-child, & tr td :last-child': { marginBottom: 0 }
  })),
  kg = F.title(kn),
  Cx = {
    paddingLeft: 30,
    '& :first-of-type': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 }
  },
  _g = F.ul(me, Or, { ...Cx, listStyle: 'disc' }),
  yd = F.div(me),
  Fg = {
    h1: (e) => l.createElement(mg, { ...ue(e, 'h1') }),
    h2: (e) => l.createElement(gd, { ...ue(e, 'h2') }),
    h3: (e) => l.createElement(hd, { ...ue(e, 'h3') }),
    h4: (e) => l.createElement(gg, { ...ue(e, 'h4') }),
    h5: (e) => l.createElement(hg, { ...ue(e, 'h5') }),
    h6: (e) => l.createElement(yg, { ...ue(e, 'h6') }),
    pre: (e) => l.createElement(Sg, { ...ue(e, 'pre') }),
    a: (e) => l.createElement(cg, { ...ue(e, 'a') }),
    hr: (e) => l.createElement(vg, { ...ue(e, 'hr') }),
    dl: (e) => l.createElement(fg, { ...ue(e, 'dl') }),
    blockquote: (e) => l.createElement(dg, { ...ue(e, 'blockquote') }),
    table: (e) => l.createElement(Cg, { ...ue(e, 'table') }),
    img: (e) => l.createElement(bg, { ...ue(e, 'img') }),
    div: (e) => l.createElement(pg, { ...ue(e, 'div') }),
    span: (e) => l.createElement(Ag, { ...ue(e, 'span') }),
    li: (e) => l.createElement(Eg, { ...ue(e, 'li') }),
    ul: (e) => l.createElement(_g, { ...ue(e, 'ul') }),
    ol: (e) => l.createElement(xg, { ...ue(e, 'ol') }),
    p: (e) => l.createElement(wg, { ...ue(e, 'p') }),
    code: (e) => l.createElement(md, { ...ue(e, 'code') }),
    tt: (e) => l.createElement(kg, { ...ue(e, 'tt') }),
    resetwrapper: (e) => l.createElement(yd, { ...ue(e, 'resetwrapper') })
  },
  kx = F.div(
    ({ theme: e }) => ({
      display: 'inline-block',
      fontSize: 11,
      lineHeight: '12px',
      alignSelf: 'center',
      padding: '4px 12px',
      borderRadius: '3em',
      fontWeight: e.typography.weight.bold
    }),
    {
      svg: {
        height: 12,
        width: 12,
        marginRight: 4,
        marginTop: -2,
        path: { fill: 'currentColor' }
      }
    },
    ({ theme: e, status: t }) => {
      switch (t) {
        case 'critical':
          return { color: e.color.critical, background: e.background.critical };
        case 'negative':
          return {
            color: e.color.negativeText,
            background: e.background.negative,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${Ke(0.9, e.color.negativeText)}`
                : 'none'
          };
        case 'warning':
          return {
            color: e.color.warningText,
            background: e.background.warning,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${Ke(0.9, e.color.warningText)}`
                : 'none'
          };
        case 'neutral':
          return {
            color: e.color.dark,
            background: e.color.mediumlight,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${Ke(0.9, e.color.dark)}`
                : 'none'
          };
        case 'positive':
          return {
            color: e.color.positiveText,
            background: e.background.positive,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${Ke(0.9, e.color.positiveText)}`
                : 'none'
          };
        default:
          return {};
      }
    }
  ),
  _x = ({ ...e }) => l.createElement(kx, { ...e }),
  Bo = {
    user: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z'
      })
    ),
    useralt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z'
      })
    ),
    useradd: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z'
      })
    ),
    users: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z'
      }),
      l.createElement('path', {
        d: 'M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z'
      })
    ),
    profile: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z'
      })
    ),
    facehappy: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    faceneutral: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    facesad: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    accessibility: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z'
      }),
      l.createElement('path', { d: 'M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z' }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    accessibilityalt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z'
      })
    ),
    arrowup: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z'
      })
    ),
    arrowdown: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z'
      })
    ),
    arrowleft: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z'
      })
    ),
    arrowright: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z'
      })
    ),
    arrowupalt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z'
      })
    ),
    arrowdownalt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z'
      })
    ),
    arrowleftalt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z'
      })
    ),
    arrowrightalt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z'
      })
    ),
    expandalt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z'
      })
    ),
    collapse: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z'
      })
    ),
    expand: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z'
      })
    ),
    unfold: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z'
      }),
      l.createElement('path', {
        d: 'M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z'
      }),
      l.createElement('path', {
        d: 'M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z'
      })
    ),
    transfer: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z'
      })
    ),
    redirect: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z'
      })
    ),
    undo: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z'
      })
    ),
    reply: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z'
      })
    ),
    sync: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z'
      })
    ),
    upload: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    download: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z'
      })
    ),
    back: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z'
      })
    ),
    proceed: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z'
      })
    ),
    refresh: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z'
      })
    ),
    globe: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z'
      })
    ),
    compass: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    location: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z'
      })
    ),
    pin: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z'
      })
    ),
    time: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    dashboard: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z'
      })
    ),
    timer: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z'
      })
    ),
    home: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z'
      })
    ),
    admin: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z'
      }),
      l.createElement('path', {
        d: 'M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z'
      })
    ),
    info: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    question: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    support: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      })
    ),
    alert: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z'
      })
    ),
    email: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z'
      })
    ),
    phone: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'm7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z'
      })
    ),
    link: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z'
      }),
      l.createElement('path', {
        d: 'M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z'
      })
    ),
    unlink: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z'
      })
    ),
    bell: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z'
      })
    ),
    rss: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        d: 'M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
      })
    ),
    sharealt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z'
      }),
      l.createElement('path', {
        d: 'M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z'
      })
    ),
    share: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z'
      }),
      l.createElement('path', {
        d: 'M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z'
      })
    ),
    circlehollow: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z'
      })
    ),
    circle: l.createElement('path', {
      d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z'
    }),
    bookmarkhollow: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z'
      })
    ),
    bookmark: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z'
      })
    ),
    hearthollow: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2'
      })
    ),
    heart: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z'
      })
    ),
    starhollow: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z'
      })
    ),
    star: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z'
      })
    ),
    certificate: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z'
      })
    ),
    verified: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z'
      })
    ),
    thumbsup: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'
      })
    ),
    shield: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z'
      })
    ),
    basket: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z'
      }),
      l.createElement('path', {
        d: 'M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z'
      }),
      l.createElement('path', {
        d: 'M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z'
      })
    ),
    beaker: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z'
      })
    ),
    hourglass: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z'
      })
    ),
    flag: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z'
      })
    ),
    cloudhollow: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z'
      })
    ),
    cloud: l.createElement('path', {
      d: 'M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z'
    }),
    edit: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'm13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z'
      })
    ),
    cog: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z',
        fill: '#333'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z'
      })
    ),
    nut: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z'
      })
    ),
    wrench: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'
      })
    ),
    ellipsis: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
      })
    ),
    check: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z'
      })
    ),
    form: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z'
      }),
      l.createElement('path', {
        d: 'm6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z'
      })
    ),
    batchdeny: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z'
      })
    ),
    batchaccept: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z'
      })
    ),
    controls: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z'
      })
    ),
    plus: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z'
      })
    ),
    closeAlt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z'
      })
    ),
    cross: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z'
      })
    ),
    trash: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z'
      })
    ),
    pinalt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z'
      })
    ),
    unpin: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z'
      })
    ),
    add: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    subtract: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    close: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    delete: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z'
      })
    ),
    passed: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z'
      })
    ),
    changed: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z'
      })
    ),
    failed: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z'
      })
    ),
    clear: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z'
      })
    ),
    comment: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z'
      })
    ),
    commentadd: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z'
      })
    ),
    requestchange: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z'
      })
    ),
    comments: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z'
      })
    ),
    lock: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z'
      })
    ),
    unlock: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z'
      })
    ),
    key: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z'
      })
    ),
    outbox: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z'
      }),
      l.createElement('path', {
        d: 'M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z'
      })
    ),
    credit: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z'
      })
    ),
    button: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z'
      }),
      l.createElement('path', {
        d: 'M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z'
      })
    ),
    type: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        d: 'M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z'
      })
    ),
    pointerdefault: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z'
      })
    ),
    pointerhand: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z'
      })
    ),
    browser: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
      })
    ),
    tablet: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z'
      })
    ),
    mobile: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z'
      })
    ),
    watch: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        key: 'watch',
        fillRule: 'evenodd',
        d: 'M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z'
      })
    ),
    sidebar: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z'
      })
    ),
    sidebaralt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z'
      })
    ),
    sidebaralttoggle: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z'
      })
    ),
    sidebartoggle: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z'
      })
    ),
    bottombar: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z'
      })
    ),
    bottombartoggle: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z'
      })
    ),
    cpu: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z'
      })
    ),
    database: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z'
      })
    ),
    memory: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z'
      })
    ),
    structure: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z'
      })
    ),
    box: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'm7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z'
      })
    ),
    power: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z'
      }),
      l.createElement('path', {
        d: 'M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z'
      })
    ),
    photo: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z'
      })
    ),
    component: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z'
      })
    ),
    grid: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z'
      })
    ),
    outline: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      })
    ),
    photodrag: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z'
      }),
      l.createElement('path', {
        d: 'M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z'
      })
    ),
    search: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
      })
    ),
    zoom: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
      })
    ),
    zoomout: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z'
      })
    ),
    zoomreset: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z'
      })
    ),
    eye: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'm14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z'
      })
    ),
    eyeclose: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z'
      }),
      l.createElement('path', {
        d: 'M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z'
      })
    ),
    lightning: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z'
      })
    ),
    lightningoff: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z'
      })
    ),
    contrast: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z'
      })
    ),
    switchalt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z'
      })
    ),
    mirror: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z'
      })
    ),
    grow: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z'
      }),
      l.createElement('path', {
        d: 'M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z'
      })
    ),
    paintbrush: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z'
      })
    ),
    ruler: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z'
      })
    ),
    stop: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    camera: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z'
      })
    ),
    video: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', { d: 'M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z' }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z'
      })
    ),
    speaker: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z'
      }),
      l.createElement('path', {
        d: 'M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z'
      }),
      l.createElement('path', {
        d: 'M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z'
      })
    ),
    play: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z'
      })
    ),
    playback: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z'
      })
    ),
    playnext: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z'
      })
    ),
    rewind: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z'
      })
    ),
    fastforward: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z'
      })
    ),
    stopalt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z'
      })
    ),
    sidebyside: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z'
      })
    ),
    stacked: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z'
      })
    ),
    sun: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
      }),
      l.createElement('path', {
        d: 'M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z'
      })
    ),
    moon: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z'
      })
    ),
    book: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z'
      })
    ),
    document: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z'
      })
    ),
    copy: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z'
      })
    ),
    category: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z'
      })
    ),
    folder: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z'
      })
    ),
    print: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z'
      })
    ),
    graphline: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z'
      })
    ),
    calendar: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z'
      })
    ),
    graphbar: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z'
      })
    ),
    menu: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z'
      })
    ),
    menualt: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z'
      })
    ),
    filter: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z'
      })
    ),
    docchart: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z'
      })
    ),
    doclist: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z'
      })
    ),
    markup: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z'
      })
    ),
    bold: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z'
      })
    ),
    italic: l.createElement('path', {
      d: 'M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z'
    }),
    paperclip: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z'
      })
    ),
    listordered: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z'
      })
    ),
    listunordered: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
      })
    ),
    paragraph: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z'
      })
    ),
    markdown: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z'
      })
    ),
    repository: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z'
      }),
      l.createElement('path', {
        d: 'M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z'
      }),
      l.createElement('path', {
        d: 'M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z'
      }),
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z'
      })
    ),
    commit: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
      })
    ),
    branch: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
      })
    ),
    pullrequest: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'
      })
    ),
    merge: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
      })
    ),
    apple: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z'
      })
    ),
    linux: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z'
      })
    ),
    ubuntu: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z'
      })
    ),
    windows: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z'
      })
    ),
    storybook: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z'
      })
    ),
    azuredevops: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'm0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z'
      })
    ),
    bitbucket: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z'
      })
    ),
    chrome: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z'
      })
    ),
    chromatic: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z'
      })
    ),
    componentdriven: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z'
      })
    ),
    discord: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z'
      })
    ),
    facebook: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z'
      })
    ),
    figma: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z'
      })
    ),
    gdrive: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z'
      })
    ),
    github: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z'
      })
    ),
    gitlab: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z'
      })
    ),
    google: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z'
      })
    ),
    graphql: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z'
      })
    ),
    medium: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z'
      })
    ),
    redux: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z'
      })
    ),
    twitter: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z'
      })
    ),
    youtube: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z'
      })
    ),
    vscode: l.createElement(
      l.Fragment,
      null,
      l.createElement('path', {
        d: 'M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z'
      })
    )
  },
  Tg = F.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`,
  rt = ({ icon: e, useSymbol: t, ...n }) =>
    l.createElement(
      Tg,
      { viewBox: '0 0 14 14', width: '14px', height: '14px', ...n },
      t ? l.createElement('use', { xlinkHref: `#icon--${e}` }) : Bo[e]
    ),
  Fx = k.memo(function ({ icons: e = Object.keys(Bo) }) {
    return l.createElement(
      Tg,
      {
        viewBox: '0 0 14 14',
        style: { position: 'absolute', width: 0, height: 0 },
        'data-chromatic': 'ignore'
      },
      e.map((t) =>
        l.createElement('symbol', { id: `icon--${t}`, key: t }, Bo[t])
      )
    );
  }),
  Tx = 0,
  Ox = (e) =>
    e.button === Tx && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
  Rx = (e, t) => {
    Ox(e) && (e.preventDefault(), t(e));
  },
  Dx = F.span(
    ({ withArrow: e }) =>
      e
        ? {
            '> svg:last-of-type': {
              height: '0.7em',
              width: '0.7em',
              marginRight: 0,
              marginLeft: '0.25em',
              bottom: 'auto',
              verticalAlign: 'inherit'
            }
          }
        : {},
    ({ containsIcon: e }) =>
      e
        ? {
            svg: {
              height: '1em',
              width: '1em',
              verticalAlign: 'middle',
              position: 'relative',
              bottom: 0,
              marginRight: 0
            }
          }
        : {}
  ),
  Lx = F.a(
    ({ theme: e }) => ({
      display: 'inline-block',
      transition: 'all 150ms ease-out',
      textDecoration: 'none',
      color: e.color.secondary,
      '&:hover, &:focus': {
        cursor: 'pointer',
        color: Yr(0.07, e.color.secondary),
        'svg path': { fill: Yr(0.07, e.color.secondary) }
      },
      '&:active': {
        color: Yr(0.1, e.color.secondary),
        'svg path': { fill: Yr(0.1, e.color.secondary) }
      },
      svg: {
        display: 'inline-block',
        height: '1em',
        width: '1em',
        verticalAlign: 'text-top',
        position: 'relative',
        bottom: '-0.125em',
        marginRight: '0.4em',
        '& path': { fill: e.color.secondary }
      }
    }),
    ({ theme: e, secondary: t, tertiary: n }) => {
      let r;
      return (
        t && (r = [e.textMutedColor, e.color.dark, e.color.darker]),
        n && (r = [e.color.dark, e.color.darkest, e.textMutedColor]),
        r
          ? {
              color: r[0],
              'svg path': { fill: r[0] },
              '&:hover': { color: r[1], 'svg path': { fill: r[1] } },
              '&:active': { color: r[2], 'svg path': { fill: r[2] } }
            }
          : {}
      );
    },
    ({ nochrome: e }) =>
      e
        ? {
            color: 'inherit',
            '&:hover, &:active': {
              color: 'inherit',
              textDecoration: 'underline'
            }
          }
        : {},
    ({ theme: e, inverse: t }) =>
      t
        ? {
            color: e.color.lightest,
            'svg path': { fill: e.color.lightest },
            '&:hover': {
              color: e.color.lighter,
              'svg path': { fill: e.color.lighter }
            },
            '&:active': {
              color: e.color.light,
              'svg path': { fill: e.color.light }
            }
          }
        : {},
    ({ isButton: e }) =>
      e
        ? {
            border: 0,
            borderRadius: 0,
            background: 'none',
            padding: 0,
            fontSize: 'inherit'
          }
        : {}
  ),
  Io = ({
    cancel: e,
    children: t,
    onClick: n,
    withArrow: r,
    containsIcon: a,
    className: o,
    ...i
  }) =>
    l.createElement(
      Lx,
      { ...i, onClick: n && e ? (s) => Rx(s, n) : n, className: o },
      l.createElement(
        Dx,
        { withArrow: r, containsIcon: a },
        t,
        r && l.createElement(rt, { icon: 'arrowright' })
      )
    );
Io.defaultProps = {
  cancel: !0,
  className: void 0,
  style: void 0,
  onClick: void 0,
  withArrow: !1,
  containsIcon: !1
};
var Mx = F.div(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    lineHeight: '1.6',
    h1: {
      fontSize: `${e.typography.size.l1}px`,
      fontWeight: e.typography.weight.bold
    },
    h2: {
      fontSize: `${e.typography.size.m2}px`,
      borderBottom: `1px solid ${e.appBorderColor}`
    },
    h3: { fontSize: `${e.typography.size.m1}px` },
    h4: { fontSize: `${e.typography.size.s3}px` },
    h5: { fontSize: `${e.typography.size.s2}px` },
    h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
    'pre:not(.prismjs)': {
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      padding: 0,
      margin: 0
    },
    'pre pre, pre.prismjs': {
      padding: 15,
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      fontSize: '13px',
      lineHeight: '19px'
    },
    'pre pre code, pre.prismjs code': { color: 'inherit', fontSize: 'inherit' },
    'pre code': {
      margin: 0,
      padding: 0,
      whiteSpace: 'pre',
      border: 'none',
      background: 'transparent'
    },
    'pre code, pre tt': { backgroundColor: 'transparent', border: 'none' },
    'body > *:first-of-type': { marginTop: '0 !important' },
    'body > *:last-child': { marginBottom: '0 !important' },
    a: { color: e.color.secondary, textDecoration: 'none' },
    'a.absent': { color: '#cc0000' },
    'a.anchor': {
      display: 'block',
      paddingLeft: 30,
      marginLeft: -30,
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: '20px 0 10px',
      padding: 0,
      cursor: 'text',
      position: 'relative',
      '&:first-of-type': { marginTop: 0, paddingTop: 0 },
      '&:hover a.anchor': { textDecoration: 'none' },
      '& tt, & code': { fontSize: 'inherit' }
    },
    'h1:first-of-type + h2': { marginTop: 0, paddingTop: 0 },
    'p, blockquote, ul, ol, dl, li, table, pre': { margin: '15px 0' },
    hr: {
      border: '0 none',
      borderTop: `1px solid ${e.appBorderColor}`,
      height: 4,
      padding: 0
    },
    'body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type':
      { marginTop: 0, paddingTop: 0 },
    'body > h1:first-of-type + h2': { marginTop: 0, paddingTop: 0 },
    'a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6':
      { marginTop: 0, paddingTop: 0 },
    'h1 p, h2 p, h3 p, h4 p, h5 p, h6 p': { marginTop: 0 },
    'li p.first': { display: 'inline-block' },
    'ul, ol': {
      paddingLeft: 30,
      '& :first-of-type': { marginTop: 0 },
      '& :last-child': { marginBottom: 0 }
    },
    dl: { padding: 0 },
    'dl dt': {
      fontSize: '14px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      margin: '0 0 15px',
      padding: '0 15px',
      '&:first-of-type': { padding: 0 },
      '& > :first-of-type': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 }
    },
    blockquote: {
      borderLeft: `4px solid ${e.color.medium}`,
      padding: '0 15px',
      color: e.color.dark,
      '& > :first-of-type': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 }
    },
    table: {
      padding: 0,
      borderCollapse: 'collapse',
      '& tr': {
        borderTop: `1px solid ${e.appBorderColor}`,
        backgroundColor: 'white',
        margin: 0,
        padding: 0,
        '& th': {
          fontWeight: 'bold',
          border: `1px solid ${e.appBorderColor}`,
          textAlign: 'left',
          margin: 0,
          padding: '6px 13px'
        },
        '& td': {
          border: `1px solid ${e.appBorderColor}`,
          textAlign: 'left',
          margin: 0,
          padding: '6px 13px'
        },
        '&:nth-of-type(2n)': { backgroundColor: e.color.lighter },
        '& th :first-of-type, & td :first-of-type': { marginTop: 0 },
        '& th :last-child, & td :last-child': { marginBottom: 0 }
      }
    },
    img: { maxWidth: '100%' },
    'span.frame': {
      display: 'block',
      overflow: 'hidden',
      '& > span': {
        border: `1px solid ${e.color.medium}`,
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '13px 0 0',
        padding: 7,
        width: 'auto'
      },
      '& span img': { display: 'block', float: 'left' },
      '& span span': {
        clear: 'both',
        color: e.color.darkest,
        display: 'block',
        padding: '5px 0 0'
      }
    },
    'span.align-center': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'center'
      },
      '& span img': { margin: '0 auto', textAlign: 'center' }
    },
    'span.align-right': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px 0 0',
        textAlign: 'right'
      },
      '& span img': { margin: 0, textAlign: 'right' }
    },
    'span.float-left': {
      display: 'block',
      marginRight: 13,
      overflow: 'hidden',
      float: 'left',
      '& span': { margin: '13px 0 0' }
    },
    'span.float-right': {
      display: 'block',
      marginLeft: 13,
      overflow: 'hidden',
      float: 'right',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'right'
      }
    },
    'code, tt': {
      margin: '0 2px',
      padding: '0 5px',
      whiteSpace: 'nowrap',
      border: `1px solid ${e.color.mediumlight}`,
      backgroundColor: e.color.lighter,
      borderRadius: 3,
      color: e.base === 'dark' && e.color.darkest
    }
  })),
  $x = k.lazy(() =>
    un(
      () => import('./syntaxhighlighter-QTQ2UBB4-b883d69b.js'),
      [
        './syntaxhighlighter-QTQ2UBB4-b883d69b.js',
        './iframe-0fe055d1.js',
        './_commonjsHelpers-725317a4.js',
        './index-d475d2ea.js',
        './index-d37d4223.js',
        './index-826364cc.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    )
  ),
  Bx = k.lazy(async () => {
    let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([
      un(
        () => import('./syntaxhighlighter-QTQ2UBB4-b883d69b.js'),
        [
          './syntaxhighlighter-QTQ2UBB4-b883d69b.js',
          './iframe-0fe055d1.js',
          './_commonjsHelpers-725317a4.js',
          './index-d475d2ea.js',
          './index-d37d4223.js',
          './index-826364cc.js',
          './index-356e4a49.js'
        ],
        import.meta.url
      ),
      un(
        () => import('./formatter-S4K5WUZV-9bf64875.js'),
        [
          './formatter-S4K5WUZV-9bf64875.js',
          './iframe-0fe055d1.js',
          './_commonjsHelpers-725317a4.js',
          './index-d475d2ea.js',
          './index-d37d4223.js',
          './index-826364cc.js',
          './index-356e4a49.js'
        ],
        import.meta.url
      )
    ]);
    return { default: (n) => l.createElement(e, { ...n, formatter: t }) };
  }),
  vd = (e) =>
    l.createElement(
      k.Suspense,
      { fallback: l.createElement('div', null) },
      e.format !== !1
        ? l.createElement(Bx, { ...e })
        : l.createElement($x, { ...e })
    ),
  Ix = (e) => (typeof e == 'number' ? e : Number(e)),
  Px = F.div(
    ({ theme: e, col: t, row: n = 1 }) =>
      t
        ? {
            display: 'inline-block',
            verticalAlign: 'inherit',
            '& > *': {
              marginLeft: t * e.layoutMargin,
              verticalAlign: 'inherit'
            },
            [`& > *:first-child${xc}`]: { marginLeft: 0 }
          }
        : {
            '& > *': { marginTop: n * e.layoutMargin },
            [`& > *:first-child${xc}`]: { marginTop: 0 }
          },
    ({ theme: e, outer: t, col: n, row: r }) => {
      switch (!0) {
        case !!(t && n):
          return {
            marginLeft: t * e.layoutMargin,
            marginRight: t * e.layoutMargin
          };
        case !!(t && r):
          return {
            marginTop: t * e.layoutMargin,
            marginBottom: t * e.layoutMargin
          };
        default:
          return {};
      }
    }
  ),
  Nx = ({ col: e, row: t, outer: n, children: r, ...a }) => {
    let o = Ix(typeof n == 'number' || !n ? n : e || t);
    return l.createElement(Px, { col: e, row: t, outer: o, ...a }, r);
  },
  jx = F.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  Hx = F.div(),
  Zx = F.div(({ theme: e }) => ({
    padding: 30,
    textAlign: 'center',
    color: e.color.defaultText,
    fontSize: e.typography.size.s2 - 1
  })),
  Og = ({ children: e, ...t }) => {
    let [n, r] = k.Children.toArray(e);
    return l.createElement(
      Zx,
      { ...t },
      l.createElement(jx, null, n),
      r && l.createElement(Hx, null, r)
    );
  };
function Rg() {
  var e;
  try {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      ? !1
      : (e = global.CSS) == null
      ? void 0
      : e.supports('zoom: 1');
  } catch {
    return !1;
  }
}
var Dg = Rg(),
  zx = F.div(({ scale: e = 1, elementHeight: t }) =>
    Dg
      ? { '> *': { zoom: 1 / e } }
      : {
          height: t || 'auto',
          transformOrigin: 'top left',
          transform: `scale(${1 / e})`
        }
  );
function Vx({ scale: e, children: t }) {
  let n = k.useRef(null),
    [r, a] = k.useState(0),
    o = k.useCallback(
      ({ height: i }) => {
        i && a(i / e);
      },
      [e]
    );
  return (
    k.useEffect(() => {
      n.current && a(n.current.getBoundingClientRect().height);
    }, [e]),
    lg({ ref: n, onResize: o }),
    l.createElement(
      zx,
      { scale: e, elementHeight: r },
      l.createElement(
        'div',
        { ref: Dg ? null : n, className: 'innerZoomElementWrapper' },
        t
      )
    )
  );
}
var Ux = class extends k.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { iFrameRef: e } = this.props;
      this.iframe = e.current;
    }
    shouldComponentUpdate(e) {
      let { scale: t, active: n } = this.props;
      return (
        t !== e.scale && this.setIframeInnerZoom(e.scale),
        n !== e.active &&
          this.iframe.setAttribute(
            'data-is-storybook',
            e.active ? 'true' : 'false'
          ),
        e.children.props.src !== this.props.children.props.src
      );
    }
    setIframeInnerZoom(e) {
      try {
        Rg()
          ? Object.assign(this.iframe.contentDocument.body.style, {
              zoom: 1 / e,
              minHeight: `calc(100vh / ${1 / e})`
            })
          : Object.assign(this.iframe.contentDocument.body.style, {
              width: `${e * 100}%`,
              height: `${e * 100}%`,
              transform: `scale(${1 / e})`,
              transformOrigin: 'top left'
            });
      } catch {
        this.setIframeZoom(e);
      }
    }
    setIframeZoom(e) {
      Object.assign(this.iframe.style, {
        width: `${e * 100}%`,
        height: `${e * 100}%`,
        transform: `scale(${1 / e})`,
        transformOrigin: 'top left'
      });
    }
    render() {
      let { children: e } = this.props;
      return e;
    }
  },
  Lg = { Element: Vx, IFrame: Ux },
  { document: qx } = Pe,
  Wx = F.strong(({ theme: e }) => ({ color: e.color.orange })),
  Gx = F.strong(({ theme: e }) => ({
    color: e.color.ancillary,
    textDecoration: 'underline'
  })),
  Up = F.em(({ theme: e }) => ({ color: e.textMutedColor })),
  Kx = /(Error): (.*)\n/,
  Yx = /at (?:(.*) )?\(?(.+)\)?/,
  Xx = /([^@]+)?(?:\/<)?@(.+)?/,
  Qx = /([^@]+)?@(.+)?/,
  Mg = ({ error: e }) => {
    if (!e)
      return l.createElement(
        k.Fragment,
        null,
        'This error has no stack or message'
      );
    if (!e.stack)
      return l.createElement(
        k.Fragment,
        null,
        e.message || 'This error has no stack or message'
      );
    let t = e.stack.toString();
    t &&
      e.message &&
      !t.includes(e.message) &&
      (t = `Error: ${e.message}

${t}`);
    let n = t.match(Kx);
    if (!n) return l.createElement(k.Fragment, null, t);
    let [, r, a] = n,
      o = t.split(/\n/).slice(1),
      [, ...i] = o
        .map((s) => {
          let u = s.match(Yx) || s.match(Xx) || s.match(Qx);
          return u
            ? {
                name: (u[1] || '').replace('/<', ''),
                location: u[2].replace(qx.location.origin, '')
              }
            : null;
        })
        .filter(Boolean);
    return l.createElement(
      k.Fragment,
      null,
      l.createElement('span', null, r),
      ': ',
      l.createElement(Wx, null, a),
      l.createElement('br', null),
      i.map((s, u) =>
        s.name
          ? l.createElement(
              k.Fragment,
              { key: u },
              '  ',
              'at ',
              l.createElement(Gx, null, s.name),
              ' (',
              l.createElement(Up, null, s.location),
              ')',
              l.createElement('br', null)
            )
          : l.createElement(
              k.Fragment,
              { key: u },
              '  ',
              'at ',
              l.createElement(Up, null, s.location),
              l.createElement('br', null)
            )
      )
    );
  },
  $g = F.button(
    ({ small: e, theme: t }) => ({
      border: 0,
      borderRadius: '3em',
      cursor: 'pointer',
      display: 'inline-block',
      overflow: 'hidden',
      padding: e ? '8px 16px' : '13px 20px',
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      transitionProperty: 'background, box-shadow',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-out',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      opacity: 1,
      margin: 0,
      background: 'transparent',
      fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`,
      fontWeight: t.typography.weight.bold,
      lineHeight: '1',
      svg: {
        display: 'inline-block',
        height: e ? 12 : 14,
        width: e ? 12 : 14,
        verticalAlign: 'top',
        marginRight: e ? 4 : 6,
        marginTop: e ? 0 : -1,
        marginBottom: e ? 0 : -1,
        pointerEvents: 'none',
        path: { fill: 'currentColor' }
      }
    }),
    ({ disabled: e }) =>
      e
        ? {
            cursor: 'not-allowed !important',
            opacity: 0.5,
            '&:hover': { transform: 'none' }
          }
        : {},
    ({ containsIcon: e, small: t }) =>
      e
        ? {
            svg: { display: 'block', margin: 0 },
            ...(t ? { padding: 10 } : { padding: 13 })
          }
        : {},
    ({ theme: e, primary: t, secondary: n, gray: r }) => {
      let a;
      return (
        r
          ? (a = e.color.mediumlight)
          : n
          ? (a = e.color.secondary)
          : t && (a = e.color.primary),
        a
          ? {
              background: a,
              color: r ? e.color.darkest : e.color.lightest,
              '&:hover': { background: Yr(0.05, a) },
              '&:active': { boxShadow: 'rgba(0, 0, 0, 0.1) 0 0 0 3em inset' },
              '&:focus': {
                boxShadow: `${mn(a, 1)} 0 1px 9px 2px`,
                outline: 'none'
              },
              '&:focus:hover': { boxShadow: `${mn(a, 0.2)} 0 8px 18px 0px` }
            }
          : {}
      );
    },
    ({ theme: e, tertiary: t, inForm: n, small: r }) =>
      t
        ? {
            background: e.button.background,
            color: e.input.color,
            boxShadow: `${e.button.border} 0 0 0 1px inset`,
            borderRadius: e.input.borderRadius,
            ...(n && r ? { padding: '10px 16px' } : {}),
            '&:hover': {
              background:
                e.base === 'light'
                  ? Yr(0.02, e.button.background)
                  : hx(0.03, e.button.background),
              ...(n
                ? {}
                : {
                    boxShadow:
                      'rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset'
                  })
            },
            '&:active': { background: e.button.background },
            '&:focus': {
              boxShadow: `${mn(e.color.secondary, 1)} 0 0 0 1px inset`,
              outline: 'none'
            }
          }
        : {},
    ({ theme: e, outline: t }) =>
      t
        ? {
            boxShadow: `${Ke(0.8, e.color.defaultText)} 0 0 0 1px inset`,
            color: Ke(0.3, e.color.defaultText),
            background: 'transparent',
            '&:hover, &:focus': {
              boxShadow: `${Ke(0.5, e.color.defaultText)} 0 0 0 1px inset`,
              outline: 'none'
            },
            '&:active': {
              boxShadow: `${Ke(0.5, e.color.defaultText)} 0 0 0 2px inset`,
              color: Ke(0, e.color.defaultText)
            }
          }
        : {},
    ({ theme: e, outline: t, primary: n }) => {
      let r = e.color.primary;
      return t && n
        ? {
            boxShadow: `${r} 0 0 0 1px inset`,
            color: r,
            'svg path': { fill: r },
            '&:hover': {
              boxShadow: `${r} 0 0 0 1px inset`,
              background: 'transparent'
            },
            '&:active': {
              background: r,
              boxShadow: `${r} 0 0 0 1px inset`,
              color: e.color.tertiary
            },
            '&:focus': {
              boxShadow: `${r} 0 0 0 1px inset, ${mn(r, 0.4)} 0 1px 9px 2px`,
              outline: 'none'
            },
            '&:focus:hover': {
              boxShadow: `${r} 0 0 0 1px inset, ${mn(r, 0.2)} 0 8px 18px 0px`
            }
          }
        : {};
    },
    ({ theme: e, outline: t, primary: n, secondary: r }) => {
      let a;
      return (
        r ? (a = e.color.secondary) : n && (a = e.color.primary),
        t && a
          ? {
              boxShadow: `${a} 0 0 0 1px inset`,
              color: a,
              'svg path': { fill: a },
              '&:hover': {
                boxShadow: `${a} 0 0 0 1px inset`,
                background: 'transparent'
              },
              '&:active': {
                background: a,
                boxShadow: `${a} 0 0 0 1px inset`,
                color: e.color.tertiary
              },
              '&:focus': {
                boxShadow: `${a} 0 0 0 1px inset, ${mn(a, 0.4)} 0 1px 9px 2px`,
                outline: 'none'
              },
              '&:focus:hover': {
                boxShadow: `${a} 0 0 0 1px inset, ${mn(a, 0.2)} 0 8px 18px 0px`
              }
            }
          : {}
      );
    }
  ),
  Jx = $g.withComponent('a'),
  Bg = Object.assign(
    k.forwardRef(function ({ isLink: e, children: t, ...n }, r) {
      return e
        ? l.createElement(Jx, { ...n, ref: r }, t)
        : l.createElement($g, { ...n, ref: r }, t);
    }),
    { defaultProps: { isLink: !1 } }
  ),
  ew = F.label(({ theme: e }) => ({
    display: 'flex',
    borderBottom: `1px solid ${e.appBorderColor}`,
    margin: '0 15px',
    padding: '8px 0',
    '&:last-child': { marginBottom: '3rem' }
  })),
  tw = F.span(({ theme: e }) => ({
    minWidth: 100,
    fontWeight: e.typography.weight.bold,
    marginRight: 15,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    lineHeight: '16px'
  })),
  Ig = ({ label: e, children: t, ...n }) =>
    l.createElement(
      ew,
      { ...n },
      e ? l.createElement(tw, null, l.createElement('span', null, e)) : null,
      t
    );
Ig.defaultProps = { label: void 0 };
var nw = typeof document < 'u' ? k.useLayoutEffect : k.useEffect,
  rw = nw,
  aw = function (e) {
    var t = k.useRef(e);
    return (
      rw(function () {
        t.current = e;
      }),
      t
    );
  },
  qp = function (e, t) {
    if (typeof e == 'function') {
      e(t);
      return;
    }
    e.current = t;
  },
  ow = function (e, t) {
    var n = k.useRef();
    return k.useCallback(
      function (r) {
        (e.current = r),
          n.current && qp(n.current, null),
          (n.current = t),
          t && qp(t, r);
      },
      [t]
    );
  },
  lw = ow,
  Wp = {
    'min-height': '0',
    'max-height': 'none',
    height: '0',
    visibility: 'hidden',
    overflow: 'hidden',
    position: 'absolute',
    'z-index': '-1000',
    top: '0',
    right: '0'
  },
  Gp = function (e) {
    Object.keys(Wp).forEach(function (t) {
      e.style.setProperty(t, Wp[t], 'important');
    });
  },
  Ze = null,
  Kp = function (e, t) {
    var n = e.scrollHeight;
    return t.sizingStyle.boxSizing === 'border-box'
      ? n + t.borderSize
      : n - t.paddingSize;
  };
function iw(e, t, n, r) {
  n === void 0 && (n = 1),
    r === void 0 && (r = 1 / 0),
    Ze ||
      ((Ze = document.createElement('textarea')),
      Ze.setAttribute('tabindex', '-1'),
      Ze.setAttribute('aria-hidden', 'true'),
      Gp(Ze)),
    Ze.parentNode === null && document.body.appendChild(Ze);
  var a = e.paddingSize,
    o = e.borderSize,
    i = e.sizingStyle,
    s = i.boxSizing;
  Object.keys(i).forEach(function (f) {
    var p = f;
    Ze.style[p] = i[p];
  }),
    Gp(Ze),
    (Ze.value = t);
  var u = Kp(Ze, e);
  (Ze.value = t), (u = Kp(Ze, e)), (Ze.value = 'x');
  var c = Ze.scrollHeight - a,
    d = c * n;
  s === 'border-box' && (d = d + a + o), (u = Math.max(d, u));
  var g = c * r;
  return s === 'border-box' && (g = g + a + o), (u = Math.min(g, u)), [u, c];
}
var Yp = function () {},
  uw = function (e, t) {
    return e.reduce(function (n, r) {
      return (n[r] = t[r]), n;
    }, {});
  },
  sw = [
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'boxSizing',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'tabSize',
    'textIndent',
    'textRendering',
    'textTransform',
    'width',
    'wordBreak'
  ],
  cw = typeof document < 'u' ? !!document.documentElement.currentStyle : !1,
  dw = function (e) {
    var t = window.getComputedStyle(e);
    if (t === null) return null;
    var n = uw(sw, t),
      r = n.boxSizing;
    if (r === '') return null;
    cw &&
      r === 'border-box' &&
      (n.width =
        parseFloat(n.width) +
        parseFloat(n.borderRightWidth) +
        parseFloat(n.borderLeftWidth) +
        parseFloat(n.paddingRight) +
        parseFloat(n.paddingLeft) +
        'px');
    var a = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop),
      o = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
    return { sizingStyle: n, paddingSize: a, borderSize: o };
  };
function Pg(e, t, n) {
  var r = aw(n);
  k.useLayoutEffect(function () {
    var a = function (o) {
      return r.current(o);
    };
    return (
      e.addEventListener(t, a),
      function () {
        return e.removeEventListener(t, a);
      }
    );
  }, []);
}
var pw = function (e) {
    Pg(window, 'resize', e);
  },
  fw = function (e) {
    Pg(document.fonts, 'loadingdone', e);
  },
  mw = [
    'cacheMeasurements',
    'maxRows',
    'minRows',
    'onChange',
    'onHeightChange'
  ],
  gw = function (e, t) {
    var n = e.cacheMeasurements,
      r = e.maxRows,
      a = e.minRows,
      o = e.onChange,
      i = o === void 0 ? Yp : o,
      s = e.onHeightChange,
      u = s === void 0 ? Yp : s,
      c = X0(e, mw),
      d = c.value !== void 0,
      g = k.useRef(null),
      f = lw(g, t),
      p = k.useRef(0),
      h = k.useRef(),
      m = function () {
        var y = g.current,
          b = n && h.current ? h.current : dw(y);
        if (b) {
          h.current = b;
          var v = iw(b, y.value || y.placeholder || 'x', a, r),
            E = v[0],
            x = v[1];
          p.current !== E &&
            ((p.current = E),
            y.style.setProperty('height', E + 'px', 'important'),
            u(E, { rowHeight: x }));
        }
      },
      w = function (y) {
        d || m(), i(y);
      };
    return (
      typeof document < 'u' && (k.useLayoutEffect(m), pw(m), fw(m)),
      k.createElement('textarea', We({}, c, { onChange: w, ref: f }))
    );
  },
  hw = k.forwardRef(gw),
  yw = hw,
  vw = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative'
  },
  bd = ({ theme: e }) => ({
    ...vw,
    transition: 'box-shadow 200ms ease-out, opacity 200ms ease-out',
    color: e.input.color || 'inherit',
    background: e.input.background,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    borderRadius: e.input.borderRadius,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '20px',
    padding: '6px 10px',
    '&:focus': {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: 'none'
    },
    '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset`
    },
    '&::placeholder': { color: e.textMutedColor, opacity: 1 }
  }),
  ru = ({ size: e }) => {
    switch (e) {
      case '100%':
        return { width: '100%' };
      case 'flex':
        return { flex: 1 };
      case 'auto':
      default:
        return { display: 'inline' };
    }
  },
  Ng = ({ align: e }) => {
    switch (e) {
      case 'end':
        return { textAlign: 'right' };
      case 'center':
        return { textAlign: 'center' };
      case 'start':
      default:
        return { textAlign: 'left' };
    }
  },
  au = ({ valid: e, theme: t }) => {
    switch (e) {
      case 'valid':
        return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
      case 'error':
        return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
      case 'warn':
        return { boxShadow: `${t.color.warning} 0 0 0 1px inset` };
      case void 0:
      case null:
      default:
        return {};
    }
  },
  bw = Object.assign(
    F(
      k.forwardRef(function ({ size: e, valid: t, align: n, ...r }, a) {
        return l.createElement('input', { ...r, ref: a });
      })
    )(bd, ru, Ng, au, { minHeight: 32 }),
    { displayName: 'Input' }
  ),
  Ew = Object.assign(
    F(
      k.forwardRef(function ({ size: e, valid: t, align: n, ...r }, a) {
        return l.createElement('select', { ...r, ref: a });
      })
    )(bd, ru, au, {
      height: 32,
      userSelect: 'none',
      paddingRight: 20,
      appearance: 'menulist'
    }),
    { displayName: 'Select' }
  ),
  xw = Object.assign(
    F(
      k.forwardRef(function ({ size: e, valid: t, align: n, ...r }, a) {
        return l.createElement(yw, { ...r, ref: a });
      })
    )(bd, ru, Ng, au, ({ height: e = 400 }) => ({
      overflow: 'visible',
      maxHeight: e
    })),
    { displayName: 'Textarea' }
  ),
  ww = F(
    k.forwardRef(function ({ size: e, valid: t, align: n, ...r }, a) {
      return l.createElement(Bg, { ...r, ref: a });
    })
  )(ru, au, {
    userSelect: 'none',
    overflow: 'visible',
    zIndex: 2,
    '&:hover': { transform: 'none' }
  }),
  Sw = Object.assign(
    k.forwardRef(function (e, t) {
      return l.createElement(ww, {
        ...e,
        tertiary: !0,
        small: !0,
        inForm: !0,
        ref: t
      });
    }),
    { displayName: 'Button' }
  ),
  It = Object.assign(F.form({ boxSizing: 'border-box', width: '100%' }), {
    Field: Ig,
    Input: bw,
    Select: Ew,
    Textarea: xw,
    Button: Sw
  }),
  Aw = k.lazy(() =>
    un(
      () => import('./WithTooltip-FBT32F6Q-d0adb9e2.js'),
      [
        './WithTooltip-FBT32F6Q-d0adb9e2.js',
        './iframe-0fe055d1.js',
        './_commonjsHelpers-725317a4.js',
        './index-d475d2ea.js',
        './index-d37d4223.js',
        './index-826364cc.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltip }))
  ),
  Cw = (e) =>
    l.createElement(
      k.Suspense,
      { fallback: l.createElement('div', null) },
      l.createElement(Aw, { ...e })
    ),
  kw = k.lazy(() =>
    un(
      () => import('./WithTooltip-FBT32F6Q-d0adb9e2.js'),
      [
        './WithTooltip-FBT32F6Q-d0adb9e2.js',
        './iframe-0fe055d1.js',
        './_commonjsHelpers-725317a4.js',
        './index-d475d2ea.js',
        './index-d37d4223.js',
        './index-826364cc.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltipPure }))
  ),
  jg = (e) =>
    l.createElement(
      k.Suspense,
      { fallback: l.createElement('div', null) },
      l.createElement(kw, { ...e })
    ),
  _w = F.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  Fw = F.span(),
  Tw = F.div(({ theme: e }) => ({
    marginTop: 8,
    textAlign: 'center',
    '> *': { margin: '0 8px', fontWeight: e.typography.weight.bold }
  })),
  Ow = F.div(({ theme: e }) => ({
    color: e.color.defaultText,
    lineHeight: '18px'
  })),
  Rw = F.div({ padding: 15, width: 280, boxSizing: 'border-box' }),
  Hg = ({ title: e, desc: t, links: n }) =>
    l.createElement(
      Rw,
      null,
      l.createElement(
        Ow,
        null,
        e && l.createElement(_w, null, e),
        t && l.createElement(Fw, null, t)
      ),
      n &&
        l.createElement(
          Tw,
          null,
          n.map(({ title: r, ...a }) =>
            l.createElement(Io, { ...a, key: r }, r)
          )
        )
    );
Hg.defaultProps = { title: null, desc: null, links: null };
var Dw = F.div(({ theme: e }) => ({
    padding: '2px 6px',
    lineHeight: '16px',
    fontSize: 10,
    fontWeight: e.typography.weight.bold,
    color: e.color.lightest,
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
    borderRadius: 4,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: -1,
    background:
      e.base === 'light' ? 'rgba(60, 60, 60, 0.9)' : 'rgba(0, 0, 0, 0.95)',
    margin: 6
  })),
  Lw = ({ note: e, ...t }) => l.createElement(Dw, { ...t }, e),
  Mw = F(({ active: e, loading: t, disabled: n, ...r }) =>
    l.createElement('span', { ...r })
  )(
    ({ theme: e }) => ({
      color: e.color.defaultText,
      fontWeight: e.typography.weight.regular
    }),
    ({ active: e, theme: t }) =>
      e
        ? { color: t.color.secondary, fontWeight: t.typography.weight.bold }
        : {},
    ({ loading: e, theme: t }) =>
      e
        ? { display: 'inline-block', flex: 'none', ...t.animation.inlineGlow }
        : {},
    ({ disabled: e, theme: t }) =>
      e ? { color: Ke(0.7, t.color.defaultText) } : {}
  ),
  $w = F.span({
    display: 'flex',
    '& svg': { height: 12, width: 12, margin: '3px 0', verticalAlign: 'top' },
    '& path': { fill: 'inherit' }
  }),
  Bw = F.span(
    { flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column' },
    ({ isIndented: e }) => (e ? { marginLeft: 24 } : {})
  ),
  Iw = F.span(
    ({ theme: e }) => ({ fontSize: '11px', lineHeight: '14px' }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary } : {}),
    ({ theme: e, disabled: t }) => (t ? { color: e.textMutedColor } : {})
  ),
  Xp = F.span(
    ({ active: e, theme: t }) =>
      e
        ? { '& svg': { opacity: 1 }, '& svg path': { fill: t.color.secondary } }
        : {},
    () => ({ display: 'flex', maxWidth: 14 })
  ),
  Pw = F.a(
    ({ theme: e }) => ({
      fontSize: e.typography.size.s1,
      transition: 'all 150ms ease-out',
      color: e.color.dark,
      textDecoration: 'none',
      cursor: 'pointer',
      justifyContent: 'space-between',
      lineHeight: '18px',
      padding: '7px 10px',
      display: 'flex',
      alignItems: 'center',
      '& > * + *': { paddingLeft: 10 },
      '&:hover': { background: e.background.hoverable },
      '&:hover svg': { opacity: 1 }
    }),
    ({ disabled: e }) => (e ? { cursor: 'not-allowed' } : {})
  ),
  Nw = Tr(100)((e, t, n) => {
    let r = {};
    return (
      e && Object.assign(r, { onClick: e }),
      t && Object.assign(r, { href: t }),
      n && t && Object.assign(r, { to: t, as: n }),
      r
    );
  }),
  Zg = ({
    loading: e,
    left: t,
    title: n,
    center: r,
    right: a,
    icon: o,
    active: i,
    disabled: s,
    isIndented: u,
    href: c,
    onClick: d,
    LinkWrapper: g,
    ...f
  }) => {
    let p = Nw(d, c, g),
      h = { active: i, disabled: s },
      m = typeof o == 'string' && Bo[o];
    return l.createElement(
      Pw,
      { ...h, ...f, ...p },
      o
        ? l.createElement(
            Xp,
            { ...h },
            m ? l.createElement(rt, { icon: o }) : o
          )
        : t && l.createElement(Xp, { ...h }, t),
      n || r
        ? l.createElement(
            Bw,
            { isIndented: !t && !o && u },
            n && l.createElement(Mw, { ...h, loading: e }, n),
            r && l.createElement(Iw, { ...h }, r)
          )
        : null,
      a && l.createElement($w, { ...h }, a)
    );
  };
Zg.defaultProps = {
  loading: !1,
  left: null,
  title: l.createElement('span', null, 'Loading state'),
  center: null,
  right: null,
  active: !1,
  disabled: !1,
  href: null,
  LinkWrapper: null,
  onClick: null
};
var Ed = Zg,
  jw = F.div(
    {
      minWidth: 180,
      overflow: 'hidden',
      overflowY: 'auto',
      maxHeight: 15.5 * 32
    },
    ({ theme: e }) => ({ borderRadius: e.appBorderRadius })
  ),
  Hw = (e) => {
    let { LinkWrapper: t, onClick: n, id: r, isIndented: a, ...o } = e,
      { title: i, href: s, active: u } = o,
      c = k.useCallback(
        (g) => {
          n(g, o);
        },
        [n]
      ),
      d = !!n;
    return l.createElement(Ed, {
      title: i,
      active: u,
      href: s,
      id: `list-item-${r}`,
      LinkWrapper: t,
      isIndented: a,
      ...o,
      ...(d ? { onClick: c } : {})
    });
  },
  xd = ({ links: e, LinkWrapper: t }) => {
    let n = e.some((r) => r.left || r.icon);
    return l.createElement(
      jw,
      null,
      e.map(({ isGatsby: r, ...a }) =>
        l.createElement(Hw, {
          key: a.id,
          LinkWrapper: r ? t : null,
          isIndented: n,
          ...a
        })
      )
    );
  };
xd.defaultProps = { LinkWrapper: Ed.defaultProps.LinkWrapper };
var wd = l.forwardRef(({ children: e, ...t }, n) =>
  t.href != null
    ? l.createElement('a', { ref: n, ...t }, e)
    : l.createElement('button', { ref: n, type: 'button', ...t }, e)
);
wd.displayName = 'ButtonOrLink';
var Yo = F(wd, { shouldForwardProp: Z0 })(
  {
    whiteSpace: 'normal',
    display: 'inline-flex',
    overflow: 'hidden',
    verticalAlign: 'top',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    '&:empty': { display: 'none' }
  },
  ({ theme: e }) => ({
    padding: '0 15px',
    transition: 'color 0.2s linear, border-bottom-color 0.2s linear',
    height: 40,
    lineHeight: '12px',
    cursor: 'pointer',
    background: 'transparent',
    border: '0 solid transparent',
    borderTop: '3px solid transparent',
    borderBottom: '3px solid transparent',
    fontWeight: 'bold',
    fontSize: 13,
    '&:focus': { outline: '0 none', borderBottomColor: e.color.secondary }
  }),
  ({ active: e, textColor: t, theme: n }) =>
    e
      ? {
          color: t || n.barSelectedColor,
          borderBottomColor: n.barSelectedColor
        }
      : { color: t || n.barTextColor, borderBottomColor: 'transparent' }
);
Yo.displayName = 'TabButton';
var Er = F(wd, { shouldForwardProp: Z0 })(
  () => ({
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    borderRadius: 4,
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 13,
    fontWeight: 'bold',
    height: 28,
    justifyContent: 'center',
    marginTop: 6,
    padding: '8px 7px',
    '& > svg': { width: 14 }
  }),
  ({ active: e, theme: t }) =>
    e
      ? { backgroundColor: t.background.hoverable, color: t.color.secondary }
      : {},
  ({ disabled: e, theme: t }) =>
    e
      ? { opacity: 0.5, cursor: 'not-allowed' }
      : {
          '&:hover, &:focus-visible': {
            background: Ke(0.88, t.color.secondary),
            color: t.color.secondary
          },
          '&:focus-visible': { outline: tu },
          '&:focus:not(:focus-visible)': { outline: 'none' }
        }
);
Er.displayName = 'IconButton';
var Zw = F.div(({ theme: e }) => ({
    width: 14,
    height: 14,
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`
  })),
  zw = F.div(() => ({ marginTop: 6, padding: 7, height: 28 })),
  zg = () => l.createElement(zw, null, l.createElement(Zw, null)),
  Tc = F.div(
    {
      display: 'flex',
      whiteSpace: 'nowrap',
      flexBasis: 'auto',
      marginLeft: 3,
      marginRight: 3
    },
    ({ scrollable: e }) => (e ? { flexShrink: 0 } : {}),
    ({ left: e }) => (e ? { '& > *': { marginLeft: 4 } } : {}),
    ({ right: e }) => (e ? { marginLeft: 30, '& > *': { marginRight: 4 } } : {})
  );
Tc.displayName = 'Side';
var Vw = ({ children: e, className: t, scrollable: n }) =>
    n
      ? l.createElement(eu, { vertical: !1, className: t }, e)
      : l.createElement('div', { className: t }, e),
  Sd = F(Vw)(
    ({ theme: e, scrollable: t = !0 }) => ({
      color: e.barTextColor,
      width: '100%',
      height: 40,
      flexShrink: 0,
      overflow: t ? 'auto' : 'hidden',
      overflowY: 'hidden'
    }),
    ({ theme: e, border: t = !1 }) =>
      t
        ? {
            boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
            background: e.barBg
          }
        : {}
  );
Sd.displayName = 'Bar';
var Uw = F.div(({ bgColor: e }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    flexWrap: 'nowrap',
    flexShrink: 0,
    height: 40,
    backgroundColor: e || ''
  })),
  ou = ({ children: e, backgroundColor: t, ...n }) => {
    let [r, a] = k.Children.toArray(e);
    return l.createElement(
      Sd,
      { ...n },
      l.createElement(
        Uw,
        { bgColor: t },
        l.createElement(Tc, { scrollable: n.scrollable, left: !0 }, r),
        a ? l.createElement(Tc, { right: !0 }, a) : null
      )
    );
  };
ou.displayName = 'FlexBar';
var Vg = F.div(({ active: e }) =>
    e ? { display: 'block' } : { display: 'none' }
  ),
  qw = (e, t) =>
    k.Children.toArray(e).map(
      ({ props: { title: n, id: r, color: a, children: o } }, i) => {
        let s = Array.isArray(o) ? o[0] : o;
        return {
          active: t ? r === t : i === 0,
          title: n,
          id: r,
          color: a,
          render:
            typeof s == 'function'
              ? s
              : ({ active: u, key: c }) =>
                  l.createElement(
                    Vg,
                    { key: c, active: u, role: 'tabpanel' },
                    s
                  )
        };
      }
    ),
  Ww = F.span(({ theme: e, isActive: t }) => ({
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: 8,
    color: t ? e.color.secondary : e.color.mediumdark,
    borderRight: '3px solid transparent',
    borderLeft: '3px solid transparent',
    borderTop: '3px solid',
    transition: 'transform .1s ease-out'
  })),
  Gw = F(Yo)(
    ({ active: e, theme: t, preActive: n }) => `
    color: ${n || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `
  );
function Kw(e) {
  let t = k.useRef(),
    n = k.useRef(),
    r = k.useRef(new Map()),
    { width: a = 1 } = lg({ ref: t }),
    [o, i] = k.useState(e),
    [s, u] = k.useState([]),
    c = k.useRef(e),
    d = k.useCallback(
      ({ menuName: f, actions: p }) => {
        let h = s.some(({ active: y }) => y),
          [m, w] = k.useState(!1);
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            Z8,
            {
              interactive: !0,
              visible: m,
              onVisibleChange: w,
              placement: 'bottom',
              delayHide: 100,
              tooltip: l.createElement(xd, {
                links: s.map(({ title: y, id: b, color: v, active: E }) => ({
                  id: b,
                  title: y,
                  color: v,
                  active: E,
                  onClick: (x) => {
                    x.preventDefault(), p.onSelect(b);
                  }
                }))
              })
            },
            l.createElement(
              Gw,
              {
                ref: n,
                active: h,
                preActive: m,
                style: { visibility: s.length ? 'visible' : 'hidden' },
                'aria-hidden': !s.length,
                className: 'tabbutton',
                type: 'button',
                role: 'tab'
              },
              f,
              l.createElement(Ww, {
                className: 'addon-collapsible-icon',
                isActive: h || m
              })
            )
          ),
          s.map(({ title: y, id: b, color: v }, E) => {
            let x = `index-${E}`;
            return l.createElement(
              Yo,
              {
                id: `tabbutton-${If(b) ?? x}`,
                style: { visibility: 'hidden' },
                'aria-hidden': !0,
                tabIndex: -1,
                ref: (S) => {
                  r.current.set(b, S);
                },
                className: 'tabbutton',
                type: 'button',
                key: b,
                textColor: v,
                role: 'tab'
              },
              y
            );
          })
        );
      },
      [s]
    ),
    g = k.useCallback(() => {
      if (!t.current || !n.current) return;
      let { x: f, width: p } = t.current.getBoundingClientRect(),
        { width: h } = n.current.getBoundingClientRect(),
        m = s.length ? f + p - h : f + p,
        w = [],
        y = 0,
        b = e.filter((v) => {
          let { id: E } = v,
            x = r.current.get(E),
            { width: S = 0 } =
              (x == null ? void 0 : x.getBoundingClientRect()) || {},
            A = f + y + S > m;
          return (!A || !x) && w.push(v), (y += S), A;
        });
      (w.length !== o.length || c.current !== e) &&
        (i(w), u(b), (c.current = e));
    }, [s.length, e, o]);
  return (
    k.useLayoutEffect(g, [g, a]),
    {
      tabRefs: r,
      addonsRef: n,
      tabBarRef: t,
      visibleList: o,
      invisibleList: s,
      AddonTab: d
    }
  );
}
var Yw =
    '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */',
  Xw = F.div(
    ({ theme: e, bordered: t }) =>
      t
        ? {
            backgroundClip: 'padding-box',
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.appBorderRadius,
            overflow: 'hidden',
            boxSizing: 'border-box'
          }
        : {},
    ({ absolute: e }) =>
      e
        ? {
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column'
          }
        : { display: 'block' }
  ),
  Ad = F.div({
    overflow: 'hidden',
    '&:first-of-type': { marginLeft: -3 },
    whiteSpace: 'nowrap',
    flexGrow: 1
  });
Ad.displayName = 'TabBar';
var Qw = F.div(
    { display: 'block', position: 'relative' },
    ({ theme: e }) => ({
      fontSize: e.typography.size.s2 - 1,
      background: e.background.content
    }),
    ({ bordered: e, theme: t }) =>
      e
        ? {
            borderRadius: `0 0 ${t.appBorderRadius - 1}px ${
              t.appBorderRadius - 1
            }px`
          }
        : {},
    ({ absolute: e, bordered: t }) =>
      e
        ? {
            height: `calc(100% - ${t ? 42 : 40}px)`,
            position: 'absolute',
            left: 0 + (t ? 1 : 0),
            right: 0 + (t ? 1 : 0),
            bottom: 0 + (t ? 1 : 0),
            top: 40 + (t ? 1 : 0),
            overflow: 'auto',
            [`& > *:first-child${Yw}`]: {
              position: 'absolute',
              left: 0 + (t ? 1 : 0),
              right: 0 + (t ? 1 : 0),
              bottom: 0 + (t ? 1 : 0),
              top: 0 + (t ? 1 : 0),
              height: `calc(100% - ${t ? 2 : 0}px)`,
              overflow: 'auto'
            }
          }
        : {}
  ),
  Jw = ({ active: e, render: t, children: n }) =>
    l.createElement(Vg, { active: e }, t ? t() : n),
  lu = k.memo(
    ({
      children: e,
      selected: t,
      actions: n,
      absolute: r,
      bordered: a,
      tools: o,
      backgroundColor: i,
      id: s,
      menuName: u
    }) => {
      let c = k.useMemo(() => qw(e, t), [e, t]),
        { visibleList: d, tabBarRef: g, tabRefs: f, AddonTab: p } = Kw(c);
      return c.length
        ? l.createElement(
            Xw,
            { absolute: r, bordered: a, id: s },
            l.createElement(
              ou,
              { scrollable: !1, border: !0, backgroundColor: i },
              l.createElement(
                Ad,
                { style: { whiteSpace: 'normal' }, ref: g, role: 'tablist' },
                d.map(({ title: h, id: m, active: w, color: y }, b) => {
                  let v = `index-${b}`;
                  return l.createElement(
                    Yo,
                    {
                      id: `tabbutton-${If(m) ?? v}`,
                      ref: (E) => {
                        f.current.set(m, E);
                      },
                      className: `tabbutton ${w ? 'tabbutton-active' : ''}`,
                      type: 'button',
                      key: m,
                      active: w,
                      textColor: y,
                      onClick: (E) => {
                        E.preventDefault(), n.onSelect(m);
                      },
                      role: 'tab'
                    },
                    h
                  );
                }),
                l.createElement(p, { menuName: u, actions: n })
              ),
              o
            ),
            l.createElement(
              Qw,
              { id: 'panel-tab-content', bordered: a, absolute: r },
              c.map(({ id: h, active: m, render: w }) =>
                w({ key: h, active: m })
              )
            )
          )
        : l.createElement(
            Og,
            null,
            l.createElement(k.Fragment, { key: 'title' }, 'Nothing found')
          );
    }
  );
lu.displayName = 'Tabs';
lu.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
  menuName: 'Tabs'
};
var Ug = class extends k.Component {
  constructor(e) {
    super(e),
      (this.handlers = { onSelect: (t) => this.setState({ selected: t }) }),
      (this.state = { selected: e.initial });
  }
  render() {
    let {
        bordered: e = !1,
        absolute: t = !1,
        children: n,
        backgroundColor: r,
        menuName: a
      } = this.props,
      { selected: o } = this.state;
    return l.createElement(
      lu,
      {
        bordered: e,
        absolute: t,
        selected: o,
        backgroundColor: r,
        menuName: a,
        actions: this.handlers
      },
      n
    );
  }
};
Ug.defaultProps = {
  children: [],
  initial: null,
  absolute: !1,
  bordered: !1,
  backgroundColor: '',
  menuName: void 0
};
var Cd = F.span(
  ({ theme: e }) => ({
    width: 1,
    height: 20,
    background: e.appBorderColor,
    marginTop: 10,
    marginLeft: 6,
    marginRight: 2
  }),
  ({ force: e }) => (e ? {} : { '& + &': { display: 'none' } })
);
Cd.displayName = 'Separator';
var e9 = (e) =>
    e.reduce(
      (t, n, r) =>
        n
          ? l.createElement(
              k.Fragment,
              { key: n.id || n.key || `f-${r}` },
              t,
              r > 0 ? l.createElement(Cd, { key: `s-${r}` }) : null,
              n.render() || n
            )
          : t,
      null
    ),
  t9 = (e) => {
    let t = k.useRef();
    return (
      k.useEffect(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  },
  n9 = (e, t) => {
    let n = t9(t);
    return e ? t : n;
  },
  r9 = ({ active: e, children: t }) =>
    l.createElement('div', { hidden: !e }, n9(e, t)),
  a9 = ({ alt: e, ...t }) =>
    l.createElement(
      'svg',
      {
        width: '200px',
        height: '40px',
        viewBox: '0 0 200 40',
        ...t,
        role: 'img'
      },
      e ? l.createElement('title', null, e) : null,
      l.createElement(
        'defs',
        null,
        l.createElement('path', {
          d: 'M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z',
          id: 'a'
        })
      ),
      l.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd' },
        l.createElement('path', {
          d: 'M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z',
          fill: 'currentColor'
        }),
        l.createElement(
          'mask',
          { id: 'b', fill: '#fff' },
          l.createElement('use', { xlinkHref: '#a' })
        ),
        l.createElement('use', {
          fill: '#FF4785',
          fillRule: 'nonzero',
          xlinkHref: '#a'
        }),
        l.createElement('path', {
          d: 'M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z',
          fill: '#FFF',
          fillRule: 'nonzero',
          mask: 'url(#b)'
        })
      )
    ),
  o9 = ({ ...e }) =>
    l.createElement(
      'svg',
      { viewBox: '0 0 64 64', ...e },
      l.createElement('title', null, 'Storybook icon'),
      l.createElement(
        'g',
        {
          id: 'Artboard',
          stroke: 'none',
          strokeWidth: '1',
          fill: 'none',
          fillRule: 'evenodd'
        },
        l.createElement('path', {
          d: 'M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z',
          id: 'path-1',
          fill: '#FF4785',
          fillRule: 'nonzero'
        }),
        l.createElement('path', {
          d: 'M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z',
          id: 'path9_fill-path',
          fill: '#FFFFFF',
          fillRule: 'nonzero'
        }),
        l.createElement('path', {
          d: 'M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z',
          id: 'Path',
          fill: '#FFFFFF'
        })
      )
    ),
  l9 = Aa`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  i9 = F.div(({ size: e = 32 }) => ({
    borderRadius: '50%',
    cursor: 'progress',
    display: 'inline-block',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'all 200ms ease-out',
    verticalAlign: 'top',
    top: '50%',
    left: '50%',
    marginTop: -(e / 2),
    marginLeft: -(e / 2),
    height: e,
    width: e,
    zIndex: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(97, 97, 97, 0.29)',
    borderTopColor: 'rgb(100,100,100)',
    animation: `${l9} 0.7s linear infinite`,
    mixBlendMode: 'difference'
  })),
  Qp = F.div({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }),
  u9 = F.div(({ theme: e }) => ({
    position: 'relative',
    width: '80%',
    marginBottom: '0.75rem',
    maxWidth: 300,
    height: 5,
    borderRadius: 5,
    background: Ke(0.8, e.color.secondary),
    overflow: 'hidden',
    cursor: 'progress'
  })),
  s9 = F.div(({ theme: e }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    background: e.color.secondary
  })),
  Jp = F.div(({ theme: e }) => ({
    minHeight: '2em',
    fontSize: `${e.typography.size.s1}px`,
    color: e.barTextColor
  })),
  c9 = F(rt)(({ theme: e }) => ({
    width: 20,
    height: 20,
    marginBottom: '0.5rem',
    color: e.textMutedColor
  })),
  d9 = Aa`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
  p9 = F.span({
    '&::after': {
      content: "'...'",
      animation: `${d9} 1s linear infinite`,
      animationDelay: '1s',
      display: 'inline-block',
      width: '1em',
      height: 'auto'
    }
  }),
  qg = ({ progress: e, error: t, size: n, ...r }) => {
    if (t)
      return l.createElement(
        Qp,
        {
          'aria-label': t.toString(),
          'aria-live': 'polite',
          role: 'status',
          ...r
        },
        l.createElement(c9, { icon: 'lightningoff' }),
        l.createElement(Jp, null, t.message)
      );
    if (e) {
      let { value: a, modules: o } = e,
        { message: i } = e;
      return (
        o && (i += ` ${o.complete} / ${o.total} modules`),
        l.createElement(
          Qp,
          {
            'aria-label': 'Content is loading...',
            'aria-live': 'polite',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': a * 100,
            'aria-valuetext': i,
            role: 'progressbar',
            ...r
          },
          l.createElement(
            u9,
            null,
            l.createElement(s9, { style: { width: `${a * 100}%` } })
          ),
          l.createElement(Jp, null, i, a < 1 && l.createElement(p9, { key: i }))
        )
      );
    }
    return l.createElement(i9, {
      'aria-label': 'Content is loading...',
      'aria-live': 'polite',
      role: 'status',
      size: n,
      ...r
    });
  };
function f9(e) {
  let t = {},
    n = e.split('&');
  for (let r = 0; r < n.length; r++) {
    let a = n[r].split('=');
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || '');
  }
  return t;
}
var Wg = (e, t, n = {}) => {
    let [r, a] = e.split('?'),
      o = a ? { ...f9(a), ...n, id: t } : { ...n, id: t };
    return `${r}?${Object.entries(o)
      .map((i) => `${i[0]}=${i[1]}`)
      .join('&')}`;
  },
  Gg = Fg,
  Kg = {};
Object.keys(Fg).forEach((e) => {
  Kg[e] = k.forwardRef((t, n) => k.createElement(e, { ...t, ref: n }));
});
const m9 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      A: cg,
      ActionBar: rd,
      AddonPanel: r9,
      Badge: _x,
      Bar: Sd,
      Blockquote: dg,
      Button: Bg,
      Code: md,
      DL: fg,
      Div: pg,
      DocumentWrapper: Mx,
      ErrorFormatter: Mg,
      FlexBar: ou,
      Form: It,
      H1: mg,
      H2: gd,
      H3: hd,
      H4: gg,
      H5: hg,
      H6: yg,
      HR: vg,
      IconButton: Er,
      IconButtonSkeleton: zg,
      Icons: rt,
      Img: bg,
      LI: Eg,
      Link: Io,
      ListItem: Ed,
      Loader: qg,
      OL: xg,
      P: wg,
      Placeholder: Og,
      Pre: Sg,
      ResetWrapper: yd,
      ScrollArea: eu,
      Separator: Cd,
      Spaced: Nx,
      Span: Ag,
      StorybookIcon: o9,
      StorybookLogo: a9,
      Symbols: Fx,
      SyntaxHighlighter: vd,
      TT: kg,
      TabBar: Ad,
      TabButton: Yo,
      TabWrapper: Jw,
      Table: Cg,
      Tabs: lu,
      TabsState: Ug,
      TooltipLinkList: xd,
      TooltipMessage: Hg,
      TooltipNote: Lw,
      UL: _g,
      WithTooltip: Cw,
      WithTooltipPure: jg,
      Zoom: Lg,
      codeCommon: kn,
      components: Gg,
      createCopyToClipboardFunction: Um,
      getStoryHref: Wg,
      icons: Bo,
      interleaveSeparators: e9,
      nameSpaceClassNames: ue,
      resetComponents: Kg,
      withReset: me
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function ya() {
  return (
    (ya = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ya.apply(this, arguments)
  );
}
function g9(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Po(e, t) {
  return (
    (Po = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, a) {
          return (r.__proto__ = a), r;
        }),
    Po(e, t)
  );
}
function h9(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Po(e, t);
}
function Oc(e) {
  return (
    (Oc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Oc(e)
  );
}
function y9(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1;
}
function v9() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Vl(e, t, n) {
  return (
    v9()
      ? (Vl = Reflect.construct.bind())
      : (Vl = function (a, o, i) {
          var s = [null];
          s.push.apply(s, o);
          var u = Function.bind.apply(a, s),
            c = new u();
          return i && Po(c, i.prototype), c;
        }),
    Vl.apply(null, arguments)
  );
}
function Rc(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (Rc = function (r) {
      if (r === null || !y9(r)) return r;
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (typeof t < 'u') {
        if (t.has(r)) return t.get(r);
        t.set(r, a);
      }
      function a() {
        return Vl(r, arguments, Oc(this).constructor);
      }
      return (
        (a.prototype = Object.create(r.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
        Po(a, r)
      );
    }),
    Rc(e)
  );
}
var nn = (function (e) {
  h9(t, e);
  function t(n) {
    var r;
    return (
      (r =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            n +
            ' for more information.'
        ) || this),
      g9(r)
    );
  }
  return t;
})(Rc(Error));
function os(e) {
  return Math.round(e * 255);
}
function b9(e, t, n) {
  return os(e) + ',' + os(t) + ',' + os(n);
}
function No(e, t, n, r) {
  if ((r === void 0 && (r = b9), t === 0)) return r(n, n, n);
  var a = (((e % 360) + 360) % 360) / 60,
    o = (1 - Math.abs(2 * n - 1)) * t,
    i = o * (1 - Math.abs((a % 2) - 1)),
    s = 0,
    u = 0,
    c = 0;
  a >= 0 && a < 1
    ? ((s = o), (u = i))
    : a >= 1 && a < 2
    ? ((s = i), (u = o))
    : a >= 2 && a < 3
    ? ((u = o), (c = i))
    : a >= 3 && a < 4
    ? ((u = i), (c = o))
    : a >= 4 && a < 5
    ? ((s = i), (c = o))
    : a >= 5 && a < 6 && ((s = o), (c = i));
  var d = n - o / 2,
    g = s + d,
    f = u + d,
    p = c + d;
  return r(g, f, p);
}
var ef = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
function E9(e) {
  if (typeof e != 'string') return e;
  var t = e.toLowerCase();
  return ef[t] ? '#' + ef[t] : e;
}
var x9 = /^#[a-fA-F0-9]{6}$/,
  w9 = /^#[a-fA-F0-9]{8}$/,
  S9 = /^#[a-fA-F0-9]{3}$/,
  A9 = /^#[a-fA-F0-9]{4}$/,
  ls = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  C9 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  k9 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  _9 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function iu(e) {
  if (typeof e != 'string') throw new nn(3);
  var t = E9(e);
  if (t.match(x9))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16)
    };
  if (t.match(w9)) {
    var n = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: n
    };
  }
  if (t.match(S9))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16)
    };
  if (t.match(A9)) {
    var r = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: r
    };
  }
  var a = ls.exec(t);
  if (a)
    return {
      red: parseInt('' + a[1], 10),
      green: parseInt('' + a[2], 10),
      blue: parseInt('' + a[3], 10)
    };
  var o = C9.exec(t.substring(0, 50));
  if (o)
    return {
      red: parseInt('' + o[1], 10),
      green: parseInt('' + o[2], 10),
      blue: parseInt('' + o[3], 10),
      alpha:
        parseFloat('' + o[4]) > 1
          ? parseFloat('' + o[4]) / 100
          : parseFloat('' + o[4])
    };
  var i = k9.exec(t);
  if (i) {
    var s = parseInt('' + i[1], 10),
      u = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + No(s, u, c) + ')',
      g = ls.exec(d);
    if (!g) throw new nn(4, t, d);
    return {
      red: parseInt('' + g[1], 10),
      green: parseInt('' + g[2], 10),
      blue: parseInt('' + g[3], 10)
    };
  }
  var f = _9.exec(t.substring(0, 50));
  if (f) {
    var p = parseInt('' + f[1], 10),
      h = parseInt('' + f[2], 10) / 100,
      m = parseInt('' + f[3], 10) / 100,
      w = 'rgb(' + No(p, h, m) + ')',
      y = ls.exec(w);
    if (!y) throw new nn(4, t, w);
    return {
      red: parseInt('' + y[1], 10),
      green: parseInt('' + y[2], 10),
      blue: parseInt('' + y[3], 10),
      alpha:
        parseFloat('' + f[4]) > 1
          ? parseFloat('' + f[4]) / 100
          : parseFloat('' + f[4])
    };
  }
  throw new nn(5);
}
function F9(e) {
  var t = e.red / 255,
    n = e.green / 255,
    r = e.blue / 255,
    a = Math.max(t, n, r),
    o = Math.min(t, n, r),
    i = (a + o) / 2;
  if (a === o)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var s,
    u = a - o,
    c = i > 0.5 ? u / (2 - a - o) : u / (a + o);
  switch (a) {
    case t:
      s = (n - r) / u + (n < r ? 6 : 0);
      break;
    case n:
      s = (r - t) / u + 2;
      break;
    default:
      s = (t - n) / u + 4;
      break;
  }
  return (
    (s *= 60),
    e.alpha !== void 0
      ? { hue: s, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: s, saturation: c, lightness: i }
  );
}
function Yg(e) {
  return F9(iu(e));
}
var T9 = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
      ? '#' + t[1] + t[3] + t[5]
      : t;
  },
  Dc = T9;
function dr(e) {
  var t = e.toString(16);
  return t.length === 1 ? '0' + t : t;
}
function is(e) {
  return dr(Math.round(e * 255));
}
function O9(e, t, n) {
  return Dc('#' + is(e) + is(t) + is(n));
}
function ki(e, t, n) {
  return No(e, t, n, O9);
}
function R9(e, t, n) {
  if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number')
    return ki(e, t, n);
  if (typeof e == 'object' && t === void 0 && n === void 0)
    return ki(e.hue, e.saturation, e.lightness);
  throw new nn(1);
}
function D9(e, t, n, r) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof n == 'number' &&
    typeof r == 'number'
  )
    return r >= 1 ? ki(e, t, n) : 'rgba(' + No(e, t, n) + ',' + r + ')';
  if (typeof e == 'object' && t === void 0 && n === void 0 && r === void 0)
    return e.alpha >= 1
      ? ki(e.hue, e.saturation, e.lightness)
      : 'rgba(' + No(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
  throw new nn(2);
}
function Lc(e, t, n) {
  if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number')
    return Dc('#' + dr(e) + dr(t) + dr(n));
  if (typeof e == 'object' && t === void 0 && n === void 0)
    return Dc('#' + dr(e.red) + dr(e.green) + dr(e.blue));
  throw new nn(6);
}
function hn(e, t, n, r) {
  if (typeof e == 'string' && typeof t == 'number') {
    var a = iu(e);
    return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof n == 'number' &&
      typeof r == 'number'
    )
      return r >= 1
        ? Lc(e, t, n)
        : 'rgba(' + e + ',' + t + ',' + n + ',' + r + ')';
    if (typeof e == 'object' && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1
        ? Lc(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
  }
  throw new nn(7);
}
var L9 = function (t) {
    return (
      typeof t.red == 'number' &&
      typeof t.green == 'number' &&
      typeof t.blue == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    );
  },
  M9 = function (t) {
    return (
      typeof t.red == 'number' &&
      typeof t.green == 'number' &&
      typeof t.blue == 'number' &&
      typeof t.alpha == 'number'
    );
  },
  $9 = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    );
  },
  B9 = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      typeof t.alpha == 'number'
    );
  };
function Xg(e) {
  if (typeof e != 'object') throw new nn(8);
  if (M9(e)) return hn(e);
  if (L9(e)) return Lc(e);
  if (B9(e)) return D9(e);
  if ($9(e)) return R9(e);
  throw new nn(8);
}
function Qg(e, t, n) {
  return function () {
    var a = n.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : Qg(e, t, a);
  };
}
function uu(e) {
  return Qg(e, e.length, []);
}
function su(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function I9(e, t) {
  if (t === 'transparent') return t;
  var n = Yg(t);
  return Xg(ya({}, n, { lightness: su(0, 1, n.lightness - parseFloat(e)) }));
}
var P9 = uu(I9),
  Kt = P9;
function N9(e, t) {
  if (t === 'transparent') return t;
  var n = Yg(t);
  return Xg(ya({}, n, { lightness: su(0, 1, n.lightness + parseFloat(e)) }));
}
var j9 = uu(N9),
  pr = j9;
function H9(e, t) {
  if (t === 'transparent') return t;
  var n = iu(t),
    r = typeof n.alpha == 'number' ? n.alpha : 1,
    a = ya({}, n, { alpha: su(0, 1, (r * 100 + parseFloat(e) * 100) / 100) });
  return hn(a);
}
var Z9 = uu(H9),
  xl = Z9;
function z9(e, t) {
  if (t === 'transparent') return t;
  var n = iu(t),
    r = typeof n.alpha == 'number' ? n.alpha : 1,
    a = ya({}, n, {
      alpha: su(0, 1, +(r * 100 - parseFloat(e) * 100).toFixed(2) / 100)
    });
  return hn(a);
}
var V9 = uu(z9),
  fe = V9,
  U9 = Pf,
  q9 = sy,
  W9 = Object.prototype,
  G9 = W9.hasOwnProperty;
function K9(e, t, n) {
  var r = e[t];
  (!(G9.call(e, t) && q9(r, n)) || (n === void 0 && !(t in e))) && U9(e, t, n);
}
var kd = K9,
  Y9 = kd,
  X9 = Nf,
  Q9 = cy,
  tf = Fi,
  J9 = dy;
function eS(e, t, n, r) {
  if (!tf(e)) return e;
  t = X9(t, e);
  for (var a = -1, o = t.length, i = o - 1, s = e; s != null && ++a < o; ) {
    var u = J9(t[a]),
      c = n;
    if (u === '__proto__' || u === 'constructor' || u === 'prototype') return e;
    if (a != i) {
      var d = s[u];
      (c = r ? r(d, u, s) : void 0),
        c === void 0 && (c = tf(d) ? d : Q9(t[a + 1]) ? [] : {});
    }
    Y9(s, u, c), (s = s[u]);
  }
  return e;
}
var tS = eS,
  nS = py,
  rS = tS,
  aS = Nf;
function oS(e, t, n) {
  for (var r = -1, a = t.length, o = {}; ++r < a; ) {
    var i = t[r],
      s = nS(e, i);
    n(s, i) && rS(o, aS(i, e), s);
  }
  return o;
}
var lS = oS,
  iS = fy,
  uS = iS(Object.getPrototypeOf, Object),
  Jg = uS,
  sS = my,
  cS = Jg,
  dS = jf,
  pS = gy,
  fS = Object.getOwnPropertySymbols,
  mS = fS
    ? function (e) {
        for (var t = []; e; ) sS(t, dS(e)), (e = cS(e));
        return t;
      }
    : pS,
  eh = mS;
function gS(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var hS = gS,
  yS = Fi,
  vS = Hf,
  bS = hS,
  ES = Object.prototype,
  xS = ES.hasOwnProperty;
function wS(e) {
  if (!yS(e)) return bS(e);
  var t = vS(e),
    n = [];
  for (var r in e) (r == 'constructor' && (t || !xS.call(e, r))) || n.push(r);
  return n;
}
var SS = wS,
  AS = hy,
  CS = SS,
  kS = yy;
function _S(e) {
  return kS(e) ? AS(e, !0) : CS(e);
}
var _d = _S,
  FS = vy,
  TS = eh,
  OS = _d;
function RS(e) {
  return FS(e, OS, TS);
}
var th = RS,
  DS = by,
  LS = Ey,
  MS = lS,
  $S = th;
function BS(e, t) {
  if (e == null) return {};
  var n = DS($S(e), function (r) {
    return [r];
  });
  return (
    (t = LS(t)),
    MS(e, n, function (r, a) {
      return t(r, a[0]);
    })
  );
}
var IS = BS;
const PS = ba(IS);
function fr() {
  return (
    (fr =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    fr.apply(this, arguments)
  );
}
const NS = ['children', 'options'],
  nf = [
    'allowFullScreen',
    'allowTransparency',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'className',
    'classId',
    'colSpan',
    'contentEditable',
    'contextMenu',
    'crossOrigin',
    'encType',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'hrefLang',
    'inputMode',
    'keyParams',
    'keyType',
    'marginHeight',
    'marginWidth',
    'maxLength',
    'mediaGroup',
    'minLength',
    'noValidate',
    'radioGroup',
    'readOnly',
    'rowSpan',
    'spellCheck',
    'srcDoc',
    'srcLang',
    'srcSet',
    'tabIndex',
    'useMap'
  ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
  rf = { amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '“' },
  jS = ['style', 'script'],
  HS =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  ZS = /mailto:/i,
  zS = /\n{2,}$/,
  nh = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  VS = /^ *> ?/gm,
  US = /^ {2,}\n/,
  qS = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  rh = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
  ah = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  WS = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  GS = /^(?:\n *)*\n/,
  KS = /\r\n?/g,
  YS = /^\[\^([^\]]+)](:.*)\n/,
  XS = /^\[\^([^\]]+)]/,
  QS = /\f/g,
  JS = /^\s*?\[(x|\s)\]/,
  oh = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  lh = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  Mc =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  eA = /&([a-zA-Z]+);/g,
  ih = /^<!--[\s\S]*?(?:-->)/,
  tA = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  $c = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  nA = /^\{.*\}$/,
  rA = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  aA = /^<([^ >]+@[^ >]+)>/,
  oA = /^<([^ >]+:\/[^ >]+)>/,
  lA = /-([a-z])?/gi,
  uh = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  iA = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  uA = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  sA = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  cA = /(\[|\])/g,
  dA = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  pA = /\t/g,
  fA = /^ *\| */,
  mA = /(^ *\||\| *$)/g,
  gA = / *$/,
  hA = /^ *:-+: *$/,
  yA = /^ *:-+ *$/,
  vA = /^ *-+: *$/,
  bA =
    /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  EA =
    /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  xA = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
  wA = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  SA = /^\\([^0-9A-Za-z\s])/,
  AA =
    /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  CA = /^\n+/,
  kA = /^([ \t]*)/,
  _A = /\\([^\\])/g,
  af = / *\n+$/,
  FA = /(?:^|\n)( *)$/,
  Fd = '(?:\\d+\\.)',
  Td = '(?:[*+-])';
function sh(e) {
  return '( *)(' + (e === 1 ? Fd : Td) + ') +';
}
const ch = sh(1),
  dh = sh(2);
function ph(e) {
  return new RegExp('^' + (e === 1 ? ch : dh));
}
const TA = ph(1),
  OA = ph(2);
function fh(e) {
  return new RegExp(
    '^' +
      (e === 1 ? ch : dh) +
      '[^\\n]*(?:\\n(?!\\1' +
      (e === 1 ? Fd : Td) +
      ' )[^\\n]*)*(\\n|$)',
    'gm'
  );
}
const mh = fh(1),
  gh = fh(2);
function hh(e) {
  const t = e === 1 ? Fd : Td;
  return new RegExp(
    '^( *)(' +
      t +
      ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
      t +
      ' (?!' +
      t +
      ' ))\\n*|\\s*\\n*$)'
  );
}
const yh = hh(1),
  vh = hh(2);
function of(e, t) {
  const n = t === 1,
    r = n ? yh : vh,
    a = n ? mh : gh,
    o = n ? TA : OA;
  return {
    t(i, s, u) {
      const c = FA.exec(u);
      return c && (s.o || (!s._ && !s.u)) ? r.exec((i = c[1] + i)) : null;
    },
    i: X.HIGH,
    l(i, s, u) {
      const c = n ? +i[2] : void 0,
        d = i[0]
          .replace(
            zS,
            `
`
          )
          .match(a);
      let g = !1;
      return {
        p: d.map(function (f, p) {
          const h = o.exec(f)[0].length,
            m = new RegExp('^ {1,' + h + '}', 'gm'),
            w = f.replace(m, '').replace(o, ''),
            y = p === d.length - 1,
            b =
              w.indexOf(`

`) !== -1 ||
              (y && g);
          g = b;
          const v = u._,
            E = u.o;
          let x;
          (u.o = !0),
            b
              ? ((u._ = !1),
                (x = w.replace(
                  af,
                  `

`
                )))
              : ((u._ = !0), (x = w.replace(af, '')));
          const S = s(x, u);
          return (u._ = v), (u.o = E), S;
        }),
        m: n,
        g: c
      };
    },
    h: (i, s, u) =>
      e(
        i.m ? 'ol' : 'ul',
        { key: u.k, start: i.g },
        i.p.map(function (c, d) {
          return e('li', { key: d }, s(c, u));
        })
      )
  };
}
const RA = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  DA = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  bh = [nh, rh, ah, oh, lh, ih, uh, mh, yh, gh, vh],
  LA = [...bh, /^[^\n]+(?:  \n|\n{2,})/, Mc, $c];
function MA(e) {
  return e
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ðÐ]/g, 'd')
    .replace(/[ÈÉÊËéèêë]/g, 'e')
    .replace(/[ÏïÎîÍíÌì]/g, 'i')
    .replace(/[Ññ]/g, 'n')
    .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
    .replace(/[ÜüÛûÚúÙù]/g, 'u')
    .replace(/[ŸÿÝý]/g, 'y')
    .replace(/[^a-z0-9- ]/gi, '')
    .replace(/ /gi, '-')
    .toLowerCase();
}
function $A(e) {
  return vA.test(e)
    ? 'right'
    : hA.test(e)
    ? 'center'
    : yA.test(e)
    ? 'left'
    : null;
}
function lf(e, t, n) {
  const r = n.v;
  n.v = !0;
  const a = t(e.trim(), n);
  n.v = r;
  let o = [[]];
  return (
    a.forEach(function (i, s) {
      i.type === 'tableSeparator'
        ? s !== 0 && s !== a.length - 1 && o.push([])
        : (i.type !== 'text' ||
            (a[s + 1] != null && a[s + 1].type !== 'tableSeparator') ||
            (i.$ = i.$.replace(gA, '')),
          o[o.length - 1].push(i));
    }),
    o
  );
}
function BA(e, t, n) {
  n._ = !0;
  const r = lf(e[1], t, n),
    a = e[2].replace(mA, '').split('|').map($A),
    o = (function (i, s, u) {
      return i
        .trim()
        .split(
          `
`
        )
        .map(function (c) {
          return lf(c, s, u);
        });
    })(e[3], t, n);
  return (n._ = !1), { S: a, A: o, L: r, type: 'table' };
}
function uf(e, t) {
  return e.S[t] == null ? {} : { textAlign: e.S[t] };
}
function Tn(e) {
  return function (t, n) {
    return n._ ? e.exec(t) : null;
  };
}
function On(e) {
  return function (t, n) {
    return n._ || n.u ? e.exec(t) : null;
  };
}
function pn(e) {
  return function (t, n) {
    return n._ || n.u ? null : e.exec(t);
  };
}
function za(e) {
  return function (t) {
    return e.exec(t);
  };
}
function IA(e, t, n) {
  if (
    t._ ||
    t.u ||
    (n &&
      !n.endsWith(`
`))
  )
    return null;
  let r = '';
  e.split(
    `
`
  ).every(
    (o) =>
      !bh.some((i) => i.test(o)) &&
      ((r +=
        o +
        `
`),
      o.trim())
  );
  const a = r.trimEnd();
  return a == '' ? null : [r, a];
}
function $r(e) {
  try {
    if (
      decodeURIComponent(e)
        .replace(/[^A-Za-z0-9/:]/g, '')
        .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
    )
      return null;
  } catch {
    return null;
  }
  return e;
}
function sf(e) {
  return e.replace(_A, '$1');
}
function Ul(e, t, n) {
  const r = n._ || !1,
    a = n.u || !1;
  (n._ = !0), (n.u = !0);
  const o = e(t, n);
  return (n._ = r), (n.u = a), o;
}
function PA(e, t, n) {
  const r = n._ || !1,
    a = n.u || !1;
  (n._ = !1), (n.u = !0);
  const o = e(t, n);
  return (n._ = r), (n.u = a), o;
}
function NA(e, t, n) {
  return (
    (n._ = !1),
    e(
      t +
        `

`,
      n
    )
  );
}
const us = (e, t, n) => ({ $: Ul(t, e[1], n) });
function ss() {
  return {};
}
function cs() {
  return null;
}
function jA(...e) {
  return e.filter(Boolean).join(' ');
}
function ds(e, t, n) {
  let r = e;
  const a = t.split('.');
  for (; a.length && ((r = r[a[0]]), r !== void 0); ) a.shift();
  return r || n;
}
var X;
function HA(e, t = {}) {
  (t.overrides = t.overrides || {}),
    (t.slugify = t.slugify || MA),
    (t.namedCodesToUnicode = t.namedCodesToUnicode
      ? fr({}, rf, t.namedCodesToUnicode)
      : rf);
  const n = t.createElement || k.createElement;
  function r(p, h, ...m) {
    const w = ds(t.overrides, `${p}.props`, {});
    return n(
      (function (y, b) {
        const v = ds(b, y);
        return v
          ? typeof v == 'function' || (typeof v == 'object' && 'render' in v)
            ? v
            : ds(b, `${y}.component`, y)
          : y;
      })(p, t.overrides),
      fr({}, h, w, {
        className: jA(h == null ? void 0 : h.className, w.className) || void 0
      }),
      ...m
    );
  }
  function a(p) {
    let h = !1;
    t.forceInline ? (h = !0) : t.forceBlock || (h = dA.test(p) === !1);
    const m = d(
      c(
        h
          ? p
          : `${p.trimEnd().replace(CA, '')}

`,
        { _: h }
      )
    );
    for (; typeof m[m.length - 1] == 'string' && !m[m.length - 1].trim(); )
      m.pop();
    if (t.wrapper === null) return m;
    const w = t.wrapper || (h ? 'span' : 'div');
    let y;
    if (m.length > 1 || t.forceWrapper) y = m;
    else {
      if (m.length === 1)
        return (
          (y = m[0]), typeof y == 'string' ? r('span', { key: 'outer' }, y) : y
        );
      y = null;
    }
    return k.createElement(w, { key: 'outer' }, y);
  }
  function o(p) {
    const h = p.match(HS);
    return h
      ? h.reduce(function (m, w, y) {
          const b = w.indexOf('=');
          if (b !== -1) {
            const v = (function (A) {
                return (
                  A.indexOf('-') !== -1 &&
                    A.match(tA) === null &&
                    (A = A.replace(lA, function (C, T) {
                      return T.toUpperCase();
                    })),
                  A
                );
              })(w.slice(0, b)).trim(),
              E = (function (A) {
                const C = A[0];
                return (C === '"' || C === "'") &&
                  A.length >= 2 &&
                  A[A.length - 1] === C
                  ? A.slice(1, -1)
                  : A;
              })(w.slice(b + 1).trim()),
              x = nf[v] || v,
              S = (m[x] = (function (A, C) {
                return A === 'style'
                  ? C.split(/;\s?/).reduce(function (T, _) {
                      const O = _.slice(0, _.indexOf(':'));
                      return (
                        (T[O.replace(/(-[a-z])/g, (B) => B[1].toUpperCase())] =
                          _.slice(O.length + 1).trim()),
                        T
                      );
                    }, {})
                  : A === 'href'
                  ? $r(C)
                  : (C.match(nA) && (C = C.slice(1, C.length - 1)),
                    C === 'true' || (C !== 'false' && C));
              })(v, E));
            typeof S == 'string' &&
              (Mc.test(S) || $c.test(S)) &&
              (m[x] = k.cloneElement(a(S.trim()), { key: y }));
          } else w !== 'style' && (m[nf[w] || w] = !0);
          return m;
        }, {})
      : null;
  }
  const i = [],
    s = {},
    u = {
      blockQuote: {
        t: pn(nh),
        i: X.HIGH,
        l: (p, h, m) => ({ $: h(p[0].replace(VS, ''), m) }),
        h: (p, h, m) => r('blockquote', { key: m.k }, h(p.$, m))
      },
      breakLine: {
        t: za(US),
        i: X.HIGH,
        l: ss,
        h: (p, h, m) => r('br', { key: m.k })
      },
      breakThematic: {
        t: pn(qS),
        i: X.HIGH,
        l: ss,
        h: (p, h, m) => r('hr', { key: m.k })
      },
      codeBlock: {
        t: pn(ah),
        i: X.MAX,
        l: (p) => ({
          $: p[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
          M: void 0
        }),
        h: (p, h, m) =>
          r(
            'pre',
            { key: m.k },
            r('code', fr({}, p.I, { className: p.M ? `lang-${p.M}` : '' }), p.$)
          )
      },
      codeFenced: {
        t: pn(rh),
        i: X.MAX,
        l: (p) => ({
          I: o(p[3] || ''),
          $: p[4],
          M: p[2] || void 0,
          type: 'codeBlock'
        })
      },
      codeInline: {
        t: On(WS),
        i: X.LOW,
        l: (p) => ({ $: p[2] }),
        h: (p, h, m) => r('code', { key: m.k }, p.$)
      },
      footnote: {
        t: pn(YS),
        i: X.MAX,
        l: (p) => (i.push({ O: p[2], B: p[1] }), {}),
        h: cs
      },
      footnoteReference: {
        t: Tn(XS),
        i: X.HIGH,
        l: (p) => ({ $: p[1], R: `#${t.slugify(p[1])}` }),
        h: (p, h, m) =>
          r('a', { key: m.k, href: $r(p.R) }, r('sup', { key: m.k }, p.$))
      },
      gfmTask: {
        t: Tn(JS),
        i: X.HIGH,
        l: (p) => ({ T: p[1].toLowerCase() === 'x' }),
        h: (p, h, m) =>
          r('input', { checked: p.T, key: m.k, readOnly: !0, type: 'checkbox' })
      },
      heading: {
        t: pn(oh),
        i: X.HIGH,
        l: (p, h, m) => ({
          $: Ul(h, p[2], m),
          j: t.slugify(p[2]),
          C: p[1].length
        }),
        h: (p, h, m) => r(`h${p.C}`, { id: p.j, key: m.k }, h(p.$, m))
      },
      headingSetext: {
        t: pn(lh),
        i: X.MAX,
        l: (p, h, m) => ({
          $: Ul(h, p[1], m),
          C: p[2] === '=' ? 1 : 2,
          type: 'heading'
        })
      },
      htmlComment: { t: za(ih), i: X.HIGH, l: () => ({}), h: cs },
      image: {
        t: On(DA),
        i: X.HIGH,
        l: (p) => ({ D: p[1], R: sf(p[2]), N: p[3] }),
        h: (p, h, m) =>
          r('img', {
            key: m.k,
            alt: p.D || void 0,
            title: p.N || void 0,
            src: $r(p.R)
          })
      },
      link: {
        t: Tn(RA),
        i: X.LOW,
        l: (p, h, m) => ({ $: PA(h, p[1], m), R: sf(p[2]), N: p[3] }),
        h: (p, h, m) =>
          r('a', { key: m.k, href: $r(p.R), title: p.N }, h(p.$, m))
      },
      linkAngleBraceStyleDetector: {
        t: Tn(oA),
        i: X.MAX,
        l: (p) => ({ $: [{ $: p[1], type: 'text' }], R: p[1], type: 'link' })
      },
      linkBareUrlDetector: {
        t: (p, h) => (h.Z ? null : Tn(rA)(p, h)),
        i: X.MAX,
        l: (p) => ({
          $: [{ $: p[1], type: 'text' }],
          R: p[1],
          N: void 0,
          type: 'link'
        })
      },
      linkMailtoDetector: {
        t: Tn(aA),
        i: X.MAX,
        l(p) {
          let h = p[1],
            m = p[1];
          return (
            ZS.test(m) || (m = 'mailto:' + m),
            {
              $: [{ $: h.replace('mailto:', ''), type: 'text' }],
              R: m,
              type: 'link'
            }
          );
        }
      },
      orderedList: of(r, 1),
      unorderedList: of(r, 2),
      newlineCoalescer: {
        t: pn(GS),
        i: X.LOW,
        l: ss,
        h: () => `
`
      },
      paragraph: {
        t: IA,
        i: X.LOW,
        l: us,
        h: (p, h, m) => r('p', { key: m.k }, h(p.$, m))
      },
      ref: {
        t: Tn(iA),
        i: X.MAX,
        l: (p) => ((s[p[1]] = { R: p[2], N: p[4] }), {}),
        h: cs
      },
      refImage: {
        t: On(uA),
        i: X.MAX,
        l: (p) => ({ D: p[1] || void 0, F: p[2] }),
        h: (p, h, m) =>
          r('img', { key: m.k, alt: p.D, src: $r(s[p.F].R), title: s[p.F].N })
      },
      refLink: {
        t: Tn(sA),
        i: X.MAX,
        l: (p, h, m) => ({
          $: h(p[1], m),
          P: h(p[0].replace(cA, '\\$1'), m),
          F: p[2]
        }),
        h: (p, h, m) =>
          s[p.F]
            ? r(
                'a',
                { key: m.k, href: $r(s[p.F].R), title: s[p.F].N },
                h(p.$, m)
              )
            : r('span', { key: m.k }, h(p.P, m))
      },
      table: {
        t: pn(uh),
        i: X.HIGH,
        l: BA,
        h: (p, h, m) =>
          r(
            'table',
            { key: m.k },
            r(
              'thead',
              null,
              r(
                'tr',
                null,
                p.L.map(function (w, y) {
                  return r('th', { key: y, style: uf(p, y) }, h(w, m));
                })
              )
            ),
            r(
              'tbody',
              null,
              p.A.map(function (w, y) {
                return r(
                  'tr',
                  { key: y },
                  w.map(function (b, v) {
                    return r('td', { key: v, style: uf(p, v) }, h(b, m));
                  })
                );
              })
            )
          )
      },
      tableSeparator: {
        t: function (p, h) {
          return h.v ? fA.exec(p) : null;
        },
        i: X.HIGH,
        l: function () {
          return { type: 'tableSeparator' };
        },
        h: () => ' | '
      },
      text: {
        t: za(AA),
        i: X.MIN,
        l: (p) => ({
          $: p[0].replace(eA, (h, m) =>
            t.namedCodesToUnicode[m] ? t.namedCodesToUnicode[m] : h
          )
        }),
        h: (p) => p.$
      },
      textBolded: {
        t: On(bA),
        i: X.MED,
        l: (p, h, m) => ({ $: h(p[2], m) }),
        h: (p, h, m) => r('strong', { key: m.k }, h(p.$, m))
      },
      textEmphasized: {
        t: On(EA),
        i: X.LOW,
        l: (p, h, m) => ({ $: h(p[2], m) }),
        h: (p, h, m) => r('em', { key: m.k }, h(p.$, m))
      },
      textEscaped: {
        t: On(SA),
        i: X.HIGH,
        l: (p) => ({ $: p[1], type: 'text' })
      },
      textMarked: {
        t: On(xA),
        i: X.LOW,
        l: us,
        h: (p, h, m) => r('mark', { key: m.k }, h(p.$, m))
      },
      textStrikethroughed: {
        t: On(wA),
        i: X.LOW,
        l: us,
        h: (p, h, m) => r('del', { key: m.k }, h(p.$, m))
      }
    };
  t.disableParsingRawHTML !== !0 &&
    ((u.htmlBlock = {
      t: za(Mc),
      i: X.HIGH,
      l(p, h, m) {
        const [, w] = p[3].match(kA),
          y = new RegExp(`^${w}`, 'gm'),
          b = p[3].replace(y, ''),
          v = ((E = b), LA.some((C) => C.test(E)) ? NA : Ul);
        var E;
        const x = p[1].toLowerCase(),
          S = jS.indexOf(x) !== -1;
        m.Z = m.Z || x === 'a';
        const A = S ? p[3] : v(h, b, m);
        return (m.Z = !1), { I: o(p[2]), $: A, G: S, H: S ? x : p[1] };
      },
      h: (p, h, m) => r(p.H, fr({ key: m.k }, p.I), p.G ? p.$ : h(p.$, m))
    }),
    (u.htmlSelfClosing = {
      t: za($c),
      i: X.HIGH,
      l: (p) => ({ I: o(p[2] || ''), H: p[1] }),
      h: (p, h, m) => r(p.H, fr({}, p.I, { key: m.k }))
    }));
  const c = (function (p) {
      let h = Object.keys(p);
      function m(w, y) {
        let b = [],
          v = '';
        for (; w; ) {
          let E = 0;
          for (; E < h.length; ) {
            const x = h[E],
              S = p[x],
              A = S.t(w, y, v);
            if (A) {
              const C = A[0];
              w = w.substring(C.length);
              const T = S.l(A, m, y);
              T.type == null && (T.type = x), b.push(T), (v = C);
              break;
            }
            E++;
          }
        }
        return b;
      }
      return (
        h.sort(function (w, y) {
          let b = p[w].i,
            v = p[y].i;
          return b !== v ? b - v : w < y ? -1 : 1;
        }),
        function (w, y) {
          return m(
            (function (b) {
              return b
                .replace(
                  KS,
                  `
`
                )
                .replace(QS, '')
                .replace(pA, '    ');
            })(w),
            y
          );
        }
      );
    })(u),
    d =
      ((g = (function (p) {
        return function (h, m, w) {
          return p[h.type].h(h, m, w);
        };
      })(u)),
      function p(h, m = {}) {
        if (Array.isArray(h)) {
          const w = m.k,
            y = [];
          let b = !1;
          for (let v = 0; v < h.length; v++) {
            m.k = v;
            const E = p(h[v], m),
              x = typeof E == 'string';
            x && b ? (y[y.length - 1] += E) : E !== null && y.push(E), (b = x);
          }
          return (m.k = w), y;
        }
        return g(h, p, m);
      });
  var g;
  const f = a(e);
  return i.length
    ? r(
        'div',
        null,
        f,
        r(
          'footer',
          { key: 'footer' },
          i.map(function (p) {
            return r(
              'div',
              { id: t.slugify(p.B), key: p.B },
              p.B,
              d(c(p.O, { _: !0 }))
            );
          })
        )
      )
    : f;
}
(function (e) {
  (e[(e.MAX = 0)] = 'MAX'),
    (e[(e.HIGH = 1)] = 'HIGH'),
    (e[(e.MED = 2)] = 'MED'),
    (e[(e.LOW = 3)] = 'LOW'),
    (e[(e.MIN = 4)] = 'MIN');
})(X || (X = {}));
const Eh = (e) => {
  let { children: t, options: n } = e,
    r = (function (a, o) {
      if (a == null) return {};
      var i,
        s,
        u = {},
        c = Object.keys(a);
      for (s = 0; s < c.length; s++)
        o.indexOf((i = c[s])) >= 0 || (u[i] = a[i]);
      return u;
    })(e, NS);
  return k.cloneElement(HA(t, n), r);
};
function ZA(e, t, n, r) {
  for (var a = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < a; )
    if (t(e[o], o, e)) return o;
  return -1;
}
var zA = ZA;
function VA(e) {
  return e !== e;
}
var UA = VA;
function qA(e, t, n) {
  for (var r = n - 1, a = e.length; ++r < a; ) if (e[r] === t) return r;
  return -1;
}
var WA = qA,
  GA = zA,
  KA = UA,
  YA = WA;
function XA(e, t, n) {
  return t === t ? YA(e, t, n) : GA(e, KA, n);
}
var QA = XA,
  JA = QA;
function eC(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && JA(e, t, 0) > -1;
}
var tC = eC;
function nC(e, t, n) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (n(t, e[r])) return !0;
  return !1;
}
var rC = nC;
function aC() {}
var oC = aC,
  ps = xy,
  lC = oC,
  iC = Zf,
  uC = 1 / 0,
  sC =
    ps && 1 / iC(new ps([, -0]))[1] == uC
      ? function (e) {
          return new ps(e);
        }
      : lC,
  cC = sC,
  dC = wy,
  pC = tC,
  fC = rC,
  mC = Sy,
  gC = cC,
  hC = Zf,
  yC = 200;
function vC(e, t, n) {
  var r = -1,
    a = pC,
    o = e.length,
    i = !0,
    s = [],
    u = s;
  if (n) (i = !1), (a = fC);
  else if (o >= yC) {
    var c = t ? null : gC(e);
    if (c) return hC(c);
    (i = !1), (a = mC), (u = new dC());
  } else u = t ? [] : s;
  e: for (; ++r < o; ) {
    var d = e[r],
      g = t ? t(d) : d;
    if (((d = n || d !== 0 ? d : 0), i && g === g)) {
      for (var f = u.length; f--; ) if (u[f] === g) continue e;
      t && u.push(g), s.push(d);
    } else a(u, g, n) || (u !== s && u.push(g), s.push(d));
  }
  return s;
}
var bC = vC,
  EC = bC;
function xC(e) {
  return e && e.length ? EC(e) : [];
}
var wC = xC;
const SC = ba(wC);
function AC(e, t) {
  for (
    var n = -1, r = e == null ? 0 : e.length;
    ++n < r && t(e[n], n, e) !== !1;

  );
  return e;
}
var CC = AC,
  kC = kd,
  _C = Pf;
function FC(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, i = t.length; ++o < i; ) {
    var s = t[o],
      u = r ? r(n[s], e[s], s, n, e) : void 0;
    u === void 0 && (u = e[s]), a ? _C(n, s, u) : kC(n, s, u);
  }
  return n;
}
var cu = FC,
  TC = cu,
  OC = zf;
function RC(e, t) {
  return e && TC(t, OC(t), e);
}
var DC = RC,
  LC = cu,
  MC = _d;
function $C(e, t) {
  return e && LC(t, MC(t), e);
}
var BC = $C,
  _i = { exports: {} };
_i.exports;
(function (e, t) {
  var n = Ay,
    r = t && !t.nodeType && t,
    a = r && !0 && e && !e.nodeType && e,
    o = a && a.exports === r,
    i = o ? n.Buffer : void 0,
    s = i ? i.allocUnsafe : void 0;
  function u(c, d) {
    if (d) return c.slice();
    var g = c.length,
      f = s ? s(g) : new c.constructor(g);
    return c.copy(f), f;
  }
  e.exports = u;
})(_i, _i.exports);
var IC = _i.exports;
function PC(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
var NC = PC,
  jC = cu,
  HC = jf;
function ZC(e, t) {
  return jC(e, HC(e), t);
}
var zC = ZC,
  VC = cu,
  UC = eh;
function qC(e, t) {
  return VC(e, UC(e), t);
}
var WC = qC,
  GC = Object.prototype,
  KC = GC.hasOwnProperty;
function YC(e) {
  var t = e.length,
    n = new e.constructor(t);
  return (
    t &&
      typeof e[0] == 'string' &&
      KC.call(e, 'index') &&
      ((n.index = e.index), (n.input = e.input)),
    n
  );
}
var XC = YC,
  cf = Cy;
function QC(e) {
  var t = new e.constructor(e.byteLength);
  return new cf(t).set(new cf(e)), t;
}
var Od = QC,
  JC = Od;
function ek(e, t) {
  var n = t ? JC(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var tk = ek,
  nk = /\w*$/;
function rk(e) {
  var t = new e.constructor(e.source, nk.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var ak = rk,
  df = ky,
  pf = df ? df.prototype : void 0,
  ff = pf ? pf.valueOf : void 0;
function ok(e) {
  return ff ? Object(ff.call(e)) : {};
}
var lk = ok,
  ik = Od;
function uk(e, t) {
  var n = t ? ik(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var sk = uk,
  ck = Od,
  dk = tk,
  pk = ak,
  fk = lk,
  mk = sk,
  gk = '[object Boolean]',
  hk = '[object Date]',
  yk = '[object Map]',
  vk = '[object Number]',
  bk = '[object RegExp]',
  Ek = '[object Set]',
  xk = '[object String]',
  wk = '[object Symbol]',
  Sk = '[object ArrayBuffer]',
  Ak = '[object DataView]',
  Ck = '[object Float32Array]',
  kk = '[object Float64Array]',
  _k = '[object Int8Array]',
  Fk = '[object Int16Array]',
  Tk = '[object Int32Array]',
  Ok = '[object Uint8Array]',
  Rk = '[object Uint8ClampedArray]',
  Dk = '[object Uint16Array]',
  Lk = '[object Uint32Array]';
function Mk(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Sk:
      return ck(e);
    case gk:
    case hk:
      return new r(+e);
    case Ak:
      return dk(e, n);
    case Ck:
    case kk:
    case _k:
    case Fk:
    case Tk:
    case Ok:
    case Rk:
    case Dk:
    case Lk:
      return mk(e, n);
    case yk:
      return new r();
    case vk:
    case xk:
      return new r(e);
    case bk:
      return pk(e);
    case Ek:
      return new r();
    case wk:
      return fk(e);
  }
}
var $k = Mk,
  Bk = Fi,
  mf = Object.create,
  Ik = (function () {
    function e() {}
    return function (t) {
      if (!Bk(t)) return {};
      if (mf) return mf(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })(),
  Pk = Ik,
  Nk = Pk,
  jk = Jg,
  Hk = Hf;
function Zk(e) {
  return typeof e.constructor == 'function' && !Hk(e) ? Nk(jk(e)) : {};
}
var zk = Zk,
  Vk = Vc,
  Uk = Vf,
  qk = '[object Map]';
function Wk(e) {
  return Uk(e) && Vk(e) == qk;
}
var Gk = Wk,
  Kk = Gk,
  Yk = qf,
  gf = Uf,
  hf = gf && gf.isMap,
  Xk = hf ? Yk(hf) : Kk,
  Qk = Xk,
  Jk = Vc,
  e_ = Vf,
  t_ = '[object Set]';
function n_(e) {
  return e_(e) && Jk(e) == t_;
}
var r_ = n_,
  a_ = r_,
  o_ = qf,
  yf = Uf,
  vf = yf && yf.isSet,
  l_ = vf ? o_(vf) : a_,
  i_ = l_,
  u_ = _y,
  s_ = CC,
  c_ = kd,
  d_ = DC,
  p_ = BC,
  f_ = IC,
  m_ = NC,
  g_ = zC,
  h_ = WC,
  y_ = Ty,
  v_ = th,
  b_ = Vc,
  E_ = XC,
  x_ = $k,
  w_ = zk,
  S_ = Oy,
  A_ = Fy,
  C_ = Qk,
  k_ = Fi,
  __ = i_,
  F_ = zf,
  T_ = _d,
  O_ = 1,
  R_ = 2,
  D_ = 4,
  xh = '[object Arguments]',
  L_ = '[object Array]',
  M_ = '[object Boolean]',
  $_ = '[object Date]',
  B_ = '[object Error]',
  wh = '[object Function]',
  I_ = '[object GeneratorFunction]',
  P_ = '[object Map]',
  N_ = '[object Number]',
  Sh = '[object Object]',
  j_ = '[object RegExp]',
  H_ = '[object Set]',
  Z_ = '[object String]',
  z_ = '[object Symbol]',
  V_ = '[object WeakMap]',
  U_ = '[object ArrayBuffer]',
  q_ = '[object DataView]',
  W_ = '[object Float32Array]',
  G_ = '[object Float64Array]',
  K_ = '[object Int8Array]',
  Y_ = '[object Int16Array]',
  X_ = '[object Int32Array]',
  Q_ = '[object Uint8Array]',
  J_ = '[object Uint8ClampedArray]',
  eF = '[object Uint16Array]',
  tF = '[object Uint32Array]',
  ae = {};
ae[xh] =
  ae[L_] =
  ae[U_] =
  ae[q_] =
  ae[M_] =
  ae[$_] =
  ae[W_] =
  ae[G_] =
  ae[K_] =
  ae[Y_] =
  ae[X_] =
  ae[P_] =
  ae[N_] =
  ae[Sh] =
  ae[j_] =
  ae[H_] =
  ae[Z_] =
  ae[z_] =
  ae[Q_] =
  ae[J_] =
  ae[eF] =
  ae[tF] =
    !0;
ae[B_] = ae[wh] = ae[V_] = !1;
function ql(e, t, n, r, a, o) {
  var i,
    s = t & O_,
    u = t & R_,
    c = t & D_;
  if ((n && (i = a ? n(e, r, a, o) : n(e)), i !== void 0)) return i;
  if (!k_(e)) return e;
  var d = S_(e);
  if (d) {
    if (((i = E_(e)), !s)) return m_(e, i);
  } else {
    var g = b_(e),
      f = g == wh || g == I_;
    if (A_(e)) return f_(e, s);
    if (g == Sh || g == xh || (f && !a)) {
      if (((i = u || f ? {} : w_(e)), !s))
        return u ? h_(e, p_(i, e)) : g_(e, d_(i, e));
    } else {
      if (!ae[g]) return a ? e : {};
      i = x_(e, g, s);
    }
  }
  o || (o = new u_());
  var p = o.get(e);
  if (p) return p;
  o.set(e, i),
    __(e)
      ? e.forEach(function (w) {
          i.add(ql(w, t, n, w, e, o));
        })
      : C_(e) &&
        e.forEach(function (w, y) {
          i.set(y, ql(w, t, n, y, e, o));
        });
  var h = c ? (u ? v_ : y_) : u ? T_ : F_,
    m = d ? void 0 : h(e);
  return (
    s_(m || e, function (w, y) {
      m && ((y = w), (w = e[y])), c_(i, y, ql(w, t, n, y, e, o));
    }),
    i
  );
}
var nF = ql,
  rF = nF,
  aF = 1,
  oF = 4;
function lF(e) {
  return rF(e, aF | oF);
}
var iF = lF;
const uF = ba(iF);
var sF = Object.create,
  Ah = Object.defineProperty,
  cF = Object.getOwnPropertyDescriptor,
  Ch = Object.getOwnPropertyNames,
  dF = Object.getPrototypeOf,
  pF = Object.prototype.hasOwnProperty,
  _t = (e, t) =>
    function () {
      return t || (0, e[Ch(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  fF = (e, t, n, r) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of Ch(t))
        !pF.call(e, a) &&
          a !== n &&
          Ah(e, a, {
            get: () => t[a],
            enumerable: !(r = cF(t, a)) || r.enumerable
          });
    return e;
  },
  Rd = (e, t, n) => (
    (n = e != null ? sF(dF(e)) : {}),
    fF(
      t || !e || !e.__esModule
        ? Ah(n, 'default', { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  mF = [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type'
  ],
  gF = ['detail'];
function hF(e) {
  const t = mF
    .filter((n) => e[n] !== void 0)
    .reduce((n, r) => ({ ...n, [r]: e[r] }), {});
  return (
    e instanceof CustomEvent &&
      gF
        .filter((n) => e[n] !== void 0)
        .forEach((n) => {
          t[n] = e[n];
        }),
    t
  );
}
var kh = _t({
    'node_modules/has-symbols/shams.js'(e, t) {
      t.exports = function () {
        if (
          typeof Symbol != 'function' ||
          typeof Object.getOwnPropertySymbols != 'function'
        )
          return !1;
        if (typeof Symbol.iterator == 'symbol') return !0;
        var r = {},
          a = Symbol('test'),
          o = Object(a);
        if (
          typeof a == 'string' ||
          Object.prototype.toString.call(a) !== '[object Symbol]' ||
          Object.prototype.toString.call(o) !== '[object Symbol]'
        )
          return !1;
        var i = 42;
        r[a] = i;
        for (a in r) return !1;
        if (
          (typeof Object.keys == 'function' && Object.keys(r).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' &&
            Object.getOwnPropertyNames(r).length !== 0)
        )
          return !1;
        var s = Object.getOwnPropertySymbols(r);
        if (
          s.length !== 1 ||
          s[0] !== a ||
          !Object.prototype.propertyIsEnumerable.call(r, a)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var u = Object.getOwnPropertyDescriptor(r, a);
          if (u.value !== i || u.enumerable !== !0) return !1;
        }
        return !0;
      };
    }
  }),
  _h = _t({
    'node_modules/has-symbols/index.js'(e, t) {
      var n = typeof Symbol < 'u' && Symbol,
        r = kh();
      t.exports = function () {
        return typeof n != 'function' ||
          typeof Symbol != 'function' ||
          typeof n('foo') != 'symbol' ||
          typeof Symbol('bar') != 'symbol'
          ? !1
          : r();
      };
    }
  }),
  yF = _t({
    'node_modules/function-bind/implementation.js'(e, t) {
      var n = 'Function.prototype.bind called on incompatible ',
        r = Array.prototype.slice,
        a = Object.prototype.toString,
        o = '[object Function]';
      t.exports = function (s) {
        var u = this;
        if (typeof u != 'function' || a.call(u) !== o)
          throw new TypeError(n + u);
        for (
          var c = r.call(arguments, 1),
            d,
            g = function () {
              if (this instanceof d) {
                var w = u.apply(this, c.concat(r.call(arguments)));
                return Object(w) === w ? w : this;
              } else return u.apply(s, c.concat(r.call(arguments)));
            },
            f = Math.max(0, u.length - c.length),
            p = [],
            h = 0;
          h < f;
          h++
        )
          p.push('$' + h);
        if (
          ((d = Function(
            'binder',
            'return function (' +
              p.join(',') +
              '){ return binder.apply(this,arguments); }'
          )(g)),
          u.prototype)
        ) {
          var m = function () {};
          (m.prototype = u.prototype),
            (d.prototype = new m()),
            (m.prototype = null);
        }
        return d;
      };
    }
  }),
  Dd = _t({
    'node_modules/function-bind/index.js'(e, t) {
      var n = yF();
      t.exports = Function.prototype.bind || n;
    }
  }),
  vF = _t({
    'node_modules/has/src/index.js'(e, t) {
      var n = Dd();
      t.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
    }
  }),
  Fh = _t({
    'node_modules/get-intrinsic/index.js'(e, t) {
      var n,
        r = SyntaxError,
        a = Function,
        o = TypeError,
        i = function (B) {
          try {
            return a('"use strict"; return (' + B + ').constructor;')();
          } catch {}
        },
        s = Object.getOwnPropertyDescriptor;
      if (s)
        try {
          s({}, '');
        } catch {
          s = null;
        }
      var u = function () {
          throw new o();
        },
        c = s
          ? (function () {
              try {
                return arguments.callee, u;
              } catch {
                try {
                  return s(arguments, 'callee').get;
                } catch {
                  return u;
                }
              }
            })()
          : u,
        d = _h()(),
        g =
          Object.getPrototypeOf ||
          function (B) {
            return B.__proto__;
          },
        f = {},
        p = typeof Uint8Array > 'u' ? n : g(Uint8Array),
        h = {
          '%AggregateError%': typeof AggregateError > 'u' ? n : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? n : ArrayBuffer,
          '%ArrayIteratorPrototype%': d ? g([][Symbol.iterator]()) : n,
          '%AsyncFromSyncIteratorPrototype%': n,
          '%AsyncFunction%': f,
          '%AsyncGenerator%': f,
          '%AsyncGeneratorFunction%': f,
          '%AsyncIteratorPrototype%': f,
          '%Atomics%': typeof Atomics > 'u' ? n : Atomics,
          '%BigInt%': typeof BigInt > 'u' ? n : BigInt,
          '%Boolean%': Boolean,
          '%DataView%': typeof DataView > 'u' ? n : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%eval%': eval,
          '%EvalError%': EvalError,
          '%Float32Array%': typeof Float32Array > 'u' ? n : Float32Array,
          '%Float64Array%': typeof Float64Array > 'u' ? n : Float64Array,
          '%FinalizationRegistry%':
            typeof FinalizationRegistry > 'u' ? n : FinalizationRegistry,
          '%Function%': a,
          '%GeneratorFunction%': f,
          '%Int8Array%': typeof Int8Array > 'u' ? n : Int8Array,
          '%Int16Array%': typeof Int16Array > 'u' ? n : Int16Array,
          '%Int32Array%': typeof Int32Array > 'u' ? n : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': d ? g(g([][Symbol.iterator]())) : n,
          '%JSON%': typeof JSON == 'object' ? JSON : n,
          '%Map%': typeof Map > 'u' ? n : Map,
          '%MapIteratorPrototype%':
            typeof Map > 'u' || !d ? n : g(new Map()[Symbol.iterator]()),
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': typeof Promise > 'u' ? n : Promise,
          '%Proxy%': typeof Proxy > 'u' ? n : Proxy,
          '%RangeError%': RangeError,
          '%ReferenceError%': ReferenceError,
          '%Reflect%': typeof Reflect > 'u' ? n : Reflect,
          '%RegExp%': RegExp,
          '%Set%': typeof Set > 'u' ? n : Set,
          '%SetIteratorPrototype%':
            typeof Set > 'u' || !d ? n : g(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%':
            typeof SharedArrayBuffer > 'u' ? n : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': d ? g(''[Symbol.iterator]()) : n,
          '%Symbol%': d ? Symbol : n,
          '%SyntaxError%': r,
          '%ThrowTypeError%': c,
          '%TypedArray%': p,
          '%TypeError%': o,
          '%Uint8Array%': typeof Uint8Array > 'u' ? n : Uint8Array,
          '%Uint8ClampedArray%':
            typeof Uint8ClampedArray > 'u' ? n : Uint8ClampedArray,
          '%Uint16Array%': typeof Uint16Array > 'u' ? n : Uint16Array,
          '%Uint32Array%': typeof Uint32Array > 'u' ? n : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': typeof WeakMap > 'u' ? n : WeakMap,
          '%WeakRef%': typeof WeakRef > 'u' ? n : WeakRef,
          '%WeakSet%': typeof WeakSet > 'u' ? n : WeakSet
        },
        m = function B(M) {
          var Z;
          if (M === '%AsyncFunction%') Z = i('async function () {}');
          else if (M === '%GeneratorFunction%') Z = i('function* () {}');
          else if (M === '%AsyncGeneratorFunction%')
            Z = i('async function* () {}');
          else if (M === '%AsyncGenerator%') {
            var I = B('%AsyncGeneratorFunction%');
            I && (Z = I.prototype);
          } else if (M === '%AsyncIteratorPrototype%') {
            var P = B('%AsyncGenerator%');
            P && (Z = g(P.prototype));
          }
          return (h[M] = Z), Z;
        },
        w = {
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': [
            'AsyncGeneratorFunction',
            'prototype',
            'prototype'
          ],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': [
            'GeneratorFunction',
            'prototype',
            'prototype'
          ],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype']
        },
        y = Dd(),
        b = vF(),
        v = y.call(Function.call, Array.prototype.concat),
        E = y.call(Function.apply, Array.prototype.splice),
        x = y.call(Function.call, String.prototype.replace),
        S = y.call(Function.call, String.prototype.slice),
        A = y.call(Function.call, RegExp.prototype.exec),
        C =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        T = /\\(\\)?/g,
        _ = function (M) {
          var Z = S(M, 0, 1),
            I = S(M, -1);
          if (Z === '%' && I !== '%')
            throw new r('invalid intrinsic syntax, expected closing `%`');
          if (I === '%' && Z !== '%')
            throw new r('invalid intrinsic syntax, expected opening `%`');
          var P = [];
          return (
            x(M, C, function (z, R, D, $) {
              P[P.length] = D ? x($, T, '$1') : R || z;
            }),
            P
          );
        },
        O = function (M, Z) {
          var I = M,
            P;
          if ((b(w, I) && ((P = w[I]), (I = '%' + P[0] + '%')), b(h, I))) {
            var z = h[I];
            if ((z === f && (z = m(I)), typeof z > 'u' && !Z))
              throw new o(
                'intrinsic ' +
                  M +
                  ' exists, but is not available. Please file an issue!'
              );
            return { alias: P, name: I, value: z };
          }
          throw new r('intrinsic ' + M + ' does not exist!');
        };
      t.exports = function (M, Z) {
        if (typeof M != 'string' || M.length === 0)
          throw new o('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && typeof Z != 'boolean')
          throw new o('"allowMissing" argument must be a boolean');
        if (A(/^%?[^%]*%?$/, M) === null)
          throw new r(
            '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
          );
        var I = _(M),
          P = I.length > 0 ? I[0] : '',
          z = O('%' + P + '%', Z),
          R = z.name,
          D = z.value,
          $ = !1,
          V = z.alias;
        V && ((P = V[0]), E(I, v([0, 1], V)));
        for (var G = 1, Q = !0; G < I.length; G += 1) {
          var J = I[G],
            j = S(J, 0, 1),
            W = S(J, -1);
          if (
            (j === '"' ||
              j === "'" ||
              j === '`' ||
              W === '"' ||
              W === "'" ||
              W === '`') &&
            j !== W
          )
            throw new r('property names with quotes must have matching quotes');
          if (
            ((J === 'constructor' || !Q) && ($ = !0),
            (P += '.' + J),
            (R = '%' + P + '%'),
            b(h, R))
          )
            D = h[R];
          else if (D != null) {
            if (!(J in D)) {
              if (!Z)
                throw new o(
                  'base intrinsic for ' +
                    M +
                    ' exists, but the property is not available.'
                );
              return;
            }
            if (s && G + 1 >= I.length) {
              var K = s(D, J);
              (Q = !!K),
                Q && 'get' in K && !('originalValue' in K.get)
                  ? (D = K.get)
                  : (D = D[J]);
            } else (Q = b(D, J)), (D = D[J]);
            Q && !$ && (h[R] = D);
          }
        }
        return D;
      };
    }
  }),
  bF = _t({
    'node_modules/call-bind/index.js'(e, t) {
      var n = Dd(),
        r = Fh(),
        a = r('%Function.prototype.apply%'),
        o = r('%Function.prototype.call%'),
        i = r('%Reflect.apply%', !0) || n.call(o, a),
        s = r('%Object.getOwnPropertyDescriptor%', !0),
        u = r('%Object.defineProperty%', !0),
        c = r('%Math.max%');
      if (u)
        try {
          u({}, 'a', { value: 1 });
        } catch {
          u = null;
        }
      t.exports = function (f) {
        var p = i(n, o, arguments);
        if (s && u) {
          var h = s(p, 'length');
          h.configurable &&
            u(p, 'length', {
              value: 1 + c(0, f.length - (arguments.length - 1))
            });
        }
        return p;
      };
      var d = function () {
        return i(n, a, arguments);
      };
      u ? u(t.exports, 'apply', { value: d }) : (t.exports.apply = d);
    }
  }),
  EF = _t({
    'node_modules/call-bind/callBound.js'(e, t) {
      var n = Fh(),
        r = bF(),
        a = r(n('String.prototype.indexOf'));
      t.exports = function (i, s) {
        var u = n(i, !!s);
        return typeof u == 'function' && a(i, '.prototype.') > -1 ? r(u) : u;
      };
    }
  }),
  xF = _t({
    'node_modules/has-tostringtag/shams.js'(e, t) {
      var n = kh();
      t.exports = function () {
        return n() && !!Symbol.toStringTag;
      };
    }
  }),
  wF = _t({
    'node_modules/is-regex/index.js'(e, t) {
      var n = EF(),
        r = xF()(),
        a,
        o,
        i,
        s;
      r &&
        ((a = n('Object.prototype.hasOwnProperty')),
        (o = n('RegExp.prototype.exec')),
        (i = {}),
        (u = function () {
          throw i;
        }),
        (s = { toString: u, valueOf: u }),
        typeof Symbol.toPrimitive == 'symbol' && (s[Symbol.toPrimitive] = u));
      var u,
        c = n('Object.prototype.toString'),
        d = Object.getOwnPropertyDescriptor,
        g = '[object RegExp]';
      t.exports = r
        ? function (p) {
            if (!p || typeof p != 'object') return !1;
            var h = d(p, 'lastIndex'),
              m = h && a(h, 'value');
            if (!m) return !1;
            try {
              o(p, s);
            } catch (w) {
              return w === i;
            }
          }
        : function (p) {
            return !p || (typeof p != 'object' && typeof p != 'function')
              ? !1
              : c(p) === g;
          };
    }
  }),
  SF = _t({
    'node_modules/is-function/index.js'(e, t) {
      t.exports = r;
      var n = Object.prototype.toString;
      function r(a) {
        if (!a) return !1;
        var o = n.call(a);
        return (
          o === '[object Function]' ||
          (typeof a == 'function' && o !== '[object RegExp]') ||
          (typeof window < 'u' &&
            (a === window.setTimeout ||
              a === window.alert ||
              a === window.confirm ||
              a === window.prompt))
        );
      }
    }
  }),
  AF = _t({
    'node_modules/is-symbol/index.js'(e, t) {
      var n = Object.prototype.toString,
        r = _h()();
      r
        ? ((a = Symbol.prototype.toString),
          (o = /^Symbol\(.*\)$/),
          (i = function (u) {
            return typeof u.valueOf() != 'symbol' ? !1 : o.test(a.call(u));
          }),
          (t.exports = function (u) {
            if (typeof u == 'symbol') return !0;
            if (n.call(u) !== '[object Symbol]') return !1;
            try {
              return i(u);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (u) {
            return !1;
          });
      var a, o, i;
    }
  }),
  CF = Rd(wF()),
  kF = Rd(SF()),
  _F = Rd(AF());
function FF(e) {
  return e != null && typeof e == 'object' && Array.isArray(e) === !1;
}
var TF =
    typeof global == 'object' && global && global.Object === Object && global,
  OF = TF,
  RF = typeof self == 'object' && self && self.Object === Object && self,
  DF = OF || RF || Function('return this')(),
  Ld = DF,
  LF = Ld.Symbol,
  va = LF,
  Th = Object.prototype,
  MF = Th.hasOwnProperty,
  $F = Th.toString,
  Va = va ? va.toStringTag : void 0;
function BF(e) {
  var t = MF.call(e, Va),
    n = e[Va];
  try {
    e[Va] = void 0;
    var r = !0;
  } catch {}
  var a = $F.call(e);
  return r && (t ? (e[Va] = n) : delete e[Va]), a;
}
var IF = BF,
  PF = Object.prototype,
  NF = PF.toString;
function jF(e) {
  return NF.call(e);
}
var HF = jF,
  ZF = '[object Null]',
  zF = '[object Undefined]',
  bf = va ? va.toStringTag : void 0;
function VF(e) {
  return e == null
    ? e === void 0
      ? zF
      : ZF
    : bf && bf in Object(e)
    ? IF(e)
    : HF(e);
}
var UF = VF,
  Ef = va ? va.prototype : void 0;
Ef && Ef.toString;
function qF(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var Oh = qF,
  WF = '[object AsyncFunction]',
  GF = '[object Function]',
  KF = '[object GeneratorFunction]',
  YF = '[object Proxy]';
function XF(e) {
  if (!Oh(e)) return !1;
  var t = UF(e);
  return t == GF || t == KF || t == WF || t == YF;
}
var QF = XF,
  JF = Ld['__core-js_shared__'],
  fs = JF,
  xf = (function () {
    var e = /[^.]+$/.exec((fs && fs.keys && fs.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function eT(e) {
  return !!xf && xf in e;
}
var tT = eT,
  nT = Function.prototype,
  rT = nT.toString;
function aT(e) {
  if (e != null) {
    try {
      return rT.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var oT = aT,
  lT = /[\\^$.*+?()[\]{}|]/g,
  iT = /^\[object .+?Constructor\]$/,
  uT = Function.prototype,
  sT = Object.prototype,
  cT = uT.toString,
  dT = sT.hasOwnProperty,
  pT = RegExp(
    '^' +
      cT
        .call(dT)
        .replace(lT, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
function fT(e) {
  if (!Oh(e) || tT(e)) return !1;
  var t = QF(e) ? pT : iT;
  return t.test(oT(e));
}
var mT = fT;
function gT(e, t) {
  return e == null ? void 0 : e[t];
}
var hT = gT;
function yT(e, t) {
  var n = hT(e, t);
  return mT(n) ? n : void 0;
}
var Rh = yT;
function vT(e, t) {
  return e === t || (e !== e && t !== t);
}
var bT = vT,
  ET = Rh(Object, 'create'),
  jo = ET;
function xT() {
  (this.__data__ = jo ? jo(null) : {}), (this.size = 0);
}
var wT = xT;
function ST(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var AT = ST,
  CT = '__lodash_hash_undefined__',
  kT = Object.prototype,
  _T = kT.hasOwnProperty;
function FT(e) {
  var t = this.__data__;
  if (jo) {
    var n = t[e];
    return n === CT ? void 0 : n;
  }
  return _T.call(t, e) ? t[e] : void 0;
}
var TT = FT,
  OT = Object.prototype,
  RT = OT.hasOwnProperty;
function DT(e) {
  var t = this.__data__;
  return jo ? t[e] !== void 0 : RT.call(t, e);
}
var LT = DT,
  MT = '__lodash_hash_undefined__';
function $T(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = jo && t === void 0 ? MT : t),
    this
  );
}
var BT = $T;
function ka(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ka.prototype.clear = wT;
ka.prototype.delete = AT;
ka.prototype.get = TT;
ka.prototype.has = LT;
ka.prototype.set = BT;
var wf = ka;
function IT() {
  (this.__data__ = []), (this.size = 0);
}
var PT = IT;
function NT(e, t) {
  for (var n = e.length; n--; ) if (bT(e[n][0], t)) return n;
  return -1;
}
var du = NT,
  jT = Array.prototype,
  HT = jT.splice;
function ZT(e) {
  var t = this.__data__,
    n = du(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : HT.call(t, n, 1), --this.size, !0;
}
var zT = ZT;
function VT(e) {
  var t = this.__data__,
    n = du(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var UT = VT;
function qT(e) {
  return du(this.__data__, e) > -1;
}
var WT = qT;
function GT(e, t) {
  var n = this.__data__,
    r = du(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var KT = GT;
function _a(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_a.prototype.clear = PT;
_a.prototype.delete = zT;
_a.prototype.get = UT;
_a.prototype.has = WT;
_a.prototype.set = KT;
var YT = _a,
  XT = Rh(Ld, 'Map'),
  QT = XT;
function JT() {
  (this.size = 0),
    (this.__data__ = {
      hash: new wf(),
      map: new (QT || YT)(),
      string: new wf()
    });
}
var eO = JT;
function tO(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
var nO = tO;
function rO(e, t) {
  var n = e.__data__;
  return nO(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
}
var pu = rO;
function aO(e) {
  var t = pu(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var oO = aO;
function lO(e) {
  return pu(this, e).get(e);
}
var iO = lO;
function uO(e) {
  return pu(this, e).has(e);
}
var sO = uO;
function cO(e, t) {
  var n = pu(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var dO = cO;
function Fa(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Fa.prototype.clear = eO;
Fa.prototype.delete = oO;
Fa.prototype.get = iO;
Fa.prototype.has = sO;
Fa.prototype.set = dO;
var Dh = Fa,
  pO = 'Expected a function';
function Md(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(pO);
  var n = function () {
    var r = arguments,
      a = t ? t.apply(this, r) : r[0],
      o = n.cache;
    if (o.has(a)) return o.get(a);
    var i = e.apply(this, r);
    return (n.cache = o.set(a, i) || o), i;
  };
  return (n.cache = new (Md.Cache || Dh)()), n;
}
Md.Cache = Dh;
var fO = Md,
  mO = 500;
function gO(e) {
  var t = fO(e, function (r) {
      return n.size === mO && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var hO = gO,
  yO =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  vO = /\\(\\)?/g;
hO(function (e) {
  var t = [];
  return (
    e.charCodeAt(0) === 46 && t.push(''),
    e.replace(yO, function (n, r, a, o) {
      t.push(a ? o.replace(vO, '$1') : r || n);
    }),
    t
  );
});
var bO = FF,
  EO = (e) => {
    let t = null,
      n = !1,
      r = !1,
      a = !1,
      o = '';
    if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
      for (let i = 0; i < e.length; i += 1)
        !t && !n && !r && !a
          ? e[i] === '"' || e[i] === "'" || e[i] === '`'
            ? (t = e[i])
            : e[i] === '/' && e[i + 1] === '*'
            ? (n = !0)
            : e[i] === '/' && e[i + 1] === '/'
            ? (r = !0)
            : e[i] === '/' && e[i + 1] !== '/' && (a = !0)
          : (t &&
              ((e[i] === t && e[i - 1] !== '\\') ||
                (e[i] ===
                  `
` &&
                  t !== '`')) &&
              (t = null),
            a &&
              ((e[i] === '/' && e[i - 1] !== '\\') ||
                e[i] ===
                  `
`) &&
              (a = !1),
            n && e[i - 1] === '/' && e[i - 2] === '*' && (n = !1),
            r &&
              e[i] ===
                `
` &&
              (r = !1)),
          !n && !r && (o += e[i]);
    else o = e;
    return o;
  },
  xO = Tr(1e4)((e) => EO(e).replace(/\n\s*/g, '').trim()),
  wO = function (t, n) {
    const r = n.slice(0, n.indexOf('{')),
      a = n.slice(n.indexOf('{'));
    if (r.includes('=>') || r.includes('function')) return n;
    let o = r;
    return (o = o.replace(t, 'function')), o + a;
  },
  SO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function Lh(e) {
  if (!bO(e)) return e;
  let t = e,
    n = !1;
  return (
    typeof Event < 'u' && e instanceof Event && ((t = hF(t)), (n = !0)),
    (t = Object.keys(t).reduce((r, a) => {
      try {
        t[a] && t[a].toJSON, (r[a] = t[a]);
      } catch {
        n = !0;
      }
      return r;
    }, {})),
    n ? t : e
  );
}
var AO = function (t) {
    let n, r, a, o;
    return function (s, u) {
      try {
        if (s === '')
          return (
            (o = []), (n = new Map([[u, '[]']])), (r = new Map()), (a = []), u
          );
        const c = r.get(this) || this;
        for (; a.length && c !== a[0]; ) a.shift(), o.pop();
        if (typeof u == 'boolean') return u;
        if (u === void 0) return t.allowUndefined ? '_undefined_' : void 0;
        if (u === null) return null;
        if (typeof u == 'number')
          return u === -1 / 0
            ? '_-Infinity_'
            : u === 1 / 0
            ? '_Infinity_'
            : Number.isNaN(u)
            ? '_NaN_'
            : u;
        if (typeof u == 'bigint') return `_bigint_${u.toString()}`;
        if (typeof u == 'string')
          return SO.test(u) ? (t.allowDate ? `_date_${u}` : void 0) : u;
        if ((0, CF.default)(u))
          return t.allowRegExp ? `_regexp_${u.flags}|${u.source}` : void 0;
        if ((0, kF.default)(u)) {
          if (!t.allowFunction) return;
          const { name: g } = u,
            f = u.toString();
          return f.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          )
            ? `_function_${g}|${(() => {}).toString()}`
            : `_function_${g}|${xO(wO(s, f))}`;
        }
        if ((0, _F.default)(u)) {
          if (!t.allowSymbol) return;
          const g = Symbol.keyFor(u);
          return g !== void 0
            ? `_gsymbol_${g}`
            : `_symbol_${u.toString().slice(7, -1)}`;
        }
        if (a.length >= t.maxDepth)
          return Array.isArray(u) ? `[Array(${u.length})]` : '[Object]';
        if (u === this) return `_duplicate_${JSON.stringify(o)}`;
        if (
          u.constructor &&
          u.constructor.name &&
          u.constructor.name !== 'Object' &&
          !Array.isArray(u) &&
          !t.allowClass
        )
          return;
        const d = n.get(u);
        if (!d) {
          const g = Array.isArray(u) ? u : Lh(u);
          if (
            u.constructor &&
            u.constructor.name &&
            u.constructor.name !== 'Object' &&
            !Array.isArray(u) &&
            t.allowClass
          )
            try {
              Object.assign(g, { '_constructor-name_': u.constructor.name });
            } catch {}
          return (
            o.push(s),
            a.unshift(g),
            n.set(u, JSON.stringify(o)),
            u !== g && r.set(u, g),
            g
          );
        }
        return `_duplicate_${d}`;
      } catch {
        return;
      }
    };
  },
  CO = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0
  },
  kO = (e, t = {}) => {
    const n = { ...CO, ...t };
    return JSON.stringify(Lh(e), AO(n), t.space);
  };
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ /**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ const {
    deprecate: Oe,
    once: _O,
    logger: $d
  } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    filterArgTypes: FO,
    composeConfigs: jL,
    Preview: HL,
    DocsContext: ZL
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  {
    STORY_ARGS_UPDATED: Sf,
    UPDATE_STORY_ARGS: TO,
    RESET_STORY_ARGS: OO,
    GLOBALS_UPDATED: Af,
    NAVIGATE_URL: RO
  } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var DO = F.div(me, ({ theme: e }) => ({
    backgroundColor:
      e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
    borderRadius: e.appBorderRadius,
    border: `1px dashed ${e.appBorderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: '25px 0 40px',
    color: fe(0.3, e.color.defaultText),
    fontSize: e.typography.size.s2
  })),
  Bc = (e) =>
    l.createElement(DO, { ...e, className: 'docblock-emptyblock sb-unstyled' }),
  LO = F(vd)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: '19px',
    margin: '25px 0 40px',
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    'pre.prismjs': { padding: 20, background: 'inherit' }
  })),
  MO = F.div(({ theme: e }) => ({
    background: e.background.content,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.appBorderColor}`,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    margin: '25px 0 40px',
    padding: '20px 20px 20px 22px'
  })),
  wl = F.div(({ theme: e }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: '60%',
    [`&:first-child${xc}`]: { margin: 0 }
  })),
  $O = () =>
    l.createElement(
      MO,
      null,
      l.createElement(wl, null),
      l.createElement(wl, { style: { width: '80%' } }),
      l.createElement(wl, { style: { width: '30%' } }),
      l.createElement(wl, { style: { width: '80%' } })
    ),
  Bd = ({
    isLoading: e,
    error: t,
    language: n,
    code: r,
    dark: a,
    format: o,
    ...i
  }) => {
    if (e) return l.createElement($O, null);
    if (t) return l.createElement(Bc, null, t);
    let s = l.createElement(
      LO,
      {
        bordered: !0,
        copyable: !0,
        format: o,
        language: n,
        className: 'docblock-source sb-unstyled',
        ...i
      },
      r
    );
    if (typeof a > 'u') return s;
    let u = a ? hc.dark : hc.light;
    return l.createElement(Cm, { theme: Ec(u) }, s);
  };
Bd.defaultProps = { format: !1 };
var Ee = (e) =>
    `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
  Id = 600,
  BO = F.h1(me, ({ theme: e }) => ({
    color: e.color.defaultText,
    fontSize: e.typography.size.m3,
    fontWeight: e.typography.weight.bold,
    lineHeight: '32px',
    [`@media (min-width: ${Id}px)`]: {
      fontSize: e.typography.size.l1,
      lineHeight: '36px',
      marginBottom: '16px'
    }
  })),
  IO = F.h2(me, ({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s3,
    lineHeight: '20px',
    borderBottom: 'none',
    marginBottom: 15,
    [`@media (min-width: ${Id}px)`]: {
      fontSize: e.typography.size.m1,
      lineHeight: '28px',
      marginBottom: 24
    },
    color: fe(0.25, e.color.defaultText)
  })),
  PO = F.div(({ theme: e }) => {
    let t = {
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s3,
        margin: 0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        WebkitOverflowScrolling: 'touch'
      },
      n = {
        margin: '20px 0 8px',
        padding: 0,
        cursor: 'text',
        position: 'relative',
        color: e.color.defaultText,
        '&:first-of-type': { marginTop: 0, paddingTop: 0 },
        '&:hover a.anchor': { textDecoration: 'none' },
        '& code': { fontSize: 'inherit' }
      },
      r = {
        lineHeight: 1,
        margin: '0 2px',
        padding: '3px 5px',
        whiteSpace: 'nowrap',
        borderRadius: 3,
        fontSize: e.typography.size.s2 - 1,
        border:
          e.base === 'light'
            ? `1px solid ${e.color.mediumlight}`
            : `1px solid ${e.color.darker}`,
        color:
          e.base === 'light'
            ? fe(0.1, e.color.defaultText)
            : fe(0.3, e.color.defaultText),
        backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border
      };
    return {
      maxWidth: 1e3,
      width: '100%',
      [Ee('a')]: {
        ...t,
        fontSize: 'inherit',
        lineHeight: '24px',
        color: e.color.secondary,
        textDecoration: 'none',
        '&.absent': { color: '#cc0000' },
        '&.anchor': {
          display: 'block',
          paddingLeft: 30,
          marginLeft: -30,
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0
        }
      },
      [Ee('blockquote')]: {
        ...t,
        margin: '16px 0',
        borderLeft: `4px solid ${e.color.medium}`,
        padding: '0 15px',
        color: e.color.dark,
        '& > :first-of-type': { marginTop: 0 },
        '& > :last-child': { marginBottom: 0 }
      },
      [Ee('div')]: t,
      [Ee('dl')]: {
        ...t,
        margin: '16px 0',
        padding: 0,
        '& dt': {
          fontSize: '14px',
          fontWeight: 'bold',
          fontStyle: 'italic',
          padding: 0,
          margin: '16px 0 4px'
        },
        '& dt:first-of-type': { padding: 0 },
        '& dt > :first-of-type': { marginTop: 0 },
        '& dt > :last-child': { marginBottom: 0 },
        '& dd': { margin: '0 0 16px', padding: '0 15px' },
        '& dd > :first-of-type': { marginTop: 0 },
        '& dd > :last-child': { marginBottom: 0 }
      },
      [Ee('h1')]: {
        ...t,
        ...n,
        fontSize: `${e.typography.size.l1}px`,
        fontWeight: e.typography.weight.bold
      },
      [Ee('h2')]: {
        ...t,
        ...n,
        fontSize: `${e.typography.size.m2}px`,
        paddingBottom: 4,
        borderBottom: `1px solid ${e.appBorderColor}`
      },
      [Ee('h3')]: {
        ...t,
        ...n,
        fontSize: `${e.typography.size.m1}px`,
        fontWeight: e.typography.weight.bold
      },
      [Ee('h4')]: { ...t, ...n, fontSize: `${e.typography.size.s3}px` },
      [Ee('h5')]: { ...t, ...n, fontSize: `${e.typography.size.s2}px` },
      [Ee('h6')]: {
        ...t,
        ...n,
        fontSize: `${e.typography.size.s2}px`,
        color: e.color.dark
      },
      [Ee('hr')]: {
        border: '0 none',
        borderTop: `1px solid ${e.appBorderColor}`,
        height: 4,
        padding: 0
      },
      [Ee('img')]: { maxWidth: '100%' },
      [Ee('li')]: {
        ...t,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        lineHeight: '24px',
        '& + li': { marginTop: '.25em' },
        '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
        '& code': r
      },
      [Ee('ol')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': { marginTop: 0 },
        '& :last-child': { marginBottom: 0 }
      },
      [Ee('p')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        color: e.color.defaultText,
        '& code': r
      },
      [Ee('pre')]: {
        ...t,
        fontFamily: e.typography.fonts.mono,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: '18px',
        padding: '11px 1rem',
        whiteSpace: 'pre-wrap',
        color: 'inherit',
        borderRadius: 3,
        margin: '1rem 0',
        '&:not(.prismjs)': {
          background: 'transparent',
          border: 'none',
          borderRadius: 0,
          padding: 0,
          margin: 0
        },
        '& pre, &.prismjs': {
          padding: 15,
          margin: 0,
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          fontSize: '13px',
          lineHeight: '19px',
          code: { color: 'inherit', fontSize: 'inherit' }
        },
        '& code': { whiteSpace: 'pre' },
        '& code, & tt': { border: 'none' }
      },
      [Ee('span')]: {
        ...t,
        '&.frame': {
          display: 'block',
          overflow: 'hidden',
          '& > span': {
            border: `1px solid ${e.color.medium}`,
            display: 'block',
            float: 'left',
            overflow: 'hidden',
            margin: '13px 0 0',
            padding: 7,
            width: 'auto'
          },
          '& span img': { display: 'block', float: 'left' },
          '& span span': {
            clear: 'both',
            color: e.color.darkest,
            display: 'block',
            padding: '5px 0 0'
          }
        },
        '&.align-center': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px auto 0',
            textAlign: 'center'
          },
          '& span img': { margin: '0 auto', textAlign: 'center' }
        },
        '&.align-right': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px 0 0',
            textAlign: 'right'
          },
          '& span img': { margin: 0, textAlign: 'right' }
        },
        '&.float-left': {
          display: 'block',
          marginRight: 13,
          overflow: 'hidden',
          float: 'left',
          '& span': { margin: '13px 0 0' }
        },
        '&.float-right': {
          display: 'block',
          marginLeft: 13,
          overflow: 'hidden',
          float: 'right',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px auto 0',
            textAlign: 'right'
          }
        }
      },
      [Ee('table')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        padding: 0,
        borderCollapse: 'collapse',
        '& tr': {
          borderTop: `1px solid ${e.appBorderColor}`,
          backgroundColor: e.appContentBg,
          margin: 0,
          padding: 0
        },
        '& tr:nth-of-type(2n)': {
          backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter
        },
        '& tr th': {
          fontWeight: 'bold',
          color: e.color.defaultText,
          border: `1px solid ${e.appBorderColor}`,
          margin: 0,
          padding: '6px 13px'
        },
        '& tr td': {
          border: `1px solid ${e.appBorderColor}`,
          color: e.color.defaultText,
          margin: 0,
          padding: '6px 13px'
        },
        '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
        '& tr th :last-child, & tr td :last-child': { marginBottom: 0 }
      },
      [Ee('ul')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': { marginTop: 0 },
        '& :last-child': { marginBottom: 0 },
        listStyle: 'disc'
      }
    };
  }),
  NO = F.div(({ theme: e }) => ({
    background: e.background.content,
    display: 'flex',
    justifyContent: 'center',
    padding: '4rem 20px',
    minHeight: '100vh',
    boxSizing: 'border-box',
    [`@media (min-width: ${Id}px)`]: {}
  })),
  jO = ({ children: e }) =>
    l.createElement(
      NO,
      { className: 'sbdocs sbdocs-wrapper' },
      l.createElement(PO, { className: 'sbdocs sbdocs-content' }, e)
    ),
  fu = (e) => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    border: `1px solid ${e.appBorderColor}`
  }),
  HO = ({ zoom: e, resetZoom: t }) =>
    l.createElement(
      l.Fragment,
      null,
      l.createElement(
        Er,
        {
          key: 'zoomin',
          onClick: (n) => {
            n.preventDefault(), e(0.8);
          },
          title: 'Zoom in'
        },
        l.createElement(rt, { icon: 'zoom' })
      ),
      l.createElement(
        Er,
        {
          key: 'zoomout',
          onClick: (n) => {
            n.preventDefault(), e(1.25);
          },
          title: 'Zoom out'
        },
        l.createElement(rt, { icon: 'zoomout' })
      ),
      l.createElement(
        Er,
        {
          key: 'zoomreset',
          onClick: (n) => {
            n.preventDefault(), t();
          },
          title: 'Reset zoom'
        },
        l.createElement(rt, { icon: 'zoomreset' })
      )
    ),
  ZO = F(ou)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    transition: 'transform .2s linear'
  }),
  zO = ({
    isLoading: e,
    storyId: t,
    baseUrl: n,
    zoom: r,
    resetZoom: a,
    ...o
  }) =>
    l.createElement(
      ZO,
      { ...o },
      l.createElement(
        k.Fragment,
        { key: 'left' },
        e
          ? [1, 2, 3].map((i) => l.createElement(zg, { key: i }))
          : l.createElement(HO, { zoom: r, resetZoom: a })
      )
    ),
  Mh = k.createContext({ scale: 1 }),
  { window: VO } = Pe,
  UO = class extends k.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { id: e } = this.props;
      this.iframe = VO.document.getElementById(e);
    }
    shouldComponentUpdate(e) {
      let { scale: t } = e;
      return (
        t !== this.props.scale &&
          this.setIframeBodyStyle({
            width: `${t * 100}%`,
            height: `${t * 100}%`,
            transform: `scale(${1 / t})`,
            transformOrigin: 'top left'
          }),
        !1
      );
    }
    setIframeBodyStyle(e) {
      return Object.assign(this.iframe.contentDocument.body.style, e);
    }
    render() {
      let {
        id: e,
        title: t,
        src: n,
        allowFullScreen: r,
        scale: a,
        ...o
      } = this.props;
      return l.createElement('iframe', {
        id: e,
        title: t,
        src: n,
        ...(r ? { allow: 'fullscreen' } : {}),
        loading: 'lazy',
        ...o
      });
    }
  },
  { PREVIEW_URL: qO } = Pe,
  WO = qO || 'iframe.html',
  Ic = ({ story: e, primary: t }) => `story--${e.id}${t ? '--primary' : ''}`,
  GO = (e) => {
    let t = k.useRef(),
      [n, r] = k.useState(!0),
      [a, o] = k.useState(),
      {
        story: i,
        height: s,
        autoplay: u,
        forceInitialArgs: c,
        renderStoryToElement: d
      } = e;
    k.useEffect(() => {
      if (!(i && t.current)) return () => {};
      let f = t.current,
        p = d(
          i,
          f,
          {
            showMain: () => {},
            showError: ({ title: h, description: m }) =>
              o(new Error(`${h} - ${m}`)),
            showException: (h) => o(h)
          },
          { autoplay: u, forceInitialArgs: c }
        );
      return (
        r(!1),
        () => {
          Promise.resolve().then(() => p());
        }
      );
    }, [u, d, i]);
    let g = '<span></span>';
    return a
      ? l.createElement('pre', null, l.createElement(Mg, { error: a }))
      : l.createElement(
          l.Fragment,
          null,
          s
            ? l.createElement(
                'style',
                null,
                `#${Ic(
                  e
                )} { min-height: ${s}; transform: translateZ(0); overflow: auto }`
              )
            : null,
          n && l.createElement(Pd, null),
          l.createElement('div', {
            ref: t,
            id: `${Ic(e)}-inner`,
            'data-name': i.name,
            dangerouslySetInnerHTML: { __html: g }
          })
        );
  },
  KO = ({ story: e, height: t = '500px' }) =>
    l.createElement(
      'div',
      { style: { width: '100%', height: t } },
      l.createElement(Mh.Consumer, null, ({ scale: n }) =>
        l.createElement(UO, {
          key: 'iframe',
          id: `iframe--${e.id}`,
          title: e.name,
          src: Wg(WO, e.id, { viewMode: 'story' }),
          allowFullScreen: !0,
          scale: n,
          style: { width: '100%', height: '100%', border: '0 none' }
        })
      )
    ),
  YO = (e) => {
    let { inline: t } = e;
    return l.createElement(
      'div',
      {
        id: Ic(e),
        className: 'sb-story sb-unstyled',
        'data-story-block': 'true'
      },
      t ? l.createElement(GO, { ...e }) : l.createElement(KO, { ...e })
    );
  },
  Pd = () => l.createElement(qg, null),
  XO = F.div(
    ({ isColumn: e, columns: t, layout: n }) => ({
      display: e || !t ? 'block' : 'flex',
      position: 'relative',
      flexWrap: 'wrap',
      overflow: 'auto',
      flexDirection: e ? 'column' : 'row',
      '& .innerZoomElementWrapper > *': e
        ? {
            width: n !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
            display: 'block'
          }
        : {
            maxWidth: n !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
            display: 'inline-block'
          }
    }),
    ({ layout: e = 'padded' }) =>
      e === 'centered' || e === 'padded'
        ? {
            padding: '30px 20px',
            margin: -10,
            '& .innerZoomElementWrapper > *': {
              width: 'auto',
              border: '10px solid transparent!important'
            }
          }
        : {},
    ({ layout: e = 'padded' }) =>
      e === 'centered'
        ? {
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }
        : {},
    ({ columns: e }) =>
      e && e > 1
        ? {
            '.innerZoomElementWrapper > *': {
              minWidth: `calc(100% / ${e} - 20px)`
            }
          }
        : {}
  ),
  Cf = F(Bd)(({ theme: e }) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: 'none',
    background:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.85)'
        : Kt(0.05, e.background.content),
    color: e.color.lightest,
    button: {
      background:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.85)'
          : Kt(0.05, e.background.content)
    }
  })),
  QO = F.div(
    ({ theme: e, withSource: t, isExpanded: n }) => ({
      position: 'relative',
      overflow: 'hidden',
      margin: '25px 0 40px',
      ...fu(e),
      borderBottomLeftRadius: t && n && 0,
      borderBottomRightRadius: t && n && 0,
      borderBottomWidth: n && 0,
      'h3 + &': { marginTop: '16px' }
    }),
    ({ withToolbar: e }) => e && { paddingTop: 40 }
  ),
  JO = (e, t, n) => {
    switch (!0) {
      case !!(e && e.error):
        return {
          source: null,
          actionItem: {
            title: 'No code available',
            className: 'docblock-code-toggle docblock-code-toggle--disabled',
            disabled: !0,
            onClick: () => n(!1)
          }
        };
      case t:
        return {
          source: l.createElement(Cf, { ...e, dark: !0 }),
          actionItem: {
            title: 'Hide code',
            className: 'docblock-code-toggle docblock-code-toggle--expanded',
            onClick: () => n(!1)
          }
        };
      default:
        return {
          source: l.createElement(Cf, { ...e, dark: !0 }),
          actionItem: {
            title: 'Show code',
            className: 'docblock-code-toggle',
            onClick: () => n(!0)
          }
        };
    }
  };
function eR(e) {
  if (k.Children.count(e) === 1) {
    let t = e;
    if (t.props) return t.props.id;
  }
  return null;
}
var tR = F(zO)({ position: 'absolute', top: 0, left: 0, right: 0, height: 40 }),
  nR = F.div({ overflow: 'hidden', position: 'relative' }),
  Pc = ({
    isLoading: e,
    isColumn: t,
    columns: n,
    children: r,
    withSource: a,
    withToolbar: o = !1,
    isExpanded: i = !1,
    additionalActions: s,
    className: u,
    layout: c = 'padded',
    ...d
  }) => {
    let [g, f] = k.useState(i),
      { source: p, actionItem: h } = JO(a, g, f),
      [m, w] = k.useState(1),
      y = [u].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
      b = a ? [h] : [],
      [v, E] = k.useState(s ? [...s] : []),
      x = [...b, ...v],
      { window: S } = Pe,
      A = k.useCallback(async (T) => {
        let { createCopyToClipboardFunction: _ } = await un(
          () => Promise.resolve().then(() => m9),
          void 0,
          import.meta.url
        );
        _();
      }, []),
      C = (T) => {
        let _ = S.getSelection();
        (_ && _.type === 'Range') ||
          (T.preventDefault(),
          v.filter((O) => O.title === 'Copied').length === 0 &&
            A(p.props.code).then(() => {
              E([...v, { title: 'Copied', onClick: () => {} }]),
                S.setTimeout(
                  () => E(v.filter((O) => O.title !== 'Copied')),
                  1500
                );
            }));
      };
    return l.createElement(
      QO,
      { withSource: a, withToolbar: o, ...d, className: y.join(' ') },
      o &&
        l.createElement(tR, {
          isLoading: e,
          border: !0,
          zoom: (T) => w(m * T),
          resetZoom: () => w(1),
          storyId: eR(r),
          baseUrl: './iframe.html'
        }),
      l.createElement(
        Mh.Provider,
        { value: { scale: m } },
        l.createElement(
          nR,
          { className: 'docs-story', onCopyCapture: a && C },
          l.createElement(
            XO,
            { isColumn: t || !Array.isArray(r), columns: n, layout: c },
            l.createElement(
              Lg.Element,
              { scale: m },
              Array.isArray(r)
                ? r.map((T, _) => l.createElement('div', { key: _ }, T))
                : l.createElement('div', null, r)
            )
          ),
          l.createElement(rd, { actionItems: x })
        )
      ),
      a && g && p
    );
  },
  rR = F(Pc)(() => ({ '.docs-story': { paddingTop: 32, paddingBottom: 40 } })),
  aR = () =>
    l.createElement(
      rR,
      { isLoading: !0, withToolbar: !0 },
      l.createElement(Pd, null)
    ),
  oR = F.table(({ theme: e }) => ({
    '&&': {
      borderCollapse: 'collapse',
      borderSpacing: 0,
      border: 'none',
      tr: { border: 'none !important', background: 'none' },
      'td, th': { padding: 0, border: 'none', width: 'auto!important' },
      marginTop: 0,
      marginBottom: 0,
      'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
      'th:last-of-type, td:last-of-type': { paddingRight: 0 },
      td: {
        paddingTop: 0,
        paddingBottom: 4,
        '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 }
      },
      tbody: { boxShadow: 'none', border: 'none' },
      code: kn({ theme: e }),
      div: { span: { fontWeight: 'bold' } },
      '& code': {
        margin: 0,
        display: 'inline-block',
        fontSize: e.typography.size.s1
      }
    }
  })),
  lR = ({ tags: e }) => {
    let t = (e.params || []).filter((o) => o.description),
      n = t.length !== 0,
      r = e.deprecated != null,
      a = e.returns != null && e.returns.description != null;
    return !n && !a && !r
      ? null
      : l.createElement(
          l.Fragment,
          null,
          l.createElement(
            oR,
            null,
            l.createElement(
              'tbody',
              null,
              r &&
                l.createElement(
                  'tr',
                  { key: 'deprecated' },
                  l.createElement(
                    'td',
                    { colSpan: 2 },
                    l.createElement('strong', null, 'Deprecated'),
                    ': ',
                    e.deprecated
                  )
                ),
              n &&
                t.map((o) =>
                  l.createElement(
                    'tr',
                    { key: o.name },
                    l.createElement(
                      'td',
                      null,
                      l.createElement('code', null, o.name)
                    ),
                    l.createElement('td', null, o.description)
                  )
                ),
              a &&
                l.createElement(
                  'tr',
                  { key: 'returns' },
                  l.createElement(
                    'td',
                    null,
                    l.createElement('code', null, 'Returns')
                  ),
                  l.createElement('td', null, e.returns.description)
                )
            )
          )
        );
  },
  Nc = 8,
  kf = F.div(({ isExpanded: e }) => ({
    display: 'flex',
    flexDirection: e ? 'column' : 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: '-4px',
    minWidth: 100
  })),
  iR = F.span(kn, ({ theme: e, simple: t = !1 }) => ({
    flex: '0 0 auto',
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '100%',
    margin: 0,
    marginRight: '4px',
    marginBottom: '4px',
    paddingTop: '2px',
    paddingBottom: '2px',
    lineHeight: '13px',
    ...(t && { background: 'transparent', border: '0 none', paddingLeft: 0 })
  })),
  uR = F.button(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    marginBottom: '4px',
    background: 'none',
    border: 'none'
  })),
  sR = F.div(kn, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    fontSize: e.typography.size.s1,
    margin: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center'
  })),
  cR = F.div(({ theme: e, width: t }) => ({
    width: t,
    minWidth: 200,
    maxWidth: 800,
    padding: 15,
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    boxSizing: 'content-box',
    '& code': { padding: '0 !important' }
  })),
  dR = F(rt)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
  pR = () => l.createElement('span', null, '-'),
  $h = ({ text: e, simple: t }) => l.createElement(iR, { simple: t }, e),
  fR = Tr(1e3)((e) => {
    let t = e.split(/\r?\n/);
    return `${Math.max(...t.map((n) => n.length))}ch`;
  }),
  mR = (e) => {
    if (!e) return [e];
    let t = e.split('|').map((n) => n.trim());
    return SC(t);
  },
  _f = (e, t = !0) => {
    let n = e;
    return (
      t || (n = e.slice(0, Nc)),
      n.map((r) => l.createElement($h, { key: r, text: r === '' ? '""' : r }))
    );
  },
  gR = ({ value: e, initialExpandedArgs: t }) => {
    let { summary: n, detail: r } = e,
      [a, o] = k.useState(!1),
      [i, s] = k.useState(t || !1);
    if (n == null) return null;
    let u = typeof n.toString == 'function' ? n.toString() : n;
    if (r == null) {
      if (/[(){}[\]<>]/.test(u)) return l.createElement($h, { text: u });
      let c = mR(u),
        d = c.length;
      return d > Nc
        ? l.createElement(
            kf,
            { isExpanded: i },
            _f(c, i),
            l.createElement(
              uR,
              { onClick: () => s(!i) },
              i ? 'Show less...' : `Show ${d - Nc} more...`
            )
          )
        : l.createElement(kf, null, _f(c));
    }
    return l.createElement(
      jg,
      {
        closeOnOutsideClick: !0,
        placement: 'bottom',
        visible: a,
        onVisibleChange: (c) => {
          o(c);
        },
        tooltip: l.createElement(
          cR,
          { width: fR(r) },
          l.createElement(vd, { language: 'jsx', format: !1 }, r)
        )
      },
      l.createElement(
        sR,
        { className: 'sbdocs-expandable' },
        l.createElement('span', null, u),
        l.createElement(dR, { icon: a ? 'arrowup' : 'arrowdown' })
      )
    );
  },
  ms = ({ value: e, initialExpandedArgs: t }) =>
    e == null
      ? l.createElement(pR, null)
      : l.createElement(gR, { value: e, initialExpandedArgs: t }),
  hR = F.label(({ theme: e }) => ({
    lineHeight: '18px',
    alignItems: 'center',
    marginBottom: 8,
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap',
    background: e.boolean.background,
    borderRadius: '3em',
    padding: 1,
    input: {
      appearance: 'none',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderRadius: '3em',
      '&:focus': {
        outline: 'none',
        boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`
      }
    },
    span: {
      textAlign: 'center',
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: '1',
      cursor: 'pointer',
      display: 'inline-block',
      padding: '7px 15px',
      transition: 'all 100ms ease-out',
      userSelect: 'none',
      borderRadius: '3em',
      color: fe(0.5, e.color.defaultText),
      background: 'transparent',
      '&:hover': { boxShadow: `${xl(0.3, e.appBorderColor)} 0 0 0 1px inset` },
      '&:active': {
        boxShadow: `${xl(0.05, e.appBorderColor)} 0 0 0 2px inset`,
        color: xl(1, e.appBorderColor)
      },
      '&:first-of-type': { paddingRight: 8 },
      '&:last-of-type': { paddingLeft: 8 }
    },
    'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
      {
        background: e.boolean.selectedBackground,
        boxShadow:
          e.base === 'light'
            ? `${xl(0.1, e.appBorderColor)} 0 0 2px`
            : `${e.appBorderColor} 0 0 0 1px`,
        color: e.color.defaultText,
        padding: '7px 15px'
      }
  })),
  yR = (e) => e === 'true',
  vR = ({ name: e, value: t, onChange: n, onBlur: r, onFocus: a }) => {
    let o = k.useCallback(() => n(!1), [n]);
    if (t === void 0)
      return l.createElement(
        It.Button,
        { id: Vi(e), onClick: o },
        'Set boolean'
      );
    let i = Pt(e),
      s = typeof t == 'string' ? yR(t) : t;
    return l.createElement(
      hR,
      { htmlFor: i, title: s ? 'Change to false' : 'Change to true' },
      l.createElement('input', {
        id: i,
        type: 'checkbox',
        onChange: (u) => n(u.target.checked),
        checked: s,
        name: e,
        onBlur: r,
        onFocus: a
      }),
      l.createElement('span', null, 'False'),
      l.createElement('span', null, 'True')
    );
  },
  bR = (e) => {
    let [t, n, r] = e.split('-'),
      a = new Date();
    return (
      a.setFullYear(parseInt(t, 10), parseInt(n, 10) - 1, parseInt(r, 10)), a
    );
  },
  ER = (e) => {
    let [t, n] = e.split(':'),
      r = new Date();
    return r.setHours(parseInt(t, 10)), r.setMinutes(parseInt(n, 10)), r;
  },
  xR = (e) => {
    let t = new Date(e),
      n = `000${t.getFullYear()}`.slice(-4),
      r = `0${t.getMonth() + 1}`.slice(-2),
      a = `0${t.getDate()}`.slice(-2);
    return `${n}-${r}-${a}`;
  },
  wR = (e) => {
    let t = new Date(e),
      n = `0${t.getHours()}`.slice(-2),
      r = `0${t.getMinutes()}`.slice(-2);
    return `${n}:${r}`;
  },
  SR = F.div(({ theme: e }) => ({
    flex: 1,
    display: 'flex',
    input: {
      marginLeft: 10,
      flex: 1,
      height: 32,
      '&::-webkit-calendar-picker-indicator': {
        opacity: 0.5,
        height: 12,
        filter: e.base === 'light' ? void 0 : 'invert(1)'
      }
    },
    'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
    'input:last-of-type': { flexGrow: 3 }
  })),
  AR = ({ name: e, value: t, onChange: n, onFocus: r, onBlur: a }) => {
    let [o, i] = k.useState(!0),
      s = k.useRef(),
      u = k.useRef();
    k.useEffect(() => {
      o !== !1 &&
        (s && s.current && (s.current.value = xR(t)),
        u && u.current && (u.current.value = wR(t)));
    }, [t]);
    let c = (f) => {
        let p = bR(f.target.value),
          h = new Date(t);
        h.setFullYear(p.getFullYear(), p.getMonth(), p.getDate());
        let m = h.getTime();
        m && n(m), i(!!m);
      },
      d = (f) => {
        let p = ER(f.target.value),
          h = new Date(t);
        h.setHours(p.getHours()), h.setMinutes(p.getMinutes());
        let m = h.getTime();
        m && n(m), i(!!m);
      },
      g = Pt(e);
    return l.createElement(
      SR,
      null,
      l.createElement(It.Input, {
        type: 'date',
        max: '9999-12-31',
        ref: s,
        id: `${g}-date`,
        name: `${g}-date`,
        onChange: c,
        onFocus: r,
        onBlur: a
      }),
      l.createElement(It.Input, {
        type: 'time',
        id: `${g}-time`,
        name: `${g}-time`,
        ref: u,
        onChange: d,
        onFocus: r,
        onBlur: a
      }),
      o ? null : l.createElement('div', null, 'invalid')
    );
  },
  CR = F.label({ display: 'flex' }),
  kR = (e) => {
    let t = parseFloat(e);
    return Number.isNaN(t) ? void 0 : t;
  },
  _R = ({
    name: e,
    value: t,
    onChange: n,
    min: r,
    max: a,
    step: o,
    onBlur: i,
    onFocus: s
  }) => {
    let [u, c] = k.useState(typeof t == 'number' ? t : ''),
      [d, g] = k.useState(!1),
      [f, p] = k.useState(null),
      h = k.useCallback(
        (y) => {
          c(y.target.value);
          let b = parseFloat(y.target.value);
          Number.isNaN(b)
            ? p(new Error(`'${y.target.value}' is not a number`))
            : (n(b), p(null));
        },
        [n, p]
      ),
      m = k.useCallback(() => {
        c('0'), n(0), g(!0);
      }, [g]),
      w = k.useRef(null);
    return (
      k.useEffect(() => {
        d && w.current && w.current.select();
      }, [d]),
      k.useEffect(() => {
        u !== (typeof t == 'number' ? t : '') && c(t);
      }, [t]),
      !d && t === void 0
        ? l.createElement(It.Button, { id: Vi(e), onClick: m }, 'Set number')
        : l.createElement(
            CR,
            null,
            l.createElement(It.Input, {
              ref: w,
              id: Pt(e),
              type: 'number',
              onChange: h,
              size: 'flex',
              placeholder: 'Edit number...',
              value: u,
              valid: f ? 'error' : null,
              autoFocus: d,
              name: e,
              min: r,
              max: a,
              step: o,
              onFocus: s,
              onBlur: i
            })
          )
    );
  },
  Bh = (e, t) => {
    let n = t && Object.entries(t).find(([r, a]) => a === e);
    return n ? n[0] : void 0;
  },
  jc = (e, t) =>
    e && t
      ? Object.entries(t)
          .filter((n) => e.includes(n[1]))
          .map((n) => n[0])
      : [],
  Ih = (e, t) => e && t && e.map((n) => t[n]),
  FR = F.div(({ isInline: e }) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 }
        }
      : { label: { display: 'flex' } }
  ),
  TR = F.span({}),
  OR = F.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 }
  }),
  Ff = ({ name: e, options: t, value: n, onChange: r, isInline: a }) => {
    if (!t)
      return (
        $d.warn(`Checkbox with no options: ${e}`),
        l.createElement(l.Fragment, null, '-')
      );
    let o = jc(n, t),
      [i, s] = k.useState(o),
      u = (d) => {
        let g = d.target.value,
          f = [...i];
        f.includes(g) ? f.splice(f.indexOf(g), 1) : f.push(g),
          r(Ih(f, t)),
          s(f);
      };
    k.useEffect(() => {
      s(jc(n, t));
    }, [n]);
    let c = Pt(e);
    return l.createElement(
      FR,
      { isInline: a },
      Object.keys(t).map((d, g) => {
        let f = `${c}-${g}`;
        return l.createElement(
          OR,
          { key: f, htmlFor: f },
          l.createElement('input', {
            type: 'checkbox',
            id: f,
            name: f,
            value: d,
            onChange: u,
            checked: i == null ? void 0 : i.includes(d)
          }),
          l.createElement(TR, null, d)
        );
      })
    );
  },
  RR = F.div(({ isInline: e }) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 }
        }
      : { label: { display: 'flex' } }
  ),
  DR = F.span({}),
  LR = F.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 }
  }),
  Tf = ({ name: e, options: t, value: n, onChange: r, isInline: a }) => {
    if (!t)
      return (
        $d.warn(`Radio with no options: ${e}`),
        l.createElement(l.Fragment, null, '-')
      );
    let o = Bh(n, t),
      i = Pt(e);
    return l.createElement(
      RR,
      { isInline: a },
      Object.keys(t).map((s, u) => {
        let c = `${i}-${u}`;
        return l.createElement(
          LR,
          { key: c, htmlFor: c },
          l.createElement('input', {
            type: 'radio',
            id: c,
            name: c,
            value: s,
            onChange: (d) => r(t[d.currentTarget.value]),
            checked: s === o
          }),
          l.createElement(DR, null, s)
        );
      })
    );
  },
  MR = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative'
  },
  Ph = F.select(({ theme: e }) => ({
    ...MR,
    boxSizing: 'border-box',
    position: 'relative',
    padding: '6px 10px',
    width: '100%',
    color: e.input.color || 'inherit',
    background: e.input.background,
    borderRadius: e.input.borderRadius,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '20px',
    '&:focus': {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: 'none'
    },
    '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
    '::placeholder': { color: e.textMutedColor },
    '&[multiple]': {
      overflow: 'auto',
      padding: 0,
      option: {
        display: 'block',
        padding: '6px 10px',
        marginLeft: 1,
        marginRight: 1
      }
    }
  })),
  Nh = F.span(({ theme: e }) => ({
    display: 'inline-block',
    lineHeight: 'normal',
    overflow: 'hidden',
    position: 'relative',
    verticalAlign: 'top',
    width: '100%',
    svg: {
      position: 'absolute',
      zIndex: 1,
      pointerEvents: 'none',
      height: '12px',
      marginTop: '-6px',
      right: '12px',
      top: '50%',
      fill: e.textMutedColor,
      path: { fill: e.textMutedColor }
    }
  })),
  Of = 'Choose option...',
  $R = ({ name: e, value: t, options: n, onChange: r }) => {
    let a = (s) => {
        r(n[s.currentTarget.value]);
      },
      o = Bh(t, n) || Of,
      i = Pt(e);
    return l.createElement(
      Nh,
      null,
      l.createElement(rt, { icon: 'arrowdown' }),
      l.createElement(
        Ph,
        { id: i, value: o, onChange: a },
        l.createElement('option', { key: 'no-selection', disabled: !0 }, Of),
        Object.keys(n).map((s) => l.createElement('option', { key: s }, s))
      )
    );
  },
  BR = ({ name: e, value: t, options: n, onChange: r }) => {
    let a = (s) => {
        let u = Array.from(s.currentTarget.options)
          .filter((c) => c.selected)
          .map((c) => c.value);
        r(Ih(u, n));
      },
      o = jc(t, n),
      i = Pt(e);
    return l.createElement(
      Nh,
      null,
      l.createElement(
        Ph,
        { id: i, multiple: !0, value: o, onChange: a },
        Object.keys(n).map((s) => l.createElement('option', { key: s }, s))
      )
    );
  },
  Rf = (e) => {
    let { name: t, options: n } = e;
    return n
      ? e.isMulti
        ? l.createElement(BR, { ...e })
        : l.createElement($R, { ...e })
      : ($d.warn(`Select with no options: ${t}`),
        l.createElement(l.Fragment, null, '-'));
  },
  IR = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (n, r) => ((n[(t == null ? void 0 : t[r]) || String(r)] = r), n),
          {}
        )
      : e,
  PR = {
    check: Ff,
    'inline-check': Ff,
    radio: Tf,
    'inline-radio': Tf,
    select: Rf,
    'multi-select': Rf
  },
  Br = (e) => {
    let { type: t = 'select', labels: n, argType: r } = e,
      a = {
        ...e,
        options: r ? IR(r.options, n) : {},
        isInline: t.includes('inline'),
        isMulti: t.includes('multi')
      },
      o = PR[t];
    if (o) return l.createElement(o, { ...a });
    throw new Error(`Unknown options type: ${t}`);
  },
  Nd = 'value',
  NR = 'key',
  jR = 'Error',
  HR = 'Object',
  ZR = 'Array',
  zR = 'String',
  VR = 'Number',
  UR = 'Boolean',
  qR = 'Date',
  WR = 'Null',
  GR = 'Undefined',
  KR = 'Function',
  YR = 'Symbol',
  jh = 'ADD_DELTA_TYPE',
  Hh = 'REMOVE_DELTA_TYPE',
  Zh = 'UPDATE_DELTA_TYPE';
function jn(e) {
  return e !== null &&
    typeof e == 'object' &&
    !Array.isArray(e) &&
    typeof e[Symbol.iterator] == 'function'
    ? 'Iterable'
    : Object.prototype.toString.call(e).slice(8, -1);
}
function zh(e, t) {
  let n = jn(e),
    r = jn(t);
  return (n === 'Function' || r === 'Function') && r !== n;
}
var jd = class extends k.Component {
  constructor(e) {
    super(e),
      (this.state = { inputRefKey: null, inputRefValue: null }),
      (this.refInputValue = this.refInputValue.bind(this)),
      (this.refInputKey = this.refInputKey.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this)),
      (this.onSubmit = this.onSubmit.bind(this));
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: t } = this.state,
      { onlyValue: n } = this.props;
    e && typeof e.focus == 'function' && e.focus(),
      n && t && typeof t.focus == 'function' && t.focus(),
      document.addEventListener('keydown', this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') &&
        (e.preventDefault(), this.onSubmit()),
      (e.code === 'Escape' || e.key === 'Escape') &&
        (e.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let {
        handleAdd: e,
        onlyValue: t,
        onSubmitValueParser: n,
        keyPath: r,
        deep: a
      } = this.props,
      { inputRefKey: o, inputRefValue: i } = this.state,
      s = {};
    if (!t) {
      if (!o.value) return;
      s.key = o.value;
    }
    (s.newValue = n(!1, r, a, s.key, i.value)), e(s);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let {
        handleCancel: e,
        onlyValue: t,
        addButtonElement: n,
        cancelButtonElement: r,
        inputElementGenerator: a,
        keyPath: o,
        deep: i
      } = this.props,
      s = k.cloneElement(n, { onClick: this.onSubmit }),
      u = k.cloneElement(r, { onClick: e }),
      c = a(Nd, o, i),
      d = k.cloneElement(c, { placeholder: 'Value', ref: this.refInputValue }),
      g = null;
    if (!t) {
      let f = a(NR, o, i);
      g = k.cloneElement(f, { placeholder: 'Key', ref: this.refInputKey });
    }
    return l.createElement(
      'span',
      { className: 'rejt-add-value-node' },
      g,
      d,
      u,
      s
    );
  }
};
jd.defaultProps = {
  onlyValue: !1,
  addButtonElement: l.createElement('button', null, '+'),
  cancelButtonElement: l.createElement('button', null, 'c')
};
var Vh = class extends k.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      data: e.data,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: n, keyPath: r } = this.state;
    (n[e] = t), this.setState({ data: n });
    let { onUpdate: a } = this.props,
      o = r.length;
    a(r[o - 1], n);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: t, logger: n } = this.props,
        { data: r, keyPath: a, nextDeep: o } = this.state,
        i = r[e];
      t(e, a, o, i)
        .then(() => {
          let s = { keyPath: a, deep: o, key: e, oldValue: i, type: Hh };
          r.splice(e, 1), this.setState({ data: r });
          let { onUpdate: u, onDeltaUpdate: c } = this.props;
          u(a[a.length - 1], r), c(s);
        })
        .catch(n.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: n, nextDeep: r } = this.state,
      { beforeAddAction: a, logger: o } = this.props;
    a(t.length, n, r, e)
      .then(() => {
        let i = [...t, e];
        this.setState({ data: i }), this.handleAddValueCancel();
        let { onUpdate: s, onDeltaUpdate: u } = this.props;
        s(n[n.length - 1], i),
          u({ type: jh, keyPath: n, deep: r, key: i.length - 1, newValue: e });
      })
      .catch(o.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((n, r) => {
      let { beforeUpdateAction: a } = this.props,
        { data: o, keyPath: i, nextDeep: s } = this.state,
        u = o[e];
      a(e, i, s, u, t)
        .then(() => {
          (o[e] = t), this.setState({ data: o });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(i[i.length - 1], o),
            d({
              type: Zh,
              keyPath: i,
              deep: s,
              key: e,
              newValue: t,
              oldValue: u
            }),
            n(void 0);
        })
        .catch(r);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: n, deep: r } = this.state,
      {
        handleRemove: a,
        readOnly: o,
        getStyle: i,
        dataType: s,
        minusMenuElement: u
      } = this.props,
      { minus: c, collapsed: d } = i(e, t, n, r, s),
      g = o(e, t, n, r, s),
      f = k.cloneElement(u, {
        onClick: a,
        className: 'rejt-minus-menu',
        style: c
      });
    return l.createElement(
      'span',
      { className: 'rejt-collapsed' },
      l.createElement(
        'span',
        {
          className: 'rejt-collapsed-text',
          style: d,
          onClick: this.handleCollapseMode
        },
        '[...] ',
        t.length,
        ' ',
        t.length === 1 ? 'item' : 'items'
      ),
      !g && f
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: n,
        deep: r,
        addFormVisible: a,
        nextDeep: o
      } = this.state,
      {
        isCollapsed: i,
        handleRemove: s,
        onDeltaUpdate: u,
        readOnly: c,
        getStyle: d,
        dataType: g,
        addButtonElement: f,
        cancelButtonElement: p,
        editButtonElement: h,
        inputElementGenerator: m,
        textareaElementGenerator: w,
        minusMenuElement: y,
        plusMenuElement: b,
        beforeRemoveAction: v,
        beforeAddAction: E,
        beforeUpdateAction: x,
        logger: S,
        onSubmitValueParser: A
      } = this.props,
      { minus: C, plus: T, delimiter: _, ul: O, addForm: B } = d(e, t, n, r, g),
      M = c(e, t, n, r, g),
      Z = k.cloneElement(b, {
        onClick: this.handleAddMode,
        className: 'rejt-plus-menu',
        style: T
      }),
      I = k.cloneElement(y, {
        onClick: s,
        className: 'rejt-minus-menu',
        style: C
      }),
      P = !0,
      z = '[',
      R = ']';
    return l.createElement(
      'span',
      { className: 'rejt-not-collapsed' },
      l.createElement(
        'span',
        { className: 'rejt-not-collapsed-delimiter', style: _ },
        z
      ),
      !a && Z,
      l.createElement(
        'ul',
        { className: 'rejt-not-collapsed-list', style: O },
        t.map((D, $) =>
          l.createElement(mu, {
            key: $,
            name: `${$}`,
            data: D,
            keyPath: n,
            deep: o,
            isCollapsed: i,
            handleRemove: this.handleRemoveItem($),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: u,
            readOnly: c,
            getStyle: d,
            addButtonElement: f,
            cancelButtonElement: p,
            editButtonElement: h,
            inputElementGenerator: m,
            textareaElementGenerator: w,
            minusMenuElement: y,
            plusMenuElement: b,
            beforeRemoveAction: v,
            beforeAddAction: E,
            beforeUpdateAction: x,
            logger: S,
            onSubmitValueParser: A
          })
        )
      ),
      !M &&
        a &&
        l.createElement(
          'div',
          { className: 'rejt-add-form', style: B },
          l.createElement(jd, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: P,
            addButtonElement: f,
            cancelButtonElement: p,
            inputElementGenerator: m,
            keyPath: n,
            deep: r,
            onSubmitValueParser: A
          })
        ),
      l.createElement(
        'span',
        { className: 'rejt-not-collapsed-delimiter', style: _ },
        R
      ),
      !M && I
    );
  }
  render() {
    let { name: e, collapsed: t, data: n, keyPath: r, deep: a } = this.state,
      { dataType: o, getStyle: i } = this.props,
      s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      u = i(e, n, r, a, o);
    return l.createElement(
      'div',
      { className: 'rejt-array-node' },
      l.createElement(
        'span',
        { onClick: this.handleCollapseMode },
        l.createElement(
          'span',
          { className: 'rejt-name', style: u.name },
          e,
          ' :',
          ' '
        )
      ),
      s
    );
  }
};
Vh.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: l.createElement('span', null, ' - '),
  plusMenuElement: l.createElement('span', null, ' + ')
};
var Uh = class extends k.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: n,
        value: r,
        keyPath: a,
        deep: o
      } = this.state,
      { readOnly: i, dataType: s } = this.props,
      u = i(n, r, a, o, s);
    e && !u && typeof t.focus == 'function' && t.focus();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === 'Escape' || e.key === 'Escape') &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: n,
        onSubmitValueParser: r,
        keyPath: a
      } = this.props,
      { inputRef: o, name: i, deep: s } = this.state;
    if (!o) return;
    let u = r(!0, a, s, i, o.value);
    e({ value: u, key: i })
      .then(() => {
        zh(t, u) || this.handleCancelEdit();
      })
      .catch(n.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: n, keyPath: r, deep: a } = this.state,
      {
        handleRemove: o,
        originalValue: i,
        readOnly: s,
        dataType: u,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: g,
        textareaElementGenerator: f,
        minusMenuElement: p,
        keyPath: h
      } = this.props,
      m = c(e, i, r, a, u),
      w = null,
      y = null,
      b = s(e, i, r, a, u);
    if (n && !b) {
      let v = f(Nd, h, a, e, i, u),
        E = k.cloneElement(d, { onClick: this.handleEdit }),
        x = k.cloneElement(g, { onClick: this.handleCancelEdit }),
        S = k.cloneElement(v, { ref: this.refInput, defaultValue: i });
      (w = l.createElement(
        'span',
        { className: 'rejt-edit-form', style: m.editForm },
        S,
        ' ',
        x,
        E
      )),
        (y = null);
    } else {
      w = l.createElement(
        'span',
        {
          className: 'rejt-value',
          style: m.value,
          onClick: b ? null : this.handleEditMode
        },
        t
      );
      let v = k.cloneElement(p, {
        onClick: o,
        className: 'rejt-minus-menu',
        style: m.minus
      });
      y = b ? null : v;
    }
    return l.createElement(
      'li',
      { className: 'rejt-function-value-node', style: m.li },
      l.createElement(
        'span',
        { className: 'rejt-name', style: m.name },
        e,
        ' :',
        ' '
      ),
      w,
      y
    );
  }
};
Uh.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: l.createElement('button', null, 'e'),
  cancelButtonElement: l.createElement('button', null, 'c'),
  minusMenuElement: l.createElement('span', null, ' - ')
};
var mu = class extends k.Component {
  constructor(e) {
    super(e),
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: e.keyPath,
        deep: e.deep
      });
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: n, deep: r } = this.state,
      {
        isCollapsed: a,
        handleRemove: o,
        handleUpdateValue: i,
        onUpdate: s,
        onDeltaUpdate: u,
        readOnly: c,
        getStyle: d,
        addButtonElement: g,
        cancelButtonElement: f,
        editButtonElement: p,
        inputElementGenerator: h,
        textareaElementGenerator: m,
        minusMenuElement: w,
        plusMenuElement: y,
        beforeRemoveAction: b,
        beforeAddAction: v,
        beforeUpdateAction: E,
        logger: x,
        onSubmitValueParser: S
      } = this.props,
      A = () => !0,
      C = jn(e);
    switch (C) {
      case jR:
        return l.createElement(Hc, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: n,
          deep: r,
          handleRemove: o,
          onUpdate: s,
          onDeltaUpdate: u,
          readOnly: A,
          dataType: C,
          getStyle: d,
          addButtonElement: g,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          textareaElementGenerator: m,
          minusMenuElement: w,
          plusMenuElement: y,
          beforeRemoveAction: b,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: x,
          onSubmitValueParser: S
        });
      case HR:
        return l.createElement(Hc, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: n,
          deep: r,
          handleRemove: o,
          onUpdate: s,
          onDeltaUpdate: u,
          readOnly: c,
          dataType: C,
          getStyle: d,
          addButtonElement: g,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          textareaElementGenerator: m,
          minusMenuElement: w,
          plusMenuElement: y,
          beforeRemoveAction: b,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: x,
          onSubmitValueParser: S
        });
      case ZR:
        return l.createElement(Vh, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: n,
          deep: r,
          handleRemove: o,
          onUpdate: s,
          onDeltaUpdate: u,
          readOnly: c,
          dataType: C,
          getStyle: d,
          addButtonElement: g,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          textareaElementGenerator: m,
          minusMenuElement: w,
          plusMenuElement: y,
          beforeRemoveAction: b,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: x,
          onSubmitValueParser: S
        });
      case zR:
        return l.createElement(Rn, {
          name: t,
          value: `"${e}"`,
          originalValue: e,
          keyPath: n,
          deep: r,
          handleRemove: o,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: x,
          onSubmitValueParser: S
        });
      case VR:
        return l.createElement(Rn, {
          name: t,
          value: e,
          originalValue: e,
          keyPath: n,
          deep: r,
          handleRemove: o,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: x,
          onSubmitValueParser: S
        });
      case UR:
        return l.createElement(Rn, {
          name: t,
          value: e ? 'true' : 'false',
          originalValue: e,
          keyPath: n,
          deep: r,
          handleRemove: o,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: x,
          onSubmitValueParser: S
        });
      case qR:
        return l.createElement(Rn, {
          name: t,
          value: e.toISOString(),
          originalValue: e,
          keyPath: n,
          deep: r,
          handleRemove: o,
          handleUpdateValue: i,
          readOnly: A,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: x,
          onSubmitValueParser: S
        });
      case WR:
        return l.createElement(Rn, {
          name: t,
          value: 'null',
          originalValue: 'null',
          keyPath: n,
          deep: r,
          handleRemove: o,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: x,
          onSubmitValueParser: S
        });
      case GR:
        return l.createElement(Rn, {
          name: t,
          value: 'undefined',
          originalValue: 'undefined',
          keyPath: n,
          deep: r,
          handleRemove: o,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: x,
          onSubmitValueParser: S
        });
      case KR:
        return l.createElement(Uh, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: n,
          deep: r,
          handleRemove: o,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          textareaElementGenerator: m,
          minusMenuElement: w,
          logger: x,
          onSubmitValueParser: S
        });
      case YR:
        return l.createElement(Rn, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: n,
          deep: r,
          handleRemove: o,
          handleUpdateValue: i,
          readOnly: A,
          dataType: C,
          getStyle: d,
          cancelButtonElement: f,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: x,
          onSubmitValueParser: S
        });
      default:
        return null;
    }
  }
};
mu.defaultProps = { keyPath: [], deep: 0 };
var Hc = class extends k.Component {
  constructor(e) {
    super(e);
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
    (this.state = {
      name: e.name,
      data: e.data,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: n, keyPath: r } = this.state;
    (n[e] = t), this.setState({ data: n });
    let { onUpdate: a } = this.props,
      o = r.length;
    a(r[o - 1], n);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: n, keyPath: r, nextDeep: a } = this.state,
      { beforeAddAction: o, logger: i } = this.props;
    o(e, r, a, t)
      .then(() => {
        (n[e] = t), this.setState({ data: n }), this.handleAddValueCancel();
        let { onUpdate: s, onDeltaUpdate: u } = this.props;
        s(r[r.length - 1], n),
          u({ type: jh, keyPath: r, deep: a, key: e, newValue: t });
      })
      .catch(i.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: n } = this.props,
        { data: r, keyPath: a, nextDeep: o } = this.state,
        i = r[e];
      t(e, a, o, i)
        .then(() => {
          let s = { keyPath: a, deep: o, key: e, oldValue: i, type: Hh };
          delete r[e], this.setState({ data: r });
          let { onUpdate: u, onDeltaUpdate: c } = this.props;
          u(a[a.length - 1], r), c(s);
        })
        .catch(n.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((n, r) => {
      let { beforeUpdateAction: a } = this.props,
        { data: o, keyPath: i, nextDeep: s } = this.state,
        u = o[e];
      a(e, i, s, u, t)
        .then(() => {
          (o[e] = t), this.setState({ data: o });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(i[i.length - 1], o),
            d({
              type: Zh,
              keyPath: i,
              deep: s,
              key: e,
              newValue: t,
              oldValue: u
            }),
            n();
        })
        .catch(r);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: n, data: r } = this.state,
      {
        handleRemove: a,
        readOnly: o,
        dataType: i,
        getStyle: s,
        minusMenuElement: u
      } = this.props,
      { minus: c, collapsed: d } = s(e, r, t, n, i),
      g = Object.getOwnPropertyNames(r),
      f = o(e, r, t, n, i),
      p = k.cloneElement(u, {
        onClick: a,
        className: 'rejt-minus-menu',
        style: c
      });
    return l.createElement(
      'span',
      { className: 'rejt-collapsed' },
      l.createElement(
        'span',
        {
          className: 'rejt-collapsed-text',
          style: d,
          onClick: this.handleCollapseMode
        },
        '{...}',
        ' ',
        g.length,
        ' ',
        g.length === 1 ? 'key' : 'keys'
      ),
      !f && p
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: n,
        deep: r,
        nextDeep: a,
        addFormVisible: o
      } = this.state,
      {
        isCollapsed: i,
        handleRemove: s,
        onDeltaUpdate: u,
        readOnly: c,
        getStyle: d,
        dataType: g,
        addButtonElement: f,
        cancelButtonElement: p,
        editButtonElement: h,
        inputElementGenerator: m,
        textareaElementGenerator: w,
        minusMenuElement: y,
        plusMenuElement: b,
        beforeRemoveAction: v,
        beforeAddAction: E,
        beforeUpdateAction: x,
        logger: S,
        onSubmitValueParser: A
      } = this.props,
      { minus: C, plus: T, addForm: _, ul: O, delimiter: B } = d(e, t, n, r, g),
      M = Object.getOwnPropertyNames(t),
      Z = c(e, t, n, r, g),
      I = k.cloneElement(b, {
        onClick: this.handleAddMode,
        className: 'rejt-plus-menu',
        style: T
      }),
      P = k.cloneElement(y, {
        onClick: s,
        className: 'rejt-minus-menu',
        style: C
      }),
      z = M.map(($) =>
        l.createElement(mu, {
          key: $,
          name: $,
          data: t[$],
          keyPath: n,
          deep: a,
          isCollapsed: i,
          handleRemove: this.handleRemoveValue($),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: u,
          readOnly: c,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: p,
          editButtonElement: h,
          inputElementGenerator: m,
          textareaElementGenerator: w,
          minusMenuElement: y,
          plusMenuElement: b,
          beforeRemoveAction: v,
          beforeAddAction: E,
          beforeUpdateAction: x,
          logger: S,
          onSubmitValueParser: A
        })
      ),
      R = '{',
      D = '}';
    return l.createElement(
      'span',
      { className: 'rejt-not-collapsed' },
      l.createElement(
        'span',
        { className: 'rejt-not-collapsed-delimiter', style: B },
        R
      ),
      !Z && I,
      l.createElement(
        'ul',
        { className: 'rejt-not-collapsed-list', style: O },
        z
      ),
      !Z &&
        o &&
        l.createElement(
          'div',
          { className: 'rejt-add-form', style: _ },
          l.createElement(jd, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement: f,
            cancelButtonElement: p,
            inputElementGenerator: m,
            keyPath: n,
            deep: r,
            onSubmitValueParser: A
          })
        ),
      l.createElement(
        'span',
        { className: 'rejt-not-collapsed-delimiter', style: B },
        D
      ),
      !Z && P
    );
  }
  render() {
    let { name: e, collapsed: t, data: n, keyPath: r, deep: a } = this.state,
      { getStyle: o, dataType: i } = this.props,
      s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      u = o(e, n, r, a, i);
    return l.createElement(
      'div',
      { className: 'rejt-object-node' },
      l.createElement(
        'span',
        { onClick: this.handleCollapseMode },
        l.createElement(
          'span',
          { className: 'rejt-name', style: u.name },
          e,
          ' :',
          ' '
        )
      ),
      s
    );
  }
};
Hc.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: l.createElement('span', null, ' - '),
  plusMenuElement: l.createElement('span', null, ' + ')
};
var Rn = class extends k.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: n,
        value: r,
        keyPath: a,
        deep: o
      } = this.state,
      { readOnly: i, dataType: s } = this.props,
      u = i(n, r, a, o, s);
    e && !u && typeof t.focus == 'function' && t.focus();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === 'Escape' || e.key === 'Escape') &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: n,
        onSubmitValueParser: r,
        keyPath: a
      } = this.props,
      { inputRef: o, name: i, deep: s } = this.state;
    if (!o) return;
    let u = r(!0, a, s, i, o.value);
    e({ value: u, key: i })
      .then(() => {
        zh(t, u) || this.handleCancelEdit();
      })
      .catch(n.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: n, keyPath: r, deep: a } = this.state,
      {
        handleRemove: o,
        originalValue: i,
        readOnly: s,
        dataType: u,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: g,
        inputElementGenerator: f,
        minusMenuElement: p,
        keyPath: h
      } = this.props,
      m = c(e, i, r, a, u),
      w = s(e, i, r, a, u),
      y = n && !w,
      b = f(Nd, h, a, e, i, u),
      v = k.cloneElement(d, { onClick: this.handleEdit }),
      E = k.cloneElement(g, { onClick: this.handleCancelEdit }),
      x = k.cloneElement(b, {
        ref: this.refInput,
        defaultValue: JSON.stringify(i)
      }),
      S = k.cloneElement(p, {
        onClick: o,
        className: 'rejt-minus-menu',
        style: m.minus
      });
    return l.createElement(
      'li',
      { className: 'rejt-value-node', style: m.li },
      l.createElement(
        'span',
        { className: 'rejt-name', style: m.name },
        e,
        ' : '
      ),
      y
        ? l.createElement(
            'span',
            { className: 'rejt-edit-form', style: m.editForm },
            x,
            ' ',
            E,
            v
          )
        : l.createElement(
            'span',
            {
              className: 'rejt-value',
              style: m.value,
              onClick: w ? null : this.handleEditMode
            },
            String(t)
          ),
      !w && !y && S
    );
  }
};
Rn.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: l.createElement('button', null, 'e'),
  cancelButtonElement: l.createElement('button', null, 'c'),
  minusMenuElement: l.createElement('span', null, ' - ')
};
var XR = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {}
  },
  QR = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {}
  },
  JR = {
    minus: { color: 'red' },
    editForm: {},
    value: { color: '#7bba3d' },
    li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
    name: { color: '#2287CD' }
  };
function eD(e) {
  let t = e;
  if (t.indexOf('function') === 0) return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {}
  return t;
}
var qh = class extends k.Component {
  constructor(e) {
    super(e),
      (this.state = { data: e.data, rootName: e.rootName }),
      (this.onUpdate = this.onUpdate.bind(this)),
      (this.removeRoot = this.removeRoot.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName
      ? { data: e.data, rootName: e.rootName }
      : null;
  }
  onUpdate(e, t) {
    this.setState({ data: t }), this.props.onFullyUpdate(t);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data: e, rootName: t } = this.state,
      {
        isCollapsed: n,
        onDeltaUpdate: r,
        readOnly: a,
        getStyle: o,
        addButtonElement: i,
        cancelButtonElement: s,
        editButtonElement: u,
        inputElement: c,
        textareaElement: d,
        minusMenuElement: g,
        plusMenuElement: f,
        beforeRemoveAction: p,
        beforeAddAction: h,
        beforeUpdateAction: m,
        logger: w,
        onSubmitValueParser: y,
        fallback: b = null
      } = this.props,
      v = jn(e),
      E = a;
    jn(a) === 'Boolean' && (E = () => a);
    let x = c;
    c && jn(c) !== 'Function' && (x = () => c);
    let S = d;
    return (
      d && jn(d) !== 'Function' && (S = () => d),
      v === 'Object' || v === 'Array'
        ? l.createElement(
            'div',
            { className: 'rejt-tree' },
            l.createElement(mu, {
              data: e,
              name: t,
              deep: -1,
              isCollapsed: n,
              onUpdate: this.onUpdate,
              onDeltaUpdate: r,
              readOnly: E,
              getStyle: o,
              addButtonElement: i,
              cancelButtonElement: s,
              editButtonElement: u,
              inputElementGenerator: x,
              textareaElementGenerator: S,
              minusMenuElement: g,
              plusMenuElement: f,
              handleRemove: this.removeRoot,
              beforeRemoveAction: p,
              beforeAddAction: h,
              beforeUpdateAction: m,
              logger: w,
              onSubmitValueParser: y
            })
          )
        : b
    );
  }
};
qh.defaultProps = {
  rootName: 'root',
  isCollapsed: (e, t) => t !== -1,
  getStyle: (e, t, n, r, a) => {
    switch (a) {
      case 'Object':
      case 'Error':
        return XR;
      case 'Array':
        return QR;
      default:
        return JR;
    }
  },
  readOnly: () => !1,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: { error: () => {} },
  onSubmitValueParser: (e, t, n, r, a) => eD(a),
  inputElement: () => l.createElement('input', null),
  textareaElement: () => l.createElement('textarea', null),
  fallback: null
};
var { window: tD } = Pe,
  nD = F.div(({ theme: e }) => ({
    position: 'relative',
    display: 'flex',
    '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
    '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
      { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
    '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
      { '& > svg': { opacity: 1 } },
    '.rejt-edit-form button': { display: 'none' },
    '.rejt-add-form': { marginLeft: 10 },
    '.rejt-add-value-node': { display: 'inline-flex', alignItems: 'center' },
    '.rejt-name': { lineHeight: '22px' },
    '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
    '.rejt-plus-menu': { marginLeft: 5 },
    '.rejt-object-node > span > *, .rejt-array-node > span > *': {
      position: 'relative',
      zIndex: 2
    },
    '.rejt-object-node, .rejt-array-node': { position: 'relative' },
    '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
      {
        content: '""',
        position: 'absolute',
        top: 0,
        display: 'block',
        width: '100%',
        marginLeft: '-1rem',
        padding: '0 4px 0 1rem',
        height: 22
      },
    '.rejt-collapsed::before, .rejt-not-collapsed::before': {
      zIndex: 1,
      background: 'transparent',
      borderRadius: 4,
      transition: 'background 0.2s',
      pointerEvents: 'none',
      opacity: 0.1
    },
    '.rejt-object-node:hover, .rejt-array-node:hover': {
      '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
        background: e.color.secondary
      }
    },
    '.rejt-collapsed::after, .rejt-not-collapsed::after': {
      content: '""',
      position: 'absolute',
      display: 'inline-block',
      pointerEvents: 'none',
      width: 0,
      height: 0
    },
    '.rejt-collapsed::after': {
      left: -8,
      top: 8,
      borderTop: '3px solid transparent',
      borderBottom: '3px solid transparent',
      borderLeft: '3px solid rgba(153,153,153,0.6)'
    },
    '.rejt-not-collapsed::after': {
      left: -10,
      top: 10,
      borderTop: '3px solid rgba(153,153,153,0.6)',
      borderLeft: '3px solid transparent',
      borderRight: '3px solid transparent'
    },
    '.rejt-value': {
      display: 'inline-block',
      border: '1px solid transparent',
      borderRadius: 4,
      margin: '1px 0',
      padding: '0 4px',
      cursor: 'text',
      color: e.color.defaultText
    },
    '.rejt-value-node:hover > .rejt-value': {
      background: e.color.lighter,
      borderColor: e.appBorderColor
    }
  })),
  gs = F.button(({ theme: e, primary: t }) => ({
    border: 0,
    height: 20,
    margin: 1,
    borderRadius: 4,
    background: t ? e.color.secondary : 'transparent',
    color: t ? e.color.lightest : e.color.dark,
    fontWeight: t ? 'bold' : 'normal',
    cursor: 'pointer',
    order: t ? 'initial' : 9
  })),
  Df = F(rt)(({ theme: e, icon: t, disabled: n }) => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 15,
    height: 15,
    padding: 3,
    marginLeft: 5,
    cursor: n ? 'not-allowed' : 'pointer',
    color: e.textMutedColor,
    '&:hover': n
      ? {}
      : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
    'svg + &': { marginLeft: 0 }
  })),
  Lf = F.input(({ theme: e, placeholder: t }) => ({
    outline: 0,
    margin: t ? 1 : '1px 0',
    padding: '3px 4px',
    color: e.color.defaultText,
    background: e.background.app,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 4,
    lineHeight: '14px',
    width: t === 'Key' ? 80 : 120,
    '&:focus': { border: `1px solid ${e.color.secondary}` }
  })),
  rD = F(Er)(({ theme: e }) => ({
    position: 'absolute',
    zIndex: 2,
    top: 2,
    right: 2,
    height: 21,
    padding: '0 3px',
    background: e.background.bar,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 3,
    color: e.textMutedColor,
    fontSize: '9px',
    fontWeight: 'bold',
    textDecoration: 'none',
    span: { marginLeft: 3, marginTop: 1 }
  })),
  aD = F(It.Textarea)(({ theme: e }) => ({
    flex: 1,
    padding: '7px 6px',
    fontFamily: e.typography.fonts.mono,
    fontSize: '12px',
    lineHeight: '18px',
    '&::placeholder': { fontFamily: e.typography.fonts.base, fontSize: '13px' },
    '&:placeholder-shown': { padding: '7px 10px' }
  })),
  oD = {
    bubbles: !0,
    cancelable: !0,
    key: 'Enter',
    code: 'Enter',
    keyCode: 13
  },
  lD = (e) => {
    e.currentTarget.dispatchEvent(new tD.KeyboardEvent('keydown', oD));
  },
  iD = (e) => {
    e.currentTarget.select();
  },
  uD = (e) => () => ({
    name: { color: e.color.secondary },
    collapsed: { color: e.color.dark },
    ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
    li: { outline: 0 }
  }),
  Mf = ({ name: e, value: t, onChange: n }) => {
    let r = G7(),
      a = k.useMemo(() => t && uF(t), [t]),
      o = a != null,
      [i, s] = k.useState(!o),
      [u, c] = k.useState(null),
      d = k.useCallback(
        (w) => {
          try {
            w && n(JSON.parse(w)), c(void 0);
          } catch (y) {
            c(y);
          }
        },
        [n]
      ),
      [g, f] = k.useState(!1),
      p = k.useCallback(() => {
        n({}), f(!0);
      }, [f]),
      h = k.useRef(null);
    if (
      (k.useEffect(() => {
        g && h.current && h.current.select();
      }, [g]),
      !o)
    )
      return l.createElement(
        It.Button,
        { id: Vi(e), onClick: p },
        'Set object'
      );
    let m = l.createElement(aD, {
      ref: h,
      id: Pt(e),
      name: e,
      defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
      onBlur: (w) => d(w.target.value),
      placeholder: 'Edit JSON string...',
      autoFocus: g,
      valid: u ? 'error' : null
    });
    return l.createElement(
      nD,
      null,
      ['Object', 'Array'].includes(jn(a)) &&
        l.createElement(
          rD,
          {
            href: '#',
            onClick: (w) => {
              w.preventDefault(), s((y) => !y);
            }
          },
          l.createElement(rt, { icon: i ? 'eyeclose' : 'eye' }),
          l.createElement('span', null, 'RAW')
        ),
      i
        ? m
        : l.createElement(qh, {
            data: a,
            rootName: e,
            onFullyUpdate: n,
            getStyle: uD(r),
            cancelButtonElement: l.createElement(
              gs,
              { type: 'button' },
              'Cancel'
            ),
            editButtonElement: l.createElement(gs, { type: 'submit' }, 'Save'),
            addButtonElement: l.createElement(
              gs,
              { type: 'submit', primary: !0 },
              'Save'
            ),
            plusMenuElement: l.createElement(Df, { icon: 'add' }),
            minusMenuElement: l.createElement(Df, { icon: 'subtract' }),
            inputElement: (w, y, b, v) =>
              v
                ? l.createElement(Lf, { onFocus: iD, onBlur: lD })
                : l.createElement(Lf, null),
            fallback: m
          })
    );
  },
  sD = F.input(({ theme: e, min: t, max: n, value: r }) => ({
    '&': { width: '100%', backgroundColor: 'transparent', appearance: 'none' },
    '&::-webkit-slider-runnable-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((r - t) / (n - t)) * 100
            }%, 
            ${Kt(0.02, e.input.background)} ${((r - t) / (n - t)) * 100}%, 
            ${Kt(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((r - t) / (n - t)) * 100
            }%, 
            ${pr(0.02, e.input.background)} ${((r - t) / (n - t)) * 100}%, 
            ${pr(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer'
    },
    '&::-webkit-slider-thumb': {
      marginTop: '-6px',
      width: 16,
      height: 16,
      border: `1px solid ${hn(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${hn(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      appearance: 'none',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${Kt(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out'
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing'
      }
    },
    '&:focus': {
      outline: 'none',
      '&::-webkit-slider-runnable-track': {
        borderColor: hn(e.color.secondary, 0.4)
      },
      '&::-webkit-slider-thumb': {
        borderColor: e.color.secondary,
        boxShadow: `0 0px 5px 0px ${e.color.secondary}`
      }
    },
    '&::-moz-range-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((r - t) / (n - t)) * 100
            }%, 
            ${Kt(0.02, e.input.background)} ${((r - t) / (n - t)) * 100}%, 
            ${Kt(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((r - t) / (n - t)) * 100
            }%, 
            ${pr(0.02, e.input.background)} ${((r - t) / (n - t)) * 100}%, 
            ${pr(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer',
      outline: 'none'
    },
    '&::-moz-range-thumb': {
      width: 16,
      height: 16,
      border: `1px solid ${hn(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${hn(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${Kt(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out'
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing'
      }
    },
    '&::-ms-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((r - t) / (n - t)) * 100
            }%, 
            ${Kt(0.02, e.input.background)} ${((r - t) / (n - t)) * 100}%, 
            ${Kt(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((r - t) / (n - t)) * 100
            }%, 
            ${pr(0.02, e.input.background)} ${((r - t) / (n - t)) * 100}%, 
            ${pr(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      color: 'transparent',
      width: '100%',
      height: '6px',
      cursor: 'pointer'
    },
    '&::-ms-fill-lower': { borderRadius: 6 },
    '&::-ms-fill-upper': { borderRadius: 6 },
    '&::-ms-thumb': {
      width: 16,
      height: 16,
      background: `${e.input.background}`,
      border: `1px solid ${hn(e.appBorderColor, 0.2)}`,
      borderRadius: 50,
      cursor: 'grab',
      marginTop: 0
    },
    '@supports (-ms-ime-align:auto)': { 'input[type=range]': { margin: '0' } }
  })),
  Wh = F.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: 'nowrap',
    fontFeatureSettings: 'tnum',
    fontVariantNumeric: 'tabular-nums'
  }),
  cD = F(Wh)(({ numberOFDecimalsPlaces: e, max: t }) => ({
    width: `${e + t.toString().length * 2 + 3}ch`,
    textAlign: 'right',
    flexShrink: 0
  })),
  dD = F.div({ display: 'flex', alignItems: 'center', width: '100%' });
function pD(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var fD = ({
    name: e,
    value: t,
    onChange: n,
    min: r = 0,
    max: a = 100,
    step: o = 1,
    onBlur: i,
    onFocus: s
  }) => {
    let u = (g) => {
        n(kR(g.target.value));
      },
      c = t !== void 0,
      d = k.useMemo(() => pD(o), [o]);
    return l.createElement(
      dD,
      null,
      l.createElement(Wh, null, r),
      l.createElement(sD, {
        id: Pt(e),
        type: 'range',
        onChange: u,
        name: e,
        value: t,
        min: r,
        max: a,
        step: o,
        onFocus: s,
        onBlur: i
      }),
      l.createElement(
        cD,
        { numberOFDecimalsPlaces: d, max: a },
        `${c ? t.toFixed(d) : '--'}`,
        ' / ',
        a
      )
    );
  },
  mD = F.label({ display: 'flex' }),
  gD = F.div(({ isMaxed: e }) => ({
    marginLeft: '0.75rem',
    paddingTop: '0.35rem',
    color: e ? 'red' : void 0
  })),
  hD = ({
    name: e,
    value: t,
    onChange: n,
    onFocus: r,
    onBlur: a,
    maxLength: o
  }) => {
    let i = (g) => {
        n(g.target.value);
      },
      [s, u] = k.useState(!1),
      c = k.useCallback(() => {
        n(''), u(!0);
      }, [u]);
    if (t === void 0)
      return l.createElement(
        It.Button,
        { id: Vi(e), onClick: c },
        'Set string'
      );
    let d = typeof t == 'string';
    return l.createElement(
      mD,
      null,
      l.createElement(It.Textarea, {
        id: Pt(e),
        maxLength: o,
        onChange: i,
        size: 'flex',
        placeholder: 'Edit string...',
        autoFocus: s,
        valid: d ? null : 'error',
        name: e,
        value: d ? t : '',
        onFocus: r,
        onBlur: a
      }),
      o &&
        l.createElement(
          gD,
          { isMaxed: (t == null ? void 0 : t.length) === o },
          (t == null ? void 0 : t.length) ?? 0,
          ' / ',
          o
        )
    );
  },
  yD = F(It.Input)({ padding: 10 });
function vD(e) {
  e.forEach((t) => {
    t.startsWith('blob:') && URL.revokeObjectURL(t);
  });
}
var bD = ({ onChange: e, name: t, accept: n = 'image/*', value: r }) => {
    let a = k.useRef(null);
    function o(i) {
      if (!i.target.files) return;
      let s = Array.from(i.target.files).map((u) => URL.createObjectURL(u));
      e(s), vD(r);
    }
    return (
      k.useEffect(() => {
        r == null && a.current && (a.current.value = null);
      }, [r, t]),
      l.createElement(yD, {
        ref: a,
        id: Pt(t),
        type: 'file',
        name: t,
        multiple: !0,
        onChange: o,
        accept: n,
        size: 'flex'
      })
    );
  },
  ED = k.lazy(() =>
    un(
      () => import('./Color-3YIJY6X7-2671e805.js'),
      [
        './Color-3YIJY6X7-2671e805.js',
        './_commonjsHelpers-725317a4.js',
        './index-826364cc.js',
        './iframe-0fe055d1.js',
        './index-d475d2ea.js',
        './index-d37d4223.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    )
  ),
  xD = (e) =>
    l.createElement(
      k.Suspense,
      { fallback: l.createElement('div', null) },
      l.createElement(ED, { ...e })
    ),
  wD = {
    array: Mf,
    object: Mf,
    boolean: vR,
    color: xD,
    date: AR,
    number: _R,
    check: Br,
    'inline-check': Br,
    radio: Br,
    'inline-radio': Br,
    select: Br,
    'multi-select': Br,
    range: fD,
    text: hD,
    file: bD
  },
  $f = () => l.createElement(l.Fragment, null, '-'),
  SD = ({ row: e, arg: t, updateArgs: n }) => {
    let { key: r, control: a } = e,
      [o, i] = k.useState(!1),
      [s, u] = k.useState({ value: t });
    k.useEffect(() => {
      o || u({ value: t });
    }, [o, t]);
    let c = k.useCallback((h) => (u({ value: h }), n({ [r]: h }), h), [n, r]),
      d = k.useCallback(() => i(!1), []),
      g = k.useCallback(() => i(!0), []);
    if (!a || a.disable) return l.createElement($f, null);
    let f = {
        name: r,
        argType: e,
        value: s.value,
        onChange: c,
        onBlur: d,
        onFocus: g
      },
      p = wD[a.type] || $f;
    return l.createElement(p, { ...f, ...a, controlType: a.type });
  },
  AD = F.span({ fontWeight: 'bold' }),
  CD = F.span(({ theme: e }) => ({
    color: e.color.negative,
    fontFamily: e.typography.fonts.mono,
    cursor: 'help'
  })),
  kD = F.div(({ theme: e }) => ({
    '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
    code: {
      ...kn({ theme: e }),
      fontSize: 12,
      fontFamily: e.typography.fonts.mono
    },
    '& code': { margin: 0, display: 'inline-block' },
    '& pre > code': { whiteSpace: 'pre-wrap' }
  })),
  _D = F.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === 'light'
        ? fe(0.1, e.color.defaultText)
        : fe(0.2, e.color.defaultText),
    marginTop: t ? 4 : 0
  })),
  FD = F.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === 'light'
        ? fe(0.1, e.color.defaultText)
        : fe(0.2, e.color.defaultText),
    marginTop: t ? 12 : 0,
    marginBottom: 12
  })),
  TD = F.td(({ theme: e, expandable: t }) => ({
    paddingLeft: t ? '40px !important' : '20px !important'
  })),
  Sl = (e) => {
    var p;
    let {
        row: t,
        updateArgs: n,
        compact: r,
        expandable: a,
        initialExpandedArgs: o
      } = e,
      { name: i, description: s } = t,
      u = t.table || {},
      c = u.type || t.type,
      d = u.defaultValue || t.defaultValue,
      g = (p = t.type) == null ? void 0 : p.required,
      f = s != null && s !== '';
    return l.createElement(
      'tr',
      null,
      l.createElement(
        TD,
        { expandable: a },
        l.createElement(AD, null, i),
        g ? l.createElement(CD, { title: 'Required' }, '*') : null
      ),
      r
        ? null
        : l.createElement(
            'td',
            null,
            f && l.createElement(kD, null, l.createElement(Eh, null, s)),
            u.jsDocTags != null
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    FD,
                    { hasDescription: f },
                    l.createElement(ms, { value: c, initialExpandedArgs: o })
                  ),
                  l.createElement(lR, { tags: u.jsDocTags })
                )
              : l.createElement(
                  _D,
                  { hasDescription: f },
                  l.createElement(ms, { value: c, initialExpandedArgs: o })
                )
          ),
      r
        ? null
        : l.createElement(
            'td',
            null,
            l.createElement(ms, { value: d, initialExpandedArgs: o })
          ),
      n ? l.createElement('td', null, l.createElement(SD, { ...e })) : null
    );
  },
  OD = F(rt)(({ theme: e }) => ({
    marginRight: 8,
    marginLeft: -10,
    marginTop: -2,
    height: 12,
    width: 12,
    color:
      e.base === 'light'
        ? fe(0.25, e.color.defaultText)
        : fe(0.3, e.color.defaultText),
    border: 'none',
    display: 'inline-block'
  })),
  RD = F.span(({ theme: e }) => ({
    display: 'flex',
    lineHeight: '20px',
    alignItems: 'center'
  })),
  DD = F.td(({ theme: e }) => ({
    position: 'relative',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s1 - 1,
    color:
      e.base === 'light'
        ? fe(0.4, e.color.defaultText)
        : fe(0.6, e.color.defaultText),
    background: `${e.background.app} !important`,
    '& ~ td': { background: `${e.background.app} !important` }
  })),
  LD = F.td(({ theme: e }) => ({
    position: 'relative',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    background: e.background.app
  })),
  MD = F.td(() => ({ position: 'relative' })),
  $D = F.tr(({ theme: e }) => ({
    '&:hover > td': {
      backgroundColor: `${pr(0.005, e.background.app)} !important`,
      boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
      cursor: 'row-resize'
    }
  })),
  Bf = F.button(() => ({
    background: 'none',
    border: 'none',
    padding: '0',
    font: 'inherit',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    color: 'transparent',
    cursor: 'row-resize !important'
  })),
  hs = ({
    level: e = 'section',
    label: t,
    children: n,
    initialExpanded: r = !0,
    colSpan: a = 3
  }) => {
    let [o, i] = k.useState(r),
      s = e === 'subsection' ? LD : DD,
      u = (n == null ? void 0 : n.length) || 0,
      c = e === 'subsection' ? `${u} item${u !== 1 ? 's' : ''}` : '',
      d = o ? 'arrowdown' : 'arrowright',
      g = `${o ? 'Hide' : 'Show'} ${e === 'subsection' ? u : t} item${
        u !== 1 ? 's' : ''
      }`;
    return l.createElement(
      l.Fragment,
      null,
      l.createElement(
        $D,
        { title: g },
        l.createElement(
          s,
          { colSpan: 1 },
          l.createElement(Bf, { onClick: (f) => i(!o), tabIndex: 0 }, g),
          l.createElement(RD, null, l.createElement(OD, { icon: d }), t)
        ),
        l.createElement(
          MD,
          { colSpan: a - 1 },
          l.createElement(
            Bf,
            { onClick: (f) => i(!o), tabIndex: -1, style: { outline: 'none' } },
            g
          ),
          o ? null : c
        )
      ),
      o ? n : null
    );
  },
  BD = F.table(
    ({ theme: e, compact: t, inAddonPanel: n }) => ({
      '&&': {
        borderSpacing: 0,
        color: e.color.defaultText,
        'td, th': {
          padding: 0,
          border: 'none',
          verticalAlign: 'top',
          textOverflow: 'ellipsis'
        },
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '20px',
        textAlign: 'left',
        width: '100%',
        marginTop: n ? 0 : 25,
        marginBottom: n ? 0 : 40,
        'thead th:first-of-type, td:first-of-type': { width: '25%' },
        'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
        'th:nth-of-type(2), td:nth-of-type(2)': {
          ...(t ? null : { width: '35%' })
        },
        'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
        'th:last-of-type, td:last-of-type': {
          paddingRight: 20,
          ...(t ? null : { width: '25%' })
        },
        th: {
          color:
            e.base === 'light'
              ? fe(0.25, e.color.defaultText)
              : fe(0.45, e.color.defaultText),
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 15,
          paddingRight: 15
        },
        td: {
          paddingTop: '10px',
          paddingBottom: '10px',
          '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
          '&:last-of-type': { paddingRight: 20 }
        },
        marginLeft: n ? 0 : 1,
        marginRight: n ? 0 : 1,
        tbody: {
          ...(n
            ? null
            : {
                filter:
                  e.base === 'light'
                    ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                    : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))'
              }),
          '> tr > *': {
            background: e.background.content,
            borderTop: `1px solid ${e.appBorderColor}`
          },
          ...(n
            ? null
            : {
                '> tr:first-of-type > *': {
                  borderBlockStart: `1px solid ${e.appBorderColor}`
                },
                '> tr:last-of-type > *': {
                  borderBlockEnd: `1px solid ${e.appBorderColor}`
                },
                '> tr > *:first-of-type': {
                  borderInlineStart: `1px solid ${e.appBorderColor}`
                },
                '> tr > *:last-of-type': {
                  borderInlineEnd: `1px solid ${e.appBorderColor}`
                },
                '> tr:first-of-type > td:first-of-type': {
                  borderTopLeftRadius: e.appBorderRadius
                },
                '> tr:first-of-type > td:last-of-type': {
                  borderTopRightRadius: e.appBorderRadius
                },
                '> tr:last-of-type > td:first-of-type': {
                  borderBottomLeftRadius: e.appBorderRadius
                },
                '> tr:last-of-type > td:last-of-type': {
                  borderBottomRightRadius: e.appBorderRadius
                }
              })
        }
      }
    }),
    ({ isLoading: e, theme: t }) =>
      e
        ? {
            'th span, td span, td button': {
              display: 'inline',
              backgroundColor: t.appBorderColor,
              animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
              color: 'transparent',
              boxShadow: 'none',
              borderRadius: 0
            }
          }
        : {}
  ),
  ID = F(Er)(({ theme: e }) => ({
    color: e.barTextColor,
    margin: '-4px -12px -4px 0'
  })),
  PD = F.span({ display: 'flex', justifyContent: 'space-between' }),
  ND = {
    alpha: (e, t) => e.name.localeCompare(t.name),
    requiredFirst: (e, t) => {
      var n, r;
      return (
        +!!((n = t.type) != null && n.required) -
          +!!((r = e.type) != null && r.required) ||
        e.name.localeCompare(t.name)
      );
    },
    none: void 0
  },
  ys = (e) => ({
    key: e,
    name: 'propertyName',
    description: 'This is a short description',
    control: { type: 'text' },
    table: {
      type: { summary: 'summary' },
      defaultValue: { summary: 'defaultValue' }
    }
  }),
  jD = { rows: { row1: ys('row1'), row2: ys('row2'), row3: ys('row3') } },
  HD = (e, t) => {
    let n = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
    if (!e) return n;
    Object.entries(e).forEach(([o, i]) => {
      let { category: s, subcategory: u } =
        (i == null ? void 0 : i.table) || {};
      if (s) {
        let c = n.sections[s] || { ungrouped: [], subsections: {} };
        if (!u) c.ungrouped.push({ key: o, ...i });
        else {
          let d = c.subsections[u] || [];
          d.push({ key: o, ...i }), (c.subsections[u] = d);
        }
        n.sections[s] = c;
      } else if (u) {
        let c = n.ungroupedSubsections[u] || [];
        c.push({ key: o, ...i }), (n.ungroupedSubsections[u] = c);
      } else n.ungrouped.push({ key: o, ...i });
    });
    let r = ND[t],
      a = (o) =>
        r
          ? Object.keys(o).reduce((i, s) => ({ ...i, [s]: o[s].sort(r) }), {})
          : o;
    return {
      ungrouped: n.ungrouped.sort(r),
      ungroupedSubsections: a(n.ungroupedSubsections),
      sections: Object.keys(n.sections).reduce(
        (o, i) => ({
          ...o,
          [i]: {
            ungrouped: n.sections[i].ungrouped.sort(r),
            subsections: a(n.sections[i].subsections)
          }
        }),
        {}
      )
    };
  },
  ZD = (e, t, n) => {
    try {
      return uy(e, t, n);
    } catch (r) {
      return _O.warn(r.message), !1;
    }
  },
  zD = (e) => {
    if ('error' in e)
      return l.createElement(
        Bc,
        null,
        e.error,
        ' ',
        l.createElement(
          Io,
          {
            href: 'http://storybook.js.org/docs/',
            target: '_blank',
            withArrow: !0
          },
          'Read the docs'
        )
      );
    let {
        updateArgs: t,
        resetArgs: n,
        compact: r,
        inAddonPanel: a,
        initialExpandedArgs: o,
        sort: i = 'none'
      } = e,
      s = 'isLoading' in e,
      { rows: u, args: c, globals: d } = 'rows' in e ? e : jD,
      g = HD(
        PS(u, (m) => {
          var w;
          return (
            !((w = m == null ? void 0 : m.table) != null && w.disable) &&
            ZD(m, c || {}, d || {})
          );
        }),
        i
      );
    if (
      g.ungrouped.length === 0 &&
      Object.entries(g.sections).length === 0 &&
      Object.entries(g.ungroupedSubsections).length === 0
    )
      return l.createElement(
        Bc,
        null,
        'No inputs found for this component. ',
        l.createElement(
          Io,
          {
            href: 'http://storybook.js.org/docs/',
            target: '_blank',
            withArrow: !0
          },
          'Read the docs'
        )
      );
    let f = 1;
    t && (f += 1), r || (f += 2);
    let p = Object.keys(g.sections).length > 0,
      h = {
        updateArgs: t,
        compact: r,
        inAddonPanel: a,
        initialExpandedArgs: o
      };
    return l.createElement(
      yd,
      null,
      l.createElement(
        BD,
        {
          'aria-hidden': s,
          compact: r,
          inAddonPanel: a,
          isLoading: s,
          className: 'docblock-argstable sb-unstyled'
        },
        l.createElement(
          'thead',
          { className: 'docblock-argstable-head' },
          l.createElement(
            'tr',
            null,
            l.createElement('th', null, l.createElement('span', null, 'Name')),
            r
              ? null
              : l.createElement(
                  'th',
                  null,
                  l.createElement('span', null, 'Description')
                ),
            r
              ? null
              : l.createElement(
                  'th',
                  null,
                  l.createElement('span', null, 'Default')
                ),
            t
              ? l.createElement(
                  'th',
                  null,
                  l.createElement(
                    PD,
                    null,
                    'Control',
                    ' ',
                    !s &&
                      n &&
                      l.createElement(
                        ID,
                        { onClick: () => n(), title: 'Reset controls' },
                        l.createElement(rt, { icon: 'undo', 'aria-hidden': !0 })
                      )
                  )
                )
              : null
          )
        ),
        l.createElement(
          'tbody',
          { className: 'docblock-argstable-body' },
          g.ungrouped.map((m) =>
            l.createElement(Sl, {
              key: m.key,
              row: m,
              arg: c && c[m.key],
              ...h
            })
          ),
          Object.entries(g.ungroupedSubsections).map(([m, w]) =>
            l.createElement(
              hs,
              { key: m, label: m, level: 'subsection', colSpan: f },
              w.map((y) =>
                l.createElement(Sl, {
                  key: y.key,
                  row: y,
                  arg: c && c[y.key],
                  expandable: p,
                  ...h
                })
              )
            )
          ),
          Object.entries(g.sections).map(([m, w]) =>
            l.createElement(
              hs,
              { key: m, label: m, level: 'section', colSpan: f },
              w.ungrouped.map((y) =>
                l.createElement(Sl, {
                  key: y.key,
                  row: y,
                  arg: c && c[y.key],
                  ...h
                })
              ),
              Object.entries(w.subsections).map(([y, b]) =>
                l.createElement(
                  hs,
                  { key: y, label: y, level: 'subsection', colSpan: f },
                  b.map((v) =>
                    l.createElement(Sl, {
                      key: v.key,
                      row: v,
                      arg: c && c[v.key],
                      expandable: p,
                      ...h
                    })
                  )
                )
              )
            )
          )
        )
      )
    );
  };
F.div(({ theme: e }) => ({
  background: e.background.warning,
  color: e.color.darkest,
  padding: '10px 15px',
  lineHeight: '20px',
  boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`
}));
F.div(({ theme: e }) => ({
  marginRight: 30,
  fontSize: `${e.typography.size.s1}px`,
  color:
    e.base === 'light'
      ? fe(0.4, e.color.defaultText)
      : fe(0.6, e.color.defaultText)
}));
F.div({ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' });
F.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  '&:not(:last-child)': { marginBottom: '1rem' }
});
F.div(me, ({ theme: e }) => ({
  ...fu(e),
  margin: '25px 0 40px',
  padding: '30px 20px'
}));
F.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText
}));
F.div(({ theme: e }) => ({
  color:
    e.base === 'light'
      ? fe(0.2, e.color.defaultText)
      : fe(0.6, e.color.defaultText)
}));
F.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 });
F.div(({ theme: e }) => ({
  flex: 1,
  textAlign: 'center',
  fontFamily: e.typography.fonts.mono,
  fontSize: e.typography.size.s1,
  lineHeight: 1,
  overflow: 'hidden',
  color:
    e.base === 'light'
      ? fe(0.4, e.color.defaultText)
      : fe(0.6, e.color.defaultText),
  '> div': {
    display: 'inline-block',
    overflow: 'hidden',
    maxWidth: '100%',
    textOverflow: 'ellipsis'
  },
  span: { display: 'block', marginTop: 2 }
}));
F.div({ display: 'flex', flexDirection: 'row' });
F.div(({ background: e }) => ({
  position: 'relative',
  flex: 1,
  '&::before': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: e,
    content: '""'
  }
}));
F.div(({ theme: e }) => ({
  ...fu(e),
  display: 'flex',
  flexDirection: 'row',
  height: 50,
  marginBottom: 5,
  overflow: 'hidden',
  backgroundColor: 'white',
  backgroundImage:
    'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
  backgroundClip: 'padding-box'
}));
F.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  marginBottom: 30
});
F.div({ flex: 1, display: 'flex', flexDirection: 'row' });
F.div({ display: 'flex', alignItems: 'flex-start' });
F.div({ flex: '0 0 30%' });
F.div({ flex: 1 });
F.div(({ theme: e }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 20,
  fontWeight: e.typography.weight.bold,
  color:
    e.base === 'light'
      ? fe(0.4, e.color.defaultText)
      : fe(0.6, e.color.defaultText)
}));
F.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: '20px',
  display: 'flex',
  flexDirection: 'column'
}));
F.div(({ theme: e }) => ({
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s2,
  color: e.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2
}));
F.div(({ theme: e }) => ({
  ...fu(e),
  overflow: 'hidden',
  height: 40,
  width: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 'none',
  '> img, > svg': { width: 20, height: 20 }
}));
F.div({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: '0 1 calc(20% - 10px)',
  minWidth: 120,
  margin: '0px 10px 30px 0'
});
F.div({ display: 'flex', flexFlow: 'row wrap' });
var VD = (e) => `anchor--${e}`,
  UD = ({ storyId: e, children: t }) =>
    l.createElement('div', { id: VD(e), className: 'sb-anchor' }, t);
Pe &&
  Pe.__DOCS_CONTEXT__ === void 0 &&
  ((Pe.__DOCS_CONTEXT__ = k.createContext(null)),
  (Pe.__DOCS_CONTEXT__.displayName = 'DocsContext'));
var mt = Pe ? Pe.__DOCS_CONTEXT__ : k.createContext(null),
  gu = (e, t) => k.useContext(mt).resolveOf(e, t);
function qD(e, t = 'start') {
  e.scrollIntoView({ behavior: 'smooth', block: t, inline: 'nearest' });
}
function WD(e, t) {
  let n = Hd([e], t);
  return n && n[0];
}
function Hd(e, t) {
  let [n, r] = k.useState({});
  return (
    k.useEffect(() => {
      Promise.all(
        e.map(async (a) => {
          let o = await t.loadStory(a);
          r((i) => (i[a] === o ? i : { ...i, [a]: o }));
        })
      );
    }),
    e.map((a) => {
      if (n[a]) return n[a];
      try {
        return t.storyById(a);
      } catch {
        return null;
      }
    })
  );
}
function Gh(e) {
  return kO(e);
}
var Kh = k.createContext({ sources: {} }),
  Yh = '--unknown--',
  GD = ({ children: e, channel: t }) => {
    let [n, r] = k.useState({});
    return (
      k.useEffect(() => {
        let a = (o, i = null, s = !1) => {
          let {
              id: u,
              args: c = void 0,
              source: d,
              format: g
            } = typeof o == 'string' ? { id: o, source: i, format: s } : o,
            f = c ? Gh(c) : Yh;
          r((p) => ({ ...p, [u]: { ...p[u], [f]: { code: d, format: g } } }));
        };
        return t.on(Gd, a), () => t.off(Gd, a);
      }, []),
      l.createElement(Kh.Provider, { value: { sources: n } }, e)
    );
  },
  KD = ((e) => (
    (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
  ))(KD || {}),
  YD = (e) => {
    let t = e
      .map((n) => {
        var r, a;
        return (a = (r = n.parameters.docs) == null ? void 0 : r.source) == null
          ? void 0
          : a.state;
      })
      .filter(Boolean);
    return t.length === 0 ? 'closed' : t[0];
  },
  XD = (e, t, n) => {
    let { sources: r } = n,
      a = r == null ? void 0 : r[e];
    return (
      (a == null ? void 0 : a[Gh(t)]) ||
      (a == null ? void 0 : a[Yh]) || { code: '' }
    );
  },
  QD = ({
    snippet: e,
    storyContext: t,
    typeFromProps: n,
    transformFromProps: r
  }) => {
    var u, c, d, g, f, p;
    let { __isArgsStory: a } = t.parameters,
      o = ((u = t.parameters.docs) == null ? void 0 : u.source) || {},
      i = n || o.type || vu.AUTO;
    if (o.code !== void 0) return o.code;
    let s =
      i === vu.DYNAMIC || (i === vu.AUTO && e && a)
        ? e
        : o.originalSource || '';
    return (
      o.transformSource &&
        Oe(Ye`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (c = t.parameters.docs) != null &&
        c.transformSource &&
        Oe(Ye`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (d = t.parameters.jsx) != null &&
        d.transformSource &&
        Oe(Ye`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      ((p =
        r ??
        o.transform ??
        o.transformSource ??
        ((g = t.parameters.docs) == null ? void 0 : g.transformSource) ??
        ((f = t.parameters.jsx) == null ? void 0 : f.transformSource)) == null
        ? void 0
        : p(s, t)) || s
    );
  },
  Xh = (e, t, n) => {
    var p, h, m;
    let r = e.ids || (e.id ? [e.id] : []),
      a = Hd(r, t),
      o = a,
      { of: i } = e;
    if ('of' in e && i === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    if (i) o = [t.resolveOf(i, ['story']).story];
    else if (o.length === 0)
      try {
        o = [t.storyById()];
      } catch {}
    if (!a.every(Boolean))
      return { error: 'Oh no! The source is not available.', state: 'none' };
    let s =
        ((m =
          (h = (p = o[0]) == null ? void 0 : p.parameters) == null
            ? void 0
            : h.docs) == null
          ? void 0
          : m.source) || {},
      { code: u } = e,
      c = e.format ?? s.format,
      d = e.language ?? s.language ?? 'jsx',
      g = e.dark ?? s.dark ?? !1;
    u ||
      (u = o.map((w, y) => {
        var x, S;
        if (!w) return '';
        let b = t.getStoryContext(w),
          v = e.__forceInitialArgs ? b.initialArgs : b.unmappedArgs,
          E = XD(w.id, v, n);
        return (
          y === 0 &&
            (c =
              E.format ??
              ((S = (x = w.parameters.docs) == null ? void 0 : x.source) == null
                ? void 0
                : S.format) ??
              !1),
          QD({
            snippet: E.code,
            storyContext: { ...b, args: v },
            typeFromProps: e.type,
            transformFromProps: e.transform
          })
        );
      }).join(`

`));
    let f = YD(o);
    return u
      ? { code: u, format: c, language: d, dark: g, state: f }
      : { error: 'Oh no! The source is not available.', state: f };
  },
  Qh = (e, t) => {
    let { id: n, of: r, meta: a, story: o } = e;
    if ('of' in e && r === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    if (n)
      return (
        Oe(Ye`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        n
      );
    let { name: i } = e;
    return i
      ? (Oe(Ye`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        t.storyIdByName(i))
      : (o &&
          Oe(Ye`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        a && t.referenceMeta(a, !1),
        t.resolveOf(r || o || 'story', ['story']).story.id);
  },
  JD = (e, t, n) => {
    let { parameters: r = {} } = t || {},
      { docs: a = {} } = r,
      o = a.story || {};
    if (a.disable) return null;
    let { inlineStories: i, iframeHeight: s } = a;
    typeof i < 'u' &&
      Oe(Ye`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
    let u = e.inline ?? o.inline ?? i ?? !1;
    if (
      (typeof s < 'u' &&
        Oe(Ye`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
      u)
    ) {
      let d = e.height ?? o.height,
        g = e.autoplay ?? o.autoplay ?? !1;
      return {
        story: t,
        inline: !0,
        height: d,
        autoplay: g,
        forceInitialArgs: !!e.__forceInitialArgs,
        primary: !!e.__primary,
        renderStoryToElement: n.renderStoryToElement
      };
    }
    let c = e.height ?? o.height ?? o.iframeHeight ?? s ?? '100px';
    return { story: t, inline: !1, height: c, primary: !!e.__primary };
  },
  eL = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
    let t = k.useContext(mt),
      n = Qh(e, t),
      r = WD(n, t);
    if (!r) return l.createElement(Pd, null);
    let a = JD(e, r, t);
    return a ? l.createElement(YO, { ...a }) : null;
  },
  tL = (
    { withSource: e, mdxSource: t, children: n, layout: r, ...a },
    o,
    i
  ) => {
    let s = k.Children.toArray(n)
        .filter((f) => f.props && (f.props.id || f.props.name || f.props.of))
        .map((f) => Qh(f.props, o)),
      u = Hd(s, o),
      c = u.some((f) => !f),
      d = Xh(
        {
          ...(t ? { code: decodeURI(t) } : { ids: s }),
          ...(a.of && { of: a.of })
        },
        o,
        i
      );
    if (e === 'none') return { isLoading: c, previewProps: a };
    let g = r;
    return (
      k.Children.forEach(n, (f) => {
        var p, h;
        g ||
          (g =
            (h =
              (p = f == null ? void 0 : f.props) == null
                ? void 0
                : p.parameters) == null
              ? void 0
              : h.layout);
      }),
      u.forEach((f) => {
        var p, h;
        g ||
          !f ||
          (g =
            (f == null ? void 0 : f.parameters.layout) ??
            ((h = (p = f.parameters.docs) == null ? void 0 : p.canvas) == null
              ? void 0
              : h.layout));
      }),
      {
        isLoading: c,
        previewProps: {
          ...a,
          layout: g ?? 'padded',
          withSource: d,
          isExpanded: (e || d.state) === 'open'
        }
      }
    );
  },
  nL = (e) => {
    var w, y, b, v, E, x, S, A, C, T;
    let t = k.useContext(mt),
      n = k.useContext(Kh),
      { children: r, of: a, source: o } = e;
    if ('of' in e && a === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    let { isLoading: i, previewProps: s } = tL(e, t, n),
      u,
      c,
      d;
    try {
      ({ story: u } = gu(a || 'story', ['story']));
    } catch (_) {
      r || (d = _);
    }
    try {
      c = Xh({ ...o, ...(a && { of: a }) }, t, n);
    } catch (_) {
      r || (d = _);
    }
    if (d) throw d;
    if (
      (e.withSource &&
        Oe(Ye`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      e.mdxSource &&
        Oe(Ye`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      (e.isColumn !== void 0 || e.columns !== void 0) &&
        Oe(Ye`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      r)
    )
      return (
        Oe(Ye`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
        i ? l.createElement(aR, null) : l.createElement(Pc, { ...s }, r)
      );
    let g =
        e.layout ??
        u.parameters.layout ??
        ((y = (w = u.parameters.docs) == null ? void 0 : w.canvas) == null
          ? void 0
          : y.layout) ??
        'padded',
      f =
        e.withToolbar ??
        ((v = (b = u.parameters.docs) == null ? void 0 : b.canvas) == null
          ? void 0
          : v.withToolbar) ??
        !1,
      p =
        e.additionalActions ??
        ((x = (E = u.parameters.docs) == null ? void 0 : E.canvas) == null
          ? void 0
          : x.additionalActions),
      h =
        e.sourceState ??
        ((A = (S = u.parameters.docs) == null ? void 0 : S.canvas) == null
          ? void 0
          : A.sourceState) ??
        'hidden',
      m =
        e.className ??
        ((T = (C = u.parameters.docs) == null ? void 0 : C.canvas) == null
          ? void 0
          : T.className);
    return l.createElement(
      Pc,
      {
        withSource: h === 'none' ? void 0 : c,
        isExpanded: h === 'shown',
        withToolbar: f,
        additionalActions: p,
        className: m,
        layout: g
      },
      l.createElement(eL, { of: a || u.moduleExport, meta: e.meta, ...e.story })
    );
  },
  rL = (e, t) => {
    let n = t.getStoryContext(e),
      [r, a] = k.useState(n.globals);
    return (
      k.useEffect(() => {
        let o = (i) => {
          a(i.globals);
        };
        return t.channel.on(Af, o), () => t.channel.off(Af, o);
      }, [t.channel]),
      [r]
    );
  },
  aL = (e, t) => {
    let n = oL(e, t);
    if (!n) throw new Error('No result when story was defined');
    return n;
  },
  oL = (e, t) => {
    let n = e ? t.getStoryContext(e) : { args: {} },
      { id: r } = e || { id: 'none' },
      [a, o] = k.useState(n.args);
    k.useEffect(() => {
      let u = (c) => {
        c.storyId === r && o(c.args);
      };
      return t.channel.on(Sf, u), () => t.channel.off(Sf, u);
    }, [r, t.channel]);
    let i = k.useCallback(
        (u) => t.channel.emit(TO, { storyId: r, updatedArgs: u }),
        [r, t.channel]
      ),
      s = k.useCallback(
        (u) => t.channel.emit(OO, { storyId: r, argNames: u }),
        [r, t.channel]
      );
    return e && [a, i, s];
  },
  lL = (e) => {
    var m;
    let { of: t } = e;
    if ('of' in e && t === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    let n = k.useContext(mt),
      { story: r } = n.resolveOf(t || 'story', ['story']),
      { parameters: a, argTypes: o } = r,
      i = ((m = a.docs) == null ? void 0 : m.controls) || {},
      s = e.include ?? i.include,
      u = e.exclude ?? i.exclude,
      c = e.sort ?? i.sort,
      [d, g, f] = aL(r, n),
      [p] = rL(r, n),
      h = FO(o, s, u);
    return l.createElement(zD, {
      rows: h,
      args: d,
      globals: p,
      updateArgs: g,
      resetArgs: f,
      sort: c
    });
  },
  { document: Jh } = Pe,
  ey = ({ className: e, children: t, ...n }) => {
    if (typeof e != 'string' && (typeof t != 'string' || !t.match(/[\n\r]/g)))
      return l.createElement(md, null, t);
    let r = e && e.split('-');
    return l.createElement(Bd, {
      language: (r && r[1]) || 'plaintext',
      format: !1,
      code: t,
      ...n
    });
  };
function Zd(e, t) {
  e.channel.emit(RO, t);
}
var Zc = Gg.a,
  iL = ({ hash: e, children: t }) => {
    let n = k.useContext(mt);
    return l.createElement(
      Zc,
      {
        href: e,
        target: '_self',
        onClick: (r) => {
          let a = e.substring(1);
          Jh.getElementById(a) && Zd(n, e);
        }
      },
      t
    );
  },
  ty = (e) => {
    let { href: t, target: n, children: r, ...a } = e,
      o = k.useContext(mt);
    if (t) {
      if (t.startsWith('#')) return l.createElement(iL, { hash: t }, r);
      if (n !== '_blank' && !t.startsWith('https://'))
        return l.createElement(
          Zc,
          {
            href: t,
            onClick: (i) => {
              i.button === 0 &&
                !i.altKey &&
                !i.ctrlKey &&
                !i.metaKey &&
                !i.shiftKey &&
                (i.preventDefault(),
                Zd(o, i.currentTarget.getAttribute('href')));
            },
            target: n,
            ...a
          },
          r
        );
    }
    return l.createElement(Zc, { ...e });
  },
  ny = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  uL = ny.reduce(
    (e, t) => ({
      ...e,
      [t]: F(t)({
        '& svg': { position: 'relative', top: '-0.1em', visibility: 'hidden' },
        '&:hover svg': { visibility: 'visible' }
      })
    }),
    {}
  ),
  sL = F.a(() => ({
    float: 'left',
    lineHeight: 'inherit',
    paddingRight: '10px',
    marginLeft: '-24px',
    color: 'inherit'
  })),
  cL = ({ as: e, id: t, children: n, ...r }) => {
    let a = k.useContext(mt),
      o = uL[e],
      i = `#${t}`;
    return l.createElement(
      o,
      { id: t, ...r },
      l.createElement(
        sL,
        {
          'aria-hidden': 'true',
          href: i,
          tabIndex: -1,
          target: '_self',
          onClick: (s) => {
            Jh.getElementById(t) && Zd(a, i);
          }
        },
        l.createElement(rt, { icon: 'link' })
      ),
      n
    );
  },
  zd = (e) => {
    let { as: t, id: n, children: r, ...a } = e;
    if (n) return l.createElement(cL, { as: t, id: n, ...a }, r);
    let o = t,
      { as: i, ...s } = e;
    return l.createElement(o, { ...ue(s, t) });
  },
  ry = ny.reduce(
    (e, t) => ({ ...e, [t]: (n) => l.createElement(zd, { as: t, ...n }) }),
    {}
  ),
  dL = (e) => {
    var t;
    if (!e.children) return null;
    if (typeof e.children != 'string')
      throw new Error(Ye`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
    return l.createElement(Eh, {
      ...e,
      options: {
        forceBlock: !0,
        overrides: {
          code: ey,
          a: ty,
          ...ry,
          ...((t = e == null ? void 0 : e.options) == null
            ? void 0
            : t.overrides)
        },
        ...(e == null ? void 0 : e.options)
      }
    });
  },
  pL = ((e) => (
    (e.INFO = 'info'),
    (e.NOTES = 'notes'),
    (e.DOCGEN = 'docgen'),
    (e.AUTO = 'auto'),
    e
  ))(pL || {}),
  Wl =
    'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo',
  fL = (e) => e && (typeof e == 'string' ? e : vs(e.markdown) || vs(e.text)),
  mL = (e) => e && (typeof e == 'string' ? e : vs(e.text)),
  gL = (e) => null,
  hL = (e) => {
    var t, n, r, a, o, i, s, u;
    switch (e.type) {
      case 'story':
        return (
          ((n =
            (t = e.story.parameters.docs) == null ? void 0 : t.description) ==
          null
            ? void 0
            : n.story) || null
        );
      case 'meta': {
        let { parameters: c, component: d } = e.preparedMeta;
        return (
          ((a = (r = c.docs) == null ? void 0 : r.description) == null
            ? void 0
            : a.component) ||
          ((i =
            (o = c.docs) == null ? void 0 : o.extractComponentDescription) ==
          null
            ? void 0
            : i.call(o, d, { component: d, parameters: c })) ||
          null
        );
      }
      case 'component': {
        let {
          component: c,
          projectAnnotations: { parameters: d }
        } = e;
        return (
          ((u =
            (s = d.docs) == null ? void 0 : s.extractComponentDescription) ==
          null
            ? void 0
            : u.call(s, c, { component: c, parameters: d })) || null
        );
      }
      default:
        throw new Error(
          `Unrecognized module type resolved from 'useOf', got: ${e.type}`
        );
    }
  },
  yL = ({ type: e, markdown: t, children: n }, { storyById: r }) => {
    let { component: a, parameters: o } = r();
    if (n || t) return n || t;
    let { notes: i, info: s, docs: u } = o;
    (i || s) &&
      Oe(
        `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${Wl}`
      );
    let { extractComponentDescription: c = gL, description: d } = u || {},
      g = d == null ? void 0 : d.component;
    if (g) return g;
    switch (e) {
      case 'info':
        return mL(s);
      case 'notes':
        return fL(i);
      case 'docgen':
      case 'auto':
      default:
        return c(a, { component: a, ...o });
    }
  },
  zc = (e) => {
    let { of: t, type: n, markdown: r, children: a } = e;
    if ('of' in e && t === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    let o = k.useContext(mt),
      i = gu(t || 'meta'),
      s;
    return (
      n || r || a ? (s = yL(e, o)) : (s = hL(i)),
      n && Oe(`Manually specifying description type is deprecated. See ${Wl}`),
      r &&
        Oe(
          `The 'markdown' prop on the Description block is deprecated. See ${Wl}`
        ),
      a &&
        Oe(
          `The 'children' prop on the Description block is deprecated. See ${Wl}`
        ),
      s ? l.createElement(dL, null, s) : null
    );
  },
  { document: vL, window: bL } = Pe,
  EL = ({ context: e, theme: t, children: n }) => (
    k.useEffect(() => {
      let r;
      try {
        if (((r = new URL(bL.parent.location.toString())), r.hash)) {
          let a = vL.getElementById(r.hash.substring(1));
          a &&
            setTimeout(() => {
              qD(a);
            }, 200);
        }
      } catch {}
    }),
    l.createElement(
      mt.Provider,
      { value: e },
      l.createElement(
        GD,
        { channel: e.channel },
        l.createElement(Cm, { theme: Rb(t) }, l.createElement(jO, null, n))
      )
    )
  ),
  xL = /\s*\/\s*/,
  wL = (e) => {
    let t = e.trim().split(xL);
    return (t && t[t.length - 1]) || e;
  },
  SL = ({ children: e }) => {
    let t = k.useContext(mt),
      n = e || wL(t.storyById().title);
    return n
      ? l.createElement(BO, { className: 'sbdocs-title sb-unstyled' }, n)
      : null;
  },
  AL = ({ children: e }) => {
    let t = k.useContext(mt),
      { parameters: n } = t.storyById(),
      r = e || (n == null ? void 0 : n.componentSubtitle);
    return r
      ? l.createElement(IO, { className: 'sbdocs-subtitle sb-unstyled' }, r)
      : null;
  },
  CL = ({ children: e, disableAnchor: t }) => {
    if (t || typeof e != 'string') return l.createElement(hd, null, e);
    let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return l.createElement(zd, { as: 'h3', id: n }, e);
  },
  ay = ({
    of: e,
    expanded: t = !0,
    withToolbar: n = !1,
    __forceInitialArgs: r = !1,
    __primary: a = !1
  }) => {
    var s, u;
    let { story: o } = gu(e || 'story', ['story']),
      i =
        ((u = (s = o.parameters.docs) == null ? void 0 : s.canvas) == null
          ? void 0
          : u.withToolbar) ?? n;
    return l.createElement(
      UD,
      { storyId: o.id },
      t &&
        l.createElement(
          l.Fragment,
          null,
          l.createElement(CL, null, o.name),
          l.createElement(zc, { of: e })
        ),
      l.createElement(nL, {
        of: e,
        withToolbar: i,
        story: { __forceInitialArgs: r, __primary: a },
        source: { __forceInitialArgs: r }
      })
    );
  },
  kL = ({ name: e }) => {
    let t = k.useContext(mt);
    e &&
      Oe(Ye`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);
    let n = e && t.storyIdByName(e),
      r = t.storyById(n);
    return r
      ? l.createElement(ay, {
          of: r.moduleExport,
          expanded: !1,
          __primary: !0,
          withToolbar: !0
        })
      : null;
  },
  _L = ({ children: e, disableAnchor: t, ...n }) => {
    if (t || typeof e != 'string') return l.createElement(gd, null, e);
    let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return l.createElement(zd, { as: 'h2', id: r, ...n }, e);
  },
  FL = F(_L)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    fontWeight: e.typography.weight.bold,
    lineHeight: '16px',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: e.textMutedColor,
    border: 0,
    marginBottom: '12px',
    '&:first-of-type': { marginTop: '56px' }
  })),
  oy = ({ title: e, includePrimary: t = !0 }) => {
    let { componentStories: n } = k.useContext(mt),
      r = n().filter((a) => {
        var o, i;
        return !(
          (i = (o = a.parameters) == null ? void 0 : o.docs) != null &&
          i.disable
        );
      });
    return (
      t || (r = r.slice(1)),
      !r || r.length === 0
        ? null
        : l.createElement(
            l.Fragment,
            null,
            l.createElement(FL, null, e),
            r.map(
              (a) =>
                a &&
                l.createElement(ay, {
                  key: a.id,
                  of: a.moduleExport,
                  expanded: !0,
                  __forceInitialArgs: !0
                })
            )
          )
    );
  };
oy.defaultProps = { title: 'Stories' };
var TL = () => {
    let e = gu('meta', ['meta']),
      { stories: t } = e.csfFile,
      n = Object.keys(t).length === 1;
    return l.createElement(
      l.Fragment,
      null,
      l.createElement(SL, null),
      l.createElement(AL, null),
      l.createElement(zc, { of: 'meta' }),
      n ? l.createElement(zc, { of: 'story' }) : null,
      l.createElement(kL, null),
      l.createElement(lL, null),
      n ? null : l.createElement(oy, null)
    );
  },
  OL = ({ docsParameter: e, context: t }) => {
    let n = e.container || EL,
      r = e.page || TL;
    return l.createElement(
      n,
      { context: t, theme: e.theme },
      l.createElement(r, null)
    );
  },
  ly = { code: ey, a: ty, ...ry },
  RL = class extends k.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(e) {
      let { showException: t } = this.props;
      t(e);
    }
    render() {
      let { hasError: e } = this.state,
        { children: t } = this.props;
      return e ? null : t;
    }
  },
  DL = class {
    constructor() {
      (this.render = async (e, t, n) => {
        let r = { ...ly, ...(t == null ? void 0 : t.components) };
        return new Promise((a, o) => {
          un(
            () => import('./index-0ce8cadb.js'),
            [
              './index-0ce8cadb.js',
              './iframe-0fe055d1.js',
              './_commonjsHelpers-725317a4.js',
              './index-d475d2ea.js',
              './index-d37d4223.js',
              './index-826364cc.js',
              './index-356e4a49.js'
            ],
            import.meta.url
          )
            .then(({ MDXProvider: i }) =>
              Q3(
                l.createElement(
                  RL,
                  { showException: o, key: Math.random() },
                  l.createElement(
                    i,
                    { components: r },
                    l.createElement(OL, { context: e, docsParameter: t })
                  )
                ),
                n
              )
            )
            .then(a);
        });
      }),
        (this.unmount = (e) => {
          J3(e);
        });
    }
  };
const zL = Object.freeze(
  Object.defineProperty(
    { __proto__: null, DocsRenderer: DL, defaultComponents: ly },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
export {
  zL as D,
  It as F,
  eb as G,
  rt as I,
  l as R,
  Wm as S,
  Lw as T,
  Z8 as W,
  ft as _,
  og as a,
  U as b,
  Um as c,
  Cw as d,
  F as e,
  Pt as g,
  Aa as k,
  Tr as m,
  k as r,
  NL as s
};
//# sourceMappingURL=DocsRenderer-EYKKDMVH-143f168f.js.map
