let count = 1;
while (count <= 10) {
  console.log(count);
  count += 1;
}

for (let i = 2; i <= 20; i++) {
  if (!(i % 2 === 0)) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(`7 * ${i} =`, 7 * i);
}

const numbersTo5 = [1, 2, 3, 4, 5];
console.log(numbersTo5);
let i = 0;
while (i <= 4) {
  console.log(numbersTo5[i]);
  i += 1;
}

const numbersTo10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  if (numbersTo10[i] === 7) {
    break;
  }
  console.log(numbersTo10[i]);
}

console.log("");
const n = Number(prompt("Введіть якесь число:"));
const numbers = Array.from(Array(1000000).keys());
for (let i = 0; i < 1000000; i++) {
  console.log(numbers[i]);
  if (numbers[i] >= n) {
    break;
  }
}

// console.log("");
// let k = 1;
// while (k < 20) {
//     if (k % 3 === 0) {
//         continue;
//     }
//     console.log(k);
//     k += 1;
// }
// while (k < 20) {
//   if (k % 3 === 0) {
//       continue;
//   }
//   console.log(k);
//   k += 1;
// }
