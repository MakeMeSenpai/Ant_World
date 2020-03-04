// color changer
const colorIn = document.getElementById("color")
        
colorIn.addEventListener("change", function () {
    // storage names should be unique becuase all browser can read them 
    window.localStorage.setItem("senpai-color", this.value)
    // this set's our background color into the selected color
    document.body.style.backgroundColor = this.value;
})


// form 
const email = document.getElementById("email")
const verify = document.getElementById("verify")
const text = document.getElementById("text")

verify.addEventListener("change", function() {
    if (email.value == this.value) {
        return True
    } else {
        alert("Your emails do not match!")
    }
})

text.addEventListener("change", function() {
    text.value = "Thank you!"
})

function send() {
    alert(`Your Color is: ${document.body.style.backgroundColor}!`);
}