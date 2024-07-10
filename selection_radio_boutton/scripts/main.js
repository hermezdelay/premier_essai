/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

/*
let question1 = document.getElementById("nom")
console.log(question1)

let question2 = document.getElementById("btnValiderMot")
question2.addEventListener("click", (event) => {
    console.log(event)
})


let question3 = document.getElementById("inputEcriture")
question3.addEventListener('keydown', (event) => {
    console.log(event)


})
    
lancerJeu()
    /*/

function change_radio(radio, mot){
    
    for(let i=0 ; i< radio.length ; i++){
        console.log(radio[i])
        radio[i].addEventListener('change', (event) => {

            if(Number(radio[i].value) === 1){    
                mot.innerText= listeMots[0]
            }
            else{   
                mot.innerText= listePhrases[0]
            }
        })
    }
    
    console.log("salam")

}


let radio = document.getElementsByName("optionSource")
let mot = document.getElementById("moi")
  
mot.innerText= listeMots[0]

change_radio(radio,mot)
