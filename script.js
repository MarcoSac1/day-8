for(let i = 2; i <= 20; i += 2){
    console.log(i);
}


// Scrivi un programma che utilizzi un ciclo for per calcolare la somma dei numeri da 1 a 100. Stampa il risultato finale sulla console.
let somma = 0;
for (let index = 0; index <= 100; index++) {
    somma += index;
    
}
console.log(somma)

// TODO Dichiara un array con i seguenti numeri: [3, 7, 12, 15]. Usa un ciclo for per creare un nuovo array in cui ogni numero è raddoppiato, e stampa il nuovo array.
let number = [3, 7, 12, 15];
let newArr =[];

for (let index = 0; index < number.length; index++) {
    // console.log(number);
    newArr.push(number[index] * 2);
}
console.log(newArr);

// creare una funzione che accetti due parametri e che li stampi in console
function myFunct(c, b) {

    console.log(c ,b);
}
myFunct(1 ,5);

// scrivi una funzione chiamata gestisciComando che accetti un singolo parametro: una stringa chiamata comando la funzione deve Stampare un messagio se il comando e saluta, stampare un messagio se il comando e somma, stampare un messagio di errore se il comando non e valido 
function gestisciComando(comando) {
    if(comando == "saluta"){
        console.log("buona gionata");
        
    }else if(comando == "somma"){
        let sum = 15 + 18;
        console.log(sum);
        
    }else{
        console.log("comando non valido");
        return;
    }
}

gestisciComando("saluta");
gestisciComando("somma");
gestisciComando("error");
