


        var node = null;

        function selectNextNode() {
            resetColor();
            if (node == null) {
                var list = document.getElementById("list");
                node = list.firstChild;
                node.setAttribute("style", "color:red");
                console.log(node);
                return;
            }
            // Получение следующего элемента, которые в дереве находиться на одном уровне.
            node = node.nextSibling;
            if (node != null) {
                node.setAttribute("style", "color:red");
                console.log(node);
            }

        }
        // Вешаю события на кнопки
        var nextNodeBtn = document.getElementById("demo_1");
        var previousNodeBtn = document.getElementById("demo_2");

        nextNodeBtn.addEventListener("click", selectNextNode);
        previousNodeBtn.addEventListener("click", selectPrevNode);

        // Функция получения предидущего элемента
        function selectPrevNode() {
            resetColor();
            if (node == null) {
                var list = document.getElementById("list");
                node = list.lastChild;
                node.setAttribute("style", "color:red");
                return;
            }
            // Получение предыдущего элемента, которые в дереве находиться на одном уровне.
            node = node.previousSibling;
            if (node != null) {
                node.setAttribute("style", "color:red");
            }
        }

        function resetColor() {
            var liList = document.getElementsByTagName("li");
            for (var i = 0; i < liList.length; i++) {
                liList[i].setAttribute("style", "color:black");
            }
        }

