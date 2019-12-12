var u_role = JSON.parse(localStorage.getItem('card'));
var u_status = JSON.parse(localStorage.getItem('u_status'));
var day = JSON.parse(localStorage.getItem('day_list'));
$(function () {

    function last() {
        let civilians = 0;
        var killer = 0;
        for (var i = 0; i < u_role.length; i++) {
            if (u_status[i] === 0) {
                if (u_role[i] === 0) {
                    civilians = civilians + 1;
                } else {
                    killer = killer + 1;
                }
            }
        }
        return [civilians, killer];
    }

    var last_num = last();
    var last_list = $('#last_number').children('.count');
    var c = last_list[0];
    var k = last_list[1];

    k.textContent = '杀手' + last_num[1] + '人';
    c.textContent = '平民' + last_num[0] + '人';
    console.log(k);


    var overDate = $($('.main-bot-content')[0]);
    var father_Node = $($('.main-bottom')[0]);

    for (var i=0;i<day.length;i++){
        var add= overDate.clone(false);
        var oneDay= day[i];
        var night=oneDay.killed;
        var daytime=oneDay.voted;

        var d= parseInt(daytime);
        var v_role=u_role[d-1];

        if (i!==0){
            var whe=i+1;
            add.appendTo(father_Node);
            $($(add.children()[0]).children()[0]).children()[0].textContent='第'+whe+'天';

        }else {
            add=overDate;

        }
        var night_text=$($(add.children()[0]).children()[1]).children()[0];
        var daytime_text=$($(add.children()[0]).children()[1]).children()[1];

        if (night>0){
            night_text.textContent='黑夜：'+night+"号被杀死了,真实身份是平民";
        }else {
            night_text.textContent="黑夜：无事发生。";
        }


        if (daytime>0){
            var role;
            if (v_role===1){
                role = '杀手';
            }else {
                role='平民';
            }
            daytime_text.textContent='白天：'+daytime+"号被投死了,真实身份是"+role;
        }else {
            daytime_text.textContent="白天：无事发生。";

        }
    }

    $('.mb-cont-outer').last().css('margin-bottom','13vh');


});