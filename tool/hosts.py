import os ,re
import requests
urls=["github.com"]
hosts_ip=""
header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"}  
# 在请求头中带上User-Agent，模拟浏览器发送请求
print("程序正在运行请稍后......")  
for url in urls:
    url_ip138 = 'https://site.ip138.com/'  + url
    ip138_html = requests.get(url_ip138, headers=header).text
    ip138_ips=re.findall('/" target="_blank">([0-9]*.[0-9]*.[0-9]*.[0-9]*)</a>',ip138_html) 
    hosts_ip = ip138_ips[0]+"  "+url
    for ip in ip138_ips[:8]:
        try:
            github = requests.get("http://"+ip, headers={'Host':url,"User-Agent": header["User-Agent"]},timeout=2)
            print("访问 "+url+" ["+ip+"] 成功")
            hosts_ip +="\n"+ ip+"  "+url
            break
        except:
            print("访问 "+url+" ["+ip+"] 失败...")
with open("C:/Windows/System32/drivers/etc/hosts", "w") as hosts:
    hosts.write(hosts_ip)
hosts.close()
os.system("ipconfig /flushdns")
# 查看提交历史，找到你想要删除的提交之前的commit的哈希值
# git log
# 假设你想要删除的提交的哈希值是123abc，使用以下命令回退到那个提交
# git reset --hard 123abc
# 如果你想要删除的提交是最近的一个，你可以使用HEAD~1
# git reset --hard HEAD~1
# 最后，强制推送到GitHub以覆盖远程仓库
# git push -f origin main