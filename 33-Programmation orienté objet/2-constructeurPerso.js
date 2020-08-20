// On crée une fonction constructeur
function Utilisateur (prenom, nom, email) { 
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;

    this.sePresenter = () =>{
        console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + ".");
    }
}

// On crée un objet
var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
var theo = new Utilisateur('Théo', 'Galodé', 'Dev Web');

mark.sePresenter();
theo.sePresenter();

mark.poste = 'PDG de Facebook';
// console.log(mark);

function Logement (type, annee, placeDeParking, proprietaire){
    this.type           = type;
    this.annee          = annee;
    this.placeDeParking = placeDeParking;
    this.proprietaire   = proprietaire;
}

var logementA = new Logement("Duplex", 1980, true, mark);

console.log(logementA.proprietaire.prenom);