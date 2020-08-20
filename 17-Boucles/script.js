// Boucle While
// let i = 0;

// while (i <= 2) {
//     console.log('i = ' + i);
//     i++;
// }

// Boucle Do While
// do {

//     var variable = prompt('Entrer une valeur à la variable.');

// } while (variable == "" || variable == null);

// alert('Valeur de la variable = ' + variable);

// Boucle For
// for (let j = 0; j < 5; j++) {
//     console.log("j = "+j);
// }

// Break et Continue
// let k = 0;

// while (k < 5) {

//     if (k == 3) {
//         break; // Sort de la boucle 
//     }

//     if (k == 3) {
//         continue; // Continue la boucle
//     }

//     console.log('k = ' + k);
//     k++;
// }


let bande = ['Theo', 'Raphou', 'Gauthier'];

// Boucle For In (renvoie l'index de l'élément)

for (const pote in bande) {
    console.log(bande[pote]);
}

// Boucle For Of (renvoie la valeur de l'élément)

for (const pote of bande) {
    console.log(bande.indexOf(pote));
}

// Boucle For Each

// bande.forEach(function (pote) {
//     console.log(pote);
// })

// bande.forEach(pote => {
//     console.log(pote);
// });

bande.forEach(pote => console.log(pote));

