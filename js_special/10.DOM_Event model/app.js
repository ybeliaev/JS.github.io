// Вызовы функции
function foo() {
    console.log('Функция вызвана')
};
// 1) Явный вызов
foo();
// 2) Конструктор

var a = new foo();
// 3) Ассинхронный

setTimeout(foo, 1000);
// 4) События

var flag = 0; // счётчик щелчков
function boxClick() {
    console.log('Произошел щелчёк по квадрату');
    if (flag == 0) {
        this.style.backgroundColor = generateColor();
    }
    if (flag == 1) {
        this.style.borderRadius = "10px";
    }
    if (flag == 2) {
        this.style.background = "linear-gradient(red, orange)";
    }
    if (flag == 0) {
        this.style.boxShadow = "0 0 10px grey";
    }
    flag++;
}


function generateColor() {
    return "#" + Math.floor(Math.random() * 16222715).toString(16);
}
var box = document.getElementById('box');
box.addEventListener('click', boxClick);

// hammer.js - для обработки тачей на мобильных
// Modernizer - тестирует браузер на возможности
//isMobile - распознать браузер\мобильный