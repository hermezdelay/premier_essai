const form = document.querySelector('form');

function verification_champs_caractere(){
    const baliseNom = document.getElementById('nom');
    baliseNom.addEventListener('input', (event) => {
    const valeurNom = event.target.value;
    if (valeurNom === "") {
        console.log('caractere tapé : Le champ nom est vide');
    } else {
        console.log('caractere tapé :Le champ nom est rempli');
    }
});
}
function verification_champs_modification(){
    const baliseNom = document.getElementById('nom');
    baliseNom.addEventListener('change', (event) => {
    const valeurNom = event.target.value;
    if (valeurNom === "") {
        console.log('changement : Le champ nom est vide');
    } else {
        console.log('changement : Le champ nom est rempli');
    }
});
}


// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut

    event.preventDefault();
    // On fait la vérification.
    const baliseNom = document.getElementById('nom');
    const valeurNom = baliseNom.value;
    if (valeurNom === "") {
        console.log('submit : Le champ nom est vide');
    } else {
        console.log('submit: Le champ nom est rempli');
    }
});

verification_champs_modification()
verification_champs_caractere()