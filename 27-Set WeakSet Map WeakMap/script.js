let nombres = [10, 34, 56, 56, 65, 10];

//// OBJET SET
// let set = new Set(nombres);
let set = new Set();

set.add('chaine'); // Pour ajouter un élément
set.add(10);
set.add(true);
set.add([10, 34, 56, 56, 65, 10]);

set.delete(10); // Pour supprimer un élément

set.size; // Pour savoir le nombre d'élément

//// OBJET MAP

let map = new Map([
    ['prenom','Théo'],
    ['nom', 'Galodé']
]);

map.set('poste','Développeur Web');

let utilisateurs = new Map();

utilisateurs.set('Théo',{
    email: 'theo35420@gmail.com',
    numero: '0645026964'
});



console.log(map);

//// OBJET WEAK SET

let voitures = new WeakSet();

let voitureA = {
    constructeur: 'Tesla',
    model: 'Cybertruck'
}

let voitureB = {
    constructeur: 'Renault',
    model: 'Clio'
}

voitures.add(voitureA);
voitures.add(voitureB);

voitures.delete(voitureA);

console.log(voitures);

//// Objet WeakMap

let voitures = new WeakMap();

let index = {
    id:1
}

let voitureA = {
    constructeur: 'Tesla',
    model: 'Cybertruck'
}

voitures.set(index, voitureA);

voitures.delete(index);

console.log(voitures);