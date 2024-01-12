var username= document.getElementById("username");
var password= document.getElementById("password");
var storename = document.getElementById("storename");
var timsg= document.getElementById("timsg");
var login = document.getElementById("login");
var text = document.getElementById("text");
var goods_table = document.getElementById("goods_table");
var select_name = document.getElementById("select_name");
var select_specs = document.getElementById("select_specs");
var zhanghu = document.getElementById("zhanghu");

if (window.screen.width < 500) {
    // 当前设备是移动设备 goods_table
    document.getElementById("goods_table_id").style.maxHeight="1500px"
}

if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
    var xhr=new XMLHttpRequest();
}else{// code for IE6, IE5
    var xhr=new ActiveXObject("Microsoft.XMLHTTP");
}
password.value=="";
if (localStorage.getItem('username') && localStorage.getItem('storename')) {
    username.options[localStorage.getItem('username')].selected = true;
    storename.options[localStorage.getItem('storename')].selected = true;
}
function showLogin() { // 显示登录窗口的函数
    login.style.display = "block";
}
function hideLogin() { // 隐藏登录窗口的函数
    zhanghu.innerText=username.value
    login.style.display = "none";
}
function Login(){
    select_name.value="";select_specs.value="";
    localStorage.setItem('username', username.selectedIndex);
    localStorage.setItem('storename', storename.selectedIndex);
    if (storename.value==""){
        alert("仓库名称不能为空")
    }else{
        msg="/new_add"
        xhr.open("post",msg,true);
        var fdata = new FormData();
        fdata.append('storename', storename.value);
        xhr.send(fdata);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4){
                if(xhr.status==200)
                    if  (xhr.responseText=="open"){
                        get_goods();hideLogin()
                    }else{
                        if(xhr.responseText=="error"){
                        alert("仓库名不合法（不能数字开头，不能包含空格），请重新输入")
                    }else{                        
                        alert("仓库不存在，仓库名<"+storename.value+">创建成功")
                        get_goods();hideLogin()}
                    }
                else{
                    alert("服务器未开启")
                }
            }
        }
    }
}
function get_goods(){
    msg="/goods"//"/goods?storename="+storename.value;
    xhr.open("post",msg,true);
    var data = new FormData();
    data.append('storename', storename.value);
    data.append('select_name', select_name.value);
    data.append('select_specs', select_specs.value);
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if (xhr.readyState==4){
            if(xhr.status==200){
                goods_table.innerHTML="<tr><td></td><td>代码</td><td>名称</td>"+
                "<td>规格</td><td>单价</td><td>单重</td><td>数量</td><td>备注</td><td>操作</td></tr>"
                var goods_lists=JSON.parse(xhr.responseText)
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
function checkutf(str){
    for (let b = 0; b < str.length; b++) {
        if (str[b] === "�") {return false;}}
    return true;
}
function up_file_excel(){
    var file_csv= document.getElementById("file_excel");
    var reader_csv= new FileReader()
    reader_csv.readAsText(file_csv.files[0],"gb2312")//,"ansi"utf-8


    reader_csv.onload=function(){
        
        var csv_str=reader_csv.result;
        // var csv_str=reader_csv.result;
        msg="/up_excel"
        var fdata = new FormData();
        fdata.append('storename', storename.value);
        fdata.append('csv_str', csv_str);
        xhr.open("post",msg,true);
        xhr.send(fdata);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4){
                if(xhr.status==200){
                    if  (xhr.responseText=="success"){
                        alert(file_csv.files[0].name+"上传成功");
                        get_goods()
                    }else{alert(file_csv.files[0].name+"上传失败,参考导出表格")}
                }else{alert("上传失败,服务器响应错误")}
                file_csv.value=null
            }}
    }
}
function tabledown() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const nowTime = year + month + day;
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
      var row = [], cols = rows[i].querySelectorAll("td, th");

      for (var j = 1; j < cols.length-1; j++) {
        row.push(cols[j].innerText);
      }
      csv.push(row.join(","));
    }
    var csvFile = new Blob([csv.join("\n")], {type: "text/csv;charset=ansi"});//;charset=gb2312
    var downloadLink = document.createElement("a");
    downloadLink.download = storename.value+nowTime+".csv";
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
