window.onload = function (ev) {
    var nowyElement = document.createElement('li');

    var nowyWezelTekstowy = document.createTextNode('Element 3');

    nowyElement.appendChild(nowyWezelTekstowy);

    document.getElementById('lista').appendChild(nowyElement);
    /*----------------------------------------------------------------------------------------------------------*/

    var element1 = document.getElementById('element1');
    var elementNadrzedny = document.getElementById('lista');
    elementNadrzedny.removeChild(element1);

    document.getElementById('doUkrycia').setAttribute('hidden',true);
    document.getElementById('ukryty').removeAttribute('hidden');

    /*---------------------------------------------------------------------------------*/


};