var username= document.getElementById("username")
var password= document.getElementById("password")
var msg= document.getElementById("msg")
var login = document.getElementById("login");
var storename = document.getElementById("storename");
var text = document.getElementById("text");
var goods_table = document.getElementById("goods_table");
var xmlhttpmsg;

if (localStorage.getItem('username')) {
    username.value = (localStorage.getItem('username'))
}
if (localStorage.getItem('password')) {
    password.value = (localStorage.getItem('password'))
    // hideLogin()
}
Login()
get_goods()

function Login(){
    if ( username.value == "" ){
        msg.innerHTML="用户名不能为空！"
    }else{
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        hideLogin()
    }

}

function showLogin() { // 显示登录窗口的函数
    login.style.display = "block";
}

function hideLogin() { // 隐藏登录窗口的函数
    login.style.display = "none";
}

function httpmsg(msg){
    
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttpmsg=new XMLHttpRequest();
    }else{// code for IE6, IE5
        xmlhttpmsg=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttpmsg.open("post",msg,true);
    // xmlhttpmsg.overrideMimeType("text/html;charset=gb2312");
    xmlhttpmsg.send();
}
function new_add(){
    msg="/new_add?storename="+String(storename.value)
    httpmsg(msg)
    xmlhttpmsg.onreadystatechange = function(){
        if (xmlhttpmsg.readyState==4){
            text.innerHTML=xmlhttpmsg.responseText;
            if(xmlhttpmsg.status==200)
                if  (xmlhttpmsg.responseText!="0"){
                    alert("仓库<"+storename.value+">创建成功")
                }else{
                    alert("仓库<"+storename.value+">已存在")}
            else{
                alert("仓库创建失败，仓库名避免数字开头")
            }
        }
    }
}
function get_goods(){
    msg="/goods"
    httpmsg(msg)
    xmlhttpmsg.onreadystatechange = function(){
        if (xmlhttpmsg.readyState==4){
            console.log(xmlhttpmsg.responseText);
            if(xmlhttpmsg.status==200){
                var goods_lists=JSON.parse(xmlhttpmsg.responseText)
                for (let i = 0; i < goods_lists.length; i++) {   
                    var tr = document.createElement("tr");
                    for (let j = 0; j < goods_lists[0].length; j++) {
                        var td = document.createElement("td");
                        td.innerHTML=goods_lists[i][j]
                        tr.appendChild(td);
                    }
                    goods_table.appendChild(tr);
                }
            }
        }
    }
}


