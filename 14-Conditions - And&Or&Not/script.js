// Les opérateurs de conditions : && || !


let condition1 = "";
let condition2 = "";
let condition3 = "";

if (condition1 != "" && condition2 != "") {
    console.log("Les conditions sont validées.");
}else if(condition1 != "" || condition2 != ""){
    console.log("Une des deux condition est valide.");
}else if((condition1 != "" || condition2 != "") && condition3 != ""){
    console.log("Une des deux condition est valide et la troisième condition est valide.");
}else{
    console.log("Aucune des conditions n'est valide.");
}

let x = 7;

if (!x < 5) { //La condition est inversé avec !
    console.log("x est inférieur à 5");
}else{
    console.log("x est supérieur à 5");
}
    
