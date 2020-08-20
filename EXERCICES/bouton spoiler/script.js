let btn = document.querySelector('button');
let txt = document.querySelector('p');

btn.addEventListener('click', () => {
    if (txt.hidden == false) {
        btn.textContent = 'Afficher';
        txt.hidden = true;
    } else {
        btn.textContent = 'Cacher';
        txt.hidden = false;
    }
});
