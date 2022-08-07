function Vek(rok){
    return 2022 - rok
};

function BackroundChange(BackroundTrigger){
console.log(BackroundTrigger);

if (BackroundTrigger == "1"){
    document.body.style.backgroundImage = "url(/funpage/images/backround2.png)"
}else if(BackroundTrigger == "2"){
    document.body.style.backgroundImage = "url(/funpage/images/backround1.png)"
}else {
    console.log("Hovno")
};
};




