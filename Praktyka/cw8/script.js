var osoba = {
    imie: 'Jan',
    nazwisko: 'Kowalski',

    przedstaw: function () {
        console.log("Jestem "+this.imie+" "+this.nazwisko);
    }
};
osoba.imie = 'Adam';

osoba.przedstaw();


function Osoba() {
    this.imie = 'Andrzej';
    this.nazwisko = 'Nowak';

    this.przedstaw = function () {
        console.log("Jestem "+this.imie+" "+this.nazwisko);
    }
}

var osoba2 = new Osoba();
osoba2.przedstaw();

function Osoba2(imie,nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;

    this.przedstaw = function () {
        console.log("Jestem "+this.imie+" "+this.nazwisko);
    }
}

var osoba3= new Osoba2("Marek","Kowalski");
osoba3.przedstaw();

