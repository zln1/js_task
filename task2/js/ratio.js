document.onkeydown=function player() {

    var killer = document.getElementById('killer');
    var vulgar = document.getElementById('vulgar');
    var amount = document.getElementById('amount');

    var amount_num = amount.value;
    if (amount_num >= 4 && amount_num <= 18) {
        var am_num = amount_num;
        var killer_num = parseInt(am_num / 3);
        killer.innerHTML = killer_num;
        vulgar.innerHTML = am_num - killer_num;
    }
};

function btn() {
    var killer = document.getElementById('killer');

    if (amount_num < 4 || amount_num > 18) {
        alert('请输入正确的玩家数量。');
    }
}