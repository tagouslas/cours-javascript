const age = prompt('Entrez votre age :');


if(age >= 20){
    alert('Tu es un adulte.');
}else if(age > 10 && age < 20){
    alert('Tu es un adolescent.');
}else if(age >= 5 && age <= 10){
    alert('Tu es un enfant.');
}else if(age >= 0 && age < 5){
    alert('Tu es un bébé.');
}else{
    alert("MMh soit t'es pas né, soit t'es mort.");
}