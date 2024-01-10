var username= document.getElementById("username")
var password= document.getElementById("password")
var timsg= document.getElementById("timsg")
var login = document.getElementById("login");
var storename = document.getElementById("storename");
var text = document.getElementById("text");
var goods_table = document.getElementById("goods_table");
var select_name = document.getElementById("select_name");
var select_specs = document.getElementById("select_specs");
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

function new_add(){
    if (storename.value==""){
        alert("仓库名称不能为空")
    }else{
        msg="/new_add?storename="+storename.value
        xmlhttpmsg.open("post",msg,true);
        xmlhttpmsg.send();
        xmlhttpmsg.onreadystatechange = function(){
            if (xmlhttpmsg.readyState==4){
                if(xmlhttpmsg.status==200)
                    if  (xmlhttpmsg.responseText=="open"){
                        alert("已打开仓库")
                        get_goods()
                    }else{
                        if(xmlhttpmsg.responseText=="error"){
                        alert("仓库名不合法（不能数字开头，不能包含空格），请重新输入")
                    }else{                        
                        alert("仓库不存在，新<"+storename.value+">创建成功")
                        select_name.value="";
                        select_specs.value="";
                        get_goods()}

                    }
                else{
                    alert("服务器未开启")
                }
            }
        }
    }
}
function get_goods(){
    msg="/goods?storename="+storename.value+"&select_name="+select_name.value+"&select_specs="+select_specs.value
    xmlhttpmsg.open("post",msg,true);
    xmlhttpmsg.send();
    xmlhttpmsg.onreadystatechange = function(){
        if (xmlhttpmsg.readyState==4){
            console.log(xmlhttpmsg.responseText);
            if(xmlhttpmsg.status==200){
                goods_table.innerHTML="<tr>"+
                "<td width=50px>序号</td>"+
                "<td width=100px>名称</td>"+
                "<td width=200px>规格</td>"+
                "<td width=100px>备注</td>"+
                "<td width=50px>价格</td>"+
                "<td width=100px>数量</td>"+
                "<td width=150px>操作</td>"+
                "</tr>"
                var goods_lists=JSON.parse(xmlhttpmsg.responseText)
                for (let i = 0; i < goods_lists.length; i++) {   
                    var tr = document.createElement("tr");
                    for (let j = 0; j < goods_lists[0].length; j++) {
                        var td = document.createElement("td");
                        td.innerHTML=goods_lists[i][j]
                        tr.appendChild(td);
                    }
                    var td = document.createElement("td");
                    td.innerHTML="<button onclick='chuku("+goods_lists[i][0]+")'>出库</button><button onclick='ruku("+goods_lists[i][0]+")'>入库</button>"
                    tr.appendChild(td);
                    goods_table.appendChild(tr);
                }
            }
        }
    }
}

function chuku(i){
    alert(i+"号产品已出库")
}
function ruku(i){
    alert(i+"号产品已入库")
}
function up_excel(){
    var file_excel= document.getElementById("file_excel");
    file_excel.click()
}
function file_excel(){
    var file_excel= document.getElementById("file_excel");
    msg="/up_excel";
    var fdata = new FormData();
    fdata.append('up_file_excel', file_excel.files[0]);
    xmlhttpmsg.open("post",msg,true);
    xmlhttpmsg.send(fdata);
    xmlhttpmsg.onreadystatechange = function(){
        if (xmlhttpmsg.readyState==4){
            if(xmlhttpmsg.status==200){
                if  (xmlhttpmsg.responseText=="success"){
                    alert(file_excel.files[0].name+"上传成功")
                }
            }else{alert("上传失败,服务器响应错误")}
        }}
}