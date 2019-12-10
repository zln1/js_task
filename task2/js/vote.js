var card = JSON.parse(localStorage.getItem('card'));
var  day_list = JSON.parse(localStorage.getItem('day_list'));
console.log("card:" + card);


$(function () {
    $('.custom-icon-arrow').on('click',function () {
       window.location.href='card.html';
    });

    var u_status = JSON.parse(localStorage.getItem('u_status'));
    // css();

    console.log(u_status);

    console.log(window.location.search.split('?')[1]);
    var type = window.location.search.split('?')[1];
    if (type === undefined) {
        $('div.voice').css('display', 'none');
        $('div.tones').css('display', 'none');
    }
    if (type === 'kill') {
        $('span.header-title').html('杀手杀人');
        $('span.wd').html('杀手请睁眼，杀手请选择要杀的对象');
        $('#v_tones').html('点击下方玩家的头像，对被杀的玩家进行标记');
        $('button.vote-btn').html('确定');
    }
    if (type === 'vote') {
        $('span.header-title').html('投票');
        $('span.wd').html('发言讨论结束，大家请投票');
        $('#v_tones').html('点击得票数最多的人的头像');
        $('button.vote-btn').html('确定');
    }


    var model = document.getElementById('model');
    model.id = "u1";
    if (card[0] === 0) {
        model.childNodes[1].childNodes[1].textContent = '平民';
    } else {
        model.childNodes[1].childNodes[1].textContent = '杀手';
    }

    for (var i = 1; i < card.length; i++) {
        var user = model.cloneNode(true);
        var main = document.getElementById('main');
        main.appendChild(user);
        var id = i + 1;
        user.id= "u"+id;
        $('user_id').innerHTML = i + 1;
        user.childNodes[1].childNodes[3].textContent = id+ "号";
        console.log(name);
        if (card[i] === 0) {
            user.childNodes[1].childNodes[1].textContent = '平民';
        } else {
            user.childNodes[1].childNodes[1].textContent = '杀手';
        }
    }


    var killed_id;
    $('div.user').on('click', function () {
        console.log('点点点');
        console.log(this.id);
        killed_id = this.id;
        console.log($(this).children()[1]);
        $('div.handle').css('display', 'none');
        $($(this).children()[1]).css('display', 'grid');
    });


    // console.log(demo3.children('.user-name').css());
   //  var demo3 = $('#u3');
   // $($(demo3.children()[0]).children('.user-name')).css('background-color','#83b09a');

    for (i = 0; i < u_status.length; i++) {
        if (u_status[i] > 0) {
            console.log("死了");
            var id = i + 1;
            var a = '#u'+id;
            var d = $(a);
            $($(d.children()[0]).children('.user-name')).css('background-color','#83b09a');
        }
    }

    function add() {
        var day = {
            when:1,
            killed:null,
            voted:null,
            next_step:1
        };
        day_list.push(day);
        localStorage.setItem('day_list', JSON.stringify(day_list));
    }
    $('button.vote-btn').on('click', function () {
        if(type==='kill'){
            console.log('杀了：'+killed_id+"号");
            if (killed_id!==undefined){
                var k_id = killed_id.replace(/[^\d]/,'');
                if (u_status[k_id-1]===0){
                    u_status[k_id-1] = 1;
                    day_list[day_list.length-1].killed=k_id;
                }else {
                    alert('当前玩家已死亡，请选择其他玩家');
                    return;
                }

            }else {
                day_list[day_list.length-1]='f';
            }

            day_list[day_list.length-1].next_step=2;
            localStorage.setItem('day_list',JSON.stringify(day_list));
            localStorage.setItem('u_status',JSON.stringify(u_status));
            window.location.href = 'process.html?killed='+k_id;
        }else if (type==='vote'){
            if(killed_id===undefined){
                alert('请选择一个人投死');
            }else {
               var v_id = killed_id.replace(/[^\d]/,'');
               if ( u_status[v_id-1]===0){
                   u_status[v_id-1] = 2;
                   day_list[day_list.length-1].voted=v_id;
                   day_list[day_list.length-1].next_step=0;
                   add();



               }else {
                   alert('当前玩家已死亡，请选择其他玩家');
                   return;
               }

            }
            localStorage.setItem('day_list',JSON.stringify(day_list));
            localStorage.setItem('u_status',JSON.stringify(u_status));
            window.location.href = 'process.html?voted';

        }else {
            window.location.href = 'process.html';
        }
    });
});
