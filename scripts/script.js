function Ratajvek() {
    CurrentYear = Number(2022)
    tvojvek = Number(prompt("Kolko mas rokov?"))
    var Birth = CurrentYear - tvojvek;
    console.log("Narodil si sa v " + Birth);
    document.getElementById("Birth").innerHTML = Birth;
    planoletost = tvojvek >= 18 ? (planoletost = "Si plnolety") : (planoletost = "Nie si plnolety")
    document.getElementById("Plnoletost").innerHTML = planoletost;
    console.log(planoletost)
}

