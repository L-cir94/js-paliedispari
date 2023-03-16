/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se
la parola
inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
(usando una funzione).
Sommiamo i due numeri stabiliamo se la somma dei due numeri
è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

/* strumenti

*/
let userWord = prompt('inserisci una parola')

function palindromo(str) {
    const regex = /[\W_]/g;
    let userWord = str.toLowerCase().replace(regex, '');
    const length = userWord.length;

    for (let i = 0; i < length / 2; i++) {
        if (userWord[i] !== userWord[length - 1 - i]) {
            return false;
            
        }
    }

    return true;
}
if (palindromo(userWord)) {
    console.log(`la parola inserita: '${userWord}' è palindroma`);
} else {
    console.log(`la parola inserita: '${userWord}' non è palindroma`);
}
if (!palindromo(userWord)) {
    console.log(`la parola inserita: '${userWord}' non è palindroma`);
} else {
    console.log(`la parola inserita: '${userWord}' è palindroma`);
}