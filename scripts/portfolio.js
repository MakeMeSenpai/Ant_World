// Submitted Message
function submitted(){
    console.log("sent")
    alert("Your message has been sent! Please expected a reply within 1-2 business days.")
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
