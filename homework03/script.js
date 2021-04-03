"use strict";

/*Function defines max digit of inputed number. Input in js ia always string so function
brakes number-string into array of digits-letters and goes througt for max. Using the fact 
js compares symbols by ascii code. The ascii cod of "-" minus is 45 while numbers from 0
to 9 is 48-57 respectively, so works for negative as well*/

function getMaxDigit(num){
    if (Number.isInteger(+num)) {
        const numStr = num.toString().split('');
        let maxDigit = numStr[0];
        for (let i = 1; i < numStr.length; i++){
            if (numStr[i] > maxDigit) {
                maxDigit = numStr[i];
            }
        }
        return maxDigit;
    }
    console.error('Invalid input');
    return -1;
}

/* Power function without using Math.pow. Onput: base - any number, pow - integers only. 
   Output power of base or -1 in case pow is not ineger */

function numPow(base, pow){
    let result = 1;
    const myPow = Math.abs(+pow);

    if (Number.isInteger(+pow)) {
        for (let i = 0; +base != 0 && i < myPow; i++){
            result *= +base;
        }
        return +pow < 0 ? 1/result : result;
    }
    console.error('Invalid input');
    return -1;
}

/* function capitalizes name (string). Input: name as string, output capitalized name. In case of not string
    inputed returns -1 */

function capitalizeName(name){
    if (typeof(name) == 'string'){
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
    console.error('Invalid input');
    return -1;
}

/* function calculate a net pay after tax 19.5%. Using isNum function to check valid input.
    Input - gross salary (number). Output - net pay (number) */

function calcNetPay(gross) {
    const tax = 0.195;
    if ( (isNumber) && (gross > 0) ) {
        return gross - gross * tax ;
    }
    console.error('Invalid input');
    return -1 ;
}

/* function choose a random integer in given interval including limits.
    input - two numbers, output - integer in given interval. In the case of not numeric input - 
    an error message will be displayed in console and function returns -1*/ 

function getRandomNumber(num1, num2){
    if ((isNumber(num1) == false) || (isNumber(num2) == false)) {
        console.error('Invalid input');
        return -1;
    }
    const min = Math.ceil(Math.min(num1, num2));
    const max = Math.floor(Math.max(num1, num2));
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* function counts a given letter in a given word. Input - two strings - a letter first and a word second.
    Output - a number represents how many times a letter appears in the word. In the case of not string input - 
    or letter longer that 1 symbol, an error message will be displayed in console and function returns -1*/

function countLetter(letter, word){
    if ((typeof(letter) != 'string') || (typeof(word) != 'string') || letter.length > 1) {
        console.error('Invalid input');
        return -1 ;
    }
    const myLetter = letter.toLowerCase();
    const myWord = word.toLowerCase();
    const arrWord = myWord.split('');
    let letterCount = 0;
    for (let i = 0; i < arrWord.length; i++){
        if (arrWord[i] == myLetter){
            letterCount++;
        }
    }
    return letterCount;
}

/* function convert from USD to UAH and from UAH to USD with predefined coefficient of 25UAH = 1USD. 
    function defines current currency by precents of $ or UAH in inputer string. UAH register doesn't matter.
    Input - string includes amount to convert and current currency. output - string with converted amount 
    in new currency. function has validation for input. In case of invalid input returns -1 with error message
    to console  */

function convertCurrency(amount){
    
    if (typeof(amount) !== 'string') {
        console.error('Invalid input');
        return -1 ; 
    }

    const myStr = amount.toUpperCase();
    const coeff = 25;

    if (myStr.indexOf('$') !== -1){ // check if string includes $
        const currency = 'UAH'
        const myAmount = myStr.replace('$', ''); // cut $ from string (replace with empty string)
        if (isPositive(myAmount)) { // after $ cut valid amount of usd convert to uah
            return +myAmount * coeff + currency;
        }
    }

    else if (myStr.indexOf('UAH') !== -1){
        const currency = '$';
        const myAmount = myStr.replace('UAH', '');
        if (isPositive(myAmount)) { 
            return +myAmount / coeff + currency;
        }
    }
    console.error('Invalid input');
    return -1 ; 
}

/* function generates password with given length. password includes digits only. Input - number defines 
    length of password. Default length is 8. Output - number with given length includes random digits*/

function getRandomPassword(length = 8){
    if(isPositive(length)){
        let password = '';
        for (let i = 0; i < length; i++){
            password += getRandomNumber(0, 9);
        }
        return +password;
    }
console.error('Invalid input');
return -1;
}

/* function deletes a given symbol from the inputed sentence every time it exist there. Input - two strings -
a letter and a sentence/word. Output - new string with edited sentence*/

function deleteLetters(letter, word){
    if ((typeof(letter) != 'string') || (typeof(word) != 'string') || letter.length > 1) {
        console.error('Invalid input');
        return -1 ;
    }
    const myLetter = letter.toLowerCase();
    const myWord = word.toLowerCase();
    const arrWord = myWord.split('');

    for (let i = 0; i < arrWord.length; i++){
        if (arrWord[i] == myLetter){
            arrWord[i] = '';
        }
    }
    return arrWord.join('');
}

/* function checks if inputed expressin is palyndrom. Input - string or number at least two symbols. 
    Output - boolean or -1 and error in console in case of invalid input */

function isPalindrom(str = ''){
    if (('' + str).length > 1) {
        const myStr = ('' + str).trim().split(' ').join('').toLowerCase();
        const myRevStr = myStr.split('').reverse().join('');
        return myStr == myRevStr ? true : false;
    }
    console.error('Invalid input');
    return -1 ;
}

/* function delete all duplicate letters in string. Input - string only - sentense. Output - string -
    a word includes only unique letters*/

function deleteDuplicateLetter(str = ''){
    if ((typeof(str) != 'string') || (str.length === 0)) {
        console.error('Invalid input');
        return -1 ;
    }
    const myStr = ('' + str).trim().split(' ').join('').toLowerCase();
    const strArr = myStr.split('');
    let unique = '';

    for (let i = 0; i < strArr.length; i++) {
        if (  myStr.indexOf(strArr[i]) == myStr.lastIndexOf(strArr[i]) ) {
            unique += strArr[i];
        }
    }
     return unique;
}

/*---------------------------------------------------------------------------------------------------*/

/* help function checks if input is number */
function isNumber(arg){
    const str = (''+ arg).trim();
    if (str.length === 0) {
        return false;
    }
    return !isNaN(+str);
}

/* help function checks if input is positive number using function checks if input is number*/
function isPositive(arg){
    if (isNumber) {
        return (arg.length != 0)&&(arg >= 0) ? true : false;
    }
}

console.log(getMaxDigit(-1234543211));
console.log(numPow(2,0));
console.log(capitalizeName('вЛaД'));
console.log(calcNetPay(100));
console.log(getRandomNumber(25, 35));
console.log(countLetter("а", "Асталавіста"));
console.log(convertCurrency('100$'));
console.log(getRandomPassword(4));
console.log(deleteLetters('a', "blablabla"));
console.log(isPalindrom("Я несу гусеня"));
console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));