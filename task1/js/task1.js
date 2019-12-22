var list = document.getElementsByClassName('one');
var stop = 0;
var change_box1 = [];
var change_box2 = [];
var change_box3 = [];


var div_rgb_list = [];


//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

//生成RGB
function mk_RGB() {

    var r = randomNum(0, 254);
    var g = randomNum(0, 254);
    var b = randomNum(1, 255);
    return [r, g, b];
}

var first;
var second;
var third;
//生成三个不重复的格子下标
function three() {
      first = randomNum(0, 8);
      second = randomNum(0, 8);
      third = randomNum(0, 8);

    if (second === first) {
        while (second === first) {
            second = randomNum(0, 8);
        }
    }


    if (third === second || third === first) {
        while (third === second || third === first) {

            third = randomNum(0, 8);
        }
    }
    console.log("first:"+first);
    console.log("second:"+second);
    console.log("third:"+third);



    return [first, second, third];
}


//制造三个格子下标+rgb的对象
function mk_div_color() {

    var rand = three();
    var div1 = rand[0];
    var div2 = rand[1];
    var div3 = rand[2];


    var rgb1 = mk_RGB();
    var new_cb = [div1, rgb1[0], rgb1[1], rgb1[2]];
    if (change_box1 != null && change_box1.length !== 0) {
        while (new_cb.toString() === change_box1.toString() ||
        new_cb.toString() === change_box2.toString() ||
        new_cb.toString() === change_box3.toString()) {
            rgb1 = mk_RGB();
            new_cb = [div1, rgb1[0], rgb1[1], rgb1[2]];

        }
    }
    change_box1 = new_cb;


    var rgb2 = mk_RGB();
    new_cb = [div2, rgb2[0], rgb2[1], rgb2[2]];
    if (change_box2 != null && change_box1.length !== 0) {
        while (new_cb.toString() === change_box1.toString() ||
        new_cb.toString() === change_box2.toString() ||
        new_cb.toString() === change_box3.toString()) {
            rgb2 = mk_RGB();
            new_cb = [div2, rgb2[0], rgb2[1], rgb2[2]];
        }
    }

    change_box2 = new_cb;


    var rgb3 = mk_RGB();
    new_cb = [div3, rgb3[0], rgb3[1], rgb3[2]];
    if (change_box3 != null && change_box1.length !== 0) {
        while (new_cb.toString() === change_box1.toString() ||
        new_cb.toString() === change_box2.toString() ||
        new_cb.toString() === change_box3.toString()) {
            rgb3 = mk_RGB();
            new_cb = [div3, rgb3[0], rgb3[1], rgb3[2]];
        }
    }


    change_box3 = new_cb;

    div_rgb_list = [change_box1, change_box2, change_box3];
    return div_rgb_list;
}


function change() {

    if (change_box1.length !== 0) {
        list[change_box1[0]].style.backgroundColor = "";
        list[change_box2[0]].style.backgroundColor = "";
        list[change_box3[0]].style.backgroundColor = "";
    }


    var dr_list = mk_div_color();

    var dr1 = dr_list[0];
    var dr2 = dr_list[1];
    var dr3 = dr_list[2];


    list[first].style.backgroundColor = "rgb(" + dr1[1] + "," + dr1[2] + "," + dr1[3] + ")";
    list[second].style.backgroundColor = "rgb(" + dr2[1] + "," + dr2[2] + "," + dr2[3] + ")";
    list[third].style.backgroundColor = "rgb(" + dr3[1] + "," + dr3[2] + "," + dr3[3] + ")";


    console.log("====================================================")

}

function start() {
    stop = setInterval(change, 1000);
}

function end() {
    clearInterval(stop);
    location.reload();
}




