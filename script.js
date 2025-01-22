for(let i = 2; i <= 20; i += 2){
    console.log(i);
}


// Scrivi un programma che utilizzi un ciclo for per calcolare la somma dei numeri da 1 a 100. Stampa il risultato finale sulla console.
let somma = 0;
for (let index = 0; index <= 100; index++) {
    somma += index;
    
}
console.log(somma)

// Dichiara un array con i seguenti numeri: [3, 7, 12, 15]. Usa un ciclo for per creare un nuovo array in cui ogni numero è raddoppiato, e stampa il nuovo array.
let number = [3, 7, 12, 15];
for (let index = 0; index < number.length; index++) {
    // console.log(number);
    newNumber = number[index] * 2;
    console.log(newNumber);
}