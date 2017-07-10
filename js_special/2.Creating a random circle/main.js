window.onload = function() {
        //создание окружности диаметром от 50 до 150px;



        //создадим рандомный цвет
        function generateColor() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        }



        function generateCircle() {
            //создание самого эллемента и добавление к нему класса
            var div = document.createElement('div');
            div.className = 'circle';
            document.body.appendChild(div);

            //генерация случайного цвета и диаметра
            var width = Math.floor(Math.random() * 100 + 50);

            //присвоение свойств
            div.style.backgroundColor = generateColor();
            div.style.width = width + 'px';
            div.style.height = width + 'px';

        }

        //generateCircle();

        //функция цикличного вызова. 
        var i;

        function showCircle() {
            generateCircle();

            if (i < 10) {
                i--;
                setInterval(showCircle, 1000);


            }
        }

        showCircle();





    } //end
