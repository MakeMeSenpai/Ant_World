// shows our navigation buttons
const hamburger = document.querySelector(".absolutelyNot");
const first = document.querySelector(".absolutelyNot > :first-child");
const second = document.querySelector(".absolutelyNot > :nth-child(2)");
const third = document.querySelector(".absolutelyNot > :nth-child(3)");
const last = document.querySelector(".absolutelyNot > :last-child");
const menu = document.querySelector("nav");
let clicked = false;

function navMenu() {
    if (clicked === false) {
        console.log("x");
        hamburger.style.backgroundColor = "black";
        first.style.backgroundColor = "white";
        first.style.transformOrigin = "left";
        first.style.transform = "translate(10px, 0) rotate(45deg)";
        second.style.backgroundColor = "transparent";
        third.style.backgroundColor = "white";
        third.style.transformOrigin = "left";
        third.style.transform = "translate(10px, 2.5px) rotate(-45deg)";
        last.style.border = "10px solid white"
        menu.style.transform = "translateX(-101px)";
        clicked = true;
    }
    else {
        console.log("=");
        hamburger.style.backgroundColor = "transparent";
        first.style.backgroundColor = "black";
        first.style.transform = "translate(0px, 0px) rotate(0deg)";
        second.style.backgroundColor = "black";
        third.style.backgroundColor = "black";
        third.style.transform = "translate(0px, 0px) rotate(0deg)";
        last.style.border = "10px solid transparent"
        menu.style.transform = "translateX(0px)";
        clicked = false;
    };
}