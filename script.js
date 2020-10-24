const email = document.getElementById('email')
const password = document.getElementById('password')
const document = document.getElementById('form')
const errorElement = document.getElementById('error')

document.addEventListener('submit' , (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('email is required')
    }
    if (password.value.length <= 6){
        messages.push('password must be longer than 6 characters')
    }
    if (password.value.length >= 20){
        messages.push('password must be less than 20 characters')
    }
    if (password.value === 'password'){
        messages.push('password cannot be password')
    }
    if (messages.length > 0){
        e.prevenrDefault()
        errorElement.innerText = messages.join(', ')

    }
