window.addEventListener("DOMContentLoaded", init);

var blackpanel, imges;


function init() {
    // HTMLElement
    blackpanel = document.getElementById('blackpanel');
    // HTMLCollection
    imges = document.getElementsByClassName('myImg');
    console.log(imges);
    for (var i = 0; i < imges.length; i++) {
        imges[i].addEventListener('click', function() {
            blackpanel.style.display = "flex";
            console.log(this); // указывает на картинку
            console.log(this.src); // указывает на путь к картинке

            var bigImg = document.createElement("img");
            bigImg.src = this.src;
            bigImg.style.margin = "auto";
            bigImg.style.width = "40vw";
            bigImg.style.borderRadius = "5px";

            blackpanel.appendChild(bigImg);

            blackpanel.addEventListener("click", function() {
                this.removeChild(bigImg);
                this.style.display = "none";

            })
        })
    }
    // можно вынести за цикл
    // blackpanel.addEventListener("click", function() {
    //             this.innerHTML = "";
    //             this.style.display = "none";
    //})
}