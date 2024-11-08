// داده‌های آزمایشی جدید با اعداد تصادفی
const team1Score1 = 85;
const team1Score2 = 92;
const team1Score3 = 97;

const team2Score1 = 90;
const team2Score2 = 88;
const team2Score3 = 95;

// محاسبه میانگین امتیاز هر تیم
const team1Average = (team1Score1 + team1Score2 + team1Score3) / 3;
const team2Average = (team2Score1 + team2Score2 + team2Score3) / 3;

// تعیین برنده با شرط امتیاز حداقل 100
if (team1Average > team2Average && team1Average >= 100) {
  console.log(
    "Team 1 wins the trophy with an average score of " + team1Average
  );
} else if (team2Average > team1Average && team2Average >= 100) {
  console.log(
    "Team 2 wins the trophy with an average score of " + team2Average
  );
} else if (
  team1Average === team2Average &&
  team1Average >= 100 &&
  team2Average >= 100
) {
  console.log(
    "It's a draw! Both teams have an average score of " + team1Average
  );
} else {
  console.log(
    "No team wins the trophy. Both teams have an average score below 100."
  );
}
