/* Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345. 
Ці змінні зберігають ціни на товари. Придумайте їм назви (товар можна придумати будь-який)*/

const socksPrice = 15.678;
const jacketPrice = 123.965;
const jeansPrice = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
console.log("Max price is: " + Math.max(socksPrice, jacketPrice, jeansPrice));

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log("Min price is: " + Math.min(socksPrice, jacketPrice, jeansPrice));

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let sum = socksPrice + jacketPrice + jeansPrice;
console.log("All goods price is: " + sum);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. 
// Округлення використовувати в МЕНЬШУ сторону.
let intSum = Math.trunc(socksPrice) + Math.trunc(jacketPrice) + Math.trunc(jeansPrice);
console.log("All goods price cents cut off before: " + intSum);

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log("All goods price rounded to hundreds: " + Math.round(intSum/100)*100);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let floorSum = Math.floor(intSum/100)*100;
let isFloorSumEven = floorSum%2 ? false : true;
console.log("If all goods price rounded floor to hundreds is even number? " + isFloorSumEven);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const BUDGET = 500;
let change = BUDGET - sum;
console.log("Change from 500 without rounding is: " + change);

// Виведіть середнє значення цін, округлене до другого знаку після коми
let medianToCents = (sum/3).toFixed(2);
console.log("Prices median value raunded to cents: " + medianToCents);

// (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
let discountRate = Math.floor(Math.random() * 100) + 1;
console.log("The random discount is " + discountRate + "%");

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
let discount = sum * discountRate / 100;
let toPay = (sum - discount).toFixed(2);
console.log("To pay after discount: " + +toPay);

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
//(Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130. 
// Чистий прибуток = 130 - 26 -> 104) (Приклад 2: ціна була 100, знижка склала 90%, клієнт заплатив на 90 меньше, 
// собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40)

let profit = (sum/2 - discount).toFixed(2); 
console.log("The profit is: " + +profit);

//  ADVANCED

//  Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду:

//  Максимальна ціна: 9999.99
//  Мінімальна ціна: 1111.11
//  Вартість всіх товарів: 1345.66
//  ...і так далі
console.log("ADVANCED");
console.log (`Max price is: ${Math.max(socksPrice, jacketPrice, jeansPrice)}
Min price is: ${Math.min(socksPrice, jacketPrice, jeansPrice)}
All goods price is: ${sum}
All goods price cents cut off before: ${intSum}
All goods price rounded to hundreds: ${Math.round(intSum/100)*100}
If all goods price rounded floor to hundreds is even number? ${isFloorSumEven}
Change from 500 without rounding is: ${change}
Prices median value raunded to cents: ${medianToCents}
The random discount is ${discountRate}%
To pay after discount: ${toPay}
The profit is: ${profit}`);