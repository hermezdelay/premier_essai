/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la 
 * fermeture de la popup de partage. 
 * 
 *********************************************************************************/


/**
 * Cette fonction affiche la popup pour partager son score. 
 */
function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackground.classList.add("active")
}

/**
 * Cette fonction cache la popup pour partager son score. 
 */
function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}


/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "partager"
    btnPartage = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton partagé, on affiche la popup
        afficherPopup()
    })

    // On écoute le click sur la div "popupBackground"
    popupBackground.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === popupBackground) {
            // Alors on cache la popup
            cacherPopup()
        }
    })
}

function validerNomChange(){
    let nom = document.getElementById("nom")
    nom.addEventListener('change', (event) => {
        if( (event.target.value.length > 2) && (event.target.value != "tappez ici votre nom !") && (event.target.value != "")){
            console.log(`changement de balise ${event.target.value} `)
            return true
        }
        else{
            nom.classList.add("error")
            console.log("erreur de nom ")
            return false
        }
    })
}

function validerNom(){
    let nom = document.getElementById("nom")
        if( (nom.value.length > 2) && (nom.value != "tappez ici votre nom !") && (nom.value != "")){
            console.log(`changement de balise ${nom.value} `)
            return true
        }
        else{
            //nom.classList.add("error")
            console.log("erreur de nom ")
            return false
        }
}

function validerEmail(){
    let email = document.getElementById("email")
    let regex = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+')
    let regex_email = regex.test(email.value)
    if( (email.value.length > 2) && (email.value != "tappez ici votre nom !") && (email.value != "" )&& regex_email){
            console.log(`changement de balise ${email.value} `)
            return true
        }
        else{
            //email.classList.add("error")
            console.log("erreur de nom ")
            return false
        }
}