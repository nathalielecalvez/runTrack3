document.addEventListener('DOMContentLoaded', () => {
    const formElements = document.querySelectorAll('input');
    formElements.forEach(element => {
        element.addEventListener('input', validateField);
        e.preventDefaut();
        
    });
});

function validateField(event) {
    const field = event.target;
    let errorMessage = '';

    if (field.id === 'email' && !validateEmail(field.value)) {
        errorMessage = 'Email invalide';
    } else if (field.id === 'password' && field.value.length < 10) {
        errorMessage = 'Le mot de passe doit contenir au moins 10 caractères';
    } else if (field.id === 'adresse' && field.value.length < 5) {
        errorMessage = 'L\'adresse doit contenir au moins 5 caractères';
    } else if (field.id === 'codePostal' && !validatePostalCode(field.value)) {
        errorMessage = 'Code postal invalide';
    }

    const messageElement = document.createElement('p');
    messageElement.className = 'error-message';
    messageElement.innerText = errorMessage;
    field.nextElementSibling?.remove();
    field.insertAdjacentElement('afterend', messageElement);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function validatePostalCode(code) {
    return /^[0-9]{5}$/.test(code);
}
