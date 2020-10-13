const name = document.getElementById('email')
const name = document.getElementById('password')
const form = document.getElementById('form')
const errorelement = document.getElementById('error')

form.addEventListener('submit' , (e) )
let messages = []
e.preventdefult()
if(name.value == '' || name.value == null) {
    messages.push('Name is required')
}
if(messages.length > 0) {
    e.preventdefult()
    errorelement.innerText = messages.join(' , ')
}