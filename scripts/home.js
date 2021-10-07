// CUBE__________
const cube = document.querySelector('.cube');
let value = ["front", "right", "back", "left", "top", "bottom"];
let currentClass = '';
let direction= 'fwd'
let i = -1;

function changeSide() {
    // which direction to move the cube
    if (direction === 'fwd') {
      i += 1
    } else {
      i -= 1
    }
  // resets i if out of index
  if (i > 5) {
    i = 0
  }
  if (i < 0) {
    i = 5
  }
  // sets side
  const showClass = 'show-' + value[i];
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}
// set initial side
changeSide();

function fwdClicked() {
  direction = "fwd"
  changeSide();
}

function bwdClicked(){
  direction = "bwd"
  changeSide();
}

// ANT___________
let counter = 0;
const ant = document.querySelector('#ant');
const animation = document.querySelector('#animate');

function count() {
  counter += 1
  if (counter >= 5) {
    window.location.href = "./friIo+vp81JM012F68axF5HCPdDxTKgZLkCVCAKzwKg=.html";
  }
};

function squashed() {
  ant.style.animationPlayState = 'paused';
  // let x = ''; if (winter){x = 'winter_'} f"${x}squash.webm"
  animation.setAttribute('src', "./static/imgs/fall_squash.webm")
  ant.load()
  ant.play()
  ant.loop = false;
  ant.onended = function () {
    console.log("You Squashed Me!")
    animation.setAttribute('src', "./static/imgs/fall_walk.webm")
    ant.load()
    ant.play()
  };
  setTimeout(() => {
    ant.loop = true;
    ant.style.animationPlayState = 'running';
  }, 1320) // default = 1000
  count()
  return
};
