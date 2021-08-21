// CUBE__________
const cube = document.querySelector('.cube');
const radioGroup = document.querySelector('.radio-group');
let currentClass = '';

function changeSide() {
  const checkedRadio = radioGroup.querySelector(':checked');
  const showClass = 'show-' + checkedRadio.value;
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
let counter = 0;
const ant = document.querySelector('#ant');
const animation = document.querySelector('#animate');

function count() {
  counter += 1
  if (counter >= 3) {
    window.location.href = "./friIo+vp81JM012F68axF5HCPdDxTKgZLkCVCAKzwKg=.html";
  }
};

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
  count()
  return
};