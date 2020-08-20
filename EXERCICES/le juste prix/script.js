// Etape 1 - Sélectionner nos éléments
let formulaire   = document.querySelector('#formulaire');
let input        = document.querySelector('#prix');
let instructions = document.querySelector('#instructions');
let error        = document.querySelector('small');
let button       = document.querySelector('button');

let tentatives    = 0;
let number_random = 0;
let nombreChoisi;


// Etape 2 - Cacher l'erreur
error.hidden = true;

// Etape 3 - Générer un nombre aléatoire
number_random = genererNombreEntier(1001);
function genererNombreEntier(max) { return Math.floor(Math.random() * Math.floor(max)); }

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
    let info = document.createElement('div');
    info.className += 'instruction';

    if (nombre == number_random) {
        info.className  += ' fini';
        info.textContent = "Bravo " + nombre + " est le bon numéro !" + " Tentatives: " + tentatives;
        input.disabled   = true;
        button.disabled  = true;
    } else if(nombre > number_random) {
        info.className  += ' plus';
        info.textContent = "C'est moins que " + nombre;
    } else if(nombre < number_random){
        info.className  += ' moins';
        info.textContent = "C'est plus que " + nombre;
    }
    instructions.prepend(info);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => { isNaN(input.value) ? error.hidden = false : error.hidden = true; });

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == "") {
        input.style.borderColor = 'red';
    }else{
        input.style.borderColor = '#ced4da';
        tentatives++;
        nombreChoisi = input.value;
        input.value  = '';
        verifier(nombreChoisi);
    }
});

