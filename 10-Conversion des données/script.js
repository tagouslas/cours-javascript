function convertInt(){
    let nombre = prompt('Quelle est la chaine à convertir ?');
    nombre = parseInt(nombre);
    alert('Vous avez converti la chaine ' + nombre + ' en nombre entier. ex: '+ nombre + ' + 1 = ' +(nombre+1));  
}

function convertfloat(){
    let nombre = prompt('Quelle est la chaine à convertir ?');
    nombre = parseFloat(nombre);
    alert('Vous avez converti la chaine ' + nombre + ' en nombre à virgule. ex: '+ nombre + ' + 1.25 = ' +(nombre+1.25));  
}

function convertStringAtNumber(){
    let nombre = prompt('Quelle est la chaine à convertir ?');
    nombre = Number(nombre);
    alert('Vous avez converti la chaine ' + nombre + ' en nombre. ex: '+ nombre + ' + 1 = ' +(nombre+1));  
}

function convertNumberAtString(){
    let nombre = prompt('Quelle est le nombre à convertir ?');
    nombre = nombre.toString();
    alert('Vous avez converti le nombre ' + nombre + ' en chaine de caractères. ex: '+ nombre + ' + 1 = ' +(nombre+1));  
}

convertInt();
convertfloat();
convertStringAtNumber();
convertNumberAtString();