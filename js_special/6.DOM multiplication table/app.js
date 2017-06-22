// easy multipl.table
//*************************************************************************** */

// for (var i = 1; i <= 10; i++) {
//     for (var k = 1; k <= 10; k++) {
//         var p = document.createElement("p");
//         var text = document.createTextNode(i + " * " + k + ' = ' + i * k);
//         p.appendChild(text);
//         document.body.appendChild(p);
//     }

// }


// Table
//**************************************************************************** */
/*
var table = document.createElement("table");
for (var i = 1; i <= 10; i++) {
    var tr = document.createElement("tr"); // create table row
    for (var k = 1; k <= 10; k++) {
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(i * k));
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);
*/
// Функция конструктор. Показать таблицу, вызвав функцию show() из функции-конструктора
//*********************************************************************************** */

function multiTable(x, y) {
    this.init_ = function() {
        this.table = document.createElement("table");
        for (var i = 1; i <= x; i++) {
            var tr = document.createElement("tr"); // create table row
            for (var k = 1; k <= y; k++) {
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(i * k));
                tr.appendChild(td);
            }
            this.table.appendChild(tr);
        }
    }
    this.show = function() {
        document.body.appendChild(this.table);
    }
    this.init_();
}
var newTable = new multiTable(5, 5);
newTable.show();

(new multiTable(15, 15)).show(); // как вариант без переменной

// можно скрипт выше вписать в анонимную функцию - тогда, все объекты внутри будут недоступны извне
(function() {
    //код
})();