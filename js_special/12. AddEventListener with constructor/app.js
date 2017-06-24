window.addEventListener("DOMContentLoaded", init);

function Button(name) {
    this.name = name;
    this.show = function() {
        document.body.appendChild(this.btnElem);
    }
}

this.attachEvent_ = function() {
    this.btnElem.addEventListener("click", this.btnClick_);
}
this.btnClick_ = function() {
    console.log(this.name);
}

function BtnCreate() {
    this.show = function() {
        document.body.appendChild(this.btnElem);
    }


    this.init_ = function() {
        this.btnElem = document.createElement("div");
        this.btnElem.className = "demo";

        var textNode = document.createTextNode(this.name);
        this.btnElem.appendChild(textNode);
    }
    this.init_(); // нижнее подчёркивание говорит, что функция используется только внутри конструктора
}

function init() {
    var btn = new BtnCreate();
    btn.show();
}