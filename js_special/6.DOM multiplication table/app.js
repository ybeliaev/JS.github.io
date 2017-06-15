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