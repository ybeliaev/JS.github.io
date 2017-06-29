window.addEventListener("DOMContentLoaded", init);

var container,
    images,
    imagesCount,
    position = 0;

function slide() {
    console.log(position, imagesCount);

    if (position < imagesCount - 1) {
        var currentPosition = container.style.left;
        container.style.left = (parseInt(currentPosition) - 200) + "px";


    } else {
        var currentPosition = container.style.left;
        container.style.left = 0 + "px";
        position = -1;
    }
    position++;
    setTimeout(slide, 1800);

}

function init() {

    container = document.getElementById('container');
    console.log(container);
    container.style.left = "0";

    images = document.getElementsByClassName("myImg");
    imagesCount = images.length;
    setTimeout(slide, 2000);
}