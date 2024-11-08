// تعریف متغیرها برای ذخیره وزن و قد علی و حسین
let aliWeight = 75; // کیلوگرم
let aliHeight = 1.75; // متر
let hosseinWeight = 80; // کیلوگرم
let hosseinHeight = 1.8; // متر

// محاسبه BMI برای علی
let aliBMI = aliWeight / (aliHeight * aliHeight);

// محاسبه BMI برای حسین
let hosseinBMI = hosseinWeight / (hosseinHeight * hosseinHeight);

// مقایسه BMI و نمایش خروجی
if (aliBMI > hosseinBMI) {
  console.log(
    `Ali's BMI (${aliBMI}) is higher than Hossein's (${hosseinBMI})!`
  );
} else if (hosseinBMI > aliBMI) {
  console.log(
    `Hossein's BMI (${hosseinBMI}) is higher than Ali's (${aliBMI})!`
  );
} else {
  console.log("Ali's BMI and Hossein's BMI are equal!");
}
