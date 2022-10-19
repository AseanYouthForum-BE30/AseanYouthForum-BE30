const baseURL = 'https://63497f50a59874146b2192cc.mockapi.io/ayf/'

const articleContainer = document.getElementById('article-container')
const logoutElement = document.getElementById('logout')
const userId = localStorage.getItem('id')

let getArticleByIdUser = async () => {
    let response = await fetch(baseURL + 'articles', {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }

    let articles = await response.json()

    articleContainer.innerHTML = ''

    articles.forEach(userArticle => {
        if (userArticle.userId == userId){
            const articleElement = document.createElement('div')

            articleElement.className = 'row d-flex flex-wrap mb-3'

            articleElement.innerHTML = `
                <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                    <img
                    src="${userArticle.image}"
                    class="img-fluid"
                    style="width: 25vw;"
                    alt="" />
                </div>
                <div class="col d-flex align-items-center justify-content-center flex-column">
                    <h2>${userArticle.title}</h2>
                    <p style="text-align: justify">${userArticle.content}</p>
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