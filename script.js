//dobbiamo scrivere un programma che stampi i numeri da 1 a 100.
//per i multipli di 3 stampiamo il termine fizz piuttosto che il numero 
//per i mutlipli di 5 invece stampiamo il termine buzz piuttosto che il numero
//per invece i numeri che sono multipli sia di 3 che di 5 stampremo la scritta fizzbuzz



//operazione logica

//inizializziamoa un ciclo che stampio i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { //se vero stampiamo fizzbuzz
        console.log("FizzBuzz");
    } else if (i % 3 === 0) { //se vero allora stamperemo Fizz
        console.log("Fizz");
    } else if (i % 5 === 0) { //se vero stamperemo buzz
        console.log("Buzz");
    } else { //Altrimenti stamperemo il numero
        console.log(i);
    }
}


//2 metodo

let result = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        result = "FizzBuzz";
    }
    else if (i % 3 == 0) {
        result = "Fizz"
    }
    else if (i % 5 == 0) {
        result = "Buzz"
    }
    else { result = `${i}` }

    console.log(result)
}


// Chiediamo all'utente di inserire un numero tramite prompt
//let numeroUtente = prompt("Fino a che numero vuoi eseguire FizzBuzz? (max 100)");
//numeroUtente = Number(numeroUtente);


//let risultato = 0;

//Verifichiamo che il numero inserito sia valido
const numeroUtente = parseInt(prompt('Inserisci un numero (max 100)'));
if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100) {
    console.log("Inserisci un numero valido tra 1 e 100!");
} else {
    //Ciclo fino al numero scelto dall'utente
    for (let i = 1; i <= numeroUtente; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}





