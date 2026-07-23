let weight = Number(prompt("Nhập cân nặng của bạn (kg):"));
let height = Number(prompt("Nhập chiều cao của bạn (m) - Ví dụ 1.7:"));

let bmi = weight / (height * height);

let who = "";
if (bmi < 18.5) who = "Cân nặng thấp (Gầy)";
else if (bmi < 25) who = "Bình thường";
else if (bmi < 30) who = "Thừa cân / Tiền béo phì";
else if (bmi < 35) who = "Béo phì độ I";
else if (bmi < 40) who = "Béo phì độ II";
else who = "Béo phì độ III";

let asia = "";
if (bmi < 18.5) asia = "Cân nặng thấp (Gầy)";
else if (bmi < 23) asia = "Bình thường";
else if (bmi < 25) asia = "Thừa cân";
else if (bmi < 30) asia = "Tiền béo phì";
else if (bmi < 35) asia = "Béo phì độ I";
else asia = "Béo phì độ II / III";

alert(
  `Chỉ số BMI của bạn: ${bmi.toFixed(1)}\n` +
  `-------------------------\n` +
  `• Theo chuẩn WHO: ${who}\n` +
  `• Theo chuẩn Châu Á (IDI & WPRO): ${asia}`
);