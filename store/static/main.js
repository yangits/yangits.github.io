var username= document.getElementById("username")
var password= document.getElementById("password")
var timsg= document.getElementById("timsg")
var login = document.getElementById("login");
var storename = document.getElementById("storename");
var text = document.getElementById("text");
var goods_table = document.getElementById("goods_table");
var goods_table_biao = document.getElementById("goods_table_biao");

var xmlhttpmsg;
if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttpmsg=new XMLHttpRequest();
}else{// code for IE6, IE5
    xmlhttpmsg=new ActiveXObject("Microsoft.XMLHTTP");
}
if (localStorage.getItem('username') && localStorage.getItem('password')) {
    username.value = (localStorage.getItem('username'))
    password.value = (localStorage.getItem('password')) // hideLogin()
    Login()
}

get_goods()

function Login(){
    if ( username.value == "" ){
        timsg.innerHTML="用户名不能为空！"
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
    }else{
        timsg.innerHTML=""
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
    

    xmlhttpmsg.open("post",msg,true);
    // xmlhttpmsg.overrideMimeType("text/html;charset=gb2312");
    xmlhttpmsg.send();
}
function new_add(){
    if (storename.value==""){
        alert("仓库名称不能为空")
    }else{
        msg="/new_add?storename="+storename.value
        httpmsg(msg)
        xmlhttpmsg.onreadystatechange = function(){
            if (xmlhttpmsg.readyState==4){
                if(xmlhttpmsg.status==200)
                    if  (xmlhttpmsg.responseText!="0"){
                        alert("仓库<"+storename.value+">创建成功")
                    }else{
                        get_goods()
                    }
                else{
                    alert("仓库创建失败，仓库名避免数字开头")
                }
            }
        }
    }

}
function get_goods(){
    msg="/goods?storename="+storename.value
    httpmsg(msg)
    xmlhttpmsg.onreadystatechange = function(){
        if (xmlhttpmsg.readyState==4){
            console.log(xmlhttpmsg.responseText);
            if(xmlhttpmsg.status==200){
                goods_table_biao.innerHTML="<"+storename.value+">库存清单"
                goods_table.innerHTML="<tr>"+
                "<td width=50px>序号</td>"+
                "<td width=100px>名称</td>"+
                "<td width=200px>规格</td>"+
                "<td width=100px>备注</td>"+
                "<td width=50px>价格</td>"+
                "<td width=100px>数量</td>"+
                "</tr>"
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


