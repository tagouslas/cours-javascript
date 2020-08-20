// OPERATEURS
// - "+"    addition 2
// - "-"    soustraction 2
// - "*"    multiplication 1
// - "/"    division 1
// - "%"    modulo <=> 5/2 = 2,45343 il reste 1
// - "**"   exponentielle 5**2 = 25

let n1 = 8, n2 = 4, result = 0;
const c1 = 2;

result  = n1 + n2 / c1; // 8 + (4/2) = 10
result  += result;      // auto-addition (result + (result + x)) 10 + 10 = 20
result++;               // incrémentation (+1) 20 + 1 = 21 
result--;               // décrémentation (-1) 21 - 1 = 20 

console.log(result);    // afficher => result (= 10)

