let informations = ['Théo','Galodé','21','Homme','Colombien'];


// Méthode sans décomposition
// let prenom      = informations[0];
// let nom         = informations[1];
// let age         = informations[3];
// let sexe        = informations[4];
// let nationalite = informations[5];

// Méthode avec décomposition
let [prenom, nom, age, sexe, nationalite] = informations;

console.log(prenom);

