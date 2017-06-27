window.addEventListener("DOMContentLoaded", init);

function BtnCreate(btnName) {
    var that = this; // that сохраняет контекст. Здесь это указатель на объест кнопки
    this.name = btnName;
    this.show = function() {
        document.body.appendChild(this.btnElem);
    }
    this.attachEvent_ = function() {
        this.btnElem.addEventListener("click", this.buttonClick_);
    }
    this.buttonClick_ = function() {
        console.log(this); // this указывает на this.btnElem, т.е на объект, вызвавший событие
        console.log(that.name);
    }
    this.init_ = function() {
        this.btnElem = document.createElement("div");
        this.btnElem.className = "demo";

        var textNode = document.createTextNode(this.name);
        this.btnElem.appendChild(textNode);

        //подпишемся на событие
        this.attachEvent_();
    }
    this.init_(); // нижнее подчёркивание говорит, что функция используется только внутри конструктора
}


// function init() {
//     var btn = new BtnCreate("Button");
//     btn.show();
// }

//*************************************************************** */
// Создать 10 кнопок с нечётными целочисельными названиями Чёт не работает???
// 1 способ Функциональный стиль
/*function range(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push[i];
        console.log(arr);
    }
    return arr;
}


function init() {

    range(10).filter(x => x % 2 != 0)
        .map(x => (new BtnCreate(x)).show());
}
*/
// 2 способ Императивный стиль*******************************************************
var count = 0;

function init() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            var btn = new BtnCreate(i);
            btn.show();
            count++;
        }

    }
    console.log(count);
}