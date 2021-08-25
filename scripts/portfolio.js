const footText = document.getElementsByClassName(".foot-text");

function adjustLinks() {
    // for now we are just hiding them
    for (var i=0; i < footText.length; i++) {
        if (footText[i].style.display === "none") {
            footText[i].style.display = "block";
          } else {
            footText[i].style.display = "none";
          }
      }
}