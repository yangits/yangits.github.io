var username= document.getElementById("username")
var password= document.getElementById("password")
var msg= document.getElementById("msg")
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
    var login = document.getElementById("login");
    login.style.display = "block";
}

function hideLogin() { // 隐藏登录窗口的函数
    var login = document.getElementById("login");
    login.style.display = "none";
}

if (localStorage.getItem('username')) {
    username.value = (localStorage.getItem('username'))
}
if (localStorage.getItem('password')) {
    password.value = (localStorage.getItem('password'))
    // hideLogin()
}
