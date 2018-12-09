function prostaFunkcja() {
    console.log('Wywołanie funkcji');
}

prostaFunkcja();

function prostaFunkcja2(param1, param2) {
    console.log('Wywolanie funkcji dla parametrów: '+param1+" "+param2);
}

prostaFunkcja2 ('jeden','dwa');

function sum(pierwsza,druga) {

    return pierwsza+druga;
}

console.log("Wynik sumowania "+ sum(1,3));
