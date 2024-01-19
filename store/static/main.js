function Id(str){return document.getElementById(str)}
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
                    localStorage.setItem('username', 0);
                    localStorage.setItem('storename', 0);
                    get_username();
                }else{            
                    var username_table_lists=JSON.parse(xhr.responseText)
                    // var username_lists=username_table_lists[0]
                    // var table_lists=username_table_lists[1] 
                    Id("username").innerHTML=""
                    for (let i = 1; i < username_table_lists[0].length; i++) {   
                        var option = document.createElement("option");
                        option.innerHTML=username_table_lists[0][i][1]
                        Id("username").appendChild(option);
                    }
                    username.options[localStorage.getItem('username')].selected = true;
                    if (username_table_lists[1].length == 0) {add_store();} 
                    else{
                        Id("storename").innerHTML=""
                        for (let i = 0; i < username_table_lists[1].length; i++) {   
                            var option = document.createElement("option");
                            option.innerHTML=username_table_lists[1][i]
                            Id("storename").appendChild(option);
                        }
                        storename.options[localStorage.getItem('storename')].selected = true;
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
    Id("login").style.display = "none";
    Id("select_bt").style.display ="block";
    get_goods("");
}
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

function show_name_top(val){
    if (val=="change"){Id("name_top_bt").innerHTML="编辑确认"}
    else{Id("name_top_bt").innerHTML="新建确认"}
    Id("name_top").style.display = "block";
    Id("name_row3").disabled=false
}
function hide_name_top(){
    Id("name_top").style.display = "none";
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
                        var table_lists=username_table_lists[1]
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
    Id("select_all").style.display = "none";Id("select_bt").innerText="打开搜索";Id("select_bt").style.display ="none";
    Id("add_name_bt").style.display ="block";Id("in_add_good").style.display ="none";
    account_set('')
}
function get_store_goods(){hideLogin();Id("select_into").style.display = "none";}
function get_good_outin(){Id("in_add_good").style.display ="none";Id("add_name_bt").style.display ="none";
    Id("select_bt").style.display ="block";Id("foot_storename").innerText=storename.value+"出入库记录";
    get_goods("outin");Id("select_into").style.display = "block";} 
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

                    for (let i =1; i < goods_lists.length; i++) {   
                        var tr = document.createElement("tr");
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
                }else if(select_id == "outin"){
                    Id("goods_table").innerHTML=""
                    for (let i = 0; i < goods_lists.length; i++) {   
                        var tr = document.createElement("tr");
                        for (let j = 0; j < goods_lists[0].length; j++) {
                            var td = document.createElement("td");
                            if(i==0){td.classList.add("width50");tr.classList.add("top_tr")}
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
    Id("goods_top_bt").innerHTML="编辑确认"//销售入库、生产入库、调拨入库、退货入库、盘盈入库、其他入库
    show_goods_top("edit");get_goods(id_num)
}

function cancel_id(){
    alert("功能未添加")
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
    reader_csv.readAsText(Id("file_excel").files[0],"gb2312")//,"ansi"utf-8
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
      for (var j = 1; j < cols.length-n; j++) {
        row.push(cols[j].innerText);
      }
      csv.push(row.join(","));
    }
    var csvFile = new Blob([csv.join("\n")], {type: "text/csv"});//;charset=gb2312
    var downloadLink = document.createElement("a");
    downloadLink.download = Id("foot_storename").innerText+nowTime+".csv";
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
