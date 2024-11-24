
from fake_useragent import UserAgent

def gen_ua():


    # 创建UserAgent对象
    ua = UserAgent()

    # 随机获取一个浏览器User-Agent字符串
    random_user_agent = ua.random

    print(random_user_agent)




if __name__ == '__main__':
    for i in range(100):
        gen_ua()