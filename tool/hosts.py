import os
import re

import requests

urls=["github.com"]
url_hosts = "https://raw.hellogithub.com/hosts"
hosts_ip=""
header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"}  
# 在请求头中带上User-Agent，模拟浏览器发送请求
print("程序正在运行请稍后......")  
for url in urls:
    url_ip138 = 'https://site.ip138.com/'  + url
    ip138_html = requests.get(url_ip138, headers=header).text
    ip138_ips=re.findall('/" target="_blank">([0-9]*.[0-9]*.[0-9]*.[0-9]*)</a>',ip138_html)
    for ip in ip138_ips[:8]:
        try:
            github = requests.get("http://"+ip, headers={'Host':url,"User-Agent": header["User-Agent"]},timeout=2)
            print("访问 "+url+" ["+ip+"] 成功")
            hosts_ip = ip+"  "+url+"\n" + hosts_ip
            break
        except:
            print("访问 "+url+" ["+ip+"] 失败...")
# hosts_hello = requests.get(url_hosts, headers=header).text
with open("C:/Windows/System32/drivers/etc/hosts", "w") as hosts:
    hosts.write(hosts_ip)
    # hosts.write(hosts_hello)
hosts.close()
os.system("ipconfig /flushdns")
