const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    if (e.keyCode === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            activateKonami();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateKonami() {
    document.body.classList.add('stylised');
    document.getElementById('content').textContent = 'Vous avez déverrouillé le code Konami!';
}
