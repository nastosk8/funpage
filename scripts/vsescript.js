function Vek(rok){
    return 2022 - rok
};

var Pictures = ["url(/funpage/images/backround1.png)", "url(/funpage/images/backround2.png)","url(/funpage/images/backround3.png)","url(/funpage/images/backround4.png"];
var totalCount = Pictures.length;
var currentIndex = 0;

setInterval(function() {
      if (currentIndex < totalCount){
      document.body.style.backgroundImage = Pictures[currentIndex]
      currentIndex++}
  }, 5000);

  
setInterval( function (){
    if (currentIndex = totalCount){
        currentIndex = 0
    }
}, 21000);

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
