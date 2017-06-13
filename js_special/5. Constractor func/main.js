window.onload = function() {

        // функция конструктор отображения прямоугольника на экране

        function Rectangle(x, y) {
            this.width = x;
            this.height = y;
            this.background = generateColor();
            this.show = function() {
                var box = `<div style = "width: ${this.width}px; \
                                        height: ${this.height}px;\
                                        background: ${this.background};"></div>`;
                document.write(box);
            }
        }

        // функция-генератор цвета

        function generateColor() {
            return "#" + Math.floor(Math.random() * 16777215).toString(16);
        }

        //ЗАПУСК
        // var box = new Rectangle(250, 300);
        // box.show();

        // получить 10 квадратиков

        function range(count) {
            var array = [];
            for (var i = 0; i <= count; i++) {
                array.push(i);
            }
            return array;
        }

        range(10).map(function() {
                (new Rectangle(100, 100)).box.show();
            })
            // другой способ
            // range(10).map(x => new Rectangle(100, 100))
            //     .map(x => x.show());

    } //end