window.onload = function() {
        //создать массив чисел палиндронов от 0 до 1000
        var palindArr = [];
        for (var i = 0; i <= 1000; i++) {
            if (isPalindrom(i)) {
                palindArr.push(i);
            }
        }

        //функция, определяющая число палиндром

        function isPalindrom(num) {

            var oldNum = num;
            var newNum = 0;
            while (num > 0) {
                newNum = newNum * 10 + num % 10;
                num = parseInt(num / 10);
            }
            if (oldNum == newNum) {
                return true;
            } else return false;
        }

// ещё вариант
var polindroms = [];
for (var i = 0; i <= 100000; i++) {
    if (i.toString().split('').reverse().join('') === i.toString()) {
        polindroms.push(i);
    }
}

    } //end