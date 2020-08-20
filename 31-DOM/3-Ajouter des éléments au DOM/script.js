//// 1ère méthode : Écrit juste du texte
document.write('test');

//// 2ème méthode : Ajouter un élément brut
let h1 = document.querySelector('h1');
h1.append('test');

//// 3ème méthode : Ajouter un objet/élément
// Créer un élément
let helloWorld = document.createElement('div');

// Le personaliser
helloWorld.textContent = 'Hello World !';

// L'ajouter à notre page
// document.body.append(helloWorld); // OBJETS & TEXTE (après)
// document.body.appendChild(helloWorld); // SEULEMENT OBJETS (après)

// document.insertBefore(helloWorld, document.querySelector('.container')); (avant)

document.querySelector('.container').prepend(helloWorld);

//// SUPPRIMER UN ÉLÉMENT DU DOM
// let h1 = document.querySelector('h1');
// h1.remove();

document.querySelector('h1').remove();

//// TIPS

let element = document.createElement('div').textContent('Le texte du div');
