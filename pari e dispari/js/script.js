// PROMPT PER LA SCELTA TRA PARI E DISPARI
let scegli;
let check_scegli = true;

// VERIFICO CON DO WHILE CHE SI INSERISCA PARI O DISPARI E NON ALTRI VALORI
do{
    scegli = prompt("Inserisci 'pari' o 'dispari'");

    if(scegli== "pari" || scegli== "dispari"){
        check_scegli = false;
    }
}
while(check_scegli);

console.log(scegli);

// PROMPT PE RINSEIRE UN NUMER TRA 1 E 5
let number = parseInt(prompt("Inserisci un numero tra 1 e 5"));
console.log(number);

// FUNZIONE PER GENERARE UN NUMERO RANDOMA TRA 1 E 5 PER IL COMPUTER
function randomNumber() {
    return Math.floor(Math.random() * 5 + 1);
}

let num_pc = randomNumber();
console.log(num_pc);

// SOMMA DEI DUE NUMERI
let sum = (number + num_pc);
console.log(sum);

// PARI O DISPARI
function oddOrEven(sum) {
    if (scegli == "pari"){
        if (sum % 2 == 0) {
        alert(`${sum} è pari. Hai Vinto!`)
        }
        else {
            alert(`${sum} è dispari. Hai Perso!`)
        }
    }
    else if (scegli == "dispari"){
        if (sum % 2 != 0) {
            alert(`${sum} è dispari. Hai Vinto!`)
        }
        else {
            alert(`${sum} è pari. Hai Perso!`)
        }
    }
}

oddOrEven(sum);  