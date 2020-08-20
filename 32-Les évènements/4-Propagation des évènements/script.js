let article = document.querySelector('article');
let h1      = document.querySelector('h1');

article.addEventListener('click', (e) => {
    alert('article cliqué');
});

h1.addEventListener('click', (e) => {
    alert('titre cliqué');
    e.stopPropagation();
})