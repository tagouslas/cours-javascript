//function avec paramètres par défault

function cuisiner(nbGateaux, minCuisson = 10, minPreparation = 15) 
{
    let result = nbGateaux * (minCuisson + minPreparation);
    
    return result;
}

let prepaGateauChoc = cuisiner(1);
let prepaGateauFraise = cuisiner(5, 20);

console.log(prepaGateauFraise);
