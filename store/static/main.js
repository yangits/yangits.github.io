function Id(str){return document.getElementById(str)}
function Class(str){return document.getElementsByClassName(str)}
var username= Id("username"),storename = Id("storename");

if (window.screen.width < 500){Id("goods_table_id").style.maxHeight="1500px"}    // 移动设备
if (window.XMLHttpRequest){var xhr=new XMLHttpRequest();// code for IE7+, Firefox, Chrome, Opera, Safari
}else{var xhr=new ActiveXObject("Microsoft.XMLHTTP");}// code for IE6, IE5

function get_username(){
    xhr.open("post","/get_username",true);
    var data = new FormData();
    data.append('select_id', "");
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if (xhr.readyState==4){
            if(xhr.status==200){
                if  (xhr.responseText=="new_add"){
                    alert("欢迎第一次登陆仓库管理系统，默认admin登陆")
                    get_username();
                }else{          
                    var username_table_lists=JSON.parse(xhr.responseText)
                    if(username_table_lists[3]=="127.0.0.1"){
                        Id("login_id").href="http://"+username_table_lists[2]+":666";
                        Id("login_id").innerHTML="点击切换局域网络";
                    }else{Id("login_id").innerHTML="";}
                    Id("username").innerHTML=""
                    for (let i = 1; i < username_table_lists[0].length; i++) {   
                        var option = document.createElement("option");
                        option.innerHTML=username_table_lists[0][i][1]
                        Id("username").appendChild(option);
                    }
                    try{username.options[localStorage.getItem('username')].selected = true;}
                    catch{username.options[0].selected = true;}
                    if (username_table_lists[1].length == 0) {add_store();} 
                    else{
                        Id("storename").innerHTML=""
                        for (let i = 0; i < username_table_lists[1].length; i++) {   
                            var option = document.createElement("option");
                            option.innerHTML=username_table_lists[1][i]
                            Id("storename").appendChild(option);
                        }
                        // if (localStorage.getItem('storename')){}
                        // else{localStorage.setItem('storename', 0);}
                        try{storename.options[localStorage.getItem('storename')].selected = true;}
                        catch{storename.options[0].selected = true;}
                    }
                }
            }else{
                alert("服务器未开启")
            }
        }
    }
}
Id("password").value=="";showLogin();
function showLogin() { // 显示登录窗口
    Id("foot_username").innerText="**"
    Id("foot_storename").innerText="**"
    Id("goods_table").innerHTML=""
    Id("password_msg").innerHTML=""
    Id("login").style.display = "block";
    get_username();
}
function Login(){   
    if (storename.value==""){
        add_store();
    }else{
        xhr.open("post","/get_password",true);
        var data = new FormData();
        data.append('select_username', username.value);
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4){
                if(xhr.status==200){
                    var password=JSON.parse(xhr.responseText)
                    if (Id("password").value==password[0][2]){
                        localStorage.setItem('username', username.selectedIndex);
                        localStorage.setItem('storename', storename.selectedIndex);
                        hideLogin();
                    }else{Id("password_msg").innerHTML="密码错误"}
                }else{
                    alert("服务器未开启")
                }
            }
        }
    }
}

function hideLogin() { // 隐藏登录窗口
    Id("select_row1").value="";Id("select_row2").value="";Id("select_row3").value="";
    Id("select_row4").value="";Id("select_row5").value="";Id("select_row6").value="";
    Id("foot_username").innerText=username.value;
    Id("foot_storename").innerText=storename.value;
    Id("in_add_good").style.display ="block";
    Id("add_name_bt").style.display ="none";
    Id("up_excel").style.display ="block";
    Id("login").style.display = "none";
    Id("select_bt").style.display ="block";
    Id("select_row5").disabled = true;
    Id("select_row6").disabled = true;
    Id("up_excel").innerHTML="表格导入"
    Id("file_excel").accept="text/csv"
    Id("show_rows").innerText="201";
    Id("path_show").style.display = "none";
    Id('add_dirs_bt').style.display = "none";
    get_goods("");
}

function show_select(){
    Id("select_row1").value="";Id("select_row2").value="";Id("select_row3").value="";
    Id("select_row4").value="";Id("select_row5").value="";Id("select_row6").value="";
    if (Id("select_bt").innerText=="打开搜索"){
        Id("select_all").style.display = "block";
        Id("select_bt").innerText="关闭搜索";
    }else{
        Id("select_all").style.display = "none";
        Id("select_bt").innerText="打开搜索";
    }
}
function keyup_submit(e){
    var evt = window.event || e;
    if (evt.keyCode == 13){
        if (Id("foot_storename").innerText==storename.value){
            get_goods("")
        }else{get_goods("outin")}
        
    }
}
function hide_show_rows(){
    if (Id('hide_show_rows').innerText=="点击加载全部"){
        Id('hide_show_rows').value= Id('goods_table_id').scrollTop
        Id('show_rows').innerText='10000';get_goods('');
        Id('hide_show_rows').innerText="等待加载..."
    }
}

//——————————————————————————————————————————————————————————————————————————————————————————————————
function show_name_top(val){
    if (val=="change"){Id("name_top_bt").innerHTML="编辑确认"}
    else{Id("name_top_bt").innerHTML="新建确认"}
    Id("name_top").style.display = "block";
    Id("name_row3").disabled=false
}
function hide_name_top(){
    Id("name_top").style.display = "none";
}

function account_set(select_id){

    xhr.open("post","/get_username",true);
    var data = new FormData();
    data.append('select_id', select_id);
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if (xhr.readyState==4){
            if(xhr.status==200){
                if (select_id==""){
                    Id("foot_storename").innerText="账户设置"
                    if(xhr.responseText=="error"){
                        alert("未知错误！")
                    }else{                           
                        var username_table_lists=JSON.parse(xhr.responseText)
                        var username_lists=username_table_lists[0]
                        Id("goods_table").innerHTML=""
                        for (let i = 0; i < username_lists.length; i++) {   
                            var tr = document.createElement("tr");
                            for (let j = 0; j < username_lists[0].length; j++) {
                                var td = document.createElement("td");
                                td.innerHTML=username_lists[i][j]
                                tr.appendChild(td);
                            }
                            var td = document.createElement("td");
                            if(i==0){td.innerHTML="操作" ;td.classList.add("width50");tr.classList.add("top_tr")}else if (username_lists[i][3]=="管理员"){
                                td.innerHTML="<button onclick='change_username("+username_lists[i][0]+")'>编辑</button>"}else{td.innerHTML="<button onclick='change_username("+username_lists[i][0]+")'>编辑</button>"+
                                "<button style='background-color: red;' onclick='delete_username("+username_lists[i][0]+")'>删除</button>"}
                            tr.appendChild(td);
                            Id("goods_table").appendChild(tr);
                        }  
                    }
                }else{
                    var name_rows=JSON.parse(xhr.responseText)
                    Id("name_row0").value=name_rows[0][0]
                    Id("name_row1").value=name_rows[0][1]
                    Id("name_row2").value=name_rows[0][2]
                    Id("name_row3").value=name_rows[0][3]
                    if (Id("name_row1").value == Id("foot_username").innerText){Id("name_row3").disabled=true}
                }
            }else{
                alert("服务器未开启")
            }
        }
    }
}
function change_username(id_num){
    show_name_top("change");account_set(id_num)
}
function delete_username(delete_id){
    var result = confirm("警告，该账户数据将删除，数据无价，三思而后行"); // 将要显示的文本作为参数传入confirm()函数
    if (result) {
        xhr.open("post","/delete_username",true);
        var data = new FormData();
        data.append('delete_id', delete_id);
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4){
                if(xhr.status==200){
                    account_set("");
                }else{
                    alert("服务器未开启")
                }
            }
        }
    }
}
function clickok_name(){
    if(Id("name_top_bt").innerText=="新建确认"){
        if (Id("name_row1").value==""){
            Id("name_top_msg1").innerHTML="不能为空"
        }else{
            xhr.open("post","/add_username",true);
            var data = new FormData();
            data.append('name_row1', Id("name_row1").value);
            data.append('name_row2', Id("name_row2").value);
            data.append('name_row3', Id("name_row3").value);
            xhr.send(data);
            xhr.onreadystatechange = function(){
                if (xhr.readyState==4){
                    if(xhr.status==200){
                        account_set("");hide_name_top();
                    }else{
                        alert("服务器未开启")
                    }
                }
            }
        }
    }else{
        xhr.open("post","/change_username",true);
        var data = new FormData();
        data.append('name_row0', Id("name_row0").value);
        data.append('name_row1', Id("name_row1").value);
        data.append('name_row2', Id("name_row2").value);
        data.append('name_row3', Id("name_row3").value);
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4){
                if(xhr.status==200){
                    account_set("");hide_name_top();
                }else{
                    alert("服务器未开启")
                }
            }
        }
    }
}
function get_account_set(){
    Id('add_dirs_bt').style.display = "none";
    Id("up_excel").style.display ="none";
    Id("path_show").style.display = "none";
    Id('hide_show_rows').style.display = "none";
    Id("select_all").style.display = "none";Id("select_bt").innerText="打开搜索";Id("select_bt").style.display ="none";
    Id("add_name_bt").style.display ="block";Id("in_add_good").style.display ="none";
    account_set('')
}


//——————————————————————————————————————————————————————————————————————————————————————————————————
function show_goods_top(val){
    if (val=="outin"){
        for (let n=1; n < Id("good_row_num").innerText* 1; n++){Id("good_row"+n).disabled="disabled";}
        Id("good_num").disabled="";
    }else {
        if(val=="edit"){Id("goods_top_bt").innerHTML="编辑确认";}else{Id("goods_top_bt").innerHTML="新增确认";}
        for (let n=1; n < Id("good_row_num").innerText* 1; n++){Id("good_row"+n).disabled="";Id("good_row"+n).value="";}
        Id("good_num").disabled="disabled";Id("good_num").value="0";
    }
    Id("good_id").disabled="disabled";Id("good_id").value=""
    Id("good_top").style.display = "block";
}
function hide_goods_top(){
    Id("good_top_msg1").innerHTML=""
    Id("good_top_msg2").innerHTML=""
    Id("good_top_msg3").innerHTML=""
    Id("good_top_msg4").innerHTML=""
    Id("good_top_msg_num").innerHTML=""
    Id("good_top").style.display = "none";
}
function add_store(){
    var new_storename = prompt("输入新仓库名称（不能数字开头，不能包含空格特殊字符）", "");
    if (new_storename != null) {if(new_storename!=""){
        xhr.open("post","/add_table",true);
        var data = new FormData();
        data.append('storename', new_storename);
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4){
                if(xhr.status==200){
                    if(xhr.responseText=="new_add"){
                        alert("仓库名<"+new_storename+">创建成功")
                        get_username();
                    }else{ 
                        alert("仓库已存在或格式错误（不能数字开头，不能包含空格特殊字符），请重新输入！")                       
                    }
                }else{
                    alert("服务器未开启")
                }
            }
        }
    }else{alert("仓库名不能为空")}}
}
function get_store_goods(){hideLogin();}

li_hover=Id("store_goods_li").children
// for (let i=1;i<li_hover.length;i++){
let i=1
li_hover[i].onmouseover = function() {
    this.children[0].style.display = 'block'; 
}
li_hover[i].onmouseleave = function() {
    this.children[0].style.display = 'none'; 
}
// }

function get_good_outin(){Id("in_add_good").style.display ="none";Id("add_name_bt").style.display ="none";
    Id("select_bt").style.display ="block";Id("foot_storename").innerText=storename.value+"出入库记录";
    get_goods("outin");Id("select_row5").disabled = false;Id("select_row6").disabled = false;Id("up_excel").style.display ="none";
    Id('hide_show_rows').style.display = "none";Id("path_show").style.display = "none";Id('add_dirs_bt').style.display = "none";} 
function get_goods(select_id){
    xhr.open("post","/select_goods",true);//"/goods?storename="+storename.value;
    var data = new FormData();
    data.append('storename', Id("foot_storename").innerText);
    data.append('select_id', select_id);
    data.append('select_row1', Id("select_row1").value);
    data.append('select_row2', Id("select_row2").value);
    data.append('select_row3', Id("select_row3").value);
    data.append('select_row4', Id("select_row4").value);
    data.append('select_row5', Id("select_row5").value);
    data.append('select_row6', Id("select_row6").value);
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if (xhr.readyState==4){
            if(xhr.status==200){
                var goods_lists=JSON.parse(xhr.responseText)
                if(select_id == ""){
                    Id("goods_table").innerHTML=""
                    var tr = document.createElement("tr");tr.classList.add("top_tr")
                    for (let j = 0; j < goods_lists[0].length-1; j++) {
                        var td = document.createElement("td")
                        td.innerHTML=goods_lists[0][j]
                        tr.appendChild(td);
                    }
                    var td = document.createElement("td");td.classList.add("width50");
                        td.innerHTML="操作";
                        tr.appendChild(td);
                    Id("goods_table").appendChild(tr);
                    max_n=Id("show_rows").innerText*1
                    for (let i =1; i < goods_lists.length; i++) {   
                        var tr = document.createElement("tr");
                        if (i>=max_n){tr.classList.add("hide_rows");}
                        for (let j = 0; j < goods_lists[0].length-1; j++) {
                            var td = document.createElement("td");
                            td.innerHTML=goods_lists[i][j]
                            tr.appendChild(td);
                        }
                        var td = document.createElement("td");
                        td.innerHTML="<button onclick='chuku("+goods_lists[i][0]+")'>出库</button><button onclick='ruku("+
                        goods_lists[i][0]+")'>入库</button><button onclick='bianji("+goods_lists[i][0]+
                        ")'>编辑</button><button style='background-color: red;' onclick='delete_id("+goods_lists[i][0]+")'>删除</button>"
                        tr.appendChild(td);        
                        Id("goods_table").appendChild(tr);
                    }
                    if (max_n==10000||goods_lists.length<=201){
                    Id('hide_show_rows').innerText="已全部加载";Id('goods_table_id').scrollTop=Id('hide_show_rows').value}
                    else{Id('hide_show_rows').style.display = "block";Id('hide_show_rows').innerText="点击加载全部"}
                    
                }else if(select_id == "outin"){
                    Id("goods_table").innerHTML=""
                    var tr = document.createElement("tr");tr.classList.add("top_tr")
                    for (let j = 0; j < goods_lists[0].length; j++) {
                        var td = document.createElement("td");
                        td.classList.add("width50");
                        td.innerHTML=goods_lists[0][j]
                        tr.appendChild(td);
                    }
                    Id("goods_table").appendChild(tr);
                    for (let i = goods_lists.length-1; i >0 ; i--) {   
                        var tr = document.createElement("tr");
                        if (i<=goods_lists.length-201){tr.classList.add("hide_rows");}
                        for (let j = 0; j < goods_lists[0].length; j++) {
                            var td = document.createElement("td");
                            td.innerHTML=goods_lists[i][j]
                            tr.appendChild(td);
                        }
                        Id("goods_table").appendChild(tr);
                    }
                }else{
                    Id("good_id").value=goods_lists[1][0];
                    goods_nums=Id("good_row_num").innerText*1
                    for (let n=1; n<goods_nums;n++){
                        Id("good_row"+n).value=goods_lists[1][n];}
                    Id("good_num").value=goods_lists[1][goods_nums];
                    Id("good_old_num").innerText=Id("good_num").value;
                }
            }else{
                alert("服务器未开启")
            }
        }
    }
}

function clickok_goods(){
    if(Id("goods_top_bt").innerText=="新增确认" || Id("goods_top_bt").innerText=="编辑确认"){
        if (Id("good_row1").value=="" || Id("good_row2").value==""|| Id("good_row3").value==""|| Id("good_row4").value=="" ){
            Id("good_top_msg1").innerHTML="不能为空";Id("good_top_msg2").innerHTML="不能为空";
            Id("good_top_msg3").innerHTML="不能为空";Id("good_top_msg4").innerHTML="不能为空";
        }else{
            xhr.open("post","/add_edit_goods",true);
            var data = new FormData();
            data.append('good_id', Id("good_id").value);
            data.append('storename', storename.value);
            for (let n=1; n<Id("good_row_num").innerText*1;n++){
                data.append('good_row'+n, Id("good_row"+n).value);}
            data.append('good_num', Id("good_num").value);
            data.append('username', username.value);
            if(Id("goods_top_bt").innerText=="新增确认"){add_edit="新增"}else{add_edit="编辑"}
            data.append('add_edit', add_edit);
            data.append('n', Id("good_row_num").innerText);
            xhr.send(data);
            xhr.onreadystatechange = function(){
                if (xhr.readyState==4){
                    if(xhr.status==200){
                        get_goods("");hide_goods_top()
                    }else{
                        alert("服务器未开启")
                    }
                }
            }
        }
    }else{
        if(Id("goods_top_bt").innerText=="出库确认"){sum_sl= Id("good_old_num").innerText - Id("good_num").value;outin="出库"}
        if(Id("goods_top_bt").innerText=="入库确认"){sum_sl= Id("good_old_num").innerText*1 + Id("good_num").value*1;outin="入库"}
        if (Id("good_num").value*1 == 0){Id("good_top_msg_num").innerText="不能为空,不能为0"}
        else if (sum_sl < 0){Id("good_top_msg_num").innerText="出库数量不能大于"+Id("good_old_num").innerText}
        else{
            xhr.open("post","/change_goods",true);
            var data = new FormData();
            data.append('storename', storename.value);
            data.append('good_id', Id("good_id").value);
            for (let n=1; n<Id("good_row_num").innerText*1;n++){
                data.append('good_row'+n, Id("good_row"+n).value);}
            data.append('good_num', Id("good_num").value);
            data.append('sum_sl', sum_sl);
            data.append('username', username.value);
            data.append('outin', outin);
            data.append('n', Id("good_row_num").innerText);
            xhr.send(data);
            xhr.onreadystatechange = function(){
                if (xhr.readyState==4){
                    if(xhr.status==200){
                        get_goods("");hide_goods_top()
                    }else{
                        alert("服务器未开启")
                    }
                }
            }
        }
    }
}

function chuku(id_num){
    Id("goods_top_bt").innerHTML="出库确认"//销售出库、生产出库、调拨出库、退货出库、盘亏出库、其他出库
    show_goods_top("outin"); get_goods(id_num)
}
function ruku(id_num){
    Id("goods_top_bt").innerHTML="入库确认"//销售入库、生产入库、调拨入库、退货入库、盘盈入库、其他入库
    show_goods_top("outin"); get_goods(id_num)
}
function bianji(id_num){
    Id("goods_top_bt").innerHTML="编辑确认"
    show_goods_top("edit");get_goods(id_num)
}

function delete_id(delete_id){
    var result = confirm("警告，该行数据将删除，数据无价，三思而后行"); // 将要显示的文本作为参数传入confirm()函数
    if (result) {
        xhr.open("post","/delete_goods",true);
        var data = new FormData();
        data.append('delete_id', delete_id);
        data.append('storename', storename.value);
        data.append('czy', username.value);
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4){
                if(xhr.status==200){
                    if  (xhr.responseText=="success"){
                        get_goods("");}
                    else{alert("该产品有库存，不允许删除") }
                }else{
                    alert("服务器未开启")
                }
            }
        }
    }
}
function up_excel(){Id("file_excel").click()}
function up_file_excel(){
    var reader_csv= new FileReader()
    reader_csv.readAsText(Id("file_excel").files[0],"GBK")//,"ansi"utf-8
    reader_csv.onload=function(){     
        var csv_str=reader_csv.result;
        var fdata = new FormData();
        fdata.append('storename', storename.value);
        fdata.append('csv_str', csv_str);
        xhr.open("post","/up_excel",true);
        xhr.send(fdata);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4){
                if(xhr.status==200){
                    if  (xhr.responseText=="success"){
                        alert(Id("file_excel").files[0].name+"上传成功");
                        get_goods("")
                    }else{alert(Id("file_excel").files[0].name+"上传失败,格式错误，参考导出表格(编码GB2312,ANSI,UTF-8)")}
                }else{alert("上传失败,服务器响应错误")}
                Id("file_excel").value=null
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

    var cols = rows[0].querySelectorAll("td, th");
    if (cols[cols.length-1].innerText=="操作"){var n=1;}else{var n=0};
    for (var i = 0; i < rows.length; i++) {
      var row = [], cols = rows[i].querySelectorAll("td, th");
      for (var j = 0; j < cols.length-n; j++) {
        row.push(cols[j].innerText);
      }
      csv.push(row.join(","));
    }
    var csvFile = new Blob(["\ufeff" + dat], {type: "text/csv;charset=UTF-8;"})
    var downloadLink = document.createElement("a");
    downloadLink.download = Id("foot_storename").innerText+nowTime+".csv";
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.click();
    downloadLink=null;

}
function upfile_or_uploud(){
    if (Id("up_excel").innerHTML=="表格导入"){up_file_excel();}else{upload();}
}
//——————————————————————————————————————————————————————————————————————————————————————————————————
// 以下为Cloud部分函数

function next_path_file(val){
    // alert("服务器未开启")
    Id("path").innerText=Id("path").innerText + val+"/"
    path_file()
}
function add_dirs(){
    var new_dirsname = prompt("输入新文件夹名称", "");
    if (new_dirsname != null) {if(new_dirsname!=""){
        xhr.open("post","/add_dirs",true);
        var data = new FormData();
        data.append('new_dirsname',Id("path").innerText+ new_dirsname);
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4){
                if(xhr.status==200){
                    if(xhr.responseText=="success"){
                        alert("<"+new_dirsname+">创建成功")
                        path_file();
                    }else{ 
                        alert(xhr.responseText)                       
                    }
                }else{
                    alert("服务器未开启")
                }
            }
        }
    }else{alert("仓库名不能为空")}}
}
function up_path(){
    var paths=Id('path').innerHTML;
    Id('path').innerHTML=paths.split('/').splice(0,paths.split('/').length-2).join("/")+"/"
    path_file()
}
function get_path_file(){
    Id("up_excel").style.display ="block";
    Id("in_add_good").style.display ="none";
    Id("add_name_bt").style.display ="none";
    Id("select_all").style.display = "none";Id("select_bt").innerText="打开搜索";Id("select_bt").style.display ="none";
    Id("path_show").style.display = "block";
    Id('hide_show_rows').style.display = "none";
    Id('add_dirs_bt').style.display = "block";
    Id("myElement").innerHTML="";
    Id("up_excel").innerHTML="上传云盘";
    Id("file_excel").accept="";
    Id("foot_storename").innerText="公共云盘";
    path_file()
}

function path_file(){
    xhr.open('post', '/path_file', true);
    var data = new FormData();
    data.append('path', Id("path").innerText);
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if (xhr.readyState==4){
            if(xhr.status==200){
                Id("goods_table").innerHTML='<tr><td width=30px>id</td><td width=380px class="left">文件或文件夹</td><td width=80px>文件大小</td>'+
                    '<td width=100px>修改日期</td><td width=50px>操作</td></tr>'
                var filepath_table_rows=JSON.parse(xhr.responseText) 
                var filepath=filepath_table_rows[0]
                var table_rows=filepath_table_rows[1]
                for (let i = 0; i < table_rows.length; i++){
                    var tr = document.createElement("tr");
                    var td = document.createElement("td");td.innerHTML=i+1;tr.appendChild(td);//id列
                    var td = document.createElement("td");
                    td.classList.add("left")
                    if (table_rows[i][0].substr(-1)=="/"){
                        td.innerHTML="<span style='text-decoration: underline;cursor: pointer;' onclick='next_path_file(\""+table_rows[i][0].slice(0,-1)+"\")'>"+table_rows[i][0]+"</span>"  
                    }else{td.innerHTML='<a style="cursor: pointer;" target="_blank" href="/Cloud'+Id('path').innerText+table_rows[i][0]+'">'+table_rows[i][0]+'</a>'}
                    tr.appendChild(td);//文件文件夹列
                    for (let j = 1; j < table_rows[0].length; j++) {
                        var td = document.createElement("td");  
                        td.innerHTML=table_rows[i][j]
                        tr.appendChild(td);
                    }
                    var td = document.createElement("td");
                    td.innerHTML='<button onclick="download('+table_rows[i][0]+')"><a target="_blank" href="/dload_file?path='+
                    Id('path').innerText+'&file='+table_rows[i][0]+'">下载</a></button>'
                    tr.appendChild(td);        
                    Id("goods_table").appendChild(tr);
                }
            }else{
                alert("服务器未开启")
            }   
        }
    }
}

function upload() {
    if (window.XMLHttpRequest){var XMLHttp=new XMLHttpRequest();// code for IE7+, Firefox, Chrome, Opera, Safari
    }else{var XMLHttp=new ActiveXObject("Microsoft.XMLHTTP");}// code for IE6, IE5

    XMLHttp.open('post', '/upload_file', true);
    var fdata = new FormData();
    fdata.append('file', Id("file_excel").files[0]);
    fdata.append('path', Id("path").innerText);
    Id("myElement").innerHTML="开始上传..."
    XMLHttp.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            var percentComplete =  Math.round((event.loaded / event.total)*10000)/100;
            Id("myElement").innerHTML="上传进度"+percentComplete+"%"
        } 
    };
    XMLHttp.send(fdata);
    XMLHttp.onreadystatechange = function(){
        if (XMLHttp.readyState==4){
            if(XMLHttp.status==200){
                get_path_file();alert("上传成功");Id("file_excel").value=null
            }else{
                alert("服务器未开启")
            }   
        }
    }
}


