let BASEURL = 'https://63497f50a59874146b2192cc.mockapi.io/ayf/'

const emailElement = document.querySelector('#exampleInputEmail1')
const passwordElement = document.querySelector('#exampleInputPassword1')
const headerElement = document.getElementById('notif')

let login = async (email, password) => {
    
    let response = await fetch(BASEURL + 'users', {
        method: 'GET'
    })

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

    let data = await response.json()
    const user = await data.find(d => d.email === email)

    if(user){
        if (user.password === password) {
            sessionStorage.setItem("full_name", user.full_name)
            headerElement.innerHTML = "Login Success"
        } else {
            headerElement.innerHTML = "Wrong Password"
        }
    } else {
        headerElement.innerHTML = "User Not Found"
    }

    emailElement.value = ""
    passwordElement.value = ""
}

document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault()
    
    headerElement.innerHTML = "Proses..."
    
    const email = emailElement.value
    const password = passwordElement.value

    login(email, password)
})