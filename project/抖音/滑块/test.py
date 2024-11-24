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



