function Ratajvek() {
    CurrentYear = Number(2022)
    tvojvek = Number(prompt("Kolko mas rokov?"))
    var Birth = CurrentYear - tvojvek;
    console.log("Narodil si sa v " + Birth);
    document.getElementById("Birth").innerHTML = Birth;
    planoletost = tvojvek >= 18 ? (planoletost = "Si plnolety") : (planoletost = "Nie si plnolety")
    document.getElementById("Plnoletost").innerHTML = planoletost;
    console.log(planoletost)
};
var y = Number(-1);
var x = Number(0);
var TriggerWhile = Number(1);
var text = document.getElementsByClassName("P1");
var textStyleBig = "340%";
var textStyleSmall = "270%";
console.log(text.length);
console.log(text);

function NastavText(){
    console.log(text.length)
    for (var i = 1; i < text.length + 1; i++){
        console.log(i)
        if (Trigger == 1 && y == -1){
            console.log(y)
            text[i - 1].style.fontSize = "480%";
            console.log("Nastavujem" + x + ". pismeno.");
            break;
        }else if (Trigger == 1){
            text[i - 1].style.fontSize = "480%";
            console.log("Nastavujem" + x + ". pismeno.");
            break;
        }else {
            Ukoncit()
            console.log("Ukoncujem")
        }
    }
}

function Ukoncit(){
    for (var i = 0; i < text.length; i++){
        text[i].style.fontSize = "320%";
    }
}





