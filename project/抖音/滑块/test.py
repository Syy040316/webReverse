import requests
import json


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "text/plain;charset=UTF-8",
    "origin": "https://rmc.bytedance.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://rmc.bytedance.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
}
url = "https://verify.zijieapi.com/captcha/verify"
params = {
    "aid": "6383",
    "lang": "zh",
    "subtype": "slide",
    "detail": "FD-TI9UogoZEbqxy5xlXv-OyMXLYDsAIo33S7e**KthKgUpAn0YOt7H-NhXxOFa-97h1R6F9Ci6RU5G9qw-ZeBTp8BEuYMbdX9ijSL5*lVcNRkp-m6LUrLJVCsm9NJLFoNSMWYacIPoJ2Lw3UHLzSF9ZYD*hURdoqtgEwyiLDCqYHlj3Z**4RvqJt0AfIb1Z1TEBlJc25u3WlIP4OEKA*zUnbSR0f35Yasqubxcj05JVzvyLapSxhctcxOMu21e6fAkb22a1qI3n64XF6tLEF*8a4iOdCWdjji60qfAdYsgheO3G5SmoS7p7H*K*kMPtisq4w1BlgUQdMJw9d6RDCc6qgVBv40nze6TA1GGlPyghhoQcKB66QjHo76ft4F302DCPRdv9pyqbXi5FPpKaOfQQF4pRZkyXCN0B*JBHrB3aKQJN9fqMF7xSRQ..",
    "server_sdk_env": "{\"idc\":\"lf\",\"region\":\"CN\",\"server_type\":\"whale\"}",
    "mode": "slide",
    "fp": "verify_m3r2g093_5e60e5b9_dfa6_ce94_1ee2_d91a41f2a581",
    "h5_check_version": "3.5.2",
    "os_name": "other",
    "platform": "pc",
    "os_type": "2",
    "h5_sdk_version": "3.5.66",
    "webdriver": "false",
    "tmp": "1732375287549",
    "xx-tt-dd": "qJI7ttpVdGKKbSBvYqmaf0aPo",
    "msToken": "DEnwyfW1mIb6A5YCqpnrTjegtAuqlcQ4HRQsStMj0g6jKpAitYkoo4mgZFlwvsP8xQJbeOHiYr3305z8d69YBW1aVehaNZTRg_95Pkdgkm7o4OlucvxgSmq-8E_BFjkvv8Ztko2AJTN6Vz929mGOpPpRIaIGJuVKwr2QX3cBdk3NWkx644a8Dxr8",
    "a_bogus": "mfsVheWJDZ5bC3/cuKi7S6IlM62/NBSyv1idYEe59qzVY7lPWp-giMVCnqNxn43xubpRio/H3n4HuDdGPoat1K9pqmpDSmtWKSx9VS6LZZwsTPih1ZSzeGtxzJTeWW4Tu/IJEZ75Us0e1V5-9q9iAB/ew/UrmRDdMr3JV/YjY9K4BuWnw9lRTc7mTDktvTlVPzifHCE="
}
data = {
    "captchaBody":
        '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'
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, params=params, data=data)

print(response.text)
print(response)