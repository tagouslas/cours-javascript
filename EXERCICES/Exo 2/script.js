function calculerIMC(poids = Number(prompt('Quel est votre poids en kg ?')), 
                    taille = Number(prompt('Quel est votre taille en m ? ex: 1.60 m'))){

    return poids / (Math.pow(taille,2));
}

alert('Votre IMC a pour valeur ' + parseInt(calculerIMC()));
