console.log("Pustam Consolu");

var Pole = ["Jakub", "Nasta", "Viktor", "Marek", "Andrej"];

var RokNarodenia = [1998, 1994, 1995, 1993, 1998];
var Priezisko = ["Halabrin", "Bercha", "Valky", "Liptak", "Cabadaj"];

var Kto = prompt("Zadaj meno");
var poradie = Pole.indexOf(Kto);
console.log(poradie);
var meno = Pole[poradie]
var PocetRokov = 2022 - RokNarodenia[poradie]
console.log(Pole.length);
console.log(Pole[Pole.length - 1]);
console.log(Pole[poradie] + " ma " + PocetRokov + " rokov. A ma priezvisko " + Priezisko[poradie]);

Vypis(poradie)


function Vypis(poradie){
    if (poradie >= 0){
        console.log(Pole[poradie]);
        console.log(RokNarodenia[poradie]);
        console.log(Priezisko[poradie]);
    }else {
        console.log("Neexistuje")
    }
}

