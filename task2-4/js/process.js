$(function () {

    // change_color();

    var d_list = JSON.parse(localStorage.getItem('day_list'));
    var last_d = d_list[d_list.length - 1];
    var last_id = '#d'+ d_list.length;
    var role = JSON.parse(localStorage.getItem('card'));



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
    function firm4() {
        var firm=confirm('本轮游戏是否已经结束？');
        if (firm===true){
            window.location.href='over.html';
        }

    }

    var is_add = window.location.search.split('?')[1];
    if (is_add==='vote'){

    }





    $('#btn1').on('click',function () {
       window.location.href='vote.html';
    });



    var model =document.getElementById('d1');
    console.log(model);
    for (var i = 1; i < d_list.length; i++) {
        var d_obj = d_list[i];
        var day = model.cloneNode(true);
        var main = document.getElementById('main');
        main.appendChild(day);
        var id = i + 1;
        day.id= "d"+id;
        var d = '#d'+id;
        var kid = d_obj.killed;
        var vid = d_obj.voted;
       var numChin= NumberToChinese(id);
        $(day).children('.day')[0].textContent='第'+numChin+'天';


        if (kid!==null){
            if (kid===0){
                $($(d).children()[1]).children('.k_message')[0].textContent='没有进行任何操作';
            }else {
                $($(d).children()[1]).children('.k_message')[0].textContent=kid+'号被杀手杀死，真实身份是平民';
            }

        }
        if (vid!==null){
            var v_role ;
            if (role[parseInt(vid)-1]===0){
                v_role = '平民';
            }else {
                v_role='杀手';
            }
            $($(d).children()[1]).children('.v_message')[0].textContent=vid+'号被投死，真实身份是'+v_role;
        }
    }
    var d1 = $('#d1');
    var k_msg= $(d1.children()[1]).children('.k_message')[0];
    var v_msg= $(d1.children()[1]).children('.v_message')[0];
    var k_d1 = d_list[0].killed;
    var v_d1 = d_list[0].voted;


    if (k_d1!==null){
        if (k_d1===0){
            k_msg.textContent='没有进行任何操作';
        }else {
            k_msg.textContent=k_d1+'号被杀手杀死，真实身份是平民';
        }

    }
    if (v_d1!==null){
        var v_role1;
        if (role[parseInt(v_d1)-1]===1){
            v_role1 = '杀手';
        }else {
            v_role1= '平民';
        }
        v_msg.textContent=v_d1+'号被投死，真实身份是'+v_role1;
    }


    var step = $('span.step');

    step.css('background-color', '#888');
    change_color();

    step.on('click', function () {
        switch (this.textContent) {
            case "杀手杀人":
                if (last_d.next_step!==1){
                    (confirm("请进行游戏下一项活动"));
                    return;
                }
                window.location.href = "vote.html?kill";
                break;
            case "亡灵发表遗言":
                if (last_d.next_step>2){
                    (confirm("请进行游戏下一项活动"));
                    return;
                }
                if (last_d.next_step<2){
                    firm3();
                    return;
                }
                firm1();
                location.reload();
                break;
            case "玩家依次发言":
                if (last_d.next_step>3){
                    (confirm("请进行游戏下一项活动"));
                    return;
                }
                if (last_d.next_step<3){
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

    $('#fb1').on('click',function () {

        firm4();
    });

    $('#fb2').on('click',function () {
        window.location.href='vote.html?back';
    });



    // var day_menu =0 ;
    // function menu() {
    //     if (day_menu===0){
    //         day_menu=1;
    //     }else {
    //         day_menu=0;
    //     }
    // }

    var content = $('.content');
    content.last().css('display','block');

    content.last().css('margin-bottom','100px');

    $('.day').on('click',function () {
        if ($(this).next().css('display')==='none'){
            $(this).next().css('display','block');
        }else {
            $(this).next().css('display','none');
        }
    });
});






/**
 * @return {string}
 */
function NumberToChinese(number) {
    var chnNumChar = ['零','一','二','三','四','五','六','七','八','九'];
    var chnUnitChar=['','十','百','千','万','十万','百万','千万','亿','万亿','亿亿'];
    var strIns = '', chnStr= '';
    var unitPos=0;
    var zero = true;
    while (number>0){
        var v = number % 10;
        if (v===0){
            if (!zero){
                zero=true;
                chnStr =chnNumChar[v]+chnStr;
            }
        }else {
            zero=false;
            strIns=chnNumChar[v];
            strIns+=chnUnitChar[unitPos];
            chnStr=strIns+chnStr;
        }
        unitPos++;
        number=Math.floor(number/10);
    }
    return chnStr;
}

