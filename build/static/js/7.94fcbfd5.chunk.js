(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [7], {
        1074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return pe
            }));
            var c, a, r, i, s, o, u, l, j, b, d, O, p, f, x = n(18),
                m = n(0),
                h = n(8),
                g = n(12),
                v = n(54),
                k = n(246),
                w = n(2),
                L = n.n(w),
                S = n(11),
                y = n(22),
                T = n(27),
                z = n(249),
                Q = n(15),
                I = n(13),
                C = n.n(I),
                E = n(58),
                N = n(24),
                R = n(92),
                H = n(245),
                B = n(151),
                P = function() {
                    var e = Object(m.useState)([]),
                        t = Object(y.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        a = Object(T.c)().account,
                        r = Object(B.a)().fastRefresh;
                    return Object(m.useEffect)((function() {
                        a && function() {
                            var e = Object(S.a)(L.a.mark((function e() {
                                var t, n, r;
                                return L.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = H.b.map((function(e) {
                                                return {
                                                    address: Object(N.h)(),
                                                    name: "pendingCake",
                                                    params: [e.pid, a]
                                                }
                                            })), e.next = 3, Object(E.a)(R, t);
                                        case 3:
                                            n = e.sent, r = H.b.map((function(e, t) {
                                                return Object(Q.a)(Object(Q.a)({}, e), {}, {
                                                    balance: new C.a(n[t])
                                                })
                                            })), c(r);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()()
                    }), [a, r]), n
                },
                U = n(242),
                A = function() {
                    var e = Object(m.useState)([]),
                        t = Object(y.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        a = Object(T.c)().account,
                        r = Object(B.a)().fastRefresh;
                    return Object(m.useEffect)((function() {
                        a && function() {
                            var e = Object(S.a)(L.a.mark((function e() {
                                var t, n;
                                return L.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = H.b.map((function(e) {
                                                return {
                                                    address: Object(N.h)(),
                                                    name: "pendingCake",
                                                    params: [e.pid, a]
                                                }
                                            })), e.next = 3, Object(E.a)(R, t);
                                        case 3:
                                            n = e.sent, c(n);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()()
                    }), [a, r]), n
                },
                F = n(45),
                V = n(257),
                D = n(5),
                J = function(e) {
                    var t = e.value,
                        n = e.decimals,
                        c = e.fontSize,
                        a = void 0 === c ? "40px" : c,
                        r = e.lineHeight,
                        i = void 0 === r ? "1" : r,
                        s = e.prefix,
                        o = void 0 === s ? "" : s,
                        u = e.bold,
                        l = void 0 === u || u,
                        j = e.color,
                        b = void 0 === j ? "text" : j,
                        d = Object(V.useCountUp)({
                            start: 0,
                            end: t,
                            duration: 1,
                            separator: ",",
                            decimals: void 0 !== n ? n : t < 0 ? 4 : t > 1e5 ? 0 : 3
                        }),
                        O = d.countUp,
                        p = d.update,
                        f = Object(m.useRef)(p);
                    return Object(m.useEffect)((function() {
                        f.current(t)
                    }), [t, f]), Object(D.jsxs)(g.L, {
                        bold: l,
                        fontSize: a,
                        style: {
                            lineHeight: i
                        },
                        color: b,
                        children: [o, O]
                    })
                },
                _ = h.e.div(c || (c = Object(x.a)(["\n  margin-bottom: 24px;\n}\n"]))),
                M = function() {
                    var e = Object(v.a)(),
                        t = Object(T.c)().account,
                        n = A().reduce((function(e, t) {
                            return e + new C.a(t).div(new C.a(10).pow(18)).toNumber()
                        }), 0);
                    new C.a(n).multipliedBy(Object(F.k)()).toNumber();
                    return t ? Object(D.jsx)(_, {
                        children: Object(D.jsx)(J, {
                            value: n,
                            lineHeight: "1.5"
                        })
                    }) : Object(D.jsx)(g.L, {
                        color: "textDisabled",
                        style: {
                            lineHeight: "76px"
                        },
                        children: e(298, "Locked")
                    })
                },
                q = n(866),
                W = n(72),
                K = function() {
                    var e = Object(v.a)(),
                        t = Object(q.a)(Object(N.d)());
                    new I.BigNumber(Object(W.a)(t)).multipliedBy(Object(F.k)()).toNumber();
                    return Object(T.c)().account ? Object(D.jsx)(D.Fragment, {
                        children: Object(D.jsx)(J, {
                            value: Object(W.a)(t),
                            decimals: 4,
                            fontSize: "24px",
                            lineHeight: "36px"
                        })
                    }) : Object(D.jsx)(g.L, {
                        color: "textDisabled",
                        style: {
                            lineHeight: "54px"
                        },
                        children: e(298, "Locked")
                    })
                },
                X = Object(h.e)(g.k)(a || (a = Object(x.a)(["\n  background-image: url('/images/cake-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),
                $ = h.e.div(r || (r = Object(x.a)(["\n  margin-bottom: 16px;\n"]))),
                G = h.e.img(i || (i = Object(x.a)(["\n  margin-bottom: 16px;\n"]))),
                Y = h.e.div(s || (s = Object(x.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                Z = h.e.div(o || (o = Object(x.a)(["\n  margin-top: 24px;\n"]))),
                ee = function() {
                    var e = Object(m.useState)(!1),
                        t = Object(y.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        a = Object(T.c)().account,
                        r = Object(v.a)(),
                        i = P().filter((function(e) {
                            return e.balance.toNumber() > 0
                        })),
                        s = Object(z.a)(i.map((function(e) {
                            return e.pid
                        }))).onReward,
                        o = Object(m.useCallback)(Object(S.a)(L.a.mark((function e() {
                            return L.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c(!0), e.prev = 1, e.next = 4, s();
                                    case 4:
                                        e.next = 8;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1);
                                    case 8:
                                        return e.prev = 8, c(!1), e.finish(8);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6, 8, 11]
                            ])
                        }))), [s]);
                    return Object(D.jsx)(X, {
                        children: Object(D.jsxs)(g.l, {
                            children: [Object(D.jsx)(g.t, {
                                size: "xl",
                                mb: "24px",
                                children: r(542, "Farms & Staking")
                            }), Object(D.jsx)(G, {
                                src: "/images/cake.svg",
                                alt: "cake logo",
                                width: 64,
                                height: 64
                            }), Object(D.jsxs)($, {
                                children: [Object(D.jsxs)(Y, {
                                    children: [r(544, "MRA to Harvest"), ":"]
                                }), Object(D.jsx)(M, {})]
                            }), Object(D.jsxs)($, {
                                children: [Object(D.jsxs)(Y, {
                                    children: [r(546, "MRA in Wallet"), ":"]
                                }), Object(D.jsx)(K, {})]
                            }), Object(D.jsx)(Z, {
                                children: a ? Object(D.jsx)(g.g, {
                                    id: "harvest-all",
                                    disabled: i.length <= 0 || n,
                                    onClick: o,
                                    width: "100%",
                                    children: n ? r(548, "Collecting MRA") : r(532, "Harvest all (".concat(i.length, ")"))
                                }) : Object(D.jsx)(U.a, {
                                    width: "100%"
                                })
                            })]
                        })
                    })
                },
                te = Object(h.e)(g.k)(u || (u = Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),
                ne = h.e.div(l || (l = Object(x.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),
                ce = function() {
                    var e = Object(v.a)(),
                        t = Object(q.c)(),
                        n = Object(W.a)(Object(q.b)(Object(N.d)())),
                        c = t ? Object(W.a)(t) - n : 0;
                    return Object(D.jsx)(te, {
                        children: Object(D.jsxs)(g.l, {
                            children: [Object(D.jsx)(g.t, {
                                size: "xl",
                                mb: "24px",
                                children: e(534, "MRA Stats")
                            }), Object(D.jsxs)(ne, {
                                children: [Object(D.jsx)(g.L, {
                                    fontSize: "14px",
                                    children: e(536, "Total MRA Supply")
                                }), c && Object(D.jsx)(J, {
                                    fontSize: "14px",
                                    value: c
                                })]
                            }), Object(D.jsxs)(ne, {
                                children: [Object(D.jsx)(g.L, {
                                    fontSize: "14px",
                                    children: e(538, "Total MRA Burned")
                                }), Object(D.jsx)(J, {
                                    fontSize: "14px",
                                    decimals: 0,
                                    value: n
                                })]
                            }), Object(D.jsxs)(ne, {
                                children: [Object(D.jsx)(g.L, {
                                    fontSize: "14px",
                                    children: e(540, "New MRA/block")
                                }), Object(D.jsx)(J, {
                                    fontSize: "14px",
                                    decimals: 0,
                                    value: 1
                                })]
                            })]
                        })
                    })
                },
                ae = Object(h.e)(g.k)(j || (j = Object(x.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),
                re = function() {
                    var e = Object(v.a)(),
                        t = function() {
                            var e = Object(m.useState)(null),
                                t = Object(y.a)(e, 2),
                                n = t[0],
                                c = t[1];
                            return Object(m.useEffect)((function() {
                                ! function() {
                                    var e = Object(S.a)(L.a.mark((function e() {
                                        var t, n;
                                        return L.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, fetch("".concat("https://api.pancakeswap.com/api/v1", "/stat"));
                                                case 3:
                                                    return t = e.sent, e.next = 6, t.json();
                                                case 6:
                                                    n = e.sent, c(n), e.next = 13;
                                                    break;
                                                case 10:
                                                    e.prev = 10, e.t0 = e.catch(0), console.error("Unable to fetch data:", e.t0);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 10]
                                        ])
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }()()
                            }), [c]), n
                        }(),
                        n = t ? t.total_value_locked_all.toLocaleString("en-US", {
                            maximumFractionDigits: 0
                        }) : null;
                    return Object(D.jsx)(ae, {
                        children: Object(D.jsxs)(g.l, {
                            children: [Object(D.jsx)(g.t, {
                                size: "lg",
                                mb: "24px",
                                children: e(762, "Total Value Locked (TVL)")
                            }), t ? Object(D.jsxs)(D.Fragment, {
                                children: [Object(D.jsx)(g.t, {
                                    size: "xl",
                                    children: "$".concat(n)
                                }), Object(D.jsx)(g.L, {
                                    color: "textSubtle",
                                    children: e(764, "Across all internal and external LPs and Syrup Pools")
                                })]
                            }) : Object(D.jsx)(D.Fragment, {
                                children: Object(D.jsx)(g.J, {
                                    height: 66
                                })
                            })]
                        })
                    })
                },
                ie = n(85),
                se = n(46),
                oe = n(150),
                ue = Object(h.e)(g.k)(b || (b = Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  ", " {\n    margin: 0;\n    max-width: none;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                le = Object(h.e)(g.t).attrs({
                    size: "xl"
                })(d || (d = Object(x.a)(["\n  line-height: 44px;\n"]))),
                je = function() {
                    var e = Object(v.a)(),
                        t = Object(F.d)(),
                        n = Object(F.j)(),
                        c = Object(m.useRef)(Number.MIN_VALUE),
                        a = function() {
                            var e = t.filter((function(e) {
                                return 0 !== e.pid && "0X" !== e.multiplier
                            }));
                            return r(e), (100 * c.current).toLocaleString("en-US").slice(0, -1)
                        },
                        r = Object(m.useCallback)((function(e) {
                            var a, r = new C.a((null === (a = t.find((function(e) {
                                return e.pid === oe.e
                            }))) || void 0 === a ? void 0 : a.tokenPriceVsQuote) || 0);
                            e.map((function(e) {
                                if (!e.tokenAmount || !e.lpTotalInQuoteToken || !e.lpTotalInQuoteToken) return e;
                                var t = oe.d.times(e.poolWeight),
                                    a = t.times(oe.c),
                                    i = r.times(a).div(e.lpTotalInQuoteToken);
                                if (e.quoteTokenSymbol === se.b.BUSD) i = r.times(a).div(e.lpTotalInQuoteToken).times(n);
                                else if (e.quoteTokenSymbol === se.b.CAKE) i = a.div(e.lpTotalInQuoteToken);
                                else if (e.dual) {
                                    var s = e && r.times(t).times(oe.c).div(e.lpTotalInQuoteToken),
                                        o = e.tokenPriceVsQuote && new C.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(oe.c).div(e.lpTotalInQuoteToken);
                                    i = s && o && s.plus(o)
                                }
                                return c.current < i.toNumber() && (c.current = i.toNumber()), i
                            }))
                        }), [n, t]);
                    return Object(D.jsx)(ue, {
                        children: Object(D.jsxs)(g.l, {
                            children: [Object(D.jsx)(g.t, {
                                color: "contrast",
                                size: "lg",
                                children: "Earn up to"
                            }), Object(D.jsx)(le, {
                                color: "#7645d9",
                                children: a() ? "".concat(a(), "% ").concat(e(736, "APR")) : Object(D.jsx)(g.J, {
                                    animation: "pulse",
                                    variant: "rect",
                                    height: "44px"
                                })
                            }), Object(D.jsxs)(g.s, {
                                justifyContent: "space-between",
                                children: [Object(D.jsx)(g.t, {
                                    color: "contrast",
                                    size: "lg",
                                    children: "in Farms"
                                }), Object(D.jsx)(ie.b, {
                                    exact: !0,
                                    activeClassName: "active",
                                    to: "/farms",
                                    id: "farm-apy-cta",
                                    children: Object(D.jsx)(g.c, {
                                        mt: 30,
                                        color: "primary"
                                    })
                                })]
                            })]
                        })
                    })
                },
                be = h.e.div(O || (O = Object(x.a)(["\n  align-items: center;\n  background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n  background-repeat: no-repeat;\n  background-position: left top, right top;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 136px;\n  text-align: center;\n\n  ", " {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                de = Object(h.e)(g.d)(p || (p = Object(x.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                Oe = Object(h.e)(g.d)(f || (f = Object(x.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                pe = function() {
                    var e = Object(v.a)();
                    return Object(D.jsxs)(k.a, {
                        children: [Object(D.jsxs)(be, {
                            children: [Object(D.jsx)(g.t, {
                                as: "h1",
                                size: "xl",
                                mb: "24px",
                                color: "secondary",
                                children: e(576, "HemeraSwap")
                            }), Object(D.jsx)(g.L, {
                                children: e(578, "A top-tier AMM and yield farm on Binance Smart Chain.")
                            })]
                        }), Object(D.jsxs)("div", {
                            children: [Object(D.jsxs)(de, {
                                children: [Object(D.jsx)(ee, {}), Object(D.jsx)(je, {})]
                            }), Object(D.jsx)(Oe, {}), Object(D.jsxs)(de, {
                                children: [Object(D.jsx)(ce, {}), Object(D.jsx)(re, {})]
                            })]
                        })]
                    })
                }
        },
        866: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return O
            })), n.d(t, "b", (function() {
                return p
            }));
            var c = n(2),
                a = n.n(c),
                r = n(11),
                i = n(22),
                s = n(0),
                o = n(13),
                u = n.n(o),
                l = n(27),
                j = n(41),
                b = n(65),
                d = n(151),
                O = function() {
                    var e = Object(d.a)().slowRefresh,
                        t = Object(s.useState)(),
                        n = Object(i.a)(t, 2),
                        c = n[0],
                        o = n[1];
                    return Object(s.useEffect)((function() {
                        function e() {
                            return (e = Object(r.a)(a.a.mark((function e() {
                                var t, n;
                                return a.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(j.d)(), e.next = 3, t.methods.totalSupply().call();
                                        case 3:
                                            n = e.sent, o(new u.a(n));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [e]), c
                },
                p = function(e) {
                    var t = Object(s.useState)(new u.a(0)),
                        n = Object(i.a)(t, 2),
                        c = n[0],
                        o = n[1],
                        l = Object(d.a)().slowRefresh,
                        O = Object(b.a)();
                    return Object(s.useEffect)((function() {
                        (function() {
                            var t = Object(r.a)(a.a.mark((function t() {
                                var n, c;
                                return a.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = Object(j.a)(e, O), t.next = 3, n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                        case 3:
                                            c = t.sent, o(new u.a(c));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        })()()
                    }), [O, e, l]), c
                };
            t.a = function(e) {
                var t = Object(s.useState)(new u.a(0)),
                    n = Object(i.a)(t, 2),
                    c = n[0],
                    o = n[1],
                    O = Object(l.c)().account,
                    p = Object(b.a)(),
                    f = Object(d.a)().fastRefresh;
                return Object(s.useEffect)((function() {
                    O && function() {
                        var t = Object(r.a)(a.a.mark((function t() {
                            var n, c;
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = Object(j.a)(e, p), t.next = 3, n.methods.balanceOf(O).call();
                                    case 3:
                                        c = t.sent, o(new u.a(c));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()()
                }), [O, e, p, f]), c
            }
        }
    }
]);
//# sourceMappingURL=7.94fcbfd5.chunk.js.map
