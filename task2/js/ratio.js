function shuffle(card) {
    let n;
    let m;
    for (let i = card.length - 1; i >= 0; i--) {
        console.log(i);
        n = Math.floor(Math.random() * (i + 1));
        console.log("随机数：" + n);
        m = card[n];
        card[n] = card[i];
        card[i] = m;
    }
    return card;
}
function player() {
    var card=[];
    var killer = document.getElementById('killer');
    var vulgar = document.getElementById('vulgar');
    var amount = document.getElementById('amount');
    amount.value=amount.value.replace(/[^\d]/g,'');
    var amount_num = amount.value;
    if (amount_num >= 4 && amount_num <= 18) {
        var am_num = amount_num;
        var killer_num = parseInt(am_num / 3);
        var vulgar_num = am_num - killer_num;
        killer.innerHTML = killer_num;
        vulgar.innerHTML = vulgar_num;

        for (let i=0;i<killer_num;i++){
            card.push(1);
        }
        for (let i=0;i<vulgar_num;i++){
            card.push(0);
        }
        localStorage.setItem('card',JSON.stringify(shuffle(card)));
    }else {
        killer.innerHTML="";
        vulgar.innerHTML="";
    }
}

function btn() {
    var amount = document.getElementById('amount');
    var amount_num = amount.value;
    if (amount_num< 4 || amount_num > 18) {
        alert('请输入正确的玩家数量。');
    }else  {
        window.open('card.html')
    }


}
