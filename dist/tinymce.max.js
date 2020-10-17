/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.5 (2019-12-19)
 */
! function(j) {
    "use strict";

    function i() {}
    var q = function(n, r) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n(r.apply(null, e))
            }
        },
        $ = function(e) {
            return function() {
                return e
            }
        },
        W = function(e) {
            return e
        };

    function d(r) {
        for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = o.concat(e);
            return r.apply(null, n)
        }
    }

    function s(n) {
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return !n.apply(null, e)
        }
    }

    function e() {
        return u
    }
    var t, c = $(!1),
        a = $(!0),
        u = (t = {
            fold: function(e, t) {
                return e()
            },
            is: c,
            isSome: c,
            isNone: a,
            getOr: o,
            getOrThunk: r,
            getOrDie: function(e) {
                throw new Error(e || "error: getOrDie called on none.")
            },
            getOrNull: $(null),
            getOrUndefined: $(undefined),
            or: o,
            orThunk: r,
            map: e,
            each: i,
            bind: e,
            exists: c,
            forall: a,
            filter: e,
            equals: n,
            equals_: n,
            toArray: function() {
                return []
            },
            toString: $("none()")
        }, Object.freeze && Object.freeze(t), t);

    function n(e) {
        return e.isNone()
    }

    function r(e) {
        return e()
    }

    function o(e) {
        return e
    }

    function l(t) {
        return function(e) {
            return function(e) {
                if (null === e) return "null";
                var t = typeof e;
                return "object" == t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t
            }(e) === t
        }
    }

    function f(e, t) {
        return O.call(e, t)
    }

    function h(e, t) {
        return -1 < f(e, t)
    }

    function C(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            if (t(e[n], n)) return !0
        }
        return !1
    }

    function z(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            t(e[n], n)
        }
    }

    function y(e, t) {
        for (var n = [], r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            t(i, r) && n.push(i)
        }
        return n
    }

    function m(e, t, n) {
        return function(e, t) {
            for (var n = e.length - 1; 0 <= n; n--) {
                t(e[n], n)
            }
        }(e, function(e) {
            n = t(n, e)
        }), n
    }

    function b(e, t, n) {
        return z(e, function(e) {
            n = t(n, e)
        }), n
    }

    function g(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            var o = e[n];
            if (t(o, n)) return k.some(o)
        }
        return k.none()
    }

    function p(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            if (t(e[n], n)) return k.some(n)
        }
        return k.none()
    }

    function v(e, t) {
        return function(e) {
            for (var t = [], n = 0, r = e.length; n < r; ++n) {
                if (!A(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                H.apply(t, e[n])
            }
            return t
        }(X(e, t))
    }

    function w(e, t) {
        for (var n = 0, r = e.length; n < r; ++n) {
            if (!0 !== t(e[n], n)) return !1
        }
        return !0
    }

    function x(e, t) {
        return y(e, function(e) {
            return !h(t, e)
        })
    }

    function E(e) {
        return 0 === e.length ? k.none() : k.some(e[0])
    }

    function N(e) {
        return 0 === e.length ? k.none() : k.some(e[e.length - 1])
    }
    var S = function(n) {
            function e() {
                return o
            }

            function t(e) {
                return e(n)
            }
            var r = $(n),
                o = {
                    fold: function(e, t) {
                        return t(n)
                    },
                    is: function(e) {
                        return n === e
                    },
                    isSome: a,
                    isNone: c,
                    getOr: r,
                    getOrThunk: r,
                    getOrDie: r,
                    getOrNull: r,
                    getOrUndefined: r,
                    or: e,
                    orThunk: e,
                    map: function(e) {
                        return S(e(n))
                    },
                    each: function(e) {
                        e(n)
                    },
                    bind: t,
                    exists: t,
                    forall: t,
                    filter: function(e) {
                        return e(n) ? o : u
                    },
                    toArray: function() {
                        return [n]
                    },
                    toString: function() {
                        return "some(" + n + ")"
                    },
                    equals: function(e) {
                        return e.is(n)
                    },
                    equals_: function(e, t) {
                        return e.fold(c, function(e) {
                            return t(n, e)
                        })
                    }
                };
            return o
        },
        k = {
            some: S,
            none: e,
            from: function(e) {
                return null === e || e === undefined ? u : S(e)
            }
        },
        K = l("string"),
        T = l("object"),
        A = l("array"),
        M = l("null"),
        R = l("boolean"),
        D = l("function"),
        _ = l("number"),
        B = Array.prototype.slice,
        O = Array.prototype.indexOf,
        H = Array.prototype.push,
        X = function(e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o)
            }
            return r
        },
        Y = function(e, t) {
            for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o];
                (t(a, o) ? n : r).push(a)
            }
            return {
                pass: n,
                fail: r
            }
        },
        P = D(Array.from) ? Array.from : function(e) {
            return B.call(e)
        },
        G = function() {
            return (G = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

    function L(t) {
        return function(e) {
            return !!e && e.nodeType === t
        }
    }

    function V(e) {
        var n = e.map(function(e) {
            return e.toLowerCase()
        });
        return function(e) {
            if (e && e.nodeName) {
                var t = e.nodeName.toLowerCase();
                return h(n, t)
            }
            return !1
        }
    }

    function I(t) {
        return function(e) {
            if (Fe(e)) {
                if (e.contentEditable === t) return !0;
                if (e.getAttribute("data-mce-contenteditable") === t) return !0
            }
            return !1
        }
    }

    function F(e, t) {
        var n = function(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (r.test(t)) return r
            }
            return undefined
        }(e, t);
        if (!n) return {
            major: 0,
            minor: 0
        };

        function r(e) {
            return Number(t.replace(n, "$" + e))
        }
        return Ze(r(1), r(2))
    }

    function U(e, t) {
        return function() {
            return t === e
        }
    }

    function J(e, t) {
        return function() {
            return t === e
        }
    }

    function Q(e, t) {
        var n = String(t).toLowerCase();
        return g(e, function(e) {
            return e.search(n)
        })
    }

    function Z(e, t) {
        return -1 !== e.indexOf(t)
    }

    function ee(e, t) {
        return function(e, t, n) {
            return "" === t || !(e.length < t.length) && e.substr(n, n + t.length) === t
        }(e, t, 0)
    }

    function te(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }

    function ne(e) {
        return e.replace(/\s+$/g, "")
    }

    function re(t) {
        return function(e) {
            return Z(e, t)
        }
    }

    function oe() {
        return pt.get()
    }

    function ie(e) {
        return e.dom().nodeName.toLowerCase()
    }

    function ae(t) {
        return function(e) {
            return function(e) {
                return e.dom().nodeType
            }(e) === t
        }
    }

    function ue(e, t) {
        for (var n = Et(e), r = 0, o = n.length; r < o; r++) {
            var i = n[r];
            t(e[i], i)
        }
    }

    function se(e, n) {
        return St(e, function(e, t) {
            return {
                k: t,
                v: n(e, t)
            }
        })
    }

    function ce(e, n) {
        var r = {},
            o = {};
        return ue(e, function(e, t) {
            (n(e, t) ? r : o)[t] = e
        }), {
            t: r,
            f: o
        }
    }

    function le(e, t) {
        return kt(e, t) ? k.from(e[t]) : k.none()
    }

    function fe(e) {
        return e.style !== undefined && D(e.style.getPropertyValue)
    }

    function de(e) {
        var t = zt(e) ? e.dom().parentNode : e.dom();
        return t !== undefined && null !== t && t.ownerDocument.body.contains(t)
    }

    function he(e, t, n) {
        if (!(K(n) || R(n) || _(n))) throw j.console.error("Invalid call to Attr.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
        e.setAttribute(t, n + "")
    }

    function me(e, t) {
        var n = e.dom();
        ue(t, function(e, t) {
            he(n, t, e)
        })
    }

    function ge(e, t) {
        var n = e.dom().getAttribute(t);
        return null === n ? undefined : n
    }

    function pe(e, t) {
        e.dom().removeAttribute(t)
    }

    function ve(e, t) {
        var n = e.dom(),
            r = j.window.getComputedStyle(n).getPropertyValue(t),
            o = "" !== r || de(e) ? r : At(n, t);
        return null === o ? undefined : o
    }

    function ye(e, t) {
        var n = e.dom(),
            r = At(n, t);
        return k.from(r).filter(function(e) {
            return 0 < e.length
        })
    }

    function be() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function() {
            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
            if (t.length !== n.length) throw new Error('Wrong number of arguments to struct. Expected "[' + t.length + ']", got ' + n.length + " arguments");
            var r = {};
            return z(t, function(e, t) {
                r[e] = $(n[t])
            }), r
        }
    }

    function Ce(e, t, n) {
        return 0 != (e.compareDocumentPosition(t) & n)
    }

    function we(e, t) {
        var n = e.dom();
        if (n.nodeType !== Dt) return !1;
        var r = n;
        if (r.matches !== undefined) return r.matches(t);
        if (r.msMatchesSelector !== undefined) return r.msMatchesSelector(t);
        if (r.webkitMatchesSelector !== undefined) return r.webkitMatchesSelector(t);
        if (r.mozMatchesSelector !== undefined) return r.mozMatchesSelector(t);
        throw new Error("Browser lacks native selectors")
    }

    function xe(e) {
        return e.nodeType !== Dt && e.nodeType !== _t || 0 === e.childElementCount
    }

    function ze(e, t) {
        return e.dom() === t.dom()
    }

    function Ee(e) {
        return yt.fromDom(e.dom().ownerDocument)
    }

    function Ne(e) {
        return yt.fromDom(e.dom().ownerDocument.defaultView)
    }

    function Se(e) {
        return k.from(e.dom().parentNode).map(yt.fromDom)
    }

    function ke(e) {
        return k.from(e.dom().previousSibling).map(yt.fromDom)
    }

    function Te(e) {
        return k.from(e.dom().nextSibling).map(yt.fromDom)
    }

    function Ae(e) {
        return function(e) {
            var t = B.call(e, 0);
            return t.reverse(), t
        }(Mt(e, ke))
    }

    function Me(e) {
        return Mt(e, Te)
    }

    function Re(e) {
        return X(e.dom().childNodes, yt.fromDom)
    }

    function De(e, t) {
        var n = e.dom().childNodes;
        return k.from(n[t]).map(yt.fromDom)
    }

    function _e(e) {
        return De(e, 0)
    }

    function Be(e) {
        return De(e, e.dom().childNodes.length - 1)
    }

    function Oe(e) {
        return g(e, xt)
    }

    function He(e, t) {
        return e.children && h(e.children, t)
    }
    var Pe, Le, Ve, Ie, Fe = L(1),
        Ue = V(["textarea", "input"]),
        je = L(3),
        qe = L(8),
        $e = L(9),
        We = L(11),
        Ke = V(["br"]),
        Xe = I("true"),
        Ye = I("false"),
        Ge = {
            isText: je,
            isElement: Fe,
            isComment: qe,
            isDocument: $e,
            isDocumentFragment: We,
            isBr: Ke,
            isContentEditableTrue: Xe,
            isContentEditableFalse: Ye,
            isRestrictedNode: function(e) {
                return !!e && !Object.getPrototypeOf(e)
            },
            matchNodeNames: V,
            hasPropValue: function(t, n) {
                return function(e) {
                    return Fe(e) && e[t] === n
                }
            },
            hasAttribute: function(t, e) {
                return function(e) {
                    return Fe(e) && e.hasAttribute(t)
                }
            },
            hasAttributeValue: function(t, n) {
                return function(e) {
                    return Fe(e) && e.getAttribute(t) === n
                }
            },
            matchStyleValues: function(r, e) {
                var o = e.toLowerCase().split(" ");
                return function(e) {
                    var t;
                    if (Fe(e))
                        for (t = 0; t < o.length; t++) {
                            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                            if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0
                        }
                    return !1
                }
            },
            isBogus: function(e) {
                return Fe(e) && e.hasAttribute("data-mce-bogus")
            },
            isBogusAll: function(e) {
                return Fe(e) && "all" === e.getAttribute("data-mce-bogus")
            },
            isTable: function(e) {
                return Fe(e) && "TABLE" === e.tagName
            },
            isTextareaOrInput: Ue
        },
        Je = function(e) {
            function t() {
                return n
            }
            var n = e;
            return {
                get: t,
                set: function(e) {
                    n = e
                },
                clone: function() {
                    return Je(t())
                }
            }
        },
        Qe = function() {
            return Ze(0, 0)
        },
        Ze = function(e, t) {
            return {
                major: e,
                minor: t
            }
        },
        et = {
            nu: Ze,
            detect: function(e, t) {
                var n = String(t).toLowerCase();
                return 0 === e.length ? Qe() : F(e, n)
            },
            unknown: Qe
        },
        tt = "Firefox",
        nt = function(e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isEdge: U("Edge", t),
                isChrome: U("Chrome", t),
                isIE: U("IE", t),
                isOpera: U("Opera", t),
                isFirefox: U(tt, t),
                isSafari: U("Safari", t)
            }
        },
        rt = {
            unknown: function() {
                return nt({
                    current: undefined,
                    version: et.unknown()
                })
            },
            nu: nt,
            edge: $("Edge"),
            chrome: $("Chrome"),
            ie: $("IE"),
            opera: $("Opera"),
            firefox: $(tt),
            safari: $("Safari")
        },
        ot = "Windows",
        it = "Android",
        at = "Solaris",
        ut = "FreeBSD",
        st = function(e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isWindows: J(ot, t),
                isiOS: J("iOS", t),
                isAndroid: J(it, t),
                isOSX: J("OSX", t),
                isLinux: J("Linux", t),
                isSolaris: J(at, t),
                isFreeBSD: J(ut, t)
            }
        },
        ct = {
            unknown: function() {
                return st({
                    current: undefined,
                    version: et.unknown()
                })
            },
            nu: st,
            windows: $(ot),
            ios: $("iOS"),
            android: $(it),
            linux: $("Linux"),
            osx: $("OSX"),
            solaris: $(at),
            freebsd: $(ut)
        },
        lt = function(e, n) {
            return Q(e, n).map(function(e) {
                var t = et.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        ft = function(e, n) {
            return Q(e, n).map(function(e) {
                var t = et.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        dt = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        ht = [{
            name: "Edge",
            versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
            search: function(e) {
                return Z(e, "edge/") && Z(e, "chrome") && Z(e, "safari") && Z(e, "applewebkit")
            }
        }, {
            name: "Chrome",
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, dt],
            search: function(e) {
                return Z(e, "chrome") && !Z(e, "chromeframe")
            }
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: function(e) {
                return Z(e, "msie") || Z(e, "trident")
            }
        }, {
            name: "Opera",
            versionRegexes: [dt, /.*?opera\/([0-9]+)\.([0-9]+).*/],
            search: re("opera")
        }, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: re("firefox")
        }, {
            name: "Safari",
            versionRegexes: [dt, /.*?cpu os ([0-9]+)_([0-9]+).*/],
            search: function(e) {
                return (Z(e, "safari") || Z(e, "mobile/")) && Z(e, "applewebkit")
            }
        }],
        mt = [{
            name: "Windows",
            search: re("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: function(e) {
                return Z(e, "iphone") || Z(e, "ipad")
            },
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {
            name: "Android",
            search: re("android"),
            versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "OSX",
            search: re("os x"),
            versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {
            name: "Linux",
            search: re("linux"),
            versionRegexes: []
        }, {
            name: "Solaris",
            search: re("sunos"),
            versionRegexes: []
        }, {
            name: "FreeBSD",
            search: re("freebsd"),
            versionRegexes: []
        }],
        gt = {
            browsers: $(ht),
            oses: $(mt)
        },
        pt = Je(function(e, t) {
            var n = gt.browsers(),
                r = gt.oses(),
                o = lt(n, e).fold(rt.unknown, rt.nu),
                i = ft(r, e).fold(ct.unknown, ct.nu);
            return {
                browser: o,
                os: i,
                deviceType: function(e, t, n, r) {
                    var o = e.isiOS() && !0 === /ipad/i.test(n),
                        i = e.isiOS() && !o,
                        a = e.isiOS() || e.isAndroid(),
                        u = a || r("(pointer:coarse)"),
                        s = o || !i && a && r("(min-device-width:768px)"),
                        c = i || a && !s,
                        l = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n),
                        f = !c && !s && !l;
                    return {
                        isiPad: $(o),
                        isiPhone: $(i),
                        isTablet: $(s),
                        isPhone: $(c),
                        isTouch: $(u),
                        isAndroid: e.isAndroid,
                        isiOS: e.isiOS,
                        isWebView: $(l),
                        isDesktop: $(f)
                    }
                }(i, o, e, t)
            }
        }(j.navigator.userAgent, function(e) {
            return j.window.matchMedia(e).matches
        })),
        vt = function(e) {
            if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
            return {
                dom: $(e)
            }
        },
        yt = {
            fromHtml: function(e, t) {
                var n = (t || j.document).createElement("div");
                if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw j.console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node");
                return vt(n.childNodes[0])
            },
            fromTag: function(e, t) {
                var n = (t || j.document).createElement(e);
                return vt(n)
            },
            fromText: function(e, t) {
                var n = (t || j.document).createTextNode(e);
                return vt(n)
            },
            fromDom: vt,
            fromPoint: function(e, t, n) {
                var r = e.dom();
                return k.from(r.elementFromPoint(t, n)).map(vt)
            }
        },
        bt = (j.Node.ATTRIBUTE_NODE, j.Node.CDATA_SECTION_NODE, j.Node.COMMENT_NODE, j.Node.DOCUMENT_NODE),
        Ct = (j.Node.DOCUMENT_TYPE_NODE, j.Node.DOCUMENT_FRAGMENT_NODE, j.Node.ELEMENT_NODE),
        wt = j.Node.TEXT_NODE,
        xt = (j.Node.PROCESSING_INSTRUCTION_NODE, j.Node.ENTITY_REFERENCE_NODE, j.Node.ENTITY_NODE, j.Node.NOTATION_NODE, "undefined" != typeof j.window ? j.window : Function("return this;")(), ae(Ct)),
        zt = ae(wt),
        Et = Object.keys,
        Nt = Object.hasOwnProperty,
        St = function(e, r) {
            var o = {};
            return ue(e, function(e, t) {
                var n = r(e, t);
                o[n.k] = n.v
            }), o
        },
        kt = function(e, t) {
            return Nt.call(e, t)
        },
        Tt = function(e, t, n) {
            he(e.dom(), t, n)
        },
        At = function(e, t) {
            return fe(e) ? e.style.getPropertyValue(t) : ""
        },
        Mt = function(e, t) {
            for (var n = [], r = function(e) {
                    return n.push(e), t(e)
                }, o = t(e);
                (o = o.bind(r)).isSome(););
            return n
        },
        Rt = function(e, t) {
            return Ce(e, t, j.Node.DOCUMENT_POSITION_CONTAINED_BY)
        },
        Dt = Ct,
        _t = bt,
        Bt = oe().browser.isIE() ? function(e, t) {
            return Rt(e.dom(), t.dom())
        } : function(e, t) {
            var n = e.dom(),
                r = t.dom();
            return n !== r && n.contains(r)
        },
        Ot = (be("element", "offset"), oe().browser),
        Ht = {
            getPos: function(e, t, n) {
                var r, o, i = 0,
                    a = 0,
                    u = e.ownerDocument;
                if (n = n || e, t) {
                    if (n === e && t.getBoundingClientRect && "static" === ve(yt.fromDom(e), "position")) return {
                        x: i = (o = t.getBoundingClientRect()).left + (u.documentElement.scrollLeft || e.scrollLeft) - u.documentElement.clientLeft,
                        y: a = o.top + (u.documentElement.scrollTop || e.scrollTop) - u.documentElement.clientTop
                    };
                    for (r = t; r && r !== n && r.nodeType && !He(r, n);) i += r.offsetLeft || 0, a += r.offsetTop || 0, r = r.offsetParent;
                    for (r = t.parentNode; r && r !== n && r.nodeType && !He(r, n);) i -= r.scrollLeft || 0, a -= r.scrollTop || 0, r = r.parentNode;
                    a += function(e) {
                        return Ot.isFirefox() && "table" === ie(e) ? Oe(Re(e)).filter(function(e) {
                            return "caption" === ie(e)
                        }).bind(function(o) {
                            return Oe(Me(o)).map(function(e) {
                                var t = e.dom().offsetTop,
                                    n = o.dom().offsetTop,
                                    r = o.dom().offsetHeight;
                                return t <= n ? -r : 0
                            })
                        }).getOr(0) : 0
                    }(yt.fromDom(t))
                }
                return {
                    x: i,
                    y: a
                }
            }
        },
        Pt = {},
        Lt = {
            exports: Pt
        };
    Pe = undefined, Le = Pt, Ve = Lt, Ie = undefined,
        function(e) {
            "object" == typeof Le && void 0 !== Ve ? Ve.exports = e() : "function" == typeof Pe && Pe.amd ? Pe([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = e()
        }(function() {
            return function l(i, a, u) {
                function s(t, e) {
                    if (!a[t]) {
                        if (!i[t]) {
                            var n = "function" == typeof Ie && Ie;
                            if (!e && n) return n(t, !0);
                            if (c) return c(t, !0);
                            var r = new Error("Cannot find module '" + t + "'");
                            throw r.code = "MODULE_NOT_FOUND", r
                        }
                        var o = a[t] = {
                            exports: {}
                        };
                        i[t][0].call(o.exports, function(e) {
                            return s(i[t][1][e] || e)
                        }, o, o.exports, l, i, a, u)
                    }
                    return a[t].exports
                }
                for (var c = "function" == typeof Ie && Ie, e = 0; e < u.length; e++) s(u[e]);
                return s
            }({
                1: [function(e, t, n) {
                    var r, o, i = t.exports = {};

                    function a() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function u() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function s(e) {
                        if (r === setTimeout) return setTimeout(e, 0);
                        if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                        try {
                            return r(e, 0)
                        } catch (t) {
                            try {
                                return r.call(null, e, 0)
                            } catch (t) {
                                return r.call(this, e, 0)
                            }
                        }
                    }! function() {
                        try {
                            r = "function" == typeof setTimeout ? setTimeout : a
                        } catch (e) {
                            r = a
                        }
                        try {
                            o = "function" == typeof clearTimeout ? clearTimeout : u
                        } catch (e) {
                            o = u
                        }
                    }();
                    var c, l = [],
                        f = !1,
                        d = -1;

                    function h() {
                        f && c && (f = !1, c.length ? l = c.concat(l) : d = -1, l.length && m())
                    }

                    function m() {
                        if (!f) {
                            var e = s(h);
                            f = !0;
                            for (var t = l.length; t;) {
                                for (c = l, l = []; ++d < t;) c && c[d].run();
                                d = -1, t = l.length
                            }
                            c = null, f = !1,
                                function n(e) {
                                    if (o === clearTimeout) return clearTimeout(e);
                                    if ((o === u || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                                    try {
                                        return o(e)
                                    } catch (t) {
                                        try {
                                            return o.call(null, e)
                                        } catch (t) {
                                            return o.call(this, e)
                                        }
                                    }
                                }(e)
                        }
                    }

                    function g(e, t) {
                        this.fun = e, this.array = t
                    }

                    function p() {}
                    i.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (1 < arguments.length)
                            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        l.push(new g(e, t)), 1 !== l.length || f || s(m)
                    }, g.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
                        return []
                    }, i.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }, i.cwd = function() {
                        return "/"
                    }, i.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }, i.umask = function() {
                        return 0
                    }
                }, {}],
                2: [function(e, f, t) {
                    (function(t) {
                        function r() {}

                        function i(e) {
                            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof e) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], l(e, this)
                        }

                        function o(r, o) {
                            for (; 3 === r._state;) r = r._value;
                            0 !== r._state ? (r._handled = !0, i._immediateFn(function() {
                                var e = 1 === r._state ? o.onFulfilled : o.onRejected;
                                if (null !== e) {
                                    var t;
                                    try {
                                        t = e(r._value)
                                    } catch (n) {
                                        return void u(o.promise, n)
                                    }
                                    a(o.promise, t)
                                } else(1 === r._state ? a : u)(o.promise, r._value)
                            })) : r._deferreds.push(o)
                        }

                        function a(e, t) {
                            try {
                                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                                if (t && ("object" == typeof t || "function" == typeof t)) {
                                    var n = t.then;
                                    if (t instanceof i) return e._state = 3, e._value = t, void s(e);
                                    if ("function" == typeof n) return void l(function r(e, t) {
                                        return function() {
                                            e.apply(t, arguments)
                                        }
                                    }(n, t), e)
                                }
                                e._state = 1, e._value = t, s(e)
                            } catch (o) {
                                u(e, o)
                            }
                        }

                        function u(e, t) {
                            e._state = 2, e._value = t, s(e)
                        }

                        function s(e) {
                            2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                                e._handled || i._unhandledRejectionFn(e._value)
                            });
                            for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                            e._deferreds = null
                        }

                        function c(e, t, n) {
                            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                        }

                        function l(e, t) {
                            var n = !1;
                            try {
                                e(function(e) {
                                    n || (n = !0, a(t, e))
                                }, function(e) {
                                    n || (n = !0, u(t, e))
                                })
                            } catch (r) {
                                if (n) return;
                                n = !0, u(t, r)
                            }
                        }
                        var e, n;
                        e = this, n = setTimeout, i.prototype["catch"] = function(e) {
                            return this.then(null, e)
                        }, i.prototype.then = function(e, t) {
                            var n = new this.constructor(r);
                            return o(this, new c(e, t, n)), n
                        }, i.all = function(e) {
                            var s = Array.prototype.slice.call(e);
                            return new i(function(o, i) {
                                if (0 === s.length) return o([]);
                                var a = s.length;

                                function u(t, e) {
                                    try {
                                        if (e && ("object" == typeof e || "function" == typeof e)) {
                                            var n = e.then;
                                            if ("function" == typeof n) return void n.call(e, function(e) {
                                                u(t, e)
                                            }, i)
                                        }
                                        s[t] = e, 0 == --a && o(s)
                                    } catch (r) {
                                        i(r)
                                    }
                                }
                                for (var e = 0; e < s.length; e++) u(e, s[e])
                            })
                        }, i.resolve = function(t) {
                            return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
                                e(t)
                            })
                        }, i.reject = function(n) {
                            return new i(function(e, t) {
                                t(n)
                            })
                        }, i.race = function(o) {
                            return new i(function(e, t) {
                                for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
                            })
                        }, i._immediateFn = "function" == typeof t ? function(e) {
                            t(e)
                        } : function(e) {
                            n(e, 0)
                        }, i._unhandledRejectionFn = function(e) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                        }, i._setImmediateFn = function(e) {
                            i._immediateFn = e
                        }, i._setUnhandledRejectionFn = function(e) {
                            i._unhandledRejectionFn = e
                        }, void 0 !== f && f.exports ? f.exports = i : e.Promise || (e.Promise = i)
                    }).call(this, e("timers").setImmediate)
                }, {
                    timers: 3
                }],
                3: [function(s, e, c) {
                    (function(e, t) {
                        var r = s("process/browser.js").nextTick,
                            n = Function.prototype.apply,
                            o = Array.prototype.slice,
                            i = {},
                            a = 0;

                        function u(e, t) {
                            this._id = e, this._clearFn = t
                        }
                        c.setTimeout = function() {
                            return new u(n.call(setTimeout, window, arguments), clearTimeout)
                        }, c.setInterval = function() {
                            return new u(n.call(setInterval, window, arguments), clearInterval)
                        }, c.clearTimeout = c.clearInterval = function(e) {
                            e.close()
                        }, u.prototype.unref = u.prototype.ref = function() {}, u.prototype.close = function() {
                            this._clearFn.call(window, this._id)
                        }, c.enroll = function(e, t) {
                            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                        }, c.unenroll = function(e) {
                            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                        }, c._unrefActive = c.active = function(e) {
                            clearTimeout(e._idleTimeoutId);
                            var t = e._idleTimeout;
                            0 <= t && (e._idleTimeoutId = setTimeout(function() {
                                e._onTimeout && e._onTimeout()
                            }, t))
                        }, c.setImmediate = "function" == typeof e ? e : function(e) {
                            var t = a++,
                                n = !(arguments.length < 2) && o.call(arguments, 1);
                            return i[t] = !0, r(function() {
                                i[t] && (n ? e.apply(null, n) : e.call(null), c.clearImmediate(t))
                            }), t
                        }, c.clearImmediate = "function" == typeof t ? t : function(e) {
                            delete i[e]
                        }
                    }).call(this, s("timers").setImmediate, s("timers").clearImmediate)
                }, {
                    "process/browser.js": 1,
                    timers: 3
                }],
                4: [function(e, t, n) {
                    var r = e("promise-polyfill"),
                        o = "undefined" != typeof window ? window : Function("return this;")();
                    t.exports = {
                        boltExport: o.Promise || r
                    }
                }, {
                    "promise-polyfill": 2
                }]
            }, {}, [4])(4)
        });

    function Vt(e) {
        j.setTimeout(function() {
            throw e
        }, 0)
    }

    function It(i, e) {
        return e(function(n) {
            var r = [],
                o = 0;
            0 === i.length ? n([]) : z(i, function(e, t) {
                e.get(function(t) {
                    return function(e) {
                        r[t] = e, ++o >= i.length && n(r)
                    }
                }(t))
            })
        })
    }
    var Ft, Ut, jt, qt = Lt.exports.boltExport,
        $t = function(e) {
            var n = k.none(),
                t = [],
                r = function(e) {
                    o() ? a(e) : t.push(e)
                },
                o = function() {
                    return n.isSome()
                },
                i = function(e) {
                    z(e, a)
                },
                a = function(t) {
                    n.each(function(e) {
                        j.setTimeout(function() {
                            t(e)
                        }, 0)
                    })
                };
            return e(function(e) {
                n = k.some(e), i(t), t = []
            }), {
                get: r,
                map: function(n) {
                    return $t(function(t) {
                        r(function(e) {
                            t(n(e))
                        })
                    })
                },
                isReady: o
            }
        },
        Wt = {
            nu: $t,
            pure: function(t) {
                return $t(function(e) {
                    e(t)
                })
            }
        },
        Kt = function(n) {
            function e(e) {
                n().then(e, Vt)
            }
            return {
                map: function(e) {
                    return Kt(function() {
                        return n().then(e)
                    })
                },
                bind: function(t) {
                    return Kt(function() {
                        return n().then(function(e) {
                            return t(e).toPromise()
                        })
                    })
                },
                anonBind: function(e) {
                    return Kt(function() {
                        return n().then(function() {
                            return e.toPromise()
                        })
                    })
                },
                toLazy: function() {
                    return Wt.nu(e)
                },
                toCached: function() {
                    var e = null;
                    return Kt(function() {
                        return null === e && (e = n()), e
                    })
                },
                toPromise: n,
                get: e
            }
        },
        Xt = {
            nu: function(e) {
                return Kt(function() {
                    return new qt(e)
                })
            },
            pure: function(e) {
                return Kt(function() {
                    return qt.resolve(e)
                })
            }
        },
        Yt = function(e) {
            return It(e, Xt.nu)
        },
        Gt = function(n) {
            return {
                is: function(e) {
                    return n === e
                },
                isValue: a,
                isError: c,
                getOr: $(n),
                getOrThunk: $(n),
                getOrDie: $(n),
                or: function(e) {
                    return Gt(n)
                },
                orThunk: function(e) {
                    return Gt(n)
                },
                fold: function(e, t) {
                    return t(n)
                },
                map: function(e) {
                    return Gt(e(n))
                },
                mapError: function(e) {
                    return Gt(n)
                },
                each: function(e) {
                    e(n)
                },
                bind: function(e) {
                    return e(n)
                },
                exists: function(e) {
                    return e(n)
                },
                forall: function(e) {
                    return e(n)
                },
                toOption: function() {
                    return k.some(n)
                }
            }
        },
        Jt = function(n) {
            return {
                is: c,
                isValue: c,
                isError: a,
                getOr: W,
                getOrThunk: function(e) {
                    return e()
                },
                getOrDie: function() {
                    return function(e) {
                        return function() {
                            throw new Error(e)
                        }
                    }(String(n))()
                },
                or: function(e) {
                    return e
                },
                orThunk: function(e) {
                    return e()
                },
                fold: function(e, t) {
                    return e(n)
                },
                map: function(e) {
                    return Jt(n)
                },
                mapError: function(e) {
                    return Jt(e(n))
                },
                each: i,
                bind: function(e) {
                    return Jt(n)
                },
                exists: c,
                forall: a,
                toOption: k.none
            }
        },
        Qt = {
            value: Gt,
            error: Jt,
            fromOption: function(e, t) {
                return e.fold(function() {
                    return Jt(t)
                }, Gt)
            }
        },
        Zt = window.Promise ? window.Promise : (Ft = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, Ut = tn.immediateFn || "function" == typeof j.setImmediate && j.setImmediate || function(e) {
            j.setTimeout(e, 1)
        }, tn.prototype["catch"] = function(e) {
            return this.then(null, e)
        }, tn.prototype.then = function(n, r) {
            var o = this;
            return new tn(function(e, t) {
                nn.call(o, new un(n, r, e, t))
            })
        }, tn.all = function() {
            var s = Array.prototype.slice.call(1 === arguments.length && Ft(arguments[0]) ? arguments[0] : arguments);
            return new tn(function(o, i) {
                if (0 === s.length) return o([]);
                var a = s.length;

                function u(t, e) {
                    try {
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if ("function" == typeof n) return void n.call(e, function(e) {
                                u(t, e)
                            }, i)
                        }
                        s[t] = e, 0 == --a && o(s)
                    } catch (r) {
                        i(r)
                    }
                }
                for (var e = 0; e < s.length; e++) u(e, s[e])
            })
        }, tn.resolve = function(t) {
            return t && "object" == typeof t && t.constructor === tn ? t : new tn(function(e) {
                e(t)
            })
        }, tn.reject = function(n) {
            return new tn(function(e, t) {
                t(n)
            })
        }, tn.race = function(o) {
            return new tn(function(e, t) {
                for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
            })
        }, tn);

    function en(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    }

    function tn(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = null, this._value = null, this._deferreds = [], sn(e, en(rn, this), en(on, this))
    }

    function nn(r) {
        var o = this;
        null !== this._state ? Ut(function() {
            var e = o._state ? r.onFulfilled : r.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(o._value)
                } catch (n) {
                    return void r.reject(n)
                }
                r.resolve(t)
            } else(o._state ? r.resolve : r.reject)(o._value)
        }) : this._deferreds.push(r)
    }

    function rn(e) {
        try {
            if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var t = e.then;
                if ("function" == typeof t) return void sn(en(t, e), en(rn, this), en(on, this))
            }
            this._state = !0, this._value = e, an.call(this)
        } catch (n) {
            on.call(this, n)
        }
    }

    function on(e) {
        this._state = !1, this._value = e, an.call(this)
    }

    function an() {
        for (var e = 0, t = this._deferreds.length; e < t; e++) nn.call(this, this._deferreds[e]);
        this._deferreds = null
    }

    function un(e, t, n, r) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
    }

    function sn(e, t, n) {
        var r = !1;
        try {
            e(function(e) {
                r || (r = !0, t(e))
            }, function(e) {
                r || (r = !0, n(e))
            })
        } catch (o) {
            if (r) return;
            r = !0, n(o)
        }
    }

    function cn(e, t) {
        return "number" != typeof t && (t = 0), j.setTimeout(e, t)
    }

    function ln(e, t) {
        return "number" != typeof t && (t = 1), j.setInterval(e, t)
    }

    function fn(n, r) {
        var o, e;
        return (e = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            j.clearTimeout(o), o = cn(function() {
                n.apply(this, e)
            }, r)
        }).stop = function() {
            j.clearTimeout(o)
        }, e
    }

    function dn(e, t, n) {
        var r, o;
        if (!e) return 0;
        if (n = n || e, e.length !== undefined) {
            for (r = 0, o = e.length; r < o; r++)
                if (!1 === t.call(n, e[r], r, e)) return 0
        } else
            for (r in e)
                if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return 0; return 1
    }

    function hn(e, t, n) {
        var r, o;
        for (r = 0, o = e.length; r < o; r++)
            if (t.call(n, e[r], r, e)) return r;
        return -1
    }

    function mn(e) {
        return null === e || e === undefined ? "" : ("" + e).replace(Tn, "")
    }

    function gn(e, t) {
        return t ? !("array" !== t || !kn.isArray(e)) || typeof e === t : e !== undefined
    }
    var pn = {
            requestAnimationFrame: function(e, t) {
                jt ? jt.then(e) : jt = new Zt(function(e) {
                    ! function(e, t) {
                        var n, r = j.window.requestAnimationFrame,
                            o = ["ms", "moz", "webkit"];
                        for (n = 0; n < o.length && !r; n++) r = j.window[o[n] + "RequestAnimationFrame"];
                        (r = r || function(e) {
                            j.window.setTimeout(e, 0)
                        })(e, t)
                    }(e, t = t || j.document.body)
                }).then(e)
            },
            setTimeout: cn,
            setInterval: ln,
            setEditorTimeout: function(e, t, n) {
                return cn(function() {
                    e.removed || t()
                }, n)
            },
            setEditorInterval: function(e, t, n) {
                var r;
                return r = ln(function() {
                    e.removed ? j.clearInterval(r) : t()
                }, n)
            },
            debounce: fn,
            throttle: fn,
            clearInterval: function(e) {
                return j.clearInterval(e)
            },
            clearTimeout: function(e) {
                return j.clearTimeout(e)
            }
        },
        vn = j.navigator.userAgent,
        yn = oe(),
        bn = yn.browser,
        Cn = yn.os,
        wn = yn.deviceType,
        xn = /WebKit/.test(vn) && !bn.isEdge(),
        zn = "FormData" in j.window && "FileReader" in j.window && "URL" in j.window && !!j.URL.createObjectURL,
        En = -1 !== vn.indexOf("Windows Phone"),
        Nn = {
            opera: bn.isOpera(),
            webkit: xn,
            ie: !(!bn.isIE() && !bn.isEdge()) && bn.version.major,
            gecko: bn.isFirefox(),
            mac: Cn.isOSX() || Cn.isiOS(),
            iOS: wn.isiPad() || wn.isiPhone(),
            android: Cn.isAndroid(),
            contentEditable: !0,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: !0,
            range: j.window.getSelection && "Range" in j.window,
            documentMode: bn.isIE() ? j.document.documentMode || 7 : 10,
            fileApi: zn,
            ceFalse: !0,
            cacheSuffix: null,
            container: null,
            experimentalShadowDom: !1,
            canHaveCSP: !bn.isIE(),
            desktop: wn.isDesktop(),
            windowsPhone: En,
            browser: {
                current: bn.current,
                version: bn.version,
                isChrome: bn.isChrome,
                isEdge: bn.isEdge,
                isFirefox: bn.isFirefox,
                isIE: bn.isIE,
                isOpera: bn.isOpera,
                isSafari: bn.isSafari
            },
            os: {
                current: Cn.current,
                version: Cn.version,
                isAndroid: Cn.isAndroid,
                isFreeBSD: Cn.isFreeBSD,
                isiOS: Cn.isiOS,
                isLinux: Cn.isLinux,
                isOSX: Cn.isOSX,
                isSolaris: Cn.isSolaris,
                isWindows: Cn.isWindows
            },
            deviceType: {
                isDesktop: wn.isDesktop,
                isiPad: wn.isiPad,
                isiPhone: wn.isiPhone,
                isPhone: wn.isPhone,
                isTablet: wn.isTablet,
                isTouch: wn.isTouch,
                isWebView: wn.isWebView
            }
        },
        Sn = Array.isArray,
        kn = {
            isArray: Sn,
            toArray: function(e) {
                var t, n, r = e;
                if (!Sn(e))
                    for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
                return r
            },
            each: dn,
            map: function(n, r) {
                var o = [];
                return dn(n, function(e, t) {
                    o.push(r(e, t, n))
                }), o
            },
            filter: function(n, r) {
                var o = [];
                return dn(n, function(e, t) {
                    r && !r(e, t, n) || o.push(e)
                }), o
            },
            indexOf: function(e, t) {
                var n, r;
                if (e)
                    for (n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                return -1
            },
            reduce: function(e, t, n, r) {
                var o = 0;
                for (arguments.length < 3 && (n = e[0]); o < e.length; o++) n = t.call(r, n, e[o], o);
                return n
            },
            findIndex: hn,
            find: function(e, t, n) {
                var r = hn(e, t, n);
                return -1 !== r ? e[r] : undefined
            },
            last: function(e) {
                return e[e.length - 1]
            }
        },
        Tn = /^\s*|\s*$/g,
        An = function(e, n, r, o) {
            o = o || this, e && (r && (e = e[r]), kn.each(e, function(e, t) {
                if (!1 === n.call(o, e, t, r)) return !1;
                An(e, n, r, o)
            }))
        },
        Mn = {
            trim: mn,
            isArray: kn.isArray,
            is: gn,
            toArray: kn.toArray,
            makeMap: function(e, t, n) {
                var r;
                for (t = t || ",", "string" == typeof(e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
                return n
            },
            each: kn.each,
            map: kn.map,
            grep: kn.filter,
            inArray: kn.indexOf,
            hasOwn: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            extend: function(e, t) {
                for (var n, r, o, i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
                var u, s = arguments;
                for (n = 1, r = s.length; n < r; n++)
                    for (o in t = s[n]) t.hasOwnProperty(o) && (u = t[o]) !== undefined && (e[o] = u);
                return e
            },
            create: function(e, t, n) {
                var r, o, i, a, u, s = this,
                    c = 0;
                if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), i = e[3].match(/(^|\.)(\w+)$/i)[2], !(o = s.createNS(e[3].replace(/\.\w+$/, ""), n))[i]) {
                    if ("static" === e[2]) return o[i] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[i]));
                    t[i] || (t[i] = function() {}, c = 1), o[i] = t[i], s.extend(o[i].prototype, t), e[5] && (r = s.resolve(e[5]).prototype, a = e[5].match(/\.(\w+)$/i)[1], u = o[i], o[i] = c ? function() {
                        return r[a].apply(this, arguments)
                    } : function() {
                        return this.parent = r[a], u.apply(this, arguments)
                    }, o[i].prototype[i] = o[i], s.each(r, function(e, t) {
                        o[i].prototype[t] = r[t]
                    }), s.each(t, function(e, t) {
                        r[t] ? o[i].prototype[t] = function() {
                            return this.parent = r[t], e.apply(this, arguments)
                        } : t !== i && (o[i].prototype[t] = e)
                    })), s.each(t["static"], function(e, t) {
                        o[i][t] = e
                    })
                }
            },
            walk: An,
            createNS: function(e, t) {
                var n, r;
                for (t = t || j.window, e = e.split("."), n = 0; n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r];
                return t
            },
            resolve: function(e, t) {
                var n, r;
                for (t = t || j.window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++);
                return t
            },
            explode: function(e, t) {
                return !e || gn(e, "array") ? e : kn.map(e.split(t || ","), mn)
            },
            _addCacheSuffix: function(e) {
                var t = Nn.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }
        };

    function Rn(t) {
        var n;
        return function(e) {
            return (n = n || function(e, t) {
                for (var n = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    n[String(i)] = t(i, r)
                }
                return n
            }(t, $(!0))).hasOwnProperty(ie(e))
        }
    }

    function Dn(e) {
        return xt(e) && !Vn(e)
    }

    function _n(e) {
        return xt(e) && "br" === ie(e)
    }

    function Bn(e) {
        return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
    }
    var On, Hn, Pn, Ln = Rn(["h1", "h2", "h3", "h4", "h5", "h6"]),
        Vn = Rn(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        In = Rn(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        Fn = Rn(["ul", "ol", "dl"]),
        Un = Rn(["li", "dd", "dt"]),
        jn = Rn(["area", "base", "basefont", "br", "col", "frame", "hr", "img", "input", "isindex", "link", "meta", "param", "embed", "source", "wbr", "track"]),
        qn = Rn(["thead", "tbody", "tfoot"]),
        $n = Rn(["td", "th"]),
        Wn = Rn(["pre", "script", "textarea", "style"]),
        Kn = function(e, t) {
            var n, r = t.childNodes;
            if (!Ge.isElement(t) || !Bn(t)) {
                for (n = r.length - 1; 0 <= n; n--) Kn(e, r[n]);
                if (!1 === Ge.isDocument(t)) {
                    if (Ge.isText(t) && 0 < t.nodeValue.length) {
                        var o = Mn.trim(t.nodeValue).length;
                        if (e.isBlock(t.parentNode) || 0 < o) return;
                        if (0 === o && function(e) {
                                var t = e.previousSibling && "SPAN" === e.previousSibling.nodeName,
                                    n = e.nextSibling && "SPAN" === e.nextSibling.nodeName;
                                return t && n
                            }(t)) return
                    } else if (Ge.isElement(t) && (1 === (r = t.childNodes).length && Bn(r[0]) && t.parentNode.insertBefore(r[0], t), r.length || jn(yt.fromDom(t)))) return;
                    e.remove(t)
                }
                return t
            }
        },
        Xn = {
            trimNode: Kn
        },
        Yn = Mn.makeMap,
        Gn = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Jn = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Qn = /[<>&\"\']/g,
        Zn = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        er = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        };
    Hn = {
        '"': "&quot;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "`": "&#96;"
    }, Pn = {
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'"
    };

    function tr(e, t) {
        var n, r, o, i = {};
        if (e) {
            for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), Hn[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r);
            return i
        }
    }
    On = tr("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);

    function nr(e, t) {
        return e.replace(t ? Gn : Jn, function(e) {
            return Hn[e] || e
        })
    }

    function rr(e, t) {
        return e.replace(t ? Gn : Jn, function(e) {
            return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : Hn[e] || "&#" + e.charCodeAt(0) + ";"
        })
    }

    function or(e, t, n) {
        return n = n || On, e.replace(t ? Gn : Jn, function(e) {
            return Hn[e] || n[e] || e
        })
    }
    var ir = {
            encodeRaw: nr,
            encodeAllRaw: function(e) {
                return ("" + e).replace(Qn, function(e) {
                    return Hn[e] || e
                })
            },
            encodeNumeric: rr,
            encodeNamed: or,
            getEncodeFunc: function(e, t) {
                var n = tr(t) || On,
                    r = Yn(e.replace(/\+/g, ","));
                return r.named && r.numeric ? function(e, t) {
                    return e.replace(t ? Gn : Jn, function(e) {
                        return Hn[e] !== undefined ? Hn[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";"
                    })
                } : r.named ? t ? function(e, t) {
                    return or(e, t, n)
                } : or : r.numeric ? rr : nr
            },
            decode: function(e) {
                return e.replace(Zn, function(e, t) {
                    return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : er[t] || String.fromCharCode(t) : Pn[e] || On[e] || function(e) {
                        var t;
                        return (t = yt.fromTag("div").dom()).innerHTML = e, t.textContent || t.innerText || e
                    }(e)
                })
            }
        },
        ar = {},
        ur = {},
        sr = Mn.makeMap,
        cr = Mn.each,
        lr = Mn.extend,
        fr = Mn.explode,
        dr = Mn.inArray,
        hr = function(e, t) {
            return (e = Mn.trim(e)) ? e.split(t || " ") : []
        },
        mr = function(e) {
            function t(e, t, n) {
                function r(e, t) {
                    var n, r, o = {};
                    for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
                    return o
                }
                var o, i, a;
                for (t = t || "", "string" == typeof(n = n || []) && (n = hr(n)), o = (e = hr(e)).length; o--;) a = {
                    attributes: r(i = hr([u, t].join(" "))),
                    attributesOrder: i,
                    children: r(n, ur)
                }, c[e[o]] = a
            }

            function n(e, t) {
                var n, r, o, i;
                for (n = (e = hr(e)).length, t = hr(t); n--;)
                    for (r = c[e[n]], o = 0, i = t.length; o < i; o++) r.attributes[t[o]] = {}, r.attributesOrder.push(t[o])
            }
            var u, r, o, i, a, s, c = {};
            return ar[e] ? ar[e] : (u = "id accesskey class dir lang style tabindex title role", r = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", o = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (u += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", r += " article aside details dialog figure main header footer hgroup section nav", o += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (u += " xml:lang", o = [o, s = "acronym applet basefont big font strike tt"].join(" "), cr(hr(s), function(e) {
                t(e, "", o)
            }), r = [r, a = "center dir isindex noframes"].join(" "), i = [r, o].join(" "), cr(hr(a), function(e) {
                t(e, "", i)
            })), i = i || [r, o].join(" "), t("html", "manifest", "head body"), t("head", "", "base command link meta noscript script style title"), t("title hr noscript br"), t("base", "href target"), t("link", "href rel media hreflang type sizes hreflang"), t("meta", "name http-equiv content charset"), t("style", "media type scoped"), t("script", "src async defer type charset"), t("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", i), t("address dt dd div caption", "", i), t("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", o), t("blockquote", "cite", i), t("ol", "reversed start type", "li"), t("ul", "", "li"), t("li", "value", i), t("dl", "", "dt dd"), t("a", "href target rel media hreflang type", o), t("q", "cite", o), t("ins del", "cite datetime", i), t("img", "src sizes srcset alt usemap ismap width height"), t("iframe", "src name width height", i), t("embed", "src type width height"), t("object", "data type typemustmatch name usemap form width height", [i, "param"].join(" ")), t("param", "name value"), t("map", "name", [i, "area"].join(" ")), t("area", "alt coords shape href target rel media hreflang type"), t("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), t("colgroup", "span", "col"), t("col", "span"), t("tbody thead tfoot", "", "tr"), t("tr", "", "td th"), t("td", "colspan rowspan headers", i), t("th", "colspan rowspan headers scope abbr", i), t("form", "accept-charset action autocomplete enctype method name novalidate target", i), t("fieldset", "disabled form name", [i, "legend"].join(" ")), t("label", "form for", o), t("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), t("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? i : o), t("select", "disabled form multiple name required size", "option optgroup"), t("optgroup", "disabled label", "option"), t("option", "disabled label selected value"), t("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), t("menu", "type label", [i, "li"].join(" ")), t("noscript", "", i), "html4" !== e && (t("wbr"), t("ruby", "", [o, "rt rp"].join(" ")), t("figcaption", "", i), t("mark rt rp summary bdi", "", o), t("canvas", "width height", i), t("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [i, "track source"].join(" ")), t("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [i, "track source"].join(" ")), t("picture", "", "img source"), t("source", "src srcset type media sizes"), t("track", "kind src srclang label default"), t("datalist", "", [o, "option"].join(" ")), t("article section nav aside main header footer", "", i), t("hgroup", "", "h1 h2 h3 h4 h5 h6"), t("figure", "", [i, "figcaption"].join(" ")), t("time", "datetime", o), t("dialog", "open", i), t("command", "type label icon disabled checked radiogroup command"), t("output", "for form name", o), t("progress", "value max", o), t("meter", "value min max low high optimum", o), t("details", "open", [i, "summary"].join(" ")), t("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (n("script", "language xml:space"), n("style", "xml:space"), n("object", "declare classid code codebase codetype archive standby align border hspace vspace"), n("embed", "align name hspace vspace"), n("param", "valuetype type"), n("a", "charset name rev shape coords"), n("br", "clear"), n("applet", "codebase archive code object alt name width height align hspace vspace"), n("img", "name longdesc align border hspace vspace"), n("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), n("font basefont", "size color face"), n("input", "usemap align"), n("select", "onchange"), n("textarea"), n("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), n("ul", "type compact"), n("li", "type"), n("ol dl menu dir", "compact"), n("pre", "width xml:space"), n("hr", "align noshade size width"), n("isindex", "prompt"), n("table", "summary width frame rules cellspacing cellpadding align bgcolor"), n("col", "width align char charoff valign"), n("colgroup", "width align char charoff valign"), n("thead", "align char charoff valign"), n("tr", "align char charoff valign bgcolor"), n("th", "axis align char charoff valign nowrap bgcolor width height"), n("form", "accept"), n("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), n("tfoot", "align char charoff valign"), n("tbody", "align char charoff valign"), n("area", "nohref"), n("body", "background bgcolor text link vlink alink")), "html4" !== e && (n("input button select textarea", "autofocus"), n("input textarea", "placeholder"), n("a", "download"), n("link script img", "crossorigin"), n("iframe", "sandbox seamless allowfullscreen")), cr(hr("a form meter progress dfn"), function(e) {
                c[e] && delete c[e].children[e]
            }), delete c.caption.children.table, delete c.script, ar[e] = c)
        },
        gr = function(e, n) {
            var r;
            return e && (r = {}, "string" == typeof e && (e = {
                "*": e
            }), cr(e, function(e, t) {
                r[t] = r[t.toUpperCase()] = "map" === n ? sr(e, /[, ]/) : fr(e, /[, ]/)
            })), r
        };

    function pr(i) {
        function e(e, t, n) {
            var r = i[e];
            return r ? r = sr(r, /[, ]/, sr(r.toUpperCase(), /[, ]/)) : (r = ar[e]) || (r = sr(t, " ", sr(t.toUpperCase(), " ")), r = lr(r, n), ar[e] = r), r
        }
        var t, n, r, o, a, u, s, c, l, f, d, h, m, z = {},
            g = {},
            E = [],
            p = {},
            v = {};
        r = mr((i = i || {}).schema), !1 === i.verify_html && (i.valid_elements = "*[*]"), t = gr(i.valid_styles), n = gr(i.invalid_styles, "map"), c = gr(i.valid_classes, "map"), o = e("whitespace_elements", "pre script noscript style textarea video audio iframe object code"), a = e("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), u = e("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), s = e("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), f = e("non_empty_elements", "td th iframe video audio object script pre code", u), d = e("move_caret_before_on_enter_elements", "table", f), h = e("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"), l = e("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", h), m = e("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), cr((i.special || "script noscript noframes noembed title style textarea xmp").split(" "), function(e) {
            v[e] = new RegExp("</" + e + "[^>]*>", "gi")
        });

        function N(e) {
            return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
        }

        function y(e) {
            var t, n, r, o, i, a, u, s, c, l, f, d, h, m, g, p, v, y, b, C = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                w = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                x = /[*?+]/;
            if (e)
                for (e = hr(e, ","), z["@"] && (p = z["@"].attributes, v = z["@"].attributesOrder), t = 0, n = e.length; t < n; t++)
                    if (i = C.exec(e[t])) {
                        if (m = i[1], c = i[2], g = i[3], s = i[5], a = {
                                attributes: d = {},
                                attributesOrder: h = []
                            }, "#" === m && (a.paddEmpty = !0), "-" === m && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), p) {
                            for (y in p) d[y] = p[y];
                            h.push.apply(h, v)
                        }
                        if (s)
                            for (r = 0, o = (s = hr(s, "|")).length; r < o; r++)
                                if (i = w.exec(s[r])) {
                                    if (u = {}, f = i[1], l = i[2].replace(/[\\:]:/g, ":"), m = i[3], b = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(l), u.required = !0), "-" === f) {
                                        delete d[l], h.splice(dr(h, l), 1);
                                        continue
                                    }
                                    m && ("=" === m && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({
                                        name: l,
                                        value: b
                                    }), u.defaultValue = b), ":" === m && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({
                                        name: l,
                                        value: b
                                    }), u.forcedValue = b), "<" === m && (u.validValues = sr(b, "?"))), x.test(l) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = N(l), a.attributePatterns.push(u)) : (d[l] || h.push(l), d[l] = u)
                                }
                        p || "@" !== c || (p = d, v = h), g && (a.outputName = c, z[g] = a), x.test(c) ? (a.pattern = N(c), E.push(a)) : z[c] = a
                    }
        }

        function b(e) {
            z = {}, E = [], y(e), cr(r, function(e, t) {
                g[t] = e.children
            })
        }

        function C(e) {
            var a = /^(~)?(.+)$/;
            e && (ar.text_block_elements = ar.block_elements = null, cr(hr(e, ","), function(e) {
                var t = a.exec(e),
                    n = "~" === t[1],
                    r = n ? "span" : "div",
                    o = t[2];
                if (g[o] = g[r], p[o] = r, n || (l[o.toUpperCase()] = {}, l[o] = {}), !z[o]) {
                    var i = z[r];
                    delete(i = lr({}, i)).removeEmptyAttrs, delete i.removeEmpty, z[o] = i
                }
                cr(g, function(e, t) {
                    e[r] && (g[t] = e = lr({}, g[t]), e[o] = e[r])
                })
            }))
        }

        function w(e) {
            var o = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
            ar[i.schema] = null, e && cr(hr(e, ","), function(e) {
                var t, n, r = o.exec(e);
                r && (n = r[1], t = n ? g[r[2]] : g[r[2]] = {
                    "#comment": {}
                }, t = g[r[2]], cr(hr(r[3], "|"), function(e) {
                    "-" === n ? delete t[e] : t[e] = {}
                }))
            })
        }

        function x(e) {
            var t, n = z[e];
            if (n) return n;
            for (t = E.length; t--;)
                if ((n = E[t]).pattern.test(e)) return n
        }
        i.valid_elements ? b(i.valid_elements) : (cr(r, function(e, t) {
            z[t] = {
                attributes: e.attributes,
                attributesOrder: e.attributesOrder
            }, g[t] = e.children
        }), "html5" !== i.schema && cr(hr("strong/b em/i"), function(e) {
            e = hr(e, "/"), z[e[1]].outputName = e[0]
        }), cr(hr("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function(e) {
            z[e] && (z[e].removeEmpty = !0)
        }), cr(hr("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function(e) {
            z[e].paddEmpty = !0
        }), cr(hr("span"), function(e) {
            z[e].removeEmptyAttrs = !0
        })), C(i.custom_elements), w(i.valid_children), y(i.extended_valid_elements), w("+ol[ul|ol],+ul[ul|ol]"), cr({
            dd: "dl",
            dt: "dl",
            li: "ul ol",
            td: "tr",
            th: "tr",
            tr: "tbody thead tfoot",
            tbody: "table",
            thead: "table",
            tfoot: "table",
            legend: "fieldset",
            area: "map",
            param: "video audio object"
        }, function(e, t) {
            z[t] && (z[t].parentsRequired = hr(e))
        }), i.invalid_elements && cr(fr(i.invalid_elements), function(e) {
            z[e] && delete z[e]
        }), x("span") || y("span[!data-mce-type|*]");
        return {
            children: g,
            elements: z,
            getValidStyles: function() {
                return t
            },
            getValidClasses: function() {
                return c
            },
            getBlockElements: function() {
                return l
            },
            getInvalidStyles: function() {
                return n
            },
            getShortEndedElements: function() {
                return u
            },
            getTextBlockElements: function() {
                return h
            },
            getTextInlineElements: function() {
                return m
            },
            getBoolAttrs: function() {
                return s
            },
            getElementRule: x,
            getSelfClosingElements: function() {
                return a
            },
            getNonEmptyElements: function() {
                return f
            },
            getMoveCaretBeforeOnEnterElements: function() {
                return d
            },
            getWhiteSpaceElements: function() {
                return o
            },
            getSpecialElements: function() {
                return v
            },
            isValidChild: function(e, t) {
                var n = g[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()])
            },
            isValid: function(e, t) {
                var n, r, o = x(e);
                if (o) {
                    if (!t) return !0;
                    if (o.attributes[t]) return !0;
                    if (n = o.attributePatterns)
                        for (r = n.length; r--;)
                            if (n[r].pattern.test(e)) return !0
                }
                return !1
            },
            getCustomElements: function() {
                return p
            },
            addValidElements: y,
            setValidElements: b,
            addCustomElements: C,
            addValidChildren: w
        }
    }

    function vr(e, t, n, r) {
        function o(e) {
            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
        }
        return "#" + o(t) + o(n) + o(r)
    }

    function yr(e, t, n, r) {
        e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
    }

    function br(e, t, n, r) {
        e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
    }

    function Cr(e, t) {
        var n, r = t || {};
        for (n in e) Er[n] || (r[n] = e[n]);
        if (r.target || (r.target = r.srcElement || j.document), Nn.experimentalShadowDom && (r.target = function(e, t) {
                if (e.composedPath) {
                    var n = e.composedPath();
                    if (n && 0 < n.length) return n[0]
                }
                return t
            }(e, r.target)), e && zr.test(e.type) && e.pageX === undefined && e.clientX !== undefined) {
            var o = r.target.ownerDocument || j.document,
                i = o.documentElement,
                a = o.body;
            r.pageX = e.clientX + (i && i.scrollLeft || a && a.scrollLeft || 0) - (i && i.clientLeft || a && a.clientLeft || 0), r.pageY = e.clientY + (i && i.scrollTop || a && a.scrollTop || 0) - (i && i.clientTop || a && a.clientTop || 0)
        }
        return r.preventDefault = function() {
            r.isDefaultPrevented = Sr, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }, r.stopPropagation = function() {
            r.isPropagationStopped = Sr, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
        }, !(r.stopImmediatePropagation = function() {
            r.isImmediatePropagationStopped = Sr, r.stopPropagation()
        }) === function(e) {
            return e.isDefaultPrevented === Sr || e.isDefaultPrevented === Nr
        }(r) && (r.isDefaultPrevented = Nr, r.isPropagationStopped = Nr, r.isImmediatePropagationStopped = Nr), "undefined" == typeof r.metaKey && (r.metaKey = !1), r
    }

    function wr(e, t, n) {
        var r = e.document,
            o = {
                type: "ready"
            };
        if (n.domLoaded) t(o);
        else {
            var i = function() {
                br(e, "DOMContentLoaded", i), br(e, "load", i), n.domLoaded || (n.domLoaded = !0, t(o))
            };
            "complete" === r.readyState || "interactive" === r.readyState && r.body ? i() : yr(e, "DOMContentLoaded", i), yr(e, "load", i)
        }
    }
    var xr = function(b, e) {
            var C, t, c, l, w = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                x = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                z = /\s*([^:]+):\s*([^;]+);?/g,
                E = /\s+$/,
                N = {},
                S = "\ufeff";
            for (b = b || {}, e && (c = e.getValidStyles(), l = e.getInvalidStyles()), t = ("\\\" \\' \\; \\: ; : " + S).split(" "), C = 0; C < t.length; C++) N[t[C]] = S + C, N[S + C] = t[C];
            return {
                toHex: function(e) {
                    return e.replace(w, vr)
                },
                parse: function(e) {
                    function t(e, t, n) {
                        var r, o, i, a;
                        if ((r = p[e + "-top" + t]) && (o = p[e + "-right" + t]) && (i = p[e + "-bottom" + t]) && (a = p[e + "-left" + t])) {
                            var u = [r, o, i, a];
                            for (C = u.length - 1; C-- && u[C] === u[C + 1];); - 1 < C && n || (p[e + t] = -1 === C ? u[0] : u.join(" "), delete p[e + "-top" + t], delete p[e + "-right" + t], delete p[e + "-bottom" + t], delete p[e + "-left" + t])
                        }
                    }

                    function n(e) {
                        var t, n = p[e];
                        if (n) {
                            for (t = (n = n.split(" ")).length; t--;)
                                if (n[t] !== n[0]) return !1;
                            return p[e] = n[0], !0
                        }
                    }

                    function r(e) {
                        return f = !0, N[e]
                    }

                    function u(e, t) {
                        return f && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                            return N[e]
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                    }

                    function o(e) {
                        return String.fromCharCode(parseInt(e.slice(1), 16))
                    }

                    function i(e) {
                        return e.replace(/\\[0-9a-f]+/gi, o)
                    }

                    function a(e, t, n, r, o, i) {
                        if (o = o || i) return "'" + (o = u(o)).replace(/\'/g, "\\'") + "'";
                        if (t = u(t || n || r), !b.allow_script_urls) {
                            var a = t.replace(/[\s\r\n]+/g, "");
                            if (/(java|vb)script:/i.test(a)) return "";
                            if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return ""
                        }
                        return v && (t = v.call(y, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')"
                    }
                    var s, c, l, f, d, h, m, g, p = {},
                        v = b.url_converter,
                        y = b.url_converter_scope || this;
                    if (e) {
                        for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, r).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                                return e.replace(/[;:]/g, r)
                            }); s = z.exec(e);)
                            if (z.lastIndex = s.index + s[0].length, c = s[1].replace(E, "").toLowerCase(), l = s[2].replace(E, ""), c && l) {
                                if (c = i(c), l = i(l), -1 !== c.indexOf(S) || -1 !== c.indexOf('"')) continue;
                                if (!b.allow_script_urls && ("behavior" === c || /expression\s*\(|\/\*|\*\//.test(l))) continue;
                                "font-weight" === c && "700" === l ? l = "bold" : "color" !== c && "background-color" !== c || (l = l.toLowerCase()), l = (l = l.replace(w, vr)).replace(x, a), p[c] = f ? u(l, !0) : l
                            }
                        t("border", "", !0), t("border", "-width"), t("border", "-color"), t("border", "-style"), t("padding", ""), t("margin", ""), d = "border", m = "border-style", g = "border-color", n(h = "border-width") && n(m) && n(g) && (p[d] = p[h] + " " + p[m] + " " + p[g], delete p[h], delete p[m], delete p[g]), "medium none" === p.border && delete p.border, "none" === p["border-image"] && delete p["border-image"]
                    }
                    return p
                },
                serialize: function(i, e) {
                    function t(e) {
                        var t, n, r, o;
                        if (t = c[e])
                            for (n = 0, r = t.length; n < r; n++) e = t[n], (o = i[e]) && (s += (0 < s.length ? " " : "") + e + ": " + o + ";")
                    }
                    var n, r, o, a, u, s = "";
                    if (e && c) t("*"), t(e);
                    else
                        for (n in i) !(r = i[n]) || l && (o = n, a = e, u = void 0, (u = l["*"]) && u[o] || (u = l[a]) && u[o]) || (s += (0 < s.length ? " " : "") + n + ": " + r + ";");
                    return s
                }
            }
        },
        zr = /^(?:mouse|contextmenu)|click/,
        Er = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1,
            webkitMovementX: 1,
            webkitMovementY: 1,
            keyIdentifier: 1,
            mozPressure: 1
        },
        Nr = function() {
            return !1
        },
        Sr = function() {
            return !0
        },
        kr = (Tr.prototype.bind = function(e, t, n, r) {
            function o(e) {
                d.executeHandlers(Cr(e || h.event), i)
            }
            var i, a, u, s, c, l, f, d = this,
                h = j.window;
            if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                e[d.expando] ? i = e[d.expando] : (i = d.count++, e[d.expando] = i, d.events[i] = {}), r = r || e;
                var m = t.split(" ");
                for (u = m.length; u--;) l = o, c = f = !1, "DOMContentLoaded" === (s = m[u]) && (s = "ready"), d.domLoaded && "ready" === s && "complete" === e.readyState ? n.call(r, Cr({
                    type: s
                })) : (d.hasMouseEnterLeave || (c = d.mouseEnterLeave[s]) && (l = function(e) {
                    var t, n;
                    if (t = e.currentTarget, (n = e.relatedTarget) && t.contains) n = t.contains(n);
                    else
                        for (; n && n !== t;) n = n.parentNode;
                    n || ((e = Cr(e || h.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, d.executeHandlers(e, i))
                }), d.hasFocusIn || "focusin" !== s && "focusout" !== s || (f = !0, c = "focusin" === s ? "focus" : "blur", l = function(e) {
                    (e = Cr(e || h.event)).type = "focus" === e.type ? "focusin" : "focusout", d.executeHandlers(e, i)
                }), (a = d.events[i][s]) ? "ready" === s && d.domLoaded ? n(Cr({
                    type: s
                })) : a.push({
                    func: n,
                    scope: r
                }) : (d.events[i][s] = a = [{
                    func: n,
                    scope: r
                }], a.fakeName = c, a.capture = f, a.nativeHandler = l, "ready" === s ? wr(e, l, d) : yr(e, c || s, l, f)));
                return e = a = 0, n
            }
        }, Tr.prototype.unbind = function(e, t, n) {
            var r, o, i, a, u, s;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            if (r = e[this.expando]) {
                if (s = this.events[r], t) {
                    var c = t.split(" ");
                    for (i = c.length; i--;)
                        if (o = s[u = c[i]]) {
                            if (n)
                                for (a = o.length; a--;)
                                    if (o[a].func === n) {
                                        var l = o.nativeHandler,
                                            f = o.fakeName,
                                            d = o.capture;
                                        (o = o.slice(0, a).concat(o.slice(a + 1))).nativeHandler = l, o.fakeName = f, o.capture = d, s[u] = o
                                    }
                            n && 0 !== o.length || (delete s[u], br(e, o.fakeName || u, o.nativeHandler, o.capture))
                        }
                } else {
                    for (u in s) o = s[u], br(e, o.fakeName || u, o.nativeHandler, o.capture);
                    s = {}
                }
                for (u in s) return this;
                delete this.events[r];
                try {
                    delete e[this.expando]
                } catch (h) {
                    e[this.expando] = null
                }
            }
            return this
        }, Tr.prototype.fire = function(e, t, n) {
            var r;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            var o = Cr(null, n);
            for (o.type = t, o.target = e;
                (r = e[this.expando]) && this.executeHandlers(o, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !o.isPropagationStopped(););
            return this
        }, Tr.prototype.clean = function(e) {
            var t, n;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)
                for (this.unbind(e), t = (n = e.getElementsByTagName("*")).length; t--;)(e = n[t])[this.expando] && this.unbind(e);
            return this
        }, Tr.prototype.destroy = function() {
            this.events = {}
        }, Tr.prototype.cancel = function(e) {
            return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
        }, Tr.prototype.executeHandlers = function(e, t) {
            var n, r, o, i, a = this.events[t];
            if (n = a && a[e.type])
                for (r = 0, o = n.length; r < o; r++)
                    if ((i = n[r]) && !1 === i.func.call(i.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return
        }, Tr.Event = new Tr, Tr);

    function Tr() {
        this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date).toString(32), this.hasMouseEnterLeave = "onmouseenter" in j.document.documentElement, this.hasFocusIn = "onfocusin" in j.document.documentElement, this.count = 1
    }

    function Ar(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
    }
    var Mr, Rr, Dr, _r, Br, Or, Hr, Pr, Lr, Vr, Ir, Fr, Ur, jr, qr, $r, Wr, Kr, Xr = "sizzle" + -new Date,
        Yr = j.window.document,
        Gr = 0,
        Jr = 0,
        Qr = Mo(),
        Zr = Mo(),
        eo = Mo(),
        to = function(e, t) {
            return e === t && (Ir = !0), 0
        },
        no = typeof undefined,
        ro = {}.hasOwnProperty,
        oo = [],
        io = oo.pop,
        ao = oo.push,
        uo = oo.push,
        so = oo.slice,
        co = oo.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        lo = "[\\x20\\t\\r\\n\\f]",
        fo = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ho = "\\[" + lo + "*(" + fo + ")(?:" + lo + "*([*^$|!~]?=)" + lo + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fo + "))|)" + lo + "*\\]",
        mo = ":(" + fo + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ho + ")*)|.*)\\)|)",
        go = new RegExp("^" + lo + "+|((?:^|[^\\\\])(?:\\\\.)*)" + lo + "+$", "g"),
        po = new RegExp("^" + lo + "*," + lo + "*"),
        vo = new RegExp("^" + lo + "*([>+~]|" + lo + ")" + lo + "*"),
        yo = new RegExp("=" + lo + "*([^\\]'\"]*?)" + lo + "*\\]", "g"),
        bo = new RegExp(mo),
        Co = new RegExp("^" + fo + "$"),
        wo = {
            ID: new RegExp("^#(" + fo + ")"),
            CLASS: new RegExp("^\\.(" + fo + ")"),
            TAG: new RegExp("^(" + fo + "|[*])"),
            ATTR: new RegExp("^" + ho),
            PSEUDO: new RegExp("^" + mo),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + lo + "*(even|odd|(([+-]|)(\\d*)n|)" + lo + "*(?:([+-]|)" + lo + "*(\\d+)|))" + lo + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + lo + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + lo + "*((?:-\\d)?\\d*)" + lo + "*\\)|)(?=[^-]|$)", "i")
        },
        xo = /^(?:input|select|textarea|button)$/i,
        zo = /^h\d$/i,
        Eo = /^[^{]+\{\s*\[native \w/,
        No = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        So = /[+~]/,
        ko = /'|\\/g,
        To = new RegExp("\\\\([\\da-f]{1,6}" + lo + "?|(" + lo + ")|.)", "ig");
    try {
        uo.apply(oo = so.call(Yr.childNodes), Yr.childNodes), oo[Yr.childNodes.length].nodeType
    } catch (yN) {
        uo = {
            apply: oo.length ? function(e, t) {
                ao.apply(e, so.call(t))
            } : function(e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];);
                e.length = n - 1
            }
        }
    }
    var Ao = function(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, h;
        if ((t ? t.ownerDocument || t : Yr) !== Ur && Fr(t), n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (u = (t = t || Ur).nodeType) && 9 !== u) return [];
        if (qr && !r) {
            if (o = No.exec(e))
                if (a = o[1]) {
                    if (9 === u) {
                        if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && Kr(t, i) && i.id === a) return n.push(i), n
                } else {
                    if (o[2]) return uo.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && Rr.getElementsByClassName) return uo.apply(n, t.getElementsByClassName(a)), n
                }
            if (Rr.qsa && (!$r || !$r.test(e))) {
                if (f = l = Xr, d = t, h = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                    for (c = Or(e), (l = t.getAttribute("id")) ? f = l.replace(ko, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) c[s] = f + Lo(c[s]);
                    d = So.test(e) && Ho(t.parentNode) || t, h = c.join(",")
                }
                if (h) try {
                    return uo.apply(n, d.querySelectorAll(h)), n
                } catch (m) {} finally {
                    l || t.removeAttribute("id")
                }
            }
        }
        return Pr(e.replace(go, "$1"), t, n, r)
    };

    function Mo() {
        var n = [];
        return function r(e, t) {
            return n.push(e + " ") > Dr.cacheLength && delete r[n.shift()], r[e + " "] = t
        }
    }

    function Ro(e) {
        return e[Xr] = !0, e
    }

    function Do(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n)
            for (; n = n.nextSibling;)
                if (n === t) return -1;
        return e ? 1 : -1
    }

    function _o(t) {
        return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }

    function Bo(n) {
        return function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
        }
    }

    function Oo(a) {
        return Ro(function(i) {
            return i = +i, Ro(function(e, t) {
                for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }

    function Ho(e) {
        return e && typeof e.getElementsByTagName != no && e
    }
    for (Mr in Rr = Ao.support = {}, Br = Ao.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, Fr = Ao.setDocument = function(e) {
            var t, s = e ? e.ownerDocument || e : Yr,
                n = s.defaultView;
            return s !== Ur && 9 === s.nodeType && s.documentElement ? (jr = (Ur = s).documentElement, qr = !Br(s), n && n !== function r(e) {
                try {
                    return e.top
                } catch (t) {}
                return null
            }(n) && (n.addEventListener ? n.addEventListener("unload", function() {
                Fr()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                Fr()
            })), Rr.attributes = !0, Rr.getElementsByTagName = !0, Rr.getElementsByClassName = Eo.test(s.getElementsByClassName), Rr.getById = !0, Dr.find.ID = function(e, t) {
                if (typeof t.getElementById != no && qr) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, Dr.filter.ID = function(e) {
                var t = e.replace(To, Ar);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, Dr.find.TAG = Rr.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName != no) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" !== e) return i;
                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                return r
            }, Dr.find.CLASS = Rr.getElementsByClassName && function(e, t) {
                if (qr) return t.getElementsByClassName(e)
            }, Wr = [], $r = [], Rr.disconnectedMatch = !0, $r = $r.length && new RegExp($r.join("|")), Wr = Wr.length && new RegExp(Wr.join("|")), t = Eo.test(jr.compareDocumentPosition), Kr = t || Eo.test(jr.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, to = t ? function(e, t) {
                if (e === t) return Ir = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !Rr.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === Yr && Kr(Yr, e) ? -1 : t === s || t.ownerDocument === Yr && Kr(Yr, t) ? 1 : Vr ? co.call(Vr, e) - co.call(Vr, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return Ir = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    a = [e],
                    u = [t];
                if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : Vr ? co.call(Vr, e) - co.call(Vr, t) : 0;
                if (o === i) return Do(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? Do(a[r], u[r]) : a[r] === Yr ? -1 : u[r] === Yr ? 1 : 0
            }, s) : Ur
        }, Ao.matches = function(e, t) {
            return Ao(e, null, null, t)
        }, Ao.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== Ur && Fr(e), t = t.replace(yo, "='$1']"), Rr.matchesSelector && qr && (!Wr || !Wr.test(t)) && (!$r || !$r.test(t))) try {
                var n = (void 0).call(e, t);
                if (n || Rr.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (yN) {}
            return 0 < Ao(t, Ur, null, [e]).length
        }, Ao.contains = function(e, t) {
            return (e.ownerDocument || e) !== Ur && Fr(e), Kr(e, t)
        }, Ao.attr = function(e, t) {
            (e.ownerDocument || e) !== Ur && Fr(e);
            var n = Dr.attrHandle[t.toLowerCase()],
                r = n && ro.call(Dr.attrHandle, t.toLowerCase()) ? n(e, t, !qr) : undefined;
            return r !== undefined ? r : Rr.attributes || !qr ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, Ao.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, Ao.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (Ir = !Rr.detectDuplicates, Vr = !Rr.sortStable && e.slice(0), e.sort(to), Ir) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return Vr = null, e
        }, _r = Ao.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += _r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += _r(t);
            return n
        }, (Dr = Ao.selectors = {
            cacheLength: 50,
            createPseudo: Ro,
            match: wo,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(To, Ar), e[3] = (e[3] || e[4] || e[5] || "").replace(To, Ar), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Ao.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Ao.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return wo.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && bo.test(n) && (t = Or(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(To, Ar).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = Qr[e + " "];
                    return t || (t = new RegExp("(^|" + lo + ")" + e + "(" + lo + "|$)")) && Qr(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute != no && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, o) {
                    return function(e) {
                        var t = Ao.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function(h, e, t, m, g) {
                    var p = "nth" !== h.slice(0, 3),
                        v = "last" !== h.slice(-4),
                        y = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, n) {
                        var r, o, i, a, u, s, c = p != v ? "nextSibling" : "previousSibling",
                            l = e.parentNode,
                            f = y && e.nodeName.toLowerCase(),
                            d = !n && !y;
                        if (l) {
                            if (p) {
                                for (; c;) {
                                    for (i = e; i = i[c];)
                                        if (y ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                    s = c = "only" === h && !s && "nextSibling"
                                }
                                return !0
                            }
                            if (s = [v ? l.firstChild : l.lastChild], v && d) {
                                for (u = (r = (o = l[Xr] || (l[Xr] = {}))[h] || [])[0] === Gr && r[1], a = r[0] === Gr && r[2], i = u && l.childNodes[u]; i = ++u && i && i[c] || (a = u = 0) || s.pop();)
                                    if (1 === i.nodeType && ++a && i === e) {
                                        o[h] = [Gr, u, a];
                                        break
                                    }
                            } else if (d && (r = (e[Xr] || (e[Xr] = {}))[h]) && r[0] === Gr) a = r[1];
                            else
                                for (;
                                    (i = ++u && i && i[c] || (a = u = 0) || s.pop()) && ((y ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[Xr] || (i[Xr] = {}))[h] = [Gr, a]), i !== e)););
                            return (a -= g) === m || a % m == 0 && 0 <= a / m
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var t, a = Dr.pseudos[e] || Dr.setFilters[e.toLowerCase()] || Ao.error("unsupported pseudo: " + e);
                    return a[Xr] ? a(i) : 1 < a.length ? (t = [e, e, "", i], Dr.setFilters.hasOwnProperty(e.toLowerCase()) ? Ro(function(e, t) {
                        for (var n, r = a(e, i), o = r.length; o--;) e[n = co.call(e, r[o])] = !(t[n] = r[o])
                    }) : function(e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: Ro(function(e) {
                    var r = [],
                        o = [],
                        u = Hr(e.replace(go, "$1"));
                    return u[Xr] ? Ro(function(e, t, n, r) {
                        for (var o, i = u(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, t, n) {
                        return r[0] = e, u(r, null, n, o), !o.pop()
                    }
                }),
                has: Ro(function(t) {
                    return function(e) {
                        return 0 < Ao(t, e).length
                    }
                }),
                contains: Ro(function(t) {
                    return t = t.replace(To, Ar),
                        function(e) {
                            return -1 < (e.textContent || e.innerText || _r(e)).indexOf(t)
                        }
                }),
                lang: Ro(function(n) {
                    return Co.test(n || "") || Ao.error("unsupported lang: " + n), n = n.replace(To, Ar).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = qr ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var t = j.window.location && j.window.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === jr
                },
                focus: function(e) {
                    return e === Ur.activeElement && (!Ur.hasFocus || Ur.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !Dr.pseudos.empty(e)
                },
                header: function(e) {
                    return zo.test(e.nodeName)
                },
                input: function(e) {
                    return xo.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: Oo(function() {
                    return [0]
                }),
                last: Oo(function(e, t) {
                    return [t - 1]
                }),
                eq: Oo(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: Oo(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: Oo(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: Oo(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                    return e
                }),
                gt: Oo(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = Dr.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) Dr.pseudos[Mr] = _o(Mr);
    for (Mr in {
            submit: !0,
            reset: !0
        }) Dr.pseudos[Mr] = Bo(Mr);

    function Po() {}

    function Lo(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
    }

    function Vo(a, e, t) {
        var u = e.dir,
            s = t && "parentNode" === u,
            c = Jr++;
        return e.first ? function(e, t, n) {
            for (; e = e[u];)
                if (1 === e.nodeType || s) return a(e, t, n)
        } : function(e, t, n) {
            var r, o, i = [Gr, c];
            if (n) {
                for (; e = e[u];)
                    if ((1 === e.nodeType || s) && a(e, t, n)) return !0
            } else
                for (; e = e[u];)
                    if (1 === e.nodeType || s) {
                        if ((r = (o = e[Xr] || (e[Xr] = {}))[u]) && r[0] === Gr && r[1] === c) return i[2] = r[2];
                        if ((o[u] = i)[2] = a(e, t, n)) return !0
                    }
        }
    }

    function Io(o) {
        return 1 < o.length ? function(e, t, n) {
            for (var r = o.length; r--;)
                if (!o[r](e, t, n)) return !1;
            return !0
        } : o[0]
    }

    function Fo(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)(i = e[u]) && (n && !n(i, r, o) || (a.push(i), c && t.push(u)));
        return a
    }

    function Uo(m, g, p, v, y, e) {
        return v && !v[Xr] && (v = Uo(v)), y && !y[Xr] && (y = Uo(y, e)), Ro(function(e, t, n, r) {
            var o, i, a, u = [],
                s = [],
                c = t.length,
                l = e || function h(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) Ao(e, t[r], n);
                    return n
                }(g || "*", n.nodeType ? [n] : n, []),
                f = !m || !e && g ? l : Fo(l, u, m, n, r),
                d = p ? y || (e ? m : c || v) ? [] : t : f;
            if (p && p(f, d, n, r), v)
                for (o = Fo(d, s), v(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
            if (e) {
                if (y || m) {
                    if (y) {
                        for (o = [], i = d.length; i--;)(a = d[i]) && o.push(f[i] = a);
                        y(null, d = [], o, r)
                    }
                    for (i = d.length; i--;)(a = d[i]) && -1 < (o = y ? co.call(e, a) : u[i]) && (e[o] = !(t[o] = a))
                }
            } else d = Fo(d === t ? d.splice(c, d.length) : d), y ? y(null, t, d, r) : uo.apply(t, d)
        })
    }

    function jo(e) {
        for (var r, t, n, o = e.length, i = Dr.relative[e[0].type], a = i || Dr.relative[" "], u = i ? 1 : 0, s = Vo(function(e) {
                return e === r
            }, a, !0), c = Vo(function(e) {
                return -1 < co.call(r, e)
            }, a, !0), l = [function(e, t, n) {
                return !i && (n || t !== Lr) || ((r = t).nodeType ? s(e, t, n) : c(e, t, n))
            }]; u < o; u++)
            if (t = Dr.relative[e[u].type]) l = [Vo(Io(l), t)];
            else {
                if ((t = Dr.filter[e[u].type].apply(null, e[u].matches))[Xr]) {
                    for (n = ++u; n < o && !Dr.relative[e[n].type]; n++);
                    return Uo(1 < u && Io(l), 1 < u && Lo(e.slice(0, u - 1).concat({
                        value: " " === e[u - 2].type ? "*" : ""
                    })).replace(go, "$1"), t, u < n && jo(e.slice(u, n)), n < o && jo(e = e.slice(n)), n < o && Lo(e))
                }
                l.push(t)
            }
        return Io(l)
    }
    Po.prototype = Dr.filters = Dr.pseudos, Dr.setFilters = new Po, Or = Ao.tokenize = function(e, t) {
        var n, r, o, i, a, u, s, c = Zr[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, u = [], s = Dr.preFilter; a;) {
            for (i in n && !(r = po.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = vo.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(go, " ")
                }), a = a.slice(n.length)), Dr.filter) Dr.filter.hasOwnProperty(i) && (!(r = wo[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({
                value: n,
                type: i,
                matches: r
            }), a = a.slice(n.length)));
            if (!n) break
        }
        return t ? a.length : a ? Ao.error(e) : Zr(e, u).slice(0)
    }, Hr = Ao.compile = function(e, t) {
        var n, r = [],
            o = [],
            i = eo[e + " "];
        if (!i) {
            for (n = (t = t || Or(e)).length; n--;)(i = jo(t[n]))[Xr] ? r.push(i) : o.push(i);
            (i = eo(e, function a(p, v) {
                function e(e, t, n, r, o) {
                    var i, a, u, s = 0,
                        c = "0",
                        l = e && [],
                        f = [],
                        d = Lr,
                        h = e || b && Dr.find.TAG("*", o),
                        m = Gr += null == d ? 1 : Math.random() || .1,
                        g = h.length;
                    for (o && (Lr = t !== Ur && t); c !== g && null != (i = h[c]); c++) {
                        if (b && i) {
                            for (a = 0; u = p[a++];)
                                if (u(i, t, n)) {
                                    r.push(i);
                                    break
                                }
                            o && (Gr = m)
                        }
                        y && ((i = !u && i) && s--, e && l.push(i))
                    }
                    if (s += c, y && c !== s) {
                        for (a = 0; u = v[a++];) u(l, f, t, n);
                        if (e) {
                            if (0 < s)
                                for (; c--;) l[c] || f[c] || (f[c] = io.call(r));
                            f = Fo(f)
                        }
                        uo.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && Ao.uniqueSort(r)
                    }
                    return o && (Gr = m, Lr = d), l
                }
                var y = 0 < v.length,
                    b = 0 < p.length;
                return y ? Ro(e) : e
            }(o, r))).selector = e
        }
        return i
    }, Pr = Ao.select = function(e, t, n, r) {
        var o, i, a, u, s, c = "function" == typeof e && e,
            l = !r && Or(e = c.selector || e);
        if (n = n || [], 1 === l.length) {
            if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && Rr.getById && 9 === t.nodeType && qr && Dr.relative[i[1].type]) {
                if (!(t = (Dr.find.ID(a.matches[0].replace(To, Ar), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = wo.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !Dr.relative[u = a.type]);)
                if ((s = Dr.find[u]) && (r = s(a.matches[0].replace(To, Ar), So.test(i[0].type) && Ho(t.parentNode) || t))) {
                    if (i.splice(o, 1), !(e = r.length && Lo(i))) return uo.apply(n, r), n;
                    break
                }
        }
        return (c || Hr(e, l))(r, t, !qr, n, So.test(e) && Ho(t.parentNode) || t), n
    }, Rr.sortStable = Xr.split("").sort(to).join("") === Xr, Rr.detectDuplicates = !!Ir, Fr(), Rr.sortDetached = !0;

    function qo(e) {
        return void 0 !== e
    }

    function $o(e) {
        return "string" == typeof e
    }

    function Wo(e, t) {
        var n, r, o;
        for (o = (t = t || Zo).createElement("div"), n = t.createDocumentFragment(), o.innerHTML = e; r = o.firstChild;) n.appendChild(r);
        return n
    }

    function Ko(e, t) {
        return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
    }

    function Xo(e, t, n) {
        var r, o;
        return t = vi(t)[0], e.each(function() {
            n && r === this.parentNode || (r = this.parentNode, o = t.cloneNode(!1), this.parentNode.insertBefore(o, this)), o.appendChild(this)
        }), e
    }

    function Yo(e, t) {
        return new vi.fn.init(e, t)
    }

    function Go(e) {
        return null === e || e === undefined ? "" : ("" + e).replace(di, "")
    }

    function Jo(e, t) {
        var n, r, o, i;
        if (e)
            if ((n = e.length) === undefined) {
                for (r in e)
                    if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break
            } else
                for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++);
        return e
    }

    function Qo(e, n) {
        var r = [];
        return Jo(e, function(e, t) {
            n(t, e) && r.push(t)
        }), r
    }
    var Zo = j.document,
        ei = Array.prototype.push,
        ti = Array.prototype.slice,
        ni = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        ri = kr.Event,
        oi = Mn.makeMap("children,contents,next,prev"),
        ii = function(e, t, n, r) {
            var o;
            if ($o(t)) t = Wo(t, hi(e[0]));
            else if (t.length && !t.nodeType) {
                if (t = vi.makeArray(t), r)
                    for (o = t.length - 1; 0 <= o; o--) ii(e, t[o], n, r);
                else
                    for (o = 0; o < t.length; o++) ii(e, t[o], n, r);
                return e
            }
            if (t.nodeType)
                for (o = e.length; o--;) n.call(e[o], t);
            return e
        },
        ai = Mn.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        ui = Mn.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        si = {
            "for": "htmlFor",
            "class": "className",
            readonly: "readOnly"
        },
        ci = {
            "float": "cssFloat"
        },
        li = {},
        fi = {},
        di = /^\s*|\s*$/g,
        hi = function(e) {
            return e ? 9 === e.nodeType ? e : e.ownerDocument : Zo
        };
    Yo.fn = Yo.prototype = {
        constructor: Yo,
        selector: "",
        context: null,
        length: 0,
        init: function(e, t) {
            var n, r, o = this;
            if (!e) return o;
            if (e.nodeType) return o.context = o[0] = e, o.length = 1, o;
            if (t && t.nodeType) o.context = t;
            else {
                if (t) return vi(e).attr(t);
                o.context = t = j.document
            }
            if ($o(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : ni.exec(e))) return vi(t).find(e);
                if (n[1])
                    for (r = Wo(e, hi(t)).firstChild; r;) ei.call(o, r), r = r.nextSibling;
                else {
                    if (!(r = hi(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    o.length = 1, o[0] = r
                }
            } else this.add(e, !1);
            return o
        },
        toArray: function() {
            return Mn.toArray(this)
        },
        add: function(e, t) {
            var n, r;
            if ($o(e)) return this.add(vi(e));
            if (!1 !== t)
                for (n = vi.unique(this.toArray().concat(vi.makeArray(e))), this.length = n.length, r = 0; r < n.length; r++) this[r] = n[r];
            else ei.apply(this, vi.makeArray(e));
            return this
        },
        attr: function(t, n) {
            var e, r = this;
            if ("object" == typeof t) Jo(t, function(e, t) {
                r.attr(e, t)
            });
            else {
                if (!qo(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = li[t]) && e.get) return e.get(r[0], t);
                        if (ui[t]) return r.prop(t) ? t : undefined;
                        null === (n = r[0].getAttribute(t, 2)) && (n = undefined)
                    }
                    return n
                }
                this.each(function() {
                    var e;
                    if (1 === this.nodeType) {
                        if ((e = li[t]) && e.set) return void e.set(this, n);
                        null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2)
                    }
                })
            }
            return r
        },
        removeAttr: function(e) {
            return this.attr(e, null)
        },
        prop: function(e, t) {
            var n = this;
            if ("object" == typeof(e = si[e] || e)) Jo(e, function(e, t) {
                n.prop(e, t)
            });
            else {
                if (!qo(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function() {
                    1 === this.nodeType && (this[e] = t)
                })
            }
            return n
        },
        css: function(n, r) {
            function e(e) {
                return e.replace(/-(\D)/g, function(e, t) {
                    return t.toUpperCase()
                })
            }

            function o(e) {
                return e.replace(/[A-Z]/g, function(e) {
                    return "-" + e
                })
            }
            var t, i, a = this;
            if ("object" == typeof n) Jo(n, function(e, t) {
                a.css(e, t)
            });
            else if (qo(r)) n = e(n), "number" != typeof r || ai[n] || (r = r.toString() + "px"), a.each(function() {
                var e = this.style;
                if ((i = fi[n]) && i.set) i.set(this, r);
                else {
                    try {
                        this.style[ci[n] || n] = r
                    } catch (t) {}
                    null !== r && "" !== r || (e.removeProperty ? e.removeProperty(o(n)) : e.removeAttribute(n))
                }
            });
            else {
                if (t = a[0], (i = fi[n]) && i.get) return i.get(t);
                if (!t.ownerDocument.defaultView) return t.currentStyle ? t.currentStyle[e(n)] : "";
                try {
                    return t.ownerDocument.defaultView.getComputedStyle(t, null).getPropertyValue(o(n))
                } catch (u) {
                    return undefined
                }
            }
            return a
        },
        remove: function() {
            for (var e, t = this.length; t--;) e = this[t], ri.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var e, t = this.length; t--;)
                for (e = this[t]; e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        html: function(e) {
            var t, n = this;
            if (qo(e)) {
                t = n.length;
                try {
                    for (; t--;) n[t].innerHTML = e
                } catch (r) {
                    vi(n[t]).empty().append(e)
                }
                return n
            }
            return n[0] ? n[0].innerHTML : ""
        },
        text: function(e) {
            var t;
            if (qo(e)) {
                for (t = this.length; t--;) "innerText" in this[t] ? this[t].innerText = e : this[0].textContent = e;
                return this
            }
            return this[0] ? this[0].innerText || this[0].textContent : ""
        },
        append: function() {
            return ii(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return ii(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
            }, !0)
        },
        before: function() {
            return this[0] && this[0].parentNode ? ii(this, arguments, function(e) {
                this.parentNode.insertBefore(e, this)
            }) : this
        },
        after: function() {
            return this[0] && this[0].parentNode ? ii(this, arguments, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            }, !0) : this
        },
        appendTo: function(e) {
            return vi(e).append(this), this
        },
        prependTo: function(e) {
            return vi(e).prepend(this), this
        },
        replaceWith: function(e) {
            return this.before(e).remove()
        },
        wrap: function(e) {
            return Xo(this, e)
        },
        wrapAll: function(e) {
            return Xo(this, e, !0)
        },
        wrapInner: function(e) {
            return this.each(function() {
                vi(this).contents().wrapAll(e)
            }), this
        },
        unwrap: function() {
            return this.parent().each(function() {
                vi(this).replaceWith(this.childNodes)
            })
        },
        clone: function() {
            var e = [];
            return this.each(function() {
                e.push(this.cloneNode(!0))
            }), vi(e)
        },
        addClass: function(e) {
            return this.toggleClass(e, !0)
        },
        removeClass: function(e) {
            return this.toggleClass(e, !1)
        },
        toggleClass: function(o, i) {
            var e = this;
            return "string" != typeof o || (-1 !== o.indexOf(" ") ? Jo(o.split(" "), function() {
                e.toggleClass(this, i)
            }) : e.each(function(e, t) {
                var n, r;
                (r = Ko(t, o)) !== i && (n = t.className, r ? t.className = Go((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o)
            })), e
        },
        hasClass: function(e) {
            return Ko(this[0], e)
        },
        each: function(e) {
            return Jo(this, e)
        },
        on: function(e, t) {
            return this.each(function() {
                ri.bind(this, e, t)
            })
        },
        off: function(e, t) {
            return this.each(function() {
                ri.unbind(this, e, t)
            })
        },
        trigger: function(e) {
            return this.each(function() {
                "object" == typeof e ? ri.fire(this, e.type, e) : ri.fire(this, e)
            })
        },
        show: function() {
            return this.css("display", "")
        },
        hide: function() {
            return this.css("display", "none")
        },
        slice: function() {
            return new vi(ti.apply(this, arguments))
        },
        eq: function(e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        find: function(e) {
            var t, n, r = [];
            for (t = 0, n = this.length; t < n; t++) vi.find(e, this[t], r);
            return vi(r)
        },
        filter: function(n) {
            return vi("function" == typeof n ? Qo(this.toArray(), function(e, t) {
                return n(t, e)
            }) : vi.filter(n, this.toArray()))
        },
        closest: function(n) {
            var r = [];
            return n instanceof vi && (n = n[0]), this.each(function(e, t) {
                for (; t;) {
                    if ("string" == typeof n && vi(t).is(n)) {
                        r.push(t);
                        break
                    }
                    if (t === n) {
                        r.push(t);
                        break
                    }
                    t = t.parentNode
                }
            }), vi(r)
        },
        offset: function(e) {
            var t, n, r, o, i = 0,
                a = 0;
            return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
                left: i,
                top: a
            })
        },
        push: ei,
        sort: Array.prototype.sort,
        splice: Array.prototype.splice
    }, Mn.extend(Yo, {
        extend: Mn.extend,
        makeArray: function(e) {
            return function(e) {
                return e && e === e.window
            }(e) || e.nodeType ? [e] : Mn.toArray(e)
        },
        inArray: function(e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        },
        isArray: Mn.isArray,
        each: Jo,
        trim: Go,
        grep: Qo,
        find: Ao,
        expr: Ao.selectors,
        unique: Ao.uniqueSort,
        text: Ao.getText,
        contains: Ao.contains,
        filter: function(e, t, n) {
            var r = t.length;
            for (n && (e = ":not(" + e + ")"); r--;) 1 !== t[r].nodeType && t.splice(r, 1);
            return t = 1 === t.length ? vi.find.matchesSelector(t[0], e) ? [t[0]] : [] : vi.find.matches(e, t)
        }
    });

    function mi(e, t, n) {
        var r = [],
            o = e[t];
        for ("string" != typeof n && n instanceof vi && (n = n[0]); o && 9 !== o.nodeType;) {
            if (n !== undefined) {
                if (o === n) break;
                if ("string" == typeof n && vi(o).is(n)) break
            }
            1 === o.nodeType && r.push(o), o = o[t]
        }
        return r
    }

    function gi(e, t, n, r) {
        var o = [];
        for (r instanceof vi && (r = r[0]); e; e = e[t])
            if (!n || e.nodeType === n) {
                if (r !== undefined) {
                    if (e === r) break;
                    if ("string" == typeof r && vi(e).is(r)) break
                }
                o.push(e)
            }
        return o
    }

    function pi(e, t, n) {
        for (e = e[t]; e; e = e[t])
            if (e.nodeType === n) return e;
        return null
    }
    Jo({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return mi(e, "parentNode")
        },
        next: function(e) {
            return pi(e, "nextSibling", 1)
        },
        prev: function(e) {
            return pi(e, "previousSibling", 1)
        },
        children: function(e) {
            return gi(e.firstChild, "nextSibling", 1)
        },
        contents: function(e) {
            return Mn.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
        }
    }, function(r, o) {
        Yo.fn[r] = function(t) {
            var n = [];
            this.each(function() {
                var e = o.call(n, this, t, n);
                e && (vi.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (oi[r] || (n = vi.unique(n)), 0 === r.indexOf("parents") && (n = n.reverse()));
            var e = vi(n);
            return t ? e.filter(t) : e
        }
    }), Jo({
        parentsUntil: function(e, t) {
            return mi(e, "parentNode", t)
        },
        nextUntil: function(e, t) {
            return gi(e, "nextSibling", 1, t).slice(1)
        },
        prevUntil: function(e, t) {
            return gi(e, "previousSibling", 1, t).slice(1)
        }
    }, function(o, i) {
        Yo.fn[o] = function(t, e) {
            var n = [];
            this.each(function() {
                var e = i.call(n, this, t, n);
                e && (vi.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (n = vi.unique(n), 0 !== o.indexOf("parents") && "prevUntil" !== o || (n = n.reverse()));
            var r = vi(n);
            return e ? r.filter(e) : r
        }
    }), Yo.fn.is = function(e) {
        return !!e && 0 < this.filter(e).length
    }, Yo.fn.init.prototype = Yo.fn, Yo.overrideDefaults = function(n) {
        var r, o = function(e, t) {
            return r = r || n(), 0 === arguments.length && (e = r.element), t = t || r.context, new o.fn.init(e, t)
        };
        return vi.extend(o, this), o
    }, Yo.attrHooks = li, Yo.cssHooks = fi;
    var vi = Yo,
        yi = (bi.prototype.current = function() {
            return this.node
        }, bi.prototype.next = function(e) {
            return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node
        }, bi.prototype.prev = function(e) {
            return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node
        }, bi.prototype.prev2 = function(e) {
            return this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e), this.node
        }, bi.prototype.findSibling = function(e, t, n, r) {
            var o, i;
            if (e) {
                if (!r && e[t]) return e[t];
                if (e !== this.rootNode) {
                    if (o = e[n]) return o;
                    for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode)
                        if (o = i[n]) return o
                }
            }
        }, bi.prototype.findPreviousNode = function(e, t, n, r) {
            var o, i, a;
            if (e) {
                if (o = e[n], this.rootNode && o === this.rootNode) return;
                if (o) {
                    if (!r)
                        for (a = o[t]; a; a = a[t])
                            if (!a[t]) return a;
                    return o
                }
                if ((i = e.parentNode) && i !== this.rootNode) return i
            }
        }, bi);

    function bi(e, t) {
        this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this)
    }

    function Ci(t, n) {
        Se(t).each(function(e) {
            e.dom().insertBefore(n.dom(), t.dom())
        })
    }

    function wi(e, t) {
        Te(e).fold(function() {
            Se(e).each(function(e) {
                Di(e, t)
            })
        }, function(e) {
            Ci(e, t)
        })
    }

    function xi(t, n) {
        _e(t).fold(function() {
            Di(t, n)
        }, function(e) {
            t.dom().insertBefore(n.dom(), e.dom())
        })
    }

    function zi(t, e) {
        z(e, function(e) {
            Di(t, e)
        })
    }

    function Ei(e) {
        e.dom().textContent = "", z(Re(e), function(e) {
            _i(e)
        })
    }

    function Ni(e) {
        var t = Re(e);
        0 < t.length && function(t, e) {
            z(e, function(e) {
                Ci(t, e)
            })
        }(e, t), _i(e)
    }

    function Si(e, t) {
        return e !== undefined ? e : t !== undefined ? t : 0
    }

    function ki(e) {
        var t = e !== undefined ? e.dom() : j.document,
            n = t.body.scrollLeft || t.documentElement.scrollLeft,
            r = t.body.scrollTop || t.documentElement.scrollTop;
        return Oi(n, r)
    }

    function Ti(e, t, n) {
        (n !== undefined ? n.dom() : j.document).defaultView.scrollTo(e, t)
    }

    function Ai(e, t) {
        Pi && D(e.dom().scrollIntoViewIfNeeded) ? e.dom().scrollIntoViewIfNeeded(!1) : e.dom().scrollIntoView(t)
    }

    function Mi(e, t, n, r) {
        return {
            x: $(e),
            y: $(t),
            width: $(n),
            height: $(r),
            right: $(e + n),
            bottom: $(t + r)
        }
    }
    var Ri, Di = function(e, t) {
            e.dom().appendChild(t.dom())
        },
        _i = function(e) {
            var t = e.dom();
            null !== t.parentNode && t.parentNode.removeChild(t)
        },
        Bi = function(n, r) {
            return {
                left: $(n),
                top: $(r),
                translate: function(e, t) {
                    return Bi(n + e, r + t)
                }
            }
        },
        Oi = Bi,
        Hi = function(e) {
            var t = e.dom(),
                n = t.ownerDocument.body;
            return n === t ? Oi(n.offsetLeft, n.offsetTop) : de(e) ? function(e) {
                var t = e.getBoundingClientRect();
                return Oi(t.left, t.top)
            }(t) : Oi(0, 0)
        },
        Pi = oe().browser.isSafari(),
        Li = function(e) {
            var t = e === undefined ? j.window : e,
                n = t.document,
                r = ki(yt.fromDom(n)),
                o = t.visualViewport;
            if (o !== undefined) return Mi(Math.max(o.pageLeft, r.left()), Math.max(o.pageTop, r.top()), o.width, o.height);
            var i = n.documentElement,
                a = i.clientWidth,
                u = i.clientHeight;
            return Mi(r.left(), r.top(), a, u)
        },
        Vi = Mn.each,
        Ii = Mn.grep,
        Fi = Nn.ie,
        Ui = /^([a-z0-9],?)+$/i,
        ji = /^[ \t\r\n]*$/,
        qi = function(n, r, o) {
            var i = r.keep_values,
                e = {
                    set: function(e, t, n) {
                        r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t)
                    },
                    get: function(e, t) {
                        return e.attr("data-mce-" + t) || e.attr(t)
                    }
                },
                t = {
                    style: {
                        set: function(e, t) {
                            null === t || "object" != typeof t ? (i && e.attr("data-mce-style", t), e.attr("style", t)) : e.css(t)
                        },
                        get: function(e) {
                            var t = e.attr("data-mce-style") || e.attr("style");
                            return t = n.serialize(n.parse(t), e[0].nodeName)
                        }
                    }
                };
            return i && (t.href = t.src = e), t
        },
        $i = function(e, t) {
            var n = t.attr("style"),
                r = e.serialize(e.parse(n), t[0].nodeName);
            r = r || null, t.attr("data-mce-style", r)
        },
        Wi = function(e, t) {
            var n, r, o = 0;
            if (e)
                for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r);
            return o
        };

    function Ki(a, u) {
        var s, c = this;
        void 0 === u && (u = {});

        function l(e) {
            if (e && a && "string" == typeof e) {
                var t = a.getElementById(e);
                return t && t.id !== e ? a.getElementsByName(e)[1] : t
            }
            return e
        }

        function f(e) {
            return "string" == typeof e && (e = l(e)), H(e)
        }

        function r(e, t, n) {
            var r, o, i = f(e);
            return i.length && (o = (r = s[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o
        }

        function d(e) {
            var t = l(e);
            return t ? t.attributes : []
        }

        function o(e, t, n) {
            var r, o;
            "" === n && (n = null);
            var i = f(e);
            r = i.attr(t), i.length && ((o = s[t]) && o.set ? o.set(i, n, t) : i.attr(t, n), r !== n && u.onSetAttrib && u.onSetAttrib({
                attrElm: i,
                attrName: t,
                attrValue: n
            }))
        }

        function h() {
            return u.root_element || a.body
        }

        function i(e, t) {
            return Ht.getPos(a.body, l(e), t)
        }

        function m(e, t, n) {
            var r = f(e);
            return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function(e, t) {
                return t.toUpperCase()
            })) && (t = Nn.browser.isIE() ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : undefined)
        }

        function g(e) {
            var t, n;
            return e = l(e), t = m(e, "width"), n = m(e, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), {
                w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
            }
        }

        function p(e, t) {
            var n;
            if (!e) return !1;
            if (!Array.isArray(e)) {
                if ("*" === t) return 1 === e.nodeType;
                if (Ui.test(t)) {
                    var r = t.toLowerCase().split(/,/),
                        o = e.nodeName.toLowerCase();
                    for (n = r.length - 1; 0 <= n; n--)
                        if (r[n] === o) return !0;
                    return !1
                }
                if (e.nodeType && 1 !== e.nodeType) return !1
            }
            var i = Array.isArray(e) ? e : [e];
            return 0 < Ao(t, i[0].ownerDocument || i[0], null, i).length
        }

        function v(e, t, n, r) {
            var o, i = [],
                a = l(e);
            for (r = r === undefined, n = n || ("BODY" !== h().nodeName ? h().parentNode : null), Mn.is(t, "string") && (t = "*" === (o = t) ? function(e) {
                    return 1 === e.nodeType
                } : function(e) {
                    return p(e, o)
                }); a && a !== n && a.nodeType && 9 !== a.nodeType;) {
                if (!t || "function" == typeof t && t(a)) {
                    if (!r) return [a];
                    i.push(a)
                }
                a = a.parentNode
            }
            return r ? i : null
        }

        function n(e, t, n) {
            var r = t;
            if (e)
                for ("string" == typeof t && (r = function(e) {
                        return p(e, t)
                    }), e = e[n]; e; e = e[n])
                    if ("function" == typeof r && r(e)) return e;
            return null
        }

        function y(e, n, r) {
            var o, t = "string" == typeof e ? l(e) : e;
            if (!t) return !1;
            if (Mn.isArray(t) && (t.length || 0 === t.length)) return o = [], Vi(t, function(e, t) {
                e && ("string" == typeof e && (e = l(e)), o.push(n.call(r, e, t)))
            }), o;
            var i = r || c;
            return n.call(i, t)
        }

        function b(e, t) {
            f(e).each(function(e, n) {
                Vi(t, function(e, t) {
                    o(n, t, e)
                })
            })
        }

        function C(e, r) {
            var t = f(e);
            Fi ? t.each(function(e, t) {
                if (!1 !== t.canHaveHTML) {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    try {
                        t.innerHTML = "<br>" + r, t.removeChild(t.firstChild)
                    } catch (n) {
                        vi("<div></div>").html("<br>" + r).contents().slice(1).appendTo(t)
                    }
                    return r
                }
            }) : t.html(r)
        }

        function w(e, n, r, o, i) {
            return y(e, function(e) {
                var t = "string" == typeof n ? a.createElement(n) : n;
                return b(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && C(t, o)), i ? t : e.appendChild(t)
            })
        }

        function x(e, t, n) {
            return w(a.createElement(e), e, t, n, !0)
        }

        function z(e, t) {
            var n = f(e);
            return t ? n.each(function() {
                for (var e; e = this.firstChild;) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
            }).remove() : n.remove(), 1 < n.length ? n.toArray() : n[0]
        }

        function E(e, t, n) {
            f(e).toggleClass(t, n).each(function() {
                "" === this.className && vi(this).attr("class", null)
            })
        }

        function N(t, e, n) {
            return y(e, function(e) {
                return Mn.is(e, "array") && (t = t.cloneNode(!0)), n && Vi(Ii(e.childNodes), function(e) {
                    t.appendChild(e)
                }), e.parentNode.replaceChild(t, e)
            })
        }

        function S() {
            return a.createRange()
        }

        function k(e) {
            if (e && Ge.isElement(e)) {
                var t = e.getAttribute("data-mce-contenteditable");
                return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
            }
            return null
        }
        var T = {},
            A = j.window,
            M = {},
            t = 0,
            e = function U(m, g) {
                void 0 === g && (g = {});
                var p, v = 0,
                    y = {};

                function b(e) {
                    m.getElementsByTagName("head")[0].appendChild(e)
                }

                function n(e, t, n) {
                    function r(e) {
                        l.status = e, l.passed = [], l.failed = [], u && (u.onload = null, u.onerror = null, u = null)
                    }

                    function o() {
                        for (var e = l.passed, t = e.length; t--;) e[t]();
                        r(2)
                    }

                    function i() {
                        for (var e = l.failed, t = e.length; t--;) e[t]();
                        r(3)
                    }

                    function a(e, t) {
                        e() || ((new Date).getTime() - c < p ? pn.setTimeout(t) : i())
                    }
                    var u, s, c, l, f = function() {
                            a(function() {
                                for (var e, t, n = m.styleSheets, r = n.length; r--;)
                                    if ((t = (e = n[r]).ownerNode ? e.ownerNode : e.owningElement) && t.id === u.id) return o(), !0
                            }, f)
                        },
                        d = function() {
                            a(function() {
                                try {
                                    var e = s.sheet.cssRules;
                                    return o(), !!e
                                } catch (t) {}
                            }, d)
                        };
                    if (e = Mn._addCacheSuffix(e), y[e] ? l = y[e] : (l = {
                            passed: [],
                            failed: []
                        }, y[e] = l), t && l.passed.push(t), n && l.failed.push(n), 1 !== l.status)
                        if (2 !== l.status)
                            if (3 !== l.status) {
                                if (l.status = 1, (u = m.createElement("link")).rel = "stylesheet", u.type = "text/css", u.id = "u" + v++, u.async = !1, u.defer = !1, c = (new Date).getTime(), g.contentCssCors && (u.crossOrigin = "anonymous"), g.referrerPolicy && Tt(yt.fromDom(u), "referrerpolicy", g.referrerPolicy), "onload" in u && !((h = j.navigator.userAgent.match(/WebKit\/(\d*)/)) && parseInt(h[1], 10) < 536)) u.onload = f, u.onerror = i;
                                else {
                                    if (0 < j.navigator.userAgent.indexOf("Firefox")) return (s = m.createElement("style")).textContent = '@import "' + e + '"', d(), void b(s);
                                    f()
                                }
                                var h;
                                b(u), u.href = e
                            } else i();
                    else o()
                }

                function t(t) {
                    return Xt.nu(function(e) {
                        n(t, q(e, $(Qt.value(t))), q(e, $(Qt.error(t))))
                    })
                }

                function o(e) {
                    return e.fold(W, W)
                }
                return p = g.maxLoadTime || 5e3, {
                    load: n,
                    loadAll: function(e, n, r) {
                        Yt(X(e, t)).get(function(e) {
                            var t = Y(e, function(e) {
                                return e.isValue()
                            });
                            0 < t.fail.length ? r(t.fail.map(o)) : n(t.pass.map(o))
                        })
                    },
                    _setReferrerPolicy: function(e) {
                        g.referrerPolicy = e
                    }
                }
            }(a, {
                contentCssCors: u.contentCssCors,
                referrerPolicy: u.referrerPolicy
            }),
            R = [],
            D = u.schema ? u.schema : pr({}),
            _ = xr({
                url_converter: u.url_converter,
                url_converter_scope: u.url_converter_scope
            }, u.schema),
            B = u.ownEvents ? new kr : kr.Event,
            O = D.getBlockElements(),
            H = vi.overrideDefaults(function() {
                return {
                    context: a,
                    element: F.getRoot()
                }
            }),
            P = ir.decode,
            L = ir.encodeAllRaw,
            V = function(e, t, n, r) {
                if (Mn.isArray(e)) {
                    for (var o = e.length, i = []; o--;) i[o] = V(e[o], t, n, r);
                    return i
                }
                return !u.collect || e !== a && e !== A || R.push([e, t, n, r]), B.bind(e, t, n, r || F)
            },
            I = function(e, t, n) {
                var r;
                if (Mn.isArray(e)) {
                    r = e.length;
                    for (var o = []; r--;) o[r] = I(e[r], t, n);
                    return o
                }
                if (R && (e === a || e === A))
                    for (r = R.length; r--;) {
                        var i = R[r];
                        e !== i[0] || t && t !== i[1] || n && n !== i[2] || B.unbind(i[0], i[1], i[2])
                    }
                return B.unbind(e, t, n)
            },
            F = {
                doc: a,
                settings: u,
                win: A,
                files: M,
                stdMode: !0,
                boxModel: !0,
                styleSheetLoader: e,
                boundEvents: R,
                styles: _,
                schema: D,
                events: B,
                isBlock: function(e) {
                    if ("string" == typeof e) return !!O[e];
                    if (e) {
                        var t = e.nodeType;
                        if (t) return !(1 !== t || !O[e.nodeName])
                    }
                    return !1
                },
                $: H,
                $$: f,
                root: null,
                clone: function(t, e) {
                    if (!Fi || 1 !== t.nodeType || e) return t.cloneNode(e);
                    if (e) return null;
                    var n = a.createElement(t.nodeName);
                    return Vi(d(t), function(e) {
                        o(n, e.nodeName, r(t, e.nodeName))
                    }), n
                },
                getRoot: h,
                getViewPort: function(e) {
                    var t = Li(e);
                    return {
                        x: t.x(),
                        y: t.y(),
                        w: t.width(),
                        h: t.height()
                    }
                },
                getRect: function(e) {
                    var t, n;
                    return e = l(e), t = i(e), n = g(e), {
                        x: t.x,
                        y: t.y,
                        w: n.w,
                        h: n.h
                    }
                },
                getSize: g,
                getParent: function(e, t, n) {
                    var r = v(e, t, n, !1);
                    return r && 0 < r.length ? r[0] : null
                },
                getParents: v,
                get: l,
                getNext: function(e, t) {
                    return n(e, t, "nextSibling")
                },
                getPrev: function(e, t) {
                    return n(e, t, "previousSibling")
                },
                select: function(e, t) {
                    return Ao(e, l(t) || u.root_element || a, [])
                },
                is: p,
                add: w,
                create: x,
                createHTML: function(e, t, n) {
                    var r, o = "";
                    for (r in o += "<" + e, t) t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + L(t[r]) + '"');
                    return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />"
                },
                createFragment: function(e) {
                    var t, n = a.createElement("div"),
                        r = a.createDocumentFragment();
                    for (e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                    return r
                },
                remove: z,
                setStyle: function(e, t, n) {
                    var r = K(t) ? f(e).css(t, n) : f(e).css(t);
                    u.update_styles && $i(_, r)
                },
                getStyle: m,
                setStyles: function(e, t) {
                    var n = f(e).css(t);
                    u.update_styles && $i(_, n)
                },
                removeAllAttribs: function(e) {
                    return y(e, function(e) {
                        var t, n = e.attributes;
                        for (t = n.length - 1; 0 <= t; t--) e.removeAttributeNode(n.item(t))
                    })
                },
                setAttrib: o,
                setAttribs: b,
                getAttrib: r,
                getPos: i,
                parseStyle: function(e) {
                    return _.parse(e)
                },
                serializeStyle: function(e, t) {
                    return _.serialize(e, t)
                },
                addStyle: function(e) {
                    var t, n;
                    if (F !== Ki.DOM && a === j.document) {
                        if (T[e]) return;
                        T[e] = !0
                    }(n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e))
                },
                loadCSS: function(e) {
                    var n;
                    F === Ki.DOM || a !== j.document ? (e = e || "", n = a.getElementsByTagName("head")[0], Vi(e.split(","), function(e) {
                        var t;
                        e = Mn._addCacheSuffix(e), M[e] || (M[e] = !0, t = x("link", G(G({
                            rel: "stylesheet",
                            type: "text/css",
                            href: e
                        }, u.contentCssCors ? {
                            crossOrigin: "anonymous"
                        } : {}), u.referrerPolicy ? {
                            referrerPolicy: u.referrerPolicy
                        } : {})), n.appendChild(t))
                    })) : Ki.DOM.loadCSS(e)
                },
                addClass: function(e, t) {
                    f(e).addClass(t)
                },
                removeClass: function(e, t) {
                    E(e, t, !1)
                },
                hasClass: function(e, t) {
                    return f(e).hasClass(t)
                },
                toggleClass: E,
                show: function(e) {
                    f(e).show()
                },
                hide: function(e) {
                    f(e).hide()
                },
                isHidden: function(e) {
                    return "none" === f(e).css("display")
                },
                uniqueId: function(e) {
                    return (e || "mce_") + t++
                },
                setHTML: C,
                getOuterHTML: function(e) {
                    var t = "string" == typeof e ? l(e) : e;
                    return Ge.isElement(t) ? t.outerHTML : vi("<div></div>").append(vi(t).clone()).html()
                },
                setOuterHTML: function(e, t) {
                    f(e).each(function() {
                        try {
                            if ("outerHTML" in this) return void(this.outerHTML = t)
                        } catch (e) {}
                        z(vi(this).html(t), !0)
                    })
                },
                decode: P,
                encode: L,
                insertAfter: function(e, t) {
                    var r = l(t);
                    return y(e, function(e) {
                        var t, n;
                        return t = r.parentNode, (n = r.nextSibling) ? t.insertBefore(e, n) : t.appendChild(e), e
                    })
                },
                replace: N,
                rename: function(t, e) {
                    var n;
                    return t.nodeName !== e.toUpperCase() && (n = x(e), Vi(d(t), function(e) {
                        o(n, e.nodeName, r(t, e.nodeName))
                    }), N(n, t, !0)), n || t
                },
                findCommonAncestor: function(e, t) {
                    for (var n, r = e; r;) {
                        for (n = t; n && r !== n;) n = n.parentNode;
                        if (r === n) break;
                        r = r.parentNode
                    }
                    return !r && e.ownerDocument ? e.ownerDocument.documentElement : r
                },
                toHex: function(e) {
                    return _.toHex(Mn.trim(e))
                },
                run: y,
                getAttribs: d,
                isEmpty: function(e, t) {
                    var n, r, o, i, a = 0;
                    if (e = e.firstChild) {
                        var u = new yi(e, e.parentNode),
                            s = D ? D.getWhiteSpaceElements() : {};
                        t = t || (D ? D.getNonEmptyElements() : null);
                        do {
                            if (o = e.nodeType, Ge.isElement(e)) {
                                var c = e.getAttribute("data-mce-bogus");
                                if (c) {
                                    e = u.next("all" === c);
                                    continue
                                }
                                if (i = e.nodeName.toLowerCase(), t && t[i]) {
                                    if ("br" !== i) return !1;
                                    a++, e = u.next();
                                    continue
                                }
                                for (n = (r = d(e)).length; n--;)
                                    if ("name" === (i = r[n].nodeName) || "data-mce-bookmark" === i) return !1
                            }
                            if (8 === o) return !1;
                            if (3 === o && !ji.test(e.nodeValue)) return !1;
                            if (3 === o && e.parentNode && s[e.parentNode.nodeName] && ji.test(e.nodeValue)) return !1;
                            e = u.next()
                        } while (e)
                    }
                    return a <= 1
                },
                createRng: S,
                nodeIndex: Wi,
                split: function(e, t, n) {
                    var r, o, i, a = S();
                    if (e && t) return a.setStart(e.parentNode, Wi(e)), a.setEnd(t.parentNode, Wi(t)), r = a.extractContents(), (a = S()).setStart(t.parentNode, Wi(t) + 1), a.setEnd(e.parentNode, Wi(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Xn.trimNode(F, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Xn.trimNode(F, o), e), z(e), n || t
                },
                bind: V,
                unbind: I,
                fire: function(e, t, n) {
                    return B.fire(e, t, n)
                },
                getContentEditable: k,
                getContentEditableParent: function(e) {
                    for (var t = h(), n = null; e && e !== t && null === (n = k(e)); e = e.parentNode);
                    return n
                },
                destroy: function() {
                    if (R)
                        for (var e = R.length; e--;) {
                            var t = R[e];
                            B.unbind(t[0], t[1], t[2])
                        }
                    Ao.setDocument && Ao.setDocument()
                },
                isChildOf: function(e, t) {
                    for (; e;) {
                        if (t === e) return !0;
                        e = e.parentNode
                    }
                    return !1
                },
                dumpRng: function(e) {
                    return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                }
            };
        return s = qi(_, u, function() {
            return F
        }), F
    }(Ri = Ki = Ki || {}).DOM = Ri(j.document), Ri.nodeIndex = Wi;
    var Xi = Ki,
        Yi = Xi.DOM,
        Gi = Mn.each,
        Ji = Mn.grep,
        Qi = (Zi.prototype._setReferrerPolicy = function(e) {
            this.settings.referrerPolicy = e
        }, Zi.prototype.loadScript = function(e, t, n) {
            var r, o, i = Yi;
            o = i.uniqueId(), (r = j.document.createElement("script")).id = o, r.type = "text/javascript", r.src = Mn._addCacheSuffix(e), this.settings.referrerPolicy && i.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy), r.onload = function() {
                i.remove(o), r && (r.onreadystatechange = r.onload = r = null), t()
            }, r.onerror = function() {
                D(n) ? n() : "undefined" != typeof j.console && j.console.log && j.console.log("Failed to load script: " + e)
            }, (j.document.getElementsByTagName("head")[0] || j.document.body).appendChild(r)
        }, Zi.prototype.isDone = function(e) {
            return 2 === this.states[e]
        }, Zi.prototype.markDone = function(e) {
            this.states[e] = 2
        }, Zi.prototype.add = function(e, t, n, r) {
            this.states[e] === undefined && (this.queue.push(e), this.states[e] = 0), t && (this.scriptLoadedCallbacks[e] || (this.scriptLoadedCallbacks[e] = []), this.scriptLoadedCallbacks[e].push({
                success: t,
                failure: r,
                scope: n || this
            }))
        }, Zi.prototype.load = function(e, t, n, r) {
            return this.add(e, t, n, r)
        }, Zi.prototype.remove = function(e) {
            delete this.states[e], delete this.scriptLoadedCallbacks[e]
        }, Zi.prototype.loadQueue = function(e, t, n) {
            this.loadScripts(this.queue, e, t, n)
        }, Zi.prototype.loadScripts = function(n, e, t, r) {
            function o(t, e) {
                Gi(a.scriptLoadedCallbacks[e], function(e) {
                    D(e[t]) && e[t].call(e.scope)
                }), a.scriptLoadedCallbacks[e] = undefined
            }
            var i, a = this,
                u = [];
            a.queueLoadedCallbacks.push({
                success: e,
                failure: r,
                scope: t || this
            }), (i = function() {
                var e = Ji(n);
                if (n.length = 0, Gi(e, function(e) {
                        2 !== a.states[e] ? 3 !== a.states[e] ? 1 !== a.states[e] && (a.states[e] = 1, a.loading++, a.loadScript(e, function() {
                            a.states[e] = 2, a.loading--, o("success", e), i()
                        }, function() {
                            a.states[e] = 3, a.loading--, u.push(e), o("failure", e), i()
                        })) : o("failure", e) : o("success", e)
                    }), !a.loading) {
                    var t = a.queueLoadedCallbacks.slice(0);
                    a.queueLoadedCallbacks.length = 0, Gi(t, function(e) {
                        0 === u.length ? D(e.success) && e.success.call(e.scope) : D(e.failure) && e.failure.call(e.scope, u)
                    })
                }
            })()
        }, Zi.ScriptLoader = new Zi, Zi);

    function Zi(e) {
        void 0 === e && (e = {}), this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = 0, this.settings = e
    }
    var ea, ta = {},
        na = Je("en"),
        ra = {
            getData: function() {
                return se(ta, function(e) {
                    return G({}, e)
                })
            },
            setCode: function(e) {
                e && na.set(e)
            },
            getCode: function() {
                return na.get()
            },
            add: function(e, t) {
                var n = ta[e];
                for (var r in n || (ta[e] = n = {}), t) n[r.toLowerCase()] = t[r]
            },
            translate: function(e) {
                function r(e) {
                    return D(e) ? Object.prototype.toString.call(e) : a(e) ? "" : "" + e
                }

                function t(e) {
                    var t = r(e),
                        n = t.toLowerCase();
                    return kt(i, n) ? r(i[n]) : t
                }

                function n(e) {
                    return e.replace(/{context:\w+}$/, "")
                }

                function o(e) {
                    return e
                }
                var i = ta[na.get()] || {},
                    a = function(e) {
                        return "" === e || null === e || e === undefined
                    };
                if (a(e)) return o("");
                if (function(e) {
                        return T(e) && kt(e, "raw")
                    }(e)) return o(r(e.raw));
                if (function(e) {
                        return A(e) && 1 < e.length
                    }(e)) {
                    var u = e.slice(1);
                    return o(n(t(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
                        return kt(u, t) ? r(u[t]) : e
                    })))
                }
                return o(n(t(e)))
            },
            isRtl: function() {
                return le(ta, na.get()).bind(function(e) {
                    return le(e, "_dir")
                }).exists(function(e) {
                    return "rtl" === e
                })
            },
            hasCode: function(e) {
                return kt(ta, e)
            }
        },
        oa = Mn.each;

    function ia() {
        function i(e) {
            var t;
            return c[e] && (t = c[e].dependencies), t || []
        }

        function a(e, t) {
            return "object" == typeof t ? t : "string" == typeof e ? {
                prefix: "",
                resource: t,
                suffix: ""
            } : {
                prefix: e.prefix,
                resource: t,
                suffix: e.suffix
            }
        }

        function u(e, n, t, r) {
            var o = i(e);
            oa(o, function(e) {
                var t = a(n, e);
                f(t.resource, t, undefined, undefined)
            }), t && (r ? t.call(r) : t.call(Qi))
        }
        var r = this,
            o = [],
            s = {},
            c = {},
            l = [],
            f = function(e, t, n, r, o) {
                if (!s[e]) {
                    var i = "string" == typeof t ? t : t.prefix + t.resource + t.suffix;
                    0 !== i.indexOf("/") && -1 === i.indexOf("://") && (i = ia.baseURL + "/" + i), s[e] = i.substring(0, i.lastIndexOf("/")), c[e] ? u(e, t, n, r) : Qi.ScriptLoader.add(i, function() {
                        return u(e, t, n, r)
                    }, r, o)
                }
            };
        return {
            items: o,
            urls: s,
            lookup: c,
            _listeners: l,
            get: function(e) {
                return c[e] ? c[e].instance : undefined
            },
            dependencies: i,
            requireLangPack: function(e, t) {
                var n = ra.getCode();
                if (n && !1 !== ia.languageLoad) {
                    if (t)
                        if (-1 !== (t = "," + t + ",").indexOf("," + n.substr(0, 2) + ",")) n = n.substr(0, 2);
                        else if (-1 === t.indexOf("," + n + ",")) return;
                    Qi.ScriptLoader.add(s[e] + "/langs/" + n + ".js")
                }
            },
            add: function(t, e, n) {
                o.push(e), c[t] = {
                    instance: e,
                    dependencies: n
                };
                var r = Y(l, function(e) {
                    return e.name === t
                });
                return l = r.fail, oa(r.pass, function(e) {
                    e.callback()
                }), e
            },
            remove: function(e) {
                delete s[e], delete c[e]
            },
            createUrl: a,
            addComponents: function(e, t) {
                var n = r.urls[e];
                oa(t, function(e) {
                    Qi.ScriptLoader.add(n + "/" + e)
                })
            },
            load: f,
            waitFor: function(e, t) {
                c.hasOwnProperty(e) ? t() : l.push({
                    name: e,
                    callback: t
                })
            }
        }
    }(ea = ia = ia || {}).PluginManager = ea(), ea.ThemeManager = ea();

    function aa(n, r) {
        var o = null;
        return {
            cancel: function() {
                null !== o && (j.clearTimeout(o), o = null)
            },
            throttle: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                null === o && (o = j.setTimeout(function() {
                    n.apply(null, e), o = null
                }, r))
            }
        }
    }

    function ua(e, t) {
        var n = ge(e, t);
        return n === undefined || "" === n ? [] : n.split(" ")
    }

    function sa(e) {
        return e.dom().classList !== undefined
    }

    function ca(e, t) {
        return function(e, t, n) {
            var r = ua(e, t).concat([n]);
            return Tt(e, t, r.join(" ")), !0
        }(e, "class", t)
    }

    function la(e, t) {
        return function(e, t, n) {
            var r = y(ua(e, t), function(e) {
                return e !== n
            });
            return 0 < r.length ? Tt(e, t, r.join(" ")) : pe(e, t), !1
        }(e, "class", t)
    }

    function fa(e, t) {
        sa(e) ? e.dom().classList.add(t) : ca(e, t)
    }

    function da(e) {
        0 === (sa(e) ? e.dom().classList : function(e) {
            return ua(e, "class")
        }(e)).length && pe(e, "class")
    }

    function ha(e, t) {
        return sa(e) && e.dom().classList.contains(t)
    }

    function ma(e, t) {
        return function(e, t) {
            var n = t === undefined ? j.document : t.dom();
            return xe(n) ? [] : X(n.querySelectorAll(e), yt.fromDom)
        }(t, e)
    }
    var ga = ia,
        pa = function(e, t) {
            var n = [];
            return z(Re(e), function(e) {
                t(e) && (n = n.concat([e])), n = n.concat(pa(e, t))
            }), n
        };

    function va(e, t, n, r, o) {
        return e(n, r) ? k.some(n) : D(o) && o(n) ? k.none() : t(n, r, o)
    }

    function ya(e, t, n) {
        for (var r = e.dom(), o = D(n) ? n : $(!1); r.parentNode;) {
            r = r.parentNode;
            var i = yt.fromDom(r);
            if (t(i)) return k.some(i);
            if (o(i)) break
        }
        return k.none()
    }

    function ba(e, t, n) {
        return va(function(e, t) {
            return t(e)
        }, ya, e, t, n)
    }

    function Ca(e, t, n) {
        return ya(e, function(e) {
            return we(e, t)
        }, n)
    }

    function wa(e, t) {
        return function(e, t) {
            var n = t === undefined ? j.document : t.dom();
            return xe(n) ? k.none() : k.from(n.querySelector(e)).map(yt.fromDom)
        }(t, e)
    }

    function xa(e, t, n) {
        return va(we, Ca, e, t, n)
    }

    function za(r, e) {
        function t(e, t) {
            return function(e, t) {
                var n = e.dom();
                return !(!n || !n.hasAttribute) && n.hasAttribute(t)
            }(e, t) ? k.some(ge(e, t)) : k.none()
        }
        var n = r.selection.getRng(),
            o = yt.fromDom(n.startContainer),
            i = yt.fromDom(r.getBody()),
            a = e.fold(function() {
                return "." + nu()
            }, function(e) {
                return "[" + ru() + '="' + e + '"]'
            }),
            u = De(o, n.startOffset).getOr(o);
        return xa(u, a, function(e) {
            return ze(e, i)
        }).bind(function(e) {
            return t(e, "" + ou()).bind(function(n) {
                return t(e, "" + ru()).map(function(e) {
                    var t = iu(r, n);
                    return {
                        uid: n,
                        name: e,
                        elements: t
                    }
                })
            })
        })
    }

    function Ea(n, e) {
        function a(e, t) {
            r(e, function(e) {
                return t(e), e
            })
        }
        var o = Je({}),
            r = function(e, t) {
                var n = o.get(),
                    r = t(n.hasOwnProperty(e) ? n[e] : {
                        listeners: [],
                        previous: Je(k.none())
                    });
                n[e] = r, o.set(n)
            },
            t = function(n, r) {
                var o = null;
                return {
                    cancel: function() {
                        null !== o && (j.clearTimeout(o), o = null)
                    },
                    throttle: function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        null !== o && j.clearTimeout(o), o = j.setTimeout(function() {
                            n.apply(null, e), o = null
                        }, r)
                    }
                }
            }(function() {
                var e = o.get(),
                    t = function(e, t) {
                        var n = B.call(e, 0);
                        return n.sort(t), n
                    }(Et(e));
                z(t, function(e) {
                    r(e, function(o) {
                        var i = o.previous.get();
                        return za(n, k.some(e)).fold(function() {
                            i.isSome() && (function(t) {
                                a(t, function(e) {
                                    z(e.listeners, function(e) {
                                        return e(!1, t)
                                    })
                                })
                            }(e), o.previous.set(k.none()))
                        }, function(e) {
                            var t = e.uid,
                                n = e.name,
                                r = e.elements;
                            i.is(t) || (function(t, n, r) {
                                a(t, function(e) {
                                    z(e.listeners, function(e) {
                                        return e(!0, t, {
                                            uid: n,
                                            nodes: X(r, function(e) {
                                                return e.dom()
                                            })
                                        })
                                    })
                                })
                            }(n, t, r), o.previous.set(k.some(t)))
                        }), {
                            previous: o.previous,
                            listeners: o.listeners
                        }
                    })
                })
            }, 30);
        return n.on("remove", function() {
            t.cancel()
        }), n.on("NodeChange", function() {
            t.throttle()
        }), {
            addListener: function(e, t) {
                r(e, function(e) {
                    return {
                        previous: e.previous,
                        listeners: e.listeners.concat([t])
                    }
                })
            }
        }
    }

    function Na(e, n) {
        e.on("init", function() {
            e.serializer.addNodeFilter("span", function(e) {
                z(e, function(t) {
                    (function(e) {
                        return k.from(e.attr(ru())).bind(n.lookup)
                    })(t).each(function(e) {
                        !1 === e.persistent && t.unwrap()
                    })
                })
            })
        })
    }

    function Sa(e, t) {
        return yt.fromDom(e.dom().cloneNode(t))
    }

    function ka(e) {
        return Sa(e, !1)
    }

    function Ta(e) {
        return Sa(e, !0)
    }

    function Aa(e, t) {
        var n = Ee(e).dom(),
            r = yt.fromDom(n.createDocumentFragment()),
            o = function(e, t) {
                var n = (t || j.document).createElement("div");
                return n.innerHTML = e, Re(yt.fromDom(n))
            }(t, n);
        zi(r, o), Ei(e), Di(e, r)
    }

    function Ma(e) {
        return du(e) && (e = e.parentNode), fu(e) && e.hasAttribute("data-mce-caret")
    }

    function Ra(e) {
        return du(e) && su(e.data)
    }

    function Da(e) {
        return Ma(e) || Ra(e)
    }

    function _a(e) {
        return e.firstChild !== e.lastChild || !Ge.isBr(e.firstChild)
    }

    function Ba(e) {
        var t = e.container();
        return !(!e || !Ge.isText(t)) && (t.data.charAt(e.offset()) === cu || e.isAtStart() && Ra(t.previousSibling))
    }

    function Oa(e) {
        var t = e.container();
        return !(!e || !Ge.isText(t)) && (t.data.charAt(e.offset() - 1) === cu || e.isAtEnd() && Ra(t.nextSibling))
    }

    function Ha(e, t, n) {
        var r, o;
        return (r = t.ownerDocument.createElement(e)).setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(function() {
            var e = j.document.createElement("br");
            return e.setAttribute("data-mce-bogus", "1"), e
        }()), o = t.parentNode, n ? o.insertBefore(r, t) : t.nextSibling ? o.insertBefore(r, t.nextSibling) : o.appendChild(r), r
    }

    function Pa(e) {
        return e && e.hasAttribute("data-mce-caret") ? (function(e) {
            var t = e.getElementsByTagName("br"),
                n = t[t.length - 1];
            Ge.isBogus(n) && n.parentNode.removeChild(n)
        }(e), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null
    }

    function La(e) {
        return !xu(e) && (yu(e) ? !bu(e.parentNode) : Cu(e) || vu(e) || wu(e) || zu(e))
    }

    function Va(e, t) {
        return La(e) && function(e, t) {
            for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                if (zu(e)) return !1;
                if (gu(e)) return !0
            }
            return !0
        }(e, t)
    }

    function Ia(e) {
        return e ? {
            left: Eu(e.left),
            top: Eu(e.top),
            bottom: Eu(e.bottom),
            right: Eu(e.right),
            width: Eu(e.width),
            height: Eu(e.height)
        } : {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }

    function Fa(e, t) {
        return e = Ia(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e
    }

    function Ua(e, t, n) {
        return 0 <= e && e <= Math.min(t.height, n.height) / 2
    }

    function ja(e, t) {
        return e.bottom - e.height / 2 < t.top || !(e.top > t.bottom) && Ua(t.top - e.bottom, e, t)
    }

    function qa(e, t) {
        return e.top > t.bottom || !(e.bottom < t.top) && Ua(t.bottom - e.top, e, t)
    }

    function $a(e, t, n) {
        return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom
    }

    function Wa(e) {
        var t = e.startContainer,
            n = e.startOffset;
        return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
    }

    function Ka(e, t) {
        return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e
    }

    function Xa(e) {
        return "string" == typeof e && 768 <= e.charCodeAt(0) && Nu.test(e)
    }

    function Ya(e, t, n) {
        return e.isSome() && t.isSome() ? k.some(n(e.getOrDie(), t.getOrDie())) : k.none()
    }

    function Ga(e) {
        return e && /[\r\n\t ]/.test(e)
    }

    function Ja(e) {
        return !!e.setStart && !!e.setEnd
    }

    function Qa(e) {
        var t, n = e.startContainer,
            r = e.startOffset;
        return !!(Ga(e.toString()) && Bu(n.parentNode) && Ge.isText(n) && (t = n.data, Ga(t[r - 1]) || Ga(t[r + 1])))
    }

    function Za(e) {
        return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
    }

    function eu(e, t) {
        var n = Fa(e, t);
        return n.width = 1, n.right = n.left + 1, n
    }
    var tu, nu = $("mce-annotation"),
        ru = $("data-mce-annotation"),
        ou = $("data-mce-annotation-uid"),
        iu = function(e, t) {
            var n = yt.fromDom(e.getBody());
            return ma(n, "[" + ou() + '="' + t + '"]')
        },
        au = 0,
        uu = "\ufeff",
        su = function(e) {
            return e === uu
        },
        cu = uu,
        lu = function(e) {
            return e.replace(new RegExp(uu, "g"), "")
        },
        fu = Ge.isElement,
        du = Ge.isText,
        hu = function(e) {
            return du(e) && e.data[0] === cu
        },
        mu = function(e) {
            return du(e) && e.data[e.data.length - 1] === cu
        },
        gu = Ge.isContentEditableTrue,
        pu = Ge.isContentEditableFalse,
        vu = Ge.isBr,
        yu = Ge.isText,
        bu = Ge.matchNodeNames(["script", "style", "textarea"]),
        Cu = Ge.matchNodeNames(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object"]),
        wu = Ge.matchNodeNames(["table"]),
        xu = Da,
        zu = function(e) {
            return !1 === function(e) {
                return Ge.isElement(e) && "true" === e.getAttribute("unselectable")
            }(e) && pu(e)
        },
        Eu = Math.round,
        Nu = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        Su = [].slice,
        ku = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = Su.call(arguments);
            return function(e) {
                for (var t = 0; t < n.length; t++)
                    if (!n[t](e)) return !1;
                return !0
            }
        },
        Tu = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = Su.call(arguments);
            return function(e) {
                for (var t = 0; t < n.length; t++)
                    if (n[t](e)) return !0;
                return !1
            }
        },
        Au = Ge.isElement,
        Mu = La,
        Ru = Ge.matchStyleValues("display", "block table"),
        Du = Ge.matchStyleValues("float", "left right"),
        _u = ku(Au, Mu, s(Du)),
        Bu = s(Ge.matchStyleValues("white-space", "pre pre-line pre-wrap")),
        Ou = Ge.isText,
        Hu = Ge.isBr,
        Pu = Xi.nodeIndex,
        Lu = Ka,
        Vu = function(e) {
            return "createRange" in e ? e.createRange() : Xi.DOM.createRng()
        },
        Iu = function(e) {
            var t, n;
            return t = 0 < (n = e.getClientRects()).length ? Ia(n[0]) : Ia(e.getBoundingClientRect()), !Ja(e) && Hu(e) && Za(t) ? function(e) {
                var t, n = e.ownerDocument,
                    r = Vu(n),
                    o = n.createTextNode("\xa0"),
                    i = e.parentNode;
                return i.insertBefore(o, e), r.setStart(o, 0), r.setEnd(o, 1), t = Ia(r.getBoundingClientRect()), i.removeChild(o), t
            }(e) : Za(t) && Ja(e) ? function(e) {
                var t = e.startContainer,
                    n = e.endContainer,
                    r = e.startOffset,
                    o = e.endOffset;
                if (t === n && Ge.isText(n) && 0 === r && 1 === o) {
                    var i = e.cloneRange();
                    return i.setEndAfter(n), Iu(i)
                }
                return null
            }(e) : t
        },
        Fu = function(e) {
            function r(e) {
                0 !== e.height && (0 < i.length && function(e, t) {
                    return e.left === t.left && e.top === t.top && e.bottom === t.bottom && e.right === t.right
                }(e, i[i.length - 1]) || i.push(e))
            }

            function t(e, t) {
                var n = Vu(e.ownerDocument);
                if (t < e.data.length) {
                    if (Xa(e.data[t])) return i;
                    if (Xa(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Qa(n))) return r(eu(Iu(n), !1)), i
                }
                0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Qa(n) || r(eu(Iu(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Qa(n) || r(eu(Iu(n), !0)))
            }
            var n, o, i = [];
            if (Ou(e.container())) return t(e.container(), e.offset()), i;
            if (Au(e.container()))
                if (e.isAtEnd()) o = Lu(e.container(), e.offset()), Ou(o) && t(o, o.data.length), _u(o) && !Hu(o) && r(eu(Iu(o), !1));
                else {
                    if (o = Lu(e.container(), e.offset()), Ou(o) && t(o, 0), _u(o) && e.isAtEnd()) return r(eu(Iu(o), !1)), i;
                    n = Lu(e.container(), e.offset() - 1), _u(n) && !Hu(n) && (!Ru(n) && !Ru(o) && _u(o) || r(eu(Iu(n), !1))), _u(o) && r(eu(Iu(o), !0))
                }
            return i
        };

    function Uu(t, n, e) {
        function r() {
            return e = e || Fu(Uu(t, n))
        }
        return {
            container: $(t),
            offset: $(n),
            toRange: function() {
                var e;
                return (e = Vu(t.ownerDocument)).setStart(t, n), e.setEnd(t, n), e
            },
            getClientRects: r,
            isVisible: function() {
                return 0 < r().length
            },
            isAtStart: function() {
                return Ou(t), 0 === n
            },
            isAtEnd: function() {
                return Ou(t) ? n >= t.data.length : n >= t.childNodes.length
            },
            isEqual: function(e) {
                return e && t === e.container() && n === e.offset()
            },
            getNode: function(e) {
                return Lu(t, e ? n - 1 : n)
            }
        }
    }(tu = Uu = Uu || {}).fromRangeStart = function(e) {
        return tu(e.startContainer, e.startOffset)
    }, tu.fromRangeEnd = function(e) {
        return tu(e.endContainer, e.endOffset)
    }, tu.after = function(e) {
        return tu(e.parentNode, Pu(e) + 1)
    }, tu.before = function(e) {
        return tu(e.parentNode, Pu(e))
    }, tu.isAbove = function(e, t) {
        return Ya(E(t.getClientRects()), N(e.getClientRects()), ja).getOr(!1)
    }, tu.isBelow = function(e, t) {
        return Ya(N(t.getClientRects()), E(e.getClientRects()), qa).getOr(!1)
    }, tu.isAtStart = function(e) {
        return !!e && e.isAtStart()
    }, tu.isAtEnd = function(e) {
        return !!e && e.isAtEnd()
    }, tu.isTextPosition = function(e) {
        return !!e && Ge.isText(e.container())
    }, tu.isElementPosition = function(e) {
        return !1 === tu.isTextPosition(e)
    };

    function ju(t) {
        return function(e) {
            return t === e
        }
    }

    function qu(e) {
        return (_s(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + function(e) {
            var r, t, n;
            return r = Ps(Hs(e)), t = kn.findIndex(r, ju(e), e), r = r.slice(0, t + 1), n = kn.reduce(r, function(e, t, n) {
                return _s(t) && _s(r[n - 1]) && e++, e
            }, 0), r = kn.filter(r, Ge.matchNodeNames([e.nodeName])), (t = kn.findIndex(r, ju(e), e)) - n
        }(e) + "]"
    }

    function $u(e, t) {
        var n, r, o, i, a, u = [];
        return n = t.container(), r = t.offset(), _s(n) ? o = function(e, t) {
            for (;
                (e = e.previousSibling) && _s(e);) t += e.data.length;
            return t
        }(n, r) : (r >= (i = n.childNodes).length ? (o = "after", r = i.length - 1) : o = "before", n = i[r]), u.push(qu(n)), a = function(e, t, n) {
            var r = [];
            for (t = t.parentNode; t !== e && (!n || !n(t)); t = t.parentNode) r.push(t);
            return r
        }(e, n), a = kn.filter(a, s(Ge.isBogus)), (u = u.concat(kn.map(a, function(e) {
            return qu(e)
        }))).reverse().join("/") + "," + o
    }

    function Wu(e, t) {
        var n, r, o;
        return t ? (t = (n = t.split(","))[0].split("/"), o = 1 < n.length ? n[1] : "before", (r = kn.reduce(t, function(e, t) {
            return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)) ? ("text()" === t[1] && (t[1] = "#text"), function(e, t, n) {
                var r = Ps(e);
                return r = kn.filter(r, function(e, t) {
                    return !_s(e) || !_s(r[t - 1])
                }), (r = kn.filter(r, Ge.matchNodeNames([t])))[n]
            }(e, t[1], parseInt(t[2], 10))) : null
        }, e)) ? _s(r) ? function(e, t) {
            for (var n, r = e, o = 0; _s(r);) {
                if (n = r.data.length, o <= t && t <= o + n) {
                    e = r, t -= o;
                    break
                }
                if (!_s(r.nextSibling)) {
                    e = r, t = n;
                    break
                }
                o += n, r = r.nextSibling
            }
            return _s(e) && t > e.data.length && (t = e.data.length), Ds(e, t)
        }(r, parseInt(o, 10)) : (o = "after" === o ? Os(r) + 1 : Os(r), Ds(r.parentNode, o)) : null) : null
    }

    function Ku(e, t) {
        Ge.isText(t) && 0 === t.data.length && e.remove(t)
    }

    function Xu(e, t, n) {
        Ge.isDocumentFragment(n) ? function(t, e, n) {
            var r = k.from(n.firstChild),
                o = k.from(n.lastChild);
            e.insertNode(n), r.each(function(e) {
                return Ku(t, e.previousSibling)
            }), o.each(function(e) {
                return Ku(t, e.nextSibling)
            })
        }(e, t, n) : function(e, t, n) {
            t.insertNode(n), Ku(e, n.previousSibling), Ku(e, n.nextSibling)
        }(e, t, n)
    }

    function Yu(e, t, n, r, o) {
        var i, a = r[o ? "startContainer" : "endContainer"],
            u = r[o ? "startOffset" : "endOffset"],
            s = [],
            c = 0,
            l = e.getRoot();
        for (Ge.isText(a) ? s.push(n ? function(e, t, n) {
                var r, o;
                for (o = e(t.data.slice(0, n)).length, r = t.previousSibling; r && Ge.isText(r); r = r.previousSibling) o += e(r.data).length;
                return o
            }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (c = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + c)); a && a !== l; a = a.parentNode) s.push(e.nodeIndex(a, n));
        return s
    }

    function Gu(e, t, n) {
        var r = 0;
        return Mn.each(e.select(t), function(e) {
            if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++
        }), r
    }

    function Ju(e, t) {
        var n, r, o, i = t ? "start" : "end";
        n = e[i + "Container"], r = e[i + "Offset"], Ge.isElement(n) && "TR" === n.nodeName && (n = (o = n.childNodes)[Math.min(t ? r : r - 1, o.length - 1)]) && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r))
    }

    function Qu(e) {
        return Ju(e, !0), Ju(e, !1), e
    }

    function Zu(e, t) {
        var n;
        if (Ge.isElement(e) && (e = Ka(e, t), Ls(e))) return e;
        if (Da(e)) {
            if (Ge.isText(e) && Ma(e) && (e = e.parentNode), n = e.previousSibling, Ls(n)) return n;
            if (n = e.nextSibling, Ls(n)) return n
        }
    }

    function es(e, t, n) {
        var r = n.getNode(),
            o = r ? r.nodeName : null,
            i = n.getRng();
        if (Ls(r) || "IMG" === o) return {
            name: o,
            index: Gu(n.dom, o, r)
        };
        var a = function(e) {
            return Zu(e.startContainer, e.startOffset) || Zu(e.endContainer, e.endOffset)
        }(i);
        return a ? {
            name: o = a.tagName,
            index: Gu(n.dom, o, a)
        } : function(e, t, n, r) {
            var o = t.dom,
                i = {};
            return i.start = Yu(o, e, n, r, !0), t.isCollapsed() || (i.end = Yu(o, e, n, r, !1)), i
        }(e, n, t, i)
    }

    function ts(e, t, n) {
        var r = {
            "data-mce-type": "bookmark",
            id: t,
            style: "overflow:hidden;line-height:0px"
        };
        return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r)
    }

    function ns(e, t) {
        var n = e.dom,
            r = e.getRng(),
            o = n.uniqueId(),
            i = e.isCollapsed(),
            a = e.getNode(),
            u = a.nodeName;
        if ("IMG" === u) return {
            name: u,
            index: Gu(n, u, a)
        };
        var s = Qu(r.cloneRange());
        if (!i) {
            s.collapse(!1);
            var c = ts(n, o + "_end", t);
            Xu(n, s, c)
        }(r = Qu(r)).collapse(!0);
        var l = ts(n, o + "_start", t);
        return Xu(n, r, l), e.moveToBookmark({
            id: o,
            keep: 1
        }), {
            id: o
        }
    }

    function rs(e) {
        return Ge.isElement(e) && e.id === Is
    }

    function os(e, t) {
        for (; t && t !== e;) {
            if (t.id === Is) return t;
            t = t.parentNode
        }
        return null
    }

    function is(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function as(e, t) {
        0 === t.length ? is(e) : e.nodeValue = t
    }

    function us(e) {
        var t = lu(e);
        return {
            count: e.length - t.length,
            text: t
        }
    }

    function ss(e, t) {
        return js(e), t
    }

    function cs(e, t) {
        var n = t.container(),
            r = function(e, t) {
                var n = f(e, t);
                return -1 === n ? k.none() : k.some(n)
            }(P(n.childNodes), e).map(function(e) {
                return e < t.offset() ? Ds(n, t.offset() - 1) : t
            }).getOr(t);
        return js(e), r
    }

    function ls(e, t) {
        return Us(e) && t.container() === e ? function(e, t) {
            var n = us(e.data.substr(0, t.offset())),
                r = us(e.data.substr(t.offset())),
                o = n.text + r.text;
            return 0 < o.length ? (as(e, o), Ds(e, t.offset() - n.count)) : t
        }(e, t) : ss(e, t)
    }

    function fs(e, t, n) {
        var r, o, i, a, u, s = Fa(t.getBoundingClientRect(), n);
        return i = "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, e.scrollTop || r.scrollTop) : (u = e.getBoundingClientRect(), o = e.scrollLeft - u.left, e.scrollTop - u.top), s.left += o, s.right += o, s.top += i, s.bottom += i, s.width = 1, 0 < (a = t.offsetWidth - t.clientWidth) && (n && (a *= -1), s.left += a, s.right += a), s
    }

    function ds(i, a, e) {
        var t, u, s = Je(k.none()),
            c = function() {
                ! function(e) {
                    var t, n, r, o, i;
                    for (t = vi("*[contentEditable=false]", e), o = 0; o < t.length; o++) r = (n = t[o]).previousSibling, mu(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(i.length - 1, 1)), r = n.nextSibling, hu(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(0, 1))
                }(i), u && (qs.remove(u), u = null), s.get().each(function(e) {
                    vi(e.caret).remove(), s.set(k.none())
                }), pn.clearInterval(t)
            },
            l = function() {
                t = pn.setInterval(function() {
                    e() ? vi("div.mce-visual-caret", i).toggleClass("mce-visual-caret-hidden") : vi("div.mce-visual-caret", i).addClass("mce-visual-caret-hidden")
                }, 500)
            };
        return {
            show: function(t, e) {
                var n, r;
                if (c(), function(e) {
                        return Ge.isElement(e) && /^(TD|TH)$/i.test(e.tagName)
                    }(e)) return null;
                if (!a(e)) return u = function(e, t) {
                    var n, r, o;
                    if (r = e.ownerDocument.createTextNode(cu), o = e.parentNode, t) {
                        if (n = e.previousSibling, du(n)) {
                            if (Da(n)) return n;
                            if (mu(n)) return n.splitText(n.data.length - 1)
                        }
                        o.insertBefore(r, e)
                    } else {
                        if (n = e.nextSibling, du(n)) {
                            if (Da(n)) return n;
                            if (hu(n)) return n.splitText(1), n
                        }
                        e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r)
                    }
                    return r
                }(e, t), r = e.ownerDocument.createRange(), Ws(u.nextSibling) ? (r.setStart(u, 0), r.setEnd(u, 0)) : (r.setStart(u, 1), r.setEnd(u, 1)), r;
                u = Ha("p", e, t), n = fs(i, e, t), vi(u).css("top", n.top);
                var o = vi('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(i)[0];
                return s.set(k.some({
                    caret: o,
                    element: e,
                    before: t
                })), s.get().each(function(e) {
                    t && vi(e.caret).addClass("mce-visual-caret-before")
                }), l(), (r = e.ownerDocument.createRange()).setStart(u, 0), r.setEnd(u, 0), r
            },
            hide: c,
            getCss: function() {
                return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
            },
            reposition: function() {
                s.get().each(function(e) {
                    var t = fs(i, e.element, e.before);
                    vi(e.caret).css(G({}, t))
                })
            },
            destroy: function() {
                return pn.clearInterval(t)
            }
        }
    }

    function hs() {
        return $s.isIE() || $s.isEdge() || $s.isFirefox()
    }

    function ms(e) {
        return Ws(e) || Ge.isTable(e) && hs()
    }

    function gs(e) {
        return 0 < e
    }

    function ps(e) {
        return e < 0
    }

    function vs(e, t) {
        for (var n; n = e(t);)
            if (!Gs(n)) return n;
        return null
    }

    function ys(e, t, n, r, o) {
        var i = new yi(e, r);
        if (ps(t)) {
            if ((Ks(e) || Gs(e)) && n(e = vs(i.prev, !0))) return e;
            for (; e = vs(i.prev, o);)
                if (n(e)) return e
        }
        if (gs(t)) {
            if ((Ks(e) || Gs(e)) && n(e = vs(i.next, !0))) return e;
            for (; e = vs(i.next, o);)
                if (n(e)) return e
        }
        return null
    }

    function bs(e, t) {
        for (; e && e !== t;) {
            if (Xs(e)) return e;
            e = e.parentNode
        }
        return null
    }

    function Cs(e, t, n) {
        return bs(e.container(), n) === bs(t.container(), n)
    }

    function ws(e, t) {
        var n, r;
        return t ? (n = t.container(), r = t.offset(), Js(n) ? n.childNodes[r + e] : null) : null
    }

    function xs(e, t) {
        var n = t.ownerDocument.createRange();
        return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n
    }

    function zs(e, t, n) {
        var r, o, i, a;
        for (o = e ? "previousSibling" : "nextSibling"; n && n !== t;) {
            if (r = n[o], Ys(r) && (r = r[o]), Ks(r)) {
                if (a = n, bs(r, i = t) === bs(a, i)) return r;
                break
            }
            if (Qs(r)) break;
            n = n.parentNode
        }
        return null
    }

    function Es(e, t, n) {
        var r, o, i, a, u = d(zs, !0, t),
            s = d(zs, !1, t);
        if (o = n.startContainer, i = n.startOffset, Ma(o)) {
            if (Js(o) || (o = o.parentNode), "before" === (a = o.getAttribute("data-mce-caret")) && (r = o.nextSibling, ms(r))) return Zs(r);
            if ("after" === a && (r = o.previousSibling, ms(r))) return ec(r)
        }
        if (!n.collapsed) return n;
        if (Ge.isText(o)) {
            if (Ys(o)) {
                if (1 === e) {
                    if (r = s(o)) return Zs(r);
                    if (r = u(o)) return ec(r)
                }
                if (-1 === e) {
                    if (r = u(o)) return ec(r);
                    if (r = s(o)) return Zs(r)
                }
                return n
            }
            if (mu(o) && i >= o.data.length - 1) return 1 === e && (r = s(o)) ? Zs(r) : n;
            if (hu(o) && i <= 1) return -1 === e && (r = u(o)) ? ec(r) : n;
            if (i === o.data.length) return (r = s(o)) ? Zs(r) : n;
            if (0 === i) return (r = u(o)) ? ec(r) : n
        }
        return n
    }

    function Ns(e, t) {
        return k.from(ws(e ? 0 : -1, t)).filter(Ks)
    }

    function Ss(e, t, n) {
        var r = Es(e, t, n);
        return -1 === e ? Uu.fromRangeStart(r) : Uu.fromRangeEnd(r)
    }

    function ks(e) {
        return k.from(e.getNode()).map(yt.fromDom)
    }

    function Ts(e, t) {
        for (; t = e(t);)
            if (t.isVisible()) return t;
        return t
    }

    function As(e, t) {
        var n = Cs(e, t);
        return !(n || !Ge.isBr(e.getNode())) || n
    }
    var Ms, Rs, Ds = Uu,
        _s = Ge.isText,
        Bs = Ge.isBogus,
        Os = Xi.nodeIndex,
        Hs = function(e) {
            var t = e.parentNode;
            return Bs(t) ? Hs(t) : t
        },
        Ps = function(e) {
            return e ? kn.reduce(e.childNodes, function(e, t) {
                return Bs(t) && "BR" !== t.nodeName ? e = e.concat(Ps(t)) : e.push(t), e
            }, []) : []
        },
        Ls = Ge.isContentEditableFalse,
        Vs = {
            getBookmark: function(e, t, n) {
                return 2 === t ? es(lu, n, e) : 3 === t ? function(e) {
                    var t = e.getRng();
                    return {
                        start: $u(e.dom.getRoot(), Ds.fromRangeStart(t)),
                        end: $u(e.dom.getRoot(), Ds.fromRangeEnd(t))
                    }
                }(e) : t ? function(e) {
                    return {
                        rng: e.getRng()
                    }
                }(e) : ns(e, !1)
            },
            getUndoBookmark: d(es, W, !0),
            getPersistentBookmark: ns
        },
        Is = "_mce_caret",
        Fs = Ge.isElement,
        Us = Ge.isText,
        js = function(e) {
            if (Fs(e) && Da(e) && (_a(e) ? e.removeAttribute("data-mce-caret") : is(e)), Us(e)) {
                var t = lu(function(e) {
                    try {
                        return e.nodeValue
                    } catch (t) {
                        return ""
                    }
                }(e));
                as(e, t)
            }
        },
        qs = {
            removeAndReposition: function(e, t) {
                return Ds.isTextPosition(t) ? ls(e, t) : function(e, t) {
                    return t.container() === e.parentNode ? cs(e, t) : ss(e, t)
                }(e, t)
            },
            remove: js
        },
        $s = oe().browser,
        Ws = Ge.isContentEditableFalse,
        Ks = Ge.isContentEditableFalse,
        Xs = Ge.matchStyleValues("display", "block table table-cell table-caption list-item"),
        Ys = Da,
        Gs = Ma,
        Js = Ge.isElement,
        Qs = La,
        Zs = d(xs, !0),
        ec = d(xs, !1);
    (Rs = Ms = Ms || {})[Rs.Backwards = -1] = "Backwards", Rs[Rs.Forwards = 1] = "Forwards";

    function tc(e, t) {
        return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
    }

    function nc(e, t) {
        if (gs(e)) {
            if (Ac(t.previousSibling) && !Sc(t.previousSibling)) return Ds.before(t);
            if (Sc(t)) return Ds(t, 0)
        }
        if (ps(e)) {
            if (Ac(t.nextSibling) && !Sc(t.nextSibling)) return Ds.after(t);
            if (Sc(t)) return Ds(t, t.data.length)
        }
        return ps(e) ? Tc(t) ? Ds.before(t) : Ds.after(t) : Ds.before(t)
    }

    function rc(t) {
        return {
            next: function(e) {
                return Dc(Ms.Forwards, e, t)
            },
            prev: function(e) {
                return Dc(Ms.Backwards, e, t)
            }
        }
    }

    function oc(e) {
        return Ds.isTextPosition(e) ? 0 === e.offset() : La(e.getNode())
    }

    function ic(e) {
        if (Ds.isTextPosition(e)) {
            var t = e.container();
            return e.offset() === t.data.length
        }
        return La(e.getNode(!0))
    }

    function ac(e, t) {
        return !Ds.isTextPosition(e) && !Ds.isTextPosition(t) && e.getNode() === t.getNode(!0)
    }

    function uc(e, t, n) {
        return e ? !ac(t, n) && ! function(e) {
            return !Ds.isTextPosition(e) && Ge.isBr(e.getNode())
        }(t) && ic(t) && oc(n) : !ac(n, t) && oc(t) && ic(n)
    }

    function sc(t, n, r) {
        return _c(t, n, r).bind(function(e) {
            return Cs(r, e, n) && uc(t, r, e) ? _c(t, n, e) : k.some(e)
        })
    }

    function cc(e, t) {
        var n = e ? t.firstChild : t.lastChild;
        return Ge.isText(n) ? k.some(Ds(n, e ? 0 : n.data.length)) : n ? La(n) ? k.some(e ? Ds.before(n) : function(e) {
            return Ge.isBr(e) ? Ds.before(e) : Ds.after(e)
        }(n)) : function(e, t, n) {
            var r = e ? Ds.before(n) : Ds.after(n);
            return _c(e, t, r)
        }(e, t, n) : k.none()
    }

    function lc(e, t) {
        return Ge.isElement(t) && e.isBlock(t) && !t.innerHTML && !Nn.ie && (t.innerHTML = '<br data-mce-bogus="1" />'), t
    }

    function fc(e, t) {
        return Pc.lastPositionIn(e).fold(function() {
            return !1
        }, function(e) {
            return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0
        })
    }

    function dc(e, t, n) {
        return !(! function(e) {
            return !1 === e.hasChildNodes()
        }(t) || !os(e, t)) && (function(e, t) {
            var n = e.ownerDocument.createTextNode(cu);
            e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0)
        }(t, n), !0)
    }

    function hc(e, t, n, r) {
        var o, i, a, u, s = n[t ? "start" : "end"],
            c = e.getRoot();
        if (s) {
            for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                if (u = i.childNodes, dc(c, i, r)) return !0;
                if (s[o] > u.length - 1) return !!dc(c, i, r) || fc(i, r);
                i = u[s[o]]
            }
            3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a)
        }
        return !0
    }

    function mc(e) {
        return Ge.isText(e) && 0 < e.data.length
    }

    function gc(e, t, n) {
        var r, o, i, a, u, s, c = e.get(n.id + "_" + t),
            l = n.keep;
        if (c) {
            if (r = c.parentNode, s = (u = (o = "start" === t ? l ? c.hasChildNodes() ? (r = c.firstChild, 1) : mc(c.nextSibling) ? (r = c.nextSibling, 0) : mc(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c) + 1) : e.nodeIndex(c) : l ? c.hasChildNodes() ? (r = c.firstChild, 1) : mc(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c)) : e.nodeIndex(c), r), o), !l) {
                for (a = c.previousSibling, i = c.nextSibling, Mn.each(Mn.grep(c.childNodes), function(e) {
                        Ge.isText(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                    }); c = e.get(n.id + "_" + t);) e.remove(c, !0);
                a && i && a.nodeType === i.nodeType && Ge.isText(a) && !Nn.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), s = (u = a, o))
            }
            return k.some(Ds(u, s))
        }
        return k.none()
    }

    function pc(e) {
        return e && /^(IMG)$/.test(e.nodeName)
    }

    function vc(e, t, n) {
        return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t
    }

    function yc(e, t) {
        for (void 0 === t && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();)(e = e.childNodes[t]) && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
        return {
            node: e,
            offset: t
        }
    }

    function bc(e, t) {
        for (var n = t; n;) {
            if (1 === n.nodeType && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
            n = n.parentNode
        }
        return t
    }

    function Cc(e, t, n, r) {
        var o, i, a = n.nodeValue;
        return void 0 === r && (r = e ? a.length : 0), e ? (o = a.lastIndexOf(" ", r), -1 !== (o = (i = a.lastIndexOf("\xa0", r)) < o ? o : i) && !t && (o < r || !e) && o <= a.length && o++) : (o = a.indexOf(" ", r), i = a.indexOf("\xa0", r), o = -1 !== o && (-1 === i || o < i) ? o : i), o
    }

    function wc(e, t, n, r, o, i) {
        var a, u, s;
        if (3 === n.nodeType) {
            if (-1 !== (u = Cc(o, i, n, r))) return {
                container: n,
                offset: u
            };
            s = n
        }
        for (var c = new yi(n, e.getParent(n, e.isBlock) || t); a = c[o ? "prev" : "next"]();)
            if (3 !== a.nodeType || qc(a.parentNode)) {
                if (e.isBlock(a) || jc.isEq(a, "BR")) break
            } else if (-1 !== (u = Cc(o, i, s = a))) return {
            container: a,
            offset: u
        };
        if (s) return {
            container: s,
            offset: r = o ? 0 : s.length
        }
    }

    function xc(e, t, n, r, o) {
        var i, a, u, s;
        for (3 === r.nodeType && 0 === r.nodeValue.length && r[o] && (r = r[o]), i = $c(e, r), a = 0; a < i.length; a++)
            for (u = 0; u < t.length; u++)
                if (!("collapsed" in (s = t[u]) && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a];
        return r
    }

    function zc(t, e, n, r) {
        var o, i = t.dom,
            a = i.getRoot();
        if (e[0].wrapper || (o = i.getParent(n, e[0].block, a)), !o) {
            var u = i.getParent(n, "LI,TD,TH");
            o = i.getParent(3 === n.nodeType ? n.parentNode : n, function(e) {
                return e !== a && Kc(t, e)
            }, u)
        }
        if (o && e[0].wrapper && (o = $c(i, o, "ul,ol").reverse()[0] || o), !o)
            for (o = n; o[r] && !i.isBlock(o[r]) && (o = o[r], !jc.isEq(o, "br")););
        return o || n
    }

    function Ec(e, t, n, r, o, i, a) {
        var u, s, c, l, f, d;
        if (u = s = a ? n : o, l = a ? "previousSibling" : "nextSibling", f = e.getRoot(), 3 === u.nodeType && !Wc(u) && (a ? 0 < r : i < u.nodeValue.length)) return u;
        for (;;) {
            if (!t[0].block_expand && e.isBlock(s)) return s;
            for (c = s[l]; c; c = c[l])
                if (!qc(c) && !Wc(c) && ("BR" !== (d = c).nodeName || !d.getAttribute("data-mce-bogus") || d.nextSibling)) return s;
            if (s === f || s.parentNode === f) {
                u = s;
                break
            }
            s = s.parentNode
        }
        return u
    }
    var Nc = Ge.isContentEditableFalse,
        Sc = Ge.isText,
        kc = Ge.isElement,
        Tc = Ge.isBr,
        Ac = La,
        Mc = function(e) {
            return Cu(e) || function(e) {
                return !!zu(e) && !0 !== b(P(e.getElementsByTagName("*")), function(e, t) {
                    return e || gu(t)
                }, !1)
            }(e)
        },
        Rc = Va,
        Dc = function(e, t, n) {
            var r, o, i, a, u;
            if (!kc(n) || !t) return null;
            if (t.isEqual(Ds.after(n)) && n.lastChild) {
                if (u = Ds.after(n.lastChild), ps(e) && Ac(n.lastChild) && kc(n.lastChild)) return Tc(n.lastChild) ? Ds.before(n.lastChild) : u
            } else u = t;
            var s = u.container(),
                c = u.offset();
            if (Sc(s)) {
                if (ps(e) && 0 < c) return Ds(s, --c);
                if (gs(e) && c < s.length) return Ds(s, ++c);
                r = s
            } else {
                if (ps(e) && 0 < c && (o = tc(s, c - 1), Ac(o))) return !Mc(o) && (i = ys(o, e, Rc, o)) ? Sc(i) ? Ds(i, i.data.length) : Ds.after(i) : Sc(o) ? Ds(o, o.data.length) : Ds.before(o);
                if (gs(e) && c < s.childNodes.length && (o = tc(s, c), Ac(o))) return Tc(o) ? function(e, t) {
                    var n = t.nextSibling;
                    return n && Ac(n) ? Sc(n) ? Ds(n, 0) : Ds.before(n) : Dc(Ms.Forwards, Ds.after(t), e)
                }(n, o) : !Mc(o) && (i = ys(o, e, Rc, o)) ? Sc(i) ? Ds(i, 0) : Ds.before(i) : Sc(o) ? Ds(o, 0) : Ds.after(o);
                r = o || u.getNode()
            }
            return (gs(e) && u.isAtEnd() || ps(e) && u.isAtStart()) && (r = ys(r, e, $(!0), n, !0), Rc(r, n)) ? nc(e, r) : (o = ys(r, e, Rc, n), !(a = kn.last(y(function(e, t) {
                for (var n = []; e && e !== t;) n.push(e), e = e.parentNode;
                return n
            }(s, n), Nc))) || o && a.contains(o) ? o ? nc(e, o) : null : u = gs(e) ? Ds.after(a) : Ds.before(a))
        },
        _c = function(e, t, n) {
            var r = rc(t);
            return k.from(e ? r.next(n) : r.prev(n))
        },
        Bc = function(t, n, e, r) {
            return sc(t, n, e).bind(function(e) {
                return r(e) ? Bc(t, n, e, r) : k.some(e)
            })
        },
        Oc = d(_c, !0),
        Hc = d(_c, !1),
        Pc = {
            fromPosition: _c,
            nextPosition: Oc,
            prevPosition: Hc,
            navigate: sc,
            navigateIgnore: Bc,
            positionIn: cc,
            firstPositionIn: d(cc, !0),
            lastPositionIn: d(cc, !1)
        },
        Lc = function(e, t) {
            var n = e.dom;
            if (t) {
                if (function(e) {
                        return Mn.isArray(e.start)
                    }(t)) return function(e, t) {
                    var n = e.createRng();
                    return hc(e, !0, t, n) && hc(e, !1, t, n) ? k.some(n) : k.none()
                }(n, t);
                if (function(e) {
                        return "string" == typeof e.start
                    }(t)) return k.some(function(e, t) {
                    var n, r;
                    return n = e.createRng(), r = Wu(e.getRoot(), t.start), n.setStart(r.container(), r.offset()), r = Wu(e.getRoot(), t.end), n.setEnd(r.container(), r.offset()), n
                }(n, t));
                if (function(e) {
                        return e.hasOwnProperty("id")
                    }(t)) return function(r, e) {
                    var t = gc(r, "start", e),
                        n = gc(r, "end", e);
                    return Ya(t, n.or(t), function(e, t) {
                        var n = r.createRng();
                        return n.setStart(lc(r, e.container()), e.offset()), n.setEnd(lc(r, t.container()), t.offset()), n
                    })
                }(n, t);
                if (function(e) {
                        return e.hasOwnProperty("name")
                    }(t)) return function(n, e) {
                    return k.from(n.select(e.name)[e.index]).map(function(e) {
                        var t = n.createRng();
                        return t.selectNode(e), t
                    })
                }(n, t);
                if (function(e) {
                        return e.hasOwnProperty("rng")
                    }(t)) return k.some(t.rng)
            }
            return k.none()
        },
        Vc = function(e, t, n) {
            return Vs.getBookmark(e, t, n)
        },
        Ic = function(t, e) {
            Lc(t, e).each(function(e) {
                t.setRng(e)
            })
        },
        Fc = function(e) {
            return Ge.isElement(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        },
        Uc = function(e) {
            return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
        },
        jc = {
            isInlineBlock: pc,
            moveStart: function(e, t, n) {
                var r, o, i, a = n.startOffset,
                    u = n.startContainer;
                if ((n.startContainer !== n.endContainer || !pc(n.startContainer.childNodes[n.startOffset])) && 1 === u.nodeType)
                    for (a < (i = u.childNodes).length ? (u = i[a], r = new yi(u, e.getParent(u, e.isBlock))) : (u = i[i.length - 1], (r = new yi(u, e.getParent(u, e.isBlock))).next(!0)), o = r.current(); o; o = r.next())
                        if (3 === o.nodeType && !Uc(o)) return n.setStart(o, 0), void t.setRng(n)
            },
            getNonWhiteSpaceSibling: function(e, t, n) {
                if (e)
                    for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t])
                        if (1 === e.nodeType || !Uc(e)) return e
            },
            isTextBlock: function(e, t) {
                return t.nodeType && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()]
            },
            isValid: function(e, t, n) {
                return e.schema.isValidChild(t, n)
            },
            isWhiteSpaceNode: Uc,
            replaceVars: function(e, n) {
                return "string" != typeof e ? e = e(n) : n && (e = e.replace(/%(\w+)/g, function(e, t) {
                    return n[t] || e
                })), e
            },
            isEq: function(e, t) {
                return e = "" + ((e = e || "").nodeName || e), t = "" + ((t = t || "").nodeName || t), e.toLowerCase() === t.toLowerCase()
            },
            normalizeStyleValue: vc,
            getStyle: function(e, t, n) {
                return vc(e, e.getStyle(t, n), n)
            },
            getTextDecoration: function(t, e) {
                var n;
                return t.getParent(e, function(e) {
                    return (n = t.getStyle(e, "text-decoration")) && "none" !== n
                }), n
            },
            getParents: function(e, t, n) {
                return e.getParents(t, n, e.getRoot())
            }
        },
        qc = Fc,
        $c = jc.getParents,
        Wc = jc.isWhiteSpaceNode,
        Kc = jc.isTextBlock,
        Xc = function(e, t, n, r) {
            var o, i = t.startContainer,
                a = t.startOffset,
                u = t.endContainer,
                s = t.endOffset,
                c = e.dom;
            return 1 === i.nodeType && i.hasChildNodes() && 3 === (i = Ka(i, a)).nodeType && (a = 0), 1 === u.nodeType && u.hasChildNodes() && 3 === (u = Ka(u, t.collapsed ? s : s - 1)).nodeType && (s = u.nodeValue.length), i = bc(c, i), u = bc(c, u), (qc(i.parentNode) || qc(i)) && (i = qc(i) ? i : i.parentNode, 3 === (i = t.collapsed ? i.previousSibling || i : i.nextSibling || i).nodeType && (a = t.collapsed ? i.length : 0)), (qc(u.parentNode) || qc(u)) && (u = qc(u) ? u : u.parentNode, 3 === (u = t.collapsed ? u.nextSibling || u : u.previousSibling || u).nodeType && (s = t.collapsed ? 0 : u.length)), t.collapsed && ((o = wc(c, e.getBody(), i, a, !0, r)) && (i = o.container, a = o.offset), (o = wc(c, e.getBody(), u, s, !1, r)) && (u = o.container, s = o.offset)), n[0].inline && (u = r ? u : function(e, t) {
                var n = yc(e, t);
                if (n.node) {
                    for (; n.node && 0 === n.offset && n.node.previousSibling;) n = yc(n.node.previousSibling);
                    n.node && 0 < n.offset && 3 === n.node.nodeType && " " === n.node.nodeValue.charAt(n.offset - 1) && 1 < n.offset && (e = n.node).splitText(n.offset - 1)
                }
                return e
            }(u, s)), (n[0].inline || n[0].block_expand) && (n[0].inline && 3 === i.nodeType && 0 !== a || (i = Ec(c, n, i, a, u, s, !0)), n[0].inline && 3 === u.nodeType && s !== u.nodeValue.length || (u = Ec(c, n, i, a, u, s, !1))), n[0].selector && !1 !== n[0].expand && !n[0].inline && (i = xc(c, n, t, i, "previousSibling"), u = xc(c, n, t, u, "nextSibling")), (n[0].block || n[0].selector) && (i = zc(e, n, i, "previousSibling"), u = zc(e, n, u, "nextSibling"), n[0].block && (c.isBlock(i) || (i = Ec(c, n, i, a, u, s, !0)), c.isBlock(u) || (u = Ec(c, n, i, a, u, s, !1)))), 1 === i.nodeType && (a = c.nodeIndex(i), i = i.parentNode), 1 === u.nodeType && (s = c.nodeIndex(u) + 1, u = u.parentNode), {
                startContainer: i,
                startOffset: a,
                endContainer: u,
                endOffset: s
            }
        },
        Yc = Mn.each,
        Gc = function(e, t, o) {
            var n, r, i, a, u, s, c, l = t.startContainer,
                f = t.startOffset,
                d = t.endContainer,
                h = t.endOffset;
            if (0 < (c = e.select("td[data-mce-selected],th[data-mce-selected]")).length) Yc(c, function(e) {
                o([e])
            });
            else {
                var m = function(e) {
                        var t;
                        return 3 === (t = e[0]).nodeType && t === l && f >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === h && 0 < e.length && t === d && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                    },
                    g = function(e, t, n) {
                        for (var r = []; e && e !== n; e = e[t]) r.push(e);
                        return r
                    },
                    p = function(e, t) {
                        do {
                            if (e.parentNode === t) return e;
                            e = e.parentNode
                        } while (e)
                    },
                    v = function(e, t, n) {
                        var r = n ? "nextSibling" : "previousSibling";
                        for (u = (a = e).parentNode; a && a !== t; a = u) u = a.parentNode, (s = g(a === e ? a : a[r], r)).length && (n || s.reverse(), o(m(s)))
                    };
                if (1 === l.nodeType && l.hasChildNodes() && (l = l.childNodes[f]), 1 === d.nodeType && d.hasChildNodes() && (d = function(e, t) {
                        var n = e.childNodes;
                        return --t > n.length - 1 ? t = n.length - 1 : t < 0 && (t = 0), n[t] || e
                    }(d, h)), l === d) return o(m([l]));
                for (n = e.findCommonAncestor(l, d), a = l; a; a = a.parentNode) {
                    if (a === d) return v(l, n, !0);
                    if (a === n) break
                }
                for (a = d; a; a = a.parentNode) {
                    if (a === l) return v(d, n);
                    if (a === n) break
                }
                r = p(l, n) || l, i = p(d, n) || d, v(l, r, !0), (s = g(r === l ? r : r.nextSibling, "nextSibling", i === d ? i.nextSibling : i)).length && o(m(s)), v(d, i)
            }
        };

    function Jc(e) {
        return ol.get(e)
    }

    function Qc(t, n, r, o) {
        return Se(n).fold(function() {
            return "skipping"
        }, function(e) {
            return "br" === o || function(e) {
                return zt(e) && "\ufeff" === Jc(e)
            }(n) ? "valid" : function(e) {
                return xt(e) && ha(e, nu())
            }(n) ? "existing" : rs(n) ? "caret" : jc.isValid(t, r, o) && jc.isValid(t, ie(e), r) ? "valid" : "invalid-child"
        })
    }

    function Zc(e, t, n, r) {
        var o = t.uid,
            i = void 0 === o ? function(e) {
                var t = (new Date).getTime();
                return e + "_" + Math.floor(1e9 * Math.random()) + ++au + String(t)
            }("mce-annotation") : o,
            a = function h(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }(t, ["uid"]),
            u = yt.fromTag("span", e);
        fa(u, nu()), Tt(u, "" + ou(), i), Tt(u, "" + ru(), n);
        var s = r(i, a),
            c = s.attributes,
            l = void 0 === c ? {} : c,
            f = s.classes,
            d = void 0 === f ? [] : f;
        return me(u, l),
            function(t, e) {
                z(e, function(e) {
                    fa(t, e)
                })
            }(u, d), u
    }

    function el(n, e, t, r, o) {
        function i() {
            c.set(k.none())
        }

        function a(e) {
            z(e, l)
        }
        var u = [],
            s = Zc(n.getDoc(), o, t, r),
            c = Je(k.none()),
            l = function(e) {
                switch (Qc(n, e, "span", ie(e))) {
                    case "invalid-child":
                        i();
                        var t = Re(e);
                        a(t), i();
                        break;
                    case "valid":
                        ! function(e, t) {
                            Ci(e, t), Di(t, e)
                        }(e, c.get().getOrThunk(function() {
                            var e = ka(s);
                            return u.push(e), c.set(k.some(e)), e
                        }))
                }
            };
        return Gc(n.dom, e, function(e) {
            i(),
                function(e) {
                    var t = X(e, yt.fromDom);
                    a(t)
                }(e)
        }), u
    }

    function tl(o, i, a, u) {
        o.undoManager.transact(function() {
            var e = o.selection.getRng();
            if (e.collapsed && function(e, t) {
                    var n = Xc(e, t, [{
                        inline: !0
                    }], function(e) {
                        return 3 === e.startContainer.nodeType && e.startContainer.nodeValue.length >= e.startOffset && "\xa0" === e.startContainer.nodeValue[e.startOffset]
                    }(t));
                    t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)
                }(o, e), o.selection.getRng().collapsed) {
                var t = Zc(o.getDoc(), u, i, a.decorate);
                Aa(t, "\xa0"), o.selection.getRng().insertNode(t.dom()), o.selection.select(t.dom())
            } else {
                var n = Vs.getPersistentBookmark(o.selection, !1),
                    r = o.selection.getRng();
                el(o, r, i, a.decorate, u), o.selection.moveToBookmark(n)
            }
        })
    }

    function nl(r) {
        var o = function() {
            var n = {};
            return {
                register: function(e, t) {
                    n[e] = {
                        name: e,
                        settings: t
                    }
                },
                lookup: function(e) {
                    return n.hasOwnProperty(e) ? k.from(n[e]).map(function(e) {
                        return e.settings
                    }) : k.none()
                }
            }
        }();
        Na(r, o);
        var n = Ea(r);
        return {
            register: function(e, t) {
                o.register(e, t)
            },
            annotate: function(t, n) {
                o.lookup(t).each(function(e) {
                    tl(r, t, e, n)
                })
            },
            annotationChanged: function(e, t) {
                n.addListener(e, t)
            },
            remove: function(e) {
                za(r, k.some(e)).each(function(e) {
                    var t = e.elements;
                    z(t, Ni)
                })
            },
            getAll: function(e) {
                var t = function(e, t) {
                    var n = yt.fromDom(e.getBody()),
                        r = ma(n, "[" + ru() + '="' + t + '"]'),
                        o = {};
                    return z(r, function(e) {
                        var t = ge(e, ou()),
                            n = o.hasOwnProperty(t) ? o[t] : [];
                        o[t] = n.concat([e])
                    }), o
                }(r, e);
                return se(t, function(e) {
                    return X(e, function(e) {
                        return e.dom()
                    })
                })
            }
        }
    }

    function rl(e, t, n) {
        var r = n ? "lastChild" : "firstChild",
            o = n ? "prev" : "next";
        if (e[r]) return e[r];
        if (e !== t) {
            var i = e[o];
            if (i) return i;
            for (var a = e.parent; a && a !== t; a = a.parent)
                if (i = a[o]) return i
        }
    }
    var ol = function bN(n, r) {
            var t = function(e) {
                return n(e) ? k.from(e.dom().nodeValue) : k.none()
            };
            return {
                get: function(e) {
                    if (!n(e)) throw new Error("Can only get " + r + " value of a " + r + " node");
                    return t(e).getOr("")
                },
                getOption: t,
                set: function(e, t) {
                    if (!n(e)) throw new Error("Can only set raw " + r + " value of a " + r + " node");
                    e.dom().nodeValue = t
                }
            }
        }(zt, "text"),
        il = /^[ \t\r\n]*$/,
        al = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
        },
        ul = (sl.create = function(e, t) {
            var n = new sl(e, al[e] || 1);
            if (t)
                for (var r in t) n.attr(r, t[r]);
            return n
        }, sl.prototype.replace = function(e) {
            return e.parent && e.remove(), this.insert(e, this), this.remove(), this
        }, sl.prototype.attr = function(e, t) {
            var n;
            if ("string" != typeof e) {
                for (var r in e) this.attr(r, e[r]);
                return this
            }
            if (n = this.attributes) {
                if (t === undefined) return n.map[e];
                if (null === t) {
                    if (e in n.map) {
                        delete n.map[e];
                        for (var o = n.length; o--;)
                            if (n[o].name === e) return n.splice(o, 1), this
                    }
                    return this
                }
                if (e in n.map) {
                    for (o = n.length; o--;)
                        if (n[o].name === e) {
                            n[o].value = t;
                            break
                        }
                } else n.push({
                    name: e,
                    value: t
                });
                return n.map[e] = t, this
            }
        }, sl.prototype.clone = function() {
            var e, t = new sl(this.name, this.type);
            if (e = this.attributes) {
                var n = [];
                n.map = {};
                for (var r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    "id" !== i.name && (n[n.length] = {
                        name: i.name,
                        value: i.value
                    }, n.map[i.name] = i.value)
                }
                t.attributes = n
            }
            return t.value = this.value, t.shortEnded = this.shortEnded, t
        }, sl.prototype.wrap = function(e) {
            return this.parent.insert(e, this), e.append(this), this
        }, sl.prototype.unwrap = function() {
            for (var e = this.firstChild; e;) {
                var t = e.next;
                this.insert(e, this, !0), e = t
            }
            this.remove()
        }, sl.prototype.remove = function() {
            var e = this.parent,
                t = this.next,
                n = this.prev;
            return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this
        }, sl.prototype.append = function(e) {
            e.parent && e.remove();
            var t = this.lastChild;
            return t ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e
        }, sl.prototype.insert = function(e, t, n) {
            e.parent && e.remove();
            var r = t.parent || this;
            return n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e
        }, sl.prototype.getAll = function(e) {
            for (var t = [], n = this.firstChild; n; n = rl(n, this)) n.name === e && t.push(n);
            return t
        }, sl.prototype.empty = function() {
            if (this.firstChild) {
                for (var e = [], t = this.firstChild; t; t = rl(t, this)) e.push(t);
                for (var n = e.length; n--;)(t = e[n]).parent = t.firstChild = t.lastChild = t.next = t.prev = null
            }
            return this.firstChild = this.lastChild = null, this
        }, sl.prototype.isEmpty = function(e, t, n) {
            void 0 === t && (t = {});
            var r = this.firstChild;
            if (r)
                do {
                    if (1 === r.type) {
                        if (r.attr("data-mce-bogus")) continue;
                        if (e[r.name]) return !1;
                        for (var o = r.attributes.length; o--;) {
                            var i = r.attributes[o].name;
                            if ("name" === i || 0 === i.indexOf("data-mce-bookmark")) return !1
                        }
                    }
                    if (8 === r.type) return !1;
                    if (3 === r.type && !il.test(r.value)) return !1;
                    if (3 === r.type && r.parent && t[r.parent.name] && il.test(r.value)) return !1;
                    if (n && n(r)) return !1
                } while (r = rl(r, this));
            return !0
        }, sl.prototype.walk = function(e) {
            return rl(this, null, e)
        }, sl);

    function sl(e, t) {
        this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {})
    }

    function cl(e, t, n) {
        var r, o, i, a, u = 1;
        for (a = e.getShortEndedElements(), (i = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n; o = i.exec(t);) {
            if (r = i.lastIndex, "/" === o[1]) u--;
            else if (!o[1]) {
                if (o[2] in a) continue;
                u++
            }
            if (0 === u) break
        }
        return r
    }

    function ll(e, t) {
        var n = e.exec(t);
        if (n) {
            var r = n[1],
                o = n[2];
            return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? o : null
        }
        return null
    }

    function fl(V, I) {
        void 0 === I && (I = pr());

        function e() {}!1 !== (V = V || {}).fix_self_closing && (V.fix_self_closing = !0);
        var F = V.comment ? V.comment : e,
            U = V.cdata ? V.cdata : e,
            j = V.text ? V.text : e,
            q = V.start ? V.start : e,
            $ = V.end ? V.end : e,
            W = V.pi ? V.pi : e,
            K = V.doctype ? V.doctype : e;
        return {
            parse: function(e) {
                function t(e) {
                    var t, n;
                    for (t = _.length; t-- && _[t].name !== e;);
                    if (0 <= t) {
                        for (n = _.length - 1; t <= n; n--)(e = _[n]).valid && $(e.name);
                        _.length = t
                    }
                }

                function n(e, t, n, r, o) {
                    var i, a;
                    if (n = (t = t.toLowerCase()) in h ? t : O(n || r || o || ""), g && !l && !1 === function(e) {
                            return 0 === e.indexOf("data-") || 0 === e.indexOf("aria-")
                        }(t)) {
                        if (!(i = C[t]) && w) {
                            for (a = w.length; a-- && !(i = w[a]).pattern.test(t);); - 1 === a && (i = null)
                        }
                        if (!i) return;
                        if (i.validValues && !(n in i.validValues)) return
                    }
                    if (H[t] && !V.allow_script_urls) {
                        var u = n.replace(/[\s\u0000-\u001F]+/g, "");
                        try {
                            u = decodeURIComponent(u)
                        } catch (s) {
                            u = unescape(u)
                        }
                        if (P.test(u)) return;
                        if (function(e, t) {
                                return !e.allow_html_data_urls && (/^data:image\//i.test(t) ? !1 === e.allow_svg_data_urls && /^data:image\/svg\+xml/i.test(t) : /^data:/i.test(t))
                            }(V, u)) return
                    }
                    l && (t in H || 0 === t.indexOf("on")) || (c.map[t] = n, c.push({
                        name: t,
                        value: n
                    }))
                }
                var r, o, i, c, a, u, s, l, f, d, h, m, g, p, v, y, b, C, w, x, z, E, N, S, k, T, A, M, R, D = 0,
                    _ = [],
                    B = 0,
                    O = ir.decode,
                    H = Mn.makeMap("src,href,data,background,formaction,poster,xlink:href"),
                    P = /((java|vb)script|mhtml):/i;
                for (k = new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), T = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, d = I.getShortEndedElements(), S = V.self_closing_elements || I.getSelfClosingElements(), h = I.getBoolAttrs(), g = V.validate, f = V.remove_internals, R = V.fix_self_closing, A = I.getSpecialElements(), N = e + ">"; r = k.exec(N);) {
                    if (D < r.index && j(O(e.substr(D, r.index - D))), o = r[6]) ":" === (o = o.toLowerCase()).charAt(0) && (o = o.substr(1)), t(o);
                    else if (o = r[7]) {
                        if (r.index + r[0].length > e.length) {
                            j(O(e.substr(r.index))), D = r.index + r[0].length;
                            continue
                        }
                        ":" === (o = o.toLowerCase()).charAt(0) && (o = o.substr(1)), m = o in d, R && S[o] && 0 < _.length && _[_.length - 1].name === o && t(o);
                        var L = ll(T, r[8]);
                        if (null !== L) {
                            if ("all" === L) {
                                D = cl(I, e, k.lastIndex), k.lastIndex = D;
                                continue
                            }
                            v = !1
                        }
                        if (!g || (p = I.getElementRule(o))) {
                            if (v = !0, g && (C = p.attributes, w = p.attributePatterns), (b = r[8]) ? ((l = -1 !== b.indexOf("data-mce-type")) && f && (v = !1), (c = []).map = {}, b.replace(T, n)) : (c = []).map = {}, g && !l) {
                                if (x = p.attributesRequired, z = p.attributesDefault, E = p.attributesForced, p.removeEmptyAttrs && !c.length && (v = !1), E)
                                    for (a = E.length; a--;) s = (y = E[a]).name, "{$uid}" === (M = y.value) && (M = "mce_" + B++), c.map[s] = M, c.push({
                                        name: s,
                                        value: M
                                    });
                                if (z)
                                    for (a = z.length; a--;)(s = (y = z[a]).name) in c.map || ("{$uid}" === (M = y.value) && (M = "mce_" + B++), c.map[s] = M, c.push({
                                        name: s,
                                        value: M
                                    }));
                                if (x) {
                                    for (a = x.length; a-- && !(x[a] in c.map);); - 1 === a && (v = !1)
                                }
                                if (y = c.map["data-mce-bogus"]) {
                                    if ("all" === y) {
                                        D = cl(I, e, k.lastIndex), k.lastIndex = D;
                                        continue
                                    }
                                    v = !1
                                }
                            }
                            v && q(o, c, m)
                        } else v = !1;
                        if (i = A[o]) {
                            i.lastIndex = D = r.index + r[0].length, D = (r = i.exec(e)) ? (v && (u = e.substr(D, r.index - D)), r.index + r[0].length) : (u = e.substr(D), e.length), v && (0 < u.length && j(u, !0), $(o)), k.lastIndex = D;
                            continue
                        }
                        m || (b && b.indexOf("/") === b.length - 1 ? v && $(o) : _.push({
                            name: o,
                            valid: v
                        }))
                    } else(o = r[1]) ? (">" === o.charAt(0) && (o = " " + o), V.allow_conditional_comments || "[if" !== o.substr(0, 3).toLowerCase() || (o = " " + o), F(o)) : (o = r[2]) ? U(o.replace(/<!--|-->/g, "")) : (o = r[3]) ? K(o) : (o = r[4]) && W(o, r[5]);
                    D = r.index + r[0].length
                }
                for (D < e.length && j(O(e.substr(D))), a = _.length - 1; 0 <= a; a--)(o = _[a]).valid && $(o.name)
            }
        }
    }(fl = fl || {}).findEndTag = cl;

    function dl(e, t) {
        var n, r, o, i, a, u = t,
            s = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
            c = e.schema;
        for (u = function(e, t) {
                var n = new RegExp(["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"), "gi");
                return t.replace(n, "")
            }(e.getTempAttrs(), u), a = c.getShortEndedElements(); i = s.exec(u);) r = s.lastIndex, o = i[0].length, n = a[i[1]] ? r : of.findEndTag(c, u, r), u = u.substring(0, r - o) + u.substring(n), s.lastIndex = r - o;
        return lu(u)
    }

    function hl(e, t, n) {
        var r = e.getParam(t, n);
        if (-1 === r.indexOf("=")) return r;
        var o = e.getParam(t, "", "hash");
        return o.hasOwnProperty(e.id) ? o[e.id] : n
    }

    function ml(e, t, n) {
        var r;
        if (t.format = t.format ? t.format : "html", t.get = !0, t.getInner = !0, t.no_events || e.fire("BeforeGetContent", t), "raw" === t.format) r = Mn.trim(af.trimExternal(e.serializer, n.innerHTML));
        else if ("text" === t.format) r = lu(n.innerText || n.textContent);
        else {
            if ("tree" === t.format) return e.serializer.serialize(n, t);
            r = function(e, t) {
                var n = mf(e),
                    r = new RegExp("^(<" + n + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + n + ">[\r\n]*|<br \\/>[\r\n]*)$");
                return t.replace(r, "")
            }(e, e.serializer.serialize(n, t))
        }
        return "text" === t.format || Wn(yt.fromDom(n)) ? t.content = r : t.content = Mn.trim(r), t.no_events || e.fire("GetContent", t), t.content
    }

    function gl(e) {
        var u, s, c, l, f, d = [];
        return u = (e = e || {}).indent, s = Ff(e.indent_before || ""), c = Ff(e.indent_after || ""), l = ir.getEncodeFunc(e.entity_encoding || "raw", e.entities), f = "html" === e.element_format, {
            start: function(e, t, n) {
                var r, o, i, a;
                if (u && s[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n"), d.push("<", e), t)
                    for (r = 0, o = t.length; r < o; r++) i = t[r], d.push(" ", i.name, '="', l(i.value, !0), '"');
                d[d.length] = !n || f ? ">" : " />", n && u && c[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n")
            },
            end: function(e) {
                var t;
                d.push("</", e, ">"), u && c[e] && 0 < d.length && 0 < (t = d[d.length - 1]).length && "\n" !== t && d.push("\n")
            },
            text: function(e, t) {
                0 < e.length && (d[d.length] = t ? e : l(e))
            },
            cdata: function(e) {
                d.push("<![CDATA[", e, "]]>")
            },
            comment: function(e) {
                d.push("\x3c!--", e, "--\x3e")
            },
            pi: function(e, t) {
                t ? d.push("<?", e, " ", l(t), "?>") : d.push("<?", e, "?>"), u && d.push("\n")
            },
            doctype: function(e) {
                d.push("<!DOCTYPE", e, ">", u ? "\n" : "")
            },
            reset: function() {
                d.length = 0
            },
            getContent: function() {
                return d.join("").replace(/\n$/, "")
            }
        }
    }

    function pl(t, m) {
        void 0 === m && (m = pr());
        var g = gl(t);
        return (t = t || {}).validate = !("validate" in t) || t.validate, {
            serialize: function(e) {
                var f, d;
                d = t.validate, f = {
                    3: function(e) {
                        g.text(e.value, e.raw)
                    },
                    8: function(e) {
                        g.comment(e.value)
                    },
                    7: function(e) {
                        g.pi(e.name, e.value)
                    },
                    10: function(e) {
                        g.doctype(e.value)
                    },
                    4: function(e) {
                        g.cdata(e.value)
                    },
                    11: function(e) {
                        if (e = e.firstChild)
                            for (; h(e), e = e.next;);
                    }
                }, g.reset();
                var h = function(e) {
                    var t, n, r, o, i, a, u, s, c, l = f[e.type];
                    if (l) l(e);
                    else {
                        if (t = e.name, n = e.shortEnded, r = e.attributes, d && r && 1 < r.length && ((a = []).map = {}, c = m.getElementRule(e.name))) {
                            for (u = 0, s = c.attributesOrder.length; u < s; u++)(o = c.attributesOrder[u]) in r.map && (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            for (u = 0, s = r.length; u < s; u++)(o = r[u].name) in a.map || (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            r = a
                        }
                        if (g.start(e.name, r, n), !n) {
                            if (e = e.firstChild)
                                for (; h(e), e = e.next;);
                            g.end(t)
                        }
                    }
                };
                return 1 !== e.type || t.inner ? f[11](e) : h(e), g.getContent()
            }
        }
    }

    function vl(e, t, n) {
        var r = function(e, n, t) {
            var r = {},
                o = {},
                i = [];
            for (var a in t.firstChild && Uf(t.firstChild, function(t) {
                    z(e, function(e) {
                        e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : r[e.name] = {
                            filter: e,
                            nodes: [t]
                        })
                    }), z(n, function(e) {
                        "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = {
                            filter: e,
                            nodes: [t]
                        })
                    })
                }), r) r.hasOwnProperty(a) && i.push(r[a]);
            for (var a in o) o.hasOwnProperty(a) && i.push(o[a]);
            return i
        }(e, t, n);
        z(r, function(t) {
            z(t.filter.callbacks, function(e) {
                e(t.nodes, t.filter.name, {})
            })
        })
    }

    function yl(e) {
        var t = Ee(e).dom();
        return e.dom() === t.activeElement
    }

    function bl(e) {
        var t = e !== undefined ? e.dom() : j.document;
        return k.from(t.activeElement).map(yt.fromDom)
    }

    function Cl(e, t) {
        var n = zt(t) ? Jc(t).length : Re(t).length + 1;
        return n < e ? n : e < 0 ? 0 : e
    }

    function wl(e) {
        return Xf.range(e.start(), Cl(e.soffset(), e.start()), e.finish(), Cl(e.foffset(), e.finish()))
    }

    function xl(e, t) {
        return !Ge.isRestrictedNode(t.dom()) && (Bt(e, t) || ze(e, t))
    }

    function zl(t) {
        return function(e) {
            return xl(t, e.start()) && xl(t, e.finish())
        }
    }

    function El(e) {
        return !0 === e.inline || Yf.isIE()
    }

    function Nl(e) {
        return Xf.range(yt.fromDom(e.startContainer), e.startOffset, yt.fromDom(e.endContainer), e.endOffset)
    }

    function Sl(e) {
        var t = e.getSelection();
        return (t && 0 !== t.rangeCount ? k.from(t.getRangeAt(0)) : k.none()).map(Nl)
    }

    function kl(e) {
        var t = Ne(e);
        return Sl(t.dom()).filter(zl(e))
    }

    function Tl(e, t) {
        return k.from(t).filter(zl(e)).map(wl)
    }

    function Al(e) {
        var t = j.document.createRange();
        try {
            return t.setStart(e.start().dom(), e.soffset()), t.setEnd(e.finish().dom(), e.foffset()), k.some(t)
        } catch (n) {
            return k.none()
        }
    }

    function Ml(t) {
        return (t.bookmark ? t.bookmark : k.none()).bind(function(e) {
            return Tl(yt.fromDom(t.getBody()), e)
        }).bind(Al)
    }

    function Rl(t, e) {
        oe().browser.isIE() ? function(e) {
            e.on("focusout", function() {
                Gf(e)
            })
        }(t) : function(e, t) {
            e.on("mouseup touchend", function(e) {
                t.throttle()
            })
        }(t, e), t.on("keyup NodeChange", function(e) {
            ! function(e) {
                return "nodechange" === e.type && e.selectionChange
            }(e) && Gf(t)
        })
    }

    function Dl(e) {
        return Zf.isEditorUIElement(e)
    }

    function _l(t, e) {
        var n = t ? t.settings.custom_ui_selector : "";
        return null !== td.getParent(e, function(e) {
            return Dl(e) || !!n && t.dom.is(e, n)
        })
    }

    function Bl(r, e) {
        var t = e.editor;
        ed(t), t.on("focusin", function() {
            var e = r.focusedEditor;
            e !== this && (e && e.fire("blur", {
                focusedEditor: this
            }), r.setActive(this), (r.focusedEditor = this).fire("focus", {
                blurredEditor: e
            }), this.focus(!0))
        }), t.on("focusout", function() {
            var t = this;
            pn.setEditorTimeout(t, function() {
                var e = r.focusedEditor;
                _l(t, function() {
                    try {
                        return j.document.activeElement
                    } catch (e) {
                        return j.document.body
                    }
                }()) || e !== t || (t.fire("blur", {
                    focusedEditor: null
                }), r.focusedEditor = null)
            })
        }), rf || (rf = function(e) {
            var t, n = r.activeEditor;
            t = e.target, n && t.ownerDocument === j.document && (t === j.document.body || _l(n, t) || r.focusedEditor !== n || (n.fire("blur", {
                focusedEditor: null
            }), r.focusedEditor = null))
        }, td.bind(j.document, "focusin", rf))
    }

    function Ol(e, t) {
        e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (td.unbind(j.document, "focusin", rf), rf = null)
    }

    function Hl(t, e) {
        return function(e) {
            return e.collapsed ? k.from(Ka(e.startContainer, e.startOffset)).map(yt.fromDom) : k.none()
        }(e).bind(function(e) {
            return qn(e) ? k.some(e) : !1 === Bt(t, e) ? k.some(t) : k.none()
        })
    }

    function Pl(t, e) {
        Hl(yt.fromDom(t.getBody()), e).bind(function(e) {
            return Pc.firstPositionIn(e.dom())
        }).fold(function() {
            t.selection.normalize()
        }, function(e) {
            return t.selection.setRng(e.toRange())
        })
    }

    function Ll(e) {
        if (e.setActive) try {
            e.setActive()
        } catch (t) {
            e.focus()
        } else e.focus()
    }

    function Vl(e) {
        return yl(e) || function(t) {
            return bl(Ee(t)).filter(function(e) {
                return t.dom().contains(e.dom())
            })
        }(e).isSome()
    }

    function Il(e) {
        return e.inline ? function(e) {
            var t = e.getBody();
            return t && Vl(yt.fromDom(t))
        }(e) : function(e) {
            return e.iframeElement && yl(yt.fromDom(e.iframeElement))
        }(e)
    }

    function Fl(e) {
        return e instanceof ul
    }

    function Ul(e, t) {
        e.dom.setHTML(e.getBody(), t),
            function(r) {
                ud(r) && Pc.firstPositionIn(r.getBody()).each(function(e) {
                    var t = e.getNode(),
                        n = Ge.isTable(t) ? Pc.firstPositionIn(t).getOr(e) : e;
                    r.selection.setRng(n.toRange())
                })
            }(e)
    }

    function jl(t, n, r) {
        return void 0 === r && (r = {}), r.format = r.format ? r.format : "html", r.set = !0, r.content = Fl(n) ? "" : n, Fl(n) || r.no_events || (t.fire("BeforeSetContent", r), n = r.content), k.from(t.getBody()).fold($(n), function(e) {
            return Fl(n) ? function(e, t, n, r) {
                vl(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                var o = pl({
                    validate: e.validate
                }, e.schema).serialize(n);
                return r.content = Wn(yt.fromDom(t)) ? o : Mn.trim(o), Ul(e, r.content), r.no_events || e.fire("SetContent", r), n
            }(t, e, n, r) : function(e, t, n, r) {
                var o, i;
                return 0 === n.length || /^\s+$/.test(n) ? (i = '<br data-mce-bogus="1">', "TABLE" === t.nodeName ? n = "<tr><td>" + i + "</td></tr>" : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + i + "</li>"), n = (o = mf(e)) && e.schema.isValidChild(t.nodeName.toLowerCase(), o.toLowerCase()) ? (n = i, e.dom.createHTML(o, e.settings.forced_root_block_attrs, n)) : n || '<br data-mce-bogus="1">', Ul(e, n), e.fire("SetContent", r)) : ("raw" !== r.format && (n = pl({
                    validate: e.validate
                }, e.schema).serialize(e.parser.parse(n, {
                    isRootContent: !0,
                    insert: !0
                }))), r.content = Wn(yt.fromDom(t)) ? n : Mn.trim(n), Ul(e, r.content), r.no_events || e.fire("SetContent", r)), r.content
            }(t, e, n, r)
        })
    }

    function ql(e) {
        return k.from(e).each(function(e) {
            return e.destroy()
        })
    }

    function $l(e) {
        if (!e.removed) {
            var t = e._selectionOverrides,
                n = e.editorUpload,
                r = e.getBody(),
                o = e.getElement();
            r && e.save({
                is_removing: !0
            }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && pd.remove(o.nextSibling), fd(e), e.editorManager.remove(e), !e.inline && r && function(e) {
                pd.setStyle(e.id, "display", e.orgDisplay)
            }(e), dd(e), pd.remove(e.getContainer()), ql(t), ql(n), e.destroy()
        }
    }

    function Wl(e, t) {
        var n = e.selection,
            r = e.dom;
        e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), ql(n), ql(r)), function(e) {
            var t = e.formElement;
            t && (t._mceOldSubmit && (t.submit = t._mceOldSubmit, t._mceOldSubmit = null), pd.unbind(t, "submit reset", e.formEventDelegate))
        }(e), function(e) {
            e.contentAreaContainer = e.formElement = e.container = e.editorContainer = null, e.bodyElement = e.contentDocument = e.contentWindow = null, e.iframeElement = e.targetElm = null, e.selection && (e.selection = e.selection.win = e.selection.dom = e.selection.dom.doc = null)
        }(e), e.destroyed = !0) : e.remove())
    }

    function Kl(a) {
        return function() {
            for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
            if (0 === e.length) throw new Error("Can't merge zero objects");
            for (var n = {}, r = 0; r < e.length; r++) {
                var o = e[r];
                for (var i in o) vd.call(o, i) && (n[i] = a(n[i], o[i]))
            }
            return n
        }
    }

    function Xl(e) {
        var t = A(e) ? e.join(" ") : e,
            n = X(K(t) ? t.split(" ") : [], te);
        return y(n, function(e) {
            return 0 < e.length
        })
    }

    function Yl(e, t) {
        return e.sections().hasOwnProperty(t)
    }

    function Gl(e, t, n, r) {
        var o = Xl(n.forced_plugins),
            i = Xl(r.plugins),
            a = function(e, t) {
                return Yl(e, t) ? e.sections()[t] : {}
            }(t, "mobile"),
            u = a.plugins ? Xl(a.plugins) : i,
            s = function(e, t) {
                return [].concat(Xl(e)).concat(Xl(t))
            }(o, e && function(e, t, n) {
                var r = e.sections();
                return Yl(e, t) && r[t].theme === n
            }(t, "mobile", "mobile") ? function(e) {
                return y(e, d(h, Nd))
            }(u) : e && Yl(t, "mobile") ? u : i);
        return Mn.extend(r, {
            plugins: s.join(" ")
        })
    }

    function Jl(e, t, n, r, o) {
        var i = e ? {
                mobile: function(e) {
                    return G(G(G({}, Sd), {
                        resize: !1,
                        toolbar_drawer: "scrolling",
                        toolbar_sticky: !1
                    }), e ? {
                        menubar: !1
                    } : {})
                }(t)
            } : {},
            a = function(n, e) {
                var t = ce(e, function(e, t) {
                    return h(n, t)
                });
                return Cd(t.t, t.f)
            }(["mobile"], yd(i, o)),
            u = Mn.extend(n, r, a.settings(), function(e, t) {
                return e && Yl(t, "mobile")
            }(e, a) ? function(e, t, n) {
                void 0 === n && (n = {});
                var r = e.sections(),
                    o = r.hasOwnProperty(t) ? r[t] : {};
                return Mn.extend({}, n, o)
            }(a, "mobile") : {}, {
                validate: !0,
                external_plugins: function(e, t) {
                    var n = t.external_plugins ? t.external_plugins : {};
                    return e && e.external_plugins ? Mn.extend({}, e.external_plugins, n) : n
                }(r, a.settings())
            });
        return Gl(e, a, r, u)
    }

    function Ql(e, t, n, r, o) {
        var i = function(e, t, n, r) {
            var o = {
                id: e,
                theme: "silver",
                toolbar_drawer: "floating",
                plugins: "",
                document_base_url: t,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: !0,
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                entity_encoding: "named",
                url_converter: r.convertURL,
                url_converter_scope: r
            };
            return G(G({}, o), n ? Sd : {})
        }(t, n, xd, e);
        return Jl(zd || Ed, zd, i, r, o)
    }

    function Zl(e, t, n) {
        return k.from(t.settings[n]).filter(e)
    }

    function ef(e, t, n, r) {
        var o = t in e.settings ? e.settings[t] : n;
        return "hash" === r ? function(e) {
            var n = {};
            return "string" == typeof e ? z(0 < e.indexOf("=") ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(","), function(e) {
                var t = e.split("=");
                1 < t.length ? n[Mn.trim(t[0])] = Mn.trim(t[1]) : n[Mn.trim(t[0])] = Mn.trim(t[0])
            }) : n = e, n
        }(o) : "string" === r ? Zl(K, e, t).getOr(n) : "number" === r ? Zl(_, e, t).getOr(n) : "boolean" === r ? Zl(R, e, t).getOr(n) : "object" === r ? Zl(T, e, t).getOr(n) : "array" === r ? Zl(A, e, t).getOr(n) : "string[]" === r ? Zl(function(t) {
            return function(e) {
                return A(e) && w(e, t)
            }
        }(K), e, t).getOr(n) : "function" === r ? Zl(D, e, t).getOr(n) : o
    }

    function tf(e, t) {
        return t.dom()[e]
    }

    function nf(e, t) {
        return parseInt(ve(t, e), 10)
    }
    var rf, of = fl,
        af = {
            trimExternal: dl,
            trimInternal: dl
        },
        uf = function(e) {
            return e.getParam("iframe_attrs", {})
        },
        sf = function(e) {
            return e.getParam("doctype", "<!DOCTYPE html>")
        },
        cf = function(e) {
            return e.getParam("document_base_url", "")
        },
        lf = function(e) {
            return hl(e, "body_id", "tinymce")
        },
        ff = function(e) {
            return hl(e, "body_class", "")
        },
        df = function(e) {
            return e.getParam("content_security_policy", "")
        },
        hf = function(e) {
            return e.getParam("br_in_pre", !0)
        },
        mf = function(e) {
            if (e.getParam("force_p_newlines", !1)) return "p";
            var t = e.getParam("forced_root_block", "p");
            return !1 === t ? "" : !0 === t ? "p" : t
        },
        gf = function(e) {
            return e.getParam("forced_root_block_attrs", {})
        },
        pf = function(e) {
            return e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption")
        },
        vf = function(e) {
            return e.getParam("no_newline_selector", "")
        },
        yf = function(e) {
            return e.getParam("keep_styles", !0)
        },
        bf = function(e) {
            return e.getParam("end_container_on_empty_block", !1)
        },
        Cf = function(e) {
            return Mn.explode(e.getParam("font_size_style_values", "xx-small,x-small,small,medium,large,x-large,xx-large"))
        },
        wf = function(e) {
            return Mn.explode(e.getParam("font_size_classes", ""))
        },
        xf = function(e) {
            return e.getParam("icons", "", "string")
        },
        zf = function(e) {
            return e.getParam("icons_url", "", "string")
        },
        Ef = function(e) {
            return e.getParam("images_dataimg_filter", $(!0), "function")
        },
        Nf = function(e) {
            return e.getParam("automatic_uploads", !0, "boolean")
        },
        Sf = function(e) {
            return e.getParam("images_reuse_filename", !1, "boolean")
        },
        kf = function(e) {
            return e.getParam("images_replace_blob_uris", !0, "boolean")
        },
        Tf = function(e) {
            return e.getParam("images_upload_url", "", "string")
        },
        Af = function(e) {
            return e.getParam("images_upload_base_path", "", "string")
        },
        Mf = function(e) {
            return e.getParam("images_upload_credentials", !1, "boolean")
        },
        Rf = function(e) {
            return e.getParam("images_upload_handler", null, "function")
        },
        Df = function(e) {
            return e.getParam("content_css_cors", !1, "boolean")
        },
        _f = function(e) {
            return e.getParam("referrer_policy", "", "string")
        },
        Bf = function(e) {
            return e.getParam("language", "en", "string")
        },
        Of = function(e) {
            return e.getParam("language_url", "", "string")
        },
        Hf = function(e) {
            return e.getParam("indent_use_margin", !1)
        },
        Pf = function(e) {
            return e.getParam("indentation", "40px", "string")
        },
        Lf = function(e) {
            var t = e.settings.content_css;
            return K(t) ? X(t.split(","), te) : A(t) ? t : !1 === t || e.inline ? [] : ["default"]
        },
        Vf = function(e) {
            return e.getParam("directionality", ra.isRtl() ? "rtl" : undefined)
        },
        If = function(e) {
            return e.getParam("inline_boundaries_selector", "a[href],code,.mce-annotation", "string")
        },
        Ff = Mn.makeMap,
        Uf = function(e, t) {
            t(e), e.firstChild && Uf(e.firstChild, t), e.next && Uf(e.next, t)
        },
        jf = function(a) {
            if (!A(a)) throw new Error("cases must be an array");
            if (0 === a.length) throw new Error("there must be at least one case");
            var u = [],
                n = {};
            return z(a, function(e, r) {
                var t = Et(e);
                if (1 !== t.length) throw new Error("one and only one name per case");
                var o = t[0],
                    i = e[o];
                if (n[o] !== undefined) throw new Error("duplicate key detected:" + o);
                if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                if (!A(i)) throw new Error("case arguments must be an array");
                u.push(o), n[o] = function() {
                    var e = arguments.length;
                    if (e !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + e);
                    for (var n = new Array(e), t = 0; t < n.length; t++) n[t] = arguments[t];
                    return {
                        fold: function() {
                            if (arguments.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + arguments.length);
                            return arguments[r].apply(null, n)
                        },
                        match: function(e) {
                            var t = Et(e);
                            if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                            if (!w(u, function(e) {
                                    return h(t, e)
                                })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                            return e[o].apply(null, n)
                        },
                        log: function(e) {
                            j.console.log(e, {
                                constructors: u,
                                constructor: o,
                                params: n
                            })
                        }
                    }
                }
            }), n
        },
        qf = {
            create: be("start", "soffset", "finish", "foffset")
        },
        $f = jf([{
            before: ["element"]
        }, {
            on: ["element", "offset"]
        }, {
            after: ["element"]
        }]),
        Wf = ($f.before, $f.on, $f.after, function(e) {
            return e.fold(W, W, W)
        }),
        Kf = jf([{
            domRange: ["rng"]
        }, {
            relative: ["startSitu", "finishSitu"]
        }, {
            exact: ["start", "soffset", "finish", "foffset"]
        }]),
        Xf = {
            domRange: Kf.domRange,
            relative: Kf.relative,
            exact: Kf.exact,
            exactFromRange: function(e) {
                return Kf.exact(e.start(), e.soffset(), e.finish(), e.foffset())
            },
            getWin: function(e) {
                var t = function(e) {
                    return e.match({
                        domRange: function(e) {
                            return yt.fromDom(e.startContainer)
                        },
                        relative: function(e, t) {
                            return Wf(e)
                        },
                        exact: function(e, t, n, r) {
                            return e
                        }
                    })
                }(e);
                return Ne(t)
            },
            range: qf.create
        },
        Yf = oe().browser,
        Gf = function(e) {
            var t = El(e) ? kl(yt.fromDom(e.getBody())) : k.none();
            e.bookmark = t.isSome() ? t : e.bookmark
        },
        Jf = function(t) {
            Ml(t).each(function(e) {
                t.selection.setRng(e)
            })
        },
        Qf = Ml,
        Zf = {
            isEditorUIElement: function(e) {
                var t = e.className.toString();
                return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-")
            }
        },
        ed = function(e) {
            var t = aa(function() {
                Gf(e)
            }, 0);
            e.on("init", function() {
                e.inline && function(e, t) {
                    function n() {
                        t.throttle()
                    }
                    Xi.DOM.bind(j.document, "mouseup", n), e.on("remove", function() {
                        Xi.DOM.unbind(j.document, "mouseup", n)
                    })
                }(e, t), Rl(e, t)
            }), e.on("remove", function() {
                t.cancel()
            })
        },
        td = Xi.DOM,
        nd = function(e) {
            e.on("AddEditor", d(Bl, e)), e.on("RemoveEditor", d(Ol, e))
        },
        rd = function(e) {
            var t = e.classList;
            return t !== undefined && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"))
        },
        od = _l,
        id = function(e) {
            return e.editorManager.setActive(e)
        },
        ad = function(e, t) {
            e.removed || (t ? id(e) : function(t) {
                var e = t.selection,
                    n = t.getBody(),
                    r = e.getRng();
                t.quirks.refreshContentEditable(), t.bookmark !== undefined && !1 === Il(t) && Qf(t).each(function(e) {
                    t.selection.setRng(e), r = e
                });
                var o = function(t, e) {
                    return t.dom.getParent(e, function(e) {
                        return "true" === t.dom.getContentEditable(e)
                    })
                }(t, e.getNode());
                if (t.$.contains(n, o)) return Ll(o), Pl(t, r), id(t);
                t.inline || (Nn.opera || Ll(n), t.getWin().focus()), (Nn.gecko || t.inline) && (Ll(n), Pl(t, r)), id(t)
            }(e))
        },
        ud = Il,
        sd = function(e) {
            return Il(e) || function(t) {
                return bl().filter(function(e) {
                    return !rd(e.dom()) && od(t, e.dom())
                }).isSome()
            }(e)
        },
        cd = function(e, t) {
            return e.fire("PreProcess", t)
        },
        ld = function(e, t) {
            return e.fire("PostProcess", t)
        },
        fd = function(e) {
            return e.fire("remove")
        },
        dd = function(e) {
            return e.fire("detach")
        },
        hd = function(e, t) {
            return e.fire("SwitchMode", {
                mode: t
            })
        },
        md = function(e, t, n, r) {
            e.fire("ObjectResizeStart", {
                target: t,
                width: n,
                height: r
            })
        },
        gd = function(e, t, n, r) {
            e.fire("ObjectResized", {
                target: t,
                width: n,
                height: r
            })
        },
        pd = Xi.DOM,
        vd = Object.prototype.hasOwnProperty,
        yd = Kl(function(e, t) {
            return T(e) && T(t) ? yd(e, t) : t
        }),
        bd = Kl(function(e, t) {
            return t
        }),
        Cd = be("sections", "settings"),
        wd = oe().deviceType,
        xd = wd.isTouch(),
        zd = wd.isPhone(),
        Ed = wd.isTablet(),
        Nd = ["lists", "autolink", "autosave"],
        Sd = {
            table_grid: !1,
            object_resizing: !1,
            resize: !1
        },
        kd = d(tf, "clientWidth"),
        Td = d(tf, "clientHeight"),
        Ad = d(nf, "margin-top"),
        Md = d(nf, "margin-left"),
        Rd = function(e, t, n) {
            var r = yt.fromDom(e.getBody()),
                o = e.inline ? r : function(e) {
                    return yt.fromDom(e.dom().ownerDocument.documentElement)
                }(r),
                i = function(e, t, n, r) {
                    var o = function(e) {
                        return e.dom().getBoundingClientRect()
                    }(t);
                    return {
                        x: n - (e ? o.left + t.dom().clientLeft + Md(t) : 0),
                        y: r - (e ? o.top + t.dom().clientTop + Ad(t) : 0)
                    }
                }(e.inline, o, t, n);
            return function(e, t, n) {
                var r = kd(e),
                    o = Td(e);
                return 0 <= t && 0 <= n && t <= r && n <= o
            }(o, i.x, i.y)
        },
        Dd = function(e) {
            return function(e) {
                return k.from(e).map(yt.fromDom)
            }(e.inline ? e.getBody() : e.getContentAreaContainer()).map(function(e) {
                return Bt(Ee(e), e)
            }).getOr(!1)
        };

    function _d(n) {
        function r() {
            var e = n.theme;
            return e && e.getNotificationManagerImpl ? e.getNotificationManagerImpl() : function t() {
                function e() {
                    throw new Error("Theme did not provide a NotificationManager implementation.")
                }
                return {
                    open: e,
                    close: e,
                    reposition: e,
                    getArgs: e
                }
            }()
        }

        function o() {
            0 < u.length && r().reposition(u)
        }

        function i(t) {
            p(u, function(e) {
                return e === t
            }).each(function(e) {
                u.splice(e, 1)
            })
        }

        function t(t) {
            if (!n.removed && Dd(n)) return g(u, function(e) {
                return function(e, t) {
                    return !(e.type !== t.type || e.text !== t.text || e.progressBar || e.timeout || t.progressBar || t.timeout)
                }(r().getArgs(e), t)
            }).getOrThunk(function() {
                n.editorManager.setActive(n);
                var e = r().open(t, function() {
                    i(e), o()
                });
                return function(e) {
                    u.push(e)
                }(e), o(), e
            })
        }
        var a, u = [];
        return (a = n).on("SkinLoaded", function() {
            var e = a.settings.service_message;
            e && t({
                text: e,
                type: "warning",
                timeout: 0
            })
        }), a.on("ResizeEditor ResizeWindow NodeChange", function() {
            pn.requestAnimationFrame(o)
        }), a.on("remove", function() {
            z(u.slice(), function(e) {
                r().close(e)
            })
        }), {
            open: t,
            close: function() {
                k.from(u[0]).each(function(e) {
                    r().close(e), i(e), o()
                })
            },
            getNotifications: function() {
                return u
            }
        }
    }

    function Bd(n) {
        function r() {
            var e = n.theme;
            return e && e.getWindowManagerImpl ? e.getWindowManagerImpl() : function t() {
                function e() {
                    throw new Error("Theme did not provide a WindowManager implementation.")
                }
                return {
                    open: e,
                    openUrl: e,
                    alert: e,
                    confirm: e,
                    close: e,
                    getParams: e,
                    setParams: e
                }
            }()
        }

        function o(e, t) {
            return function() {
                return t ? t.apply(e, arguments) : undefined
            }
        }

        function i(e) {
            s.push(e),
                function(e) {
                    n.fire("OpenWindow", {
                        dialog: e
                    })
                }(e)
        }

        function a(t) {
            ! function(e) {
                n.fire("CloseWindow", {
                    dialog: e
                })
            }(t), 0 === (s = y(s, function(e) {
                return e !== t
            })).length && n.focus()
        }

        function u(e) {
            n.editorManager.setActive(n), Gf(n);
            var t = e();
            return i(t), t
        }
        var s = [];
        return n.on("remove", function() {
            z(s, function(e) {
                r().close(e)
            })
        }), {
            open: function(e, t) {
                return u(function() {
                    return r().open(e, t, a)
                })
            },
            openUrl: function(e) {
                return u(function() {
                    return r().openUrl(e, a)
                })
            },
            alert: function(e, t, n) {
                r().alert(e, o(n || this, t))
            },
            confirm: function(e, t, n) {
                r().confirm(e, o(n || this, t))
            },
            close: function() {
                k.from(s[s.length - 1]).each(function(e) {
                    r().close(e), a(e)
                })
            }
        }
    }

    function Od(e, t) {
        e.notificationManager.open({
            type: "error",
            text: t
        })
    }

    function Hd(e, t) {
        e._skinLoaded ? Od(e, t) : e.on("SkinLoaded", function() {
            Od(e, t)
        })
    }

    function Pd(e) {
        j.console.error(e)
    }

    function Ld(e, t, n) {
        return n ? "Failed to load " + e + ": " + n + " from url " + t : "Failed to load " + e + " url: " + t
    }
    var Vd, Id = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = j.window.console;
            r && (r.error ? r.error.apply(r, arguments) : r.log.apply(r, arguments))
        },
        Fd = {
            pluginLoadError: function(e, t) {
                Pd(Ld("plugin", e, t))
            },
            iconsLoadError: function(e, t) {
                Pd(Ld("icons", e, t))
            },
            languageLoadError: function(e, t) {
                Pd(Ld("language", e, t))
            },
            pluginInitError: function(e, t, n) {
                var r = ra.translate(["Failed to initialize plugin: {0}", t]);
                Id(r, n), Hd(e, r)
            },
            uploadError: function(e, t) {
                Hd(e, ra.translate(["Failed to upload image: {0}", t]))
            },
            displayError: Hd,
            initError: Id
        },
        Ud = (Vd = {}, {
            add: function(e, t) {
                Vd[e] = t
            },
            get: function(e) {
                return Vd[e] ? Vd[e] : {
                    icons: {}
                }
            },
            has: function(e) {
                return kt(Vd, e)
            }
        }),
        jd = ga.PluginManager,
        qd = ga.ThemeManager;

    function $d(s, a) {
        function n(e, t, n, r) {
            var o, i;
            (o = new j.XMLHttpRequest).open("POST", a.url), o.withCredentials = a.credentials, o.upload.onprogress = function(e) {
                r(e.loaded / e.total * 100)
            }, o.onerror = function() {
                n("Image upload failed due to a XHR Transport error. Code: " + o.status)
            }, o.onload = function() {
                var e;
                o.status < 200 || 300 <= o.status ? n("HTTP Error: " + o.status) : (e = JSON.parse(o.responseText)) && "string" == typeof e.location ? t(function(e, t) {
                    return e ? e.replace(/\/$/, "") + "/" + t.replace(/^\//, "") : t
                }(a.basePath, e.location)) : n("Invalid JSON: " + o.responseText)
            }, (i = new j.FormData).append("file", e.blob(), e.filename()), o.send(i)
        }

        function c(e, t) {
            return {
                url: t,
                blobInfo: e,
                status: !0
            }
        }

        function l(e, t) {
            return {
                url: "",
                blobInfo: e,
                status: !1,
                error: t
            }
        }

        function f(e, t) {
            Mn.each(o[e], function(e) {
                e(t)
            }), delete o[e]
        }

        function r(e, t) {
            return e = Mn.grep(e, function(e) {
                return !s.isUploaded(e.blobUri())
            }), Zt.all(Mn.map(e, function(e) {
                return s.isPending(e.blobUri()) ? function(e) {
                    var t = e.blobUri();
                    return new Zt(function(e) {
                        o[t] = o[t] || [], o[t].push(e)
                    })
                }(e) : function(i, a, u) {
                    return s.markPending(i.blobUri()), new Zt(function(t) {
                        function e() {}
                        var n;
                        try {
                            var r = function() {
                                n && (n.close(), e)
                            };
                            a(i, function(e) {
                                r(), s.markUploaded(i.blobUri(), e), f(i.blobUri(), c(i, e)), t(c(i, e))
                            }, function(e) {
                                r(), s.removeFailed(i.blobUri()), f(i.blobUri(), l(i, e)), t(l(i, e))
                            }, function(e) {
                                e < 0 || 100 < e || (n = n || u()).progressBar.value(e)
                            })
                        } catch (o) {
                            t(l(i, o.message))
                        }
                    })
                }(e, a.handler, t)
            }))
        }
        var o = {};
        return !1 === D(a.handler) && (a.handler = n), {
            upload: function(e, t) {
                return !a.url && function(e) {
                    return e === n
                }(a.handler) ? new Zt(function(e) {
                    e([])
                }) : r(e, t)
            }
        }
    }

    function Wd(e) {
        var t, n, r = decodeURIComponent(e).split(",");
        return (n = /data:([^;]+)/.exec(r[0])) && (t = n[1]), {
            type: t,
            data: r[1]
        }
    }

    function Kd(e) {
        return (e || "blobid") + Jd++
    }
    var Xd = function(e) {
            return 0 === e.indexOf("blob:") ? function(i) {
                return new Zt(function(e, t) {
                    function n() {
                        t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.")
                    }
                    try {
                        var r = new j.XMLHttpRequest;
                        r.open("GET", i, !0), r.responseType = "blob", r.onload = function() {
                            200 === this.status ? e(this.response) : n()
                        }, r.onerror = n, r.send()
                    } catch (o) {
                        n()
                    }
                })
            }(e) : 0 === e.indexOf("data:") ? function(i) {
                return new Zt(function(e) {
                    var t, n, r, o = Wd(i);
                    try {
                        t = j.atob(o.data)
                    } catch (yN) {
                        return void e(new j.Blob([]))
                    }
                    for (n = new Uint8Array(t.length), r = 0; r < n.length; r++) n[r] = t.charCodeAt(r);
                    e(new j.Blob([n], {
                        type: o.type
                    }))
                })
            }(e) : null
        },
        Yd = function(n) {
            return new Zt(function(e) {
                var t = new j.FileReader;
                t.onloadend = function() {
                    e(t.result)
                }, t.readAsDataURL(n)
            })
        },
        Gd = Wd,
        Jd = 0;

    function Qd(o, i) {
        var a = {};
        return {
            findAll: function(e, n) {
                var t;
                n = n || $(!0), t = y(function(e) {
                    return e ? P(e.getElementsByTagName("img")) : []
                }(e), function(e) {
                    var t = e.src;
                    return !!Nn.fileApi && (!e.hasAttribute("data-mce-bogus") && (!e.hasAttribute("data-mce-placeholder") && (!(!t || t === Nn.transparentSrc) && (0 === t.indexOf("blob:") ? !o.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e)))))
                });
                var r = X(t, function(n) {
                    if (a[n.src]) return new Zt(function(t) {
                        a[n.src].then(function(e) {
                            if ("string" == typeof e) return e;
                            t({
                                image: n,
                                blobInfo: e.blobInfo
                            })
                        })
                    });
                    var e = new Zt(function(e, t) {
                        ! function(n, r, o, t) {
                            var i, a;
                            0 !== r.src.indexOf("blob:") ? (i = Gd(r.src).data, (a = n.findFirst(function(e) {
                                return e.base64() === i
                            })) ? o({
                                image: r,
                                blobInfo: a
                            }) : Xd(r.src).then(function(e) {
                                a = n.create(Kd(), e, i), n.add(a), o({
                                    image: r,
                                    blobInfo: a
                                })
                            }, function(e) {
                                t(e)
                            })) : (a = n.getByUri(r.src)) ? o({
                                image: r,
                                blobInfo: a
                            }) : Xd(r.src).then(function(t) {
                                Yd(t).then(function(e) {
                                    i = Gd(e).data, a = n.create(Kd(), t, i), n.add(a), o({
                                        image: r,
                                        blobInfo: a
                                    })
                                })
                            }, function(e) {
                                t(e)
                            })
                        }(i, n, e, t)
                    }).then(function(e) {
                        return delete a[e.image.src], e
                    })["catch"](function(e) {
                        return delete a[n.src], e
                    });
                    return a[n.src] = e
                });
                return Zt.all(r)
            }
        }
    }
    var Zd = 0,
        eh = function(e) {
            return e + Zd++ + function() {
                function e() {
                    return Math.round(4294967295 * Math.random()).toString(36)
                }
                return "s" + (new Date).getTime().toString(36) + e() + e() + e()
            }()
        };

    function th(o) {
        function t(t) {
            return function(e) {
                return o.selection ? t(e) : []
            }
        }

        function r(e, t, n) {
            for (var r = 0; - 1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;);
            return e
        }

        function i(e, t, n) {
            return e = r(e, 'src="' + t + '"', 'src="' + n + '"'), e = r(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
        }

        function n(t, n) {
            z(o.undoManager.data, function(e) {
                "fragmented" === e.type ? e.fragments = X(e.fragments, function(e) {
                    return i(e, t, n)
                }) : e.content = i(e.content, t, n)
            })
        }

        function a() {
            return o.notificationManager.open({
                text: o.translate("Image uploading..."),
                type: "info",
                timeout: -1,
                progressBar: !0
            })
        }

        function u(e, t) {
            h.removeByUri(e.src), n(e.src, t), o.$(e).attr({
                src: Sf(o) ? t + "?" + (new Date).getTime() : t,
                "data-mce-src": o.convertURL(t, "src")
            })
        }

        function s(n) {
            return f = f || $d(m, {
                url: Tf(o),
                basePath: Af(o),
                credentials: Mf(o),
                handler: Rf(o)
            }), p().then(t(function(r) {
                var e;
                return e = X(r, function(e) {
                    return e.blobInfo
                }), f.upload(e, a).then(t(function(e) {
                    var t = X(e, function(e, t) {
                        var n = r[t].image;
                        return e.status && kf(o) ? u(n, e.url) : e.error && Fd.uploadError(o, e.error), {
                            element: n,
                            status: e.status
                        }
                    });
                    return n && n(t), t
                }))
            }))
        }

        function e(e) {
            if (Nf(o)) return s(e)
        }

        function c(t) {
            return !1 !== w(g, function(e) {
                return e(t)
            }) && (0 !== t.getAttribute("src").indexOf("data:") || Ef(o)(t))
        }

        function l(e) {
            return e.replace(/src="(blob:[^"]+)"/g, function(e, n) {
                var t = m.getResultUri(n);
                if (t) return 'src="' + t + '"';
                var r = h.getByUri(n);
                return (r = r || b(o.editorManager.get(), function(e, t) {
                    return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n)
                }, null)) ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e
            })
        }
        var f, d, h = function() {
                var n = [],
                    o = function(e) {
                        var t, n;
                        if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                        return t = e.id || eh("blobid"), n = e.name || t, {
                            id: $(t),
                            name: $(n),
                            filename: $(n + "." + function(e) {
                                return {
                                    "image/jpeg": "jpg",
                                    "image/jpg": "jpg",
                                    "image/gif": "gif",
                                    "image/png": "png"
                                }[e.toLowerCase()] || "dat"
                            }(e.blob.type)),
                            blob: $(e.blob),
                            base64: $(e.base64),
                            blobUri: $(e.blobUri || j.URL.createObjectURL(e.blob)),
                            uri: $(e.uri)
                        }
                    },
                    t = function(t) {
                        return e(function(e) {
                            return e.id() === t
                        })
                    },
                    e = function(e) {
                        return y(n, e)[0]
                    };
                return {
                    create: function(e, t, n, r) {
                        if (K(e)) return o({
                            id: e,
                            name: r,
                            blob: t,
                            base64: n
                        });
                        if (T(e)) return o(e);
                        throw new Error("Unknown input type")
                    },
                    add: function(e) {
                        t(e.id()) || n.push(e)
                    },
                    get: t,
                    getByUri: function(t) {
                        return e(function(e) {
                            return e.blobUri() === t
                        })
                    },
                    findFirst: e,
                    removeByUri: function(t) {
                        n = y(n, function(e) {
                            return e.blobUri() !== t || (j.URL.revokeObjectURL(e.blobUri()), !1)
                        })
                    },
                    destroy: function() {
                        z(n, function(e) {
                            j.URL.revokeObjectURL(e.blobUri())
                        }), n = []
                    }
                }
            }(),
            m = function v() {
                function n(e, t) {
                    return {
                        status: e,
                        resultUri: t
                    }
                }

                function t(e) {
                    return e in r
                }
                var r = {};
                return {
                    hasBlobUri: t,
                    getResultUri: function(e) {
                        var t = r[e];
                        return t ? t.resultUri : null
                    },
                    isPending: function(e) {
                        return !!t(e) && 1 === r[e].status
                    },
                    isUploaded: function(e) {
                        return !!t(e) && 2 === r[e].status
                    },
                    markPending: function(e) {
                        r[e] = n(1, null)
                    },
                    markUploaded: function(e, t) {
                        r[e] = n(2, t)
                    },
                    removeFailed: function(e) {
                        delete r[e]
                    },
                    destroy: function() {
                        r = {}
                    }
                }
            }(),
            g = [],
            p = function() {
                return (d = d || Qd(m, h)).findAll(o.getBody(), c).then(t(function(e) {
                    return e = y(e, function(e) {
                        return "string" != typeof e || (Fd.displayError(o, e), !1)
                    }), z(e, function(e) {
                        n(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                    }), e
                }))
            };
        return o.on("SetContent", function() {
            Nf(o) ? e() : p()
        }), o.on("RawSaveContent", function(e) {
            e.content = l(e.content)
        }), o.on("GetContent", function(e) {
            e.source_view || "raw" === e.format || (e.content = l(e.content))
        }), o.on("PostRender", function() {
            o.parser.addNodeFilter("img", function(e) {
                z(e, function(e) {
                    var t = e.attr("src");
                    if (!h.getByUri(t)) {
                        var n = m.getResultUri(t);
                        n && e.attr("src", n)
                    }
                })
            })
        }), {
            blobCache: h,
            addFilter: function(e) {
                g.push(e)
            },
            uploadImages: s,
            uploadImagesAuto: e,
            scanForImages: p,
            destroy: function() {
                h.destroy(), m.destroy(), d = f = null
            }
        }
    }

    function nh(e, t, n) {
        return Bt(t, e) ? function(e) {
            return e.slice(0, -1)
        }(function(e, t) {
            for (var n = D(t) ? t : c, r = e.dom(), o = []; null !== r.parentNode && r.parentNode !== undefined;) {
                var i = r.parentNode,
                    a = yt.fromDom(i);
                if (o.push(a), !0 === n(a)) break;
                r = i
            }
            return o
        }(e, function(e) {
            return n(e) || ze(e, t)
        })) : []
    }

    function rh(e, t) {
        return nh(e, t, $(!1))
    }

    function oh(e, t) {
        return e.hasOwnProperty(t.nodeName)
    }

    function ih(e, t) {
        if (Ge.isText(t)) {
            if (0 === t.nodeValue.length) return !0;
            if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || oh(e, t.nextSibling))) return !0
        }
        return !1
    }

    function ah(e) {
        var t, n, r, o, i, a, u, s, c, l, f = e.dom,
            d = e.selection,
            h = e.schema,
            m = h.getBlockElements(),
            g = d.getStart(),
            p = e.getBody(),
            v = mf(e);
        if (g && Ge.isElement(g) && v && (l = p.nodeName.toLowerCase(), h.isValidChild(l, v.toLowerCase()) && ! function(t, e, n) {
                return C(lh(yt.fromDom(n), yt.fromDom(e)), function(e) {
                    return oh(t, e.dom())
                })
            }(m, p, g))) {
            for (n = (t = d.getRng()).startContainer, r = t.startOffset, o = t.endContainer, i = t.endOffset, c = ud(e), g = p.firstChild; g;)
                if (y = m, b = g, Ge.isText(b) || Ge.isElement(b) && !oh(y, b) && !Fc(b)) {
                    if (ih(m, g)) {
                        g = (u = g).nextSibling, f.remove(u);
                        continue
                    }
                    a || (a = f.create(v, gf(e)), g.parentNode.insertBefore(a, g), s = !0), g = (u = g).nextSibling, a.appendChild(u)
                } else a = null, g = g.nextSibling;
            var y, b;
            s && c && (t.setStart(n, r), t.setEnd(o, i), d.setRng(t), e.nodeChanged())
        }
    }

    function uh(o, e) {
        return Ya(function(e) {
            var t = e.startContainer,
                n = e.startOffset;
            return Ge.isText(t) ? 0 === n ? k.some(yt.fromDom(t)) : k.none() : k.from(t.childNodes[n]).map(yt.fromDom)
        }(e), function(e) {
            var t = e.endContainer,
                n = e.endOffset;
            return Ge.isText(t) ? n === t.data.length ? k.some(yt.fromDom(t)) : k.none() : k.from(t.childNodes[n - 1]).map(yt.fromDom)
        }(e), function(e, t) {
            var n = g(mh(o), d(ze, e)),
                r = g(gh(o), d(ze, t));
            return n.isSome() && r.isSome()
        }).getOr(!1)
    }

    function sh(e, t, n, r) {
        var o = n,
            i = new yi(n, o),
            a = e.schema.getNonEmptyElements();
        do {
            if (3 === n.nodeType && 0 !== Mn.trim(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
            if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName)) return void(r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n))
        } while (n = r ? i.next() : i.prev());
        "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length))
    }

    function ch(e) {
        var t = e.selection.getSel();
        return t && 0 < t.rangeCount
    }
    var lh = rh,
        fh = function(e, t) {
            return [e].concat(rh(e, t))
        },
        dh = function(e) {
            mf(e) && e.on("NodeChange", d(ah, e))
        },
        hh = function(e, t) {
            return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset
        },
        mh = function(t) {
            return _e(t).fold($([t]), function(e) {
                return [t].concat(mh(e))
            })
        },
        gh = function(t) {
            return Be(t).fold($([t]), function(e) {
                return "br" === ie(e) ? ke(e).map(function(e) {
                    return [t].concat(gh(e))
                }).getOr([]) : [t].concat(gh(e))
            })
        },
        ph = (vh.prototype.nodeChanged = function(e) {
            var t, n, r, o = this.editor.selection;
            this.editor.initialized && o && !this.editor.settings.disable_nodechange && !this.editor.readonly && (r = this.editor.getBody(), (t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(t, r) || (t = r), n = [], this.editor.dom.getParent(t, function(e) {
                if (e === r) return !0;
                n.push(e)
            }), (e = e || {}).element = t, e.parents = n, this.editor.fire("NodeChange", e))
        }, vh.prototype.isSameElementPath = function(e) {
            var t, n;
            if ((n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)).length === this.lastPath.length) {
                for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--);
                if (-1 === t) return this.lastPath = n, !0
            }
            return this.lastPath = n, !1
        }, vh);

    function vh(r) {
        var o;
        this.lastPath = [], this.editor = r;
        var t = this;
        "onselectionchange" in r.getDoc() || r.on("NodeChange click mouseup keyup focus", function(e) {
            var t, n;
            n = {
                startContainer: (t = r.selection.getRng()).startContainer,
                startOffset: t.startOffset,
                endContainer: t.endContainer,
                endOffset: t.endOffset
            }, "nodechange" !== e.type && hh(n, o) || r.fire("SelectionChange"), o = n
        }), r.on("contextmenu", function() {
            r.fire("SelectionChange")
        }), r.on("SelectionChange", function() {
            var e = r.selection.getStart(!0);
            !e || !Nn.range && r.selection.isCollapsed() || ch(r) && !t.isSameElementPath(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({
                selectionChange: !0
            })
        }), r.on("mouseup", function(e) {
            !e.isDefaultPrevented() && ch(r) && ("IMG" === r.selection.getNode().nodeName ? pn.setEditorTimeout(r, function() {
                r.nodeChanged()
            }) : r.nodeChanged())
        })
    }

    function yh(e) {
        return /^[\r\n\t ]$/.test(e)
    }

    function bh(e) {
        return !yh(e) && !Mh(e)
    }

    function Ch(n, r, o) {
        return k.from(o.container()).filter(Ge.isText).exists(function(e) {
            var t = n ? 0 : -1;
            return r(e.data.charAt(o.offset() + t))
        })
    }

    function wh(e) {
        var t = e.container();
        return Ge.isText(t) && 0 === t.data.length
    }

    function xh(t, n) {
        return function(e) {
            return k.from(ws(t ? 0 : -1, e)).filter(n).isSome()
        }
    }

    function zh(e) {
        return "IMG" === e.nodeName && "block" === ve(yt.fromDom(e), "display")
    }

    function Eh(e) {
        return Ge.isContentEditableFalse(e) && !Ge.isBogusAll(e)
    }

    function Nh(e) {
        return b(e, function(e, t) {
            return e.concat(function(t) {
                function e(e) {
                    return X(e, function(e) {
                        return (e = Ia(e)).node = t, e
                    })
                }
                if (Ge.isElement(t)) return e(t.getClientRects());
                if (Ge.isText(t)) {
                    var n = t.ownerDocument.createRange();
                    return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects())
                }
            }(t))
        }, [])
    }
    var Sh, kh, Th, Ah = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            END: 35,
            HOME: 36,
            modifierPressed: function(e) {
                return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
            },
            metaKeyPressed: function(e) {
                return Nn.mac ? e.metaKey : e.ctrlKey && !e.altKey
            }
        },
        Mh = (Sh = "\xa0", function(e) {
            return Sh === e
        }),
        Rh = d(Ch, !0, yh),
        Dh = d(Ch, !1, yh),
        _h = xh(!0, zh),
        Bh = xh(!1, zh),
        Oh = xh(!0, Ge.isTable),
        Hh = xh(!1, Ge.isTable),
        Ph = xh(!0, Eh),
        Lh = xh(!1, Eh);
    (Th = kh = kh || {})[Th.Up = -1] = "Up", Th[Th.Down = 1] = "Down";

    function Vh(o, i, a, e, u, t) {
        function n(e) {
            var t, n, r;
            for (r = Nh([e]), -1 === o && (r = r.reverse()), t = 0; t < r.length; t++)
                if (n = r[t], !a(n, s)) {
                    if (0 < l.length && i(n, kn.last(l)) && c++, n.line = c, u(n)) return !0;
                    l.push(n)
                }
        }
        var r, s, c = 0,
            l = [];
        return (s = kn.last(t.getClientRects())) && (n(r = t.getNode()), function(e, t, n, r) {
            for (; r = ys(r, e, Va, t);)
                if (n(r)) return
        }(o, e, n, r)), l
    }

    function Ih(t) {
        return function(e) {
            return function(e, t) {
                return t.line > e
            }(t, e)
        }
    }

    function Fh(t) {
        return function(e) {
            return function(e, t) {
                return t.line === e
            }(t, e)
        }
    }

    function Uh(e, t) {
        return Math.abs(e.left - t)
    }

    function jh(e, t) {
        return Math.abs(e.right - t)
    }

    function qh(e, t) {
        return e >= t.left && e <= t.right
    }

    function $h(e, o) {
        return kn.reduce(e, function(e, t) {
            var n, r;
            return n = Math.min(Uh(e, o), jh(e, o)), r = Math.min(Uh(t, o), jh(t, o)), qh(o, t) ? t : qh(o, e) ? e : r === n && Ym(t.node) ? t : r < n ? t : e
        })
    }

    function Wh(e, t, n, r) {
        for (; r = Gm(r, e, Va, t);)
            if (n(r)) return
    }

    function Kh(e, t, n) {
        var r, o = Nh(function(e) {
                return y(P(e.getElementsByTagName("*")), ms)
            }(e)),
            i = y(o, function(e) {
                return n >= e.top && n <= e.bottom
            });
        return (r = (r = $h(i, t)) && $h(function(e, r) {
            function t(t, e) {
                var n;
                return n = y(Nh([e]), function(e) {
                    return !t(e, r)
                }), o = o.concat(n), 0 === n.length
            }
            var o = [];
            return o.push(r), Wh(kh.Up, e, d(t, ja), r.node), Wh(kh.Down, e, d(t, qa), r.node), o
        }(e, r), t)) && ms(r.node) ? function(e, t) {
            return {
                node: e.node,
                before: Uh(e, t) < jh(e, t)
            }
        }(r, t) : null
    }

    function Xh(e) {
        var t, n, r, o;
        return o = e.getBoundingClientRect(), n = (t = e.ownerDocument).documentElement, r = t.defaultView, {
            top: o.top + r.pageYOffset - n.clientTop,
            left: o.left + r.pageXOffset - n.clientLeft
        }
    }

    function Yh(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }

    function Gh(i, a) {
        return function(e) {
            if (function(e) {
                    return 0 === e.button
                }(e)) {
                var t = g(a.dom.getParents(e.target), Tu(Zm, eg)).getOr(null);
                if (function(e, t) {
                        return Zm(t) && t !== e
                    }(a.getBody(), t)) {
                    var n = a.dom.getPos(t),
                        r = a.getBody(),
                        o = a.getDoc().documentElement;
                    i.element = t, i.screenX = e.screenX, i.screenY = e.screenY, i.maxX = (a.inline ? r.scrollWidth : o.offsetWidth) - 2, i.maxY = (a.inline ? r.scrollHeight : o.offsetHeight) - 2, i.relX = e.pageX - n.x, i.relY = e.pageY - n.y, i.width = t.offsetWidth, i.height = t.offsetHeight, i.ghost = function(e, t, n, r) {
                        var o = t.cloneNode(!0);
                        e.dom.setStyles(o, {
                            width: n,
                            height: r
                        }), e.dom.setAttrib(o, "data-mce-selected", null);
                        var i = e.dom.create("div", {
                            "class": "mce-drag-container",
                            "data-mce-bogus": "all",
                            unselectable: "on",
                            contenteditable: "false"
                        });
                        return e.dom.setStyles(i, {
                            position: "absolute",
                            opacity: .5,
                            overflow: "hidden",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            width: n,
                            height: r
                        }), e.dom.setStyles(o, {
                            margin: 0,
                            boxSizing: "border-box"
                        }), i.appendChild(o), i
                    }(a, t, i.width, i.height)
                }
            }
        }
    }

    function Jh(r, o) {
        return function(e) {
            if (r.dragging && function(e, t, n) {
                    return t !== n && !e.dom.isChildOf(t, n) && !Zm(t)
                }(o, function(e) {
                    var t = e.getSel().getRangeAt(0).startContainer;
                    return 3 === t.nodeType ? t.parentNode : t
                }(o.selection), r.element)) {
                var t = function(e) {
                        var t = e.cloneNode(!0);
                        return t.removeAttribute("data-mce-selected"), t
                    }(r.element),
                    n = o.fire("drop", {
                        targetClone: t,
                        clientX: e.clientX,
                        clientY: e.clientY
                    });
                n.isDefaultPrevented() || (t = n.targetClone, o.undoManager.transact(function() {
                    Yh(r.element), o.insertContent(o.dom.getOuterHTML(t)), o._selectionOverrides.hideFakeCaret()
                }))
            }
            tg(r)
        }
    }

    function Qh(e) {
        var t, n, r, o, i, a, u = {};
        t = Xi.DOM, a = j.document, n = Gh(u, e), r = function(r, o) {
            var i = pn.throttle(function(e, t) {
                o._selectionOverrides.hideFakeCaret(), o.selection.placeCaretAt(e, t)
            }, 0);
            return function(e) {
                var t = Math.max(Math.abs(e.screenX - r.screenX), Math.abs(e.screenY - r.screenY));
                if (function(e) {
                        return e.element
                    }(r) && !r.dragging && 10 < t) {
                    if (o.fire("dragstart", {
                            target: r.element
                        }).isDefaultPrevented()) return;
                    r.dragging = !0, o.focus()
                }
                if (r.dragging) {
                    var n = function(e, t) {
                        return {
                            pageX: t.pageX - e.relX,
                            pageY: t.pageY + 5
                        }
                    }(r, Qm(o, e));
                    ! function(e, t) {
                        e.parentNode !== t && t.appendChild(e)
                    }(r.ghost, o.getBody()),
                    function(e, t, n, r, o, i) {
                        var a = 0,
                            u = 0;
                        e.style.left = t.pageX + "px", e.style.top = t.pageY + "px", t.pageX + n > o && (a = t.pageX + n - o), t.pageY + r > i && (u = t.pageY + r - i), e.style.width = n - a + "px", e.style.height = r - u + "px"
                    }(r.ghost, n, r.width, r.height, r.maxX, r.maxY), i(e.clientX, e.clientY)
                }
            }
        }(u, e), o = Jh(u, e), i = function(e, t) {
            return function() {
                e.dragging && t.fire("dragend"), tg(e)
            }
        }(u, e), e.on("mousedown", n), e.on("mousemove", r), e.on("mouseup", o), t.bind(a, "mousemove", r), t.bind(a, "mouseup", i), e.on("remove", function() {
            t.unbind(a, "mousemove", r), t.unbind(a, "mouseup", i)
        })
    }

    function Zh(e, t, n, r, o) {
        return t._selectionOverrides.showCaret(e, n, r, o)
    }

    function em(e, t) {
        return e.fire("BeforeObjectSelected", {
            target: t
        }).isDefaultPrevented() ? null : function(e) {
            var t = e.ownerDocument.createRange();
            return t.selectNode(e), t
        }(t)
    }

    function tm(e, t, n) {
        var r = Es(1, e.getBody(), t),
            o = Ds.fromRangeStart(r),
            i = o.getNode();
        if (og(i)) return Zh(1, e, i, !o.isAtEnd(), !1);
        var a = o.getNode(!0);
        if (og(a)) return Zh(1, e, a, !1, !1);
        var u = e.dom.getParent(o.getNode(), function(e) {
            return og(e) || rg(e)
        });
        return og(u) ? Zh(1, e, u, !1, n) : null
    }

    function nm(e, t, n) {
        if (!t || !t.collapsed) return t;
        var r = tm(e, t, n);
        return r || t
    }

    function rm(e, t) {
        for (var n = e.getBody(); t && t !== n;) {
            if (ag(t) || ug(t)) return t;
            t = t.parentNode
        }
        return null
    }

    function om(g) {
        function a(e) {
            e && g.selection.setRng(e)
        }

        function o() {
            return g.selection.getRng()
        }

        function p(e, t, n, r) {
            return void 0 === r && (r = !0), g.fire("ShowCaret", {
                target: t,
                direction: e,
                before: n
            }).isDefaultPrevented() ? null : (r && g.selection.scrollIntoView(t, -1 === e), u.show(n, t))
        }

        function t(e) {
            return Da(e) || hu(e) || mu(e)
        }
        var v, y = g.getBody(),
            u = ds(g.getBody(), function(e) {
                return g.dom.isBlock(e)
            }, function() {
                return ud(g)
            }),
            b = "sel-" + g.dom.uniqueId(),
            C = function(e) {
                return t(e.startContainer) || t(e.endContainer)
            },
            s = function(e) {
                var t = g.schema.getShortEndedElements(),
                    n = g.dom.createRng(),
                    r = e.startContainer,
                    o = e.startOffset,
                    i = e.endContainer,
                    a = e.endOffset;
                return kt(t, r.nodeName.toLowerCase()) ? 0 === o ? n.setStartBefore(r) : n.setStartAfter(r) : n.setStart(r, o), kt(t, i.nodeName.toLowerCase()) ? 0 === a ? n.setEndBefore(i) : n.setEndAfter(i) : n.setEnd(i, a), n
            },
            c = function(e, t) {
                var n, r, o, i, a, u, s, c, l, f, d = g.$,
                    h = g.dom;
                if (!e) return null;
                if (e.collapsed) {
                    if (!C(e))
                        if (!1 === t) {
                            if (c = Ss(-1, y, e), ms(c.getNode(!0))) return p(-1, c.getNode(!0), !1, !1);
                            if (ms(c.getNode())) return p(-1, c.getNode(), !c.isAtEnd(), !1)
                        } else {
                            if (c = Ss(1, y, e), ms(c.getNode())) return p(1, c.getNode(), !c.isAtEnd(), !1);
                            if (ms(c.getNode(!0))) return p(1, c.getNode(!0), !1, !1)
                        }
                    return null
                }
                if (i = e.startContainer, a = e.startOffset, u = e.endOffset, 3 === i.nodeType && 0 === a && ug(i.parentNode) && (i = i.parentNode, a = h.nodeIndex(i), i = i.parentNode), 1 !== i.nodeType) return null;
                if (u === a + 1 && i === e.endContainer && (n = i.childNodes[a]), !ug(n)) return null;
                if (l = f = n.cloneNode(!0), (s = g.fire("ObjectSelected", {
                        target: n,
                        targetClone: l
                    })).isDefaultPrevented()) return null;
                r = wa(yt.fromDom(g.getBody()), "#" + b).fold(function() {
                    return d([])
                }, function(e) {
                    return d([e.dom()])
                }), l = s.targetClone, 0 === r.length && (r = d('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", b)).appendTo(g.getBody()), e = g.dom.createRng(), l === f && Nn.ie ? (r.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(l), e.setStartAfter(r[0].firstChild.firstChild), e.setEndAfter(l)) : (r.empty().append("\xa0").append(l).append("\xa0"), e.setStart(r[0].firstChild, 1), e.setEnd(r[0].lastChild, 0)), r.css({
                    top: h.getPos(n, g.getBody()).y
                }), r[0].focus(), (o = g.selection.getSel()).removeAllRanges(), o.addRange(e);
                var m = yt.fromDom(n);
                return z(ma(yt.fromDom(g.getBody()), "*[data-mce-selected]"), function(e) {
                    ze(m, e) || pe(e, "data-mce-selected")
                }), g.dom.getAttrib(n, "data-mce-selected") || n.setAttribute("data-mce-selected", "1"), v = n, w(), e
            },
            l = function() {
                v && (v.removeAttribute("data-mce-selected"), wa(yt.fromDom(g.getBody()), "#" + b).each(_i), v = null), wa(yt.fromDom(g.getBody()), "#" + b).each(_i), v = null
            },
            w = function() {
                u.hide()
            };
        return Nn.ceFalse && function() {
            g.on("mouseup", function(e) {
                var t = o();
                t.collapsed && Rd(g, e.clientX, e.clientY) && a(tm(g, t, !1))
            }), g.on("click", function(e) {
                var t;
                (t = rm(g, e.target)) && (ug(t) && (e.preventDefault(), g.focus()), ag(t) && g.dom.isChildOf(t, g.selection.getNode()) && l())
            }), g.on("blur NewBlock", function() {
                l()
            }), g.on("ResizeWindow FullscreenStateChanged", function() {
                return u.reposition()
            });

            function i(e, t) {
                var n = g.dom.getParent(e, g.dom.isBlock),
                    r = g.dom.getParent(t, g.dom.isBlock);
                return !(!n || !g.dom.isChildOf(n, r) || !1 !== ug(rm(g, n))) || n && ! function(e, t) {
                    return g.dom.getParent(e, g.dom.isBlock) === g.dom.getParent(t, g.dom.isBlock)
                }(n, r) && function(e) {
                    var t = rc(e);
                    if (!e.firstChild) return !1;
                    var n = Ds.before(e.firstChild),
                        r = t.next(n);
                    return r && !Ph(r) && !Lh(r)
                }(n)
            }
            var n, r;
            r = !1, (n = g).on("touchstart", function() {
                r = !1
            }), n.on("touchmove", function() {
                r = !0
            }), n.on("touchend", function(e) {
                if (!r) {
                    var t = rm(n, e.target);
                    ug(t) && (e.preventDefault(), c(em(n, t)))
                }
            }, !0), g.on("mousedown", function(e) {
                var t, n = e.target;
                if ((n === y || "HTML" === n.nodeName || g.dom.isChildOf(n, y)) && !1 !== Rd(g, e.clientX, e.clientY))
                    if (t = rm(g, n)) ug(t) ? (e.preventDefault(), c(em(g, t))) : (l(), ag(t) && e.shiftKey || Jm(e.clientX, e.clientY, g.selection.getRng()) || (w(), g.selection.placeCaretAt(e.clientX, e.clientY)));
                    else if (!1 === ms(n)) {
                    l(), w();
                    var r = Kh(y, e.clientX, e.clientY);
                    if (r && !i(e.target, r.node)) {
                        e.preventDefault();
                        var o = p(1, r.node, r.before, !1);
                        g.getBody().focus(), a(o)
                    }
                }
            }), g.on("keypress", function(e) {
                Ah.modifierPressed(e) || (e.keyCode, ug(g.selection.getNode()) && e.preventDefault())
            }), g.on("GetSelectionRange", function(e) {
                var t = e.range;
                if (v) {
                    if (!v.parentNode) return void(v = null);
                    (t = t.cloneRange()).selectNode(v), e.range = t
                }
            }), g.on("SetSelectionRange", function(e) {
                e.range = s(e.range);
                var t = c(e.range, e.forward);
                t && (e.range = t)
            });
            g.on("AfterSetSelectionRange", function(e) {
                var t = e.range;
                C(t) || function(e) {
                        return "mcepastebin" === e.id
                    }(t.startContainer.parentNode) || w(),
                    function(e) {
                        return g.dom.hasClass(e, "mce-offscreen-selection")
                    }(t.startContainer.parentNode) || l()
            }), g.on("copy", function(e) {
                var t = e.clipboardData;
                if (!e.isDefaultPrevented() && e.clipboardData && !Nn.ie) {
                    var n = function() {
                        var e = g.dom.get(b);
                        return e ? e.getElementsByTagName("*")[0] : e
                    }();
                    n && (e.preventDefault(), t.clearData(), t.setData("text/html", n.outerHTML), t.setData("text/plain", n.outerText))
                }
            }), ng(g), ig(g)
        }(), {
            showCaret: p,
            showBlockCaretContainer: function(e) {
                e.hasAttribute("data-mce-caret") && (Pa(e), a(o()), g.selection.scrollIntoView(e))
            },
            hideFakeCaret: w,
            destroy: function() {
                u.destroy(), v = null
            }
        }
    }

    function im(e) {
        return Ge.isElement(e) ? e.outerHTML : Ge.isText(e) ? ir.encodeRaw(e.data, !1) : Ge.isComment(e) ? "\x3c!--" + e.data + "--\x3e" : ""
    }

    function am(e, t, n) {
        var r = function(e) {
            var t, n, r;
            for (r = j.document.createElement("div"), t = j.document.createDocumentFragment(), e && (r.innerHTML = e); n = r.firstChild;) t.appendChild(n);
            return t
        }(t);
        if (e.hasChildNodes() && n < e.childNodes.length) {
            var o = e.childNodes[n];
            o.parentNode.insertBefore(r, o)
        } else e.appendChild(r)
    }

    function um(e) {
        return {
            type: "fragmented",
            fragments: e,
            content: "",
            bookmark: null,
            beforeBookmark: null
        }
    }

    function sm(e) {
        return {
            type: "complete",
            fragments: null,
            content: e,
            bookmark: null,
            beforeBookmark: null
        }
    }

    function cm(e) {
        return "fragmented" === e.type ? e.fragments.join("") : e.content
    }

    function lm(e) {
        var t = yt.fromTag("body", mg.get().getOrThunk(function() {
            var e = j.document.implementation.createHTMLDocument("undo");
            return mg.set(k.some(e)), e
        }));
        return Aa(t, cm(e)), z(ma(t, "*[data-mce-bogus]"), Ni),
            function(e) {
                return e.dom().innerHTML
            }(t)
    }

    function fm(e) {
        return 0 === e.get()
    }

    function dm(e, t, n) {
        fm(n) && (e.typing = t)
    }

    function hm(e, t) {
        e.typing && (dm(e, !1, t), e.add())
    }

    function mm(n) {
        var r = Je(k.none()),
            o = Je(0),
            i = Je(0),
            a = {
                data: [],
                typing: !1,
                beforeChange: function() {
                    ! function(e, t, n) {
                        fm(t) && n.set(k.some(Vs.getUndoBookmark(e.selection)))
                    }(n, o, r)
                },
                add: function(e, t) {
                    return function(e, t, n, r, o, i, a) {
                        var u = e.settings,
                            s = gg(e);
                        if (i = i || {}, i = Mn.extend(i, s), !1 === fm(r) || e.removed) return null;
                        var c = t.data[n.get()];
                        if (e.fire("BeforeAddUndo", {
                                level: i,
                                lastLevel: c,
                                originalEvent: a
                            }).isDefaultPrevented()) return null;
                        if (c && vg(c, i)) return null;
                        if (t.data[n.get()] && o.get().each(function(e) {
                                t.data[n.get()].beforeBookmark = e
                            }), u.custom_undo_redo_levels && t.data.length > u.custom_undo_redo_levels) {
                            for (var l = 0; l < t.data.length - 1; l++) t.data[l] = t.data[l + 1];
                            t.data.length--, n.set(t.data.length)
                        }
                        i.bookmark = Vs.getUndoBookmark(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(i), n.set(t.data.length - 1);
                        var f = {
                            level: i,
                            lastLevel: c,
                            originalEvent: a
                        };
                        return e.fire("AddUndo", f), 0 < n.get() && (e.setDirty(!0), e.fire("change", f)), i
                    }(n, a, i, o, r, e, t)
                },
                undo: function() {
                    return function(e, t, n, r) {
                        var o;
                        return t.typing && (t.add(), t.typing = !1, dm(t, !1, n)), 0 < r.get() && (r.set(r.get() - 1), o = t.data[r.get()], pg(e, o, !0), e.setDirty(!0), e.fire("Undo", {
                            level: o
                        })), o
                    }(n, a, o, i)
                },
                redo: function() {
                    return function(e, t, n) {
                        var r;
                        return t.get() < n.length - 1 && (t.set(t.get() + 1), r = n[t.get()], pg(e, r, !1), e.setDirty(!0), e.fire("Redo", {
                            level: r
                        })), r
                    }(n, i, a.data)
                },
                clear: function() {
                    ! function(e, t, n) {
                        t.data = [], n.set(0), t.typing = !1, e.fire("ClearUndos")
                    }(n, a, i)
                },
                reset: function() {
                    ! function(e) {
                        e.clear(), e.add()
                    }(a)
                },
                hasUndo: function() {
                    return function(e, t, n) {
                        return 0 < n.get() || t.typing && t.data[0] && !vg(gg(e), t.data[0])
                    }(n, a, i)
                },
                hasRedo: function() {
                    return function(e, t) {
                        return t.get() < e.data.length - 1 && !e.typing
                    }(a, i)
                },
                transact: function(e) {
                    return function(e, t, n) {
                        return hm(e, t), e.beforeChange(), e.ignore(n), e.add()
                    }(a, o, e)
                },
                ignore: function(e) {
                    ! function(e, t) {
                        try {
                            e.set(e.get() + 1), t()
                        } finally {
                            e.set(e.get() - 1)
                        }
                    }(o, e)
                },
                extra: function(e, t) {
                    ! function(e, t, n, r, o) {
                        if (t.transact(r)) {
                            var i = t.data[n.get()].bookmark,
                                a = t.data[n.get() - 1];
                            pg(e, a, !0), t.transact(o) && (t.data[n.get() - 1].beforeBookmark = i)
                        }
                    }(n, a, i, e, t)
                }
            };
        return function(n, r, o) {
                function i(e) {
                    dm(r, !1, o), r.add({}, e)
                }
                var a = Je(!1);
                n.on("init", function() {
                    r.add()
                }), n.on("BeforeExecCommand", function(e) {
                    var t = e.command;
                    "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && (hm(r, o), r.beforeChange())
                }), n.on("ExecCommand", function(e) {
                    var t = e.command;
                    "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && i(e)
                }), n.on("ObjectResizeStart cut", function() {
                    r.beforeChange()
                }), n.on("SaveContent ObjectResized blur", i), n.on("dragend", i), n.on("keyup", function(e) {
                    var t = e.keyCode;
                    e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (i(), n.nodeChanged()), 46 !== t && 8 !== t || n.nodeChanged(), a.get() && r.typing && !1 === vg(gg(n), r.data[0]) && (!1 === n.isDirty() && (n.setDirty(!0), n.fire("change", {
                        level: r.data[0],
                        lastLevel: null
                    })), n.fire("TypingUndo"), a.set(!1), n.nodeChanged()))
                }), n.on("keydown", function(e) {
                    var t = e.keyCode;
                    if (!e.isDefaultPrevented())
                        if (33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t) r.typing && i(e);
                        else {
                            var n = e.ctrlKey && !e.altKey || e.metaKey;
                            !(t < 16 || 20 < t) || 224 === t || 91 === t || r.typing || n || (r.beforeChange(), dm(r, !0, o), r.add({}, e), a.set(!0))
                        }
                }), n.on("mousedown", function(e) {
                    r.typing && i(e)
                });
                n.on("input", function(e) {
                    e.inputType && (function(e) {
                        return "insertReplacementText" === e.inputType
                    }(e) || function(e) {
                        return "insertText" === e.inputType && null === e.data
                    }(e)) && i(e)
                }), n.on("AddUndo Undo Redo ClearUndos", function(e) {
                    e.isDefaultPrevented() || n.nodeChanged()
                })
            }(n, a, o),
            function(e) {
                e.addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo")
            }(n), a
    }

    function gm(e, t, n) {
        var r = e.formatter.get(n);
        if (r)
            for (var o = 0; o < r.length; o++)
                if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
        return !1
    }

    function pm(t, e, n, r) {
        var o = t.dom.getRoot();
        return e !== o && (e = t.dom.getParent(e, function(e) {
            return !!gm(t, e, n) || (e.parentNode === o || !!xg(t, e, n, r, !0))
        }), xg(t, e, n, r))
    }

    function vm(e, t, n) {
        return !!wg(t, n.inline) || (!!wg(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0))
    }

    function ym(e, t, n, r, o, i) {
        var a, u, s, c = n[r];
        if (n.onmatch) return n.onmatch(t, n, r);
        if (c)
            if ("undefined" == typeof c.length) {
                for (a in c)
                    if (c.hasOwnProperty(a)) {
                        if (u = "attributes" === r ? e.getAttrib(t, a) : jc.getStyle(e, t, a), o && !u && !n.exact) return;
                        if ((!o || n.exact) && !wg(u, jc.normalizeStyleValue(e, jc.replaceVars(c[a], i), a))) return
                    }
            } else
                for (s = 0; s < c.length; s++)
                    if ("attributes" === r ? e.getAttrib(t, c[s]) : jc.getStyle(e, t, c[s])) return n;
        return n
    }

    function bm(e, t) {
        return e.splitText(t)
    }

    function Cm(e) {
        var t = e.startContainer,
            n = e.startOffset,
            r = e.endContainer,
            o = e.endOffset;
        return t === r && Ge.isText(t) ? 0 < n && n < t.nodeValue.length && (t = (r = bm(t, n)).previousSibling, n < o ? (t = r = bm(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (Ge.isText(t) && 0 < n && n < t.nodeValue.length && (t = bm(t, n), n = 0), Ge.isText(r) && 0 < o && o < r.nodeValue.length && (o = (r = bm(r, o).previousSibling).nodeValue.length)), {
            startContainer: t,
            startOffset: n,
            endContainer: r,
            endOffset: o
        }
    }

    function wm(e, t, n) {
        if (0 !== n) {
            var r = e.data.slice(t, t + n),
                o = t + n >= e.data.length,
                i = 0 === t;
            e.replaceData(t, n, function(n, r, o) {
                return b(n, function(e, t) {
                    return function(e) {
                        return -1 !== " \f\n\r\t\x0B".indexOf(e)
                    }(t) || "\xa0" === t ? e.previousCharIsSpace || "" === e.str && r || e.str.length === n.length - 1 && o ? {
                        previousCharIsSpace: !1,
                        str: e.str + "\xa0"
                    } : {
                        previousCharIsSpace: !0,
                        str: e.str + " "
                    } : {
                        previousCharIsSpace: !1,
                        str: e.str + t
                    }
                }, {
                    previousCharIsSpace: !1,
                    str: ""
                }).str
            }(r, i, o))
        }
    }

    function xm(e, t) {
        var n = e.data.slice(t),
            r = n.length - function(e) {
                return e.replace(/^\s+/g, "")
            }(n).length;
        return wm(e, t, r)
    }

    function zm(e, t) {
        var n = yt.fromDom(e);
        return function(e, t, n) {
            return Ca(e, t, n).isSome()
        }(yt.fromDom(t), "pre,code", d(ze, n))
    }

    function Em(e, t) {
        return La(t) && !1 === function(e, t) {
            return Ge.isText(t) && /^[ \t\r\n]*$/.test(t.data) && !1 === zm(e, t)
        }(e, t) || function(e) {
            return Ge.isElement(e) && "A" === e.nodeName && e.hasAttribute("name")
        }(t) || Eg(t)
    }

    function Nm(e, t) {
        return function(e, t) {
            var n = e.container(),
                r = e.offset();
            return !1 === Ds.isTextPosition(e) && n === t.parentNode && r > Ds.before(t).offset()
        }(t, e) ? Ds(t.container(), t.offset() - 1) : t
    }

    function Sm(e) {
        return La(e.previousSibling) ? k.some(function(e) {
            return Ge.isText(e) ? Ds(e, e.data.length) : Ds.after(e)
        }(e.previousSibling)) : e.previousSibling ? Pc.lastPositionIn(e.previousSibling) : k.none()
    }

    function km(e) {
        return La(e.nextSibling) ? k.some(function(e) {
            return Ge.isText(e) ? Ds(e, 0) : Ds.before(e)
        }(e.nextSibling)) : e.nextSibling ? Pc.firstPositionIn(e.nextSibling) : k.none()
    }

    function Tm(e, t) {
        return Sm(t).orThunk(function() {
            return km(t)
        }).orThunk(function() {
            return function(e, t) {
                var n = Ds.before(t.previousSibling ? t.previousSibling : t.parentNode);
                return Pc.prevPosition(e, n).fold(function() {
                    return Pc.nextPosition(e, Ds.after(t))
                }, k.some)
            }(e, t)
        })
    }

    function Am(e, t) {
        return km(t).orThunk(function() {
            return Sm(t)
        }).orThunk(function() {
            return function(e, t) {
                return Pc.nextPosition(e, Ds.after(t)).fold(function() {
                    return Pc.prevPosition(e, Ds.before(t))
                }, k.some)
            }(e, t)
        })
    }

    function Mm(e, t, n) {
        return function(e, t, n) {
            return e ? Am(t, n) : Tm(t, n)
        }(e, t, n).map(d(Nm, n))
    }

    function Rm(t, n, e) {
        e.fold(function() {
            t.focus()
        }, function(e) {
            t.selection.setRng(e.toRange(), n)
        })
    }

    function Dm(e, t) {
        return t && e.schema.getBlockElements().hasOwnProperty(ie(t))
    }

    function _m(e) {
        if (kg(e)) {
            var t = yt.fromHtml('<br data-mce-bogus="1">');
            return Ei(e), Di(e, t), k.some(Ds.before(t.dom()))
        }
        return k.none()
    }

    function Bm(e, t, a) {
        var n = ke(e).filter(zt),
            r = Te(e).filter(zt);
        return _i(e),
            function(e, t, n, r) {
                return e.isSome() && t.isSome() && n.isSome() ? k.some(r(e.getOrDie(), t.getOrDie(), n.getOrDie())) : k.none()
            }(n, r, t, function(e, t, n) {
                var r = e.dom(),
                    o = t.dom(),
                    i = r.data.length;
                return function(e, t, n) {
                    var r = ne(e.data).length;
                    e.appendData(t.data), _i(yt.fromDom(t)), n && xm(e, r)
                }(r, o, a), n.container() === o ? Ds(r, i) : n
            }).orThunk(function() {
                return a && (n.each(function(e) {
                    return function(e, t) {
                        var n = e.data.slice(0, t),
                            r = n.length - ne(n).length;
                        return wm(e, t - r, r)
                    }(e.dom(), e.dom().length)
                }), r.each(function(e) {
                    return xm(e.dom(), 0)
                })), t
            })
    }

    function Om(e) {
        return 0 < function(e) {
            for (var t = []; e;) {
                if (3 === e.nodeType && e.nodeValue !== Ag || 1 < e.childNodes.length) return [];
                1 === e.nodeType && t.push(e), e = e.firstChild
            }
            return t
        }(e).length
    }

    function Hm(e) {
        if (e) {
            var t = new yi(e, e);
            for (e = t.current(); e; e = t.next())
                if (3 === e.nodeType) return e
        }
        return null
    }

    function Pm(e) {
        var t = yt.fromTag("span");
        return me(t, {
            id: Mg,
            "data-mce-bogus": "1",
            "data-mce-type": "format-caret"
        }), e && Di(t, yt.fromText(Ag)), t
    }

    function Lm(e, t, n) {
        void 0 === n && (n = !0);
        var r = e.dom,
            o = e.selection;
        if (Om(t)) Tg(e, !1, yt.fromDom(t), n);
        else {
            var i = o.getRng(),
                a = r.getParent(t, r.isBlock),
                u = function(e) {
                    var t = Hm(e);
                    return t && t.nodeValue.charAt(0) === Ag && t.deleteData(0, 1), t
                }(t);
            i.startContainer === u && 0 < i.startOffset && i.setStart(u, i.startOffset - 1), i.endContainer === u && 0 < i.endOffset && i.setEnd(u, i.endOffset - 1), r.remove(t, !0), a && r.isEmpty(a) && bg(yt.fromDom(a)), o.setRng(i)
        }
    }

    function Vm(e, t, n) {
        void 0 === n && (n = !0);
        var r = e.dom,
            o = e.selection;
        if (t) Lm(e, t, n);
        else if (!(t = os(e.getBody(), o.getStart())))
            for (; t = r.get(Mg);) Lm(e, t, !1)
    }

    function Im(e, t, n) {
        var r = e.dom,
            o = r.getParent(n, d(jc.isTextBlock, e));
        o && r.isEmpty(o) ? n.parentNode.replaceChild(t, n) : (yg(yt.fromDom(n)), r.isEmpty(n) ? n.parentNode.replaceChild(t, n) : r.insertAfter(t, n))
    }

    function Fm(e, t) {
        return e.appendChild(t), t
    }

    function Um(e, t) {
        var n = m(e, function(e, t) {
            return Fm(e, t.cloneNode(!1))
        }, t);
        return Fm(n, n.ownerDocument.createTextNode(Ag))
    }

    function jm(t) {
        t.on("mouseup keydown", function(e) {
            ! function(e, t) {
                var n = e.selection,
                    r = e.getBody();
                Vm(e, null, !1), 8 !== t && 46 !== t || !n.isCollapsed() || n.getStart().innerHTML !== Ag || Vm(e, os(r, n.getStart())), 37 !== t && 39 !== t || Vm(e, os(r, n.getStart()))
            }(t, e.keyCode)
        })
    }

    function qm(e, t) {
        return e.schema.getTextInlineElements().hasOwnProperty(ie(t)) && !rs(t.dom()) && !Ge.isBogus(t.dom())
    }
    var $m, Wm, Km = d(Vh, kh.Up, ja, qa),
        Xm = d(Vh, kh.Down, qa, ja),
        Ym = Ge.isContentEditableFalse,
        Gm = ys,
        Jm = function(t, n, e) {
            if (e.collapsed) return !1;
            if (Nn.browser.isIE() && e.startOffset === e.endOffset - 1 && e.startContainer === e.endContainer) {
                var r = e.startContainer.childNodes[e.startOffset];
                if (Ge.isElement(r)) return C(r.getClientRects(), function(e) {
                    return $a(e, t, n)
                })
            }
            return C(e.getClientRects(), function(e) {
                return $a(e, t, n)
            })
        },
        Qm = function(e, t) {
            return function(e, t, n) {
                return {
                    pageX: n.left - e.left + t.left,
                    pageY: n.top - e.top + t.top
                }
            }(function(e) {
                return e.inline ? Xh(e.getBody()) : {
                    left: 0,
                    top: 0
                }
            }(e), function(e) {
                var t = e.getBody();
                return e.inline ? {
                    left: t.scrollLeft,
                    top: t.scrollTop
                } : {
                    left: 0,
                    top: 0
                }
            }(e), function(e, t) {
                if (t.target.ownerDocument === e.getDoc()) return {
                    left: t.pageX,
                    top: t.pageY
                };
                var n = Xh(e.getContentAreaContainer()),
                    r = function(e) {
                        var t = e.getBody(),
                            n = e.getDoc().documentElement,
                            r = {
                                left: t.scrollLeft,
                                top: t.scrollTop
                            },
                            o = {
                                left: t.scrollLeft || n.scrollLeft,
                                top: t.scrollTop || n.scrollTop
                            };
                        return e.inline ? r : o
                    }(e);
                return {
                    left: t.pageX - n.left + r.left,
                    top: t.pageY - n.top + r.top
                }
            }(e, t))
        },
        Zm = Ge.isContentEditableFalse,
        eg = Ge.isContentEditableTrue,
        tg = function(e) {
            e.dragging = !1, e.element = null, Yh(e.ghost)
        },
        ng = function(e) {
            Qh(e),
                function(n) {
                    n.on("drop", function(e) {
                        var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
                        (Zm(t) || Zm(n.dom.getContentEditableParent(t))) && e.preventDefault()
                    })
                }(e)
        },
        rg = Ge.isContentEditableTrue,
        og = Ge.isContentEditableFalse,
        ig = function(t) {
            var e = aa(function() {
                if (!t.removed && t.getBody().contains(j.document.activeElement) && t.selection.getRng().collapsed) {
                    var e = nm(t, t.selection.getRng(), !1);
                    t.selection.setRng(e)
                }
            }, 0);
            t.on("focus", function() {
                e.throttle()
            }), t.on("blur", function() {
                e.cancel()
            })
        },
        ag = Ge.isContentEditableTrue,
        ug = Ge.isContentEditableFalse,
        sg = 0,
        cg = 2,
        lg = 1,
        fg = function(m, g) {
            function p(e, t, n, r) {
                for (var o = e; o - t < r && o < n && m[o] === g[o - t];) ++o;
                return function(e, t, n) {
                    return {
                        start: e,
                        end: t,
                        diag: n
                    }
                }(e, o, t)
            }
            var e = m.length + g.length + 2,
                v = new Array(e),
                y = new Array(e),
                c = function(e, t, n, r, o) {
                    var i = l(e, t, n, r);
                    if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n)
                        for (var a = e, u = n; a < t || u < r;) a < t && u < r && m[a] === g[u] ? (o.push([0, m[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, m[a]]), ++a) : (o.push([1, g[u]]), ++u);
                    else {
                        c(e, i.start, n, i.start - i.diag, o);
                        for (var s = i.start; s < i.end; ++s) o.push([0, m[s]]);
                        c(i.end, t, i.end - i.diag, r, o)
                    }
                },
                l = function(e, t, n, r) {
                    var o = t - e,
                        i = r - n;
                    if (0 == o || 0 == i) return null;
                    var a, u, s, c, l, f = o - i,
                        d = i + o,
                        h = (d % 2 == 0 ? d : 1 + d) / 2;
                    for (v[1 + h] = e, y[1 + h] = t + 1, a = 0; a <= h; ++a) {
                        for (u = -a; u <= a; u += 2) {
                            for (s = u + h, u === -a || u !== a && v[s - 1] < v[s + 1] ? v[s] = v[s + 1] : v[s] = v[s - 1] + 1, l = (c = v[s]) - e + n - u; c < t && l < r && m[c] === g[l];) v[s] = ++c, ++l;
                            if (f % 2 != 0 && f - a <= u && u <= f + a && y[s - f] <= v[s]) return p(y[s - f], u + e - n, t, r)
                        }
                        for (u = f - a; u <= f + a; u += 2) {
                            for (s = u + h - f, u === f - a || u !== f + a && y[s + 1] <= y[s - 1] ? y[s] = y[s + 1] - 1 : y[s] = y[s - 1], l = (c = y[s] - 1) - e + n - u; e <= c && n <= l && m[c] === g[l];) y[s] = c--, l--;
                            if (f % 2 == 0 && -a <= u && u <= a && y[s] <= v[s + f]) return p(y[s], u + e - n, t, r)
                        }
                    }
                },
                t = [];
            return c(0, m.length, 0, g.length, t), t
        },
        dg = function(e) {
            return y(X(P(e.childNodes), im), function(e) {
                return 0 < e.length
            })
        },
        hg = function(e, t) {
            var n = X(P(t.childNodes), im);
            return function(e, t) {
                var n = 0;
                z(e, function(e) {
                    e[0] === sg ? n++ : e[0] === lg ? (am(t, e[1], n), n++) : e[0] === cg && function(e, t) {
                        if (e.hasChildNodes() && t < e.childNodes.length) {
                            var n = e.childNodes[t];
                            n.parentNode.removeChild(n)
                        }
                    }(t, n)
                })
            }(fg(n, e), t), t
        },
        mg = Je(k.none()),
        gg = function(n) {
            var e, t, r;
            return e = dg(n.getBody()),
                function(e) {
                    return -1 !== e.indexOf("</iframe>")
                }(t = (r = v(e, function(e) {
                    var t = af.trimInternal(n.serializer, e);
                    return 0 < t.length ? [t] : []
                })).join("")) ? um(r) : sm(t)
        },
        pg = function(e, t, n) {
            "fragmented" === t.type ? hg(t.fragments, e.getBody()) : e.setContent(t.content, {
                format: "raw"
            }), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark)
        },
        vg = function(e, t) {
            return !(!e || !t) && (!! function(e, t) {
                return cm(e) === cm(t)
            }(e, t) || function(e, t) {
                return lm(e) === lm(t)
            }(e, t))
        },
        yg = function(e) {
            var t = ma(e, "br"),
                n = y(function(e) {
                    for (var t = [], n = e.dom(); n;) t.push(yt.fromDom(n)), n = n.lastChild;
                    return t
                }(e).slice(-1), _n);
            t.length === n.length && z(n, _i)
        },
        bg = function(e) {
            Ei(e), Di(e, yt.fromHtml('<br data-mce-bogus="1">'))
        },
        Cg = function(n) {
            Be(n).each(function(t) {
                ke(t).each(function(e) {
                    Vn(n) && _n(t) && Vn(e) && _i(t)
                })
            })
        },
        wg = jc.isEq,
        xg = function(e, t, n, r, o) {
            var i, a, u, s, c = e.formatter.get(n),
                l = e.dom;
            if (c && t)
                for (a = 0; a < c.length; a++)
                    if (i = c[a], vm(e.dom, t, i) && ym(l, t, i, "attributes", o, r) && ym(l, t, i, "styles", o, r)) {
                        if (s = i.classes)
                            for (u = 0; u < s.length; u++)
                                if (!e.dom.hasClass(t, s[u])) return;
                        return i
                    }
        },
        zg = {
            matchNode: xg,
            matchName: vm,
            match: function(e, t, n, r) {
                var o;
                return r ? pm(e, r, t, n) : (r = e.selection.getNode(), !!pm(e, r, t, n) || !((o = e.selection.getStart()) === r || !pm(e, o, t, n)))
            },
            matchAll: function(r, o, i) {
                var e, a = [],
                    u = {};
                return e = r.selection.getStart(), r.dom.getParent(e, function(e) {
                    var t, n;
                    for (t = 0; t < o.length; t++) n = o[t], !u[n] && xg(r, e, n, i) && (u[n] = !0, a.push(n))
                }, r.dom.getRoot()), a
            },
            canApply: function(e, t) {
                var n, r, o, i, a, u = e.formatter.get(t),
                    s = e.dom;
                if (u)
                    for (n = e.selection.getStart(), r = jc.getParents(s, n), i = u.length - 1; 0 <= i; i--) {
                        if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                        for (o = r.length - 1; 0 <= o; o--)
                            if (s.is(r[o], a)) return !0
                    }
                return !1
            },
            matchesUnInheritedFormatSelector: gm
        },
        Eg = Ge.hasAttribute("data-mce-bookmark"),
        Ng = Ge.hasAttribute("data-mce-bogus"),
        Sg = Ge.hasAttributeValue("data-mce-bogus", "all"),
        kg = function(e) {
            return function(e) {
                var t, n = 0;
                if (Em(e, e)) return !1;
                if (!(t = e.firstChild)) return !0;
                var r = new yi(t, e);
                do {
                    if (Sg(t)) t = r.next(!0);
                    else if (Ng(t)) t = r.next();
                    else if (Ge.isBr(t)) n++, t = r.next();
                    else {
                        if (Em(e, t)) return !1;
                        t = r.next()
                    }
                } while (t);
                return n <= 1
            }(e.dom())
        },
        Tg = function(t, n, e, r) {
            void 0 === r && (r = !0);
            var o = Mm(n, t.getBody(), e.dom()),
                i = ya(e, d(Dm, t), function(t) {
                    return function(e) {
                        return e.dom() === t
                    }
                }(t.getBody())),
                a = Bm(e, o, function(e, t) {
                    return kt(e.schema.getTextInlineElements(), ie(t))
                }(t, e));
            t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : i.bind(_m).fold(function() {
                r && Rm(t, n, a)
            }, function(e) {
                r && Rm(t, n, k.some(e))
            })
        },
        Ag = cu,
        Mg = "_mce_caret",
        Rg = {},
        Dg = kn.filter,
        _g = kn.each;
    Wm = function(e) {
        var t, n, r = e.selection.getRng();
        t = Ge.matchNodeNames(["pre"]), r.collapsed || (n = e.selection.getSelectedBlocks(), _g(Dg(Dg(n, t), function(e) {
            return t(e.previousSibling) && -1 !== kn.indexOf(n, e.previousSibling)
        }), function(e) {
            ! function(e, t) {
                vi(t).remove(), vi(e).append("<br><br>").append(t.childNodes)
            }(e.previousSibling, e)
        }))
    }, Rg[$m = "pre"] || (Rg[$m] = []), Rg[$m].push(Wm);

    function Bg(o) {
        this.compare = function(e, t) {
            if (e.nodeName !== t.nodeName) return !1;

            function n(n) {
                var r = {};
                return Gg(o.getAttribs(n), function(e) {
                    var t = e.nodeName.toLowerCase();
                    0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t))
                }), r
            }

            function r(e, t) {
                var n, r;
                for (r in e)
                    if (e.hasOwnProperty(r)) {
                        if (void 0 === (n = t[r])) return !1;
                        if (e[r] !== n) return !1;
                        delete t[r]
                    }
                for (r in t)
                    if (t.hasOwnProperty(r)) return !1;
                return !0
            }
            return !!r(n(e), n(t)) && (!!r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) && (!Fc(e) && !Fc(t)))
        }
    }

    function Og(e, t, n) {
        return e.isChildOf(t, n) && t !== n && !e.isBlock(n)
    }

    function Hg(e, t, n) {
        var r, o, i;
        return r = t[n ? "startContainer" : "endContainer"], o = t[n ? "startOffset" : "endOffset"], Ge.isElement(r) && (i = r.childNodes.length - 1, !n && o && o--, r = r.childNodes[i < o ? i : o]), Ge.isText(r) && n && o >= r.nodeValue.length && (r = new yi(r, e.getBody()).next() || r), Ge.isText(r) && !n && 0 === o && (r = new yi(r, e.getBody()).prev() || r), r
    }

    function Pg(e, t, n, r) {
        var o = e.create(n, r);
        return t.parentNode.insertBefore(o, t), o.appendChild(t), o
    }

    function Lg(e, t, n, r, o) {
        var i = yt.fromDom(t),
            a = yt.fromDom(e.create(r, o)),
            u = n ? Me(i) : Ae(i);
        return zi(a, u), n ? (Ci(i, a), xi(a, i)) : (wi(i, a), Di(a, i)), a.dom()
    }

    function Vg(e, t, n, r) {
        return !(t = jc.getNonWhiteSpaceSibling(t, n, r)) || "BR" === t.nodeName || e.isBlock(t)
    }

    function Ig(e, r, o, i, a) {
        var t, n, u, s = e.dom;
        if (! function(e, t, n) {
                return !!Zg(t, n.inline) || (!!Zg(t, n.block) || (n.selector ? Ge.isElement(t) && e.is(t, n.selector) : void 0))
            }(s, i, r) && ! function(e, t) {
                return t.links && "A" === e.tagName
            }(i, r)) return !1;
        if ("all" !== r.remove)
            for (Qg(r.styles, function(e, t) {
                    e = jc.normalizeStyleValue(s, jc.replaceVars(e, o), t), "number" == typeof t && (t = e, a = 0), !r.remove_similar && a && !Zg(jc.getStyle(s, a, t), e) || s.setStyle(i, t, ""), u = 1
                }), u && "" === s.getAttrib(i, "style") && (i.removeAttribute("style"), i.removeAttribute("data-mce-style")), Qg(r.attributes, function(e, t) {
                    var n;
                    if (e = jc.replaceVars(e, o), "number" == typeof t && (t = e, a = 0), r.remove_similar || !a || Zg(s.getAttrib(a, t), e)) {
                        if ("class" === t && (e = s.getAttrib(i, t)) && (n = "", Qg(e.split(/\s+/), function(e) {
                                /mce\-\w+/.test(e) && (n += (n ? " " : "") + e)
                            }), n)) return void s.setAttrib(i, t, n);
                        "class" === t && i.removeAttribute("className"), Jg.test(t) && i.removeAttribute("data-mce-" + t), i.removeAttribute(t)
                    }
                }), Qg(r.classes, function(e) {
                    e = jc.replaceVars(e, o), a && !s.hasClass(a, e) || s.removeClass(i, e)
                }), n = s.getAttribs(i), t = 0; t < n.length; t++) {
                var c = n[t].nodeName;
                if (0 !== c.indexOf("_") && 0 !== c.indexOf("data-")) return !1
            }
        return "none" !== r.remove ? (function(t, e, n) {
            var r, o = e.parentNode,
                i = t.dom,
                a = mf(t);
            n.block && (a ? o === i.getRoot() && (n.list_block && Zg(e, n.list_block) || Qg(Mn.grep(e.childNodes), function(e) {
                jc.isValid(t, a, e.nodeName.toLowerCase()) ? r ? r.appendChild(e) : (r = Pg(i, e, a), i.setAttribs(r, t.settings.forced_root_block_attrs)) : r = 0
            })) : i.isBlock(e) && !i.isBlock(o) && (Vg(i, e, !1) || Vg(i, e.firstChild, !0, 1) || e.insertBefore(i.create("br"), e.firstChild), Vg(i, e, !0) || Vg(i, e.lastChild, !1, 1) || e.appendChild(i.create("br")))), n.selector && n.inline && !Zg(n.inline, e) || i.remove(e, 1)
        }(e, i, r), !0) : void 0
    }

    function Fg(e) {
        return e && 1 === e.nodeType && !Fc(e) && !rs(e) && !Ge.isBogus(e)
    }

    function Ug(e, t) {
        var n;
        for (n = e; n; n = n[t]) {
            if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
            if (1 === n.nodeType && !Fc(n)) return n
        }
        return e
    }

    function jg(e, t, n) {
        var r, o, i = new Bg(e);
        if (t && n && (t = Ug(t, "previousSibling"), n = Ug(n, "nextSibling"), i.compare(t, n))) {
            for (r = t.nextSibling; r && r !== n;) r = (o = r).nextSibling, t.appendChild(o);
            return e.remove(n), Mn.each(Mn.grep(n.childNodes), function(e) {
                t.appendChild(e)
            }), t
        }
        return n
    }

    function qg(n, e) {
        return d(function(e, t) {
            return !(!t || !jc.getStyle(n, t, e))
        }, e)
    }

    function $g(r, e, t) {
        return d(function(e, t, n) {
            r.setStyle(n, e, t), "" === n.getAttribute("style") && n.removeAttribute("style"), op(r, n)
        }, e, t)
    }

    function Wg(e, t) {
        var n;
        1 === t.nodeType && t.parentNode && 1 === t.parentNode.nodeType && (n = jc.getTextDecoration(e, t.parentNode), e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null))
    }

    function Kg(t) {
        var n = Ds.fromRangeStart(t),
            r = Ds.fromRangeEnd(t),
            o = t.commonAncestorContainer;
        return Pc.fromPosition(!1, o, r).map(function(e) {
            return !Cs(n, r, o) && Cs(n, e, o) ? function(e, t, n, r) {
                var o = j.document.createRange();
                return o.setStart(e, t), o.setEnd(n, r), o
            }(n.container(), n.offset(), e.container(), e.offset()) : t
        }).getOr(t)
    }

    function Xg(e, t, n, r, o) {
        return null === t.get() && function(t, n) {
                var r = Je({});
                t.set({}), n.on("NodeChange", function(e) {
                    gp(n, e.element, r, t.get())
                })
            }(t, e),
            function(e, t, n, r) {
                var o = e.get();
                z(t.split(","), function(e) {
                    o[e] || (o[e] = {
                        similar: r,
                        callbacks: []
                    }), o[e].callbacks.push(n)
                }), e.set(o)
            }(t, n, r, o), {
                unbind: function() {
                    return function(e, t, n) {
                        var r = e.get();
                        z(t.split(","), function(e) {
                            r[e].callbacks = y(r[e].callbacks, function(e) {
                                return e !== n
                            }), 0 === r[e].callbacks.length && delete r[e]
                        }), e.set(r)
                    }(t, n, r)
                }
            }
    }
    var Yg = function(e, t) {
            _g(Rg[e], function(e) {
                e(t)
            })
        },
        Gg = Mn.each,
        Jg = /^(src|href|style)$/,
        Qg = Mn.each,
        Zg = jc.isEq,
        ep = Ig,
        tp = function(a, n, u, e, r) {
            function i(e) {
                var t = function(n, e, r, o, i) {
                    var a;
                    return Qg(jc.getParents(n.dom, e.parentNode).reverse(), function(e) {
                        var t;
                        a || "_start" === e.id || "_end" === e.id || (t = zg.matchNode(n, e, r, o, i)) && !1 !== t.split && (a = e)
                    }), a
                }(a, e, n, u, r);
                return function(e, t, n, r, o, i, a, u) {
                    var s, c, l, f, d, h, m = e.dom;
                    if (n) {
                        for (h = n.parentNode, s = r.parentNode; s && s !== h; s = s.parentNode) {
                            for (c = m.clone(s, !1), d = 0; d < t.length; d++)
                                if (Ig(e, t[d], u, c, c)) {
                                    c = 0;
                                    break
                                }
                            c && (l && c.appendChild(l), f = f || c, l = c)
                        }!i || a.mixed && m.isBlock(n) || (r = m.split(n, r)), l && (o.parentNode.insertBefore(l, o), f.appendChild(o))
                    }
                    return r
                }(a, l, t, e, e, !0, f, u)
            }

            function s(e) {
                var t = h.get(e ? "_start" : "_end"),
                    n = t[e ? "firstChild" : "lastChild"];
                return function(e) {
                    return Fc(e) && Ge.isElement(e) && ("_start" === e.id || "_end" === e.id)
                }(n) && (n = n[e ? "firstChild" : "lastChild"]), Ge.isText(n) && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling), h.remove(t, !0), n
            }

            function t(e) {
                var t, n, r = e.commonAncestorContainer;
                if (e = Xc(a, e, l, !0), f.split) {
                    if (e = Cm(e), (t = Hg(a, e, !0)) !== (n = Hg(a, e))) {
                        if (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" === t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), r && /^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) && function(e) {
                                return /^(TH|TD)$/.test(e.nodeName)
                            }(n) && n.firstChild && (n = n.firstChild || n), Og(h, t, n)) {
                            var o = k.from(t.firstChild).getOr(t);
                            return i(Lg(h, o, !0, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            })), void s(!0)
                        }
                        if (Og(h, n, t)) {
                            o = k.from(n.lastChild).getOr(n);
                            return i(Lg(h, o, !1, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                            })), void s(!1)
                        }
                        t = Pg(h, t, "span", {
                            id: "_start",
                            "data-mce-type": "bookmark"
                        }), n = Pg(h, n, "span", {
                            id: "_end",
                            "data-mce-type": "bookmark"
                        }), i(t), i(n), t = s(!0), n = s()
                    } else t = n = i(t);
                    e.startContainer = t.parentNode ? t.parentNode : t, e.startOffset = h.nodeIndex(t), e.endContainer = n.parentNode ? n.parentNode : n, e.endOffset = h.nodeIndex(n) + 1
                }
                Gc(h, e, function(e) {
                    Qg(e, function(e) {
                        g(e), Ge.isElement(e) && "underline" === a.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === jc.getTextDecoration(h, e.parentNode) && Ig(a, {
                            deep: !1,
                            exact: !0,
                            inline: "span",
                            styles: {
                                textDecoration: "underline"
                            }
                        }, null, e)
                    })
                })
            }
            var o, c, l = a.formatter.get(n),
                f = l[0],
                d = !0,
                h = a.dom,
                m = a.selection,
                g = function(e) {
                    var t, n, r, o, i;
                    if (Ge.isElement(e) && h.getContentEditable(e) && (o = d, d = "true" === h.getContentEditable(e), i = !0), t = Mn.grep(e.childNodes), d && !i)
                        for (n = 0, r = l.length; n < r && !Ig(a, l[n], u, e, e); n++);
                    if (f.deep && t.length) {
                        for (n = 0, r = t.length; n < r; n++) g(t[n]);
                        i && (d = o)
                    }
                };
            if (e) e.nodeType ? ((c = h.createRng()).setStartBefore(e), c.setEndAfter(e), t(c)) : t(e);
            else if ("false" !== h.getContentEditable(m.getNode())) m.isCollapsed() && f.inline && !h.select("td[data-mce-selected],th[data-mce-selected]").length ? function(e, t, n, r) {
                var o, i, a, u, s, c, l, f = e.dom,
                    d = e.selection,
                    h = [],
                    m = d.getRng();
                for (o = m.startContainer, i = m.startOffset, 3 === (s = o).nodeType && (i !== o.nodeValue.length && (u = !0), s = s.parentNode); s;) {
                    if (zg.matchNode(e, s, t, n, r)) {
                        c = s;
                        break
                    }
                    s.nextSibling && (u = !0), h.push(s), s = s.parentNode
                }
                if (c)
                    if (u) {
                        a = d.getBookmark(), m.collapse(!0);
                        var g = Xc(e, m, e.formatter.get(t), !0);
                        g = Cm(g), e.formatter.remove(t, n, g), d.moveToBookmark(a)
                    } else {
                        l = os(e.getBody(), c);
                        var p = Pm(!1).dom(),
                            v = Um(h, p);
                        Im(e, p, l || c), Lm(e, l, !1), d.setCursorLocation(v, 1), f.isEmpty(c) && f.remove(c)
                    }
            }(a, n, u, r) : (o = Vs.getPersistentBookmark(a.selection, !0), t(m.getRng()), m.moveToBookmark(o), f.inline && zg.match(a, n, u, m.getStart()) && jc.moveStart(h, m, m.getRng()), a.nodeChanged());
            else {
                e = m.getNode();
                for (var p = 0, v = l.length; p < v && (!l[p].ceFalseOverride || !Ig(a, l[p], u, e, e)); p++);
            }
        },
        np = Mn.each,
        rp = function(e, t, n) {
            np(e.childNodes, function(e) {
                Fg(e) && (t(e) && n(e), e.hasChildNodes() && rp(e, t, n))
            })
        },
        op = function(e, t) {
            "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0)
        },
        ip = function(n, e, r, o) {
            np(e, function(t) {
                np(n.dom.select(t.inline, o), function(e) {
                        Fg(e) && ep(n, t, r, e, t.exact ? e : null)
                    }),
                    function(r, e, t) {
                        if (e.clear_child_styles) {
                            var n = e.links ? "*:not(a)" : "*";
                            np(r.select(n, t), function(n) {
                                Fg(n) && np(e.styles, function(e, t) {
                                    r.setStyle(n, t, "")
                                })
                            })
                        }
                    }(n.dom, t, o)
            })
        },
        ap = function(e, t, n, r) {
            (t.styles.color || t.styles.textDecoration) && (Mn.walk(r, d(Wg, e), "childNodes"), Wg(e, r))
        },
        up = function(e, t, n, r) {
            t.styles && t.styles.backgroundColor && rp(r, qg(e, "fontSize"), $g(e, "backgroundColor", jc.replaceVars(t.styles.backgroundColor, n)))
        },
        sp = function(e, t, n, r) {
            "sub" !== t.inline && "sup" !== t.inline || (rp(r, qg(e, "fontSize"), $g(e, "fontSize", "")), e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0))
        },
        cp = function(e, t, n, r) {
            r && !1 !== t.merge_siblings && (r = jg(e, jc.getNonWhiteSpaceSibling(r), r), r = jg(e, r, jc.getNonWhiteSpaceSibling(r, !0)))
        },
        lp = function(t, n, r, o, i) {
            zg.matchNode(t, i.parentNode, r, o) && ep(t, n, o, i) || n.merge_with_parents && t.dom.getParent(i.parentNode, function(e) {
                if (zg.matchNode(t, e, r, o)) return ep(t, n, o, i), !0
            })
        },
        fp = function(e) {
            return e.collapsed ? e : Kg(e)
        },
        dp = Mn.each,
        hp = function(m, g, p, r) {
            function v(n, e) {
                if (e = e || C, n) {
                    if (e.onformat && e.onformat(n, e, p, r), dp(e.styles, function(e, t) {
                            i.setStyle(n, t, jc.replaceVars(e, p))
                        }), e.styles) {
                        var t = i.getAttrib(n, "style");
                        t && n.setAttribute("data-mce-style", t)
                    }
                    dp(e.attributes, function(e, t) {
                        i.setAttrib(n, t, jc.replaceVars(e, p))
                    }), dp(e.classes, function(e) {
                        e = jc.replaceVars(e, p), i.hasClass(n, e) || i.addClass(n, e)
                    })
                }
            }

            function y(e, t) {
                var n = !1;
                return !!C.selector && (dp(e, function(e) {
                    if (!("collapsed" in e && e.collapsed !== o)) return i.is(t, e.selector) && !rs(t) ? (v(t, e), !(n = !0)) : void 0
                }), n)
            }

            function e(s, e, t, c) {
                var l, f, d = [],
                    h = !0;
                l = C.inline || C.block, f = s.create(l), v(f), Gc(s, e, function(e) {
                    var a, u = function(e) {
                        var t, n, r, o;
                        if (o = h, t = e.nodeName.toLowerCase(), n = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && s.getContentEditable(e) && (o = h, h = "true" === s.getContentEditable(e), r = !0), jc.isEq(t, "br")) return a = 0, void(C.block && s.remove(e));
                        if (C.wrapper && zg.matchNode(m, e, g, p)) a = 0;
                        else {
                            if (h && !r && C.block && !C.wrapper && jc.isTextBlock(m, t) && jc.isValid(m, n, l)) return e = s.rename(e, l), v(e), d.push(e), void(a = 0);
                            if (C.selector) {
                                var i = y(b, e);
                                if (!C.inline || i) return void(a = 0)
                            }!h || r || !jc.isValid(m, l, t) || !jc.isValid(m, n, l) || !c && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || rs(e) || C.inline && s.isBlock(e) ? (a = 0, dp(Mn.grep(e.childNodes), u), r && (h = o), a = 0) : (a || (a = s.clone(f, !1), e.parentNode.insertBefore(a, e), d.push(a)), a.appendChild(e))
                        }
                    };
                    dp(e, u)
                }), !0 === C.links && dp(d, function(e) {
                    var t = function(e) {
                        "A" === e.nodeName && v(e, C), dp(Mn.grep(e.childNodes), t)
                    };
                    t(e)
                }), dp(d, function(e) {
                    function t(e) {
                        var t = !1;
                        return dp(e.childNodes, function(e) {
                            if (function(e) {
                                    return e && 1 === e.nodeType && !Fc(e) && !rs(e) && !Ge.isBogus(e)
                                }(e)) return t = e, !1
                        }), t
                    }
                    var n, r, o, i, a;
                    (r = 0, dp(e.childNodes, function(e) {
                        jc.isWhiteSpaceNode(e) || Fc(e) || r++
                    }), n = r, !(1 < d.length) && s.isBlock(e) || 0 !== n) ? (C.inline || C.wrapper) && (C.exact || 1 !== n || ((i = t(o = e)) && !Fc(i) && zg.matchName(s, i, C) && (a = s.clone(i, !1), v(a), s.replace(a, o, !0), s.remove(i, 1)), e = a || o), ip(m, b, p, e), lp(m, C, g, p, e), up(s, C, p, e), sp(s, C, p, e), cp(s, C, p, e)) : s.remove(e, 1)
                })
            }
            var t, n, b = m.formatter.get(g),
                C = b[0],
                o = !r && m.selection.isCollapsed(),
                i = m.dom,
                a = m.selection;
            if ("false" !== i.getContentEditable(a.getNode())) {
                if (C) {
                    if (r) r.nodeType ? y(b, r) || ((n = i.createRng()).setStartBefore(r), n.setEndAfter(r), e(i, Xc(m, n, b), 0, !0)) : e(i, r, 0, !0);
                    else if (o && C.inline && !i.select("td[data-mce-selected],th[data-mce-selected]").length) ! function(e, t, n) {
                        var r, o, i, a, u, s, c = e.selection;
                        a = (r = c.getRng()).startOffset, s = r.startContainer.nodeValue, (o = os(e.getBody(), c.getStart())) && (i = Hm(o));
                        var l = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                        s && 0 < a && a < s.length && l.test(s.charAt(a)) && l.test(s.charAt(a - 1)) ? (u = c.getBookmark(), r.collapse(!0), r = Xc(e, r, e.formatter.get(t)), r = Cm(r), e.formatter.apply(t, n, r), c.moveToBookmark(u)) : (o && i.nodeValue === Ag || (i = (o = function(e, t) {
                            return e.importNode(t, !0)
                        }(e.getDoc(), Pm(!0).dom())).firstChild, r.insertNode(o), a = 1), e.formatter.apply(t, n, o), c.setCursorLocation(i, a))
                    }(m, g, p);
                    else {
                        var u = m.selection.getNode();
                        m.settings.forced_root_block || !b[0].defaultBlock || i.getParent(u, i.isBlock) || hp(m, b[0].defaultBlock), m.selection.setRng(fp(m.selection.getRng())), t = Vs.getPersistentBookmark(m.selection, !0), e(i, Xc(m, a.getRng(), b)), C.styles && ap(i, C, p, u), a.moveToBookmark(t), jc.moveStart(i, a, a.getRng()), m.nodeChanged()
                    }
                    Yg(g, m)
                }
            } else {
                r = a.getNode();
                for (var s = 0, c = b.length; s < c; s++)
                    if (b[s].ceFalseOverride && i.is(r, b[s].selector)) return void v(r, b[s])
            }
        },
        mp = {
            applyFormat: hp
        },
        gp = function(r, e, t, n) {
            var o = Et(t.get()),
                i = {},
                a = {},
                u = y(jc.getParents(r.dom, e), function(e) {
                    return 1 === e.nodeType && !e.getAttribute("data-mce-bogus")
                });
            ue(n, function(e, n) {
                Mn.each(u, function(t) {
                    return r.formatter.matchNode(t, n, {}, e.similar) ? (-1 === o.indexOf(n) && (z(e.callbacks, function(e) {
                        e(!0, {
                            node: t,
                            format: n,
                            parents: u
                        })
                    }), i[n] = e.callbacks), a[n] = e.callbacks, !1) : !zg.matchesUnInheritedFormatSelector(r, t, n) && void 0
                })
            });
            var s = pp(t.get(), a, e, u);
            t.set(G(G({}, i), s))
        },
        pp = function(e, n, r, o) {
            return ce(e, function(e, t) {
                return !!kt(n, t) || (z(e, function(e) {
                    e(!1, {
                        node: r,
                        format: t,
                        parents: o
                    })
                }), !1)
            }).t
        },
        vp = function(r) {
            var t = {
                valigntop: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "top"
                    }
                }],
                valignmiddle: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "middle"
                    }
                }],
                valignbottom: [{
                    selector: "td,th",
                    styles: {
                        verticalAlign: "bottom"
                    }
                }],
                alignleft: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-left",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "left"
                    },
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div"
                }, {
                    selector: "img,table",
                    collapsed: !1,
                    styles: {
                        "float": "left"
                    },
                    preview: "font-family font-size"
                }],
                aligncenter: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "center"
                    },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-center",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "img",
                    collapsed: !1,
                    styles: {
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    },
                    preview: !1
                }, {
                    selector: "table",
                    collapsed: !1,
                    styles: {
                        marginLeft: "auto",
                        marginRight: "auto"
                    },
                    preview: "font-family font-size"
                }],
                alignright: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-right",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "right"
                    },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "img,table",
                    collapsed: !1,
                    styles: {
                        "float": "right"
                    },
                    preview: "font-family font-size"
                }],
                alignjustify: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {
                        textAlign: "justify"
                    },
                    inherit: !1,
                    defaultBlock: "div",
                    preview: "font-family font-size"
                }],
                bold: [{
                    inline: "strong",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        fontWeight: "bold"
                    }
                }, {
                    inline: "b",
                    remove: "all"
                }],
                italic: [{
                    inline: "em",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        fontStyle: "italic"
                    }
                }, {
                    inline: "i",
                    remove: "all"
                }],
                underline: [{
                    inline: "span",
                    styles: {
                        textDecoration: "underline"
                    },
                    exact: !0
                }, {
                    inline: "u",
                    remove: "all"
                }],
                strikethrough: [{
                    inline: "span",
                    styles: {
                        textDecoration: "line-through"
                    },
                    exact: !0
                }, {
                    inline: "strike",
                    remove: "all"
                }],
                forecolor: {
                    inline: "span",
                    styles: {
                        color: "%value"
                    },
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                hilitecolor: {
                    inline: "span",
                    styles: {
                        backgroundColor: "%value"
                    },
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                fontname: {
                    inline: "span",
                    toggle: !1,
                    styles: {
                        fontFamily: "%value"
                    },
                    clear_child_styles: !0
                },
                fontsize: {
                    inline: "span",
                    toggle: !1,
                    styles: {
                        fontSize: "%value"
                    },
                    clear_child_styles: !0
                },
                fontsize_class: {
                    inline: "span",
                    attributes: {
                        "class": "%value"
                    }
                },
                blockquote: {
                    block: "blockquote",
                    wrapper: !0,
                    remove: "all"
                },
                subscript: {
                    inline: "sub"
                },
                superscript: {
                    inline: "sup"
                },
                code: {
                    inline: "code"
                },
                link: {
                    inline: "a",
                    selector: "a",
                    remove: "all",
                    split: !0,
                    deep: !0,
                    onmatch: function() {
                        return !0
                    },
                    onformat: function(n, e, t) {
                        Mn.each(t, function(e, t) {
                            r.setAttrib(n, t, e)
                        })
                    }
                },
                removeformat: [{
                    selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                    remove: "all",
                    split: !0,
                    expand: !1,
                    block_expand: !0,
                    deep: !0
                }, {
                    selector: "span",
                    attributes: ["style", "class"],
                    remove: "empty",
                    split: !0,
                    expand: !1,
                    deep: !0
                }, {
                    selector: "*",
                    attributes: ["style", "class"],
                    split: !1,
                    expand: !1,
                    deep: !0
                }]
            };
            return Mn.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function(e) {
                t[e] = {
                    block: e,
                    remove: "all"
                }
            }), t
        };

    function yp(e, t) {
        function s(e) {
            var t;
            return r = "string" == typeof e ? {
                    name: e,
                    classes: [],
                    attrs: {}
                } : e,
                function(e, t) {
                    t.classes.length && Rp.addClass(e, t.classes.join(" ")), Rp.setAttribs(e, t.attrs)
                }(t = Rp.create(r.name), r), t
        }
        var n, r, o, c = t && t.schema || pr({}),
            l = function(n, e, t) {
                var r, o, i, a = 0 < e.length && e[0],
                    u = a && a.name;
                if (i = function(e, t) {
                        var n = "string" != typeof e ? e.nodeName.toLowerCase() : e,
                            r = c.getElementRule(n),
                            o = r && r.parentsRequired;
                        return !(!o || !o.length) && (t && -1 !== Mn.inArray(o, t) ? t : o[0])
                    }(n, u)) u === i ? (o = e[0], e = e.slice(1)) : o = i;
                else if (a) o = e[0], e = e.slice(1);
                else if (!t) return n;
                return o && (r = s(o)).appendChild(n), t && (r || (r = Rp.create("div")).appendChild(n), Mn.each(t, function(e) {
                    var t = s(e);
                    r.insertBefore(t, n)
                })), l(r, e, o && o.siblings)
            };
        return e && e.length ? (r = e[0], n = s(r), (o = Rp.create("div")).appendChild(l(n, e.slice(1), r.siblings)), o) : ""
    }

    function bp(e) {
        var t, a = {
            classes: [],
            attrs: {}
        };
        return "*" !== (e = a.selector = Mn.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function(e, t, n, r, o) {
            switch (t) {
                case "#":
                    a.attrs.id = n;
                    break;
                case ".":
                    a.classes.push(n);
                    break;
                case ":":
                    -1 !== Mn.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n)
            }
            if ("[" === r) {
                var i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                i && (a.attrs[i[1]] = i[2])
            }
            return ""
        })), a.name = t || "div", a
    }

    function Cp(e) {
        var t = function o(e) {
                var n = {},
                    r = function(e, t) {
                        e && ("string" != typeof e ? Mn.each(e, function(e, t) {
                            r(t, e)
                        }) : (A(t) || (t = [t]), Mn.each(t, function(e) {
                            "undefined" == typeof e.deep && (e.deep = !e.selector), "undefined" == typeof e.split && (e.split = !e.selector || e.inline), "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                        }), n[e] = t))
                    };
                return r(vp(e.dom)), r(e.settings.formats), {
                    get: function(e) {
                        return e ? n[e] : n
                    },
                    has: function(e) {
                        return kt(n, e)
                    },
                    register: r,
                    unregister: function(e) {
                        return e && n[e] && delete n[e], n
                    }
                }
            }(e),
            n = Je(null);
        return Op(e), jm(e), {
            get: t.get,
            has: t.has,
            register: t.register,
            unregister: t.unregister,
            apply: d(mp.applyFormat, e),
            remove: d(tp, e),
            toggle: d(Bp, e, t),
            match: d(zg.match, e),
            matchAll: d(zg.matchAll, e),
            matchNode: d(zg.matchNode, e),
            canApply: d(zg.canApply, e),
            formatChanged: d(Xg, e, n),
            getCssText: d(_p, e)
        }
    }

    function wp(e, i, a) {
        e.addNodeFilter("font", function(e) {
            z(e, function(e) {
                var t = i.parse(e.attr("style")),
                    n = e.attr("color"),
                    r = e.attr("face"),
                    o = e.attr("size");
                n && (t.color = n), r && (t["font-family"] = r), o && (t["font-size"] = a[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", i.serialize(t)),
                    function(t, e) {
                        z(e, function(e) {
                            t.attr(e, null)
                        })
                    }(e, ["color", "face", "size"])
            })
        })
    }

    function xp(e, t) {
        var n = xr();
        t.convert_fonts_to_spans && wp(e, n, Mn.explode(t.font_size_legacy_values)),
            function(e, n) {
                e.addNodeFilter("strike", function(e) {
                    z(e, function(e) {
                        var t = n.parse(e.attr("style"));
                        t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                    })
                })
            }(e, n)
    }

    function zp(e, t, n, r) {
        (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new ul("br", 1)).shortEnded = !0 : r.empty().append(new ul("#text", 3)).value = "\xa0"
    }

    function Ep(t, e, n, r) {
        return r.isEmpty(e, n, function(e) {
            return function(e, t) {
                var n = e.getElementRule(t.name);
                return n && n.paddEmpty
            }(t, e)
        })
    }

    function Np(T, A) {
        void 0 === A && (A = pr());
        var M = {},
            R = [],
            D = {},
            _ = {};
        (T = T || {}).validate = !("validate" in T) || T.validate, T.root_name = T.root_name || "body";
        var B = function(e) {
                var t, n, r;
                (n = e.name) in M && ((r = D[n]) ? r.push(e) : D[n] = [e]), t = R.length;
                for (; t--;)(n = R[t].name) in e.attributes.map && ((r = _[n]) ? r.push(e) : _[n] = [e]);
                return e
            },
            e = {
                schema: A,
                addAttributeFilter: function(e, n) {
                    Up(jp(e), function(e) {
                        var t;
                        for (t = 0; t < R.length; t++)
                            if (R[t].name === e) return void R[t].callbacks.push(n);
                        R.push({
                            name: e,
                            callbacks: [n]
                        })
                    })
                },
                getAttributeFilters: function() {
                    return [].concat(R)
                },
                addNodeFilter: function(e, n) {
                    Up(jp(e), function(e) {
                        var t = M[e];
                        t || (M[e] = t = []), t.push(n)
                    })
                },
                getNodeFilters: function() {
                    var e = [];
                    for (var t in M) M.hasOwnProperty(t) && e.push({
                        name: t,
                        callbacks: M[t]
                    });
                    return e
                },
                filterNode: B,
                parse: function(e, a) {
                    var t, n, r, o, i, u, s, c, l, f, d, h = [];
                    a = a || {}, D = {}, _ = {}, l = qp(Fp("script,style,head,html,body,title,meta,param"), A.getBlockElements());
                    var m, g = A.getNonEmptyElements(),
                        p = A.children,
                        v = T.validate,
                        y = "forced_root_block" in a ? a.forced_root_block : T.forced_root_block,
                        b = !1 === (m = y) ? "" : !0 === m ? "p" : m,
                        C = A.getWhiteSpaceElements(),
                        w = /^[ \t\r\n]+/,
                        x = /[ \t\r\n]+$/,
                        z = /[ \t\r\n]+/g,
                        E = /^[ \t\r\n]+$/;
                    f = C.hasOwnProperty(a.context) || C.hasOwnProperty(T.root_name);

                    function N(e) {
                        var t, n, r, o, i = A.getBlockElements();
                        for (t = e.prev; t && 3 === t.type;) {
                            if (0 < (r = t.value.replace(x, "")).length) return void(t.value = r);
                            if (n = t.next) {
                                if (3 === n.type && n.value.length) {
                                    t = t.prev;
                                    continue
                                }
                                if (!i[n.name] && "script" !== n.name && "style" !== n.name) {
                                    t = t.prev;
                                    continue
                                }
                            }
                            o = t.prev, t.remove(), t = o
                        }
                    }
                    var S = function(e, t) {
                        var n, r = new ul(e, t);
                        return e in M && ((n = D[e]) ? n.push(r) : D[e] = [r]), r
                    };
                    t = of({
                        validate: v,
                        allow_script_urls: T.allow_script_urls,
                        allow_conditional_comments: T.allow_conditional_comments,
                        self_closing_elements: function(e) {
                            var t, n = {};
                            for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                            return n
                        }(A.getSelfClosingElements()),
                        cdata: function(e) {
                            d.append(S("#cdata", 4)).value = e
                        },
                        text: function(e, t) {
                            var n;
                            f || (e = e.replace(z, " "), function(e, t) {
                                return e && (t[e.name] || "br" === e.name)
                            }(d.lastChild, l) && (e = e.replace(w, ""))), 0 !== e.length && ((n = S("#text", 3)).raw = !!t, d.append(n).value = e)
                        },
                        comment: function(e) {
                            d.append(S("#comment", 8)).value = e
                        },
                        pi: function(e, t) {
                            d.append(S(e, 7)).value = t, N(d)
                        },
                        doctype: function(e) {
                            d.append(S("#doctype", 10)).value = e, N(d)
                        },
                        start: function(e, t, n) {
                            var r, o, i, a, u;
                            if (i = v ? A.getElementRule(e) : {}) {
                                for ((r = S(i.outputName || e, 1)).attributes = t, r.shortEnded = n, d.append(r), (u = p[d.name]) && p[r.name] && !u[r.name] && h.push(r), o = R.length; o--;)(a = R[o].name) in t.map && ((s = _[a]) ? s.push(r) : _[a] = [r]);
                                l[e] && N(r), n || (d = r), !f && C[e] && (f = !0)
                            }
                        },
                        end: function(e) {
                            var t, n, r, o, i;
                            if (n = v ? A.getElementRule(e) : {}) {
                                if (l[e] && !f) {
                                    if ((t = d.firstChild) && 3 === t.type)
                                        if (0 < (r = t.value.replace(w, "")).length) t.value = r, t = t.next;
                                        else
                                            for (o = t.next, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.next, 0 !== r.length && !E.test(r) || (t.remove(), t = o), t = o;
                                    if ((t = d.lastChild) && 3 === t.type)
                                        if (0 < (r = t.value.replace(x, "")).length) t.value = r, t = t.prev;
                                        else
                                            for (o = t.prev, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.prev, 0 !== r.length && !E.test(r) || (t.remove(), t = o), t = o
                                }
                                if (f && C[e] && (f = !1), n.removeEmpty && Ep(A, g, C, d) && !d.attr("name") && !d.attr("id")) return i = d.parent, l[d.name] ? d.empty().remove() : d.unwrap(), void(d = i);
                                n.paddEmpty && (function(e) {
                                    return Ip(e, "#text") && "\xa0" === e.firstChild.value
                                }(d) || Ep(A, g, C, d)) && zp(T, a, l, d), d = d.parent
                            }
                        }
                    }, A);
                    var k = d = new ul(a.context || T.root_name, 11);
                    if (t.parse(e), v && h.length && (a.context ? a.invalid = !0 : function(e) {
                            var t, n, r, o, i, a, u, s, c, l, f, d, h, m, g, p;
                            for (d = Fp("tr,td,th,tbody,thead,tfoot,table"), l = A.getNonEmptyElements(), f = A.getWhiteSpaceElements(), h = A.getTextBlockElements(), m = A.getSpecialElements(), t = 0; t < e.length; t++)
                                if ((n = e[t]).parent && !n.fixed)
                                    if (h[n.name] && "li" === n.parent.name) {
                                        for (g = n.next; g && h[g.name];) g.name = "li", g.fixed = !0, n.parent.insert(g, n.parent), g = g.next;
                                        n.unwrap(n)
                                    } else {
                                        for (o = [n], r = n.parent; r && !A.isValidChild(r.name, n.name) && !d[r.name]; r = r.parent) o.push(r);
                                        if (r && 1 < o.length) {
                                            for (o.reverse(), i = a = B(o[0].clone()), c = 0; c < o.length - 1; c++) {
                                                for (A.isValidChild(a.name, o[c].name) ? (u = B(o[c].clone()), a.append(u)) : u = a, s = o[c].firstChild; s && s !== o[c + 1];) p = s.next, u.append(s), s = p;
                                                a = u
                                            }
                                            Ep(A, l, f, i) ? r.insert(n, o[0], !0) : (r.insert(i, o[0], !0), r.insert(n, i)), r = o[0], (Ep(A, l, f, r) || Ip(r, "br")) && r.empty().remove()
                                        } else if (n.parent) {
                                            if ("li" === n.name) {
                                                if ((g = n.prev) && ("ul" === g.name || "ul" === g.name)) {
                                                    g.append(n);
                                                    continue
                                                }
                                                if ((g = n.next) && ("ul" === g.name || "ul" === g.name)) {
                                                    g.insert(n, g.firstChild, !0);
                                                    continue
                                                }
                                                n.wrap(B(new ul("ul", 1)));
                                                continue
                                            }
                                            A.isValidChild(n.parent.name, "div") && A.isValidChild("div", n.name) ? n.wrap(B(new ul("div", 1))) : m[n.name] ? n.empty().remove() : n.unwrap()
                                        }
                                    }
                        }(h)), b && ("body" === k.name || a.isRootContent) && function() {
                            function e(e) {
                                e && ((r = e.firstChild) && 3 === r.type && (r.value = r.value.replace(w, "")), (r = e.lastChild) && 3 === r.type && (r.value = r.value.replace(x, "")))
                            }
                            var t, n, r = k.firstChild;
                            if (A.isValidChild(k.name, b.toLowerCase())) {
                                for (; r;) t = r.next, 3 === r.type || 1 === r.type && "p" !== r.name && !l[r.name] && !r.attr("data-mce-type") ? (n || ((n = S(b, 1)).attr(T.forced_root_block_attrs), k.insert(n, r)), n.append(r)) : (e(n), n = null), r = t;
                                e(n)
                            }
                        }(), !a.invalid) {
                        for (c in D)
                            if (D.hasOwnProperty(c)) {
                                for (s = M[c], i = (n = D[c]).length; i--;) n[i].parent || n.splice(i, 1);
                                for (r = 0, o = s.length; r < o; r++) s[r](n, c, a)
                            }
                        for (r = 0, o = R.length; r < o; r++)
                            if ((s = R[r]).name in _) {
                                for (i = (n = _[s.name]).length; i--;) n[i].parent || n.splice(i, 1);
                                for (i = 0, u = s.callbacks.length; i < u; i++) s.callbacks[i](n, s.name, a)
                            }
                    }
                    return k
                }
            };
        return function(e, g) {
            var p = e.schema;
            g.remove_trailing_brs && e.addNodeFilter("br", function(e, t, n) {
                var r, o, i, a, u, s, c, l, f = e.length,
                    d = Mn.extend({}, p.getBlockElements()),
                    h = p.getNonEmptyElements(),
                    m = p.getNonEmptyElements();
                for (d.body = 1, r = 0; r < f; r++)
                    if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) {
                        for (u = o.prev; u;) {
                            if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                                if ("br" !== s) break;
                                if ("br" === s) {
                                    o = null;
                                    break
                                }
                            }
                            u = u.prev
                        }
                        o && (o.remove(), Ep(p, h, m, i) && (c = p.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && zp(g, n, d, i)))
                    } else {
                        for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) i = i.parent;
                        a === i && !0 !== g.padd_empty_with_br && ((l = new ul("#text", 3)).value = "\xa0", o.replace(l))
                    }
            }), e.addAttributeFilter("href", function(e) {
                var t, n, r, o = e.length;
                if (!g.allow_unsafe_link_target)
                    for (; o--;) "a" === (t = e[o]).name && "_blank" === t.attr("target") && t.attr("rel", (n = t.attr("rel"), void 0, r = n ? Mn.trim(n) : "", /\b(noopener)\b/g.test(r) ? r : r.split(" ").filter(function(e) {
                        return 0 < e.length
                    }).concat(["noopener"]).sort().join(" ")))
            }), g.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function(e) {
                for (var t, n, r, o, i = e.length; i--;)
                    if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href"))
                        for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;);
            }), g.fix_list_elements && e.addNodeFilter("ul,ol", function(e) {
                for (var t, n, r = e.length; r--;)
                    if ("ul" === (n = (t = e[r]).parent).name || "ol" === n.name)
                        if (t.prev && "li" === t.prev.name) t.prev.append(t);
                        else {
                            var o = new ul("li", 1);
                            o.attr("style", "list-style-type: none"), t.wrap(o)
                        }
            }), g.validate && p.getValidClasses() && e.addAttributeFilter("class", function(e) {
                for (var t, n, r, o, i, a, u, s = e.length, c = p.getValidClasses(); s--;) {
                    for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++) o = n[r], u = !1, (a = c["*"]) && a[o] && (u = !0), a = c[t.name], !u && a && a[o] && (u = !0), u && (i && (i += " "), i += o);
                    i.length || (i = null), t.attr("class", i)
                }
            })
        }(e, T), Vp(e, T), e
    }

    function Sp(e, t, n) {
        -1 === Mn.inArray(t, n) && (e.addAttributeFilter(n, function(e, t) {
            for (var n = e.length; n--;) e[n].attr(t, null)
        }), t.push(n))
    }

    function kp(e, t, n, r, o) {
        return function(e, t, n) {
            return t.no_events || !e ? n : ld(e, bd(t, {
                content: n
            })).content
        }(e, o, function(e, t, n) {
            return pl(e, t).serialize(n)
        }(t, n, r))
    }

    function Tp(a, u) {
        var s, c, l, e = ["data-mce-selected"];
        return s = u && u.dom ? u.dom : Xi.DOM, c = u && u.schema ? u.schema : pr(a), a.entity_encoding = a.entity_encoding || "named", a.remove_trailing_brs = !("remove_trailing_brs" in a) || a.remove_trailing_brs, l = Np(a, c), Hp(l, a, s), {
            schema: c,
            addNodeFilter: l.addNodeFilter,
            addAttributeFilter: l.addAttributeFilter,
            serialize: function(e, t) {
                var n = bd({
                        format: "html"
                    }, t || {}),
                    r = Lp(u, e, n),
                    o = function(e, t, n) {
                        var r = lu(n.getInner ? t.innerHTML : e.getOuterHTML(t));
                        return n.selection || Wn(yt.fromDom(t)) ? r : Mn.trim(r)
                    }(s, r, n),
                    i = function(e, t, n) {
                        var r = n.selection ? bd({
                                forced_root_block: !1
                            }, n) : n,
                            o = e.parse(t, r);
                        return Pp(o), o
                    }(l, o, n);
                return "tree" === n.format ? i : kp(u, a, c, i, n)
            },
            addRules: function(e) {
                c.addValidElements(e)
            },
            setRules: function(e) {
                c.setValidElements(e)
            },
            addTempAttr: d(Sp, l, e),
            getTempAttrs: function() {
                return e
            }
        }
    }

    function Ap(e, t) {
        var n = Tp(e, t);
        return {
            schema: n.schema,
            addNodeFilter: n.addNodeFilter,
            addAttributeFilter: n.addAttributeFilter,
            serialize: n.serialize,
            addRules: n.addRules,
            setRules: n.setRules,
            addTempAttr: n.addTempAttr,
            getTempAttrs: n.getTempAttrs
        }
    }
    var Mp = Mn.each,
        Rp = Xi.DOM,
        Dp = function(e) {
            return e && "string" == typeof e ? (e = (e = e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), Mn.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                var t = Mn.map(e.split(/(?:~\+|~|\+)/), bp),
                    n = t.pop();
                return t.length && (n.siblings = t), n
            }).reverse()) : []
        },
        _p = function(n, e) {
            var t, r, o, i, a, u, s = "";
            if (!1 === (u = n.settings.preview_styles)) return "";
            "string" != typeof u && (u = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");

            function c(e) {
                return e.replace(/%(\w+)/g, "")
            }
            if ("string" == typeof e) {
                if (!(e = n.formatter.get(e))) return;
                e = e[0]
            }
            return "preview" in e && !1 === (u = e.preview) ? "" : (t = e.block || e.inline || "span", r = (i = Dp(e.selector)).length ? (i[0].name || (i[0].name = t), t = e.selector, yp(i, n)) : yp([t], n), o = Rp.select(t, r)[0] || r.firstChild, Mp(e.styles, function(e, t) {
                (e = c(e)) && Rp.setStyle(o, t, e)
            }), Mp(e.attributes, function(e, t) {
                (e = c(e)) && Rp.setAttrib(o, t, e)
            }), Mp(e.classes, function(e) {
                e = c(e), Rp.hasClass(o, e) || Rp.addClass(o, e)
            }), n.fire("PreviewFormats"), Rp.setStyles(r, {
                position: "absolute",
                left: -65535
            }), n.getBody().appendChild(r), a = Rp.getStyle(n.getBody(), "fontSize", !0), a = /px$/.test(a) ? parseInt(a, 10) : 0, Mp(u.split(" "), function(e) {
                var t = Rp.getStyle(o, e, !0);
                if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = Rp.getStyle(n.getBody(), e, !0), "#ffffff" === Rp.toHex(t).toLowerCase()) || "color" === e && "#000000" === Rp.toHex(t).toLowerCase())) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === a) return;
                        t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * a + "px"
                    }
                    "border" === e && t && (s += "padding:0 2px;"), s += e + ":" + t + ";"
                }
            }), n.fire("AfterPreviewFormats"), Rp.remove(r), s)
        },
        Bp = function(e, t, n, r, o) {
            var i = t.get(n);
            !zg.match(e, n, r, o) || "toggle" in i[0] && !i[0].toggle ? mp.applyFormat(e, n, r, o) : tp(e, n, r, o)
        },
        Op = function(e) {
            e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
            for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
            e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
        },
        Hp = function(t, s, c) {
            t.addAttributeFilter("data-mce-tabindex", function(e, t) {
                for (var n, r = e.length; r--;)(n = e[r]).attr("tabindex", n.attr("data-mce-tabindex")), n.attr(t, null)
            }), t.addAttributeFilter("src,href,style", function(e, t) {
                for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--;)(r = (n = e[o]).attr(i)) !== undefined ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null)) : (r = n.attr(t), "style" === t ? r = c.serializeStyle(c.parseStyle(r), n.name) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null))
            }), t.addAttributeFilter("class", function(e) {
                for (var t, n, r = e.length; r--;)(n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), t.attr("class", 0 < n.length ? n : null))
            }), t.addAttributeFilter("data-mce-type", function(e, t, n) {
                for (var r, o = e.length; o--;) {
                    if ("bookmark" === (r = e[o]).attr("data-mce-type") && !n.cleanup) k.from(r.firstChild).exists(function(e) {
                        return !su(e.value)
                    }) ? r.unwrap() : r.remove()
                }
            }), t.addNodeFilter("noscript", function(e) {
                for (var t, n = e.length; n--;)(t = e[n].firstChild) && (t.value = ir.decode(t.value))
            }), t.addNodeFilter("script,style", function(e, t) {
                for (var n, r, o, i = e.length, a = function(e) {
                        return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                    }; i--;) r = (n = e[i]).firstChild ? n.firstChild.value : "", "script" === t ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e")
            }), t.addNodeFilter("#comment", function(e) {
                for (var t, n = e.length; n--;) 0 === (t = e[n]).value.indexOf("[CDATA[") ? (t.name = "#cdata", t.type = 4, t.value = t.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text", t.type = 3, t.raw = !0, t.value = unescape(t.value).substr(14))
            }), t.addNodeFilter("xml:namespace,input", function(e, t) {
                for (var n, r = e.length; r--;) 7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || n.attr("type") || n.attr("type", "text"))
            }), t.addAttributeFilter("data-mce-type", function(e) {
                z(e, function(e) {
                    "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap())
                })
            }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function(e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            })
        },
        Pp = function(e) {
            function t(e) {
                return e && "br" === e.name
            }
            var n, r;
            t(n = e.lastChild) && t(r = n.prev) && (n.remove(), r.remove())
        },
        Lp = function(e, t, n) {
            return function(e, t) {
                return e && e.hasEventListeners("PreProcess") && !t.no_events
            }(e, n) ? function(e, t, n) {
                var r, o, i, a = e.dom;
                return t = t.cloneNode(!0), (r = j.document.implementation).createHTMLDocument && (o = r.createHTMLDocument(""), Mn.each("BODY" === t.nodeName ? t.childNodes : [t], function(e) {
                    o.body.appendChild(o.importNode(e, !0))
                }), t = "BODY" !== t.nodeName ? o.body.firstChild : o.body, i = a.doc, a.doc = o), cd(e, bd(n, {
                    node: t
                })), i && (a.doc = i), t
            }(e, t, n) : t
        },
        Vp = function(e, t) {
            t.inline_styles && xp(e, t)
        },
        Ip = function(e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t
        },
        Fp = Mn.makeMap,
        Up = Mn.each,
        jp = Mn.explode,
        qp = Mn.extend;

    function $p(e) {
        return {
            getBookmark: d(Vc, e),
            moveToBookmark: d(Ic, e)
        }
    }($p = $p || {}).isBookmarkNode = Fc;

    function Wp(r, a) {
        var u, s, c, l, f, d, h, m, g, p, v, y, i, b, C, w, x, z = a.dom,
            E = Mn.each,
            N = a.getDoc(),
            S = j.document,
            k = Math.abs,
            T = Math.round,
            A = a.getBody();

        function M(e) {
            return e && ("IMG" === e.nodeName || a.dom.is(e, "figure.image"))
        }

        function e(e) {
            var t = e.target;
            ! function(e, t) {
                if ("longpress" !== e.type && 0 !== e.type.indexOf("touch")) return M(e.target) && !Jm(e.clientX, e.clientY, t);
                var n = e.touches[0];
                return M(e.target) && !Jm(n.clientX, n.clientY, t)
            }(e, a.selection.getRng()) || e.isDefaultPrevented() || a.selection.select(t)
        }

        function R(e) {
            return a.dom.is(e, "figure.image") ? e.querySelector("img") : e
        }

        function D(e) {
            var t = a.settings.object_resizing;
            return !1 !== t && !Nn.iOS && ("string" != typeof t && (t = "table,img,figure.image,div"), "false" !== e.getAttribute("data-mce-resize") && (e !== a.getBody() && we(yt.fromDom(e), t)))
        }

        function _(e) {
            var t, n, r, o;
            t = e.screenX - d, n = e.screenY - h, b = t * f[2] + p, C = n * f[3] + v, b = b < 5 ? 5 : b, C = C < 5 ? 5 : C, (M(u) && !1 !== a.settings.resize_img_proportional ? !Ah.modifierPressed(e) : Ah.modifierPressed(e) || M(u) && f[2] * f[3] != 0) && (k(t) > k(n) ? (C = T(b * y), b = T(C / y)) : (b = T(C / y), C = T(b * y))), z.setStyles(R(s), {
                width: b,
                height: C
            }), r = 0 < (r = f.startPos.x + t) ? r : 0, o = 0 < (o = f.startPos.y + n) ? o : 0, z.setStyles(c, {
                left: r,
                top: o,
                display: "block"
            }), c.innerHTML = b + " &times; " + C, f[2] < 0 && s.clientWidth <= b && z.setStyle(s, "left", m + (p - b)), f[3] < 0 && s.clientHeight <= C && z.setStyle(s, "top", g + (v - C)), (t = A.scrollWidth - w) + (n = A.scrollHeight - x) !== 0 && z.setStyles(c, {
                left: r - t,
                top: o - n
            }), i || (md(a, u, p, v), i = !0)
        }

        function n(e) {
            function t(e, t) {
                if (e)
                    do {
                        if (e === t) return !0
                    } while (e = e.parentNode)
            }
            var n;
            i || a.removed || (E(z.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) {
                e.removeAttribute("data-mce-selected")
            }), n = "mousedown" === e.type ? e.target : r.getNode(), t(n = z.$(n).closest("table,img,figure.image,hr")[0], A) && (L(), t(r.getStart(!0), n) && t(r.getEnd(!0), n)) ? O(n) : H())
        }

        function o(e) {
            return Xp(function(e, t) {
                for (; t && t !== e;) {
                    if (Yp(t) || Xp(t)) return t;
                    t = t.parentNode
                }
                return null
            }(a.getBody(), e))
        }
        l = {
            nw: [0, 0, -1, -1],
            ne: [1, 0, 1, -1],
            se: [1, 1, 1, 1],
            sw: [0, 1, -1, 1]
        };
        var B = function() {
                i = !1;

                function e(e, t) {
                    t && (u.style[e] || !a.schema.isValid(u.nodeName.toLowerCase(), e) ? z.setStyle(R(u), e, t) : z.setAttrib(R(u), e, t))
                }
                e("width", b), e("height", C), z.unbind(N, "mousemove", _), z.unbind(N, "mouseup", B), S !== N && (z.unbind(S, "mousemove", _), z.unbind(S, "mouseup", B)), z.remove(s), z.remove(c), O(u), gd(a, u, b, C), z.setAttrib(u, "style", z.getAttrib(u, "style")), a.nodeChanged()
            },
            O = function(e) {
                var t, r, o, n, i;
                H(), P(), t = z.getPos(e, A), m = t.x, g = t.y, i = e.getBoundingClientRect(), r = i.width || i.right - i.left, o = i.height || i.bottom - i.top, u !== e && (u = e, b = C = 0), n = a.fire("ObjectSelected", {
                    target: e
                }), D(e) && !n.isDefaultPrevented() ? E(l, function(t, e) {
                    var n;
                    (n = z.get("mceResizeHandle" + e)) && z.remove(n), n = z.add(A, "div", {
                        id: "mceResizeHandle" + e,
                        "data-mce-bogus": "all",
                        "class": "mce-resizehandle",
                        unselectable: !0,
                        style: "cursor:" + e + "-resize; margin:0; padding:0"
                    }), 11 === Nn.ie && (n.contentEditable = !1), z.bind(n, "mousedown", function(e) {
                        e.stopImmediatePropagation(), e.preventDefault(),
                            function(e) {
                                d = e.screenX, h = e.screenY, p = R(u).clientWidth, v = R(u).clientHeight, y = v / p, (f = t).startPos = {
                                    x: r * t[0] + m,
                                    y: o * t[1] + g
                                }, w = A.scrollWidth, x = A.scrollHeight, s = u.cloneNode(!0), z.addClass(s, "mce-clonedresizable"), z.setAttrib(s, "data-mce-bogus", "all"), s.contentEditable = !1, s.unSelectabe = !0, z.setStyles(s, {
                                    left: m,
                                    top: g,
                                    margin: 0
                                }), s.removeAttribute("data-mce-selected"), A.appendChild(s), z.bind(N, "mousemove", _), z.bind(N, "mouseup", B), S !== N && (z.bind(S, "mousemove", _), z.bind(S, "mouseup", B)), c = z.add(A, "div", {
                                    "class": "mce-resize-helper",
                                    "data-mce-bogus": "all"
                                }, p + " &times; " + v)
                            }(e)
                    }), t.elm = n, z.setStyles(n, {
                        left: r * t[0] + m - n.offsetWidth / 2,
                        top: o * t[1] + g - n.offsetHeight / 2
                    })
                }) : H(), u.setAttribute("data-mce-selected", "1")
            },
            H = function() {
                var e, t;
                for (e in P(), u && u.removeAttribute("data-mce-selected"), l)(t = z.get("mceResizeHandle" + e)) && (z.unbind(t), z.remove(t))
            },
            P = function() {
                for (var e in l) {
                    var t = l[e];
                    t.elm && (z.unbind(t.elm), delete t.elm)
                }
            },
            L = function() {
                try {
                    a.getDoc().execCommand("enableObjectResizing", !1, !1)
                } catch (e) {}
            };
        return a.on("init", function() {
            L(), (Nn.browser.isIE() || Nn.browser.isEdge()) && (a.on("mousedown click", function(e) {
                var t = e.target,
                    n = t.nodeName;
                i || !/^(TABLE|IMG|HR)$/.test(n) || o(t) || (2 !== e.button && a.selection.select(t, "TABLE" === n), "mousedown" === e.type && a.nodeChanged())
            }), a.dom.bind(A, "mscontrolselect", function(e) {
                function t(e) {
                    pn.setEditorTimeout(a, function() {
                        a.selection.select(e)
                    })
                }
                if (o(e.target)) return e.preventDefault(), void t(e.target);
                /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target))
            }));
            var t = pn.throttle(function(e) {
                a.composing || n(e)
            });
            a.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged", t), a.on("keyup compositionend", function(e) {
                u && "TABLE" === u.nodeName && t(e)
            }), a.on("hide blur", H), a.on("contextmenu longpress", e, !0)
        }), a.on("remove", P), {
            isResizable: D,
            showResizeRect: O,
            hideResizeRect: H,
            updateResizeRect: n,
            destroy: function() {
                u = s = null
            }
        }
    }
    var Kp = $p,
        Xp = Ge.isContentEditableFalse,
        Yp = Ge.isContentEditableTrue;

    function Gp(e) {
        var t = yt.fromDom(j.document),
            n = ki(t),
            r = function(e, t) {
                var n = t.owner(e);
                return Vv(t, n)
            }(e, Iv),
            o = Hi(e),
            i = m(r, function(e, t) {
                var n = Hi(t);
                return {
                    left: e.left + n.left(),
                    top: e.top + n.top()
                }
            }, {
                left: 0,
                top: 0
            });
        return Oi(i.left + o.left() + n.left(), i.top + o.top() + n.top())
    }

    function Jp(e) {
        return "textarea" === ie(e)
    }

    function Qp(e, t) {
        var n = function(e) {
                var t = e.dom().ownerDocument,
                    n = t.body,
                    r = t.defaultView,
                    o = t.documentElement;
                if (n === e.dom()) return Oi(n.offsetLeft, n.offsetTop);
                var i = Si(r.pageYOffset, o.scrollTop),
                    a = Si(r.pageXOffset, o.scrollLeft),
                    u = Si(o.clientTop, n.clientTop),
                    s = Si(o.clientLeft, n.clientLeft);
                return Hi(e).translate(a - s, i - u)
            }(e),
            r = function(e) {
                return Lv.get(e)
            }(e);
        return {
            element: e,
            bottom: n.top() + r,
            pos: n,
            cleanup: t
        }
    }

    function Zp(e, t) {
        var n = function(e, t) {
                var n = Re(e);
                if (0 === n.length || Jp(e)) return {
                    element: e,
                    offset: t
                };
                if (t < n.length && !Jp(n[t])) return {
                    element: n[t],
                    offset: 0
                };
                var r = n[n.length - 1];
                return Jp(r) ? {
                    element: e,
                    offset: t
                } : "img" === ie(r) ? {
                    element: r,
                    offset: 1
                } : zt(r) ? {
                    element: r,
                    offset: Jc(r).length
                } : {
                    element: r,
                    offset: Re(r).length
                }
            }(e, t),
            r = yt.fromHtml('<span data-mce-bogus="all">' + cu + "</span>");
        return Ci(n.element, r), Qp(r, function() {
            return _i(r)
        })
    }

    function ev(e) {
        return Qp(yt.fromDom(e), i)
    }

    function tv(n, r, o, i) {
        Uv(n, function(e, t) {
            return Fv(n, r, o, i)
        }, o)
    }

    function nv(e, t, n, r) {
        var o = yt.fromDom(e.getDoc());
        n(o, ki(o).top(), t, r)
    }

    function rv(e, t, n, r) {
        var o = e.pos;
        if (n) Ti(o.left(), o.top(), r);
        else {
            var i = o.top() - t + (e.bottom - o.top());
            Ti(o.left(), i, r)
        }
    }

    function ov(e, t, n, r, o) {
        r.pos.top() < t ? rv(r, n, !1 !== o, e) : r.bottom > n + t && rv(r, n, !0 === o, e)
    }

    function iv(e, t, n, r) {
        var o = e.dom().defaultView.innerHeight;
        ov(e, t, o, n, r)
    }

    function av(e, t, n, r, o) {
        var i = t.dom().defaultView.innerHeight;
        ov(t, n, i, r, o);
        var a = Gp(r.element),
            u = Li(j.window);
        a.top() < u.y() ? Ai(r.element, !1 !== o) : a.top() > u.bottom() && Ai(r.element, !0 === o)
    }

    function uv(e, t, n) {
        return tv(e, d(iv), t, n)
    }

    function sv(e, t, n) {
        return nv(e, ev(t), d(iv), n)
    }

    function cv(e, t, n) {
        return tv(e, d(av, e), t, n)
    }

    function lv(e, t, n) {
        return nv(e, ev(t), d(av, e), n)
    }

    function fv(e) {
        return Ge.isContentEditableTrue(e) || Ge.isContentEditableFalse(e)
    }

    function dv(e, t) {
        var n = (t || j.document).createDocumentFragment();
        return z(e, function(e) {
            n.appendChild(e.dom())
        }), yt.fromDom(n)
    }

    function hv(e, t) {
        var n = parseInt(ge(e, t), 10);
        return isNaN(n) ? 1 : n
    }

    function mv(e) {
        return b(e, function(e, t) {
            return t.cells().length > e ? t.cells().length : e
        }, 0)
    }

    function gv(e, t) {
        for (var n = e.rows(), r = 0; r < n.length; r++)
            for (var o = n[r].cells(), i = 0; i < o.length; i++)
                if (ze(o[i], t)) return k.some(Yv(i, r));
        return k.none()
    }

    function pv(e, t, n, r, o) {
        for (var i = [], a = e.rows(), u = n; u <= o; u++) {
            var s = a[u].cells(),
                c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
            i.push(Xv(a[u].element(), c))
        }
        return i
    }

    function vv(e) {
        var t = [];
        if (e)
            for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
        return t
    }

    function yv(e) {
        return y(ey(e), $n)
    }

    function bv(e) {
        return ma(e, "td[data-mce-selected],th[data-mce-selected]")
    }

    function Cv(e, t) {
        var n = bv(t),
            r = yv(e);
        return 0 < n.length ? n : r
    }

    function wv(t, n) {
        return g(t, function(e) {
            return "li" === ie(e) && uh(e, n)
        }).fold($([]), function(e) {
            return function(e) {
                return g(e, function(e) {
                    return "ul" === ie(e) || "ol" === ie(e)
                })
            }(t).map(function(e) {
                return [yt.fromTag("li"), yt.fromTag(ie(e))]
            }).getOr([])
        })
    }

    function xv(e, t) {
        var n = yt.fromDom(t.commonAncestorContainer),
            r = fh(n, e),
            o = y(r, function(e) {
                return Dn(e) || Ln(e)
            }),
            i = wv(r, t),
            a = o.concat(i.length ? i : function(t) {
                return Un(t) ? Se(t).filter(Fn).fold($([]), function(e) {
                    return [t, e]
                }) : Fn(t) ? [t] : []
            }(n));
        return X(a, ka)
    }

    function zv() {
        return dv([])
    }

    function Ev(e, t) {
        return function(e, t) {
            var n = b(t, function(e, t) {
                return Di(t, e), t
            }, e);
            return 0 < t.length ? dv([n]) : n
        }(yt.fromDom(t.cloneContents()), xv(e, t))
    }

    function Nv(e, o) {
        return function(e, t) {
            return Ca(t, "table", d(ze, e))
        }(e, o[0]).bind(function(e) {
            var t = o[0],
                n = o[o.length - 1],
                r = Gv(e);
            return Qv(r, t, n).map(function(e) {
                return dv([Jv(e)])
            })
        }).getOrThunk(zv)
    }

    function Sv(e, t, n) {
        return null !== function(e, t, n) {
            for (; e && e !== t;) {
                if (n(e)) return e;
                e = e.parentNode
            }
            return null
        }(e, t, n)
    }

    function kv(e, t, n) {
        return Sv(e, t, function(e) {
            return e.nodeName === n
        })
    }

    function Tv(e) {
        return e && "TABLE" === e.nodeName
    }

    function Av(e, t, n) {
        for (var r = new yi(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();)
            if (Ge.isBr(t)) return !0
    }

    function Mv(e, t, n, r, o) {
        var i, a, u = e.getRoot(),
            s = e.schema.getNonEmptyElements(),
            c = e.getParent(o.parentNode, e.isBlock) || u;
        if (r && Ge.isBr(o) && t && e.isEmpty(c)) return k.some(Uu(o.parentNode, e.nodeIndex(o)));
        for (var l, f, d = new yi(o, c); a = d[r ? "prev" : "next"]();) {
            if ("false" === e.getContentEditableParent(a) || (f = u, Da(l = a) && !1 === Sv(l, f, rs))) return k.none();
            if (Ge.isText(a) && 0 < a.nodeValue.length) return !1 === kv(a, u, "A") ? k.some(Uu(a, r ? a.nodeValue.length : 0)) : k.none();
            if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return k.none();
            i = a
        }
        return n && i ? k.some(Uu(i, 0)) : k.none()
    }

    function Rv(e, t, n, r) {
        var o, i, a, u, s, c, l, f = e.getRoot(),
            d = !1;
        if (o = r[(n ? "start" : "end") + "Container"], i = r[(n ? "start" : "end") + "Offset"], c = Ge.isElement(o) && i === o.childNodes.length, u = e.schema.getNonEmptyElements(), s = n, Da(o)) return k.none();
        if (Ge.isElement(o) && i > o.childNodes.length - 1 && (s = !1), Ge.isDocument(o) && (o = f, i = 0), o === f) {
            if (s && (a = o.childNodes[0 < i ? i - 1 : 0])) {
                if (Da(a)) return k.none();
                if (u[a.nodeName] || Tv(a)) return k.none()
            }
            if (o.hasChildNodes()) {
                if (i = Math.min(!s && 0 < i ? i - 1 : i, o.childNodes.length - 1), o = o.childNodes[i], i = Ge.isText(o) && c ? o.data.length : 0, !t && o === f.lastChild && Tv(o)) return k.none();
                if (function(e, t) {
                        for (; t && t !== e;) {
                            if (Ge.isContentEditableFalse(t)) return !0;
                            t = t.parentNode
                        }
                        return !1
                    }(f, o) || Da(o)) return k.none();
                if (o.hasChildNodes() && !1 === Tv(o)) {
                    var h = new yi(a = o, f);
                    do {
                        if (Ge.isContentEditableFalse(a) || Da(a)) {
                            d = !1;
                            break
                        }
                        if (Ge.isText(a) && 0 < a.nodeValue.length) {
                            i = s ? 0 : a.nodeValue.length, o = a, d = !0;
                            break
                        }
                        if (u[a.nodeName.toLowerCase()] && (!(l = a) || !/^(TD|TH|CAPTION)$/.test(l.nodeName))) {
                            i = e.nodeIndex(a), o = a.parentNode, s || i++, d = !0;
                            break
                        }
                    } while (a = s ? h.next() : h.prev())
                }
            }
        }
        return t && (Ge.isText(o) && 0 === i && Mv(e, c, t, !0, o).each(function(e) {
            o = e.container(), i = e.offset(), d = !0
        }), Ge.isElement(o) && (!(a = (a = o.childNodes[i]) || o.childNodes[i - 1]) || !Ge.isBr(a) || function(e, t) {
            return e.previousSibling && e.previousSibling.nodeName === t
        }(a, "A") || Av(e, a, !1) || Av(e, a, !0) || Mv(e, c, t, !0, a).each(function(e) {
            o = e.container(), i = e.offset(), d = !0
        }))), s && !t && Ge.isText(o) && i === o.nodeValue.length && Mv(e, c, t, !1, o).each(function(e) {
            o = e.container(), i = e.offset(), d = !0
        }), d ? k.some(Uu(o, i)) : k.none()
    }

    function Dv(e) {
        return 0 === e.dom().length ? (_i(e), k.none()) : k.some(e)
    }

    function _v(e, t, n, r, o) {
        var i = n ? t.startContainer : t.endContainer,
            a = n ? t.startOffset : t.endOffset;
        return k.from(i).map(yt.fromDom).map(function(e) {
            return r && t.collapsed ? e : De(e, o(e, a)).getOr(e)
        }).bind(function(e) {
            return xt(e) ? k.some(e) : Se(e)
        }).map(function(e) {
            return e.dom()
        }).getOr(e)
    }

    function Bv(e, t, n) {
        return _v(e, t, !0, n, function(e, t) {
            return Math.min(function(e) {
                return e.dom().childNodes.length
            }(e), t)
        })
    }

    function Ov(e, t, n) {
        return _v(e, t, !1, n, function(e, t) {
            return 0 < t ? t - 1 : t
        })
    }

    function Hv(e, t) {
        for (var n = e; e && Ge.isText(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
        return e || n
    }

    function Pv(e, t, n) {
        if (e && e.hasOwnProperty(t)) {
            var r = y(e[t], function(e) {
                return e !== n
            });
            0 === r.length ? delete e[t] : e[t] = r
        }
    }
    var Lv = function CN(r, o) {
            function e(e) {
                var t = o(e);
                if (t <= 0 || null === t) {
                    var n = ve(e, r);
                    return parseFloat(n) || 0
                }
                return t
            }

            function i(o, e) {
                return b(e, function(e, t) {
                    var n = ve(o, t),
                        r = n === undefined ? 0 : parseInt(n, 10);
                    return isNaN(r) ? e : e + r
                }, 0)
            }
            return {
                set: function(e, t) {
                    if (!_(t) && !t.match(/^[0-9]+$/)) throw new Error(r + ".set accepts only positive integer values. Value was " + t);
                    var n = e.dom();
                    fe(n) && (n.style[r] = t + "px")
                },
                get: e,
                getOuter: e,
                aggregate: i,
                max: function(e, t, n) {
                    var r = i(e, n);
                    return r < t ? t - r : 0
                }
            }
        }("height", function(e) {
            var t = e.dom();
            return de(e) ? t.getBoundingClientRect().height : t.offsetHeight
        }),
        Vv = function(r, e) {
            return r.view(e).fold($([]), function(e) {
                var t = r.owner(e),
                    n = Vv(r, t);
                return [e].concat(n)
            })
        },
        Iv = /* */ Object.freeze({
            view: function(e) {
                return (e.dom() === j.document ? k.none() : k.from(e.dom().defaultView.frameElement)).map(yt.fromDom)
            },
            owner: function(e) {
                return Ee(e)
            }
        }),
        Fv = function(e, t, n, r) {
            var o = yt.fromDom(e.getBody()),
                i = yt.fromDom(e.getDoc());
            ! function(e) {
                e.dom().offsetWidth
            }(o);
            var a = ki(i).top(),
                u = Zp(yt.fromDom(n.startContainer), n.startOffset);
            t(i, a, u, r), u.cleanup()
        },
        Uv = function(e, t, n) {
            var r = n.startContainer,
                o = n.startOffset,
                i = n.endContainer,
                a = n.endOffset;
            t(yt.fromDom(r), yt.fromDom(i));
            var u = e.dom.createRng();
            u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n)
        },
        jv = function(e, t, n) {
            ! function(e, t, n) {
                return e.fire("ScrollIntoView", {
                    elm: t,
                    alignToTop: n
                }).isDefaultPrevented()
            }(e, t, n) && (e.inline ? sv : lv)(e, t, n)
        },
        qv = function(e, t, n) {
            (e.inline ? uv : cv)(e, t, n)
        },
        $v = function(e, t, n) {
            var r, o, i = n;
            if (i.caretPositionFromPoint)(o = i.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0));
            else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
            else if (i.body.createTextRange) {
                r = i.body.createTextRange();
                try {
                    r.moveToPoint(e, t), r.collapse(!0)
                } catch (a) {
                    r = function(e, n, t) {
                        var r, o, i;
                        if (r = t.elementFromPoint(e, n), o = t.body.createTextRange(), r && "HTML" !== r.tagName || (r = t.body), o.moveToElementText(r), 0 < (i = (i = Mn.toArray(o.getClientRects())).sort(function(e, t) {
                                return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)))
                            })).length) {
                            n = (i[0].bottom + i[0].top) / 2;
                            try {
                                return o.moveToPoint(e, n), o.collapse(!0), o
                            } catch (a) {}
                        }
                        return null
                    }(e, t, n)
                }
                return function(e, t) {
                    var n = e && e.parentElement ? e.parentElement() : null;
                    return Ge.isContentEditableFalse(function(e, t, n) {
                        for (; e && e !== t;) {
                            if (n(e)) return e;
                            e = e.parentNode
                        }
                        return null
                    }(n, t, fv)) ? null : e
                }(r, n.body)
            }
            return r
        },
        Wv = function(n, e) {
            return X(e, function(e) {
                var t = n.fire("GetSelectionRange", {
                    range: e
                });
                return t.range !== e ? t.range : e
            })
        },
        Kv = be("element", "width", "rows"),
        Xv = be("element", "cells"),
        Yv = be("x", "y"),
        Gv = function(e) {
            var o = Kv(ka(e), 0, []);
            return z(ma(e, "tr"), function(n, r) {
                z(ma(n, "td,th"), function(e, t) {
                    ! function(e, t, n, r, o) {
                        for (var i = hv(o, "rowspan"), a = hv(o, "colspan"), u = e.rows(), s = n; s < n + i; s++) {
                            u[s] || (u[s] = Xv(Ta(r), []));
                            for (var c = t; c < t + a; c++) {
                                u[s].cells()[c] = s === n && c === t ? o : ka(o)
                            }
                        }
                    }(o, function(e, t, n) {
                        for (; r = t, o = n, i = void 0, ((i = e.rows())[o] ? i[o].cells() : [])[r];) t++;
                        var r, o, i;
                        return t
                    }(o, t, r), r, n, e)
                })
            }), Kv(o.element(), mv(o.rows()), o.rows())
        },
        Jv = function(e) {
            return function(e, t) {
                var n = ka(e.element()),
                    r = yt.fromTag("tbody");
                return zi(r, t), Di(n, r), n
            }(e, function(e) {
                return X(e.rows(), function(e) {
                    var t = X(e.cells(), function(e) {
                            var t = Ta(e);
                            return pe(t, "colspan"), pe(t, "rowspan"), t
                        }),
                        n = ka(e.element());
                    return zi(n, t), n
                })
            }(e))
        },
        Qv = function(n, e, r) {
            return gv(n, e).bind(function(t) {
                return gv(n, r).map(function(e) {
                    return function(e, t, n) {
                        var r = t.x(),
                            o = t.y(),
                            i = n.x(),
                            a = n.y(),
                            u = o < a ? pv(e, r, o, i, a) : pv(e, r, a, i, o);
                        return Kv(e.element(), mv(u), u)
                    }(n, t, e)
                })
            })
        },
        Zv = vv,
        ey = function(e) {
            return v(e, function(e) {
                var t = Wa(e);
                return t ? [yt.fromDom(t)] : []
            })
        },
        ty = function(e) {
            return 1 < vv(e).length
        },
        ny = Cv,
        ry = function(e) {
            return Cv(Zv(e.selection.getSel()), yt.fromDom(e.getBody()))
        },
        oy = function(e, t) {
            var n = ny(t, e);
            return 0 < n.length ? Nv(e, n) : function(e, t) {
                return 0 < t.length && t[0].collapsed ? zv() : Ev(e, t[0])
            }(e, t)
        },
        iy = function(e, t) {
            if (void 0 === t && (t = {}), t.get = !0, t.format = t.format || "html", t.selection = !0, (t = e.fire("BeforeGetContent", t)).isDefaultPrevented()) return e.fire("GetContent", t), t.content;
            if ("text" === t.format) return function(r) {
                return k.from(r.selection.getRng()).map(function(e) {
                    var t = r.dom.add(r.getBody(), "div", {
                            "data-mce-bogus": "all",
                            style: "overflow: hidden; opacity: 0;"
                        }, e.cloneContents()),
                        n = lu(t.innerText);
                    return r.dom.remove(t), n
                }).getOr("")
            }(e);
            t.getInner = !0;
            var n = function(e, t) {
                var n, r = e.selection.getRng(),
                    o = e.dom.create("body"),
                    i = e.selection.getSel(),
                    a = Wv(e, Zv(i));
                return (n = t.contextual ? oy(yt.fromDom(e.getBody()), a).dom() : r.cloneContents()) && o.appendChild(n), e.selection.serializer.serialize(o, t)
            }(e, t);
            return "tree" === t.format ? n : (t.content = e.selection.isCollapsed() ? "" : n, e.fire("GetContent", t), t.content)
        },
        ay = function(e, t) {
            var n = t.collapsed,
                r = t.cloneRange(),
                o = Uu.fromRangeStart(t);
            return Rv(e, n, !0, r).each(function(e) {
                n && Uu.isAbove(o, e) || r.setStart(e.container(), e.offset())
            }), n || Rv(e, n, !1, r).each(function(e) {
                r.setEnd(e.container(), e.offset())
            }), n && r.collapse(!0), hh(t, r) ? k.none() : k.some(r)
        },
        uy = function(e, t, n) {
            if ((n = function(e, t) {
                    return (e = e || {
                        format: "html"
                    }).set = !0, e.selection = !0, e.content = t, e
                }(n, t)).no_events || !(n = e.fire("BeforeSetContent", n)).isDefaultPrevented()) {
                var r = e.selection.getRng();
                ! function(r, e) {
                    var t = k.from(e.firstChild).map(yt.fromDom),
                        n = k.from(e.lastChild).map(yt.fromDom);
                    r.deleteContents(), r.insertNode(e);
                    var o = t.bind(ke).filter(zt).bind(Dv),
                        i = n.bind(Te).filter(zt).bind(Dv);
                    Ya(o, t.filter(zt), function(e, t) {
                        ! function(e, t) {
                            e.insertData(0, t)
                        }(t.dom(), e.dom().data), _i(e)
                    }), Ya(i, n.filter(zt), function(e, t) {
                        var n = t.dom().length;
                        t.dom().appendData(e.dom().data), r.setEnd(t.dom(), n), _i(e)
                    }), r.collapse(!1)
                }(r, r.createContextualFragment(n.content)), e.selection.setRng(r), qv(e, r), n.no_events || e.fire("SetContent", n)
            } else e.fire("SetContent", n)
        };

    function sy(e) {
        return !!e.select
    }

    function cy(e) {
        return !(!e || !e.ownerDocument) && Bt(yt.fromDom(e.ownerDocument), yt.fromDom(e))
    }

    function ly(u, s, e, c) {
        function t(e, t) {
            return uy(c, e, t)
        }

        function r() {
            var e, t, n = d();
            return !(n && n.anchorNode && n.focusNode) || ((e = u.createRng()).setStart(n.anchorNode, n.anchorOffset), e.collapse(!0), (t = u.createRng()).setStart(n.focusNode, n.focusOffset), t.collapse(!0), e.compareBoundaryPoints(e.START_TO_START, t) <= 0)
        }
        var n, o, l, f, i = function p(i, n) {
                var a, u;
                return {
                    selectorChangedWithUnbind: function(e, t) {
                        return a || (a = {}, u = {}, n.on("NodeChange", function(e) {
                            var n = e.element,
                                r = i.getParents(n, null, i.getRoot()),
                                o = {};
                            Mn.each(a, function(e, n) {
                                Mn.each(r, function(t) {
                                    if (i.is(t, n)) return u[n] || (Mn.each(e, function(e) {
                                        e(!0, {
                                            node: t,
                                            selector: n,
                                            parents: r
                                        })
                                    }), u[n] = e), o[n] = e, !1
                                })
                            }), Mn.each(u, function(e, t) {
                                o[t] || (delete u[t], Mn.each(e, function(e) {
                                    e(!1, {
                                        node: n,
                                        selector: t,
                                        parents: r
                                    })
                                }))
                            })
                        })), a[e] || (a[e] = []), a[e].push(t), {
                            unbind: function() {
                                Pv(a, e, t), Pv(u, e, t)
                            }
                        }
                    }
                }
            }(u, c).selectorChangedWithUnbind,
            a = function(e) {
                var t = h();
                t.collapse(!!e), m(t)
            },
            d = function() {
                return s.getSelection ? s.getSelection() : s.document.selection
            },
            h = function() {
                function e(e, t, n) {
                    try {
                        return t.compareBoundaryPoints(e, n)
                    } catch (r) {
                        return -1
                    }
                }
                var t, n, r, o;
                if (!s) return null;
                if (null == (o = s.document)) return null;
                if (c.bookmark !== undefined && !1 === ud(c)) {
                    var i = Qf(c);
                    if (i.isSome()) return i.map(function(e) {
                        return Wv(c, [e])[0]
                    }).getOr(o.createRange())
                }
                try {
                    (t = d()) && !Ge.isRestrictedNode(t.anchorNode) && (n = 0 < t.rangeCount ? t.getRangeAt(0) : t.createRange ? t.createRange() : o.createRange())
                } catch (a) {}
                return (n = (n = Wv(c, [n])[0]) || (o.createRange ? o.createRange() : o.body.createTextRange())).setStart && 9 === n.startContainer.nodeType && n.collapsed && (r = u.getRoot(), n.setStart(r, 0), n.setEnd(r, 0)), l && f && (0 === e(n.START_TO_START, n, l) && 0 === e(n.END_TO_END, n, l) ? n = f : f = l = null), n
            },
            m = function(e, t) {
                var n, r;
                if (function(e) {
                        return !!e && (!!sy(e) || cy(e.startContainer) && cy(e.endContainer))
                    }(e)) {
                    var o = sy(e) ? e : null;
                    if (o) {
                        f = null;
                        try {
                            o.select()
                        } catch (i) {}
                    } else {
                        if (n = d(), e = c.fire("SetSelectionRange", {
                                range: e,
                                forward: t
                            }).range, n) {
                            f = e;
                            try {
                                n.removeAllRanges(), n.addRange(e)
                            } catch (i) {}!1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), l = 0 < n.rangeCount ? n.getRangeAt(0) : null
                        }
                        e.collapsed || e.startContainer !== e.endContainer || !n.setBaseAndExtent || Nn.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (r = e.startContainer.childNodes[e.startOffset]) && "IMG" === r.tagName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(r, 0, r, 1)), c.fire("AfterSetSelectionRange", {
                            range: e,
                            forward: t
                        })
                    }
                }
            },
            g = {
                bookmarkManager: null,
                controlSelection: null,
                dom: u,
                win: s,
                serializer: e,
                editor: c,
                collapse: a,
                setCursorLocation: function(e, t) {
                    var n = u.createRng();
                    e ? (n.setStart(e, t), n.setEnd(e, t), m(n), a(!1)) : (sh(u, n, c.getBody(), !0), m(n))
                },
                getContent: function(e) {
                    return iy(c, e)
                },
                setContent: t,
                getBookmark: function(e, t) {
                    return n.getBookmark(e, t)
                },
                moveToBookmark: function(e) {
                    return n.moveToBookmark(e)
                },
                select: function(e, t) {
                    return function(r, e, o) {
                        return k.from(e).map(function(e) {
                            var t = r.nodeIndex(e),
                                n = r.createRng();
                            return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (sh(r, n, e, !0), sh(r, n, e, !1)), n
                        })
                    }(u, e, t).each(m), e
                },
                isCollapsed: function() {
                    var e = h(),
                        t = d();
                    return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                },
                isForward: r,
                setNode: function(e) {
                    return t(u.getOuterHTML(e)), e
                },
                getNode: function() {
                    return function(e, t) {
                        var n, r, o, i, a;
                        return t ? (r = t.startContainer, o = t.endContainer, i = t.startOffset, a = t.endOffset, n = t.commonAncestorContainer, !t.collapsed && (r === o && a - i < 2 && r.hasChildNodes() && (n = r.childNodes[i]), 3 === r.nodeType && 3 === o.nodeType && (r = r.length === i ? Hv(r.nextSibling, !0) : r.parentNode, o = 0 === a ? Hv(o.previousSibling, !1) : o.parentNode, r && r === o)) ? r : n && 3 === n.nodeType ? n.parentNode : n) : e
                    }(c.getBody(), h())
                },
                getSel: d,
                setRng: m,
                getRng: h,
                getStart: function(e) {
                    return Bv(c.getBody(), h(), e)
                },
                getEnd: function(e) {
                    return Ov(c.getBody(), h(), e)
                },
                getSelectedBlocks: function(e, t) {
                    return function(e, t, n, r) {
                        var o, i, a = [];
                        if (i = e.getRoot(), n = e.getParent(n || Bv(i, t, t.collapsed), e.isBlock), r = e.getParent(r || Ov(i, t, t.collapsed), e.isBlock), n && n !== i && a.push(n), n && r && n !== r)
                            for (var u = new yi(o = n, i);
                                (o = u.next()) && o !== r;) e.isBlock(o) && a.push(o);
                        return r && n !== r && r !== i && a.push(r), a
                    }(u, h(), e, t)
                },
                normalize: function() {
                    var e = h(),
                        t = d();
                    if (ty(t) || !ch(c)) return e;
                    var n = ay(u, e);
                    return n.each(function(e) {
                        m(e, r())
                    }), n.getOr(e)
                },
                selectorChanged: function(e, t) {
                    return i(e, t), g
                },
                selectorChangedWithUnbind: i,
                getScrollContainer: function() {
                    for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName;) {
                        if (t.scrollHeight > t.clientHeight) {
                            e = t;
                            break
                        }
                        t = t.parentNode
                    }
                    return e
                },
                scrollIntoView: function(e, t) {
                    return jv(c, e, t)
                },
                placeCaretAt: function(e, t) {
                    return m($v(e, t, c.getDoc()))
                },
                getBoundingClientRect: function() {
                    var e = h();
                    return e.collapsed ? Ds.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
                },
                destroy: function() {
                    s = l = f = null, o.destroy()
                }
            };
        return n = Kp(g), o = Wp(g, c), g.bookmarkManager = n, g.controlSelection = o, g
    }

    function fy(e) {
        return Uy(e) && e.data[0] === cu
    }

    function dy(e) {
        return Uy(e) && e.data[e.data.length - 1] === cu
    }

    function hy(e) {
        return e.ownerDocument.createTextNode(cu)
    }

    function my(e, t) {
        return e ? function(e) {
            if (Uy(e.previousSibling)) return dy(e.previousSibling) || e.previousSibling.appendData(cu), e.previousSibling;
            if (Uy(e)) return fy(e) || e.insertData(0, cu), e;
            var t = hy(e);
            return e.parentNode.insertBefore(t, e), t
        }(t) : function(e) {
            if (Uy(e.nextSibling)) return fy(e.nextSibling) || e.nextSibling.insertData(0, cu), e.nextSibling;
            if (Uy(e)) return dy(e) || e.appendData(cu), e;
            var t = hy(e);
            return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t
        }(t)
    }

    function gy(e, t) {
        return Ge.isText(e.container()) ? my(t, e.container()) : my(t, e.getNode())
    }

    function py(e, t) {
        var n = t.get();
        return n && e.container() === n && Ra(n)
    }

    function vy(e, t) {
        if (!t) return t;
        var n = t.container(),
            r = t.offset();
        return e ? Ra(n) ? Ge.isText(n.nextSibling) ? Ds(n.nextSibling, 0) : Ds.after(n) : Ba(t) ? Ds(n, r + 1) : t : Ra(n) ? Ge.isText(n.previousSibling) ? Ds(n.previousSibling, n.previousSibling.data.length) : Ds.before(n) : Oa(t) ? Ds(n, r - 1) : t
    }

    function yy(e, t) {
        var n = bs(t, e);
        return n || e
    }

    function by(e, t, n) {
        var r = Ky.normalizeForwards(n),
            o = yy(t, r.container());
        return Ky.findRootInline(e, o, r).fold(function() {
            return Pc.nextPosition(o, r).bind(d(Ky.findRootInline, e, o)).map(function(e) {
                return Yy.before(e)
            })
        }, k.none)
    }

    function Cy(e, t) {
        return null === os(e, t)
    }

    function wy(e, t, n) {
        return Ky.findRootInline(e, t, n).filter(d(Cy, t))
    }

    function xy(e, t, n) {
        var r = Ky.normalizeBackwards(n);
        return wy(e, t, r).bind(function(e) {
            return Pc.prevPosition(e, r).isNone() ? k.some(Yy.start(e)) : k.none()
        })
    }

    function zy(e, t, n) {
        var r = Ky.normalizeForwards(n);
        return wy(e, t, r).bind(function(e) {
            return Pc.nextPosition(e, r).isNone() ? k.some(Yy.end(e)) : k.none()
        })
    }

    function Ey(e, t, n) {
        var r = Ky.normalizeBackwards(n),
            o = yy(t, r.container());
        return Ky.findRootInline(e, o, r).fold(function() {
            return Pc.prevPosition(o, r).bind(d(Ky.findRootInline, e, o)).map(function(e) {
                return Yy.after(e)
            })
        }, k.none)
    }

    function Ny(e) {
        return !1 === Ky.isRtl(Gy(e))
    }

    function Sy(e, t, n) {
        return Xy([by, xy, zy, Ey], [e, t, n]).filter(Ny)
    }

    function ky(e) {
        return e.fold($("before"), $("start"), $("end"), $("after"))
    }

    function Ty(e) {
        return e.fold(Yy.before, Yy.before, Yy.after, Yy.after)
    }

    function Ay(n, e, r, t, o, i) {
        return Ya(Ky.findRootInline(e, r, t), Ky.findRootInline(e, r, o), function(e, t) {
            return e !== t && Ky.hasSameParentBlock(r, e, t) ? Yy.after(n ? e : t) : i
        }).getOr(i)
    }

    function My(e, t) {
        return e.fold($(!0), function(e) {
            return ! function(e, t) {
                return ky(e) === ky(t) && Gy(e) === Gy(t)
            }(e, t)
        })
    }

    function Ry(e, t) {
        return e ? t.fold(q(k.some, Yy.start), k.none, q(k.some, Yy.after), k.none) : t.fold(k.none, q(k.some, Yy.before), k.none, q(k.some, Yy.end))
    }

    function Dy(e, t, n, r) {
        var o = Ky.normalizePosition(e, r),
            i = Sy(t, n, o);
        return Sy(t, n, o).bind(d(Ry, e)).orThunk(function() {
            return function(t, n, r, o, e) {
                var i = Ky.normalizePosition(t, e);
                return Pc.fromPosition(t, r, i).map(d(Ky.normalizePosition, t)).fold(function() {
                    return o.map(Ty)
                }, function(e) {
                    return Sy(n, r, e).map(d(Ay, t, n, r, i, e)).filter(d(My, o))
                }).filter(Ny)
            }(e, t, n, i, r)
        })
    }

    function _y(e) {
        return D(e.selection.getSel().modify)
    }

    function By(e, t, n) {
        var r = e ? 1 : -1;
        return t.setRng(Ds(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0
    }

    function Oy(e, t) {
        var n = e.dom.createRng();
        n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
    }

    function Hy(e) {
        return !1 !== e.settings.inline_boundaries
    }

    function Py(e, t) {
        e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
    }

    function Ly(t, e, n) {
        return $y(e, n).map(function(e) {
            return Oy(t, e), n
        })
    }

    function Vy(e, t, n) {
        return function() {
            return !!Hy(t) && tb(e, t)
        }
    }
    var Iy, Fy, Uy = Ge.isText,
        jy = d(my, !0),
        qy = d(my, !1),
        $y = function(n, e) {
            return e.fold(function(e) {
                qs.remove(n.get());
                var t = jy(e);
                return n.set(t), k.some(Ds(t, t.length - 1))
            }, function(e) {
                return Pc.firstPositionIn(e).map(function(e) {
                    if (py(e, n)) return Ds(n.get(), 1);
                    qs.remove(n.get());
                    var t = gy(e, !0);
                    return n.set(t), Ds(t, 1)
                })
            }, function(e) {
                return Pc.lastPositionIn(e).map(function(e) {
                    if (py(e, n)) return Ds(n.get(), n.get().length - 1);
                    qs.remove(n.get());
                    var t = gy(e, !1);
                    return n.set(t), Ds(t, t.length - 1)
                })
            }, function(e) {
                qs.remove(n.get());
                var t = qy(e);
                return n.set(t), k.some(Ds(t, 1))
            })
        },
        Wy = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        Ky = {
            isInlineTarget: function(e, t) {
                return we(yt.fromDom(t), If(e))
            },
            findRootInline: function(e, t, n) {
                var r = function(e, t, n) {
                    return y(Xi.DOM.getParents(n.container(), "*", t), e)
                }(e, t, n);
                return k.from(r[r.length - 1])
            },
            isRtl: function(e) {
                return "rtl" === Xi.DOM.getStyle(e, "direction", !0) || function(e) {
                    return Wy.test(e)
                }(e.textContent)
            },
            isAtZwsp: function(e) {
                return Ba(e) || Oa(e)
            },
            normalizePosition: vy,
            normalizeForwards: d(vy, !0),
            normalizeBackwards: d(vy, !1),
            hasSameParentBlock: function(e, t, n) {
                var r = bs(t, e),
                    o = bs(n, e);
                return r && r === o
            }
        },
        Xy = function(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r
            }
            return k.none()
        },
        Yy = jf([{
            before: ["element"]
        }, {
            start: ["element"]
        }, {
            end: ["element"]
        }, {
            after: ["element"]
        }]),
        Gy = function(e) {
            return e.fold(W, W, W, W)
        },
        Jy = Sy,
        Qy = Dy,
        Zy = (d(Dy, !1), d(Dy, !0), Ty),
        eb = function(e) {
            return e.fold(Yy.start, Yy.start, Yy.end, Yy.end)
        },
        tb = function(e, t) {
            var n = t.selection.getRng(),
                r = e ? Ds.fromRangeEnd(n) : Ds.fromRangeStart(n);
            return !!_y(t) && (e && Ba(r) ? By(!0, t.selection, r) : !(e || !Oa(r)) && By(!1, t.selection, r))
        },
        nb = {
            move: function(e, t, n) {
                return function() {
                    return !!Hy(e) && function(t, n, e) {
                        var r = t.getBody(),
                            o = Ds.fromRangeStart(t.selection.getRng()),
                            i = d(Ky.isInlineTarget, t);
                        return Qy(e, i, r, o).bind(function(e) {
                            return Ly(t, n, e)
                        })
                    }(e, t, n).isSome()
                }
            },
            moveNextWord: d(Vy, !0),
            movePrevWord: d(Vy, !1),
            setupSelectedState: function(t) {
                var n = Je(null),
                    r = d(Ky.isInlineTarget, t);
                return t.on("NodeChange", function(e) {
                    Hy(t) && (function(e, t, n) {
                        var r = y(t.select('*[data-mce-selected="inline-boundary"]'), e),
                            o = y(n, e);
                        z(x(r, o), d(Py, !1)), z(x(o, r), d(Py, !0))
                    }(r, t.dom, e.parents), function(e, t) {
                        if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
                            var n = Ds.fromRangeStart(e.selection.getRng());
                            Ds.isTextPosition(n) && !1 === Ky.isAtZwsp(n) && (Oy(e, qs.removeAndReposition(t.get(), n)), t.set(null))
                        }
                    }(t, n), function(n, r, o, e) {
                        if (r.selection.isCollapsed()) {
                            var t = y(e, n);
                            z(t, function(e) {
                                var t = Ds.fromRangeStart(r.selection.getRng());
                                Jy(n, r.getBody(), t).bind(function(e) {
                                    return Ly(r, o, e)
                                })
                            })
                        }
                    }(r, t, n, e.parents))
                }), n
            },
            setCaretPosition: Oy
        };
    (Fy = Iy = Iy || {})[Fy.Br = 0] = "Br", Fy[Fy.Block = 1] = "Block", Fy[Fy.Wrap = 2] = "Wrap", Fy[Fy.Eol = 3] = "Eol";

    function rb(e, t) {
        return e === Ms.Backwards ? t.reverse() : t
    }

    function ob(e, t, n, r) {
        for (var o, i, a, u, s, c, l = rc(n), f = r, d = []; f && (s = l, c = f, o = t === Ms.Forwards ? s.next(c) : s.prev(c));) {
            if (Ge.isBr(o.getNode(!1))) return t === Ms.Forwards ? {
                positions: rb(t, d).concat([o]),
                breakType: Iy.Br,
                breakAt: k.some(o)
            } : {
                positions: rb(t, d),
                breakType: Iy.Br,
                breakAt: k.some(o)
            };
            if (o.isVisible()) {
                if (e(f, o)) {
                    var h = (i = t, a = f, u = o, Ge.isBr(u.getNode(i === Ms.Forwards)) ? Iy.Br : !1 === Cs(a, u) ? Iy.Block : Iy.Wrap);
                    return {
                        positions: rb(t, d),
                        breakType: h,
                        breakAt: k.some(o)
                    }
                }
                d.push(o), f = o
            } else f = o
        }
        return {
            positions: rb(t, d),
            breakType: Iy.Eol,
            breakAt: k.none()
        }
    }

    function ib(n, r, o, e) {
        return r(o, e).breakAt.map(function(e) {
            var t = r(o, e).positions;
            return n === Ms.Backwards ? t.concat(e) : [e].concat(t)
        }).getOr([])
    }

    function ab(e, i) {
        return b(e, function(e, o) {
            return e.fold(function() {
                return k.some(o)
            }, function(r) {
                return Ya(E(r.getClientRects()), E(o.getClientRects()), function(e, t) {
                    var n = Math.abs(i - e.left);
                    return Math.abs(i - t.left) <= n ? o : r
                }).or(e)
            })
        }, k.none())
    }

    function ub(t, e) {
        return E(e.getClientRects()).bind(function(e) {
            return ab(t, e.left)
        })
    }

    function sb(e, t, n, r) {
        var o = e === Ms.Forwards,
            i = o ? Ph : Lh;
        if (!r.collapsed) {
            var a = bx(r);
            if (yx(a)) return Zh(e, t, a, e === Ms.Backwards, !0)
        }
        var u = function(e) {
                return Ma(e.startContainer)
            }(r),
            s = Ss(e, t.getBody(), r);
        if (i(s)) return em(t, s.getNode(!o));
        var c = Ky.normalizePosition(o, n(s));
        if (!c) return u ? r : null;
        if (i(c)) return Zh(e, t, c.getNode(!o), o, !0);
        var l = n(c);
        return l && i(l) && As(c, l) ? Zh(e, t, l.getNode(!o), o, !0) : u ? nm(t, c.toRange(), !0) : null
    }

    function cb(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d;
        if (d = bx(r), o = Ss(e, t.getBody(), r), i = n(t.getBody(), Ih(1), o), a = y(i, Fh(1)), s = kn.last(o.getClientRects()), (Ph(o) || Oh(o)) && (d = o.getNode()), (Lh(o) || Hh(o)) && (d = o.getNode(!0)), !s) return null;
        if (c = s.left, (u = $h(a, c)) && yx(u.node)) return l = Math.abs(c - u.left), f = Math.abs(c - u.right), Zh(e, t, u.node, l < f, !0);
        if (d) {
            var h = function(e, t, n, r) {
                function o(e) {
                    return kn.last(e.getClientRects())
                }
                var i, a, u, s, c, l, f = rc(t),
                    d = [],
                    h = 0;
                l = o(s = 1 === e ? (i = f.next, a = qa, u = ja, Ds.after(r)) : (i = f.prev, a = ja, u = qa, Ds.before(r)));
                do {
                    if (s.isVisible() && !u(c = o(s), l)) {
                        if (0 < d.length && a(c, kn.last(d)) && h++, (c = Ia(c)).position = s, c.line = h, n(c)) return d;
                        d.push(c)
                    }
                } while (s = i(s));
                return d
            }(e, t.getBody(), Ih(1), d);
            if (u = $h(y(h, Fh(1)), c)) return nm(t, u.position.toRange(), !0);
            if (u = kn.last(y(h, Fh(0)))) return nm(t, u.position.toRange(), !0)
        }
    }

    function lb(e, t, n) {
        var r, o, i = rc(e.getBody()),
            a = d(Ts, i.next),
            u = d(Ts, i.prev);
        if (n.collapsed && e.settings.forced_root_block) {
            if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
            (1 === t ? a(Ds.fromRangeStart(n)) : u(Ds.fromRangeStart(n))) || (o = function(e) {
                var t = e.dom.create(mf(e));
                return (!Nn.ie || 11 <= Nn.ie) && (t.innerHTML = '<br data-mce-bogus="1">'), t
            }(e), 1 === t ? e.$(r).after(o) : e.$(r).before(o), e.selection.select(o, !0), e.selection.collapse())
        }
    }

    function fb(t, n) {
        return function() {
            var e = function(e, t) {
                var n, r = rc(e.getBody()),
                    o = d(Ts, r.next),
                    i = d(Ts, r.prev),
                    a = t ? Ms.Forwards : Ms.Backwards,
                    u = t ? o : i,
                    s = e.selection.getRng();
                return (n = sb(a, e, u, s)) ? n : (n = lb(e, a, s)) || null
            }(t, n);
            return !!e && (t.selection.setRng(e), !0)
        }
    }

    function db(t, n) {
        return function() {
            var e = function(e, t) {
                var n, r = t ? 1 : -1,
                    o = t ? Xm : Km,
                    i = e.selection.getRng();
                return (n = cb(r, e, o, i)) ? n : (n = lb(e, r, i)) || null
            }(t, n);
            return !!e && (t.selection.setRng(e), !0)
        }
    }

    function hb(n, r) {
        return function() {
            var e = r ? Ds.fromRangeEnd(n.selection.getRng()) : Ds.fromRangeStart(n.selection.getRng()),
                t = r ? gx(n.getBody(), e) : mx(n.getBody(), e);
            return (r ? N(t.positions) : E(t.positions)).filter(function(t) {
                return function(e) {
                    return t ? Lh(e) : Ph(e)
                }
            }(r)).fold($(!1), function(e) {
                return n.selection.setRng(e.toRange()), !0
            })
        }
    }

    function mb(e, t, n, r, o) {
        var i = ma(yt.fromDom(n), "td,th,caption").map(function(e) {
            return e.dom()
        });
        return function(e, o, i) {
            return b(e, function(e, r) {
                return e.fold(function() {
                    return k.some(r)
                }, function(e) {
                    var t = Math.sqrt(Math.abs(e.x - o) + Math.abs(e.y - i)),
                        n = Math.sqrt(Math.abs(r.x - o) + Math.abs(r.y - i));
                    return k.some(n < t ? r : e)
                })
            }, k.none())
        }(y(function(n, e) {
            return v(e, function(e) {
                var t = function(e, t) {
                    return {
                        left: e.left - t,
                        top: e.top - t,
                        right: e.right + 2 * t,
                        bottom: e.bottom + 2 * t,
                        width: e.width + t,
                        height: e.height + t
                    }
                }(Ia(e.getBoundingClientRect()), -1);
                return [{
                    x: t.left,
                    y: n(t),
                    cell: e
                }, {
                    x: t.right,
                    y: n(t),
                    cell: e
                }]
            })
        }(e, i), function(e) {
            return t(e, o)
        }), r, o).map(function(e) {
            return e.cell
        })
    }

    function gb(t, n) {
        return E(n.getClientRects()).bind(function(e) {
            return Cx(t, e.left, e.top)
        }).bind(function(e) {
            return ub(function(t) {
                return Pc.lastPositionIn(t).map(function(e) {
                    return mx(t, e).positions.concat(e)
                }).getOr([])
            }(e), n)
        })
    }

    function pb(t, n) {
        return N(n.getClientRects()).bind(function(e) {
            return wx(t, e.left, e.top)
        }).bind(function(e) {
            return ub(function(t) {
                return Pc.firstPositionIn(t).map(function(e) {
                    return [e].concat(gx(t, e).positions)
                }).getOr([])
            }(e), n)
        })
    }

    function vb(e, t) {
        e.selection.setRng(t), qv(e, t)
    }

    function yb(e, t, n) {
        var r = e(t, n);
        return function(e) {
            return e.breakType === Iy.Wrap && 0 === e.positions.length
        }(r) || !Ge.isBr(n.getNode()) && function(e) {
            return e.breakType === Iy.Br && 1 === e.positions.length
        }(r) ? ! function(t, n, e) {
            return e.breakAt.map(function(e) {
                return t(n, e).breakAt.isSome()
            }).getOr(!1)
        }(e, t, r) : r.breakAt.isNone()
    }

    function bb(e, t, n, r) {
        var o = e.selection.getRng(),
            i = t ? 1 : -1;
        if (hs() && function(e, t, n) {
                var r = Ds.fromRangeStart(t);
                return Pc.positionIn(!e, n).map(function(e) {
                    return e.isEqual(r)
                }).getOr(!1)
            }(t, o, n)) {
            var a = Zh(i, e, n, !t, !0);
            return vb(e, a), !0
        }
        return !1
    }

    function Cb(e, t) {
        var n = t.getNode(e);
        return Ge.isElement(n) && "TABLE" === n.nodeName ? k.some(n) : k.none()
    }

    function wb(n, r, o) {
        var e = Cb(!!r, o),
            i = !1 === r;
        e.fold(function() {
            return vb(n, o.toRange())
        }, function(t) {
            return Pc.positionIn(i, n.getBody()).filter(function(e) {
                return e.isEqual(o)
            }).fold(function() {
                return vb(n, o.toRange())
            }, function(e) {
                return function(n, r, o, e) {
                    var i = mf(r);
                    i ? r.undoManager.transact(function() {
                        var e = yt.fromTag(i);
                        me(e, gf(r)), Di(e, yt.fromTag("br")), n ? wi(yt.fromDom(o), e) : Ci(yt.fromDom(o), e);
                        var t = r.dom.createRng();
                        t.setStart(e.dom(), 0), t.setEnd(e.dom(), 0), vb(r, t)
                    }) : vb(r, e.toRange())
                }(r, n, t, o)
            })
        })
    }

    function xb(e, t, n, r) {
        var o = e.selection.getRng(),
            i = Ds.fromRangeStart(o),
            a = e.getBody();
        if (!t && xx(r, i)) {
            var u = function(t, n, e) {
                return gb(n, e).orThunk(function() {
                    return E(e.getClientRects()).bind(function(e) {
                        return ab(px(t, Ds.before(n)), e.left)
                    })
                }).getOr(Ds.before(n))
            }(a, n, i);
            return wb(e, t, u), !0
        }
        if (t && zx(r, i)) {
            u = function(t, n, e) {
                return pb(n, e).orThunk(function() {
                    return E(e.getClientRects()).bind(function(e) {
                        return ab(vx(t, Ds.after(n)), e.left)
                    })
                }).getOr(Ds.after(n))
            }(a, n, i);
            return wb(e, t, u), !0
        }
        return !1
    }

    function zb(t, n) {
        return function() {
            return k.from(t.dom.getParent(t.selection.getNode(), "td,th")).bind(function(e) {
                return k.from(t.dom.getParent(e, "table")).map(function(e) {
                    return bb(t, n, e)
                })
            }).getOr(!1)
        }
    }

    function Eb(n, r) {
        return function() {
            return k.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function(t) {
                return k.from(n.dom.getParent(t, "table")).map(function(e) {
                    return xb(n, r, e, t)
                })
            }).getOr(!1)
        }
    }

    function Nb(e) {
        return h(["figcaption"], ie(e))
    }

    function Sb(e) {
        var t = j.document.createRange();
        return t.setStartBefore(e.dom()), t.setEndBefore(e.dom()), t
    }

    function kb(e, t, n) {
        n ? Di(e, t) : xi(e, t)
    }

    function Tb(e, t, n, r) {
        return "" === t ? function(e, t) {
            var n = yt.fromTag("br");
            return kb(e, n, t), Sb(n)
        }(e, r) : function(e, t, n, r) {
            var o = yt.fromTag(n),
                i = yt.fromTag("br");
            return me(o, r), Di(o, i), kb(e, o, t), Sb(i)
        }(e, r, t, n)
    }

    function Ab(e, t, n) {
        return t ? function(e, t) {
            return gx(e, t).breakAt.isNone()
        }(e.dom(), n) : function(e, t) {
            return mx(e, t).breakAt.isNone()
        }(e.dom(), n)
    }

    function Mb(t, n) {
        var r = yt.fromDom(t.getBody()),
            o = Ds.fromRangeStart(t.selection.getRng()),
            i = mf(t),
            a = gf(t);
        return function(e, t) {
            var n = d(ze, t);
            return ba(yt.fromDom(e.container()), Vn, n).filter(Nb)
        }(o, r).exists(function() {
            if (Ab(r, n, o)) {
                var e = Tb(r, i, a, n);
                return t.selection.setRng(e), !0
            }
            return !1
        })
    }

    function Rb(e, t) {
        return function() {
            return !!e.selection.isCollapsed() && Mb(e, t)
        }
    }

    function Db(e, t) {
        return v(function(e) {
            return X(e, function(e) {
                return bd({
                    shiftKey: !1,
                    altKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    keyCode: 0,
                    action: i
                }, e)
            })
        }(e), function(e) {
            return function(e, t) {
                return t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey
            }(e, t) ? [e] : []
        })
    }

    function _b(e, t) {
        return {
            from: $(e),
            to: $(t)
        }
    }

    function Bb(e, t) {
        var n = yt.fromDom(e),
            r = yt.fromDom(t.container());
        return kx(n, r).map(function(e) {
            return function(e, t) {
                return {
                    block: $(e),
                    position: $(t)
                }
            }(e, t)
        })
    }

    function Ob(t, n, e) {
        var r = Bb(t, Ds.fromRangeStart(e)),
            o = r.bind(function(e) {
                return Pc.fromPosition(n, t, e.position()).bind(function(e) {
                    return Bb(t, e).map(function(e) {
                        return function(t, n, r) {
                            return Ge.isBr(r.position().getNode()) && !1 === kg(r.block()) ? Pc.positionIn(!1, r.block().dom()).bind(function(e) {
                                return e.isEqual(r.position()) ? Pc.fromPosition(n, t, e).bind(function(e) {
                                    return Bb(t, e)
                                }) : k.some(r)
                            }).getOr(r) : r
                        }(t, n, e)
                    })
                })
            });
        return Ya(r, o, _b).filter(function(e) {
            return function(e) {
                return !1 === ze(e.from().block(), e.to().block())
            }(e) && function(e) {
                return Se(e.from().block()).bind(function(t) {
                    return Se(e.to().block()).filter(function(e) {
                        return ze(t, e)
                    })
                }).isSome()
            }(e) && function(e) {
                return !1 === Ge.isContentEditableFalse(e.from().block().dom()) && !1 === Ge.isContentEditableFalse(e.to().block().dom())
            }(e)
        })
    }

    function Hb(e) {
        var t = function(e) {
            var t = Re(e);
            return p(t, Vn).fold(function() {
                return t
            }, function(e) {
                return t.slice(0, e)
            })
        }(e);
        return z(t, _i), t
    }

    function Pb(e, t) {
        var n = fh(t, e);
        return g(n.reverse(), kg).each(_i)
    }

    function Lb(e, t, n, r) {
        if (kg(n)) return bg(n), Pc.firstPositionIn(n.dom());
        (function(e) {
            return 0 === y(Ae(e), function(e) {
                return !kg(e)
            }).length
        })(r) && kg(t) && Ci(r, yt.fromTag("br"));
        var o = Pc.prevPosition(n.dom(), Ds.before(r.dom()));
        return z(Hb(t), function(e) {
            Ci(r, e)
        }), Pb(e, t), o
    }

    function Vb(e, t, n) {
        if (kg(n)) return _i(n), kg(t) && bg(t), Pc.firstPositionIn(t.dom());
        var r = Pc.lastPositionIn(n.dom());
        return z(Hb(t), function(e) {
            Di(n, e)
        }), Pb(e, t), r
    }

    function Ib(e, t) {
        return Bt(t, e) ? function(e, t) {
            var n = fh(t, e);
            return k.from(n[n.length - 1])
        }(t, e) : k.none()
    }

    function Fb(e, t) {
        Pc.positionIn(e, t.dom()).map(function(e) {
            return e.getNode()
        }).map(yt.fromDom).filter(_n).each(_i)
    }

    function Ub(e, t, n) {
        return Fb(!0, t), Fb(!1, n), Ib(t, n).fold(d(Vb, e, t, n), d(Lb, e, t, n))
    }

    function jb(e, t) {
        var n = yt.fromDom(t),
            r = d(ze, e);
        return ya(n, $n, r).isSome()
    }

    function qb(e, t) {
        var n = Pc.prevPosition(e.dom(), Ds.fromRangeStart(t)).isNone(),
            r = Pc.nextPosition(e.dom(), Ds.fromRangeEnd(t)).isNone();
        return ! function(e, t) {
            return jb(e, t.startContainer) || jb(e, t.endContainer)
        }(e, t) && n && r
    }

    function $b(e) {
        var t = yt.fromDom(e.getBody()),
            n = e.selection.getRng();
        return qb(t, n) ? function(e) {
            return e.setContent(""), e.selection.setCursorLocation(), !0
        }(e) : function(n, r) {
            var o = r.getRng();
            return Ya(kx(n, yt.fromDom(o.startContainer)), kx(n, yt.fromDom(o.endContainer)), function(e, t) {
                return !1 === ze(e, t) && (o.deleteContents(), Rx(n, !0, e, t).each(function(e) {
                    r.setRng(e.toRange())
                }), !0)
            }).getOr(!1)
        }(t, e.selection)
    }

    function Wb(e) {
        return ks(e).exists(_n)
    }

    function Kb(e, t, n) {
        var r = y(fh(yt.fromDom(n.container()), t), Vn),
            o = E(r).getOr(t);
        return Pc.fromPosition(e, o.dom(), n).filter(Wb)
    }

    function Xb(e, t) {
        return ks(t).exists(_n) || Kb(!0, e, t).isSome()
    }

    function Yb(e, t) {
        return function(e) {
            return k.from(e.getNode(!0)).map(yt.fromDom)
        }(t).exists(_n) || Kb(!1, e, t).isSome()
    }

    function Gb(e, t, n, r) {
        var o = r.getNode(!1 === t);
        return kx(yt.fromDom(e), yt.fromDom(n.getNode())).map(function(e) {
            return kg(e) ? Hx.remove(e.dom()) : Hx.moveToElement(o)
        }).orThunk(function() {
            return k.some(Hx.moveToElement(o))
        })
    }

    function Jb(t, n, r) {
        return Pc.fromPosition(n, t, r).bind(function(e) {
            return function(e) {
                return $n(yt.fromDom(e)) || Un(yt.fromDom(e))
            }(e.getNode()) ? k.none() : function(t, e, n, r) {
                function o(e) {
                    return Dn(yt.fromDom(e)) && !Cs(n, r, t)
                }
                return Ns(!e, n).fold(function() {
                    return Ns(e, r).fold($(!1), o)
                }, o)
            }(t, n, r, e) ? k.none() : n && Ge.isContentEditableFalse(e.getNode()) ? Gb(t, n, r, e) : !1 === n && Ge.isContentEditableFalse(e.getNode(!0)) ? Gb(t, n, r, e) : n && Lh(r) ? k.some(Hx.moveToPosition(e)) : !1 === n && Ph(r) ? k.some(Hx.moveToPosition(e)) : k.none()
        })
    }

    function Qb(t, e, n) {
        return function(e, t) {
            var n = t.getNode(!1 === e),
                r = e ? "after" : "before";
            return Ge.isElement(n) && n.getAttribute("data-mce-caret") === r
        }(e, n) ? function(e, t) {
            return e && Ge.isContentEditableFalse(t.nextSibling) ? k.some(Hx.moveToElement(t.nextSibling)) : !1 === e && Ge.isContentEditableFalse(t.previousSibling) ? k.some(Hx.moveToElement(t.previousSibling)) : k.none()
        }(e, n.getNode(!1 === e)).fold(function() {
            return Jb(t, e, n)
        }, k.some) : Jb(t, e, n).bind(function(e) {
            return function(t, n, e) {
                return e.fold(function(e) {
                    return k.some(Hx.remove(e))
                }, function(e) {
                    return k.some(Hx.moveToElement(e))
                }, function(e) {
                    return Cs(n, e, t) ? k.none() : k.some(Hx.moveToPosition(e))
                })
            }(t, n, e)
        })
    }

    function Zb(e, t) {
        return k.from(Px(e.getBody(), t))
    }

    function eC(t, n) {
        var e = t.selection.getNode();
        return Zb(t, e).filter(Ge.isContentEditableFalse).fold(function() {
            return function(e, t, n) {
                var r = Es(t ? 1 : -1, e, n),
                    o = Ds.fromRangeStart(r),
                    i = yt.fromDom(e);
                return !1 === t && Lh(o) ? k.some(Hx.remove(o.getNode(!0))) : t && Ph(o) ? k.some(Hx.remove(o.getNode())) : !1 === t && Ph(o) && Yb(i, o) ? Bx(i, o).map(function(e) {
                    return Hx.remove(e.getNode())
                }) : t && Lh(o) && Xb(i, o) ? Ox(i, o).map(function(e) {
                    return Hx.remove(e.getNode())
                }) : Qb(e, t, o)
            }(t.getBody(), n, t.selection.getRng()).map(function(e) {
                return e.fold(function(t, n) {
                    return function(e) {
                        return t._selectionOverrides.hideFakeCaret(), Tg(t, n, yt.fromDom(e)), !0
                    }
                }(t, n), function(n, r) {
                    return function(e) {
                        var t = r ? Ds.before(e) : Ds.after(e);
                        return n.selection.setRng(t.toRange()), !0
                    }
                }(t, n), function(t) {
                    return function(e) {
                        return t.selection.setRng(e.toRange()), !0
                    }
                }(t))
            }).getOr(!1)
        }, function() {
            return !0
        })
    }

    function tC(e, t) {
        var n = e.selection.getNode();
        return !!Ge.isContentEditableFalse(n) && Zb(e, n.parentNode).filter(Ge.isContentEditableFalse).fold(function() {
            return function(e) {
                z(ma(e, ".mce-offscreen-selection"), _i)
            }(yt.fromDom(e.getBody())), Tg(e, t, yt.fromDom(e.selection.getNode())), Tx(e), !0
        }, function() {
            return !0
        })
    }

    function nC(e, t, n, r, o, i) {
        var a = Zh(r, e, i.getNode(!o), o, !0);
        if (t.collapsed) {
            var u = t.cloneRange();
            o ? u.setEnd(a.startContainer, a.startOffset) : u.setStart(a.endContainer, a.endOffset), u.deleteContents()
        } else t.deleteContents();
        return e.selection.setRng(a),
            function(e, t) {
                Ge.isText(t) && 0 === t.data.length && e.remove(t)
            }(e.dom, n), !0
    }

    function rC(t, n) {
        return function(e) {
            return $y(n, e).map(function(e) {
                return nb.setCaretPosition(t, e), !0
            }).getOr(!1)
        }
    }

    function oC(e, t, n, r) {
        var o = e.getBody(),
            i = d(Ky.isInlineTarget, e);
        e.undoManager.ignore(function() {
            e.selection.setRng(function(e, t) {
                var n = j.document.createRange();
                return n.setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n
            }(n, r)), e.execCommand("Delete"), Jy(i, o, Ds.fromRangeStart(e.selection.getRng())).map(eb).map(rC(e, t))
        }), e.nodeChanged()
    }

    function iC(n, r, o, i) {
        var a = function(e, t) {
                var n = bs(t, e);
                return n || e
            }(n.getBody(), i.container()),
            u = d(Ky.isInlineTarget, n),
            s = Jy(u, a, i);
        return s.bind(function(e) {
            return o ? e.fold($(k.some(eb(e))), k.none, $(k.some(Zy(e))), k.none) : e.fold(k.none, $(k.some(Zy(e))), k.none, $(k.some(eb(e))))
        }).map(rC(n, r)).getOrThunk(function() {
            var t = Pc.navigate(o, a, i),
                e = t.bind(function(e) {
                    return Jy(u, a, e)
                });
            return s.isSome() && e.isSome() ? Ky.findRootInline(u, a, i).map(function(e) {
                return !! function(o) {
                    return Ya(Pc.firstPositionIn(o), Pc.lastPositionIn(o), function(e, t) {
                        var n = Ky.normalizePosition(!0, e),
                            r = Ky.normalizePosition(!1, t);
                        return Pc.nextPosition(o, n).map(function(e) {
                            return e.isEqual(r)
                        }).getOr(!0)
                    }).getOr(!0)
                }(e) && (Tg(n, o, yt.fromDom(e)), !0)
            }).getOr(!1) : e.bind(function(e) {
                return t.map(function(e) {
                    return o ? oC(n, r, i, e) : oC(n, r, e, i), !0
                })
            }).getOr(!1)
        })
    }

    function aC(e) {
        return 1 === Re(e).length
    }

    function uC(e, t, n, r) {
        var o = d(qm, t),
            i = X(y(r, o), function(e) {
                return e.dom()
            });
        if (0 === i.length) Tg(t, e, n);
        else {
            var a = function(e, t) {
                var n = Pm(!1),
                    r = Um(t, n.dom());
                return Ci(yt.fromDom(e), n), _i(yt.fromDom(e)), Ds(r, 0)
            }(n.dom(), i);
            t.selection.setRng(a.toRange())
        }
    }

    function sC(n, r) {
        var e = yt.fromDom(n.getBody()),
            t = yt.fromDom(n.selection.getStart()),
            o = y(function(e, t) {
                var n = fh(t, e);
                return p(n, Vn).fold($(n), function(e) {
                    return n.slice(0, e)
                })
            }(e, t), aC);
        return N(o).map(function(e) {
            var t = Ds.fromRangeStart(n.selection.getRng());
            return !(!Ax(r, t, e.dom()) || function(e) {
                return rs(e.dom()) && Om(e.dom())
            }(e)) && (uC(r, n, e, o), !0)
        }).getOr(!1)
    }

    function cC(e, t) {
        return {
            start: $(e),
            end: $(t)
        }
    }

    function lC(e, t) {
        return xa(yt.fromDom(e), "td,th", t)
    }

    function fC(e, t) {
        return Ca(e, "table", t)
    }

    function dC(e) {
        return !1 === ze(e.start(), e.end())
    }

    function hC(e, n) {
        return fC(e.start(), n).bind(function(t) {
            return fC(e.end(), n).bind(function(e) {
                return function(e, t) {
                    return e ? k.some(t) : k.none()
                }(ze(t, e), t)
            })
        })
    }

    function mC(e) {
        return ma(e, "td,th")
    }

    function gC(n, e) {
        var t = lC(e.startContainer, n),
            r = lC(e.endContainer, n);
        return e.collapsed ? k.none() : Ya(t, r, cC).fold(function() {
            return t.fold(function() {
                return r.bind(function(t) {
                    return fC(t, n).bind(function(e) {
                        return E(mC(e)).map(function(e) {
                            return cC(e, t)
                        })
                    })
                })
            }, function(t) {
                return fC(t, n).bind(function(e) {
                    return N(mC(e)).map(function(e) {
                        return cC(t, e)
                    })
                })
            })
        }, function(e) {
            return qx(n, e) ? k.none() : function(t, e) {
                return fC(t.start(), e).bind(function(e) {
                    return N(mC(e)).map(function(e) {
                        return cC(t.start(), e)
                    })
                })
            }(e, n)
        })
    }

    function pC(t, e) {
        return hC(t, e).map(function(e) {
            return function(e, t, n) {
                return {
                    rng: $(e),
                    table: $(t),
                    cells: $(n)
                }
            }(t, e, mC(e))
        })
    }

    function vC(e, t) {
        var n = function(t) {
            return function(e) {
                return ze(t, e)
            }
        }(e);
        return function(e, t) {
            var n = lC(e.startContainer, t),
                r = lC(e.endContainer, t);
            return Ya(n, r, cC).filter(dC).filter(function(e) {
                return qx(t, e)
            }).orThunk(function() {
                return gC(t, e)
            })
        }(t, n).bind(function(e) {
            return pC(e, n)
        })
    }

    function yC(e, t) {
        return p(e, function(e) {
            return ze(e, t)
        })
    }

    function bC(n) {
        return function(n) {
            return Ya(yC(n.cells(), n.rng().start()), yC(n.cells(), n.rng().end()), function(e, t) {
                return n.cells().slice(e, t + 1)
            })
        }(n).map(function(e) {
            var t = n.cells();
            return e.length === t.length ? jx.removeTable(n.table()) : jx.emptyCells(e)
        })
    }

    function CC(e, t) {
        return z(t, bg), e.selection.setCursorLocation(t[0].dom(), 0), !0
    }

    function wC(e, t) {
        return Tg(e, !1, t), !0
    }

    function xC(t, e, n) {
        return function(e, t) {
            return vC(e, t).bind(bC)
        }(e, n).map(function(e) {
            return e.fold(d(wC, t), d(CC, t))
        })
    }

    function zC(t, e, n, r) {
        return $x(e, r).fold(function() {
            return xC(t, e, n)
        }, function(e) {
            return function(e, t) {
                return Wx(e, t)
            }(t, e)
        }).getOr(!1)
    }

    function EC(e, t) {
        return g(fh(t, e), $n)
    }

    function NC(t, n, r, o, i) {
        return Pc.navigate(r, t.getBody(), i).bind(function(e) {
            return function(e, n, r, o) {
                return Pc.firstPositionIn(e.dom()).bind(function(t) {
                    return Pc.lastPositionIn(e.dom()).map(function(e) {
                        return n ? r.isEqual(t) && o.isEqual(e) : r.isEqual(e) && o.isEqual(t)
                    })
                }).getOr(!0)
            }(o, r, i, e) ? function(e, t) {
                return Wx(e, t)
            }(t, o) : function(e, t, n) {
                return $x(e, yt.fromDom(n.getNode())).map(function(e) {
                    return !1 === ze(e, t)
                })
            }(n, o, e)
        }).or(k.some(!0))
    }

    function SC(t, n, r, e) {
        var o = Ds.fromRangeStart(t.selection.getRng());
        return EC(r, e).bind(function(e) {
            return kg(e) ? Wx(t, e) : function(e, t, n, r, o) {
                return Pc.navigate(n, e.getBody(), o).bind(function(e) {
                    return EC(t, yt.fromDom(e.getNode())).map(function(e) {
                        return !1 === ze(e, r)
                    })
                })
            }(t, r, n, e, o)
        }).getOr(!1)
    }

    function kC(e, t) {
        return e ? Oh(t) : Hh(t)
    }

    function TC(t, n, e) {
        var r = yt.fromDom(t.getBody());
        return $x(r, e).fold(function() {
            return SC(t, n, r, e) || function(e, t) {
                var n = Ds.fromRangeStart(e.selection.getRng());
                return kC(t, n) || Pc.fromPosition(t, e.getBody(), n).map(function(e) {
                    return kC(t, e)
                }).getOr(!1)
            }(t, n)
        }, function(e) {
            return function(e, t, n, r) {
                var o = Ds.fromRangeStart(e.selection.getRng());
                return kg(r) ? Wx(e, r) : NC(e, n, t, r, o)
            }(t, n, r, e).getOr(!1)
        })
    }

    function AC(e) {
        var t = parseInt(e, 10);
        return isNaN(t) ? 0 : t
    }

    function MC(e, t) {
        return (e || function(e) {
            return "table" === ie(e)
        }(t) ? "margin" : "padding") + ("rtl" === ve(t, "direction") ? "-right" : "-left")
    }

    function RC(e) {
        var t = Yx(e);
        return !0 !== e.readonly && (1 < t.length || function(r, e) {
            return w(e, function(e) {
                var t = MC(Hf(r), e),
                    n = ye(e, t).map(AC).getOr(0);
                return "false" !== r.dom.getContentEditable(e.dom()) && 0 < n
            })
        }(e, t))
    }

    function DC(e) {
        return Fn(e) || Un(e)
    }

    function _C(e, t) {
        var n = e.dom,
            r = e.selection,
            o = e.formatter,
            i = Pf(e),
            a = /[a-z%]+$/i.exec(i)[0],
            u = parseInt(i, 10),
            s = Hf(e),
            c = mf(e);
        e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || "" !== c || n.getParent(r.getNode(), n.isBlock) || o.apply("div"), z(Yx(e), function(e) {
            ! function(e, t, n, r, o, i) {
                var a = MC(n, yt.fromDom(i));
                if ("outdent" === t) {
                    var u = Math.max(0, AC(i.style[a]) - r);
                    e.setStyle(i, a, u ? u + o : "")
                } else {
                    u = AC(i.style[a]) + r + o;
                    e.setStyle(i, a, u)
                }
            }(n, t, s, u, a, e.dom())
        })
    }

    function BC(e, t, n) {
        return Pc.navigateIgnore(e, t, n, wh)
    }

    function OC(e, t) {
        return g(fh(yt.fromDom(t.container()), e), Vn)
    }

    function HC(e, n, r) {
        return BC(e, n.dom(), r).forall(function(t) {
            return OC(n, r).fold(function() {
                return !1 === Cs(t, r, n.dom())
            }, function(e) {
                return !1 === Cs(t, r, n.dom()) && Bt(e, yt.fromDom(t.container()))
            })
        })
    }

    function PC(t, n, r) {
        return OC(n, r).fold(function() {
            return BC(t, n.dom(), r).forall(function(e) {
                return !1 === Cs(e, r, n.dom())
            })
        }, function(e) {
            return BC(t, e.dom(), r).isNone()
        })
    }

    function LC(e) {
        return k.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock))
    }

    function VC(e, t) {
        return e && e.parentNode && e.parentNode.nodeName === t
    }

    function IC(e) {
        return e && /^(OL|UL|LI)$/.test(e.nodeName)
    }

    function FC(e) {
        var t = e.parentNode;
        return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e
    }

    function UC(e, t, n) {
        for (var r = e[n ? "firstChild" : "lastChild"]; r && !Ge.isElement(r);) r = r[n ? "nextSibling" : "previousSibling"];
        return r === t
    }

    function jC(e) {
        e.innerHTML = '<br data-mce-bogus="1">'
    }

    function qC(e, t) {
        return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t
    }

    function $C(e, t) {
        return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t)
    }

    function WC(e, t, n) {
        return !1 === Ge.isText(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === cu ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === cu ? t.data.length : n
    }

    function KC(e, t) {
        var n, r, o = e.getRoot();
        for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
        return n !== o ? r : o
    }

    function XC(e, t) {
        var n = mf(e);
        n && n.toLowerCase() === t.tagName.toLowerCase() && e.dom.setAttribs(t, gf(e))
    }

    function YC(e, t, n) {
        var r = e.create("span", {}, "&nbsp;");
        n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r)
    }

    function GC(e, t, n, r) {
        var o = e.createRng();
        r ? (o.setStartBefore(n), o.setEndBefore(n)) : (o.setStartAfter(n), o.setEndAfter(n)), t.setRng(o)
    }

    function JC(e, t) {
        var n, r, o = e.selection,
            i = e.dom,
            a = o.getRng();
        ay(i, a).each(function(e) {
            a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset)
        });
        var u = a.startOffset,
            s = a.startContainer;
        if (1 === s.nodeType && s.hasChildNodes()) {
            var c = u > s.childNodes.length - 1;
            s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s, u = c && 3 === s.nodeType ? s.nodeValue.length : 0
        }
        var l = i.getParent(s, i.isBlock),
            f = l ? i.getParent(l.parentNode, i.isBlock) : null,
            d = f ? f.nodeName.toUpperCase() : "",
            h = !(!t || !t.ctrlKey);
        "LI" !== d || h || (l = f), s && 3 === s.nodeType && u >= s.nodeValue.length && ! function(e, t, n) {
            for (var r, o = new yi(t, n), i = e.getNonEmptyElements(); r = o.next();)
                if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0
        }(e.schema, s, l) && (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0), n = i.create("br"), Xu(i, a, n), YC(i, o, n), GC(i, o, n, r), e.undoManager.add()
    }

    function QC(e, t) {
        var n = yt.fromTag("br");
        Ci(yt.fromDom(t), n), e.undoManager.add()
    }

    function ZC(e, t) {
        cz(e.getBody(), t) || wi(yt.fromDom(t), yt.fromTag("br"));
        var n = yt.fromTag("br");
        wi(yt.fromDom(t), n), YC(e.dom, e.selection, n.dom()), GC(e.dom, e.selection, n.dom(), !1), e.undoManager.add()
    }

    function ew(e) {
        return e && "A" === e.nodeName && "href" in e
    }

    function tw(e) {
        return e.fold($(!1), ew, ew, $(!1))
    }

    function nw(e, t) {
        t.fold(i, d(QC, e), d(ZC, e), i)
    }

    function rw(e, t) {
        return oz(e).filter(function(e) {
            return 0 < t.length && we(yt.fromDom(e), t)
        }).isSome()
    }

    function ow(e, t) {
        return dz(e)
    }

    function iw(n) {
        return function(e, t) {
            return "" === mf(e) === n
        }
    }

    function aw(n) {
        return function(e, t) {
            return az(e) === n
        }
    }

    function uw(n, r) {
        return function(e, t) {
            return iz(e) === n.toUpperCase() === r
        }
    }

    function sw(e) {
        return uw("pre", e)
    }

    function cw(n) {
        return function(e, t) {
            return hf(e) === n
        }
    }

    function lw(e, t) {
        return fz(e)
    }

    function fw(e, t) {
        return t
    }

    function dw(e) {
        var t = mf(e),
            n = rz(e.dom, e.selection.getStart());
        return n && e.schema.isValidChild(n.nodeName, t || "P")
    }

    function hw(e, t) {
        return function(n, r) {
            return b(e, function(e, t) {
                return e && t(n, r)
            }, !0) ? k.some(t) : k.none()
        }
    }

    function mw(n, r) {
        var e = r.container(),
            t = r.offset();
        return Ge.isText(e) ? (e.insertData(t, n), k.some(Uu(e, t + n.length))) : ks(r).map(function(e) {
            var t = yt.fromText(n);
            return r.isAtEnd() ? wi(e, t) : Ci(e, t), Uu(t.dom(), n.length)
        })
    }

    function gw(e) {
        return Uu.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd()
    }

    function pw(e, t) {
        var n = y(fh(yt.fromDom(t.container()), e), Vn);
        return E(n).getOr(e)
    }

    function vw(e, t) {
        return gw(t) ? Dh(t) : Dh(t) || Pc.prevPosition(pw(e, t).dom(), t).exists(Dh)
    }

    function yw(e, t) {
        return gw(t) ? Rh(t) : Rh(t) || Pc.nextPosition(pw(e, t).dom(), t).exists(Rh)
    }

    function bw(e) {
        return ks(e).bind(function(e) {
            return ba(e, xt)
        }).exists(function(e) {
            return function(e) {
                return h(["pre", "pre-wrap"], e)
            }(ve(e, "white-space"))
        })
    }

    function Cw(e, t) {
        return function(e, t) {
            return Pc.prevPosition(e.dom(), t).isNone()
        }(e, t) || function(e, t) {
            return Pc.nextPosition(e.dom(), t).isNone()
        }(e, t) || Gx(e, t) || Jx(e, t) || Yb(e, t) || Xb(e, t)
    }

    function ww(e, t) {
        var n = function(e) {
            var t = e.container(),
                n = e.offset();
            return Ge.isText(t) && n < t.data.length ? Uu(t, n + 1) : e
        }(t);
        return !bw(n) && (Jx(e, n) || Zx(e, n) || Xb(e, n) || yw(e, n))
    }

    function xw(e, t) {
        return function(e, t) {
            return !bw(t) && (Gx(e, t) || Qx(e, t) || Yb(e, t) || vw(e, t))
        }(e, t) || ww(e, t)
    }

    function zw(e, t) {
        return Mh(e.charAt(t))
    }

    function Ew(e) {
        var t = e.container();
        return Ge.isText(t) && Z(t.data, "\xa0")
    }

    function Nw(e) {
        var t = e.data,
            n = function(e) {
                var n = e.split("");
                return X(n, function(e, t) {
                    return Mh(e) && 0 < t && t < n.length - 1 && bh(n[t - 1]) && bh(n[t + 1]) ? " " : e
                }).join("")
            }(t);
        return n !== t && (e.data = n, !0)
    }

    function Sw(n, e) {
        return k.some(e).filter(Ew).bind(function(e) {
            var t = e.container();
            return function(e, t) {
                var n = t.data,
                    r = Uu(t, 0);
                return !(!zw(n, 0) || xw(e, r)) && (t.data = " " + n.slice(1), !0)
            }(n, t) || Nw(t) || function(e, t) {
                var n = t.data,
                    r = Uu(t, n.length - 1);
                return !(!zw(n, n.length - 1) || xw(e, r)) && (t.data = n.slice(0, -1) + " ", !0)
            }(n, t) ? k.some(e) : k.none()
        })
    }

    function kw(t) {
        var e = yt.fromDom(t.getBody());
        t.selection.isCollapsed() && Sw(e, Uu.fromRangeStart(t.selection.getRng())).each(function(e) {
            t.selection.setRng(e.toRange())
        })
    }

    function Tw(t, n) {
        return function(e) {
            return function(e, t) {
                return !bw(t) && (Cw(e, t) || vw(e, t) || yw(e, t))
            }(t, e) ? vz(n) : yz(n)
        }
    }

    function Aw(e) {
        var t = Ds.fromRangeStart(e.selection.getRng()),
            n = yt.fromDom(e.getBody());
        if (e.selection.isCollapsed()) {
            var r = d(Ky.isInlineTarget, e),
                o = Ds.fromRangeStart(e.selection.getRng());
            return Jy(r, e.getBody(), o).bind(function(t) {
                return function(e) {
                    return e.fold(function(e) {
                        return Pc.prevPosition(t.dom(), Ds.before(e))
                    }, function(e) {
                        return Pc.firstPositionIn(e)
                    }, function(e) {
                        return Pc.lastPositionIn(e)
                    }, function(e) {
                        return Pc.nextPosition(t.dom(), Ds.after(e))
                    })
                }
            }(n)).bind(Tw(n, t)).exists(function(t) {
                return function(e) {
                    return t.selection.setRng(e.toRange()), t.nodeChanged(), !0
                }
            }(e))
        }
        return !1
    }

    function Mw(e, t) {
        t.hasAttribute("data-mce-caret") && (Pa(t), function(e) {
            e.selection.setRng(e.selection.getRng())
        }(e), e.selection.scrollIntoView(t))
    }

    function Rw(e, t) {
        var n = function(e) {
            return wa(yt.fromDom(e.getBody()), "*[data-mce-caret]").fold($(null), function(e) {
                return e.dom()
            })
        }(e);
        if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void Mw(e, n)) : void(_a(n) && (Mw(e, n), e.undoManager.add()))
    }

    function Dw(t) {
        ! function(e) {
            var t = aa(function() {
                e.composing || kw(e)
            }, 0);
            wz.isIE() && (e.on("keypress", function(e) {
                t.throttle()
            }), e.on("remove", function(e) {
                t.cancel()
            }))
        }(t), t.on("input", function(e) {
            !1 === e.isComposing && kw(t)
        })
    }

    function _w(a) {
        function e(e, t) {
            try {
                a.getDoc().execCommand(e, !1, t)
            } catch (n) {}
        }

        function u(e) {
            return e.isDefaultPrevented()
        }

        function t() {
            a.shortcuts.add("meta+a", null, "SelectAll")
        }

        function n() {
            a.on("keydown", function(e) {
                if (!u(e) && e.keyCode === i && l.isCollapsed() && 0 === l.getRng().startOffset) {
                    var t = l.getNode().previousSibling;
                    if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                }
            })
        }

        function r() {
            a.inline || (a.contentStyles.push("body {min-height: 150px}"), a.on("click", function(e) {
                var t;
                if ("HTML" === e.target.nodeName) {
                    if (11 < Nn.ie) return void a.getBody().focus();
                    t = a.selection.getRng(), a.getBody().focus(), a.selection.setRng(t), a.selection.normalize(), a.nodeChanged()
                }
            }))
        }
        var o = Mn.each,
            i = Ah.BACKSPACE,
            s = Ah.DELETE,
            c = a.dom,
            l = a.selection,
            f = a.settings,
            d = a.parser,
            h = Nn.gecko,
            m = Nn.ie,
            g = Nn.webkit,
            p = "data:text/mce-internal,",
            v = m ? "Text" : "URL";

        function y(e) {
            var t = c.create("body"),
                n = e.cloneContents();
            return t.appendChild(n), l.serializer.serialize(t, {
                format: "html"
            })
        }

        function b() {
            var e = c.getAttribs(l.getStart().cloneNode(!1));
            return function() {
                var t = l.getStart();
                t !== a.getBody() && (c.setAttrib(t, "style", null), o(e, function(e) {
                    t.setAttributeNode(e.cloneNode(!0))
                }))
            }
        }

        function C() {
            return !l.isCollapsed() && c.getParent(l.getStart(), c.isBlock) !== c.getParent(l.getEnd(), c.isBlock)
        }
        return a.on("keydown", function(e) {
            var t, n, r, o, i;
            if (!u(e) && e.keyCode === Ah.BACKSPACE && (n = (t = l.getRng()).startContainer, r = t.startOffset, o = c.getRoot(), i = n, t.collapsed && 0 === r)) {
                for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) i = i.parentNode;
                "BLOCKQUOTE" === i.tagName && (a.formatter.toggle("blockquote", null, i), (t = c.createRng()).setStart(n, 0), t.setEnd(n, 0), l.setRng(t))
            }
        }), a.on("keydown", function(e) {
            var t, n, r = e.keyCode;
            if (!u(e) && (r === s || r === i)) {
                if (t = a.selection.isCollapsed(), n = a.getBody(), t && !c.isEmpty(n)) return;
                if (!t && ! function(e) {
                        var t = y(e),
                            n = c.createRng();
                        return n.selectNode(a.getBody()), t === y(n)
                    }(a.selection.getRng())) return;
                e.preventDefault(), a.setContent(""), n.firstChild && c.isBlock(n.firstChild) ? a.selection.setCursorLocation(n.firstChild, 0) : a.selection.setCursorLocation(n, 0), a.nodeChanged()
            }
        }), Nn.windowsPhone || a.on("keyup focusin mouseup", function(e) {
            Ah.modifierPressed(e) || l.normalize()
        }, !0), g && (a.inline || c.bind(a.getDoc(), "mousedown mouseup", function(e) {
            var t;
            if (e.target === a.getDoc().documentElement)
                if (t = l.getRng(), a.getBody().focus(), "mousedown" === e.type) {
                    if (Da(t.startContainer)) return;
                    l.placeCaretAt(e.clientX, e.clientY)
                } else l.setRng(t)
        }), a.on("click", function(e) {
            var t = e.target;
            /^(IMG|HR)$/.test(t.nodeName) && "false" !== c.getContentEditableParent(t) && (e.preventDefault(), a.selection.select(t), a.nodeChanged()), "A" === t.nodeName && c.hasClass(t, "mce-item-anchor") && (e.preventDefault(), l.select(t))
        }), f.forced_root_block && a.on("init", function() {
            e("DefaultParagraphSeparator", mf(a))
        }), a.on("init", function() {
            a.dom.bind(a.getBody(), "submit", function(e) {
                e.preventDefault()
            })
        }), n(), d.addNodeFilter("br", function(e) {
            for (var t = e.length; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
        }), Nn.iOS ? (a.inline || a.on("keydown", function() {
            j.document.activeElement === j.document.body && a.getWin().focus()
        }), r(), a.on("click", function(e) {
            var t = e.target;
            do {
                if ("A" === t.tagName) return void e.preventDefault()
            } while (t = t.parentNode)
        }), a.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")) : t()), 11 <= Nn.ie && (r(), n()), Nn.ie && (t(), e("AutoUrlDetect", !1), a.on("dragstart", function(e) {
            ! function(e) {
                var t, n;
                e.dataTransfer && (a.selection.isCollapsed() && "IMG" === e.target.tagName && l.select(e.target), 0 < (t = a.selection.getContent()).length && (n = p + escape(a.id) + "," + escape(t), e.dataTransfer.setData(v, n)))
            }(e)
        }), a.on("drop", function(e) {
            if (!u(e)) {
                var t = function(e) {
                    var t;
                    return e.dataTransfer && (t = e.dataTransfer.getData(v)) && 0 <= t.indexOf(p) ? (t = t.substr(p.length).split(","), {
                        id: unescape(t[0]),
                        html: unescape(t[1])
                    }) : null
                }(e);
                if (t && t.id !== a.id) {
                    e.preventDefault();
                    var n = $v(e.x, e.y, a.getDoc());
                    l.setRng(n),
                        function(e, t) {
                            a.queryCommandSupported("mceInsertClipboardContent") ? a.execCommand("mceInsertClipboardContent", !1, {
                                content: e,
                                internal: t
                            }) : a.execCommand("mceInsertContent", !1, e)
                        }(t.html, !0)
                }
            }
        })), h && (a.on("keydown", function(e) {
            if (!u(e) && e.keyCode === i) {
                if (!a.getBody().getElementsByTagName("hr").length) return;
                if (l.isCollapsed() && 0 === l.getRng().startOffset) {
                    var t = l.getNode(),
                        n = t.previousSibling;
                    if ("HR" === t.nodeName) return c.remove(t), void e.preventDefault();
                    n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (c.remove(n), e.preventDefault())
                }
            }
        }), j.Range.prototype.getClientRects || a.on("mousedown", function(e) {
            if (!u(e) && "HTML" === e.target.nodeName) {
                var t = a.getBody();
                t.blur(), pn.setEditorTimeout(a, function() {
                    t.focus()
                })
            }
        }), a.on("keypress", function(e) {
            var t;
            if (!u(e) && (8 === e.keyCode || 46 === e.keyCode) && C()) return t = b(), a.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1
        }), c.bind(a.getDoc(), "cut", function(e) {
            var t;
            !u(e) && C() && (t = b(), pn.setEditorTimeout(a, function() {
                t()
            }))
        }), f.readonly || a.on("BeforeExecCommand mousedown", function() {
            e("StyleWithCSS", !1), e("enableInlineTableEditing", !1), f.object_resizing || e("enableObjectResizing", !1)
        }), a.on("SetContent ExecCommand", function(e) {
            "setcontent" !== e.type && "mceInsertLink" !== e.command || o(c.select("a"), function(e) {
                var t = e.parentNode,
                    n = c.getRoot();
                if (t.lastChild === e) {
                    for (; t && !c.isBlock(t);) {
                        if (t.parentNode.lastChild !== t || t === n) return;
                        t = t.parentNode
                    }
                    c.add(t, "br", {
                        "data-mce-bogus": 1
                    })
                }
            })
        }), a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"), Nn.mac && a.on("keydown", function(e) {
            !Ah.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), a.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"))
        }), n()), {
            refreshContentEditable: function() {},
            isHidden: function() {
                var e;
                return !(!h || a.removed) && (!(e = a.selection.getSel()) || !e.rangeCount || 0 === e.rangeCount)
            }
        }
    }

    function Bw(e) {
        return Ge.isElement(e) && In(yt.fromDom(e))
    }

    function Ow(t) {
        t.on("click", function(e) {
            3 <= e.detail && function(e) {
                var t = e.selection.getRng(),
                    n = Uu.fromRangeStart(t),
                    r = Uu.fromRangeEnd(t);
                if (Uu.isElementPosition(n)) {
                    var o = n.container();
                    Bw(o) && Pc.firstPositionIn(o).each(function(e) {
                        return t.setStart(e.container(), e.offset())
                    })
                }
                if (Uu.isElementPosition(r)) {
                    o = n.container();
                    Bw(o) && Pc.lastPositionIn(o).each(function(e) {
                        return t.setEnd(e.container(), e.offset())
                    })
                }
                e.selection.setRng(fp(t))
            }(t)
        })
    }

    function Hw(e) {
        ! function(t) {
            t.on("click", function(e) {
                t.dom.getParent(e.target, "details") && e.preventDefault()
            })
        }(e),
        function(e) {
            e.parser.addNodeFilter("details", function(e) {
                z(e, function(e) {
                    e.attr("data-mce-open", e.attr("open")), e.attr("open", "open")
                })
            }), e.serializer.addNodeFilter("details", function(e) {
                z(e, function(e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", K(t) ? t : null), e.attr("data-mce-open", null)
                })
            })
        }(e)
    }

    function Pw(e) {
        e.bindPendingEventDelegates(), e.initialized = !0, e.fire("init"), e.focus(!0), e.nodeChanged({
                initial: !0
            }), e.execCallback("init_instance_callback", e),
            function(t) {
                t.settings.auto_focus && pn.setEditorTimeout(t, function() {
                    var e;
                    (e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus)).destroyed || e.focus()
                }, 100)
            }(e)
    }

    function Lw(e, t) {
        var n = e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),
            r = function(e, t, n, r) {
                var o = yt.fromTag("iframe");
                return me(o, r), me(o, {
                    id: e + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: t
                }), fa(o, "tox-edit-area__iframe"), o
            }(e.id, n, t.height, uf(e)).dom();
        r.onload = function() {
            r.onload = null, e.fire("load")
        };
        var o = function(e, t) {
            if (j.document.domain !== j.window.location.hostname && Nn.browser.isIE()) {
                var n = eh("mce");
                e[n] = function() {
                    Nz(e)
                };
                var r = 'javascript:(function(){document.open();document.domain="' + j.document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                return Sz.setAttrib(t, "src", r), !0
            }
            return !1
        }(e, r);
        return e.contentAreaContainer = t.iframeContainer, e.iframeElement = r, e.iframeHTML = function(e) {
            var t, n, r;
            return r = sf(e) + "<html><head>", cf(e) !== e.documentBaseUrl && (r += '<base href="' + e.documentBaseURI.getURI() + '" />'), r += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', t = lf(e), n = ff(e), df(e) && (r += '<meta http-equiv="Content-Security-Policy" content="' + df(e) + '" />'), r += '</head><body id="' + t + '" class="mce-content-body ' + n + '" data-id="' + e.id + '"><br></body></html>'
        }(e), Sz.add(t.iframeContainer, r), o
    }

    function Vw(e) {
        e.contentCSS = e.contentCSS.concat(function(t) {
            var e = Lf(t),
                n = t.editorManager.baseURL + "/skins/content",
                r = "content" + t.editorManager.suffix + ".css",
                o = !0 === t.inline;
            return X(e, function(e) {
                return function(e) {
                    return /^[a-z0-9\-]+$/i.test(e)
                }(e) && !o ? n + "/" + e + "/" + r : t.documentBaseURI.toAbsolute(e)
            })
        }(e))
    }

    function Iw(e) {
        return e.replace(/^\-/, "")
    }

    function Fw(e) {
        return {
            editorContainer: e,
            iframeContainer: e
        }
    }

    function Uw(e) {
        var t = e.getElement();
        return e.inline ? Fw(null) : function(e) {
            var t = Tz.create("div");
            return Tz.insertAfter(t, e), Fw(t)
        }(t)
    }

    function jw(e) {
        return "-" === e.charAt(0)
    }

    function qw(t, e) {
        (function(e) {
            return k.from(zf(e)).filter(function(e) {
                return 0 < e.length
            }).map(function(e) {
                return {
                    url: e,
                    name: k.none()
                }
            })
        })(e).orThunk(function() {
            return function(t) {
                return k.from(xf(t)).filter(function(e) {
                    return 0 < e.length && !Ud.has(e)
                }).map(function(e) {
                    return {
                        url: t.editorManager.baseURL + "/icons/" + e + "/icons.js",
                        name: k.some(e)
                    }
                })
            }(e)
        }).each(function(e) {
            t.add(e.url, i, undefined, function() {
                Fd.iconsLoadError(e.url, e.name.getOrUndefined())
            })
        })
    }

    function $w(e, t) {
        var n = Qi.ScriptLoader;
        ! function(e, t, n, r) {
            var o = t.settings,
                i = o.theme;
            if (K(i)) {
                if (!jw(i) && !qd.urls.hasOwnProperty(i)) {
                    var a = o.theme_url;
                    a ? qd.load(i, t.documentBaseURI.toAbsolute(a)) : qd.load(i, "themes/" + i + "/theme" + n + ".js")
                }
                e.loadQueue(function() {
                    qd.waitFor(i, r)
                })
            } else r()
        }(n, e, t, function() {
            ! function(e, t) {
                var n = Bf(t),
                    r = Of(t);
                if (!1 === ra.hasCode(n) && "en" !== n) {
                    var o = "" !== r ? r : t.editorManager.baseURL + "/langs/" + n + ".js";
                    e.add(o, i, undefined, function() {
                        Fd.languageLoadError(o, n)
                    })
                }
            }(n, e), qw(n, e),
                function(n, r) {
                    A(n.plugins) && (n.plugins = n.plugins.join(" ")), Mn.each(n.external_plugins, function(e, t) {
                        jd.load(t, e, i, undefined, function() {
                            Fd.pluginLoadError(t, e)
                        }), n.plugins += " " + t
                    }), Mn.each(n.plugins.split(/[ ,]/), function(e) {
                        if ((e = Mn.trim(e)) && !jd.urls[e])
                            if (jw(e)) {
                                e = e.substr(1, e.length);
                                var t = jd.dependencies(e);
                                Mn.each(t, function(e) {
                                    var t = {
                                        prefix: "plugins/",
                                        resource: e,
                                        suffix: "/plugin" + r + ".js"
                                    };
                                    e = jd.createUrl(t, e), jd.load(e.resource, e, i, undefined, function() {
                                        Fd.pluginLoadError(e.prefix + e.resource + e.suffix, e.resource)
                                    })
                                })
                            } else {
                                var n = {
                                    prefix: "plugins/",
                                    resource: e,
                                    suffix: "/plugin" + r + ".js"
                                };
                                jd.load(e, n, i, undefined, function() {
                                    Fd.pluginLoadError(n.prefix + n.resource + n.suffix, e)
                                })
                            }
                    })
                }(e.settings, t), n.loadQueue(function() {
                    e.removed || Mz(e)
                }, e, function() {
                    e.removed || Mz(e)
                })
        })
    }

    function Ww(e, t, n) {
        ha(e, t) && !1 === n ? function(e, t) {
            sa(e) ? e.dom().classList.remove(t) : la(e, t);
            da(e)
        }(e, t) : n && fa(e, t)
    }

    function Kw(e, t, n) {
        try {
            e.getDoc().execCommand(t, !1, n)
        } catch (r) {}
    }

    function Xw(e, t) {
        e.dom().contentEditable = t ? "true" : "false"
    }

    function Yw(e, t) {
        var n = yt.fromDom(e.getBody());
        Ww(n, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), function(e) {
            k.from(e.selection.getNode()).each(function(e) {
                e.removeAttribute("data-mce-selected")
            })
        }(e), e.readonly = !0, Xw(n, !1), function(e) {
            z(ma(e, '*[contenteditable="true"]'), function(e) {
                Tt(e, _z, "true"), Xw(e, !1)
            })
        }(n)) : (e.readonly = !1, Xw(n, !0), function(e) {
            z(ma(e, "*[" + _z + '="true"]'), function(e) {
                pe(e, _z), Xw(e, !0)
            })
        }(n), Kw(e, "StyleWithCSS", !1), Kw(e, "enableInlineTableEditing", !1), Kw(e, "enableObjectResizing", !1), sd(e) && e.focus(), function(e) {
            e.selection.setRng(e.selection.getRng())
        }(e), e.nodeChanged())
    }

    function Gw(e) {
        return !0 === e.readonly
    }

    function Jw(t) {
        t.parser.addAttributeFilter("contenteditable", function(e) {
            Gw(t) && z(e, function(e) {
                e.attr(_z, e.attr("contenteditable")), e.attr("contenteditable", "false")
            })
        }), t.serializer.addAttributeFilter(_z, function(e) {
            Gw(t) && z(e, function(e) {
                e.attr("contenteditable", e.attr(_z))
            })
        }), t.serializer.addTempAttr(_z)
    }

    function Qw(e, t, n, r) {
        var o = n[t.get()],
            i = n[r];
        try {
            i.activate()
        } catch (yN) {
            return void j.console.error("problem while activating editor mode " + r + ":", yN)
        }
        o.deactivate(), o.editorReadOnly !== i.editorReadOnly && Yw(e, i.editorReadOnly), t.set(r), hd(e, r)
    }

    function Zw(t) {
        var n = Je("design"),
            r = Je({
                design: {
                    activate: i,
                    deactivate: i,
                    editorReadOnly: !1
                },
                readonly: {
                    activate: i,
                    deactivate: i,
                    editorReadOnly: !0
                }
            });
        return function(e) {
                e.serializer ? Jw(e) : e.on("PreInit", function() {
                    Jw(e)
                })
            }(t),
            function(t) {
                t.on("ShowCaret", function(e) {
                    Gw(t) && e.preventDefault()
                }), t.on("ObjectSelected", function(e) {
                    Gw(t) && e.preventDefault()
                })
            }(t), {
                isReadOnly: function() {
                    return Gw(t)
                },
                set: function(e) {
                    return function(e, t, n, r) {
                        if (r !== n.get()) {
                            if (!kt(t, r)) throw new Error("Editor mode '" + r + "' is invalid");
                            e.initialized ? Qw(e, n, t, r) : e.on("init", function() {
                                return Qw(e, n, t, r)
                            })
                        }
                    }(t, r.get(), n, e)
                },
                get: function() {
                    return n.get()
                },
                register: function(e, t) {
                    r.set(function(e, t, n) {
                        var r;
                        if (h(Bz, t)) throw new Error("Cannot override default mode " + t);
                        return G(G({}, e), ((r = {})[t] = G(G({}, n), {
                            deactivate: function() {
                                try {
                                    n.deactivate()
                                } catch (yN) {
                                    j.console.error("problem while deactivating editor mode " + t + ":", yN)
                                }
                            }
                        }), r))
                    }(r.get(), e, t))
                }
            }
    }

    function ex(e) {
        return Mn.grep(e.childNodes, function(e) {
            return "LI" === e.nodeName
        })
    }

    function tx(e) {
        return e && e.firstChild && e.firstChild === e.lastChild && function(e) {
            return "\xa0" === e.data || Ge.isBr(e)
        }(e.firstChild)
    }

    function nx(e) {
        return 0 < e.length && function(e) {
            return !e.firstChild || tx(e)
        }(e[e.length - 1]) ? e.slice(0, -1) : e
    }

    function rx(e, t) {
        var n = e.getParent(t, e.isBlock);
        return n && "LI" === n.nodeName ? n : null
    }

    function ox(e, t) {
        var n = Ds.after(e),
            r = rc(t).prev(n);
        return r ? r.toRange() : null
    }

    function ix(t, e, n) {
        var r = t.parentNode;
        return Mn.each(e, function(e) {
                r.insertBefore(e, t)
            }),
            function(e, t) {
                var n = Ds.before(e),
                    r = rc(t).next(n);
                return r ? r.toRange() : null
            }(t, n)
    }

    function ax(e, t) {
        var n = e.selection.getRng(),
            r = n.startContainer,
            o = n.startOffset;
        n.collapsed && function(e, t) {
            return Ge.isText(e) && "\xa0" === e.nodeValue[t - 1]
        }(r, o) && Ge.isText(r) && (r.insertData(o - 1, " "), r.deleteData(o, 1), n.setStart(r, o), n.setEnd(r, o), e.selection.setRng(n)), e.selection.setContent(t)
    }

    function ux(e, t, n) {
        var r, o, i, a, u, s, c, l, f, d, h, m = e.selection,
            g = e.dom;
        if (/^ | $/.test(t) && (t = function(e, t) {
                var n, r;
                n = e.startContainer, r = e.startOffset;

                function o(e) {
                    return n[e] && 3 === n[e].nodeType
                }
                return 3 === n.nodeType && (0 < r ? t = t.replace(/^&nbsp;/, " ") : o("previousSibling") || (t = t.replace(/^ /, "&nbsp;")), r < n.length ? t = t.replace(/&nbsp;(<br>|)$/, " ") : o("nextSibling") || (t = t.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), t
            }(m.getRng(), t)), r = e.parser, h = n.merge, o = pl({
                validate: e.settings.validate
            }, e.schema), d = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>', s = {
                content: t,
                format: "html",
                selection: !0,
                paste: n.paste
            }, (s = e.fire("BeforeSetContent", s)).isDefaultPrevented()) e.fire("SetContent", {
            content: s.content,
            format: "html",
            selection: !0,
            paste: n.paste
        });
        else {
            -1 === (t = s.content).indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, d);
            var p = (l = m.getRng()).startContainer || (l.parentElement ? l.parentElement() : null),
                v = e.getBody();
            p === v && m.isCollapsed() && g.isBlock(v.firstChild) && function(e, t) {
                return t && !e.schema.getShortEndedElements()[t.nodeName]
            }(e, v.firstChild) && g.isEmpty(v.firstChild) && ((l = g.createRng()).setStart(v.firstChild, 0), l.setEnd(v.firstChild, 0), m.setRng(l)), m.isCollapsed() || (e.selection.setRng(fp(e.selection.getRng())), e.getDoc().execCommand("Delete", !1, null), t = function(e, t) {
                var n, r;
                return n = e.startContainer, r = e.startOffset, 3 === n.nodeType && e.collapsed && ("\xa0" === n.data[r] ? (n.deleteData(r, 1), /[\u00a0| ]$/.test(t) || (t += " ")) : "\xa0" === n.data[r - 1] && (n.deleteData(r - 1, 1), /[\u00a0| ]$/.test(t) || (t = " " + t))), t
            }(e.selection.getRng(), t));
            var y = {
                context: (i = m.getNode()).nodeName.toLowerCase(),
                data: n.data,
                insert: !0
            };
            if (u = r.parse(t, y), !0 === n.paste && Oz(e.schema, u) && Pz(g, i)) return l = Hz(o, g, e.selection.getRng(), u), e.selection.setRng(l), void e.fire("SetContent", s);
            if (function(e) {
                    for (var t = e; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
                }(u), "mce_marker" === (f = u.lastChild).attr("id"))
                for (f = (c = f).prev; f; f = f.walk(!0))
                    if (3 === f.type || !g.isBlock(f.name)) {
                        e.schema.isValidChild(f.parent.name, "span") && f.parent.insert(c, f, "br" === f.name);
                        break
                    }
            if (e._selectionOverrides.showBlockCaretContainer(i), y.invalid) {
                for (ax(e, d), i = m.getNode(), a = e.getBody(), 9 === i.nodeType ? i = f = a : f = i; f !== a;) f = (i = f).parentNode;
                t = i === a ? a.innerHTML : g.getOuterHTML(i), t = o.serialize(r.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() {
                    return o.serialize(u)
                }))), i === a ? g.setHTML(a, t) : g.setOuterHTML(i, t)
            } else ! function(e, t, n) {
                if ("all" === n.getAttribute("data-mce-bogus")) n.parentNode.insertBefore(e.dom.createFragment(t), n);
                else {
                    var r = n.firstChild,
                        o = n.lastChild;
                    !r || r === o && "BR" === r.nodeName ? e.dom.setHTML(n, t) : ax(e, t)
                }
            }(e, t = o.serialize(u), i);
            ! function(e, t) {
                var n = e.schema.getTextInlineElements(),
                    r = e.dom;
                if (t) {
                    var o = e.getBody(),
                        i = new Bg(r);
                    Mn.each(r.select("*[data-mce-fragment]"), function(e) {
                        for (var t = e.parentNode; t && t !== o; t = t.parentNode) n[e.nodeName.toLowerCase()] && i.compare(t, e) && r.remove(e, !0)
                    })
                }
            }(e, h),
            function(n, e) {
                var t, r, o, i, a, u = n.dom,
                    s = n.selection;
                if (e) {
                    if (n.selection.scrollIntoView(e), t = function(e) {
                            for (var t = n.getBody(); e && e !== t; e = e.parentNode)
                                if ("false" === n.dom.getContentEditable(e)) return e;
                            return null
                        }(e)) return u.remove(e), s.select(t);
                    var c = u.createRng();
                    (i = e.previousSibling) && 3 === i.nodeType ? (c.setStart(i, i.nodeValue.length), Nn.ie || (a = e.nextSibling) && 3 === a.nodeType && (i.appendData(a.data), a.parentNode.removeChild(a))) : (c.setStartBefore(e), c.setEndBefore(e));
                    r = u.getParent(e, u.isBlock), u.remove(e), r && u.isEmpty(r) && (n.$(r).empty(), c.setStart(r, 0), c.setEnd(r, 0), Lz(r) || function(e) {
                        return !!e.getAttribute("data-mce-fragment")
                    }(r) || !(o = function(e) {
                        var t = Ds.fromRangeStart(e);
                        if (t = rc(n.getBody()).next(t)) return t.toRange()
                    }(c)) ? u.add(r, u.create("br", {
                        "data-mce-bogus": "1"
                    })) : (c = o, u.remove(r))), s.setRng(c)
                }
            }(e, g.get("mce_marker")),
            function(e) {
                Mn.each(e.getElementsByTagName("*"), function(e) {
                    e.removeAttribute("data-mce-fragment")
                })
            }(e.getBody()),
            function(e, t) {
                k.from(e.getParent(t, "td,th")).map(yt.fromDom).each(Cg)
            }(e.dom, e.selection.getStart()), e.fire("SetContent", s), e.addVisual()
        }
    }

    function sx(e, t) {
        e.getDoc().execCommand(t, !1, null)
    }

    function cx(n) {
        return function(t, e) {
            return k.from(e).map(yt.fromDom).filter(xt).bind(function(e) {
                return function(t, n, e) {
                    function r(e) {
                        return ye(e, t)
                    }
                    return ba(yt.fromDom(e), function(e) {
                        return r(e).isSome()
                    }, function(e) {
                        return ze(yt.fromDom(n), e)
                    }).bind(r)
                }(n, t, e.dom()).or(function(e, t) {
                    return k.from(Xi.DOM.getStyle(t, e, !0))
                }(n, e.dom()))
            }).getOr("")
        }
    }

    function lx(e) {
        return Pc.firstPositionIn(e.getBody()).map(function(e) {
            var t = e.container();
            return Ge.isText(t) ? t.parentNode : t
        })
    }

    function fx(t) {
        return k.from(t.selection.getRng()).bind(function(e) {
            return function(e, t) {
                return e.startContainer === t && 0 === e.startOffset
            }(e, t.getBody()) ? k.none() : k.from(t.selection.getStart(!0))
        })
    }

    function dx(e, t) {
        if (/^[0-9\.]+$/.test(t)) {
            var n = parseInt(t, 10);
            if (1 <= n && n <= 7) {
                var r = Cf(e),
                    o = wf(e);
                return o ? o[n - 1] || t : r[n - 1] || t
            }
            return t
        }
        return t
    }

    function hx(e, t) {
        var n = dx(e, t);
        e.formatter.toggle("fontname", {
            value: function(e) {
                var t = e.split(/\s*,\s*/);
                return X(t, function(e) {
                    return -1 === e.indexOf(" ") || ee(e, '"') || ee(e, "'") ? e : "'" + e + "'"
                }).join(",")
            }(n)
        }), e.nodeChanged()
    }
    var mx = d(ob, Uu.isAbove, -1),
        gx = d(ob, Uu.isBelow, 1),
        px = d(ib, -1, mx),
        vx = d(ib, 1, gx),
        yx = Ge.isContentEditableFalse,
        bx = Wa,
        Cx = d(mb, function(e) {
            return e.bottom
        }, function(e, t) {
            return e.y < t
        }),
        wx = d(mb, function(e) {
            return e.top
        }, function(e, t) {
            return e.y > t
        }),
        xx = d(yb, mx),
        zx = d(yb, gx),
        Ex = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = Array.prototype.slice.call(arguments, 1);
            return function() {
                return e.apply(null, r)
            }
        },
        Nx = function(e, t) {
            return g(Db(e, t), function(e) {
                return e.action()
            })
        },
        Sx = function(t, n) {
            t.on("keydown", function(e) {
                !1 === e.isDefaultPrevented() && function(e, t, n) {
                    var r = oe().os;
                    Nx([{
                        keyCode: Ah.RIGHT,
                        action: fb(e, !0)
                    }, {
                        keyCode: Ah.LEFT,
                        action: fb(e, !1)
                    }, {
                        keyCode: Ah.UP,
                        action: db(e, !1)
                    }, {
                        keyCode: Ah.DOWN,
                        action: db(e, !0)
                    }, {
                        keyCode: Ah.RIGHT,
                        action: zb(e, !0)
                    }, {
                        keyCode: Ah.LEFT,
                        action: zb(e, !1)
                    }, {
                        keyCode: Ah.UP,
                        action: Eb(e, !1)
                    }, {
                        keyCode: Ah.DOWN,
                        action: Eb(e, !0)
                    }, {
                        keyCode: Ah.RIGHT,
                        action: nb.move(e, t, !0)
                    }, {
                        keyCode: Ah.LEFT,
                        action: nb.move(e, t, !1)
                    }, {
                        keyCode: Ah.RIGHT,
                        ctrlKey: !r.isOSX(),
                        altKey: r.isOSX(),
                        action: nb.moveNextWord(e, t)
                    }, {
                        keyCode: Ah.LEFT,
                        ctrlKey: !r.isOSX(),
                        altKey: r.isOSX(),
                        action: nb.movePrevWord(e, t)
                    }, {
                        keyCode: Ah.UP,
                        action: Rb(e, !1)
                    }, {
                        keyCode: Ah.DOWN,
                        action: Rb(e, !0)
                    }], n).each(function(e) {
                        n.preventDefault()
                    })
                }(t, n, e)
            })
        },
        kx = function(e, t) {
            return Bt(e, t) ? ba(t, function(e) {
                return In(e) || Un(e)
            }, function(t) {
                return function(e) {
                    return ze(t, yt.fromDom(e.dom().parentNode))
                }
            }(e)) : k.none()
        },
        Tx = function(e) {
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), function(e) {
                var t = e.getBody(),
                    n = t.firstChild && e.dom.isBlock(t.firstChild) ? t.firstChild : t;
                e.selection.setCursorLocation(n, 0)
            }(e))
        },
        Ax = function(i, a, u) {
            return Ya(Pc.firstPositionIn(u), Pc.lastPositionIn(u), function(e, t) {
                var n = Ky.normalizePosition(!0, e),
                    r = Ky.normalizePosition(!1, t),
                    o = Ky.normalizePosition(!1, a);
                return i ? Pc.nextPosition(u, o).map(function(e) {
                    return e.isEqual(r) && a.isEqual(n)
                }).getOr(!1) : Pc.prevPosition(u, o).map(function(e) {
                    return e.isEqual(n) && a.isEqual(r)
                }).getOr(!1)
            }).getOr(!0)
        },
        Mx = function(e, t, n) {
            return n.collapsed ? Ob(e, t, n) : k.none()
        },
        Rx = function(e, t, n, r) {
            return t ? Ub(e, r, n) : Ub(e, n, r)
        },
        Dx = function(t, n) {
            var r = yt.fromDom(t.getBody()),
                e = Mx(r.dom(), n, t.selection.getRng()).bind(function(e) {
                    return Rx(r, n, e.from().block(), e.to().block())
                });
            return e.each(function(e) {
                t.selection.setRng(e.toRange())
            }), e.isSome()
        },
        _x = function(e, t) {
            return !e.selection.isCollapsed() && $b(e)
        },
        Bx = d(Kb, !1),
        Ox = d(Kb, !0),
        Hx = jf([{
            remove: ["element"]
        }, {
            moveToElement: ["element"]
        }, {
            moveToPosition: ["position"]
        }]),
        Px = function(e, t) {
            for (; t && t !== e;) {
                if (Ge.isContentEditableTrue(t) || Ge.isContentEditableFalse(t)) return t;
                t = t.parentNode
            }
            return null
        },
        Lx = function(e, t) {
            return e.selection.isCollapsed() ? eC(e, t) : tC(e, t)
        },
        Vx = function(e) {
            var t, n = Px(e.getBody(), e.selection.getNode());
            return Ge.isContentEditableTrue(n) && e.dom.isBlock(n) && e.dom.isEmpty(n) && (t = e.dom.create("br", {
                "data-mce-bogus": "1"
            }), e.dom.setHTML(n, ""), n.appendChild(t), e.selection.setRng(Ds.before(t).toRange())), !0
        },
        Ix = function(e, t) {
            return function(e, t) {
                var n = e.selection.getRng();
                if (!Ge.isText(n.commonAncestorContainer)) return !1;
                var r = t ? Ms.Forwards : Ms.Backwards,
                    o = rc(e.getBody()),
                    i = d(Ts, o.next),
                    a = d(Ts, o.prev),
                    u = t ? i : a,
                    s = t ? Ph : Lh,
                    c = Ss(r, e.getBody(), n),
                    l = Ky.normalizePosition(t, u(c));
                if (!l || !As(c, l)) return !1;
                if (s(l)) return nC(e, n, c.getNode(), r, t, l);
                var f = u(l);
                return !!(f && s(f) && As(l, f)) && nC(e, n, c.getNode(), r, t, f)
            }(e, t)
        },
        Fx = function(e, t, n) {
            if (e.selection.isCollapsed() && function(e) {
                    return !1 !== e.settings.inline_boundaries
                }(e)) {
                var r = Ds.fromRangeStart(e.selection.getRng());
                return iC(e, t, n, r)
            }
            return !1
        },
        Ux = function(e, t) {
            return !!e.selection.isCollapsed() && sC(e, t)
        },
        jx = jf([{
            removeTable: ["element"]
        }, {
            emptyCells: ["cells"]
        }]),
        qx = function(e, t) {
            return hC(t, e).isSome()
        },
        $x = function(e, t) {
            return g(fh(t, e), function(e) {
                return "caption" === ie(e)
            })
        },
        Wx = function(e, t) {
            return bg(t), e.selection.setCursorLocation(t.dom(), 0), k.some(!0)
        },
        Kx = function(e, t) {
            var n = yt.fromDom(e.selection.getStart(!0)),
                r = ry(e);
            return e.selection.isCollapsed() && 0 === r.length ? TC(e, t, n) : function(e, t) {
                var n = yt.fromDom(e.getBody()),
                    r = e.selection.getRng(),
                    o = ry(e);
                return 0 !== o.length ? CC(e, o) : zC(e, n, r, t)
            }(e, n)
        },
        Xx = function(e, t) {
            return !!e.selection.isCollapsed() && function(t, n) {
                var e = Ds.fromRangeStart(t.selection.getRng());
                return Pc.fromPosition(n, t.getBody(), e).filter(function(e) {
                    return n ? _h(e) : Bh(e)
                }).bind(function(e) {
                    return k.from(ws(n ? 0 : -1, e))
                }).map(function(e) {
                    return t.selection.select(e), !0
                }).getOr(!1)
            }(e, t)
        },
        Yx = function(e) {
            return y(X(e.selection.getSelectedBlocks(), yt.fromDom), function(e) {
                return !DC(e) && ! function(e) {
                    return Se(e).map(DC).getOr(!1)
                }(e) && function(e) {
                    return ba(e, function(e) {
                        return Ge.isContentEditableTrue(e.dom()) || Ge.isContentEditableFalse(e.dom())
                    }).exists(function(e) {
                        return Ge.isContentEditableTrue(e.dom())
                    })
                }(e)
            })
        },
        Gx = d(PC, !1),
        Jx = d(PC, !0),
        Qx = d(HC, !1),
        Zx = d(HC, !0),
        ez = function(e, t, n) {
            if (e.selection.isCollapsed() && RC(e)) {
                var r = e.dom,
                    o = e.selection.getRng(),
                    i = Ds.fromRangeStart(o),
                    a = r.getParent(o.startContainer, r.isBlock);
                if (null !== a && Gx(yt.fromDom(a), i)) return _C(e, "outdent"), !0
            }
            return !1
        },
        tz = function(t, n) {
            t.on("keydown", function(e) {
                !1 === e.isDefaultPrevented() && function(e, t, n) {
                    Nx([{
                        keyCode: Ah.BACKSPACE,
                        action: Ex(ez, e, !1)
                    }, {
                        keyCode: Ah.BACKSPACE,
                        action: Ex(Lx, e, !1)
                    }, {
                        keyCode: Ah.DELETE,
                        action: Ex(Lx, e, !0)
                    }, {
                        keyCode: Ah.BACKSPACE,
                        action: Ex(Ix, e, !1)
                    }, {
                        keyCode: Ah.DELETE,
                        action: Ex(Ix, e, !0)
                    }, {
                        keyCode: Ah.BACKSPACE,
                        action: Ex(Fx, e, t, !1)
                    }, {
                        keyCode: Ah.DELETE,
                        action: Ex(Fx, e, t, !0)
                    }, {
                        keyCode: Ah.BACKSPACE,
                        action: Ex(Kx, e, !1)
                    }, {
                        keyCode: Ah.DELETE,
                        action: Ex(Kx, e, !0)
                    }, {
                        keyCode: Ah.BACKSPACE,
                        action: Ex(Xx, e, !1)
                    }, {
                        keyCode: Ah.DELETE,
                        action: Ex(Xx, e, !0)
                    }, {
                        keyCode: Ah.BACKSPACE,
                        action: Ex(_x, e, !1)
                    }, {
                        keyCode: Ah.DELETE,
                        action: Ex(_x, e, !0)
                    }, {
                        keyCode: Ah.BACKSPACE,
                        action: Ex(Dx, e, !1)
                    }, {
                        keyCode: Ah.DELETE,
                        action: Ex(Dx, e, !0)
                    }, {
                        keyCode: Ah.BACKSPACE,
                        action: Ex(Ux, e, !1)
                    }, {
                        keyCode: Ah.DELETE,
                        action: Ex(Ux, e, !0)
                    }], n).each(function(e) {
                        n.preventDefault()
                    })
                }(t, n, e)
            }), t.on("keyup", function(e) {
                !1 === e.isDefaultPrevented() && function(e, t) {
                    Nx([{
                        keyCode: Ah.BACKSPACE,
                        action: Ex(Vx, e)
                    }, {
                        keyCode: Ah.DELETE,
                        action: Ex(Vx, e)
                    }], t)
                }(t, e)
            })
        },
        nz = function(e, t) {
            var n, r, o = t,
                i = e.dom,
                a = e.schema.getMoveCaretBeforeOnEnterElements();
            if (t) {
                if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                    var u = function(e) {
                        for (; e;) {
                            if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                            e = e.nextSibling
                        }
                    }(t.firstChild);
                    u && /^(UL|OL|DL)$/.test(u.nodeName) && t.insertBefore(i.doc.createTextNode("\xa0"), t.firstChild)
                }
                if (r = i.createRng(), t.normalize(), t.hasChildNodes()) {
                    for (var s = new yi(t, t); n = s.current();) {
                        if (Ge.isText(n)) {
                            r.setStart(n, 0), r.setEnd(n, 0);
                            break
                        }
                        if (a[n.nodeName.toLowerCase()]) {
                            r.setStartBefore(n), r.setEndBefore(n);
                            break
                        }
                        o = n, n = s.next()
                    }
                    n || (r.setStart(o, 0), r.setEnd(o, 0))
                } else Ge.isBr(t) ? t.nextSibling && i.isBlock(t.nextSibling) ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)) : (r.setStart(t, 0), r.setEnd(t, 0));
                e.selection.setRng(r), e.selection.scrollIntoView(t)
            }
        },
        rz = function(e, t) {
            var n, r, o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
            return n !== o ? r : o
        },
        oz = LC,
        iz = function(e) {
            return LC(e).fold($(""), function(e) {
                return e.nodeName.toUpperCase()
            })
        },
        az = function(e) {
            return LC(e).filter(function(e) {
                return Un(yt.fromDom(e))
            }).isSome()
        },
        uz = function(e, t, n, r, o) {
            var i = e.dom,
                a = e.selection.getRng();
            if (n !== e.getBody()) {
                ! function(e) {
                    return IC(e) && IC(e.parentNode)
                }(n) || (o = "LI");
                var u = o ? t(o) : i.create("BR");
                if (UC(n, r, !0) && UC(n, r, !1)) VC(n, "LI") ? i.insertAfter(u, FC(n)) : i.replace(u, n);
                else if (UC(n, r, !0)) VC(n, "LI") ? (i.insertAfter(u, FC(n)), u.appendChild(i.doc.createTextNode(" ")), u.appendChild(n)) : n.parentNode.insertBefore(u, n);
                else if (UC(n, r, !1)) i.insertAfter(u, FC(n));
                else {
                    n = FC(n);
                    var s = a.cloneRange();
                    s.setStartAfter(r), s.setEndAfter(n);
                    var c = s.extractContents();
                    "LI" === o && function(e, t) {
                        return e.firstChild && e.firstChild.nodeName === t
                    }(c, "LI") ? (u = c.firstChild, i.insertAfter(c, n)) : (i.insertAfter(c, n), i.insertAfter(u, n))
                }
                i.remove(r), nz(e, u)
            }
        },
        sz = function(a, e) {
            function t(e) {
                var t, n, r, o = s,
                    i = b.getTextInlineElements();
                if (e || "TABLE" === m || "HR" === m ? (t = y.create(e || p), XC(a, t)) : t = c.cloneNode(!1), r = t, !1 === yf(a)) y.setAttrib(t, "style", null), y.setAttrib(t, "class", null);
                else
                    do {
                        if (i[o.nodeName]) {
                            if (rs(o) || Fc(o)) continue;
                            n = o.cloneNode(!1), y.setAttrib(n, "id", ""), t.hasChildNodes() ? n.appendChild(t.firstChild) : r = n, t.appendChild(n)
                        }
                    } while ((o = o.parentNode) && o !== u);
                return jC(r), t
            }

            function n(e) {
                var t, n, r = WC(e, s, i);
                if (Ge.isText(s) && (e ? 0 < r : r < s.nodeValue.length)) return !1;
                if (s.parentNode === c && v && !e) return !0;
                if (e && Ge.isElement(s) && s === c.firstChild) return !0;
                if (qC(s, "TABLE") || qC(s, "HR")) return v && !e || !v && e;
                var o = new yi(s, c);
                for (Ge.isText(s) && (e && 0 === r ? o.prev() : e || r !== s.nodeValue.length || o.next()); t = o.current();) {
                    if (Ge.isElement(t)) {
                        if (!t.getAttribute("data-mce-bogus") && (n = t.nodeName.toLowerCase(), C[n] && "br" !== n)) return !1
                    } else if (Ge.isText(t) && !/^[ \t\r\n]*$/.test(t.nodeValue)) return !1;
                    e ? o.prev() : o.next()
                }
                return !0
            }

            function r() {
                f = /^(H[1-6]|PRE|FIGURE)$/.test(m) && "HGROUP" !== g ? t(p) : t(), bf(a) && $C(y, h) && y.isEmpty(c) ? f = y.split(h, c) : y.insertAfter(f, c), nz(a, f)
            }
            var o, u, s, i, c, l, f, d, h, m, g, p, v, y = a.dom,
                b = a.schema,
                C = b.getNonEmptyElements(),
                w = a.selection.getRng();
            ay(y, w).each(function(e) {
                w.setStart(e.startContainer, e.startOffset), w.setEnd(e.endContainer, e.endOffset)
            }), s = w.startContainer, i = w.startOffset, p = mf(a), l = !(!e || !e.shiftKey);
            var x = !(!e || !e.ctrlKey);
            Ge.isElement(s) && s.hasChildNodes() && (v = i > s.childNodes.length - 1, s = s.childNodes[Math.min(i, s.childNodes.length - 1)] || s, i = v && Ge.isText(s) ? s.nodeValue.length : 0), (u = KC(y, s)) && ((p && !l || !p && l) && (s = function(e, t, n, r, o) {
                var i, a, u, s, c, l, f = t || "P",
                    d = e.dom,
                    h = KC(d, r);
                if (!(a = d.getParent(r, d.isBlock)) || !$C(d, a)) {
                    if (l = (a = a || h) === e.getBody() || function(e) {
                            return e && /^(TD|TH|CAPTION)$/.test(e.nodeName)
                        }(a) ? a.nodeName.toLowerCase() : a.parentNode.nodeName.toLowerCase(), !a.hasChildNodes()) return i = d.create(f), XC(e, i), a.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i;
                    for (s = r; s.parentNode !== a;) s = s.parentNode;
                    for (; s && !d.isBlock(s);) s = (u = s).previousSibling;
                    if (u && e.schema.isValidChild(l, f.toLowerCase())) {
                        for (i = d.create(f), XC(e, i), u.parentNode.insertBefore(i, u), s = u; s && !d.isBlock(s);) c = s.nextSibling, i.appendChild(s), s = c;
                        n.setStart(r, o), n.setEnd(r, o)
                    }
                }
                return r
            }(a, p, w, s, i)), c = y.getParent(s, y.isBlock), h = c ? y.getParent(c.parentNode, y.isBlock) : null, m = c ? c.nodeName.toUpperCase() : "", "LI" !== (g = h ? h.nodeName.toUpperCase() : "") || x || (h = (c = h).parentNode, m = g), /^(LI|DT|DD)$/.test(m) && y.isEmpty(c) ? uz(a, t, h, c, p) : p && c === a.getBody() || (p = p || "P", Ma(c) ? (f = Pa(c), y.isEmpty(c) && jC(c), nz(a, f)) : n() ? r() : n(!0) ? (f = c.parentNode.insertBefore(t(), c), nz(a, qC(c, "HR") ? f : c)) : ((o = function(e) {
                var t = e.cloneRange();
                return t.setStart(e.startContainer, WC(!0, e.startContainer, e.startOffset)), t.setEnd(e.endContainer, WC(!1, e.endContainer, e.endOffset)), t
            }(w).cloneRange()).setEndAfter(c), function(e) {
                z(pa(yt.fromDom(e), zt), function(e) {
                    var t = e.dom();
                    t.nodeValue = lu(t.nodeValue)
                })
            }(d = o.extractContents()), function(e) {
                for (; Ge.isText(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;);
            }(d), f = d.firstChild, y.insertAfter(d, c), function(e, t, n) {
                var r, o = n,
                    i = [];
                if (o) {
                    for (; o = o.firstChild;) {
                        if (e.isBlock(o)) return;
                        Ge.isElement(o) && !t[o.nodeName.toLowerCase()] && i.push(o)
                    }
                    for (r = i.length; r--;) !(o = i[r]).hasChildNodes() || o.firstChild === o.lastChild && "" === o.firstChild.nodeValue ? e.remove(o) : (a = e, (u = o) && "A" === u.nodeName && a.isEmpty(u) && e.remove(o));
                    var a, u
                }
            }(y, C, f), function(e, t) {
                var n;
                t.normalize(), (n = t.lastChild) && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0)) || e.add(t, "br")
            }(y, c), y.isEmpty(c) && jC(c), f.normalize(), y.isEmpty(f) ? (y.remove(f), r()) : nz(a, f)), y.setAttrib(f, "id", ""), a.fire("NewBlock", {
                newBlock: f
            })))
        },
        cz = function(e, t) {
            return !! function(e) {
                return Ge.isBr(e.getNode())
            }(Ds.after(t)) || Pc.nextPosition(e, Ds.after(t)).map(function(e) {
                return Ge.isBr(e.getNode())
            }).getOr(!1)
        },
        lz = function(e, t) {
            var n = function(e) {
                var t = d(Ky.isInlineTarget, e),
                    n = Ds.fromRangeStart(e.selection.getRng());
                return Jy(t, e.getBody(), n).filter(tw)
            }(e);
            n.isSome() ? n.each(d(nw, e)) : JC(e, t)
        },
        fz = function(e) {
            return rw(e, pf(e))
        },
        dz = function(e) {
            return rw(e, vf(e))
        },
        hz = jf([{
            br: []
        }, {
            block: []
        }, {
            none: []
        }]),
        mz = function(e, t) {
            return Xy([hw([ow], hz.none()), hw([uw("summary", !0)], hz.br()), hw([sw(!0), cw(!1), fw], hz.br()), hw([sw(!0), cw(!1)], hz.block()), hw([sw(!0), cw(!0), fw], hz.block()), hw([sw(!0), cw(!0)], hz.br()), hw([aw(!0), fw], hz.br()), hw([aw(!0)], hz.block()), hw([iw(!0), fw, dw], hz.block()), hw([iw(!0)], hz.br()), hw([lw], hz.br()), hw([iw(!1), fw], hz.br()), hw([dw], hz.block())], [e, !(!t || !t.shiftKey)]).getOr(hz.none())
        },
        gz = function(e, t) {
            mz(e, t).fold(function() {
                lz(e, t)
            }, function() {
                sz(e, t)
            }, i)
        },
        pz = function(t) {
            t.on("keydown", function(e) {
                e.keyCode === Ah.ENTER && function(e, t) {
                    t.isDefaultPrevented() || (t.preventDefault(), function(e) {
                        e.typing && (e.typing = !1, e.add())
                    }(e.undoManager), e.undoManager.transact(function() {
                        !1 === e.selection.isCollapsed() && e.execCommand("Delete"), gz(e, t)
                    }))
                }(t, e)
            })
        },
        vz = d(mw, "\xa0"),
        yz = d(mw, " "),
        bz = function(t) {
            t.on("keydown", function(e) {
                !1 === e.isDefaultPrevented() && function(e, t) {
                    Nx([{
                        keyCode: Ah.SPACEBAR,
                        action: Ex(Aw, e)
                    }], t).each(function(e) {
                        t.preventDefault()
                    })
                }(t, e)
            })
        },
        Cz = function(e) {
            e.on("keyup compositionstart", d(Rw, e))
        },
        wz = oe().browser,
        xz = function(t) {
            t.on("keydown", function(e) {
                !1 === e.isDefaultPrevented() && function(e, t) {
                    Nx([{
                        keyCode: Ah.END,
                        action: hb(e, !0)
                    }, {
                        keyCode: Ah.HOME,
                        action: hb(e, !1)
                    }], t).each(function(e) {
                        t.preventDefault()
                    })
                }(t, e)
            })
        },
        zz = function(e) {
            var t = nb.setupSelectedState(e);
            Cz(e), Sx(e, t), tz(e, t), pz(e), bz(e), Dw(e), xz(e)
        },
        Ez = Xi.DOM,
        Nz = function(t, e) {
            var n, r, o = t.settings,
                i = t.getElement(),
                a = t.getDoc();
            o.inline || (t.getElement().style.visibility = t.orgVisibility), e || t.inline || (a.open(), a.write(t.iframeHTML), a.close()), t.inline && (t.on("remove", function() {
                var e = this.getBody();
                Ez.removeClass(e, "mce-content-body"), Ez.removeClass(e, "mce-edit-focus"), Ez.setAttrib(e, "contentEditable", null)
            }), Ez.addClass(i, "mce-content-body"), t.contentDocument = a = j.document, t.contentWindow = j.window, t.bodyElement = i, t.contentAreaContainer = i, o.root_name = i.nodeName.toLowerCase()), (n = t.getBody()).disabled = !0, t.readonly = o.readonly, t.readonly || (t.inline && "static" === Ez.getStyle(n, "position", !0) && (n.style.position = "relative"), n.contentEditable = t.getParam("content_editable_state", !0)), n.disabled = !1, t.editorUpload = th(t), t.schema = pr(o), t.dom = Xi(a, {
                keep_values: !0,
                url_converter: t.convertURL,
                url_converter_scope: t,
                hex_colors: o.force_hex_style_colors,
                update_styles: !0,
                root_element: t.inline ? t.getBody() : null,
                collect: function() {
                    return t.inline
                },
                schema: t.schema,
                contentCssCors: Df(t),
                referrerPolicy: _f(t),
                onSetAttrib: function(e) {
                    t.fire("SetAttrib", e)
                }
            }), t.parser = function(u) {
                var e = Np(u.settings, u.schema);
                return e.addAttributeFilter("src,href,style,tabindex", function(e, t) {
                    for (var n, r, o, i = e.length, a = u.dom; i--;)
                        if (r = (n = e[i]).attr(t), o = "data-mce-" + t, !n.attr(o)) {
                            if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
                            "style" === t ? ((r = a.serializeStyle(a.parseStyle(r), n.name)).length || (r = null), n.attr(o, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(o, r), n.attr(t, null)) : n.attr(o, u.convertURL(r, t, n.name))
                        }
                }), e.addNodeFilter("script", function(e) {
                    for (var t, n, r = e.length; r--;) 0 !== (n = (t = e[r]).attr("type") || "no/type").indexOf("mce-") && t.attr("type", "mce-" + n)
                }), e.addNodeFilter("#cdata", function(e) {
                    for (var t, n = e.length; n--;)(t = e[n]).type = 8, t.name = "#comment", t.value = "[CDATA[" + t.value + "]]"
                }), e.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) {
                    for (var t, n = e.length, r = u.schema.getNonEmptyElements(); n--;)(t = e[n]).isEmpty(r) && 0 === t.getAll("br").length && (t.append(new ul("br", 1)).shortEnded = !0)
                }), e
            }(t), t.serializer = Ap(o, t), t.selection = ly(t.dom, t.getWin(), t.serializer, t), t.annotator = nl(t), t.formatter = Cp(t), t.undoManager = mm(t), t._nodeChangeDispatcher = new ph(t), t._selectionOverrides = om(t), Hw(t), Ow(t), zz(t), dh(t), t.fire("PreInit"), o.browser_spellcheck || o.gecko_spellcheck || (a.body.spellcheck = !1, Ez.setAttrib(n, "spellcheck", "false")), t.quirks = _w(t), t.fire("PostRender");
            var u = Vf(t);
            u !== undefined && (n.dir = u), o.protect && t.on("BeforeSetContent", function(t) {
                    Mn.each(o.protect, function(e) {
                        t.content = t.content.replace(e, function(e) {
                            return "\x3c!--mce:protected " + escape(e) + "--\x3e"
                        })
                    })
                }), t.on("SetContent", function() {
                    t.addVisual(t.getBody())
                }), t.load({
                    initial: !0,
                    format: "html"
                }), t.startContent = t.getContent({
                    format: "raw"
                }), t.on("compositionstart compositionend", function(e) {
                    t.composing = "compositionstart" === e.type
                }), 0 < t.contentStyles.length && (r = "", Mn.each(t.contentStyles, function(e) {
                    r += e + "\r\n"
                }), t.dom.addStyle(r)),
                function(e) {
                    return e.inline ? Ez.styleSheetLoader : e.dom.styleSheetLoader
                }(t).loadAll(t.contentCSS, function(e) {
                    Pw(t)
                }, function(e) {
                    Pw(t)
                }), o.content_style && function(e, t) {
                    var n = yt.fromDom(e.getDoc().head),
                        r = yt.fromTag("style");
                    Tt(r, "type", "text/css"), Di(r, yt.fromText(t)), Di(n, r)
                }(t, o.content_style)
        },
        Sz = Xi.DOM,
        kz = function(e, t) {
            var n = Lw(e, t);
            t.editorContainer && (Sz.get(t.editorContainer).style.display = e.orgDisplay, e.hidden = Sz.isHidden(t.editorContainer)), e.getElement().style.display = "none", Sz.setAttrib(e.id, "aria-hidden", "true"), n || Nz(e)
        },
        Tz = Xi.DOM,
        Az = function(t, n, e) {
            var r = jd.get(e),
                o = jd.urls[e] || t.documentBaseUrl.replace(/\/$/, "");
            if (e = Mn.trim(e), r && -1 === Mn.inArray(n, e)) {
                if (Mn.each(jd.dependencies(e), function(e) {
                        Az(t, n, e)
                    }), t.plugins[e]) return;
                try {
                    var i = new r(t, o, t.$);
                    (t.plugins[e] = i).init && (i.init(t, o), n.push(e))
                } catch (yN) {
                    Fd.pluginInitError(t, e, yN)
                }
            }
        },
        Mz = function(e) {
            e.fire("ScriptsLoaded"),
                function(n) {
                    var e = Mn.trim(n.settings.icons),
                        r = n.ui.registry.getAll().icons,
                        t = G(G({}, {
                            "accessibility-check": '<svg width="24" height="24"><path d="M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm8 7h-5v12c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5c0-.6-.4-1-1-1a1 1 0 0 0-1 1v5c0 .6-.4 1-1 1a1 1 0 0 1-1-1V9H4a1 1 0 1 1 0-2h16c.6 0 1 .4 1 1s-.4 1-1 1z" fill-rule="nonzero"/></svg>',
                            "action-next": '<svg width="24" height="24"><path fill-rule="nonzero" d="M5.7 7.3a1 1 0 0 0-1.4 1.4l7.7 7.7 7.7-7.7a1 1 0 1 0-1.4-1.4L12 13.6 5.7 7.3z"/></svg>',
                            "action-prev": '<svg width="24" height="24"><path fill-rule="nonzero" d="M18.3 15.7a1 1 0 0 0 1.4-1.4L12 6.6l-7.7 7.7a1 1 0 0 0 1.4 1.4L12 9.4l6.3 6.3z"/></svg>',
                            "align-center": '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                            "align-justify": '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                            "align-left": '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                            "align-none": '<svg width="24" height="24"><path d="M14.2 5L13 7H5a1 1 0 1 1 0-2h9.2zm4 0h.8a1 1 0 0 1 0 2h-2l1.2-2zm-6.4 4l-1.2 2H5a1 1 0 0 1 0-2h6.8zm4 0H19a1 1 0 0 1 0 2h-4.4l1.2-2zm-6.4 4l-1.2 2H5a1 1 0 0 1 0-2h4.4zm4 0H19a1 1 0 0 1 0 2h-6.8l1.2-2zM7 17l-1.2 2H5a1 1 0 0 1 0-2h2zm4 0h8a1 1 0 0 1 0 2H9.8l1.2-2zm5.2-13.5l1.3.7-9.7 16.3-1.3-.7 9.7-16.3z" fill-rule="evenodd"/></svg>',
                            "align-right": '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                            "arrow-left": '<svg width="24" height="24"><path d="M5.6 13l12 6a1 1 0 0 0 1.4-1V6a1 1 0 0 0-1.4-.9l-12 6a1 1 0 0 0 0 1.8z" fill-rule="evenodd"/></svg>',
                            "arrow-right": '<svg width="24" height="24"><path d="M18.5 13l-12 6A1 1 0 0 1 5 18V6a1 1 0 0 1 1.4-.9l12 6a1 1 0 0 1 0 1.8z" fill-rule="evenodd"/></svg>',
                            bold: '<svg width="24" height="24"><path d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z" fill-rule="evenodd"/></svg>',
                            bookmark: '<svg width="24" height="24"><path d="M6 4v17l6-4 6 4V4c0-.6-.4-1-1-1H7a1 1 0 0 0-1 1z" fill-rule="nonzero"/></svg>',
                            "border-width": '<svg width="24" height="24"><path d="M5 14.8h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm-.5 3.7h15c.3 0 .5.2.5.5s-.2.5-.5.5h-15a.5.5 0 1 1 0-1zm.5-8.3h14c.6 0 1 .4 1 1v1c0 .5-.4 1-1 1H5a1 1 0 0 1-1-1v-1c0-.6.4-1 1-1zm0-5.7h14c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-2c0-.6.4-1 1-1z" fill-rule="evenodd"/></svg>',
                            brightness: '<svg width="24" height="24"><path d="M12 17c.3 0 .5.1.7.3.2.2.3.4.3.7v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7v-1c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3zm0-10a1 1 0 0 1-.7-.3A1 1 0 0 1 11 6V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3zm7 4c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-1a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h1zM7 12c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H5a1 1 0 0 1-.7-.3A1 1 0 0 1 4 12c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h1c.3 0 .5.1.7.3.2.2.3.4.3.7zm10 3.5l.7.8c.2.1.3.4.3.6 0 .3-.1.6-.3.8a1 1 0 0 1-.8.3 1 1 0 0 1-.6-.3l-.8-.7a1 1 0 0 1-.3-.8c0-.2.1-.5.3-.7a1 1 0 0 1 1.4 0zm-10-7l-.7-.8a1 1 0 0 1-.3-.6c0-.3.1-.6.3-.8.2-.2.5-.3.8-.3.2 0 .5.1.7.3l.7.7c.2.2.3.5.3.8 0 .2-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.8-.3zm10 0a1 1 0 0 1-.8.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.6.3-.8l.8-.7c.1-.2.4-.3.6-.3.3 0 .6.1.8.3.2.2.3.5.3.8 0 .2-.1.5-.3.7l-.7.7zm-10 7c.2-.2.5-.3.8-.3.2 0 .5.1.7.3a1 1 0 0 1 0 1.4l-.8.8a1 1 0 0 1-.6.3 1 1 0 0 1-.8-.3 1 1 0 0 1-.3-.8c0-.2.1-.5.3-.6l.7-.8zM12 8a4 4 0 0 1 3.7 2.4 4 4 0 0 1 0 3.2A4 4 0 0 1 12 16a4 4 0 0 1-3.7-2.4 4 4 0 0 1 0-3.2A4 4 0 0 1 12 8zm0 6.5c.7 0 1.3-.2 1.8-.7.5-.5.7-1.1.7-1.8s-.2-1.3-.7-1.8c-.5-.5-1.1-.7-1.8-.7s-1.3.2-1.8.7c-.5.5-.7 1.1-.7 1.8s.2 1.3.7 1.8c.5.5 1.1.7 1.8.7z" fill-rule="evenodd"/></svg>',
                            browse: '<svg width="24" height="24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4v-2h4V8H5v10h4v2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm-8 9.4l-2.3 2.3a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L13 13.4V20a1 1 0 0 1-2 0v-6.6z" fill-rule="nonzero"/></svg>',
                            cancel: '<svg width="24" height="24"><path d="M12 4.6a7.4 7.4 0 1 1 0 14.8 7.4 7.4 0 0 1 0-14.8zM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 8L14.8 8l1 1.1-2.7 2.8 2.7 2.7-1.1 1.1-2.7-2.7-2.7 2.7-1-1.1 2.6-2.7-2.7-2.7 1-1.1 2.8 2.7z" fill-rule="nonzero"/></svg>',
                            "change-case": '<svg width="24" height="24"><path d="M18.4 18.2v-.6c-.5.8-1.3 1.2-2.4 1.2-2.2 0-3.3-1.6-3.3-4.8 0-3.1 1-4.7 3.3-4.7 1.1 0 1.8.3 2.4 1.1v-.6c0-.5.4-.8.8-.8s.8.3.8.8v8.4c0 .5-.4.8-.8.8a.8.8 0 0 1-.8-.8zm-2-7.4c-1.3 0-1.8.9-1.8 3.2 0 2.4.5 3.3 1.7 3.3 1.3 0 1.8-.9 1.8-3.2 0-2.4-.5-3.3-1.7-3.3zM10 15.7H5.5l-.8 2.6a1 1 0 0 1-1 .7h-.2a.7.7 0 0 1-.7-1l4-12a1 1 0 1 1 2 0l4 12a.7.7 0 0 1-.8 1h-.2a1 1 0 0 1-1-.7l-.8-2.6zm-.3-1.5l-2-6.5-1.9 6.5h3.9z" fill-rule="evenodd"/></svg>',
                            "character-count": '<svg width="24" height="24"><path d="M4 11.5h16v1H4v-1zm4.8-6.8V10H7.7V5.8h-1v-1h2zM11 8.3V9h2v1h-3V7.7l2-1v-.9h-2v-1h3v2.4l-2 1zm6.3-3.4V10h-3.1V9h2.1V8h-2.1V6.8h2.1v-1h-2.1v-1h3.1zM5.8 16.4c0-.5.2-.8.5-1 .2-.2.6-.3 1.2-.3l.8.1c.2 0 .4.2.5.3l.4.4v2.8l.2.3H8.2v-.1-.2l-.6.3H7c-.4 0-.7 0-1-.2a1 1 0 0 1-.3-.9c0-.3 0-.6.3-.8.3-.2.7-.4 1.2-.4l.6-.2h.3v-.2l-.1-.2a.8.8 0 0 0-.5-.1 1 1 0 0 0-.4 0l-.3.4h-1zm2.3.8h-.2l-.2.1-.4.1a1 1 0 0 0-.4.2l-.2.2.1.3.5.1h.4l.4-.4v-.6zm2-3.4h1.2v1.7l.5-.3h.5c.5 0 .9.1 1.2.5.3.4.5.8.5 1.4 0 .6-.2 1.1-.5 1.5-.3.4-.7.6-1.3.6l-.6-.1-.4-.4v.4h-1.1v-5.4zm1.1 3.3c0 .3 0 .6.2.8a.7.7 0 0 0 1.2 0l.2-.8c0-.4 0-.6-.2-.8a.7.7 0 0 0-.6-.3l-.6.3-.2.8zm6.1-.5c0-.2 0-.3-.2-.4a.8.8 0 0 0-.5-.2c-.3 0-.5.1-.6.3l-.2.9c0 .3 0 .6.2.8.1.2.3.3.6.3.2 0 .4 0 .5-.2l.2-.4h1.1c0 .5-.3.8-.6 1.1a2 2 0 0 1-1.3.4c-.5 0-1-.2-1.3-.6a2 2 0 0 1-.5-1.4c0-.6.1-1.1.5-1.5.3-.4.8-.5 1.4-.5.5 0 1 0 1.2.3.4.3.5.7.5 1.2h-1v-.1z" fill-rule="evenodd"/></svg>',
                            "checklist-rtl": '<svg width="24" height="24"><path d="M5 17h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm14.2 11c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 20c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 14c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 8c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8z" fill-rule="evenodd"/></svg>',
                            checklist: '<svg width="24" height="24"><path d="M11 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zM7.2 16c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 20c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 14c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 8c-.2.3-.7.4-1 0L3.8 6.9a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8z" fill-rule="evenodd"/></svg>',
                            checkmark: '<svg width="24" height="24"><path d="M18.2 5.4a1 1 0 0 1 1.6 1.2l-8 12a1 1 0 0 1-1.5.1l-5-5a1 1 0 1 1 1.4-1.4l4.1 4.1 7.4-11z" fill-rule="nonzero"/></svg>',
                            "chevron-down": '<svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"/></svg>',
                            "chevron-left": '<svg width="10" height="10"><path d="M7.8 1.3L4 5l3.8 3.7c.3.3.3.8 0 1-.4.4-.9.4-1.2 0L2.2 5.7a.8.8 0 0 1 0-1.2L6.6.2C7 0 7.4 0 7.8.2c.3.3.3.8 0 1.1z" fill-rule="nonzero"/></svg>',
                            "chevron-right": '<svg width="10" height="10"><path d="M2.2 1.3a.8.8 0 0 1 0-1c.4-.4.9-.4 1.2 0l4.4 4.1c.3.4.3.9 0 1.2L3.4 9.8c-.3.3-.8.3-1.2 0a.8.8 0 0 1 0-1.1L6 5 2.2 1.3z" fill-rule="nonzero"/></svg>',
                            "chevron-up": '<svg width="10" height="10"><path d="M8.7 7.8L5 4 1.3 7.8c-.3.3-.8.3-1 0a.8.8 0 0 1 0-1.2l4.1-4.4c.3-.3.9-.3 1.2 0l4.2 4.4c.3.3.3.9 0 1.2-.3.3-.8.3-1.1 0z" fill-rule="nonzero"/></svg>',
                            close: '<svg width="24" height="24"><path d="M17.3 8.2L13.4 12l3.9 3.8a1 1 0 0 1-1.5 1.5L12 13.4l-3.8 3.9a1 1 0 0 1-1.5-1.5l3.9-3.8-3.9-3.8a1 1 0 0 1 1.5-1.5l3.8 3.9 3.8-3.9a1 1 0 0 1 1.5 1.5z" fill-rule="evenodd"/></svg>',
                            "code-sample": '<svg width="24" height="26"><path d="M7.1 11a2.8 2.8 0 0 1-.8 2 2.8 2.8 0 0 1 .8 2v1.7c0 .3.1.6.4.8.2.3.5.4.8.4.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.7 0-1.4-.3-2-.8-.5-.6-.8-1.3-.8-2V15c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4v-.8c0-.2.2-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V9.3c0-.7.3-1.4.8-2 .6-.5 1.3-.8 2-.8.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8V11zm9.8 0V9.3c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4V7c0-.2.1-.4.4-.4.7 0 1.4.3 2 .8.5.6.8 1.3.8 2V11c0 .3.1.6.4.8.2.3.5.4.8.4.2 0 .4.2.4.4v.8c0 .2-.2.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8v1.7c0 .7-.3 1.4-.8 2-.6.5-1.3.8-2 .8a.4.4 0 0 1-.4-.4v-.8c0-.2.1-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V15a2.8 2.8 0 0 1 .8-2 2.8 2.8 0 0 1-.8-2zm-3.3-.4c0 .4-.1.8-.5 1.1-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1 0-.5.1-.9.5-1.2.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4.4.3.5.7.5 1.2zM12 13c.4 0 .8.1 1.1.5.4.3.5.7.5 1.1 0 1-.1 1.6-.5 2a3 3 0 0 1-1.1 1c-.4.3-.8.4-1.1.4a.5.5 0 0 1-.5-.5V17a3 3 0 0 0 1-.2l.6-.6c-.6 0-1-.2-1.3-.5-.2-.3-.3-.7-.3-1 0-.5.1-1 .5-1.2.3-.4.7-.5 1.1-.5z" fill-rule="evenodd"/></svg>',
                            "color-levels": '<svg width="24" height="24"><path d="M17.5 11.4A9 9 0 0 1 18 14c0 .5 0 1-.2 1.4 0 .4-.3.9-.5 1.3a6.2 6.2 0 0 1-3.7 3 5.7 5.7 0 0 1-3.2 0A5.9 5.9 0 0 1 7.6 18a6.2 6.2 0 0 1-1.4-2.6 6.7 6.7 0 0 1 0-2.8c0-.4.1-.9.3-1.3a13.6 13.6 0 0 1 2.3-4A20 20 0 0 1 12 4a26.4 26.4 0 0 1 3.2 3.4 18.2 18.2 0 0 1 2.3 4zm-2 4.5c.4-.7.5-1.4.5-2a7.3 7.3 0 0 0-1-3.2c.2.6.2 1.2.2 1.9a4.5 4.5 0 0 1-1.3 3 5.3 5.3 0 0 1-2.3 1.5 4.9 4.9 0 0 1-2 .1 4.3 4.3 0 0 0 2.4.8 4 4 0 0 0 2-.6 4 4 0 0 0 1.5-1.5z" fill-rule="evenodd"/></svg>',
                            "color-picker": '<svg width="24" height="24"><path d="M12 3a9 9 0 0 0 0 18 1.5 1.5 0 0 0 1.1-2.5c-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill-rule="nonzero"/></svg>',
                            "color-swatch-remove-color": '<svg width="24" height="24"><path stroke="#000" stroke-width="2" d="M21 3L3 21" fill-rule="evenodd"/></svg>',
                            "color-swatch": '<svg width="24" height="24"><rect x="3" y="3" width="18" height="18" rx="1" fill-rule="evenodd"/></svg>',
                            "comment-add": '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6.4L7 23z"/><path d="M13 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2z"/></g></svg>',
                            comment: '<svg width="24" height="24"><path fill-rule="nonzero" d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6.4L7 23z"/></svg>',
                            contrast: '<svg width="24" height="24"><path d="M12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4zm-6 8a6 6 0 0 0 6 6V6a6 6 0 0 0-6 6z" fill-rule="evenodd"/></svg>',
                            copy: '<svg width="24" height="24"><path d="M16 3H6a2 2 0 0 0-2 2v11h2V5h10V3zm1 4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9c0-1.2.9-2 2-2h7zm0 12V9h-7v10h7z" fill-rule="nonzero"/></svg>',
                            crop: '<svg width="24" height="24"><path d="M17 8v7h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v2c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-2H7V9H5a1 1 0 1 1 0-2h2V5c0-.6.4-1 1-1s1 .4 1 1v2h7l3-3 1 1-3 3zM9 9v5l5-5H9zm1 6h5v-5l-5 5z" fill-rule="evenodd"/></svg>',
                            cut: '<svg width="24" height="24"><path d="M18 15c.6.7 1 1.4 1 2.3 0 .8-.2 1.5-.7 2l-.8.5-1 .2c-.4 0-.8 0-1.2-.3a3.9 3.9 0 0 1-2.1-2.2c-.2-.5-.3-1-.2-1.5l-1-1-1 1c0 .5 0 1-.2 1.5-.1.5-.4 1-.9 1.4-.3.4-.7.6-1.2.8l-1.2.3c-.4 0-.7 0-1-.2-.3 0-.6-.3-.8-.5-.5-.5-.8-1.2-.7-2 0-.9.4-1.6 1-2.2A3.7 3.7 0 0 1 8.6 14H9l1-1-4-4-.5-1a3.3 3.3 0 0 1 0-2c0-.4.3-.7.5-1l6 6 6-6 .5 1a3.3 3.3 0 0 1 0 2c0 .4-.3.7-.5 1l-4 4 1 1h.5c.4 0 .8 0 1.2.3.5.2.9.4 1.2.8zm-8.5 2.2l.1-.4v-.3-.4a1 1 0 0 0-.2-.5 1 1 0 0 0-.4-.2 1.6 1.6 0 0 0-.8 0 2.6 2.6 0 0 0-.8.3 2.5 2.5 0 0 0-.9 1.1l-.1.4v.7l.2.5.5.2h.7a2.5 2.5 0 0 0 .8-.3 2.8 2.8 0 0 0 1-1zm2.5-2.8c.4 0 .7-.1 1-.4.3-.3.4-.6.4-1s-.1-.7-.4-1c-.3-.3-.6-.4-1-.4s-.7.1-1 .4c-.3.3-.4.6-.4 1s.1.7.4 1c.3.3.6.4 1 .4zm5.4 4l.2-.5v-.4-.3a2.6 2.6 0 0 0-.3-.8 2.4 2.4 0 0 0-.7-.7 2.5 2.5 0 0 0-.8-.3 1.5 1.5 0 0 0-.8 0 1 1 0 0 0-.4.2 1 1 0 0 0-.2.5 1.5 1.5 0 0 0 0 .7v.4l.3.4.3.4a2.8 2.8 0 0 0 .8.5l.4.1h.7l.5-.2z" fill-rule="evenodd"/></svg>',
                            "document-properties": '<svg width="24" height="24"><path d="M14.4 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7.6L14.4 3zM17 19H7V5h6v4h4v10z" fill-rule="nonzero"/></svg>',
                            drag: '<svg width="24" height="24"><path d="M13 5h2v2h-2V5zm0 4h2v2h-2V9zM9 9h2v2H9V9zm4 4h2v2h-2v-2zm-4 0h2v2H9v-2zm0 4h2v2H9v-2zm4 0h2v2h-2v-2zM9 5h2v2H9V5z" fill-rule="evenodd"/></svg>',
                            duplicate: '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M16 3v2H6v11H4V5c0-1.1.9-2 2-2h10zm3 8h-2V9h-7v10h9a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9c0-1.2.9-2 2-2h7a2 2 0 0 1 2 2v2z"/><path d="M17 14h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1z"/></g></svg>',
                            "edit-block": '<svg width="24" height="24"><path fill-rule="nonzero" d="M19.8 8.8l-9.4 9.4c-.2.2-.5.4-.9.4l-5.4 1.2 1.2-5.4.5-.8 9.4-9.4c.7-.7 1.8-.7 2.5 0l2.1 2.1c.7.7.7 1.8 0 2.5zm-2-.2l1-.9v-.3l-2.2-2.2a.3.3 0 0 0-.3 0l-1 1L18 8.5zm-1 1l-2.5-2.4-6 6 2.5 2.5 6-6zm-7 7.1l-2.6-2.4-.3.3-.1.2-.7 3 3.1-.6h.1l.4-.5z"/></svg>',
                            "edit-image": '<svg width="24" height="24"><path d="M18 16h2V7a2 2 0 0 0-2-2H7v2h11v9zM6 17h15a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H6a2 2 0 0 1-2-2V7H3a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0v13zm3-5.3l1.3 2 3-4.7 3.7 6H7l2-3.3z" fill-rule="nonzero"/></svg>',
                            "embed-page": '<svg width="24" height="24"><path d="M19 6V5H5v14h2A13 13 0 0 1 19 6zm0 1.4c-.8.8-1.6 2.4-2.2 4.6H19V7.4zm0 5.6h-2.4c-.4 1.8-.6 3.8-.6 6h3v-6zm-4 6c0-2.2.2-4.2.6-6H13c-.7 1.8-1.1 3.8-1.1 6h3zm-4 0c0-2.2.4-4.2 1-6H9.6A12 12 0 0 0 8 19h3zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm11.8 9c.4-1.9 1-3.4 1.8-4.5a9.2 9.2 0 0 0-4 4.5h2.2zm-3.4 0a12 12 0 0 1 2.8-4 12 12 0 0 0-5 4h2.2z" fill-rule="nonzero"/></svg>',
                            embed: '<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 0 1 0 .8l-5.6 4A.5.5 0 0 1 9 16V8a.5.5 0 0 1 .8-.4z" fill-rule="nonzero"/></svg>',
                            emoji: '<svg width="24" height="24"><path d="M9 11c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 0 0-1 1c0 .6.4 1 1 1zm6 0c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 0 0-1 1c0 .6.4 1 1 1zm-3 5.5c2.1 0 4-1.5 4.4-3.5H7.6c.5 2 2.3 3.5 4.4 3.5zM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z" fill-rule="nonzero"/></svg>',
                            fill: '<svg width="24" height="26"><path d="M16.6 12l-9-9-1.4 1.4 2.4 2.4-5.2 5.1c-.5.6-.5 1.6 0 2.2L9 19.6a1.5 1.5 0 0 0 2.2 0l5.5-5.5c.5-.6.5-1.6 0-2.2zM5.2 13L10 8.2l4.8 4.8H5.2zM19 14.5s-2 2.2-2 3.5c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.3-2-3.5-2-3.5z" fill-rule="nonzero"/></svg>',
                            "flip-horizontally": '<svg width="24" height="24"><path d="M14 19h2v-2h-2v2zm4-8h2V9h-2v2zM4 7v10c0 1.1.9 2 2 2h3v-2H6V7h3V5H6a2 2 0 0 0-2 2zm14-2v2h2a2 2 0 0 0-2-2zm-7 16h2V3h-2v18zm7-6h2v-2h-2v2zm-4-8h2V5h-2v2zm4 12a2 2 0 0 0 2-2h-2v2z" fill-rule="nonzero"/></svg>',
                            "flip-vertically": '<svg width="24" height="24"><path d="M5 14v2h2v-2H5zm8 4v2h2v-2h-2zm4-14H7a2 2 0 0 0-2 2v3h2V6h10v3h2V6a2 2 0 0 0-2-2zm2 14h-2v2a2 2 0 0 0 2-2zM3 11v2h18v-2H3zm6 7v2h2v-2H9zm8-4v2h2v-2h-2zM5 18c0 1.1.9 2 2 2v-2H5z" fill-rule="nonzero"/></svg>',
                            "format-painter": '<svg width="24" height="24"><path d="M18 5V4c0-.5-.4-1-1-1H5a1 1 0 0 0-1 1v4c0 .6.5 1 1 1h12c.6 0 1-.4 1-1V7h1v4H9v9c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-7h8V5h-3z" fill-rule="nonzero"/></svg>',
                            fullscreen: '<svg width="24" height="24"><path d="M15.3 10l-1.2-1.3 2.9-3h-2.3a.9.9 0 1 1 0-1.7H19c.5 0 .9.4.9.9v4.4a.9.9 0 1 1-1.8 0V7l-2.9 3zm0 4l3 3v-2.3a.9.9 0 1 1 1.7 0V19c0 .5-.4.9-.9.9h-4.4a.9.9 0 1 1 0-1.8H17l-3-2.9 1.3-1.2zM10 15.4l-2.9 3h2.3a.9.9 0 1 1 0 1.7H5a.9.9 0 0 1-.9-.9v-4.4a.9.9 0 1 1 1.8 0V17l2.9-3 1.2 1.3zM8.7 10L5.7 7v2.3a.9.9 0 0 1-1.7 0V5c0-.5.4-.9.9-.9h4.4a.9.9 0 0 1 0 1.8H7l3 2.9-1.3 1.2z" fill-rule="nonzero"/></svg>',
                            gallery: '<svg width="24" height="24"><path fill-rule="nonzero" d="M5 15.7l2.3-2.2c.3-.3.7-.3 1 0L11 16l5.1-5c.3-.4.8-.4 1 0l2 1.9V8H5v7.7zM5 18V19h3l1.8-1.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 6h16c.6 0 1 .4 1 1v13c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-.6.4-1 1-1zm6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4.5 4h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm2-2h11a.5.5 0 1 1 0 1h-11a.5.5 0 0 1 0-1z"/></svg>',
                            gamma: '<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm6.5 11.8V14L9.2 8.7a5.1 5.1 0 0 0-.4-.8l-.1-.2H8 8v-1l.3-.1.3-.1h.7a1 1 0 0 1 .6.5l.1.3a8.5 8.5 0 0 1 .3.6l1.9 4.6 2-5.2a1 1 0 0 1 1-.6.5.5 0 0 1 .5.6L13 14v2.8a.7.7 0 0 1-1.4 0z" fill-rule="nonzero"/></svg>',
                            help: '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M12 5.5a6.5 6.5 0 0 0-6 9 6.3 6.3 0 0 0 1.4 2l1 1a6.3 6.3 0 0 0 3.6 1 6.5 6.5 0 0 0 6-9 6.3 6.3 0 0 0-1.4-2l-1-1a6.3 6.3 0 0 0-3.6-1zM12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4z"/><path d="M9.6 9.7a.7.7 0 0 1-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 0 0-.8.8.8.8 0 0 1-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z" fill-rule="nonzero"/><circle cx="12" cy="16" r="1"/></g></svg>',
                            "highlight-bg-color": '<svg width="24" height="24"><g fill-rule="evenodd"><path id="tox-icon-highlight-bg-color__color" d="M3 18h18v3H3z"/><path fill-rule="nonzero" d="M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 0 1 2.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6"/></g></svg>',
                            home: '<svg width="24" height="24"><path fill-rule="nonzero" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
                            "horizontal-rule": '<svg width="24" height="24"><path d="M4 11h16v2H4z" fill-rule="evenodd"/></svg>',
                            "image-options": '<svg width="24" height="24"><path d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2z" fill-rule="nonzero"/></svg>',
                            image: '<svg width="24" height="24"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill-rule="nonzero"/></svg>',
                            indent: '<svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6z" fill-rule="evenodd"/></svg>',
                            info: '<svg width="24" height="24"><path d="M12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4zm-1 3v2h2V7h-2zm3 10v-1h-1v-5h-3v1h1v4h-1v1h4z" fill-rule="evenodd"/></svg>',
                            "insert-character": '<svg width="24" height="24"><path d="M15 18h4l1-2v4h-6v-3.3l1.4-1a6 6 0 0 0 1.8-2.9 6.3 6.3 0 0 0-.1-4.1 5.8 5.8 0 0 0-3-3.2c-.6-.3-1.3-.5-2.1-.5a5.1 5.1 0 0 0-3.9 1.8 6.3 6.3 0 0 0-1.3 6 6.2 6.2 0 0 0 1.8 3l1.4.9V20H4v-4l1 2h4v-.5l-2-1L5.4 15A6.5 6.5 0 0 1 4 11c0-1 .2-1.9.6-2.7A7 7 0 0 1 6.3 6C7.1 5.4 8 5 9 4.5c1-.3 2-.5 3.1-.5a8.8 8.8 0 0 1 5.7 2 7 7 0 0 1 1.7 2.3 6 6 0 0 1 .2 4.8c-.2.7-.6 1.3-1 1.9a7.6 7.6 0 0 1-3.6 2.5v.5z" fill-rule="evenodd"/></svg>',
                            "insert-time": '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 2a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"/><path d="M16 12h-3V7c0-.6-.4-1-1-1a1 1 0 0 0-1 1v7h5c.6 0 1-.4 1-1s-.4-1-1-1z"/></g></svg>',
                            invert: '<svg width="24" height="24"><path d="M18 19.3L16.5 18a5.8 5.8 0 0 1-3.1 1.9 6.1 6.1 0 0 1-5.5-1.6A5.8 5.8 0 0 1 6 14v-.3l.1-1.2A13.9 13.9 0 0 1 7.7 9l-3-3 .7-.8 2.8 2.9 9 8.9 1.5 1.6-.7.6zm0-5.5v.3l-.1 1.1-.4 1-1.2-1.2a4.3 4.3 0 0 0 .2-1v-.2c0-.4 0-.8-.2-1.3l-.5-1.4a14.8 14.8 0 0 0-3-4.2L12 6a26.1 26.1 0 0 0-2.2 2.5l-1-1a20.9 20.9 0 0 1 2.9-3.3L12 4l1 .8a22.2 22.2 0 0 1 4 5.4c.6 1.2 1 2.4 1 3.6z" fill-rule="evenodd"/></svg>',
                            italic: '<svg width="24" height="24"><path d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z" fill-rule="evenodd"/></svg>',
                            line: '<svg width="24" height="24"><path d="M15 9l-8 8H4v-3l8-8 3 3zm1-1l-3-3 1-1h1c-.2 0 0 0 0 0l2 2s0 .2 0 0v1l-1 1zM4 18h16v2H4v-2z" fill-rule="evenodd"/></svg>',
                            link: '<svg width="24" height="24"><path d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2.1 2a2 2 0 1 0 2.7 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2zm11.6-.6a1 1 0 0 1-1.4-1.4l2-2a2 2 0 1 0-2.6-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2z" fill-rule="nonzero"/></svg>',
                            "list-bull-circle": '<svg width="48" height="48"><g fill-rule="evenodd"><path d="M11 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM11 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM11 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill-rule="nonzero"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>',
                            "list-bull-default": '<svg width="48" height="48"><g fill-rule="evenodd"><circle cx="11" cy="14" r="3"/><circle cx="11" cy="24" r="3"/><circle cx="11" cy="34" r="3"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>',
                            "list-bull-square": '<svg width="48" height="48"><g fill-rule="evenodd"><path d="M8 11h6v6H8zM8 21h6v6H8zM8 31h6v6H8z"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>',
                            "list-num-default-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M37.4 17v-4.8l-1.6 1v-1.1l1.6-1h1.2V17zM33.3 17.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm1.7 5.7c0-1.2 1-2 2.2-2 1.3 0 2.1.8 2.1 1.8 0 .7-.3 1.2-1.3 2.2l-1.2 1v.2h2.6v1h-4.3v-.9l2-1.9c.8-.8 1-1.1 1-1.5 0-.5-.4-.8-1-.8-.5 0-.9.3-.9.9H35zm-1.7 4.3c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm3.2 7.3v-1h.7c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7s-1 .3-1 .8H35c0-1.1 1-1.8 2.2-1.8 1.2 0 2.1.6 2.1 1.6 0 .7-.4 1.2-1 1.3v.1c.7.1 1.3.7 1.3 1.4 0 1-1 1.9-2.4 1.9-1.3 0-2.2-.8-2.3-2h1.2c0 .6.5 1 1.1 1 .6 0 1-.4 1-1 0-.5-.3-.8-1-.8h-.7zm-3.3 2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7z"/></g></svg>',
                            "list-num-default": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10 17v-4.8l-1.5 1v-1.1l1.6-1h1.2V17h-1.2zm3.6.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-5 5.7c0-1.2.8-2 2.1-2s2.1.8 2.1 1.8c0 .7-.3 1.2-1.4 2.2l-1.1 1v.2h2.6v1H8.6v-.9l2-1.9c.8-.8 1-1.1 1-1.5 0-.5-.4-.8-1-.8-.5 0-.9.3-.9.9H8.5zm6.3 4.3c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM10 34.4v-1h.7c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7s-1 .3-1 .8H8.6c0-1.1 1-1.8 2.2-1.8 1.3 0 2.1.6 2.1 1.6 0 .7-.4 1.2-1 1.3v.1c.8.1 1.3.7 1.3 1.4 0 1-1 1.9-2.4 1.9-1.3 0-2.2-.8-2.3-2h1.2c0 .6.5 1 1.1 1 .7 0 1-.4 1-1 0-.5-.3-.8-1-.8h-.7zm4.7 2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7z"/></g></svg>',
                            "list-num-lower-alpha-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M36.5 16c-.9 0-1.5-.5-1.5-1.3s.6-1.3 1.8-1.4h1v-.4c0-.4-.2-.6-.7-.6-.4 0-.7.1-.8.4h-1.1c0-.8.8-1.4 2-1.4S39 12 39 13V16h-1.2v-.6c-.3.4-.8.7-1.4.7zm.4-.8c.6 0 1-.4 1-.9V14h-1c-.5.1-.7.3-.7.6 0 .4.3.6.7.6zM33.1 16.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zM37.7 26c-.7 0-1.2-.2-1.5-.7v.7H35v-6.3h1.2v2.5c.3-.5.8-.9 1.5-.9 1.1 0 1.8 1 1.8 2.4 0 1.5-.7 2.4-1.8 2.4zm-.5-3.6c-.6 0-1 .5-1 1.3s.4 1.4 1 1.4c.7 0 1-.6 1-1.4 0-.8-.3-1.3-1-1.3zM33.2 26.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zm6 7h-1c-.1-.5-.4-.8-1-.8s-1 .5-1 1.4c0 1 .4 1.4 1 1.4.5 0 .9-.2 1-.7h1c0 1-.8 1.7-2 1.7-1.4 0-2.2-.9-2.2-2.4s.8-2.4 2.2-2.4c1.2 0 2 .7 2 1.7zm-6.1 3c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                            "list-num-lower-alpha": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.3 15.2c.5 0 1-.4 1-.9V14h-1c-.5.1-.8.3-.8.6 0 .4.3.6.8.6zm-.4.9c-1 0-1.5-.6-1.5-1.4 0-.8.6-1.3 1.7-1.4h1.1v-.4c0-.4-.2-.6-.7-.6-.5 0-.8.1-.9.4h-1c0-.8.8-1.4 2-1.4 1.1 0 1.8.6 1.8 1.6V16h-1.1v-.6h-.1c-.2.4-.7.7-1.3.7zm4.6 0c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-3.2 10c-.6 0-1.2-.3-1.4-.8v.7H8.5v-6.3H10v2.5c.3-.5.8-.9 1.4-.9 1.2 0 1.9 1 1.9 2.4 0 1.5-.7 2.4-1.9 2.4zm-.4-3.7c-.7 0-1 .5-1 1.3s.3 1.4 1 1.4c.6 0 1-.6 1-1.4 0-.8-.4-1.3-1-1.3zm4 3.7c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-2.2 7h-1.2c0-.5-.4-.8-.9-.8-.6 0-1 .5-1 1.4 0 1 .4 1.4 1 1.4.5 0 .8-.2 1-.7h1c0 1-.8 1.7-2 1.7-1.4 0-2.2-.9-2.2-2.4s.8-2.4 2.2-2.4c1.2 0 2 .7 2 1.7zm1.8 3c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                            "list-num-lower-greek-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M37.4 16c-1.2 0-2-.8-2-2.3 0-1.5.8-2.4 2-2.4.6 0 1 .4 1.3 1v-.9H40v3.2c0 .4.1.5.4.5h.2v.9h-.6c-.6 0-1-.2-1-.7h-.2c-.2.4-.7.8-1.3.8zm.3-1c.6 0 1-.5 1-1.3s-.4-1.3-1-1.3-1 .5-1 1.3.4 1.4 1 1.4zM33.3 16.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM36 21.9c0-1.5.8-2.3 2.1-2.3 1.2 0 2 .6 2 1.6 0 .6-.3 1-.9 1.3.9.3 1.3.8 1.3 1.7 0 1.2-.7 1.9-1.8 1.9-.6 0-1.1-.3-1.4-.8v2.2H36V22zm1.8 1.2v-1h.3c.5 0 .9-.2.9-.7 0-.5-.3-.8-.9-.8-.5 0-.8.3-.8 1v2.2c0 .8.4 1.3 1 1.3s1-.4 1-1-.4-1-1.2-1h-.3zM33.3 26.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM37.1 34.6L34.8 30h1.4l1.7 3.5 1.7-3.5h1.1l-2.2 4.6v.1c.5.8.7 1.4.7 1.8 0 .4-.2.8-.4 1-.2.2-.6.3-1 .3-.9 0-1.3-.4-1.3-1.2 0-.5.2-1 .5-1.7l.1-.2zm.7 1a2 2 0 0 0-.4.9c0 .3.1.4.4.4.3 0 .4-.1.4-.4 0-.2-.1-.6-.4-1zM33.3 36.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                            "list-num-lower-greek": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.5 15c.7 0 1-.5 1-1.3s-.3-1.3-1-1.3c-.5 0-.9.5-.9 1.3s.4 1.4 1 1.4zm-.3 1c-1.1 0-1.8-.8-1.8-2.3 0-1.5.7-2.4 1.8-2.4.7 0 1.1.4 1.3 1h.1v-.9h1.2v3.2c0 .4.1.5.4.5h.2v.9h-.6c-.6 0-1-.2-1.1-.7h-.1c-.2.4-.7.8-1.4.8zm5 .1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zm-4.9 7v-1h.3c.6 0 1-.2 1-.7 0-.5-.4-.8-1-.8-.5 0-.8.3-.8 1v2.2c0 .8.4 1.3 1.1 1.3.6 0 1-.4 1-1s-.5-1-1.3-1h-.3zM8.6 22c0-1.5.7-2.3 2-2.3 1.2 0 2 .6 2 1.6 0 .6-.3 1-.8 1.3.8.3 1.3.8 1.3 1.7 0 1.2-.8 1.9-1.9 1.9-.6 0-1.1-.3-1.3-.8v2.2H8.5V22zm6.2 4.2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-4.5 8.5L8 30h1.4l1.7 3.5 1.7-3.5h1.1l-2.2 4.6v.1c.5.8.7 1.4.7 1.8 0 .4-.1.8-.4 1-.2.2-.6.3-1 .3-.9 0-1.3-.4-1.3-1.2 0-.5.2-1 .5-1.7l.1-.2zm.7 1a2 2 0 0 0-.4.9c0 .3.1.4.4.4.3 0 .4-.1.4-.4 0-.2-.1-.6-.4-1zm4.5.5c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                            "list-num-lower-roman-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M32.9 16v-1.2h-1.3V16H33zm0 10v-1.2h-1.3V26H33zm0 10v-1.2h-1.3V36H33z"/><path fill-rule="nonzero" d="M36 21h-1.5v5H36zM36 31h-1.5v5H36zM39 21h-1.5v5H39zM39 31h-1.5v5H39zM42 31h-1.5v5H42zM36 11h-1.5v5H36zM36 19h-1.5v1H36zM36 29h-1.5v1H36zM39 19h-1.5v1H39zM39 29h-1.5v1H39zM42 29h-1.5v1H42zM36 9h-1.5v1H36z"/></g></svg>',
                            "list-num-lower-roman": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M15.1 16v-1.2h1.3V16H15zm0 10v-1.2h1.3V26H15zm0 10v-1.2h1.3V36H15z"/><path fill-rule="nonzero" d="M12 21h1.5v5H12zM12 31h1.5v5H12zM9 21h1.5v5H9zM9 31h1.5v5H9zM6 31h1.5v5H6zM12 11h1.5v5H12zM12 19h1.5v1H12zM12 29h1.5v1H12zM9 19h1.5v1H9zM9 29h1.5v1H9zM6 29h1.5v1H6zM12 9h1.5v1H12z"/></g></svg>',
                            "list-num-upper-alpha-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M39.3 17l-.5-1.4h-2l-.5 1.4H35l2-6h1.6l2 6h-1.3zm-1.6-4.7l-.7 2.3h1.6l-.8-2.3zM33.4 17c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm4.7 9.9h-2.7v-6H38c1.2 0 1.9.6 1.9 1.5 0 .6-.5 1.2-1 1.3.7.1 1.3.7 1.3 1.5 0 1-.8 1.7-2 1.7zm-1.4-5v1.5h1c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7h-1zm0 4h1.1c.7 0 1.1-.3 1.1-.8 0-.6-.4-.9-1.1-.9h-1.1V26zM33 27.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm4.9 10c-1.8 0-2.8-1.1-2.8-3.1s1-3.1 2.8-3.1c1.4 0 2.5.9 2.6 2.2h-1.3c0-.7-.6-1.1-1.3-1.1-1 0-1.6.7-1.6 2s.6 2 1.6 2c.7 0 1.2-.4 1.4-1h1.2c-.1 1.3-1.2 2.2-2.6 2.2zm-4.5 0c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                            "list-num-upper-alpha": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M12.6 17l-.5-1.4h-2L9.5 17H8.3l2-6H12l2 6h-1.3zM11 12.3l-.7 2.3h1.6l-.8-2.3zm4.7 4.8c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zM11.4 27H8.7v-6h2.6c1.2 0 1.9.6 1.9 1.5 0 .6-.5 1.2-1 1.3.7.1 1.3.7 1.3 1.5 0 1-.8 1.7-2 1.7zM10 22v1.5h1c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7h-1zm0 4H11c.7 0 1.1-.3 1.1-.8 0-.6-.4-.9-1.1-.9H10V26zm5.4 1.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 10c-1.8 0-2.8-1.1-2.8-3.1s1-3.1 2.8-3.1c1.4 0 2.5.9 2.6 2.2h-1.3c0-.7-.6-1.1-1.3-1.1-1 0-1.6.7-1.6 2s.6 2 1.6 2c.7 0 1.2-.4 1.4-1h1.2c-.1 1.3-1.2 2.2-2.6 2.2zm4.5 0c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                            "list-num-upper-roman-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M31.6 17v-1.2H33V17h-1.3zm0 10v-1.2H33V27h-1.3zm0 10v-1.2H33V37h-1.3z"/><path fill-rule="nonzero" d="M34.5 20H36v7h-1.5zM34.5 30H36v7h-1.5zM37.5 20H39v7h-1.5zM37.5 30H39v7h-1.5zM40.5 30H42v7h-1.5zM34.5 10H36v7h-1.5z"/></g></svg>',
                            "list-num-upper-roman": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M15.1 17v-1.2h1.3V17H15zm0 10v-1.2h1.3V27H15zm0 10v-1.2h1.3V37H15z"/><path fill-rule="nonzero" d="M12 20h1.5v7H12zM12 30h1.5v7H12zM9 20h1.5v7H9zM9 30h1.5v7H9zM6 30h1.5v7H6zM12 10h1.5v7H12z"/></g></svg>',
                            lock: '<svg width="24" height="24"><path d="M16.3 11c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H8V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h.3zM10 8v3h4V8a1 1 0 0 0-.3-.7A1 1 0 0 0 13 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7z" fill-rule="evenodd"/></svg>',
                            ltr: '<svg width="24" height="24"><path d="M11 5h7a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V7h-2v11a1 1 0 0 1-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 7.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L11 5zM4.4 16.2L6.2 15l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6z" fill-rule="evenodd"/></svg>',
                            "more-drawer": '<svg width="24" height="24"><path d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2z" fill-rule="nonzero"/></svg>',
                            "new-document": '<svg width="24" height="24"><path d="M14.4 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7.6L14.4 3zM17 19H7V5h6v4h4v10z" fill-rule="nonzero"/></svg>',
                            "new-tab": '<svg width="24" height="24"><path d="M15 13l2-2v8H5V7h8l-2 2H7v8h8v-4zm4-8v5.5l-2-2-5.6 5.5H10v-1.4L15.5 7l-2-2H19z" fill-rule="evenodd"/></svg>',
                            "non-breaking": '<svg width="24" height="24"><path d="M11 11H8a1 1 0 1 1 0-2h3V6c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1s-.4 1-1 1h-3v3c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-3zm10 4v5H3v-5c0-.6.4-1 1-1s1 .4 1 1v3h14v-3c0-.6.4-1 1-1s1 .4 1 1z" fill-rule="evenodd"/></svg>',
                            notice: '<svg width="24" height="24"><path d="M17.8 9.8L15.4 4 20 8.5v7L15.5 20h-7L4 15.5v-7L8.5 4h7l2.3 5.8zm0 0l2.2 5.7-2.3-5.8zM13 17v-2h-2v2h2zm0-4V7h-2v6h2z" fill-rule="evenodd"/></svg>',
                            "ordered-list-rtl": '<svg width="24" height="24"><path d="M6 17h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm13-1v3.5a.5.5 0 1 1-1 0V5h-.5a.5.5 0 1 1 0-1H19zm-1 8.8l.2.2h1.3a.5.5 0 1 1 0 1h-1.6a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2h-1.3a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zm2 4.2v2c0 .6-.4 1-1 1h-1.5a.5.5 0 0 1 0-1h1.2a.3.3 0 1 0 0-.6h-1.3a.4.4 0 1 1 0-.8h1.3a.3.3 0 0 0 0-.6h-1.2a.5.5 0 1 1 0-1H19c.6 0 1 .4 1 1z" fill-rule="evenodd"/></svg>',
                            "ordered-list": '<svg width="24" height="24"><path d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 1 1 0-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2H4.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 0 1 0-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 1 1 0-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 1 1 0-1H6c.6 0 1 .4 1 1z" fill-rule="evenodd"/></svg>',
                            orientation: '<svg width="24" height="24"><path d="M7.3 6.4L1 13l6.4 6.5 6.5-6.5-6.5-6.5zM3.7 13l3.6-3.7L11 13l-3.7 3.7-3.6-3.7zM12 6l2.8 2.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0L9.2 5.7a.8.8 0 0 1 0-1.2L13.6.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L12 4h1a9 9 0 1 1-4.3 16.9l1.5-1.5A7 7 0 1 0 13 6h-1z" fill-rule="nonzero"/></svg>',
                            outdent: '<svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm1.6-3.8a1 1 0 0 1-1.2 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 0 1 1.2 1.6L6.8 12l1.8 1.2z" fill-rule="evenodd"/></svg>',
                            "page-break": '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M5 11c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1h-1a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zM7 3v5h10V3c0-.6.4-1 1-1s1 .4 1 1v7H5V3c0-.6.4-1 1-1s1 .4 1 1zM6 22a1 1 0 0 1-1-1v-7h14v7c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5H7v5c0 .6-.4 1-1 1z"/></g></svg>',
                            "paste-text": '<svg width="24" height="24"><path d="M18 9V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h3V9h9zM9 20H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.2A3 3 0 0 1 12 1a3 3 0 0 1 2.8 2H18a2 2 0 0 1 2 2v4h1v12H9v-1zm1.5-9.5v9h9v-9h-9zM12 3a1 1 0 0 0-1 1c0 .5.4 1 1 1s1-.5 1-1-.4-1-1-1zm0 9h6v2h-.5l-.5-1h-1v4h.8v1h-3.6v-1h.8v-4h-1l-.5 1H12v-2z" fill-rule="nonzero"/></svg>',
                            paste: '<svg width="24" height="24"><path d="M18 9V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h3V9h9zM9 20H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.2A3 3 0 0 1 12 1a3 3 0 0 1 2.8 2H18a2 2 0 0 1 2 2v4h1v12H9v-1zm1.5-9.5v9h9v-9h-9zM12 3a1 1 0 0 0-1 1c0 .5.4 1 1 1s1-.5 1-1-.4-1-1-1z" fill-rule="nonzero"/></svg>',
                            "permanent-pen": '<svg width="24" height="24"><path d="M10.5 17.5L8 20H3v-3l3.5-3.5a2 2 0 0 1 0-3L14 3l1 1-7.3 7.3a1 1 0 0 0 0 1.4l3.6 3.6c.4.4 1 .4 1.4 0L20 9l1 1-7.6 7.6a2 2 0 0 1-2.8 0l-.1-.1z" fill-rule="nonzero"/></svg>',
                            plus: '<svg width="24" height="24"><g fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#000" stroke-width="2"><path d="M12 5v14M5 12h14"/></g></svg>',
                            preferences: '<svg width="24" height="24"><path d="M20.1 13.5l-1.9.2a5.8 5.8 0 0 1-.6 1.5l1.2 1.5c.4.4.3 1 0 1.4l-.7.7a1 1 0 0 1-1.4 0l-1.5-1.2a6.2 6.2 0 0 1-1.5.6l-.2 1.9c0 .5-.5.9-1 .9h-1a1 1 0 0 1-1-.9l-.2-1.9a5.8 5.8 0 0 1-1.5-.6l-1.5 1.2a1 1 0 0 1-1.4 0l-.7-.7a1 1 0 0 1 0-1.4l1.2-1.5a6.2 6.2 0 0 1-.6-1.5l-1.9-.2a1 1 0 0 1-.9-1v-1c0-.5.4-1 .9-1l1.9-.2a5.8 5.8 0 0 1 .6-1.5L5.2 7.3a1 1 0 0 1 0-1.4l.7-.7a1 1 0 0 1 1.4 0l1.5 1.2a6.2 6.2 0 0 1 1.5-.6l.2-1.9c0-.5.5-.9 1-.9h1c.5 0 1 .4 1 .9l.2 1.9a5.8 5.8 0 0 1 1.5.6l1.5-1.2a1 1 0 0 1 1.4 0l.7.7c.3.4.4 1 0 1.4l-1.2 1.5a6.2 6.2 0 0 1 .6 1.5l1.9.2c.5 0 .9.5.9 1v1c0 .5-.4 1-.9 1zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill-rule="evenodd"/></svg>',
                            preview: '<svg width="24" height="24"><path d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 0 0 2.1-2.8 15.7 15.7 0 0 0-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 0 0-6.7 3.2A16.2 16.2 0 0 0 3.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 0 1 2.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 0 1-2.8-3.7 1 1 0 0 1 0-1zm12-3.3a2 2 0 1 0 2.7 2.6 4 4 0 1 1-2.6-2.6z" fill-rule="nonzero"/></svg>',
                            print: '<svg width="24" height="24"><path d="M18 8H6a3 3 0 0 0-3 3v6h2v3h14v-3h2v-6a3 3 0 0 0-3-3zm-1 10H7v-4h10v4zm.5-5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm.5-8H6v2h12V5z" fill-rule="nonzero"/></svg>',
                            quote: '<svg width="24" height="24"><path d="M7.5 17h.9c.4 0 .7-.2.9-.6L11 13V8c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 0 0 .8 1.3zm8 0h.9c.4 0 .7-.2.9-.6L19 13V8c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 0 0 .8 1.3z" fill-rule="nonzero"/></svg>',
                            redo: '<svg width="24" height="24"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 1 1-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3z" fill-rule="nonzero"/></svg>',
                            reload: '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M5 22.1l-1.2-4.7v-.2a1 1 0 0 1 1-1l5 .4a1 1 0 1 1-.2 2l-2.2-.2a7.8 7.8 0 0 0 8.4.2 7.5 7.5 0 0 0 3.5-6.4 1 1 0 1 1 2 0 9.5 9.5 0 0 1-4.5 8 9.9 9.9 0 0 1-10.2 0l.4 1.4a1 1 0 1 1-2 .5zM13.6 7.4c0-.5.5-1 1-.9l2.8.2a8 8 0 0 0-9.5-1 7.5 7.5 0 0 0-3.6 7 1 1 0 0 1-2 0 9.5 9.5 0 0 1 4.5-8.6 10 10 0 0 1 10.9.3l-.3-1a1 1 0 0 1 2-.5l1.1 4.8a1 1 0 0 1-1 1.2l-5-.4a1 1 0 0 1-.9-1z"/></g></svg>',
                            "remove-formatting": '<svg width="24" height="24"><path d="M13.2 6a1 1 0 0 1 0 .2l-2.6 10a1 1 0 0 1-1 .8h-.2a.8.8 0 0 1-.8-1l2.6-10H8a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2h-3.8zM5 18h7a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm13 1.5L16.5 18 15 19.5a.7.7 0 0 1-1-1l1.5-1.5-1.5-1.5a.7.7 0 0 1 1-1l1.5 1.5 1.5-1.5a.7.7 0 0 1 1 1L17.5 17l1.5 1.5a.7.7 0 0 1-1 1z" fill-rule="evenodd"/></svg>',
                            remove: '<svg width="24" height="24"><path d="M16 7h3a1 1 0 0 1 0 2h-1v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9H5a1 1 0 1 1 0-2h3V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1zm-2 0V6c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v1h4zm2 2H8v9c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V9zm-7 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4zm4 0a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4z" fill-rule="nonzero"/></svg>',
                            "resize-handle": '<svg width="10" height="10"><g fill-rule="nonzero"><path d="M8.1 1.1A.5.5 0 1 1 9 2l-7 7A.5.5 0 1 1 1 8l7-7zM8.1 5.1A.5.5 0 1 1 9 6l-3 3A.5.5 0 1 1 5 8l3-3z"/></g></svg>',
                            resize: '<svg width="24" height="24"><path d="M4 5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h6c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H7.4L18 16.6V13c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7v6c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-6a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3.6L6 7.4V11c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3A1 1 0 0 1 4 11V5z" fill-rule="evenodd"/></svg>',
                            "restore-draft": '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M17 13c0 .6-.4 1-1 1h-4V8c0-.6.4-1 1-1s1 .4 1 1v4h2c.6 0 1 .4 1 1z"/><path d="M4.7 10H9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3l2.5-2.4a9.2 9.2 0 0 1 10.8-1.5A9 9 0 0 1 13.4 21c-2.4.1-4.7-.7-6.5-2.2a1 1 0 1 1 1.3-1.5 7.2 7.2 0 0 0 11.6-3.7 7 7 0 0 0-3.5-7.7A7.2 7.2 0 0 0 8 7L4.7 10z" fill-rule="nonzero"/></g></svg>',
                            "rotate-left": '<svg width="24" height="24"><path d="M4.7 10H9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3l2.5-2.4a9.2 9.2 0 0 1 10.8-1.5A9 9 0 0 1 13.4 21c-2.4.1-4.7-.7-6.5-2.2a1 1 0 1 1 1.3-1.5 7.2 7.2 0 0 0 11.6-3.7 7 7 0 0 0-3.5-7.7A7.2 7.2 0 0 0 8 7L4.7 10z" fill-rule="nonzero"/></svg>',
                            "rotate-right": '<svg width="24" height="24"><path d="M20 8V5a1 1 0 0 1 2 0v6c0 .6-.4 1-1 1h-6a1 1 0 0 1 0-2h4.3L16 7A7.2 7.2 0 0 0 7.7 6a7 7 0 0 0 3 13.1c1.9.1 3.7-.5 5-1.7a1 1 0 0 1 1.4 1.5A9.2 9.2 0 0 1 2.2 14c-.9-3.9 1-8 4.5-9.9 3.5-1.9 8-1.3 10.8 1.5L20 8z" fill-rule="nonzero"/></svg>',
                            rtl: '<svg width="24" height="24"><path d="M8 5h8v2h-2v12h-2V7h-2v12H8v-7c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 4.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L8 5zm12 11.2a1 1 0 1 1-1 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 1 1 1 1.6L18.4 15l1.8 1.2z" fill-rule="evenodd"/></svg>',
                            save: '<svg width="24" height="24"><path d="M5 16h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2zm0 2v2h14v-2H5zm10 0h2v2h-2v-2zm-4-6.4L8.7 9.3a1 1 0 1 0-1.4 1.4l4 4c.4.4 1 .4 1.4 0l4-4a1 1 0 1 0-1.4-1.4L13 11.6V4a1 1 0 0 0-2 0v7.6z" fill-rule="nonzero"/></svg>',
                            search: '<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill-rule="nonzero"/></svg>',
                            "select-all": '<svg width="24" height="24"><path d="M3 5h2V3a2 2 0 0 0-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2a2 2 0 0 0-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8a2 2 0 0 0 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z" fill-rule="nonzero"/></svg>',
                            selected: '<svg width="24" height="24"><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm3.6 10.9L7 12.3a.7.7 0 0 0-1 1L9.6 17 18 8.6a.7.7 0 0 0 0-1 .7.7 0 0 0-1 0l-7.4 7.3z"/></svg>',
                            settings: '<svg width="24" height="24"><path d="M11 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8v.3c0 .2 0 .3-.2.5l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V8H5a1 1 0 1 1 0-2h2v-.3c0-.2 0-.3.2-.5l.5-.2h2.5c.3 0 .4 0 .6.2l.2.5V6zM8 8h2V6H8v2zm9 2.8v.2h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v.3c0 .2 0 .3-.2.5l-.6.2h-2.4c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V13H5a1 1 0 0 1 0-2h8v-.3c0-.2 0-.3.2-.5l.6-.2h2.4c.3 0 .4 0 .6.2l.2.6zM14 13h2v-2h-2v2zm-3 2.8v.2h8c.6 0 1 .4 1 1s-.4 1-1 1h-8v.3c0 .2 0 .3-.2.5l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V18H5a1 1 0 0 1 0-2h2v-.3c0-.2 0-.3.2-.5l.5-.2h2.5c.3 0 .4 0 .6.2l.2.6zM8 18h2v-2H8v2z" fill-rule="evenodd"/></svg>',
                            sharpen: '<svg width="24" height="24"><path d="M16 6l4 4-8 9-8-9 4-4h8zm-4 10.2l5.5-6.2-.1-.1H12v-.3h5.1l-.2-.2H12V9h4.6l-.2-.2H12v-.3h4.1l-.2-.2H12V8h3.6l-.2-.2H8.7L6.5 10l.1.1H12v.3H6.9l.2.2H12v.3H7.3l.2.2H12v.3H7.7l.3.2h4v.3H8.2l.2.2H12v.3H8.6l.3.2H12v.3H9l.3.2H12v.3H9.5l.2.2H12v.3h-2l.2.2H12v.3h-1.6l.2.2H12v.3h-1.1l.2.2h.9v.3h-.7l.2.2h.5v.3h-.3l.3.2z" fill-rule="evenodd"/></svg>',
                            sourcecode: '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M9.8 15.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0l-4.4-4.1a.8.8 0 0 1 0-1.2l4.4-4.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L6 12l3.8 3.7zM14.2 15.7c-.3.3-.3.8 0 1 .4.4.9.4 1.2 0l4.4-4.1c.3-.3.3-.9 0-1.2l-4.4-4.2a.8.8 0 0 0-1.2 0c-.3.3-.3.8 0 1.1L18 12l-3.8 3.7z"/></g></svg>',
                            "spell-check": '<svg width="24" height="24"><path d="M6 8v3H5V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h2c.3 0 .5.1.7.3.2.2.3.4.3.7v6H8V8H6zm0-3v2h2V5H6zm13 0h-3v5h3v1h-3a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3v1zm-5 1.5l-.1.7c-.1.2-.3.3-.6.3.3 0 .5.1.6.3l.1.7V10c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-3V4h3c.3 0 .5.1.7.3.2.2.3.4.3.7v1.5zM13 10V8h-2v2h2zm0-3V5h-2v2h2zm3 5l1 1-6.5 7L7 15.5l1.3-1 2.2 2.2L16 12z" fill-rule="evenodd"/></svg>',
                            "strike-through": '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 0 1 7 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1z"/><path d="M5 11h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" fill-rule="nonzero"/></g></svg>',
                            subscript: '<svg width="24" height="24"><path d="M10.4 10l4.6 4.6-1.4 1.4L9 11.4 4.4 16 3 14.6 7.6 10 3 5.4 4.4 4 9 8.6 13.6 4 15 5.4 10.4 10zM21 19h-5v-1l1-.8 1.7-1.6c.3-.4.5-.8.5-1.2 0-.3 0-.6-.2-.7-.2-.2-.5-.3-.9-.3a2 2 0 0 0-.8.2l-.7.3-.4-1.1 1-.6 1.2-.2c.8 0 1.4.3 1.8.7.4.4.6.9.6 1.5s-.2 1.1-.5 1.6a8 8 0 0 1-1.3 1.3l-.6.6h2.6V19z" fill-rule="nonzero"/></svg>',
                            superscript: '<svg width="24" height="24"><path d="M15 9.4L10.4 14l4.6 4.6-1.4 1.4L9 15.4 4.4 20 3 18.6 7.6 14 3 9.4 4.4 8 9 12.6 13.6 8 15 9.4zm5.9 1.6h-5v-1l1-.8 1.7-1.6c.3-.5.5-.9.5-1.3 0-.3 0-.5-.2-.7-.2-.2-.5-.3-.9-.3l-.8.2-.7.4-.4-1.2c.2-.2.5-.4 1-.5.3-.2.8-.2 1.2-.2.8 0 1.4.2 1.8.6.4.4.6 1 .6 1.6 0 .5-.2 1-.5 1.5l-1.3 1.4-.6.5h2.6V11z" fill-rule="nonzero"/></svg>',
                            "table-cell-properties": '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm10 10h-4v3h4v-3zm0-8h-4v3h4V7zM9 7H5v3h4V7zm-4 4v3h4v-3H5zm10 0v3h4v-3h-4zm0-1h4V7h-4v3zM5 15v3h4v-3H5zm10 3h4v-3h-4v3z" fill-rule="evenodd"/></svg>',
                            "table-cell-select-all": '<svg width="24" height="24"><path d="M12.5 5.5v6h6v-6h-6zm-1 0h-6v6h6v-6zm1 13h6v-6h-6v6zm-1 0v-6h-6v6h6zm-7-14h15v15h-15v-15z" fill-rule="nonzero"/></svg>',
                            "table-cell-select-inner": '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M5.5 5.5v13h13v-13h-13zm-1-1h15v15h-15v-15z" opacity=".2"/><path d="M11.5 11.5v-7h1v7h7v1h-7v7h-1v-7h-7v-1h7z"/></g></svg>',
                            "table-delete-column": '<svg width="24" height="24"><path d="M9 11.2l1 1v.2l-1 1v-2.2zm5 1l1-1v2.2l-1-1v-.2zM20 5v14H4V5h16zm-1 2h-4v.8l-.2-.2-.8.8V7h-4v1.4l-.8-.8-.2.2V7H5v11h4v-1.8l.5.5.5-.4V18h4v-1.8l.8.8.2-.3V18h4V7zm-3.9 3.4l-1.8 1.9 1.8 1.9c.4.3.4.9 0 1.2-.3.3-.8.3-1.2 0L12 13.5l-1.8 1.9a.8.8 0 0 1-1.2 0 .9.9 0 0 1 0-1.2l1.8-1.9-1.9-2a.9.9 0 0 1 1.2-1.2l2 2 1.8-1.8c.3-.4.9-.4 1.2 0a.8.8 0 0 1 0 1.1z" fill-rule="evenodd"/></svg>',
                            "table-delete-row": '<svg width="24" height="24"><path d="M16.7 8.8l1.1 1.2-2.4 2.5L18 15l-1.2 1.2-2.5-2.5-2.4 2.5-1.3-1.2 2.5-2.5-2.5-2.5 1.2-1.3 2.6 2.6 2.4-2.5zM4 5h16v14H4V5zm15 5V7H5v3h4.8l1 1H5v3h5.8l-1 1H5v3h14v-3h-.4l-1-1H19v-3h-1.3l1-1h.3z" fill-rule="evenodd"/></svg>',
                            "table-delete-table": '<svg width="24" height="26"><path d="M4 6h16v14H4V6zm1 2v11h14V8H5zm11.7 8.7l-1.5 1.5L12 15l-3.3 3.2-1.4-1.5 3.2-3.2-3.3-3.2 1.5-1.5L12 12l3.2-3.2 1.5 1.5-3.2 3.2 3.2 3.2z" fill-rule="evenodd"/></svg>',
                            "table-insert-column-after": '<svg width="24" height="24"><path d="M14.3 9c.4 0 .7.3.7.6v2.2h2.1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H15v2.2c0 .3-.3.6-.7.6a.7.7 0 0 1-.6-.6v-2.2h-2.2a.7.7 0 0 1 0-1.4h2.2V9.6c0-.3.3-.6.6-.6zM4 5h16v14H4V5zm5 13v-3H5v3h4zm0-4v-3H5v3h4zm0-4V7H5v3h4zm10 8V7h-9v11h9z" fill-rule="evenodd"/></svg>',
                            "table-insert-column-before": '<svg width="24" height="24"><path d="M9.7 16a.7.7 0 0 1-.7-.6v-2.2H6.9a.7.7 0 0 1 0-1.4H9V9.6c0-.3.3-.6.7-.6.3 0 .6.3.6.6v2.2h2.2c.4 0 .8.3.8.7 0 .4-.4.7-.8.7h-2.2v2.2c0 .3-.3.6-.6.6zM4 5h16v14H4V5zm10 13V7H5v11h9zm5 0v-3h-4v3h4zm0-4v-3h-4v3h4zm0-4V7h-4v3h4z" fill-rule="evenodd"/></svg>',
                            "table-insert-row-above": '<svg width="24" height="24"><path d="M14.8 10.5c0 .3-.2.5-.5.5h-1.8v1.8c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.6V11H9.7a.5.5 0 0 1 0-1h1.8V8.3c0-.3.2-.6.5-.6s.5.3.5.6V10h1.8c.3 0 .5.2.5.5zM4 5h16v14H4V5zm5 13v-3H5v3h4zm5 0v-3h-4v3h4zm5 0v-3h-4v3h4zm0-4V7H5v7h14z" fill-rule="evenodd"/></svg>',
                            "table-insert-row-after": '<svg width="24" height="24"><path d="M9.2 14.5c0-.3.2-.5.5-.5h1.8v-1.8c0-.3.2-.5.5-.5s.5.2.5.6V14h1.8c.3 0 .5.2.5.5s-.2.5-.5.5h-1.8v1.7c0 .3-.2.6-.5.6a.5.5 0 0 1-.5-.6V15H9.7a.5.5 0 0 1-.5-.5zM4 5h16v14H4V5zm6 2v3h4V7h-4zM5 7v3h4V7H5zm14 11v-7H5v7h14zm0-8V7h-4v3h4z" fill-rule="evenodd"/></svg>',
                            "table-left-header": '<svg width="24" height="24"><path d="M4 5h16v13H4V5zm10 12v-3h-4v3h4zm0-4v-3h-4v3h4zm0-4V6h-4v3h4zm5 8v-3h-4v3h4zm0-4v-3h-4v3h4zm0-4V6h-4v3h4z" fill-rule="evenodd"/></svg>',
                            "table-merge-cells": '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm6 13h9v-7h-9v7zm4-11h-4v3h4V7zM9 7H5v3h4V7zm-4 4v3h4v-3H5zm10-1h4V7h-4v3zM5 15v3h4v-3H5z" fill-rule="evenodd"/></svg>',
                            "table-row-properties": '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm10 10h-4v3h4v-3zm0-8h-4v3h4V7zM9 7H5v3h4V7zm6 3h4V7h-4v3zM5 15v3h4v-3H5zm10 3h4v-3h-4v3z" fill-rule="evenodd"/></svg>',
                            "table-split-cells": '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm6 2v3h4V7h-4zM9 18v-3H5v3h4zm0-4v-3H5v3h4zm0-4V7H5v3h4zm10 8v-7h-9v7h9zm0-8V7h-4v3h4zm-3.5 4.5l1.5 1.6c.3.2.3.7 0 1-.2.2-.7.2-1 0l-1.5-1.6-1.6 1.5c-.2.3-.7.3-1 0a.7.7 0 0 1 0-1l1.6-1.5-1.5-1.6a.7.7 0 0 1 1-1l1.5 1.6 1.6-1.5c.2-.3.7-.3 1 0 .2.2.2.7 0 1l-1.6 1.5z" fill-rule="evenodd"/></svg>',
                            "table-top-header": '<svg width="24" height="24"><path d="M4 5h16v13H4V5zm5 12v-3H5v3h4zm0-4v-3H5v3h4zm5 4v-3h-4v3h4zm0-4v-3h-4v3h4zm5 4v-3h-4v3h4zm0-4v-3h-4v3h4z" fill-rule="evenodd"/></svg>',
                            table: '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm6 9h4v-3h-4v3zm4 1h-4v3h4v-3zm0-8h-4v3h4V7zM9 7H5v3h4V7zm-4 4v3h4v-3H5zm10 0v3h4v-3h-4zm0-1h4V7h-4v3zM5 15v3h4v-3H5zm10 3h4v-3h-4v3z" fill-rule="evenodd"/></svg>',
                            template: '<svg width="24" height="24"><path d="M19 19v-1H5v1h14zM9 16v-4a5 5 0 1 1 6 0v4h4a2 2 0 0 1 2 2v3H3v-3c0-1.1.9-2 2-2h4zm4 0v-5l.8-.6a3 3 0 1 0-3.6 0l.8.6v5h2z" fill-rule="nonzero"/></svg>',
                            "temporary-placeholder": '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M9 7.6V6h2.5V4.5a.5.5 0 1 1 1 0V6H15v1.6a8 8 0 1 1-6 0zm-2.6 5.3a.5.5 0 0 0 .3.6c.3 0 .6 0 .6-.3l.1-.2a5 5 0 0 1 3.3-2.8c.3-.1.4-.4.4-.6-.1-.3-.4-.5-.6-.4a6 6 0 0 0-4.1 3.7z"/><circle cx="14" cy="4" r="1"/><circle cx="12" cy="2" r="1"/><circle cx="10" cy="4" r="1"/></g></svg>',
                            "text-color": '<svg width="24" height="24"><g fill-rule="evenodd"><path id="tox-icon-text-color__color" d="M3 18h18v3H3z"/><path d="M8.7 16h-.8a.5.5 0 0 1-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 0 1-.5.6h-.8a.5.5 0 0 1-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 0 0 .5.6h1.6a.5.5 0 0 0 .5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"/></g></svg>',
                            toc: '<svg width="24" height="24"><path d="M5 5c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 1 1 0-2zm3 0h11c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm-3 8c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h11c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm0-4c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 1 1 0-2zm3 0h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-3 8c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                            translate: '<svg width="24" height="24"><path d="M12.7 14.3l-.3.7-.4.7-2.2-2.2-3.1 3c-.3.4-.8.4-1 0a.7.7 0 0 1 0-1l3.1-3A12.4 12.4 0 0 1 6.7 9H8a10.1 10.1 0 0 0 1.7 2.4c.5-.5 1-1.1 1.4-1.8l.9-2H4.7a.7.7 0 1 1 0-1.5h4.4v-.7c0-.4.3-.8.7-.8.4 0 .7.4.7.8v.7H15c.4 0 .8.3.8.7 0 .4-.4.8-.8.8h-1.4a12.3 12.3 0 0 1-1 2.4 13.5 13.5 0 0 1-1.7 2.3l1.9 1.8zm4.3-3l2.7 7.3a.5.5 0 0 1-.4.7 1 1 0 0 1-1-.7l-.6-1.5h-3.4l-.6 1.5a1 1 0 0 1-1 .7.5.5 0 0 1-.4-.7l2.7-7.4a1 1 0 1 1 2 0zm-2.2 4.4h2.4L16 12.5l-1.2 3.2z" fill-rule="evenodd"/></svg>',
                            underline: '<svg width="24" height="24"><path d="M16 5c.6 0 1 .4 1 1v5.5a4 4 0 0 1-.4 1.8l-1 1.4a5.3 5.3 0 0 1-5.5 1 5 5 0 0 1-1.6-1c-.5-.4-.8-.9-1.1-1.4a4 4 0 0 1-.4-1.8V6c0-.6.4-1 1-1s1 .4 1 1v5.5c0 .3 0 .6.2 1l.6.7a3.3 3.3 0 0 0 2.2.8 3.4 3.4 0 0 0 2.2-.8c.3-.2.4-.5.6-.8l.2-.9V6c0-.6.4-1 1-1zM8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                            undo: '<svg width="24" height="24"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 0 1-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 1.4L6.4 8z" fill-rule="nonzero"/></svg>',
                            unlink: '<svg width="24" height="24"><path d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2 2a2 2 0 1 0 2.6 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2zm11.6-.6a1 1 0 0 1-1.4-1.4l2.1-2a2 2 0 1 0-2.7-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2zM7.6 6.3a.8.8 0 0 1-1 1.1L3.3 4.2a.7.7 0 1 1 1-1l3.2 3.1zM5.1 8.6a.8.8 0 0 1 0 1.5H3a.8.8 0 0 1 0-1.5H5zm5-3.5a.8.8 0 0 1-1.5 0V3a.8.8 0 0 1 1.5 0V5zm6 11.8a.8.8 0 0 1 1-1l3.2 3.2a.8.8 0 0 1-1 1L16 17zm-2.2 2a.8.8 0 0 1 1.5 0V21a.8.8 0 0 1-1.5 0V19zm5-3.5a.7.7 0 1 1 0-1.5H21a.8.8 0 0 1 0 1.5H19z" fill-rule="nonzero"/></svg>',
                            unlock: '<svg width="24" height="24"><path d="M16 5c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h-2V8a1 1 0 0 0-.3-.7A1 1 0 0 0 16 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7v3h.3c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H4.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H11V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2z" fill-rule="evenodd"/></svg>',
                            "unordered-list": '<svg width="24" height="24"><path d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z" fill-rule="evenodd"/></svg>',
                            unselected: '<svg width="24" height="24"><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 1a1 1 0 0 0-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H6z"/></svg>',
                            upload: '<svg width="24" height="24"><path d="M18 19v-2a1 1 0 0 1 2 0v3c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h12zM11 6.4L8.7 8.7a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L13 6.4V16a1 1 0 0 1-2 0V6.4z" fill-rule="nonzero"/></svg>',
                            user: '<svg width="24" height="24"><path d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm-8.7-5.3a11 11 0 0 0 17.4 0C19.4 16.3 14.6 15 12 15c-2.6 0-7.4 1.3-8.7 3.7zM12 13c2.2 0 4-2 4-4.5S14.2 4 12 4 8 6 8 8.5 9.8 13 12 13z" fill-rule="nonzero"/></svg>',
                            visualblocks: '<svg width="24" height="24"><path d="M9 19v2H7v-2h2zm-4 0v2a2 2 0 0 1-2-2h2zm8 0v2h-2v-2h2zm8 0a2 2 0 0 1-2 2v-2h2zm-4 0v2h-2v-2h2zM15 7a1 1 0 0 1 0 2v7a1 1 0 0 1-2 0V9h-1v7a1 1 0 0 1-2 0v-4a2.5 2.5 0 0 1-.2-5H15zM5 15v2H3v-2h2zm16 0v2h-2v-2h2zM5 11v2H3v-2h2zm16 0v2h-2v-2h2zM5 7v2H3V7h2zm16 0v2h-2V7h2zM5 3v2H3c0-1.1.9-2 2-2zm8 0v2h-2V3h2zm6 0a2 2 0 0 1 2 2h-2V3zM9 3v2H7V3h2zm8 0v2h-2V3h2z" fill-rule="evenodd"/></svg>',
                            visualchars: '<svg width="24" height="24"><path d="M10 5h7a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V7h-2v11a1 1 0 0 1-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 6.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L10 5z" fill-rule="evenodd"/></svg>',
                            warning: '<svg width="24" height="24"><path d="M19.8 18.3c.2.5.3.9 0 1.2-.1.3-.5.5-1 .5H5.2c-.5 0-.9-.2-1-.5-.3-.3-.2-.7 0-1.2L11 4.7l.5-.5.5-.2c.2 0 .3 0 .5.2.2 0 .3.3.5.5l6.8 13.6zM12 18c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7c0 .3.1.5.3.7.2.2.4.3.7.3zm.7-3l.3-4a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7l.3 4h1.4z" fill-rule="evenodd"/></svg>',
                            "zoom-in": '<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-1-9a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0V8zm-2 4a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8z" fill-rule="nonzero"/></svg>',
                            "zoom-out": '<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-3-5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8z" fill-rule="nonzero"/></svg>'
                        }), Ud.get(e).icons);
                    ue(t, function(e, t) {
                        kt(r, t) || n.ui.registry.addIcon(t, e)
                    })
                }(e),
                function(e) {
                    var t = e.settings.theme;
                    if (K(t)) {
                        e.settings.theme = Iw(t);
                        var n = qd.get(t);
                        e.theme = new n(e, qd.urls[t]), e.theme.init && e.theme.init(e, qd.urls[t] || e.documentBaseUrl.replace(/\/$/, ""), e.$)
                    } else e.theme = {}
                }(e),
                function(t) {
                    var n = [];
                    Mn.each(t.settings.plugins.split(/[ ,]/), function(e) {
                        Az(t, n, Iw(e))
                    })
                }(e);
            var t = function(e) {
                var t = e.getElement();
                return e.orgDisplay = t.style.display, K(e.settings.theme) ? function(e) {
                    return e.theme.renderUI()
                }(e) : D(e.settings.theme) ? function(e) {
                    var t = e.getElement(),
                        n = (0, e.settings.theme)(e, t);
                    return n.editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || e.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || e.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight, n
                }(e) : Uw(e)
            }(e);
            return e.editorContainer = t.editorContainer ? t.editorContainer : null, Vw(e), e.inline ? Nz(e) : kz(e, t)
        },
        Rz = Xi.DOM,
        Dz = function(t) {
            var e = t.settings,
                n = t.id;
            ra.setCode(Bf(t));
            var r = function() {
                Rz.unbind(j.window, "ready", r), t.render()
            };
            if (kr.Event.domLoaded) {
                if (t.getElement() && Nn.contentEditable) {
                    e.inline ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden");
                    var o = t.getElement().form || Rz.getParent(n, "form");
                    o && (t.formElement = o, e.hidden_input && !Ge.isTextareaOrInput(t.getElement()) && (Rz.insertAfter(Rz.create("input", {
                        type: "hidden",
                        name: n
                    }), n), t.hasHiddenInput = !0), t.formEventDelegate = function(e) {
                        t.fire(e.type, e)
                    }, Rz.bind(o, "submit reset", t.formEventDelegate), t.on("reset", function() {
                        t.resetContent()
                    }), !e.submit_patch || o.submit.nodeType || o.submit.length || o._mceOldSubmit || (o._mceOldSubmit = o.submit, o.submit = function() {
                        return t.editorManager.triggerSave(), t.setDirty(!1), o._mceOldSubmit(o)
                    })), t.windowManager = Bd(t), t.notificationManager = _d(t), "xml" === e.encoding && t.on("GetContent", function(e) {
                        e.save && (e.content = Rz.encode(e.content))
                    }), e.add_form_submit_trigger && t.on("submit", function() {
                        t.initialized && t.save()
                    }), e.add_unload_trigger && (t._beforeUnload = function() {
                        !t.initialized || t.destroyed || t.isHidden() || t.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), $w(t, t.suffix)
                }
            } else Rz.bind(j.window, "ready", r)
        },
        _z = "data-mce-contenteditable",
        Bz = ["design", "readonly"],
        Oz = function(e, t) {
            var n = t.firstChild,
                r = t.lastChild;
            return n && "meta" === n.name && (n = n.next), r && "mce_marker" === r.attr("id") && (r = r.prev),
                function(e, t) {
                    var n = e.getNonEmptyElements();
                    return t && (t.isEmpty(n) || function(e, t) {
                        return e.getBlockElements()[t.name] && function(e) {
                            return e.firstChild && e.firstChild === e.lastChild
                        }(t) && function(e) {
                            return "br" === e.name || "\xa0" === e.value
                        }(t.firstChild)
                    }(e, t))
                }(e, r) && (r = r.prev), !(!n || n !== r) && ("ul" === n.name || "ol" === n.name)
        },
        Hz = function(e, o, i, t) {
            function n(e) {
                var t = Ds.fromRangeStart(i),
                    n = rc(o.getRoot()),
                    r = 1 === e ? n.prev(t) : n.next(t);
                return !r || rx(o, r.getNode()) !== a
            }
            var r = function(e, t, n) {
                    var r = t.serialize(n);
                    return function(e) {
                        var t = e.firstChild,
                            n = e.lastChild;
                        return t && "META" === t.nodeName && t.parentNode.removeChild(t), n && "mce_marker" === n.id && n.parentNode.removeChild(n), e
                    }(e.createFragment(r))
                }(o, e, t),
                a = rx(o, i.startContainer),
                u = nx(ex(r.firstChild)),
                s = o.getRoot();
            return n(1) ? ix(a, u, s) : n(2) ? function(e, t, n, r) {
                return r.insertAfter(t.reverse(), e), ox(t[0], n)
            }(a, u, s, o) : function(t, e, n, r) {
                var o = function(e, t) {
                        var n = t.cloneRange(),
                            r = t.cloneRange();
                        return n.setStartBefore(e), r.setEndAfter(e), [n.cloneContents(), r.cloneContents()]
                    }(t, r),
                    i = t.parentNode;
                return i.insertBefore(o[0], t), Mn.each(e, function(e) {
                    i.insertBefore(e, t)
                }), i.insertBefore(o[1], t), i.removeChild(t), ox(e[e.length - 1], n)
            }(a, u, s, i)
        },
        Pz = function(e, t) {
            return !!rx(e, t)
        },
        Lz = Ge.matchNodeNames(["td", "th"]),
        Vz = function(e, t) {
            var n = function(e) {
                var t;
                return "string" != typeof e ? (t = Mn.extend({
                    paste: e.paste,
                    data: {
                        paste: e.paste
                    }
                }, e), {
                    content: e.content,
                    details: t
                }) : {
                    content: e,
                    details: {}
                }
            }(t);
            ux(e, n.content, n.details)
        },
        Iz = function(e) {
            ez(e, !1) || Lx(e, !1) || Ix(e, !1) || Fx(e, !1) || Dx(e, !1) || Kx(e) || _x(e, !1) || Ux(e, !1) || (sx(e, "Delete"), Tx(e))
        },
        Fz = function(e) {
            Lx(e, !0) || Ix(e, !0) || Fx(e, !0) || Dx(e, !0) || Kx(e) || _x(e, !0) || Ux(e, !0) || sx(e, "ForwardDelete")
        },
        Uz = {
            getFontSize: cx("font-size"),
            getFontFamily: q(function(e) {
                return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")
            }, cx("font-family")),
            toPt: function(e, t) {
                return /[0-9.]+px$/.test(e) ? function(e, t) {
                    var n = Math.pow(10, t);
                    return Math.round(e * n) / n
                }(72 * parseInt(e, 10) / 96, t || 0) + "pt" : e
            }
        },
        jz = Mn.each,
        qz = Mn.map,
        $z = Mn.inArray,
        Wz = (Kz.prototype.execCommand = function(t, n, r, e) {
            var o, i, a = !1,
                u = this;
            if (!u.editor.removed) {
                if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? Jf(u.editor) : u.editor.focus(), (e = u.editor.fire("BeforeExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    })).isDefaultPrevented()) return !1;
                if (i = t.toLowerCase(), o = u.commands.exec[i]) return o(i, n, r), u.editor.fire("ExecCommand", {
                    command: t,
                    ui: n,
                    value: r
                }), !0;
                if (jz(this.editor.plugins, function(e) {
                        if (e.execCommand && e.execCommand(t, n, r)) return u.editor.fire("ExecCommand", {
                            command: t,
                            ui: n,
                            value: r
                        }), !(a = !0)
                    }), a) return a;
                if (u.editor.theme && u.editor.theme.execCommand && u.editor.theme.execCommand(t, n, r)) return u.editor.fire("ExecCommand", {
                    command: t,
                    ui: n,
                    value: r
                }), !0;
                try {
                    a = u.editor.getDoc().execCommand(t, n, r)
                } catch (s) {}
                return !!a && (u.editor.fire("ExecCommand", {
                    command: t,
                    ui: n,
                    value: r
                }), !0)
            }
        }, Kz.prototype.queryCommandState = function(e) {
            var t;
            if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                if (e = e.toLowerCase(), t = this.commands.state[e]) return t(e);
                try {
                    return this.editor.getDoc().queryCommandState(e)
                } catch (n) {}
                return !1
            }
        }, Kz.prototype.queryCommandValue = function(e) {
            var t;
            if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                if (e = e.toLowerCase(), t = this.commands.value[e]) return t(e);
                try {
                    return this.editor.getDoc().queryCommandValue(e)
                } catch (n) {}
            }
        }, Kz.prototype.addCommands = function(e, n) {
            var r = this;
            n = n || "exec", jz(e, function(t, e) {
                jz(e.toLowerCase().split(","), function(e) {
                    r.commands[n][e] = t
                })
            })
        }, Kz.prototype.addCommand = function(e, o, i) {
            var a = this;
            e = e.toLowerCase(), this.commands.exec[e] = function(e, t, n, r) {
                return o.call(i || a.editor, t, n, r)
            }
        }, Kz.prototype.queryCommandSupported = function(e) {
            if (e = e.toLowerCase(), this.commands.exec[e]) return !0;
            try {
                return this.editor.getDoc().queryCommandSupported(e)
            } catch (t) {}
            return !1
        }, Kz.prototype.addQueryStateHandler = function(e, t, n) {
            var r = this;
            e = e.toLowerCase(), this.commands.state[e] = function() {
                return t.call(n || r.editor)
            }
        }, Kz.prototype.addQueryValueHandler = function(e, t, n) {
            var r = this;
            e = e.toLowerCase(), this.commands.value[e] = function() {
                return t.call(n || r.editor)
            }
        }, Kz.prototype.hasCustomCommand = function(e) {
            return e = e.toLowerCase(), !!this.commands.exec[e]
        }, Kz.prototype.execNativeCommand = function(e, t, n) {
            return t === undefined && (t = !1), n === undefined && (n = null), this.editor.getDoc().execCommand(e, t, n)
        }, Kz.prototype.isFormatMatch = function(e) {
            return this.editor.formatter.match(e)
        }, Kz.prototype.toggleFormat = function(e, t) {
            this.editor.formatter.toggle(e, t ? {
                value: t
            } : undefined), this.editor.nodeChanged()
        }, Kz.prototype.storeSelection = function(e) {
            this.selectionBookmark = this.editor.selection.getBookmark(e)
        }, Kz.prototype.restoreSelection = function() {
            this.editor.selection.moveToBookmark(this.selectionBookmark)
        }, Kz.prototype.setupCommands = function(i) {
            var a = this;

            function e(n) {
                return function() {
                    var e = i.selection.isCollapsed() ? [i.dom.getParent(i.selection.getNode(), i.dom.isBlock)] : i.selection.getSelectedBlocks(),
                        t = qz(e, function(e) {
                            return !!i.formatter.matchNode(e, n)
                        });
                    return -1 !== $z(t, !0)
                }
            }
            this.addCommands({
                "mceResetDesignMode,mceBeginUndoLevel": function() {},
                "mceEndUndoLevel,mceAddUndoLevel": function() {
                    i.undoManager.add()
                },
                "Cut,Copy,Paste": function(e) {
                    var t, n = i.getDoc();
                    try {
                        a.execNativeCommand(e)
                    } catch (o) {
                        t = !0
                    }
                    if ("paste" !== e || n.queryCommandEnabled(e) || (t = !0), t || !n.queryCommandSupported(e)) {
                        var r = i.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                        Nn.mac && (r = r.replace(/Ctrl\+/g, "\u2318+")), i.notificationManager.open({
                            text: r,
                            type: "error"
                        })
                    }
                },
                unlink: function() {
                    if (i.selection.isCollapsed()) {
                        var e = i.dom.getParent(i.selection.getStart(), "a");
                        e && i.dom.remove(e, !0)
                    } else i.formatter.remove("link")
                },
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(e) {
                    var t = e.substring(7);
                    "full" === t && (t = "justify"), jz("left,center,right,justify".split(","), function(e) {
                        t !== e && i.formatter.remove("align" + e)
                    }), "none" !== t && a.toggleFormat("align" + t)
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t, n;
                    a.execNativeCommand(e), (t = i.dom.getParent(i.selection.getNode(), "ol,ul")) && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (a.storeSelection(), i.dom.split(n, t), a.restoreSelection()))
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    a.toggleFormat(e)
                },
                "ForeColor,HiliteColor": function(e, t, n) {
                    a.toggleFormat(e, n)
                },
                FontName: function(e, t, n) {
                    hx(i, n)
                },
                FontSize: function(e, t, n) {
                    ! function(e, t) {
                        e.formatter.toggle("fontsize", {
                            value: dx(e, t)
                        }), e.nodeChanged()
                    }(i, n)
                },
                RemoveFormat: function(e) {
                    i.formatter.remove(e)
                },
                mceBlockQuote: function() {
                    a.toggleFormat("blockquote")
                },
                FormatBlock: function(e, t, n) {
                    return a.toggleFormat(n || "p")
                },
                mceCleanup: function() {
                    var e = i.selection.getBookmark();
                    i.setContent(i.getContent()), i.selection.moveToBookmark(e)
                },
                mceRemoveNode: function(e, t, n) {
                    var r = n || i.selection.getNode();
                    r !== i.getBody() && (a.storeSelection(), i.dom.remove(r, !0), a.restoreSelection())
                },
                mceSelectNodeDepth: function(e, t, n) {
                    var r = 0;
                    i.dom.getParent(i.selection.getNode(), function(e) {
                        if (1 === e.nodeType && r++ === n) return i.selection.select(e), !1
                    }, i.getBody())
                },
                mceSelectNode: function(e, t, n) {
                    i.selection.select(n)
                },
                mceInsertContent: function(e, t, n) {
                    Vz(i, n)
                },
                mceInsertRawHTML: function(e, t, n) {
                    i.selection.setContent("tiny_mce_marker");
                    var r = i.getContent();
                    i.setContent(r.replace(/tiny_mce_marker/g, function() {
                        return n
                    }))
                },
                mceInsertNewLine: function(e, t, n) {
                    gz(i, n)
                },
                mceToggleFormat: function(e, t, n) {
                    a.toggleFormat(n)
                },
                mceSetContent: function(e, t, n) {
                    i.setContent(n)
                },
                "Indent,Outdent": function(e) {
                    _C(i, e)
                },
                mceRepaint: function() {},
                InsertHorizontalRule: function() {
                    i.execCommand("mceInsertContent", !1, "<hr />")
                },
                mceToggleVisualAid: function() {
                    i.hasVisual = !i.hasVisual, i.addVisual()
                },
                mceReplaceContent: function(e, t, n) {
                    i.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.selection.getContent({
                        format: "text"
                    })))
                },
                mceInsertLink: function(e, t, n) {
                    var r;
                    "string" == typeof n && (n = {
                        href: n
                    }), r = i.dom.getParent(i.selection.getNode(), "a"), n.href = n.href.replace(/ /g, "%20"), r && n.href || i.formatter.remove("link"), n.href && i.formatter.apply("link", n, r)
                },
                selectAll: function() {
                    var e = i.dom.getParent(i.selection.getStart(), Ge.isContentEditableTrue);
                    if (e) {
                        var t = i.dom.createRng();
                        t.selectNodeContents(e), i.selection.setRng(t)
                    }
                },
                "delete": function() {
                    Iz(i)
                },
                forwardDelete: function() {
                    Fz(i)
                },
                mceNewDocument: function() {
                    i.setContent("")
                },
                InsertLineBreak: function(e, t, n) {
                    return lz(i, n), !0
                }
            }), a.addCommands({
                JustifyLeft: e("alignleft"),
                JustifyCenter: e("aligncenter"),
                JustifyRight: e("alignright"),
                JustifyFull: e("alignjustify"),
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    return a.isFormatMatch(e)
                },
                mceBlockQuote: function() {
                    return a.isFormatMatch("blockquote")
                },
                Outdent: function() {
                    return RC(i)
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t = i.dom.getParent(i.selection.getNode(), "ul,ol");
                    return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
                }
            }, "state"), a.addCommands({
                Undo: function() {
                    i.undoManager.undo()
                },
                Redo: function() {
                    i.undoManager.redo()
                }
            }), a.addQueryValueHandler("FontName", function() {
                return function(t) {
                    return fx(t).fold(function() {
                        return lx(t).map(function(e) {
                            return Uz.getFontFamily(t.getBody(), e)
                        }).getOr("")
                    }, function(e) {
                        return Uz.getFontFamily(t.getBody(), e)
                    })
                }(i)
            }, this), a.addQueryValueHandler("FontSize", function() {
                return function(t) {
                    return fx(t).fold(function() {
                        return lx(t).map(function(e) {
                            return Uz.getFontSize(t.getBody(), e)
                        }).getOr("")
                    }, function(e) {
                        return Uz.getFontSize(t.getBody(), e)
                    })
                }(i)
            }, this)
        }, Kz);

    function Kz(e) {
        this.commands = {
            state: {},
            exec: {},
            value: {}
        }, this.editor = e, this.setupCommands(e)
    }
    var Xz = Mn.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " "),
        Yz = (Gz.isNative = function(e) {
            return !!Xz[e.toLowerCase()]
        }, Gz.prototype.fire = function(e, t) {
            var n, r, o, i;
            if (e = e.toLowerCase(), (t = t || {}).type = e, t.target || (t.target = this.scope), t.preventDefault || (t.preventDefault = function() {
                    t.isDefaultPrevented = a
                }, t.stopPropagation = function() {
                    t.isPropagationStopped = a
                }, t.stopImmediatePropagation = function() {
                    t.isImmediatePropagationStopped = a
                }, t.isDefaultPrevented = c, t.isPropagationStopped = c, t.isImmediatePropagationStopped = c), this.settings.beforeFire && this.settings.beforeFire(t), n = this.bindings[e])
                for (r = 0, o = n.length; r < o; r++) {
                    if ((i = n[r]).once && this.off(e, i.func), t.isImmediatePropagationStopped()) return t.stopPropagation(), t;
                    if (!1 === i.func.call(this.scope, t)) return t.preventDefault(), t
                }
            return t
        }, Gz.prototype.on = function(e, t, n, r) {
            var o, i, a;
            if (!1 === t && (t = c), t) {
                var u = {
                    func: t
                };
                for (r && Mn.extend(u, r), a = (i = e.toLowerCase().split(" ")).length; a--;) e = i[a], (o = this.bindings[e]) || (o = this.bindings[e] = [], this.toggleEvent(e, !0)), n ? o.unshift(u) : o.push(u)
            }
            return this
        }, Gz.prototype.off = function(e, t) {
            var n, r, o, i, a;
            if (e)
                for (n = (i = e.toLowerCase().split(" ")).length; n--;) {
                    if (e = i[n], r = this.bindings[e], !e) {
                        for (o in this.bindings) this.toggleEvent(o, !1), delete this.bindings[o];
                        return this
                    }
                    if (r) {
                        if (t)
                            for (a = r.length; a--;) r[a].func === t && (r = r.slice(0, a).concat(r.slice(a + 1)), this.bindings[e] = r);
                        else r.length = 0;
                        r.length || (this.toggleEvent(e, !1), delete this.bindings[e])
                    }
                } else {
                    for (e in this.bindings) this.toggleEvent(e, !1);
                    this.bindings = {}
                }
            return this
        }, Gz.prototype.once = function(e, t, n) {
            return this.on(e, t, n, {
                once: !0
            })
        }, Gz.prototype.has = function(e) {
            return e = e.toLowerCase(), !(!this.bindings[e] || 0 === this.bindings[e].length)
        }, Gz);

    function Gz(e) {
        this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || c
    }

    function Jz(n) {
        return n._eventDispatcher || (n._eventDispatcher = new Yz({
            scope: n,
            toggleEvent: function(e, t) {
                Yz.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t)
            }
        })), n._eventDispatcher
    }

    function Qz(e, t) {
        return "selectionchange" === t ? e.getDoc() : !e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t) ? e.getDoc().documentElement : e.settings.event_root ? (e.eventRoot || (e.eventRoot = rE.select(e.settings.event_root)[0]), e.eventRoot) : e.getBody()
    }

    function Zz(e, t, n) {
        ! function(e) {
            return !e.hidden && !Gw(e)
        }(e) ? Gw(e) && function(e) {
            var t = e.target;
            ! function(e) {
                return "click" === e.type
            }(e) || "A" !== t.tagName || Ah.metaKeyPressed(e) || e.preventDefault()
        }(n): e.fire(t, n)
    }

    function eE(i, a) {
        var e, t;
        if (i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed)
            if (e = Qz(i, a), i.settings.event_root) {
                if (tE || (tE = {}, i.editorManager.on("removeEditor", function() {
                        var e;
                        if (!i.editorManager.activeEditor && tE) {
                            for (e in tE) i.dom.unbind(Qz(i, e));
                            tE = null
                        }
                    })), tE[a]) return;
                t = function(e) {
                    for (var t = e.target, n = i.editorManager.get(), r = n.length; r--;) {
                        var o = n[r].getBody();
                        o !== t && !rE.isChildOf(t, o) || Zz(n[r], a, e)
                    }
                }, tE[a] = t, rE.bind(e, a, t)
            } else t = function(e) {
                Zz(i, a, e)
            }, rE.bind(e, a, t), i.delegates[a] = t
    }
    var tE, nE = {
            fire: function(e, t, n) {
                if (this.removed && "remove" !== e && "detach" !== e) return t;
                var r = Jz(this).fire(e, t);
                if (!1 !== n && this.parent)
                    for (var o = this.parent(); o && !r.isPropagationStopped();) o.fire(e, r, !1), o = o.parent();
                return r
            },
            on: function(e, t, n) {
                return Jz(this).on(e, t, n)
            },
            off: function(e, t) {
                return Jz(this).off(e, t)
            },
            once: function(e, t) {
                return Jz(this).once(e, t)
            },
            hasEventListeners: function(e) {
                return Jz(this).has(e)
            }
        },
        rE = Xi.DOM,
        oE = G(G({}, nE), {
            bindPendingEventDelegates: function() {
                var t = this;
                Mn.each(t._pendingNativeEvents, function(e) {
                    eE(t, e)
                })
            },
            toggleNativeEvent: function(e, t) {
                var n = this;
                "focus" !== e && "blur" !== e && (t ? n.initialized ? eE(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(Qz(n, e), e, n.delegates[e]), delete n.delegates[e]))
            },
            unbindAllNativeEvents: function() {
                var e, t = this,
                    n = t.getBody(),
                    r = t.dom;
                if (t.delegates) {
                    for (e in t.delegates) t.dom.unbind(Qz(t, e), e, t.delegates[e]);
                    delete t.delegates
                }!t.inline && n && r && (n.onload = null, r.unbind(t.getWin()), r.unbind(t.getDoc())), r && (r.unbind(n), r.unbind(t.getContainer()))
            }
        }),
        iE = Mn.each,
        aE = Mn.explode,
        uE = {
            f1: 112,
            f2: 113,
            f3: 114,
            f4: 115,
            f5: 116,
            f6: 117,
            f7: 118,
            f8: 119,
            f9: 120,
            f10: 121,
            f11: 122,
            f12: 123
        },
        sE = Mn.makeMap("alt,ctrl,shift,meta,access"),
        cE = (lE.prototype.add = function(e, n, r, o) {
            var t, i = this;
            return "string" == typeof(t = r) ? r = function() {
                i.editor.execCommand(t, !1, null)
            } : Mn.isArray(t) && (r = function() {
                i.editor.execCommand(t[0], t[1], t[2])
            }), iE(aE(Mn.trim(e)), function(e) {
                var t = i.createShortcut(e, n, r, o);
                i.shortcuts[t.id] = t
            }), !0
        }, lE.prototype.remove = function(e) {
            var t = this.createShortcut(e);
            return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0)
        }, lE.prototype.parseShortcut = function(e) {
            var t, n, r = {};
            for (n in iE(aE(e.toLowerCase(), "+"), function(e) {
                    e in sE ? r[e] = !0 : /^[0-9]{2,}$/.test(e) ? r.keyCode = parseInt(e, 10) : (r.charCode = e.charCodeAt(0), r.keyCode = uE[e] || e.toUpperCase().charCodeAt(0))
                }), t = [r.keyCode], sE) r[n] ? t.push(n) : r[n] = !1;
            return r.id = t.join(","), r.access && (r.alt = !0, Nn.mac ? r.ctrl = !0 : r.shift = !0), r.meta && (Nn.mac ? r.meta = !0 : (r.ctrl = !0, r.meta = !1)), r
        }, lE.prototype.createShortcut = function(e, t, n, r) {
            var o;
            return (o = Mn.map(aE(e, ">"), this.parseShortcut))[o.length - 1] = Mn.extend(o[o.length - 1], {
                func: n,
                scope: r || this.editor
            }), Mn.extend(o[0], {
                desc: this.editor.translate(t),
                subpatterns: o.slice(1)
            })
        }, lE.prototype.hasModifier = function(e) {
            return e.altKey || e.ctrlKey || e.metaKey
        }, lE.prototype.isFunctionKey = function(e) {
            return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123
        }, lE.prototype.matchShortcut = function(e, t) {
            return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0)
        }, lE.prototype.executeShortcutAction = function(e) {
            return e.func ? e.func.call(e.scope) : null
        }, lE);

    function lE(e) {
        this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
        var n = this;
        e.on("keyup keypress keydown", function(t) {
            !n.hasModifier(t) && !n.isFunctionKey(t) || t.isDefaultPrevented() || (iE(n.shortcuts, function(e) {
                if (n.matchShortcut(t, e)) return n.pendingPatterns = e.subpatterns.slice(0), "keydown" === t.type && n.executeShortcutAction(e), !0
            }), n.matchShortcut(t, n.pendingPatterns[0]) && (1 === n.pendingPatterns.length && "keydown" === t.type && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift()))
        })
    }
    var fE = Mn.each,
        dE = Mn.trim,
        hE = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        mE = {
            ftp: 21,
            http: 80,
            https: 443,
            mailto: 25
        },
        gE = (pE.parseDataUri = function(e) {
            var t, n = decodeURIComponent(e).split(","),
                r = /data:([^;]+)/.exec(n[0]);
            return r && (t = r[1]), {
                type: t,
                data: n[1]
            }
        }, pE.getDocumentBaseUrl = function(e) {
            var t;
            return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t
        }, pE.prototype.setPath = function(e) {
            var t = /^(.*?)\/?(\w+)?$/.exec(e);
            this.path = t[0], this.directory = t[1], this.file = t[2], this.source = "", this.getURI()
        }, pE.prototype.toRelative = function(e) {
            var t;
            if ("./" === e) return e;
            var n = new pE(e, {
                base_uri: this
            });
            if ("mce_host" !== n.host && this.host !== n.host && n.host || this.port !== n.port || this.protocol !== n.protocol && "" !== n.protocol) return n.getURI();
            var r = this.getURI(),
                o = n.getURI();
            return r === o || "/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o ? r : (t = this.toRelPath(this.path, n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t)
        }, pE.prototype.toAbsolute = function(e, t) {
            var n = new pE(e, {
                base_uri: this
            });
            return n.getURI(t && this.isSameOrigin(n))
        }, pE.prototype.isSameOrigin = function(e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = mE[this.protocol];
                if (t && (this.port || t) == (e.port || t)) return !0
            }
            return !1
        }, pE.prototype.toRelPath = function(e, t) {
            var n, r, o, i = 0,
                a = "",
                u = e.substring(0, e.lastIndexOf("/")).split("/");
            if (n = t.split("/"), u.length >= n.length)
                for (r = 0, o = u.length; r < o; r++)
                    if (r >= n.length || u[r] !== n[r]) {
                        i = r + 1;
                        break
                    }
            if (u.length < n.length)
                for (r = 0, o = n.length; r < o; r++)
                    if (r >= u.length || u[r] !== n[r]) {
                        i = r + 1;
                        break
                    }
            if (1 === i) return t;
            for (r = 0, o = u.length - (i - 1); r < o; r++) a += "../";
            for (r = i - 1, o = n.length; r < o; r++) a += r !== i - 1 ? "/" + n[r] : n[r];
            return a
        }, pE.prototype.toAbsPath = function(e, t) {
            var n, r, o, i = 0,
                a = [];
            r = /\/$/.test(t) ? "/" : "";
            var u = e.split("/"),
                s = t.split("/");
            for (fE(u, function(e) {
                    e && a.push(e)
                }), u = a, n = s.length - 1, a = []; 0 <= n; n--) 0 !== s[n].length && "." !== s[n] && (".." !== s[n] ? 0 < i ? i-- : a.push(s[n]) : i++);
            return 0 !== (o = (n = u.length - i) <= 0 ? a.reverse().join("/") : u.slice(0, n).join("/") + "/" + a.reverse().join("/")).indexOf("/") && (o = "/" + o), r && o.lastIndexOf("/") !== o.length - 1 && (o += r), o
        }, pE.prototype.getURI = function(e) {
            var t;
            return void 0 === e && (e = !1), this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source
        }, pE);

    function pE(e, t) {
        e = dE(e), this.settings = t || {};
        var n = this.settings.base_uri,
            r = this;
        if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) r.source = e;
        else {
            var o = 0 === e.indexOf("//");
            if (0 !== e.indexOf("/") || o || (e = (n && n.protocol || "http") + "://mce_host" + e), !/^[\w\-]*:?\/\//.test(e)) {
                var i = this.settings.base_uri ? this.settings.base_uri.path : new pE(j.document.location.href).directory;
                if (this.settings.base_uri && "" == this.settings.base_uri.protocol) e = "//mce_host" + r.toAbsPath(i, e);
                else {
                    var a = /([^#?]*)([#?]?.*)/.exec(e);
                    e = (n && n.protocol || "http") + "://mce_host" + r.toAbsPath(i, a[1]) + a[2]
                }
            }
            e = e.replace(/@@/g, "(mce_at)");
            var u = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
            fE(hE, function(e, t) {
                var n = u[t];
                n = n && n.replace(/\(mce_at\)/g, "@@"), r[e] = n
            }), n && (r.protocol || (r.protocol = n.protocol), r.userInfo || (r.userInfo = n.userInfo), r.port || "mce_host" !== r.host || (r.port = n.port), r.host && "mce_host" !== r.host || (r.host = n.host), r.source = ""), o && (r.protocol = "")
        }
    }

    function vE() {
        var e = function() {
            function e(n, r) {
                return function(e, t) {
                    return n[e.toLowerCase()] = G(G({}, t), {
                        type: r
                    })
                }
            }
            var t = {},
                n = {},
                r = {},
                o = {},
                i = {},
                a = {},
                u = {};
            return {
                addButton: e(t, "button"),
                addToggleButton: e(t, "togglebutton"),
                addMenuButton: e(t, "menubutton"),
                addSplitButton: e(t, "splitbutton"),
                addMenuItem: e(n, "menuitem"),
                addNestedMenuItem: e(n, "nestedmenuitem"),
                addToggleMenuItem: e(n, "togglemenuitem"),
                addAutocompleter: e(r, "autocompleter"),
                addContextMenu: e(i, "contextmenu"),
                addContextToolbar: e(a, "contexttoolbar"),
                addContextForm: e(a, "contextform"),
                addSidebar: e(u, "sidebar"),
                addIcon: function(e, t) {
                    return o[e.toLowerCase()] = t
                },
                getAll: function() {
                    return {
                        buttons: t,
                        menuItems: n,
                        icons: o,
                        popups: r,
                        contextMenus: i,
                        contextToolbars: a,
                        sidebars: u
                    }
                }
            }
        }();
        return {
            addAutocompleter: e.addAutocompleter,
            addButton: e.addButton,
            addContextForm: e.addContextForm,
            addContextMenu: e.addContextMenu,
            addContextToolbar: e.addContextToolbar,
            addIcon: e.addIcon,
            addMenuButton: e.addMenuButton,
            addMenuItem: e.addMenuItem,
            addNestedMenuItem: e.addNestedMenuItem,
            addSidebar: e.addSidebar,
            addSplitButton: e.addSplitButton,
            addToggleButton: e.addToggleButton,
            addToggleMenuItem: e.addToggleMenuItem,
            getAll: e.getAll
        }
    }
    var yE = Xi.DOM,
        bE = Mn.extend,
        CE = Mn.each,
        wE = Mn.resolve,
        xE = Nn.ie,
        zE = (EE.prototype.render = function() {
            Dz(this)
        }, EE.prototype.focus = function(e) {
            ad(this, e)
        }, EE.prototype.hasFocus = function() {
            return ud(this)
        }, EE.prototype.execCallback = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r, o = this.settings[e];
            if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? wE(r) : 0, o = wE(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = {
                func: o,
                scope: r
            }), o.apply(r || this, Array.prototype.slice.call(arguments, 1))
        }, EE.prototype.translate = function(e) {
            return ra.translate(e)
        }, EE.prototype.getParam = function(e, t, n) {
            return ef(this, e, t, n)
        }, EE.prototype.nodeChanged = function(e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        }, EE.prototype.addCommand = function(e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        }, EE.prototype.addQueryStateHandler = function(e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        }, EE.prototype.addQueryValueHandler = function(e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        }, EE.prototype.addShortcut = function(e, t, n, r) {
            this.shortcuts.add(e, t, n, r)
        }, EE.prototype.execCommand = function(e, t, n, r) {
            return this.editorCommands.execCommand(e, t, n, r)
        }, EE.prototype.queryCommandState = function(e) {
            return this.editorCommands.queryCommandState(e)
        }, EE.prototype.queryCommandValue = function(e) {
            return this.editorCommands.queryCommandValue(e)
        }, EE.prototype.queryCommandSupported = function(e) {
            return this.editorCommands.queryCommandSupported(e)
        }, EE.prototype.show = function() {
            this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = "true" : (yE.show(this.getContainer()), yE.hide(this.id)), this.load(), this.fire("show"))
        }, EE.prototype.hide = function() {
            var e = this,
                t = e.getDoc();
            e.hidden || (xE && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (yE.hide(e.getContainer()), yE.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
        }, EE.prototype.isHidden = function() {
            return !!this.hidden
        }, EE.prototype.setProgressState = function(e, t) {
            this.fire("ProgressState", {
                state: e,
                time: t
            })
        }, EE.prototype.load = function(e) {
            var t, n = this.getElement();
            if (this.removed) return "";
            if (n) {
                (e = e || {}).load = !0;
                var r = Ge.isTextareaOrInput(n) ? n.value : n.innerHTML;
                return t = this.setContent(r, e), e.element = n, e.no_events || this.fire("LoadContent", e), e.element = n = null, t
            }
        }, EE.prototype.save = function(e) {
            var t, n, r = this,
                o = r.getElement();
            if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, Ge.isTextareaOrInput(o) ? o.value = t : (!e.is_removing && r.inline || (o.innerHTML = t), (n = yE.getParent(r.id, "form")) && CE(n.elements, function(e) {
                if (e.name === r.id) return e.value = t, !1
            })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t
        }, EE.prototype.setContent = function(e, t) {
            return jl(this, e, t)
        }, EE.prototype.getContent = function(e) {
            return function(t, n) {
                return void 0 === n && (n = {}), k.from(t.getBody()).fold($("tree" === n.format ? new ul("body", 11) : ""), function(e) {
                    return ml(t, n, e)
                })
            }(this, e)
        }, EE.prototype.insertContent = function(e, t) {
            t && (e = bE({
                content: e
            }, t)), this.execCommand("mceInsertContent", !1, e)
        }, EE.prototype.resetContent = function(e) {
            e === undefined ? jl(this, this.startContent, {
                format: "raw"
            }) : jl(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged()
        }, EE.prototype.isDirty = function() {
            return !this.isNotDirty
        }, EE.prototype.setDirty = function(e) {
            var t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.fire("dirty")
        }, EE.prototype.getContainer = function() {
            return this.container || (this.container = yE.get(this.editorContainer || this.id + "_parent")), this.container
        }, EE.prototype.getContentAreaContainer = function() {
            return this.contentAreaContainer
        }, EE.prototype.getElement = function() {
            return this.targetElm || (this.targetElm = yE.get(this.id)), this.targetElm
        }, EE.prototype.getWin = function() {
            var e;
            return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow
        }, EE.prototype.getDoc = function() {
            var e;
            return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument
        }, EE.prototype.getBody = function() {
            var e = this.getDoc();
            return this.bodyElement || (e ? e.body : null)
        }, EE.prototype.convertURL = function(e, t, n) {
            var r = this.settings;
            return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : e = this.documentBaseURI.toAbsolute(e, r.remove_script_host)
        }, EE.prototype.addVisual = function(e) {
            var n, r = this,
                o = r.settings,
                i = r.dom;
            e = e || r.getBody(), r.hasVisual === undefined && (r.hasVisual = o.visual), CE(i.select("table,a", e), function(e) {
                var t;
                switch (e.nodeName) {
                    case "TABLE":
                        return n = o.visual_table_class || "mce-item-table", void((t = i.getAttrib(e, "border")) && "0" !== t || !r.hasVisual ? i.removeClass(e, n) : i.addClass(e, n));
                    case "A":
                        return void(i.getAttrib(e, "href") || (t = i.getAttrib(e, "name") || e.id, n = o.visual_anchor_class || "mce-item-anchor", t && r.hasVisual ? i.addClass(e, n) : i.removeClass(e, n)))
                }
            }), r.fire("VisualAid", {
                element: e,
                hasVisual: r.hasVisual
            })
        }, EE.prototype.remove = function() {
            $l(this)
        }, EE.prototype.destroy = function(e) {
            Wl(this, e)
        }, EE.prototype.uploadImages = function(e) {
            return this.editorUpload.uploadImages(e)
        }, EE.prototype._scanForImages = function() {
            return this.editorUpload.scanForImages()
        }, EE.prototype.addButton = function() {
            throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")
        }, EE.prototype.addSidebar = function() {
            throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")
        }, EE.prototype.addMenuItem = function() {
            throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")
        }, EE.prototype.addContextToolbar = function() {
            throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")
        }, EE);

    function EE(e, t, n) {
        var r = this;
        this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, bE(this, oE), this.settings = Ql(this, e, this.documentBaseUrl, n.defaultSettings, t), this.settings.suffix && (n.suffix = this.settings.suffix), this.suffix = n.suffix, this.settings.base_url && n._setBaseUrl(this.settings.base_url), this.baseUri = n.baseURI, this.settings.referrer_policy && (Qi.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy), Xi.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)), ga.languageLoad = this.settings.language_load, ga.baseURL = n.baseURL, this.id = e, this.setDirty(!1), this.documentBaseURI = new gE(this.settings.document_base_url, {
            base_uri: this.baseUri
        }), this.baseURI = this.baseUri, this.inline = !!this.settings.inline, this.shortcuts = new cE(this), this.editorCommands = new Wz(this), this.settings.cache_suffix && (Nn.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")), this.ui = {
            registry: vE()
        };
        var o = Zw(this);
        this.mode = o, this.setMode = o.set, n.fire("SetupEditor", {
            editor: this
        }), this.execCallback("setup", this), this.$ = vi.overrideDefaults(function() {
            return {
                context: r.inline ? r.getBody() : r.getDoc(),
                element: r.getBody()
            }
        })
    }

    function NE(t) {
        var n = t.type;
        DE(VE.get(), function(e) {
            switch (n) {
                case "scroll":
                    e.fire("ScrollWindow", t);
                    break;
                case "resize":
                    e.fire("ResizeWindow", t)
            }
        })
    }

    function SE(e) {
        e !== OE && (e ? vi(window).on("resize scroll", NE) : vi(window).off("resize scroll", NE), OE = e)
    }

    function kE(t) {
        var e = PE;
        delete HE[t.id];
        for (var n = 0; n < HE.length; n++)
            if (HE[n] === t) {
                HE.splice(n, 1);
                break
            }
        return PE = y(PE, function(e) {
            return t !== e
        }), VE.activeEditor === t && (VE.activeEditor = 0 < PE.length ? PE[0] : null), VE.focusedEditor === t && (VE.focusedEditor = null), e.length !== PE.length
    }
    var TE, AE, ME = Xi.DOM,
        RE = Mn.explode,
        DE = Mn.each,
        _E = Mn.extend,
        BE = 0,
        OE = !1,
        HE = [],
        PE = [],
        LE = "CSS1Compat" !== j.document.compatMode,
        VE = G(G({}, nE), {
            baseURI: null,
            baseURL: null,
            defaultSettings: {},
            documentBaseURL: null,
            suffix: null,
            $: vi,
            majorVersion: "5",
            minorVersion: "1.5",
            releaseDate: "2019-12-19",
            editors: HE,
            i18n: ra,
            activeEditor: null,
            focusedEditor: null,
            settings: {},
            setup: function() {
                var e, t, n = "";
                t = gE.getDocumentBaseUrl(j.document.location), /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/"));
                var r = window.tinymce || window.tinyMCEPreInit;
                if (r) e = r.base || r.baseURL, n = r.suffix;
                else {
                    for (var o = j.document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                        var a;
                        if ("" !== (a = o[i].src || "")) {
                            var u = a.substring(a.lastIndexOf("/"));
                            if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)) {
                                -1 !== u.indexOf(".min") && (n = ".min"), e = a.substring(0, a.lastIndexOf("/"));
                                break
                            }
                        }
                    }
                    if (!e && j.document.currentScript) - 1 !== (a = j.document.currentScript.src).indexOf(".min") && (n = ".min"), e = a.substring(0, a.lastIndexOf("/"))
                }
                this.baseURL = new gE(t).toAbsolute(e), this.documentBaseURL = t, this.baseURI = new gE(this.baseURL), this.suffix = n, nd(this)
            },
            overrideDefaults: function(e) {
                var t, n;
                (t = e.base_url) && this._setBaseUrl(t), n = e.suffix, e.suffix && (this.suffix = n);
                var r = (this.defaultSettings = e).plugin_base_urls;
                for (var o in r) ga.PluginManager.urls[o] = r[o]
            },
            init: function(r) {
                var n, u, s = this;
                u = Mn.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " ");

                function c(e) {
                    var t = e.id;
                    return t || (t = (t = e.name) && !ME.get(t) ? e.name : ME.uniqueId(), e.setAttribute("id", t)), t
                }

                function l(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : ME.hasClass(e, t)
                }
                var f = function(e) {
                        n = e
                    },
                    e = function() {
                        function n(e, t, n) {
                            var r = new zE(e, t, s);
                            a.push(r), r.on("init", function() {
                                ++i === o.length && f(a)
                            }), r.targetElm = r.targetElm || n, r.render()
                        }
                        var o, i = 0,
                            a = [];
                        ME.unbind(window, "ready", e),
                            function(e) {
                                var t = r[e];
                                if (t) t.apply(s, Array.prototype.slice.call(arguments, 2))
                            }("onpageload"), o = vi.unique(function(t) {
                                var e, n = [];
                                if (Nn.browser.isIE() && Nn.browser.version.major < 11) return Fd.initError("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                                if (LE) return Fd.initError("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), [];
                                if (t.types) return DE(t.types, function(e) {
                                    n = n.concat(ME.select(e.selector))
                                }), n;
                                if (t.selector) return ME.select(t.selector);
                                if (t.target) return [t.target];
                                switch (t.mode) {
                                    case "exact":
                                        0 < (e = t.elements || "").length && DE(RE(e), function(t) {
                                            var e;
                                            (e = ME.get(t)) ? n.push(e): DE(j.document.forms, function(e) {
                                                DE(e.elements, function(e) {
                                                    e.name === t && (t = "mce_editor_" + BE++, ME.setAttrib(e, "id", t), n.push(e))
                                                })
                                            })
                                        });
                                        break;
                                    case "textareas":
                                    case "specific_textareas":
                                        DE(ME.select("textarea"), function(e) {
                                            t.editor_deselector && l(e, t.editor_deselector) || t.editor_selector && !l(e, t.editor_selector) || n.push(e)
                                        })
                                }
                                return n
                            }(r)), r.types ? DE(r.types, function(t) {
                                Mn.each(o, function(e) {
                                    return !ME.is(e, t.selector) || (n(c(e), _E({}, r, t), e), !1)
                                })
                            }) : (Mn.each(o, function(e) {
                                ! function(e) {
                                    e && e.initialized && !(e.getContainer() || e.getBody()).parentNode && (kE(e), e.unbindAllNativeEvents(), e.destroy(!0), e.removed = !0, e = null)
                                }(s.get(e.id))
                            }), 0 === (o = Mn.grep(o, function(e) {
                                return !s.get(e.id)
                            })).length ? f([]) : DE(o, function(e) {
                                ! function(e, t) {
                                    return e.inline && t.tagName.toLowerCase() in u
                                }(r, e) ? n(c(e), r, e): Fd.initError("Could not initialize inline editor on invalid inline target element", e)
                            }))
                    };
                return s.settings = r, ME.bind(window, "ready", e), new Zt(function(t) {
                    n ? t(n) : f = function(e) {
                        t(e)
                    }
                })
            },
            get: function(t) {
                return 0 === arguments.length ? PE.slice(0) : K(t) ? g(PE, function(e) {
                    return e.id === t
                }).getOr(null) : _(t) && PE[t] ? PE[t] : null
            },
            add: function(e) {
                var n = this;
                return HE[e.id] === e || (null === n.get(e.id) && (function(e) {
                    return "length" !== e
                }(e.id) && (HE[e.id] = e), HE.push(e), PE.push(e)), SE(!0), n.activeEditor = e, n.fire("AddEditor", {
                    editor: e
                }), TE || (TE = function(e) {
                    var t = n.fire("BeforeUnload");
                    if (t.returnValue) return e.preventDefault(), e.returnValue = t.returnValue, t.returnValue
                }, window.addEventListener("beforeunload", TE))), e
            },
            createEditor: function(e, t) {
                return this.add(new zE(e, t, this))
            },
            remove: function(e) {
                var t, n, r = this;
                if (e) {
                    if (!K(e)) return n = e, M(r.get(n.id)) ? null : (kE(n) && r.fire("RemoveEditor", {
                        editor: n
                    }), 0 === PE.length && window.removeEventListener("beforeunload", TE), n.remove(), SE(0 < PE.length), n);
                    DE(ME.select(e), function(e) {
                        (n = r.get(e.id)) && r.remove(n)
                    })
                } else
                    for (t = PE.length - 1; 0 <= t; t--) r.remove(PE[t])
            },
            execCommand: function(e, t, n) {
                var r = this.get(n);
                switch (e) {
                    case "mceAddEditor":
                        return this.get(n) || new zE(n, this.settings, this).render(), !0;
                    case "mceRemoveEditor":
                        return r && r.remove(), !0;
                    case "mceToggleEditor":
                        return r ? r.isHidden() ? r.show() : r.hide() : this.execCommand("mceAddEditor", 0, n), !0
                }
                return !!this.activeEditor && this.activeEditor.execCommand(e, t, n)
            },
            triggerSave: function() {
                DE(PE, function(e) {
                    e.save()
                })
            },
            addI18n: function(e, t) {
                ra.add(e, t)
            },
            translate: function(e) {
                return ra.translate(e)
            },
            setActive: function(e) {
                var t = this.activeEditor;
                this.activeEditor !== e && (t && t.fire("deactivate", {
                    relatedTarget: e
                }), e.fire("activate", {
                    relatedTarget: t
                })), this.activeEditor = e
            },
            _setBaseUrl: function(e) {
                this.baseURL = new gE(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new gE(this.baseURL)
            }
        });

    function IE(n) {
        return {
            walk: function(e, t) {
                return Gc(n, e, t)
            },
            split: Cm,
            normalize: function(t) {
                return ay(n, t).fold($(!1), function(e) {
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0
                })
            }
        }
    }
    VE.setup(), (AE = IE = IE || {}).compareRanges = hh, AE.getCaretRangeFromPoint = $v, AE.getSelectedNode = Wa, AE.getNode = Ka;

    function FE(e, t, n) {
        var r, o, i, a, u, s;
        return r = t.x, o = t.y, i = e.w, a = e.h, u = t.w, s = t.h, "b" === (n = (n || "").split(""))[0] && (o += s), "r" === n[1] && (r += u), "c" === n[0] && (o += JE(s / 2)), "c" === n[1] && (r += JE(u / 2)), "b" === n[3] && (o -= a), "r" === n[4] && (r -= i), "c" === n[3] && (o -= JE(a / 2)), "c" === n[4] && (r -= JE(i / 2)), QE(r, o, i, a)
    }

    function UE() {}
    var jE, qE, $E, WE, KE = IE,
        XE = (jE = {}, qE = {}, {
            load: function(r, o) {
                var i = 'Script at URL "' + o + '" failed to load',
                    a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
                if (jE[r] !== undefined) return jE[r];
                var e = new Zt(function(e, t) {
                    var n = function(e, t, n) {
                        function r(n) {
                            return function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                o || (o = !0, null !== i && (j.clearTimeout(i), i = null), n.apply(null, e))
                            }
                        }
                        void 0 === n && (n = 1e3);
                        var o = !1,
                            i = null,
                            a = r(e),
                            u = r(t);
                        return {
                            start: function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                o || null !== i || (i = j.setTimeout(function() {
                                    return u.apply(null, e)
                                }, n))
                            },
                            resolve: a,
                            reject: u
                        }
                    }(e, t);
                    qE[r] = n.resolve, Qi.ScriptLoader.loadScript(o, function() {
                        return n.start(a)
                    }, function() {
                        return n.reject(i)
                    })
                });
                return jE[r] = e
            },
            add: function(e, t) {
                qE[e] !== undefined && (qE[e](t), delete qE[e]), jE[e] = Zt.resolve(t)
            }
        }),
        YE = Math.min,
        GE = Math.max,
        JE = Math.round,
        QE = function(e, t, n, r) {
            return {
                x: e,
                y: t,
                w: n,
                h: r
            }
        },
        ZE = {
            inflate: function(e, t, n) {
                return QE(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n)
            },
            relativePosition: FE,
            findBestRelativePosition: function(e, t, n, r) {
                var o, i;
                for (i = 0; i < r.length; i++)
                    if ((o = FE(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null
            },
            intersect: function(e, t) {
                var n, r, o, i;
                return n = GE(e.x, t.x), r = GE(e.y, t.y), o = YE(e.x + e.w, t.x + t.w), i = YE(e.y + e.h, t.y + t.h), o - n < 0 || i - r < 0 ? null : QE(n, r, o - n, i - r)
            },
            clamp: function(e, t, n) {
                var r, o, i, a, u, s, c, l, f, d;
                return u = e.x, s = e.y, c = e.x + e.w, l = e.y + e.h, f = t.x + t.w, d = t.y + t.h, r = GE(0, t.x - u), o = GE(0, t.y - s), i = GE(0, c - f), a = GE(0, l - d), u += r, s += o, n && (c += r, l += o, u -= i, s -= a), QE(u, s, (c -= i) - u, (l -= a) - s)
            },
            create: QE,
            fromClientRect: function(e) {
                return QE(e.left, e.top, e.width, e.height)
            }
        },
        eN = Mn.each,
        tN = Mn.extend;
    UE.extend = $E = function(n) {
        function r() {
            var e, t, n;
            if (!WE && (this.init && this.init.apply(this, arguments), t = this.Mixins))
                for (e = t.length; e--;)(n = t[e]).init && n.init.apply(this, arguments)
        }

        function t() {
            return this
        }

        function e(n, r) {
            return function() {
                var e, t = this._super;
                return this._super = u[n], e = r.apply(this, arguments), this._super = t, e
            }
        }
        var o, i, a, u = this.prototype;
        for (i in WE = !0, o = new this, WE = !1, n.Mixins && (eN(n.Mixins, function(e) {
                for (var t in e) "init" !== t && (n[t] = e[t])
            }), u.Mixins && (n.Mixins = u.Mixins.concat(n.Mixins))), n.Methods && eN(n.Methods.split(","), function(e) {
                n[e] = t
            }), n.Properties && eN(n.Properties.split(","), function(e) {
                var t = "_" + e;
                n[e] = function(e) {
                    return e !== undefined ? (this[t] = e, this) : this[t]
                }
            }), n.Statics && eN(n.Statics, function(e, t) {
                r[t] = e
            }), n.Defaults && u.Defaults && (n.Defaults = tN({}, u.Defaults, n.Defaults)), n) "function" == typeof(a = n[i]) && u[i] ? o[i] = e(i, a) : o[i] = a;
        return r.prototype = o, (r.constructor = r).extend = $E, r
    };
    var nN = Math.min,
        rN = Math.max,
        oN = Math.round,
        iN = {
            serialize: function(e) {
                var t = JSON.stringify(e);
                return K(t) ? t.replace(/[\u0080-\uFFFF]/g, function(e) {
                    var t = e.charCodeAt(0).toString(16);
                    return "\\u" + "0000".substring(t.length) + t
                }) : t
            },
            parse: function(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {}
            }
        },
        aN = {
            callbacks: {},
            count: 0,
            send: function(t) {
                var n = this,
                    r = Xi.DOM,
                    o = t.count !== undefined ? t.count : n.count,
                    i = "tinymce_jsonp_" + o;
                n.callbacks[o] = function(e) {
                    r.remove(i), delete n.callbacks[o], t.callback(e)
                }, r.add(r.doc.body, "script", {
                    id: i,
                    src: t.url,
                    type: "text/javascript"
                }), n.count++
            }
        },
        uN = G(G({}, nE), {
            send: function(e) {
                var t, n = 0,
                    r = function() {
                        !e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : pn.setTimeout(r, 10)
                    };
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", uN.fire("beforeInitialize", {
                        settings: e
                    }), t = new j.XMLHttpRequest) {
                    if (t.overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && Mn.each(e.requestheaders, function(e) {
                            t.setRequestHeader(e.key, e.value)
                        }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = uN.fire("beforeSend", {
                            xhr: t,
                            settings: e
                        }).xhr).send(e.data), !e.async) return r();
                    pn.setTimeout(r, 10)
                }
            }
        }),
        sN = Mn.extend,
        cN = (lN.sendRPC = function(e) {
            return (new lN).send(e)
        }, lN.prototype.send = function(e) {
            var n = e.error,
                r = e.success,
                o = sN(this.settings, e);
            o.success = function(e, t) {
                void 0 === (e = iN.parse(e)) && (e = {
                    error: "JSON Parse error."
                }), e.error ? n.call(o.error_scope || o.scope, e.error, t) : r.call(o.success_scope || o.scope, e.result)
            }, o.error = function(e, t) {
                n && n.call(o.error_scope || o.scope, e, t)
            }, o.data = iN.serialize({
                id: e.id || "c" + this.count++,
                method: e.method,
                params: e.params
            }), o.content_type = "application/json", uN.send(o)
        }, lN);

    function lN(e) {
        this.settings = sN({}, e), this.count = 0
    }
    var fN, dN, hN, mN;
    try {
        fN = j.window.localStorage
    } catch (yN) {
        dN = {}, hN = [], mN = {
            getItem: function(e) {
                var t = dN[e];
                return t || null
            },
            setItem: function(e, t) {
                hN.push(e), dN[e] = String(t)
            },
            key: function(e) {
                return hN[e]
            },
            removeItem: function(t) {
                hN = hN.filter(function(e) {
                    return e === t
                }), delete dN[t]
            },
            clear: function() {
                hN = [], dN = {}
            },
            length: 0
        }, Object.defineProperty(mN, "length", {
            get: function() {
                return hN.length
            },
            configurable: !1,
            enumerable: !1
        }), fN = mN
    }
    var gN, pN = {
            geom: {
                Rect: ZE
            },
            util: {
                Promise: Zt,
                Delay: pn,
                Tools: Mn,
                VK: Ah,
                URI: gE,
                Class: UE,
                EventDispatcher: Yz,
                Observable: nE,
                I18n: ra,
                XHR: uN,
                JSON: iN,
                JSONRequest: cN,
                JSONP: aN,
                LocalStorage: fN,
                Color: function(e) {
                    function t(e) {
                        var t;
                        return "object" == typeof e ? "r" in e ? (u = e.r, s = e.g, c = e.b) : "v" in e && function(e, t, n) {
                            var r, o, i, a;
                            if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = rN(0, nN(t, 1)), n = rN(0, nN(n, 1)), 0 !== t) {
                                switch (r = e / 60, i = (o = n * t) * (1 - Math.abs(r % 2 - 1)), a = n - o, Math.floor(r)) {
                                    case 0:
                                        u = o, s = i, c = 0;
                                        break;
                                    case 1:
                                        u = i, s = o, c = 0;
                                        break;
                                    case 2:
                                        u = 0, s = o, c = i;
                                        break;
                                    case 3:
                                        u = 0, s = i, c = o;
                                        break;
                                    case 4:
                                        u = i, s = 0, c = o;
                                        break;
                                    case 5:
                                        u = o, s = 0, c = i;
                                        break;
                                    default:
                                        u = s = c = 0
                                }
                                u = oN(255 * (u + a)), s = oN(255 * (s + a)), c = oN(255 * (c + a))
                            } else u = s = c = oN(255 * n)
                        }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), c = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, c = c < 0 ? 0 : 255 < c ? 255 : c, n
                    }
                    var n = {},
                        u = 0,
                        s = 0,
                        c = 0;
                    return e && t(e), n.toRgb = function() {
                        return {
                            r: u,
                            g: s,
                            b: c
                        }
                    }, n.toHsv = function() {
                        return function(e, t, n) {
                            var r, o, i, a;
                            return o = 0, (i = nN(e /= 255, nN(t /= 255, n /= 255))) === (a = rN(e, rN(t, n))) ? {
                                h: 0,
                                s: 0,
                                v: 100 * (o = i)
                            } : (r = (a - i) / a, {
                                h: oN(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))),
                                s: oN(100 * r),
                                v: oN(100 * o)
                            })
                        }(u, s, c)
                    }, n.toHex = function() {
                        function e(e) {
                            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
                        }
                        return "#" + e(u) + e(s) + e(c)
                    }, n.parse = t, n
                }
            },
            dom: {
                EventUtils: kr,
                Sizzle: Ao,
                DomQuery: vi,
                TreeWalker: yi,
                DOMUtils: Xi,
                ScriptLoader: Qi,
                RangeUtils: KE,
                Serializer: Ap,
                ControlSelection: Wp,
                BookmarkManager: Kp,
                Selection: ly,
                Event: kr.Event
            },
            html: {
                Styles: xr,
                Entities: ir,
                Node: ul,
                Schema: pr,
                SaxParser: of,
                DomParser: Np,
                Writer: gl,
                Serializer: pl
            },
            Env: Nn,
            AddOnManager: ga,
            Annotator: nl,
            Formatter: Cp,
            UndoManager: mm,
            EditorCommands: Wz,
            WindowManager: Bd,
            NotificationManager: _d,
            EditorObservable: oE,
            Shortcuts: cE,
            Editor: zE,
            FocusManager: Zf,
            EditorManager: VE,
            DOM: Xi.DOM,
            ScriptLoader: Qi.ScriptLoader,
            PluginManager: ga.PluginManager,
            ThemeManager: ga.ThemeManager,
            IconManager: Ud,
            Resource: XE,
            trim: Mn.trim,
            isArray: Mn.isArray,
            is: Mn.is,
            toArray: Mn.toArray,
            makeMap: Mn.makeMap,
            each: Mn.each,
            map: Mn.map,
            grep: Mn.grep,
            inArray: Mn.inArray,
            extend: Mn.extend,
            create: Mn.create,
            walk: Mn.walk,
            createNS: Mn.createNS,
            resolve: Mn.resolve,
            explode: Mn.explode,
            _addCacheSuffix: Mn._addCacheSuffix,
            isOpera: Nn.opera,
            isWebKit: Nn.webkit,
            isIE: Nn.ie,
            isGecko: Nn.gecko,
            isMac: Nn.mac
        },
        vN = Mn.extend(VE, pN);
    gN = vN, window.tinymce = gN, window.tinyMCE = gN,
        function(e) {
            if ("object" == typeof module) try {
                module.exports = e
            } catch (t) {}
        }(vN)
}(window);