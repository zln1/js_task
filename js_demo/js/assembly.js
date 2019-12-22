$(function () {
    $('#btn').on('click', function () {
        console.time();
        fabonacci(3100);
        console.timeEnd();

    });




    function fabonacci(n) {
        function fabonacci_(n, a, b) {
            if (n === 0) {
                return a; //注意这里是a，小编第一次写时，写成了0，依旧停留在迭代的思想
            } else {
                return fabonacci_(n - 1, b, a + b);
            }
        }
        return fabonacci_(n, 0, 1);
    }


});

