// script.js

// Fonction pour vérifier si un nombre est premier
function estPremier(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fonction pour calculer la somme des nombres premiers
function sommeNombresPremiers(num1, num2) {
    if (estPremier(num1) && estPremier(num2)) {
        return num1 + num2;
    }
    return false;
}

// Gestionnaire d'événement pour le formulaire
document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const result = sommeNombresPremiers(num1, num2);
    
    document.getElementById('result').textContent = result !== false 
        ? `La somme des nombres premiers est : ${result}` 
        : "L'un ou les deux nombres ne sont pas premiers.";
});
