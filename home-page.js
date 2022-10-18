const BaseURL = 'https://63497f50a59874146b2192cc.mockapi.io/ayf/'

let articleContainer = document.getElementById('article-container')

let getArticle = async () => {
    let response = await fetch(BaseURL + 'articles', {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    
    let articles = await response.json()

    articleContainer.innerHTML = ''

    articles.forEach(article => {

        let articleElement = document.createElement('div')
        
        articleElement.className = 'row mb-3'

        articleElement.innerHTML = `
            <div class="col d-flex justify-content-center" id="article-image">
                <img
                src="${article.image}"
                class="img-fluid"
                style="width: 25vw; height: 30vh"
                alt="" />
            </div>
            <div class="col d-flex align-items-center justify-content-center flex-column">
                <h2 id="article-title">${article.title}</h2>
                <p id="article-content" style="text-align: justify">${article.content}</p>
            </div>
        `

        articleContainer.append(articleElement)
    });
}

getArticle()