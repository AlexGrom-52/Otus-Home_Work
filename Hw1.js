/* #1 В переменных a и b хранятся числа.
Написать программу, которая выводит в консоль произведение и сумму этих чисел. */
const a = 10;
const b = 5;
console.log(a * b, a + b);

/* #2 Вдвух переменных хранятся строки символов.
 Написать программу, которая выведет в консоль суммарное количество символов в обоих строках. */
const c = "12sdf";
const d = "a8v";
console.log((c + d).length);

/* #3 Написать программу, которая запрашивает у пользователя ввод трёхзначного числа,
а потом выводит в консоль сумму цифр введённого числа. */
const userInput = prompt("Введите трёхзначное число: ");

function sumNum(v) {
  const arr0 = v.split("");
  let userSum = 0;
  for (let i = 1; i <= arr0.length; ) {
    const numArr = +arr0.pop();
    userSum += numArr;
  }
  return userSum;
}
console.log(`Сумма введённых чисел: ${sumNum(userInput)}`);
