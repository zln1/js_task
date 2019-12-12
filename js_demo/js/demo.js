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



    // box.on('click',demo);

    // function demo() {
    //     box.css('background-color','#fff');
    // }




    // var type = 0;
    // $('#box').on('click',function () {
    //     if (type===0){
    //         type=1;
    //     }else {
    //         type=0;
    //     }
    //     m();
    // });
    //
    // function m() {
    //     if (type===1){
    //         $('#box_son').css('display','block');
    //     }else {
    //         $('#box_son').css('display','none');
    //     }
    //     console.log(type);
    // }
    //




var box_son = $('#box_son');
    var menu = {
        currentState: 'hide',
        initialize:function () {
            var self = $('#box');
            // $('#box').on('click',self.transition);
            self.on('hover',self.transition);
        },

        transition:function () {
            switch (this.currentState) {
                case "hide":
                    this.currentState='show';
                    box_son.css('display','block');
                    break;
                case "show":
                    this.currentState='hide';
                    box_son.css('display','none');
                    break;
                default:
                    console.log('Invalid State!');
                    break;
            }
        }
    };

    //
    $('#box').on('click',function () {
        menu.transition();
        console.log(menu);
    });
    //
    //


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


     var num=   NumberToChinese(100012);

        console.log(num);
});

