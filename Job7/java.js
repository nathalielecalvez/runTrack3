//creation fonction

function jourtravaille(date) {
    const joursFeries = [
        new Date('2020-01-01'), // Jour de l'An
        new Date('2020-04-13'), // Lundi de Pâques
        new Date('2020-05-01'), // Fête du Travail
        new Date('2020-05-08'), // Victoire 1945
        new Date('2020-05-21'), // Ascension
        new Date('2020-06-01'), // Lundi de Pentecôte
        new Date('2020-07-14'), // Fête Nationale
        new Date('2020-08-15'), // Assomption
        new Date('2020-11-01'), // Toussaint
        new Date('2020-11-11'), // Armistice
        new Date('2020-12-25')  // Noël
    ];

    const jour = date.getDate();
    const mois = date.getMonth() +1;
    const annee = date.getFullYear();

/*some:vérifie si au moins un élément 
du tableau satisfait la condition donnée dans la fonction. 
Si c'est le cas, elle retourne true, sinon false.*/

    if (joursFeries.some(jourFerie => jourFerie.getTime() === date.getTime())) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
    } else {
        console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}

jourtravaille(new Date('2020-01-01')); // Jour de l'An
jourtravaille(new Date('2020-04-15')); // Un jour travaillé
jourtravaille(new Date('2020-05-09')); // Un samedi
jourtravaille(new Date('2020-12-25')); // Noël

