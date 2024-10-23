function tri(numbers, order) {
    function comparer(a, b) {
        if (order === "asc") {
            return a - b;
        } else if (order === "desc") {
            return b - a; // Tri descendant
        }
    }
    return numbers.sort(comparer); // Utiliser la méthode sort avec la function de comparaison
}

console.log(tri([5, 3, 8, 1, 2], "asc")); // Trier dans l'ordre ascendant
console.log(tri([5, 3, 8, 1, 2], "desc")); // Trier dans l'ordre descendant

