function addition(...nombres) {
    
    let resultat = 0;

    nombres.forEach(nombre => {
        resultat += nombre;
    });
    console.log(resultat);
}

addition(1,43,5,21,87,9);