let n1 = 5, n2 = 12;

function addition(nA, nB) 
{
    let result = nA +  nB;
    return result;
    // Rien est exécuté après un return.
}

function soustraction(nA, nB) 
{
    let result = nA - nB;
    return result;
}

function division(nA, nB) 
{
    let result = nA / nB;
    return result;
}

function multiplication(nA, nB) 
{
    let result = nA * nB;
    return result;
}

let result_addition     = addition(n1,n2);
let result_soustraction = soustraction(n2,n1);

console.log(multiplication(result_addition, result_soustraction));
