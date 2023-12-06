import requests  
import re,os
url_hosts = 'https://raw.hellogithub.com/hosts'  
url_github = 'https://site.ip138.com/github.com/'  
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"}  
# 在请求头中带上User-Agent，模拟浏览器发送请求  
github_html = requests.get(url_github, headers=headers).text
hosts = requests.get(url_hosts, headers=headers).text
github_ip=re.findall('/" target="_blank">([0-9]*.[0-9]*.[0-9]*.[0-9]*)</a>',github_html)
for ip in github_ip:
    with open("C:/Windows/System32/drivers/etc/hosts", "w") as f:
        f.write(ip+"        github.com\n")
        f.write(hosts)
    f.close()
    dos = "ipconfig /flushdns"
    cmd = os.system(dos)
    print("***********************************")
    try:
        github = requests.get("https://github.com/", headers=headers,timeout=30)
        if github.status_code==200:
            print(ip+"登录GitHub.coom成功")
            break
        else:
            print(ip+"登录GitHub.coom失败")
    except:
        print(ip+"登录GitHub.coom失败")


