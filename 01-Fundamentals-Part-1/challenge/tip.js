// داده‌های آزمایشی جدید
const billValue = 220;

// محاسبه انعام با استفاده از عملگر سه‌گانه
const tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// محاسبه مبلغ نهایی
const totalValue = billValue + tip;

// نمایش نتیجه به انگلیسی
console.log(
  `The bill was ${billValue}, the tip was ${tip}, and the total value ${totalValue}`
);
