Dim Wsh
Set Wsh = WScript.CreateObject("WScript.Shell")
WScript.Sleep(200)
If GetObject("winmgmts:").ExecQuery("Select * From Win32_Process Where Name='store.exe'").Count >0 Then
Wsh.Popup("服务器正在运行，如果无法正常使用，请先点击关闭服务器再启动!")
Else
Wsh.Popup("服务器启动成功!")
Wsh.Run "frpc.exe",0,false
End If

Set Wsh=NoThing
WScript.quit