let tableauAssociatif = {
    'prenom'    :   'Theo',
    'nom'       :   'Galode',
    'poste'     :   'Developpeur Web'
};

concatenation_Ta(tableauAssociatif);

function concatenation_Ta(tableauAssociatif) {

    let chaine = '';

    for (const valeur in tableauAssociatif) {

        chaine += (valeur + ' : ' + tableauAssociatif[valeur] + '\n');

    }

    console.log(chaine);
    
}