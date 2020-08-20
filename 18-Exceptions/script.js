// try {
//     // Erreur ?
//     alert(hello);
// } 
// catch(error) {
//     //Erreur !
//     console.error(error.stack);
//     console.error('La variable hello n\'existe pas');
// }

try { // Javascript cherche une erreur dans l'exécution du programme
    
    let recompense = prompt("Choisissez une récompense : épée, arc, haches");
    let degats;

    switch (recompense) {
        case 'épée':
        case 'epee':
        case 'épee':
        case 'épé':
            degats = 40;
            break;

        case 'arc':
            degats = 30;
            break;
        
        case 'haches':
            degats = 20;
            break;
        
        default:
            throw new Error('Vous ne pouvez pas tricher.');
    }

    alert('Vous avez choisi : ' + recompense + ' (' + degats + 'dégats).');

    let totalDegats = degats + 50;

} catch (error) { // Erreur personalisée
    alert(error);
}
finally{ // Executé obligatoirement
    alert('Fin du programme');
}