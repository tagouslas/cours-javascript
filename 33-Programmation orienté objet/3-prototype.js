// On crée une fonction constructeur
function Utilisateur (prenom, nom, email) { 
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
}

Utilisateur.prototype.sePresenter = function(){
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + ".");
}

// On crée un objet
var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
var theo = new Utilisateur('Théo', 'Galodé', 'Dev Web');

console.log(mark); // On voit que javascript ajoute une propriété __proto__ et constructor
theo.sePresenter();

// Créé un objet avec Object()
var monObjet    = new Object();
monObjet.titre  = 'titre';

console.log(monObjet); 