document.addEventListener('keydown', function(event) {
    const keylogger = document.getElementById('keylogger');
    let char = event.key;
    if (/^[a-z]$/i.test(char)) {
        if (document.activeElement === keylogger) {
            char += char; // Ajouter la lettre deux fois
        }
        keylogger.value += char;
    }
});
