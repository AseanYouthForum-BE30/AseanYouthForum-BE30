const BaseURL = 'https://63497f50a59874146b2192cc.mockapi.io/ayf/'

const articleContainer = document.getElementById('article-container')
const logoutElement = document.getElementById('logout')
const userId = localStorage.getItem('id')

let getArticleByIdUser = async () => {
    let response = await fetch(BaseURL + 'articles', {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }

    let articles = await response.json()

    console.log(userId)

    articleContainer.innerHTML = ''

    articles.forEach(userArticle => {
        if (userArticle.userId == userId){
            const articleElement = document.createElement('div')

            articleElement.className = 'row mb-3'

            articleElement.innerHTML = `
                <div class="col d-flex justify-content-center" id="article-image">
                    <img
                    src="${userArticle.image}"
                    class="img-fluid"
                    style="width: 25vw; height: 30vh"
                    alt="" />
                </div>
                <div class="col d-flex align-items-center justify-content-center flex-column">
                    <h2 id="article-title">${userArticle.title}</h2>
                    <p id="article-content" style="text-align: justify">${userArticle.content}</p>
                </div>
            `

            articleContainer.append(articleElement)
        }
    })
}

logoutElement.addEventListener('click', (event) => {
    event.preventDefault()

    localStorage.clear()

    window.location.replace('home-page.html')
})

getArticleByIdUser()