window.addEventListener("DOMContentLoaded", init);

function init() {
    var a = document.getElementById("a");

    // ev - это объект события
    a.addEventListener("click", function(e) {
        e.stopPropagation(); // остановка всплытия события
        console.log("Click a");
    });
    var b = document.getElementById("b");
    b.addEventListener("click", function(e) {
        e.stopPropagation();
        console.log("Click b");
    });
    var c = document.getElementById("c");
    c.addEventListener("click", function(e) {
        e.stopPropagation();
        console.log("Click c");
    });
} // end init