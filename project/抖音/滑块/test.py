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