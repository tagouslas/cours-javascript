class Utilisateur {
    constructor(prenom, nom, mail) {
        this.prenom = prenom;
        this.nom    = nom;
        this.mail   = mail;
    }

    get nomComplet(){
        return this.prenom + ' ' + this.nom;
    }

    set nomComplet(nomComplet){
        [this.prenom, this.nom] = nomComplet.split(" "); 
        // split() divise une chaine de caractère avec un séparateur
    }
}

