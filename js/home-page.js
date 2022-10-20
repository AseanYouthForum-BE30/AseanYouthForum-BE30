const baseURL = 'https://63497f50a59874146b2192cc.mockapi.io/ayf/'

let articleContainer = document.getElementById('articles-container')

let getArticle = async () => {
    let response = await fetch(baseURL + 'articles?sortBy=createdAt&order=desc', {
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
        
        articleElement.className = 'row d-flex flex-wrap mb-3 border border-primary border-2 border-opacity-50 rounded-1 py-3   '

        articleElement.innerHTML = `
            <div class="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-start  ">
                <img
                src="${article.image}"
                class="img-fluid"
                style="width: 100%;"
                alt="article-image"/>
            </div>
            <div class="col-lg-6 py-0 d-flex  justify-content-start flex-column">
                <h2>${article.title}</h2>
                <p style="text-align: justify">${articleContentShort}.</p>
                <a  href="detail-page.html" onclick="localStorage.setItem('articleId', ${article.id})">Detail</a>
            </div>
        `

        articleContainer.append(articleElement)
    });
}

getArticle()