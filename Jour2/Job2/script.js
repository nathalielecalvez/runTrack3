// script.js

function showhide() {
    const contentDiv = document.getElementById('content');
    const article = document.querySelector('#content article');

    if (article) {
        // L'article existe, on le retire
        contentDiv.removeChild(article);
    } else {
        // L'article n'existe pas, on le crée
        const newArticle = document.createElement('article');
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        contentDiv.appendChild(newArticle);
    }
}

document.getElementById('button').addEventListener('click', showhide);

