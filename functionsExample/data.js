class customer {
    constructor (firstname, lastname, phonenumber, email) {
        this.firstname=firstname;
        this.lastname=lastname;
        this.phonenumber=phonenumber; 
        this.email=email;
    } 
    fullName() {
        return this.firstname + " " + this.lastname
    }  
}

window.addEventListener ('DOMContentLoaded', registerValidators) 
function registerValidators () {
    let fname = document.getElementById('fname')
    let lname = document.getElementById('lname')
    let number = document.getElementById('number')
    let email = document.getElementById('email')
    let checkbox = document.getElementById('terms')
    let signUpButton = document.getElementById('signUpButton')

    function styleUpdate (target, isNotValid) {
        if (isNotValid) {
            target.classList.add('error')
            target.classList.remove ('valid')
        } else {
            target.classList.add('valid')
            target.classList.remove ('error')
        }
    }
    let numberMatch = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    let emailMatch = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    fname.addEventListener('blur', (event) => styleUpdate (event.target, fname.value.trim()=="")) 
    lname.addEventListener('blur', (event) => styleUpdate (event.target, lname.value.trim()==""))
    number.addEventListener('blur', (event) => styleUpdate (event.target, number.value.trim().match(numberMatch)==null))
    email.addEventListener('blur', (event) => styleUpdate (event.target, email.value.trim().match(emailMatch)==null))
    checkbox.addEventListener('blur', (event) => styleUpdate (event.target, checkbox.value==false))
    
    signUpButton.onclick = () => {
        if (fname.classList.contains('valid') && lname.classList.contains('valid') && number.classList.contains('valid') && email.classList.contains('valid') && checkbox.checked) {
            let newCustomer = new customer(fname.value.trim(), lname.value.trim(), number.value.trim(), email.value.trim())
        alert('Customer: ' + newCustomer.fullName() + ' has been created')
        } else {
            alert ('Form is not complete')
            styleUpdate (fname, fname.value.trim()=="")
            styleUpdate (lname, lname.value.trim()=="")
            styleUpdate (number, number.value.trim().match(numberMatch)==null)
            styleUpdate (email, email.value.trim().match(emailMatch)==null)
            styleUpdate (checkbox, checkbox.value==false)
        }  
    }
}



