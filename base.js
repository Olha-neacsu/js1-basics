"use strict";
// 1---------------------------------------

/*
 * У Sunny Coffee назва кав'ярні не змінюється, а статус замовлення — так.
 * 1. Оголоси через const змінну cafeName зі значенням "Sunny Coffee".
 * 2. Оголоси через let змінну orderStatus зі значенням "new".
 * 3. Виведи cafeName і orderStatus у консоль.
 * 4. Перепризнач orderStatus на "done".
 * 5. Виведи orderStatus ще раз.
 */

// Твій код тут

// const cafeName = "Sunny Coffee";
// let orderStatus = "new";

// console.log(cafeName);
// console.log(orderStatus);

// orderStatus = "done";

// console.log(orderStatus);

//2---------------------------------------

/*
 * Оголоси пʼять змінних із даними користувача. Жодне значення далі не змінюється,
 * тож усі оголоси через const:
 * - topSpeed — число 160;
 * - distance — число 617.54;
 * - login — рядок "mango935";
 * - isOnline — логічне true;
 * - isAdmin — логічне false.
 */

// Твій код тут

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

//3----------------------------------------------
/*
 * Порахуй, скільки заплатить кожен гість у Sunny Coffee.
 * Треба скласти ціни двох напоїв, відняти купон, а суму поділити між гостями.
 * 1. Оголоси змінну perGuest.
 * 2. Признач їй результат виразу: суму espressoPrice і lattePrice
 *    зменшену на coupon, поділену на guests.
 *    Використай дужки, щоб спершу порахувати суму й різницю, а вже потім ділення.
 * 3. Виведи perGuest у консоль.
 */

// const espressoPrice = 45;
// const lattePrice = 60;
// const coupon = 20;
// const guests = 2;

// // Твій код тут

// const perGuest = (espressoPrice + lattePrice - coupon) / guests;

// console.log(perGuest);

//4-----------------------------------------------
/*
 * Склади повідомлення-підтвердження запису до клініки SmileCare через конкатенацію.
 * 1. Оголоси змінну message.
 * 2. Зʼєднай через + імʼя пацієнта, послугу та ціну в один рядок формату:
 *    Jack, your appointment for Teeth cleaning costs 500 UAH
 * 3. Виведи message у консоль.
 */

// const patientName = "Jack";
// const service = "Teeth cleaning";
// const price = 500;

// // Твій код тут

// const message =
//   patientName +
//   ", your appointment for " +
//   service +
//   " costs " +
//   price +
//   " UAH";

// console.log(message);

//5-------------------------------------------------
/*
 * Перепиши повідомлення-підтвердження шаблонним рядком.
 * Нижче messageConcat складено конкатенацією через + — це відправна точка.
 * Повідомлення має мати такий вигляд, а замість позначок у дужках
 * підстав відповідні значення:
 *   [імʼя], your appointment for [послуга] costs [ціна] UAH
 * 1. Оголоси змінну messageTemplate.
 * 2. Склади в ній це повідомлення шаблонним рядком: огорни текст
 *    зворотними лапками, а замість [імʼя], [послуга], [ціна]
 *    підстав через ${...} змінні patientName, service і price.
 * 3. Виведи messageTemplate у консоль.
 */

// const patientName = "Jack";
// const service = "Teeth cleaning";
// const price = 500;

// // До — повідомлення, складене конкатенацією
// const messageConcat =
//   patientName +
//   ", your appointment for " +
//   service +
//   " costs " +
//   price +
//   " UAH";
// console.log(messageConcat);

// // Твій код тут
// const messageTemplate = `${patientName}, your appointment for ${service} costs ${price} UAH`;
// console.log(messageTemplate);

//6-----------------------------------------------------
/*
 * Пацієнт клініки SmileCare — Jack Morgan.
 * 1. Оголоси змінну initials і склади в ній ініціали шаблонним рядком
 *    у форматі: [перша літера імені].[перша літера прізвища].
 *    Перші літери візьми за індексами з firstName і lastName.
 *    Приклад результату для Jack Morgan: J.M.
 *    Виведи initials у консоль.
 * 2. Оголоси змінну lengthMessage. Дізнайся довжину імені через length
 *    і склади повідомлення у форматі: [імʼя] has [кількість літер] letters
 *    Приклад результату для Jack: Jack has 4 letters
 *    Виведи lengthMessage у консоль.
 */

// const firstName = "Jack";
// const lastName = "Morgan";

// // Твій код тут

// const initials = firstName[0] + "." + lastName[0] + ".";
// console.log(initials);

// const firstNameLength = firstName.length;
// const lengthMessage = `${firstName} has ${firstNameLength} letters`;
// console.log(lengthMessage);

//7--------------------------------------------------------
/*
 * Магазин з продажу ремонтних дроїдів готовий до відкриття —
 * залишилося написати скрипт для їх замовлення.
 *
 * Оголоси змінні та присвой їм відповідні значення:
 * 1. pricePerDroid — ціна одного дроїда, значення 800.
 * 2. orderedQuantity — кількість дроїдів у замовленні, значення 6.
 * 3. deliveryFee — вартість доставки, значення 50.
 * 4. totalPrice — загальна сума замовлення: ціна одного дроїда,
 *    помножена на кількість, плюс вартість доставки.
 * 5. message — повідомлення про стан замовлення у форматі:
 *    You ordered droids worth <total price> credits.
 * Виведи message у консоль.
 */

// Твій код тут

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;

// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits.`;
// console.log(message);

//8----------------------------------------------------------
/*
 * Кавʼярня Sunny Coffee перевіряє замовлення перед підтвердженням.
 * Є дані про склад і суму замовлення — порівняй їх операторами
 * порівняння та збережи логічні результати:
 * 1. isEnoughStock — чи вистачає товару на складі, тобто чи stock
 *    більший або дорівнює orderedQuantity.
 * 2. isFreeDelivery — чи безкоштовна доставка, тобто чи orderTotal
 *    більший за freeDeliveryThreshold.
 * Виведи обидва результати в консоль.
 */

// const stock = 20;
// const orderedQuantity = 8;
// const orderTotal = 250;
// const freeDeliveryThreshold = 300;

// // Твій код тут

// const isEnoughStock = stock >= orderedQuantity;
// const isFreeDelivery = orderTotal > freeDeliveryThreshold;

// console.log(isEnoughStock);
// console.log("isFreeDelivery:", isFreeDelivery);

//9------------------------------------------------------------

/*
 * Клініка SmileCare перевіряє запис перед підтвердженням.
 * Використай оператори суворої рівності та збережи логічні результати:
 * 1. isFull — чи всі слоти на день зайняті, тобто чи bookedSlots
 *    строго дорівнює maxSlots.
 * 2. needsConfirmation — чи потрібне підтвердження, тобто чи
 *    appointmentStatus строго не дорівнює "confirmed".
 * Виведи обидва результати в консоль.
 */

// const bookedSlots = 8;
// const maxSlots = 8;
// const appointmentStatus = "confirmed";

// // Твій код тут

// const isFull = bookedSlots === maxSlots;
// const needsConfirmation = appointmentStatus !== "confirmed";

// console.log(isFull);
// console.log(needsConfirmation);

//10----------------------------------------------------
/*
 * Клініка SmileCare рахує статистику прийомів за день.
 * Оброби дані функціями Math:
 * 1. roundedAverage — середню тривалість візиту averageVisit,
 *    округлену до найближчого цілого.
 * 2. longestVisit — найдовший прийом із трьох: visitA, visitB, visitC.
 * 3. shortestVisit — найкоротший прийом із тих самих трьох.
 * Виведи всі три результати в консоль.
 */

// const averageVisit = 42.6;
// const visitA = 30;
// const visitB = 55;
// const visitC = 45;

// // Твій код тут

// const roundedAverage = Math.round(averageVisit);
// const longestVisit = Math.max(visitA, visitB, visitC);
// const shortestVisit = Math.min(visitA, visitB, visitC);

// console.log(roundedAverage);
// console.log("longestVisit:", longestVisit);
// console.log(shortestVisit);

//11-------------------------------------------------------
/*
 * Клініці SmileCare потрібне привітання, яке можна показати кілька разів.
 * 1. Оголоси функцію showWelcome.
 * 2. У тілі функції виведи в консоль рядок: Welcome to SmileCare!
 * 3. Виклич функцію showWelcome три рази.
 */

// Твій код тут

// function showWelcome() {
//   console.log("Welcome to SmileCare!");
// }

// showWelcome();
// showWelcome();
// showWelcome();

//12---------------------------------------------------------
/*
 * Кавʼярні Sunny Coffee потрібна функція, що показує позицію замовлення.
 * 1. Оголоси функцію showOrder з двома параметрами: coffeeName і quantity.
 * 2. У тілі функції виведи в консоль рядок у форматі:
 *    <coffeeName> x<quantity>
 *    наприклад: Latte x2
 * 3. Виклич функцію showOrder двічі з різними аргументами.
 */

// Твій код тут

// function showOrder(coffeeName, quantity) {
//   console.log(`${coffeeName} x${quantity}`);
// }

// showOrder("Cappuccino", 3);
// showOrder("Espresso", 2);

//13----------------------------------------------------------
/*
 * Клініці SmileCare потрібна функція, що рахує вартість послуги.
 * 1. Оголоси функцію getServiceCost з двома параметрами:
 *    pricePerVisit і visitsCount.
 * 2. Функція має повертати (return) добуток pricePerVisit на visitsCount.
 * 3. Виклич функцію та збережи результат у змінну totalCost.
 * 4. Виведи в консоль повідомлення у форматі: Total cost: <totalCost> UAH
 */

// Твій код тут

// function getServiceCost(pricePerVisit, visitsCount) {
//   return pricePerVisit * visitsCount;
// }

// const totalCost = getServiceCost(500, 4);
// console.log(`Total cost: ${totalCost} UAH`);

//14----------------------------------------------------------
/*
 * Функція makeMessage складає повідомлення про покупку.
 * Параметри задаються під час виклику:
 * - name — назва товару;
 * - price — ціна товару.
 * Доповни функцію так, щоб вона повертала рядок у форматі:
 * You picked <name>, price per item is <price> credits
 */

// Твій код тут

// function makeMessage(name, price) {
//   return `You picked ${name}, price per item is ${price} credits`;
// }

// console.log(makeMessage("Radar", 6150)); // You picked Radar, price per item is 6150 credits
// console.log(makeMessage("Scanner", 3500)); // You picked Scanner, price per item is 3500 credits
// console.log(makeMessage("Reactor", 8000)); // You picked Reactor, price per item is 8000 credits
// console.log(makeMessage("Engine", 4070)); // You picked Engine, price per item is 4070 credits

//15--------------------------------------------------------------------
/*
 * Кавʼярні Sunny Coffee потрібна функція, що збирає рядок-чек для позиції замовлення.
 * Напиши функцію makeReceiptLine з трьома параметрами:
 * - drinkName — назва напою;
 * - cupsCount — кількість порцій;
 * - pricePerCup — ціна однієї порції.
 * Функція має повертати (return) шаблонний рядок такого формату
 * (замість позначок у дужках підстав відповідні значення):
 *   [назва] x[кількість] — [ціна] UAH each, [сума] UAH total
 * де [сума] — це кількість, помножена на ціну однієї порції.
 * Приклад результату для "Latte", 2, 60:
 *   Latte x2 — 60 UAH each, 120 UAH total
 */

// Твій код тут

// function makeReceiptLine(drinkName, cupsCount, pricePerCup) {
//   const total = pricePerCup * cupsCount;
//   return `${drinkName} x${cupsCount} — ${pricePerCup} UAH each, ${total} UAH total`;
// }

// console.log(makeReceiptLine("Latte", 2, 60)); // Latte x2 — 60 UAH each, 120 UAH total
// console.log(makeReceiptLine("Espresso", 3, 45)); // Espresso x3 — 45 UAH each, 135 UAH total
// console.log(makeReceiptLine("Cappuccino", 1, 55)); // Cappuccino x1 — 55 UAH each, 55 UAH total

//16--------------------------------------------------------------------------
/*
 * У піцерії Pizza Time акція: із трьох піц найдешевша йде безкоштовно.
 * Напиши функцію priceToPay з трьома параметрами — цінами трьох піц:
 * - firstPizza;
 * - secondPizza;
 * - thirdPizza.
 * Що має зробити функція:
 * 1. Порахувати повну суму трьох піц.
 * 2. Знайти найдешевшу з трьох цін через Math.min.
 * 3. Відняти найдешевшу від суми — це й буде ціна до сплати.
 * 4. Повернути (return) отримане значення.
 * Приклад: для 180, 220, 150 сума 550, найдешевша 150, до сплати 400.
 */

// Твій код тут

// function priceToPay(firstPizza, secondPizza, thirdPizza) {
//   const totalPrice = firstPizza + secondPizza + thirdPizza;
//   const cheapestPizza = Math.min(firstPizza, secondPizza, thirdPizza);
//   const finalPrice = totalPrice - cheapestPizza;
//   return finalPrice;
// }

// console.log(priceToPay(180, 220, 150)); // 400
// console.log(priceToPay(200, 200, 260)); // 460
// console.log(priceToPay(175, 190, 210)); // 400
