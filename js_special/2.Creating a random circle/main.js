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

        //функция цикличного вызова. Почему колличество окружностей зависит от i и цикл не останавливается???
        var i = 0;

        function showCircle() {
            generateCircle();

            if (i < 1) {
                i++;
                setInterval(showCircle, 1000);


            }
        }

        showCircle();





    } //end