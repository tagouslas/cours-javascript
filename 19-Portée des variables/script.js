let variableLet = 'globale';
var variableVar = 'globale';

if (true) {
    
    let variableLet = 'locale'; // Ici une nouvelle variable a été créé sans écraser celle du même nom
    var variableVar = 'locale'; // La première variable var a été écrasé par celle-ci

    console.log('Let : ' + variableLet);
    console.log('Var : ' + variableVar);
}

console.log('Let : ' + variableLet);
console.log('Var : ' + variableVar);