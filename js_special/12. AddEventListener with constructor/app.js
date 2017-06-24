window.addEventListener("DOMContentLoaded", init);

function btnClick(name) {
    console.log(name);
}

function init() {
    var btn = document.getElementById('demo');
    btn.addEventListener("click", function() {
        btnClick("Yura");
    })

} //end init