var demo = document.getElementById('demo');
console.log(demo.children); // будет только span и p. Т.е плохо НЕ оборачивать текст в теги
console.log(demo.childNodes); // на childNodes ориентироваться нельзя - учитываются пробелы, и в разных браузерах разные данные