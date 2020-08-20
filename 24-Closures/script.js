// PREMIER EXEMPLE

// function test(param) {
    
//     let resultat = "Hello " + param;
//     let closure = () => console.log(resultat);

//     return closure;

// }

// let fonction = test('Théo');

// fonction();

function timer(params) {
    let secondes = 0;

    let closure = () => { // La closure sauvegarde les variables locales d'une fonction 
        return ++secondes;
    }
    return closure;
}

let monTimer = timer();
console.log(monTimer());
console.log(monTimer());
