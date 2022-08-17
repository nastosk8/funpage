///// ***** Left Menu Panel ***** /////////
var button = document.getElementsByClassName('LeftMenuShowBtn');
button[0].addEventListener('mousemove', ButtonSizeUp);
button[0].addEventListener('mouseleave', ButtonSizeDown);
button[0].addEventListener('click', ShowHideLeftMenu);
var LeftMenuIndexVar = 1;
var LeftMenuOptions = ['Pricing', 'About Us', 'Services', 'References', 'News','Carier', 'MiniGame'];
var LeftMenuOptionsRef = ["/funpage/html/pricing.html",'/funpage/html/aboutus.html',"/funpage/html/services.html","/funpage/html/references.html","/funpage/html/news.html","/funpage/html/carier.html","/funpage/html/minigame.html"];
var LeftMenuList = document.getElementById('LeftMenutext');
console.log(LeftMenuList);
console.log(LeftMenuOptions);
function ButtonSizeUp(){
    button[0].style.fontSize = '220%';
};

function ButtonSizeDown(){
    button[0].style.fontSize = '170%';
};

function ShowHideLeftMenu(){
    if (LeftMenuIndexVar == 1){
        ShowLeftMenu();
        console.log('Pustil som Show Menu Bar')
        console.log(LeftMenuIndexVar)
        LeftMenuIndexVar = 0;
        console.log(LeftMenuIndexVar)
    }else {
        HideLeftMenu();
        console.log('Pustil som Hide Menu Bar');
        LeftMenuIndexVar = 1;
    }
};

function ShowLeftMenu(){
    console.log(LeftMenuOptions);
    for (var i = 0; i < LeftMenuOptions.length;i++){
    var LeftMenuOptionsVar = document.createElement('li');
    LeftMenuOptionsVar.textContent = LeftMenuOptions[i];
    LeftMenuList.appendChild(LeftMenuOptionsVar);
    var LeftMenuOptionsRefVar = document.createElement('a');
    LeftMenuOptionsRefVar.setAttribute('href', LeftMenuOptionsRef[i]);
    LeftMenuOptionsVar.appendChild(LeftMenuOptionsRefVar);
    console.log(LeftMenuOptionsVar.innerHTML);
    console.log(LeftMenuOptionsRefVar.innerHTML);
} 
}

function HideLeftMenu (){
    for (var i = 0; i < LeftMenuOptions.length;i++){
        var DeleteMenuList = document.getElementsByTagName('li');
        console.log(DeleteMenuList);
        LeftMenuList.removeChild(DeleteMenuList[0]);
        }
}

function LeftMenuToggle(){

}
/////// Konec Left Menu Panel ***** ///////
///////////////////////////////////////////


//////// ***** Meni Text ***** /////////
// * Pole s textom* //
var PohiblivyTextPole = [
'<p class="P1">C</p><p class="P1">O</p><p class="P1">N</p><p class="P1">S</p><p class="P1">U</p><p class="P1">L</p><p class="P1">T</p><p class="P1">I</p><p class="P1">N</p><p class="P1">G</p>', 
'<p class="P1">N</p><p class="P1">E</p><p class="P1">T</p><p class="P1">W</p><p class="P1">O</p><p class="P1">R</p><p class="P1">K</p>',
'<p class="P1">C</p><p class="P1">L</p><p class="P1">O</p><p class="P1">U</p><p class="P1">D</p>',
'<p class="P1">A</p><p class="P1">P</p><p class="P1">P</p><p class="P1">L</p><p class="P1">I</p><p class="P1">C</p><p class="P1">A</p><p class="P1">T</p><p class="P1">I</p><p class="P1">O</p><p class="P1">N</p><p class="P1">S</p>'
];

var PohiblivyText = document.getElementsByClassName("PohiblivyText");
var PohiblivyTextVar = 0;
var PismenkaVar = 0;

setInterval( function (){
    if (PohiblivyTextVar > -1){
        console.log("Pustam zmenu textu")
        ZamenaTextov()        
    }
}, 10000);

function ZamenaTextov(){
    if (PohiblivyTextVar < PohiblivyTextPole.length){
    PohiblivyText[0].innerHTML = PohiblivyTextPole[PohiblivyTextVar]
    console.log(PohiblivyText[0].innerHTML)
    PohiblivyTextVar++
    setInterval( function (){
        var Pismenka = document.getElementsByClassName("P1");
            if (PismenkaVar < Pismenka.length){
            Pismenka[PismenkaVar].style.fontSize = "420%"
            PismenkaVar++
            }
            }, 800)
    PismenkaVar = 0;
}else {
    PohiblivyTextVar = 0;
    PismenkaVar = 0;
}
};
/////// **** KONCI Zmena Text **** ///////////////

