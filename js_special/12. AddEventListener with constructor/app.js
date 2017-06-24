window.addEventListener("DOMContentLoaded", init);

function BtnCreate() {
    this.show = function() {
        document.body.appendChild(this.btnElem);
    }
    this.init_ = function() {
        this.btnElem = document.createElement("div");
        this.btnElem.className = "demo";
    }
    this.init_(); // нижнее подчёркивание говорит, что функция исспользуется только внутри конструктора
}

function init() {
    var btn = new BtnCreate();
    btn.show();
}