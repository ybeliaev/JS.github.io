// HTMLElement
var demo = document.getElementById('demo');

//HTMLCOlection
var element = document.getElementsByClassName('text');

for (var i = 0; i < element.length; i++) {
    //console.log(element[i]);
    console.log(element[i].textContent);
    //console.log(element[i].innerHTML);
}