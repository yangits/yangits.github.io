import requests  
import os
url = 'https://raw.hellogithub.com/hosts'  
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit 537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36"}  
# 在请求头中带上User-Agent，模拟浏览器发送请求  
response = requests.get(url, headers=headers)  

# 将要运行的代码加到这里
with open("C:/Windows/System32/drivers/etc/hosts", "w") as f:
    f.write("127.0.0.1 localhost\n")
with open("C:/Windows/System32/drivers/etc/hosts", "ab") as f:
    f.write(response.content)

# 若需要刷新 DNS 解析缓存，cmd中执行：ipconfig /flushdns
print("***********************************")
DOS = "ipconfig /flushdns"
dos = os.system(DOS)
print("***********************************")
print("github的IP地址更新完成")
if dos == 0:
    print("已成功刷新 DNS 解析缓存。")
else:
    print("刷新 DNS 解析缓存失败！")
