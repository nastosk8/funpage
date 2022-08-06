function Calculator() {
    var firstnumber = Number(prompt("Zadaj prve cislo:"))
    var sign = String(prompt("Zadaj znak"))
    var secoundnumber = Number(prompt("Zadaj druhe cislo:"))    
    console.log(typeof(firstnumber))
    console.log(typeof(secoundnumber))
    console.log(typeof(sigh))
    if (sign == "+"){
        vysledok = firstnumber + secoundnumber
    } else if (sign == "-"){
        vysledok = firstnumber - secoundnumber
    } else if (sign == "*"){
        vysledok = firstnumber * secoundnumber
    } else if (sign == "/" && firstnumber == 0 || secoundnumber == 0){
        error = "Error: delit 0 alebo 0 nejde"
        console.log("Error: delit 0 alebo 0 nejde")
        vysledok = error
    } else if (sign == "/"){
        vysledok = firstnumber / secoundnumber
    } else {
        error = "Error: neviem previes operaci"
        console.log("Error: neviem previes operaci")
        vysledok = error
    }
    document.getElementById("cislo").innerHTML = vysledok;
}
