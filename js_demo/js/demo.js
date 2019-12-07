$(function () {
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

    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    console.log(shuffle(list));

});