let baseURL = 'https://63497f50a59874146b2192cc.mockapi.io/ayf/'

let articleElement = document.getElementById('article-container')
const articleId = localStorage.getItem('articleId')

const backButton = document.getElementById('back-button')

let getUser = async (userId) => {
    let response = await fetch(baseURL + 'users/' + userId, {
        method: 'GET'
    })

    let user = await response.json()

    return user.full_name
}

let getArticle = async () => {
    let response = await fetch(baseURL + 'articles/' + articleId, {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }

    let article = await response.json()
    
    let userName = await getUser(article.userId)
    let createdAt = new Date(article.createdAt)

    articleElement.innerHTML = `
        <h1>${article.title}</h1>
        <h4>${userName}</h4>
        <p>${createdAt.toDateString()}</p>
        <img class="img-fluid mx-auto d-block mb-4" 
            style="width: 50vw ;" 
            src="${article.image}" 
            alt="article-image">
        <p style="text-align: justify;" >${article.content}</p>
    `
}

backButton.addEventListener('click', (event) => {
    event.preventDefault()

    localStorage.removeItem('articleId')

    window.location.href = 'home-page.html'
})

getArticle()