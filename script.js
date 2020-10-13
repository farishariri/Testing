const name = document.getElementById('email')
const name = document.getElementById('password')
const form = document.getElementById('form')
const errorelement = document.getElementById('error')

form.addEventListener('submit' , (e) )
let messages = []
e.preventdefult()
if(email.value == '' || email.value == null) {
    messages.push('email is required')
}
if (password.value.length <= 6 ) {
    messages.push('password must be longer than 6 characters')
}
if(password.value.length > 20){
    messages.push('password must be less than 20 characters')
}
if(messages.length > 0) {
    e.preventdefult()
    errorelement.innerText = messages.join(' , ')
}
