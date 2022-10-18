const logoutElement = document.getElementById('logout')

logoutElement.addEventListener('click', (event) => {
    event.preventDefault()

    localStorage.clear()

    window.location.replace('home-page.html')
})