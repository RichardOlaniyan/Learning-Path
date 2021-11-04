window.addEventListener ('DOMContentLoaded', registerValidators) 
function registerValidators () {
    let fname = document.getElementById('fname')
    let lname = document.getElementById('lname')
    let number = document.getElementById('number')
    let email = document.getElementById('email')
    let checkbox = document.getElementById("checkbox")
    
    function styleUpdate (event, isNotValid) {
        if (isNotValid) {
            event.target.classList.add('error')
            event.target.classList.remove ('valid')
        } else {
            event.target.classList.add('valid')
        }
    }
    fname.addEventListener('blur', (event) => styleUpdate (event, fname.value.trim()=="")) 
    lname.addEventListener('blur', (event) => styleUpdate (event, lname.value.trim()==""))
    number.addEventListener('blur', (event) => styleUpdate (event, number.value.trim()==""))
}