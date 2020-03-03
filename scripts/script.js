const form = document.querySelector('form')
const background = document.querySelector('body')
const email = document.getElementById('email')
const verify = document.getElementById('verify')
const text = document.getElementById('text')
const color = document.getElementById('color')



form.addEventListener('submit', function(e) {
    e.preventDefault()
});

email.addEventListener('submit', function(e) {
    e.preventDefault()
})

verify.addEventListener('submit', function(e) {
    e.preventDefault()
});

color.addEventListener('submit', function(e) {
    e.preventDefault()
})
