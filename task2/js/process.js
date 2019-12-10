$(function () {

    // change_color();

    var d_list = JSON.parse(localStorage.getItem('day_list'));
    var last_d = d_list[d_list.length - 1];
    var last_id = '#d'+ d_list.length;



    function change_color() {
        if (last_d.next_step===1) {
            console.log('+++++++++++0++++++');
            $($(last_id).children()[1]).children('span').slice(0, 4).css('background-color', '');
        } else if (last_d.next_step===2) {
            console.log('+++++++++++0--10++++++');
            $($(last_id).children()[1]).children('span').slice(1, 4).css('background-color', '');
        } else if (last_d.next_step===3) {
            console.log('+++++++++++10--100++++++');
            $($(last_id).children()[1]).children('span').slice(2, 4).css('background-color', '');
        } else if (last_d.next_step===4) {
            console.log('+++++++++++100--1000++++++');
            $($(last_id).children()[1]).children('span').slice(3, 4).css('background-color', '');
        }else{
            console.log('+++++++++++0000++++++');

            $($(last_id).children()[1]).children('span').slice(4).css('background-color', '');

        }
    }
    function firm1() {
        //利用对话框返回的值 （true 或者 false）
        var r1 = (confirm("请死者亮身份并且发表遗言"));
        if (r1 === true) {
            console.log('+++firm1+++');

            d_list[d_list.length - 1].next_step = 3;

            localStorage.setItem('day_list', JSON.stringify(d_list));

        }
    }
    function firm2() {
        //利用对话框返回的值 （true 或者 false）
        var r2 = (confirm("玩家依次发言讨论"));
        if (r2 === true) {
            console.log('+++firm2+++');
            d_list[d_list.length - 1].next_step = 4;

            localStorage.setItem('day_list', JSON.stringify(d_list));

        }
    }

    function firm3(){
        confirm('请按顺序操作 ');
    }

    var is_add = window.location.search.split('?')[1];
    if (is_add==='vote'){

    }

// add();

    var model =document.getElementById('d1');
    console.log(model);
    for (var i = 1; i < d_list.length; i++) {
        var day = model.cloneNode(true);
        var main = document.getElementById('main');
        main.appendChild(day);
        var id = i + 1;
        day.id= "d"+id;
    }












    var step = $('span.step');

    step.css('background-color', 'black');
    change_color();

    step.on('click', function () {
        var color = $(this).css('background-color');

        if (color === 'rgb(0, 0, 0)') {
            (confirm("请进行游戏下一项活动"));
            return;
        }


        switch (this.textContent) {
            case "杀手杀人":
                window.location.href = "vote.html?kill";
                break;
            case "亡灵发表遗言":
                if (last_d.next_step!==2){
                    firm3();
                    return;
                }
                firm1();
                location.reload();
                break;
            case "玩家依次发言":
                if (last_d.next_step!==3){
                    firm3();
                    return;
                }
                firm2();
                location.reload();
                break;
            case "全民投票":
                if (last_d.next_step!==4){
                    firm3();
                    return;
                }
                window.location.href = "vote.html?vote";
                break;
        }


    });
});


