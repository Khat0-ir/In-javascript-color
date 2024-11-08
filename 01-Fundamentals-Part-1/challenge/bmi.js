// تعریف متغیرها برای ذخیره وزن و قد علی و حسین
let aliWeight = 75; // کیلوگرم
let aliHeight = 1.75; // متر
let hosseinWeight = 80; // کیلوگرم
let hosseinHeight = 1.8; // متر

// محاسبه BMI برای علی
let aliBMI = aliWeight / (aliHeight * aliHeight);

// محاسبه BMI برای حسین
let hosseinBMI = hosseinWeight / (hosseinHeight * hosseinHeight);

// مقایسه BMI و تعیین نتیجه در متغیر boolean
let aliHigherBMI = aliBMI > hosseinBMI;

// نمایش نتایج در کنسول
console.log("BMI علی: " + aliBMI);
console.log("BMI حسین: " + hosseinBMI);
console.log("آیا BMI علی از حسین بیشتر است؟", aliHigherBMI);
