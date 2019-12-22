$(function () {

    $('#log_btn').on('click', function () {
        var name = $('#username').val();
        var pwd = $('#password').val();
        console.log("name:" + name);
        console.log("psd:" + pwd);
        var data = "username=" + name + "&&password=" + pwd;
        var  a=log(data);
        console.log(a);
    });



    function log(user) {
        var code = 0;
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && xhr.status === 200) {
                code =  this.response;
                console.log(code);
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
        var url = 'http://121.199.40.163:8080/login';
        xhr.open('post', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(user);
        return code;
    }
});
