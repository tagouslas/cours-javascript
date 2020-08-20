
do {
    try {
        var n1       = null, 
            n2       = null,
            resultat = null;

        var operation = prompt("Quelle opération souhaitez-vous faire ?\n\n"
                            + "1 - Addition\n"
                            + "2 - Soustraction\n"
                            + "3 - Division\n"
                            + "4 - Multiplication\n"
                            + "'q' pour quitter");

        switch (operation) {
            case '1':
            case 'addition': 
            case 'Addition':
            case 'ADDITION':
                do {
                    n1 = Number(prompt('Valeur du premier nombre à additionner ?'));
                    n2 = Number(prompt('Avec ?'));
                    if (isNaN(n1) || isNaN(n2)) {
                        alert("Veuillez insérer un nombre et non une chaine de caractère.");
                    }else{
                        resultat = addition(n1, n2);
                        alert ("Le résultat : " + n1 + " + " + n2 + " = " + resultat);
                    }
                } while (isNaN(n1) || isNaN(n2));
                    
                break;
            case '2':
            case 'soustraction': 
            case 'Soustraction':
            case 'SOUSTRACTION':
                do {
                    n1 = Number(prompt('Valeur du nombre à soustraire ?'));
                    n2 = Number(prompt('Avec ?'));
                    if (isNaN(n1) || isNaN(n2)) {
                        alert("Veuillez insérer un nombre et non une chaine de caractère.");
                    }else{
                        resultat = soustraction(n1, n2);
                        alert ("Le résultat : " + n1 + " - " + n2 + " = " + resultat);
                    }
                } while (isNaN(n1) || isNaN(n2));
                    
                break;
            case '3':
            case 'division': 
            case 'Division':
            case 'DIVISION':
                do {
                    n1 = Number(prompt('Valeur du nombre à diviser ?'));
                    n2 = Number(prompt('Avec ?'));
                    if (isNaN(n1) || isNaN(n2)) {
                        alert("Veuillez insérer un nombre et non une chaine de caractère.");
                    }else{
                        resultat = division(n1, n2);
                    }
                } while (isNaN(n1) || isNaN(n2) || n2 == 0);
                alert ("Le résultat : " + n1 + " / " + n2 + " = " + resultat);
                break;
            case '4':
            case 'multiplication': 
            case 'Multiplication':
            case 'MULTIPLICATION':
                do {
                    n1 = Number(prompt('Valeur du nombre à multiplier ?'));
                    n2 = Number(prompt('Avec ?'));
                    if (isNaN(n1) || isNaN(n2)) {
                        alert("Veuillez insérer un nombre et non une chaine de caractère.");
                    }else{
                        resultat = multiplication(n1, n2);
                        alert ("Le résultat : " + n1 + " x " + n2 + " = " + resultat);
                    }
                } while (isNaN(n1) || isNaN(n2)); 
                break;
            case 'quitter':
            case 'Quitter':
            case 'q':
            break;

            default:
                throw new Error("Cette opération n'existe pas dans cette calculatrice.");
        }
    } catch (error) {
        alert(error);
    }
    
} while (operation == null || operation == "" || operation > 4 || operation <= 0);

function addition(n1, n2) {
    return n1 + n2;
}
function soustraction(n1, n2) {return n1 - n2;}
function division(n1, n2) {
    if (n2 != 0) {
        return n1 / n2;
    } else {
        throw new Error("Un nombre ne peut pas être diviser par 0.");
    }
}
function multiplication(n1, n2) {return n1 * n2;}


