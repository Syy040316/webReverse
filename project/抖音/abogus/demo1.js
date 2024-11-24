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

chars_li = {
    "s0": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    "s1": "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=",
    "s2": "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=",
    "s3": "ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe",
    "s4": "Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe"
}
function base64EncodeManual(input) {
    const chars = "ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe";
    let result = '';
    let i = 0;

    // 将输入的每3个字节转为4个Base64字符
    while (i < input.length) {
        // 获取每个字节
        let byte1 = (input.charCodeAt(i++) & 255) << 16;
        let byte2 = i < input.length ? (byte1 | (input.charCodeAt(i++) & 255) << 8) : NaN;
        let byte3 = i < input.length ? (byte2 | (input.charCodeAt(i++) & 255)) : NaN;

        // 对每三个字节进行编码
        result += chars.charAt((byte3 & 16515072) >> 18); // 第一个Base64字符
        result += chars.charAt((byte3 & 258048) >> 12); // 第二个Base64字符

        if (isNaN(byte2)) {
            result += '='; // 填充 '='
        } else {
            result += chars.charAt(((byte3 & 4032) >> 6)); // 第三个Base64字符
        }

        if (isNaN(byte3)) {
            result += '='; // 填充 '='
        } else {
            result += chars.charAt(byte3 & 63); // 第四个Base64字符
        }
    }

    return result;
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

a = gener_random(Math.random() * 65535, [3, 82])
console.log(a);