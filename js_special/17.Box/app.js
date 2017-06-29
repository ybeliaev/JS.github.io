window.addEventListener("DOMContentLoaded", init);

function init() {
    var box = document.getElementById("box");
    box.style.left = 0;
    box.style.top = 0;


    window.addEventListener("keyup", function(e) {
        if (e.keyCode == 37) {
            box.style.left = (parseInt(box.style.left) - 100) + "px";
        };
        if (e.keyCode == 39) {
            box.style.left = (parseInt(box.style.left) + 100) + "px";
        };
        if (e.keyCode == 40) {
            box.style.top = (parseInt(box.style.top) + 100) + "px";
        };
        if (e.keyCode == 38) {
            box.style.top = (parseInt(box.style.top) - 100) + "px";
        }
    })
} // end init