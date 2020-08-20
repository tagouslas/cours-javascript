let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', (e) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        location.href = 'https://www.google.com';
    }
    console.log(e);
});

function grosseFont() {
    document.body.style.fontSize = '20px';
}

button.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'orange';
});

button.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
});

button.addEventListener('mouseout', grosseFont);
button.removeEventListener('', grosseFont);