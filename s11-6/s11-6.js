let a = Number(prompt("Mời bạn nhập vào số a:"));
let b = Number(prompt("Mời bạn nhập vào số b:"));
let operator = prompt("Mời bạn nhập vào phép tính (+, -, *, /):");

let result;

if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    result = b !== 0 ? a / b : "Không thể chia cho 0";
} else {
    result = "Phép tính không hợp lệ!";
}

alert(`${a} ${operator} ${b} = ${result}`);