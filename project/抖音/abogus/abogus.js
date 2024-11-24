
reg = [
    1937774191,
    1226093241,
    388252375,
    3666478592,
    2842636476,
    372324522,
    3817729613,
    2969243214
]
chunk = []
size = 0

function dr(t, r) {
    return (t << (r %= 32) | t >>> 32 - r) >>> 0
}
function yr(t) {
    return 0 <= t && t < 16 ? 2043430169 : 16 <= t && t < 64 ? 2055708042 : void console.error("invalid j for constant Tj")
}
function br(t, r, e, n) {
    return 0 <= t && t < 16 ? (r ^ e ^ n) >>> 0 : 16 <= t && t < 64 ? (r & e | r & n | e & n) >>> 0 : (console.error("invalid j for bool function FF"),
        0)
}
function mr(t, r, e, n) {
    return 0 <= t && t < 16 ? (r ^ e ^ n) >>> 0 : 16 <= t && t < 64 ? (r & e | ~r & n) >>> 0 : (console.error("invalid j for bool function GG"),
        0)
}
function ir(t) {
    return ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        ir(t)
}
function ur(t, r) {
    for (var e = 0; e < r.length; e++) {
        var n = r[e];
        n.enumerable = n.enumerable || !1,
            n.configurable = !0,
        "value"in n && (n.writable = !0),
            Object.defineProperty(t, sr(n.key), n)
    }
}
function sr(t) {
    var r = function(t, r) {
        if ("object" != ir(t) || !t)
            return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var n = e.call(t, r || "default");
            if ("object" != ir(n))
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === r ? String : Number)(t)
    }(t, "string");
    return "symbol" == ir(r) ? r : r + ""
}

function reset() {
    reg[0] = 1937774191,
        reg[1] = 1226093241,
        reg[2] = 388252375,
        reg[3] = 3666478592,
        reg[4] = 2842636476,
        reg[5] = 372324522,
        reg[6] = 3817729613,
        reg[7] = 2969243214,
        chunk = [],
        size = 0
}
function write(t) {
    var r = "string" == typeof t ? function(t) {
        var r = encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, (function(t, r) {
                return String.fromCharCode("0x" + r)
            }
        ))
            , e = new Array(r.length);
        return Array.prototype.forEach.call(r, (function(t, r) {
                e[r] = t.charCodeAt(0)
            }
        )),
            e
    }(t) : t;
    size += r.length;
    var e = 64 - chunk.length;
    if (r.length < e)
        chunk = chunk.concat(r);
    else
        for (chunk = chunk.concat(r.slice(0, e)); chunk.length >= 64; )
            _compress(chunk),
                e < r.length ? chunk = r.slice(e, Math.min(e + 64, r.length)) : chunk = [],
                e += 64
}
function sum(t, r) {
    t && (reset(),
        write(t)),
        _fill();
    for (var e = 0; e < chunk.length; e += 64)
        _compress(chunk.slice(e, e + 64));
    var n, o, i, u = null;
    if ("hex" == r) {
        u = "";
        for (e = 0; e < 8; e++)
            u += (n = reg[e].toString(16),
                o = 8,
                i = "0",
                n.length >= o ? n : i.repeat(o - n.length) + n)
    } else
        for (u = new Array(32),
                 e = 0; e < 8; e++) {
            var s = reg[e];
            u[4 * e + 3] = (255 & s) >>> 0,
                s >>>= 8,
                u[4 * e + 2] = (255 & s) >>> 0,
                s >>>= 8,
                u[4 * e + 1] = (255 & s) >>> 0,
                s >>>= 8,
                u[4 * e] = (255 & s) >>> 0
        }
    return reset(),
        u
}
function _compress(t) {
    if (t < 64)
        console.error("compress error: not enough data");
    else {
        for (var r = function(t) {
            for (var r = new Array(132), e = 0; e < 16; e++)
                r[e] = t[4 * e] << 24,
                    r[e] |= t[4 * e + 1] << 16,
                    r[e] |= t[4 * e + 2] << 8,
                    r[e] |= t[4 * e + 3],
                    r[e] >>>= 0;
            for (var n = 16; n < 68; n++) {
                var o = r[n - 16] ^ r[n - 9] ^ dr(r[n - 3], 15);
                o = o ^ dr(o, 15) ^ dr(o, 23),
                    r[n] = (o ^ dr(r[n - 13], 7) ^ r[n - 6]) >>> 0
            }
            for (n = 0; n < 64; n++)
                r[n + 68] = (r[n] ^ r[n + 4]) >>> 0;
            return r
        }(t), e = reg.slice(0), n = 0; n < 64; n++) {
            var o = dr(e[0], 12) + e[4] + dr(yr(n), n)
                , i = ((o = dr(o = (4294967295 & o) >>> 0, 7)) ^ dr(e[0], 12)) >>> 0
                , u = br(n, e[0], e[1], e[2]);
            u = (4294967295 & (u = u + e[3] + i + r[n + 68])) >>> 0;
            var s = mr(n, e[4], e[5], e[6]);
            s = (4294967295 & (s = s + e[7] + o + r[n])) >>> 0,
                e[3] = e[2],
                e[2] = dr(e[1], 9),
                e[1] = e[0],
                e[0] = u,
                e[7] = e[6],
                e[6] = dr(e[5], 19),
                e[5] = e[4],
                e[4] = (s ^ dr(s, 9) ^ dr(s, 17)) >>> 0
        }
        for (var c = 0; c < 8; c++)
            reg[c] = (reg[c] ^ e[c]) >>> 0
    }
}
function _fill() {
    var t = 8 * size
        , r = chunk.push(128) % 64;
    for (64 - r < 8 && (r -= 64); r < 56; r++)
        chunk.push(0);
    for (var e = 0; e < 4; e++) {
        var n = Math.floor(t / 4294967296);
        chunk.push(n >>> 8 * (3 - e) & 255)
    }
    for (e = 0; e < 4; e++)
        chunk.push(t >>> 8 * (3 - e) & 255)
}


function rc4(key, str) {
    var s = [], j = 0, x, res = '';
    for (var i = 0; i < 256; i++) {
        s[i] = 255 - i;
    }
    for (i = 0; i < 256; i++) {
        j = (j + j * s[i] + key.charCodeAt(i % key.length)) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
    }
    i = 0;
    j = 0;
    for (var y = 0; y < str.length; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
        res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return res;
}
function base64EncodeManual(input) {
    const chars = "ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe";
    let result = '';
    let i = 0;

    // 处理每三个字节
    while (i < input.length) {
        // 获取每个字节
        let byte1 = (input.charCodeAt(i++) & 255) << 16;
        let byte2 = i < input.length ? (byte1 | (input.charCodeAt(i++) & 255) << 8) : NaN;
        let byte3 = i < input.length ? (byte2 | (input.charCodeAt(i++) & 255)) : NaN;

        // 第一种情况：输入长度是 3 的倍数
        if (!isNaN(byte2) && !isNaN(byte3)) {
            // 每3个字节编码成4个Base64字符
            result += chars.charAt((byte3 & 16515072) >> 18); // 第一个Base64字符
            result += chars.charAt((byte3 & 258048) >> 12); // 第二个Base64字符
            result += chars.charAt(((byte3 & 4032) >> 6)); // 第三个Base64字符
            result += chars.charAt(byte3 & 63); // 第四个Base64字符
        }
        // 第二种情况：剩余一个字节（不足3个字节）
        else if (!isNaN(byte2)) {
            // 只有2个字节，填充1个`=`
            result += chars.charAt((byte2 & 16515072) >> 18); // 第一个Base64字符
            result += chars.charAt((byte2 & 258048) >> 12); // 第二个Base64字符
            result += chars.charAt(((byte2 & 4032) >> 6)); // 第三个Base64字符
            result += '='; // 填充一个`=`
        }
        // 第三种情况：剩余一个字节（不足3个字节）
        else {
            // 只有1个字节，填充2个`=`
            result += chars.charAt((byte1 & 16515072) >> 18); // 第一个Base64字符
            result += chars.charAt((byte1 & 258048) >> 12); // 第二个Base64字符
            result += '=='; // 填充两个`=`
        }
    }

    return result;
}
function gener_random(random, option) {
    return [
        (random & 255 & 170) | option[0] & 85,
        (random & 255 & 85) | option[0] & 170,
        (random >> 8 & 255 & 170) | option[1] & 85,
        (random >> 8 & 255 & 85) | option[1] & 170
    ];
}

function generateRandomNumber() {
    return Math.floor(Math.random() * (10 - 5 + 1) + 5);
}

function arr104_to_arr140(arr94) {
    let result = [];
    let number_of_loops = 0;
    const xor_array = [145, 110, 66, 189, 44, 211];
    number_of_loops = Math.floor(arr94.length / 3);
    for (let i = 0, j = 0; i < number_of_loops; i++) {
        j = i * 3;
        let y = (Math.random() * 1000) & 255;
        result.push(y & xor_array[0] | (arr94[j] & xor_array[1]));
        result.push(y & xor_array[2] | (arr94[j + 1] & xor_array[3]));
        result.push(y & xor_array[4] | (arr94[j + 2] & xor_array[5]));
        result.push((arr94[j] & xor_array[0]) | (arr94[j + 1] & xor_array[2]) | arr94[j + 2] & xor_array[4]);
    }
    result.push(arr94[93]);
    return result;
}

function base64EncodeManual(chars, input) {
    chars_li = {


        "s0": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        "s1": "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=",
        "s2": "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=",
        "s3": "ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe",
        "s4": "Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe"
    }
    chars = chars_li[chars];
    let result = '';
    let i = 0;

    // 处理每三个字节
    while (i < input.length) {
        // 获取每个字节
        let byte1 = (input.charCodeAt(i++) & 255) << 16;
        let byte2 = i < input.length ? (byte1 | (input.charCodeAt(i++) & 255) << 8) : NaN;
        let byte3 = i < input.length ? (byte2 | (input.charCodeAt(i++) & 255)) : NaN;

        // 第一种情况：输入长度是 3 的倍数
        if (!isNaN(byte2) && !isNaN(byte3)) {
            // 每3个字节编码成4个Base64字符
            result += chars.charAt((byte3 & 16515072) >> 18); // 第一个Base64字符
            result += chars.charAt((byte3 & 258048) >> 12); // 第二个Base64字符
            result += chars.charAt(((byte3 & 4032) >> 6)); // 第三个Base64字符
            result += chars.charAt(byte3 & 63); // 第四个Base64字符
        }
        // 第二种情况：剩余一个字节（不足3个字节）
        else if (!isNaN(byte2)) {
            // 只有2个字节，填充1个`=`
            result += chars.charAt((byte2 & 16515072) >> 18); // 第一个Base64字符
            result += chars.charAt((byte2 & 258048) >> 12); // 第二个Base64字符
            result += chars.charAt(((byte2 & 4032) >> 6)); // 第三个Base64字符
            result += '='; // 填充一个`=`
        }
        // 第三种情况：剩余一个字节（不足3个字节）
        else {
            // 只有1个字节，填充2个`=`
            result += chars.charAt((byte1 & 16515072) >> 18); // 第一个Base64字符
            result += chars.charAt((byte1 & 258048) >> 12); // 第二个Base64字符
            result += '=='; // 填充两个`=`
        }
    }

    return result;
}
screen = {
    "innerWidth": 329,
    "innerHeight": 927,
    "outerWidth": 1854,
    "outerHeight": 1048,
    "availWidth": 1854,
    "availHeight": 1048,
    "sizeWidth": 1920,
    "sizeHeight": 1080,
    "platform": "Linux x86_64"
}
start_ts = Date.now()
_enter_page_ts = start_ts + generateRandomNumber()

salt = "dhzx"
params = "device_platform=webapp&aid=6383&channel=channel_pc_web&item_id=7441496752563178763&comment_id=7441509039428961075&cut_version=1&cursor=0&count=3&item_type=0&update_version_code=170400&pc_client_type=1&pc_libra_divert=Linux&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=Linux+x86_64&browser_name=Chrome&browser_version=129.0.0.0&browser_online=true&engine_name=Blink&engine_version=129.0.0.0&os_name=Linux&os_version=x86_64&cpu_core_num=4&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7398143662553712191&uifid=ed8ce24dac050ecbf70862281782bcdd525c5e600bfcd51f14f019cde0166441ba817d0fba14068780053a924594bf2a9d9c13d11c218e5f1ad0043502a232cc9e6cec2c15af5fd8f9054aaf054655234dedb5b1591ec48d7e42637c4388519574f1c19a2e6455b54b776dcf8ba0d71306b4310d0ffdef9ab513a204abe274cf82c6c1ae963f0d41543efda8631774dcdbd3a2ec356000dbe684a483e9ee9336&msToken=W2nLpDP-UOHkO_f6C6TSjCy6O3CfLIwz8y2Pr66ybB-JNtHvFF2gN7bJIEHNR9iNZCf1eE97rhbYTXluk1Si3O2v10-pW6rZUCr9TnYOl6XaCaUjynnq6XJO3XkKQAioByoJfHZaC_euChc0UL7c__7rlLsgwj_Zvx_uTkrexrCG72LLCuFWjGo2Dg%3D%3D&msToken=W2nLpDP-UOHkO_f6C6TSjCy6O3CfLIwz8y2Pr66ybB-JNtHvFF2gN7bJIEHNR9iNZCf1eE97rhbYTXluk1Si3O2v10-pW6rZUCr9TnYOl6XaCaUjynnq6XJO3XkKQAioByoJfHZaC_euChc0UL7c__7rlLsgwj_Zvx_uTkrexrCG72LLCuFWjGo2Dg%3D%3D" + salt
ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
n = [
    [
        {
            "5": {
                "aid": 6383,
                "pageId": 6241,
                "boe": false,
                "ddrt": 8.5,
                "paths": {
                    "include": [
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                    ],
                    "exclude": [
                        {}
                    ]
                },
                "track": {
                    "mode": 0,
                    "delay": 300,
                    "paths": []
                },
                "slU": "",
                "dump": true,
                "rpU": "",
                "ic": 8.5
            }
        },
        {},
        "dhzx",
        1732805927431,
        98,
        {
            "name": "Chrome"
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    {
        "0": 1,
        "1": 0,
        "2": 8,
        "3": "device_platform=webapp&aid=6383&channel=channel_pc_web&item_id=7442056192609783098&comment_id=7442210663131235132&cut_version=1&cursor=0&count=3&item_type=0&update_version_code=170400&pc_client_type=1&pc_libra_divert=Linux&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=Linux+x86_64&browser_name=Chrome&browser_version=129.0.0.0&browser_online=true&engine_name=Blink&engine_version=129.0.0.0&os_name=Linux&os_version=x86_64&cpu_core_num=4&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7398143662553712191&uifid=ed8ce24dac050ecbf70862281782bcdd525c5e600bfcd51f14f019cde0166441ba817d0fba14068780053a924594bf2a9d9c13d11c218e5f1ad0043502a232cc9e6cec2c15af5fd8f9054aaf054655234dedb5b1591ec48d7e42637c4388519574f1c19a2e6455b54b776dcf8ba0d71306b4310d0ffdef9ab513a204abe274cf82c6c1ae963f0d41543efda8631774dcdbd3a2ec356000dbe684a483e9ee9336&msToken=MNFvohCQ2l6fzh1VUCvuEDzjp_NmNiulFtym_ze6QCxFox5pYinWzEbgufr6wfNU-NF8nHacbXtKq3vWLKhxzdgDtxjYCLbGsBdbZAGI6iI0ejHtsAB3DvKihs5kfGudBKvgRE9etpOnk3d5YGur-IXLOgAIsbz8V-6JZomvsnH_7vWOIXYrZl6wRA%3D%3D",
        "4": "",
        "5": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
        "6": 6241,
        "7": 6383,
        "8": "1.0.1.19-fix.01"
    },
    1,
    0,
    8,
    "device_platform=webapp&aid=6383&channel=channel_pc_web&item_id=7442056192609783098&comment_id=7442210663131235132&cut_version=1&cursor=0&count=3&item_type=0&update_version_code=170400&pc_client_type=1&pc_libra_divert=Linux&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=Linux+x86_64&browser_name=Chrome&browser_version=129.0.0.0&browser_online=true&engine_name=Blink&engine_version=129.0.0.0&os_name=Linux&os_version=x86_64&cpu_core_num=4&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7398143662553712191&uifid=ed8ce24dac050ecbf70862281782bcdd525c5e600bfcd51f14f019cde0166441ba817d0fba14068780053a924594bf2a9d9c13d11c218e5f1ad0043502a232cc9e6cec2c15af5fd8f9054aaf054655234dedb5b1591ec48d7e42637c4388519574f1c19a2e6455b54b776dcf8ba0d71306b4310d0ffdef9ab513a204abe274cf82c6c1ae963f0d41543efda8631774dcdbd3a2ec356000dbe684a483e9ee9336&msToken=MNFvohCQ2l6fzh1VUCvuEDzjp_NmNiulFtym_ze6QCxFox5pYinWzEbgufr6wfNU-NF8nHacbXtKq3vWLKhxzdgDtxjYCLbGsBdbZAGI6iI0ejHtsAB3DvKihs5kfGudBKvgRE9etpOnk3d5YGur-IXLOgAIsbz8V-6JZomvsnH_7vWOIXYrZl6wRA%3D%3D",
    "",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    6241,
    6383,
    "1.0.1.19-fix.01",
    null,
    3,
    {
        "value": "0X21",
        "writable": false,
        "enumerable": true,
        "configurable": true
    },
    start_ts,
    {
        "reg": [
            1937774191,
            1226093241,
            388252375,
            3666478592,
            2842636476,
            372324522,
            3817729613,
            2969243214
        ],
        "chunk": [],
        "size": 0
    },
    1,
    4,
    [
        92,
        26,
        234,
        250,
        149,
        119,
        57,
        32,
        153,
        141,
        84,
        38,
        0,
        74,
        121,
        231,
        242,
        82,
        130,
        125,
        128,
        106,
        209,
        185,
        7,
        167,
        44,
        57,
        144,
        243,
        74,
        6
    ],
    [
        64,
        253,
        156,
        240,
        44,
        96,
        159,
        150,
        27,
        122,
        82,
        52,
        197,
        120,
        234,
        119,
        245,
        89,
        71,
        177,
        99,
        98,
        28,
        142,
        5,
        99,
        123,
        199,
        176,
        9,
        152,
        240
    ],
    "fA7MGfreDZIRAV3sK/jZvlFVpFS4t1ruNXA3dtNicykoiz5wHfCd+hPk9MUHReOLYxgQLfKK36cSzgqf+P1Iw+taUHp5Bk3Xipds/SW3rJfqycSZCLoMfcqyC6D3mf5sEopbPyj=",
    [
        114,
        8,
        89,
        74,
        66,
        196,
        137,
        63,
        120,
        51,
        113,
        65,
        246,
        57,
        203,
        188,
        182,
        57,
        237,
        211,
        7,
        29,
        236,
        16,
        131,
        19,
        239,
        37,
        85,
        221,
        52,
        211
    ],
    _enter_page_ts,
    [
        3,
        82
    ],
    41,
    [
        1,
        0,
        1,
        0,
        1
    ]

]

function gen_abogus(params_dict){


    body = params_dict['body']
    params = params_dict.params
    ua = params_dict.ua


    body = "" + salt
    li_1 = [0.25390625, 65, 0]
    rc4_key1 = '\x00\x01\x04'
    rc4_key2 = 'Ó'
    ua_rc4 = rc4(rc4_key1, ua)
    ua_base64 = base64EncodeManual('s3',ua_rc4)
    params_sm3 = sum(sum(params))
    body_sm3 = sum(sum(body))
    ua_sm3 = sum(sum(ua_base64))

    platform_params = '387|927|1854|1048|1854|1048|1920|1080|Linux x86_64'

    n[18] = params_sm3
    n[19] = body_sm3
    n[21] = ua_sm3
    n[26] = (((new Date()).getTime() - 1721836800000) / 1000 / 60 / 60 / 24 / 14) >> 0
    n[27] = 6
    n[28] = (n[14] - _enter_page_ts + 3) & 255
    n[29] = n[14] & 255
    n[30] = (n[14] >> 8) & 255
    n[31] = (n[14] >> 16) & 255
    n[32] = (n[14] >> 24) & 255
    n[33] = (n[14] / 256 / 256 / 256 / 256) & 255
    n[34] = (n[14] / 256 / 256 / 256 / 256 / 256) & 255
    n[35] = (n[16] % 256) & 255
    n[36] = (n[16] / 256) & 255
    n[37] = [209, 0, 70, 2, 1]
// n[37] = [37, 5, 5, 1, 1]   [40, 7, 7, 2, 1] // 糟写也没问题 TODO
    n[38] = n[37][4] & 255
    n[39] = (n[37][4] >> 8) & 255
    n[40] = n[37][0]
    n[41] = n[37][1]
    n[42] = n[37][2]
    n[43] = n[37][3]
    n[44] = n[17] & 255
    n[45] = (n[17] >> 8) & 255
    n[46] = (n[17] >> 16) & 255
    n[47] = (n[17] >> 24) & 255
    n[48] = n[18][9]
    n[49] = n[18][18]
    n[50] = 3
    n[51] = n[18][n[50]]
    n[52] = n[19][10]
    n[53] = n[19][19]
    n[54] = 4
    n[55] = n[19][n[54]]
    n[56] = n[21][11]
    n[57] = n[21][21]
    n[58] = 5
    n[59] = n[21][n[58]]
    n[60] = n[22] & 255
    n[61] = (n[22] >> 8) & 255
    n[62] = (n[22] >> 16) & 255
    n[63] = (n[22] >> 24) & 255
    n[64] = (n[22] / 256 / 256 / 256 / 256) & 255
    n[65] = (n[22] / 256 / 256 / 256 / 256 / 256) & 255
    n[66] = n[12]
    n[67] = n[8] & 255
    n[68] = (n[8] >> 8) & 255
    n[69] = (n[8] >> 16) & 255
    n[70] = (n[8] >> 24) & 255
    n[71] = n[9] & 255
    n[72] = (n[9] >> 8) & 255
    n[73] = (n[9] >> 16) & 255
    n[74] = (n[9] >> 24) & 255
    n[75] = screen

    n[76] = screen.innerWidth + '|' + screen.innerHeight + '|' + screen.outerWidth + '|' + screen.outerHeight + '|' + screen.availWidth + '|' + screen.availHeight + '|' + screen.sizeWidth + '|' + screen.sizeHeight + '|' + screen.platform
    n[77] = []
    for (var i = 0; i < n[76].length; i++) {
        n[77].push(n[76].charCodeAt(i))
    }
    n[78] = n[77].length
    n[79] = n[78] & 255
    n[80] = (n[78] >> 8) & 255
    n[81] = ((n[14] + 3) & 255) + ','
    n[82] = []
    for (var i = 0; i < n[81].length; i++) {
        n[82].push(n[81].charCodeAt(i))
    }
    n[83] = n[82].length
    n[84] = n[83] & 255
    n[85] = (n[83] >> 8) & 255
    n[86] = gener_random(Math.random() * 65535, [n[25][0], n[25][1]]).concat(gener_random(Math.random() * 65535, [n[25][2], n[25][3]]))
    n[87] = n[86][0] ^ n[86][1] ^ n[86][2] ^ n[86][3] ^ n[86][4] ^ n[86][5] ^ n[86][6] ^ n[86][7] ^ n[24] ^ n[26] ^ n[27]  ^ n[28] ^ n[29] ^ n[30] ^ n[31] ^ n[32] ^ n[33] ^ n[34] ^ n[35] ^ n[36] ^ n[38] ^ n[39] ^ n[40] ^ n[41] ^ n[42] ^ n[43] ^ n[44] ^ n[45] ^ n[46] ^ n[47] ^ n[48] ^ n[49] ^ n[51] ^ n[52] ^ n[53] ^ n[55] ^ n[56] ^ n[57] ^ n[59] ^ n[60] ^ n[61] ^ n[62] ^ n[63] ^ n[64] ^ n[65] ^ n[66] ^ n[67] ^ n[68] ^ n[69] ^ n[70] ^ n[71] ^ n[72] ^ n[73] ^ n[74] ^ n[79] ^ n[80] ^ n[84] ^ n[85]
    new_list = [n[34], n[44], n[56], n[61], n[73], n[29], n[70], n[45], n[35], n[49], n[38], n[66], n[51], n[68], n[28], n[48], n[64], n[47], n[30], n[71], n[26], n[55], n[31], n[69], n[59], n[40], n[62], n[63], n[27], n[72], n[41], n[74], n[57], n[52], n[42], n[39], n[33], n[67], n[53], n[43], n[65], n[46], n[36], n[24], n[60], n[32], n[79], n[80], n[84], n[85]]
    n[88] = new_list.concat(n[77], n[82], [n[87]])
    n[89] = String.fromCharCode(...gener_random(Math.random() * 65535, [3, 82]))
    n[90] = arr104_to_arr140(n[88])
    long_arr = n[86].concat(n[90])
    n[91] = String.fromCharCode(...long_arr)
    n[92] = rc4(rc4_key2, n[91])
    n[92] = n[89] + n[92]
    abogus = base64EncodeManual('s4', n[92])

    console.log('abogus ->' , abogus);
    console.log(abogus.length);
    return abogus




}


// long_li = arr104_to_arr140(n[88])
// long_li_str = String.fromCharCode(...long_li)
//
// lls_rc4 = rc4(rc4_key2, long_li_str)
// abogus = base64EncodeManual(lls_rc4)

// console.log(ua_rc4);
// console.log(ua_base64);
// console.log(ua_sm3);


// console.log(long_li.length);
// console.log(abogus);
// console.log(abogus.length);


// for (chars in chars_li){
//
//     ua_base64_1 = base64(chars_li[chars], ua_rc4)
//     console.log(chars_li[chars],'-> ', ua_base64_1);
// }
// 'fun  ', n, 'this ', d, 'args ', e, 'res ', m

//   r[1].indexOf("/list/reply") != -1

//
// console.log(n[76].length);


params_dict = {
    params : params,
    ua : ua,
    body : ''
}
abogus = gen_abogus(params_dict)