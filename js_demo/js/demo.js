$(function () {
    // function shuffle(card) {
    //     let n;
    //     let m;
    //     for (let i = card.length - 1; i >= 0; i--) {
    //         console.log(i);
    //         n = Math.floor(Math.random() * (i + 1));
    //         console.log("随机数：" + n);
    //         m = card[n];
    //         card[n] = card[i];
    //         card[i] = m;
    //     }
    //     return card;
    // }
    //
    // var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    // console.log(shuffle(list));
    //
    // var box = document.getElementById('box');
    // for (let i = 0;i<10;i++){
    //     var new_box = box.cloneNode();
    //     new_box.id = i;
    //     document.body.appendChild(new_box);
    // }


    function user() {

    }

    var day = {
        did: 0,
        killed: 0,
        voted: 0
    };
    var u_list = [];
    for (var i = 0; i < 7; i++) {
        var a = new user();
        a.uid = i + 1;
        u_list.push(a);
    }
    console.log(u_list);

    var box = $('div.one');

    // box.on('click',demo);

    // function demo() {
    //     box.css('background-color','#fff');
    // }
    var menu = {
        // 当前状态
        currentState: 'hide',

        // 绑定事件
        initialize:  function() {
            var box = $('div.one');
            box.on("click", self.transition);
        },

        // 状态转换
        transition: function(event){
            switch(this.currentState) {
                case "hide":
                    this.currentState = 'show';
                    box.css('background-color','#fff');
                    break;
                case "show":
                    this.currentState = 'hide';
                    box.css('background-color','red');
                    break;
                default:
                    console.log('Invalid State!');
                    break;
            }
        }

    };

    var div ={
      status:'one',
    };


    box.on('click',function () {

    });

    var day = {
        // when:null,
        // killed: null,
        // voted : null
    };
    day_list=[];
    var day1 = Object.create(day);
    day1.when=1;
    // day1.killed=null;
    day1.voted=15;
    day_list.push(day1);
    var day2 = Object.create(day);
    day2.when=2;
    day2.killed=14;
    day2.voted=12;
    day_list.push(day2);
    console.log(day_list);
   var a=day_list[1].killed;
console.log(a);



});

