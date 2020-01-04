$(function () {

    $('#log_btn').on('click', function () {
        var name = $('#username').val();
        var pwd = $('#password').val();
        console.log("name:" + name);
        console.log("psd:" + pwd);
        var data = "name=" + name + "&pwd=" + pwd;
        var data1 = "username"+name+"&password"+pwd;
        console.log(data);
        var  a=login(data1);
        console.log(a.data);
    });



    function login(user) {
        var code = 0;
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && xhr.status === 200) {
                code =  this.response;
                console.log("response:"+code);
                switch (code) {
                    case '200':
                        alert("登陆成功！");
                        // window.location.href='';
                        break;
                    case '-100':
                        alert("密码错误");
                        break;
                    case '-200':
                        alert("用户不存在");
                }
            } else {
                console.log(xhr.responseText);
            }
        };
        var url = 'http://localhost:8080/login';
        // var url1= 'http://dev.admin.carrots.ptteng.com/carrots-admin-ajax/a/login';
        xhr.open('post', url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(user);
        return code;
    }
});
