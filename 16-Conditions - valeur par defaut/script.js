let depart = prompt('Quelle est ma position de départ ?') || "ma position gps actuelle"; // <= VALEUR PAR DÉFAUT
let arrive = prompt('Quelle est ma destination ?');
let conducteur = "Jean Miche";

if (depart != "" && arrive != "" && conducteur != "") {
    alert("Je pars de "+ depart + ", pour aller à " + arrive + ", avec " + conducteur + " comme conducteur.");
}else{
    alert("Je ne pars, pas car je ne sais pas où aller.");
}
