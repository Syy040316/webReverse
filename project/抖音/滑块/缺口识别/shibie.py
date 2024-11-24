import cv2

def identify_gap(bg, cut):
    '''
    bg: 背景图片
    cut: 缺口图片
    '''
    # 读取背景图片和缺口图片
    bg_img = cv2.imread(bg)  # 背景图片
    cut_img = cv2.imread(cut)  # 缺口图片

    # 识别图片边缘
    bg_edge = cv2.Canny(bg_img, 100, 200)
    cut_edge = cv2.Canny(cut_img, 100, 200)

    # 转换图片格式
    bg_pic = cv2.cvtColor(bg_edge, cv2.COLOR_GRAY2RGB)
    cut_pic = cv2.cvtColor(cut_edge, cv2.COLOR_GRAY2RGB)

    # 缺口匹配
    res = cv2.matchTemplate(bg_pic, cut_pic, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)  # 寻找最优匹配

    # 返回缺口坐标
    return max_loc


if __name__ == '__main__':
    print(identify_gap('bgpic.jpeg', 'cutpic.png'))
