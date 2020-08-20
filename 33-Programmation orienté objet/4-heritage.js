// Animal (nombreDePattes, poid)
function Animal (nombreDePattes, poids){
    this.nombreDePattes = nombreDePattes;
    this.poids          = poids;
}

Animal.prototype.presentation = function(){
    console.log('Cet animal a ' + this.nombreDePattes + ' pattes et pèse ' + this.poids + '.');
}

// Oiseau (nombreDePattes, poids / longueurAiles)
function Oiseau (nombreDePattes, poids, longueurAiles){
    Animal.call(this, nombreDePattes, poids);
    // call() permet d'appeler une fonction constructeur: 
    // - En premier paramètre (this) on donne l'objet actuel
    // - Ensuite un donne les arguments du constructeur

    this.longueurAiles = longueurAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;

var perroquet = new Oiseau(2, '2kg', 'grandes');
console.log(perroquet);
perroquet.presentation();

// Mammifère (nombreDePattes, poids / typeDePoils)
function Mammifere (nombreDePattes, poids, typeDePoils){
    Animal.call(this, nombreDePattes, poids);
    this.typeDePoils = typeDePoils;
}