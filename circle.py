'''
@Description: 裁剪圆形图片
@version: 1.0
@Author: Hotobun
@Date: 2020-02-21
@Remember to eat on time

# Python      3.7.6 
# matplotlib  3.1.3
不修改直接运行的话 遍历img文件夹下的所有文件
处理成.ico文件 详细配置在文件最后 
保存在ico文件夹
'''

import os
 
def main(filename="", show=False):
    cwd = os.getcwd()
    if not filename:
        filename = input("图片文件名或图片完整路径: ")
    if filename:
        if os.path.isfile(os.path.join(cwd, filename)):
            file_path = os.path.join(cwd, filename)
        elif os.path.isfile(filename):
            file_path = filename
        else:
            print("该路径不是一个文件 {}".format(filename))
            print("该路径不是一个文件 {}".format(os.path.join(cwd, filename)))
            print("未找到图片 告辞!")
            return 
    else:
        return main() 
 
    with cbook.get_sample_data(file_path) as image_file:
        image = plt.imread(image_file)
 
    fig, ax = plt.subplots()
    im = ax.imshow(image)
    imsize = im.get_size() # 返回 (高, 长) 跟平时的长*高 反过来的！ 
    fig.set_size_inches(fig_size_inches, fig_size_inches) 

    print("图片尺寸 ", imsize[::-1])
 
    # center 裁剪的圆心位置 这里默认图片中心
    # min_r  圆形图片半径 取长高最小值除2 再大会有切片 不能构成圆形
    center = (imsize[1]//2, imsize[0]//2)
    min_r = min(imsize)//2
 
    patch = patches.Circle(center, radius=min_r, transform=ax.transData)
    im.set_clip_path(patch)
 
    ax.axis('off')
    print("圆心坐标:{} 半径:{}\n".format(center, min_r))

    plt.gca().xaxis.set_major_locator(plt.NullLocator())
    plt.gca().yaxis.set_major_locator(plt.NullLocator())
    plt.subplots_adjust(top = 1, bottom = 0, right = 1, left = 0, hspace = 0, wspace = 0)
    plt.margins(0,0) 
    if save_name:
        fig.savefig(save_name, format="png", transparent=True, dpi=fig_dpi, pad_inches = 0) 
    if show:
        plt.show()
 
if __name__ == "__main__":
    try:
        import matplotlib.pyplot as plt
        import matplotlib.patches as patches
        import matplotlib.cbook as cbook  
    except ModuleNotFoundError as e:
        print("ModuleNotFoundError 请安装绘图库 Matplotlib ")
        print("    $ pip install matplotlib")
        exit()
    fig_size_inches = 0.7   # 图像尺寸 其实应该是两个值 我这里使用了等宽 0.7*0.7 
    fig_dpi = 70            # 每一英寸的像素个数
    icodir = "img"
    if not os.path.isdir(icodir):
        os.mkdir(icodir)
    for imgname in os.listdir("img"):
        save_name = os.path.join(icodir,imgname.replace("jpg", "ico"))
        # :param img: dir
        main(os.path.join("img", imgname), show=False)