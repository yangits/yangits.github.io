import os
import requests
from bs4 import BeautifulSoup
import concurrent.futures
def download_file(url, folder):
    # 获取文件名
    filename = os.path.join(folder, url.split('/')[-1])
    # 发送HTTP GET请求
    responsen = requests.get(url)
    if responsen.status_code == 200:
    # 将内容写入文件
        with open(filename, 'wb') as file:
            file.write(responsen.content)
        print(f'下载成功: {filename}')

def download_mp3_from_website(website_url, folder='mp3load'):
    # 创建下载目录
    if not os.path.exists(folder):
        os.makedirs(folder)
    # 发送HTTP GET请求
    response = requests.get(website_url)
    # 解析HTML内容
    soup = BeautifulSoup(response.content, 'html.parser')
    # 查找所有<a>标签
    mp3_urls = []
    for link in soup.find_all('a'):
        href = link.get('href')
        if href and href.endswith('.mp3'):
            # 将相对URL转换为绝对URL
            url = website_url+href
            mp3_urls.append(url)
            # 创建下载线程
    with concurrent.futures.ThreadPoolExecutor(max_workers=500) as executor:#最大线程500
        futures = [executor.submit(download_file, url, folder) for url in mp3_urls]
        # 等待所有线程完成
        concurrent.futures.wait(futures)

website_url = 'https://unpkg.com/cnchar-data@1.1.0/voice/'
download_mp3_from_website(website_url)
print("程序正在运行请稍后......")  