// Exemple 1 : Fusionner des tableaux
let fruits = ['fresas','guayaba','pitaya'];
let aliments = ['arepa','caldo','arroz',...fruits];

// let total = aliments.concat(fruits);

// console.log(total);

// Exemple 2 : Découper une chaine de caractère en plusieurs éléments
let phrase = "Bonjour !";
let phraseTab = [...phrase];

console.log(phraseTab);

// Exemple 3 : Sélectionner un élément et stocker les autres dans une variable
let devises = ['Dollar', 'Euro', 'Pesos'];

//// SANS DÉCOMPOSITION
// let premiereDevise = devises[0];
// let autresDevise = [devises[1] + devises[2]];

//// AVEC DÉCOMPOSITION
let [premiereDevise, ...autresDevise] = devises;

console.log(premiereDevise);
console.log(autresDevise);