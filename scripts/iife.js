//IIFE Immediatly Invoked Function Expression
(function () {
    const colorIn = document.getElementById("color")
    const color = window.localStorage.getItem("senpai-color")
    if (color) {
        document.body.style.backgroundColor = color;
        colorIn.value = color
    }

})()