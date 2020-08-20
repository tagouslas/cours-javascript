// Tableau à une dimension
// let tableau = new Array('un', 'deux', 'trois');
// let tableau = Array('un', 'deux', 'trois');
let tableau = ['un', 'deux', 'trois'];

tableau[0];    // Pour accéder à un élément
tableau.length; // Donne le nombre d'élément dans un tableau
tableau[tableau.length - 1]; // Donne le dernier élément d'un tableau

tableau.push('quatre');  // Ajout d'un élément dans le tableau
tableau.unshift('zero'); // Ajout d'un élément au début d'un tableau  

tableau.pop();   // Supression d'un élément dans le tableau
tableau.shift(); // Supression du premier élément du tableau

tableau.indexOf('un'); // Retrouver l'index d'un élément

tableau.join(', '); // Afficher les éléments avec un séparateur

tableau.splice(0, 0, 'random', 'pie'); // Fonction pour ajouter, remplacer, supprimer des éléments

// Tableau à deux dimensions
//// Ancienne version
    // let tableau2D = new Array(
    //     Array('Mark', 'Jeff', 'Bill'),
    //     Array('Zuckerberg', 'Bezos', 'Gates')
    // );

//// Nouvelle version
    let tableau2D = [
        ['Mark', 'Jeff', 'Bill'],
        ['Zuckerberg', 'Bezos', 'Gates']
    ];

    tableau2D[0][0]; // Pour accéder à un élément 
    tableau2D[1][0]; //

    tableau2D[0].push('Théo');   // Ajout d'un élément dans le tableau 2D 
    tableau2D[1].push('Galodé');
    tableau2D[0].unshift('Test');

    tableau2D[0].pop();   // Supression d'un élément dans le tableau
    tableau2D[1].shift(); // Supression du premier élément du tableau

    tableau2D.join(' / '); // Afficher les éléments avec un séparateur

    tableau2D[0].splice(0, 1); // Fonction pour ajouter, remplacer, supprimer des éléments
// Tableau Associatif
let tableauAssiociatif = {
    'prenom' : 'Théo',
    'nom'    : 'Galodé',
    'poste'  : 'Développeur Web'
};

tableauAssiociatif['poste']; // Pour accéder à un élément

tableauAssiociatif['Test'] = 'Valeur'; // Ajout d'un élément dans le tableau Associatif

delete(tableauAssiociatif.poste); // Suppression d'un élément


/////CHALLENGE

let monTableau2D = [
    ['Theo', 'Raphou', 'Gauthier'],
    ['Galodé', 'Sicot', 'Queau']
]

// ['Volley', 'Basket', 'Foot']

monTableau2D.splice(2, 0, ['Volley', 'Basket', 'Foot']);

console.log(monTableau2D.join('\n'));