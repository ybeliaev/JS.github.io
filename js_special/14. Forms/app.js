window.addEventListener("DOMContentLoaded", init);

function init() {
    var elem = document.getElementById("demo");
    var massagesBox = document.getElementById("massegesbox");
    // keyup - отпустили клавишу
    //keydown - нажали
    //keypress - нажали и держим

    // ev - информация о случившимся событиии
    elem.addEventListener("keyup", function(ev) {
        console.log(this.value);
        console.log(ev.keyCode); // вывод номера нажатой клавиши

        if (ev.keyCode == 13) {
            var newTextLine = document.createElement("p");
            newTextLine.appendChild(document.createTextNode(this.value));
            massagesBox.appendChild(newTextLine);
            this.value = "";
        }
    })
} // end init