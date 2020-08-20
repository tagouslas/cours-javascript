// let mark = {
//     prenom: 'Mark', // Propriété
//     nom: 'Zuckerberg',
//     email: 'mark@facebook.com',

//     // À l'ancienne
//     sePresenter: function(){
//         console.log("Bonjour je m'appelle " + this.prenom);
//     }
// }

// mark.sePresenter();

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

