window.addEventListener('load', ()=>{
    document.body.style.margin = '0';
    window.alert = function(arg){
        const box = document.createElement('div');
        box.style.width = '100%';
        box.style.height = '100vh';
        box.style.position = 'fixed';
        box.style.top = '0';
        box.style.left = '0';
        box.style.backgroundColor = 'rgba(135, 206, 235, 0.1)';
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.width = '520px';
        div.style.border = '1px solid rgb(0, 137, 190)';
        div.style.padding = '30px';
        div.style.textAlign = 'center';
        div.style.fontSize = '24px';
        div.style.animation = 'tanchuang .4s';
        div.style.backgroundColor = 'rgb(159, 212, 233)';
        div.style.left = 'calc(50% - 281px)';
        div.style.top = '200px';
        div.style.borderRadius = '10px';
        const span = document.createElement('span');
        span.innerHTML = arg;
        div.appendChild(span);
        div.style.color = 'rgb(1, 71, 99)';
        box.appendChild(div);
        document.body.appendChild(box);
    }
    window.alert1 = function(arg, x, y, LOrR = 'left'){
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.border = '1px solid rgb(0, 137, 190)';
        div.style.padding = '30px';
        div.style.textAlign = 'center';
        div.style.fontSize = '24px';
        div.style.animation = 'tanchuang .4s';
        div.style.backgroundColor = 'rgb(159, 212, 233)';
        if (LOrR == 'left') {
            div.style.left = `${x}px`;
        }else if (LOrR == 'right') {
            div.style.right = `${x}px`;
        }
        div.style.top = `${y}vh`;
        div.style.borderRadius = '10px';
        const span = document.createElement('span');
        span.innerHTML = arg;
        div.appendChild(span);
        div.style.color = 'rgb(1, 71, 99)';
        document.body.appendChild(div);
        setTimeout(function() {
            document.body.removeChild(document.body.childNodes[document.body.childNodes.length - 1]);
        }, 1000);
    }
    window.alert2 = function(arg, callback){
        const box = document.createElement('div');
        box.style.width = '100%';
        box.style.height = '100vh';
        box.style.position = 'fixed';
        box.style.top = '0';
        box.style.left = '0';
        box.style.backgroundColor = 'rgba(135, 206, 235, 0.6)';
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.border = '1px solid rgb(0, 137, 190)';
        div.style.padding = '40px 200px 100px';
        div.style.textAlign = 'center';
        div.style.fontSize = '24px';
        div.style.backgroundColor = 'rgba(159, 212, 233, 0.8)';
        div.style.left = 'calc(50% - 281px)';
        div.style.userSelect = 'none';
        div.style.top = '26vh';
        div.style.borderRadius = '10px';
        const span = document.createElement('span');
        span.innerHTML = arg;
        div.appendChild(span);
        const btnYes = document.createElement('button');
        btnYes.innerHTML = '重新开始';
        btnYes.style.position = 'absolute';
        btnYes.style.width = '100px';
        btnYes.style.height = '40px';
        btnYes.style.left = 'calc(50% - 50px)';
        btnYes.style.bottom = '30px';
        btnYes.style.backgroundColor = 'rgb(109, 197, 231)';
        btnYes.style.border = '1px solid rgb(0, 137, 190)';
        btnYes.style.color = 'rgb(1, 71, 99)';
        div.style.color = 'rgb(1, 71, 99)';
        btnYes.style.borderRadius = '4px';
        div.appendChild(btnYes);
        box.appendChild(div);
        document.body.appendChild(box);
        let bodyChild = document.body.childNodes;
        btnYes.onclick = function(){
            document.body.removeChild(bodyChild[bodyChild.length - 1]);
            callback();
        }
    }
});