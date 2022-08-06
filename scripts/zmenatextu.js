function NastavVelkyText(){
    VelkyText = prompt('Zadaj velky text')
    document.querySelector("h1").textContent = VelkyText;
}

function NastavMalyText(){
    MalyText = prompt("Zadaj maly text")
    document.querySelector("p").textContent = MalyText;
}

var ludia = ['Fero', 'Ivan', 'Jakub', 'Andrej', 'Filip'];
var RokNarodenia = [1995, 1980, 1998, 1984, 2000];
var DrivingLicense = [false, true, true, false, false];

function ListovatOsobu(){
    var keyName = prompt('Meno');
    var keyIndex = ludia.indexOf(keyName);
    var Osoba = {
        meno: ludia[keyIndex],
        RokNarodeniaOsoba: Vek(RokNarodenia[keyIndex])
    };
    if (DrivingLicense[keyIndex] = true){
        var Opravnenie = "Moze soferovat"
    }else {
        var Opravnenie = "Nemoze soferovat"
    };
    document.querySelector(".Ludia").textContent = Osoba.meno + " ma " + Osoba.RokNarodeniaOsoba + ' rokov.';
    document.querySelector(".Soferovanie").textContent = Opravnenie;
};

function PridajOsobu(){
    var FirstName = prompt("Zadaj meno")
    var Birth = Number(prompt("Zadaj rok"))
    var Sofer = confirm("Vie Soferovat?")
    ludia.push(FirstName)
    RokNarodenia.push(Birth)
    DrivingLicense.push(Sofer)
    document.querySelector(".Clovekovia").textContent = ludia;
};

function Vek(rok){
    return 2022 - rok
};


