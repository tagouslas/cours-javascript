function addition(n1, n2){
    return n1 + n2;
}

function soustraction(n1, n2){
    return n1 - n2;
}

function division(n1, n2){
    if (n2 == 0) {
        throw new Error("Un nombre ne peut pas être divisé par 0.");
    } else {
        return n1 / n2;
    }
    
}

function multiplication(n1, n2){
    return n1 * n2;
}


do {
    do {
        var choix = Number(prompt("Quelle opération souhaitez-vous effectuer ?\n\n 1-Addition\n 2-Soustraction\n 3-Division\n 4-Multiplication\n"));
    
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);
    
    do {
        var n1 = Number(prompt("Quel est le premier nombre de l'opération ?"));
        var n2 = Number(prompt("Quel est le deuxième nombre de l'opération ?"));
    } while (isNaN(n1) || isNaN(n2));
    
    
    try {
        switch (choix) {
            case 1:
                var resultat = addition(n1, n2);
                break;
                
            case 2:
                var resultat = soustraction(n1, n2);
                break;
        
            case 3:
                var resultat = division(n1, n2);
                break;
        
            case 4:
                var resultat = multiplication(n1, n2);
                break;
        
            default:
                throw new Error("Cette opération n'existe pas.");
        }
        alert("voici le résultat : " + resultat);
    } catch (error) {
        alert(error);
    }
    var restart = confirm("Voulez vous refaire une opération ?");
} while (restart);






