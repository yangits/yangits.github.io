import requests  
import re,os
url_hosts = 'https://raw.hellogithub.com/hosts'  
url_github = 'https://site.ip138.com/github.com/'  
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"}  
# 在请求头中带上User-Agent，模拟浏览器发送请求  
github_html = requests.get(url_github, headers=headers).text
github_ip=re.findall('/" target="_blank">([0-9]*.[0-9]*.[0-9]*.[0-9]*)</a>',github_html)[0]+"        github.com\n"
# 将要运行的代码加到这里
with open("C:/Windows/System32/drivers/etc/hosts", "w") as f:
    f.write(github_ip)
hosts = requests.get(url_hosts, headers=headers).content
with open("C:/Windows/System32/drivers/etc/hosts", "ab") as f:
    f.write(hosts)
f.close()
# 若需要刷新 DNS 解析缓存，cmd中执行：ipconfig /flushdns
print("***********************************")
dos = "ipconfig /flushdns"
cmd = os.system(dos)
print("***********************************")
print("github的IP地址更新完成")
if cmd == 0:
    print("已成功刷新 DNS 解析缓存。")
else:
    print("刷新 DNS 解析缓存失败！")
