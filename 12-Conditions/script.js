let heure = 11;

// heure == 11
// heure != 11
// heure >= 11
// heure <= 11
// heure > 11
// heure < 11


if(heure < 12) {
    console.log("C'est le matin");
}else if(heure < 18){
    console.log("C'est l'après midi");
}else{
    console.log("C'est le soir");
}

let age = 18;

if(age < 18){
    console.log("Tu n'es pas majeur");
}else if(age < 21){
    console.log("Tu es majeur en France");
}else{
    console.log("Tu es majeur partout");
}

// == : égal à la valeur

// === : égal à la valeur et au type

// != : différent de la valeur

// !== : différent de la valeur et du type

// > : supérieur

// < : inférieur

// >= : supérieur ou égal

// <= : inférieur ou égal

// Si nous prenons un exemple, voici la différence entre l'opérateur == et === :

// let nombre = 3;
// if(nombre == "3") // vaudra "true"
// if(nombre === "3") // vaudra "false" (car la variable nombre est de type Number, alors que nous lui demandons de vérifier s'il s'agit bien d'une chaîne de caractères qui vaut 3.
