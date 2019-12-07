$(function () {
    var icon1 = document.getElementsByClassName('custom-icon-arrow')[0];
    icon1.onclick = function () {
        window.open('ratio.html');
    };
});
var card = JSON.parse(localStorage.getItem('card'));
console.log(card);
function show() {
    var card_btn = document.getElementById('card-b');
    var cid = document.getElementById('cid');
    var name = document.getElementById('name');
    var top_num = cid.innerHTML;
    var bot_num = card_btn.innerHTML.replace(/[^\d]/g, '');
    var pic = document.getElementById('pic');
    if (bot_num===''){
        alert("法官查看");
    }else {
        if (top_num === bot_num) {
            pic.src = "../img/user.png";
            if (card[top_num-1] === 1) {
                name.innerHTML = '狼人';
            } else {
                console.log(card[top_num]+"card[x]");
                name.innerHTML = '平民';
            }
            console.log("id:"+top_num);
            console.log(typeof parseInt(top_num));
            console.log(card.length);


            if (parseInt(top_num)===card.length){
                card_btn.innerHTML = "法官查看";
            }else {
                top_num = parseInt(top_num) + 1;
                console.log(top_num + "top_num");
                card_btn.innerHTML = "隐藏并传递给" + top_num + "号";
            }


        } else {
            pic.src = "../img/card.png";

            cid.innerHTML = parseInt(cid.innerHTML) + 1;
            name.innerHTML = "";
            card_btn.innerHTML = "查看" + cid.innerHTML + "身份";
        }

    }
}
