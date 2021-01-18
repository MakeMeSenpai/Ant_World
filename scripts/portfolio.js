// progress balls
const pb1 = document.getElementById("pb1");

// progress bar
window.onscroll = function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
    console.log(scrolled) // checks what % is
    // Then changes the value if scrolled above point
    if (scrolled > 1.7) {
        // changing background of progress balls
        pb1.style.backgroundColor = "blue";
    } else if (scrolled < 1.7) {
        // to their respective colors
        pb1.style.backgroundColor = "#00aeff";
    }
}
