function timer(secondes){ // secondes = 10
    if (secondes > 0) {
        console.log(secondes);
        timer(secondes - 1); // secondes = 10 - 1 = 9
            // afficher 9
            // timer(8)

                // afficher 8
                // timer(7)

                    // etc.
    }else{
        console.log(secondes);
    }
}

timer(10);