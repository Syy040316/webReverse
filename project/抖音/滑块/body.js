const crypto = require('crypto');
const forge = require('node-forge');

let CryptoJS = require('asmcrypto.js');


syy_count1 = true




// AES-GCM 加密函数

function g(t) {
    return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, g(t);
}

// AES GCM 加密函数
// function aesGcmEncrypt(text, key, iv) {
//     // 创建 AES GCM 加密实例
//     const cipher = forge.cipher.createCipher('AES-GCM', key);
//
//     // 设置 IV 和加密模式
//     cipher.start({ iv: iv });
//
//     // 加密明文数据
//     cipher.update(forge.util.createBuffer(text));
//
//     // 完成加密并获取结果
//     cipher.finish();
//
//     // 获取加密后的数据（包括认证标签）
//     const encryptedData = cipher.output;
//     const tag = cipher.mode.tag;
//
//     // 合并加密数据和认证标签
//     const result = forge.util.createBuffer();
//     result.putBuffer(encryptedData);
//     result.putBuffer(tag);
//
//     // 将加密结果转换为 Base64 编码
//     return forge.util.encode64(result.getBytes());
// }
function Wb(t) {
    var e = "pPAZy";
    return new Uint8Array(t.match(/[\da-f]{2}/gi).map(function (t) {
        if (true) {
            return parseInt(t, 16);
        }
        _0x2e0eda.e(_0x1ab2b0);
    }));
}
function appendToUint8Array(original, dataToAdd) {
    dataToAdd = new Uint8Array([0,0,0,1])
    // 创建一个新的 Uint8Array，长度为原始数组长度加上新数据的长度
    const result = new Uint8Array(original.length + 4);

    // 将原始数据复制到新数组
    result.set(original, 0);

    // 将新数据复制到新数组的末尾
    result.set(dataToAdd, original.length);
    console.log(result);

    return result;
}






















function r(t, e) {
    if (!(t instanceof e)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function x(t) {
    var e = function (t, e) {
        if ("object" != typeof t || !t) {
            return t;
        }
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != typeof r) {
                return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
    }(t, "string");
    return "symbol" == typeof e ? e : e + "";
}
function i(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(t, x(r.key), r);
    }
}
function a(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
        writable: false
    }), t;
}




function qS(t, e, n, r, i) {
    var o = t.length - e,
        c = o < i ? o : i;
    return t["set"](n["subarray"](r, r + c), e), c;
}
var LS = function () {
    var t,
        e,
        r = {
            tgpMD: function (t, e) {
                return t ^ e;
            },
            MMxio: function (t, e) {
                return t | e;
            },
            xxtVb: function (t, e) {
                return t >>> e;
            },
            Gkbly: function (t, e) {
                return t >>> e;
            },
            uJITZ: function (t, e) {
                return t >>> e;
            },
            FpPQg: function (t, e) {
                return t | e;
            },
            pOmWL: function (t, e) {
                return t & e;
            },
            WusCD: function (t, e) {
                return t & e;
            },
            chyaQ: function (t, e) {
                return t % e;
            },
            lYKWB: function (t, e) {
                return t + e;
            },
            qLnjQ: function (t, e) {
                return t === e;
            },
            plWsF: "yhSff",
            ZvziT: function (t, e) {
                return t << e;
            },
            bpwlB: function (t, e) {
                return t(e);
            },
            xoXrJ: function (t, e, n) {
                return t(e, n);
            },
            ZpEMc: function (t, e) {
                return t << e;
            },
            fQGod: function (t, e) {
                return t < e;
            },
            JWpGi: function (t, e) {
                return t ^ e;
            },
            lwSNF: function (t, e) {
                return t >> e;
            },
            BFTmF: function (t, e) {
                return t ^ e;
            },
            nFmCQ: function (t, e) {
                return t ^ e;
            },
            xdDEm: function (t, e) {
                return t ^ e;
            },
            WonJN: function (t, e) {
                return t + e;
            },
            VVKzW: function (t) {
                return t();
            }
        },
        i = (t = {
            CrpXq: function (t, e) {
                return t | e;
            },
            pUxKd: function (t, e) {
                return r["tgpMD"](t, e);
            }
        }, e = true, function (n, r) {
            var i = {
                    ckUhQ: function (t, e) {
                        return t << e;
                    },
                    vJkFe: function (t, e) {
                        return t >>> e;
                    },
                    qqxIz: function (e, n) {
                        return t["CrpXq"](e, n);
                    },
                    yhWgP: function (t, e, n, r, i, a, o, c, u) {
                        return t(e, n, r, i, a, o, c, u);
                    },
                    ngumf: function (e, n) {
                        return t.pUxKd(e, n);
                    },
                    KHRUj: function (t, e) {
                        return t ^ e;
                    }
                },
                a = e ? function () {
                    if (false) {
                        var e, a, o;
                        for (a = o = _0x4e6c61(_0x415044), e = 0; e < 4; e++) {
                            o ^= a = 255 & (i["ckUhQ"](a, 1) | i.vJkFe(a, 7));
                        }
                        return o ^= 99;
                    }
                    if (r) {
                        var c = r.apply(n, arguments);
                        return r = null, c;
                    }
                } : function () {};
            return e = false, a;
        }),
        a = i(this, function () {
            if (true) {
                return
            }
            for (var e = "3|1|4|0|2".split("|"), n = 0;;) {
                switch (e[n++]) {
                    case "0":
                        _0x38f250 = 0 | _0x58cee4;
                        continue;
                    case "1":
                        _0x1a6ac7 = 0 | _0x70d090;
                        continue;
                    case "2":
                        _0x30f0a7 = _0x1fc11e, _0x577685 = _0x4227ff, _0x5035bd = _0x546ef4, _0x46fa30 = _0x3fb46f;
                        continue;
                    case "3":
                        _0x273642 = 0 | _0x18420e;
                        continue;
                    case "4":
                        _0x453d0a = 0 | _0x4f3f4c;
                        continue;
                }
                break;
            }
        });
    a();
    var o,
        c,
        u = false;
    function s(t, e) {
        var i = o[r.chyaQ(r["lYKWB"](c[t], c[e]), 255)];
        return 0 !== t && 0 !== e || (i = 0), i;
    }
    var f,
        l,
        d,
        h,
        p = false;
    function v() {
        function e(t) {
            var e, n;
            if ("yhSff" === r["plWsF"]) {
                var a, u, s;
                for (n = o[255 - c[e = t]], r.qLnjQ(e, 0) && (n = 0), u = s = n, a = 0; a < 4; a++) {
                    s ^= u = 255 & (r["ZvziT"](u, 1) | u >>> 7);
                }
                return s ^= 99;
            }
            _0x1ead6f.set(_0x796a9d[_0x232bfa], 4096 + 1024 * _0x4f27b8 >> 2), _0x1e2a7d.set(_0x187c8f[_0x4ea600], 8192 + 1024 * _0xeb5f0c >> 2);
        }
        u || function () {
            o = [], c = [];
            var t,
                e,
                n = 1;
            for (t = 0; t < 255; t++) {
                o[t] = n, e = 128 & n, n <<= 1, n &= 255, 128 === e && (n ^= 27), n ^= o[t], c[o[t]] = t;
            }
            o[255] = o[0], c[0] = 0, u = true;
        }(), f = [], l = [], d = [[], [], [], []], h = [[], [], [], []];
        for (var n = 0; n < 256; n++) {
            var i = r.bpwlB(e, n);
            f[n] = i, l[i] = n, d[0][n] = r["xoXrJ"](s, 2, i) << 24 | i << 16 | i << 8 | r.xoXrJ(s, 3, i), h[0][i] = s(14, n) << 24 | r.xoXrJ(s, 9, n) << 16 | r.ZpEMc(s(13, n), 8) | s(11, n);
            for (var a = 1; r.fQGod(a, 4); a++) {
                d[a][n] = r["Gkbly"](d[a - 1][n], 8) | d[a - 1][n] << 24, h[a][i] = h[a - 1][i] >>> 8 | h[a - 1][i] << 24;
            }
        }
        p = true;
    }
    var x = function (t, e) {
        var i = {
            LxVsN: function (t, e) {
                return t ^ e;
            },
            jDhoa: function (t, e) {
                return t & e;
            },
            sIawX: "YmAuu",
            DLHdX: function (t, e) {
                return t << e;
            },
            GBztH: function (t, e) {
                return t + e;
            },
            PUslB: function (t, e) {
                return t - e;
            },
            LzTRj: function (t, e) {
                return r["Gkbly"](t, e);
            },
            GMXAl: function (t, e) {
                return r.FpPQg(t, e);
            },
            iywNd: function (t, e) {
                return t >> e;
            },
            mwvsP: function (t, e) {
                return t >> e;
            },
            qrIBo: function (t, e) {
                return r.JWpGi(t, e);
            },
            QQdjE: function (t, e) {
                return r["lwSNF"](t, e);
            },
            xgdXs: function (t, e) {
                return t | e;
            },
            lFOcG: function (t, e) {
                return t >> e;
            },
            dVgSo: function (t, e) {
                return t >> e;
            },
            RTKoH: function (t, e) {
                return r.pOmWL(t, e);
            },
            mIrMG: function (t, e) {
                return t << e;
            },
            CKHYV: function (t, e) {
                return t << e;
            },
            oOKwX: function (t, e) {
                return t >> e;
            },
            leMCb: function (t, e) {
                return t | e;
            },
            lCkYI: function (t, e) {
                return t >> e;
            },
            qWrGe: function (t, e) {
                return t << e;
            },
            mEyeD: function (t, e) {
                return r.FpPQg(t, e);
            },
            FUaeH: function (t, e) {
                return t << e;
            },
            oVRTg: function (t, e) {
                return r.JWpGi(t, e);
            },
            sqYra: function (t, e) {
                return t >> e;
            },
            vQbEu: function (t, e) {
                return t | e;
            },
            KumZm: function (t, e) {
                return t ^ e;
            },
            BaSAX: function (t, e) {
                return t ^ e;
            },
            dZwID: function (t, e) {
                return r.BFTmF(t, e);
            },
            znZNe: function (t, e) {
                return t ^ e;
            },
            BWEaN: function (t, e) {
                return t >>> e;
            },
            LdORt: function (t, e) {
                return r.MMxio(t, e);
            },
            QmHSE: function (t, e) {
                return r.nFmCQ(t, e);
            },
            ATIbn: function (t, e) {
                return r["xdDEm"](t, e);
            },
            wNtZY: function (t, e) {
                return r.WonJN(t, e);
            }
        };
        p || r["VVKzW"](v);
        var a = new Uint32Array(e);
        a.set(f, 512), a.set(l, 768);
        for (var o = 0; o < 4; o++) {
            a.set(d[o], 4096 + 1024 * o >> 2), a.set(h[o], 8192 + 1024 * o >> 2);
        }
        var c = function (t, e, r) {
            "use asm";

            var o = {
                jwFIh: "wcDfb",
                dSEZA: function (t, e) {
                    return t | e;
                },
                OByvl: function (t, e) {
                    return i["ATIbn"](t, e);
                },
                VWnOS: function (t, e) {
                    return t ^ e;
                },
                lgCjZ: function (t, e) {
                    return t | e;
                },
                gKMKo: function (t, e, n, r, i, a, o, c, u) {
                    return t(e, n, r, i, a, o, c, u);
                },
                RAwpV: function (t, e) {
                    return t ^ e;
                },
                uvgaF: function (t, e) {
                    return t ^ e;
                },
                EeGBM: function (t, e) {
                    return t | e;
                },
                dPGhZ: function (t, e, n, r, i, a, o, c, u) {
                    return t(e, n, r, i, a, o, c, u);
                },
                bWzGP: function (t, e) {
                    return i["GMXAl"](t, e);
                },
                gYrwl: function (t, e) {
                    return i["LdORt"](t, e);
                },
                uerMA: function (t, e) {
                    return t & e;
                },
                EmdZg: function (t, e) {
                    return t | e;
                },
                gMIPs: function (t, e) {
                    return t & e;
                },
                VVpEk: function (t, e) {
                    return t >>> e;
                },
                aoTAD: function (t, e) {
                    return t >>> e;
                },
                SpNEq: function (t, e) {
                    return i["xgdXs"](t, e);
                },
                VViba: function (t, e) {
                    return t & e;
                },
                VmSJg: function (t, e) {
                    return t & e;
                },
                TdQpR: function (t, e) {
                    return t | e;
                },
                VwMxb: function (t, e) {
                    return t >= e;
                },
                SBKNC: function (t, e) {
                    return t | e;
                },
                Vaihi: function (t, e) {
                    return t << e;
                },
                YHbAN: function (t, e) {
                    return t | e;
                },
                rXKkY: function (t, e) {
                    return t | e;
                },
                MvNmI: function (t, e) {
                    return t << e;
                },
                sUKLP: function (t, e) {
                    return i["RTKoH"](t, e);
                },
                MmmwP: function (t, e) {
                    return t >>> e;
                },
                vFBMt: function (t, e) {
                    return t & e;
                },
                fAyhg: function (t, e) {
                    return t | e;
                },
                rjuSd: function (t, e) {
                    return t + e;
                },
                CeceS: function (t, e) {
                    return t === e;
                },
                iOecp: function (t, e) {
                    return t | e;
                },
                wXRKF: function (t, e) {
                    return i["LdORt"](t, e);
                },
                vmBKL: function (t, e) {
                    return t | e;
                },
                fxMjU: function (t, e) {
                    return i["wNtZY"](t, e);
                }
            };
            var c = 0,
                u = 0,
                s = 0,
                f = 0,
                l = 0,
                d = 0,
                h = 0,
                p = 0,
                v = 0,
                x = 0,
                g = 0,
                b = 0,
                m = 0,
                y = 0,
                w = 0,
                _ = 0,
                k = 0,
                I = 0,
                S = 0,
                A = 0,
                C = 0,
                E = new t["Uint32Array"](r),
                M = new t["Uint8Array"](r);
            function T(t, e, n, r, o, l, d, h) {
                t = t | 0, e = e | 0, n = n | 0, r = r | 0, o = o | 0, l = l | 0, d = d | 0, h = h | 0;
                var v = 0,
                    x = 0,
                    g = 0,
                    b = 0,
                    m = 0,
                    y = 0,
                    w = 0,
                    _ = 0;
                v = n | 1024, x = n | 2048, g = n | 3072, o = o ^ E[i["GMXAl"](t, 0) >> 2], l = l ^ E[i["iywNd"](t | 4, 2)], d = d ^ E[(t | 8) >> 2], h = h ^ E[(t | 12) >> 2];
                for (_ = 16; (_ | 0) <= r << 4; _ = _ + 16 | 0) {
                    b = E[(n | i["jDhoa"](o >> 22, 1020)) >> 2] ^ E[(v | l >> 14 & 1020) >> 2] ^ E[(x | i["mwvsP"](d, 6) & 1020) >> 2] ^ E[(g | h << 2 & 1020) >> 2] ^ E[(t | _ | 0) >> 2], m = i["LxVsN"](E[(n | l >> 22 & 1020) >> 2] ^ E[i["GMXAl"](v, d >> 14 & 1020) >> 2] ^ E[(x | h >> 6 & 1020) >> 2] ^ E[(g | o << 2 & 1020) >> 2], E[(t | _ | 4) >> 2]), y = i["qrIBo"](E[(n | i["jDhoa"](d >> 22, 1020)) >> 2] ^ E[(v | i["QQdjE"](h, 14) & 1020) >> 2] ^ E[i["xgdXs"](x, i["iywNd"](o, 6) & 1020) >> 2] ^ E[(g | l << 2 & 1020) >> 2], E[(t | _ | 8) >> 2]), w = i["LxVsN"](E[(n | i["lFOcG"](h, 22) & 1020) >> 2], E[i["dVgSo"](v | o >> 14 & 1020, 2)]) ^ E[i["xgdXs"](x, l >> 6 & 1020) >> 2] ^ E[(g | i["RTKoH"](d << 2, 1020)) >> 2] ^ E[(t | _ | 12) >> 2], o = b, l = m, d = y, h = w;
                }
                c = i["mIrMG"](E[(e | o >> 22 & 1020) >> 2], 24) ^ E[(e | l >> 14 & 1020) >> 2] << 16 ^ E[i["dVgSo"](e | i["jDhoa"](d >> 6, 1020), 2)] << 8 ^ E[(e | i["CKHYV"](h, 2) & 1020) >> 2] ^ E[i["oOKwX"](i["leMCb"](t | _, 0), 2)], u = E[(e | l >> 22 & 1020) >> 2] << 24 ^ E[(e | i["lCkYI"](d, 14) & 1020) >> 2] << 16 ^ i["qWrGe"](E[i["mEyeD"](e, i["RTKoH"](i["lFOcG"](h, 6), 1020)) >> 2], 8) ^ E[(e | i["FUaeH"](o, 2) & 1020) >> 2] ^ E[(t | _ | 4) >> 2], s = i["oVRTg"](E[(e | i["jDhoa"](d >> 22, 1020)) >> 2] << 24 ^ i["CKHYV"](E[(e | h >> 14 & 1020) >> 2], 16) ^ E[(e | i["jDhoa"](o >> 6, 1020)) >> 2] << 8, E[i["lFOcG"](i["xgdXs"](e, l << 2 & 1020), 2)]) ^ E[i["sqYra"](t | _ | 8, 2)], f = i["oVRTg"](i["DLHdX"](E[(e | h >> 22 & 1020) >> 2], 24), E[(e | o >> 14 & 1020) >> 2] << 16) ^ E[(e | i["jDhoa"](l >> 6, 1020)) >> 2] << 8 ^ E[i["leMCb"](e, d << 2 & 1020) >> 2] ^ E[i["vQbEu"](t | _, 12) >> 2];
            }
            function $(t, e, n, r) {
                t = t | 0, e = e | 0, n = n | 0, r = r | 0, T(0, 2048, 4096, C, t, e, n, r);
            }
            function j(t, e, n, r) {
                if (o["jwFIh"] === "wcDfb") {
                    t = o["dSEZA"](t, 0), e = o["dSEZA"](e, 0), n = n | 0, r = r | 0;
                    var i = 0;
                    T(1024, 3072, 8192, C, t, r, n, e), i = u, u = f, f = i;
                } else {
                    _0x3ced70 = _0xd08943 | 0, _0x19737b = _0xb39a67 | 0, _0x1f3dd8 = _0x3df48e | 0, _0x39b680 = _0x3552ea | 0, _0x1cd5b5(0, 2048, 4096, _0x3ef15c, _0x955b3f, _0x1fb646, _0x17d1e4, _0x3e978e), _0x369419 = _0x22a6bd, _0x258131 = _0x288f0f, _0x41870d = _0xf7e27, _0x351ab5 = _0x288252, _0x129eb9 = _0x12e9f1 ^ _0x33db0e, _0x1ce5cd = _0x57b2c3 ^ _0x20ca7a, _0x37f120 = _0x108a81 ^ _0x308e2c, _0x35b6c8 = _0x384aea ^ _0x54e2a7;
                }
            }
            function O(t, e, n, r) {
                var o = "5|0|1|2|3|4"["split"]("|"),
                    v = 0;
                while (true) {
                    switch (o[v++]) {
                        case "0":
                            e = e | 0;
                            continue;
                        case "1":
                            n = n | 0;
                            continue;
                        case "2":
                            r = r | 0;
                            continue;
                        case "3":
                            T(0, 2048, 4096, C, l ^ t, d ^ e, h ^ n, p ^ r);
                            continue;
                        case "4":
                            l = c, d = u, h = s, p = f;
                            continue;
                        case "5":
                            t = t | 0;
                            continue;
                    }
                    break;
                }
            }
            function D(t, e, n, r) {
                t = t | 0, e = e | 0, n = n | 0, r = i["mEyeD"](r, 0);
                var v = 0;
                T(1024, 3072, 8192, C, t, r, n, e), v = u, u = f, f = v, c = c ^ l, u = i["KumZm"](u, d), s = i["BaSAX"](s, h), f = f ^ p, l = t, d = e, h = n, p = r;
            }
            function P(t, e, n, r) {
                t = t | 0, e = e | 0, n = n | 0, r = r | 0, T(0, 2048, 4096, C, l, d, h, p), l = c = o["OByvl"](c, t), d = u = o["VWnOS"](u, e), h = s = s ^ n, p = f = f ^ r;
            }
            function L(t, e, n, r) {
                t = o["lgCjZ"](t, 0), e = e | 0, n = n | 0, r = r | 0, o["gKMKo"](T, 0, 2048, 4096, C, l, d, h, p), c = c ^ t, u = o["RAwpV"](u, e), s = o["uvgaF"](s, n), f = f ^ r, l = t, d = e, h = n, p = r;
            }
            function B(t, e, n, r) {
                true ? (t = t | 0, e = e | 0, n = n | 0, r = r | 0, T(0, 2048, 4096, C, l, d, h, p), l = c, d = u, h = s, p = f, c = i["dZwID"](c, t), u = u ^ e, s = s ^ n, f = f ^ r) : (_0x336144 = o["EeGBM"](_0x253d2b << 1, _0x500280 >>> 7) & 255, _0x81881 ^= _0x1a0e5a);
            }
            function z(t, e, n, r) {
                var l = "10|12|0|9|2|6|7|11|5|1|4|8|3"["split"]("|"),
                    d = 0;
                while (true) {
                    switch (l[d++]) {
                        case "0":
                            n = n | 0;
                            continue;
                        case "1":
                            c = c ^ t;
                            continue;
                        case "2":
                            o["dPGhZ"](T, 0, 2048, 4096, C, v, x, g, b);
                            continue;
                        case "3":
                            f = f ^ r;
                            continue;
                        case "4":
                            u = o["RAwpV"](u, e);
                            continue;
                        case "5":
                            v = ~m & v | m & v + (o["dSEZA"](x, 0) == 0);
                            continue;
                        case "6":
                            b = ~_ & b | _ & b + 1;
                            continue;
                        case "7":
                            g = ~w & g | w & g + ((b | 0) == 0);
                            continue;
                        case "8":
                            s = s ^ n;
                            continue;
                        case "9":
                            r = r | 0;
                            continue;
                        case "10":
                            t = t | 0;
                            continue;
                        case "11":
                            x = o["lgCjZ"](~y & x, y & x + (o["bWzGP"](g, 0) == 0));
                            continue;
                        case "12":
                            e = e | 0;
                            continue;
                    }
                    break;
                }
            }
            function R(t, e, n, r) {
                var a = "2|5|6|3|4|8|1|0|7"["split"]("|"),
                    o = 0;
                while (true) {
                    switch (a[o++]) {
                        case "0":
                            for (; (m | 0) < 128; m = m + 1 | 0) {
                                c >>> 31 && (v = v ^ t, x = x ^ e, g = g ^ n, b = i["znZNe"](b, r));
                                c = c << 1 | u >>> 31, u = u << 1 | i["LzTRj"](s, 31), s = s << 1 | i["BWEaN"](f, 31), f = f << 1, y = r & 1, r = i["LdORt"](r >>> 1, n << 31), n = n >>> 1 | e << 31, e = e >>> 1 | t << 31, t = t >>> 1;
                                if (y) {
                                    t = t ^ 3774873600;
                                }
                            }
                            continue;
                        case "1":
                            c = k | 0, u = I | 0, s = S | 0, f = A | 0;
                            continue;
                        case "2":
                            t = t | 0;
                            continue;
                        case "3":
                            r = r | 0;
                            continue;
                        case "4":
                            var c = 0,
                                u = 0,
                                s = 0,
                                f = 0,
                                v = 0,
                                x = 0,
                                g = 0,
                                b = 0,
                                m = 0,
                                y = 0;
                            continue;
                        case "5":
                            e = e | 0;
                            continue;
                        case "6":
                            n = n | 0;
                            continue;
                        case "7":
                            l = v, d = x, h = g, p = b;
                            continue;
                        case "8":
                            t = t ^ l, e = e ^ d, n = i["QmHSE"](n, h), r = r ^ p;
                            continue;
                    }
                    break;
                }
            }
            function V(t) {
                t = t | 0, C = t;
            }
            function N(t, e, n, r) {
                t = t | 0, e = e | 0, n = n | 0, r = r | 0, c = t, u = e, s = n, f = r;
            }
            function F(t, e, n, r) {
                t = t | 0, e = e | 0, n = n | 0, r = i["mEyeD"](r, 0), l = t, d = e, h = n, p = r;
            }
            function q(t, e, n, r) {
                var o = "0|2|4|3|1"["split"]("|"),
                    c = 0;
                while (true) {
                    switch (o[c++]) {
                        case "0":
                            t = t | 0;
                            continue;
                        case "1":
                            v = t, x = e, g = n, b = r;
                            continue;
                        case "2":
                            e = e | 0;
                            continue;
                        case "3":
                            r = r | 0;
                            continue;
                        case "4":
                            n = n | 0;
                            continue;
                    }
                    break;
                }
            }
            function U(t, e, n, r) {
                t = t | 0, e = o["gYrwl"](e, 0), n = n | 0, r = r | 0, m = t, y = e, w = n, _ = r;
            }
            function W(t, e, n, r) {
                t = t | 0, e = e | 0, n = n | 0, r = i["LdORt"](r, 0), b = ~_ & b | _ & r, g = i["jDhoa"](~w, g) | w & n, x = ~y & x | y & e, v = i["leMCb"](~m & v, m & t);
            }
            function H(t) {
                t = t | 0;
                if (o["uerMA"](t, 15)) {
                    return -1;
                }
                return M[o["EmdZg"](t, 0)] = c >>> 24, M[t | 1] = c >>> 16 & 255, M[t | 2] = c >>> 8 & 255, M[o["dSEZA"](t, 3)] = c & 255, M[t | 4] = u >>> 24, M[t | 5] = o["gMIPs"](u >>> 16, 255), M[t | 6] = o["VVpEk"](u, 8) & 255, M[t | 7] = u & 255, M[t | 8] = o["VVpEk"](s, 24), M[t | 9] = o["aoTAD"](s, 16) & 255, M[t | 10] = s >>> 8 & 255, M[t | 11] = s & 255, M[t | 12] = f >>> 24, M[t | 13] = f >>> 16 & 255, M[t | 14] = f >>> 8 & 255, M[t | 15] = f & 255, 16;
            }
            function G(t) {
                t = t | 0;
                if (t & 15) {
                    return -1;
                }
                return M[t | 0] = l >>> 24, M[t | 1] = o["aoTAD"](l, 16) & 255, M[t | 2] = o["uerMA"](l >>> 8, 255), M[t | 3] = l & 255, M[t | 4] = o["VVpEk"](d, 24), M[t | 5] = d >>> 16 & 255, M[t | 6] = d >>> 8 & 255, M[o["SpNEq"](t, 7)] = d & 255, M[t | 8] = h >>> 24, M[t | 9] = h >>> 16 & 255, M[t | 10] = o["VViba"](h >>> 8, 255), M[t | 11] = h & 255, M[t | 12] = p >>> 24, M[o["bWzGP"](t, 13)] = o["VmSJg"](p >>> 16, 255), M[t | 14] = p >>> 8 & 255, M[o["TdQpR"](t, 15)] = p & 255, 16;
            }
            function K() {
                $(0, 0, 0, 0), k = c, I = u, S = s, A = f;
            }
            function Y(t, e, n) {
                t = o["TdQpR"](t, 0), e = e | 0, n = o["bWzGP"](n, 0);
                var i = 0;
                if (e & 15) {
                    return -1;
                }
                while (o["VwMxb"](o["SBKNC"](n, 0), 16)) {
                    Z[t & 7](M[e | 0] << 24 | M[e | 1] << 16 | M[e | 2] << 8 | M[e | 3], o["SBKNC"](M[e | 4] << 24, M[o["SBKNC"](e, 5)] << 16) | M[e | 6] << 8 | M[e | 7], o["Vaihi"](M[e | 8], 24) | o["Vaihi"](M[o["YHbAN"](e, 9)], 16) | M[e | 10] << 8 | M[e | 11], o["rXKkY"](o["MvNmI"](M[e | 12], 24), M[e | 13] << 16) | M[e | 14] << 8 | M[e | 15]), M[e | 0] = c >>> 24, M[e | 1] = c >>> 16 & 255, M[e | 2] = o["VVpEk"](c, 8) & 255, M[e | 3] = c & 255, M[e | 4] = u >>> 24, M[e | 5] = o["sUKLP"](o["MmmwP"](u, 16), 255), M[e | 6] = o["vFBMt"](u >>> 8, 255), M[e | 7] = u & 255, M[e | 8] = s >>> 24, M[e | 9] = s >>> 16 & 255, M[e | 10] = s >>> 8 & 255, M[e | 11] = s & 255, M[o["fAyhg"](e, 12)] = f >>> 24, M[o["EmdZg"](e, 13)] = f >>> 16 & 255, M[e | 14] = f >>> 8 & 255, M[e | 15] = f & 255, i = i + 16 | 0, e = o["rjuSd"](e, 16) | 0, n = n - 16 | 0;
                }
                return i | 0;
            }
            function J(t, e, n) {
                t = t | 0, e = e | 0, n = o["lgCjZ"](n, 0);
                var i = 0;
                if (e & 15) {
                    return -1;
                }
                while ((n | 0) >= 16) {
                    o["CeceS"]("VEdvN", "LYZaw") ? (_0xba93d8[_0x317cee][_0x3f6e50] = _0x1b05c6[_0x58c132 - 1][_0x3f95b2] >>> 8 | _0x4c33c3[_0x457a55 - 1][_0x576097] << 24, _0x2f881f[_0x5c2027][_0x18bfa3] = _0x123b4e[_0x55af77 - 1][_0xd087cf] >>> 8 | _0x18b73c[_0x435d12 - 1][_0x37ac68] << 24) : (Q[t & 1](o["SpNEq"](o["iOecp"](M[o["wXRKF"](e, 0)] << 24 | M[e | 1] << 16, M[e | 2] << 8), M[e | 3]), o["EmdZg"](M[e | 4] << 24, M[e | 5] << 16) | M[e | 6] << 8 | M[e | 7], M[e | 8] << 24 | M[e | 9] << 16 | o["Vaihi"](M[o["wXRKF"](e, 10)], 8) | M[e | 11], o["MvNmI"](M[e | 12], 24) | M[e | 13] << 16 | M[e | 14] << 8 | M[o["vmBKL"](e, 15)]), i = i + 16 | 0, e = o["fxMjU"](e, 16) | 0, n = n - 16 | 0);
                }
                return i | 0;
            }
            var Z = [$, j, O, D, P, L, B, z],
                Q = [O, R];
            return {
                set_rounds: V,
                set_state: N,
                set_iv: F,
                set_nonce: q,
                set_mask: U,
                set_counter: W,
                get_state: H,
                get_iv: G,
                gcm_init: K,
                cipher: Y,
                mac: J
            };
        }({
            Uint8Array: Uint8Array,
            Uint32Array: Uint32Array
        }, t, e);
        return c["set_key"] = function (t, e, r, o, u, s, l, d, p) {
            var x = a.subarray(0, 60),
                g = a.subarray(256, 316);
            x.set([e, r, o, u, s, l, d, p]);
            for (var b = t, m = 1; b < 4 * t + 28; b++) {
                var y = x[b - 1];
                (b % t == 0 || 8 === t && b % t == 4) && (y = f[y >>> 24] << 24 ^ f[y >>> 16 & 255] << 16 ^ f[y >>> 8 & 255] << 8 ^ f[i.jDhoa(y, 255)]), b % t == 0 && ("PQPzC" !== i.sIawX ? (y = i.DLHdX(y, 8) ^ y >>> 24 ^ m << 24, m = m << 1 ^ (128 & m ? 27 : 0)) : (_0xca4ccd = _0x39f283 ^ _0x34bb59, _0x34c991 = _0x4031dd ^ _0x4057f7, _0x117392 = i.LxVsN(_0x3055db, _0x28dc73), _0x29aac9 = _0x148ba9 ^ _0x15d24f)), x[b] = x[b - t] ^ y;
            }
            for (var w = 0; w < b; w += 4) {
                for (var _ = 0; _ < 4; _++) {
                    y = x[b - i.GBztH(4, w) + (4 - _) % 4];
                    w < 4 || w >= i["PUslB"](b, 4) ? g[w + _] = y : g[w + _] = i.LxVsN(h[0][f[i.LzTRj(y, 24)]] ^ h[1][f[255 & i["LzTRj"](y, 16)]], h[2][f[y >>> 8 & 255]]) ^ h[3][f[255 & y]];
                }
            }
            c["set_rounds"](t + 5);
        }, c;
    };
    return x.ENC = {
        ECB: 0,
        CBC: 2,
        CFB: 4,
        OFB: 6,
        CTR: 7
    }, x.DEC = {
        ECB: 1,
        CBC: 3,
        CFB: 5,
        OFB: 6,
        CTR: 7
    }, x["MAC"] = {
        CBC: 0,
        GCM: 1
    }, x.HEAP_DATA = 16384, x;
}();
var HS = function () {
    var t,
        n = {
            TchCe: "(((.+)+)+)+$",
            rZfNP: function (t, e) {
                return t > e;
            },
            RmuyA: function (t, e) {
                return t !== e;
            },
            HZLYY: function (t, e) {
                return t + e;
            },
            yYhgH: function (t, e) {
                return t - e;
            },
            bvNZf: "padding",
            VlcMy: function (t, e) {
                return t === e;
            },
            JLNzr: "AES_Encrypt_process",
            ZiIDq: "AES_Encrypt_finish"
        },
        i = (t = true, function (e, n) {
            var r = t ? function () {
                if (n) {
                    var t = n.apply(e, arguments);
                    return n = null, t;
                }
            } : function () {};
            return t = false, r;
        }),
        o = i(this, function () {
            return
        });
    function c(t, i) {
        var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            u = arguments.length > 3 ? arguments[3] : void 0,
            s = n["rZfNP"](arguments.length, 4) ? arguments[4] : void 0,
            f = arguments.length > 5 ? arguments[5] : void 0;
        r(this, c), this.pos = 0, this.len = 0, this.mode = u, this["heap"] = s || function (t, e) {
            var n,
                i = t ? t.byteLength : (n = 65536, e || n);
            if (4095 & i || i <= 0) {
                throw new Error("heap size must be a positive integer and a multiple of 4096");
            }
            return t || new Uint8Array(new ArrayBuffer(i));
        }()["subarray"](LS.HEAP_DATA), this["asm"] = f || new LS(null, this.heap.buffer), this.pos = 0, this.len = 0;
        var l = t.length;
        if (16 !== l && n.RmuyA(l, 24) && 32 !== l) {
            throw new Error("illegal key size");
        }
        var d = new DataView(t["buffer"], t.byteOffset, t["byteLength"]);
        if (this.asm["set_key"](l >> 2, d["getUint32"](0), d["getUint32"](4), d.getUint32(8), d["getUint32"](12), l > 16 ? d.getUint32(16) : 0, l > 16 ? d.getUint32(20) : 0, n.rZfNP(l, 24) ? d["getUint32"](24) : 0, l > 24 ? d["getUint32"](28) : 0), n.RmuyA(i, void 0)) {
            if (16 !== i["length"]) {
                throw new Error("illegal iv size");
            }
            var h = new DataView(i.buffer, i["byteOffset"], i.byteLength);
            this.asm.set_iv(h["getUint32"](0), h["getUint32"](4), h["getUint32"](8), h["getUint32"](12));
        } else {
            this.asm["set_iv"](0, 0, 0, 0);
        }
        this.padding = o;
    }
    return o(), a(c, [{
        key: n["JLNzr"],
        value: function (t) {
            for (var n, i = "1|2|5|14|13|15|11|0|10|4|6|3|16|9|12|8|7"["split"]("|"), a = 0;;) {
                switch (i[a++]) {
                    case "0":
                        var o = 0;
                        continue;
                    case "1":
                        if (n = t, !{
                            InNwe: function (t, e) {
                                return t instanceof e;
                            }
                        }["InNwe"](n, Uint8Array)) {
                            throw new TypeError("data isn't of expected type");
                        }
                        continue;
                    case "2":
                        var c = this["asm"];
                        continue;
                    case "3":
                        var u = 0;
                        continue;
                    case "4":
                        var s = 0;
                        continue;
                    case "5":
                        var f = this.heap;
                        continue;
                    case "6":
                        var l = v + p & -16;
                        continue;
                    case "7":
                        return m;
                    case "8":
                        this["len"] = v;
                        continue;
                    case "9":
                        for (; p > 0;) {
                            for (var d = "4|7|6|2|5|3|1|0".split("|"), h = 0;;) {
                                switch (d[h++]) {
                                    case "0":
                                        u < v ? (b += u, v -= u) : (b = 0, v = 0);
                                        continue;
                                    case "1":
                                        s += u;
                                        continue;
                                    case "2":
                                        p -= u;
                                        continue;
                                    case "3":
                                        u && m.set(f["subarray"](b, b + u), s);
                                        continue;
                                    case "4":
                                        u = qS(f, b + v, t, o, p);
                                        continue;
                                    case "5":
                                        u = c.cipher(g, x + b, v);
                                        continue;
                                    case "6":
                                        o += u;
                                        continue;
                                    case "7":
                                        v += u;
                                        continue;
                                }
                                break;
                            }
                        }
                        continue;
                    case "10":
                        var p = t["length"] || 0;
                        continue;
                    case "11":
                        var v = this["len"];
                        continue;
                    case "12":
                        this["pos"] = b;
                        continue;
                    case "13":
                        var x = LS["HEAP_DATA"];
                        continue;
                    case "14":
                        var g = LS.ENC[this.mode];
                        continue;
                    case "15":
                        var b = this.pos;
                        continue;
                    case "16":
                        var m = new Uint8Array(l);
                        continue;
                }
                break;
            }
        }
    }, {
        key: n.ZiIDq,
        value: function () {
            var r = this.asm,
                i = this["heap"],
                a = LS["ENC"][this.mode],
                o = LS.HEAP_DATA,
                c = this.pos,
                u = this.len,
                s = n["yYhgH"](16, u % 16),
                f = u;
            if (this["hasOwnProperty"](n.bvNZf)) {
                if (this.padding) {
                    if (n["VlcMy"]("ogKgV", "poKfm")) {
                        _0x462f5e[n["HZLYY"](n.HZLYY(_0x1e4026, _0x41c3b9), _0x55a4ac)] = _0x49e9d1;
                    } else {
                        for (var l = 0; l < s; ++l) {
                            if (true) {
                                i[n.HZLYY(c, u) + l] = s;
                            } else if (_0x13e2a4) {
                                var d = _0x5a44e3.apply(_0x1209fd, arguments);
                                return _0x484589 = null, d;
                            }
                        }
                        f = u += s;
                    }
                } else if (u % 16) {
                    throw new Error("data length must be a multiple of the block size");
                }
            } else {
                u += s;
            }
            var h = new Uint8Array(f);
            return u && r.cipher(a, o + c, u), f && h.set(i.subarray(c, c + f)), this.pos = 0, this["len"] = 0, h;
        }
    }]), c;
}();
YS = 68719476704
JS = function () {
    var t,
        n = {
            fTbUk: "(((.+)+)+)+$",
            gvWCg: function (t, e) {
                return t !== e;
            },
            AIpRI: "illegal tagSize value",
            BYmVM: function (t, e) {
                return t >>> e;
            },
            ctqbn: function (t, e) {
                return t << e;
            },
            sRylA: function (t, e) {
                return t + e;
            },
            qGmti: function (t, e) {
                return t + e;
            },
            tOBXm: function (t, e) {
                return t & e;
            },
            BnNOI: "0|5|3|1|4|2",
            GHvJL: function (t, e, n, r, i, a) {
                return t(e, n, r, i, a);
            }
        },
        i = (t = true, function (e, n) {
            var r = t ? function () {
                if (n) {
                    var t = n["apply"](e, arguments);
                    return n = null, t;
                }
            } : function () {
            };
            return t = false, r;
        }),
        o = i(this, function () {
            // return false ? _0x5c91a5.toString().search("(((.+)+)+)+$")["toString"]().constructor(_0x5c2aca)["search"](Opvmpd.fTbUk) : o.toString()["search"](n.fTbUk).toString()["constructor"](o)["search"]("(((.+)+)+)+$");
            return
        });

    function c(t, i, a) {
        var u = arguments["length"] > 3 && n["gvWCg"](arguments[3], void 0) ? arguments[3] : 16,
            s = arguments.length > 4 ? arguments[4] : void 0;
        if (r(this, c), this.tagSize = u, this.gamma0 = 0, this.counter = 1, this.aes = s || new HS(t, void 0, false, "CTR"), this["aes"].asm.gcm_init(), this.tagSize < 4 || this["tagSize"] > 16) {
            throw new Error(n.AIpRI);
        }
        var f = i.length || 0,
            l = new Uint8Array(16);
        12 !== f ? (this["_gcm_mac_process"](i), this["aes"].heap[0] = 0, this.aes.heap[1] = 0, this.aes.heap[2] = 0, this.aes.heap[3] = 0, this["aes"].heap[4] = 0, this.aes.heap[5] = 0, this["aes"].heap[6] = 0, this.aes.heap[7] = 0, this["aes"].heap[8] = 0, this.aes.heap[9] = 0, this.aes.heap[10] = 0, this.aes.heap[11] = f >>> 29, this["aes"].heap[12] = 255 & n.BYmVM(f, 21), this["aes"].heap[13] = f >>> 13 & 255, this.aes.heap[14] = f >>> 5 & 255, this.aes.heap[15] = 255 & n.ctqbn(f, 3), this.aes.asm["mac"](LS.MAC.GCM, LS["HEAP_DATA"], 16), this.aes["asm"].get_iv(LS["HEAP_DATA"]), this["aes"].asm["set_iv"](0, 0, 0, 0), l.set(this.aes.heap["subarray"](0, 16))) : (l.set(i), l[15] = 1);
        var d = new DataView(l["buffer"]);
        if (this.gamma0 = d.getUint32(12), this["aes"].asm["set_nonce"](d["getUint32"](0), d.getUint32(4), d["getUint32"](8), 0), this.aes.asm["set_mask"](0, 0, 0, 4294967295), void 0 !== a) {
            if (a["length"] > YS) {
                throw new Error("illegal adata length");
            }
            a.length ? (this["adata"] = a, this._gcm_mac_process(a)) : this["adata"] = void 0;
        } else {
            this.adata = void 0;
        }
        if (this["counter"] < 1 || this["counter"] > 4294967295) {
            throw new Error("counter must be a positive 32-bit integer");
        }
        this["aes"].asm.set_counter(0, 0, 0, 0 | n.sRylA(this["gamma0"], this.counter));
    }

    return o(), a(c, [{
        key: "encrypt",
        value: function (t) {
            return this["AES_GCM_encrypt"](t);
        }
    }, {
        key: "AES_GCM_Encrypt_process",
        value: function (t) {
            var i = 0,
                a = t.length || 0,
                o = this.aes["asm"],
                c = this["aes"].heap,
                u = this["counter"],
                s = this["aes"].pos,
                f = this.aes.len,
                l = 0,
                d = f + a & -16,
                h = 0;
            if (n.sRylA((u - 1 << 4) + f, a) > YS) {
                throw new Error("counter overflow");
            }
            for (var p = new Uint8Array(d); a > 0;) {
                f += h = qS(c, n["sRylA"](s, f), t, i, a), i += h, a -= h, h = o.cipher(LS.ENC["CTR"], LS.HEAP_DATA + s, f), (h = o.mac(LS.MAC.GCM, LS["HEAP_DATA"] + s, h)) && p.set(c["subarray"](s, n.qGmti(s, h)), l), u += h >>> 4, l += h, h < f ? (s += h, f -= h) : (s = 0, f = 0);
            }
            return this.counter = u, this.aes["pos"] = s, this.aes.len = f, p;
        }
    }, {
        key: "AES_GCM_Encrypt_finish",
        value: function () {
            if (true) {
                var r = this.aes["asm"],
                    i = this["aes"]["heap"],
                    a = this.counter,
                    o = this.tagSize,
                    c = this["adata"],
                    u = this.aes.pos,
                    s = this["aes"].len,
                    f = new Uint8Array(s + o);
                r.cipher(LS.ENC.CTR, LS.HEAP_DATA + u, n.tOBXm(s + 15, -16)), s && f.set(i["subarray"](u, u + s));
                for (var l = s; 15 & l; l++) {
                    i[u + l] = 0;
                }
                r.mac(LS.MAC.GCM, LS["HEAP_DATA"] + u, l);
                var d = void 0 !== c ? c["length"] : 0,
                    h = (a - 1 << 4) + s;
                return i[0] = 0, i[1] = 0, i[2] = 0, i[3] = d >>> 29, i[4] = d >>> 21, i[5] = d >>> 13 & 255, i[6] = d >>> 5 & 255, i[7] = n["tOBXm"](d << 3, 255), i[8] = i[9] = i[10] = 0, i[11] = h >>> 29, i[12] = h >>> 21 & 255, i[13] = h >>> 13 & 255, i[14] = h >>> 5 & 255, i[15] = h << 3 & 255, r.mac(LS.MAC["GCM"], LS.HEAP_DATA, 16), r.get_iv(LS["HEAP_DATA"]), r.set_counter(0, 0, 0, this["gamma0"]), r.cipher(LS["ENC"].CTR, LS["HEAP_DATA"], 16), f.set(i.subarray(0, o), s), this.counter = 1, this.aes.pos = 0, this["aes"]["len"] = 0, f;
            }
            var p = this.AES_GCM_Encrypt_process(_0x5164b1),
                v = this.AES_GCM_Encrypt_finish(),
                x = new _0x48a99b(p.length + v.length);
            return p.length && x.set(p), v.length && x.set(v, p["length"]), x;
        }
    }, {
        key: "AES_GCM_encrypt",
        value: function (t) {
            for (var i = n["BnNOI"]["split"]("|"), a = 0; ;) {
                switch (i[a++]) {
                    case "0":
                        var o = this["AES_GCM_Encrypt_process"](t);
                        continue;
                    case "1":
                        o["length"] && c.set(o);
                        continue;
                    case "2":
                        return c;
                    case "3":
                        var c = new Uint8Array(o.length + u.length);
                        continue;
                    case "4":
                        u["length"] && c.set(u, o.length);
                        continue;
                    case "5":
                        var u = this["AES_GCM_Encrypt_finish"]();
                        continue;
                }
                break;
            }
        }
    }, {
        key: "_gcm_mac_process",
        value: function (t) {
            for (var i = this.aes.heap, a = this.aes["asm"], o = 0, c = t["length"] || 0, u = 0; c > 0;) {
                if (true) {
                    for (o += u = n["GHvJL"](qS, i, 0, t, o, c), c -= u; 15 & u;) {
                        i[u++] = 0;
                    }
                    a["mac"](LS["MAC"].GCM, LS.HEAP_DATA, u);
                } else {
                    _0x365f11.set(_0x2591e9), _0x1eb09d[15] = 1;
                }
            }
        }
    }], [{
        key: "encrypt",
        value: function (t, n, r, i, a) {
            return new c(n, r, i, a)["encrypt"](t);
        }
    }]), c;
}()








function em(t) {
    var n = {
        WhJqJ: function (t, e) {
            return t === e;
        },
        tZSiT: function (t, e) {
            return t instanceof e;
        },
        MkmEn: function (t, e) {
            return t === e;
        },
        vGBUx: function (t, e) {
            return t(e);
        },
        vXpMX: function (t, e) {
            return t === e;
        }
    };
    if (this.data = "", this.read = 0, n["WhJqJ"](typeof t, "string")) {
        this["data"] = t;
    } else if (typeof ArrayBuffer != "undefined" && n["tZSiT"](t, ArrayBuffer)) {
        var r = new Uint8Array(t);
        try {
            this.data = String.fromCharCode.apply(null, r);
        } catch (t) {
            if (n["MkmEn"]("SABKp", "OPiue")) {
                _0x1105d3 += _0x197963;
            } else {
                for (var i = 0; i < r["length"]; ++i) {
                    this["putByte"](r[i]);
                }
            }
        }
    } else {
        (n.tZSiT(t, em) || n["vGBUx"](g, t) === "object" && n["vXpMX"](typeof t.data, "string") && "number" == typeof t.read) && (this.data = t["data"], this["read"] = t.read);
    }
    this["_constructedStringLength"] = 0;
}
em.prototype["_optimizeConstructedString"] = function (t) {
    this["_constructedStringLength"] += t, this["_constructedStringLength"] > 4096 && (this["data"].substr(0, 1), this["_constructedStringLength"] = 0);
}, em.prototype.length = function () {
    return this.data["length"] - this["read"];
}, em["prototype"].putByte = function (t) {
    return this["putBytes"](String.fromCharCode(t));
}, em["prototype"].putBytes = function (t) {
    return this.data += t, this["_optimizeConstructedString"](t["length"]), this;
}, em["prototype"]["putInt32"] = function (t) {
    return this["putBytes"](String.fromCharCode(t >> 24 & 255) + String.fromCharCode(t >> 16 & 255) + String["fromCharCode"](t >> 8 & 255) + String.fromCharCode(255 & t));
}, em["prototype"]["getInt32"] = function () {
    var e = function (t, e) {
            return t << e;
        },
        n = function (t, e) {
            return t << e;
        }(this.data.charCodeAt(this.read), 24) ^ this.data["charCodeAt"](this["read"] + 1) << 16 ^ e(this.data.charCodeAt(this["read"] + 2), 8) ^ this.data.charCodeAt(this.read + 3);
    return this.read += 4, n;
}, em["prototype"]["bytes"] = function (t) {
    return {
        tyqRm: function (t, e) {
            return t === e;
        }
    }["tyqRm"](typeof t, "undefined") ? this.data.slice(this.read) : this.data["slice"](this.read, this.read + t);
}, em["prototype"].compact = function () {
    return this["read"] > 0 && (this.data = this.data.slice(this["read"]), this.read = 0), this;
}, em["prototype"].toHex = function () {
    for (var e = "", n = this.read; n < this.data["length"]; ++n) {
        var r = this.data.charCodeAt(n);
        r < 16 && (e += "0"), e += r["toString"](16);
    }
    return e;
}, em["prototype"].getInt32Le = function () {
    var e = this.data.charCodeAt(this.read) ^ this["data"].charCodeAt(this.read + 1) << 8 ^ this["data"]["charCodeAt"](this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
    return this.read += 4, e;
}, em.prototype["putInt32Le"] = function (t) {
    return this["putBytes"](String.fromCharCode(255 & t) + String["fromCharCode"](t >> 8 & 255) + String["fromCharCode"](255 & {
        qhVrY: function (t, e) {
            return t >> e;
        }
    }["qhVrY"](t, 16)) + String.fromCharCode(t >> 24 & 255));
};


function nm(t, e) {
    for (var r = function (t, e) {
        return t > e;
    }, i = ""; r(e, 0);) {
        if (1 & e && (i += t), (e >>>= 1) > 0) {
            if (false) {
                return _0x2305f7.toString().search(yaFEgr.pkSRq).toString()["constructor"](_0x132657).search("(((.+)+)+)+$");
            }
            t += t;
        }
    }
    return i;
}
var pA = ""
vA = function () {
    var e = "dCaQj";
    if (function (t, e) {
        return t && e;
    }(!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]), pA)) {
        if (false) {
            var n = _0x19494d["apply"](_0x369c40, arguments);
            return _0x491eb5 = null, n;
        }
        return pA;
    }
    for (var r, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), a = [], o = 0; o < 32; o++) {
        r = 0 | Math.random() * i.length, a[o] = i[r];
    }
    return pA = a.join("");
}
gA = function (t) {
    var e,
        r = xA(t),
        i = "ccc69af8e9801aee3efd5cf27ce91f0f38a220f00243f20088ec4a0e17d3ac9e70e7ba66d7836ecbe971327434fc46732e2b14a3840a83679ce8cb4b9825e5e5" || "4dd4c2e6b83162090e52b3c7a6733ba41cb2462b829ab58a196b39db57177524f49baf7f08e8d68d26a72e37c1a95a2f1f05a51892aef2949732b62a38aadd58",
        a = (e = "", (r + i).match(/[\da-f]{2}/gi).forEach(function (t) {
            e += String["fromCharCode"](parseInt(t, 16));
        }), e),
        o = {
            XMjzM: function (t, e) {
                return t(e);
            }
        }["XMjzM"](xA, a);
    return {
        aesKey: o.substring(0, 64),
        iv: o["substring"](64, 88)
    };
}
var nA = {};
var iA = null,
    aA = false,
    oA = null,
    cA = null;
function uA(t, e, n) {
    for (var r, i, a, o, c, u, s, f, l, d, h, p, v, x, g, b, m, y, w, _, k, I, S, A, C, E, M, T, $, j, O, D, P, L, B, R = {
        LDyQX: function (t, e, n, r) {
            return t(e, n, r);
        },
        irkbE: function (t, e) {
            return t >>> e;
        },
        wCPiM: function (t, e) {
            return t !== e;
        },
        nEjUa: "QMmJq",
        ymZzW: function (t, e) {
            return t ^ e;
        },
        VyFKB: function (t, e) {
            return t | e;
        },
        JbXlK: function (t, e) {
            return t >>> e;
        },
        Bcxeg: function (t, e) {
            return t << e;
        },
        hryrw: function (t, e) {
            return t | e;
        },
        SbKPd: function (t, e) {
            return t + e;
        },
        dvTwu: function (t, e) {
            return t + e;
        },
        lKYAi: "24|3|20|22|28|31|27|2|17|1|10|18|9|4|11|26|15|25|16|6|7|21|5|14|19|0|13|8|29|23|12|30",
        BTXIo: function (t, e) {
            return t >>> e;
        },
        TvlaU: function (t, e) {
            return t >>> e;
        },
        diPqh: function (t, e) {
            return t << e;
        },
        UqcpC: function (t, e) {
            return t << e;
        },
        qwwJX: function (t, e) {
            return t | e;
        },
        CJKwP: function (t, e) {
            return t >>> e;
        },
        lLKEk: function (t, e) {
            return t >>> e;
        },
        DMYju: function (t, e) {
            return t + e;
        },
        VqpqG: function (t, e) {
            return t / e;
        },
        PeExi: function (t, e) {
            return t + e;
        },
        LSgId: function (t, e) {
            return t >>> e;
        }
    }, V = n.length(); V >= 128;) {
        for ($ = 0; $ < 16; ++$) {
            if (R.wCPiM(R.nEjUa, "QMmJq")) {
                for (var N = "1|2|4|6|7|3|0|5".split("|"), F = 0;;) {
                    switch (N[F++]) {
                        case "0":
                            (_0x32a027.read > 2048 || 0 === _0x50e971.length()) && _0x54095a.compact();
                            continue;
                        case "1":
                            var q = _0xb4ba0f.length;
                            continue;
                        case "2":
                            _0x4b7a00["messageLength"] += q;
                            continue;
                        case "3":
                            R.LDyQX(_0x19b1a5, _0x4ed90a, _0x596ec6, _0xde3788);
                            continue;
                        case "4":
                            q = [q / 4294967296 >>> 0, q >>> 0];
                            continue;
                        case "5":
                            return _0x372eae;
                        case "6":
                            for (var U = _0x56fd22.fullMessageLength.length - 1; U >= 0; --U) {
                                _0x1e4de9["fullMessageLength"][U] += q[1], q[1] = q[0] + (_0x20e909.fullMessageLength[U] / 4294967296 >>> 0), _0x10b52f["fullMessageLength"][U] = R["irkbE"](_0x4ccb7b.fullMessageLength[U], 0), q[0] = q[1] / 4294967296 >>> 0;
                            }
                            continue;
                        case "7":
                            _0x4d556d.putBytes(_0x57c6ae);
                            continue;
                    }
                    break;
                }
            } else {
                e[$][0] = n.getInt32() >>> 0, e[$][1] = n.getInt32() >>> 0;
            }
        }
        for (; $ < 80; ++$) {
            r = (((j = (D = e[$ - 2])[0]) >>> 19 | (O = D[1]) << 13) ^ (O >>> 29 | j << 3) ^ j >>> 6) >>> 0, i = (R.ymZzW(j << 13 | O >>> 19, O << 3 | j >>> 29) ^ (j << 26 | O >>> 6)) >>> 0, j = (L = e[$ - 15])[0], O = L[1], a = R["ymZzW"](R.VyFKB(j >>> 1, O << 31) ^ (j >>> 8 | O << 24), R.JbXlK(j, 7)) >>> 0, o = ((R["Bcxeg"](j, 31) | O >>> 1) ^ (R["Bcxeg"](j, 24) | O >>> 8) ^ R["hryrw"](j << 25, O >>> 7)) >>> 0, P = e[$ - 7], B = e[$ - 16], O = i + P[1] + o + B[1], e[$][0] = R.SbKPd(R["dvTwu"](r, P[0]) + a, B[0]) + (O / 4294967296 >>> 0) >>> 0, e[$][1] = O >>> 0;
        }
        for (v = t[0][0], x = t[0][1], g = t[1][0], b = t[1][1], m = t[2][0], y = t[2][1], w = t[3][0], _ = t[3][1], k = t[4][0], I = t[4][1], S = t[5][0], A = t[5][1], C = t[6][0], E = t[6][1], M = t[7][0], T = t[7][1], $ = 0; $ < 80; ++$) {
            for (var W = R.lKYAi.split("|"), H = 0;;) {
                switch (W[H++]) {
                    case "0":
                        m = g;
                        continue;
                    case "1":
                        r = M + s + l + oA[$][0] + e[$][0] + (O / 4294967296 >>> 0) >>> 0;
                        continue;
                    case "2":
                        p = (x & b | y & (x ^ b)) >>> 0;
                        continue;
                    case "3":
                        f = ((k << 18 | I >>> 14) ^ (k << 14 | I >>> 18) ^ (I << 23 | k >>> 9)) >>> 0;
                        continue;
                    case "4":
                        o = R.BTXIo(O, 0);
                        continue;
                    case "5":
                        I = O >>> 0;
                        continue;
                    case "6":
                        A = I;
                        continue;
                    case "7":
                        O = _ + i;
                        continue;
                    case "8":
                        g = v;
                        continue;
                    case "9":
                        a = R["dvTwu"](R.SbKPd(c, h), O / 4294967296 >>> 0) >>> 0;
                        continue;
                    case "10":
                        i = O >>> 0;
                        continue;
                    case "11":
                        M = C;
                        continue;
                    case "12":
                        v = r + a + (O / 4294967296 >>> 0) >>> 0;
                        continue;
                    case "13":
                        y = b;
                        continue;
                    case "14":
                        w = m;
                        continue;
                    case "15":
                        C = S;
                        continue;
                    case "16":
                        S = k;
                        continue;
                    case "17":
                        O = T + f + d + oA[$][1] + e[$][1];
                        continue;
                    case "18":
                        O = u + p;
                        continue;
                    case "19":
                        _ = y;
                        continue;
                    case "20":
                        l = R.ymZzW(C, k & R.ymZzW(S, C)) >>> 0;
                        continue;
                    case "21":
                        k = w + r + (O / 4294967296 >>> 0) >>> 0;
                        continue;
                    case "22":
                        d = (E ^ I & R.ymZzW(A, E)) >>> 0;
                        continue;
                    case "23":
                        O = R["SbKPd"](i, o);
                        continue;
                    case "24":
                        s = ((R.TvlaU(k, 14) | I << 18) ^ (k >>> 18 | I << 14) ^ (I >>> 9 | R.diPqh(k, 23))) >>> 0;
                        continue;
                    case "25":
                        E = A;
                        continue;
                    case "26":
                        T = E;
                        continue;
                    case "27":
                        h = R["BTXIo"](v & g | m & (v ^ g), 0);
                        continue;
                    case "28":
                        c = (R.ymZzW(v >>> 28 | R.Bcxeg(x, 4), x >>> 2 | v << 30) ^ R["hryrw"](x >>> 7, R["UqcpC"](v, 25))) >>> 0;
                        continue;
                    case "29":
                        b = x;
                        continue;
                    case "30":
                        x = O >>> 0;
                        continue;
                    case "31":
                        u = ((v << 4 | x >>> 28) ^ R.qwwJX(R.diPqh(x, 30), R.JbXlK(v, 2)) ^ (x << 25 | v >>> 7)) >>> 0;
                        continue;
                }
                break;
            }
        }
        O = t[0][1] + x, t[0][0] = t[0][0] + v + (O / 4294967296 >>> 0) >>> 0, t[0][1] = O >>> 0, O = t[1][1] + b, t[1][0] = R.BTXIo(t[1][0] + g + (O / 4294967296 >>> 0), 0), t[1][1] = R.BTXIo(O, 0), O = t[2][1] + y, t[2][0] = R.CJKwP(t[2][0] + m + R["lLKEk"](O / 4294967296, 0), 0), t[2][1] = O >>> 0, O = R["dvTwu"](t[3][1], _), t[3][0] = R.irkbE(R.DMYju(t[3][0], w) + (O / 4294967296 >>> 0), 0), t[3][1] = O >>> 0, O = t[4][1] + I, t[4][0] = t[4][0] + k + (O / 4294967296 >>> 0) >>> 0, t[4][1] = O >>> 0, O = t[5][1] + A, t[5][0] = t[5][0] + S + (R.VqpqG(O, 4294967296) >>> 0) >>> 0, t[5][1] = R.TvlaU(O, 0), O = R.PeExi(t[6][1], E), t[6][0] = t[6][0] + C + (O / 4294967296 >>> 0) >>> 0, t[6][1] = O >>> 0, O = t[7][1] + T, t[7][0] = R.LSgId(R.PeExi(t[7][0] + M, O / 4294967296 >>> 0), 0), t[7][1] = O >>> 0, V -= 128;
    }
}
nA["create"] = function (t) {
    var rA,
        r = {
            ittod: function (t, e) {
                return t < e;
            },
            mrTfZ: function (t, e) {
                return t !== e;
            },
            YoJzG: function (t, e) {
                return t >= e;
            },
            tKXXx: function (t, e) {
                return t + e;
            },
            mMxoJ: function (t, e) {
                return t & e;
            },
            YFRIk: "SHA-512/224",
            gqvfD: "SHA-384",
            YthRW: "Invalid SHA-512 algorithm: "
        };
    if (!aA && (rA, iA = String["fromCharCode"](128), iA += nm(String["fromCharCode"](0), 128), oA = [[1116352408, 3609767458], [1899447441, 602891725], [3049323471, 3964484399], [3921009573, 2173295548], [961987163, 4081628472], [1508970993, 3053834265], [2453635748, 2937671579], [2870763221, 3664609560], [3624381080, 2734883394], [310598401, 1164996542], [607225278, 1323610764], [1426881987, 3590304994], [1925078388, 4068182383], [2162078206, 991336113], [2614888103, 633803317], [3248222580, 3479774868], [3835390401, 2666613458], [4022224774, 944711139], [264347078, 2341262773], [604807628, 2007800933], [770255983, 1495990901], [1249150122, 1856431235], [1555081692, 3175218132], [1996064986, 2198950837], [2554220882, 3999719339], [2821834349, 766784016], [2952996808, 2566594879], [3210313671, 3203337956], [3336571891, 1034457026], [3584528711, 2466948901], [113926993, 3758326383], [338241895, 168717936], [666307205, 1188179964], [773529912, 1546045734], [1294757372, 1522805485], [1396182291, 2643833823], [1695183700, 2343527390], [1986661051, 1014477480], [2177026350, 1206759142], [2456956037, 344077627], [2730485921, 1290863460], [2820302411, 3158454273], [3259730800, 3505952657], [3345764771, 106217008], [3516065817, 3606008344], [3600352804, 1432725776], [4094571909, 1467031594], [275423344, 851169720], [430227734, 3100823752], [506948616, 1363258195], [659060556, 3750685593], [883997877, 3785050280], [958139571, 3318307427], [1322822218, 3812723403], [1537002063, 2003034995], [1747873779, 3602036899], [1955562222, 1575990012], [2024104815, 1125592928], [2227730452, 2716904306], [2361852424, 442776044], [2428436474, 593698344], [2756734187, 3733110249], [3204031479, 2999351573], [3329325298, 3815920427], [3391569614, 3928383900], [3515267271, 566280711], [3940187606, 3454069534], [4118630271, 4000239992], [116418474, 1914138554], [174292421, 2731055270], [289380356, 3203993006], [460393269, 320620315], [685471733, 587496836], [852142971, 1086792851], [1017036298, 365543100], [1126000580, 2618297676], [1288033470, 3409855158], [1501505948, 4234509866], [1607167915, 987167468], [1816402316, 1246189591]], (cA = {})["SHA-512"] = [[1779033703, 4089235720], [3144134277, 2227873595], [1013904242, 4271175723], [2773480762, 1595750129], [1359893119, 2917565137], [2600822924, 725511199], [528734635, 4215389547], [1541459225, 327033209]], cA["SHA-384"] = [[3418070365, 3238371032], [1654270250, 914150663], [2438529370, 812702999], [355462360, 4144912697], [1731405415, 4290775857], [2394180231, 1750603025], [3675008525, 1694076839], [1203062813, 3204075428]], cA["SHA-512/256"] = [[573645204, 4230739756], [2673172387, 3360449730], [596883563, 1867755857], [2520282905, 1497426621], [2519219938, 2827943907], [3193839141, 1401305490], [721525244, 746961066], [246885852, 2177182882]], cA["SHA-512/224"] = [[2352822216, 424955298], [1944164710, 2312950998], [502970286, 855612546], [1738396948, 1479516111], [258812777, 2077511080], [2011393907, 79989058], [1067287976, 1780299464], [286451373, 2446758561]], aA = true), typeof t == "undefined" && (t = "SHA-512"), !(t in cA)) {
        throw new Error(r.YthRW + t);
    }
    for (var i = cA[t], a = null, o = new em(), c = new Array(80), u = 0; u < 80; ++u) {
        c[u] = new Array(2);
    }
    var s = {
        algorithm: t.replace("-", "").toLowerCase(),
        blockLength: 128,
        digestLength: 64,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 16,
        start: function () {
            s["messageLength"] = 0, s["fullMessageLength"] = s.messageLength128 = [];
            for (var e = s["messageLengthSize"] / 4, c = 0; c < e; ++c) {
                s.fullMessageLength.push(0);
            }
            o = new em(), a = new Array(i.length);
            for (c = 0; r.ittod(c, i.length); ++c) {
                a[c] = i[c].slice(0);
            }
            return s;
        }
    };
    return s.start(), s.update = function (t) {
        if (r.mrTfZ("hjcNW", "MWHqu")) {
            var i = t.length;
            s["messageLength"] += i, i = [i / 4294967296 >>> 0, i >>> 0];
            for (var u = s.fullMessageLength["length"] - 1; r["YoJzG"](u, 0); --u) {
                if (false) {
                    if (_0x13d586) {
                        var f = _0x19fc91.apply(_0x5f421d, arguments);
                        return _0x163bb4 = null, f;
                    }
                } else {
                    s.fullMessageLength[u] += i[1], i[1] = i[0] + (s["fullMessageLength"][u] / 4294967296 >>> 0), s.fullMessageLength[u] = s.fullMessageLength[u] >>> 0, i[0] = i[1] / 4294967296 >>> 0;
                }
            }
            return o["putBytes"](t), uA(a, c, o), (o.read > 2048 || 0 === o["length"]()) && o["compact"](), s;
        }
        _0x125763[_0x5bc20a][0] = _0x4bd0ea["getInt32"]() >>> 0, _0x23170a[_0x30fdd2][1] = _0x441250.getInt32() >>> 0;
    }, s.digest = function () {
        for (var i = "8|12|3|5|10|0|15|2|1|4|11|9|13|7|14|6|16"["split"]("|"), u = 0;;) {
            switch (i[u++]) {
                case "0":
                    var f;
                    continue;
                case "1":
                    x.putInt32(b);
                    continue;
                case "2":
                    for (var l = 0; l < s["fullMessageLength"]["length"] - 1; ++l) {
                        b += (f = 8 * s["fullMessageLength"][l + 1]) / 4294967296 >>> 0, x["putInt32"](b >>> 0), b = f >>> 0;
                    }
                    continue;
                case "3":
                    var d = r.tKXXx(s["fullMessageLength"][s.fullMessageLength.length - 1], s["messageLengthSize"]);
                    continue;
                case "4":
                    var h = new Array(a.length);
                    continue;
                case "5":
                    var p = r.mMxoJ(d, s.blockLength - 1);
                    continue;
                case "6":
                    for (l = 0; l < v; ++l) {
                        g.putInt32(h[l][0]), (l !== v - 1 || t !== r.YFRIk) && g.putInt32(h[l][1]);
                    }
                    continue;
                case "7":
                    var v;
                    continue;
                case "8":
                    var x = new em();
                    continue;
                case "9":
                    uA(h, c, x);
                    continue;
                case "10":
                    x.putBytes(iA.substr(0, s["blockLength"] - p));
                    continue;
                case "11":
                    for (l = 0; l < a["length"]; ++l) {
                        h[l] = a[l].slice(0);
                    }
                    continue;
                case "12":
                    x["putBytes"](o["bytes"]());
                    continue;
                case "13":
                    var g = new em();
                    continue;
                case "14":
                    v = "SHA-512" === t ? h.length : t === r["gqvfD"] ? h.length - 2 : h["length"] - 4;
                    continue;
                case "15":
                    var b = 8 * s.fullMessageLength[0];
                    continue;
                case "16":
                    return g;
            }
            break;
        }
    }, s;
};

function sha512(input) {
    return crypto.createHash('sha512').update(input).digest('hex');
}

xA = function (t) {
    var e = nA.create();
    return e.update(t), e.digest().toHex();
}

function o(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = b(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0,
                i = function () {};
            return {
                s: i,
                n: function () {
                    return r >= t.length ? {
                        done: true
                    } : {
                        done: false,
                        value: t[r++]
                    };
                },
                e: function (t) {
                    throw t;
                },
                f: i
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a,
        o = true,
        c = false;
    return {
        s: function () {
            n = n.call(t);
        },
        n: function () {
            var t = n.next();
            return o = t.done, t;
        },
        e: function (t) {
            c = true, a = t;
        },
        f: function () {
            try {
                o || null == n.return || n.return();
            } finally {
                if (c) {
                    throw a;
                }
            }
        }
    };
}
bA = function (t) {
    var e,
        n,
        r,
        i,
        c = function (t) {
            var e,
                r = {
                    FbfrF: function (t, e) {
                        return t <= e;
                    },
                    gAxsg: function (t, e) {
                        return t >> e;
                    }
                },
                i = "",
                a = o(t);
            try {
                for (a.s(); !(e = a.n())["done"];) {
                    var c = e.value,
                        u = c.charCodeAt(0);
                    u <= 127 ? i += c : u >= 128 && r.FbfrF(u, 2047) ? (i += String.fromCharCode(192 | r["gAxsg"](u, 6)), i += String.fromCharCode(63 & u | 128)) : u >= 2048 && u <= 65535 && (i += String["fromCharCode"](u >> 12 | 224), i += String["fromCharCode"](u >> 6 & 63 | 128), i += String["fromCharCode"](63 & u | 128));
                }
            } catch (t) {
                a.e(t);
            } finally {
                a.f();
            }
            return i;
        }(JSON["stringify"](t)),
        u = xA(c),
        s = function (t) {
            for (var e = "", n = 0; n < t.length; n++) {
                e += t.charCodeAt(n).toString(16);
            }
            return e;
        }(c),
        f = [6, 0, 0],
        l = (e = u + s, n = gA(vA(true)), r = n.aesKey, i = n.iv, JS.encrypt(Wb(e), Wb(r), Wb(i))),
        d = function (t) {
            for (var n = t.length, r = new Uint8Array(n), i = 0; i < n; i++) {
                r[i] = t["charCodeAt"](i);
            }
            return r;
        }(vA()),
        h = new Uint8Array([116, 99, f[0], 16, f[1], f[2]]),
        p = new Uint8Array(new ArrayBuffer(l.length + 6 + 32));
    return p.set(h, 0), p.set(d, 6), p["set"](l, 38), function (t) {
        for (var n = "", r = t["byteLength"], i = 0; i < r; i++) {
            n += String["fromCharCode"](t[i]);
        }
        return btoa(n);
    }(p);
};
//  JS.encrypt(Wb(e), Wb(r), Wb(i))),
// CryptoJS.AES_GCM.encrypt(Wb(e), Wb(r), Wb(i)))















t = {
    "modified_img_width": 340,
    "id": "d20e62219296c56260074377e97e8ba0e04f2afd",
    "mode": "slide",
    "SSkQC": [
        {
            "x": 3,
            "y": 21,
            "relative_time": 85
        },
        {
            "x": 6,
            "y": 21,
            "relative_time": 93
        },
        {
            "x": 12,
            "y": 21,
            "relative_time": 102
        },
        {
            "x": 18,
            "y": 21,
            "relative_time": 111
        },
        {
            "x": 23,
            "y": 21,
            "relative_time": 123
        },
        {
            "x": 28,
            "y": 21,
            "relative_time": 132
        },
        {
            "x": 31,
            "y": 21,
            "relative_time": 140
        },
        {
            "x": 32,
            "y": 21,
            "relative_time": 169
        }
    ],
    "jon": [],
    "XFix": {
        "qHDUT": {
            "x": 368,
            "y": 76,
            "time": 1732369909482
        },
        "ybo3lT": {
            "x": 23,
            "y": 328,
            "time": 1732369910304
        },
        "FwTdH": [
            {
                "x": 144,
                "y": 171,
                "time": 1732369909908
            },
            {
                "x": 104,
                "y": 278,
                "time": 1732369909947
            },
            {
                "x": 89,
                "y": 316,
                "time": 1732369909981
            },
            {
                "x": 70,
                "y": 331,
                "time": 1732369910017
            },
            {
                "x": 57,
                "y": 336,
                "time": 1732369910057
            },
            {
                "x": 56,
                "y": 337,
                "time": 1732369910118
            },
            {
                "x": 55,
                "y": 337,
                "time": 1732369910173
            },
            {
                "x": 54,
                "y": 335,
                "time": 1732369910219
            },
            {
                "x": 38,
                "y": 334,
                "time": 1732369910253
            },
            {
                "x": 23,
                "y": 329,
                "time": 1732369910294
            },
            {
                "x": 24,
                "y": 327,
                "time": 1732369910452
            },
            {
                "x": 27,
                "y": 325,
                "time": 1732369910501
            },
            {
                "x": 31,
                "y": 322,
                "time": 1732369910540
            },
            {
                "x": 36,
                "y": 316,
                "time": 1732369910579
            },
            {
                "x": 37,
                "y": 313,
                "time": 1732369910615
            },
            {
                "x": 42,
                "y": 310,
                "time": 1732369910649
            },
            {
                "x": 47,
                "y": 310,
                "time": 1732369910810
            },
            {
                "x": 67,
                "y": 310,
                "time": 1732369910848
            },
            {
                "x": 76,
                "y": 310,
                "time": 1732369910894
            },
            {
                "x": 81,
                "y": 309,
                "time": 1732369910990
            }
        ],
        "ijB337": [],
        "9X1JmjAuH": [
            {
                "x": 44,
                "y": 310,
                "time": 1732369910725,
                "t": 0
            },
            {
                "x": 47,
                "y": 310,
                "time": 1732369910810,
                "t": 0
            },
            {
                "x": 56,
                "y": 310,
                "time": 1732369910827,
                "t": 0
            },
            {
                "x": 67,
                "y": 310,
                "time": 1732369910848,
                "t": 0
            },
            {
                "x": 75,
                "y": 310,
                "time": 1732369910865,
                "t": 0
            }
        ],
        "70l8CLD": []
    },
    "env": {
        "canvas_hash": "8dd1cf557222d1bec59f52a3d204d47f",
        "webgl_hash": "5f72324b79e619bea91fea43b6622487",
        "font_hash": "b10062ce423875af95e2ce925db14abe67f646775f292296d337d5ad79f9",
        "audio_hash": 124.04347527516074,
        "time_offset": -480,
        "time_zone": "Asia/Shanghai",
        "languages": [
            "zh-CN"
        ],
        "plugins": [
            "PDF Viewer",
            "Chrome PDF Viewer",
            "Chromium PDF Viewer",
            "Microsoft Edge PDF Viewer",
            "WebKit built-in PDF"
        ],
        "platform": "Linux x86_64",
        "max_touch_points": 0,
        "webdriver": false,
        "touch_actions": [],
        "mouse_actions": [
            "1,1",
            "1,1",
            "1,1",
            "1,1",
            "1,1",
            "1,1",
            "1,1"
        ],
        "device": {},
        "os": {
            "name": "Linux",
            "version": "x86_64"
        },
        "browser": {
            "name": "Chrome",
            "version": "129.0.0.0"
        },
        "engine": {
            "name": "Blink",
            "version": "129.0.0.0"
        },
        "gpu": {
            "vendor": "Google Inc. (Google)",
            "renderer": "ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)"
        },
        "fps": 5,
        "resolution": "1920,1080",
        "browser_size": "1854,1048",
        "page_size": "1854,927",
        "captcha_origin": "0,0",
        "captcha_size": "380, 384",
        "mask_time": 173235359421319,
        "loading_time": 1732353595118,
        "ready_time": 1732353596436,
        "detectors": {
            "RegToString": {
                "enabled": false,
                "value": 0
            },
            "DefineId": {
                "enabled": true,
                "value": 0
            },
            "DateToString": {
                "enabled": true,
                "value": 0
            },
            "FuncToString": {
                "enabled": true,
                "value": 0
            },
            "Debugger": {
                "enabled": false,
                "value": 0
            },
            "Performance": {
                "enabled": true,
                "value": 1
            },
            "DebugLib": {
                "enabled": true,
                "value": 0
            }
        }
    },
    "a": 36
}

console.log(bA(t));