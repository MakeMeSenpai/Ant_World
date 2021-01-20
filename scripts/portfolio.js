// progress balls
const pb0 = document.getElementById("pb0");
const pb1 = document.getElementById("pb1");
const pb2 = document.getElementById("pb2");

// progress bar
window.onscroll = function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
    console.log(scrolled) // checks what % is
    // Then changes the value if scrolled above point
    if (scrolled > 1.6) {
        // changing background of progress balls
        pb0.style.backgroundColor = "blue";
    } else {
        // to their respective colors
        pb0.style.backgroundColor = "#00aeff";
    }

    if (scrolled > 9.6) {
        pb1.style.backgroundColor = "blue";
    } else {
        pb1.style.backgroundColor = "#00aeff";
    }

    if (scrolled > 15.8) {
        pb2.style.backgroundColor = "blue";
    } else {
        pb2.style.backgroundColor = "#00aeff";
    }
}
