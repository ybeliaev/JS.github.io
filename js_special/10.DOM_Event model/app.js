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
function boxClick() {
    console.log('Произошел щелчёк по квадрату')
}
var box = document.getElementById('box');
box.addEventListener('click', boxClick);