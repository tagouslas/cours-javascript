document.body.style.margin = '0px';

// Supprimer l'élément 'a-supprimer'
document.querySelector('#a-supprimer').remove();

// Créer les éléments
let header      = document.createElement('header');
let menu        = document.createElement('div');
let paragraphe  = document.createElement('p');

// Personaliser les éléments

header.textContent           = 'Bienvenue';
header.style.backgroundColor = '#e3b04b';
header.style.width           = '100%';
header.style.height          = 'auto';
header.style.color           = 'white';
header.style.textAlign       = 'center';
header.style.fontSize        = '5em';
header.style.fontFamily      = 'Arial';
header.style.paddingTop      = '60px';
header.style.paddingBottom   = '60px';

menu.innerHTML             = "<a href='#' style='text-decoration:none;color: dodgerblue'>Accueil</a> / <a href='#' style='text-decoration:none;color: dodgerblue'>Une autre page</a>";
menu.style.backgroundColor = '#f1d6ab';
menu.style.width           = '100%';
menu.style.paddingTop      = '20px';
menu.style.paddingBottom   = '20px';
menu.style.paddingLeft     = '20px';
menu.style.fontSize        = '1.1em';
menu.style.fontFamily      = 'Arial';

paragraphe.textContent       = 'Ceci est un paragraphe créé avec Javascript !';
paragraphe.style.fontFamily  = 'Arial';
paragraphe.style.paddingTop  = '20px';
paragraphe.style.paddingLeft = '20px';
paragraphe.style.fontSize    = '1em';

// Ajouter les éléments

document.body.append(header, menu, paragraphe);