Dim Wsh
Set Wsh = WScript.CreateObject("WScript.Shell")
WScript.Sleep(200)
Wsh.Popup("�������˳�!")
Wsh.Run "taskkill /f /im frpc.exe",0,false
Wsh.Run "taskkill /f /im store.exe",0,false
Set Wsh=NoThing
WScript.quit