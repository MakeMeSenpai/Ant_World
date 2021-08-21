// CUBE__________
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener('change', changeSide);

// ANT___________
var ant = document.querySelector('#ant');
var animation = document.querySelector('#animate')

function squashed() {
  ant.style.animationPlayState = 'paused';
  animation.setAttribute('src', "./static/imgs/squash.webm")
  ant.load()
  ant.play()
  ant.loop = false;
  ant.onended = function () {
    console.log("You Squashed Me!")
    animation.setAttribute('src', "./static/imgs/walk.webm")
    ant.load()
    ant.play()
  };
  setTimeout(() => {
    ant.loop = true;
    ant.style.animationPlayState = 'running';
  }, 1000)
  return
}