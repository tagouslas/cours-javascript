function hello(firstname, lastname, age){
    alert('Bonjour '+firstname+' '+lastname+' tu as '+age+' ans.');
}

const firstname = prompt('Entrez votre prénom :');
const lastname  = prompt('Entrez votre nom :');
const age = prompt('Entrez votre âge :');

hello(firstname, lastname, age);

