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
    } else {
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

// Submitted Message
function submitted(){
    console.log("sent")
    alert("Your message has been sent! Please expected an email within 1-2 business days. This reply might appear in spam.")
}

// Seasonal Decorations
const decorations = document.querySelector("#seasonal");
const dec01 = document.createElement("img");
const dec02 = document.createElement("img");
const z = "Seasonal Decoration"

if (x === "spring_") {
    dec01.src = "./static/imgs/bunny.webp";
    dec02.src = "./static/imgs/butterfly.webp";
    dec01.id = "dec01"
    dec02.id = "dec02"
    dec01.alt = z;
    dec02.alt = z;
    decorations.appendChild(dec01)
    decorations.appendChild(dec02)
} else if (x === "fall_") {
    dec01.src = "./static/imgs/turkey.webp";
    dec02.src = "./static/imgs/spider.webp";
    dec01.id = "dec01"
    dec02.id = "dec02"
    dec01.alt = z;
    dec02.alt = z;
    decorations.appendChild(dec01)
    decorations.appendChild(dec02)
} else if (x === "winter_") {
    dec01.src = "./static/imgs/snowman.webp";
    dec02.src = "./static/imgs/mistletoe.webp";
    dec01.id = "dec01"
    dec02.id = "dec02"
    dec01.alt = z;
    dec02.alt = z;
    decorations.appendChild(dec01)
    decorations.appendChild(dec02)
}
