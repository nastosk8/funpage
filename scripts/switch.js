function Switch(cislo){
switch(cislo){
    case 10000:
        var vysledok1 = "skoncil som na 10000";
    case 1000:
        var vysledok2 = "skoncil som na 1000";
    case 100:
        var vysledok3 = "skoncil som na 100";
};
document.getElementById("switch1").innerHTML = vysledok1;
document.getElementById("switch2").innerHTML = vysledok2;
document.getElementById("switch3").innerHTML = vysledok3;

}