/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(ie, e) {
    "use strict";
    var oe = []
      , r = Object.getPrototypeOf
      , ae = oe.slice
      , g = oe.flat ? function(e) {
        return oe.flat.call(e)
    }
    : function(e) {
        return oe.concat.apply([], e)
    }
      , s = oe.push
      , se = oe.indexOf
      , n = {}
      , i = n.toString
      , ue = n.hasOwnProperty
      , o = ue.toString
      , a = o.call(Object)
      , le = {}
      , v = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , y = function(e) {
        return null != e && e === e.window
    }
      , C = ie.document
      , u = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e,
        t)
            for (r in u)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }
    var t = "3.7.0"
      , l = /HTML$/i
      , ce = function(e, t) {
        return new ce.fn.init(e,t)
    };
    function c(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return ce.each(this, e)
        },
        map: function(n) {
            return this.pushStack(ce.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: oe.sort,
        splice: oe.splice
    },
    ce.extend = ce.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || v(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    ce.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (c(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        text: function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i)
                    return e.textContent;
                if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += ce.text(t);
            return n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !l.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (c(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: le
    }),
    "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = oe.pop
      , de = oe.sort
      , he = oe.splice
      , ge = "[\\x20\\t\\r\\n\\f]"
      , ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$","g");
    ce.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    }
    ;
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function p(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    ce.escapeSelector = function(e) {
        return (e + "").replace(f, p)
    }
    ;
    var ye = C
      , me = s;
    !function() {
        var e, b, w, o, a, T, r, C, d, i, k = me, S = ce.expando, E = 0, n = 0, s = W(), c = W(), u = W(), h = W(), l = function(e, t) {
            return e === t && (a = !0),
            0
        }, f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]", g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)", v = new RegExp(ge + "+","g"), y = new RegExp("^" + ge + "*," + ge + "*"), m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x = new RegExp(ge + "|>"), j = new RegExp(g), A = new RegExp("^" + t + "$"), D = {
            ID: new RegExp("^#(" + t + ")"),
            CLASS: new RegExp("^\\.(" + t + ")"),
            TAG: new RegExp("^(" + t + "|[*])"),
            ATTR: new RegExp("^" + p),
            PSEUDO: new RegExp("^" + g),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)","i"),
            bool: new RegExp("^(?:" + f + ")$","i"),
            needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)","i")
        }, N = /^(?:input|select|textarea|button)$/i, q = /^h\d$/i, L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H = /[+~]/, O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])","g"), P = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, R = function() {
            V()
        }, M = J(function(e) {
            return !0 === e.disabled && fe(e, "fieldset")
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            k.apply(oe = ae.call(ye.childNodes), ye.childNodes),
            oe[ye.childNodes.length].nodeType
        } catch (e) {
            k = {
                apply: function(e, t) {
                    me.apply(e, ae.call(t))
                },
                call: function(e) {
                    me.apply(e, ae.call(arguments, 1))
                }
            }
        }
        function I(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (V(e),
            e = e || T,
            C)) {
                if (11 !== p && (u = L.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return k.call(n, a),
                                n
                        } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i)
                            return k.call(n, a),
                            n
                    } else {
                        if (u[2])
                            return k.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && e.getElementsByClassName)
                            return k.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (!(h[t + " "] || d && d.test(t))) {
                    if (c = t,
                    f = e,
                    1 === p && (x.test(t) || m.test(t))) {
                        (f = H.test(t) && z(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)),
                        o = (l = Y(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return k.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        h(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r)
        }
        function W() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function F(e) {
            return e[S] = !0,
            e
        }
        function $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function B(t) {
            return function(e) {
                return fe(e, "input") && e.type === t
            }
        }
        function _(t) {
            return function(e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t
            }
        }
        function X(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && M(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function U(a) {
            return F(function(o) {
                return o = +o,
                F(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function z(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function V(e) {
            var t, n = e ? e.ownerDocument || e : ye;
            return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement,
            C = !ce.isXMLDoc(T),
            i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector,
            ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", R),
            le.getById = $(function(e) {
                return r.appendChild(e).id = ce.expando,
                !T.getElementsByName || !T.getElementsByName(ce.expando).length
            }),
            le.disconnectedMatch = $(function(e) {
                return i.call(e, "*")
            }),
            le.scope = $(function() {
                return T.querySelectorAll(":scope")
            }),
            le.cssHas = $(function() {
                try {
                    return T.querySelector(":has(*,:jqfake)"),
                    !1
                } catch (e) {
                    return !0
                }
            }),
            le.getById ? (b.filter.ID = function(e) {
                var t = e.replace(O, P);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(O, P);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }
            ,
            b.find.CLASS = function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && C)
                    return t.getElementsByClassName(e)
            }
            ,
            d = [],
            $(function(e) {
                var t;
                r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
                e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
                e.querySelectorAll(":checked").length || d.push(":checked"),
                (t = T.createElement("input")).setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                r.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"),
                (t = T.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
            }),
            le.cssHas || d.push(":has"),
            d = d.length && new RegExp(d.join("|")),
            l = function(e, t) {
                if (e === t)
                    return a = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
            }
            ),
            T
        }
        for (e in I.matches = function(e, t) {
            return I(e, null, null, t)
        }
        ,
        I.matchesSelector = function(e, t) {
            if (V(e),
            C && !h[t + " "] && (!d || !d.test(t)))
                try {
                    var n = i.call(e, t);
                    if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    h(t, !0)
                }
            return 0 < I(t, T, null, [e]).length
        }
        ,
        I.contains = function(e, t) {
            return (e.ownerDocument || e) != T && V(e),
            ce.contains(e, t)
        }
        ,
        I.attr = function(e, t) {
            (e.ownerDocument || e) != T && V(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
            return void 0 !== r ? r : e.getAttribute(t)
        }
        ,
        I.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ce.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (a = !le.sortStable,
            o = !le.sortStable && ae.call(e, 0),
            de.call(e, l),
            a) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    he.call(e, n[r], 1)
            }
            return o = null,
            e
        }
        ,
        ce.fn.uniqueSort = function() {
            return this.pushStack(ce.uniqueSort(ae.apply(this)))
        }
        ,
        (b = ce.expr = {
            cacheLength: 50,
            createPseudo: F,
            match: D,
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
                    return e[1] = e[1].replace(O, P),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(O, P),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(O, P).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return fe(e, t)
                    }
                },
                CLASS: function(e) {
                    var t = s[e + " "];
                    return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = I.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(d, e, t, h, g) {
                    var v = "nth" !== d.slice(0, 3)
                      , y = "last" !== d.slice(-4)
                      , m = "of-type" === e;
                    return 1 === h && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling", l = e.parentNode, c = m && e.nodeName.toLowerCase(), f = !n && !m, p = !1;
                        if (l) {
                            if (v) {
                                while (u) {
                                    o = e;
                                    while (o = o[u])
                                        if (m ? fe(o, c) : 1 === o.nodeType)
                                            return !1;
                                    s = u = "only" === d && !s && "nextSibling"
                                }
                                return !0
                            }
                            if (s = [y ? l.firstChild : l.lastChild],
                            y && f) {
                                p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2],
                                o = a && l.childNodes[a];
                                while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                    if (1 === o.nodeType && ++p && o === e) {
                                        i[d] = [E, a, p];
                                        break
                                    }
                            } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]),
                            !1 === p)
                                while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                    if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                                    o === e))
                                        break;
                            return (p -= g) === h || p % h == 0 && 0 <= p / h
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = se.call(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: F(function(e) {
                    var r = []
                      , i = []
                      , s = ne(e.replace(ve, "$1"));
                    return s[S] ? F(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: F(function(t) {
                    return function(e) {
                        return 0 < I(t, e).length
                    }
                }),
                contains: F(function(t) {
                    return t = t.replace(O, P),
                    function(e) {
                        return -1 < (e.textContent || ce.text(e)).indexOf(t)
                    }
                }),
                lang: F(function(n) {
                    return A.test(n || "") || I.error("unsupported lang: " + n),
                    n = n.replace(O, P).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = ie.location && ie.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === r
                },
                focus: function(e) {
                    return e === function() {
                        try {
                            return T.activeElement
                        } catch (e) {}
                    }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: X(!1),
                disabled: X(!0),
                checked: function(e) {
                    return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return q.test(e.nodeName)
                },
                input: function(e) {
                    return N.test(e.nodeName)
                },
                button: function(e) {
                    return fe(e, "input") && "button" === e.type || fe(e, "button")
                },
                text: function(e) {
                    var t;
                    return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: U(function() {
                    return [0]
                }),
                last: U(function(e, t) {
                    return [t - 1]
                }),
                eq: U(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: U(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: U(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: U(function(e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: U(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = B(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = _(e);
        function G() {}
        function Y(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = m.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(ve, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
        }
        function Q(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function J(a, e, t) {
            var s = e.dir
              , u = e.next
              , l = u || s
              , c = t && "parentNode" === l
              , f = n++;
            return e.first ? function(e, t, n) {
                while (e = e[s])
                    if (1 === e.nodeType || c)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o = [E, f];
                if (n) {
                    while (e = e[s])
                        if ((1 === e.nodeType || c) && a(e, t, n))
                            return !0
                } else
                    while (e = e[s])
                        if (1 === e.nodeType || c)
                            if (i = e[S] || (e[S] = {}),
                            u && fe(e, u))
                                e = e[s] || e;
                            else {
                                if ((r = i[l]) && r[0] === E && r[1] === f)
                                    return o[2] = r[2];
                                if ((i[l] = o)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function K(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Z(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function ee(d, h, g, v, y, e) {
            return v && !v[S] && (v = ee(v)),
            y && !y[S] && (y = ee(y, e)),
            F(function(e, t, n, r) {
                var i, o, a, s, u = [], l = [], c = t.length, f = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        I(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), p = !d || !e && h ? f : Z(f, u, d, n, r);
                if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p,
                v) {
                    i = Z(s, l),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = s.length;
                            while (o--)
                                (a = s[o]) && i.push(p[o] = a);
                            y(null, s = [], i, r)
                        }
                        o = s.length;
                        while (o--)
                            (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    s = Z(s === t ? s.splice(c, s.length) : s),
                    y ? y(null, t, s, r) : k.apply(t, s)
            })
        }
        function te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function(e) {
                return e === i
            }, a, !0), l = J(function(e) {
                return -1 < se.call(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [J(K(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
                    }
                    c.push(t)
                }
            return K(c)
        }
        function ne(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = u[e + " "];
            if (!a) {
                t || (t = Y(e)),
                n = t.length;
                while (n--)
                    (a = te(t[n]))[S] ? i.push(a) : o.push(a);
                (a = u(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = E += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == T || (V(o),
                            n = !C);
                            while (s = v[a++])
                                if (s(o, t || T, n)) {
                                    k.call(r, o);
                                    break
                                }
                            i && (E = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = pe.call(r));
                            f = Z(f)
                        }
                        k.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
                    }
                    return i && (E = h,
                    w = p),
                    c
                }
                ,
                m ? F(r) : r))).selector = e
            }
            return a
        }
        function re(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && Y(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = D.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && z(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && Q(o)))
                            return k.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && z(t.parentNode) || t),
            n
        }
        G.prototype = b.filters = b.pseudos,
        b.setFilters = new G,
        le.sortStable = S.split("").sort(l).join("") === S,
        V(),
        le.sortDetached = $(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }),
        ce.find = I,
        ce.expr[":"] = ce.expr.pseudos,
        ce.unique = ce.uniqueSort,
        I.compile = ne,
        I.select = re,
        I.setDocument = V,
        I.escape = ce.escapeSelector,
        I.getText = ce.text,
        I.isXML = ce.isXMLDoc,
        I.selectors = ce.expr,
        I.support = ce.support,
        I.uniqueSort = ce.uniqueSort
    }();
    var d = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && ce(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , h = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , b = ce.expr.match.needsContext
      , w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function T(e, n, r) {
        return v(n) ? ce.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? ce.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? ce.grep(e, function(e) {
            return -1 < se.call(n, e) !== r
        }) : ce.filter(n, e, r)
    }
    ce.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    ce.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(ce(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (ce.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                ce.find(e, i[t], n);
            return 1 < r ? ce.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || k,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ce ? t[0] : t,
                ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)),
                w.test(r[1]) && ce.isPlainObject(t))
                    for (r in t)
                        v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = C.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this)
    }
    ).prototype = ce.fn,
    k = ce(C);
    var E = /^(?:parents|prev(?:Until|All))/
      , j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function A(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    ce.fn.extend({
        has: function(e) {
            var t = ce(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ce.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && ce(e);
            if (!b.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ce.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return h((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return h(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e),
            ce.merge([], e.childNodes))
        }
    }, function(r, i) {
        ce.fn[r] = function(e, t) {
            var n = ce.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length && (j[r] || ce.uniqueSort(n),
            E.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;
    function N(e) {
        return e
    }
    function q(e) {
        throw e
    }
    function L(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    ce.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        ce.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }),
        n) : ce.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    ce.each(e, function(e, t) {
                        v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return ce.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = ce.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < ce.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    ce.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return ce.Deferred(function(r) {
                        ce.each(o, function(e, t) {
                            var n = v(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++,
                                    t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error),
                                    u <= i + 1 && (a !== q && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()),
                            ie.setTimeout(t))
                        }
                    }
                    return ce.Deferred(function(e) {
                        o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                        o[1][3].add(l(0, e, v(t) ? t : N)),
                        o[2][3].add(l(0, e, v(n) ? n : q))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ce.extend(e, a) : a
                }
            }
              , s = {};
            return ce.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = ae.call(arguments)
              , o = ce.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? ae.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || v(i[t] && i[t].then)))
                return o.then();
            while (t--)
                L(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function(e, t) {
        ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    ce.readyException = function(e) {
        ie.setTimeout(function() {
            throw e
        })
    }
    ;
    var O = ce.Deferred();
    function P() {
        C.removeEventListener("DOMContentLoaded", P),
        ie.removeEventListener("load", P),
        ce.ready()
    }
    ce.fn.ready = function(e) {
        return O.then(e)["catch"](function(e) {
            ce.readyException(e)
        }),
        this
    }
    ,
    ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
        }
    }),
    ce.ready.then = O.then,
    "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P),
    ie.addEventListener("load", P));
    var R = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n))
            for (s in i = !0,
            n)
                R(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        v(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(ce(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , M = /^-ms-/
      , I = /-([a-z])/g;
    function W(e, t) {
        return t.toUpperCase()
    }
    function F(e) {
        return e.replace(M, "ms-").replace(I, W)
    }
    var $ = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function B() {
        this.expando = ce.expando + B.uid++
    }
    B.uid = 1,
    B.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[F(t)] = n;
            else
                for (r in t)
                    i[F(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(F) : (t = F(t))in r ? [t] : t.match(D) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var _ = new B
      , X = new B
      , U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , z = /[A-Z]/g;
    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : U.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                X.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    ce.extend({
        hasData: function(e) {
            return X.hasData(e) || _.hasData(e)
        },
        data: function(e, t, n) {
            return X.access(e, t, n)
        },
        removeData: function(e, t) {
            X.remove(e, t)
        },
        _data: function(e, t, n) {
            return _.access(e, t, n)
        },
        _removeData: function(e, t) {
            _.remove(e, t)
        }
    }),
    ce.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = X.get(o),
                1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)),
                        V(o, r, i[r]));
                    _.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                X.set(this, n)
            }) : R(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = X.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                this.each(function() {
                    X.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                X.remove(this, e)
            })
        }
    }),
    ce.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = _.get(e, t),
                n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ce.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = ce._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                ce.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return _.get(e, n) || _.access(e, n, {
                empty: ce.Callbacks("once memory").add(function() {
                    _.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    ce.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ce.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = ce.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$","i")
      , Q = ["Top", "Right", "Bottom", "Left"]
      , J = C.documentElement
      , K = function(e) {
        return ce.contains(e.ownerDocument, e)
    }
      , Z = {
        composed: !0
    };
    J.getRootNode && (K = function(e) {
        return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    }
    );
    var ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
    };
    function te(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return ce.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (ce.cssNumber[t] ? "" : "px"), c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                ce.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            ce.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ne = {};
    function re(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = _.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = ce.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ne[s] = u)))) : "none" !== n && (l[c] = "none",
            _.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    ce.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? ce(this).show() : ce(this).hide()
            })
        }
    });
    var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
    xe = C.createDocumentFragment().appendChild(C.createElement("div")),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked,
    xe.innerHTML = "<textarea>x</textarea>",
    le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue,
    xe.innerHTML = "<option></option>",
    le.option = !!xe.lastChild;
    var ke = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function Se(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
    }
    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
    }
    ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead,
    ke.th = ke.td,
    le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
    var je = /<|&#?\w+;/;
    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o))
                    ce.merge(p, o.nodeType ? [o] : o);
                else if (je.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (Te.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ke[s] || ke._default,
                    a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    ce.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < ce.inArray(o, r))
                i && i.push(o);
            else if (l = K(o),
            a = Se(f.appendChild(o), "script"),
            l && Ee(a),
            n) {
                c = 0;
                while (o = a[c++])
                    Ce.test(o.type || "") && n.push(o)
            }
        return f
    }
    var De = /^([^.]*)(?:\.(.+)|)/;
    function Ne() {
        return !0
    }
    function qe() {
        return !1
    }
    function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Le(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = qe;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return ce().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = ce.guid++)),
        e.each(function() {
            ce.event.add(this, t, i, r, n)
        })
    }
    function He(e, r, t) {
        t ? (_.set(e, r, !1),
        ce.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n = _.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)
                        (ce.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (n = ae.call(arguments),
                    _.set(this, r, n),
                    this[r](),
                    t = _.get(this, r),
                    _.set(this, r, !1),
                    n !== t)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        t
                } else
                    n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                    e.stopPropagation(),
                    e.isImmediatePropagationStopped = Ne)
            }
        })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
    }
    ce.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
            if ($(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && ce.find.matchesSelector(J, i),
                n.guid || (n.guid = ce.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(D) || [""]).length;
                while (l--)
                    d = g = (s = De.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = ce.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = ce.event.special[d] || {},
                    c = ce.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ce.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    ce.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(D) || [""]).length;
                while (l--)
                    if (d = g = (s = De.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = ce.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            ce.event.remove(e, d + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = ce.event.fix(e), l = (_.get(this, "events") || Object.create(null))[u.type] || [], c = ce.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = ce.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[ce.expando] ? e : new ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    ce.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    ce.Event = function(e, t) {
        if (!(this instanceof ce.Event))
            return new ce.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && ce.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[ce.expando] = !0
    }
    ,
    ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: qe,
        isPropagationStopped: qe,
        isImmediatePropagationStopped: qe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp),
    ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(r, i) {
        function o(e) {
            if (C.documentMode) {
                var t = _.get(this, "handle")
                  , n = ce.event.fix(e);
                n.type = "focusin" === e.type ? "focus" : "blur",
                n.isSimulated = !0,
                t(e),
                n.target === n.currentTarget && t(n)
            } else
                ce.event.simulate(i, e.target, ce.event.fix(e))
        }
        ce.event.special[r] = {
            setup: function() {
                var e;
                if (He(this, r, !0),
                !C.documentMode)
                    return !1;
                (e = _.get(this, i)) || this.addEventListener(i, o),
                _.set(this, i, (e || 0) + 1)
            },
            trigger: function() {
                return He(this, r),
                !0
            },
            teardown: function() {
                var e;
                if (!C.documentMode)
                    return !1;
                (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o),
                _.remove(this, i))
            },
            _default: function(e) {
                return _.get(e.target, r)
            },
            delegateType: i
        },
        ce.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = C.documentMode ? this : e
                  , n = _.get(t, i);
                n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)),
                _.set(t, i, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = C.documentMode ? this : e
                  , n = _.get(t, i) - 1;
                n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0),
                _.remove(t, i))
            }
        }
    }),
    ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        ce.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || ce.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    ce.fn.extend({
        on: function(e, t, n, r) {
            return Le(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Le(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = qe),
            this.each(function() {
                ce.event.remove(this, e, n, t)
            })
        }
    });
    var Oe = /<script|<style|<link/i
      , Pe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Re = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Me(e, t) {
        return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
    }
    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events))
                for (i in _.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        ce.event.add(t, i, s[i][n]);
            X.hasData(e) && (o = X.access(e),
            a = ce.extend({}, o),
            X.set(t, a))
        }
    }
    function $e(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = v(d);
        if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                $e(t, r, i, o)
            });
        if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
                u = e,
                c !== p && (u = ce.clone(u, !0, !0),
                s && ce.merge(a, Se(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                ce.map(a, We),
                c = 0; c < s; c++)
                    u = a[c],
                    Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : m(u.textContent.replace(Re, ""), u, l))
        }
        return n
    }
    function Be(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || ce.cleanData(Se(r)),
            r.parentNode && (n && K(r) && Ee(Se(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    ce.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = K(e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                for (a = Se(c),
                r = 0,
                i = (o = Se(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || Se(e),
                    a = a || Se(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Fe(o[r], a[r]);
                else
                    Fe(e, c);
            return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[_.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0
                    }
                    n[X.expando] && (n[X.expando] = void 0)
                }
        }
    }),
    ce.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return R(this, function(e) {
                return void 0 === e ? ce.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return $e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ce.cleanData(Se(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return ce.clone(this, e, t)
            })
        },
        html: function(e) {
            return R(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return $e(this, arguments, function(e) {
                var t = this.parentNode;
                ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        ce.fn[e] = function(e) {
            for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                ce(r[o])[a](t),
                s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$","i")
      , Xe = /^--/
      , Ue = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = ie),
        t.getComputedStyle(e)
    }
      , ze = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Ve = new RegExp(Q.join("|"),"i");
    function Ge(e, t, n) {
        var r, i, o, a, s = Xe.test(t), u = e.style;
        return (n = n || Ue(e)) && (a = n.getPropertyValue(t) || n[t],
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width,
        i = u.minWidth,
        o = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = a,
        a = n.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Ye(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                J.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                J.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = C.createElement("div"), l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        le.clearCloneStyle = "content-box" === l.style.backgroundClip,
        ce.extend(le, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = C.createElement("table"),
                t = C.createElement("tr"),
                n = C.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                J.appendChild(e).appendChild(t).appendChild(n),
                r = ie.getComputedStyle(t),
                a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                J.removeChild(e)),
                a
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"]
      , Je = C.createElement("div").style
      , Ke = {};
    function Ze(e) {
        var t = ce.cssProps[e] || Ke[e];
        return t || (e in Je ? e : Ke[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Qe.length;
            while (n--)
                if ((e = Qe[n] + t)in Je)
                    return e
        }(e) || e)
    }
    var et = /^(none|table(?!-c[ea]).+)/
      , tt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , nt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function rt(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
            r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i),
            "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u + l
    }
    function ot(e, t, n) {
        var r = Ue(e)
          , i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r)
          , o = i
          , a = Ge(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function at(e, t, n, r, i) {
        return new at.prototype.init(e,t,n,r,i)
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ge(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = F(t), u = Xe.test(t), l = e.style;
                if (u || (t = Ze(s)),
                a = ce.cssHooks[t] || ce.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")),
                le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = F(t);
            return Xe.test(t) || (t = Ze(s)),
            (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Ge(e, t, r)),
            "normal" === i && t in nt && (i = nt[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    ce.each(["height", "width"], function(e, u) {
        ce.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : ze(e, tt, function() {
                        return ot(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Ue(e), o = !le.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i), s = n ? it(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)),
                s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = ce.css(e, u)),
                rt(0, t, s)
            }
        }
    }),
    ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        ce.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (ce.cssHooks[i + o].set = rt)
    }),
    ce.fn.extend({
        css: function(e, t) {
            return R(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ue(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = ce.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((ce.Tween = at).prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || ce.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : at.propHooks._default.set(this),
            this
        }
    }).init.prototype = at.prototype,
    (at.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ce.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    ce.fx = at.prototype.init,
    ce.fx.step = {};
    var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
    function dt() {
        ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval),
        ce.fx.tick())
    }
    function ht() {
        return ie.setTimeout(function() {
            st = void 0
        }),
        st = Date.now()
    }
    function gt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = Q[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function yt(o, e, t) {
        var n, a, r = 0, i = yt.prefilters.length, s = ce.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: ce.extend({}, e),
            opts: ce.extend(!0, {
                specialEasing: {},
                easing: ce.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: st || ht(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = F(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = ce.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = yt.prefilters[r].call(l, o, c, l.opts))
                return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return ce.map(c, vt, l),
        v(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        ce.fx.timer(ce.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, Y.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            v(e) ? (t = e,
            e = ["*"]) : e = e.match(D);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                yt.tweeners[n] = yt.tweeners[n] || [],
                yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ee(e), v = _.get(e, "fxshow");
            for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    ce.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ft.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || ce.style(e, r)
                }
            if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = _.get(e, "display")),
                "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0),
                l = e.style.display || l,
                c = ce.css(e, "display"),
                re([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = _.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && re([e], !0),
                    p.done(function() {
                        for (r in g || re([e]),
                        _.remove(e, "fxshow"),
                        d)
                            ce.style(e, r, d[r])
                    })),
                    u = vt(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }),
    ce.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            v(r.old) && r.old.call(this),
            r.queue && ce.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    ce.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ce.isEmptyObject(t)
              , o = ce.speed(e, n, r)
              , a = function() {
                var e = yt(this, ce.extend({}, t), o);
                (i || _.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = ce.timers
                  , r = _.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && pt.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || ce.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = _.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = ce.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    ce.each(["toggle", "show", "hide"], function(e, r) {
        var i = ce.fn[r];
        ce.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }),
    ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        ce.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    ce.timers = [],
    ce.fx.tick = function() {
        var e, t = 0, n = ce.timers;
        for (st = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ce.fx.stop(),
        st = void 0
    }
    ,
    ce.fx.timer = function(e) {
        ce.timers.push(e),
        ce.fx.start()
    }
    ,
    ce.fx.interval = 13,
    ce.fx.start = function() {
        ut || (ut = !0,
        dt())
    }
    ,
    ce.fx.stop = function() {
        ut = null
    }
    ,
    ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ce.fn.delay = function(r, e) {
        return r = ce.fx && ce.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = ie.setTimeout(e, r);
            t.stop = function() {
                ie.clearTimeout(n)
            }
        })
    }
    ,
    lt = C.createElement("input"),
    ct = C.createElement("select").appendChild(C.createElement("option")),
    lt.type = "checkbox",
    le.checkOn = "" !== lt.value,
    le.optSelected = ct.selected,
    (lt = C.createElement("input")).value = "t",
    lt.type = "radio",
    le.radioValue = "t" === lt.value;
    var mt, xt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function(e, t) {
            return R(this, ce.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ce.removeAttr(this, e)
            })
        }
    }),
    ce.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)),
                void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.radioValue && "radio" === t && fe(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(D);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    mt = {
        set: function(e, t, n) {
            return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || ce.find.attr;
        xt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = xt[o],
            xt[o] = r,
            r = null != a(e, t, n) ? o : null,
            xt[o] = i),
            r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i
      , wt = /^(?:a|area)$/i;
    function Tt(e) {
        return (e.match(D) || []).join(" ")
    }
    function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
    }
    ce.fn.extend({
        prop: function(e, t) {
            return R(this, ce.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ce.propFix[e] || e]
            })
        }
    }),
    ce.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t,
                i = ce.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    le.optSelected || (ce.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this
    }),
    ce.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).addClass(t.call(this, e, Ct(this)))
            }) : (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this),
                n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        i = e[o],
                        n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = Tt(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).removeClass(t.call(this, e, Ct(this)))
            }) : arguments.length ? (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this),
                n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " "))
                            n = n.replace(" " + i + " ", " ")
                    }
                    a = Tt(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t),
            this.each(function() {
                if (s)
                    for (o = ce(this),
                    i = 0; i < e.length; i++)
                        r = e[i],
                        o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                    void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r),
                    this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var St = /\r/g;
    ce.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = v(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
        }
    }),
    ce.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : Tt(ce.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                            if (t = ce(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = ce.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < ce.inArray(ce(e).val(), t)
            }
        },
        le.checkOn || (ce.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Et = ie.location
      , jt = {
        guid: Date.now()
    }
      , At = /\?/;
    ce.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new ie.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var Dt = /^(?:focusinfocus|focusoutblur)$/
      , Nt = function(e) {
        e.stopPropagation()
    };
    ce.extend(ce.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || C], d = ue.call(e, "type") ? e.type : e, h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || C,
            3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[ce.expando] ? e : new ce.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : ce.makeArray(t, [e]),
            c = ce.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !y(n)) {
                    for (s = c.delegateType || d,
                    Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null),
                ce.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, Nt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Nt),
                ce.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = ce.extend(new ce.Event, n, {
                type: e,
                isSimulated: !0
            });
            ce.event.trigger(r, null, t)
        }
    }),
    ce.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return ce.event.trigger(e, t, n, !0)
        }
    });
    var qt = /\[\]$/
      , Lt = /\r?\n/g
      , Ht = /^(?:submit|button|image|reset|file)$/i
      , Ot = /^(?:input|select|textarea|keygen)/i;
    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            ce.each(e, function(e, t) {
                r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== x(e))
            i(n, e);
        else
            for (t in e)
                Pt(n + "[" + t + "]", e[t], r, i)
    }
    ce.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = v(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e))
            ce.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Pt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = ce(this).val();
                return null == n ? null : Array.isArray(n) ? ce.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Rt = /%20/g
      , Mt = /#.*$/
      , It = /([?&])_=[^&]*/
      , Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ft = /^(?:GET|HEAD)$/
      , $t = /^\/\//
      , Bt = {}
      , _t = {}
      , Xt = "*/".concat("*")
      , Ut = C.createElement("a");
    function zt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(D) || [];
            if (v(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Vt(t, i, o, a) {
        var s = {}
          , u = t === _t;
        function l(e) {
            var r;
            return s[e] = !0,
            ce.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Gt(e, t) {
        var n, r, i = ce.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ce.extend(!0, e, r),
        e
    }
    Ut.href = Et.href,
    ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
        },
        ajaxPrefilter: zt(Bt),
        ajaxTransport: zt(_t),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event, x = ce.Deferred(), b = ce.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Wt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""],
            null == v.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Ut.protocol + "//" + Ut.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)),
            Vt(Bt, v, t, T),
            h)
                return T;
            for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ft.test(v.type),
            f = v.url.replace(Mt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Rt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(It, "$1"),
            o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o),
            v.url = f + o),
            v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
            ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Vt(_t, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = ie.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && ie.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --ce.active || ce.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return ce.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ce.get(e, void 0, t, "script")
        }
    }),
    ce.each(["get", "post"], function(e, i) {
        ce[i] = function(e, t, n, r) {
            return v(t) && (r = r || n,
            n = t,
            t = void 0),
            ce.ajax(ce.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, ce.isPlainObject(e) && e))
        }
    }),
    ce.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    ce._evalUrl = function(e, t, n) {
        return ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                ce.globalEval(e, t, n)
            }
        })
    }
    ,
    ce.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])),
            t = ce(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                ce(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = ce(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                ce(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ce(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    ce.expr.pseudos.hidden = function(e) {
        return !ce.expr.pseudos.visible(e)
    }
    ,
    ce.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    ce.ajaxSettings.xhr = function() {
        try {
            return new ie.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Yt = {
        0: 200,
        1223: 204
    }
      , Qt = ce.ajaxSettings.xhr();
    le.cors = !!Qt && "withCredentials"in Qt,
    le.ajax = Qt = !!Qt,
    ce.ajaxTransport(function(i) {
        var o, a;
        if (le.cors || Qt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && ie.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    ce.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ce.globalEval(e),
                e
            }
        }
    }),
    ce.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    ce.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = ce("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    C.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || ce.expando + "_" + jt.guid++;
            return this[e] = !0,
            e
        }
    }),
    ce.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || ce.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = ie[r],
            ie[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? ce(ie).removeProp(r) : ie[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Kt.push(r)),
                o && v(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Jt.childNodes.length),
    ce.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href,
        t.head.appendChild(r)) : t = C),
        o = !n && [],
        (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o),
        o && o.length && ce(o).remove(),
        ce.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    ce.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = Tt(e.slice(s)),
        e = e.slice(0, s)),
        v(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    ce.expr.pseudos.animated = function(t) {
        return ce.grep(ce.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    ce.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = ce.css(e, "position"), c = ce(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = ce.css(e, "top"),
            u = ce.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            v(t) && (t = t.call(e, n, ce.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    ce.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    ce.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === ce.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0),
                    i.left += ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ce.css(r, "marginTop", !0),
                    left: t.left - i.left - ce.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === ce.css(e, "position"))
                    e = e.offsetParent;
                return e || J
            })
        }
    }),
    ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function(e) {
            return R(this, function(e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    ce.each(["top", "left"], function(e, n) {
        ce.cssHooks[n] = Ye(le.pixelPosition, function(e, t) {
            if (t)
                return t = Ge(e, n),
                _e.test(t) ? ce(e).position()[n] + "px" : t
        })
    }),
    ce.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        ce.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            ce.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return R(this, function(e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ce.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ce.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        ce.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ce.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        v(e))
            return r = ae.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(ae.call(arguments)))
            }
            ).guid = e.guid = e.guid || ce.guid++,
            i
    }
    ,
    ce.holdReady = function(e) {
        e ? ce.readyWait++ : ce.ready(!0)
    }
    ,
    ce.isArray = Array.isArray,
    ce.parseJSON = JSON.parse,
    ce.nodeName = fe,
    ce.isFunction = v,
    ce.isWindow = y,
    ce.camelCase = F,
    ce.type = x,
    ce.now = Date.now,
    ce.isNumeric = function(e) {
        var t = ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    ce.trim = function(e) {
        return null == e ? "" : (e + "").replace(en, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce
    });
    var tn = ie.jQuery
      , nn = ie.$;
    return ce.noConflict = function(e) {
        return ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
    }
    ,
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
});
(function(){

	'use strict'


	var siteMenuClone = function() {
		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');
		



		setTimeout(function(){

			var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll(' .has-children');

			var counter = 0;
			hasChildrens.forEach( hasChild => {
				
				var refEl = hasChild.querySelector('a');

				var newElSpan = document.createElement('span');
				newElSpan.setAttribute('class', 'arrow-collapse collapsed');

				// prepend equivalent to jquery
				hasChild.insertBefore(newElSpan, refEl);

				var arrowCollapse = hasChild.querySelector('.arrow-collapse');
				arrowCollapse.setAttribute('data-bs-toggle', 'collapse');
				arrowCollapse.setAttribute('data-bs-target', '#collapseItem' + counter);

				var dropdown = hasChild.querySelector('.dropdown');
				dropdown.setAttribute('class', 'collapse');
				dropdown.setAttribute('id', 'collapseItem' + counter);

				counter++;
			});

		}, 1000);


		// Click js-menu-toggle

		var menuToggle = document.querySelectorAll(".js-menu-toggle");
		var mTog;
		menuToggle.forEach(mtoggle => {
			mTog = mtoggle;
			mtoggle.addEventListener("click", (e) => {
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggle.classList.remove('active');
					mTog.classList.remove('active');
				} else {
					document.body.classList.add('offcanvas-menu');
					mtoggle.classList.add('active');
					mTog.classList.add('active');
				}
			});
		})



		var specifiedElement = document.querySelector(".site-mobile-menu");
		var mt, mtoggleTemp;
		document.addEventListener('click', function(event) {
			var isClickInside = specifiedElement.contains(event.target);
			menuToggle.forEach(mtoggle => {
				mtoggleTemp = mtoggle
				mt = mtoggle.contains(event.target);
			})

			if (!isClickInside && !mt) {
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggleTemp.classList.remove('active');
				}
			}

		});

	}; 
	siteMenuClone();


})()
var tns = (function (){
  var win = window;

  var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };

  var win$1 = window;

  var caf = win$1.cancelAnimationFrame
  || win$1.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };

  function extend() {
    var obj, name, copy,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length;

    for (; i < length; i++) {
      if ((obj = arguments[i]) !== null) {
        for (name in obj) {
          copy = obj[name];

          if (target === copy) {
            continue;
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  }

  function checkStorageValue (value) {
    return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
  }

  function setLocalStorage(storage, key, value, access) {
    if (access) {
      try { storage.setItem(key, value); } catch (e) {}
    }
    return value;
  }

  function getSlideId() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;
    
    return 'tns' + window.tnsId;
  }

  function getBody () {
    var doc = document,
    body = doc.body;

    if (!body) {
      body = doc.createElement('body');
      body.fake = true;
    }

    return body;
  }

  var docElement = document.documentElement;

  function setFakeBody (body) {
    var docOverflow = '';
    if (body.fake) {
      docOverflow = docElement.style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = docElement.style.overflow = 'hidden';
    docElement.appendChild(body);
  }

  return docOverflow;
}

function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    docElement.style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    docElement.offsetHeight;
  }
}

// get css-calc 

function calc() {
  var doc = document, 
  body = getBody(),
  docOverflow = setFakeBody(body),
  div = doc.createElement('div'), 
  result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
    vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
    val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? resetFakeBody(body, docOverflow) : div.remove();

  return result;
}

// get subpixel support value

function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
  body = getBody(),
  docOverflow = setFakeBody(body),
  wrapper = doc.createElement('div'),
  outer = doc.createElement('div'),
  str = '',
  count = 70,
  perPage = 3,
  supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();

  return supported;
}

function mediaquerySupport () {
  if (window.matchMedia || window.msMatchMedia) {
    return true;
  }
  
  var doc = document,
  body = getBody(),
  docOverflow = setFakeBody(body),
  div = doc.createElement('div'),
  style = doc.createElement('style'),
  rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
  position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? resetFakeBody(body, docOverflow) : div.remove();

  return position === "absolute";
}

// create and append style sheet
function createStyleSheet (media, nonce) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // Add nonce attribute for Content Security Policy
  if (nonce) { style.setAttribute("nonce", nonce); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
}

// cross browsers addRule method
function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
    sheet.insertRule(selector + '{' + rules + '}', index) :
    sheet.addRule(selector, rules, index);
  // });
}

// cross browsers addRule method
function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
    sheet.deleteRule(index) :
    sheet.removeRule(index);
  // });
}

function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

function getTouchDirection(angle, range) {
  var direction = false,
  gap = Math.abs(90 - Math.abs(angle));
  
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

var classListSupport = 'classList' in document.createElement('_');

var hasClass = classListSupport ?
function (el, str) { return el.classList.contains(str); } :
function (el, str) { return el.className.indexOf(str) >= 0; };

var addClass = classListSupport ?
function (el, str) {
  if (!hasClass(el,  str)) { el.classList.add(str); }
} :
function (el, str) {
  if (!hasClass(el,  str)) { el.className += ' ' + str; }
};

var removeClass = classListSupport ?
function (el, str) {
  if (hasClass(el,  str)) { el.classList.remove(str); }
} :
function (el, str) {
  if (hasClass(el, str)) { el.className = el.className.replace(str, ''); }
};

function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

function getAttr(el, attr) {
  return el.getAttribute(attr);
}

function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

function setAttrs(els, attrs) {
  els = (isNodeList(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

function removeAttrs(els, attrs) {
  els = (isNodeList(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}

function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}

function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
    Props = props.charAt(0).toUpperCase() + props.substr(1),
    prefixes = ['Webkit', 'Moz', 'ms', 'O'];
    
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
  len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}

function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
  body = getBody(),
  docOverflow = setFakeBody(body),
  el = doc.createElement('p'),
  has3d,
  cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? resetFakeBody(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}

// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
}

function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
  unit = (to.indexOf('%') >= 0) ? '%' : 'px',
  to = to.replace(unit, ''),
  from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
  positionTick = (to - from) / duration * tick,
  running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

var tns = function(options) {
  options = extend({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true,
    nonce: false
  }, options || {});

  var doc = document,
  win = window,
  KEYS = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  },
  tnsStorage = {},
  localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? checkStorageValue(tnsStorage['tC']) : setLocalStorage(tnsStorage, 'tC', calc(), localStorageAccess),
  PERCENTAGELAYOUT = tnsStorage['tPL'] ? checkStorageValue(tnsStorage['tPL']) : setLocalStorage(tnsStorage, 'tPL', percentageLayout(), localStorageAccess),
  CSSMQ = tnsStorage['tMQ'] ? checkStorageValue(tnsStorage['tMQ']) : setLocalStorage(tnsStorage, 'tMQ', mediaquerySupport(), localStorageAccess),
  TRANSFORM = tnsStorage['tTf'] ? checkStorageValue(tnsStorage['tTf']) : setLocalStorage(tnsStorage, 'tTf', whichProperty('transform'), localStorageAccess),
  HAS3DTRANSFORMS = tnsStorage['t3D'] ? checkStorageValue(tnsStorage['t3D']) : setLocalStorage(tnsStorage, 't3D', has3DTransforms(TRANSFORM), localStorageAccess),
  TRANSITIONDURATION = tnsStorage['tTDu'] ? checkStorageValue(tnsStorage['tTDu']) : setLocalStorage(tnsStorage, 'tTDu', whichProperty('transitionDuration'), localStorageAccess),
  TRANSITIONDELAY = tnsStorage['tTDe'] ? checkStorageValue(tnsStorage['tTDe']) : setLocalStorage(tnsStorage, 'tTDe', whichProperty('transitionDelay'), localStorageAccess),
  ANIMATIONDURATION = tnsStorage['tADu'] ? checkStorageValue(tnsStorage['tADu']) : setLocalStorage(tnsStorage, 'tADu', whichProperty('animationDuration'), localStorageAccess),
  ANIMATIONDELAY = tnsStorage['tADe'] ? checkStorageValue(tnsStorage['tADe']) : setLocalStorage(tnsStorage, 'tADe', whichProperty('animationDelay'), localStorageAccess),
  TRANSITIONEND = tnsStorage['tTE'] ? checkStorageValue(tnsStorage['tTE']) : setLocalStorage(tnsStorage, 'tTE', getEndProperty(TRANSITIONDURATION, 'Transition'), localStorageAccess),
  ANIMATIONEND = tnsStorage['tAE'] ? checkStorageValue(tnsStorage['tAE']) : setLocalStorage(tnsStorage, 'tAE', getEndProperty(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
  tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
  optionsElements = {};

  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
      el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
  }

  // update options
  var responsive = options.responsive,
  nested = options.nested,
  carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = extend(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to:
      //   300: {
      //     items: 2
      //   }
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
    animateOut = options.animateOut,
    animateDelay = options.animateDelay,
    animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
  outerWrapper = doc.createElement('div'),
  innerWrapper = doc.createElement('div'),
  middleWrapper,
  container = options.container,
  containerParent = container.parentNode,
  containerHTML = container.outerHTML,
  slideItems = container.children,
  slideCount = slideItems.length,
  breakpointZone,
  windowWidth = getWindowWidth(),
  isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
  fixedWidth = getOption('fixedWidth'),
  edgePadding = getOption('edgePadding'),
  gutter = getOption('gutter'),
  viewport = getViewportWidth(),
  center = getOption('center'),
  items = !autoWidth ? Math.floor(getOption('items')) : 1,
  slideBy = getOption('slideBy'),
  viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
  arrowKeys = getOption('arrowKeys'),
  speed = getOption('speed'),
  rewind = options.rewind,
  loop = rewind ? false : options.loop,
  autoHeight = getOption('autoHeight'),
  controls = getOption('controls'),
  controlsText = getOption('controlsText'),
  nav = getOption('nav'),
  touch = getOption('touch'),
  mouseDrag = getOption('mouseDrag'),
  autoplay = getOption('autoplay'),
  autoplayTimeout = getOption('autoplayTimeout'),
  autoplayText = getOption('autoplayText'),
  autoplayHoverPause = getOption('autoplayHoverPause'),
  autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
  sheet = createStyleSheet(null, getOption('nonce')),
  lazyload = options.lazyload,
  lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = 0; i < slideCountNew; i++) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new Events(),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || getSlideId(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      slideClonedClass = 'tns-slide-cloned',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
    controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
    prevButton = options.prevButton,
    nextButton = options.nextButton,
    prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
    nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
    prevIsButton,
    nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
    navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
    navItems,
    pages = autoWidth ? slideCount : getPages(),
    pagesCached = 0,
    navClicked = -1,
    navCurrentIndex = getCurrentNavIndex(),
    navCurrentIndexCached = navCurrentIndex,
    navActiveClass = 'tns-nav-active',
    navStr = 'Carousel Page ',
    navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
    autoplayButton = options.autoplayButton,
    autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
    autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
    autoplayTimer,
    animating,
    autoplayHoverPaused,
    autoplayUserPaused,
    autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
    lastPosition = {},
    translateInit,
    disX,
    disY,
    panStart = false,
    rafIndex,
    getDist = horizontal ?
    function(a, b) { return a.x - b.x; } :
    function(a, b) { return a.y - b.y; };
  }

  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
    result;

    result = navAsThumbnails ? absIndex :
    fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) :
    Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
  } else {
    var str = fixedWidth ? 'fixedWidth' : 'items',
    arr = [];

    if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

    if (responsive) {
      for (var bp in responsive) {
        var tem = responsive[bp][str];
        if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
      }
    }

    if (!arr.length) { arr.push(0); }

    return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
  }
}

function getCloneCountForLoop () {
  var itemsMax = getItemsMax(),
  result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
  result = Math.max(itemsMax, result);

  return hasOption('edgePadding') ? result + 1 : result;
}

function getWindowWidth () {
  return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
}

function getInsertPosition (pos) {
  return pos === 'top' ? 'afterbegin' : 'beforeend';
}

function getClientWidth (el) {
  if (el == null) { return; }
  var div = doc.createElement('div'), rect, width;
  el.appendChild(div);
  rect = div.getBoundingClientRect();
  width = rect.right - rect.left;
  div.remove();
  return width || getClientWidth(el.parentNode);
}

function getViewportWidth () {
  var gap = edgePadding ? edgePadding * 2 - gutter : 0;
  return getClientWidth(containerParent) - gap;
}

function hasOption (item) {
  if (options[item]) {
    return true;
  } else {
    if (responsive) {
      for (var bp in responsive) {
        if (responsive[bp][item]) { return true; }
      }
    }
    return false;
  }
}

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ?
    CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' :
    i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
      'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
      'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
      dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';';
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
      CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
      slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ?
      CALC + '(100% / ' + dividend + ')' :
      100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
      dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
    classInner = 'tns-inner',
    hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes
    // before clone slides
    forEach(slideItems, function(item, i) {
      addClass(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { addClass(item, animateNormal); }
      setAttrs(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
      fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
        cloneFirst = slideItems[num].cloneNode(true);
        addClass(cloneFirst, slideClonedClass);
        removeAttrs(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          addClass(cloneLast, slideClonedClass);
          removeAttrs(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add img load event listener
      forEach(imgs, function(img) {
        var src = img.src;

        if (!lazyload) {
          // not data img
          if (src && src.indexOf('data:image') < 0) {
            img.src = '';
            addEvents(img, imgEvents);
            addClass(img, 'loading');

            img.src = src;
          // data img
        } else {
          imgLoaded(img);
        }
      }
    });

      // set imgsComplete
      raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), function() { imgsComplete = true; }); });

      // reset imgs for auto height: check visible imgs only
      if (hasOption('autoHeight')) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth && slideCount > 1) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        var left = slideItems[num].getBoundingClientRect().left;
        var right = slideItems[num - 1].getBoundingClientRect().right;

        (Math.abs(left - right) <= 1) ?
        initSliderTransformCore() :
        setTimeout(function(){ stylesApplicationCheck(); }, 16);
      })();

    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', getCssRulesLength(sheet));
        addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
      } else if (carousel) {
        forEach(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        addCSSRule(sheet, '#' + slideId + '-mw', str, getCssRulesLength(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
  } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
        str = '',
        middleWrapperStr = '',
        innerWrapperStr = '',
        containerStr = '',
        slideStr = '',
        itemsBP = !autoWidth ? getOption('items', bp) : null,
        fixedWidthBP = getOption('fixedWidth', bp),
        speedBP = getOption('speed', bp),
        edgePaddingBP = getOption('edgePadding', bp),
        autoHeightBP = getOption('autoHeight', bp),
        gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        setAttrs(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        addEvents(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { addEvents(container, hoverEvents); }
        if (autoplayResetOnVisibility) { addEvents(container, visibilityEvent); }
      }
    }

    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        setAttrs(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        forEach(navItems, function(item, i) {
          setAttrs(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav
    } else {
      var navHtml = '',
      hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
      for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button type="button" data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
        str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        addCSSRule(sheet, '[aria-controls^=' + slideId + '-item]', str, getCssRulesLength(sheet));
      }

      setAttrs(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      removeAttrs(navItems[navCurrentIndex], 'tabindex');
      addClass(navItems[navCurrentIndex], navActiveClass);

      // add events
      addEvents(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        setAttrs(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        setAttrs([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        setAttrs(prevButton, {'data-controls' : 'prev'});
        setAttrs(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        addEvents(controlsContainer, controlsEvents);
      } else {
        addEvents(prevButton, controlsEvents);
        addEvents(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      addEvents(container, eve);
    }

    if (touch) { addEvents(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { addEvents(container, dragEvents); }
    if (arrowKeys) { addEvents(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      addEvents(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    removeEvents(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { removeEvents(doc, docmentKeydownEvent); }
    if (controlsContainer) { removeEvents(controlsContainer, controlsEvents); }
    if (navContainer) { removeEvents(navContainer, navEvents); }

    // autoplay
    removeEvents(container, hoverEvents);
    removeEvents(container, visibilityEvent);
    if (autoplayButton) { removeEvents(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      removeEvents(container, eve);
    }
    if (touch) { removeEvents(container, touchEvents); }
    if (mouseDrag) { removeEvents(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object' && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
        parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    raf(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
    breakpointZoneTem = breakpointZone,
    needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
    itemsChanged,
    itemsTem = items,
    disableTem = disable,
    freezeTem = freeze,
    arrowKeysTem = arrowKeys,
    controlsTem = controls,
    navTem = nav,
    touchTem = touch,
    mouseDragTem = mouseDrag,
    autoplayTem = autoplay,
    autoplayHoverPauseTem = autoplayHoverPause,
    autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
    indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
      autoHeightTem = autoHeight,
      controlsTextTem = controlsText,
      centerTem = center,
      autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
        edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
                              }

                              if (bpChanged || fixedWidth) {
                                items = getOption('items');
                                slideBy = getOption('slideBy');
                                itemsChanged = items !== itemsTem;

                                if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

                            if (freeze !== freezeTem) {
                              if (freeze) {
                                doContainerTransform(getContainerTransformValue(getStartIndex(0)));
                                freezeSlider();
                              } else {
                                unfreezeSlider();
                                needContainerTransform = true;
                              }
                            }
                          }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
      addEvents(doc, docmentKeydownEvent) :
      removeEvents(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          showElement(controlsContainer);
        } else {
          if (prevButton) { showElement(prevButton); }
          if (nextButton) { showElement(nextButton); }
        }
      } else {
        if (controlsContainer) {
          hideElement(controlsContainer);
        } else {
          if (prevButton) { hideElement(prevButton); }
          if (nextButton) { hideElement(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      if (nav) {
        showElement(navContainer);
        updateNavVisibility();
      } else {
        hideElement(navContainer);
      }
    }
    if (touch !== touchTem) {
      touch ?
      addEvents(container, touchEvents, options.preventScrollOnTouch) :
      removeEvents(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
      addEvents(container, dragEvents) :
      removeEvents(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { showElement(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { hideElement(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
      addEvents(container, hoverEvents) :
      removeEvents(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
      addEvents(doc, visibilityEvent) :
      removeEvents(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
        html = autoplayButton.innerHTML,
        len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-mediaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) +
          getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
    vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ?
    carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
          rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
    })();

    function disableUI () {
      if (!autoplay && autoplayButton) { hideElement(autoplayButton); }
      if (!nav && navContainer) { hideElement(navContainer); }
      if (!controls) {
        if (controlsContainer) {
          hideElement(controlsContainer);
        } else {
          if (prevButton) { hideElement(prevButton); }
          if (nextButton) { hideElement(nextButton); }
        }
      }
    }

    function enableUI () {
      if (autoplay && autoplayButton) { showElement(autoplayButton); }
      if (nav && navContainer) { showElement(navContainer); }
      if (controls) {
        if (controlsContainer) {
          showElement(controlsContainer);
        } else {
          if (prevButton) { showElement(prevButton); }
          if (nextButton) { showElement(nextButton); }
        }
      }
    }

    function freezeSlider () {
      if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { addClass(slideItems[i], str); }
        addClass(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { removeClass(slideItems[i], str); }
        removeClass(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    removeAttrs(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { hideElement(slideItems[j]); }
        hideElement(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { removeAttrs(innerWrapper, ['style']); }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        removeAttrs(item, ['style']);
        removeClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { showElement(slideItems[j]); }
        showElement(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
        classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        addClass(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
    start = arr[0] + 1,
    end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
  } else {

    if (fixedWidth) {
      var cell = fixedWidth + gutter;
      if (center || edgePadding) {
        start = Math.floor(rangestart/cell);
        end = Math.ceil(rangeend/cell - 1);
      } else {
        end = start + Math.ceil(viewport/cell) - 1;
      }

    } else {
      if (center || edgePadding) {
        var a = items - 1;
        if (center) {
          start -= a / 2;
          end = index + a / 2;
        } else {
          end = index + a;
        }

        if (edgePadding) {
          var b = edgePadding * items / viewport;
          start -= b;
          end += b;
        }

        start = Math.floor(start);
        end = Math.ceil(end);
      } else {
        end = start + items - 1;
      }
    }

    start = Math.max(start, 0);
    end = Math.min(end, slideCountNew - 1);
  }

  return [start, end];
}

function doLazyLoad () {
  if (lazyload && !disable) {
    var arg = getVisibleSlideRange();
    arg.push(lazyloadSelector);

    getImageArray.apply(null, arg).forEach(function (img) {
      if (!hasClass(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          addEvents(img, eve);

          addEvents(img, imgEvents);

          // update src
          img.src = getAttr(img, 'data-src');

          // update srcset
          var srcset = getAttr(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          addClass(img, 'loading');
        }
      });
  }
}

function onImgLoaded (e) {
  imgLoaded(getTarget(e));
}

function onImgFailed (e) {
  imgFailed(getTarget(e));
}

function imgLoaded (img) {
  addClass(img, 'loaded');
  imgCompleted(img);
}

function imgFailed (img) {
  addClass(img, 'failed');
  imgCompleted(img);
}

function imgCompleted (img) {
  addClass(img, imgCompleteClass);
  removeClass(img, 'loading');
  removeEvents(img, imgEvents);
}

function getImageArray (start, end, imgSelector) {
  var imgs = [];
  if (!imgSelector) { imgSelector = 'img'; }

  while (start <= end) {
    forEach(slideItems[start].querySelectorAll(imgSelector), function (img) { imgs.push(img); });
    start++;
  }

  return imgs;
}

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    raf(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check image classes
    imgs.forEach(function (img, index) {
      if (!lazyload && img.complete) { imgCompleted(img); } // Check image.complete
      if (hasClass(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    raf(function(){ imgsLoadedCheck(imgs, cb); });
  }

  function additionalUpdates () {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
    wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
    attr2 = horizontal ? 'right' : 'bottom',
    base = slideItems[0].getBoundingClientRect()[attr];

    forEach(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
    start = range[0],
    end = range[1];

    forEach(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (hasAttr(item, 'aria-hidden')) {
          removeAttrs(item, ['aria-hidden', 'tabindex']);
          addClass(item, slideActiveClass);
        }
      // hide slides
    } else {
      if (!hasAttr(item, 'aria-hidden')) {
        setAttrs(item, {
          'aria-hidden': 'true',
          'tabindex': '-1'
        });
        removeClass(item, slideActiveClass);
      }
    }
  });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        addClass(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        addClass(item, animateNormal);
        removeClass(item, animateIn);
      }

      // remove outlet animation
      removeClass(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      forEach(slideItems, function(el) {
        removeClass(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
        navCurrent = navItems[navCurrentIndex];

        setAttrs(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        removeClass(navPrev, navActiveClass);

        setAttrs(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        removeAttrs(navCurrent, 'tabindex');
        addClass(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
    nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
    disablePrev = (index <= indexMin) ? true : false,
    disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
    fixedWidth ? (viewport - fixedWidth) / 2 :
    (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
    result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
      getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
      var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      removeClass(item, classOut);
      addClass(item, classIn);

      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
    function () {
      resetDuration(container, '');
      if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually
          // when duration is 0 / container is hidden
          if (!speed || !isVisible(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        removeEvents(slideItems[indexCached], eve);
        addEvents(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) { onTransitionEnd(); }
      };
    })();

    function render (e, sliderMoved) {
      if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
   function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          removeClass(item, animateOut);
          addClass(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */
       if (!event ||
        !carousel && event.target.parentNode === container ||
        event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) {
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
  } else if (targetIndex === 'next') {
    onControlsClick(e, 1);

    // go to exact slide
  } else {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    var absIndex = getAbsIndex(),
    indexGap = 0;

    if (targetIndex === 'first') {
      indexGap = - absIndex;
    } else if (targetIndex === 'last') {
      indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
    } else {
      if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

      if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !hasAttr(target, 'data-nav')) { target = target.parentNode; }
    if (hasAttr(target, 'data-nav')) {
      var navIndex = navClicked = Number(getAttr(target, 'data-nav')),
      targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
      targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    setAttrs(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!hasAttr(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
    navIndex = Number(getAttr(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }

    panStart = true;
    if (rafIndex) {
      caf(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = raf(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    caf(rafIndex);
    if (panStart) { rafIndex = raf(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
      dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        caf(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          addEvents(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            removeEvents(target, {'click': preventClick});
          }});
        }

        if (carousel) {
          rafIndex = raf(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; }
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
   function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
      max = pages,
      fn = showElement;

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = hideElement;
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.3',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns(extend(options, optionsElements));
    }
  };
};

return tns;
})();
(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});




	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	



	


	var countdown = function() {
		var el = document.querySelectorAll('.js-countdown');

		console.log(el.length);



		if ( el.length > 0 ) {

			const finaleDate = new Date("March 22, 2022 00:00:00").getTime();

			const timer = () =>{
				const now = new Date().getTime();
				let diff = finaleDate - now;

				if(diff < 0){

					document.querySelector('.custom-alert').style.display = 'block';
					document.querySelector('.counter-wrap').style.display = 'none';
				}

				let days = Math.floor(diff / (1000*60*60*24));
				let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
				let minutes = Math.floor(diff % (1000*60*60)/ (1000*60));
				let seconds = Math.floor(diff % (1000*60) / 1000);

				days <= 99 ? days = `0${days}` : days;
				days <= 9 ? days = `00${days}` : days;
				hours <= 9 ? hours = `0${hours}` : hours;
				minutes <= 9 ? minutes = `0${minutes}` : minutes;
				seconds <= 9 ? seconds = `0${seconds}` : seconds;   

				document.querySelector('#days').textContent = days;
				document.querySelector('#hours').textContent = hours;
				document.querySelector('#minutes').textContent = minutes;
				document.querySelector('#seconds').textContent = seconds;

			}
			timer();
			setInterval(timer,1000);
		}
	}

	countdown();

	



	var tinyslier = function() {
		var el = document.querySelectorAll('#testimonial');
		if ( el.length > 0 ) {
			var slider = tns({
				container: "#testimonial",
				items: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 400,
				nav: true,
				controls: false,
				controlsPosition: "bottom",
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
			});
		}
	}
	tinyslier();



	





})()
/*!
  * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function e(e, n, i) {
        return n && t(e.prototype, n),
        i && t(e, i),
        e
    }
    function n() {
        return (n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ).apply(this, arguments)
    }
    function i(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t.__proto__ = e
    }
    var o, r, s = function(t) {
        do {
            t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, a = function(t) {
        var e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            var n = t.getAttribute("href");
            e = n && "#" !== n ? n.trim() : null
        }
        return e
    }, l = function(t) {
        var e = a(t);
        return e && document.querySelector(e) ? e : null
    }, c = function(t) {
        var e = a(t);
        return e ? document.querySelector(e) : null
    }, u = function(t) {
        if (!t)
            return 0;
        var e = window.getComputedStyle(t)
          , n = e.transitionDuration
          , i = e.transitionDelay
          , o = Number.parseFloat(n)
          , r = Number.parseFloat(i);
        return o || r ? (n = n.split(",")[0],
        i = i.split(",")[0],
        1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
    }, f = function(t) {
        t.dispatchEvent(new Event("transitionend"))
    }, d = function(t) {
        return (t[0] || t).nodeType
    }, h = function(t, e) {
        var n = !1
          , i = e + 5;
        t.addEventListener("transitionend", (function e() {
            n = !0,
            t.removeEventListener("transitionend", e)
        }
        )),
        setTimeout((function() {
            n || f(t)
        }
        ), i)
    }, p = function(t, e, n) {
        Object.keys(n).forEach((function(i) {
            var o, r = n[i], s = e[i], a = s && d(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(r).test(a))
                throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
        }
        ))
    }, g = function(t) {
        if (!t)
            return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
            var e = getComputedStyle(t)
              , n = getComputedStyle(t.parentNode);
            return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
        }
        return !1
    }, m = function() {
        return function() {}
    }, v = function(t) {
        return t.offsetHeight
    }, _ = function() {
        var t = window.jQuery;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }, b = function(t) {
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
    }, y = "rtl" === document.documentElement.dir, w = (o = {},
    r = 1,
    {
        set: function(t, e, n) {
            void 0 === t.bsKey && (t.bsKey = {
                key: e,
                id: r
            },
            r++),
            o[t.bsKey.id] = n
        },
        get: function(t, e) {
            if (!t || void 0 === t.bsKey)
                return null;
            var n = t.bsKey;
            return n.key === e ? o[n.id] : null
        },
        delete: function(t, e) {
            if (void 0 !== t.bsKey) {
                var n = t.bsKey;
                n.key === e && (delete o[n.id],
                delete t.bsKey)
            }
        }
    }), E = function(t, e, n) {
        w.set(t, e, n)
    }, T = function(t, e) {
        return w.get(t, e)
    }, k = function(t, e) {
        w.delete(t, e)
    }, O = /[^.]*(?=\..*)\.|.*/, L = /\..*/, A = /::\d+$/, C = {}, D = 1, x = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, S = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function j(t, e) {
        return e && e + "::" + D++ || t.uidEvent || D++
    }
    function N(t) {
        var e = j(t);
        return t.uidEvent = e,
        C[e] = C[e] || {},
        C[e]
    }
    function I(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
            var s = t[i[o]];
            if (s.originalHandler === e && s.delegationSelector === n)
                return s
        }
        return null
    }
    function P(t, e, n) {
        var i = "string" == typeof e
          , o = i ? n : e
          , r = t.replace(L, "")
          , s = x[r];
        return s && (r = s),
        S.has(r) || (r = t),
        [i, o, r]
    }
    function M(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || (n = i,
            i = null);
            var r = P(e, n, i)
              , s = r[0]
              , a = r[1]
              , l = r[2]
              , c = N(t)
              , u = c[l] || (c[l] = {})
              , f = I(u, a, s ? n : null);
            if (f)
                f.oneOff = f.oneOff && o;
            else {
                var d = j(a, e.replace(O, ""))
                  , h = s ? function(t, e, n) {
                    return function i(o) {
                        for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode)
                            for (var a = r.length; a--; )
                                if (r[a] === s)
                                    return o.delegateTarget = s,
                                    i.oneOff && H.off(t, o.type, n),
                                    n.apply(s, [o]);
                        return null
                    }
                }(t, n, i) : function(t, e) {
                    return function n(i) {
                        return i.delegateTarget = t,
                        n.oneOff && H.off(t, i.type, e),
                        e.apply(t, [i])
                    }
                }(t, n);
                h.delegationSelector = s ? n : null,
                h.originalHandler = a,
                h.oneOff = o,
                h.uidEvent = d,
                u[d] = h,
                t.addEventListener(l, h, s)
            }
        }
    }
    function B(t, e, n, i, o) {
        var r = I(e[n], i, o);
        r && (t.removeEventListener(n, r, Boolean(o)),
        delete e[n][r.uidEvent])
    }
    var H = {
        on: function(t, e, n, i) {
            M(t, e, n, i, !1)
        },
        one: function(t, e, n, i) {
            M(t, e, n, i, !0)
        },
        off: function(t, e, n, i) {
            if ("string" == typeof e && t) {
                var o = P(e, n, i)
                  , r = o[0]
                  , s = o[1]
                  , a = o[2]
                  , l = a !== e
                  , c = N(t)
                  , u = e.startsWith(".");
                if (void 0 === s) {
                    u && Object.keys(c).forEach((function(n) {
                        !function(t, e, n, i) {
                            var o = e[n] || {};
                            Object.keys(o).forEach((function(r) {
                                if (r.includes(i)) {
                                    var s = o[r];
                                    B(t, e, n, s.originalHandler, s.delegationSelector)
                                }
                            }
                            ))
                        }(t, c, n, e.slice(1))
                    }
                    ));
                    var f = c[a] || {};
                    Object.keys(f).forEach((function(n) {
                        var i = n.replace(A, "");
                        if (!l || e.includes(i)) {
                            var o = f[n];
                            B(t, c, a, o.originalHandler, o.delegationSelector)
                        }
                    }
                    ))
                } else {
                    if (!c || !c[a])
                        return;
                    B(t, c, a, s, r ? n : null)
                }
            }
        },
        trigger: function(t, e, n) {
            if ("string" != typeof e || !t)
                return null;
            var i, o = _(), r = e.replace(L, ""), s = e !== r, a = S.has(r), l = !0, c = !0, u = !1, f = null;
            return s && o && (i = o.Event(e, n),
            o(t).trigger(i),
            l = !i.isPropagationStopped(),
            c = !i.isImmediatePropagationStopped(),
            u = i.isDefaultPrevented()),
            a ? (f = document.createEvent("HTMLEvents")).initEvent(r, l, !0) : f = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== n && Object.keys(n).forEach((function(t) {
                Object.defineProperty(f, t, {
                    get: function() {
                        return n[t]
                    }
                })
            }
            )),
            u && f.preventDefault(),
            c && t.dispatchEvent(f),
            f.defaultPrevented && void 0 !== i && i.preventDefault(),
            f
        }
    }
      , R = function() {
        function t(t) {
            t && (this._element = t,
            E(t, this.constructor.DATA_KEY, this))
        }
        return t.prototype.dispose = function() {
            k(this._element, this.constructor.DATA_KEY),
            this._element = null
        }
        ,
        t.getInstance = function(t) {
            return T(t, this.DATA_KEY)
        }
        ,
        e(t, null, [{
            key: "VERSION",
            get: function() {
                return "5.0.0-beta1"
            }
        }]),
        t
    }()
      , W = "alert"
      , K = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        i(n, t);
        var o = n.prototype;
        return o.close = function(t) {
            var e = t ? this._getRootElement(t) : this._element
              , n = this._triggerCloseEvent(e);
            null === n || n.defaultPrevented || this._removeElement(e)
        }
        ,
        o._getRootElement = function(t) {
            return c(t) || t.closest(".alert")
        }
        ,
        o._triggerCloseEvent = function(t) {
            return H.trigger(t, "close.bs.alert")
        }
        ,
        o._removeElement = function(t) {
            var e = this;
            if (t.classList.remove("show"),
            t.classList.contains("fade")) {
                var n = u(t);
                H.one(t, "transitionend", (function() {
                    return e._destroyElement(t)
                }
                )),
                h(t, n)
            } else
                this._destroyElement(t)
        }
        ,
        o._destroyElement = function(t) {
            t.parentNode && t.parentNode.removeChild(t),
            H.trigger(t, "closed.bs.alert")
        }
        ,
        n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.alert");
                e || (e = new n(this)),
                "close" === t && e[t](this)
            }
            ))
        }
        ,
        n.handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.alert"
            }
        }]),
        n
    }(R);
    H.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', K.handleDismiss(new K)),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[W];
            t.fn[W] = K.jQueryInterface,
            t.fn[W].Constructor = K,
            t.fn[W].noConflict = function() {
                return t.fn[W] = e,
                K.jQueryInterface
            }
        }
    }
    ));
    var Q = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        return i(n, t),
        n.prototype.toggle = function() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        ,
        n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.button");
                e || (e = new n(this)),
                "toggle" === t && e[t]()
            }
            ))
        }
        ,
        e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.button"
            }
        }]),
        n
    }(R);
    function U(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function F(t) {
        return t.replace(/[A-Z]/g, (function(t) {
            return "-" + t.toLowerCase()
        }
        ))
    }
    H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function(t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]')
          , n = T(e, "bs.button");
        n || (n = new Q(e)),
        n.toggle()
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn.button;
            t.fn.button = Q.jQueryInterface,
            t.fn.button.Constructor = Q,
            t.fn.button.noConflict = function() {
                return t.fn.button = e,
                Q.jQueryInterface
            }
        }
    }
    ));
    var Y = {
        setDataAttribute: function(t, e, n) {
            t.setAttribute("data-bs-" + F(e), n)
        },
        removeDataAttribute: function(t, e) {
            t.removeAttribute("data-bs-" + F(e))
        },
        getDataAttributes: function(t) {
            if (!t)
                return {};
            var e = {};
            return Object.keys(t.dataset).filter((function(t) {
                return t.startsWith("bs")
            }
            )).forEach((function(n) {
                var i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = U(t.dataset[n])
            }
            )),
            e
        },
        getDataAttribute: function(t, e) {
            return U(t.getAttribute("data-bs-" + F(e)))
        },
        offset: function(t) {
            var e = t.getBoundingClientRect();
            return {
                top: e.top + document.body.scrollTop,
                left: e.left + document.body.scrollLeft
            }
        },
        position: function(t) {
            return {
                top: t.offsetTop,
                left: t.offsetLeft
            }
        }
    }
      , q = {
        matches: function(t, e) {
            return t.matches(e)
        },
        find: function(t, e) {
            var n;
            return void 0 === e && (e = document.documentElement),
            (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(e, t))
        },
        findOne: function(t, e) {
            return void 0 === e && (e = document.documentElement),
            Element.prototype.querySelector.call(e, t)
        },
        children: function(t, e) {
            var n, i = (n = []).concat.apply(n, t.children);
            return i.filter((function(t) {
                return t.matches(e)
            }
            ))
        },
        parents: function(t, e) {
            for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
                this.matches(i, e) && n.push(i),
                i = i.parentNode;
            return n
        },
        prev: function(t, e) {
            for (var n = t.previousElementSibling; n; ) {
                if (n.matches(e))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next: function(t, e) {
            for (var n = t.nextElementSibling; n; ) {
                if (this.matches(n, e))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        }
    }
      , z = "carousel"
      , V = ".bs.carousel"
      , X = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , $ = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , G = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , Z = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._items = null,
            i._interval = null,
            i._activeElement = null,
            i._isPaused = !1,
            i._isSliding = !1,
            i.touchTimeout = null,
            i.touchStartX = 0,
            i.touchDeltaX = 0,
            i._config = i._getConfig(n),
            i._indicatorsElement = q.findOne(".carousel-indicators", i._element),
            i._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            i._pointerEvent = Boolean(window.PointerEvent),
            i._addEventListeners(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.next = function() {
            this._isSliding || this._slide("next")
        }
        ,
        r.nextWhenVisible = function() {
            !document.hidden && g(this._element) && this.next()
        }
        ,
        r.prev = function() {
            this._isSliding || this._slide("prev")
        }
        ,
        r.pause = function(t) {
            t || (this._isPaused = !0),
            q.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (f(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        r.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        r.to = function(t) {
            var e = this;
            this._activeElement = q.findOne(".active.carousel-item", this._element);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    H.one(this._element, "slid.bs.carousel", (function() {
                        return e.to(t)
                    }
                    ));
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = t > n ? "next" : "prev";
                    this._slide(i, this._items[t])
                }
        }
        ,
        r.dispose = function() {
            t.prototype.dispose.call(this),
            H.off(this._element, V),
            this._items = null,
            this._config = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        r._getConfig = function(t) {
            return t = n({}, X, t),
            p(z, t, $),
            t
        }
        ,
        r._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                this.touchDeltaX = 0,
                e > 0 && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        r._addEventListeners = function() {
            var t = this;
            this._config.keyboard && H.on(this._element, "keydown.bs.carousel", (function(e) {
                return t._keydown(e)
            }
            )),
            "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", (function(e) {
                return t.pause(e)
            }
            )),
            H.on(this._element, "mouseleave.bs.carousel", (function(e) {
                return t.cycle(e)
            }
            ))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        ,
        r._addTouchEventListeners = function() {
            var t = this
              , e = function(e) {
                t._pointerEvent && G[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
            }
              , n = function(e) {
                t._pointerEvent && G[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX),
                t._handleSwipe(),
                "hover" === t._config.pause && (t.pause(),
                t.touchTimeout && clearTimeout(t.touchTimeout),
                t.touchTimeout = setTimeout((function(e) {
                    return t.cycle(e)
                }
                ), 500 + t._config.interval))
            };
            q.find(".carousel-item img", this._element).forEach((function(t) {
                H.on(t, "dragstart.bs.carousel", (function(t) {
                    return t.preventDefault()
                }
                ))
            }
            )),
            this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", (function(t) {
                return e(t)
            }
            )),
            H.on(this._element, "pointerup.bs.carousel", (function(t) {
                return n(t)
            }
            )),
            this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", (function(t) {
                return e(t)
            }
            )),
            H.on(this._element, "touchmove.bs.carousel", (function(e) {
                return function(e) {
                    e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                }(e)
            }
            )),
            H.on(this._element, "touchend.bs.carousel", (function(t) {
                return n(t)
            }
            )))
        }
        ,
        r._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.key) {
                case "ArrowLeft":
                    t.preventDefault(),
                    this.prev();
                    break;
                case "ArrowRight":
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        r._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? q.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        ,
        r._getItemByDirection = function(t, e) {
            var n = "next" === t
              , i = "prev" === t
              , o = this._getItemIndex(e)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return e;
            var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        r._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(q.findOne(".active.carousel-item", this._element));
            return H.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            })
        }
        ,
        r._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                for (var e = q.find(".active", this._indicatorsElement), n = 0; n < e.length; n++)
                    e[n].classList.remove("active");
                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                i && i.classList.add("active")
            }
        }
        ,
        r._updateInterval = function() {
            var t = this._activeElement || q.findOne(".active.carousel-item", this._element);
            if (t) {
                var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
            }
        }
        ,
        r._slide = function(t, e) {
            var n, i, o, r = this, s = q.findOne(".active.carousel-item", this._element), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), f = Boolean(this._interval);
            if ("next" === t ? (n = "carousel-item-start",
            i = "carousel-item-next",
            o = "left") : (n = "carousel-item-end",
            i = "carousel-item-prev",
            o = "right"),
            l && l.classList.contains("active"))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
                if (this._isSliding = !0,
                f && this.pause(),
                this._setActiveIndicatorElement(l),
                this._activeElement = l,
                this._element.classList.contains("slide")) {
                    l.classList.add(i),
                    v(l),
                    s.classList.add(n),
                    l.classList.add(n);
                    var d = u(s);
                    H.one(s, "transitionend", (function() {
                        l.classList.remove(n, i),
                        l.classList.add("active"),
                        s.classList.remove("active", i, n),
                        r._isSliding = !1,
                        setTimeout((function() {
                            H.trigger(r._element, "slid.bs.carousel", {
                                relatedTarget: l,
                                direction: o,
                                from: a,
                                to: c
                            })
                        }
                        ), 0)
                    }
                    )),
                    h(s, d)
                } else
                    s.classList.remove("active"),
                    l.classList.add("active"),
                    this._isSliding = !1,
                    H.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                f && this.cycle()
            }
        }
        ,
        o.carouselInterface = function(t, e) {
            var i = T(t, "bs.carousel")
              , r = n({}, X, Y.getDataAttributes(t));
            "object" == typeof e && (r = n({}, r, e));
            var s = "string" == typeof e ? e : r.slide;
            if (i || (i = new o(t,r)),
            "number" == typeof e)
                i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s])
                    throw new TypeError('No method named "' + s + '"');
                i[s]()
            } else
                r.interval && r.ride && (i.pause(),
                i.cycle())
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                o.carouselInterface(this, t)
            }
            ))
        }
        ,
        o.dataApiClickHandler = function(t) {
            var e = c(this);
            if (e && e.classList.contains("carousel")) {
                var i = n({}, Y.getDataAttributes(e), Y.getDataAttributes(this))
                  , r = this.getAttribute("data-bs-slide-to");
                r && (i.interval = !1),
                o.carouselInterface(e, i),
                r && T(e, "bs.carousel").to(r),
                t.preventDefault()
            }
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return X
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.carousel"
            }
        }]),
        o
    }(R);
    H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler),
    H.on(window, "load.bs.carousel.data-api", (function() {
        for (var t = q.find('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++)
            Z.carouselInterface(t[e], T(t[e], "bs.carousel"))
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[z];
            t.fn[z] = Z.jQueryInterface,
            t.fn[z].Constructor = Z,
            t.fn[z].noConflict = function() {
                return t.fn[z] = e,
                Z.jQueryInterface
            }
        }
    }
    ));
    var J = "collapse"
      , tt = {
        toggle: !0,
        parent: ""
    }
      , et = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , nt = function(t) {
        function o(e, n) {
            var i;
            (i = t.call(this, e) || this)._isTransitioning = !1,
            i._config = i._getConfig(n),
            i._triggerArray = q.find('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
            for (var o = q.find('[data-bs-toggle="collapse"]'), r = 0, s = o.length; r < s; r++) {
                var a = o[r]
                  , c = l(a)
                  , u = q.find(c).filter((function(t) {
                    return t === e
                }
                ));
                null !== c && u.length && (i._selector = c,
                i._triggerArray.push(a))
            }
            return i._parent = i._config.parent ? i._getParent() : null,
            i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray),
            i._config.toggle && i.toggle(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.toggle = function() {
            this._element.classList.contains("show") ? this.hide() : this.show()
        }
        ,
        r.show = function() {
            var t = this;
            if (!this._isTransitioning && !this._element.classList.contains("show")) {
                var e, n;
                this._parent && 0 === (e = q.find(".show, .collapsing", this._parent).filter((function(e) {
                    return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
                }
                ))).length && (e = null);
                var i = q.findOne(this._selector);
                if (e) {
                    var r = e.find((function(t) {
                        return i !== t
                    }
                    ));
                    if ((n = r ? T(r, "bs.collapse") : null) && n._isTransitioning)
                        return
                }
                if (!H.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                    e && e.forEach((function(t) {
                        i !== t && o.collapseInterface(t, "hide"),
                        n || E(t, "bs.collapse", null)
                    }
                    ));
                    var s = this._getDimension();
                    this._element.classList.remove("collapse"),
                    this._element.classList.add("collapsing"),
                    this._element.style[s] = 0,
                    this._triggerArray.length && this._triggerArray.forEach((function(t) {
                        t.classList.remove("collapsed"),
                        t.setAttribute("aria-expanded", !0)
                    }
                    )),
                    this.setTransitioning(!0);
                    var a = "scroll" + (s[0].toUpperCase() + s.slice(1))
                      , l = u(this._element);
                    H.one(this._element, "transitionend", (function() {
                        t._element.classList.remove("collapsing"),
                        t._element.classList.add("collapse", "show"),
                        t._element.style[s] = "",
                        t.setTransitioning(!1),
                        H.trigger(t._element, "shown.bs.collapse")
                    }
                    )),
                    h(this._element, l),
                    this._element.style[s] = this._element[a] + "px"
                }
            }
        }
        ,
        r.hide = function() {
            var t = this;
            if (!this._isTransitioning && this._element.classList.contains("show") && !H.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                var e = this._getDimension();
                this._element.style[e] = this._element.getBoundingClientRect()[e] + "px",
                v(this._element),
                this._element.classList.add("collapsing"),
                this._element.classList.remove("collapse", "show");
                var n = this._triggerArray.length;
                if (n > 0)
                    for (var i = 0; i < n; i++) {
                        var o = this._triggerArray[i]
                          , r = c(o);
                        r && !r.classList.contains("show") && (o.classList.add("collapsed"),
                        o.setAttribute("aria-expanded", !1))
                    }
                this.setTransitioning(!0);
                this._element.style[e] = "";
                var s = u(this._element);
                H.one(this._element, "transitionend", (function() {
                    t.setTransitioning(!1),
                    t._element.classList.remove("collapsing"),
                    t._element.classList.add("collapse"),
                    H.trigger(t._element, "hidden.bs.collapse")
                }
                )),
                h(this._element, s)
            }
        }
        ,
        r.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        r.dispose = function() {
            t.prototype.dispose.call(this),
            this._config = null,
            this._parent = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        r._getConfig = function(t) {
            return (t = n({}, tt, t)).toggle = Boolean(t.toggle),
            p(J, t, et),
            t
        }
        ,
        r._getDimension = function() {
            return this._element.classList.contains("width") ? "width" : "height"
        }
        ,
        r._getParent = function() {
            var t = this
              , e = this._config.parent;
            d(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = q.findOne(e);
            var n = '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]';
            return q.find(n, e).forEach((function(e) {
                var n = c(e);
                t._addAriaAndCollapsedClass(n, [e])
            }
            )),
            e
        }
        ,
        r._addAriaAndCollapsedClass = function(t, e) {
            if (t && e.length) {
                var n = t.classList.contains("show");
                e.forEach((function(t) {
                    n ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
                    t.setAttribute("aria-expanded", n)
                }
                ))
            }
        }
        ,
        o.collapseInterface = function(t, e) {
            var i = T(t, "bs.collapse")
              , r = n({}, tt, Y.getDataAttributes(t), "object" == typeof e && e ? e : {});
            if (!i && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1),
            i || (i = new o(t,r)),
            "string" == typeof e) {
                if (void 0 === i[e])
                    throw new TypeError('No method named "' + e + '"');
                i[e]()
            }
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                o.collapseInterface(this, t)
            }
            ))
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return tt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.collapse"
            }
        }]),
        o
    }(R);
    H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = Y.getDataAttributes(this)
          , n = l(this);
        q.find(n).forEach((function(t) {
            var n, i = T(t, "bs.collapse");
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent,
            i._parent = i._getParent()),
            n = "toggle") : n = e,
            nt.collapseInterface(t, n)
        }
        ))
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[J];
            t.fn[J] = nt.jQueryInterface,
            t.fn[J].Constructor = nt,
            t.fn[J].noConflict = function() {
                return t.fn[J] = e,
                nt.jQueryInterface
            }
        }
    }
    ));
    var it = "top"
      , ot = "bottom"
      , rt = "right"
      , st = "left"
      , at = [it, ot, rt, st]
      , lt = at.reduce((function(t, e) {
        return t.concat([e + "-start", e + "-end"])
    }
    ), [])
      , ct = [].concat(at, ["auto"]).reduce((function(t, e) {
        return t.concat([e, e + "-start", e + "-end"])
    }
    ), [])
      , ut = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function ft(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function dt(t) {
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    function ht(t) {
        return t instanceof dt(t).Element || t instanceof Element
    }
    function pt(t) {
        return t instanceof dt(t).HTMLElement || t instanceof HTMLElement
    }
    var gt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var n = e.styles[t] || {}
                  , i = e.attributes[t] || {}
                  , o = e.elements[t];
                pt(o) && ft(o) && (Object.assign(o.style, n),
                Object.keys(i).forEach((function(t) {
                    var e = i[t];
                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                }
                )))
            }
            ))
        },
        effect: function(t) {
            var e = t.state
              , n = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, n.popper),
            e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
            function() {
                Object.keys(e.elements).forEach((function(t) {
                    var i = e.elements[t]
                      , o = e.attributes[t] || {}
                      , r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                        return t[e] = "",
                        t
                    }
                    ), {});
                    pt(i) && ft(i) && (Object.assign(i.style, r),
                    Object.keys(o).forEach((function(t) {
                        i.removeAttribute(t)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    };
    function mt(t) {
        return t.split("-")[0]
    }
    function vt(t) {
        return {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: t.offsetWidth,
            height: t.offsetHeight
        }
    }
    function _t(t, e) {
        var n, i = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (i && ((n = i)instanceof dt(n).ShadowRoot || n instanceof ShadowRoot)) {
            var o = e;
            do {
                if (o && t.isSameNode(o))
                    return !0;
                o = o.parentNode || o.host
            } while (o)
        }
        return !1
    }
    function bt(t) {
        return dt(t).getComputedStyle(t)
    }
    function yt(t) {
        return ["table", "td", "th"].indexOf(ft(t)) >= 0
    }
    function wt(t) {
        return ((ht(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function Et(t) {
        return "html" === ft(t) ? t : t.assignedSlot || t.parentNode || t.host || wt(t)
    }
    function Tt(t) {
        if (!pt(t) || "fixed" === bt(t).position)
            return null;
        var e = t.offsetParent;
        if (e) {
            var n = wt(e);
            if ("body" === ft(e) && "static" === bt(e).position && "static" !== bt(n).position)
                return n
        }
        return e
    }
    function kt(t) {
        for (var e = dt(t), n = Tt(t); n && yt(n) && "static" === bt(n).position; )
            n = Tt(n);
        return n && "body" === ft(n) && "static" === bt(n).position ? e : n || function(t) {
            for (var e = Et(t); pt(e) && ["html", "body"].indexOf(ft(e)) < 0; ) {
                var n = bt(e);
                if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange)
                    return e;
                e = e.parentNode
            }
            return null
        }(t) || e
    }
    function Ot(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    function Lt(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }
    function At(t) {
        return Object.assign(Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }), t)
    }
    function Ct(t, e) {
        return e.reduce((function(e, n) {
            return e[n] = t,
            e
        }
        ), {})
    }
    var Dt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, n = t.state, i = t.name, o = n.elements.arrow, r = n.modifiersData.popperOffsets, s = mt(n.placement), a = Ot(s), l = [st, rt].indexOf(s) >= 0 ? "height" : "width";
            if (o && r) {
                var c = n.modifiersData[i + "#persistent"].padding
                  , u = vt(o)
                  , f = "y" === a ? it : st
                  , d = "y" === a ? ot : rt
                  , h = n.rects.reference[l] + n.rects.reference[a] - r[a] - n.rects.popper[l]
                  , p = r[a] - n.rects.reference[a]
                  , g = kt(o)
                  , m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0
                  , v = h / 2 - p / 2
                  , _ = c[f]
                  , b = m - u[l] - c[d]
                  , y = m / 2 - u[l] / 2 + v
                  , w = Lt(_, y, b)
                  , E = a;
                n.modifiersData[i] = ((e = {})[E] = w,
                e.centerOffset = w - y,
                e)
            }
        },
        effect: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name
              , o = n.element
              , r = void 0 === o ? "[data-popper-arrow]" : o
              , s = n.padding
              , a = void 0 === s ? 0 : s;
            null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && _t(e.elements.popper, r) && (e.elements.arrow = r,
            e.modifiersData[i + "#persistent"] = {
                padding: At("number" != typeof a ? a : Ct(a, at))
            })
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    }
      , xt = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function St(t) {
        var e, n = t.popper, i = t.popperRect, o = t.placement, r = t.offsets, s = t.position, a = t.gpuAcceleration, l = t.adaptive, c = function(t) {
            var e = t.x
              , n = t.y
              , i = window.devicePixelRatio || 1;
            return {
                x: Math.round(e * i) / i || 0,
                y: Math.round(n * i) / i || 0
            }
        }(r), u = c.x, f = c.y, d = r.hasOwnProperty("x"), h = r.hasOwnProperty("y"), p = st, g = it, m = window;
        if (l) {
            var v = kt(n);
            v === dt(n) && (v = wt(n)),
            o === it && (g = ot,
            f -= v.clientHeight - i.height,
            f *= a ? 1 : -1),
            o === st && (p = rt,
            u -= v.clientWidth - i.width,
            u *= a ? 1 : -1)
        }
        var _, b = Object.assign({
            position: s
        }, l && xt);
        return a ? Object.assign(Object.assign({}, b), {}, ((_ = {})[g] = h ? "0" : "",
        _[p] = d ? "0" : "",
        _.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + f + "px)" : "translate3d(" + u + "px, " + f + "px, 0)",
        _)) : Object.assign(Object.assign({}, b), {}, ((e = {})[g] = h ? f + "px" : "",
        e[p] = d ? u + "px" : "",
        e.transform = "",
        e))
    }
    var jt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = n.gpuAcceleration
              , o = void 0 === i || i
              , r = n.adaptive
              , s = void 0 === r || r
              , a = {
                placement: mt(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: o
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), St(Object.assign(Object.assign({}, a), {}, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: s
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), St(Object.assign(Object.assign({}, a), {}, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1
            })))),
            e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    }
      , Nt = {
        passive: !0
    };
    var It = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , n = t.instance
              , i = t.options
              , o = i.scroll
              , r = void 0 === o || o
              , s = i.resize
              , a = void 0 === s || s
              , l = dt(e.elements.popper)
              , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return r && c.forEach((function(t) {
                t.addEventListener("scroll", n.update, Nt)
            }
            )),
            a && l.addEventListener("resize", n.update, Nt),
            function() {
                r && c.forEach((function(t) {
                    t.removeEventListener("scroll", n.update, Nt)
                }
                )),
                a && l.removeEventListener("resize", n.update, Nt)
            }
        },
        data: {}
    }
      , Pt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Mt(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return Pt[t]
        }
        ))
    }
    var Bt = {
        start: "end",
        end: "start"
    };
    function Ht(t) {
        return t.replace(/start|end/g, (function(t) {
            return Bt[t]
        }
        ))
    }
    function Rt(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }
    function Wt(t) {
        var e = dt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function Kt(t) {
        return Rt(wt(t)).left + Wt(t).scrollLeft
    }
    function Qt(t) {
        var e = bt(t)
          , n = e.overflow
          , i = e.overflowX
          , o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }
    function Ut(t, e) {
        void 0 === e && (e = []);
        var n = function t(e) {
            return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : pt(e) && Qt(e) ? e : t(Et(e))
        }(t)
          , i = "body" === ft(n)
          , o = dt(n)
          , r = i ? [o].concat(o.visualViewport || [], Qt(n) ? n : []) : n
          , s = e.concat(r);
        return i ? s : s.concat(Ut(Et(r)))
    }
    function Ft(t) {
        return Object.assign(Object.assign({}, t), {}, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function Yt(t, e) {
        return "viewport" === e ? Ft(function(t) {
            var e = dt(t)
              , n = wt(t)
              , i = e.visualViewport
              , o = n.clientWidth
              , r = n.clientHeight
              , s = 0
              , a = 0;
            return i && (o = i.width,
            r = i.height,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft,
            a = i.offsetTop)),
            {
                width: o,
                height: r,
                x: s + Kt(t),
                y: a
            }
        }(t)) : pt(e) ? function(t) {
            var e = Rt(t);
            return e.top = e.top + t.clientTop,
            e.left = e.left + t.clientLeft,
            e.bottom = e.top + t.clientHeight,
            e.right = e.left + t.clientWidth,
            e.width = t.clientWidth,
            e.height = t.clientHeight,
            e.x = e.left,
            e.y = e.top,
            e
        }(e) : Ft(function(t) {
            var e = wt(t)
              , n = Wt(t)
              , i = t.ownerDocument.body
              , o = Math.max(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0)
              , r = Math.max(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0)
              , s = -n.scrollLeft + Kt(t)
              , a = -n.scrollTop;
            return "rtl" === bt(i || e).direction && (s += Math.max(e.clientWidth, i ? i.clientWidth : 0) - o),
            {
                width: o,
                height: r,
                x: s,
                y: a
            }
        }(wt(t)))
    }
    function qt(t, e, n) {
        var i = "clippingParents" === e ? function(t) {
            var e = Ut(Et(t))
              , n = ["absolute", "fixed"].indexOf(bt(t).position) >= 0 && pt(t) ? kt(t) : t;
            return ht(n) ? e.filter((function(t) {
                return ht(t) && _t(t, n) && "body" !== ft(t)
            }
            )) : []
        }(t) : [].concat(e)
          , o = [].concat(i, [n])
          , r = o[0]
          , s = o.reduce((function(e, n) {
            var i = Yt(t, n);
            return e.top = Math.max(i.top, e.top),
            e.right = Math.min(i.right, e.right),
            e.bottom = Math.min(i.bottom, e.bottom),
            e.left = Math.max(i.left, e.left),
            e
        }
        ), Yt(t, r));
        return s.width = s.right - s.left,
        s.height = s.bottom - s.top,
        s.x = s.left,
        s.y = s.top,
        s
    }
    function zt(t) {
        return t.split("-")[1]
    }
    function Vt(t) {
        var e, n = t.reference, i = t.element, o = t.placement, r = o ? mt(o) : null, s = o ? zt(o) : null, a = n.x + n.width / 2 - i.width / 2, l = n.y + n.height / 2 - i.height / 2;
        switch (r) {
        case it:
            e = {
                x: a,
                y: n.y - i.height
            };
            break;
        case ot:
            e = {
                x: a,
                y: n.y + n.height
            };
            break;
        case rt:
            e = {
                x: n.x + n.width,
                y: l
            };
            break;
        case st:
            e = {
                x: n.x - i.width,
                y: l
            };
            break;
        default:
            e = {
                x: n.x,
                y: n.y
            }
        }
        var c = r ? Ot(r) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
            case "start":
                e[c] = Math.floor(e[c]) - Math.floor(n[u] / 2 - i[u] / 2);
                break;
            case "end":
                e[c] = Math.floor(e[c]) + Math.ceil(n[u] / 2 - i[u] / 2)
            }
        }
        return e
    }
    function Xt(t, e) {
        void 0 === e && (e = {});
        var n = e
          , i = n.placement
          , o = void 0 === i ? t.placement : i
          , r = n.boundary
          , s = void 0 === r ? "clippingParents" : r
          , a = n.rootBoundary
          , l = void 0 === a ? "viewport" : a
          , c = n.elementContext
          , u = void 0 === c ? "popper" : c
          , f = n.altBoundary
          , d = void 0 !== f && f
          , h = n.padding
          , p = void 0 === h ? 0 : h
          , g = At("number" != typeof p ? p : Ct(p, at))
          , m = "popper" === u ? "reference" : "popper"
          , v = t.elements.reference
          , _ = t.rects.popper
          , b = t.elements[d ? m : u]
          , y = qt(ht(b) ? b : b.contextElement || wt(t.elements.popper), s, l)
          , w = Rt(v)
          , E = Vt({
            reference: w,
            element: _,
            strategy: "absolute",
            placement: o
        })
          , T = Ft(Object.assign(Object.assign({}, _), E))
          , k = "popper" === u ? T : w
          , O = {
            top: y.top - k.top + g.top,
            bottom: k.bottom - y.bottom + g.bottom,
            left: y.left - k.left + g.left,
            right: k.right - y.right + g.right
        }
          , L = t.modifiersData.offset;
        if ("popper" === u && L) {
            var A = L[o];
            Object.keys(O).forEach((function(t) {
                var e = [rt, ot].indexOf(t) >= 0 ? 1 : -1
                  , n = [it, ot].indexOf(t) >= 0 ? "y" : "x";
                O[t] += A[n] * e
            }
            ))
        }
        return O
    }
    function $t(t, e) {
        void 0 === e && (e = {});
        var n = e
          , i = n.placement
          , o = n.boundary
          , r = n.rootBoundary
          , s = n.padding
          , a = n.flipVariations
          , l = n.allowedAutoPlacements
          , c = void 0 === l ? ct : l
          , u = zt(i)
          , f = u ? a ? lt : lt.filter((function(t) {
            return zt(t) === u
        }
        )) : at
          , d = f.filter((function(t) {
            return c.indexOf(t) >= 0
        }
        ));
        0 === d.length && (d = f);
        var h = d.reduce((function(e, n) {
            return e[n] = Xt(t, {
                placement: n,
                boundary: o,
                rootBoundary: r,
                padding: s
            })[mt(n)],
            e
        }
        ), {});
        return Object.keys(h).sort((function(t, e) {
            return h[t] - h[e]
        }
        ))
    }
    var Gt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, p = void 0 === h || h, g = n.allowedAutoPlacements, m = e.options.placement, v = mt(m), _ = l || (v === m || !p ? [Mt(m)] : function(t) {
                    if ("auto" === mt(t))
                        return [];
                    var e = Mt(t);
                    return [Ht(t), e, Ht(e)]
                }(m)), b = [m].concat(_).reduce((function(t, n) {
                    return t.concat("auto" === mt(n) ? $t(e, {
                        placement: n,
                        boundary: u,
                        rootBoundary: f,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : n)
                }
                ), []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, k = b[0], O = 0; O < b.length; O++) {
                    var L = b[O]
                      , A = mt(L)
                      , C = "start" === zt(L)
                      , D = [it, ot].indexOf(A) >= 0
                      , x = D ? "width" : "height"
                      , S = Xt(e, {
                        placement: L,
                        boundary: u,
                        rootBoundary: f,
                        altBoundary: d,
                        padding: c
                    })
                      , j = D ? C ? rt : st : C ? ot : it;
                    y[x] > w[x] && (j = Mt(j));
                    var N = Mt(j)
                      , I = [];
                    if (r && I.push(S[A] <= 0),
                    a && I.push(S[j] <= 0, S[N] <= 0),
                    I.every((function(t) {
                        return t
                    }
                    ))) {
                        k = L,
                        T = !1;
                        break
                    }
                    E.set(L, I)
                }
                if (T)
                    for (var P = function(t) {
                        var e = b.find((function(e) {
                            var n = E.get(e);
                            if (n)
                                return n.slice(0, t).every((function(t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return k = e,
                            "break"
                    }, M = p ? 3 : 1; M > 0; M--) {
                        if ("break" === P(M))
                            break
                    }
                e.placement !== k && (e.modifiersData[i]._skip = !0,
                e.placement = k,
                e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function Zt(t, e, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }),
        {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }
    function Jt(t) {
        return [it, rt, ot, st].some((function(e) {
            return t[e] >= 0
        }
        ))
    }
    var te = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , n = t.name
              , i = e.rects.reference
              , o = e.rects.popper
              , r = e.modifiersData.preventOverflow
              , s = Xt(e, {
                elementContext: "reference"
            })
              , a = Xt(e, {
                altBoundary: !0
            })
              , l = Zt(s, i)
              , c = Zt(a, o, r)
              , u = Jt(l)
              , f = Jt(c);
            e.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: f
            },
            e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": f
            })
        }
    };
    var ee = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name
              , o = n.offset
              , r = void 0 === o ? [0, 0] : o
              , s = ct.reduce((function(t, n) {
                return t[n] = function(t, e, n) {
                    var i = mt(t)
                      , o = [st, it].indexOf(i) >= 0 ? -1 : 1
                      , r = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {
                        placement: t
                    })) : n
                      , s = r[0]
                      , a = r[1];
                    return s = s || 0,
                    a = (a || 0) * o,
                    [st, rt].indexOf(i) >= 0 ? {
                        x: a,
                        y: s
                    } : {
                        x: s,
                        y: a
                    }
                }(n, e.rects, r),
                t
            }
            ), {})
              , a = s[e.placement]
              , l = a.x
              , c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l,
            e.modifiersData.popperOffsets.y += c),
            e.modifiersData[i] = s
        }
    };
    var ne = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , n = t.name;
            e.modifiersData[n] = Vt({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    var ie = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name
              , o = n.mainAxis
              , r = void 0 === o || o
              , s = n.altAxis
              , a = void 0 !== s && s
              , l = n.boundary
              , c = n.rootBoundary
              , u = n.altBoundary
              , f = n.padding
              , d = n.tether
              , h = void 0 === d || d
              , p = n.tetherOffset
              , g = void 0 === p ? 0 : p
              , m = Xt(e, {
                boundary: l,
                rootBoundary: c,
                padding: f,
                altBoundary: u
            })
              , v = mt(e.placement)
              , _ = zt(e.placement)
              , b = !_
              , y = Ot(v)
              , w = "x" === y ? "y" : "x"
              , E = e.modifiersData.popperOffsets
              , T = e.rects.reference
              , k = e.rects.popper
              , O = "function" == typeof g ? g(Object.assign(Object.assign({}, e.rects), {}, {
                placement: e.placement
            })) : g
              , L = {
                x: 0,
                y: 0
            };
            if (E) {
                if (r) {
                    var A = "y" === y ? it : st
                      , C = "y" === y ? ot : rt
                      , D = "y" === y ? "height" : "width"
                      , x = E[y]
                      , S = E[y] + m[A]
                      , j = E[y] - m[C]
                      , N = h ? -k[D] / 2 : 0
                      , I = "start" === _ ? T[D] : k[D]
                      , P = "start" === _ ? -k[D] : -T[D]
                      , M = e.elements.arrow
                      , B = h && M ? vt(M) : {
                        width: 0,
                        height: 0
                    }
                      , H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                      , R = H[A]
                      , W = H[C]
                      , K = Lt(0, T[D], B[D])
                      , Q = b ? T[D] / 2 - N - K - R - O : I - K - R - O
                      , U = b ? -T[D] / 2 + N + K + W + O : P + K + W + O
                      , F = e.elements.arrow && kt(e.elements.arrow)
                      , Y = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0
                      , q = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0
                      , z = E[y] + Q - q - Y
                      , V = E[y] + U - q
                      , X = Lt(h ? Math.min(S, z) : S, x, h ? Math.max(j, V) : j);
                    E[y] = X,
                    L[y] = X - x
                }
                if (a) {
                    var $ = "x" === y ? it : st
                      , G = "x" === y ? ot : rt
                      , Z = E[w]
                      , J = Lt(Z + m[$], Z, Z - m[G]);
                    E[w] = J,
                    L[w] = J - Z
                }
                e.modifiersData[i] = L
            }
        },
        requiresIfExists: ["offset"]
    };
    function oe(t, e, n) {
        void 0 === n && (n = !1);
        var i, o, r = wt(e), s = Rt(t), a = pt(e), l = {
            scrollLeft: 0,
            scrollTop: 0
        }, c = {
            x: 0,
            y: 0
        };
        return (a || !a && !n) && (("body" !== ft(e) || Qt(r)) && (l = (i = e) !== dt(i) && pt(i) ? {
            scrollLeft: (o = i).scrollLeft,
            scrollTop: o.scrollTop
        } : Wt(i)),
        pt(e) ? ((c = Rt(e)).x += e.clientLeft,
        c.y += e.clientTop) : r && (c.x = Kt(r))),
        {
            x: s.left + l.scrollLeft - c.x,
            y: s.top + l.scrollTop - c.y,
            width: s.width,
            height: s.height
        }
    }
    function re(t) {
        var e = new Map
          , n = new Set
          , i = [];
        return t.forEach((function(t) {
            e.set(t.name, t)
        }
        )),
        t.forEach((function(t) {
            n.has(t.name) || function t(o) {
                n.add(o.name),
                [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(i) {
                    if (!n.has(i)) {
                        var o = e.get(i);
                        o && t(o)
                    }
                }
                )),
                i.push(o)
            }(t)
        }
        )),
        i
    }
    var se = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function ae() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function le(t) {
        void 0 === t && (t = {});
        var e = t
          , n = e.defaultModifiers
          , i = void 0 === n ? [] : n
          , o = e.defaultOptions
          , r = void 0 === o ? se : o;
        return function(t, e, n) {
            void 0 === n && (n = r);
            var o, s, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign(Object.assign({}, se), r),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, u = {
                state: a,
                setOptions: function(n) {
                    f(),
                    a.options = Object.assign(Object.assign(Object.assign({}, r), a.options), n),
                    a.scrollParents = {
                        reference: ht(t) ? Ut(t) : t.contextElement ? Ut(t.contextElement) : [],
                        popper: Ut(e)
                    };
                    var o, s, c = function(t) {
                        var e = re(t);
                        return ut.reduce((function(t, n) {
                            return t.concat(e.filter((function(t) {
                                return t.phase === n
                            }
                            )))
                        }
                        ), [])
                    }((o = [].concat(i, a.options.modifiers),
                    s = o.reduce((function(t, e) {
                        var n = t[e.name];
                        return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
                            options: Object.assign(Object.assign({}, n.options), e.options),
                            data: Object.assign(Object.assign({}, n.data), e.data)
                        }) : e,
                        t
                    }
                    ), {}),
                    Object.keys(s).map((function(t) {
                        return s[t]
                    }
                    ))));
                    return a.orderedModifiers = c.filter((function(t) {
                        return t.enabled
                    }
                    )),
                    a.orderedModifiers.forEach((function(t) {
                        var e = t.name
                          , n = t.options
                          , i = void 0 === n ? {} : n
                          , o = t.effect;
                        if ("function" == typeof o) {
                            var r = o({
                                state: a,
                                name: e,
                                instance: u,
                                options: i
                            })
                              , s = function() {};
                            l.push(r || s)
                        }
                    }
                    )),
                    u.update()
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements
                          , e = t.reference
                          , n = t.popper;
                        if (ae(e, n)) {
                            a.rects = {
                                reference: oe(e, kt(n), "fixed" === a.options.strategy),
                                popper: vt(n)
                            },
                            a.reset = !1,
                            a.placement = a.options.placement,
                            a.orderedModifiers.forEach((function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }
                            ));
                            for (var i = 0; i < a.orderedModifiers.length; i++)
                                if (!0 !== a.reset) {
                                    var o = a.orderedModifiers[i]
                                      , r = o.fn
                                      , s = o.options
                                      , l = void 0 === s ? {} : s
                                      , f = o.name;
                                    "function" == typeof r && (a = r({
                                        state: a,
                                        options: l,
                                        name: f,
                                        instance: u
                                    }) || a)
                                } else
                                    a.reset = !1,
                                    i = -1
                        }
                    }
                },
                update: (o = function() {
                    return new Promise((function(t) {
                        u.forceUpdate(),
                        t(a)
                    }
                    ))
                }
                ,
                function() {
                    return s || (s = new Promise((function(t) {
                        Promise.resolve().then((function() {
                            s = void 0,
                            t(o())
                        }
                        ))
                    }
                    ))),
                    s
                }
                ),
                destroy: function() {
                    f(),
                    c = !0
                }
            };
            if (!ae(t, e))
                return u;
            function f() {
                l.forEach((function(t) {
                    return t()
                }
                )),
                l = []
            }
            return u.setOptions(n).then((function(t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            }
            )),
            u
        }
    }
    var ce = le()
      , ue = le({
        defaultModifiers: [It, ne, jt, gt]
    })
      , fe = le({
        defaultModifiers: [It, ne, jt, gt, ee, Gt, ie, Dt, te]
    })
      , de = Object.freeze({
        __proto__: null,
        popperGenerator: le,
        detectOverflow: Xt,
        createPopperBase: ce,
        createPopper: fe,
        createPopperLite: ue,
        top: it,
        bottom: ot,
        right: rt,
        left: st,
        auto: "auto",
        basePlacements: at,
        start: "start",
        end: "end",
        clippingParents: "clippingParents",
        viewport: "viewport",
        popper: "popper",
        reference: "reference",
        variationPlacements: lt,
        placements: ct,
        beforeRead: "beforeRead",
        read: "read",
        afterRead: "afterRead",
        beforeMain: "beforeMain",
        main: "main",
        afterMain: "afterMain",
        beforeWrite: "beforeWrite",
        write: "write",
        afterWrite: "afterWrite",
        modifierPhases: ut,
        applyStyles: gt,
        arrow: Dt,
        computeStyles: jt,
        eventListeners: It,
        flip: Gt,
        hide: te,
        offset: ee,
        popperOffsets: ne,
        preventOverflow: ie
    })
      , he = "dropdown"
      , pe = new RegExp("ArrowUp|ArrowDown|Escape")
      , ge = y ? "top-end" : "top-start"
      , me = y ? "top-start" : "top-end"
      , ve = y ? "bottom-end" : "bottom-start"
      , _e = y ? "bottom-start" : "bottom-end"
      , be = y ? "left-start" : "right-start"
      , ye = y ? "right-start" : "left-start"
      , we = {
        offset: 0,
        flip: !0,
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , Ee = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , Te = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._popper = null,
            i._config = i._getConfig(n),
            i._menu = i._getMenuElement(),
            i._inNavbar = i._detectNavbar(),
            i._addEventListeners(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.toggle = function() {
            if (!this._element.disabled && !this._element.classList.contains("disabled")) {
                var t = this._element.classList.contains("show");
                o.clearMenus(),
                t || this.show()
            }
        }
        ,
        r.show = function() {
            if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
                var t = o.getParentFromElement(this._element)
                  , e = {
                    relatedTarget: this._element
                };
                if (!H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                    if (!this._inNavbar) {
                        if (void 0 === de)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var n = this._element;
                        "parent" === this._config.reference ? n = t : d(this._config.reference) && (n = this._config.reference,
                        void 0 !== this._config.reference.jquery && (n = this._config.reference[0])),
                        this._popper = fe(n, this._menu, this._getPopperConfig())
                    }
                    var i;
                    if ("ontouchstart"in document.documentElement && !t.closest(".navbar-nav"))
                        (i = []).concat.apply(i, document.body.children).forEach((function(t) {
                            return H.on(t, "mouseover", null, (function() {}
                            ))
                        }
                        ));
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.toggle("show"),
                    this._element.classList.toggle("show"),
                    H.trigger(t, "shown.bs.dropdown", e)
                }
            }
        }
        ,
        r.hide = function() {
            if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
                var t = o.getParentFromElement(this._element)
                  , e = {
                    relatedTarget: this._element
                };
                H.trigger(t, "hide.bs.dropdown", e).defaultPrevented || (this._popper && this._popper.destroy(),
                this._menu.classList.toggle("show"),
                this._element.classList.toggle("show"),
                H.trigger(t, "hidden.bs.dropdown", e))
            }
        }
        ,
        r.dispose = function() {
            t.prototype.dispose.call(this),
            H.off(this._element, ".bs.dropdown"),
            this._menu = null,
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        r.update = function() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        ,
        r._addEventListeners = function() {
            var t = this;
            H.on(this._element, "click.bs.dropdown", (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            }
            ))
        }
        ,
        r._getConfig = function(t) {
            return t = n({}, this.constructor.Default, Y.getDataAttributes(this._element), t),
            p(he, t, this.constructor.DefaultType),
            t
        }
        ,
        r._getMenuElement = function() {
            return q.next(this._element, ".dropdown-menu")[0]
        }
        ,
        r._getPlacement = function() {
            var t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return be;
            if (t.classList.contains("dropstart"))
                return ye;
            var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? me : ge : e ? _e : ve
        }
        ,
        r._detectNavbar = function() {
            return null !== this._element.closest(".navbar")
        }
        ,
        r._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        altBoundary: this._config.flip,
                        rootBoundary: this._config.boundary
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            n({}, t, this._config.popperConfig)
        }
        ,
        o.dropdownInterface = function(t, e) {
            var n = T(t, "bs.dropdown");
            if (n || (n = new o(t,"object" == typeof e ? e : null)),
            "string" == typeof e) {
                if (void 0 === n[e])
                    throw new TypeError('No method named "' + e + '"');
                n[e]()
            }
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                o.dropdownInterface(this, t)
            }
            ))
        }
        ,
        o.clearMenus = function(t) {
            if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
                for (var e = q.find('[data-bs-toggle="dropdown"]'), n = 0, i = e.length; n < i; n++) {
                    var r = o.getParentFromElement(e[n])
                      , s = T(e[n], "bs.dropdown")
                      , a = {
                        relatedTarget: e[n]
                    };
                    if (t && "click" === t.type && (a.clickEvent = t),
                    s) {
                        var l = s._menu;
                        if (e[n].classList.contains("show"))
                            if (!(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && l.contains(t.target)))
                                if (!H.trigger(r, "hide.bs.dropdown", a).defaultPrevented) {
                                    var c;
                                    if ("ontouchstart"in document.documentElement)
                                        (c = []).concat.apply(c, document.body.children).forEach((function(t) {
                                            return H.off(t, "mouseover", null, (function() {}
                                            ))
                                        }
                                        ));
                                    e[n].setAttribute("aria-expanded", "false"),
                                    s._popper && s._popper.destroy(),
                                    l.classList.remove("show"),
                                    e[n].classList.remove("show"),
                                    H.trigger(r, "hidden.bs.dropdown", a)
                                }
                    }
                }
        }
        ,
        o.getParentFromElement = function(t) {
            return c(t) || t.parentNode
        }
        ,
        o.dataApiKeydownHandler = function(t) {
            if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !pe.test(t.key)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !this.classList.contains("disabled"))) {
                var e = o.getParentFromElement(this)
                  , n = this.classList.contains("show");
                if ("Escape" === t.key)
                    return (this.matches('[data-bs-toggle="dropdown"]') ? this : q.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(),
                    void o.clearMenus();
                if (n && "Space" !== t.key) {
                    var i = q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(g);
                    if (i.length) {
                        var r = i.indexOf(t.target);
                        "ArrowUp" === t.key && r > 0 && r--,
                        "ArrowDown" === t.key && r < i.length - 1 && r++,
                        i[r = -1 === r ? 0 : r].focus()
                    }
                } else
                    o.clearMenus()
            }
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return we
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ee
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.dropdown"
            }
        }]),
        o
    }(R);
    H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Te.dataApiKeydownHandler),
    H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Te.dataApiKeydownHandler),
    H.on(document, "click.bs.dropdown.data-api", Te.clearMenus),
    H.on(document, "keyup.bs.dropdown.data-api", Te.clearMenus),
    H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        Te.dropdownInterface(this, "toggle")
    }
    )),
    H.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        return t.stopPropagation()
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[he];
            t.fn[he] = Te.jQueryInterface,
            t.fn[he].Constructor = Te,
            t.fn[he].noConflict = function() {
                return t.fn[he] = e,
                Te.jQueryInterface
            }
        }
    }
    ));
    var ke = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , Oe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , Le = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._config = i._getConfig(n),
            i._dialog = q.findOne(".modal-dialog", e),
            i._backdrop = null,
            i._isShown = !1,
            i._isBodyOverflowing = !1,
            i._ignoreBackdropClick = !1,
            i._isTransitioning = !1,
            i._scrollbarWidth = 0,
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        r.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                this._element.classList.contains("fade") && (this._isTransitioning = !0);
                var n = H.trigger(this._element, "show.bs.modal", {
                    relatedTarget: t
                });
                this._isShown || n.defaultPrevented || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                H.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function(t) {
                    return e.hide(t)
                }
                )),
                H.on(this._dialog, "mousedown.dismiss.bs.modal", (function() {
                    H.one(e._element, "mouseup.dismiss.bs.modal", (function(t) {
                        t.target === e._element && (e._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((function() {
                    return e._showElement(t)
                }
                )))
            }
        }
        ,
        r.hide = function(t) {
            var e = this;
            if ((t && t.preventDefault(),
            this._isShown && !this._isTransitioning) && !H.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                this._isShown = !1;
                var n = this._element.classList.contains("fade");
                if (n && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                H.off(document, "focusin.bs.modal"),
                this._element.classList.remove("show"),
                H.off(this._element, "click.dismiss.bs.modal"),
                H.off(this._dialog, "mousedown.dismiss.bs.modal"),
                n) {
                    var i = u(this._element);
                    H.one(this._element, "transitionend", (function(t) {
                        return e._hideModal(t)
                    }
                    )),
                    h(this._element, i)
                } else
                    this._hideModal()
            }
        }
        ,
        r.dispose = function() {
            [window, this._element, this._dialog].forEach((function(t) {
                return H.off(t, ".bs.modal")
            }
            )),
            t.prototype.dispose.call(this),
            H.off(document, "focusin.bs.modal"),
            this._config = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        r.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        r._getConfig = function(t) {
            return t = n({}, ke, t),
            p("modal", t, Oe),
            t
        }
        ,
        r._showElement = function(t) {
            var e = this
              , n = this._element.classList.contains("fade")
              , i = q.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            i && (i.scrollTop = 0),
            n && v(this._element),
            this._element.classList.add("show"),
            this._config.focus && this._enforceFocus();
            var o = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                H.trigger(e._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            };
            if (n) {
                var r = u(this._dialog);
                H.one(this._dialog, "transitionend", o),
                h(this._dialog, r)
            } else
                o()
        }
        ,
        r._enforceFocus = function() {
            var t = this;
            H.off(document, "focusin.bs.modal"),
            H.on(document, "focusin.bs.modal", (function(e) {
                document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
            }
            ))
        }
        ,
        r._setEscapeEvent = function() {
            var t = this;
            this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", (function(e) {
                t._config.keyboard && "Escape" === e.key ? (e.preventDefault(),
                t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
            }
            )) : H.off(this._element, "keydown.dismiss.bs.modal")
        }
        ,
        r._setResizeEvent = function() {
            var t = this;
            this._isShown ? H.on(window, "resize.bs.modal", (function() {
                return t._adjustDialog()
            }
            )) : H.off(window, "resize.bs.modal")
        }
        ,
        r._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop((function() {
                document.body.classList.remove("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                H.trigger(t._element, "hidden.bs.modal")
            }
            ))
        }
        ,
        r._removeBackdrop = function() {
            this._backdrop.parentNode.removeChild(this._backdrop),
            this._backdrop = null
        }
        ,
        r._showBackdrop = function(t) {
            var e = this
              , n = this._element.classList.contains("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                n && this._backdrop.classList.add(n),
                document.body.appendChild(this._backdrop),
                H.on(this._element, "click.dismiss.bs.modal", (function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                }
                )),
                n && v(this._backdrop),
                this._backdrop.classList.add("show"),
                !n)
                    return void t();
                var i = u(this._backdrop);
                H.one(this._backdrop, "transitionend", t),
                h(this._backdrop, i)
            } else if (!this._isShown && this._backdrop) {
                this._backdrop.classList.remove("show");
                var o = function() {
                    e._removeBackdrop(),
                    t()
                };
                if (this._element.classList.contains("fade")) {
                    var r = u(this._backdrop);
                    H.one(this._backdrop, "transitionend", o),
                    h(this._backdrop, r)
                } else
                    o()
            } else
                t()
        }
        ,
        r._triggerBackdropTransition = function() {
            var t = this;
            if (!H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
                var n = u(this._dialog);
                H.off(this._element, "transitionend"),
                H.one(this._element, "transitionend", (function() {
                    t._element.classList.remove("modal-static"),
                    e || (H.one(t._element, "transitionend", (function() {
                        t._element.style.overflowY = ""
                    }
                    )),
                    h(t._element, n))
                }
                )),
                h(this._element, n),
                this._element.focus()
            }
        }
        ,
        r._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            (!this._isBodyOverflowing && t && !y || this._isBodyOverflowing && !t && y) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            (this._isBodyOverflowing && !t && !y || !this._isBodyOverflowing && t && y) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        r._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        r._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        r._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
                q.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(e) {
                    var n = e.style.paddingRight
                      , i = window.getComputedStyle(e)["padding-right"];
                    Y.setDataAttribute(e, "padding-right", n),
                    e.style.paddingRight = Number.parseFloat(i) + t._scrollbarWidth + "px"
                }
                )),
                q.find(".sticky-top").forEach((function(e) {
                    var n = e.style.marginRight
                      , i = window.getComputedStyle(e)["margin-right"];
                    Y.setDataAttribute(e, "margin-right", n),
                    e.style.marginRight = Number.parseFloat(i) - t._scrollbarWidth + "px"
                }
                ));
                var e = document.body.style.paddingRight
                  , n = window.getComputedStyle(document.body)["padding-right"];
                Y.setDataAttribute(document.body, "padding-right", e),
                document.body.style.paddingRight = Number.parseFloat(n) + this._scrollbarWidth + "px"
            }
            document.body.classList.add("modal-open")
        }
        ,
        r._resetScrollbar = function() {
            q.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(t) {
                var e = Y.getDataAttribute(t, "padding-right");
                void 0 !== e && (Y.removeDataAttribute(t, "padding-right"),
                t.style.paddingRight = e)
            }
            )),
            q.find(".sticky-top").forEach((function(t) {
                var e = Y.getDataAttribute(t, "margin-right");
                void 0 !== e && (Y.removeDataAttribute(t, "margin-right"),
                t.style.marginRight = e)
            }
            ));
            var t = Y.getDataAttribute(document.body, "padding-right");
            void 0 === t ? document.body.style.paddingRight = "" : (Y.removeDataAttribute(document.body, "padding-right"),
            document.body.style.paddingRight = t)
        }
        ,
        r._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure",
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        o.jQueryInterface = function(t, e) {
            return this.each((function() {
                var i = T(this, "bs.modal")
                  , r = n({}, ke, Y.getDataAttributes(this), "object" == typeof t && t ? t : {});
                if (i || (i = new o(this,r)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t](e)
                }
            }
            ))
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return ke
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.modal"
            }
        }]),
        o
    }(R);
    H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        var e = this
          , i = c(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(),
        H.one(i, "show.bs.modal", (function(t) {
            t.defaultPrevented || H.one(i, "hidden.bs.modal", (function() {
                g(e) && e.focus()
            }
            ))
        }
        ));
        var o = T(i, "bs.modal");
        if (!o) {
            var r = n({}, Y.getDataAttributes(i), Y.getDataAttributes(this));
            o = new Le(i,r)
        }
        o.show(this)
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn.modal;
            t.fn.modal = Le.jQueryInterface,
            t.fn.modal.Constructor = Le,
            t.fn.modal.noConflict = function() {
                return t.fn.modal = e,
                Le.jQueryInterface
            }
        }
    }
    ));
    var Ae = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi
      , De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , xe = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function Se(t, e, n) {
        var i;
        if (!t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        for (var o = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function(t, n) {
            var i, o = s[t], a = o.nodeName.toLowerCase();
            if (!r.includes(a))
                return o.parentNode.removeChild(o),
                "continue";
            var l = (i = []).concat.apply(i, o.attributes)
              , c = [].concat(e["*"] || [], e[a] || []);
            l.forEach((function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (e.includes(n))
                        return !Ae.has(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(De));
                    for (var i = e.filter((function(t) {
                        return t instanceof RegExp
                    }
                    )), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(t, c) || o.removeAttribute(t.nodeName)
            }
            ))
        }, l = 0, c = s.length; l < c; l++)
            a(l);
        return o.body.innerHTML
    }
    var je = "tooltip"
      , Ne = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Ie = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Pe = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "(null|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object)"
    }
      , Me = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: y ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: y ? "right" : "left"
    }
      , Be = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        container: !1,
        fallbackPlacements: null,
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: xe,
        popperConfig: null
    }
      , He = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Re = function(t) {
        function o(e, n) {
            var i;
            if (void 0 === de)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            return (i = t.call(this, e) || this)._isEnabled = !0,
            i._timeout = 0,
            i._hoverState = "",
            i._activeTrigger = {},
            i._popper = null,
            i.config = i._getConfig(n),
            i.tip = null,
            i._setListeners(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.enable = function() {
            this._isEnabled = !0
        }
        ,
        r.disable = function() {
            this._isEnabled = !1
        }
        ,
        r.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        r.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = T(t.delegateTarget, e);
                    n || (n = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
                    E(t.delegateTarget, e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (this.getTipElement().classList.contains("show"))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        r.dispose = function() {
            clearTimeout(this._timeout),
            H.off(this._element, this.constructor.EVENT_KEY),
            H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.tip && this.tip.parentNode.removeChild(this.tip),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.config = null,
            this.tip = null,
            t.prototype.dispose.call(this)
        }
        ,
        r.show = function() {
            var t = this;
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
                var e = H.trigger(this._element, this.constructor.Event.SHOW)
                  , n = function t(e) {
                    if (!document.documentElement.attachShadow)
                        return null;
                    if ("function" == typeof e.getRootNode) {
                        var n = e.getRootNode();
                        return n instanceof ShadowRoot ? n : null
                    }
                    return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                }(this._element)
                  , i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
                if (e.defaultPrevented || !i)
                    return;
                var o = this.getTipElement()
                  , r = s(this.constructor.NAME);
                o.setAttribute("id", r),
                this._element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && o.classList.add("fade");
                var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement
                  , l = this._getAttachment(a);
                this._addAttachmentClass(l);
                var c = this._getContainer();
                E(o, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(o),
                H.trigger(this._element, this.constructor.Event.INSERTED),
                this._popper = fe(this._element, o, this._getPopperConfig(l)),
                o.classList.add("show");
                var f, d, p = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
                if (p)
                    (f = o.classList).add.apply(f, p.split(" "));
                if ("ontouchstart"in document.documentElement)
                    (d = []).concat.apply(d, document.body.children).forEach((function(t) {
                        H.on(t, "mouseover", (function() {}
                        ))
                    }
                    ));
                var g = function() {
                    var e = t._hoverState;
                    t._hoverState = null,
                    H.trigger(t._element, t.constructor.Event.SHOWN),
                    "out" === e && t._leave(null, t)
                };
                if (this.tip.classList.contains("fade")) {
                    var m = u(this.tip);
                    H.one(this.tip, "transitionend", g),
                    h(this.tip, m)
                } else
                    g()
            }
        }
        ,
        r.hide = function() {
            var t = this;
            if (this._popper) {
                var e = this.getTipElement()
                  , n = function() {
                    "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e),
                    t._cleanTipClass(),
                    t._element.removeAttribute("aria-describedby"),
                    H.trigger(t._element, t.constructor.Event.HIDDEN),
                    t._popper && (t._popper.destroy(),
                    t._popper = null)
                };
                if (!H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                    var i;
                    if (e.classList.remove("show"),
                    "ontouchstart"in document.documentElement)
                        (i = []).concat.apply(i, document.body.children).forEach((function(t) {
                            return H.off(t, "mouseover", m)
                        }
                        ));
                    if (this._activeTrigger.click = !1,
                    this._activeTrigger.focus = !1,
                    this._activeTrigger.hover = !1,
                    this.tip.classList.contains("fade")) {
                        var o = u(e);
                        H.one(e, "transitionend", n),
                        h(e, o)
                    } else
                        n();
                    this._hoverState = ""
                }
            }
        }
        ,
        r.update = function() {
            null !== this._popper && this._popper.update()
        }
        ,
        r.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        r.getTipElement = function() {
            if (this.tip)
                return this.tip;
            var t = document.createElement("div");
            return t.innerHTML = this.config.template,
            this.tip = t.children[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(q.findOne(".tooltip-inner", t), this.getTitle()),
            t.classList.remove("fade", "show")
        }
        ,
        r.setElementContent = function(t, e) {
            if (null !== t)
                return "object" == typeof e && d(e) ? (e.jquery && (e = e[0]),
                void (this.config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        ,
        r.getTitle = function() {
            var t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title),
            t
        }
        ,
        r.updateAttachment = function(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        ,
        r._getPopperConfig = function(t) {
            var e = this
              , i = {
                name: "flip",
                options: {
                    altBoundary: !0
                }
            };
            return this.config.fallbackPlacements && (i.options.fallbackPlacements = this.config.fallbackPlacements),
            n({}, {
                placement: t,
                modifiers: [i, {
                    name: "preventOverflow",
                    options: {
                        rootBoundary: this.config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: "." + this.constructor.NAME + "-arrow"
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }],
                onFirstUpdate: function(t) {
                    t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
                }
            }, this.config.popperConfig)
        }
        ,
        r._addAttachmentClass = function(t) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
        }
        ,
        r._getContainer = function() {
            return !1 === this.config.container ? document.body : d(this.config.container) ? this.config.container : q.findOne(this.config.container)
        }
        ,
        r._getAttachment = function(t) {
            return Me[t.toUpperCase()]
        }
        ,
        r._setListeners = function() {
            var t = this;
            this.config.trigger.split(" ").forEach((function(e) {
                if ("click" === e)
                    H.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }
                    ));
                else if ("manual" !== e) {
                    var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                      , i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    H.on(t._element, n, t.config.selector, (function(e) {
                        return t._enter(e)
                    }
                    )),
                    H.on(t._element, i, t.config.selector, (function(e) {
                        return t._leave(e)
                    }
                    ))
                }
            }
            )),
            this._hideModalHandler = function() {
                t._element && t.hide()
            }
            ,
            H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = n({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        r._fixTitle = function() {
            var t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        ,
        r._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            E(t.delegateTarget, n, e)),
            t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout),
            e._hoverState = "show",
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                "show" === e._hoverState && e.show()
            }
            ), e.config.delay.show) : e.show())
        }
        ,
        r._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            E(t.delegateTarget, n, e)),
            t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = "out",
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                "out" === e._hoverState && e.hide()
            }
            ), e.config.delay.hide) : e.hide())
        }
        ,
        r._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        r._getConfig = function(t) {
            var e = Y.getDataAttributes(this._element);
            return Object.keys(e).forEach((function(t) {
                Ie.has(t) && delete e[t]
            }
            )),
            t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]),
            "number" == typeof (t = n({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            p(je, t, this.constructor.DefaultType),
            t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        ,
        r._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        r._cleanTipClass = function() {
            var t = this.getTipElement()
              , e = t.getAttribute("class").match(Ne);
            null !== e && e.length > 0 && e.map((function(t) {
                return t.trim()
            }
            )).forEach((function(e) {
                return t.classList.remove(e)
            }
            ))
        }
        ,
        r._handlePopperPlacementChange = function(t) {
            var e = t.state;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.tooltip")
                  , n = "object" == typeof t && t;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this,n)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return Be
            }
        }, {
            key: "NAME",
            get: function() {
                return je
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip"
            }
        }, {
            key: "Event",
            get: function() {
                return He
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Pe
            }
        }]),
        o
    }(R);
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[je];
            t.fn[je] = Re.jQueryInterface,
            t.fn[je].Constructor = Re,
            t.fn[je].noConflict = function() {
                return t.fn[je] = e,
                Re.jQueryInterface
            }
        }
    }
    ));
    var We = "popover"
      , Ke = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Qe = n({}, Re.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Ue = n({}, Re.DefaultType, {
        content: "(string|element|function)"
    })
      , Fe = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , Ye = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        i(n, t);
        var o = n.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        o.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(q.findOne(".popover-header", t), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)),
            this.setElementContent(q.findOne(".popover-body", t), e),
            t.classList.remove("fade", "show")
        }
        ,
        o._addAttachmentClass = function(t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }
        ,
        o._getContent = function() {
            return this._element.getAttribute("data-bs-content") || this.config.content
        }
        ,
        o._cleanTipClass = function() {
            var t = this.getTipElement()
              , e = t.getAttribute("class").match(Ke);
            null !== e && e.length > 0 && e.map((function(t) {
                return t.trim()
            }
            )).forEach((function(e) {
                return t.classList.remove(e)
            }
            ))
        }
        ,
        n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.popover")
                  , i = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new n(this,i),
                E(this, "bs.popover", e)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(n, null, [{
            key: "Default",
            get: function() {
                return Qe
            }
        }, {
            key: "NAME",
            get: function() {
                return We
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover"
            }
        }, {
            key: "Event",
            get: function() {
                return Fe
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ue
            }
        }]),
        n
    }(Re);
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[We];
            t.fn[We] = Ye.jQueryInterface,
            t.fn[We].Constructor = Ye,
            t.fn[We].noConflict = function() {
                return t.fn[We] = e,
                Ye.jQueryInterface
            }
        }
    }
    ));
    var qe = "scrollspy"
      , ze = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , Ve = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , Xe = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e,
            i._config = i._getConfig(n),
            i._selector = i._config.target + " .nav-link, " + i._config.target + " .list-group-item, " + i._config.target + " .dropdown-item",
            i._offsets = [],
            i._targets = [],
            i._activeTarget = null,
            i._scrollHeight = 0,
            H.on(i._scrollElement, "scroll.bs.scrollspy", (function(t) {
                return i._process(t)
            }
            )),
            i.refresh(),
            i._process(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? "offset" : "position"
              , n = "auto" === this._config.method ? e : this._config.method
              , i = "position" === n ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            q.find(this._selector).map((function(t) {
                var e = l(t)
                  , o = e ? q.findOne(e) : null;
                if (o) {
                    var r = o.getBoundingClientRect();
                    if (r.width || r.height)
                        return [Y[n](o).top + i, e]
                }
                return null
            }
            )).filter((function(t) {
                return t
            }
            )).sort((function(t, e) {
                return t[0] - e[0]
            }
            )).forEach((function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            }
            ))
        }
        ,
        r.dispose = function() {
            t.prototype.dispose.call(this),
            H.off(this._scrollElement, ".bs.scrollspy"),
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        r._getConfig = function(t) {
            if ("string" != typeof (t = n({}, ze, "object" == typeof t && t ? t : {})).target && d(t.target)) {
                var e = t.target.id;
                e || (e = s(qe),
                t.target.id = e),
                t.target = "#" + e
            }
            return p(qe, t, Ve),
            t
        }
        ,
        r._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        r._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        r._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        r._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        r._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",").map((function(e) {
                return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
            }
            ))
              , n = q.findOne(e.join(","));
            n.classList.contains("dropdown-item") ? (q.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"),
            n.classList.add("active")) : (n.classList.add("active"),
            q.parents(n, ".nav, .list-group").forEach((function(t) {
                q.prev(t, ".nav-link, .list-group-item").forEach((function(t) {
                    return t.classList.add("active")
                }
                )),
                q.prev(t, ".nav-item").forEach((function(t) {
                    q.children(t, ".nav-link").forEach((function(t) {
                        return t.classList.add("active")
                    }
                    ))
                }
                ))
            }
            ))),
            H.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        ,
        r._clear = function() {
            q.find(this._selector).filter((function(t) {
                return t.classList.contains("active")
            }
            )).forEach((function(t) {
                return t.classList.remove("active")
            }
            ))
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.scrollspy");
                if (e || (e = new o(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return ze
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.scrollspy"
            }
        }]),
        o
    }(R);
    H.on(window, "load.bs.scrollspy.data-api", (function() {
        q.find('[data-bs-spy="scroll"]').forEach((function(t) {
            return new Xe(t,Y.getDataAttributes(t))
        }
        ))
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[qe];
            t.fn[qe] = Xe.jQueryInterface,
            t.fn[qe].Constructor = Xe,
            t.fn[qe].noConflict = function() {
                return t.fn[qe] = e,
                Xe.jQueryInterface
            }
        }
    }
    ));
    var $e = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        i(n, t);
        var o = n.prototype;
        return o.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
                var e, n = c(this._element), i = this._element.closest(".nav, .list-group");
                if (i) {
                    var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                    e = (e = q.find(o, i))[e.length - 1]
                }
                var r = null;
                if (e && (r = H.trigger(e, "hide.bs.tab", {
                    relatedTarget: this._element
                })),
                !(H.trigger(this._element, "show.bs.tab", {
                    relatedTarget: e
                }).defaultPrevented || null !== r && r.defaultPrevented)) {
                    this._activate(this._element, i);
                    var s = function() {
                        H.trigger(e, "hidden.bs.tab", {
                            relatedTarget: t._element
                        }),
                        H.trigger(t._element, "shown.bs.tab", {
                            relatedTarget: e
                        })
                    };
                    n ? this._activate(n, n.parentNode, s) : s()
                }
            }
        }
        ,
        o._activate = function(t, e, n) {
            var i = this
              , o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? q.children(e, ".active") : q.find(":scope > li > .active", e))[0]
              , r = n && o && o.classList.contains("fade")
              , s = function() {
                return i._transitionComplete(t, o, n)
            };
            if (o && r) {
                var a = u(o);
                o.classList.remove("show"),
                H.one(o, "transitionend", s),
                h(o, a)
            } else
                s()
        }
        ,
        o._transitionComplete = function(t, e, n) {
            if (e) {
                e.classList.remove("active");
                var i = q.findOne(":scope > .dropdown-menu .active", e.parentNode);
                i && i.classList.remove("active"),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            (t.classList.add("active"),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            v(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && t.parentNode.classList.contains("dropdown-menu")) && (t.closest(".dropdown") && q.find(".dropdown-toggle").forEach((function(t) {
                return t.classList.add("active")
            }
            )),
            t.setAttribute("aria-expanded", !0));
            n && n()
        }
        ,
        n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.tab") || new n(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.tab"
            }
        }]),
        n
    }(R);
    H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        t.preventDefault(),
        (T(this, "bs.tab") || new $e(this)).show()
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn.tab;
            t.fn.tab = $e.jQueryInterface,
            t.fn.tab.Constructor = $e,
            t.fn.tab.noConflict = function() {
                return t.fn.tab = e,
                $e.jQueryInterface
            }
        }
    }
    ));
    var Ge = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Ze = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    }
      , Je = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._config = i._getConfig(n),
            i._timeout = null,
            i._setListeners(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.show = function() {
            var t = this;
            if (!H.trigger(this._element, "show.bs.toast").defaultPrevented) {
                this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
                var e = function() {
                    t._element.classList.remove("showing"),
                    t._element.classList.add("show"),
                    H.trigger(t._element, "shown.bs.toast"),
                    t._config.autohide && (t._timeout = setTimeout((function() {
                        t.hide()
                    }
                    ), t._config.delay))
                };
                if (this._element.classList.remove("hide"),
                v(this._element),
                this._element.classList.add("showing"),
                this._config.animation) {
                    var n = u(this._element);
                    H.one(this._element, "transitionend", e),
                    h(this._element, n)
                } else
                    e()
            }
        }
        ,
        r.hide = function() {
            var t = this;
            if (this._element.classList.contains("show") && !H.trigger(this._element, "hide.bs.toast").defaultPrevented) {
                var e = function() {
                    t._element.classList.add("hide"),
                    H.trigger(t._element, "hidden.bs.toast")
                };
                if (this._element.classList.remove("show"),
                this._config.animation) {
                    var n = u(this._element);
                    H.one(this._element, "transitionend", e),
                    h(this._element, n)
                } else
                    e()
            }
        }
        ,
        r.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains("show") && this._element.classList.remove("show"),
            H.off(this._element, "click.dismiss.bs.toast"),
            t.prototype.dispose.call(this),
            this._config = null
        }
        ,
        r._getConfig = function(t) {
            return t = n({}, Ze, Y.getDataAttributes(this._element), "object" == typeof t && t ? t : {}),
            p("toast", t, this.constructor.DefaultType),
            t
        }
        ,
        r._setListeners = function() {
            var t = this;
            H.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function() {
                return t.hide()
            }
            ))
        }
        ,
        r._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.toast");
                if (e || (e = new o(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t](this)
                }
            }
            ))
        }
        ,
        e(o, null, [{
            key: "DefaultType",
            get: function() {
                return Ge
            }
        }, {
            key: "Default",
            get: function() {
                return Ze
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.toast"
            }
        }]),
        o
    }(R);
    return b((function() {
        var t = _();
        if (t) {
            var e = t.fn.toast;
            t.fn.toast = Je.jQueryInterface,
            t.fn.toast.Constructor = Je,
            t.fn.toast.noConflict = function() {
                return t.fn.toast = e,
                Je.jQueryInterface
            }
        }
    }
    )),
    {
        Alert: K,
        Button: Q,
        Carousel: Z,
        Collapse: nt,
        Dropdown: Te,
        Modal: Le,
        Popover: Ye,
        ScrollSpy: Xe,
        Tab: $e,
        Toast: Je,
        Tooltip: Re
    }
}
));
//# sourceMappingURL=bootstrap.bundle.min.js.map
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o])
                return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t),
            i.loaded = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "dist/",
        t(0)
    }([function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
          , r = n(1)
          , a = (o(r),
        n(6))
          , u = o(a)
          , c = n(7)
          , f = o(c)
          , s = n(8)
          , d = o(s)
          , l = n(9)
          , p = o(l)
          , m = n(10)
          , b = o(m)
          , v = n(11)
          , y = o(v)
          , g = n(14)
          , h = o(g)
          , w = []
          , k = !1
          , x = document.all && !window.atob
          , j = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1
        }
          , O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (e && (k = !0),
            k)
                return w = (0,
                y.default)(w, j),
                (0,
                b.default)(w, j.once),
                w
        }
          , _ = function() {
            w = (0,
            h.default)(),
            O()
        }
          , S = function() {
            w.forEach(function(e, t) {
                e.node.removeAttribute("data-aos"),
                e.node.removeAttribute("data-aos-easing"),
                e.node.removeAttribute("data-aos-duration"),
                e.node.removeAttribute("data-aos-delay")
            })
        }
          , z = function(e) {
            return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
        }
          , A = function(e) {
            return j = i(j, e),
            w = (0,
            h.default)(),
            z(j.disable) || x ? S() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing),
            document.querySelector("body").setAttribute("data-aos-duration", j.duration),
            document.querySelector("body").setAttribute("data-aos-delay", j.delay),
            "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function() {
                O(!0)
            }) : document.addEventListener(j.startEvent, function() {
                O(!0)
            }),
            window.addEventListener("resize", (0,
            f.default)(O, j.debounceDelay, !0)),
            window.addEventListener("orientationchange", (0,
            f.default)(O, j.debounceDelay, !0)),
            window.addEventListener("scroll", (0,
            u.default)(function() {
                (0,
                b.default)(w, j.once)
            }, j.throttleDelay)),
            j.disableMutationObserver || (0,
            d.default)("[data-aos]", _),
            w)
        };
        e.exports = {
            init: A,
            refresh: O,
            refreshHard: _
        }
    }
    , function(e, t) {}
    , , , , , function(e, t) {
        (function(t) {
            "use strict";
            function n(e, t, n) {
                function o(t) {
                    var n = b
                      , o = v;
                    return b = v = void 0,
                    k = t,
                    g = e.apply(o, n)
                }
                function r(e) {
                    return k = e,
                    h = setTimeout(s, t),
                    _ ? o(e) : g
                }
                function a(e) {
                    var n = e - w
                      , o = e - k
                      , i = t - n;
                    return S ? j(i, y - o) : i
                }
                function c(e) {
                    var n = e - w
                      , o = e - k;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }
                function s() {
                    var e = O();
                    return c(e) ? d(e) : void (h = setTimeout(s, a(e)))
                }
                function d(e) {
                    return h = void 0,
                    z && b ? o(e) : (b = v = void 0,
                    g)
                }
                function l() {
                    void 0 !== h && clearTimeout(h),
                    k = 0,
                    b = w = v = h = void 0
                }
                function p() {
                    return void 0 === h ? g : d(O())
                }
                function m() {
                    var e = O()
                      , n = c(e);
                    if (b = arguments,
                    v = this,
                    w = e,
                    n) {
                        if (void 0 === h)
                            return r(w);
                        if (S)
                            return h = setTimeout(s, t),
                            o(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)),
                    g
                }
                var b, v, y, g, h, w, k = 0, _ = !1, S = !1, z = !0;
                if ("function" != typeof e)
                    throw new TypeError(f);
                return t = u(t) || 0,
                i(n) && (_ = !!n.leading,
                S = "maxWait"in n,
                y = S ? x(u(n.maxWait) || 0, t) : y,
                z = "trailing"in n ? !!n.trailing : z),
                m.cancel = l,
                m.flush = p,
                m
            }
            function o(e, t, o) {
                var r = !0
                  , a = !0;
                if ("function" != typeof e)
                    throw new TypeError(f);
                return i(o) && (r = "leading"in o ? !!o.leading : r,
                a = "trailing"in o ? !!o.trailing : a),
                n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }
            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }
            function r(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
            }
            function a(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
            }
            function u(e) {
                if ("number" == typeof e)
                    return e;
                if (a(e))
                    return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , f = "Expected a function"
              , s = NaN
              , d = "[object Symbol]"
              , l = /^\s+|\s+$/g
              , p = /^[-+]0x[0-9a-f]+$/i
              , m = /^0b[01]+$/i
              , b = /^0o[0-7]+$/i
              , v = parseInt
              , y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t
              , g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self
              , h = y || g || Function("return this")()
              , w = Object.prototype
              , k = w.toString
              , x = Math.max
              , j = Math.min
              , O = function() {
                return h.Date.now()
            };
            e.exports = o
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t) {
        (function(t) {
            "use strict";
            function n(e, t, n) {
                function i(t) {
                    var n = b
                      , o = v;
                    return b = v = void 0,
                    O = t,
                    g = e.apply(o, n)
                }
                function r(e) {
                    return O = e,
                    h = setTimeout(s, t),
                    _ ? i(e) : g
                }
                function u(e) {
                    var n = e - w
                      , o = e - O
                      , i = t - n;
                    return S ? x(i, y - o) : i
                }
                function f(e) {
                    var n = e - w
                      , o = e - O;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }
                function s() {
                    var e = j();
                    return f(e) ? d(e) : void (h = setTimeout(s, u(e)))
                }
                function d(e) {
                    return h = void 0,
                    z && b ? i(e) : (b = v = void 0,
                    g)
                }
                function l() {
                    void 0 !== h && clearTimeout(h),
                    O = 0,
                    b = w = v = h = void 0
                }
                function p() {
                    return void 0 === h ? g : d(j())
                }
                function m() {
                    var e = j()
                      , n = f(e);
                    if (b = arguments,
                    v = this,
                    w = e,
                    n) {
                        if (void 0 === h)
                            return r(w);
                        if (S)
                            return h = setTimeout(s, t),
                            i(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)),
                    g
                }
                var b, v, y, g, h, w, O = 0, _ = !1, S = !1, z = !0;
                if ("function" != typeof e)
                    throw new TypeError(c);
                return t = a(t) || 0,
                o(n) && (_ = !!n.leading,
                S = "maxWait"in n,
                y = S ? k(a(n.maxWait) || 0, t) : y,
                z = "trailing"in n ? !!n.trailing : z),
                m.cancel = l,
                m.flush = p,
                m
            }
            function o(e) {
                var t = "undefined" == typeof e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }
            function i(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
            }
            function r(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
            }
            function a(e) {
                if ("number" == typeof e)
                    return e;
                if (r(e))
                    return f;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , c = "Expected a function"
              , f = NaN
              , s = "[object Symbol]"
              , d = /^\s+|\s+$/g
              , l = /^[-+]0x[0-9a-f]+$/i
              , p = /^0b[01]+$/i
              , m = /^0o[0-7]+$/i
              , b = parseInt
              , v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t
              , y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self
              , g = v || y || Function("return this")()
              , h = Object.prototype
              , w = h.toString
              , k = Math.max
              , x = Math.min
              , j = function() {
                return g.Date.now()
            };
            e.exports = n
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t) {
        "use strict";
        function n(e, t) {
            var n = new r(o);
            a = t,
            n.observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        }
        function o(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes)
                  , n = Array.prototype.slice.call(e.removedNodes)
                  , o = t.concat(n).filter(function(e) {
                    return e.hasAttribute && e.hasAttribute("data-aos")
                }).length;
                o && a()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window.document
          , r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
          , a = function() {};
        t.default = n
    }
    , function(e, t) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
          , a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
          , c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , f = function() {
            function e() {
                n(this, e)
            }
            return i(e, [{
                key: "phone",
                value: function() {
                    var e = o();
                    return !(!r.test(e) && !a.test(e.substr(0, 4)))
                }
            }, {
                key: "mobile",
                value: function() {
                    var e = o();
                    return !(!u.test(e) && !c.test(e.substr(0, 4)))
                }
            }, {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone()
                }
            }]),
            e
        }();
        t.default = new f
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, n) {
            var o = e.node.getAttribute("data-aos-once");
            t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
        }
          , o = function(e, t) {
            var o = window.pageYOffset
              , i = window.innerHeight;
            e.forEach(function(e, r) {
                n(e, i + o, t)
            })
        };
        t.default = o
    }
    , function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12)
          , r = o(i)
          , a = function(e, t) {
            return e.forEach(function(e, n) {
                e.node.classList.add("aos-init"),
                e.position = (0,
                r.default)(e.node, t.offset)
            }),
            e
        };
        t.default = a
    }
    , function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(13)
          , r = o(i)
          , a = function(e, t) {
            var n = 0
              , o = 0
              , i = window.innerHeight
              , a = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
            };
            switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]),
            n = (0,
            r.default)(e).top,
            a.anchorPlacement) {
            case "top-bottom":
                break;
            case "center-bottom":
                n += e.offsetHeight / 2;
                break;
            case "bottom-bottom":
                n += e.offsetHeight;
                break;
            case "top-center":
                n += i / 2;
                break;
            case "bottom-center":
                n += i / 2 + e.offsetHeight;
                break;
            case "center-center":
                n += i / 2 + e.offsetHeight / 2;
                break;
            case "top-top":
                n += i;
                break;
            case "bottom-top":
                n += e.offsetHeight + i;
                break;
            case "center-top":
                n += e.offsetHeight / 2 + i
            }
            return a.anchorPlacement || a.offset || isNaN(t) || (o = t),
            n + o
        };
        t.default = a
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
                n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
                e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        };
        t.default = n
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"),
            Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        };
        t.default = n
    }
    ])
});
