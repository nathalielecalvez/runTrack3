


function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {
        // Vérifie si le nombre est multiple de 3 et 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        // Vérifie si le nombre est multiple de 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        // Vérifie si le nombre est multiple de 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        // Si le nombre n'est multiple ni de 3 ni de 5, affiche le nombre
        else {
            console.log(i);
        }
    }
}

// Appel de la fonction pour tester
fizzbuzz();
