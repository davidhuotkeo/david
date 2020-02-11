var textWrapper = document.querySelector('.ml12');
var loader = $('#preloader');
let delayTime = 3000;

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

loader.delay(delayTime).transition({
  display: 'none'
});

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 5000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 3000,
    delay: (el, i) => 100 + 30 * i
  });

var detailpara = $('p.detail');
var menu = $('ul.menu > li');
var iconContact = $('.contacts > .icons');

detailpara.delay(delayTime).transition({
  'opacity': 1,
  'transform': 'translateX(0px)'
}, 1500);

menu.delay(delayTime).animate({
  'margin': '30px 15px',
  'opacity': 1
}, 2000);

iconContact.delay(delayTime).transition({
  'transform': 'translateX(0px)',
  'opacity': 1
}, 2000);
