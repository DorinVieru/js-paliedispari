// PROMPT DOVE SI RICHIEDE ALL'UTENTE UNA PAROLA
let word = prompt("Inserisci una parola");

// CREO FUNZIONE PER CAPIRE SE LA PAROLA INSERITA E' PALINDROMA
function palindroma(word){
    // CREO LA PAROLA INVERSA DI QUELLA INSERITA
    let reversed = word.split("").reverse().join("")

    // VERIFICO SE LA PAROLA INSERITA E' CORRETTA
    if (reversed == word){
        alert("La parola inseirta è palindroma")
    }
    else{
        alert("La parola inserita non è palindroma")
    }
}

palindroma(word);