window.onload = function() {
        // Метод map используется для трансформации массива.
        //1.
        var arr = [111, 2, 'три', 4, 5, 56, 66, 77];
        arr.map(item => console.log(item)); // перебор каждого элемента массива отдельно

        //2.******************************************* */

        var arr2 = ['Сидней', 'Киев', 'Москва']
        var arrLength = arr2.map(function(item) {
            return item.length;
        });
        console.log(`Получим массив из длин каждого элемента массива arr2: ${arrLength}`);
        console.log(typeof arrLength);

        //********************************************* */

        //Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.


        var arrNew = [123, 345, 456456]
        arrNew.forEach(function(item) {
            console.log(item);
        });
        // сделать тоже самое с помощью метода forEach??????
        function myFunction() {
            var x = document.forms["frm"];
            var text = "";
            var i;
            for (i = 0; i < x.length; i++) {
                text += x.elements[i].value + "<br>";
            }
            document.getElementById("demo").innerHTML = text;
        }
        document.getElementById("myBtn").addEventListener("click", myFunction);


    } //end