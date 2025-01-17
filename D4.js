/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area (l1, l2) {
    return l1 * l2;
}
console.log(area(3,2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
 */

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum (num1, num2){
    if (num1 === num2){
        return (num1+num2)*3;
    } else { 
        return num1 +num2;
    }
}
console.log (crazySum(4,5));
console.log (crazySum(4,4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff (num3){
    if (num3>19){
        return Math.abs (num3- 19)*3;
    } else {
        return Math.abs (num3- 19);
    }
}
console.log (crazyDiff (28));
console.log (crazyDiff(10));



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary (n) {
    return ((n>=20) && (n<=100) || (n === 400));   
}
console.log(boundary(20));
console.log(boundary(400));
console.log(boundary(13));
console.log(boundary(50));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify (parameter) {
    if (parameter.toUpperCase().startsWith ("EPICODE")) {
        return parameter;
    } else { 
       return "EPICODE"+ parameter;
    }
}
console.log(epify(":Ciao sono ELEONORA!"));
console.log(epify("EPICODE:Ciao sono ELEONORA!"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7 (positivenumber) {
    return ((positivenumber % 3 === 0) || (positivenumber % 7 === 0));
}

console.log(check3and7(7));
console.log(check3and7(3));
console.log(check3and7(20));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
 */

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString (string) {
    return string.split("").reverse("").join("")
};
console.log (reverseString("hello!"));
console.log(reverseString("EPICODE!"));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst (phrase) {
    const stringWords = phrase.split("");
    console.log(stringWords);
    const sentence = [];
    for (let i =0; i <stringWords.lenght; i++){
        const singleword= stringWords[i]
        const firstLetter =  singleword.charAt(0).toUpperCase();
        console.log(firstLetter);
        const remainLet = singleword.slice(1);
        console.log(remainLet);
        const fullWord = firstLetter.concat(remainLett);
        sentence.push(fullWord); 
}
}
return sentence.join ("");

console.log(upperFirst("hello epicode my name is eleonora"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
 */ 

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString (string) {
    return string.slice (1,-1);
}
console.log(cutString("Eleonora"));
console.log(cutString("Ciao, sono Eleonora"));


/* ESERCIZIO 10
 Scrivi una funzione di nome "iveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
