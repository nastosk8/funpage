console.log("Pustam Consolu");
// definicia pola, dat a hlavnych premenych
var Pole = ["Jakub", "Nasta", "Viktor", "Marek", "Andrej"];
var Kto = prompt("Zadaj meno");
var poradie = Number(Pole.indexOf(Kto));
var kolky = Number(prompt("kolky"));
var RokNarodenia = [1998, 1994, 1995, 1993, 1998];
var Priezisko = ["Halabrin", "Bercha", "Valky", "Liptak", "Cabadaj"];

// vyrataj vekovy rozdiel a zvol druheho
if (poradie < 4 && kolky < 3){
    var poradie2 = poradie + kolky
}else if (poradie >= 3 && kolky <= 4){
    var poradie2 = poradie - kolky
}else {
    console.log("Error pri ratani!")
};

console.log(poradie2)

function Person(poradii){
return Osoba = {
    Meno: Pole[poradii],
    Priezisko: Priezisko[poradii],
    Rok: RokNarodenia[poradii],
    PocetRokov: Vek(RokNarodenia[poradii])
}
}
Person(poradie)

console.log(Osoba);
console.log(Osoba.Meno + " ma " + Osoba.PocetRokov + " rokov a ma priezvisko " + Osoba.Priezisko + ".");

var Osoba2 = new Object();
Osoba2.Meno = Pole[poradie2];
Osoba2.Priezisko = Priezisko[poradie2];
Osoba2.PocetRokov = Vek(RokNarodenia[poradie2]);
console.log(Osoba2);
console.log(Osoba2.Meno + " ma " + Osoba2.PocetRokov + " rokov a ma priezvisko " + Osoba2.Priezisko + ".");

// Vekovy rozdiel

if (Osoba.PocetRokov > Osoba2.PocetRokov){
    var Rozdiel = VyratajRozdiel1()
} else {
    var Rozdiel = VyratajRozdiel2()
};

console.log("Rozdiel v rokoch je " + Rozdiel)

function VyratajRozdiel1(){
    return Osoba.PocetRokov - Osoba2.PocetRokov
};

function VyratajRozdiel2(){
    return Osoba2.PocetRokov - Osoba.PocetRokov
};

//Samotna funkcia na ratanie veku

function Vek(rok){
    return 2022 - rok
};

// Vypis kazdeho v poli pomocov for cyklu

for (var i = 0; i <= (Pole.length - 1); i = i + 1){
    namePole = Pole[i]
    console.log("Meno je " + Pole[i] + " a ma " + Vek(RokNarodenia[i]) + " rokov a je " + (i + 1)  + ". v poradi.")
};

while (poradie < Pole.length - 1){
        console.log(Person(poradie))
        poradie ++
}