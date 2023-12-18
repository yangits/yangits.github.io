import requests 
import re,os
urls=["api.github.com","github.io","github.global.ssl.fastly.net","assets-cdn.github.com","github.com"]
url_hosts = "https://raw.hellogithub.com/hosts"
hosts=""""""
header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"}  
# 在请求头中带上User-Agent，模拟浏览器发送请求  
hosts_hello = requests.get(url_hosts, headers=header).text
for url in urls:
    url_ip138 = 'https://site.ip138.com/'  + url
    ip138_html = requests.get(url_ip138, headers=header).text
    ip138_ips=re.findall('/" target="_blank">([0-9]*.[0-9]*.[0-9]*.[0-9]*)</a>',ip138_html)
    for ip in ip138_ips[:5]:
        if url=="github.com":
            with open("C:/Windows/System32/drivers/etc/hosts", "w") as f:
                f.write(ip+"   "+url)
            f.close()
            cmd = os.system("ipconfig /flushdns")
            try:
                github = requests.get("https://"+url, headers=header,timeout=10)
                if github.status_code==200:
                    print("登录 "+url+" ["+ip+"] 成功")
                    hosts = hosts +ip+"""        """+url+"""\n"""
                    break
                else:
                    print("登录 "+url+" ["+ip+"] 失败...")
            except:
                print("登录 "+url+" ["+ip+"] 失败...")
        else:    
            if ip != "0.0.0.0" and ip != "127.0.0.1":  
                cmd_ip = os.system("ping "+ip+">/c")
                if cmd_ip==0:
                    hosts = hosts +ip+"""        """+url+"""\n"""
                    print("ping "+url+" ["+ip+"] 成功")
                    break
                else:
                    print("ping "+url+" ["+ip+"] 失败...")

with open("C:/Windows/System32/drivers/etc/hosts", "w") as f:
    f.write(hosts)
    f.write(hosts_hello)
f.close()
dos = "ipconfig /flushdns"
cmd = os.system(dos)
