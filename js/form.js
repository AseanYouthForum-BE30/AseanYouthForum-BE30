let baseURL = 'https://63497f50a59874146b2192cc.mockapi.io/ayf/'

const imgbbKey = 'f510415e60d0b3b7c6bfb209f3e2cde7'
const userId = localStorage.getItem('id')

const titleElement = document.querySelector('#title')
const contentElement = document.querySelector('#content')
const imageElement = document.querySelector('#image')
const adddButtonElement = document.getElementById('add-button')

let now = new Date().toISOString()
let formData = new FormData()

// let now = new Date().toISOString().slice(0, 10) Output : yyyy-mm-dd

let postDataNews = async () => {
    formData.append("key", imgbbKey)
    formData.append("image", imageElement.files[0])

    let responseImgbb = await fetch("https://api.imgbb.com/1/upload", {
        method: 'POST',
        body: formData
    })

    let imgbb = await responseImgbb.json()

    const imageValue = imgbb['data'].display_url

    await fetch(baseURL + 'articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titleElement.value,
            content: contentElement.value,
            image: imageValue,
            createdAt: now,
            userId: userId,
        })
    })

    window.location.href = 'dashboard-page.html'
}

adddButtonElement.addEventListener('click', (event) => {
    event.preventDefault()

    adddButtonElement.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    `

    postDataNews()
})
