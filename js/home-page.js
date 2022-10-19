const baseURL = 'https://63497f50a59874146b2192cc.mockapi.io/ayf/'

let articleContainer = document.getElementById('articles-container')

let getArticle = async () => {
    let response = await fetch(baseURL + 'articles', {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    
    let articles = await response.json()

    articleContainer.innerHTML = ''

    articles.forEach(article => {

        let articleContent = article.content

        let articleContentShort = articleContent.substr(0, articleContent.indexOf('.'))

        let articleElement = document.createElement('div')
        
        articleElement.className = 'row d-flex flex-wrap-reverse mb-3'

        articleElement.innerHTML = `
            <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                <img
                src="${article.image}"
                class="img-fluid"
                style="width: 25vw; height: 30vh"
                alt="article-image"/>
            </div>
            <div class="col d-flex align-items-center justify-content-center flex-column">
                <h2>${article.title}</h2>
                <p style="text-align: justify">${articleContentShort}.</p>
                <a href="detail-page.html" onclick="localStorage.setItem('articleId', ${article.id})">Detail</a>
            </div>
        `

        articleContainer.append(articleElement)
    });
}

getArticle()