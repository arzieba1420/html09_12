window.onload = function (ev) {
var naglowek = document.getElementById("naglowek");

console.log(naglowek);

var naglowek2 = document.querySelector('h1');
console.log(naglowek2);

var paragrafy = document.getElementsByClassName('paragraf');
console.log(paragrafy);

var paragrafy1 = document.getElementsByTagName('h1');
console.log(paragrafy1);

var paragrafy2 = document.querySelectorAll('.paragraf');
console.log(paragrafy2);

var drugiParagraf = document.getElementsByClassName('paragraf')[0].nextSibling;
console.log(drugiParagraf);

document.getElementById('naglowek').textContent = 'Zamieniona wartość';

document.getElementById('naglowek2').innerHTML = '<i>Nagłówek kursywą</i>';

};