// console.log("test");

// ***** variale adnd value

// console.log("valuses");

// let name = "khat0";

// console.log(name);

// console.log("khat0");

// let namesite = "khat00";

// console.log(namesite);

// let PI = 3.14;

// let isKhat0 = true;

// *****Data type

// let firstName = "khat 0";

// console.log(typeof firstName);

// console.log(typeof 1);

// console.log(typeof false);

// let kaht1;

// console.log(kaht1);

// console.log(typeof null);
/**
 *
 *
 *
 * multi line comment
 */

// *****let , const , var

// let khat0 = "test";

// khat0 = "test 00";

// console.log(khat0);

// var khat1 = "test";

// khat1 = "test 1";

// console.log(khat1);

// const khat2 = "test";

// khat2 = "test 2";

// console.log(khat2);

// ***** Basic Operators

// **math

// let thisYear = 1403;

// console.log(2 + 2);

// console.log(thisYear - 1377);

// console.log(4 * 5);

// console.log(8 / 2);

// console.log(9 % 2);

// console.log(2 ** 3);

// console.log("khat0 " + " khat1");

// // **assignment
// let y = 5;

// let x = (y += 10);

// // p += r => p + r

// console.log(--x);

// // **comparsion

// console.log(2 > 3);

// console.log(4 < 5);

// console.log(4 === "4");

// console.log(4 >= 4);

// console.log(10 <= 10);

// ***** Operator Precedence

// console.log((4 + 5) * 3);

// *****BMI challenge
// تعریف متغیرها برای ذخیره وزن و قد علی و حسین
// let aliWeight = 75; // کیلوگرم
// let aliHeight = 1.75; // متر
// let hosseinWeight = 80; // کیلوگرم
// let hosseinHeight = 1.8; // متر

// // محاسبه BMI برای علی
// let aliBMI = aliWeight / (aliHeight * aliHeight);

// // محاسبه BMI برای حسین
// let hosseinBMI = hosseinWeight / (hosseinHeight * hosseinHeight);

// // مقایسه BMI و تعیین نتیجه در متغیر boolean
// let aliHigherBMI = aliBMI > hosseinBMI;

// // نمایش نتایج در کنسول
// console.log("BMI علی: " + aliBMI);
// console.log("BMI حسین: " + hosseinBMI);
// console.log("آیا BMI علی از حسین بیشتر است؟", aliHigherBMI);

// *****strings and Template Literals

// let khat0 = "test 0";

// let khat1 = "test 1";
// let numkhat0 = 5;

// console.log(khat0 + " " + numkhat0 + " " + khat1);

// console.log(`this a string ${numkhat0}`);

// console.log("this a string \n this a 2nd string");

// ***** if / else Statements

// let value1 = 10;

// let value2 = 20;

// if (value1 > value2) {
//   console.log("val1 is biger than val2");
// } else if (value1 === 11) {
//   console.log("val 1 is 10");
// } else {
//   console.log("this a else");
// }

// ***** BMI challenge 2

// // تعریف متغیرها برای ذخیره وزن و قد علی و حسین
// let aliWeight = 75; // کیلوگرم
// let aliHeight = 1.75; // متر
// let hosseinWeight = 80; // کیلوگرم
// let hosseinHeight = 1.8; // متر

// // محاسبه BMI برای علی
// let aliBMI = aliWeight / (aliHeight * aliHeight);

// // محاسبه BMI برای حسین
// let hosseinBMI = hosseinWeight / (hosseinHeight * hosseinHeight);

// // مقایسه BMI و نمایش خروجی
// if (aliBMI > hosseinBMI) {
//   console.log(
//     `Ali's BMI (${aliBMI}) is higher than Hossein's (${hosseinBMI})!`
//   );
// } else if (hosseinBMI > aliBMI) {
//   console.log(
//     `Hossein's BMI (${hosseinBMI}) is higher than Ali's (${aliBMI})!`
//   );
// } else {
//   console.log("Ali's BMI and Hossein's BMI are equal!");
// }

// ***** Type Conversion and Coercion

// let val1 = "23";

// let val2 = "12";

// let val3 = "khat0";

// console.log(typeof val1, typeof Number(val1));

// console.log(typeof Number(val3));

// val4 = 5;

// console.log(typeof val4, typeof String(val4));

// console.log("this is a " + 5 + " number");

// console.log("1" + 1);

// ***** Truthy and Falsy Values

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean({}));

// let val1 = -1;

// if (val1) {
//   console.log("val1");
// }

// *****Equality Operators

// let val1 = 1;

// let val2 = Number("1");

// if (val1 === val2) {
//   console.log("val1 is eual with val2");
// }

// *****Logical Operators

// let hasLicence = false;

// let hasGoddVision = false;

// let hasCar = true;

// let canCarMove = false;

// if (hasLicence || hasGoddVision || (hasCar && canCarMove)) {
//   console.log("can drive");
// } else {
//   console.log("take taxi");
// }

// ***** not ! operator

// let val1 = true;

// if (!0) {
//   console.log("val1 is true");
// }

// ***** sport challenge

// // داده‌های آزمایشی جدید با اعداد تصادفی
// const team1Score1 = 85;
// const team1Score2 = 92;
// const team1Score3 = 97;

// const team2Score1 = 90;
// const team2Score2 = 88;
// const team2Score3 = 95;

// // محاسبه میانگین امتیاز هر تیم
// const team1Average = (team1Score1 + team1Score2 + team1Score3) / 3;
// const team2Average = (team2Score1 + team2Score2 + team2Score3) / 3;

// // تعیین برنده با شرط امتیاز حداقل 100
// if (team1Average > team2Average && team1Average >= 100) {
//   console.log(
//     "Team 1 wins the trophy with an average score of " + team1Average
//   );
// } else if (team2Average > team1Average && team2Average >= 100) {
//   console.log(
//     "Team 2 wins the trophy with an average score of " + team2Average
//   );
// } else if (
//   team1Average === team2Average &&
//   team1Average >= 100 &&
//   team2Average >= 100
// ) {
//   console.log(
//     "It's a draw! Both teams have an average score of " + team1Average
//   );
// } else {
//   console.log(
//     "No team wins the trophy. Both teams have an average score below 100."
//   );
// }

// ***** The switch Statement

// let val1 = 2;

// switch (val1) {
//   case 15:
//     console.log("val is 15");
//     break;
//   case 8:
//   case 5:
//     console.log("val is 5");
//     break;
//   case 10:
//     console.log("val is 10");
//     break;
//   default:
//     console.log("no val info find");
// }

// ***** // The Conditional (Ternary) Operator

// let val1 = 1;

// val1 > 6
//   ? console.log("val1 is more than 6")
//   : console.log("val1 is lower than 6");

// ***** tip challenge

// // داده‌های آزمایشی جدید
// const billValue = 220;

// // محاسبه انعام با استفاده از عملگر سه‌گانه
// const tip =
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// // محاسبه مبلغ نهایی
// const totalValue = billValue + tip;

// // نمایش نتیجه به انگلیسی
// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, and the total value ${totalValue}`
// );

// *****ES6 feature

// https://www.w3schools.com/js/js_es6.asp
