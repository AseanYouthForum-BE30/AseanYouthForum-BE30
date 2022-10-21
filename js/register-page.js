let baseURL = "https://63497f50a59874146b2192cc.mockapi.io/ayf/"

let nama_element = document.querySelector('#nama_lengkap')
let email_element = document.querySelector('#email')
let password_element = document.querySelector('#password')
let notif_element = document.querySelector('#notif')

let button = document.getElementById('button')

let postDataElement = async () => {
    const name_value = nama_element.value
    const email_value = email_element.value
    const password_value = password_element.value

    await fetch(baseURL + 'users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            full_name: name_value,
            email: email_value,
            password : password_value,
        })
    })

    window.location.href = "login-page.html"
}

button.addEventListener('click', (event) => {
    event.preventDefault()

    button.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    `
    if (nama_element.value == ""){
        notif_element.innerHTML = "Full Name must not blank"
        button.innerHTML = 'Register'
    } else if (email_element.value == ""){
        notif_element.innerHTML = "Email must not blank"
        button.innerHTML = 'Register'
    } else if (password_element.value == ""){
        notif_element.innerHTML = "Password must not blank"
        button.innerHTML = 'Register'
    } else {
        postDataElement()
    }

})