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
            event.target.classList.remove ('error')
        }
    }

    let numberMatch = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    let emailMatch = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    fname.addEventListener('blur', (event) => styleUpdate (event, fname.value.trim()=="")) 
    lname.addEventListener('blur', (event) => styleUpdate (event, lname.value.trim()==""))
    number.addEventListener('blur', (event) => styleUpdate (event, number.value.trim().match(numberMatch)==null))
    email.addEventListener('blur', (event) => styleUpdate (event, email.value.trim().match(emailMatch)==null))
    checkbox.addEventListener('blur', (event) => styleUpdate (event, checkbox.value==false))
}

