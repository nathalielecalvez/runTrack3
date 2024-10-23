//Année Bisextile divisible par 4, donc fonction et condition:
//Une année est bisextile si:
//Elle est divisible par 4

function bissextile (année){
    //Vérifie si l'année est divisible par 4
    if(année % 4 === 0){
        return true; // Divisible par 4, donc bissextile
    }else{
        return false;
    }
}

//Appelle la fonction bessextile avec l'année 2024
let estBissextile = bissextile(2028)

console.log(estBissextile)
alert(estBissextile)









// let Nat = "Hello JavaScript"

// console.log(Nat)

