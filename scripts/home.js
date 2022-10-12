// CUBE__________
const cube = document.querySelector('.cube');
let value = ["front", "right", "back", "left", "top", "bottom"];
let currentClass = '';
let direction= 'fwd';
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

function fwdClicked() {
  direction = "fwd";
  changeSide();
}

function bwdClicked(){
  direction = "bwd";
  changeSide();
}

// idle animation
let idle = 5000; // milliseconds
let id = null; // interval function id
function shimmy(power) {
  if (power === 'on'){
    // ensures last interval clears
    clearInterval(id);
    id = null;
    // ensures that there are no other intervals in queue
    if (id === null) {
      id = setInterval(changeSide, idle);
    }
  }
  // power === 'off'
  else {
    // clears interval function
    clearInterval(id); // cancels interval function by id
    id = null;
  }
}

// set initial side
changeSide();
shimmy('on');

// ANT___________
let counter = 0;
const ant = document.querySelector('#ant');
const land = document.querySelector('#landscape');
const animate = document.querySelector('#animate');
const animation = document.querySelector('#animation');

animation.setAttribute('src', "./static/anime/"+ x +"anthill_film.mp4")
land.load()
land.play()
animate.setAttribute('src', "./static/anime/"+ x +"walk.webm")
ant.load()
ant.play()

function count() {
  counter += 1
  if (counter >= 5) {
    window.location.href = "./friIo+vp81JM012F68axF5HCPdDxTKgZLkCVCAKzwKg=.html";
  }
};

function squashed() {
  ant.style.animationPlayState = 'paused';
  animate.setAttribute('src', "./static/anime/"+ x +"squash.webm")
  ant.load()
  ant.play()
  ant.loop = false;
  ant.onended = function () {
    console.log("You Squashed Me!")
    animate.setAttribute('src', "./static/anime/"+ x +"walk.webm")
    ant.load()
    ant.play()
  };
  setTimeout(() => {
    ant.loop = true;
    ant.style.animationPlayState = 'running';
  }, 1450) // default = 1000
  count()
  return
};
