const images = [...document.querySelectorAll('.rainbow-piece')]; 
// Sélectionne tous les éléments avec la classe 'rainbow-piece' et les met dans un tableau.

const shuffleButton = document.getElementById('shuffleButton'); 
// Sélectionne le bouton avec l'ID 'shuffleButton'.

const checkButton = document.getElementById('checkButton'); 
// Sélectionne le bouton avec l'ID 'checkButton'.

const message = document.getElementById('message'); 
// Sélectionne l'élément avec l'ID 'message'.

// Mélanger les images
shuffleButton.addEventListener('click', () => { 
    // Ajoute un événement de clic au bouton pour mélanger les images.
    for (let i = images.length - 1; i > 0; i--) { 
        // Parcourt les images du dernier au premier.
        const j = Math.floor(Math.random() * (i + 1)); 
        // Génère un indice aléatoire entre 0 et i.
        [images[i].src, images[j].src] = [images[j].src, images[i].src]; 
        // Échange les sources de deux images aléatoirement.
    }
    message.textContent = ''; 
    // Réinitialise le message.
});

// Permettre de déplacer les images
images.forEach(img => { 
    // Parcourt chaque image.
    img.addEventListener('dragstart', (e) => { 
        // Ajoute un événement de drag start (début du glisser).
        e.dataTransfer.setData('text/plain', e.target.src); 
        // Stocke la source de l'image glissée.
    });

    img.addEventListener('dragover', (e) => { 
        // Ajoute un événement de drag over (glisser sur une autre image).
        e.preventDefault(); 
        // Empêche le comportement par défaut pour permettre le drop.
    });

    img.addEventListener('drop', (e) => { 
        // Ajoute un événement de drop (déposer).
        e.preventDefault(); 
        // Empêche le comportement par défaut.
        const src = e.dataTransfer.getData('text/plain'); 
        // Récupère la source de l'image glissée.
        e.dataTransfer.clearData(); 
        // Vide les données transférées.
        const targetSrc = e.target.src; 
        // Stocke la source de l'image cible.
        e.target.src = src; 
        // Change la source de l'image cible avec celle de l'image glissée.
        images.find(i => i.src === src).src = targetSrc; 
        // Change la source de l'image glissée avec celle de l'image cible.
    });
});

// Vérifier l'ordre des images
checkButton.addEventListener('click', () => { 
    // Ajoute un événement de clic pour vérifier l'ordre des images.
    const correctOrder = ['images/arc1.png', 'images/arc2.png', 'images/arc3.png', 'images/arc4.png', 'images/arc5.png', 'images/arc6.png']; 
    // Définit l'ordre correct des images.
    const currentOrder = images.map(img => img.src.split('/').pop()); 
    // Récupère l'ordre actuel des images en prenant la partie du nom de fichier après le dernier '/'.
    if (JSON.stringify(correctOrder) === JSON.stringify(currentOrder)) { 
        // Compare l'ordre actuel avec l'ordre correct.
        message.textContent = 'Vous avez gagné'; 
        // Affiche le message de victoire.
        message.style.color = 'green'; 
        // Change la couleur du message en vert.
    } else { 
        // Si l'ordre n'est pas correct.
        message.textContent = 'Vous avez perdu'; 
        // Affiche le message de défaite.
        message.style.color = 'red'; 
        // Change la couleur du message en rouge.
    }
});
