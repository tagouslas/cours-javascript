// class Humain {
//     constructor(nom, taille, poids, force) {
//         this.nom    = nom;
//         this.taille = taille;
//         this.poids  = poids;
//         this.force  = force; 
//     }

//     marcher(){
//         console.log(this.nom + ' est en train de marcher');
//     }
// }

// var theo = new Humain("Théo", 1.79, 65, 50);

// theo.marcher();

class Animal {
    constructor(nombreDePattes, poids) {
        this.nombreDePattes = nombreDePattes;
        this.poids          = poids;
    }

    presentation(){
        console.log("Cet animal a " + this.nombreDePattes + " pattes et pèse " + this.poids + "kg");
    }
}

class Oiseau extends Animal{
    constructor(nombreDePattes, poids, longueurDesAiles) {
        super(nombreDePattes, poids);
        this.longueurDesAiles = longueurDesAiles;
    }

    voler(){
        console.log("L'oiseau vole");
    }
    
}

var poulet = new Oiseau(2, 15, 'grandes');

poulet.voler();