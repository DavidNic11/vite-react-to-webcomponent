(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("._wrapper_16cee_1{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;border-bottom:1px solid rgba(0,0,0,.1);padding:15px 20px;display:flex;align-items:center;justify-content:space-between}._logo_16cee_10{display:inline-block;vertical-align:top}._title_16cee_15{font-weight:900;font-size:20px;line-height:1;margin:6px 0 6px 10px;display:inline-block;vertical-align:top;padding:0}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
function X_($, q) {
  for (var U = 0; U < q.length; U++) {
    const Qe = q[U];
    if (typeof Qe != "string" && !Array.isArray(Qe)) {
      for (const mt in Qe)
        if (mt !== "default" && !(mt in $)) {
          const We = Object.getOwnPropertyDescriptor(Qe, mt);
          We && Object.defineProperty($, mt, We.get ? We : {
            enumerable: !0,
            get: () => Qe[mt]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty($, Symbol.toStringTag, { value: "Module" }));
}
function K_($) {
  return $ && $.__esModule && Object.prototype.hasOwnProperty.call($, "default") ? $.default : $;
}
var Ff = { exports: {} }, Tt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z1;
function Z_() {
  if (Z1)
    return Tt;
  Z1 = 1;
  var $ = Symbol.for("react.element"), q = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), mt = Symbol.for("react.profiler"), We = Symbol.for("react.provider"), S = Symbol.for("react.context"), At = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), se = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), J = Symbol.iterator;
  function le(T) {
    return T === null || typeof T != "object" ? null : (T = J && T[J] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, de = Object.assign, Oe = {};
  function ge(T, B, ue) {
    this.props = T, this.context = B, this.refs = Oe, this.updater = ue || ie;
  }
  ge.prototype.isReactComponent = {}, ge.prototype.setState = function(T, B) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, B, "setState");
  }, ge.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function wt() {
  }
  wt.prototype = ge.prototype;
  function ut(T, B, ue) {
    this.props = T, this.context = B, this.refs = Oe, this.updater = ue || ie;
  }
  var Xe = ut.prototype = new wt();
  Xe.constructor = ut, de(Xe, ge.prototype), Xe.isPureReactComponent = !0;
  var dt = Array.isArray, De = Object.prototype.hasOwnProperty, ot = { current: null }, Ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rn(T, B, ue) {
    var Ie, Pe = {}, gt = null, at = null;
    if (B != null)
      for (Ie in B.ref !== void 0 && (at = B.ref), B.key !== void 0 && (gt = "" + B.key), B)
        De.call(B, Ie) && !Ve.hasOwnProperty(Ie) && (Pe[Ie] = B[Ie]);
    var pt = arguments.length - 2;
    if (pt === 1)
      Pe.children = ue;
    else if (1 < pt) {
      for (var it = Array(pt), jt = 0; jt < pt; jt++)
        it[jt] = arguments[jt + 2];
      Pe.children = it;
    }
    if (T && T.defaultProps)
      for (Ie in pt = T.defaultProps, pt)
        Pe[Ie] === void 0 && (Pe[Ie] = pt[Ie]);
    return { $$typeof: $, type: T, key: gt, ref: at, props: Pe, _owner: ot.current };
  }
  function bn(T, B) {
    return { $$typeof: $, type: T.type, key: B, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Wt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === $;
  }
  function Ot(T) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(ue) {
      return B[ue];
    });
  }
  var En = /\/+/g;
  function je(T, B) {
    return typeof T == "object" && T !== null && T.key != null ? Ot("" + T.key) : B.toString(36);
  }
  function et(T, B, ue, Ie, Pe) {
    var gt = typeof T;
    (gt === "undefined" || gt === "boolean") && (T = null);
    var at = !1;
    if (T === null)
      at = !0;
    else
      switch (gt) {
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case $:
            case q:
              at = !0;
          }
      }
    if (at)
      return at = T, Pe = Pe(at), T = Ie === "" ? "." + je(at, 0) : Ie, dt(Pe) ? (ue = "", T != null && (ue = T.replace(En, "$&/") + "/"), et(Pe, B, ue, "", function(jt) {
        return jt;
      })) : Pe != null && (Wt(Pe) && (Pe = bn(Pe, ue + (!Pe.key || at && at.key === Pe.key ? "" : ("" + Pe.key).replace(En, "$&/") + "/") + T)), B.push(Pe)), 1;
    if (at = 0, Ie = Ie === "" ? "." : Ie + ":", dt(T))
      for (var pt = 0; pt < T.length; pt++) {
        gt = T[pt];
        var it = Ie + je(gt, pt);
        at += et(gt, B, ue, it, Pe);
      }
    else if (it = le(T), typeof it == "function")
      for (T = it.call(T), pt = 0; !(gt = T.next()).done; )
        gt = gt.value, it = Ie + je(gt, pt++), at += et(gt, B, ue, it, Pe);
    else if (gt === "object")
      throw B = String(T), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return at;
  }
  function Ft(T, B, ue) {
    if (T == null)
      return T;
    var Ie = [], Pe = 0;
    return et(T, Ie, "", "", function(gt) {
      return B.call(ue, gt, Pe++);
    }), Ie;
  }
  function bt(T) {
    if (T._status === -1) {
      var B = T._result;
      B = B(), B.then(function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ue);
      }, function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ue);
      }), T._status === -1 && (T._status = 0, T._result = B);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var Se = { current: null }, Z = { transition: null }, xe = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: Z, ReactCurrentOwner: ot };
  return Tt.Children = { map: Ft, forEach: function(T, B, ue) {
    Ft(T, function() {
      B.apply(this, arguments);
    }, ue);
  }, count: function(T) {
    var B = 0;
    return Ft(T, function() {
      B++;
    }), B;
  }, toArray: function(T) {
    return Ft(T, function(B) {
      return B;
    }) || [];
  }, only: function(T) {
    if (!Wt(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, Tt.Component = ge, Tt.Fragment = U, Tt.Profiler = mt, Tt.PureComponent = ut, Tt.StrictMode = Qe, Tt.Suspense = me, Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, Tt.cloneElement = function(T, B, ue) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var Ie = de({}, T.props), Pe = T.key, gt = T.ref, at = T._owner;
    if (B != null) {
      if (B.ref !== void 0 && (gt = B.ref, at = ot.current), B.key !== void 0 && (Pe = "" + B.key), T.type && T.type.defaultProps)
        var pt = T.type.defaultProps;
      for (it in B)
        De.call(B, it) && !Ve.hasOwnProperty(it) && (Ie[it] = B[it] === void 0 && pt !== void 0 ? pt[it] : B[it]);
    }
    var it = arguments.length - 2;
    if (it === 1)
      Ie.children = ue;
    else if (1 < it) {
      pt = Array(it);
      for (var jt = 0; jt < it; jt++)
        pt[jt] = arguments[jt + 2];
      Ie.children = pt;
    }
    return { $$typeof: $, type: T.type, key: Pe, ref: gt, props: Ie, _owner: at };
  }, Tt.createContext = function(T) {
    return T = { $$typeof: S, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: We, _context: T }, T.Consumer = T;
  }, Tt.createElement = rn, Tt.createFactory = function(T) {
    var B = rn.bind(null, T);
    return B.type = T, B;
  }, Tt.createRef = function() {
    return { current: null };
  }, Tt.forwardRef = function(T) {
    return { $$typeof: At, render: T };
  }, Tt.isValidElement = Wt, Tt.lazy = function(T) {
    return { $$typeof: Je, _payload: { _status: -1, _result: T }, _init: bt };
  }, Tt.memo = function(T, B) {
    return { $$typeof: se, type: T, compare: B === void 0 ? null : B };
  }, Tt.startTransition = function(T) {
    var B = Z.transition;
    Z.transition = {};
    try {
      T();
    } finally {
      Z.transition = B;
    }
  }, Tt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Tt.useCallback = function(T, B) {
    return Se.current.useCallback(T, B);
  }, Tt.useContext = function(T) {
    return Se.current.useContext(T);
  }, Tt.useDebugValue = function() {
  }, Tt.useDeferredValue = function(T) {
    return Se.current.useDeferredValue(T);
  }, Tt.useEffect = function(T, B) {
    return Se.current.useEffect(T, B);
  }, Tt.useId = function() {
    return Se.current.useId();
  }, Tt.useImperativeHandle = function(T, B, ue) {
    return Se.current.useImperativeHandle(T, B, ue);
  }, Tt.useInsertionEffect = function(T, B) {
    return Se.current.useInsertionEffect(T, B);
  }, Tt.useLayoutEffect = function(T, B) {
    return Se.current.useLayoutEffect(T, B);
  }, Tt.useMemo = function(T, B) {
    return Se.current.useMemo(T, B);
  }, Tt.useReducer = function(T, B, ue) {
    return Se.current.useReducer(T, B, ue);
  }, Tt.useRef = function(T) {
    return Se.current.useRef(T);
  }, Tt.useState = function(T) {
    return Se.current.useState(T);
  }, Tt.useSyncExternalStore = function(T, B, ue) {
    return Se.current.useSyncExternalStore(T, B, ue);
  }, Tt.useTransition = function() {
    return Se.current.useTransition();
  }, Tt.version = "18.2.0", Tt;
}
var Um = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function J_() {
  return J1 || (J1 = 1, function($, q) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var U = "18.2.0", Qe = Symbol.for("react.element"), mt = Symbol.for("react.portal"), We = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), At = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), se = Symbol.for("react.context"), Je = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), ge = Symbol.iterator, wt = "@@iterator";
      function ut(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ge && h[ge] || h[wt];
        return typeof C == "function" ? C : null;
      }
      var Xe = {
        current: null
      }, dt = {
        transition: null
      }, De = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ot = {
        current: null
      }, Ve = {}, rn = null;
      function bn(h) {
        rn = h;
      }
      Ve.setExtraStackFrame = function(h) {
        rn = h;
      }, Ve.getCurrentStack = null, Ve.getStackAddendum = function() {
        var h = "";
        rn && (h += rn);
        var C = Ve.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Wt = !1, Ot = !1, En = !1, je = !1, et = !1, Ft = {
        ReactCurrentDispatcher: Xe,
        ReactCurrentBatchConfig: dt,
        ReactCurrentOwner: ot
      };
      Ft.ReactDebugCurrentFrame = Ve, Ft.ReactCurrentActQueue = De;
      function bt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          Z("warn", h, N);
        }
      }
      function Se(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          Z("error", h, N);
        }
      }
      function Z(h, C, N) {
        {
          var F = Ft.ReactDebugCurrentFrame, X = F.getStackAddendum();
          X !== "" && (C += "%s", N = N.concat([X]));
          var Ae = N.map(function(ae) {
            return String(ae);
          });
          Ae.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ae);
        }
      }
      var xe = {};
      function T(h, C) {
        {
          var N = h.constructor, F = N && (N.displayName || N.name) || "ReactClass", X = F + "." + C;
          if (xe[X])
            return;
          Se("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), xe[X] = !0;
        }
      }
      var B = {
        isMounted: function(h) {
          return !1;
        },
        enqueueForceUpdate: function(h, C, N) {
          T(h, "forceUpdate");
        },
        enqueueReplaceState: function(h, C, N, F) {
          T(h, "replaceState");
        },
        enqueueSetState: function(h, C, N, F) {
          T(h, "setState");
        }
      }, ue = Object.assign, Ie = {};
      Object.freeze(Ie);
      function Pe(h, C, N) {
        this.props = h, this.context = C, this.refs = Ie, this.updater = N || B;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Pe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var gt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, at = function(h, C) {
          Object.defineProperty(Pe.prototype, h, {
            get: function() {
              bt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var pt in gt)
          gt.hasOwnProperty(pt) && at(pt, gt[pt]);
      }
      function it() {
      }
      it.prototype = Pe.prototype;
      function jt(h, C, N) {
        this.props = h, this.context = C, this.refs = Ie, this.updater = N || B;
      }
      var Pr = jt.prototype = new it();
      Pr.constructor = jt, ue(Pr, Pe.prototype), Pr.isPureReactComponent = !0;
      function pr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Vr = Array.isArray;
      function dn(h) {
        return Vr(h);
      }
      function Yn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function An(h) {
        try {
          return Fn(h), !1;
        } catch {
          return !0;
        }
      }
      function Fn(h) {
        return "" + h;
      }
      function xn(h) {
        if (An(h))
          return Se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yn(h)), Fn(h);
      }
      function Br(h, C, N) {
        var F = h.displayName;
        if (F)
          return F;
        var X = C.displayName || C.name || "";
        return X !== "" ? N + "(" + X + ")" : N;
      }
      function $r(h) {
        return h.displayName || "Context";
      }
      function In(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case We:
            return "Fragment";
          case mt:
            return "Portal";
          case At:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case le:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case se:
              var C = h;
              return $r(C) + ".Consumer";
            case me:
              var N = h;
              return $r(N._context) + ".Provider";
            case Je:
              return Br(h, h.render, "ForwardRef");
            case ie:
              var F = h.displayName || null;
              return F !== null ? F : In(h.type) || "Memo";
            case de: {
              var X = h, Ae = X._payload, ae = X._init;
              try {
                return In(ae(Ae));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var vr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, hr, sa, er;
      er = {};
      function Ir(h) {
        if (vr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function pn(h) {
        if (vr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function wr(h, C) {
        var N = function() {
          hr || (hr = !0, Se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function li(h, C) {
        var N = function() {
          sa || (sa = !0, Se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function ca(h) {
        if (typeof h.ref == "string" && ot.current && h.__self && ot.current.stateNode !== h.__self) {
          var C = In(ot.current.type);
          er[C] || (Se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), er[C] = !0);
        }
      }
      var ee = function(h, C, N, F, X, Ae, ae) {
        var ze = {
          $$typeof: Qe,
          type: h,
          key: C,
          ref: N,
          props: ae,
          _owner: Ae
        };
        return ze._store = {}, Object.defineProperty(ze._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ze, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(ze, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
      };
      function _e(h, C, N) {
        var F, X = {}, Ae = null, ae = null, ze = null, ct = null;
        if (C != null) {
          Ir(C) && (ae = C.ref, ca(C)), pn(C) && (xn(C.key), Ae = "" + C.key), ze = C.__self === void 0 ? null : C.__self, ct = C.__source === void 0 ? null : C.__source;
          for (F in C)
            vr.call(C, F) && !Yr.hasOwnProperty(F) && (X[F] = C[F]);
        }
        var Dt = arguments.length - 2;
        if (Dt === 1)
          X.children = N;
        else if (Dt > 1) {
          for (var Xt = Array(Dt), Qt = 0; Qt < Dt; Qt++)
            Xt[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(Xt), X.children = Xt;
        }
        if (h && h.defaultProps) {
          var Kt = h.defaultProps;
          for (F in Kt)
            X[F] === void 0 && (X[F] = Kt[F]);
        }
        if (Ae || ae) {
          var nn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ae && wr(X, nn), ae && li(X, nn);
        }
        return ee(h, Ae, ae, ze, ct, ot.current, X);
      }
      function lt(h, C) {
        var N = ee(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function zt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, X = ue({}, h.props), Ae = h.key, ae = h.ref, ze = h._self, ct = h._source, Dt = h._owner;
        if (C != null) {
          Ir(C) && (ae = C.ref, Dt = ot.current), pn(C) && (xn(C.key), Ae = "" + C.key);
          var Xt;
          h.type && h.type.defaultProps && (Xt = h.type.defaultProps);
          for (F in C)
            vr.call(C, F) && !Yr.hasOwnProperty(F) && (C[F] === void 0 && Xt !== void 0 ? X[F] = Xt[F] : X[F] = C[F]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          X.children = N;
        else if (Qt > 1) {
          for (var Kt = Array(Qt), nn = 0; nn < Qt; nn++)
            Kt[nn] = arguments[nn + 2];
          X.children = Kt;
        }
        return ee(h.type, Ae, ae, ze, ct, Dt, X);
      }
      function Ht(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Qe;
      }
      var _n = ".", vn = ":";
      function mr(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(X) {
          return N[X];
        });
        return "$" + F;
      }
      var It = !1, br = /\/+/g;
      function Pt(h) {
        return h.replace(br, "$&/");
      }
      function Vt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (xn(h.key), mr("" + h.key)) : C.toString(36);
      }
      function Wa(h, C, N, F, X) {
        var Ae = typeof h;
        (Ae === "undefined" || Ae === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Ae) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Qe:
                case mt:
                  ae = !0;
              }
          }
        if (ae) {
          var ze = h, ct = X(ze), Dt = F === "" ? _n + Vt(ze, 0) : F;
          if (dn(ct)) {
            var Xt = "";
            Dt != null && (Xt = Pt(Dt) + "/"), Wa(ct, C, Xt, "", function(Vf) {
              return Vf;
            });
          } else
            ct != null && (Ht(ct) && (ct.key && (!ze || ze.key !== ct.key) && xn(ct.key), ct = lt(
              ct,
              N + (ct.key && (!ze || ze.key !== ct.key) ? Pt("" + ct.key) + "/" : "") + Dt
            )), C.push(ct));
          return 1;
        }
        var Qt, Kt, nn = 0, yt = F === "" ? _n : F + vn;
        if (dn(h))
          for (var Li = 0; Li < h.length; Li++)
            Qt = h[Li], Kt = yt + Vt(Qt, Li), nn += Wa(Qt, C, N, Kt, X);
        else {
          var Xu = ut(h);
          if (typeof Xu == "function") {
            var qo = h;
            Xu === qo.entries && (It || bt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var Pf = Xu.call(qo), Ka, Xo = 0; !(Ka = Pf.next()).done; )
              Qt = Ka.value, Kt = yt + Vt(Qt, Xo++), nn += Wa(Qt, C, N, Kt, X);
          } else if (Ae === "object") {
            var Ko = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Ko === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Ko) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function ba(h, C, N) {
        if (h == null)
          return h;
        var F = [], X = 0;
        return Wa(h, F, "", "", function(Ae) {
          return C.call(N, Ae, X++);
        }), F;
      }
      function al(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function Gl(h, C, N) {
        ba(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function ju(h) {
        return ba(h, function(C) {
          return C;
        }) || [];
      }
      function Di(h) {
        if (!Ht(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function il(h) {
        var C = {
          $$typeof: se,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: me,
          _context: C
        };
        var N = !1, F = !1, X = !1;
        {
          var Ae = {
            $$typeof: se,
            _context: C
          };
          Object.defineProperties(Ae, {
            Provider: {
              get: function() {
                return F || (F = !0, Se("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ae) {
                C.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ae) {
                C._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ae) {
                C._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ae) {
                C._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Se("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                X || (bt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), X = !0);
              }
            }
          }), C.Consumer = Ae;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var fa = -1, ui = 0, da = 1, oi = 2;
      function xr(h) {
        if (h._status === fa) {
          var C = h._result, N = C();
          if (N.then(function(Ae) {
            if (h._status === ui || h._status === fa) {
              var ae = h;
              ae._status = da, ae._result = Ae;
            }
          }, function(Ae) {
            if (h._status === ui || h._status === fa) {
              var ae = h;
              ae._status = oi, ae._result = Ae;
            }
          }), h._status === fa) {
            var F = h;
            F._status = ui, F._result = N;
          }
        }
        if (h._status === da) {
          var X = h._result;
          return X === void 0 && Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function pa(h) {
        var C = {
          _status: fa,
          _result: h
        }, N = {
          $$typeof: de,
          _payload: C,
          _init: xr
        };
        {
          var F, X;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Ae) {
                Se("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Ae, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(Ae) {
                Se("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = Ae, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function si(h) {
        h != null && h.$$typeof === ie ? Se("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Se("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Se("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Se("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Je,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(F) {
              N = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === We || h === At || et || h === S || h === J || h === le || je || h === Oe || Wt || Ot || En || typeof h == "object" && h !== null && (h.$$typeof === de || h.$$typeof === ie || h.$$typeof === me || h.$$typeof === se || h.$$typeof === Je || h.$$typeof === R || h.getModuleId !== void 0));
      }
      function te(h, C) {
        Y(h) || Se("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ie,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(X) {
              F = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return N;
      }
      function pe() {
        var h = Xe.current;
        return h === null && Se(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ze(h) {
        var C = pe();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Se("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Se("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function St(h) {
        var C = pe();
        return C.useState(h);
      }
      function tt(h, C, N) {
        var F = pe();
        return F.useReducer(h, C, N);
      }
      function Me(h) {
        var C = pe();
        return C.useRef(h);
      }
      function Ln(h, C) {
        var N = pe();
        return N.useEffect(h, C);
      }
      function en(h, C) {
        var N = pe();
        return N.useInsertionEffect(h, C);
      }
      function tn(h, C) {
        var N = pe();
        return N.useLayoutEffect(h, C);
      }
      function tr(h, C) {
        var N = pe();
        return N.useCallback(h, C);
      }
      function ci(h, C) {
        var N = pe();
        return N.useMemo(h, C);
      }
      function Hu(h, C, N) {
        var F = pe();
        return F.useImperativeHandle(h, C, N);
      }
      function xt(h, C) {
        {
          var N = pe();
          return N.useDebugValue(h, C);
        }
      }
      function jf() {
        var h = pe();
        return h.useTransition();
      }
      function Ga(h) {
        var C = pe();
        return C.useDeferredValue(h);
      }
      function st() {
        var h = pe();
        return h.useId();
      }
      function fi(h, C, N) {
        var F = pe();
        return F.useSyncExternalStore(h, C, N);
      }
      var ll = 0, Pu, ul, Qr, Io, _r, Qo, Wo;
      function qs() {
      }
      qs.__reactDisabledLog = !0;
      function Vu() {
        {
          if (ll === 0) {
            Pu = console.log, ul = console.info, Qr = console.warn, Io = console.error, _r = console.group, Qo = console.groupCollapsed, Wo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: qs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ll++;
        }
      }
      function ol() {
        {
          if (ll--, ll === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ue({}, h, {
                value: Pu
              }),
              info: ue({}, h, {
                value: ul
              }),
              warn: ue({}, h, {
                value: Qr
              }),
              error: ue({}, h, {
                value: Io
              }),
              group: ue({}, h, {
                value: _r
              }),
              groupCollapsed: ue({}, h, {
                value: Qo
              }),
              groupEnd: ue({}, h, {
                value: Wo
              })
            });
          }
          ll < 0 && Se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var qa = Ft.ReactCurrentDispatcher, Dr;
      function sl(h, C, N) {
        {
          if (Dr === void 0)
            try {
              throw Error();
            } catch (X) {
              var F = X.stack.trim().match(/\n( *(at )?)/);
              Dr = F && F[1] || "";
            }
          return `
` + Dr + h;
        }
      }
      var cl = !1, fl;
      {
        var Bu = typeof WeakMap == "function" ? WeakMap : Map;
        fl = new Bu();
      }
      function $u(h, C) {
        if (!h || cl)
          return "";
        {
          var N = fl.get(h);
          if (N !== void 0)
            return N;
        }
        var F;
        cl = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ae;
        Ae = qa.current, qa.current = null, Vu();
        try {
          if (C) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (yt) {
                F = yt;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (yt) {
                F = yt;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (yt) {
              F = yt;
            }
            h();
          }
        } catch (yt) {
          if (yt && F && typeof yt.stack == "string") {
            for (var ze = yt.stack.split(`
`), ct = F.stack.split(`
`), Dt = ze.length - 1, Xt = ct.length - 1; Dt >= 1 && Xt >= 0 && ze[Dt] !== ct[Xt]; )
              Xt--;
            for (; Dt >= 1 && Xt >= 0; Dt--, Xt--)
              if (ze[Dt] !== ct[Xt]) {
                if (Dt !== 1 || Xt !== 1)
                  do
                    if (Dt--, Xt--, Xt < 0 || ze[Dt] !== ct[Xt]) {
                      var Qt = `
` + ze[Dt].replace(" at new ", " at ");
                      return h.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", h.displayName)), typeof h == "function" && fl.set(h, Qt), Qt;
                    }
                  while (Dt >= 1 && Xt >= 0);
                break;
              }
          }
        } finally {
          cl = !1, qa.current = Ae, ol(), Error.prepareStackTrace = X;
        }
        var Kt = h ? h.displayName || h.name : "", nn = Kt ? sl(Kt) : "";
        return typeof h == "function" && fl.set(h, nn), nn;
      }
      function ki(h, C, N) {
        return $u(h, !1);
      }
      function Hf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function di(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return $u(h, Hf(h));
        if (typeof h == "string")
          return sl(h);
        switch (h) {
          case J:
            return sl("Suspense");
          case le:
            return sl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Je:
              return ki(h.render);
            case ie:
              return di(h.type, C, N);
            case de: {
              var F = h, X = F._payload, Ae = F._init;
              try {
                return di(Ae(X), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Yu = Ft.ReactDebugCurrentFrame;
      function ql(h) {
        if (h) {
          var C = h._owner, N = di(h.type, h._source, C ? C.type : null);
          Yu.setExtraStackFrame(N);
        } else
          Yu.setExtraStackFrame(null);
      }
      function Iu(h, C, N, F, X) {
        {
          var Ae = Function.call.bind(vr);
          for (var ae in h)
            if (Ae(h, ae)) {
              var ze = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var ct = Error((F || "React class") + ": " + N + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ct.name = "Invariant Violation", ct;
                }
                ze = h[ae](C, ae, F, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Dt) {
                ze = Dt;
              }
              ze && !(ze instanceof Error) && (ql(X), Se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", N, ae, typeof ze), ql(null)), ze instanceof Error && !(ze.message in Lt) && (Lt[ze.message] = !0, ql(X), Se("Failed %s type: %s", N, ze.message), ql(null));
            }
        }
      }
      function _t(h) {
        if (h) {
          var C = h._owner, N = di(h.type, h._source, C ? C.type : null);
          bn(N);
        } else
          bn(null);
      }
      var Qu;
      Qu = !1;
      function Wu() {
        if (ot.current) {
          var h = In(ot.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ge(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Xl(h) {
        return h != null ? Ge(h.__source) : "";
      }
      var hn = {};
      function Wr(h) {
        var C = Wu();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function kr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = Wr(C);
          if (!hn[N]) {
            hn[N] = !0;
            var F = "";
            h && h._owner && h._owner !== ot.current && (F = " It was passed a child from " + In(h._owner.type) + "."), _t(h), Se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, F), _t(null);
          }
        }
      }
      function dl(h, C) {
        if (typeof h == "object") {
          if (dn(h))
            for (var N = 0; N < h.length; N++) {
              var F = h[N];
              Ht(F) && kr(F, C);
            }
          else if (Ht(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = ut(h);
            if (typeof X == "function" && X !== h.entries)
              for (var Ae = X.call(h), ae; !(ae = Ae.next()).done; )
                Ht(ae.value) && kr(ae.value, C);
          }
        }
      }
      function Cn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Je || C.$$typeof === ie))
            N = C.propTypes;
          else
            return;
          if (N) {
            var F = In(C);
            Iu(N, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Qu) {
            Qu = !0;
            var X = In(C);
            Se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Bt(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var F = C[N];
            if (F !== "children" && F !== "key") {
              _t(h), Se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), _t(null);
              break;
            }
          }
          h.ref !== null && (_t(h), Se("Invalid attribute `ref` supplied to `React.Fragment`."), _t(null));
        }
      }
      function Xs(h, C, N) {
        var F = Y(h);
        if (!F) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = Xl(C);
          Ae ? X += Ae : X += Wu();
          var ae;
          h === null ? ae = "null" : dn(h) ? ae = "array" : h !== void 0 && h.$$typeof === Qe ? (ae = "<" + (In(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, Se("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, X);
        }
        var ze = _e.apply(this, arguments);
        if (ze == null)
          return ze;
        if (F)
          for (var ct = 2; ct < arguments.length; ct++)
            dl(arguments[ct], h);
        return h === We ? Bt(ze) : Cn(ze), ze;
      }
      var Gr = !1;
      function Qn(h) {
        var C = Xs.bind(null, h);
        return C.type = h, Gr || (Gr = !0, bt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return bt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function pi(h, C, N) {
        for (var F = zt.apply(this, arguments), X = 2; X < arguments.length; X++)
          dl(arguments[X], F.type);
        return Cn(F), F;
      }
      function Ks(h, C) {
        var N = dt.transition;
        dt.transition = {};
        var F = dt.transition;
        dt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (dt.transition = N, N === null && F._updatedFibers) {
            var X = F._updatedFibers.size;
            X > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Oi = !1, pl = null;
      function Zs(h) {
        if (pl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = $ && $[C];
            pl = N.call($, "timers").setImmediate;
          } catch {
            pl = function(X) {
              Oi === !1 && (Oi = !0, typeof MessageChannel > "u" && Se("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ae = new MessageChannel();
              Ae.port1.onmessage = X, Ae.port2.postMessage(void 0);
            };
          }
        return pl(h);
      }
      var xa = 0, vl = !1;
      function hl(h) {
        {
          var C = xa;
          xa++, De.current === null && (De.current = []);
          var N = De.isBatchingLegacy, F;
          try {
            if (De.isBatchingLegacy = !0, F = h(), !N && De.didScheduleLegacyUpdate) {
              var X = De.current;
              X !== null && (De.didScheduleLegacyUpdate = !1, yl(X));
            }
          } catch (Kt) {
            throw _a(C), Kt;
          } finally {
            De.isBatchingLegacy = N;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Ae = F, ae = !1, ze = {
              then: function(Kt, nn) {
                ae = !0, Ae.then(function(yt) {
                  _a(C), xa === 0 ? Gu(yt, Kt, nn) : Kt(yt);
                }, function(yt) {
                  _a(C), nn(yt);
                });
              }
            };
            return !vl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (vl = !0, Se("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ze;
          } else {
            var ct = F;
            if (_a(C), xa === 0) {
              var Dt = De.current;
              Dt !== null && (yl(Dt), De.current = null);
              var Xt = {
                then: function(Kt, nn) {
                  De.current === null ? (De.current = [], Gu(ct, Kt, nn)) : Kt(ct);
                }
              };
              return Xt;
            } else {
              var Qt = {
                then: function(Kt, nn) {
                  Kt(ct);
                }
              };
              return Qt;
            }
          }
        }
      }
      function _a(h) {
        h !== xa - 1 && Se("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), xa = h;
      }
      function Gu(h, C, N) {
        {
          var F = De.current;
          if (F !== null)
            try {
              yl(F), Zs(function() {
                F.length === 0 ? (De.current = null, C(h)) : Gu(h, C, N);
              });
            } catch (X) {
              N(X);
            }
          else
            C(h);
        }
      }
      var ml = !1;
      function yl(h) {
        if (!ml) {
          ml = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            ml = !1;
          }
        }
      }
      var Kl = Xs, qu = pi, Go = Qn, Xa = {
        map: ba,
        forEach: Gl,
        count: al,
        toArray: ju,
        only: Di
      };
      q.Children = Xa, q.Component = Pe, q.Fragment = We, q.Profiler = At, q.PureComponent = jt, q.StrictMode = S, q.Suspense = J, q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ft, q.cloneElement = qu, q.createContext = il, q.createElement = Kl, q.createFactory = Go, q.createRef = pr, q.forwardRef = si, q.isValidElement = Ht, q.lazy = pa, q.memo = te, q.startTransition = Ks, q.unstable_act = hl, q.useCallback = tr, q.useContext = Ze, q.useDebugValue = xt, q.useDeferredValue = Ga, q.useEffect = Ln, q.useId = st, q.useImperativeHandle = Hu, q.useInsertionEffect = en, q.useLayoutEffect = tn, q.useMemo = ci, q.useReducer = tt, q.useRef = Me, q.useState = St, q.useSyncExternalStore = fi, q.useTransition = jf, q.version = U, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Um, Um.exports)), Um.exports;
}
(function($) {
  process.env.NODE_ENV === "production" ? $.exports = Z_() : $.exports = J_();
})(Ff);
const eD = /* @__PURE__ */ K_(Ff.exports);
var Af = {}, oR = { exports: {} }, Ia = {}, f0 = { exports: {} }, d0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function tD() {
  return eR || (eR = 1, function($) {
    function q(Z, xe) {
      var T = Z.length;
      Z.push(xe);
      e:
        for (; 0 < T; ) {
          var B = T - 1 >>> 1, ue = Z[B];
          if (0 < mt(ue, xe))
            Z[B] = xe, Z[T] = ue, T = B;
          else
            break e;
        }
    }
    function U(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function Qe(Z) {
      if (Z.length === 0)
        return null;
      var xe = Z[0], T = Z.pop();
      if (T !== xe) {
        Z[0] = T;
        e:
          for (var B = 0, ue = Z.length, Ie = ue >>> 1; B < Ie; ) {
            var Pe = 2 * (B + 1) - 1, gt = Z[Pe], at = Pe + 1, pt = Z[at];
            if (0 > mt(gt, T))
              at < ue && 0 > mt(pt, gt) ? (Z[B] = pt, Z[at] = T, B = at) : (Z[B] = gt, Z[Pe] = T, B = Pe);
            else if (at < ue && 0 > mt(pt, T))
              Z[B] = pt, Z[at] = T, B = at;
            else
              break e;
          }
      }
      return xe;
    }
    function mt(Z, xe) {
      var T = Z.sortIndex - xe.sortIndex;
      return T !== 0 ? T : Z.id - xe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var We = performance;
      $.unstable_now = function() {
        return We.now();
      };
    } else {
      var S = Date, At = S.now();
      $.unstable_now = function() {
        return S.now() - At;
      };
    }
    var me = [], se = [], Je = 1, J = null, le = 3, ie = !1, de = !1, Oe = !1, ge = typeof setTimeout == "function" ? setTimeout : null, wt = typeof clearTimeout == "function" ? clearTimeout : null, ut = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Xe(Z) {
      for (var xe = U(se); xe !== null; ) {
        if (xe.callback === null)
          Qe(se);
        else if (xe.startTime <= Z)
          Qe(se), xe.sortIndex = xe.expirationTime, q(me, xe);
        else
          break;
        xe = U(se);
      }
    }
    function dt(Z) {
      if (Oe = !1, Xe(Z), !de)
        if (U(me) !== null)
          de = !0, bt(De);
        else {
          var xe = U(se);
          xe !== null && Se(dt, xe.startTime - Z);
        }
    }
    function De(Z, xe) {
      de = !1, Oe && (Oe = !1, wt(rn), rn = -1), ie = !0;
      var T = le;
      try {
        for (Xe(xe), J = U(me); J !== null && (!(J.expirationTime > xe) || Z && !Ot()); ) {
          var B = J.callback;
          if (typeof B == "function") {
            J.callback = null, le = J.priorityLevel;
            var ue = B(J.expirationTime <= xe);
            xe = $.unstable_now(), typeof ue == "function" ? J.callback = ue : J === U(me) && Qe(me), Xe(xe);
          } else
            Qe(me);
          J = U(me);
        }
        if (J !== null)
          var Ie = !0;
        else {
          var Pe = U(se);
          Pe !== null && Se(dt, Pe.startTime - xe), Ie = !1;
        }
        return Ie;
      } finally {
        J = null, le = T, ie = !1;
      }
    }
    var ot = !1, Ve = null, rn = -1, bn = 5, Wt = -1;
    function Ot() {
      return !($.unstable_now() - Wt < bn);
    }
    function En() {
      if (Ve !== null) {
        var Z = $.unstable_now();
        Wt = Z;
        var xe = !0;
        try {
          xe = Ve(!0, Z);
        } finally {
          xe ? je() : (ot = !1, Ve = null);
        }
      } else
        ot = !1;
    }
    var je;
    if (typeof ut == "function")
      je = function() {
        ut(En);
      };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), Ft = et.port2;
      et.port1.onmessage = En, je = function() {
        Ft.postMessage(null);
      };
    } else
      je = function() {
        ge(En, 0);
      };
    function bt(Z) {
      Ve = Z, ot || (ot = !0, je());
    }
    function Se(Z, xe) {
      rn = ge(function() {
        Z($.unstable_now());
      }, xe);
    }
    $.unstable_IdlePriority = 5, $.unstable_ImmediatePriority = 1, $.unstable_LowPriority = 4, $.unstable_NormalPriority = 3, $.unstable_Profiling = null, $.unstable_UserBlockingPriority = 2, $.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, $.unstable_continueExecution = function() {
      de || ie || (de = !0, bt(De));
    }, $.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : bn = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, $.unstable_getCurrentPriorityLevel = function() {
      return le;
    }, $.unstable_getFirstCallbackNode = function() {
      return U(me);
    }, $.unstable_next = function(Z) {
      switch (le) {
        case 1:
        case 2:
        case 3:
          var xe = 3;
          break;
        default:
          xe = le;
      }
      var T = le;
      le = xe;
      try {
        return Z();
      } finally {
        le = T;
      }
    }, $.unstable_pauseExecution = function() {
    }, $.unstable_requestPaint = function() {
    }, $.unstable_runWithPriority = function(Z, xe) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var T = le;
      le = Z;
      try {
        return xe();
      } finally {
        le = T;
      }
    }, $.unstable_scheduleCallback = function(Z, xe, T) {
      var B = $.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? B + T : B) : T = B, Z) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return ue = T + ue, Z = { id: Je++, callback: xe, priorityLevel: Z, startTime: T, expirationTime: ue, sortIndex: -1 }, T > B ? (Z.sortIndex = T, q(se, Z), U(me) === null && Z === U(se) && (Oe ? (wt(rn), rn = -1) : Oe = !0, Se(dt, T - B))) : (Z.sortIndex = ue, q(me, Z), de || ie || (de = !0, bt(De))), Z;
    }, $.unstable_shouldYield = Ot, $.unstable_wrapCallback = function(Z) {
      var xe = le;
      return function() {
        var T = le;
        le = xe;
        try {
          return Z.apply(this, arguments);
        } finally {
          le = T;
        }
      };
    };
  }(d0)), d0;
}
var p0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function nD() {
  return tR || (tR = 1, function($) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var q = !1, U = !1, Qe = 5;
      function mt(ee, _e) {
        var lt = ee.length;
        ee.push(_e), At(ee, _e, lt);
      }
      function We(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function S(ee) {
        if (ee.length === 0)
          return null;
        var _e = ee[0], lt = ee.pop();
        return lt !== _e && (ee[0] = lt, me(ee, lt, 0)), _e;
      }
      function At(ee, _e, lt) {
        for (var zt = lt; zt > 0; ) {
          var Ht = zt - 1 >>> 1, _n = ee[Ht];
          if (se(_n, _e) > 0)
            ee[Ht] = _e, ee[zt] = _n, zt = Ht;
          else
            return;
        }
      }
      function me(ee, _e, lt) {
        for (var zt = lt, Ht = ee.length, _n = Ht >>> 1; zt < _n; ) {
          var vn = (zt + 1) * 2 - 1, mr = ee[vn], It = vn + 1, br = ee[It];
          if (se(mr, _e) < 0)
            It < Ht && se(br, mr) < 0 ? (ee[zt] = br, ee[It] = _e, zt = It) : (ee[zt] = mr, ee[vn] = _e, zt = vn);
          else if (It < Ht && se(br, _e) < 0)
            ee[zt] = br, ee[It] = _e, zt = It;
          else
            return;
        }
      }
      function se(ee, _e) {
        var lt = ee.sortIndex - _e.sortIndex;
        return lt !== 0 ? lt : ee.id - _e.id;
      }
      var Je = 1, J = 2, le = 3, ie = 4, de = 5;
      function Oe(ee, _e) {
      }
      var ge = typeof performance == "object" && typeof performance.now == "function";
      if (ge) {
        var wt = performance;
        $.unstable_now = function() {
          return wt.now();
        };
      } else {
        var ut = Date, Xe = ut.now();
        $.unstable_now = function() {
          return ut.now() - Xe;
        };
      }
      var dt = 1073741823, De = -1, ot = 250, Ve = 5e3, rn = 1e4, bn = dt, Wt = [], Ot = [], En = 1, je = null, et = le, Ft = !1, bt = !1, Se = !1, Z = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(ee) {
        for (var _e = We(Ot); _e !== null; ) {
          if (_e.callback === null)
            S(Ot);
          else if (_e.startTime <= ee)
            S(Ot), _e.sortIndex = _e.expirationTime, mt(Wt, _e);
          else
            return;
          _e = We(Ot);
        }
      }
      function ue(ee) {
        if (Se = !1, B(ee), !bt)
          if (We(Wt) !== null)
            bt = !0, Ir(Ie);
          else {
            var _e = We(Ot);
            _e !== null && pn(ue, _e.startTime - ee);
          }
      }
      function Ie(ee, _e) {
        bt = !1, Se && (Se = !1, wr()), Ft = !0;
        var lt = et;
        try {
          var zt;
          if (!U)
            return Pe(ee, _e);
        } finally {
          je = null, et = lt, Ft = !1;
        }
      }
      function Pe(ee, _e) {
        var lt = _e;
        for (B(lt), je = We(Wt); je !== null && !q && !(je.expirationTime > lt && (!ee || $r())); ) {
          var zt = je.callback;
          if (typeof zt == "function") {
            je.callback = null, et = je.priorityLevel;
            var Ht = je.expirationTime <= lt, _n = zt(Ht);
            lt = $.unstable_now(), typeof _n == "function" ? je.callback = _n : je === We(Wt) && S(Wt), B(lt);
          } else
            S(Wt);
          je = We(Wt);
        }
        if (je !== null)
          return !0;
        var vn = We(Ot);
        return vn !== null && pn(ue, vn.startTime - lt), !1;
      }
      function gt(ee, _e) {
        switch (ee) {
          case Je:
          case J:
          case le:
          case ie:
          case de:
            break;
          default:
            ee = le;
        }
        var lt = et;
        et = ee;
        try {
          return _e();
        } finally {
          et = lt;
        }
      }
      function at(ee) {
        var _e;
        switch (et) {
          case Je:
          case J:
          case le:
            _e = le;
            break;
          default:
            _e = et;
            break;
        }
        var lt = et;
        et = _e;
        try {
          return ee();
        } finally {
          et = lt;
        }
      }
      function pt(ee) {
        var _e = et;
        return function() {
          var lt = et;
          et = _e;
          try {
            return ee.apply(this, arguments);
          } finally {
            et = lt;
          }
        };
      }
      function it(ee, _e, lt) {
        var zt = $.unstable_now(), Ht;
        if (typeof lt == "object" && lt !== null) {
          var _n = lt.delay;
          typeof _n == "number" && _n > 0 ? Ht = zt + _n : Ht = zt;
        } else
          Ht = zt;
        var vn;
        switch (ee) {
          case Je:
            vn = De;
            break;
          case J:
            vn = ot;
            break;
          case de:
            vn = bn;
            break;
          case ie:
            vn = rn;
            break;
          case le:
          default:
            vn = Ve;
            break;
        }
        var mr = Ht + vn, It = {
          id: En++,
          callback: _e,
          priorityLevel: ee,
          startTime: Ht,
          expirationTime: mr,
          sortIndex: -1
        };
        return Ht > zt ? (It.sortIndex = Ht, mt(Ot, It), We(Wt) === null && It === We(Ot) && (Se ? wr() : Se = !0, pn(ue, Ht - zt))) : (It.sortIndex = mr, mt(Wt, It), !bt && !Ft && (bt = !0, Ir(Ie))), It;
      }
      function jt() {
      }
      function Pr() {
        !bt && !Ft && (bt = !0, Ir(Ie));
      }
      function pr() {
        return We(Wt);
      }
      function Vr(ee) {
        ee.callback = null;
      }
      function dn() {
        return et;
      }
      var Yn = !1, An = null, Fn = -1, xn = Qe, Br = -1;
      function $r() {
        var ee = $.unstable_now() - Br;
        return !(ee < xn);
      }
      function In() {
      }
      function vr(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? xn = Math.floor(1e3 / ee) : xn = Qe;
      }
      var Yr = function() {
        if (An !== null) {
          var ee = $.unstable_now();
          Br = ee;
          var _e = !0, lt = !0;
          try {
            lt = An(_e, ee);
          } finally {
            lt ? hr() : (Yn = !1, An = null);
          }
        } else
          Yn = !1;
      }, hr;
      if (typeof T == "function")
        hr = function() {
          T(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var sa = new MessageChannel(), er = sa.port2;
        sa.port1.onmessage = Yr, hr = function() {
          er.postMessage(null);
        };
      } else
        hr = function() {
          Z(Yr, 0);
        };
      function Ir(ee) {
        An = ee, Yn || (Yn = !0, hr());
      }
      function pn(ee, _e) {
        Fn = Z(function() {
          ee($.unstable_now());
        }, _e);
      }
      function wr() {
        xe(Fn), Fn = -1;
      }
      var li = In, ca = null;
      $.unstable_IdlePriority = de, $.unstable_ImmediatePriority = Je, $.unstable_LowPriority = ie, $.unstable_NormalPriority = le, $.unstable_Profiling = ca, $.unstable_UserBlockingPriority = J, $.unstable_cancelCallback = Vr, $.unstable_continueExecution = Pr, $.unstable_forceFrameRate = vr, $.unstable_getCurrentPriorityLevel = dn, $.unstable_getFirstCallbackNode = pr, $.unstable_next = at, $.unstable_pauseExecution = jt, $.unstable_requestPaint = li, $.unstable_runWithPriority = gt, $.unstable_scheduleCallback = it, $.unstable_shouldYield = $r, $.unstable_wrapCallback = pt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(p0)), p0;
}
var nR;
function sR() {
  return nR || (nR = 1, function($) {
    process.env.NODE_ENV === "production" ? $.exports = tD() : $.exports = nD();
  }(f0)), f0.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rR;
function rD() {
  if (rR)
    return Ia;
  rR = 1;
  var $ = Ff.exports, q = sR();
  function U(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Qe = /* @__PURE__ */ new Set(), mt = {};
  function We(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (mt[n] = r, n = 0; n < r.length; n++)
      Qe.add(r[n]);
  }
  var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), me = Object.prototype.hasOwnProperty, se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Je = {}, J = {};
  function le(n) {
    return me.call(J, n) ? !0 : me.call(Je, n) ? !1 : se.test(n) ? J[n] = !0 : (Je[n] = !0, !1);
  }
  function ie(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function de(n, r, l, o) {
    if (r === null || typeof r > "u" || ie(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Oe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ge = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ge[n] = new Oe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ge[r] = new Oe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ge[n] = new Oe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ge[n] = new Oe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ge[n] = new Oe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ge[n] = new Oe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ge[n] = new Oe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ge[n] = new Oe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ge[n] = new Oe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var wt = /[\-:]([a-z])/g;
  function ut(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      wt,
      ut
    );
    ge[r] = new Oe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(wt, ut);
    ge[r] = new Oe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(wt, ut);
    ge[r] = new Oe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ge[n] = new Oe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ge.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ge[n] = new Oe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Xe(n, r, l, o) {
    var c = ge.hasOwnProperty(r) ? ge[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (de(r, l, c, o) && (l = null), o || c === null ? le(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var dt = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), ot = Symbol.for("react.portal"), Ve = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), bn = Symbol.for("react.profiler"), Wt = Symbol.for("react.provider"), Ot = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), Ft = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function xe(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, B;
  function ue(n) {
    if (B === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        B = r && r[1] || "";
      }
    return `
` + B + n;
  }
  var Ie = !1;
  function Pe(n, r) {
    if (!n || Ie)
      return "";
    Ie = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (A) {
            var o = A;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (A) {
            o = A;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var w = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Ie = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ue(n) : "";
  }
  function gt(n) {
    switch (n.tag) {
      case 5:
        return ue(n.type);
      case 16:
        return ue("Lazy");
      case 13:
        return ue("Suspense");
      case 19:
        return ue("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Pe(n.type, !1), n;
      case 11:
        return n = Pe(n.type.render, !1), n;
      case 1:
        return n = Pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function at(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ve:
        return "Fragment";
      case ot:
        return "Portal";
      case bn:
        return "Profiler";
      case rn:
        return "StrictMode";
      case je:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ot:
          return (n.displayName || "Context") + ".Consumer";
        case Wt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ft:
          return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
        case bt:
          r = n._payload, n = n._init;
          try {
            return at(n(r));
          } catch {
          }
      }
    return null;
  }
  function pt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return at(r);
      case 8:
        return r === rn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function it(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function jt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Pr(n) {
    var r = jt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function pr(n) {
    n._valueTracker || (n._valueTracker = Pr(n));
  }
  function Vr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = jt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function dn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yn(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l != null ? l : n._wrapperState.initialChecked });
  }
  function An(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = it(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Fn(n, r) {
    r = r.checked, r != null && Xe(n, "checked", r, !1);
  }
  function xn(n, r) {
    Fn(n, r);
    var l = it(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? $r(n, r.type, l) : r.hasOwnProperty("defaultValue") && $r(n, r.type, it(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Br(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function $r(n, r, l) {
    (r !== "number" || dn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var In = Array.isArray;
  function vr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + it(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(U(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function hr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(U(92));
        if (In(l)) {
          if (1 < l.length)
            throw Error(U(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: it(l) };
  }
  function sa(n, r) {
    var l = it(r.value), o = it(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function er(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ir(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ir(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var wr, li = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (wr = wr || document.createElement("div"), wr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = wr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ca(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ee = {
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
  }, _e = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(n) {
    _e.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ee[r] = ee[n];
    });
  });
  function lt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ee.hasOwnProperty(n) && ee[n] ? ("" + r).trim() : r + "px";
  }
  function zt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = lt(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ht = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function _n(n, r) {
    if (r) {
      if (Ht[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(U(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(U(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(U(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(U(62));
    }
  }
  function vn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mr = null;
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var br = null, Pt = null, Vt = null;
  function Wa(n) {
    if (n = os(n)) {
      if (typeof br != "function")
        throw Error(U(280));
      var r = n.stateNode;
      r && (r = Le(r), br(n.stateNode, n.type, r));
    }
  }
  function ba(n) {
    Pt ? Vt ? Vt.push(n) : Vt = [n] : Pt = n;
  }
  function al() {
    if (Pt) {
      var n = Pt, r = Vt;
      if (Vt = Pt = null, Wa(n), r)
        for (n = 0; n < r.length; n++)
          Wa(r[n]);
    }
  }
  function Gl(n, r) {
    return n(r);
  }
  function ju() {
  }
  var Di = !1;
  function il(n, r, l) {
    if (Di)
      return n(r, l);
    Di = !0;
    try {
      return Gl(n, r, l);
    } finally {
      Di = !1, (Pt !== null || Vt !== null) && (ju(), al());
    }
  }
  function fa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Le(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(U(231, r, typeof l));
    return l;
  }
  var ui = !1;
  if (At)
    try {
      var da = {};
      Object.defineProperty(da, "passive", { get: function() {
        ui = !0;
      } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
    } catch {
      ui = !1;
    }
  function oi(n, r, l, o, c, d, m, E, w) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var xr = !1, pa = null, si = !1, R = null, Y = { onError: function(n) {
    xr = !0, pa = n;
  } };
  function te(n, r, l, o, c, d, m, E, w) {
    xr = !1, pa = null, oi.apply(Y, arguments);
  }
  function pe(n, r, l, o, c, d, m, E, w) {
    if (te.apply(this, arguments), xr) {
      if (xr) {
        var A = pa;
        xr = !1, pa = null;
      } else
        throw Error(U(198));
      si || (si = !0, R = A);
    }
  }
  function Ze(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function St(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function tt(n) {
    if (Ze(n) !== n)
      throw Error(U(188));
  }
  function Me(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ze(n), r === null)
        throw Error(U(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return tt(c), n;
          if (d === o)
            return tt(c), r;
          d = d.sibling;
        }
        throw Error(U(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(U(189));
        }
      }
      if (l.alternate !== o)
        throw Error(U(190));
    }
    if (l.tag !== 3)
      throw Error(U(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ln(n) {
    return n = Me(n), n !== null ? en(n) : null;
  }
  function en(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = en(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var tn = q.unstable_scheduleCallback, tr = q.unstable_cancelCallback, ci = q.unstable_shouldYield, Hu = q.unstable_requestPaint, xt = q.unstable_now, jf = q.unstable_getCurrentPriorityLevel, Ga = q.unstable_ImmediatePriority, st = q.unstable_UserBlockingPriority, fi = q.unstable_NormalPriority, ll = q.unstable_LowPriority, Pu = q.unstable_IdlePriority, ul = null, Qr = null;
  function Io(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(ul, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var _r = Math.clz32 ? Math.clz32 : qs, Qo = Math.log, Wo = Math.LN2;
  function qs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Qo(n) / Wo | 0) | 0;
  }
  var Vu = 64, ol = 4194304;
  function qa(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Dr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = qa(E) : (d &= m, d !== 0 && (o = qa(d)));
    } else
      m = l & ~c, m !== 0 ? o = qa(m) : d !== 0 && (o = qa(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - _r(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function sl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function cl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - _r(d), E = 1 << m, w = c[m];
      w === -1 ? ((E & l) === 0 || (E & o) !== 0) && (c[m] = sl(E, r)) : w <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function fl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Bu() {
    var n = Vu;
    return Vu <<= 1, (Vu & 4194240) === 0 && (Vu = 64), n;
  }
  function $u(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function ki(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - _r(r), n[r] = l;
  }
  function Hf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - _r(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function di(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - _r(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Yu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var ql, Iu, _t, Qu, Wu, Ge = !1, Xl = [], hn = null, Wr = null, kr = null, dl = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Bt = [], Xs = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        kr = null;
        break;
      case "pointerover":
      case "pointerout":
        dl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function Qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = os(r), r !== null && Iu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function pi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return hn = Qn(hn, n, r, l, o, c), !0;
      case "dragenter":
        return Wr = Qn(Wr, n, r, l, o, c), !0;
      case "mouseover":
        return kr = Qn(kr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return dl.set(d, Qn(dl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, Qn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ks(n) {
    var r = ka(n.target);
    if (r !== null) {
      var l = Ze(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = St(l), r !== null) {
            n.blockedOn = r, Wu(n.priority, function() {
              _t(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Oi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = qu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        mr = o, l.target.dispatchEvent(o), mr = null;
      } else
        return r = os(l), r !== null && Iu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function pl(n, r, l) {
    Oi(n) && l.delete(r);
  }
  function Zs() {
    Ge = !1, hn !== null && Oi(hn) && (hn = null), Wr !== null && Oi(Wr) && (Wr = null), kr !== null && Oi(kr) && (kr = null), dl.forEach(pl), Cn.forEach(pl);
  }
  function xa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ge || (Ge = !0, q.unstable_scheduleCallback(q.unstable_NormalPriority, Zs)));
  }
  function vl(n) {
    function r(c) {
      return xa(c, n);
    }
    if (0 < Xl.length) {
      xa(Xl[0], n);
      for (var l = 1; l < Xl.length; l++) {
        var o = Xl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (hn !== null && xa(hn, n), Wr !== null && xa(Wr, n), kr !== null && xa(kr, n), dl.forEach(r), Cn.forEach(r), l = 0; l < Bt.length; l++)
      o = Bt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Bt.length && (l = Bt[0], l.blockedOn === null); )
      Ks(l), l.blockedOn === null && Bt.shift();
  }
  var hl = dt.ReactCurrentBatchConfig, _a = !0;
  function Gu(n, r, l, o) {
    var c = Lt, d = hl.transition;
    hl.transition = null;
    try {
      Lt = 1, yl(n, r, l, o);
    } finally {
      Lt = c, hl.transition = d;
    }
  }
  function ml(n, r, l, o) {
    var c = Lt, d = hl.transition;
    hl.transition = null;
    try {
      Lt = 4, yl(n, r, l, o);
    } finally {
      Lt = c, hl.transition = d;
    }
  }
  function yl(n, r, l, o) {
    if (_a) {
      var c = qu(n, r, l, o);
      if (c === null)
        uc(n, r, o, Kl, l), Gr(n, o);
      else if (pi(c, n, r, l, o))
        o.stopPropagation();
      else if (Gr(n, o), r & 4 && -1 < Xs.indexOf(n)) {
        for (; c !== null; ) {
          var d = os(c);
          if (d !== null && ql(d), d = qu(n, r, l, o), d === null && uc(n, r, o, Kl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        uc(n, r, o, null, l);
    }
  }
  var Kl = null;
  function qu(n, r, l, o) {
    if (Kl = null, n = It(o), n = ka(n), n !== null)
      if (r = Ze(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = St(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Kl = n, null;
  }
  function Go(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (jf()) {
          case Ga:
            return 1;
          case st:
            return 4;
          case fi:
          case ll:
            return 16;
          case Pu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xa = null, h = null, C = null;
  function N() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in Xa ? Xa.value : Xa.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function X() {
    return !0;
  }
  function Ae() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? X : Ae, this.isPropagationStopped = Ae, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = X);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = X);
    }, persist: function() {
    }, isPersistent: X }), r;
  }
  var ze = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ct = ae(ze), Dt = T({}, ze, { view: 0, detail: 0 }), Xt = ae(Dt), Qt, Kt, nn, yt = T({}, Dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (Qt = n.screenX - nn.screenX, Kt = n.screenY - nn.screenY) : Kt = Qt = 0, nn = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Kt;
  } }), Li = ae(yt), Xu = T({}, yt, { dataTransfer: 0 }), qo = ae(Xu), Pf = T({}, Dt, { relatedTarget: 0 }), Ka = ae(Pf), Xo = T({}, ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ko = ae(Xo), Vf = T({}, ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Pm = ae(Vf), Vm = T({}, ze, { data: 0 }), Bf = ae(Vm), $f = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Xp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Kp[n]) ? !!r[n] : !1;
  }
  function Yf() {
    return Zp;
  }
  var Mi = T({}, Dt, { key: function(n) {
    if (n.key) {
      var r = $f[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Xp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yf, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bm = ae(Mi), If = T({}, yt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Js = ae(If), Qf = T({}, Dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yf }), $m = ae(Qf), ec = T({}, ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = ae(ec), qr = T({}, yt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ni = ae(qr), Mn = [9, 13, 27, 32], Za = At && "CompositionEvent" in window, Zl = null;
  At && "documentMode" in document && (Zl = document.documentMode);
  var tc = At && "TextEvent" in window && !Zl, ev = At && (!Za || Zl && 8 < Zl && 11 >= Zl), Ku = String.fromCharCode(32), tv = !1;
  function nv(n, r) {
    switch (n) {
      case "keyup":
        return Mn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function nc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Zu = !1;
  function Ym(n, r) {
    switch (n) {
      case "compositionend":
        return nc(r);
      case "keypress":
        return r.which !== 32 ? null : (tv = !0, Ku);
      case "textInput":
        return n = r.data, n === Ku && tv ? null : n;
      default:
        return null;
    }
  }
  function Im(n, r) {
    if (Zu)
      return n === "compositionend" || !Za && nv(n, r) ? (n = N(), C = h = Xa = null, Zu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ev && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var rv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!rv[n.type] : r === "textarea";
  }
  function iv(n, r, l, o) {
    ba(o), r = is(r, "onChange"), 0 < r.length && (l = new ct("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Zo = null, Ju = null;
  function eo(n) {
    lc(n, 0);
  }
  function to(n) {
    var r = ro(n);
    if (Vr(r))
      return n;
  }
  function lv(n, r) {
    if (n === "change")
      return r;
  }
  var Wf = !1;
  if (At) {
    var Gf;
    if (At) {
      var qf = "oninput" in document;
      if (!qf) {
        var uv = document.createElement("div");
        uv.setAttribute("oninput", "return;"), qf = typeof uv.oninput == "function";
      }
      Gf = qf;
    } else
      Gf = !1;
    Wf = Gf && (!document.documentMode || 9 < document.documentMode);
  }
  function ov() {
    Zo && (Zo.detachEvent("onpropertychange", sv), Ju = Zo = null);
  }
  function sv(n) {
    if (n.propertyName === "value" && to(Ju)) {
      var r = [];
      iv(r, Ju, n, It(n)), il(eo, r);
    }
  }
  function Qm(n, r, l) {
    n === "focusin" ? (ov(), Zo = r, Ju = l, Zo.attachEvent("onpropertychange", sv)) : n === "focusout" && ov();
  }
  function Wm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return to(Ju);
  }
  function Gm(n, r) {
    if (n === "click")
      return to(r);
  }
  function cv(n, r) {
    if (n === "input" || n === "change")
      return to(r);
  }
  function qm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Da = typeof Object.is == "function" ? Object.is : qm;
  function Jo(n, r) {
    if (Da(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!me.call(r, c) || !Da(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function fv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function dv(n, r) {
    var l = fv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = fv(l);
    }
  }
  function pv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? pv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function rc() {
    for (var n = window, r = dn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = dn(n.document);
    }
    return r;
  }
  function zi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ac(n) {
    var r = rc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pv(l.ownerDocument.documentElement, l)) {
      if (o !== null && zi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = dv(l, d);
          var m = dv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var vv = At && "documentMode" in document && 11 >= document.documentMode, Ja = null, Xf = null, es = null, Kf = !1;
  function hv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Kf || Ja == null || Ja !== dn(o) || (o = Ja, "selectionStart" in o && zi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Jo(es, o) || (es = o, o = is(Xf, "onSelect"), 0 < o.length && (r = new ct("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ja)));
  }
  function ic(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Jl = { animationend: ic("Animation", "AnimationEnd"), animationiteration: ic("Animation", "AnimationIteration"), animationstart: ic("Animation", "AnimationStart"), transitionend: ic("Transition", "TransitionEnd") }, Zf = {}, Jf = {};
  At && (Jf = document.createElement("div").style, "AnimationEvent" in window || (delete Jl.animationend.animation, delete Jl.animationiteration.animation, delete Jl.animationstart.animation), "TransitionEvent" in window || delete Jl.transitionend.transition);
  function Wn(n) {
    if (Zf[n])
      return Zf[n];
    if (!Jl[n])
      return n;
    var r = Jl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Jf)
        return Zf[n] = r[l];
    return n;
  }
  var ed = Wn("animationend"), mv = Wn("animationiteration"), yv = Wn("animationstart"), gv = Wn("transitionend"), Sv = /* @__PURE__ */ new Map(), Ev = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ui(n, r) {
    Sv.set(n, r), We(r, [n]);
  }
  for (var ts = 0; ts < Ev.length; ts++) {
    var eu = Ev[ts], Xm = eu.toLowerCase(), ns = eu[0].toUpperCase() + eu.slice(1);
    Ui(Xm, "on" + ns);
  }
  Ui(ed, "onAnimationEnd"), Ui(mv, "onAnimationIteration"), Ui(yv, "onAnimationStart"), Ui("dblclick", "onDoubleClick"), Ui("focusin", "onFocus"), Ui("focusout", "onBlur"), Ui(gv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), We("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), We("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), We("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), We("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), We("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), We("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Km = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function Cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, pe(o, r, void 0, n), n.currentTarget = null;
  }
  function lc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], w = E.instance, A = E.currentTarget;
            if (E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, A), d = w;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], w = E.instance, A = E.currentTarget, E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, A), d = w;
          }
      }
    }
    if (si)
      throw n = R, si = !1, R = null, n;
  }
  function Zt(n, r) {
    var l = r[ud];
    l === void 0 && (l = r[ud] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Rv(r, n, 2, !1), l.add(o));
  }
  function gl(n, r, l) {
    var o = 0;
    r && (o |= 4), Rv(l, n, o, r);
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function no(n) {
    if (!n[Ai]) {
      n[Ai] = !0, Qe.forEach(function(l) {
        l !== "selectionchange" && (Km.has(l) || gl(l, !1, n), gl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ai] || (r[Ai] = !0, gl("selectionchange", !1, r));
    }
  }
  function Rv(n, r, l, o) {
    switch (Go(r)) {
      case 1:
        var c = Gu;
        break;
      case 4:
        c = ml;
        break;
      default:
        c = yl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ui || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function uc(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var w = m.tag;
                if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = ka(E), m === null)
                return;
              if (w = m.tag, w === 5 || w === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    il(function() {
      var A = d, Q = It(l), W = [];
      e: {
        var I = Sv.get(n);
        if (I !== void 0) {
          var ce = ct, Ee = n;
          switch (n) {
            case "keypress":
              if (F(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ce = Bm;
              break;
            case "focusin":
              Ee = "focus", ce = Ka;
              break;
            case "focusout":
              Ee = "blur", ce = Ka;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Ka;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = Li;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = qo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = $m;
              break;
            case ed:
            case mv:
            case yv:
              ce = Ko;
              break;
            case gv:
              ce = Jp;
              break;
            case "scroll":
              ce = Xt;
              break;
            case "wheel":
              ce = Ni;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Pm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = Js;
          }
          var Te = (r & 4) !== 0, kn = !Te && n === "scroll", D = Te ? I !== null ? I + "Capture" : null : I;
          Te = [];
          for (var x = A, L; x !== null; ) {
            L = x;
            var K = L.stateNode;
            if (L.tag === 5 && K !== null && (L = K, D !== null && (K = fa(x, D), K != null && Te.push(as(x, K, L)))), kn)
              break;
            x = x.return;
          }
          0 < Te.length && (I = new ce(I, Ee, null, l, Q), W.push({ event: I, listeners: Te }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", I && l !== mr && (Ee = l.relatedTarget || l.fromElement) && (ka(Ee) || Ee[Fi]))
            break e;
          if ((ce || I) && (I = Q.window === Q ? Q : (I = Q.ownerDocument) ? I.defaultView || I.parentWindow : window, ce ? (Ee = l.relatedTarget || l.toElement, ce = A, Ee = Ee ? ka(Ee) : null, Ee !== null && (kn = Ze(Ee), Ee !== kn || Ee.tag !== 5 && Ee.tag !== 6) && (Ee = null)) : (ce = null, Ee = A), ce !== Ee)) {
            if (Te = Li, K = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Te = Js, K = "onPointerLeave", D = "onPointerEnter", x = "pointer"), kn = ce == null ? I : ro(ce), L = Ee == null ? I : ro(Ee), I = new Te(K, x + "leave", ce, l, Q), I.target = kn, I.relatedTarget = L, K = null, ka(Q) === A && (Te = new Te(D, x + "enter", Ee, l, Q), Te.target = L, Te.relatedTarget = kn, K = Te), kn = K, ce && Ee)
              t: {
                for (Te = ce, D = Ee, x = 0, L = Te; L; L = tu(L))
                  x++;
                for (L = 0, K = D; K; K = tu(K))
                  L++;
                for (; 0 < x - L; )
                  Te = tu(Te), x--;
                for (; 0 < L - x; )
                  D = tu(D), L--;
                for (; x--; ) {
                  if (Te === D || D !== null && Te === D.alternate)
                    break t;
                  Te = tu(Te), D = tu(D);
                }
                Te = null;
              }
            else
              Te = null;
            ce !== null && td(W, I, ce, Te, !1), Ee !== null && kn !== null && td(W, kn, Ee, Te, !0);
          }
        }
        e: {
          if (I = A ? ro(A) : window, ce = I.nodeName && I.nodeName.toLowerCase(), ce === "select" || ce === "input" && I.type === "file")
            var we = lv;
          else if (av(I))
            if (Wf)
              we = cv;
            else {
              we = Wm;
              var Ce = Qm;
            }
          else
            (ce = I.nodeName) && ce.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (we = Gm);
          if (we && (we = we(n, A))) {
            iv(W, we, l, Q);
            break e;
          }
          Ce && Ce(n, I, A), n === "focusout" && (Ce = I._wrapperState) && Ce.controlled && I.type === "number" && $r(I, "number", I.value);
        }
        switch (Ce = A ? ro(A) : window, n) {
          case "focusin":
            (av(Ce) || Ce.contentEditable === "true") && (Ja = Ce, Xf = A, es = null);
            break;
          case "focusout":
            es = Xf = Ja = null;
            break;
          case "mousedown":
            Kf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kf = !1, hv(W, l, Q);
            break;
          case "selectionchange":
            if (vv)
              break;
          case "keydown":
          case "keyup":
            hv(W, l, Q);
        }
        var ke;
        if (Za)
          e: {
            switch (n) {
              case "compositionstart":
                var Ye = "onCompositionStart";
                break e;
              case "compositionend":
                Ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ye = "onCompositionUpdate";
                break e;
            }
            Ye = void 0;
          }
        else
          Zu ? nv(n, l) && (Ye = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ye = "onCompositionStart");
        Ye && (ev && l.locale !== "ko" && (Zu || Ye !== "onCompositionStart" ? Ye === "onCompositionEnd" && Zu && (ke = N()) : (Xa = Q, h = "value" in Xa ? Xa.value : Xa.textContent, Zu = !0)), Ce = is(A, Ye), 0 < Ce.length && (Ye = new Bf(Ye, n, null, l, Q), W.push({ event: Ye, listeners: Ce }), ke ? Ye.data = ke : (ke = nc(l), ke !== null && (Ye.data = ke)))), (ke = tc ? Ym(n, l) : Im(n, l)) && (A = is(A, "onBeforeInput"), 0 < A.length && (Q = new Bf("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: A }), Q.data = ke));
      }
      lc(W, r);
    });
  }
  function as(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function is(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = fa(n, l), d != null && o.unshift(as(n, d, c)), d = fa(n, r), d != null && o.push(as(n, d, c))), n = n.return;
    }
    return o;
  }
  function tu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function td(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, w = E.alternate, A = E.stateNode;
      if (w !== null && w === o)
        break;
      E.tag === 5 && A !== null && (E = A, c ? (w = fa(l, d), w != null && m.unshift(as(l, w, E))) : c || (w = fa(l, d), w != null && m.push(as(l, w, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var nd = /\r\n?/g, Zm = /\u0000|\uFFFD/g;
  function rd(n) {
    return (typeof n == "string" ? n : "" + n).replace(nd, `
`).replace(Zm, "");
  }
  function oc(n, r, l) {
    if (r = rd(r), rd(n) !== r && l)
      throw Error(U(425));
  }
  function sc() {
  }
  var ad = null, nu = null;
  function ls(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ru = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, id = typeof Promise == "function" ? Promise : void 0, ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof id < "u" ? function(n) {
    return id.resolve(null).then(n).catch(Jm);
  } : ru;
  function Jm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Sl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), vl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    vl(r);
  }
  function ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function us(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var El = Math.random().toString(36).slice(2), vi = "__reactFiber$" + El, au = "__reactProps$" + El, Fi = "__reactContainer$" + El, ud = "__reactEvents$" + El, ey = "__reactListeners$" + El, od = "__reactHandles$" + El;
  function ka(n) {
    var r = n[vi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fi] || l[vi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = us(n); n !== null; ) {
            if (l = n[vi])
              return l;
            n = us(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function os(n) {
    return n = n[vi] || n[Fi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ro(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(U(33));
  }
  function Le(n) {
    return n[au] || null;
  }
  var Cl = [], an = -1;
  function nt(n) {
    return { current: n };
  }
  function Ut(n) {
    0 > an || (n.current = Cl[an], Cl[an] = null, an--);
  }
  function $t(n, r) {
    an++, Cl[an] = n.current, n.current = r;
  }
  var hi = {}, $e = nt(hi), Rn = nt(!1), Xr = hi;
  function Oa(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return hi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function cn(n) {
    return n = n.childContextTypes, n != null;
  }
  function La() {
    Ut(Rn), Ut($e);
  }
  function Rl(n, r, l) {
    if ($e.current !== hi)
      throw Error(U(168));
    $t($e, r), $t(Rn, l);
  }
  function ss(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(U(108, pt(n) || "Unknown", c));
    return T({}, l, o);
  }
  function cc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || hi, Xr = $e.current, $t($e, n), $t(Rn, Rn.current), !0;
  }
  function wv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(U(169));
    l ? (n = ss(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, Ut(Rn), Ut($e), $t($e, n)) : Ut(Rn), $t(Rn, l);
  }
  var va = null, Gn = !1, cs = !1;
  function sd(n) {
    va === null ? va = [n] : va.push(n);
  }
  function cd(n) {
    Gn = !0, sd(n);
  }
  function Kr() {
    if (!cs && va !== null) {
      cs = !0;
      var n = 0, r = Lt;
      try {
        var l = va;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        va = null, Gn = !1;
      } catch (c) {
        throw va !== null && (va = va.slice(n + 1)), tn(Ga, Kr), c;
      } finally {
        Lt = r, cs = !1;
      }
    }
    return null;
  }
  var Tl = [], Zr = 0, iu = null, ao = 0, Jr = [], yr = 0, Ma = null, nr = 1, ji = "";
  function ha(n, r) {
    Tl[Zr++] = ao, Tl[Zr++] = iu, iu = n, ao = r;
  }
  function fd(n, r, l) {
    Jr[yr++] = nr, Jr[yr++] = ji, Jr[yr++] = Ma, Ma = n;
    var o = nr;
    n = ji;
    var c = 32 - _r(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - _r(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, nr = 1 << 32 - _r(r) + c | l << c | o, ji = d + n;
    } else
      nr = 1 << d | l << c | o, ji = n;
  }
  function fc(n) {
    n.return !== null && (ha(n, 1), fd(n, 1, 0));
  }
  function dd(n) {
    for (; n === iu; )
      iu = Tl[--Zr], Tl[Zr] = null, ao = Tl[--Zr], Tl[Zr] = null;
    for (; n === Ma; )
      Ma = Jr[--yr], Jr[yr] = null, ji = Jr[--yr], Jr[yr] = null, nr = Jr[--yr], Jr[yr] = null;
  }
  var ma = null, ea = null, ln = !1, Na = null;
  function pd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function bv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ma !== null ? { id: nr, overflow: ji } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ma = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function dc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function pc(n) {
    if (ln) {
      var r = ea;
      if (r) {
        var l = r;
        if (!bv(n, r)) {
          if (dc(n))
            throw Error(U(418));
          r = ei(l.nextSibling);
          var o = ma;
          r && bv(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, ln = !1, ma = n);
        }
      } else {
        if (dc(n))
          throw Error(U(418));
        n.flags = n.flags & -4097 | 2, ln = !1, ma = n;
      }
    }
  }
  function xv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function vc(n) {
    if (n !== ma)
      return !1;
    if (!ln)
      return xv(n), ln = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ls(n.type, n.memoizedProps)), r && (r = ea)) {
      if (dc(n))
        throw _v(), Error(U(418));
      for (; r; )
        pd(n, r), r = ei(r.nextSibling);
    }
    if (xv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(U(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ei(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else
      ea = ma ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function _v() {
    for (var n = ea; n; )
      n = ei(n.nextSibling);
  }
  function mn() {
    ea = ma = null, ln = !1;
  }
  function vd(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var hc = dt.ReactCurrentBatchConfig;
  function ya(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var mi = nt(null), mc = null, wl = null, hd = null;
  function md() {
    hd = wl = mc = null;
  }
  function bl(n) {
    var r = mi.current;
    Ut(mi), n._currentValue = r;
  }
  function qn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ne(n, r) {
    mc = n, hd = wl = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Nn = !0), n.firstContext = null);
  }
  function Dn(n) {
    var r = n._currentValue;
    if (hd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, wl === null) {
        if (mc === null)
          throw Error(U(308));
        wl = n, mc.dependencies = { lanes: 0, firstContext: n };
      } else
        wl = wl.next = n;
    return r;
  }
  var rr = null;
  function yd(n) {
    rr === null ? rr = [n] : rr.push(n);
  }
  function Dv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, yd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Hi(n, o);
  }
  function Hi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var xl = !1;
  function gd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function jn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Pi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function _l(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, (vt & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Hi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, yd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Hi(n, l);
  }
  function yc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, di(n, l);
    }
  }
  function Sd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Dl(n, r, l, o) {
    var c = n.updateQueue;
    xl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var w = E, A = w.next;
      w.next = null, m === null ? d = A : m.next = A, m = w;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = A : E.next = A, Q.lastBaseUpdate = w));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Q = A = w = null, E = d;
      do {
        var I = E.lane, ce = E.eventTime;
        if ((o & I) === I) {
          Q !== null && (Q = Q.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Ee = n, Te = E;
            switch (I = r, ce = l, Te.tag) {
              case 1:
                if (Ee = Te.payload, typeof Ee == "function") {
                  W = Ee.call(ce, W, I);
                  break e;
                }
                W = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = Te.payload, I = typeof Ee == "function" ? Ee.call(ce, W, I) : Ee, I == null)
                  break e;
                W = T({}, W, I);
                break e;
              case 2:
                xl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else
          ce = { eventTime: ce, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (A = Q = ce, w = W) : Q = Q.next = ce, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (1);
      if (Q === null && (w = W), c.baseState = w, c.firstBaseUpdate = A, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Yi |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function lu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(U(191, c));
          c.call(o);
        }
      }
  }
  var kv = new $.Component().refs;
  function Ed(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var gc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ze(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Pi(o, c);
    d.payload = r, l != null && (d.callback = l), r = _l(n, d, c), r !== null && (Rr(r, n, c, o), yc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Pi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = _l(n, d, c), r !== null && (Rr(r, n, c, o), yc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Cr(), o = zn(n), c = Pi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = _l(n, c, o), r !== null && (Rr(r, n, o, l), yc(r, n, o));
  } };
  function Ov(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function Lv(n, r, l) {
    var o = !1, c = hi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Dn(d) : (c = cn(r) ? Xr : $e.current, o = r.contextTypes, d = (o = o != null) ? Oa(n, c) : hi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = gc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Mv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && gc.enqueueReplaceState(r, r.state, null);
  }
  function Sc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = kv, gd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Dn(d) : (d = cn(r) ? Xr : $e.current, c.context = Oa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ed(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && gc.enqueueReplaceState(c, c.state, null), Dl(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function io(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(U(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(U(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === kv && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(U(284));
      if (!l._owner)
        throw Error(U(290, n));
    }
    return n;
  }
  function Ec(n, r) {
    throw n = Object.prototype.toString.call(r), Error(U(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Al(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, K) {
      return x === null || x.tag !== 6 ? (x = ks(L, D.mode, K), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function w(D, x, L, K) {
      var we = L.type;
      return we === Ve ? Q(D, x, L.props.children, K, L.key) : x !== null && (x.elementType === we || typeof we == "object" && we !== null && we.$$typeof === bt && Nv(we) === x.type) ? (K = c(x, L.props), K.ref = io(D, x, L), K.return = D, K) : (K = Zc(L.type, L.key, L.props, null, D.mode, K), K.ref = io(D, x, L), K.return = D, K);
    }
    function A(D, x, L, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = bu(L, D.mode, K), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function Q(D, x, L, K, we) {
      return x === null || x.tag !== 7 ? (x = wu(L, D.mode, K, we), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function W(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = ks("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case De:
            return L = Zc(x.type, x.key, x.props, null, D.mode, L), L.ref = io(D, null, x), L.return = D, L;
          case ot:
            return x = bu(x, D.mode, L), x.return = D, x;
          case bt:
            var K = x._init;
            return W(D, K(x._payload), L);
        }
        if (In(x) || xe(x))
          return x = wu(x, D.mode, L, null), x.return = D, x;
        Ec(D, x);
      }
      return null;
    }
    function I(D, x, L, K) {
      var we = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return we !== null ? null : E(D, x, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case De:
            return L.key === we ? w(D, x, L, K) : null;
          case ot:
            return L.key === we ? A(D, x, L, K) : null;
          case bt:
            return we = L._init, I(
              D,
              x,
              we(L._payload),
              K
            );
        }
        if (In(L) || xe(L))
          return we !== null ? null : Q(D, x, L, K, null);
        Ec(D, L);
      }
      return null;
    }
    function ce(D, x, L, K, we) {
      if (typeof K == "string" && K !== "" || typeof K == "number")
        return D = D.get(L) || null, E(x, D, "" + K, we);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case De:
            return D = D.get(K.key === null ? L : K.key) || null, w(x, D, K, we);
          case ot:
            return D = D.get(K.key === null ? L : K.key) || null, A(x, D, K, we);
          case bt:
            var Ce = K._init;
            return ce(D, x, L, Ce(K._payload), we);
        }
        if (In(K) || xe(K))
          return D = D.get(L) || null, Q(x, D, K, we, null);
        Ec(x, K);
      }
      return null;
    }
    function Ee(D, x, L, K) {
      for (var we = null, Ce = null, ke = x, Ye = x = 0, Zn = null; ke !== null && Ye < L.length; Ye++) {
        ke.index > Ye ? (Zn = ke, ke = null) : Zn = ke.sibling;
        var kt = I(D, ke, L[Ye], K);
        if (kt === null) {
          ke === null && (ke = Zn);
          break;
        }
        n && ke && kt.alternate === null && r(D, ke), x = d(kt, x, Ye), Ce === null ? we = kt : Ce.sibling = kt, Ce = kt, ke = Zn;
      }
      if (Ye === L.length)
        return l(D, ke), ln && ha(D, Ye), we;
      if (ke === null) {
        for (; Ye < L.length; Ye++)
          ke = W(D, L[Ye], K), ke !== null && (x = d(ke, x, Ye), Ce === null ? we = ke : Ce.sibling = ke, Ce = ke);
        return ln && ha(D, Ye), we;
      }
      for (ke = o(D, ke); Ye < L.length; Ye++)
        Zn = ce(ke, D, Ye, L[Ye], K), Zn !== null && (n && Zn.alternate !== null && ke.delete(Zn.key === null ? Ye : Zn.key), x = d(Zn, x, Ye), Ce === null ? we = Zn : Ce.sibling = Zn, Ce = Zn);
      return n && ke.forEach(function(Fl) {
        return r(D, Fl);
      }), ln && ha(D, Ye), we;
    }
    function Te(D, x, L, K) {
      var we = xe(L);
      if (typeof we != "function")
        throw Error(U(150));
      if (L = we.call(L), L == null)
        throw Error(U(151));
      for (var Ce = we = null, ke = x, Ye = x = 0, Zn = null, kt = L.next(); ke !== null && !kt.done; Ye++, kt = L.next()) {
        ke.index > Ye ? (Zn = ke, ke = null) : Zn = ke.sibling;
        var Fl = I(D, ke, kt.value, K);
        if (Fl === null) {
          ke === null && (ke = Zn);
          break;
        }
        n && ke && Fl.alternate === null && r(D, ke), x = d(Fl, x, Ye), Ce === null ? we = Fl : Ce.sibling = Fl, Ce = Fl, ke = Zn;
      }
      if (kt.done)
        return l(
          D,
          ke
        ), ln && ha(D, Ye), we;
      if (ke === null) {
        for (; !kt.done; Ye++, kt = L.next())
          kt = W(D, kt.value, K), kt !== null && (x = d(kt, x, Ye), Ce === null ? we = kt : Ce.sibling = kt, Ce = kt);
        return ln && ha(D, Ye), we;
      }
      for (ke = o(D, ke); !kt.done; Ye++, kt = L.next())
        kt = ce(ke, D, Ye, kt.value, K), kt !== null && (n && kt.alternate !== null && ke.delete(kt.key === null ? Ye : kt.key), x = d(kt, x, Ye), Ce === null ? we = kt : Ce.sibling = kt, Ce = kt);
      return n && ke.forEach(function(Ey) {
        return r(D, Ey);
      }), ln && ha(D, Ye), we;
    }
    function kn(D, x, L, K) {
      if (typeof L == "object" && L !== null && L.type === Ve && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case De:
            e: {
              for (var we = L.key, Ce = x; Ce !== null; ) {
                if (Ce.key === we) {
                  if (we = L.type, we === Ve) {
                    if (Ce.tag === 7) {
                      l(D, Ce.sibling), x = c(Ce, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Ce.elementType === we || typeof we == "object" && we !== null && we.$$typeof === bt && Nv(we) === Ce.type) {
                    l(D, Ce.sibling), x = c(Ce, L.props), x.ref = io(D, Ce, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Ce);
                  break;
                } else
                  r(D, Ce);
                Ce = Ce.sibling;
              }
              L.type === Ve ? (x = wu(L.props.children, D.mode, K, L.key), x.return = D, D = x) : (K = Zc(L.type, L.key, L.props, null, D.mode, K), K.ref = io(D, x, L), K.return = D, D = K);
            }
            return m(D);
          case ot:
            e: {
              for (Ce = L.key; x !== null; ) {
                if (x.key === Ce)
                  if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                    l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                    break e;
                  } else {
                    l(D, x);
                    break;
                  }
                else
                  r(D, x);
                x = x.sibling;
              }
              x = bu(L, D.mode, K), x.return = D, D = x;
            }
            return m(D);
          case bt:
            return Ce = L._init, kn(D, x, Ce(L._payload), K);
        }
        if (In(L))
          return Ee(D, x, L, K);
        if (xe(L))
          return Te(D, x, L, K);
        Ec(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = ks(L, D.mode, K), x.return = D, D = x), m(D)) : l(D, x);
    }
    return kn;
  }
  var lo = zv(!0), Uv = zv(!1), fs = {}, ti = nt(fs), ds = nt(fs), uo = nt(fs);
  function uu(n) {
    if (n === fs)
      throw Error(U(174));
    return n;
  }
  function Cd(n, r) {
    switch ($t(uo, r), $t(ds, n), $t(ti, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    Ut(ti), $t(ti, r);
  }
  function kl() {
    Ut(ti), Ut(ds), Ut(uo);
  }
  function Ue(n) {
    uu(uo.current);
    var r = uu(ti.current), l = pn(r, n.type);
    r !== l && ($t(ds, n), $t(ti, l));
  }
  function ft(n) {
    ds.current === n && (Ut(ti), Ut(ds));
  }
  var Fe = nt(0);
  function yn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var za = [];
  function Cc() {
    for (var n = 0; n < za.length; n++)
      za[n]._workInProgressVersionPrimary = null;
    za.length = 0;
  }
  var Rc = dt.ReactCurrentDispatcher, Rd = dt.ReactCurrentBatchConfig, ou = 0, un = null, P = null, Et = null, He = !1, yi = !1, ga = 0, su = 0;
  function on() {
    throw Error(U(321));
  }
  function cu(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Da(n[l], r[l]))
        return !1;
    return !0;
  }
  function Ol(n, r, l, o, c, d) {
    if (ou = d, un = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Rc.current = n === null || n.memoizedState === null ? ny : ry, n = l(o, c), yi) {
      d = 0;
      do {
        if (yi = !1, ga = 0, 25 <= d)
          throw Error(U(301));
        d += 1, Et = P = null, r.updateQueue = null, Rc.current = wd, n = l(o, c);
      } while (yi);
    }
    if (Rc.current = jc, r = P !== null && P.next !== null, ou = 0, Et = P = un = null, He = !1, r)
      throw Error(U(300));
    return n;
  }
  function fu() {
    var n = ga !== 0;
    return ga = 0, n;
  }
  function Ua() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? un.memoizedState = Et = n : Et = Et.next = n, Et;
  }
  function ta() {
    if (P === null) {
      var n = un.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = P.next;
    var r = Et === null ? un.memoizedState : Et.next;
    if (r !== null)
      Et = r, P = n;
    else {
      if (n === null)
        throw Error(U(310));
      P = n, n = { memoizedState: P.memoizedState, baseState: P.baseState, baseQueue: P.baseQueue, queue: P.queue, next: null }, Et === null ? un.memoizedState = Et = n : Et = Et.next = n;
    }
    return Et;
  }
  function du(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ps(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(U(311));
    l.lastRenderedReducer = n;
    var o = P, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, w = null, A = d;
      do {
        var Q = A.lane;
        if ((ou & Q) === Q)
          w !== null && (w = w.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var W = {
            lane: Q,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          w === null ? (E = w = W, m = o) : w = w.next = W, un.lanes |= Q, Yi |= Q;
        }
        A = A.next;
      } while (A !== null && A !== d);
      w === null ? m = o : w.next = E, Da(o, r.memoizedState) || (Nn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, un.lanes |= d, Yi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function vs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(U(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Da(d, r.memoizedState) || (Nn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Tc() {
  }
  function wc(n, r) {
    var l = un, o = ta(), c = r(), d = !Da(o.memoizedState, c);
    if (d && (o.memoizedState = c, Nn = !0), o = o.queue, hs(_c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Et !== null && Et.memoizedState.tag & 1) {
      if (l.flags |= 2048, pu(9, xc.bind(null, l, o, c, r), void 0, null), gn === null)
        throw Error(U(349));
      (ou & 30) !== 0 || bc(l, r, c);
    }
    return c;
  }
  function bc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, un.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function xc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Dc(r) && kc(n);
  }
  function _c(n, r, l) {
    return l(function() {
      Dc(r) && kc(n);
    });
  }
  function Dc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Da(n, l);
    } catch {
      return !0;
    }
  }
  function kc(n) {
    var r = Hi(n, 1);
    r !== null && Rr(r, n, 1, -1);
  }
  function Oc(n) {
    var r = Ua();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: du, lastRenderedState: n }, r.queue = n, n = n.dispatch = Fc.bind(null, un, n), [r.memoizedState, n];
  }
  function pu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, un.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Lc() {
    return ta().memoizedState;
  }
  function vu(n, r, l, o) {
    var c = Ua();
    un.flags |= n, c.memoizedState = pu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Vi(n, r, l, o) {
    var c = ta();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (P !== null) {
      var m = P.memoizedState;
      if (d = m.destroy, o !== null && cu(o, m.deps)) {
        c.memoizedState = pu(r, l, d, o);
        return;
      }
    }
    un.flags |= n, c.memoizedState = pu(1 | r, l, d, o);
  }
  function Mc(n, r) {
    return vu(8390656, 8, n, r);
  }
  function hs(n, r) {
    return Vi(2048, 8, n, r);
  }
  function Nc(n, r) {
    return Vi(4, 2, n, r);
  }
  function zc(n, r) {
    return Vi(4, 4, n, r);
  }
  function Td(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function oo(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Vi(4, 4, Td.bind(null, r, n), l);
  }
  function Uc() {
  }
  function so(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && cu(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ll(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && cu(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function na(n, r, l) {
    return (ou & 21) === 0 ? (n.baseState && (n.baseState = !1, Nn = !0), n.memoizedState = l) : (Da(l, r) || (l = Bu(), un.lanes |= l, Yi |= l, n.baseState = !0), r);
  }
  function ty(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Rd.transition;
    Rd.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Rd.transition = o;
    }
  }
  function Jt() {
    return ta().memoizedState;
  }
  function Ac(n, r, l) {
    var o = zn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, co(n))
      ms(r, l);
    else if (l = Dv(n, r, l, o), l !== null) {
      var c = Cr();
      Rr(l, n, o, c), Av(l, r, o);
    }
  }
  function Fc(n, r, l) {
    var o = zn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (co(n))
      ms(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, Da(E, m)) {
            var w = r.interleaved;
            w === null ? (c.next = c, yd(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Dv(n, r, c, o), l !== null && (c = Cr(), Rr(l, n, o, c), Av(l, r, o));
    }
  }
  function co(n) {
    var r = n.alternate;
    return n === un || r !== null && r === un;
  }
  function ms(n, r) {
    yi = He = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Av(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, di(n, l);
    }
  }
  var jc = { readContext: Dn, useCallback: on, useContext: on, useEffect: on, useImperativeHandle: on, useInsertionEffect: on, useLayoutEffect: on, useMemo: on, useReducer: on, useRef: on, useState: on, useDebugValue: on, useDeferredValue: on, useTransition: on, useMutableSource: on, useSyncExternalStore: on, useId: on, unstable_isNewReconciler: !1 }, ny = { readContext: Dn, useCallback: function(n, r) {
    return Ua().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Dn, useEffect: Mc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, vu(
      4194308,
      4,
      Td.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return vu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return vu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ua();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Ua();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Ac.bind(null, un, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ua();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Oc, useDebugValue: Uc, useDeferredValue: function(n) {
    return Ua().memoizedState = n;
  }, useTransition: function() {
    var n = Oc(!1), r = n[0];
    return n = ty.bind(null, n[1]), Ua().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = un, c = Ua();
    if (ln) {
      if (l === void 0)
        throw Error(U(407));
      l = l();
    } else {
      if (l = r(), gn === null)
        throw Error(U(349));
      (ou & 30) !== 0 || bc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Mc(_c.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, pu(9, xc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ua(), r = gn.identifierPrefix;
    if (ln) {
      var l = ji, o = nr;
      l = (o & ~(1 << 32 - _r(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ga++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = su++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ry = {
    readContext: Dn,
    useCallback: so,
    useContext: Dn,
    useEffect: hs,
    useImperativeHandle: oo,
    useInsertionEffect: Nc,
    useLayoutEffect: zc,
    useMemo: Ll,
    useReducer: ps,
    useRef: Lc,
    useState: function() {
      return ps(du);
    },
    useDebugValue: Uc,
    useDeferredValue: function(n) {
      var r = ta();
      return na(r, P.memoizedState, n);
    },
    useTransition: function() {
      var n = ps(du)[0], r = ta().memoizedState;
      return [n, r];
    },
    useMutableSource: Tc,
    useSyncExternalStore: wc,
    useId: Jt,
    unstable_isNewReconciler: !1
  }, wd = { readContext: Dn, useCallback: so, useContext: Dn, useEffect: hs, useImperativeHandle: oo, useInsertionEffect: Nc, useLayoutEffect: zc, useMemo: Ll, useReducer: vs, useRef: Lc, useState: function() {
    return vs(du);
  }, useDebugValue: Uc, useDeferredValue: function(n) {
    var r = ta();
    return P === null ? r.memoizedState = n : na(r, P.memoizedState, n);
  }, useTransition: function() {
    var n = vs(du)[0], r = ta().memoizedState;
    return [n, r];
  }, useMutableSource: Tc, useSyncExternalStore: wc, useId: Jt, unstable_isNewReconciler: !1 };
  function fo(n, r) {
    try {
      var l = "", o = r;
      do
        l += gt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function ys(n, r, l) {
    return { value: n, source: null, stack: l != null ? l : null, digest: r != null ? r : null };
  }
  function Hc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ay = typeof WeakMap == "function" ? WeakMap : Map;
  function Fv(n, r, l) {
    l = Pi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Qc || (Qc = !0, Su = o), Hc(n, r);
    }, l;
  }
  function gs(n, r, l) {
    l = Pi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Hc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Hc(n, r), typeof o != "function" && (Ei === null ? Ei = /* @__PURE__ */ new Set([this]) : Ei.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function jv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ay();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = fy.bind(null, n, r, l), r.then(n, n));
  }
  function bd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function xd(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Pi(-1, 1), r.tag = 2, _l(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var iy = dt.ReactCurrentOwner, Nn = !1;
  function Hn(n, r, l, o) {
    r.child = n === null ? Uv(r, null, l, o) : lo(r, n.child, l, o);
  }
  function Ml(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ne(r, c), o = Ol(n, r, l, o, d, c), l = fu(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (ln && l && fc(r), r.flags |= 1, Hn(n, r, o, c), r.child);
  }
  function Pc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Id(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, ra(n, r, d, o, c)) : (n = Zc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref)
        return ar(n, r, c);
    }
    return r.flags |= 1, n = Al(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ra(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref)
        if (Nn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          (n.flags & 131072) !== 0 && (Nn = !0);
        else
          return r.lanes = n.lanes, ar(n, r, c);
    }
    return po(n, r, l, o, c);
  }
  function hu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if ((r.mode & 1) === 0)
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $t(So, Sa), Sa |= l;
      else {
        if ((l & 1073741824) === 0)
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, $t(So, Sa), Sa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, $t(So, Sa), Sa |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, $t(So, Sa), Sa |= o;
    return Hn(n, r, c, l), r.child;
  }
  function rt(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function po(n, r, l, o, c) {
    var d = cn(l) ? Xr : $e.current;
    return d = Oa(r, d), ne(r, c), l = Ol(n, r, l, o, d, c), o = fu(), n !== null && !Nn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (ln && o && fc(r), r.flags |= 1, Hn(n, r, l, c), r.child);
  }
  function _d(n, r, l, o, c) {
    if (cn(l)) {
      var d = !0;
      cc(r);
    } else
      d = !1;
    if (ne(r, c), r.stateNode === null)
      gr(n, r), Lv(r, l, o), Sc(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var w = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = Dn(A) : (A = cn(l) ? Xr : $e.current, A = Oa(r, A));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || w !== A) && Mv(r, m, o, A), xl = !1;
      var I = r.memoizedState;
      m.state = I, Dl(r, o, m, c), w = r.memoizedState, E !== o || I !== w || Rn.current || xl ? (typeof Q == "function" && (Ed(r, l, Q, o), w = r.memoizedState), (E = xl || Ov(r, l, E, o, I, w, A)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, jn(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ya(r.type, E), m.props = A, W = r.pendingProps, I = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = Dn(w) : (w = cn(l) ? Xr : $e.current, w = Oa(r, w));
      var ce = l.getDerivedStateFromProps;
      (Q = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || I !== w) && Mv(r, m, o, w), xl = !1, I = r.memoizedState, m.state = I, Dl(r, o, m, c);
      var Ee = r.memoizedState;
      E !== W || I !== Ee || Rn.current || xl ? (typeof ce == "function" && (Ed(r, l, ce, o), Ee = r.memoizedState), (A = xl || Ov(r, l, A, o, I, Ee, w) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ee, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ee, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ee), m.props = o, m.state = Ee, m.context = w, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Hv(n, r, l, o, d, c);
  }
  function Hv(n, r, l, o, c, d) {
    rt(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && wv(r, l, !1), ar(n, r, d);
    o = r.stateNode, iy.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = lo(r, n.child, null, d), r.child = lo(r, null, E, d)) : Hn(n, r, E, d), r.memoizedState = o.state, c && wv(r, l, !0), r.child;
  }
  function Pv(n) {
    var r = n.stateNode;
    r.pendingContext ? Rl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Rl(n, r.context, !1), Cd(n, r.containerInfo);
  }
  function Vc(n, r, l, o, c) {
    return mn(), vd(c), r.flags |= 256, Hn(n, r, l, o), r.child;
  }
  var mu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Dd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function kd(n, r, l) {
    var o = r.pendingProps, c = Fe.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), $t(Fe, c & 1), n === null)
      return pc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Ds(m, o, 0, null), n = wu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Dd(l), r.memoizedState = mu, n) : Od(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return ly(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return (m & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Al(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Al(E, d) : (d = wu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Dd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = mu, o;
    }
    return d = n.child, n = d.sibling, o = Al(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Od(n, r) {
    return r = Ds({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function vo(n, r, l, o) {
    return o !== null && vd(o), lo(r, n.child, null, l), n = Od(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ly(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = ys(Error(U(422))), vo(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Ds({ mode: "visible", children: o.children }, c, 0, null), d = wu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && lo(r, n.child, null, m), r.child.memoizedState = Dd(m), r.memoizedState = mu, d);
    if ((r.mode & 1) === 0)
      return vo(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(U(419)), o = ys(d, o, void 0), vo(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Nn || E) {
      if (o = gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Hi(n, c), Rr(o, n, c, -1));
      }
      return Bd(), o = ys(Error(U(421))), vo(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = dy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ei(c.nextSibling), ma = r, ln = !0, Na = null, n !== null && (Jr[yr++] = nr, Jr[yr++] = ji, Jr[yr++] = Ma, nr = n.id, ji = n.overflow, Ma = r), r = Od(r, o.children), r.flags |= 4096, r);
  }
  function Ld(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), qn(n.return, r, l);
  }
  function Bc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Md(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Hn(n, r, o.children, l), o = Fe.current, (o & 2) !== 0)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Ld(n, l, r);
            else if (n.tag === 19)
              Ld(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if ($t(Fe, o), (r.mode & 1) === 0)
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && yn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Bc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && yn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Bc(r, !0, l, null, d);
          break;
        case "together":
          Bc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function gr(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ar(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Yi |= r.lanes, (l & r.childLanes) === 0)
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(U(153));
    if (r.child !== null) {
      for (n = r.child, l = Al(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Al(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Bi(n, r, l) {
    switch (r.tag) {
      case 3:
        Pv(r), mn();
        break;
      case 5:
        Ue(r);
        break;
      case 1:
        cn(r.type) && cc(r);
        break;
      case 4:
        Cd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        $t(mi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? ($t(Fe, Fe.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? kd(n, r, l) : ($t(Fe, Fe.current & 1), n = ar(n, r, l), n !== null ? n.sibling : null);
        $t(Fe, Fe.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o)
            return Md(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), $t(Fe, Fe.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, hu(n, r, l);
    }
    return ar(n, r, l);
  }
  var Ss, yu, Aa, Pn;
  Ss = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, yu = function() {
  }, Aa = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, uu(ti.current);
      var d = null;
      switch (l) {
        case "input":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = sc);
      }
      _n(l, o);
      var m;
      l = null;
      for (A in c)
        if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null)
          if (A === "style") {
            var E = c[A];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (mt.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var w = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && w !== E && (w != null || E != null))
          if (A === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in w)
                w.hasOwnProperty(m) && E[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
            } else
              l || (d || (d = []), d.push(
                A,
                l
              )), l = w;
          else
            A === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, E = E ? E.__html : void 0, w != null && E !== w && (d = d || []).push(A, w)) : A === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(A, "" + w) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (mt.hasOwnProperty(A) ? (w != null && A === "onScroll" && Zt("scroll", n), d || E === w || (d = [])) : (d = d || []).push(A, w));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Pn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Es(n, r) {
    if (!ln)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function uy(n, r, l) {
    var o = r.pendingProps;
    switch (dd(r), r.tag) {
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
        return Sr(r), null;
      case 1:
        return cn(r.type) && La(), Sr(r), null;
      case 3:
        return o = r.stateNode, kl(), Ut(Rn), Ut($e), Cc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (vc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Na !== null && (_s(Na), Na = null))), yu(n, r), Sr(r), null;
      case 5:
        ft(r);
        var c = uu(uo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Aa(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(U(166));
            return Sr(r), null;
          }
          if (n = uu(ti.current), vc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[vi] = r, o[au] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Zt("cancel", o), Zt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Zt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++)
                  Zt(rs[c], o);
                break;
              case "source":
                Zt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Zt(
                  "error",
                  o
                ), Zt("load", o);
                break;
              case "details":
                Zt("toggle", o);
                break;
              case "input":
                An(o, d), Zt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Zt("invalid", o);
                break;
              case "textarea":
                hr(o, d), Zt("invalid", o);
            }
            _n(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && oc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && oc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : mt.hasOwnProperty(m) && E != null && m === "onScroll" && Zt("scroll", o);
              }
            switch (l) {
              case "input":
                pr(o), Br(o, d, !0);
                break;
              case "textarea":
                pr(o), er(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = sc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ir(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[vi] = r, n[au] = o, Ss(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = vn(l, o), l) {
                case "dialog":
                  Zt("cancel", n), Zt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Zt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++)
                    Zt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Zt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Zt(
                    "error",
                    n
                  ), Zt("load", n), c = o;
                  break;
                case "details":
                  Zt("toggle", n), c = o;
                  break;
                case "input":
                  An(n, o), c = Yn(n, o), Zt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Zt("invalid", n);
                  break;
                case "textarea":
                  hr(n, o), c = Yr(n, o), Zt("invalid", n);
                  break;
                default:
                  c = o;
              }
              _n(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var w = E[d];
                  d === "style" ? zt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && li(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && ca(n, w) : typeof w == "number" && ca(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (mt.hasOwnProperty(d) ? w != null && d === "onScroll" && Zt("scroll", n) : w != null && Xe(n, d, w, m));
                }
              switch (l) {
                case "input":
                  pr(n), Br(n, o, !1);
                  break;
                case "textarea":
                  pr(n), er(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + it(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? vr(n, !!o.multiple, d, !1) : o.defaultValue != null && vr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = sc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Sr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Pn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(U(166));
          if (l = uu(uo.current), uu(ti.current), vc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[vi] = r, (d = o.nodeValue !== l) && (n = ma, n !== null))
              switch (n.tag) {
                case 3:
                  oc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && oc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[vi] = r, r.stateNode = o;
        }
        return Sr(r), null;
      case 13:
        if (Ut(Fe), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ln && ea !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            _v(), mn(), r.flags |= 98560, d = !1;
          else if (d = vc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(U(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(U(317));
              d[vi] = r;
            } else
              mn(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Sr(r), d = !1;
          } else
            Na !== null && (_s(Na), Na = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (Fe.current & 1) !== 0 ? Bn === 0 && (Bn = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), Sr(r), null);
      case 4:
        return kl(), yu(n, r), n === null && no(r.stateNode.containerInfo), Sr(r), null;
      case 10:
        return bl(r.type._context), Sr(r), null;
      case 17:
        return cn(r.type) && La(), Sr(r), null;
      case 19:
        if (Ut(Fe), d = r.memoizedState, d === null)
          return Sr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Es(d, !1);
          else {
            if (Bn !== 0 || n !== null && (n.flags & 128) !== 0)
              for (n = r.child; n !== null; ) {
                if (m = yn(n), m !== null) {
                  for (r.flags |= 128, Es(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return $t(Fe, Fe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && xt() > Co && (r.flags |= 128, o = !0, Es(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = yn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Es(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !ln)
                return Sr(r), null;
            } else
              2 * xt() - d.renderingStartTime > Co && l !== 1073741824 && (r.flags |= 128, o = !0, Es(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = xt(), r.sibling = null, l = Fe.current, $t(Fe, o ? l & 1 | 2 : l & 1), r) : (Sr(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (Sa & 1073741824) !== 0 && (Sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(U(156, r.tag));
  }
  function Nd(n, r) {
    switch (dd(r), r.tag) {
      case 1:
        return cn(r.type) && La(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return kl(), Ut(Rn), Ut($e), Cc(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ft(r), null;
      case 13:
        if (Ut(Fe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(U(340));
          mn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ut(Fe), null;
      case 4:
        return kl(), null;
      case 10:
        return bl(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Cs = !1, Vn = !1, Vv = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function ho(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          wn(n, r, o);
        }
      else
        l.current = null;
  }
  function Rs(n, r, l) {
    try {
      l();
    } catch (o) {
      wn(n, r, o);
    }
  }
  var Bv = !1;
  function $v(n, r) {
    if (ad = _a, n = rc(), zi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, w = -1, A = 0, Q = 0, W = n, I = null;
            t:
              for (; ; ) {
                for (var ce; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (w = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (ce = W.firstChild) !== null; )
                  I = W, W = ce;
                for (; ; ) {
                  if (W === n)
                    break t;
                  if (I === l && ++A === c && (E = m), I === d && ++Q === o && (w = m), (ce = W.nextSibling) !== null)
                    break;
                  W = I, I = W.parentNode;
                }
                W = ce;
              }
            l = E === -1 || w === -1 ? null : { start: E, end: w };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (nu = { focusedElem: n, selectionRange: l }, _a = !1, ye = r; ye !== null; )
      if (r = ye, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ye = n;
      else
        for (; ye !== null; ) {
          r = ye;
          try {
            var Ee = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ee !== null) {
                    var Te = Ee.memoizedProps, kn = Ee.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Te : ya(r.type, Te), kn);
                    D.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(U(163));
              }
          } catch (K) {
            wn(r, r.return, K);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ye = n;
            break;
          }
          ye = r.return;
        }
    return Ee = Bv, Bv = !1, Ee;
  }
  function Ts(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Rs(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function ws(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function zd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ud(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ud(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[vi], delete r[au], delete r[ud], delete r[ey], delete r[od])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Yv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function $c(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Yv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function mo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = sc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (mo(n, r, l), n = n.sibling; n !== null; )
        mo(n, r, l), n = n.sibling;
  }
  function gi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (gi(n, r, l), n = n.sibling; n !== null; )
        gi(n, r, l), n = n.sibling;
  }
  var fn = null, Xn = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; )
      yo(n, r, l), l = l.sibling;
  }
  function yo(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(ul, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Vn || ho(l, r);
      case 6:
        var o = fn, c = Xn;
        fn = null, Fa(n, r, l), fn = o, Xn = c, fn !== null && (Xn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : fn.removeChild(l.stateNode));
        break;
      case 18:
        fn !== null && (Xn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? Sl(n.parentNode, l) : n.nodeType === 1 && Sl(n, l), vl(n)) : Sl(fn, l.stateNode));
        break;
      case 4:
        o = fn, c = Xn, fn = l.stateNode.containerInfo, Xn = !0, Fa(n, r, l), fn = o, Xn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Vn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Rs(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!Vn && (ho(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            wn(l, r, E);
          }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Vn = (o = Vn) || l.memoizedState !== null, Fa(n, r, l), Vn = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function $i(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Vv()), r.forEach(function(o) {
        var c = py.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ni(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  fn = E.stateNode, Xn = !1;
                  break e;
                case 3:
                  fn = E.stateNode.containerInfo, Xn = !0;
                  break e;
                case 4:
                  fn = E.stateNode.containerInfo, Xn = !0;
                  break e;
              }
              E = E.return;
            }
          if (fn === null)
            throw Error(U(160));
          yo(d, m, c), fn = null, Xn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (A) {
          wn(c, r, A);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Iv(r, n), r = r.sibling;
  }
  function Iv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ni(r, n), Si(n), o & 4) {
          try {
            Ts(3, n, n.return), ws(3, n);
          } catch (Te) {
            wn(n, n.return, Te);
          }
          try {
            Ts(5, n, n.return);
          } catch (Te) {
            wn(n, n.return, Te);
          }
        }
        break;
      case 1:
        ni(r, n), Si(n), o & 512 && l !== null && ho(l, l.return);
        break;
      case 5:
        if (ni(r, n), Si(n), o & 512 && l !== null && ho(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (Te) {
            wn(n, n.return, Te);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Fn(c, d), vn(E, m);
              var A = vn(E, d);
              for (m = 0; m < w.length; m += 2) {
                var Q = w[m], W = w[m + 1];
                Q === "style" ? zt(c, W) : Q === "dangerouslySetInnerHTML" ? li(c, W) : Q === "children" ? ca(c, W) : Xe(c, Q, W, A);
              }
              switch (E) {
                case "input":
                  xn(c, d);
                  break;
                case "textarea":
                  sa(c, d);
                  break;
                case "select":
                  var I = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ce = d.value;
                  ce != null ? vr(c, !!d.multiple, ce, !1) : I !== !!d.multiple && (d.defaultValue != null ? vr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : vr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[au] = d;
            } catch (Te) {
              wn(n, n.return, Te);
            }
        }
        break;
      case 6:
        if (ni(r, n), Si(n), o & 4) {
          if (n.stateNode === null)
            throw Error(U(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Te) {
            wn(n, n.return, Te);
          }
        }
        break;
      case 3:
        if (ni(r, n), Si(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            vl(r.containerInfo);
          } catch (Te) {
            wn(n, n.return, Te);
          }
        break;
      case 4:
        ni(r, n), Si(n);
        break;
      case 13:
        ni(r, n), Si(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (jd = xt())), o & 4 && $i(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (Vn = (A = Vn) || Q, ni(r, n), Vn = A) : ni(r, n), Si(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !Q && (n.mode & 1) !== 0)
            for (ye = n, Q = n.child; Q !== null; ) {
              for (W = ye = Q; ye !== null; ) {
                switch (I = ye, ce = I.child, I.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ts(4, I, I.return);
                    break;
                  case 1:
                    ho(I, I.return);
                    var Ee = I.stateNode;
                    if (typeof Ee.componentWillUnmount == "function") {
                      o = I, l = I.return;
                      try {
                        r = o, Ee.props = r.memoizedProps, Ee.state = r.memoizedState, Ee.componentWillUnmount();
                      } catch (Te) {
                        wn(o, l, Te);
                      }
                    }
                    break;
                  case 5:
                    ho(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      Ad(W);
                      continue;
                    }
                }
                ce !== null ? (ce.return = I, ye = ce) : Ad(W);
              }
              Q = Q.sibling;
            }
          e:
            for (Q = null, W = n; ; ) {
              if (W.tag === 5) {
                if (Q === null) {
                  Q = W;
                  try {
                    c = W.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, w = W.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, E.style.display = lt("display", m));
                  } catch (Te) {
                    wn(n, n.return, Te);
                  }
                }
              } else if (W.tag === 6) {
                if (Q === null)
                  try {
                    W.stateNode.nodeValue = A ? "" : W.memoizedProps;
                  } catch (Te) {
                    wn(n, n.return, Te);
                  }
              } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
                W.child.return = W, W = W.child;
                continue;
              }
              if (W === n)
                break e;
              for (; W.sibling === null; ) {
                if (W.return === null || W.return === n)
                  break e;
                Q === W && (Q = null), W = W.return;
              }
              Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
            }
        }
        break;
      case 19:
        ni(r, n), Si(n), o & 4 && $i(n);
        break;
      case 21:
        break;
      default:
        ni(
          r,
          n
        ), Si(n);
    }
  }
  function Si(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Yv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(U(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = $c(n);
            gi(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = $c(n);
            mo(n, E, m);
            break;
          default:
            throw Error(U(161));
        }
      } catch (w) {
        wn(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Qv(n, r, l) {
    ye = n, go(n);
  }
  function go(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ye !== null; ) {
      var c = ye, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Cs;
        if (!m) {
          var E = c.alternate, w = E !== null && E.memoizedState !== null || Vn;
          E = Cs;
          var A = Vn;
          if (Cs = m, (Vn = w) && !A)
            for (ye = c; ye !== null; )
              m = ye, w = m.child, m.tag === 22 && m.memoizedState !== null ? Gv(c) : w !== null ? (w.return = m, ye = w) : Gv(c);
          for (; d !== null; )
            ye = d, go(d), d = d.sibling;
          ye = c, Cs = E, Vn = A;
        }
        Wv(n);
      } else
        (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, ye = d) : Wv(n);
    }
  }
  function Wv(n) {
    for (; ye !== null; ) {
      var r = ye;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Vn || ws(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Vn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ya(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && lu(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  lu(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && l.focus();
                      break;
                    case "img":
                      w.src && (l.src = w.src);
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
                if (r.memoizedState === null) {
                  var A = r.alternate;
                  if (A !== null) {
                    var Q = A.memoizedState;
                    if (Q !== null) {
                      var W = Q.dehydrated;
                      W !== null && vl(W);
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
                throw Error(U(163));
            }
          Vn || r.flags & 512 && zd(r);
        } catch (I) {
          wn(r, r.return, I);
        }
      }
      if (r === n) {
        ye = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function Ad(n) {
    for (; ye !== null; ) {
      var r = ye;
      if (r === n) {
        ye = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function Gv(n) {
    for (; ye !== null; ) {
      var r = ye;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              ws(4, r);
            } catch (w) {
              wn(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                wn(r, c, w);
              }
            }
            var d = r.return;
            try {
              zd(r);
            } catch (w) {
              wn(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              zd(r);
            } catch (w) {
              wn(r, m, w);
            }
        }
      } catch (w) {
        wn(r, r.return, w);
      }
      if (r === n) {
        ye = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ye = E;
        break;
      }
      ye = r.return;
    }
  }
  var Yc = Math.ceil, bs = dt.ReactCurrentDispatcher, Fd = dt.ReactCurrentOwner, Er = dt.ReactCurrentBatchConfig, vt = 0, gn = null, Tn = null, Kn = 0, Sa = 0, So = nt(0), Bn = 0, xs = null, Yi = 0, Ic = 0, Eo = 0, gu = null, Or = null, jd = 0, Co = 1 / 0, Ii = null, Qc = !1, Su = null, Ei = null, Nl = !1, zl = null, Wc = 0, Ro = 0, Gc = null, Eu = -1, Cu = 0;
  function Cr() {
    return (vt & 6) !== 0 ? xt() : Eu !== -1 ? Eu : Eu = xt();
  }
  function zn(n) {
    return (n.mode & 1) === 0 ? 1 : (vt & 2) !== 0 && Kn !== 0 ? Kn & -Kn : hc.transition !== null ? (Cu === 0 && (Cu = Bu()), Cu) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n);
  }
  function Rr(n, r, l, o) {
    if (50 < Ro)
      throw Ro = 0, Gc = null, Error(U(185));
    ki(n, l, o), ((vt & 2) === 0 || n !== gn) && (n === gn && ((vt & 2) === 0 && (Ic |= l), Bn === 4 && ja(n, Kn)), Tr(n, o), l === 1 && vt === 0 && (r.mode & 1) === 0 && (Co = xt() + 500, Gn && Kr()));
  }
  function Tr(n, r) {
    var l = n.callbackNode;
    cl(n, r);
    var o = Dr(n, n === gn ? Kn : 0);
    if (o === 0)
      l !== null && tr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && tr(l), r === 1)
        n.tag === 0 ? cd(qv.bind(null, n)) : sd(qv.bind(null, n)), ld(function() {
          (vt & 6) === 0 && Kr();
        }), l = null;
      else {
        switch (Yu(o)) {
          case 1:
            l = Ga;
            break;
          case 4:
            l = st;
            break;
          case 16:
            l = fi;
            break;
          case 536870912:
            l = Pu;
            break;
          default:
            l = fi;
        }
        l = Yd(l, To.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function To(n, r) {
    if (Eu = -1, Cu = 0, (vt & 6) !== 0)
      throw Error(U(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l)
      return null;
    var o = Dr(n, n === gn ? Kn : 0);
    if (o === 0)
      return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r)
      r = Xc(n, o);
    else {
      r = o;
      var c = vt;
      vt |= 2;
      var d = qc();
      (gn !== n || Kn !== r) && (Ii = null, Co = xt() + 500, Ru(n, r));
      do
        try {
          sy();
          break;
        } catch (E) {
          Xv(n, E);
        }
      while (1);
      md(), bs.current = d, vt = c, Tn !== null ? r = 0 : (gn = null, Kn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = fl(n), c !== 0 && (o = c, r = Hd(n, c))), r === 1)
        throw l = xs, Ru(n, 0), ja(n, o), Tr(n, xt()), l;
      if (r === 6)
        ja(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !Pd(c) && (r = Xc(n, o), r === 2 && (d = fl(n), d !== 0 && (o = d, r = Hd(n, d))), r === 1))
          throw l = xs, Ru(n, 0), ja(n, o), Tr(n, xt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(U(345));
          case 2:
            Tu(n, Or, Ii);
            break;
          case 3:
            if (ja(n, o), (o & 130023424) === o && (r = jd + 500 - xt(), 10 < r)) {
              if (Dr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = ru(Tu.bind(null, n, Or, Ii), r);
              break;
            }
            Tu(n, Or, Ii);
            break;
          case 4:
            if (ja(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - _r(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = xt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Yc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = ru(Tu.bind(null, n, Or, Ii), o);
              break;
            }
            Tu(n, Or, Ii);
            break;
          case 5:
            Tu(n, Or, Ii);
            break;
          default:
            throw Error(U(329));
        }
      }
    }
    return Tr(n, xt()), n.callbackNode === l ? To.bind(null, n) : null;
  }
  function Hd(n, r) {
    var l = gu;
    return n.current.memoizedState.isDehydrated && (Ru(n, r).flags |= 256), n = Xc(n, r), n !== 2 && (r = Or, Or = l, r !== null && _s(r)), n;
  }
  function _s(n) {
    Or === null ? Or = n : Or.push.apply(Or, n);
  }
  function Pd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!Da(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ja(n, r) {
    for (r &= ~Eo, r &= ~Ic, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - _r(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function qv(n) {
    if ((vt & 6) !== 0)
      throw Error(U(327));
    bo();
    var r = Dr(n, 0);
    if ((r & 1) === 0)
      return Tr(n, xt()), null;
    var l = Xc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = fl(n);
      o !== 0 && (r = o, l = Hd(n, o));
    }
    if (l === 1)
      throw l = xs, Ru(n, 0), ja(n, r), Tr(n, xt()), l;
    if (l === 6)
      throw Error(U(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Tu(n, Or, Ii), Tr(n, xt()), null;
  }
  function wo(n, r) {
    var l = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = l, vt === 0 && (Co = xt() + 500, Gn && Kr());
    }
  }
  function Ul(n) {
    zl !== null && zl.tag === 0 && (vt & 6) === 0 && bo();
    var r = vt;
    vt |= 1;
    var l = Er.transition, o = Lt;
    try {
      if (Er.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = o, Er.transition = l, vt = r, (vt & 6) === 0 && Kr();
    }
  }
  function Vd() {
    Sa = So.current, Ut(So);
  }
  function Ru(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Tv(l)), Tn !== null)
      for (l = Tn.return; l !== null; ) {
        var o = l;
        switch (dd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && La();
            break;
          case 3:
            kl(), Ut(Rn), Ut($e), Cc();
            break;
          case 5:
            ft(o);
            break;
          case 4:
            kl();
            break;
          case 13:
            Ut(Fe);
            break;
          case 19:
            Ut(Fe);
            break;
          case 10:
            bl(o.type._context);
            break;
          case 22:
          case 23:
            Vd();
        }
        l = l.return;
      }
    if (gn = n, Tn = n = Al(n.current, null), Kn = Sa = r, Bn = 0, xs = null, Eo = Ic = Yi = 0, Or = gu = null, rr !== null) {
      for (r = 0; r < rr.length; r++)
        if (l = rr[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      rr = null;
    }
    return n;
  }
  function Xv(n, r) {
    do {
      var l = Tn;
      try {
        if (md(), Rc.current = jc, He) {
          for (var o = un.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          He = !1;
        }
        if (ou = 0, Et = P = un = null, yi = !1, ga = 0, Fd.current = null, l === null || l.return === null) {
          Bn = 1, xs = r, Tn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, w = r;
          if (r = Kn, E.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var A = w, Q = E, W = Q.tag;
            if ((Q.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
              var I = Q.alternate;
              I ? (Q.updateQueue = I.updateQueue, Q.memoizedState = I.memoizedState, Q.lanes = I.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ce = bd(m);
            if (ce !== null) {
              ce.flags &= -257, xd(ce, m, E, d, r), ce.mode & 1 && jv(d, A, r), r = ce, w = A;
              var Ee = r.updateQueue;
              if (Ee === null) {
                var Te = /* @__PURE__ */ new Set();
                Te.add(w), r.updateQueue = Te;
              } else
                Ee.add(w);
              break e;
            } else {
              if ((r & 1) === 0) {
                jv(d, A, r), Bd();
                break e;
              }
              w = Error(U(426));
            }
          } else if (ln && E.mode & 1) {
            var kn = bd(m);
            if (kn !== null) {
              (kn.flags & 65536) === 0 && (kn.flags |= 256), xd(kn, m, E, d, r), vd(fo(w, E));
              break e;
            }
          }
          d = w = fo(w, E), Bn !== 4 && (Bn = 2), gu === null ? gu = [d] : gu.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Fv(d, w, r);
                Sd(d, D);
                break e;
              case 1:
                E = w;
                var x = d.type, L = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ei === null || !Ei.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = gs(d, E, r);
                  Sd(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        $d(l);
      } catch (we) {
        r = we, Tn === l && l !== null && (Tn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function qc() {
    var n = bs.current;
    return bs.current = jc, n === null ? jc : n;
  }
  function Bd() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), gn === null || (Yi & 268435455) === 0 && (Ic & 268435455) === 0 || ja(gn, Kn);
  }
  function Xc(n, r) {
    var l = vt;
    vt |= 2;
    var o = qc();
    (gn !== n || Kn !== r) && (Ii = null, Ru(n, r));
    do
      try {
        oy();
        break;
      } catch (c) {
        Xv(n, c);
      }
    while (1);
    if (md(), vt = l, bs.current = o, Tn !== null)
      throw Error(U(261));
    return gn = null, Kn = 0, Bn;
  }
  function oy() {
    for (; Tn !== null; )
      Kv(Tn);
  }
  function sy() {
    for (; Tn !== null && !ci(); )
      Kv(Tn);
  }
  function Kv(n) {
    var r = Jv(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? $d(n) : Tn = r, Fd.current = null;
  }
  function $d(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = uy(l, r, Sa), l !== null) {
          Tn = l;
          return;
        }
      } else {
        if (l = Nd(l, r), l !== null) {
          l.flags &= 32767, Tn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, Tn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Tn = r;
        return;
      }
      Tn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Tu(n, r, l) {
    var o = Lt, c = Er.transition;
    try {
      Er.transition = null, Lt = 1, cy(n, r, l, o);
    } finally {
      Er.transition = c, Lt = o;
    }
    return null;
  }
  function cy(n, r, l, o) {
    do
      bo();
    while (zl !== null);
    if ((vt & 6) !== 0)
      throw Error(U(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(U(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Hf(n, d), n === gn && (Tn = gn = null, Kn = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || Nl || (Nl = !0, Yd(fi, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = Er.transition, Er.transition = null;
      var m = Lt;
      Lt = 1;
      var E = vt;
      vt |= 4, Fd.current = null, $v(n, l), Iv(l, n), ac(nu), _a = !!ad, nu = ad = null, n.current = l, Qv(l), Hu(), vt = E, Lt = m, Er.transition = d;
    } else
      n.current = l;
    if (Nl && (Nl = !1, zl = n, Wc = c), d = n.pendingLanes, d === 0 && (Ei = null), Io(l.stateNode), Tr(n, xt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Qc)
      throw Qc = !1, n = Su, Su = null, n;
    return (Wc & 1) !== 0 && n.tag !== 0 && bo(), d = n.pendingLanes, (d & 1) !== 0 ? n === Gc ? Ro++ : (Ro = 0, Gc = n) : Ro = 0, Kr(), null;
  }
  function bo() {
    if (zl !== null) {
      var n = Yu(Wc), r = Er.transition, l = Lt;
      try {
        if (Er.transition = null, Lt = 16 > n ? 16 : n, zl === null)
          var o = !1;
        else {
          if (n = zl, zl = null, Wc = 0, (vt & 6) !== 0)
            throw Error(U(331));
          var c = vt;
          for (vt |= 4, ye = n.current; ye !== null; ) {
            var d = ye, m = d.child;
            if ((ye.flags & 16) !== 0) {
              var E = d.deletions;
              if (E !== null) {
                for (var w = 0; w < E.length; w++) {
                  var A = E[w];
                  for (ye = A; ye !== null; ) {
                    var Q = ye;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ts(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null)
                      W.return = Q, ye = W;
                    else
                      for (; ye !== null; ) {
                        Q = ye;
                        var I = Q.sibling, ce = Q.return;
                        if (Ud(Q), Q === A) {
                          ye = null;
                          break;
                        }
                        if (I !== null) {
                          I.return = ce, ye = I;
                          break;
                        }
                        ye = ce;
                      }
                  }
                }
                var Ee = d.alternate;
                if (Ee !== null) {
                  var Te = Ee.child;
                  if (Te !== null) {
                    Ee.child = null;
                    do {
                      var kn = Te.sibling;
                      Te.sibling = null, Te = kn;
                    } while (Te !== null);
                  }
                }
                ye = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null)
              m.return = d, ye = m;
            else
              e:
                for (; ye !== null; ) {
                  if (d = ye, (d.flags & 2048) !== 0)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ts(9, d, d.return);
                    }
                  var D = d.sibling;
                  if (D !== null) {
                    D.return = d.return, ye = D;
                    break e;
                  }
                  ye = d.return;
                }
          }
          var x = n.current;
          for (ye = x; ye !== null; ) {
            m = ye;
            var L = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && L !== null)
              L.return = m, ye = L;
            else
              e:
                for (m = x; ye !== null; ) {
                  if (E = ye, (E.flags & 2048) !== 0)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ws(9, E);
                      }
                    } catch (we) {
                      wn(E, E.return, we);
                    }
                  if (E === m) {
                    ye = null;
                    break e;
                  }
                  var K = E.sibling;
                  if (K !== null) {
                    K.return = E.return, ye = K;
                    break e;
                  }
                  ye = E.return;
                }
          }
          if (vt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(ul, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, Er.transition = r;
      }
    }
    return !1;
  }
  function Zv(n, r, l) {
    r = fo(l, r), r = Fv(n, r, 1), n = _l(n, r, 1), r = Cr(), n !== null && (ki(n, 1, r), Tr(n, r));
  }
  function wn(n, r, l) {
    if (n.tag === 3)
      Zv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Zv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ei === null || !Ei.has(o))) {
            n = fo(l, n), n = gs(r, n, 1), r = _l(r, n, 1), n = Cr(), r !== null && (ki(r, 1, n), Tr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function fy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Cr(), n.pingedLanes |= n.suspendedLanes & l, gn === n && (Kn & l) === l && (Bn === 4 || Bn === 3 && (Kn & 130023424) === Kn && 500 > xt() - jd ? Ru(n, 0) : Eo |= l), Tr(n, r);
  }
  function Kc(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ol, ol <<= 1, (ol & 130023424) === 0 && (ol = 4194304)));
    var l = Cr();
    n = Hi(n, r), n !== null && (ki(n, r, l), Tr(n, l));
  }
  function dy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Kc(n, l);
  }
  function py(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(U(314));
    }
    o !== null && o.delete(r), Kc(n, l);
  }
  var Jv;
  Jv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rn.current)
        Nn = !0;
      else {
        if ((n.lanes & l) === 0 && (r.flags & 128) === 0)
          return Nn = !1, Bi(n, r, l);
        Nn = (n.flags & 131072) !== 0;
      }
    else
      Nn = !1, ln && (r.flags & 1048576) !== 0 && fd(r, ao, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        gr(n, r), n = r.pendingProps;
        var c = Oa(r, $e.current);
        ne(r, l), c = Ol(null, r, o, n, c, l);
        var d = fu();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, cn(o) ? (d = !0, cc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, gd(r), c.updater = gc, r.stateNode = c, c._reactInternals = r, Sc(r, o, n, l), r = Hv(null, r, o, !0, d, l)) : (r.tag = 0, ln && d && fc(r), Hn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (gr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = hy(o), n = ya(o, n), c) {
            case 0:
              r = po(null, r, o, n, l);
              break e;
            case 1:
              r = _d(null, r, o, n, l);
              break e;
            case 11:
              r = Ml(null, r, o, n, l);
              break e;
            case 14:
              r = Pc(null, r, o, ya(o.type, n), l);
              break e;
          }
          throw Error(U(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), po(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), _d(n, r, o, c, l);
      case 3:
        e: {
          if (Pv(r), n === null)
            throw Error(U(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, jn(n, r), Dl(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = fo(Error(U(423)), r), r = Vc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = fo(Error(U(424)), r), r = Vc(n, r, o, l, c);
              break e;
            } else
              for (ea = ei(r.stateNode.containerInfo.firstChild), ma = r, ln = !0, Na = null, l = Uv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (mn(), o === c) {
              r = ar(n, r, l);
              break e;
            }
            Hn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ue(r), n === null && pc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ls(o, c) ? m = null : d !== null && ls(o, d) && (r.flags |= 32), rt(n, r), Hn(n, r, m, l), r.child;
      case 6:
        return n === null && pc(r), null;
      case 13:
        return kd(n, r, l);
      case 4:
        return Cd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = lo(r, null, o, l) : Hn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), Ml(n, r, o, c, l);
      case 7:
        return Hn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Hn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Hn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, $t(mi, o._currentValue), o._currentValue = m, d !== null)
            if (Da(d.value, m)) {
              if (d.children === c.children && !Rn.current) {
                r = ar(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var w = E.firstContext; w !== null; ) {
                    if (w.context === o) {
                      if (d.tag === 1) {
                        w = Pi(-1, l & -l), w.tag = 2;
                        var A = d.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var Q = A.pending;
                          Q === null ? w.next = w : (w.next = Q.next, Q.next = w), A.pending = w;
                        }
                      }
                      d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), qn(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(U(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), qn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Hn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ne(r, l), c = Dn(c), o = o(c), r.flags |= 1, Hn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ya(o, r.pendingProps), c = ya(o.type, c), Pc(n, r, o, c, l);
      case 15:
        return ra(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), gr(n, r), r.tag = 1, cn(o) ? (n = !0, cc(r)) : n = !1, ne(r, l), Lv(r, o, c), Sc(r, o, c, l), Hv(null, r, o, !0, n, l);
      case 19:
        return Md(n, r, l);
      case 22:
        return hu(n, r, l);
    }
    throw Error(U(156, r.tag));
  };
  function Yd(n, r) {
    return tn(n, r);
  }
  function vy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, o) {
    return new vy(n, r, l, o);
  }
  function Id(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function hy(n) {
    if (typeof n == "function")
      return Id(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === Ft)
        return 14;
    }
    return 2;
  }
  function Al(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Zc(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Id(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Ve:
            return wu(l.children, c, d, r);
          case rn:
            m = 8, c |= 8;
            break;
          case bn:
            return n = Ha(12, l, r, c | 2), n.elementType = bn, n.lanes = d, n;
          case je:
            return n = Ha(13, l, r, c), n.elementType = je, n.lanes = d, n;
          case et:
            return n = Ha(19, l, r, c), n.elementType = et, n.lanes = d, n;
          case Se:
            return Ds(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Wt:
                  m = 10;
                  break e;
                case Ot:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case Ft:
                  m = 14;
                  break e;
                case bt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(U(130, n == null ? n : typeof n, ""));
        }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function wu(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function Ds(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = Se, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function ks(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function bu(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function my(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $u(0), this.expirationTimes = $u(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $u(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Jc(n, r, l, o, c, d, m, E, w) {
    return n = new my(n, r, l, E, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gd(d), n;
  }
  function eh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ot, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Qd(n) {
    if (!n)
      return hi;
    n = n._reactInternals;
    e: {
      if (Ze(n) !== n || n.tag !== 1)
        throw Error(U(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (cn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(U(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (cn(l))
        return ss(n, l, r);
    }
    return r;
  }
  function th(n, r, l, o, c, d, m, E, w) {
    return n = Jc(l, o, !0, n, c, d, m, E, w), n.context = Qd(null), l = n.current, o = Cr(), c = zn(l), d = Pi(o, c), d.callback = r != null ? r : null, _l(l, d, c), n.current.lanes = c, ki(n, c, o), Tr(n, o), n;
  }
  function Os(n, r, l, o) {
    var c = r.current, d = Cr(), m = zn(c);
    return l = Qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Pi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = _l(c, r, m), n !== null && (Rr(n, c, m, d), yc(n, c, m)), m;
  }
  function ef(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function nh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Wd(n, r) {
    nh(n, r), (n = n.alternate) && nh(n, r);
  }
  function rh() {
    return null;
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function tf(n) {
    this._internalRoot = n;
  }
  Qi.prototype.render = tf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(U(409));
    Os(n, r, null, null);
  }, Qi.prototype.unmount = tf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ul(function() {
        Os(null, n, null, null);
      }), r[Fi] = null;
    }
  };
  function Qi(n) {
    this._internalRoot = n;
  }
  Qi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Qu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Bt.length && r !== 0 && r < Bt[l].priority; l++)
        ;
      Bt.splice(l, 0, n), l === 0 && Ks(n);
    }
  };
  function qd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function nf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ah() {
  }
  function yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = ef(m);
          d.call(A);
        };
      }
      var m = th(r, o, n, 0, null, !1, !1, "", ah);
      return n._reactRootContainer = m, n[Fi] = m.current, no(n.nodeType === 8 ? n.parentNode : n), Ul(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = ef(w);
        E.call(A);
      };
    }
    var w = Jc(n, 0, !1, null, null, !1, !1, "", ah);
    return n._reactRootContainer = w, n[Fi] = w.current, no(n.nodeType === 8 ? n.parentNode : n), Ul(function() {
      Os(r, w, l, o);
    }), w;
  }
  function rf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var w = ef(m);
          E.call(w);
        };
      }
      Os(r, m, n, c);
    } else
      m = yy(l, r, n, c, o);
    return ef(m);
  }
  ql = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qa(r.pendingLanes);
          l !== 0 && (di(r, l | 1), Tr(r, xt()), (vt & 6) === 0 && (Co = xt() + 500, Kr()));
        }
        break;
      case 13:
        Ul(function() {
          var o = Hi(n, 1);
          if (o !== null) {
            var c = Cr();
            Rr(o, n, 1, c);
          }
        }), Wd(n, 1);
    }
  }, Iu = function(n) {
    if (n.tag === 13) {
      var r = Hi(n, 134217728);
      if (r !== null) {
        var l = Cr();
        Rr(r, n, 134217728, l);
      }
      Wd(n, 134217728);
    }
  }, _t = function(n) {
    if (n.tag === 13) {
      var r = zn(n), l = Hi(n, r);
      if (l !== null) {
        var o = Cr();
        Rr(l, n, r, o);
      }
      Wd(n, r);
    }
  }, Qu = function() {
    return Lt;
  }, Wu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, br = function(n, r, l) {
    switch (r) {
      case "input":
        if (xn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Le(o);
              if (!c)
                throw Error(U(90));
              Vr(o), xn(o, c);
            }
          }
        }
        break;
      case "textarea":
        sa(n, l);
        break;
      case "select":
        r = l.value, r != null && vr(n, !!l.multiple, r, !1);
    }
  }, Gl = wo, ju = Ul;
  var gy = { usingClientEntryPoint: !1, Events: [os, ro, Le, ba, al, wo] }, xo = { findFiberByHostInstance: ka, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Sy = { bundleType: xo.bundleType, version: xo.version, rendererPackageName: xo.rendererPackageName, rendererConfig: xo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: xo.findFiberByHostInstance || rh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var af = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!af.isDisabled && af.supportsFiber)
      try {
        ul = af.inject(Sy), Qr = af;
      } catch {
      }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r))
      throw Error(U(200));
    return eh(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!qd(n))
      throw Error(U(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Jc(n, 1, !1, null, null, l, !1, o, c), n[Fi] = r.current, no(n.nodeType === 8 ? n.parentNode : n), new tf(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(U(188)) : (n = Object.keys(n).join(","), Error(U(268, n)));
    return n = Ln(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return Ul(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!nf(r))
      throw Error(U(200));
    return rf(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!qd(n))
      throw Error(U(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = th(r, null, n, 1, l != null ? l : null, c, !1, d, m), n[Fi] = r.current, no(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Qi(r);
  }, Ia.render = function(n, r, l) {
    if (!nf(r))
      throw Error(U(200));
    return rf(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!nf(n))
      throw Error(U(40));
    return n._reactRootContainer ? (Ul(function() {
      rf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fi] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = wo, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!nf(l))
      throw Error(U(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(U(38));
    return rf(n, r, l, !1, o);
  }, Ia.version = "18.2.0-next-9e3b772b8-20220608", Ia;
}
var Qa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function aD() {
  return aR || (aR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var $ = Ff.exports, q = sR(), U = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qe = !1;
    function mt(e) {
      Qe = e;
    }
    function We(e) {
      if (!Qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        At("warn", e, a);
      }
    }
    function S(e) {
      if (!Qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        At("error", e, a);
      }
    }
    function At(e, t, a) {
      {
        var i = U.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var me = 0, se = 1, Je = 2, J = 3, le = 4, ie = 5, de = 6, Oe = 7, ge = 8, wt = 9, ut = 10, Xe = 11, dt = 12, De = 13, ot = 14, Ve = 15, rn = 16, bn = 17, Wt = 18, Ot = 19, En = 21, je = 22, et = 23, Ft = 24, bt = 25, Se = !0, Z = !1, xe = !1, T = !1, B = !1, ue = !0, Ie = !1, Pe = !1, gt = !0, at = !0, pt = !0, it = /* @__PURE__ */ new Set(), jt = {}, Pr = {};
    function pr(e, t) {
      Vr(e, t), Vr(e + "Capture", t);
    }
    function Vr(e, t) {
      jt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), jt[e] = t;
      {
        var a = e.toLowerCase();
        Pr[a] = e, e === "onDoubleClick" && (Pr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        it.add(t[i]);
    }
    var dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yn = Object.prototype.hasOwnProperty;
    function An(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Fn(e) {
      try {
        return xn(e), !1;
      } catch {
        return !0;
      }
    }
    function xn(e) {
      return "" + e;
    }
    function Br(e, t) {
      if (Fn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), xn(e);
    }
    function $r(e) {
      if (Fn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), xn(e);
    }
    function In(e, t) {
      if (Fn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), xn(e);
    }
    function vr(e, t) {
      if (Fn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), xn(e);
    }
    function Yr(e) {
      if (Fn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), xn(e);
    }
    function hr(e) {
      if (Fn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", An(e)), xn(e);
    }
    var sa = 0, er = 1, Ir = 2, pn = 3, wr = 4, li = 5, ca = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", _e = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lt = new RegExp("^[" + ee + "][" + _e + "]*$"), zt = {}, Ht = {};
    function _n(e) {
      return Yn.call(Ht, e) ? !0 : Yn.call(zt, e) ? !1 : lt.test(e) ? (Ht[e] = !0, !0) : (zt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === sa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function mr(e, t, a, i) {
      if (a !== null && a.type === sa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function It(e, t, a, i) {
      if (t === null || typeof t > "u" || mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case pn:
            return !t;
          case wr:
            return t === !1;
          case li:
            return isNaN(t);
          case ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function br(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function Pt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ir || t === pn || t === wr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Vt = {}, Wa = [
      "children",
      "dangerouslySetInnerHTML",
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Wa.forEach(function(e) {
      Vt[e] = new Pt(
        e,
        sa,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Vt[t] = new Pt(
        t,
        er,
        !1,
        a,
        null,
        !1,
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        Ir,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        Ir,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "itemScope"
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        pn,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        pn,
        !0,
        e,
        null,
        !1,
        !1
      );
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        wr,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        ca,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        li,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var ba = /[\-\:]([a-z])/g, al = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
    ].forEach(function(e) {
      var t = e.replace(ba, al);
      Vt[t] = new Pt(
        t,
        er,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
    ].forEach(function(e) {
      var t = e.replace(ba, al);
      Vt[t] = new Pt(
        t,
        er,
        !1,
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var t = e.replace(ba, al);
      Vt[t] = new Pt(
        t,
        er,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        er,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var Gl = "xlinkHref";
    Vt[Gl] = new Pt(
      "xlinkHref",
      er,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        er,
        !1,
        e.toLowerCase(),
        null,
        !0,
        !0
      );
    });
    var ju = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Di = !1;
    function il(e) {
      !Di && ju.test(e) && (Di = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function fa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Br(a, t), i.sanitizeURL && il("" + a);
        var s = i.attributeName, f = null;
        if (i.type === wr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : It(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (It(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === pn)
            return a;
          f = e.getAttribute(s);
        }
        return It(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ui(e, t, a, i) {
      {
        if (!_n(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Br(a, t), u === "" + a ? a : u;
      }
    }
    function da(e, t, a, i) {
      var u = br(t);
      if (!vn(t, u, i)) {
        if (It(t, a, u, i) && (a = null), i || u === null) {
          if (_n(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Br(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === pn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, b;
          _ === pn || _ === wr && a === !0 ? b = "" : (Br(a, y), b = "" + a, u.sanitizeURL && il(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var oi = Symbol.for("react.element"), xr = Symbol.for("react.portal"), pa = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), te = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), St = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), Ln = Symbol.for("react.scope"), en = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), tr = Symbol.for("react.legacy_hidden"), ci = Symbol.for("react.cache"), Hu = Symbol.for("react.tracing_marker"), xt = Symbol.iterator, jf = "@@iterator";
    function Ga(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = xt && e[xt] || e[jf];
      return typeof t == "function" ? t : null;
    }
    var st = Object.assign, fi = 0, ll, Pu, ul, Qr, Io, _r, Qo;
    function Wo() {
    }
    Wo.__reactDisabledLog = !0;
    function qs() {
      {
        if (fi === 0) {
          ll = console.log, Pu = console.info, ul = console.warn, Qr = console.error, Io = console.group, _r = console.groupCollapsed, Qo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Wo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        fi++;
      }
    }
    function Vu() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: st({}, e, {
              value: ll
            }),
            info: st({}, e, {
              value: Pu
            }),
            warn: st({}, e, {
              value: ul
            }),
            error: st({}, e, {
              value: Qr
            }),
            group: st({}, e, {
              value: Io
            }),
            groupCollapsed: st({}, e, {
              value: _r
            }),
            groupEnd: st({}, e, {
              value: Qo
            })
          });
        }
        fi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ol = U.ReactCurrentDispatcher, qa;
    function Dr(e, t, a) {
      {
        if (qa === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            qa = i && i[1] || "";
          }
        return `
` + qa + e;
      }
    }
    var sl = !1, cl;
    {
      var fl = typeof WeakMap == "function" ? WeakMap : Map;
      cl = new fl();
    }
    function Bu(e, t) {
      if (!e || sl)
        return "";
      {
        var a = cl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      sl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ol.current, ol.current = null, qs();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var p = z.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        sl = !1, ol.current = s, Vu(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", M = b ? Dr(b) : "";
      return typeof e == "function" && cl.set(e, M), M;
    }
    function $u(e, t, a) {
      return Bu(e, !0);
    }
    function ki(e, t, a) {
      return Bu(e, !1);
    }
    function Hf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function di(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Bu(e, Hf(e));
      if (typeof e == "string")
        return Dr(e);
      switch (e) {
        case Ze:
          return Dr("Suspense");
        case St:
          return Dr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case pe:
            return ki(e.render);
          case tt:
            return di(e.type, t, a);
          case Me: {
            var i = e, u = i._payload, s = i._init;
            try {
              return di(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Lt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return Dr(e.type);
        case rn:
          return Dr("Lazy");
        case De:
          return Dr("Suspense");
        case Ot:
          return Dr("SuspenseList");
        case me:
        case Je:
        case Ve:
          return ki(e.type);
        case Xe:
          return ki(e.type.render);
        case se:
          return $u(e.type);
        default:
          return "";
      }
    }
    function Yu(e) {
      try {
        var t = "", a = e;
        do
          t += Lt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ql(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Iu(e) {
      return e.displayName || "Context";
    }
    function _t(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case pa:
          return "Fragment";
        case xr:
          return "Portal";
        case R:
          return "Profiler";
        case si:
          return "StrictMode";
        case Ze:
          return "Suspense";
        case St:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case te:
            var t = e;
            return Iu(t) + ".Consumer";
          case Y:
            var a = e;
            return Iu(a._context) + ".Provider";
          case pe:
            return ql(e, e.render, "ForwardRef");
          case tt:
            var i = e.displayName || null;
            return i !== null ? i : _t(e.type) || "Memo";
          case Me: {
            var u = e, s = u._payload, f = u._init;
            try {
              return _t(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Wu(e) {
      return e.displayName || "Context";
    }
    function Ge(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ft:
          return "Cache";
        case wt:
          var i = a;
          return Wu(i) + ".Consumer";
        case ut:
          var u = a;
          return Wu(u._context) + ".Provider";
        case Wt:
          return "DehydratedFragment";
        case Xe:
          return Qu(a, a.render, "ForwardRef");
        case Oe:
          return "Fragment";
        case ie:
          return a;
        case le:
          return "Portal";
        case J:
          return "Root";
        case de:
          return "Text";
        case rn:
          return _t(a);
        case ge:
          return a === si ? "StrictMode" : "Mode";
        case je:
          return "Offscreen";
        case dt:
          return "Profiler";
        case En:
          return "Scope";
        case De:
          return "Suspense";
        case Ot:
          return "SuspenseList";
        case bt:
          return "TracingMarker";
        case se:
        case me:
        case bn:
        case Je:
        case ot:
        case Ve:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = U.ReactDebugCurrentFrame, hn = null, Wr = !1;
    function kr() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ge(e);
      }
      return null;
    }
    function dl() {
      return hn === null ? "" : Yu(hn);
    }
    function Cn() {
      Xl.getCurrentStack = null, hn = null, Wr = !1;
    }
    function Bt(e) {
      Xl.getCurrentStack = e === null ? null : dl, hn = e, Wr = !1;
    }
    function Xs() {
      return hn;
    }
    function Gr(e) {
      Wr = e;
    }
    function Qn(e) {
      return "" + e;
    }
    function pi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return hr(e), e;
        default:
          return "";
      }
    }
    var Ks = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Oi(e, t) {
      Ks[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function pl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Zs(e) {
      return e._valueTracker;
    }
    function xa(e) {
      e._valueTracker = null;
    }
    function vl(e) {
      var t = "";
      return e && (pl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function hl(e) {
      var t = pl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      hr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            hr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            hr(p), i = "" + p;
          },
          stopTracking: function() {
            xa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function _a(e) {
      Zs(e) || (e._valueTracker = hl(e));
    }
    function Gu(e) {
      if (!e)
        return !1;
      var t = Zs(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = vl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ml(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var yl = !1, Kl = !1, qu = !1, Go = !1;
    function Xa(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = st({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i != null ? i : a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Oi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Kl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Kl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !yl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), yl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: pi(t.value != null ? t.value : i),
        controlled: Xa(t)
      };
    }
    function N(e, t) {
      var a = e, i = t.checked;
      i != null && da(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Xa(t);
        !a._wrapperState.controlled && i && !Go && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Go = !0), a._wrapperState.controlled && !i && !qu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), qu = !0);
      }
      N(e, t);
      var u = pi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || a.value != u) && (a.value = Qn(u)) : a.value !== Qn(u) && (a.value = Qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ze(a, t.type, u) : t.hasOwnProperty("defaultValue") && ze(a, t.type, pi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function X(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ae(e, t) {
      var a = e;
      F(a, t), ae(a, t);
    }
    function ae(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Br(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Ch(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Gu(f), F(f, p);
          }
        }
      }
    }
    function ze(e, t, a) {
      (t !== "number" || ml(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qn(e._wrapperState.initialValue) : e.defaultValue !== Qn(a) && (e.defaultValue = Qn(a)));
    }
    var ct = !1, Dt = !1, Xt = !1;
    function Qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? $.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Dt || (Dt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Xt || (Xt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ct && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ct = !0);
    }
    function Kt(e, t) {
      t.value != null && e.setAttribute("value", Qn(pi(t.value)));
    }
    var nn = Array.isArray;
    function yt(e) {
      return nn(e);
    }
    var Li;
    Li = !1;
    function Xu() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var qo = ["value", "defaultValue"];
    function Pf(e) {
      {
        Oi("select", e);
        for (var t = 0; t < qo.length; t++) {
          var a = qo[t];
          if (e[a] != null) {
            var i = yt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Xu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Xu());
          }
        }
      }
    }
    function Ka(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Qn(pi(a)), _ = null, b = 0; b < u.length; b++) {
          if (u[b].value === g) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          _ === null && !u[b].disabled && (_ = u[b]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function Xo(e, t) {
      return st({}, t, {
        value: void 0
      });
    }
    function Ko(e, t) {
      var a = e;
      Pf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Li && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Li = !0);
    }
    function Vf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ka(a, !!t.multiple, i, !1) : t.defaultValue != null && Ka(a, !!t.multiple, t.defaultValue, !0);
    }
    function Pm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ka(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ka(a, !!t.multiple, t.defaultValue, !0) : Ka(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Vm(e, t) {
      var a = e, i = t.value;
      i != null && Ka(a, !!t.multiple, i, !1);
    }
    var Bf = !1;
    function $f(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = st({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xp(e, t) {
      var a = e;
      Oi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Bf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), Bf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (yt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: pi(i)
      };
    }
    function Kp(e, t) {
      var a = e, i = pi(t.value), u = pi(t.defaultValue);
      if (i != null) {
        var s = Qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Qn(u));
    }
    function Zp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Yf(e, t) {
      Kp(e, t);
    }
    var Mi = "http://www.w3.org/1999/xhtml", Bm = "http://www.w3.org/1998/Math/MathML", If = "http://www.w3.org/2000/svg";
    function Js(e) {
      switch (e) {
        case "svg":
          return If;
        case "math":
          return Bm;
        default:
          return Mi;
      }
    }
    function Qf(e, t) {
      return e == null || e === Mi ? Js(t) : e === If && t === "foreignObject" ? Mi : e;
    }
    var $m = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ec, Jp = $m(function(e, t) {
      if (e.namespaceURI === If && !("innerHTML" in e)) {
        ec = ec || document.createElement("div"), ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ec.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Ni = 3, Mn = 8, Za = 9, Zl = 11, tc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ni) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ev = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Ku = {
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
    };
    function tv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ku).forEach(function(e) {
      nv.forEach(function(t) {
        Ku[tv(t, e)] = Ku[e];
      });
    });
    function nc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ku.hasOwnProperty(e) && Ku[e]) ? t + "px" : (vr(t, e), ("" + t).trim());
    }
    var Zu = /([A-Z])/g, Ym = /^ms-/;
    function Im(e) {
      return e.replace(Zu, "-$1").toLowerCase().replace(Ym, "-ms-");
    }
    var rv = function() {
    };
    {
      var av = /^(?:webkit|moz|o)[A-Z]/, iv = /^-ms-/, Zo = /-(.)/g, Ju = /;\s*$/, eo = {}, to = {}, lv = !1, Wf = !1, Gf = function(e) {
        return e.replace(Zo, function(t, a) {
          return a.toUpperCase();
        });
      }, qf = function(e) {
        eo.hasOwnProperty(e) && eo[e] || (eo[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          Gf(e.replace(iv, "ms-"))
        ));
      }, uv = function(e) {
        eo.hasOwnProperty(e) && eo[e] || (eo[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ov = function(e, t) {
        to.hasOwnProperty(t) && to[t] || (to[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ju, "")));
      }, sv = function(e, t) {
        lv || (lv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Qm = function(e, t) {
        Wf || (Wf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rv = function(e, t) {
        e.indexOf("-") > -1 ? qf(e) : av.test(e) ? uv(e) : Ju.test(t) && ov(e, t), typeof t == "number" && (isNaN(t) ? sv(e, t) : isFinite(t) || Qm(e, t));
      };
    }
    var Wm = rv;
    function Gm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (!!e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Im(i)) + ":", t += nc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (!!t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Wm(i, t[i]);
          var s = nc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function qm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Da(e) {
      var t = {};
      for (var a in e)
        for (var i = ev[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Jo(e, t) {
      {
        if (!t)
          return;
        var a = Da(e), i = Da(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", qm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var fv = {
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
    }, dv = st({
      menuitem: !0
    }, fv), pv = "__html";
    function rc(e, t) {
      if (!!t) {
        if (dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(pv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function zi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ac = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, vv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ja = {}, Xf = new RegExp("^(aria)-[" + _e + "]*$"), es = new RegExp("^(aria)[A-Z][" + _e + "]*$");
    function Kf(e, t) {
      {
        if (Yn.call(Ja, t) && Ja[t])
          return !0;
        if (es.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ja[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ja[t] = !0, !0;
        }
        if (Xf.test(t)) {
          var u = t.toLowerCase(), s = vv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ja[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ja[t] = !0, !0;
        }
      }
      return !0;
    }
    function hv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Kf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ic(e, t) {
      zi(e, t) || hv(e, t);
    }
    var Jl = !1;
    function Zf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Jl && (Jl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Jf = function() {
    };
    {
      var Wn = {}, ed = /^on./, mv = /^on[^A-Z]/, yv = new RegExp("^(aria)-[" + _e + "]*$"), gv = new RegExp("^(aria)[A-Z][" + _e + "]*$");
      Jf = function(e, t, a, i) {
        if (Yn.call(Wn, t) && Wn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Wn[t] = !0, !0;
          if (ed.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (ed.test(t))
          return mv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (yv.test(t) || gv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = br(t), y = v !== null && v.type === sa;
        if (ac.hasOwnProperty(u)) {
          var g = ac[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Wn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && mr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : y ? !0 : mr(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === pn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var Sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Jf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ev(e, t, a) {
      zi(e, t) || Sv(e, t, a);
    }
    var Ui = 1, ts = 1 << 1, eu = 1 << 2, Xm = Ui | ts | eu, ns = null;
    function rs(e) {
      ns !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ns = e;
    }
    function Km() {
      ns === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ns = null;
    }
    function Cv(e) {
      return e === ns;
    }
    function lc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ni ? t.parentNode : t;
    }
    var Zt = null, gl = null, Ai = null;
    function no(e) {
      var t = ko(e);
      if (!!t) {
        if (typeof Zt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ch(a);
          Zt(t.stateNode, t.type, i);
        }
      }
    }
    function Rv(e) {
      Zt = e;
    }
    function uc(e) {
      gl ? Ai ? Ai.push(e) : Ai = [e] : gl = e;
    }
    function as() {
      return gl !== null || Ai !== null;
    }
    function is() {
      if (!!gl) {
        var e = gl, t = Ai;
        if (gl = null, Ai = null, no(e), t)
          for (var a = 0; a < t.length; a++)
            no(t[a]);
      }
    }
    var tu = function(e, t) {
      return e(t);
    }, td = function() {
    }, nd = !1;
    function Zm() {
      var e = as();
      e && (td(), is());
    }
    function rd(e, t, a) {
      if (nd)
        return e(t, a);
      nd = !0;
      try {
        return tu(e, t, a);
      } finally {
        nd = !1, Zm();
      }
    }
    function oc(e, t, a) {
      tu = e, td = a;
    }
    function sc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ad(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && sc(t));
        default:
          return !1;
      }
    }
    function nu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ch(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ad(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ls = !1;
    if (dn)
      try {
        var ru = {};
        Object.defineProperty(ru, "passive", {
          get: function() {
            ls = !0;
          }
        }), window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, ru);
      } catch {
        ls = !1;
      }
    function Tv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var id = Tv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ld = document.createElement("react");
      id = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, b = !0, M = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          ld.removeEventListener(H, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ve = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          _ = !0, j(), a.apply(i, ve), b = !1;
        }
        var be, Rt = !1, ht = !1;
        function k(O) {
          if (be = O.error, Rt = !0, be === null && O.colno === 0 && O.lineno === 0 && (ht = !0), O.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), ld.addEventListener(H, Ne, !1), g.initEvent(H, !1, !1), ld.dispatchEvent(g), z && Object.defineProperty(window, "event", z), _ && b && (Rt ? ht && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", k), !_)
          return j(), Tv.apply(this, arguments);
      };
    }
    var Jm = id, Sl = !1, ei = null, us = !1, El = null, vi = {
      onError: function(e) {
        Sl = !0, ei = e;
      }
    };
    function au(e, t, a, i, u, s, f, p, v) {
      Sl = !1, ei = null, Jm.apply(vi, arguments);
    }
    function Fi(e, t, a, i, u, s, f, p, v) {
      if (au.apply(this, arguments), Sl) {
        var y = od();
        us || (us = !0, El = y);
      }
    }
    function ud() {
      if (us) {
        var e = El;
        throw us = !1, El = null, e;
      }
    }
    function ey() {
      return Sl;
    }
    function od() {
      if (Sl) {
        var e = ei;
        return Sl = !1, ei = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ka(e) {
      return e._reactInternals;
    }
    function os(e) {
      return e._reactInternals !== void 0;
    }
    function ro(e, t) {
      e._reactInternals = t;
    }
    var Le = 0, Cl = 1, an = 2, nt = 4, Ut = 16, $t = 32, hi = 64, $e = 128, Rn = 256, Xr = 512, Oa = 1024, cn = 2048, La = 4096, Rl = 8192, ss = 16384, cc = cn | nt | hi | Xr | Oa | ss, wv = 32767, va = 32768, Gn = 65536, cs = 131072, sd = 1048576, cd = 2097152, Kr = 4194304, Tl = 8388608, Zr = 16777216, iu = 33554432, ao = nt | Oa | 0, Jr = an | nt | Ut | $t | Xr | La | Rl, yr = nt | hi | Xr | Rl, Ma = cn | Ut, nr = Kr | Tl | cd, ji = U.ReactCurrentOwner;
    function ha(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (an | La)) !== Le && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function fd(e) {
      if (e.tag === De) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function fc(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function dd(e) {
      return ha(e) === e;
    }
    function ma(e) {
      {
        var t = ji.current;
        if (t !== null && t.tag === se) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ge(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ka(e);
      return u ? ha(u) === u : !1;
    }
    function ea(e) {
      if (ha(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ln(e) {
      var t = e.alternate;
      if (!t) {
        var a = ha(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ea(s), e;
            if (v === u)
              return ea(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Na(e) {
      var t = ln(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === ie || e.tag === de)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function bv(e) {
      var t = ln(e);
      return t !== null ? dc(t) : null;
    }
    function dc(e) {
      if (e.tag === ie || e.tag === de)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== le) {
          var a = dc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var pc = q.unstable_scheduleCallback, xv = q.unstable_cancelCallback, vc = q.unstable_shouldYield, _v = q.unstable_requestPaint, mn = q.unstable_now, vd = q.unstable_getCurrentPriorityLevel, hc = q.unstable_ImmediatePriority, ya = q.unstable_UserBlockingPriority, mi = q.unstable_NormalPriority, mc = q.unstable_LowPriority, wl = q.unstable_IdlePriority, hd = q.unstable_yieldValue, md = q.unstable_setDisableYieldValue, bl = null, qn = null, ne = null, Dn = !1, rr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        gt && (e = st({}, e, {
          getLaneLabelMap: _l,
          injectProfilingHooks: Pi
        })), bl = t.inject(e), qn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Dv(e, t) {
      if (qn && typeof qn.onScheduleFiberRoot == "function")
        try {
          qn.onScheduleFiberRoot(bl, e, t);
        } catch (a) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Hi(e, t) {
      if (qn && typeof qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & $e) === $e;
          if (at) {
            var i;
            switch (t) {
              case gr:
                i = hc;
                break;
              case ar:
                i = ya;
                break;
              case Bi:
                i = mi;
                break;
              case Ss:
                i = wl;
                break;
              default:
                i = mi;
                break;
            }
            qn.onCommitFiberRoot(bl, e, i, a);
          }
        } catch (u) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function xl(e) {
      if (qn && typeof qn.onPostCommitFiberRoot == "function")
        try {
          qn.onPostCommitFiberRoot(bl, e);
        } catch (t) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function gd(e) {
      if (qn && typeof qn.onCommitFiberUnmount == "function")
        try {
          qn.onCommitFiberUnmount(bl, e);
        } catch (t) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function jn(e) {
      if (typeof hd == "function" && (md(e), mt(e)), qn && typeof qn.setStrictMode == "function")
        try {
          qn.setStrictMode(bl, e);
        } catch (t) {
          Dn || (Dn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Pi(e) {
      ne = e;
    }
    function _l() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < un; a++) {
          var i = ty(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function yc(e) {
      ne !== null && typeof ne.markCommitStarted == "function" && ne.markCommitStarted(e);
    }
    function Sd() {
      ne !== null && typeof ne.markCommitStopped == "function" && ne.markCommitStopped();
    }
    function Dl(e) {
      ne !== null && typeof ne.markComponentRenderStarted == "function" && ne.markComponentRenderStarted(e);
    }
    function lu() {
      ne !== null && typeof ne.markComponentRenderStopped == "function" && ne.markComponentRenderStopped();
    }
    function kv(e) {
      ne !== null && typeof ne.markComponentPassiveEffectMountStarted == "function" && ne.markComponentPassiveEffectMountStarted(e);
    }
    function Ed() {
      ne !== null && typeof ne.markComponentPassiveEffectMountStopped == "function" && ne.markComponentPassiveEffectMountStopped();
    }
    function gc(e) {
      ne !== null && typeof ne.markComponentPassiveEffectUnmountStarted == "function" && ne.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ov() {
      ne !== null && typeof ne.markComponentPassiveEffectUnmountStopped == "function" && ne.markComponentPassiveEffectUnmountStopped();
    }
    function Lv(e) {
      ne !== null && typeof ne.markComponentLayoutEffectMountStarted == "function" && ne.markComponentLayoutEffectMountStarted(e);
    }
    function Mv() {
      ne !== null && typeof ne.markComponentLayoutEffectMountStopped == "function" && ne.markComponentLayoutEffectMountStopped();
    }
    function Sc(e) {
      ne !== null && typeof ne.markComponentLayoutEffectUnmountStarted == "function" && ne.markComponentLayoutEffectUnmountStarted(e);
    }
    function io() {
      ne !== null && typeof ne.markComponentLayoutEffectUnmountStopped == "function" && ne.markComponentLayoutEffectUnmountStopped();
    }
    function Ec(e, t, a) {
      ne !== null && typeof ne.markComponentErrored == "function" && ne.markComponentErrored(e, t, a);
    }
    function Nv(e, t, a) {
      ne !== null && typeof ne.markComponentSuspended == "function" && ne.markComponentSuspended(e, t, a);
    }
    function zv(e) {
      ne !== null && typeof ne.markLayoutEffectsStarted == "function" && ne.markLayoutEffectsStarted(e);
    }
    function lo() {
      ne !== null && typeof ne.markLayoutEffectsStopped == "function" && ne.markLayoutEffectsStopped();
    }
    function Uv(e) {
      ne !== null && typeof ne.markPassiveEffectsStarted == "function" && ne.markPassiveEffectsStarted(e);
    }
    function fs() {
      ne !== null && typeof ne.markPassiveEffectsStopped == "function" && ne.markPassiveEffectsStopped();
    }
    function ti(e) {
      ne !== null && typeof ne.markRenderStarted == "function" && ne.markRenderStarted(e);
    }
    function ds() {
      ne !== null && typeof ne.markRenderYielded == "function" && ne.markRenderYielded();
    }
    function uo() {
      ne !== null && typeof ne.markRenderStopped == "function" && ne.markRenderStopped();
    }
    function uu(e) {
      ne !== null && typeof ne.markRenderScheduled == "function" && ne.markRenderScheduled(e);
    }
    function Cd(e, t) {
      ne !== null && typeof ne.markForceUpdateScheduled == "function" && ne.markForceUpdateScheduled(e, t);
    }
    function kl(e, t) {
      ne !== null && typeof ne.markStateUpdateScheduled == "function" && ne.markStateUpdateScheduled(e, t);
    }
    var Ue = 0, ft = 1, Fe = 2, yn = 8, za = 16, Cc = Math.clz32 ? Math.clz32 : ou, Rc = Math.log, Rd = Math.LN2;
    function ou(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Rc(t) / Rd | 0) | 0;
    }
    var un = 31, P = 0, Et = 0, He = 1, yi = 2, ga = 4, su = 8, on = 16, cu = 32, Ol = 4194240, fu = 64, Ua = 128, ta = 256, du = 512, ps = 1024, vs = 2048, Tc = 4096, wc = 8192, bc = 16384, xc = 32768, _c = 65536, Dc = 131072, kc = 262144, Oc = 524288, pu = 1048576, Lc = 2097152, vu = 130023424, Vi = 4194304, Mc = 8388608, hs = 16777216, Nc = 33554432, zc = 67108864, Td = Vi, oo = 134217728, Uc = 268435455, so = 268435456, Ll = 536870912, na = 1073741824;
    function ty(e) {
      {
        if (e & He)
          return "Sync";
        if (e & yi)
          return "InputContinuousHydration";
        if (e & ga)
          return "InputContinuous";
        if (e & su)
          return "DefaultHydration";
        if (e & on)
          return "Default";
        if (e & cu)
          return "TransitionHydration";
        if (e & Ol)
          return "Transition";
        if (e & vu)
          return "Retry";
        if (e & oo)
          return "SelectiveHydration";
        if (e & so)
          return "IdleHydration";
        if (e & Ll)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var Jt = -1, Ac = fu, Fc = Vi;
    function co(e) {
      switch (Nn(e)) {
        case He:
          return He;
        case yi:
          return yi;
        case ga:
          return ga;
        case su:
          return su;
        case on:
          return on;
        case cu:
          return cu;
        case fu:
        case Ua:
        case ta:
        case du:
        case ps:
        case vs:
        case Tc:
        case wc:
        case bc:
        case xc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case pu:
        case Lc:
          return e & Ol;
        case Vi:
        case Mc:
        case hs:
        case Nc:
        case zc:
          return e & vu;
        case oo:
          return oo;
        case so:
          return so;
        case Ll:
          return Ll;
        case na:
          return na;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ms(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & Uc;
      if (f !== P) {
        var p = f & ~u;
        if (p !== P)
          i = co(p);
        else {
          var v = f & s;
          v !== P && (i = co(v));
        }
      } else {
        var y = a & ~u;
        y !== P ? i = co(y) : s !== P && (i = co(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && (t & u) === P) {
        var g = Nn(i), _ = Nn(t);
        if (g >= _ || g === on && (_ & Ol) !== P)
          return t;
      }
      (i & ga) !== P && (i |= a & on);
      var b = e.entangledLanes;
      if (b !== P)
        for (var M = e.entanglements, z = i & b; z > 0; ) {
          var j = Ml(z), ve = 1 << j;
          i |= M[j], z &= ~ve;
        }
      return i;
    }
    function Av(e, t) {
      for (var a = e.eventTimes, i = Jt; t > 0; ) {
        var u = Ml(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function jc(e, t) {
      switch (e) {
        case He:
        case yi:
        case ga:
          return t + 250;
        case su:
        case on:
        case cu:
        case fu:
        case Ua:
        case ta:
        case du:
        case ps:
        case vs:
        case Tc:
        case wc:
        case bc:
        case xc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case pu:
        case Lc:
          return t + 5e3;
        case Vi:
        case Mc:
        case hs:
        case Nc:
        case zc:
          return Jt;
        case oo:
        case so:
        case Ll:
        case na:
          return Jt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Jt;
      }
    }
    function ny(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p, y = s[p];
        y === Jt ? ((v & i) === P || (v & u) !== P) && (s[p] = jc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ry(e) {
      return co(e.pendingLanes);
    }
    function wd(e) {
      var t = e.pendingLanes & ~na;
      return t !== P ? t : t & na ? na : P;
    }
    function fo(e) {
      return (e & He) !== P;
    }
    function ys(e) {
      return (e & Uc) !== P;
    }
    function Hc(e) {
      return (e & vu) === e;
    }
    function ay(e) {
      var t = He | ga | on;
      return (e & t) === P;
    }
    function Fv(e) {
      return (e & Ol) === e;
    }
    function gs(e, t) {
      var a = yi | ga | su | on;
      return (t & a) !== P;
    }
    function jv(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function bd(e) {
      return (e & Ol) !== P;
    }
    function xd() {
      var e = Ac;
      return Ac <<= 1, (Ac & Ol) === P && (Ac = fu), e;
    }
    function iy() {
      var e = Fc;
      return Fc <<= 1, (Fc & vu) === P && (Fc = Vi), e;
    }
    function Nn(e) {
      return e & -e;
    }
    function Hn(e) {
      return Nn(e);
    }
    function Ml(e) {
      return 31 - Cc(e);
    }
    function Pc(e) {
      return Ml(e);
    }
    function ra(e, t) {
      return (e & t) !== P;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function rt(e, t) {
      return e | t;
    }
    function po(e, t) {
      return e & ~t;
    }
    function _d(e, t) {
      return e & t;
    }
    function Hv(e) {
      return e;
    }
    function Pv(e, t) {
      return e !== Et && e < t ? e : t;
    }
    function Vc(e) {
      for (var t = [], a = 0; a < un; a++)
        t.push(e);
      return t;
    }
    function mu(e, t, a) {
      e.pendingLanes |= t, t !== Ll && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = Pc(t);
      i[u] = a;
    }
    function Dd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ml(i), s = 1 << u;
        a[u] = Jt, i &= ~s;
      }
    }
    function kd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Od(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p;
        i[p] = P, u[p] = Jt, s[p] = Jt, f &= ~v;
      }
    }
    function vo(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ml(u), f = 1 << s;
        f & t | i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ly(e, t) {
      var a = Nn(t), i;
      switch (a) {
        case ga:
          i = yi;
          break;
        case on:
          i = su;
          break;
        case fu:
        case Ua:
        case ta:
        case du:
        case ps:
        case vs:
        case Tc:
        case wc:
        case bc:
        case xc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case pu:
        case Lc:
        case Vi:
        case Mc:
        case hs:
        case Nc:
        case zc:
          i = cu;
          break;
        case Ll:
          i = so;
          break;
        default:
          i = Et;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Et ? Et : i;
    }
    function Ld(e, t, a) {
      if (!!rr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Pc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Bc(e, t) {
      if (!!rr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Pc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Md(e, t) {
      return null;
    }
    var gr = He, ar = ga, Bi = on, Ss = Ll, yu = Et;
    function Aa() {
      return yu;
    }
    function Pn(e) {
      yu = e;
    }
    function Es(e, t) {
      var a = yu;
      try {
        return yu = e, t();
      } finally {
        yu = a;
      }
    }
    function Sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function uy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Nd(e, t) {
      return e !== 0 && e < t;
    }
    function Cs(e) {
      var t = Nn(e);
      return Nd(gr, t) ? Nd(ar, t) ? ys(t) ? Bi : Ss : ar : gr;
    }
    function Vn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Vv;
    function ye(e) {
      Vv = e;
    }
    function ho(e) {
      Vv(e);
    }
    var Rs;
    function Bv(e) {
      Rs = e;
    }
    var $v;
    function Ts(e) {
      $v = e;
    }
    var ws;
    function zd(e) {
      ws = e;
    }
    var Ud;
    function Yv(e) {
      Ud = e;
    }
    var $c = !1, mo = [], gi = null, fn = null, Xn = null, Fa = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), $i = [], ni = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Iv(e) {
      return ni.indexOf(e) > -1;
    }
    function Si(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Qv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          gi = null;
          break;
        case "dragenter":
        case "dragleave":
          fn = null;
          break;
        case "mouseover":
        case "mouseout":
          Xn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Fa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          yo.delete(i);
          break;
        }
      }
    }
    function go(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Si(t, a, i, u, s);
        if (t !== null) {
          var p = ko(t);
          p !== null && Rs(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Wv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return gi = go(gi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return fn = go(fn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Xn = go(Xn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Fa.set(y, go(Fa.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return yo.set(_, go(yo.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Ad(e) {
      var t = Ns(e.target);
      if (t !== null) {
        var a = ha(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var u = fd(a);
            if (u !== null) {
              e.blockedOn = u, Ud(e.priority, function() {
                $v(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (Vn(s)) {
              e.blockedOn = fc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Gv(e) {
      for (var t = ws(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < $i.length && Nd(t, $i[i].priority); i++)
        ;
      $i.splice(i, 0, a), i === 0 && Ad(a);
    }
    function Yc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = gu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          rs(s), u.target.dispatchEvent(s), Km();
        } else {
          var f = ko(i);
          return f !== null && Rs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function bs(e, t, a) {
      Yc(e) && a.delete(t);
    }
    function Fd() {
      $c = !1, gi !== null && Yc(gi) && (gi = null), fn !== null && Yc(fn) && (fn = null), Xn !== null && Yc(Xn) && (Xn = null), Fa.forEach(bs), yo.forEach(bs);
    }
    function Er(e, t) {
      e.blockedOn === t && (e.blockedOn = null, $c || ($c = !0, q.unstable_scheduleCallback(q.unstable_NormalPriority, Fd)));
    }
    function vt(e) {
      if (mo.length > 0) {
        Er(mo[0], e);
        for (var t = 1; t < mo.length; t++) {
          var a = mo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      gi !== null && Er(gi, e), fn !== null && Er(fn, e), Xn !== null && Er(Xn, e);
      var i = function(p) {
        return Er(p, e);
      };
      Fa.forEach(i), yo.forEach(i);
      for (var u = 0; u < $i.length; u++) {
        var s = $i[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; $i.length > 0; ) {
        var f = $i[0];
        if (f.blockedOn !== null)
          break;
        Ad(f), f.blockedOn === null && $i.shift();
      }
    }
    var gn = U.ReactCurrentBatchConfig, Tn = !0;
    function Kn(e) {
      Tn = !!e;
    }
    function Sa() {
      return Tn;
    }
    function So(e, t, a) {
      var i = Or(t), u;
      switch (i) {
        case gr:
          u = Bn;
          break;
        case ar:
          u = xs;
          break;
        case Bi:
        default:
          u = Yi;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Bn(e, t, a, i) {
      var u = Aa(), s = gn.transition;
      gn.transition = null;
      try {
        Pn(gr), Yi(e, t, a, i);
      } finally {
        Pn(u), gn.transition = s;
      }
    }
    function xs(e, t, a, i) {
      var u = Aa(), s = gn.transition;
      gn.transition = null;
      try {
        Pn(ar), Yi(e, t, a, i);
      } finally {
        Pn(u), gn.transition = s;
      }
    }
    function Yi(e, t, a, i) {
      !Tn || Ic(e, t, a, i);
    }
    function Ic(e, t, a, i) {
      var u = gu(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Eo, a), Qv(e, i);
        return;
      }
      if (Wv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Qv(e, i), t & eu && Iv(e)) {
        for (; u !== null; ) {
          var s = ko(u);
          s !== null && ho(s);
          var f = gu(e, t, a, i);
          if (f === null && _y(e, t, i, Eo, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Eo = null;
    function gu(e, t, a, i) {
      Eo = null;
      var u = lc(i), s = Ns(u);
      if (s !== null) {
        var f = ha(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === De) {
            var v = fd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (Vn(y))
              return fc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Eo = s, null;
    }
    function Or(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return gr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ar;
        case "message": {
          var t = vd();
          switch (t) {
            case hc:
              return gr;
            case ya:
              return ar;
            case mi:
            case mc:
              return Bi;
            case wl:
              return Ss;
            default:
              return Bi;
          }
        }
        default:
          return Bi;
      }
    }
    function jd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Co(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ii(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Qc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Su = null, Ei = null, Nl = null;
    function zl(e) {
      return Su = e, Ei = Gc(), !0;
    }
    function Wc() {
      Su = null, Ei = null, Nl = null;
    }
    function Ro() {
      if (Nl)
        return Nl;
      var e, t = Ei, a = t.length, i, u = Gc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Nl = u.slice(e, p), Nl;
    }
    function Gc() {
      return "value" in Su ? Su.value : Su.textContent;
    }
    function Eu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cu() {
      return !0;
    }
    function Cr() {
      return !1;
    }
    function zn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (!!e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Cu : this.isDefaultPrevented = Cr, this.isPropagationStopped = Cr, this;
      }
      return st(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          !a || (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          !a || (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cu);
        },
        persist: function() {
        },
        isPersistent: Cu
      }), t;
    }
    var Rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Tr = zn(Rr), To = st({}, Rr, {
      view: 0,
      detail: 0
    }), Hd = zn(To), _s, Pd, ja;
    function qv(e) {
      e !== ja && (ja && e.type === "mousemove" ? (_s = e.screenX - ja.screenX, Pd = e.screenY - ja.screenY) : (_s = 0, Pd = 0), ja = e);
    }
    var wo = st({}, To, {
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
      getModifierState: Kc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (qv(e), _s);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Pd;
      }
    }), Ul = zn(wo), Vd = st({}, wo, {
      dataTransfer: 0
    }), Ru = zn(Vd), Xv = st({}, To, {
      relatedTarget: 0
    }), qc = zn(Xv), Bd = st({}, Rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xc = zn(Bd), oy = st({}, Rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sy = zn(oy), Kv = st({}, Rr, {
      data: 0
    }), $d = zn(Kv), Tu = $d, cy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, bo = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Zv(e) {
      if (e.key) {
        var t = cy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Eu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? bo[e.keyCode] || "Unidentified" : "";
    }
    var wn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function fy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = wn[e];
      return i ? !!a[i] : !1;
    }
    function Kc(e) {
      return fy;
    }
    var dy = st({}, To, {
      key: Zv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kc,
      charCode: function(e) {
        return e.type === "keypress" ? Eu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Eu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), py = zn(dy), Jv = st({}, wo, {
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
    }), Yd = zn(Jv), vy = st({}, To, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kc
    }), Ha = zn(vy), Id = st({}, Rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), hy = zn(Id), Al = st({}, wo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zc = zn(Al), wu = [9, 13, 27, 32], Ds = 229, ks = dn && "CompositionEvent" in window, bu = null;
    dn && "documentMode" in document && (bu = document.documentMode);
    var my = dn && "TextEvent" in window && !bu, Jc = dn && (!ks || bu && bu > 8 && bu <= 11), eh = 32, Qd = String.fromCharCode(eh);
    function th() {
      pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Os = !1;
    function ef(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    function nh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Wd(e, t) {
      return e === "keydown" && t.keyCode === Ds;
    }
    function rh(e, t) {
      switch (e) {
        case "keyup":
          return wu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ds;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function tf(e) {
      return e.locale === "ko";
    }
    var Qi = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (ks ? s = nh(t) : Qi ? rh(t, i) && (s = "onCompositionEnd") : Wd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Jc && !tf(i) && (!Qi && s === "onCompositionStart" ? Qi = zl(u) : s === "onCompositionEnd" && Qi && (f = Ro()));
      var p = oh(a, s);
      if (p.length > 0) {
        var v = new $d(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function nf(e, t) {
      switch (e) {
        case "compositionend":
          return Gd(t);
        case "keypress":
          var a = t.which;
          return a !== eh ? null : (Os = !0, Qd);
        case "textInput":
          var i = t.data;
          return i === Qd && Os ? null : i;
        default:
          return null;
      }
    }
    function ah(e, t) {
      if (Qi) {
        if (e === "compositionend" || !ks && rh(e, t)) {
          var a = Ro();
          return Wc(), Qi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ef(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Jc && !tf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function yy(e, t, a, i, u) {
      var s;
      if (my ? s = nf(t, i) : s = ah(t, i), !s)
        return null;
      var f = oh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Tu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function rf(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), yy(e, t, a, i, u);
    }
    var gy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
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
    function xo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Sy(e) {
      if (!dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function af() {
      pr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      uc(i);
      var u = oh(t, "onChange");
      if (u.length > 0) {
        var s = new Tr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, lc(e)), rd(d, t);
    }
    function d(e) {
      O0(e, 0);
    }
    function m(e) {
      var t = ff(e);
      if (Gu(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    dn && (w = Sy("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", W);
    }
    function Q() {
      !r || (r.detachEvent("onpropertychange", W), r = null, l = null);
    }
    function W(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function I(e, t, a) {
      e === "focusin" ? (Q(), A(t, a)) : e === "focusout" && Q();
    }
    function ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function Ee(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Te(e, t) {
      if (e === "click")
        return m(t);
    }
    function kn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ze(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? ff(a) : window, v, y;
      if (o(p) ? v = E : xo(p) ? w ? v = kn : (v = ce, y = I) : Ee(p) && (v = Te), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function L() {
      Vr("onMouseEnter", ["mouseout", "mouseover"]), Vr("onMouseLeave", ["mouseout", "mouseover"]), Vr("onPointerEnter", ["pointerout", "pointerover"]), Vr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function K(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Cv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ns(y) || sp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var b, M;
        if (v) {
          var z = i.relatedTarget || i.toElement;
          if (b = a, M = z ? Ns(z) : null, M !== null) {
            var j = ha(M);
            (M !== j || M.tag !== ie && M.tag !== de) && (M = null);
          }
        } else
          b = null, M = a;
        if (b !== M) {
          var ve = Ul, Ne = "onMouseLeave", be = "onMouseEnter", Rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ve = Yd, Ne = "onPointerLeave", be = "onPointerEnter", Rt = "pointer");
          var ht = b == null ? g : ff(b), k = M == null ? g : ff(M), H = new ve(Ne, Rt + "leave", b, i, u);
          H.target = ht, H.relatedTarget = k;
          var O = null, G = Ns(u);
          if (G === a) {
            var he = new ve(be, Rt + "enter", M, i, u);
            he.target = k, he.relatedTarget = ht, O = he;
          }
          kR(e, H, O, b, M);
        }
      }
    }
    function we(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ce = typeof Object.is == "function" ? Object.is : we;
    function ke(e, t) {
      if (Ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Yn.call(t, s) || !Ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ye(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Zn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function kt(e, t) {
      for (var a = Ye(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ni) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ye(Zn(a));
      }
    }
    function Fl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ey(e, u, s, f, p);
    }
    function Ey(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e:
        for (; ; ) {
          for (var b = null; g === t && (a === 0 || g.nodeType === Ni) && (f = s + a), g === i && (u === 0 || g.nodeType === Ni) && (p = s + u), g.nodeType === Ni && (s += g.nodeValue.length), (b = g.firstChild) !== null; )
            _ = g, g = b;
          for (; ; ) {
            if (g === e)
              break e;
            if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (b = g.nextSibling) !== null)
              break;
            g = _, _ = g.parentNode;
          }
          g = b;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function cR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (!!i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = kt(e, f), g = kt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function g0(e) {
      return e && e.nodeType === Ni;
    }
    function S0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : g0(e) ? !1 : g0(t) ? S0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function fR(e) {
      return e && e.ownerDocument && S0(e.ownerDocument.documentElement, e);
    }
    function dR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function E0() {
      for (var e = window, t = ml(); t instanceof e.HTMLIFrameElement; ) {
        if (dR(t))
          e = t.contentWindow;
        else
          return t;
        t = ml(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function pR() {
      var e = E0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? hR(e) : null
      };
    }
    function vR(e) {
      var t = E0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && fR(a)) {
        i !== null && Cy(a) && mR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function hR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Fl(e), t || {
        start: 0,
        end: 0
      };
    }
    function mR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : cR(e, t);
    }
    var yR = dn && "documentMode" in document && document.documentMode <= 11;
    function gR() {
      pr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var lf = null, Ry = null, Xd = null, Ty = !1;
    function SR(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function ER(e) {
      return e.window === e ? e.document : e.nodeType === Za ? e : e.ownerDocument;
    }
    function C0(e, t, a) {
      var i = ER(a);
      if (!(Ty || lf == null || lf !== ml(i))) {
        var u = SR(lf);
        if (!Xd || !ke(Xd, u)) {
          Xd = u;
          var s = oh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Tr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = lf;
          }
        }
      }
    }
    function CR(e, t, a, i, u, s, f) {
      var p = a ? ff(a) : window;
      switch (t) {
        case "focusin":
          (xo(p) || p.contentEditable === "true") && (lf = p, Ry = a, Xd = null);
          break;
        case "focusout":
          lf = null, Ry = null, Xd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, C0(e, i, u);
          break;
        case "selectionchange":
          if (yR)
            break;
        case "keydown":
        case "keyup":
          C0(e, i, u);
      }
    }
    function ih(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var uf = {
      animationend: ih("Animation", "AnimationEnd"),
      animationiteration: ih("Animation", "AnimationIteration"),
      animationstart: ih("Animation", "AnimationStart"),
      transitionend: ih("Transition", "TransitionEnd")
    }, wy = {}, R0 = {};
    dn && (R0 = document.createElement("div").style, "AnimationEvent" in window || (delete uf.animationend.animation, delete uf.animationiteration.animation, delete uf.animationstart.animation), "TransitionEvent" in window || delete uf.transitionend.transition);
    function lh(e) {
      if (wy[e])
        return wy[e];
      if (!uf[e])
        return e;
      var t = uf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in R0)
          return wy[e] = t[a];
      return e;
    }
    var T0 = lh("animationend"), w0 = lh("animationiteration"), b0 = lh("animationstart"), x0 = lh("transitionend"), _0 = /* @__PURE__ */ new Map(), D0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      _0.set(e, t), pr(t, [e]);
    }
    function RR() {
      for (var e = 0; e < D0.length; e++) {
        var t = D0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(T0, "onAnimationEnd"), _o(w0, "onAnimationIteration"), _o(b0, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(x0, "onTransitionEnd");
    }
    function TR(e, t, a, i, u, s, f) {
      var p = _0.get(t);
      if (p !== void 0) {
        var v = Tr, y = t;
        switch (t) {
          case "keypress":
            if (Eu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = py;
            break;
          case "focusin":
            y = "focus", v = qc;
            break;
          case "focusout":
            y = "blur", v = qc;
            break;
          case "beforeblur":
          case "afterblur":
            v = qc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Ul;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ru;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ha;
            break;
          case T0:
          case w0:
          case b0:
            v = Xc;
            break;
          case x0:
            v = hy;
            break;
          case "scroll":
            v = Hd;
            break;
          case "wheel":
            v = Zc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = sy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Yd;
            break;
        }
        var g = (s & eu) !== 0;
        {
          var _ = !g && t === "scroll", b = _R(a, p, i.type, g, _);
          if (b.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: b
            });
          }
        }
      }
    }
    RR(), L(), af(), gR(), th();
    function wR(e, t, a, i, u, s, f) {
      TR(e, t, a, i, u, s);
      var p = (s & Xm) === 0;
      p && (K(e, t, a, i, u), x(e, t, a, i, u), CR(e, t, a, i, u), rf(e, t, a, i, u));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], by = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function k0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Fi(i, t, void 0, e), e.currentTarget = null;
    }
    function bR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          k0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, b = g.currentTarget, M = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          k0(e, M, b), i = _;
        }
    }
    function O0(e, t) {
      for (var a = (t & eu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        bR(s, f, a);
      }
      ud();
    }
    function xR(e, t, a, i, u) {
      var s = lc(a), f = [];
      wR(f, e, i, a, s, t), O0(f, t);
    }
    function Sn(e, t) {
      by.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nw(t), u = OR(e, a);
      i.has(u) || (L0(t, e, ts, a), i.add(u));
    }
    function xy(e, t, a) {
      by.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= eu), L0(a, e, i, t);
    }
    var uh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[uh]) {
        e[uh] = !0, it.forEach(function(a) {
          a !== "selectionchange" && (by.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === Za ? e : e.ownerDocument;
        t !== null && (t[uh] || (t[uh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function L0(e, t, a, i, u) {
      var s = So(e, t, a), f = void 0;
      ls && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ii(e, t, s, f) : Co(e, t, s) : f !== void 0 ? Qc(e, t, s, f) : jd(e, t, s);
    }
    function M0(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if ((t & Ui) === 0 && (t & ts) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === J || v === le) {
                var y = p.stateNode.containerInfo;
                if (M0(y, f))
                  break;
                if (v === le)
                  for (var g = p.return; g !== null; ) {
                    var _ = g.tag;
                    if (_ === J || _ === le) {
                      var b = g.stateNode.containerInfo;
                      if (M0(b, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var M = Ns(y);
                  if (M === null)
                    return;
                  var z = M.tag;
                  if (z === ie || z === de) {
                    p = s = M;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      rd(function() {
        return xR(e, t, a, s);
      });
    }
    function Jd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _R(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, b = _.stateNode, M = _.tag;
        if (M === ie && b !== null && (g = b, p !== null)) {
          var z = nu(y, p);
          z != null && v.push(Jd(y, z, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function oh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ie && f !== null) {
          var v = f, y = nu(u, a);
          y != null && i.unshift(Jd(u, y, v));
          var g = nu(u, t);
          g != null && i.push(Jd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function DR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = of(s))
        u++;
      for (var f = 0, p = i; p; p = of(p))
        f++;
      for (; u - f > 0; )
        a = of(a), u--;
      for (; f - u > 0; )
        i = of(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = of(a), i = of(i);
      }
      return null;
    }
    function N0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === ie && g !== null) {
          var b = g;
          if (u) {
            var M = nu(p, s);
            M != null && f.unshift(Jd(p, M, b));
          } else if (!u) {
            var z = nu(p, s);
            z != null && f.push(Jd(p, z, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kR(e, t, a, i, u) {
      var s = i && u ? DR(i, u) : null;
      i !== null && N0(e, t, i, s, !1), u !== null && a !== null && N0(e, a, u, s, !0);
    }
    function OR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Pa = !1, ep = "dangerouslySetInnerHTML", sh = "suppressContentEditableWarning", Do = "suppressHydrationWarning", z0 = "autoFocus", Ls = "children", Ms = "style", ch = "__html", Dy, fh, tp, U0, dh, A0, F0;
    Dy = {
      dialog: !0,
      webview: !0
    }, fh = function(e, t) {
      ic(e, t), Zf(e, t), Ev(e, t, {
        registrationNameDependencies: jt,
        possibleRegistrationNames: Pr
      });
    }, A0 = dn && !document.documentMode, tp = function(e, t, a) {
      if (!Pa) {
        var i = ph(a), u = ph(t);
        u !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, U0 = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, dh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, F0 = function(e, t) {
      var a = e.namespaceURI === Mi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var LR = /\r\n?/g, MR = /\u0000|\uFFFD/g;
    function ph(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(LR, `
`).replace(MR, "");
    }
    function vh(e, t, a, i) {
      var u = ph(t), s = ph(e);
      if (s !== u && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Se))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function j0(e) {
      return e.nodeType === Za ? e : e.ownerDocument;
    }
    function NR() {
    }
    function hh(e) {
      e.onclick = NR;
    }
    function zR(e, t, a, i, u) {
      for (var s in i)
        if (!!i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ms)
            f && Object.freeze(f), cv(t, f);
          else if (s === ep) {
            var p = f ? f[ch] : void 0;
            p != null && Jp(t, p);
          } else if (s === Ls)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && tc(t, f);
            } else
              typeof f == "number" && tc(t, "" + f);
          else
            s === sh || s === Do || s === z0 || (jt.hasOwnProperty(s) ? f != null && (typeof f != "function" && dh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && da(t, s, f, u));
        }
    }
    function UR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ms ? cv(e, f) : s === ep ? Jp(e, f) : s === Ls ? tc(e, f) : da(e, s, f, i);
      }
    }
    function AR(e, t, a, i) {
      var u, s = j0(a), f, p = i;
      if (p === Mi && (p = Js(e)), p === Mi) {
        if (u = zi(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Mi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FR(e, t) {
      return j0(t).createTextNode(e);
    }
    function jR(e, t, a, i) {
      var u = zi(t, a);
      fh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Kd.length; f++)
            Sn(Kd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          Qt(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = Xo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), s = $f(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (rc(t, s), zR(t, e, i, s, u), t) {
        case "input":
          _a(e), X(e, a, !1);
          break;
        case "textarea":
          _a(e), Zp(e);
          break;
        case "option":
          Kt(e, a);
          break;
        case "select":
          Vf(e, a);
          break;
        default:
          typeof s.onClick == "function" && hh(e);
          break;
      }
    }
    function HR(e, t, a, i, u) {
      fh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = $f(e, a), p = $f(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && hh(e);
          break;
      }
      rc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ms) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === ep || v === Ls || v === sh || v === Do || v === z0 || (jt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === M || b == null && M == null))
          if (v === Ms)
            if (b && Object.freeze(b), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && M[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === ep) {
            var z = b ? b[ch] : void 0, j = M ? M[ch] : void 0;
            z != null && j !== z && (s = s || []).push(v, z);
          } else
            v === Ls ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === sh || v === Do || (jt.hasOwnProperty(v) ? (b != null && (typeof b != "function" && dh(v, b), v === "onScroll" && Sn("scroll", e)), !s && M !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (Jo(g, p[Ms]), (s = s || []).push(Ms, g)), s;
    }
    function PR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && N(e, u);
      var s = zi(a, i), f = zi(a, u);
      switch (UR(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          Kp(e, u);
          break;
        case "select":
          Pm(e, u);
          break;
      }
    }
    function VR(e) {
      {
        var t = e.toLowerCase();
        return ac.hasOwnProperty(t) && ac[t] || null;
      }
    }
    function BR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = zi(t, a), fh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Kd.length; y++)
            Sn(Kd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          Qt(e, a);
          break;
        case "select":
          Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), Sn("invalid", e);
          break;
      }
      rc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var b = g[_].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var M = null;
      for (var z in a)
        if (!!a.hasOwnProperty(z)) {
          var j = a[z];
          if (z === Ls)
            typeof j == "string" ? e.textContent !== j && (a[Do] !== !0 && vh(e.textContent, j, s, f), M = [Ls, j]) : typeof j == "number" && e.textContent !== "" + j && (a[Do] !== !0 && vh(e.textContent, j, s, f), M = [Ls, "" + j]);
          else if (jt.hasOwnProperty(z))
            j != null && (typeof j != "function" && dh(z, j), z === "onScroll" && Sn("scroll", e));
          else if (f && !0 && typeof p == "boolean") {
            var ve = void 0, Ne = p && Ie ? null : br(z);
            if (a[Do] !== !0) {
              if (!(z === sh || z === Do || z === "value" || z === "checked" || z === "selected")) {
                if (z === ep) {
                  var be = e.innerHTML, Rt = j ? j[ch] : void 0;
                  if (Rt != null) {
                    var ht = F0(e, Rt);
                    ht !== be && tp(z, be, ht);
                  }
                } else if (z === Ms) {
                  if (v.delete(z), A0) {
                    var k = Gm(j);
                    ve = e.getAttribute("style"), k !== ve && tp(z, ve, k);
                  }
                } else if (p && !Ie)
                  v.delete(z.toLowerCase()), ve = ui(e, z, j), j !== ve && tp(z, ve, j);
                else if (!vn(z, Ne, p) && !It(z, j, Ne, p)) {
                  var H = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), ve = fa(e, z, j, Ne);
                  else {
                    var O = i;
                    if (O === Mi && (O = Js(t)), O === Mi)
                      v.delete(z.toLowerCase());
                    else {
                      var G = VR(z);
                      G !== null && G !== z && (H = !0, v.delete(G)), v.delete(z);
                    }
                    ve = ui(e, z, j);
                  }
                  var he = Ie;
                  !he && j !== ve && !H && tp(z, ve, j);
                }
              }
            }
          }
        }
      switch (f && v.size > 0 && a[Do] !== !0 && U0(v), t) {
        case "input":
          _a(e), X(e, a, !0);
          break;
        case "textarea":
          _a(e), Zp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && hh(e);
          break;
      }
      return M;
    }
    function $R(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function YR(e, t, a) {
      switch (t) {
        case "input":
          Ae(e, a);
          return;
        case "textarea":
          Yf(e, a);
          return;
        case "select":
          Vm(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var IR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], H0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        "foreignObject",
        "desc",
        "title"
      ], QR = H0.concat(["button"]), WR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], P0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = st({}, e || P0), i = {
          tag: t
        };
        return H0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), QR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), IR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var GR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return WR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, qR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, V0 = {};
      np = function(e, t, a) {
        a = a || P0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = GR(e, u) ? null : i, f = s ? null : qR(e, a), p = s || f;
        if (!!p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!V0[y]) {
            V0[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, b);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var mh = "suppressHydrationWarning", yh = "$", gh = "/$", ap = "$?", ip = "$!", XR = "style", Ny = null, zy = null;
    function KR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Za:
        case Zl: {
          t = i === Za ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Qf(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = rp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ZR(e, t, a) {
      {
        var i = e, u = Qf(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function mD(e) {
      return e;
    }
    function JR(e) {
      Ny = Sa(), zy = pR();
      var t = null;
      return Kn(!1), t;
    }
    function eT(e) {
      vR(zy), Kn(Ny), Ny = null, zy = null;
    }
    function tT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (np(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = rp(f.ancestorInfo, e);
          np(null, p, v);
        }
        s = f.namespace;
      }
      var y = AR(e, t, a, s);
      return op(u, y), By(y, t), y;
    }
    function nT(e, t) {
      e.appendChild(t);
    }
    function rT(e, t, a, i, u) {
      switch (jR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function aT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = rp(f.ancestorInfo, t);
          np(null, p, v);
        }
      }
      return HR(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function iT(e, t, a, i) {
      {
        var u = a;
        np(null, e, u.ancestorInfo);
      }
      var s = FR(e, t);
      return op(i, s), s;
    }
    function lT() {
      var e = window.event;
      return e === void 0 ? Bi : Or(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, uT = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, B0 = typeof Promise == "function" ? Promise : void 0, oT = typeof queueMicrotask == "function" ? queueMicrotask : typeof B0 < "u" ? function(e) {
      return B0.resolve(null).then(e).catch(sT);
    } : Ay;
    function sT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function fT(e, t, a, i, u, s) {
      PR(e, t, a, i, u), By(e, u);
    }
    function $0(e) {
      tc(e, "");
    }
    function dT(e, t, a) {
      e.nodeValue = a;
    }
    function pT(e, t) {
      e.appendChild(t);
    }
    function vT(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && hh(a);
    }
    function hT(e, t, a) {
      e.insertBefore(t, a);
    }
    function mT(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yT(e, t) {
      e.removeChild(t);
    }
    function gT(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === gh)
            if (i === 0) {
              e.removeChild(u), vt(t);
              return;
            } else
              i--;
          else
            (s === yh || s === ap || s === ip) && i++;
        }
        a = u;
      } while (a);
      vt(t);
    }
    function ST(e, t) {
      e.nodeType === Mn ? jy(e.parentNode, t) : e.nodeType === qr && jy(e, t), vt(e);
    }
    function ET(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function CT(e) {
      e.nodeValue = "";
    }
    function RT(e, t) {
      e = e;
      var a = t[XR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = nc("display", i);
    }
    function TT(e, t) {
      e.nodeValue = t;
    }
    function wT(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === Za && e.documentElement && e.removeChild(e.documentElement);
    }
    function bT(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function xT(e, t) {
      return t === "" || e.nodeType !== Ni ? null : e;
    }
    function _T(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function Y0(e) {
      return e.data === ap;
    }
    function Hy(e) {
      return e.data === ip;
    }
    function DT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kT(e, t) {
      e._reactRetry = t;
    }
    function Sh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Ni)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === yh || a === ip || a === ap)
            break;
          if (a === gh)
            return null;
        }
      }
      return e;
    }
    function lp(e) {
      return Sh(e.nextSibling);
    }
    function OT(e) {
      return Sh(e.firstChild);
    }
    function LT(e) {
      return Sh(e.firstChild);
    }
    function MT(e) {
      return Sh(e.nextSibling);
    }
    function NT(e, t, a, i, u, s, f) {
      op(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ft) !== Ue;
      return BR(e, t, a, p, i, y, f);
    }
    function zT(e, t, a, i) {
      return op(a, e), a.mode & ft, $R(e, t);
    }
    function UT(e, t) {
      op(t, e);
    }
    function AT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === gh) {
            if (a === 0)
              return lp(t);
            a--;
          } else
            (i === yh || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function I0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === yh || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else
            i === gh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function FT(e) {
      vt(e);
    }
    function jT(e) {
      vt(e);
    }
    function HT(e) {
      return e !== "head" && e !== "body";
    }
    function PT(e, t, a, i) {
      var u = !0;
      vh(t.nodeValue, a, i, u);
    }
    function VT(e, t, a, i, u, s) {
      if (t[mh] !== !0) {
        var f = !0;
        vh(i.nodeValue, u, s, f);
      }
    }
    function BT(e, t) {
      t.nodeType === qr ? ky(e, t) : t.nodeType === Mn || Oy(e, t);
    }
    function $T(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? ky(a, t) : t.nodeType === Mn || Oy(a, t));
      }
    }
    function YT(e, t, a, i, u) {
      (u || t[mh] !== !0) && (i.nodeType === qr ? ky(a, i) : i.nodeType === Mn || Oy(a, i));
    }
    function IT(e, t, a) {
      Ly(e, t);
    }
    function QT(e, t) {
      My(e, t);
    }
    function WT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function GT(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function qT(e, t, a, i, u, s) {
      (s || t[mh] !== !0) && Ly(a, i);
    }
    function XT(e, t, a, i, u) {
      (u || t[mh] !== !0) && My(a, i);
    }
    function KT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ZT(e) {
      Zd(e);
    }
    var sf = Math.random().toString(36).slice(2), cf = "__reactFiber$" + sf, Py = "__reactProps$" + sf, up = "__reactContainer$" + sf, Vy = "__reactEvents$" + sf, JT = "__reactListeners$" + sf, ew = "__reactHandles$" + sf;
    function tw(e) {
      delete e[cf], delete e[Py], delete e[Vy], delete e[JT], delete e[ew];
    }
    function op(e, t) {
      t[cf] = e;
    }
    function Eh(e, t) {
      t[up] = e;
    }
    function Q0(e) {
      e[up] = null;
    }
    function sp(e) {
      return !!e[up];
    }
    function Ns(e) {
      var t = e[cf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[cf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = I0(e); u !== null; ) {
              var s = u[cf];
              if (s)
                return s;
              u = I0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ko(e) {
      var t = e[cf] || e[up];
      return t && (t.tag === ie || t.tag === de || t.tag === De || t.tag === J) ? t : null;
    }
    function ff(e) {
      if (e.tag === ie || e.tag === de)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ch(e) {
      return e[Py] || null;
    }
    function By(e, t) {
      e[Py] = t;
    }
    function nw(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var W0 = {}, G0 = U.ReactDebugCurrentFrame;
    function Rh(e) {
      if (e) {
        var t = e._owner, a = di(e.type, e._source, t ? t.type : null);
        G0.setExtraStackFrame(a);
      } else
        G0.setExtraStackFrame(null);
    }
    function Wi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Yn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Rh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Rh(null)), p instanceof Error && !(p.message in W0) && (W0[p.message] = !0, Rh(u), S("Failed %s type: %s", a, p.message), Rh(null));
          }
      }
    }
    var $y = [], Th;
    Th = [];
    var xu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (xu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Th[xu] && S("Unexpected Fiber popped."), e.current = $y[xu], $y[xu] = null, Th[xu] = null, xu--;
    }
    function ia(e, t, a) {
      xu++, $y[xu] = e.current, Th[xu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var ri = {};
    Object.freeze(ri);
    var _u = Oo(ri), jl = Oo(!1), Iy = ri;
    function df(e, t, a) {
      return a && Hl(t) ? Iy : _u.current;
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function pf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ri;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ge(e) || "Unknown";
          Wi(i, s, "context", p);
        }
        return u && q0(e, t, s), s;
      }
    }
    function wh() {
      return jl.current;
    }
    function Hl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function bh(e) {
      aa(jl, e), aa(_u, e);
    }
    function Qy(e) {
      aa(jl, e), aa(_u, e);
    }
    function X0(e, t, a) {
      {
        if (_u.current !== ri)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(_u, t, e), ia(jl, a, e);
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ge(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ge(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ge(e) || "Unknown";
          Wi(u, f, "child context", v);
        }
        return st({}, a, f);
      }
    }
    function xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ri;
        return Iy = _u.current, ia(_u, a, e), ia(jl, jl.current, e), !0;
      }
    }
    function Z0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = K0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, aa(jl, e), aa(_u, e), ia(_u, u, e), ia(jl, a, e);
        } else
          aa(jl, e), ia(jl, a, e);
      }
    }
    function rw(e) {
      {
        if (!dd(e) || e.tag !== se)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case se: {
              var a = t.type;
              if (Hl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, _h = 1, Du = null, Wy = !1, Gy = !1;
    function J0(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function aw(e) {
      Wy = !0, J0(e);
    }
    function eE() {
      Wy && Mo();
    }
    function Mo() {
      if (!Gy && Du !== null) {
        Gy = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = Du;
          for (Pn(gr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, Wy = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), pc(hc, Mo), s;
        } finally {
          Pn(t), Gy = !1;
        }
      }
      return null;
    }
    var vf = [], hf = 0, Dh = null, kh = 0, Ci = [], Ri = 0, zs = null, ku = 1, Ou = "";
    function iw(e) {
      return As(), (e.flags & sd) !== Le;
    }
    function lw(e) {
      return As(), kh;
    }
    function uw() {
      var e = Ou, t = ku, a = t & ~ow(t);
      return a.toString(32) + e;
    }
    function Us(e, t) {
      As(), vf[hf++] = kh, vf[hf++] = Dh, Dh = e, kh = t;
    }
    function tE(e, t, a) {
      As(), Ci[Ri++] = ku, Ci[Ri++] = Ou, Ci[Ri++] = zs, zs = e;
      var i = ku, u = Ou, s = Oh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Oh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), b = f >> y, M = s - y, z = Oh(t) + M, j = p << M, ve = j | b, Ne = _ + u;
        ku = 1 << z | ve, Ou = Ne;
      } else {
        var be = p << s, Rt = be | f, ht = u;
        ku = 1 << v | Rt, Ou = ht;
      }
    }
    function qy(e) {
      As();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Us(e, a), tE(e, a, i);
      }
    }
    function Oh(e) {
      return 32 - Cc(e);
    }
    function ow(e) {
      return 1 << Oh(e) - 1;
    }
    function Xy(e) {
      for (; e === Dh; )
        Dh = vf[--hf], vf[hf] = null, kh = vf[--hf], vf[hf] = null;
      for (; e === zs; )
        zs = Ci[--Ri], Ci[Ri] = null, Ou = Ci[--Ri], Ci[Ri] = null, ku = Ci[--Ri], Ci[Ri] = null;
    }
    function sw() {
      return As(), zs !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function cw(e, t) {
      As(), Ci[Ri++] = ku, Ci[Ri++] = Ou, Ci[Ri++] = zs, ku = t.id, Ou = t.overflow, zs = e;
    }
    function As() {
      Mr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Lr = null, Ti = null, Gi = !1, Fs = !1, No = null;
    function fw() {
      Gi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function nE() {
      Fs = !0;
    }
    function dw() {
      return Fs;
    }
    function pw(e) {
      var t = e.stateNode.containerInfo;
      return Ti = LT(t), Lr = e, Gi = !0, No = null, Fs = !1, !0;
    }
    function vw(e, t, a) {
      return Ti = MT(t), Lr = e, Gi = !0, No = null, Fs = !1, a !== null && cw(e, a), !0;
    }
    function rE(e, t) {
      switch (e.tag) {
        case J: {
          BT(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & ft) !== Ue;
          YT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && $T(i.dehydrated, t);
          break;
        }
      }
    }
    function aE(e, t) {
      rE(e, t);
      var a = y_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (Fs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, IT(a, i);
                break;
              case de:
                var u = t.pendingProps;
                QT(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ft) !== Ue;
                qT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  g
                );
                break;
              }
              case de: {
                var _ = t.pendingProps, b = (e.mode & ft) !== Ue;
                XT(
                  s,
                  f,
                  p,
                  _,
                  b
                );
                break;
              }
            }
            break;
          }
          case De: {
            var M = e.memoizedState, z = M.dehydrated;
            if (z !== null)
              switch (t.tag) {
                case ie:
                  var j = t.type;
                  t.pendingProps, WT(z, j);
                  break;
                case de:
                  var ve = t.pendingProps;
                  GT(z, ve);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function iE(e, t) {
      t.flags = t.flags & ~La | an, Ky(e, t);
    }
    function lE(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = bT(t, a);
          return i !== null ? (e.stateNode = i, Lr = e, Ti = OT(i), !0) : !1;
        }
        case de: {
          var u = e.pendingProps, s = xT(t, u);
          return s !== null ? (e.stateNode = s, Lr = e, Ti = null, !0) : !1;
        }
        case De: {
          var f = _T(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: sw(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = g_(f);
            return v.return = e, e.child = v, Lr = e, Ti = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & ft) !== Ue && (e.flags & $e) === Le;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (!!Gi) {
        var t = Ti;
        if (!t) {
          Zy(e) && (Ky(Lr, e), Jy()), iE(Lr, e), Gi = !1, Lr = e;
          return;
        }
        var a = t;
        if (!lE(e, t)) {
          Zy(e) && (Ky(Lr, e), Jy()), t = lp(a);
          var i = Lr;
          if (!t || !lE(e, t)) {
            iE(Lr, e), Gi = !1, Lr = e;
            return;
          }
          aE(i, a);
        }
      }
    }
    function hw(e, t, a) {
      var i = e.stateNode, u = !Fs, s = NT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function mw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = zT(t, a, e);
      if (i) {
        var u = Lr;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & ft) !== Ue;
              PT(
                s,
                t,
                a,
                f
              );
              break;
            }
            case ie: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ft) !== Ue;
              VT(
                p,
                v,
                y,
                t,
                a,
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      UT(a, e);
    }
    function gw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return AT(a);
    }
    function uE(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== J && t.tag !== De; )
        t = t.return;
      Lr = t;
    }
    function Lh(e) {
      if (e !== Lr)
        return !1;
      if (!Gi)
        return uE(e), Gi = !0, !1;
      if (e.tag !== J && (e.tag !== ie || HT(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = Ti;
        if (t)
          if (Zy(e))
            oE(e), Jy();
          else
            for (; t; )
              aE(e, t), t = lp(t);
      }
      return uE(e), e.tag === De ? Ti = gw(e) : Ti = Lr ? lp(e.stateNode) : null, !0;
    }
    function Sw() {
      return Gi && Ti !== null;
    }
    function oE(e) {
      for (var t = Ti; t; )
        rE(e, t), t = lp(t);
    }
    function mf() {
      Lr = null, Ti = null, Gi = !1, Fs = !1;
    }
    function sE() {
      No !== null && (r1(No), No = null);
    }
    function Mr() {
      return Gi;
    }
    function tg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var Ew = U.ReactCurrentBatchConfig, Cw = null;
    function Rw() {
      return Ew.transition;
    }
    var qi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Tw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & yn && (t = a), a = a.return;
        return t;
      }, js = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Hs = /* @__PURE__ */ new Set();
      qi.recordUnsafeLifecycleWarnings = function(e, t) {
        Hs.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, qi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(b) {
          e.add(Ge(b) || "Component"), Hs.add(b.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(b) {
          t.add(Ge(b) || "Component"), Hs.add(b.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          a.add(Ge(b) || "Component"), Hs.add(b.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          i.add(Ge(b) || "Component"), Hs.add(b.type);
        }), pp = []);
        var u = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          u.add(Ge(b) || "Component"), Hs.add(b.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(b) {
          s.add(Ge(b) || "Component"), Hs.add(b.type);
        }), hp = []), t.size > 0) {
          var f = js(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = js(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = js(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = js(e);
          We(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = js(a);
          We(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = js(u);
          We(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Mh = /* @__PURE__ */ new Map(), cE = /* @__PURE__ */ new Set();
      qi.recordLegacyContextWarning = function(e, t) {
        var a = Tw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!cE.has(e.type)) {
          var i = Mh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Mh.set(a, i)), i.push(e));
        }
      }, qi.flushLegacyContextWarning = function() {
        Mh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ge(s) || "Component"), cE.add(s.type);
            });
            var u = js(i);
            try {
              Bt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, qi.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Mh = /* @__PURE__ */ new Map();
      };
    }
    function Xi(e, t) {
      if (e && e.defaultProps) {
        var a = st({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var ng = Oo(null), rg;
    rg = {};
    var Nh = null, yf = null, ag = null, zh = !1;
    function Uh() {
      Nh = null, yf = null, ag = null, zh = !1;
    }
    function fE() {
      zh = !0;
    }
    function dE() {
      zh = !1;
    }
    function pE(e, t, a) {
      ia(ng, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== rg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = rg;
    }
    function ig(e, t) {
      var a = ng.current;
      aa(ng, t), e._currentValue = a;
    }
    function lg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = rt(u.childLanes, t)) : (i.childLanes = rt(i.childLanes, t), u !== null && (u.childLanes = rt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ww(e, t, a) {
      bw(e, t, a);
    }
    function bw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === se) {
                var p = Hn(a), v = Lu(Jt, p);
                v.tag = Fh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = rt(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = rt(b.lanes, a)), lg(i.return, a, e), s.lanes = rt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ut)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Wt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = rt(M.lanes, a);
          var z = M.alternate;
          z !== null && (z.lanes = rt(z.lanes, a)), lg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function gf(e, t) {
      Nh = e, yf = null, ag = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && kp(), a.firstContext = null);
      }
    }
    function Jn(e) {
      zh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ag !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (yf === null) {
          if (Nh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          yf = a, Nh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          yf = yf.next = a;
      }
      return t;
    }
    var Ps = null;
    function ug(e) {
      Ps === null ? Ps = [e] : Ps.push(e);
    }
    function xw() {
      if (Ps !== null) {
        for (var e = 0; e < Ps.length; e++) {
          var t = Ps[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ps = null;
      }
    }
    function vE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ah(e, i);
    }
    function _w(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Dw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ah(e, i);
    }
    function Va(e, t) {
      return Ah(e, t);
    }
    var kw = Ah;
    function Ah(e, t) {
      e.lanes = rt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = rt(a.lanes, t)), a === null && (e.flags & (an | La)) !== Le && h1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = rt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = rt(a.childLanes, t) : (u.flags & (an | La)) !== Le && h1(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hE = 0, mE = 1, Fh = 2, og = 3, jh = !1, sg, Hh;
    sg = !1, Hh = null;
    function cg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function yE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: hE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Hh === u && !sg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), sg = !0), kx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, kw(e, a);
      } else
        return Dw(e, u, t, a);
    }
    function Ph(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (bd(a)) {
          var s = u.lanes;
          s = _d(s, e.pendingLanes);
          var f = rt(s, a);
          u.lanes = f, vo(e, f);
        }
      }
    }
    function fg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Ow(e, t, a, i, u, s) {
      switch (a.tag) {
        case mE: {
          var f = a.payload;
          if (typeof f == "function") {
            fE();
            var p = f.call(s, i, u);
            {
              if (e.mode & yn) {
                jn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  jn(!1);
                }
              }
              dE();
            }
            return p;
          }
          return f;
        }
        case og:
          e.flags = e.flags & ~Gn | $e;
        case hE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fE(), y = v.call(s, i, u);
            {
              if (e.mode & yn) {
                jn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  jn(!1);
                }
              }
              dE();
            }
          } else
            y = v;
          return y == null ? i : st({}, i, y);
        }
        case Fh:
          return jh = !0, i;
      }
      return i;
    }
    function Vh(e, t, a, i) {
      var u = e.updateQueue;
      jh = !1, Hh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, b = _.lastBaseUpdate;
          b !== f && (b === null ? _.firstBaseUpdate = y : b.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, z = P, j = null, ve = null, Ne = null, be = s;
        do {
          var Rt = be.lane, ht = be.eventTime;
          if (hu(i, Rt)) {
            if (Ne !== null) {
              var H = {
                eventTime: ht,
                lane: Et,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              Ne = Ne.next = H;
            }
            M = Ow(e, u, be, M, t, a);
            var O = be.callback;
            if (O !== null && be.lane !== Et) {
              e.flags |= hi;
              var G = u.effects;
              G === null ? u.effects = [be] : G.push(be);
            }
          } else {
            var k = {
              eventTime: ht,
              lane: Rt,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            Ne === null ? (ve = Ne = k, j = M) : Ne = Ne.next = k, z = rt(z, Rt);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var he = p, oe = he.next;
            he.next = null, be = oe, u.lastBaseUpdate = he, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (j = M), u.baseState = j, u.firstBaseUpdate = ve, u.lastBaseUpdate = Ne;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var Ke = Be;
          do
            z = rt(z, Ke.lane), Ke = Ke.next;
          while (Ke !== Be);
        } else
          s === null && (u.shared.lanes = P);
        Vp(z), e.lanes = z, e.memoizedState = M;
      }
      Hh = null;
    }
    function Lw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gE() {
      jh = !1;
    }
    function Bh() {
      return jh;
    }
    function SE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Lw(f, a));
        }
    }
    var dg = {}, EE = new $.Component().refs, pg, vg, hg, mg, yg, CE, $h, gg, Sg, Eg;
    {
      pg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set();
      var RE = /* @__PURE__ */ new Set();
      $h = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          RE.has(a) || (RE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, CE = function(e, t) {
        if (t === void 0) {
          var a = _t(e) || "Component";
          yg.has(a) || (yg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(dg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(dg);
    }
    function Cg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & yn) {
          jn(!0);
          try {
            s = a(i, u);
          } finally {
            jn(!1);
          }
        }
        CE(t, s);
      }
      var f = s == null ? u : st({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Rg = {
      isMounted: ma,
      enqueueSetState: function(e, t, a) {
        var i = ka(e), u = Ra(), s = Bo(i), f = Lu(u, s);
        f.payload = t, a != null && ($h(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (dr(p, i, s, u), Ph(p, i, s)), kl(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ka(e), u = Ra(), s = Bo(i), f = Lu(u, s);
        f.tag = mE, f.payload = t, a != null && ($h(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (dr(p, i, s, u), Ph(p, i, s)), kl(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ka(e), i = Ra(), u = Bo(a), s = Lu(i, u);
        s.tag = Fh, t != null && ($h(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (dr(f, a, u, i), Ph(f, a, u)), Cd(a, u);
      }
    };
    function TE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & yn) {
            jn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              jn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", _t(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ke(a, i) || !ke(u, s) : !0;
    }
    function Mw(e, t, a) {
      var i = e.stateNode;
      {
        var u = _t(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Sg.has(t) && (Sg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _t(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !hg.has(t) && (hg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _t(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || yt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function wE(e, t) {
      t.updater = Rg, e.stateNode = t, ro(t, e), t._reactInternalInstance = dg;
    }
    function bE(e, t, a) {
      var i = !1, u = ri, s = ri, f = t.contextType;
      if ("contextType" in t) {
        var p = f === null || f !== void 0 && f.$$typeof === te && f._context === void 0;
        if (!p && !Eg.has(t)) {
          Eg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Y ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _t(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jn(f);
      else {
        u = df(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? pf(e, u) : ri;
      }
      var g = new t(a, s);
      if (e.mode & yn) {
        jn(!0);
        try {
          g = new t(a, s);
        } finally {
          jn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      wE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var b = _t(t) || "Component";
          vg.has(b) || (vg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, z = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), M !== null || z !== null || j !== null) {
            var ve = _t(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            mg.has(ve) || (mg.add(ve), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ve, Ne, M !== null ? `
  ` + M : "", z !== null ? `
  ` + z : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && q0(e, u, s), g;
    }
    function Nw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ge(e) || "Component"), Rg.enqueueReplaceState(t, t.state, null));
    }
    function xE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ge(e) || "Component";
          pg.has(s) || (pg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Rg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Tg(e, t, a, i) {
      Mw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = EE, cg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jn(s);
      else {
        var f = df(e, t, !0);
        u.context = pf(e, f);
      }
      {
        if (u.state === a) {
          var p = _t(t) || "Component";
          gg.has(p) || (gg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & yn && qi.recordLegacyContextWarning(e, u), qi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Cg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Nw(e, u), Vh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = nt;
        y |= Kr, (e.mode & za) !== Ue && (y |= Zr), e.flags |= y;
      }
    }
    function zw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ri;
      if (typeof p == "object" && p !== null)
        v = Jn(p);
      else {
        var y = df(e, t, !0);
        v = pf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && xE(e, u, a, v), gE();
      var b = e.memoizedState, M = u.state = b;
      if (Vh(e, a, u, i), M = e.memoizedState, s === a && b === M && !wh() && !Bh()) {
        if (typeof u.componentDidMount == "function") {
          var z = nt;
          z |= Kr, (e.mode & za) !== Ue && (z |= Zr), e.flags |= z;
        }
        return !1;
      }
      typeof g == "function" && (Cg(e, t, g, a), M = e.memoizedState);
      var j = Bh() || TE(e, t, s, a, b, M, v);
      if (j) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ve = nt;
          ve |= Kr, (e.mode & za) !== Ue && (ve |= Zr), e.flags |= ve;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = nt;
          Ne |= Kr, (e.mode & za) !== Ue && (Ne |= Zr), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, j;
    }
    function Uw(e, t, a, i, u) {
      var s = t.stateNode;
      yE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Xi(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = ri;
      if (typeof g == "object" && g !== null)
        _ = Jn(g);
      else {
        var b = df(t, a, !0);
        _ = pf(t, b);
      }
      var M = a.getDerivedStateFromProps, z = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && xE(t, s, i, _), gE();
      var j = t.memoizedState, ve = s.state = j;
      if (Vh(t, i, s, u), ve = t.memoizedState, f === v && j === ve && !wh() && !Bh() && !xe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Oa), !1;
      typeof M == "function" && (Cg(t, a, M, i), ve = t.memoizedState);
      var Ne = Bh() || TE(t, a, p, i, j, ve, _) || xe;
      return Ne ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ve, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ve, _)), typeof s.componentDidUpdate == "function" && (t.flags |= nt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Oa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Oa), t.memoizedProps = i, t.memoizedState = ve), s.props = i, s.state = ve, s.context = _, Ne;
    }
    var wg, bg, xg, _g, Dg, _E = function(e, t) {
    };
    wg = !1, bg = !1, xg = {}, _g = {}, Dg = {}, _E = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ge(t) || "Component";
        _g[a] || (_g[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & yn || Pe) && !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ge(e) || "Component";
          xg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), xg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== se)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          In(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var b = v.refs;
            b === EE && (b = v.refs = {}), _ === null ? delete b[y] : b[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ih(e) {
      {
        var t = Ge(e) || "Component";
        if (Dg[t])
          return;
        Dg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function DE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function kE(e) {
      function t(k, H) {
        if (!!e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= Ut) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(k, H) {
        var O = Gs(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= sd, H;
        var G = k.alternate;
        if (G !== null) {
          var he = G.index;
          return he < H ? (k.flags |= an, H) : he;
        } else
          return k.flags |= an, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= an), k;
      }
      function p(k, H, O, G) {
        if (H === null || H.tag !== de) {
          var he = t0(O, k.mode, G);
          return he.return = k, he;
        } else {
          var oe = u(H, O);
          return oe.return = k, oe;
        }
      }
      function v(k, H, O, G) {
        var he = O.type;
        if (he === pa)
          return g(k, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === he || S1(H, O) || typeof he == "object" && he !== null && he.$$typeof === Me && DE(he) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = mp(k, H, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Be = e0(O, k.mode, G);
        return Be.ref = mp(k, H, O), Be.return = k, Be;
      }
      function y(k, H, O, G) {
        if (H === null || H.tag !== le || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var he = n0(O, k.mode, G);
          return he.return = k, he;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, H, O, G, he) {
        if (H === null || H.tag !== Oe) {
          var oe = Yo(O, k.mode, G, he);
          return oe.return = k, oe;
        } else {
          var Be = u(H, O);
          return Be.return = k, Be;
        }
      }
      function _(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = t0("" + H, k.mode, O);
          return G.return = k, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case oi: {
              var he = e0(H, k.mode, O);
              return he.ref = mp(k, null, H), he.return = k, he;
            }
            case xr: {
              var oe = n0(H, k.mode, O);
              return oe.return = k, oe;
            }
            case Me: {
              var Be = H._payload, Ke = H._init;
              return _(k, Ke(Be), O);
            }
          }
          if (yt(H) || Ga(H)) {
            var qt = Yo(H, k.mode, O, null);
            return qt.return = k, qt;
          }
          Yh(k, H);
        }
        return typeof H == "function" && Ih(k), null;
      }
      function b(k, H, O, G) {
        var he = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return he !== null ? null : p(k, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case oi:
              return O.key === he ? v(k, H, O, G) : null;
            case xr:
              return O.key === he ? y(k, H, O, G) : null;
            case Me: {
              var oe = O._payload, Be = O._init;
              return b(k, H, Be(oe), G);
            }
          }
          if (yt(O) || Ga(O))
            return he !== null ? null : g(k, H, O, G, null);
          Yh(k, O);
        }
        return typeof O == "function" && Ih(k), null;
      }
      function M(k, H, O, G, he) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var oe = k.get(O) || null;
          return p(H, oe, "" + G, he);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case oi: {
              var Be = k.get(G.key === null ? O : G.key) || null;
              return v(H, Be, G, he);
            }
            case xr: {
              var Ke = k.get(G.key === null ? O : G.key) || null;
              return y(H, Ke, G, he);
            }
            case Me:
              var qt = G._payload, Mt = G._init;
              return M(k, H, O, Mt(qt), he);
          }
          if (yt(G) || Ga(G)) {
            var $n = k.get(O) || null;
            return g(H, $n, G, he, null);
          }
          Yh(H, G);
        }
        return typeof G == "function" && Ih(H), null;
      }
      function z(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case oi:
            case xr:
              _E(k, O);
              var G = k.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", G);
              break;
            case Me:
              var he = k._payload, oe = k._init;
              z(oe(he), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, G) {
        for (var he = null, oe = 0; oe < O.length; oe++) {
          var Be = O[oe];
          he = z(Be, he, k);
        }
        for (var Ke = null, qt = null, Mt = H, $n = 0, Nt = 0, Un = null; Mt !== null && Nt < O.length; Nt++) {
          Mt.index > Nt ? (Un = Mt, Mt = null) : Un = Mt.sibling;
          var ua = b(k, Mt, O[Nt], G);
          if (ua === null) {
            Mt === null && (Mt = Un);
            break;
          }
          e && Mt && ua.alternate === null && t(k, Mt), $n = s(ua, $n, Nt), qt === null ? Ke = ua : qt.sibling = ua, qt = ua, Mt = Un;
        }
        if (Nt === O.length) {
          if (a(k, Mt), Mr()) {
            var Hr = Nt;
            Us(k, Hr);
          }
          return Ke;
        }
        if (Mt === null) {
          for (; Nt < O.length; Nt++) {
            var ii = _(k, O[Nt], G);
            ii !== null && ($n = s(ii, $n, Nt), qt === null ? Ke = ii : qt.sibling = ii, qt = ii);
          }
          if (Mr()) {
            var Ta = Nt;
            Us(k, Ta);
          }
          return Ke;
        }
        for (var wa = i(k, Mt); Nt < O.length; Nt++) {
          var oa = M(wa, k, Nt, O[Nt], G);
          oa !== null && (e && oa.alternate !== null && wa.delete(oa.key === null ? Nt : oa.key), $n = s(oa, $n, Nt), qt === null ? Ke = oa : qt.sibling = oa, qt = oa);
        }
        if (e && wa.forEach(function(Uf) {
          return t(k, Uf);
        }), Mr()) {
          var Fu = Nt;
          Us(k, Fu);
        }
        return Ke;
      }
      function ve(k, H, O, G) {
        var he = Ga(O);
        if (typeof he != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && O[Symbol.toStringTag] === "Generator" && (bg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), bg = !0), O.entries === he && (wg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wg = !0);
          var oe = he.call(O);
          if (oe)
            for (var Be = null, Ke = oe.next(); !Ke.done; Ke = oe.next()) {
              var qt = Ke.value;
              Be = z(qt, Be, k);
            }
        }
        var Mt = he.call(O);
        if (Mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Nt = null, Un = H, ua = 0, Hr = 0, ii = null, Ta = Mt.next(); Un !== null && !Ta.done; Hr++, Ta = Mt.next()) {
          Un.index > Hr ? (ii = Un, Un = null) : ii = Un.sibling;
          var wa = b(k, Un, Ta.value, G);
          if (wa === null) {
            Un === null && (Un = ii);
            break;
          }
          e && Un && wa.alternate === null && t(k, Un), ua = s(wa, ua, Hr), Nt === null ? $n = wa : Nt.sibling = wa, Nt = wa, Un = ii;
        }
        if (Ta.done) {
          if (a(k, Un), Mr()) {
            var oa = Hr;
            Us(k, oa);
          }
          return $n;
        }
        if (Un === null) {
          for (; !Ta.done; Hr++, Ta = Mt.next()) {
            var Fu = _(k, Ta.value, G);
            Fu !== null && (ua = s(Fu, ua, Hr), Nt === null ? $n = Fu : Nt.sibling = Fu, Nt = Fu);
          }
          if (Mr()) {
            var Uf = Hr;
            Us(k, Uf);
          }
          return $n;
        }
        for (var Qp = i(k, Un); !Ta.done; Hr++, Ta = Mt.next()) {
          var Wl = M(Qp, k, Hr, Ta.value, G);
          Wl !== null && (e && Wl.alternate !== null && Qp.delete(Wl.key === null ? Hr : Wl.key), ua = s(Wl, ua, Hr), Nt === null ? $n = Wl : Nt.sibling = Wl, Nt = Wl);
        }
        if (e && Qp.forEach(function(q_) {
          return t(k, q_);
        }), Mr()) {
          var G_ = Hr;
          Us(k, G_);
        }
        return $n;
      }
      function Ne(k, H, O, G) {
        if (H !== null && H.tag === de) {
          a(k, H.sibling);
          var he = u(H, O);
          return he.return = k, he;
        }
        a(k, H);
        var oe = t0(O, k.mode, G);
        return oe.return = k, oe;
      }
      function be(k, H, O, G) {
        for (var he = O.key, oe = H; oe !== null; ) {
          if (oe.key === he) {
            var Be = O.type;
            if (Be === pa) {
              if (oe.tag === Oe) {
                a(k, oe.sibling);
                var Ke = u(oe, O.props.children);
                return Ke.return = k, Ke._debugSource = O._source, Ke._debugOwner = O._owner, Ke;
              }
            } else if (oe.elementType === Be || S1(oe, O) || typeof Be == "object" && Be !== null && Be.$$typeof === Me && DE(Be) === oe.type) {
              a(k, oe.sibling);
              var qt = u(oe, O.props);
              return qt.ref = mp(k, oe, O), qt.return = k, qt._debugSource = O._source, qt._debugOwner = O._owner, qt;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === pa) {
          var Mt = Yo(O.props.children, k.mode, G, O.key);
          return Mt.return = k, Mt;
        } else {
          var $n = e0(O, k.mode, G);
          return $n.ref = mp(k, H, O), $n.return = k, $n;
        }
      }
      function Rt(k, H, O, G) {
        for (var he = O.key, oe = H; oe !== null; ) {
          if (oe.key === he)
            if (oe.tag === le && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var Be = u(oe, O.children || []);
              return Be.return = k, Be;
            } else {
              a(k, oe);
              break;
            }
          else
            t(k, oe);
          oe = oe.sibling;
        }
        var Ke = n0(O, k.mode, G);
        return Ke.return = k, Ke;
      }
      function ht(k, H, O, G) {
        var he = typeof O == "object" && O !== null && O.type === pa && O.key === null;
        if (he && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case oi:
              return f(be(k, H, O, G));
            case xr:
              return f(Rt(k, H, O, G));
            case Me:
              var oe = O._payload, Be = O._init;
              return ht(k, H, Be(oe), G);
          }
          if (yt(O))
            return j(k, H, O, G);
          if (Ga(O))
            return ve(k, H, O, G);
          Yh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ne(k, H, "" + O, G)) : (typeof O == "function" && Ih(k), a(k, H));
      }
      return ht;
    }
    var Sf = kE(!0), OE = kE(!1);
    function Aw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Gs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Gs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Fw(e, t) {
      for (var a = e.child; a !== null; )
        d_(a, t), a = a.sibling;
    }
    var yp = {}, Uo = Oo(yp), gp = Oo(yp), Qh = Oo(yp);
    function Wh(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function LE() {
      var e = Wh(Qh.current);
      return e;
    }
    function kg(e, t) {
      ia(Qh, t, e), ia(gp, e, e), ia(Uo, yp, e);
      var a = KR(t);
      aa(Uo, e), ia(Uo, a, e);
    }
    function Ef(e) {
      aa(Uo, e), aa(gp, e), aa(Qh, e);
    }
    function Og() {
      var e = Wh(Uo.current);
      return e;
    }
    function ME(e) {
      Wh(Qh.current);
      var t = Wh(Uo.current), a = ZR(t, e.type);
      t !== a && (ia(gp, e, e), ia(Uo, a, e));
    }
    function Lg(e) {
      gp.current === e && (aa(Uo, e), aa(gp, e));
    }
    var jw = 0, NE = 1, zE = 1, Sp = 2, Ki = Oo(jw);
    function Mg(e, t) {
      return (e & t) !== 0;
    }
    function Cf(e) {
      return e & NE;
    }
    function Ng(e, t) {
      return e & NE | t;
    }
    function Hw(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      ia(Ki, t, e);
    }
    function Rf(e) {
      aa(Ki, e);
    }
    function Pw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Gh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Y0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === Ot && t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & $e) !== Le;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ba = 0, ir = 1, Pl = 2, lr = 4, Nr = 8, zg = [];
    function Ug() {
      for (var e = 0; e < zg.length; e++) {
        var t = zg[e];
        t._workInProgressVersionPrimary = null;
      }
      zg.length = 0;
    }
    function Vw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = U.ReactCurrentDispatcher, Ep = U.ReactCurrentBatchConfig, Ag, Tf;
    Ag = /* @__PURE__ */ new Set();
    var Vs = P, Gt = null, ur = null, or = null, qh = !1, Cp = !1, Rp = 0, Bw = 0, $w = 25, V = null, wi = null, Fo = -1, Fg = !1;
    function Yt() {
      {
        var e = V;
        wi === null ? wi = [e] : wi.push(e);
      }
    }
    function re() {
      {
        var e = V;
        wi !== null && (Fo++, wi[Fo] !== e && Yw(e));
      }
    }
    function wf(e) {
      e != null && !yt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Yw(e) {
      {
        var t = Ge(Gt);
        if (!Ag.has(t) && (Ag.add(t), wi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = wi[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function jg(e, t) {
      if (Fg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function bf(e, t, a, i, u, s) {
      Vs = s, Gt = t, wi = e !== null ? e._debugHookTypes : null, Fo = -1, Fg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? fe.current = nC : wi !== null ? fe.current = tC : fe.current = eC;
      var f = a(i, u);
      if (Cp) {
        var p = 0;
        do {
          if (Cp = !1, Rp = 0, p >= $w)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fg = !1, ur = null, or = null, t.updateQueue = null, Fo = -1, fe.current = rC, f = a(i, u);
        } while (Cp);
      }
      fe.current = om, t._debugHookTypes = wi;
      var v = ur !== null && ur.next !== null;
      if (Vs = P, Gt = null, ur = null, or = null, V = null, wi = null, Fo = -1, e !== null && (e.flags & nr) !== (t.flags & nr) && (e.mode & ft) !== Ue && S("Internal React error: Expected static flag was missing. Please notify the React team."), qh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function xf() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function UE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & za) !== Ue ? t.flags &= ~(iu | Zr | cn | nt) : t.flags &= ~(cn | nt), e.lanes = po(e.lanes, a);
    }
    function AE() {
      if (fe.current = om, qh) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        qh = !1;
      }
      Vs = P, Gt = null, ur = null, or = null, wi = null, Fo = -1, V = null, qE = !1, Cp = !1, Rp = 0;
    }
    function Vl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return or === null ? Gt.memoizedState = or = e : or = or.next = e, or;
    }
    function bi() {
      var e;
      if (ur === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ur.next;
      var a;
      if (or === null ? a = Gt.memoizedState : a = or.next, a !== null)
        or = a, a = or.next, ur = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ur = e;
        var i = {
          memoizedState: ur.memoizedState,
          baseState: ur.baseState,
          baseQueue: ur.baseQueue,
          queue: ur.queue,
          next: null
        };
        or === null ? Gt.memoizedState = or = i : or = or.next = i;
      }
      return or;
    }
    function FE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var i = Vl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Gw.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function Vg(e, t, a) {
      var i = bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ur, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, b = null, M = null, z = null, j = g;
        do {
          var ve = j.lane;
          if (hu(Vs, ve)) {
            if (z !== null) {
              var be = {
                lane: Et,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              z = z.next = be;
            }
            if (j.hasEagerState)
              _ = j.eagerState;
            else {
              var Rt = j.action;
              _ = e(_, Rt);
            }
          } else {
            var Ne = {
              lane: ve,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            z === null ? (M = z = Ne, b = _) : z = z.next = Ne, Gt.lanes = rt(Gt.lanes, ve), Vp(ve);
          }
          j = j.next;
        } while (j !== null && j !== g);
        z === null ? b = _ : z.next = M, Ce(_, i.memoizedState) || kp(), i.memoizedState = _, i.baseState = b, i.baseQueue = z, u.lastRenderedState = _;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var k = ht;
        do {
          var H = k.lane;
          Gt.lanes = rt(Gt.lanes, H), Vp(H), k = k.next;
        } while (k !== ht);
      } else
        f === null && (u.lanes = P);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Bg(e, t, a) {
      var i = bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Ce(p, i.memoizedState) || kp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function yD(e, t, a) {
    }
    function gD(e, t, a) {
    }
    function $g(e, t, a) {
      var i = Gt, u = Vl(), s, f = Mr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Tf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Tf = !0);
      } else {
        if (s = t(), !Tf) {
          var p = t();
          Ce(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Tf = !0);
        }
        var v = xm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        gs(v, Vs) || jE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, em(PE.bind(null, i, y, e), [e]), i.flags |= cn, Tp(ir | Nr, HE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Xh(e, t, a) {
      var i = Gt, u = bi(), s = t();
      if (!Tf) {
        var f = t();
        Ce(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Tf = !0);
      }
      var p = u.memoizedState, v = !Ce(p, s);
      v && (u.memoizedState = s, kp());
      var y = u.queue;
      if (bp(PE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || or !== null && or.memoizedState.tag & ir) {
        i.flags |= cn, Tp(ir | Nr, HE.bind(null, i, y, s, t), void 0, null);
        var g = xm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        gs(g, Vs) || jE(i, t, s);
      }
      return s;
    }
    function jE(e, t, a) {
      e.flags |= ss;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = FE(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function HE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, VE(t) && BE(e);
    }
    function PE(e, t, a) {
      var i = function() {
        VE(t) && BE(e);
      };
      return a(i);
    }
    function VE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ce(a, i);
      } catch {
        return !0;
      }
    }
    function BE(e) {
      var t = Va(e, He);
      t !== null && dr(t, e, He, Jt);
    }
    function Kh(e) {
      var t = Vl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = qw.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Yg(e) {
      return Vg(Hg);
    }
    function Ig(e) {
      return Bg(Hg);
    }
    function Tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = FE(), Gt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Qg(e) {
      var t = Vl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Zh(e) {
      var t = bi();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = Vl(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = Tp(ir | t, a, void 0, s);
    }
    function Jh(e, t, a, i) {
      var u = bi(), s = i === void 0 ? null : i, f = void 0;
      if (ur !== null) {
        var p = ur.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (jg(s, v)) {
            u.memoizedState = Tp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = Tp(ir | t, a, f, s);
    }
    function em(e, t) {
      return (Gt.mode & za) !== Ue ? wp(iu | cn | Tl, Nr, e, t) : wp(cn | Tl, Nr, e, t);
    }
    function bp(e, t) {
      return Jh(cn, Nr, e, t);
    }
    function Wg(e, t) {
      return wp(nt, Pl, e, t);
    }
    function tm(e, t) {
      return Jh(nt, Pl, e, t);
    }
    function Gg(e, t) {
      var a = nt;
      return a |= Kr, (Gt.mode & za) !== Ue && (a |= Zr), wp(a, lr, e, t);
    }
    function nm(e, t) {
      return Jh(nt, lr, e, t);
    }
    function $E(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function qg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = nt;
      return u |= Kr, (Gt.mode & za) !== Ue && (u |= Zr), wp(u, lr, $E.bind(null, t, e), i);
    }
    function rm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Jh(nt, lr, $E.bind(null, t, e), i);
    }
    function Iw(e, t) {
    }
    var am = Iw;
    function Xg(e, t) {
      var a = Vl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function im(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Kg(e, t) {
      var a = Vl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function lm(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Zg(e) {
      var t = Vl();
      return t.memoizedState = e, e;
    }
    function YE(e) {
      var t = bi(), a = ur, i = a.memoizedState;
      return QE(t, i, e);
    }
    function IE(e) {
      var t = bi();
      if (ur === null)
        return t.memoizedState = e, e;
      var a = ur.memoizedState;
      return QE(t, a, e);
    }
    function QE(e, t, a) {
      var i = !ay(Vs);
      if (i) {
        if (!Ce(a, t)) {
          var u = xd();
          Gt.lanes = rt(Gt.lanes, u), Vp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, kp()), e.memoizedState = a, a;
    }
    function Qw(e, t, a) {
      var i = Aa();
      Pn(Sr(i, ar)), e(!0);
      var u = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pn(i), Ep.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && We("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Jg() {
      var e = Kh(!1), t = e[0], a = e[1], i = Qw.bind(null, a), u = Vl();
      return u.memoizedState = i, [t, i];
    }
    function WE() {
      var e = Yg(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    function GE() {
      var e = Ig(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    var qE = !1;
    function Ww() {
      return qE;
    }
    function eS() {
      var e = Vl(), t = xm(), a = t.identifierPrefix, i;
      if (Mr()) {
        var u = uw();
        i = ":" + a + "R" + u;
        var s = Rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Bw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function um() {
      var e = bi(), t = e.memoizedState;
      return t;
    }
    function Gw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (XE(e))
        KE(t, u);
      else {
        var s = vE(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          dr(s, e, i, f), ZE(s, t, i);
        }
      }
      JE(e, i);
    }
    function qw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (XE(e))
        KE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = Zi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Ce(y, v)) {
                _w(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = vE(e, t, u, i);
        if (g !== null) {
          var _ = Ra();
          dr(g, e, i, _), ZE(g, t, i);
        }
      }
      JE(e, i);
    }
    function XE(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function KE(e, t) {
      Cp = qh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ZE(e, t, a) {
      if (bd(a)) {
        var i = t.lanes;
        i = _d(i, e.pendingLanes);
        var u = rt(i, a);
        t.lanes = u, vo(e, u);
      }
    }
    function JE(e, t, a) {
      kl(e, t);
    }
    var om = {
      readContext: Jn,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: Z
    }, eC = null, tC = null, nC = null, rC = null, Bl = null, Zi = null, sm = null;
    {
      var tS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      eC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Yt(), wf(t), Xg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Yt(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Yt(), wf(t), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Yt(), wf(a), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Yt(), wf(t), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Yt(), wf(t), Gg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Yt(), wf(t);
          var a = fe.current;
          fe.current = Bl;
          try {
            return Kg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Yt();
          var i = fe.current;
          fe.current = Bl;
          try {
            return Pg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Yt(), Qg(e);
        },
        useState: function(e) {
          V = "useState", Yt();
          var t = fe.current;
          fe.current = Bl;
          try {
            return Kh(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Yt(), Zg(e);
        },
        useTransition: function() {
          return V = "useTransition", Yt(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Yt(), $g(e, t, a);
        },
        useId: function() {
          return V = "useId", Yt(), eS();
        },
        unstable_isNewReconciler: Z
      }, tC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), Xg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), Gg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = fe.current;
          fe.current = Bl;
          try {
            return Kg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = fe.current;
          fe.current = Bl;
          try {
            return Pg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), Qg(e);
        },
        useState: function(e) {
          V = "useState", re();
          var t = fe.current;
          fe.current = Bl;
          try {
            return Kh(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), Zg(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), $g(e, t, a);
        },
        useId: function() {
          return V = "useId", re(), eS();
        },
        unstable_isNewReconciler: Z
      }, nC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = fe.current;
          fe.current = Zi;
          try {
            return lm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = fe.current;
          fe.current = Zi;
          try {
            return Vg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), Zh();
        },
        useState: function(e) {
          V = "useState", re();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Yg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), YE(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), WE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", re(), um();
        },
        unstable_isNewReconciler: Z
      }, rC = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = fe.current;
          fe.current = sm;
          try {
            return lm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = fe.current;
          fe.current = sm;
          try {
            return Bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), Zh();
        },
        useState: function(e) {
          V = "useState", re();
          var t = fe.current;
          fe.current = sm;
          try {
            return Ig(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), IE(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), GE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", re(), um();
        },
        unstable_isNewReconciler: Z
      }, Bl = {
        readContext: function(e) {
          return tS(), Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), Yt(), Xg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), Yt(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), Yt(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), Yt(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), Yt(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), Yt(), Gg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), Yt();
          var a = fe.current;
          fe.current = Bl;
          try {
            return Kg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), Yt();
          var i = fe.current;
          fe.current = Bl;
          try {
            return Pg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), Yt(), Qg(e);
        },
        useState: function(e) {
          V = "useState", qe(), Yt();
          var t = fe.current;
          fe.current = Bl;
          try {
            return Kh(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), Yt(), Zg(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), Yt(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), Yt(), $g(e, t, a);
        },
        useId: function() {
          return V = "useId", qe(), Yt(), eS();
        },
        unstable_isNewReconciler: Z
      }, Zi = {
        readContext: function(e) {
          return tS(), Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), re(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), re(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), re(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), re(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), re(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), re();
          var a = fe.current;
          fe.current = Zi;
          try {
            return lm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), re();
          var i = fe.current;
          fe.current = Zi;
          try {
            return Vg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), re(), Zh();
        },
        useState: function(e) {
          V = "useState", qe(), re();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Yg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), re(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), re(), YE(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), re(), WE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), re(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", qe(), re(), um();
        },
        unstable_isNewReconciler: Z
      }, sm = {
        readContext: function(e) {
          return tS(), Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), re(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), re(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), re(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), re(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), re(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), re();
          var a = fe.current;
          fe.current = Zi;
          try {
            return lm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), re();
          var i = fe.current;
          fe.current = Zi;
          try {
            return Bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), re(), Zh();
        },
        useState: function(e) {
          V = "useState", qe(), re();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Ig(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), re(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), re(), IE(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), re(), GE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), re(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", qe(), re(), um();
        },
        unstable_isNewReconciler: Z
      };
    }
    var jo = q.unstable_now, aC = 0, cm = -1, xp = -1, fm = -1, nS = !1, dm = !1;
    function iC() {
      return nS;
    }
    function Xw() {
      dm = !0;
    }
    function Kw() {
      nS = !1, dm = !1;
    }
    function Zw() {
      nS = dm, dm = !1;
    }
    function lC() {
      return aC;
    }
    function uC() {
      aC = jo();
    }
    function rS(e) {
      xp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function oC(e) {
      xp = -1;
    }
    function pm(e, t) {
      if (xp >= 0) {
        var a = jo() - xp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), xp = -1;
      }
    }
    function $l(e) {
      if (cm >= 0) {
        var t = jo() - cm;
        cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case dt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function aS(e) {
      if (fm >= 0) {
        var t = jo() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case dt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Yl() {
      cm = jo();
    }
    function iS() {
      fm = jo();
    }
    function lS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Bs(e, t) {
      return {
        value: e,
        source: t,
        stack: Yu(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function Jw(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = Jw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === se)
            return;
          console.error(i);
        }
        var p = u ? Ge(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ge(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var eb = typeof WeakMap == "function" ? WeakMap : Map;
    function sC(e, t, a) {
      var i = Lu(Jt, a);
      i.tag = og, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Qx(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Lu(Jt, a);
      i.tag = og;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          E1(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        E1(e), oS(e, t), typeof u != "function" && Yx(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, He) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ge(e) || "Unknown"));
      }), i;
    }
    function cC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new eb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Wx.bind(null, e, t, a);
        rr && Bp(e, a), t.then(s, s);
      }
    }
    function tb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nb(e, t) {
      var a = e.tag;
      if ((e.mode & ft) === Ue && (a === me || a === Xe || a === Ve)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function fC(e) {
      var t = e;
      do {
        if (t.tag === De && Pw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function dC(e, t, a, i, u) {
      if ((e.mode & ft) === Ue) {
        if (e === t)
          e.flags |= Gn;
        else {
          if (e.flags |= $e, a.flags |= cs, a.flags &= ~(cc | va), a.tag === se) {
            var s = a.alternate;
            if (s === null)
              a.tag = bn;
            else {
              var f = Lu(Jt, He);
              f.tag = Fh, zo(a, f, He);
            }
          }
          a.lanes = rt(a.lanes, He);
        }
        return e;
      }
      return e.flags |= Gn, e.lanes = u, e;
    }
    function rb(e, t, a, i, u) {
      if (a.flags |= va, rr && Bp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nb(a), Mr() && a.mode & ft && nE();
        var f = fC(t);
        if (f !== null) {
          f.flags &= ~Rn, dC(f, t, a, e, u), f.mode & ft && cC(e, s, u), tb(f, e, s);
          return;
        } else {
          if (!fo(u)) {
            cC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Mr() && a.mode & ft) {
        nE();
        var v = fC(t);
        if (v !== null) {
          (v.flags & Gn) === Le && (v.flags |= Rn), dC(v, t, a, e, u), tg(Bs(i, a));
          return;
        }
      }
      i = Bs(i, a), Ax(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= Gn;
            var _ = Hn(u);
            y.lanes = rt(y.lanes, _);
            var b = sC(y, g, _);
            fg(y, b);
            return;
          }
          case se:
            var M = i, z = y.type, j = y.stateNode;
            if ((y.flags & $e) === Le && (typeof z.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !f1(j))) {
              y.flags |= Gn;
              var ve = Hn(u);
              y.lanes = rt(y.lanes, ve);
              var Ne = sS(y, M, ve);
              fg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ab() {
      return null;
    }
    var _p = U.ReactCurrentOwner, Ji = !1, cS, Dp, fS, dS, pS, $s, vS, vm;
    cS = {}, Dp = {}, fS = {}, dS = {}, pS = {}, $s = !1, vS = {}, vm = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = OE(t, null, a, i) : t.child = Sf(t, e.child, a, i);
    }
    function ib(e, t, a, i) {
      t.child = Sf(t, e.child, null, i), t.child = Sf(t, null, a, i);
    }
    function pC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wi(
          s,
          i,
          "prop",
          _t(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      gf(t, u), Dl(t);
      {
        if (_p.current = t, Gr(!0), v = bf(e, t, f, i, p, u), y = xf(), t.mode & yn) {
          jn(!0);
          try {
            v = bf(e, t, f, i, p, u), y = xf();
          } finally {
            jn(!1);
          }
        }
        Gr(!1);
      }
      return lu(), e !== null && !Ji ? (UE(e, t, u), Mu(e, t, u)) : (Mr() && y && qy(t), t.flags |= Cl, Ea(e, t, v, u), t.child);
    }
    function vC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (c_(s) && a.compare === null && a.defaultProps === void 0) {
          var f = s;
          return f = zf(s), t.tag = Ve, t.type = f, yS(t, s), hC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Wi(
            p,
            i,
            "prop",
            _t(s)
          );
        }
        var v = JS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Wi(
          g,
          i,
          "prop",
          _t(y)
        );
      }
      var _ = e.child, b = TS(e, u);
      if (!b) {
        var M = _.memoizedProps, z = a.compare;
        if (z = z !== null ? z : ke, z(M, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= Cl;
      var j = Gs(_, i);
      return j.ref = t.ref, j.return = t, t.child = j, j;
    }
    function hC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Me) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Wi(
            y,
            i,
            "prop",
            _t(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ke(g, i) && e.ref === t.ref && t.type === e.type)
          if (Ji = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & cs) !== Le && (Ji = !0);
          else
            return t.lanes = e.lanes, Mu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function mC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || T)
        if ((t.mode & ft) === Ue) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, _m(t, a);
        } else if (ra(a, na)) {
          var _ = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var b = s !== null ? s.baseLanes : a;
          _m(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = rt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, _m(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = rt(s.baseLanes, a), t.memoizedState = null) : M = a, _m(t, M);
      }
      return Ea(e, t, u, a), t.child;
    }
    function lb(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function ub(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function ob(e, t, a) {
      {
        t.flags |= nt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function yC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= cd);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wi(
          s,
          i,
          "prop",
          _t(a)
        );
      }
      var f;
      {
        var p = df(t, a, !0);
        f = pf(t, p);
      }
      var v, y;
      gf(t, u), Dl(t);
      {
        if (_p.current = t, Gr(!0), v = bf(e, t, a, i, f, u), y = xf(), t.mode & yn) {
          jn(!0);
          try {
            v = bf(e, t, a, i, f, u), y = xf();
          } finally {
            jn(!1);
          }
        }
        Gr(!1);
      }
      return lu(), e !== null && !Ji ? (UE(e, t, u), Mu(e, t, u)) : (Mr() && y && qy(t), t.flags |= Cl, Ea(e, t, v, u), t.child);
    }
    function gC(e, t, a, i, u) {
      {
        switch (b_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= $e, t.flags |= Gn;
            var y = new Error("Simulated error coming from DevTools"), g = Hn(u);
            t.lanes = rt(t.lanes, g);
            var _ = sS(t, Bs(y, t), g);
            fg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && Wi(
            b,
            i,
            "prop",
            _t(a)
          );
        }
      }
      var M;
      Hl(a) ? (M = !0, xh(t)) : M = !1, gf(t, u);
      var z = t.stateNode, j;
      z === null ? (mm(e, t), bE(t, a, i), Tg(t, a, i, u), j = !0) : e === null ? j = zw(t, a, i, u) : j = Uw(e, t, a, i, u);
      var ve = mS(e, t, a, j, M, u);
      {
        var Ne = t.stateNode;
        j && Ne.props !== i && ($s || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ge(t) || "a component"), $s = !0);
      }
      return ve;
    }
    function mS(e, t, a, i, u, s) {
      yC(e, t);
      var f = (t.flags & $e) !== Le;
      if (!i && !f)
        return u && Z0(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      _p.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, oC();
      else {
        Dl(t);
        {
          if (Gr(!0), v = p.render(), t.mode & yn) {
            jn(!0);
            try {
              p.render();
            } finally {
              jn(!1);
            }
          }
          Gr(!1);
        }
        lu();
      }
      return t.flags |= Cl, e !== null && f ? ib(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && Z0(t, a, !0), t.child;
    }
    function SC(e) {
      var t = e.stateNode;
      t.pendingContext ? X0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && X0(e, t.context, !1), kg(e, t.containerInfo);
    }
    function sb(e, t, a) {
      if (SC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      yE(e, t), Vh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rn) {
          var g = Bs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return EC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Bs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return EC(e, t, p, a, _);
        } else {
          pw(t);
          var b = OE(t, null, p, a);
          t.child = b;
          for (var M = b; M; )
            M.flags = M.flags & ~an | La, M = M.sibling;
        }
      } else {
        if (mf(), p === s)
          return Mu(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function EC(e, t, a, i, u) {
      return mf(), tg(u), t.flags |= Rn, Ea(e, t, a, i), t.child;
    }
    function cb(e, t, a) {
      ME(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= $t), yC(e, t), Ea(e, t, f, a), t.child;
    }
    function fb(e, t) {
      return e === null && eg(t), null;
    }
    function db(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = f_(v), g = Xi(v, u), _;
      switch (y) {
        case me:
          return yS(t, v), t.type = v = zf(v), _ = hS(null, t, v, g, i), _;
        case se:
          return t.type = v = WS(v), _ = gC(null, t, v, g, i), _;
        case Xe:
          return t.type = v = GS(v), _ = pC(null, t, v, g, i), _;
        case ot: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Wi(
              b,
              g,
              "prop",
              _t(v)
            );
          }
          return _ = vC(
            null,
            t,
            v,
            Xi(v.type, g),
            i
          ), _;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Me && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function pb(e, t, a, i, u) {
      mm(e, t), t.tag = se;
      var s;
      return Hl(a) ? (s = !0, xh(t)) : s = !1, gf(t, u), bE(t, a, i), Tg(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function vb(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s;
      {
        var f = df(t, a, !1);
        s = pf(t, f);
      }
      gf(t, i);
      var p, v;
      Dl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = _t(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & yn && qi.recordLegacyContextWarning(t, null), Gr(!0), _p.current = t, p = bf(null, t, a, u, s, i), v = xf(), Gr(!1);
      }
      if (lu(), t.flags |= Cl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = _t(a) || "Unknown";
        Dp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Dp[g] = !0);
      }
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        {
          var _ = _t(a) || "Unknown";
          Dp[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Dp[_] = !0);
        }
        t.tag = se, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Hl(a) ? (b = !0, xh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, cg(t), wE(t, p), Tg(t, a, u, i), mS(null, t, a, !0, b, i);
      } else {
        if (t.tag = me, t.mode & yn) {
          jn(!0);
          try {
            p = bf(null, t, a, u, s, i), v = xf();
          } finally {
            jn(!1);
          }
        }
        return Mr() && v && qy(t), Ea(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = _t(t) || "Unknown";
          dS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), dS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = _t(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support contextType.", p), fS[p] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Et
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: ab(),
        transitions: null
      };
    }
    function hb(e, t) {
      var a = null;
      return {
        baseLanes: rt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Mg(e, Sp);
    }
    function yb(e, t) {
      return po(e.childLanes, t);
    }
    function CC(e, t, a) {
      var i = t.pendingProps;
      x_(t) && (t.flags |= $e);
      var u = Ki.current, s = !1, f = (t.flags & $e) !== Le;
      if (f || mb(u, e) ? (s = !0, t.flags &= ~$e) : (e === null || e.memoizedState !== null) && (u = Hw(u, zE)), u = Cf(u), Ao(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Rb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = gb(t, y, g, a), b = t.child;
          return b.memoizedState = SS(a), t.memoizedState = gS, _;
        } else
          return ES(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var z = M.dehydrated;
          if (z !== null)
            return Tb(e, t, f, i, z, M, a);
        }
        if (s) {
          var j = i.fallback, ve = i.children, Ne = Eb(e, t, ve, j, a), be = t.child, Rt = e.child.memoizedState;
          return be.memoizedState = Rt === null ? SS(a) : hb(Rt, a), be.childLanes = yb(e, a), t.memoizedState = gS, Ne;
        } else {
          var ht = i.children, k = Sb(e, t, ht, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function gb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ft) === Ue && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & Fe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = CS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return R1(e, t, P, null);
    }
    function RC(e, t) {
      return Gs(e, t);
    }
    function Sb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = RC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ft) === Ue && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ut) : p.push(s);
      }
      return t.child = f, f;
    }
    function Eb(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if ((s & ft) === Ue && t.child !== f) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & Fe && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = RC(f, v), y.subtreeFlags = f.subtreeFlags & nr;
      var _;
      return p !== null ? _ = Gs(p, i) : (_ = Yo(i, s, u, null), _.flags |= an), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function hm(e, t, a, i) {
      i !== null && tg(i), Sf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= an, t.memoizedState = null, f;
    }
    function Cb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Yo(i, s, u, null);
      return v.flags |= an, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ft) !== Ue && Sf(t, e.child, null, u), v;
    }
    function Rb(e, t, a) {
      return (e.mode & ft) === Ue ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = He) : Hy(t) ? e.lanes = su : e.lanes = na, null;
    }
    function Tb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return hm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= $e, null;
          var H = i.children, O = i.fallback, G = Cb(e, t, H, O, f), he = t.child;
          return he.memoizedState = SS(f), t.memoizedState = gS, G;
        }
      else {
        if (fw(), (t.mode & ft) === Ue)
          return hm(
            e,
            t,
            f,
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = DT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = uS(_, p, y);
          return hm(e, t, f, b);
        }
        var M = ra(f, e.childLanes);
        if (Ji || M) {
          var z = xm();
          if (z !== null) {
            var j = ly(z, f);
            if (j !== Et && j !== s.retryLane) {
              s.retryLane = j;
              var ve = Jt;
              Va(e, j), dr(z, e, j, ve);
            }
          }
          BS();
          var Ne = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return hm(e, t, f, Ne);
        } else if (Y0(u)) {
          t.flags |= $e, t.child = e.child;
          var be = Gx.bind(null, e);
          return kT(u, be), null;
        } else {
          vw(t, u, s.treeContext);
          var Rt = i.children, ht = ES(t, Rt);
          return ht.flags |= La, ht;
        }
      }
    }
    function TC(e, t, a) {
      e.lanes = rt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = rt(i.lanes, t)), lg(e.return, t, a);
    }
    function wb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var u = i.memoizedState;
          u !== null && TC(i, a, e);
        } else if (i.tag === Ot)
          TC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function bb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Gh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function xb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function _b(e, t) {
      e !== void 0 && !vm[e] && (e !== "collapsed" && e !== "hidden" ? (vm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (vm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function wC(e, t) {
      {
        var a = yt(e), i = !a && typeof Ga(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Db(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (yt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!wC(e[a], a))
              return;
        } else {
          var i = Ga(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!wC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function bC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      xb(u), _b(s, u), Db(f, u), Ea(e, t, f, a);
      var p = Ki.current, v = Mg(p, Sp);
      if (v)
        p = Ng(p, Sp), t.flags |= $e;
      else {
        var y = e !== null && (e.flags & $e) !== Le;
        y && wb(t, t.child, a), p = Cf(p);
      }
      if (Ao(t, p), (t.mode & ft) === Ue)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = bb(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), RS(
              t,
              !1,
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var z = M.alternate;
              if (z !== null && Gh(z) === null) {
                t.child = M;
                break;
              }
              var j = M.sibling;
              M.sibling = b, b = M, M = j;
            }
            RS(
              t,
              !0,
              b,
              null,
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              null,
              null,
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function kb(e, t, a) {
      kg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Sf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var xC = !1;
    function Ob(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || xC || (xC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Wi(v, s, "prop", "Context.Provider");
      }
      if (pE(t, u, p), f !== null) {
        var y = f.value;
        if (Ce(y, p)) {
          if (f.children === s.children && !wh())
            return Mu(e, t, a);
        } else
          ww(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var _C = !1;
    function Lb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (_C || (_C = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), gf(t, a);
      var f = Jn(i);
      Dl(t);
      var p;
      return _p.current = t, Gr(!0), p = s(f), Gr(!1), lu(), t.flags |= Cl, Ea(e, t, p, a), t.child;
    }
    function kp() {
      Ji = !0;
    }
    function mm(e, t) {
      (t.mode & ft) === Ue && e !== null && (e.alternate = null, t.alternate = null, t.flags |= an);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), oC(), Vp(t.lanes), ra(a, t.childLanes) ? (Aw(e, t), t.child) : null;
    }
    function Mb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ut) : s.push(e), a.flags |= an, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function Nb(e, t, a) {
      switch (t.tag) {
        case J:
          SC(t), t.stateNode, mf();
          break;
        case ie:
          ME(t);
          break;
        case se: {
          var i = t.type;
          Hl(i) && xh(t);
          break;
        }
        case le:
          kg(t, t.stateNode.containerInfo);
          break;
        case ut: {
          var u = t.memoizedProps.value, s = t.type._context;
          pE(t, s, u);
          break;
        }
        case dt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= nt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Cf(Ki.current)), t.flags |= $e, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return CC(e, t, a);
            Ao(t, Cf(Ki.current));
            var _ = Mu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Ao(t, Cf(Ki.current));
          break;
        }
        case Ot: {
          var b = (e.flags & $e) !== Le, M = ra(a, t.childLanes);
          if (b) {
            if (M)
              return bC(e, t, a);
            t.flags |= $e;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), Ao(t, Ki.current), M)
            break;
          return null;
        }
        case je:
        case et:
          return t.lanes = P, mC(e, t, a);
      }
      return Mu(e, t, a);
    }
    function DC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mb(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || wh() || t.type !== e.type)
          Ji = !0;
        else {
          var s = TS(e, a);
          if (!s && (t.flags & $e) === Le)
            return Ji = !1, Nb(e, t, a);
          (e.flags & cs) !== Le ? Ji = !0 : Ji = !1;
        }
      } else if (Ji = !1, Mr() && iw(t)) {
        var f = t.index, p = lw();
        tE(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Je:
          return vb(e, t, t.type, a);
        case rn: {
          var v = t.elementType;
          return db(e, t, v, a);
        }
        case me: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : Xi(y, g);
          return hS(e, t, y, _, a);
        }
        case se: {
          var b = t.type, M = t.pendingProps, z = t.elementType === b ? M : Xi(b, M);
          return gC(e, t, b, z, a);
        }
        case J:
          return sb(e, t, a);
        case ie:
          return cb(e, t, a);
        case de:
          return fb(e, t);
        case De:
          return CC(e, t, a);
        case le:
          return kb(e, t, a);
        case Xe: {
          var j = t.type, ve = t.pendingProps, Ne = t.elementType === j ? ve : Xi(j, ve);
          return pC(e, t, j, Ne, a);
        }
        case Oe:
          return lb(e, t, a);
        case ge:
          return ub(e, t, a);
        case dt:
          return ob(e, t, a);
        case ut:
          return Ob(e, t, a);
        case wt:
          return Lb(e, t, a);
        case ot: {
          var be = t.type, Rt = t.pendingProps, ht = Xi(be, Rt);
          if (t.type !== t.elementType) {
            var k = be.propTypes;
            k && Wi(
              k,
              ht,
              "prop",
              _t(be)
            );
          }
          return ht = Xi(be.type, ht), vC(e, t, be, ht, a);
        }
        case Ve:
          return hC(e, t, t.type, t.pendingProps, a);
        case bn: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : Xi(H, O);
          return pb(e, t, H, G, a);
        }
        case Ot:
          return bC(e, t, a);
        case En:
          break;
        case je:
          return mC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _f(e) {
      e.flags |= nt;
    }
    function kC(e) {
      e.flags |= Xr, e.flags |= cd;
    }
    var OC, wS, LC, MC;
    OC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === de)
          nT(e, u.stateNode);
        else if (u.tag !== le) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, wS = function(e, t) {
    }, LC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Og(), v = aT(f, a, s, i, u, p);
        t.updateQueue = v, v && _f(t);
      }
    }, MC = function(e, t, a, i) {
      a !== i && _f(t);
    };
    function Op(e, t) {
      if (!Mr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function zr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = Le;
      if (t) {
        if ((e.mode & Fe) !== Ue) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = rt(a, rt(y.lanes, y.childLanes)), i |= y.subtreeFlags & nr, i |= y.flags & nr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = rt(a, rt(g.lanes, g.childLanes)), i |= g.subtreeFlags & nr, i |= g.flags & nr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Fe) !== Ue) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = rt(a, rt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = rt(a, rt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zb(e, t, a) {
      if (Sw() && (t.mode & ft) !== Ue && (t.flags & $e) === Le)
        return oE(t), mf(), t.flags |= Rn | va | Gn, !1;
      var i = Lh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yw(t), zr(t), (t.mode & Fe) !== Ue) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (mf(), (t.flags & $e) === Le && (t.memoizedState = null), t.flags |= nt, zr(t), (t.mode & Fe) !== Ue) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return sE(), !0;
    }
    function NC(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case Je:
        case rn:
        case Ve:
        case me:
        case Xe:
        case Oe:
        case ge:
        case dt:
        case wt:
        case ot:
          return zr(t), null;
        case se: {
          var u = t.type;
          return Hl(u) && bh(t), zr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Ef(t), Qy(t), Ug(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Lh(t);
            if (f)
              _f(t);
            else if (e !== null) {
              var p = e.memoizedState;
              (!p.isDehydrated || (t.flags & Rn) !== Le) && (t.flags |= Oa, sE());
            }
          }
          return wS(e, t), zr(t), null;
        }
        case ie: {
          Lg(t);
          var v = LE(), y = t.type;
          if (e !== null && t.stateNode != null)
            LC(e, t, y, i, v), e.ref !== t.ref && kC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var g = Og(), _ = Lh(t);
            if (_)
              hw(t, v, g) && _f(t);
            else {
              var b = tT(y, i, v, g, t);
              OC(b, t, !1, !1), t.stateNode = b, rT(b, y, i, v) && _f(t);
            }
            t.ref !== null && kC(t);
          }
          return zr(t), null;
        }
        case de: {
          var M = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            MC(e, t, z, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = LE(), ve = Og(), Ne = Lh(t);
            Ne ? mw(t) && _f(t) : t.stateNode = iT(M, j, ve, t);
          }
          return zr(t), null;
        }
        case De: {
          Rf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Rt = zb(e, t, be);
            if (!Rt)
              return t.flags & Gn ? t : null;
          }
          if ((t.flags & $e) !== Le)
            return t.lanes = a, (t.mode & Fe) !== Ue && lS(t), t;
          var ht = be !== null, k = e !== null && e.memoizedState !== null;
          if (ht !== k && ht) {
            var H = t.child;
            if (H.flags |= Rl, (t.mode & ft) !== Ue) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              O || Mg(Ki.current, zE) ? Ux() : BS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= nt), zr(t), (t.mode & Fe) !== Ue && ht) {
            var he = t.child;
            he !== null && (t.treeBaseDuration -= he.treeBaseDuration);
          }
          return null;
        }
        case le:
          return Ef(t), wS(e, t), e === null && ZT(t.stateNode.containerInfo), zr(t), null;
        case ut:
          var oe = t.type._context;
          return ig(oe, t), zr(t), null;
        case bn: {
          var Be = t.type;
          return Hl(Be) && bh(t), zr(t), null;
        }
        case Ot: {
          Rf(t);
          var Ke = t.memoizedState;
          if (Ke === null)
            return zr(t), null;
          var qt = (t.flags & $e) !== Le, Mt = Ke.rendering;
          if (Mt === null)
            if (qt)
              Op(Ke, !1);
            else {
              var $n = Fx() && (e === null || (e.flags & $e) === Le);
              if (!$n)
                for (var Nt = t.child; Nt !== null; ) {
                  var Un = Gh(Nt);
                  if (Un !== null) {
                    qt = !0, t.flags |= $e, Op(Ke, !1);
                    var ua = Un.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= nt), t.subtreeFlags = Le, Fw(t, a), Ao(t, Ng(Ki.current, Sp)), t.child;
                  }
                  Nt = Nt.sibling;
                }
              Ke.tail !== null && mn() > e1() && (t.flags |= $e, qt = !0, Op(Ke, !1), t.lanes = Td);
            }
          else {
            if (!qt) {
              var Hr = Gh(Mt);
              if (Hr !== null) {
                t.flags |= $e, qt = !0;
                var ii = Hr.updateQueue;
                if (ii !== null && (t.updateQueue = ii, t.flags |= nt), Op(Ke, !0), Ke.tail === null && Ke.tailMode === "hidden" && !Mt.alternate && !Mr())
                  return zr(t), null;
              } else
                mn() * 2 - Ke.renderingStartTime > e1() && a !== na && (t.flags |= $e, qt = !0, Op(Ke, !1), t.lanes = Td);
            }
            if (Ke.isBackwards)
              Mt.sibling = t.child, t.child = Mt;
            else {
              var Ta = Ke.last;
              Ta !== null ? Ta.sibling = Mt : t.child = Mt, Ke.last = Mt;
            }
          }
          if (Ke.tail !== null) {
            var wa = Ke.tail;
            Ke.rendering = wa, Ke.tail = wa.sibling, Ke.renderingStartTime = mn(), wa.sibling = null;
            var oa = Ki.current;
            return qt ? oa = Ng(oa, Sp) : oa = Cf(oa), Ao(t, oa), wa;
          }
          return zr(t), null;
        }
        case En:
          break;
        case je:
        case et: {
          VS(t);
          var Fu = t.memoizedState, Uf = Fu !== null;
          if (e !== null) {
            var Qp = e.memoizedState, Wl = Qp !== null;
            Wl !== Uf && !T && (t.flags |= Rl);
          }
          return !Uf || (t.mode & ft) === Ue ? zr(t) : ra(Ql, na) && (zr(t), t.subtreeFlags & (an | nt) && (t.flags |= Rl)), null;
        }
        case Ft:
          return null;
        case bt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ub(e, t, a) {
      switch (Xy(t), t.tag) {
        case se: {
          var i = t.type;
          Hl(i) && bh(t);
          var u = t.flags;
          return u & Gn ? (t.flags = u & ~Gn | $e, (t.mode & Fe) !== Ue && lS(t), t) : null;
        }
        case J: {
          t.stateNode, Ef(t), Qy(t), Ug();
          var s = t.flags;
          return (s & Gn) !== Le && (s & $e) === Le ? (t.flags = s & ~Gn | $e, t) : null;
        }
        case ie:
          return Lg(t), null;
        case De: {
          Rf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            mf();
          }
          var p = t.flags;
          return p & Gn ? (t.flags = p & ~Gn | $e, (t.mode & Fe) !== Ue && lS(t), t) : null;
        }
        case Ot:
          return Rf(t), null;
        case le:
          return Ef(t), null;
        case ut:
          var v = t.type._context;
          return ig(v, t), null;
        case je:
        case et:
          return VS(t), null;
        case Ft:
          return null;
        default:
          return null;
      }
    }
    function zC(e, t, a) {
      switch (Xy(t), t.tag) {
        case se: {
          var i = t.type.childContextTypes;
          i != null && bh(t);
          break;
        }
        case J: {
          t.stateNode, Ef(t), Qy(t), Ug();
          break;
        }
        case ie: {
          Lg(t);
          break;
        }
        case le:
          Ef(t);
          break;
        case De:
          Rf(t);
          break;
        case Ot:
          Rf(t);
          break;
        case ut:
          var u = t.type._context;
          ig(u, t);
          break;
        case je:
        case et:
          VS(t);
          break;
      }
    }
    var UC = null;
    UC = /* @__PURE__ */ new Set();
    var ym = !1, Ur = !1, Ab = typeof WeakSet == "function" ? WeakSet : Set, Re = null, Df = null, kf = null;
    function Fb(e) {
      au(null, function() {
        throw e;
      }), od();
    }
    var jb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Fe)
        try {
          Yl(), t.componentWillUnmount();
        } finally {
          $l(e);
        }
      else
        t.componentWillUnmount();
    };
    function AC(e, t) {
      try {
        Ho(lr, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function bS(e, t, a) {
      try {
        jb(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function Hb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function FC(e, t) {
      try {
        HC(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function Of(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (at && pt && e.mode & Fe)
              try {
                Yl(), i = a(null);
              } finally {
                $l(e);
              }
            else
              i = a(null);
          } catch (u) {
            sn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          a.current = null;
    }
    function gm(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var jC = !1;
    function Pb(e, t) {
      JR(e.containerInfo), Re = t, Vb();
      var a = jC;
      return jC = !1, a;
    }
    function Vb() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        (e.subtreeFlags & ao) !== Le && t !== null ? (t.return = e, Re = t) : Bb();
      }
    }
    function Bb() {
      for (; Re !== null; ) {
        var e = Re;
        Bt(e);
        try {
          $b(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function $b(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Oa) !== Le) {
        switch (Bt(e), e.tag) {
          case me:
          case Xe:
          case Ve:
            break;
          case se: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !$s && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Xi(e.type, i), u);
              {
                var p = UC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ge(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              wT(v.containerInfo);
            }
            break;
          }
          case ie:
          case de:
          case le:
          case bn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function el(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== Ba ? gc(t) : (e & lr) !== Ba && Sc(t), (e & Pl) !== Ba && $p(!0), gm(t, a, p), (e & Pl) !== Ba && $p(!1), (e & Nr) !== Ba ? Ov() : (e & lr) !== Ba && io());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Nr) !== Ba ? kv(t) : (e & lr) !== Ba && Lv(t);
            var f = s.create;
            (e & Pl) !== Ba && $p(!0), s.destroy = f(), (e & Pl) !== Ba && $p(!1), (e & Nr) !== Ba ? Ed() : (e & lr) !== Ba && Mv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & lr) !== Le ? v = "useLayoutEffect" : (s.tag & Pl) !== Le ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Yb(e, t) {
      if ((t.flags & nt) !== Le)
        switch (t.tag) {
          case dt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = lC(), p = t.alternate === null ? "mount" : "update";
            iC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case J:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case dt:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Ib(e, t, a, i) {
      if ((a.flags & yr) !== Le)
        switch (a.tag) {
          case me:
          case Xe:
          case Ve: {
            if (!Ur)
              if (a.mode & Fe)
                try {
                  Yl(), Ho(lr | ir, a);
                } finally {
                  $l(a);
                }
              else
                Ho(lr | ir, a);
            break;
          }
          case se: {
            var u = a.stateNode;
            if (a.flags & nt && !Ur)
              if (t === null)
                if (a.type === a.elementType && !$s && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & Fe)
                  try {
                    Yl(), u.componentDidMount();
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Xi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !$s && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & Fe)
                  try {
                    Yl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !$s && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), SE(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    y = a.child.stateNode;
                    break;
                  case se:
                    y = a.child.stateNode;
                    break;
                }
              SE(a, v, y);
            }
            break;
          }
          case ie: {
            var g = a.stateNode;
            if (t === null && a.flags & nt) {
              var _ = a.type, b = a.memoizedProps;
              cT(g, _, b);
            }
            break;
          }
          case de:
            break;
          case le:
            break;
          case dt: {
            {
              var M = a.memoizedProps, z = M.onCommit, j = M.onRender, ve = a.stateNode.effectDuration, Ne = lC(), be = t === null ? "mount" : "update";
              iC() && (be = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof z == "function" && z(a.memoizedProps.id, be, ve, Ne), Bx(a);
                var Rt = a.return;
                e:
                  for (; Rt !== null; ) {
                    switch (Rt.tag) {
                      case J:
                        var ht = Rt.stateNode;
                        ht.effectDuration += ve;
                        break e;
                      case dt:
                        var k = Rt.stateNode;
                        k.effectDuration += ve;
                        break e;
                    }
                    Rt = Rt.return;
                  }
              }
            }
            break;
          }
          case De: {
            Jb(e, a);
            break;
          }
          case Ot:
          case bn:
          case En:
          case je:
          case et:
          case bt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ur || a.flags & Xr && HC(a);
    }
    function Qb(e) {
      switch (e.tag) {
        case me:
        case Xe:
        case Ve: {
          if (e.mode & Fe)
            try {
              Yl(), AC(e, e.return);
            } finally {
              $l(e);
            }
          else
            AC(e, e.return);
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hb(e, e.return, t), FC(e, e.return);
          break;
        }
        case ie: {
          FC(e, e.return);
          break;
        }
      }
    }
    function Wb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? ET(u) : RT(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === de) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? CT(s) : TT(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === je || i.tag === et) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function HC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Fe)
            try {
              Yl(), u = t(i);
            } finally {
              $l(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ge(e)), t.current = i;
      }
    }
    function Gb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function PC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, PC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && tw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function qb(e) {
      for (var t = e.return; t !== null; ) {
        if (VC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function VC(e) {
      return e.tag === ie || e.tag === J || e.tag === le;
    }
    function BC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || VC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== de && t.tag !== Wt; ) {
            if (t.flags & an || t.child === null || t.tag === le)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & an))
            return t.stateNode;
        }
    }
    function Xb(e) {
      var t = qb(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & $t && ($0(a), t.flags &= ~$t);
          var i = BC(e);
          _S(e, i, a);
          break;
        }
        case J:
        case le: {
          var u = t.stateNode.containerInfo, s = BC(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === ie || i === de;
      if (u) {
        var s = e.stateNode;
        t ? mT(a, s, t) : vT(a, s);
      } else if (i !== le) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === ie || i === de;
      if (u) {
        var s = e.stateNode;
        t ? hT(a, s, t) : pT(a, s);
      } else if (i !== le) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Ar = null, tl = !1;
    function Kb(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ie: {
                Ar = i.stateNode, tl = !1;
                break e;
              }
              case J: {
                Ar = i.stateNode.containerInfo, tl = !0;
                break e;
              }
              case le: {
                Ar = i.stateNode.containerInfo, tl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ar === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        $C(e, t, a), Ar = null, tl = !1;
      }
      Gb(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        $C(e, t, i), i = i.sibling;
    }
    function $C(e, t, a) {
      switch (gd(a), a.tag) {
        case ie:
          Ur || Of(a, t);
        case de: {
          {
            var i = Ar, u = tl;
            Ar = null, Po(e, t, a), Ar = i, tl = u, Ar !== null && (tl ? gT(Ar, a.stateNode) : yT(Ar, a.stateNode));
          }
          return;
        }
        case Wt: {
          Ar !== null && (tl ? ST(Ar, a.stateNode) : jy(Ar, a.stateNode));
          return;
        }
        case le: {
          {
            var s = Ar, f = tl;
            Ar = a.stateNode.containerInfo, tl = !0, Po(e, t, a), Ar = s, tl = f;
          }
          return;
        }
        case me:
        case Xe:
        case ot:
        case Ve: {
          if (!Ur) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, b = _.destroy, M = _.tag;
                  b !== void 0 && ((M & Pl) !== Ba ? gm(a, t, b) : (M & lr) !== Ba && (Sc(a), a.mode & Fe ? (Yl(), gm(a, t, b), $l(a)) : gm(a, t, b), io())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case se: {
          if (!Ur) {
            Of(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && bS(a, t, z);
          }
          Po(e, t, a);
          return;
        }
        case En: {
          Po(e, t, a);
          return;
        }
        case je: {
          if (a.mode & ft) {
            var j = Ur;
            Ur = j || a.memoizedState !== null, Po(e, t, a), Ur = j;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function Zb(e) {
      e.memoizedState;
    }
    function Jb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && jT(s);
          }
        }
      }
    }
    function YC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ab()), t.forEach(function(i) {
          var u = qx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), rr)
              if (Df !== null && kf !== null)
                Bp(kf, Df);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ex(e, t, a) {
      Df = a, kf = e, Bt(t), IC(t, e), Bt(t), Df = null, kf = null;
    }
    function nl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Kb(e, t, s);
          } catch (v) {
            sn(s, t, v);
          }
        }
      var f = Xs();
      if (t.subtreeFlags & Jr)
        for (var p = t.child; p !== null; )
          Bt(p), IC(p, e), p = p.sibling;
      Bt(f);
    }
    function IC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case me:
        case Xe:
        case ot:
        case Ve: {
          if (nl(t, e), Il(e), u & nt) {
            try {
              el(Pl | ir, e, e.return), Ho(Pl | ir, e);
            } catch (Be) {
              sn(e, e.return, Be);
            }
            if (e.mode & Fe) {
              try {
                Yl(), el(lr | ir, e, e.return);
              } catch (Be) {
                sn(e, e.return, Be);
              }
              $l(e);
            } else
              try {
                el(lr | ir, e, e.return);
              } catch (Be) {
                sn(e, e.return, Be);
              }
          }
          return;
        }
        case se: {
          nl(t, e), Il(e), u & Xr && i !== null && Of(i, i.return);
          return;
        }
        case ie: {
          nl(t, e), Il(e), u & Xr && i !== null && Of(i, i.return);
          {
            if (e.flags & $t) {
              var s = e.stateNode;
              try {
                $0(s);
              } catch (Be) {
                sn(e, e.return, Be);
              }
            }
            if (u & nt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    fT(f, g, y, v, p, e);
                  } catch (Be) {
                    sn(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case de: {
          if (nl(t, e), Il(e), u & nt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, b = e.memoizedProps, M = i !== null ? i.memoizedProps : b;
            try {
              dT(_, M, b);
            } catch (Be) {
              sn(e, e.return, Be);
            }
          }
          return;
        }
        case J: {
          if (nl(t, e), Il(e), u & nt && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                FT(t.containerInfo);
              } catch (Be) {
                sn(e, e.return, Be);
              }
          }
          return;
        }
        case le: {
          nl(t, e), Il(e);
          return;
        }
        case De: {
          nl(t, e), Il(e);
          var j = e.child;
          if (j.flags & Rl) {
            var ve = j.stateNode, Ne = j.memoizedState, be = Ne !== null;
            if (ve.isHidden = be, be) {
              var Rt = j.alternate !== null && j.alternate.memoizedState !== null;
              Rt || zx();
            }
          }
          if (u & nt) {
            try {
              Zb(e);
            } catch (Be) {
              sn(e, e.return, Be);
            }
            YC(e);
          }
          return;
        }
        case je: {
          var ht = i !== null && i.memoizedState !== null;
          if (e.mode & ft) {
            var k = Ur;
            Ur = k || ht, nl(t, e), Ur = k;
          } else
            nl(t, e);
          if (Il(e), u & Rl) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, he = e;
            if (H.isHidden = G, G && !ht && (he.mode & ft) !== Ue) {
              Re = he;
              for (var oe = he.child; oe !== null; )
                Re = oe, nx(oe), oe = oe.sibling;
            }
            Wb(he, G);
          }
          return;
        }
        case Ot: {
          nl(t, e), Il(e), u & nt && YC(e);
          return;
        }
        case En:
          return;
        default: {
          nl(t, e), Il(e);
          return;
        }
      }
    }
    function Il(e) {
      var t = e.flags;
      if (t & an) {
        try {
          Xb(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= ~an;
      }
      t & La && (e.flags &= ~La);
    }
    function tx(e, t, a) {
      Df = a, kf = t, Re = e, QC(e, t, a), Df = null, kf = null;
    }
    function QC(e, t, a) {
      for (var i = (e.mode & ft) !== Ue; Re !== null; ) {
        var u = Re, s = u.child;
        if (u.tag === je && i) {
          var f = u.memoizedState !== null, p = f || ym;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ur, _ = ym, b = Ur;
            ym = p, Ur = g, Ur && !b && (Re = u, rx(u));
            for (var M = s; M !== null; )
              Re = M, QC(
                M,
                t,
                a
              ), M = M.sibling;
            Re = u, ym = _, Ur = b, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & yr) !== Le && s !== null ? (s.return = u, Re = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; Re !== null; ) {
        var i = Re;
        if ((i.flags & yr) !== Le) {
          var u = i.alternate;
          Bt(i);
          try {
            Ib(t, u, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Re = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Re = s;
          return;
        }
        Re = i.return;
      }
    }
    function nx(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        switch (t.tag) {
          case me:
          case Xe:
          case ot:
          case Ve: {
            if (t.mode & Fe)
              try {
                Yl(), el(lr, t, t.return);
              } finally {
                $l(t);
              }
            else
              el(lr, t, t.return);
            break;
          }
          case se: {
            Of(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && bS(t, t.return, i);
            break;
          }
          case ie: {
            Of(t, t.return);
            break;
          }
          case je: {
            var u = t.memoizedState !== null;
            if (u) {
              WC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Re = a) : WC(e);
      }
    }
    function WC(e) {
      for (; Re !== null; ) {
        var t = Re;
        if (t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function rx(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        if (t.tag === je) {
          var i = t.memoizedState !== null;
          if (i) {
            GC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Re = a) : GC(e);
      }
    }
    function GC(e) {
      for (; Re !== null; ) {
        var t = Re;
        Bt(t);
        try {
          Qb(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (Cn(), t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function ax(e, t, a, i) {
      Re = t, ix(t, e, a, i);
    }
    function ix(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re, s = u.child;
        (u.subtreeFlags & Ma) !== Le && s !== null ? (s.return = u, Re = s) : lx(e, t, a, i);
      }
    }
    function lx(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re;
        if ((u.flags & cn) !== Le) {
          Bt(u);
          try {
            ux(t, u, a, i);
          } catch (f) {
            sn(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          Re = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Re = s;
          return;
        }
        Re = u.return;
      }
    }
    function ux(e, t, a, i) {
      switch (t.tag) {
        case me:
        case Xe:
        case Ve: {
          if (t.mode & Fe) {
            iS();
            try {
              Ho(Nr | ir, t);
            } finally {
              aS(t);
            }
          } else
            Ho(Nr | ir, t);
          break;
        }
      }
    }
    function ox(e) {
      Re = e, sx();
    }
    function sx() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        if ((Re.flags & Ut) !== Le) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Re = u, dx(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Re = e;
          }
        }
        (e.subtreeFlags & Ma) !== Le && t !== null ? (t.return = e, Re = t) : cx();
      }
    }
    function cx() {
      for (; Re !== null; ) {
        var e = Re;
        (e.flags & cn) !== Le && (Bt(e), fx(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function fx(e) {
      switch (e.tag) {
        case me:
        case Xe:
        case Ve: {
          e.mode & Fe ? (iS(), el(Nr | ir, e, e.return), aS(e)) : el(Nr | ir, e, e.return);
          break;
        }
      }
    }
    function dx(e, t) {
      for (; Re !== null; ) {
        var a = Re;
        Bt(a), vx(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Re = i) : px(e);
      }
    }
    function px(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.sibling, i = t.return;
        if (PC(t), t === e) {
          Re = null;
          return;
        }
        if (a !== null) {
          a.return = i, Re = a;
          return;
        }
        Re = i;
      }
    }
    function vx(e, t) {
      switch (e.tag) {
        case me:
        case Xe:
        case Ve: {
          e.mode & Fe ? (iS(), el(Nr, e, t), aS(e)) : el(Nr, e, t);
          break;
        }
      }
    }
    function hx(e) {
      switch (e.tag) {
        case me:
        case Xe:
        case Ve: {
          try {
            Ho(lr | ir, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function mx(e) {
      switch (e.tag) {
        case me:
        case Xe:
        case Ve: {
          try {
            Ho(Nr | ir, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yx(e) {
      switch (e.tag) {
        case me:
        case Xe:
        case Ve: {
          try {
            el(lr | ir, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && bS(e, e.return, t);
          break;
        }
      }
    }
    function gx(e) {
      switch (e.tag) {
        case me:
        case Xe:
        case Ve:
          try {
            el(Nr | ir, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Lp = Symbol.for;
      Lp("selector.component"), Lp("selector.has_pseudo_class"), Lp("selector.role"), Lp("selector.test_id"), Lp("selector.text");
    }
    var Sx = [];
    function Ex() {
      Sx.forEach(function(e) {
        return e();
      });
    }
    var Cx = U.ReactCurrentActQueue;
    function Rx(e) {
      {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function qC() {
      {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !e && Cx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tx = Math.ceil, kS = U.ReactCurrentDispatcher, OS = U.ReactCurrentOwner, Fr = U.ReactCurrentBatchConfig, rl = U.ReactCurrentActQueue, sr = 0, XC = 1, jr = 2, xi = 4, Nu = 0, Mp = 1, Ys = 2, Sm = 3, Np = 4, KC = 5, LS = 6, Ct = sr, Ca = null, On = null, cr = P, Ql = P, MS = Oo(P), fr = Nu, zp = null, Em = P, Up = P, Cm = P, Ap = null, $a = null, NS = 0, ZC = 500, JC = 1 / 0, wx = 500, zu = null;
    function Fp() {
      JC = mn() + wx;
    }
    function e1() {
      return JC;
    }
    var Rm = !1, zS = null, Lf = null, Is = !1, Vo = null, jp = P, US = [], AS = null, bx = 50, Hp = 0, FS = null, jS = !1, Tm = !1, xx = 50, Mf = 0, wm = null, Pp = Jt, bm = P, t1 = !1;
    function xm() {
      return Ca;
    }
    function Ra() {
      return (Ct & (jr | xi)) !== sr ? mn() : (Pp !== Jt || (Pp = mn()), Pp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ft) === Ue)
        return He;
      if ((Ct & jr) !== sr && cr !== P)
        return Hn(cr);
      var a = Rw() !== Cw;
      if (a) {
        if (Fr.transition !== null) {
          var i = Fr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return bm === Et && (bm = xd()), bm;
      }
      var u = Aa();
      if (u !== Et)
        return u;
      var s = lT();
      return s;
    }
    function _x(e) {
      var t = e.mode;
      return (t & ft) === Ue ? He : iy();
    }
    function dr(e, t, a, i) {
      Kx(), t1 && S("useInsertionEffect must not schedule updates."), jS && (Tm = !0), mu(e, a, i), (Ct & jr) !== P && e === Ca ? e_(t) : (rr && Ld(e, t, a), t_(t), e === Ca && ((Ct & jr) === sr && (Up = rt(Up, a)), fr === Np && $o(e, cr)), Ya(e, i), a === He && Ct === sr && (t.mode & ft) === Ue && !rl.isBatchingLegacy && (Fp(), eE()));
    }
    function Dx(e, t, a) {
      var i = e.current;
      i.lanes = t, mu(e, t, a), Ya(e, a);
    }
    function kx(e) {
      return (Ct & jr) !== sr;
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      ny(e, t);
      var i = ms(e, e === Ca ? cr : P);
      if (i === P) {
        a !== null && y1(a), e.callbackNode = null, e.callbackPriority = Et;
        return;
      }
      var u = Nn(i), s = e.callbackPriority;
      if (s === u && !(rl.current !== null && a !== IS)) {
        a == null && s !== He && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && y1(a);
      var f;
      if (u === He)
        e.tag === Lo ? (rl.isBatchingLegacy !== null && (rl.didScheduleLegacyUpdate = !0), aw(a1.bind(null, e))) : J0(a1.bind(null, e)), rl.current !== null ? rl.current.push(Mo) : oT(function() {
          (Ct & (jr | xi)) === sr && Mo();
        }), f = null;
      else {
        var p;
        switch (Cs(i)) {
          case gr:
            p = hc;
            break;
          case ar:
            p = ya;
            break;
          case Bi:
            p = mi;
            break;
          case Ss:
            p = wl;
            break;
          default:
            p = mi;
            break;
        }
        f = QS(p, n1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function n1(e, t) {
      if (Kw(), Pp = Jt, bm = P, (Ct & (jr | xi)) !== sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ms(e, e === Ca ? cr : P);
      if (u === P)
        return null;
      var s = !gs(e, u) && !jv(e, u) && !t, f = s ? Hx(e, u) : Dm(e, u);
      if (f !== Nu) {
        if (f === Ys) {
          var p = wd(e);
          p !== P && (u = p, f = HS(e, p));
        }
        if (f === Mp) {
          var v = zp;
          throw Qs(e, P), $o(e, u), Ya(e, mn()), v;
        }
        if (f === LS)
          $o(e, u);
        else {
          var y = !gs(e, u), g = e.current.alternate;
          if (y && !Lx(g)) {
            if (f = Dm(e, u), f === Ys) {
              var _ = wd(e);
              _ !== P && (u = _, f = HS(e, _));
            }
            if (f === Mp) {
              var b = zp;
              throw Qs(e, P), $o(e, u), Ya(e, mn()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ox(e, f, u);
        }
      }
      return Ya(e, mn()), e.callbackNode === a ? n1.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Ap;
      if (Vn(e)) {
        var i = Qs(e, t);
        i.flags |= Rn, KT(e.containerInfo);
      }
      var u = Dm(e, t);
      if (u !== Ys) {
        var s = $a;
        $a = a, s !== null && r1(s);
      }
      return u;
    }
    function r1(e) {
      $a === null ? $a = e : $a.push.apply($a, e);
    }
    function Ox(e, t, a) {
      switch (t) {
        case Nu:
        case Mp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Ys: {
          Ws(e, $a, zu);
          break;
        }
        case Sm: {
          if ($o(e, a), Hc(a) && !g1()) {
            var i = NS + ZC - mn();
            if (i > 10) {
              var u = ms(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                Ra(), kd(e, s);
                break;
              }
              e.timeoutHandle = Ay(Ws.bind(null, e, $a, zu), i);
              break;
            }
          }
          Ws(e, $a, zu);
          break;
        }
        case Np: {
          if ($o(e, a), Fv(a))
            break;
          if (!g1()) {
            var f = Av(e, a), p = f, v = mn() - p, y = Xx(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(Ws.bind(null, e, $a, zu), y);
              break;
            }
          }
          Ws(e, $a, zu);
          break;
        }
        case KC: {
          Ws(e, $a, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Lx(e) {
      for (var t = e; ; ) {
        if (t.flags & ss) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ss && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = po(t, Cm), t = po(t, Up), Dd(e, t);
    }
    function a1(e) {
      if (Zw(), (Ct & (jr | xi)) !== sr)
        throw new Error("Should not already be working.");
      Au();
      var t = ms(e, P);
      if (!ra(t, He))
        return Ya(e, mn()), null;
      var a = Dm(e, t);
      if (e.tag !== Lo && a === Ys) {
        var i = wd(e);
        i !== P && (t = i, a = HS(e, i));
      }
      if (a === Mp) {
        var u = zp;
        throw Qs(e, P), $o(e, t), Ya(e, mn()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ws(e, $a, zu), Ya(e, mn()), null;
    }
    function Mx(e, t) {
      t !== P && (vo(e, rt(t, He)), Ya(e, mn()), (Ct & (jr | xi)) === sr && (Fp(), Mo()));
    }
    function PS(e, t) {
      var a = Ct;
      Ct |= XC;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === sr && !rl.isBatchingLegacy && (Fp(), eE());
      }
    }
    function Nx(e, t, a, i, u) {
      var s = Aa(), f = Fr.transition;
      try {
        return Fr.transition = null, Pn(gr), e(t, a, i, u);
      } finally {
        Pn(s), Fr.transition = f, Ct === sr && Fp();
      }
    }
    function Uu(e) {
      Vo !== null && Vo.tag === Lo && (Ct & (jr | xi)) === sr && Au();
      var t = Ct;
      Ct |= XC;
      var a = Fr.transition, i = Aa();
      try {
        return Fr.transition = null, Pn(gr), e ? e() : void 0;
      } finally {
        Pn(i), Fr.transition = a, Ct = t, (Ct & (jr | xi)) === sr && Mo();
      }
    }
    function i1() {
      return (Ct & (jr | xi)) !== sr;
    }
    function _m(e, t) {
      ia(MS, Ql, e), Ql = rt(Ql, t);
    }
    function VS(e) {
      Ql = MS.current, aa(MS, e);
    }
    function Qs(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, uT(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          zC(u, i), i = i.return;
        }
      Ca = e;
      var s = Gs(e.current, null);
      return On = s, cr = Ql = t, fr = Nu, zp = null, Em = P, Up = P, Cm = P, Ap = null, $a = null, xw(), qi.discardPendingWarnings(), s;
    }
    function l1(e, t) {
      do {
        var a = On;
        try {
          if (Uh(), AE(), Cn(), OS.current = null, a === null || a.return === null) {
            fr = Mp, zp = t, On = null;
            return;
          }
          if (at && a.mode & Fe && pm(a, !0), gt)
            if (lu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Nv(a, i, cr);
            } else
              Ec(a, t, cr);
          rb(e, a.return, a, t, cr), c1(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function u1() {
      var e = kS.current;
      return kS.current = om, e === null ? om : e;
    }
    function o1(e) {
      kS.current = e;
    }
    function zx() {
      NS = mn();
    }
    function Vp(e) {
      Em = rt(e, Em);
    }
    function Ux() {
      fr === Nu && (fr = Sm);
    }
    function BS() {
      (fr === Nu || fr === Sm || fr === Ys) && (fr = Np), Ca !== null && (ys(Em) || ys(Up)) && $o(Ca, cr);
    }
    function Ax(e) {
      fr !== Np && (fr = Ys), Ap === null ? Ap = [e] : Ap.push(e);
    }
    function Fx() {
      return fr === Nu;
    }
    function Dm(e, t) {
      var a = Ct;
      Ct |= jr;
      var i = u1();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Bp(e, cr), u.clear()), Bc(e, t);
        }
        zu = Md(), Qs(e, t);
      }
      ti(t);
      do
        try {
          jx();
          break;
        } catch (s) {
          l1(e, s);
        }
      while (!0);
      if (Uh(), Ct = a, o1(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return uo(), Ca = null, cr = P, fr;
    }
    function jx() {
      for (; On !== null; )
        s1(On);
    }
    function Hx(e, t) {
      var a = Ct;
      Ct |= jr;
      var i = u1();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Bp(e, cr), u.clear()), Bc(e, t);
        }
        zu = Md(), Fp(), Qs(e, t);
      }
      ti(t);
      do
        try {
          Px();
          break;
        } catch (s) {
          l1(e, s);
        }
      while (!0);
      return Uh(), o1(i), Ct = a, On !== null ? (ds(), Nu) : (uo(), Ca = null, cr = P, fr);
    }
    function Px() {
      for (; On !== null && !vc(); )
        s1(On);
    }
    function s1(e) {
      var t = e.alternate;
      Bt(e);
      var a;
      (e.mode & Fe) !== Ue ? (rS(e), a = $S(t, e, Ql), pm(e, !0)) : a = $S(t, e, Ql), Cn(), e.memoizedProps = e.pendingProps, a === null ? c1(e) : On = a, OS.current = null;
    }
    function c1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & va) === Le) {
          Bt(t);
          var u = void 0;
          if ((t.mode & Fe) === Ue ? u = NC(a, t, Ql) : (rS(t), u = NC(a, t, Ql), pm(t, !1)), Cn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Ub(a, t);
          if (s !== null) {
            s.flags &= wv, On = s;
            return;
          }
          if ((t.mode & Fe) !== Ue) {
            pm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= va, i.subtreeFlags = Le, i.deletions = null;
          else {
            fr = LS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      fr === Nu && (fr = KC);
    }
    function Ws(e, t, a) {
      var i = Aa(), u = Fr.transition;
      try {
        Fr.transition = null, Pn(gr), Vx(e, t, a, i);
      } finally {
        Fr.transition = u, Pn(i);
      }
      return null;
    }
    function Vx(e, t, a, i) {
      do
        Au();
      while (Vo !== null);
      if (Zx(), (Ct & (jr | xi)) !== sr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (yc(s), u === null)
        return Sd(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Et;
      var f = rt(u.lanes, u.childLanes);
      Od(e, f), e === Ca && (Ca = null, On = null, cr = P), ((u.subtreeFlags & Ma) !== Le || (u.flags & Ma) !== Le) && (Is || (Is = !0, AS = a, QS(mi, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (ao | Jr | yr | Ma)) !== Le, v = (u.flags & (ao | Jr | yr | Ma)) !== Le;
      if (p || v) {
        var y = Fr.transition;
        Fr.transition = null;
        var g = Aa();
        Pn(gr);
        var _ = Ct;
        Ct |= xi, OS.current = null, Pb(e, u), uC(), ex(e, u, s), eT(e.containerInfo), e.current = u, zv(s), tx(u, e, s), lo(), _v(), Ct = _, Pn(g), Fr.transition = y;
      } else
        e.current = u, uC();
      var b = Is;
      if (Is ? (Is = !1, Vo = e, jp = s) : (Mf = 0, wm = null), f = e.pendingLanes, f === P && (Lf = null), b || v1(e.current, !1), Hi(u.stateNode, i), rr && e.memoizedUpdaters.clear(), Ex(), Ya(e, mn()), t !== null)
        for (var M = e.onRecoverableError, z = 0; z < t.length; z++) {
          var j = t[z], ve = j.stack, Ne = j.digest;
          M(j.value, {
            componentStack: ve,
            digest: Ne
          });
        }
      if (Rm) {
        Rm = !1;
        var be = zS;
        throw zS = null, be;
      }
      return ra(jp, He) && e.tag !== Lo && Au(), f = e.pendingLanes, ra(f, He) ? (Xw(), e === FS ? Hp++ : (Hp = 0, FS = e)) : Hp = 0, Mo(), Sd(), null;
    }
    function Au() {
      if (Vo !== null) {
        var e = Cs(jp), t = uy(Bi, e), a = Fr.transition, i = Aa();
        try {
          return Fr.transition = null, Pn(t), $x();
        } finally {
          Pn(i), Fr.transition = a;
        }
      }
      return !1;
    }
    function Bx(e) {
      US.push(e), Is || (Is = !0, QS(mi, function() {
        return Au(), null;
      }));
    }
    function $x() {
      if (Vo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Vo, a = jp;
      if (Vo = null, jp = P, (Ct & (jr | xi)) !== sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, Tm = !1, Uv(a);
      var i = Ct;
      Ct |= xi, ox(t.current), ax(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yb(t, f);
        }
      }
      fs(), v1(t.current, !0), Ct = i, Mo(), Tm ? t === wm ? Mf++ : (Mf = 0, wm = t) : Mf = 0, jS = !1, Tm = !1, xl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function f1(e) {
      return Lf !== null && Lf.has(e);
    }
    function Yx(e) {
      Lf === null ? Lf = /* @__PURE__ */ new Set([e]) : Lf.add(e);
    }
    function Ix(e) {
      Rm || (Rm = !0, zS = e);
    }
    var Qx = Ix;
    function d1(e, t, a) {
      var i = Bs(a, t), u = sC(e, i, He), s = zo(e, u, He), f = Ra();
      s !== null && (mu(s, He, f), Ya(s, f));
    }
    function sn(e, t, a) {
      if (Fb(a), $p(!1), e.tag === J) {
        d1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          d1(i, e, a);
          return;
        } else if (i.tag === se) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !f1(s)) {
            var f = Bs(a, e), p = sS(i, f, He), v = zo(i, p, He), y = Ra();
            v !== null && (mu(v, He, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Wx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      kd(e, a), n_(e), Ca === e && hu(cr, a) && (fr === Np || fr === Sm && Hc(cr) && mn() - NS < ZC ? Qs(e, P) : Cm = rt(Cm, a)), Ya(e, u);
    }
    function p1(e, t) {
      t === Et && (t = _x(e));
      var a = Ra(), i = Va(e, t);
      i !== null && (mu(i, t, a), Ya(i, a));
    }
    function Gx(e) {
      var t = e.memoizedState, a = Et;
      t !== null && (a = t.retryLane), p1(e, a);
    }
    function qx(e, t) {
      var a = Et, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ot:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), p1(e, a);
    }
    function Xx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tx(e / 1960) * 1960;
    }
    function Kx() {
      if (Hp > bx)
        throw Hp = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Mf > xx && (Mf = 0, wm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Zx() {
      qi.flushLegacyContextWarning(), qi.flushPendingUnsafeLifecycleWarnings();
    }
    function v1(e, t) {
      Bt(e), km(e, Zr, yx), t && km(e, iu, gx), km(e, Zr, hx), t && km(e, iu, mx), Cn();
    }
    function km(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Le ? i = i.child : ((i.flags & t) !== Le && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Om = null;
    function h1(e) {
      {
        if ((Ct & jr) !== sr || !(e.mode & ft))
          return;
        var t = e.tag;
        if (t !== Je && t !== J && t !== se && t !== me && t !== Xe && t !== ot && t !== Ve)
          return;
        var a = Ge(e) || "ReactComponent";
        if (Om !== null) {
          if (Om.has(a))
            return;
          Om.add(a);
        } else
          Om = /* @__PURE__ */ new Set([a]);
        var i = hn;
        try {
          Bt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Bt(e) : Cn();
        }
      }
    }
    var $S;
    {
      var Jx = null;
      $S = function(e, t, a) {
        var i = T1(Jx, t);
        try {
          return DC(e, t, a);
        } catch (s) {
          if (dw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Uh(), AE(), zC(e, t), T1(t, i), t.mode & Fe && rS(t), au(null, DC, null, e, t, a), ey()) {
            var u = od();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var m1 = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function e_(e) {
      if (Wr && !Ww())
        switch (e.tag) {
          case me:
          case Xe:
          case Ve: {
            var t = On && Ge(On) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ge(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case se: {
            m1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), m1 = !0);
            break;
          }
        }
    }
    function Bp(e, t) {
      if (rr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ld(e, i, t);
        });
      }
    }
    var IS = {};
    function QS(e, t) {
      {
        var a = rl.current;
        return a !== null ? (a.push(t), IS) : pc(e, t);
      }
    }
    function y1(e) {
      if (e !== IS)
        return xv(e);
    }
    function g1() {
      return rl.current !== null;
    }
    function t_(e) {
      {
        if (e.mode & ft) {
          if (!qC())
            return;
        } else if (!Rx() || Ct !== sr || e.tag !== me && e.tag !== Xe && e.tag !== Ve)
          return;
        if (rl.current === null) {
          var t = hn;
          try {
            Bt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ge(e));
          } finally {
            t ? Bt(e) : Cn();
          }
        }
      }
    }
    function n_(e) {
      e.tag !== Lo && qC() && rl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function $p(e) {
      t1 = e;
    }
    var _i = null, Nf = null, r_ = function(e) {
      _i = e;
    };
    function zf(e) {
      {
        if (_i === null)
          return e;
        var t = _i(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return zf(e);
    }
    function GS(e) {
      {
        if (_i === null)
          return e;
        var t = _i(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = zf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: pe,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function S1(e, t) {
      {
        if (_i === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case se: {
            typeof i == "function" && (u = !0);
            break;
          }
          case me: {
            (typeof i == "function" || s === Me) && (u = !0);
            break;
          }
          case Xe: {
            (s === pe || s === Me) && (u = !0);
            break;
          }
          case ot:
          case Ve: {
            (s === tt || s === Me) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = _i(a);
          if (f !== void 0 && f === _i(i))
            return !0;
        }
        return !1;
      }
    }
    function E1(e) {
      {
        if (_i === null || typeof WeakSet != "function")
          return;
        Nf === null && (Nf = /* @__PURE__ */ new WeakSet()), Nf.add(e);
      }
    }
    var a_ = function(e, t) {
      {
        if (_i === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          qS(e.current, i, a);
        });
      }
    }, i_ = function(e, t) {
      {
        if (e.context !== ri)
          return;
        Au(), Uu(function() {
          Yp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case me:
          case Ve:
          case se:
            v = p;
            break;
          case Xe:
            v = p.render;
            break;
        }
        if (_i === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = _i(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === se ? g = !0 : y = !0));
        }
        if (Nf !== null && (Nf.has(e) || i !== null && Nf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = Va(e, He);
          b !== null && dr(b, e, He, Jt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var l_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case me:
          case Ve:
          case se:
            p = f;
            break;
          case Xe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? u_(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function u_(e, t) {
      {
        var a = o_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case le:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function o_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var KS;
    {
      KS = !1;
      try {
        var C1 = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function s_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Le, this.subtreeFlags = Le, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ai = function(e, t, a, i) {
      return new s_(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function c_(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function f_(e) {
      if (typeof e == "function")
        return ZS(e) ? se : me;
      if (e != null) {
        var t = e.$$typeof;
        if (t === pe)
          return Xe;
        if (t === tt)
          return ot;
      }
      return Je;
    }
    function Gs(e, t) {
      var a = e.alternate;
      a === null ? (a = ai(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Le, a.subtreeFlags = Le, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & nr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Je:
        case me:
        case Ve:
          a.type = zf(e.type);
          break;
        case se:
          a.type = WS(e.type);
          break;
        case Xe:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function d_(e, t) {
      e.flags &= nr | an;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = Le, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Le, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function p_(e, t, a) {
      var i;
      return e === _h ? (i = ft, t === !0 && (i |= yn, i |= za)) : i = Ue, rr && (i |= Fe), ai(J, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = Je, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = se, p = WS(p)) : p = zf(p);
      else if (typeof e == "string")
        f = ie;
      else {
        e:
          switch (e) {
            case pa:
              return Yo(a.children, u, s, t);
            case si:
              f = ge, u |= yn, (u & ft) !== Ue && (u |= za);
              break;
            case R:
              return v_(a, u, s, t);
            case Ze:
              return h_(a, u, s, t);
            case St:
              return m_(a, u, s, t);
            case tn:
              return R1(a, u, s, t);
            case tr:
            case Ln:
            case ci:
            case Hu:
            case en:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Y:
                    f = ut;
                    break e;
                  case te:
                    f = wt;
                    break e;
                  case pe:
                    f = Xe, p = GS(p);
                    break e;
                  case tt:
                    f = ot;
                    break e;
                  case Me:
                    f = rn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ge(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      }
      var g = ai(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = ai(Oe, e, i, t);
      return u.lanes = a, u;
    }
    function v_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ai(dt, e, i, t | Fe);
      return u.elementType = R, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function h_(e, t, a, i) {
      var u = ai(De, e, i, t);
      return u.elementType = Ze, u.lanes = a, u;
    }
    function m_(e, t, a, i) {
      var u = ai(Ot, e, i, t);
      return u.elementType = St, u.lanes = a, u;
    }
    function R1(e, t, a, i) {
      var u = ai(je, e, i, t);
      u.elementType = tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = ai(de, e, null, t);
      return i.lanes = a, i;
    }
    function y_() {
      var e = ai(ie, null, null, Ue);
      return e.elementType = "DELETED", e;
    }
    function g_(e) {
      var t = ai(Wt, null, null, Ue);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ai(le, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, u;
    }
    function T1(e, t) {
      return e === null && (e = ai(Je, null, null, Ue)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function S_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Et, this.eventTimes = Vc(P), this.expirationTimes = Vc(Jt), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = Vc(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < un; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case _h:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function w1(e, t, a, i, u, s, f, p, v, y) {
      var g = new S_(e, t, a, p, v), _ = p_(t, s);
      g.current = _, _.stateNode = g;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = b;
      }
      return cg(_), g;
    }
    var r0 = "18.2.0";
    function E_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $r(i), {
        $$typeof: xr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function b1(e) {
      if (!e)
        return ri;
      var t = ka(e), a = rw(t);
      if (t.tag === se) {
        var i = t.type;
        if (Hl(i))
          return K0(t, i, a);
      }
      return a;
    }
    function C_(e, t) {
      {
        var a = ka(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Na(a);
        if (u === null)
          return null;
        if (u.mode & yn) {
          var s = Ge(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = hn;
            try {
              Bt(u), a.mode & yn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Bt(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function x1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return w1(e, t, v, y, a, i, u, s, f);
    }
    function _1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = w1(a, i, g, e, u, s, f, p, v);
      _.context = b1(null);
      var b = _.current, M = Ra(), z = Bo(b), j = Lu(M, z);
      return j.callback = t != null ? t : null, zo(b, j, z), Dx(_, z, M), _;
    }
    function Yp(e, t, a, i) {
      Dv(t, e);
      var u = t.current, s = Ra(), f = Bo(u);
      uu(f);
      var p = b1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && hn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ge(hn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (dr(y, u, f, s), Ph(y, u, f)), f;
    }
    function Lm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function R_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (Vn(t)) {
            var a = ry(t);
            Mx(t, a);
          }
          break;
        }
        case De: {
          Uu(function() {
            var u = Va(e, He);
            if (u !== null) {
              var s = Ra();
              dr(u, e, He, s);
            }
          });
          var i = He;
          l0(e, i);
          break;
        }
      }
    }
    function D1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Pv(a.retryLane, t));
    }
    function l0(e, t) {
      D1(e, t);
      var a = e.alternate;
      a && D1(a, t);
    }
    function T_(e) {
      if (e.tag === De) {
        var t = oo, a = Va(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function w_(e) {
      if (e.tag === De) {
        var t = Bo(e), a = Va(e, t);
        if (a !== null) {
          var i = Ra();
          dr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function k1(e) {
      var t = bv(e);
      return t === null ? null : t.stateNode;
    }
    var O1 = function(e) {
      return null;
    };
    function b_(e) {
      return O1(e);
    }
    var L1 = function(e) {
      return !1;
    };
    function x_(e) {
      return L1(e);
    }
    var M1 = null, N1 = null, z1 = null, U1 = null, A1 = null, F1 = null, j1 = null, H1 = null, P1 = null;
    {
      var V1 = function(e, t, a) {
        var i = t[a], u = yt(e) ? e.slice() : st({}, e);
        return a + 1 === t.length ? (yt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = V1(e[i], t, a + 1), u);
      }, B1 = function(e, t) {
        return V1(e, t, 0);
      }, $1 = function(e, t, a, i) {
        var u = t[i], s = yt(e) ? e.slice() : st({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], yt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = $1(
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Y1 = function(e, t, a) {
        if (t.length !== a.length) {
          We("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              We("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return $1(e, t, a, 0);
      }, I1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = yt(e) ? e.slice() : st({}, e);
        return s[u] = I1(e[u], t, a + 1, i), s;
      }, Q1 = function(e, t, a) {
        return I1(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      M1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = Q1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = st({}, e.memoizedProps);
          var f = Va(e, He);
          f !== null && dr(f, e, He, Jt);
        }
      }, N1 = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = B1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = st({}, e.memoizedProps);
          var s = Va(e, He);
          s !== null && dr(s, e, He, Jt);
        }
      }, z1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = Y1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = st({}, e.memoizedProps);
          var f = Va(e, He);
          f !== null && dr(f, e, He, Jt);
        }
      }, U1 = function(e, t, a) {
        e.pendingProps = Q1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, He);
        i !== null && dr(i, e, He, Jt);
      }, A1 = function(e, t) {
        e.pendingProps = B1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, He);
        a !== null && dr(a, e, He, Jt);
      }, F1 = function(e, t, a) {
        e.pendingProps = Y1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, He);
        i !== null && dr(i, e, He, Jt);
      }, j1 = function(e) {
        var t = Va(e, He);
        t !== null && dr(t, e, He, Jt);
      }, H1 = function(e) {
        O1 = e;
      }, P1 = function(e) {
        L1 = e;
      };
    }
    function __(e) {
      var t = Na(e);
      return t === null ? null : t.stateNode;
    }
    function D_(e) {
      return null;
    }
    function k_() {
      return hn;
    }
    function O_(e) {
      var t = e.findFiberByHostInstance, a = U.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: M1,
        overrideHookStateDeletePath: N1,
        overrideHookStateRenamePath: z1,
        overrideProps: U1,
        overridePropsDeletePath: A1,
        overridePropsRenamePath: F1,
        setErrorHandler: H1,
        setSuspenseHandler: P1,
        scheduleUpdate: j1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: __,
        findFiberByHostInstance: t || D_,
        findHostInstancesForRefresh: l_,
        scheduleRefresh: a_,
        scheduleRoot: i_,
        setRefreshHandler: r_,
        getCurrentFiber: k_,
        reconcilerVersion: r0
      });
    }
    var W1 = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Mm.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Nm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = k1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Yp(e, t, null, null);
    }, Mm.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        i1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Yp(null, e, null, null);
        }), Q0(t);
      }
    };
    function L_(e, t) {
      if (!Nm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      G1(e);
      var a = !1, i = !1, u = "", s = W1;
      t != null && (t.hydrate ? We("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === oi && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = x1(e, _h, null, a, i, u, s);
      Eh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return Zd(p), new o0(f);
    }
    function Mm(e) {
      this._internalRoot = e;
    }
    function M_(e) {
      e && Gv(e);
    }
    Mm.prototype.unstable_scheduleHydration = M_;
    function N_(e, t, a) {
      if (!Nm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      G1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a != null ? a : null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = W1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = _1(t, null, e, _h, i, s, f, p, v);
      if (Eh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Vw(y, _);
        }
      return new Mm(y);
    }
    function Nm(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Za || e.nodeType === Zl || !ue));
    }
    function Ip(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Za || e.nodeType === Zl || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function G1(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var z_ = U.ReactCurrentOwner, q1;
    q1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = k1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && ko(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Za ? e.documentElement : e.firstChild : null;
    }
    function X1() {
    }
    function U_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Lm(f);
            s.call(b);
          };
        }
        var f = _1(
          t,
          i,
          e,
          Lo,
          null,
          !1,
          !1,
          "",
          X1
        );
        e._reactRootContainer = f, Eh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return Zd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Lm(g);
            y.call(b);
          };
        }
        var g = x1(
          e,
          Lo,
          null,
          !1,
          !1,
          "",
          X1
        );
        e._reactRootContainer = g, Eh(g.current, e);
        var _ = e.nodeType === Mn ? e.parentNode : e;
        return Zd(_), Uu(function() {
          Yp(t, g, a, i);
        }), g;
      }
    }
    function A_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function zm(e, t, a, i, u) {
      q1(a), A_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = U_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Lm(f);
            p.call(v);
          };
        }
        Yp(t, f, e, u);
      }
      return Lm(f);
    }
    function F_(e) {
      {
        var t = z_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _t(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : C_(e, "findDOMNode");
    }
    function j_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ip(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return zm(null, e, t, !0, a);
    }
    function H_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ip(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return zm(null, e, t, !1, a);
    }
    function P_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ip(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !os(e))
        throw new Error("parentComponent must be a valid React Component");
      return zm(e, t, a, !1, i);
    }
    function V_(e) {
      if (!Ip(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !ko(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          zm(null, null, e, !1, function() {
            e._reactRootContainer = null, Q0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && ko(u)), f = e.nodeType === qr && Ip(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ye(R_), Bv(T_), Ts(w_), zd(Aa), Yv(Es), (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Rv(YR), oc(PS, Nx, Uu);
    function B_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Nm(t))
        throw new Error("Target container is not a DOM element.");
      return E_(e, t, null, a);
    }
    function $_(e, t, a, i) {
      return P_(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      Events: [ko, ff, Ch, uc, is, PS]
    };
    function Y_(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L_(e, t);
    }
    function I_(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), N_(e, t, a);
    }
    function Q_(e) {
      return i1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var W_ = O_({
      findFiberByHostInstance: Ns,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!W_ && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var K1 = window.location.protocol;
      /^(https?|file):$/.test(K1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (K1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Qa.createPortal = B_, Qa.createRoot = Y_, Qa.findDOMNode = F_, Qa.flushSync = Q_, Qa.hydrate = j_, Qa.hydrateRoot = I_, Qa.render = H_, Qa.unmountComponentAtNode = V_, Qa.unstable_batchedUpdates = PS, Qa.unstable_renderSubtreeIntoContainer = $_, Qa.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qa;
}
(function($) {
  function q() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q);
      } catch (U) {
        console.error(U);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (q(), $.exports = rD()) : $.exports = aD();
})(oR);
var h0, m0, Wp = oR.exports;
if (process.env.NODE_ENV === "production")
  m0 = Af.createRoot = Wp.createRoot, h0 = Af.hydrateRoot = Wp.hydrateRoot;
else {
  var Am = Wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  m0 = Af.createRoot = function($, q) {
    Am.usingClientEntryPoint = !0;
    try {
      return Wp.createRoot($, q);
    } finally {
      Am.usingClientEntryPoint = !1;
    }
  }, h0 = Af.hydrateRoot = function($, q, U) {
    Am.usingClientEntryPoint = !0;
    try {
      return Wp.hydrateRoot($, q, U);
    } finally {
      Am.usingClientEntryPoint = !1;
    }
  };
}
const iD = /* @__PURE__ */ X_({
  __proto__: null,
  get createRoot() {
    return m0;
  },
  get hydrateRoot() {
    return h0;
  },
  default: Af
}, [Af]), Hm = Symbol.for("r2wc.reactRender"), iR = Symbol.for("r2wc.shouldRender"), Fm = Symbol.for("r2wc.root");
function lD($ = "") {
  return $.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
const uD = {
  expando: function($, q, U) {
    Object.defineProperty($, q, {
      enumerable: !0,
      get: function() {
        return U;
      },
      set: function(Qe) {
        U = Qe, this[Hm]();
      }
    }), $[Hm]();
  }
};
function oD($, q, U, Qe = {}) {
  const mt = {}, We = {}, S = {};
  Qe.props || (Qe.props = $.propTypes ? Object.keys($.propTypes) : []);
  const At = Array.isArray(Qe.props) ? Qe.props.slice() : Object.keys(Qe.props), me = Array.isArray(Qe.props);
  At.forEach((de) => {
    mt[de] = me ? String : Qe.props[de], We[de] = lD(de), S[We[de]] = de;
  });
  const se = {
    isConnected: "isConnected" in HTMLElement.prototype
  };
  let Je = !1;
  const J = function(...de) {
    const Oe = Reflect.construct(HTMLElement, de, this.constructor);
    return typeof Qe.shadow == "string" ? Oe.attachShadow({ mode: Qe.shadow }) : Qe.shadow && (console.warn('Specifying the "shadow" option as a boolean is deprecated and will be removed in a future version.'), Oe.attachShadow({ mode: "open" })), Oe;
  }, le = Object.create(HTMLElement.prototype);
  le.constructor = J;
  const ie = new Proxy(le, {
    has: function(de, Oe) {
      return Oe in mt || Oe in le;
    },
    set: function(de, Oe, ge, wt) {
      return Je && (se[Oe] = !0), typeof Oe == "symbol" || se[Oe] || Oe in de ? Reflect.set(de, Oe, ge, wt) : (uD.expando(wt, Oe, ge), !0);
    },
    getOwnPropertyDescriptor: function(de, Oe) {
      const ge = Reflect.getOwnPropertyDescriptor(de, Oe);
      if (ge)
        return ge;
      if (Oe in mt)
        return {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: void 0
        };
    }
  });
  return J.prototype = ie, le.connectedCallback = function() {
    this[iR] = !0, this[Hm]();
  }, le.disconnectedCallback = function() {
    typeof U.createRoot == "function" ? this[Fm].unmount() : U.unmountComponentAtNode(this);
  }, le[Hm] = function() {
    if (this[iR] === !0) {
      const de = {};
      Object.keys(this).forEach(function(wt) {
        se[wt] !== !1 && (de[wt] = this[wt]);
      }, this), Je = !0;
      const Oe = Qe.shadow ? this.shadowRoot : this, ge = q.createElement($, de);
      typeof U.createRoot == "function" ? (this[Fm] || (this[Fm] = U.createRoot(Oe)), this[Fm].render(ge)) : U.render(ge, Oe), Je = !1;
    }
  }, J.observedAttributes = Object.keys(S), le.attributeChangedCallback = function(de, Oe, ge) {
    const wt = S[de] || de;
    switch (mt[wt]) {
      case "ref":
      case Function:
        if (!ge && mt[wt] === "ref") {
          ge = q.createRef();
          break;
        }
        typeof window < "u" ? ge = window[ge] || ge : typeof global < "u" && (ge = global[ge] || ge), typeof ge == "function" && (ge = ge.bind(this));
        break;
      case Number:
        ge = parseFloat(ge);
        break;
      case Boolean:
        ge = /^[ty1-9]/i.test(ge);
        break;
      case Object:
      case Array:
        ge = JSON.parse(ge);
        break;
    }
    this[wt] = ge;
  }, J;
}
var y0 = { exports: {} }, Gp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function sD() {
  if (lR)
    return Gp;
  lR = 1;
  var $ = Ff.exports, q = Symbol.for("react.element"), U = Symbol.for("react.fragment"), Qe = Object.prototype.hasOwnProperty, mt = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, We = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(At, me, se) {
    var Je, J = {}, le = null, ie = null;
    se !== void 0 && (le = "" + se), me.key !== void 0 && (le = "" + me.key), me.ref !== void 0 && (ie = me.ref);
    for (Je in me)
      Qe.call(me, Je) && !We.hasOwnProperty(Je) && (J[Je] = me[Je]);
    if (At && At.defaultProps)
      for (Je in me = At.defaultProps, me)
        J[Je] === void 0 && (J[Je] = me[Je]);
    return { $$typeof: q, type: At, key: le, ref: ie, props: J, _owner: mt.current };
  }
  return Gp.Fragment = U, Gp.jsx = S, Gp.jsxs = S, Gp;
}
var qp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uR;
function cD() {
  return uR || (uR = 1, process.env.NODE_ENV !== "production" && function() {
    var $ = Ff.exports, q = Symbol.for("react.element"), U = Symbol.for("react.portal"), Qe = Symbol.for("react.fragment"), mt = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), At = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), Je = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), de = Symbol.iterator, Oe = "@@iterator";
    function ge(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = de && R[de] || R[Oe];
      return typeof Y == "function" ? Y : null;
    }
    var wt = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ut(R) {
      {
        for (var Y = arguments.length, te = new Array(Y > 1 ? Y - 1 : 0), pe = 1; pe < Y; pe++)
          te[pe - 1] = arguments[pe];
        Xe("error", R, te);
      }
    }
    function Xe(R, Y, te) {
      {
        var pe = wt.ReactDebugCurrentFrame, Ze = pe.getStackAddendum();
        Ze !== "" && (Y += "%s", te = te.concat([Ze]));
        var St = te.map(function(tt) {
          return String(tt);
        });
        St.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, St);
      }
    }
    var dt = !1, De = !1, ot = !1, Ve = !1, rn = !1, bn;
    bn = Symbol.for("react.module.reference");
    function Wt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Qe || R === We || rn || R === mt || R === se || R === Je || Ve || R === ie || dt || De || ot || typeof R == "object" && R !== null && (R.$$typeof === le || R.$$typeof === J || R.$$typeof === S || R.$$typeof === At || R.$$typeof === me || R.$$typeof === bn || R.getModuleId !== void 0));
    }
    function Ot(R, Y, te) {
      var pe = R.displayName;
      if (pe)
        return pe;
      var Ze = Y.displayName || Y.name || "";
      return Ze !== "" ? te + "(" + Ze + ")" : te;
    }
    function En(R) {
      return R.displayName || "Context";
    }
    function je(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ut("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Qe:
          return "Fragment";
        case U:
          return "Portal";
        case We:
          return "Profiler";
        case mt:
          return "StrictMode";
        case se:
          return "Suspense";
        case Je:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case At:
            var Y = R;
            return En(Y) + ".Consumer";
          case S:
            var te = R;
            return En(te._context) + ".Provider";
          case me:
            return Ot(R, R.render, "ForwardRef");
          case J:
            var pe = R.displayName || null;
            return pe !== null ? pe : je(R.type) || "Memo";
          case le: {
            var Ze = R, St = Ze._payload, tt = Ze._init;
            try {
              return je(tt(St));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var et = Object.assign, Ft = 0, bt, Se, Z, xe, T, B, ue;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function Pe() {
      {
        if (Ft === 0) {
          bt = console.log, Se = console.info, Z = console.warn, xe = console.error, T = console.group, B = console.groupCollapsed, ue = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Ft++;
      }
    }
    function gt() {
      {
        if (Ft--, Ft === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, R, {
              value: bt
            }),
            info: et({}, R, {
              value: Se
            }),
            warn: et({}, R, {
              value: Z
            }),
            error: et({}, R, {
              value: xe
            }),
            group: et({}, R, {
              value: T
            }),
            groupCollapsed: et({}, R, {
              value: B
            }),
            groupEnd: et({}, R, {
              value: ue
            })
          });
        }
        Ft < 0 && ut("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = wt.ReactCurrentDispatcher, pt;
    function it(R, Y, te) {
      {
        if (pt === void 0)
          try {
            throw Error();
          } catch (Ze) {
            var pe = Ze.stack.trim().match(/\n( *(at )?)/);
            pt = pe && pe[1] || "";
          }
        return `
` + pt + R;
      }
    }
    var jt = !1, Pr;
    {
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      Pr = new pr();
    }
    function Vr(R, Y) {
      if (!R || jt)
        return "";
      {
        var te = Pr.get(R);
        if (te !== void 0)
          return te;
      }
      var pe;
      jt = !0;
      var Ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var St;
      St = at.current, at.current = null, Pe();
      try {
        if (Y) {
          var tt = function() {
            throw Error();
          };
          if (Object.defineProperty(tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(tt, []);
            } catch (xt) {
              pe = xt;
            }
            Reflect.construct(R, [], tt);
          } else {
            try {
              tt.call();
            } catch (xt) {
              pe = xt;
            }
            R.call(tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            pe = xt;
          }
          R();
        }
      } catch (xt) {
        if (xt && pe && typeof xt.stack == "string") {
          for (var Me = xt.stack.split(`
`), Ln = pe.stack.split(`
`), en = Me.length - 1, tn = Ln.length - 1; en >= 1 && tn >= 0 && Me[en] !== Ln[tn]; )
            tn--;
          for (; en >= 1 && tn >= 0; en--, tn--)
            if (Me[en] !== Ln[tn]) {
              if (en !== 1 || tn !== 1)
                do
                  if (en--, tn--, tn < 0 || Me[en] !== Ln[tn]) {
                    var tr = `
` + Me[en].replace(" at new ", " at ");
                    return R.displayName && tr.includes("<anonymous>") && (tr = tr.replace("<anonymous>", R.displayName)), typeof R == "function" && Pr.set(R, tr), tr;
                  }
                while (en >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        jt = !1, at.current = St, gt(), Error.prepareStackTrace = Ze;
      }
      var ci = R ? R.displayName || R.name : "", Hu = ci ? it(ci) : "";
      return typeof R == "function" && Pr.set(R, Hu), Hu;
    }
    function dn(R, Y, te) {
      return Vr(R, !1);
    }
    function Yn(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function An(R, Y, te) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Vr(R, Yn(R));
      if (typeof R == "string")
        return it(R);
      switch (R) {
        case se:
          return it("Suspense");
        case Je:
          return it("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case me:
            return dn(R.render);
          case J:
            return An(R.type, Y, te);
          case le: {
            var pe = R, Ze = pe._payload, St = pe._init;
            try {
              return An(St(Ze), Y, te);
            } catch {
            }
          }
        }
      return "";
    }
    var Fn = Object.prototype.hasOwnProperty, xn = {}, Br = wt.ReactDebugCurrentFrame;
    function $r(R) {
      if (R) {
        var Y = R._owner, te = An(R.type, R._source, Y ? Y.type : null);
        Br.setExtraStackFrame(te);
      } else
        Br.setExtraStackFrame(null);
    }
    function In(R, Y, te, pe, Ze) {
      {
        var St = Function.call.bind(Fn);
        for (var tt in R)
          if (St(R, tt)) {
            var Me = void 0;
            try {
              if (typeof R[tt] != "function") {
                var Ln = Error((pe || "React class") + ": " + te + " type `" + tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              Me = R[tt](Y, tt, pe, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              Me = en;
            }
            Me && !(Me instanceof Error) && ($r(Ze), ut("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", te, tt, typeof Me), $r(null)), Me instanceof Error && !(Me.message in xn) && (xn[Me.message] = !0, $r(Ze), ut("Failed %s type: %s", te, Me.message), $r(null));
          }
      }
    }
    var vr = Array.isArray;
    function Yr(R) {
      return vr(R);
    }
    function hr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, te = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return te;
      }
    }
    function sa(R) {
      try {
        return er(R), !1;
      } catch {
        return !0;
      }
    }
    function er(R) {
      return "" + R;
    }
    function Ir(R) {
      if (sa(R))
        return ut("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(R)), er(R);
    }
    var pn = wt.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, li, ca, ee;
    ee = {};
    function _e(R) {
      if (Fn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function lt(R) {
      if (Fn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function zt(R, Y) {
      if (typeof R.ref == "string" && pn.current && Y && pn.current.stateNode !== Y) {
        var te = je(pn.current.type);
        ee[te] || (ut('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', je(pn.current.type), R.ref), ee[te] = !0);
      }
    }
    function Ht(R, Y) {
      {
        var te = function() {
          li || (li = !0, ut("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        te.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function _n(R, Y) {
      {
        var te = function() {
          ca || (ca = !0, ut("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        te.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var vn = function(R, Y, te, pe, Ze, St, tt) {
      var Me = {
        $$typeof: q,
        type: R,
        key: Y,
        ref: te,
        props: tt,
        _owner: St
      };
      return Me._store = {}, Object.defineProperty(Me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.defineProperty(Me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ze
      }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
    };
    function mr(R, Y, te, pe, Ze) {
      {
        var St, tt = {}, Me = null, Ln = null;
        te !== void 0 && (Ir(te), Me = "" + te), lt(Y) && (Ir(Y.key), Me = "" + Y.key), _e(Y) && (Ln = Y.ref, zt(Y, Ze));
        for (St in Y)
          Fn.call(Y, St) && !wr.hasOwnProperty(St) && (tt[St] = Y[St]);
        if (R && R.defaultProps) {
          var en = R.defaultProps;
          for (St in en)
            tt[St] === void 0 && (tt[St] = en[St]);
        }
        if (Me || Ln) {
          var tn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Me && Ht(tt, tn), Ln && _n(tt, tn);
        }
        return vn(R, Me, Ln, Ze, pe, pn.current, tt);
      }
    }
    var It = wt.ReactCurrentOwner, br = wt.ReactDebugCurrentFrame;
    function Pt(R) {
      if (R) {
        var Y = R._owner, te = An(R.type, R._source, Y ? Y.type : null);
        br.setExtraStackFrame(te);
      } else
        br.setExtraStackFrame(null);
    }
    var Vt;
    Vt = !1;
    function Wa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === q;
    }
    function ba() {
      {
        if (It.current) {
          var R = je(It.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function al(R) {
      {
        if (R !== void 0) {
          var Y = R.fileName.replace(/^.*[\\\/]/, ""), te = R.lineNumber;
          return `

Check your code at ` + Y + ":" + te + ".";
        }
        return "";
      }
    }
    var Gl = {};
    function ju(R) {
      {
        var Y = ba();
        if (!Y) {
          var te = typeof R == "string" ? R : R.displayName || R.name;
          te && (Y = `

Check the top-level render call using <` + te + ">.");
        }
        return Y;
      }
    }
    function Di(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var te = ju(Y);
        if (Gl[te])
          return;
        Gl[te] = !0;
        var pe = "";
        R && R._owner && R._owner !== It.current && (pe = " It was passed a child from " + je(R._owner.type) + "."), Pt(R), ut('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, pe), Pt(null);
      }
    }
    function il(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var te = 0; te < R.length; te++) {
            var pe = R[te];
            Wa(pe) && Di(pe, Y);
          }
        else if (Wa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ze = ge(R);
          if (typeof Ze == "function" && Ze !== R.entries)
            for (var St = Ze.call(R), tt; !(tt = St.next()).done; )
              Wa(tt.value) && Di(tt.value, Y);
        }
      }
    }
    function fa(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var te;
        if (typeof Y == "function")
          te = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === me || Y.$$typeof === J))
          te = Y.propTypes;
        else
          return;
        if (te) {
          var pe = je(Y);
          In(te, R.props, "prop", pe, R);
        } else if (Y.PropTypes !== void 0 && !Vt) {
          Vt = !0;
          var Ze = je(Y);
          ut("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ze || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && ut("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ui(R) {
      {
        for (var Y = Object.keys(R.props), te = 0; te < Y.length; te++) {
          var pe = Y[te];
          if (pe !== "children" && pe !== "key") {
            Pt(R), ut("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), Pt(null);
            break;
          }
        }
        R.ref !== null && (Pt(R), ut("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    function da(R, Y, te, pe, Ze, St) {
      {
        var tt = Wt(R);
        if (!tt) {
          var Me = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = al(Ze);
          Ln ? Me += Ln : Me += ba();
          var en;
          R === null ? en = "null" : Yr(R) ? en = "array" : R !== void 0 && R.$$typeof === q ? (en = "<" + (je(R.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : en = typeof R, ut("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, Me);
        }
        var tn = mr(R, Y, te, Ze, St);
        if (tn == null)
          return tn;
        if (tt) {
          var tr = Y.children;
          if (tr !== void 0)
            if (pe)
              if (Yr(tr)) {
                for (var ci = 0; ci < tr.length; ci++)
                  il(tr[ci], R);
                Object.freeze && Object.freeze(tr);
              } else
                ut("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              il(tr, R);
        }
        return R === Qe ? ui(tn) : fa(tn), tn;
      }
    }
    function oi(R, Y, te) {
      return da(R, Y, te, !0);
    }
    function xr(R, Y, te) {
      return da(R, Y, te, !1);
    }
    var pa = xr, si = oi;
    qp.Fragment = Qe, qp.jsx = pa, qp.jsxs = si;
  }()), qp;
}
(function($) {
  process.env.NODE_ENV === "production" ? $.exports = sD() : $.exports = cD();
})(y0);
const jm = y0.exports.jsx, fD = y0.exports.jsxs, dD = "_wrapper_16cee_1", pD = "_logo_16cee_10", vD = "_title_16cee_15", v0 = {
  wrapper: dD,
  logo: pD,
  title: vD
}, hD = ({
  title: $
}) => jm("header", {
  children: fD("div", {
    className: v0.wrapper,
    children: [jm("div", {
      children: jm("img", {
        className: v0.logo,
        src: "https://new.bitovi.com/logos/bitovi-logo-red-1.svg"
      })
    }), jm("h1", {
      className: v0.logo,
      children: $
    })]
  })
});
customElements.define(
  "rwc-header",
  oD(hD, eD, iD, {
    props: ["title"]
  })
);
