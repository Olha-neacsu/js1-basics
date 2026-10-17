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

function showWelcome() {
  console.log("Welcome to SmileCare!");
}

showWelcome();
showWelcome();
showWelcome();
