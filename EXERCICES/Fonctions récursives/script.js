function somme(nombre) { // 2
    
    if (nombre == 1) {
        return 1;
    }

    return nombre + somme(nombre - 1); // 1

        // retourner 1 

}

console.log(somme(2)); // = 3