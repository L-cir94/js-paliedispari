/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se
la parola
inserita è palindroma
*/

/* strumenti

*/
/* let userWord = prompt('inserisci una parola, controlliamo se è palindroma').toLowerCase()

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
 */
/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
(usando una funzione).
Sommiamo i due numeri stabiliamo se la somma dei due numeri
è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/


//generiamo un numero random per il pc (max 5)
let numberPc = Math.floor(Math.random() * 5) + 1;


//chiedo all'utente di scegliere pari o dispari e formatto in lettere minuscole? mi serve a qualcosa? boh
let parioDispari = prompt('scegli se pari o dispari').toLowerCase()
if(parioDispari !== 'pari' && parioDispari  !== 'dispari' ){
    alert('devi inserire la parola pari o dispari')
    parioDispari = prompt('scegli se pari o dispari').toLowerCase()
}
console.log(`l'utente ha scelto: ${parioDispari}`)
let numberUser = Number(prompt('iserisci un numero da 1 a 5'));
if(numberUser > 5){
alert('devi inserire un numero al massimo fino al 5!')
let numberUser = Number(prompt('iserisci un numero da 1 a 5'))
}
console.log(`numero pc: ${numberPc} numero utente: ${numberUser}`)
let sum = numberPc + numberUser
console.log(`la somma dei sue numeri è ${sum}`)

function isEven(sum) {
    if (sum % 2 == 0) {
        return true
    } else {
        return false
    }
}
if(isEven(sum)){
    console.log('la somma è pari ')

}else{
    console.log('la somma è dispari');

}

if (( parioDispari === "pari" && sum % 2 == 0) || ( parioDispari === "dispari" && sum % 2 != 0)){
    console.log('hai vinto!')
}else{
    console.log('hai perso!');
}