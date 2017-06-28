window.addEventListener("DOMContentLoaded", init);

var blackpanel,
    imges,
    container;

function closeLightbox() {
    blackpanel.innerHTML = "";
    blackpanel.style.display = "none";
    //Отписать у объекта blackpanel от события "click" функцию closeLightbox
    blackpanel.removeEventListener("click", closeLightbox);
}


function init() {
    // HTMLElement
    blackpanel = document.getElementById('blackpanel');
    // HTMLCollection
    imges = document.getElementsByClassName('myImg');
    container = document.getElementsByClassName("container")[0];

    for (var i = 0; i < imges.length; i++) {
        imges[i].addEventListener('click', function() {
            blackpanel.style.display = "flex";
            console.log(this); // указывает на картинку
            console.log(this.src); // указывает на путь к картинке
            //формируем тег
            var bigImg = document.createElement("img");
            bigImg.src = this.src;
            bigImg.style.margin = "auto";
            bigImg.style.width = "40vw";
            bigImg.style.borderRadius = "5px";

            blackpanel.appendChild(bigImg);

            // навешиваем на панель событие
            blackpanel.addEventListener("click", closeLightbox);
        })
    }

    // тройной клик на элементе меняет фон на жёлтый
    var count = 0;
    container.addEventListener("click", function() {
        count++;
        if (count == 3) {
            this.style.background = "yellow";
        }

    })
}