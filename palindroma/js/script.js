// PROMPT DOVE SI RICHIEDE ALL'UTENTE UNA PAROLA
let word = prompt("Inserisci una parola");

// CREO FUNZIONE PER CAPIRE SE LA PAROLA INSERITA E' PALINDROMA
function palindroma(){
    for (let i=0; i<word.length; i++){
        console.log(word[i]);
    }

    console.log(word.split("").reverse().join(""))
}

palindroma();