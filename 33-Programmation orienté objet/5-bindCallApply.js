// Call et Apply permettent d'invoquer immédiatement une fonction



let gandalf = { titre: 'Magicien' }

function direBonjour(arme, degats) {
    console.log("Bonjour " + this.titre + " vous possédez " + arme + " qui donne " + degats + " points de dégats.");
}

// Call 
direBonjour.call(gandalf, "Bâton Magique", 50); // Ajoute les paramètres un par un

// Apply
direBonjour.apply(gandalf, ["Bâton Magique", 50]); // Ajoute les paramètres avec un tableau

// Bind
// Objectif: changer le context de "this"
this.valeur = "Window";

let monObjet = {
    valeur: "Objet",
    getValeur: function() { 
        console.log(this.valeur);
    }
}

monObjet.getValeur();

let maValeur = monObjet.getValeur;

maValeur();

let maValeurAvecBind = monObjet.getValeur.bind(monObjet);

maValeurAvecBind();
