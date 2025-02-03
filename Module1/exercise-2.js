// -- use case : menentukan bilangan ganjil/genap
// let num = 25

// if (num % 2 == 0) {
//     console.log(num, "is an even number")
// } else {
//     console.log(num, "is an odd number")
// }

// -- use case : menentukan bilangan prima/bukan
// let num = 22;
// let isPrime = true;

// if (num <= 1) {
//     isPrime = false
// } else {

// cara 1 :
// if (num < 4) {
//     isPrime = true
// } else if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
//     isPrime = false
// }

// cara 2 :
// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         isPrime = false
//     }
// }
// }

// if (isPrime) {
//     console.log(num, "is a prime number")
// } else {
//     console.log(num, "is not a prime number")
// }

// -- use case : menjumlahkan panjang array
// let N = 5;
// let sum = 0;
// let cart = []

// for (let i = 1; i <= N; i++) {
//     cart.push(i)
//     sum += i;
// }

// console.log("cart : ", cart)
// console.log("sum of numbers from 1 to ", N, " is : ", sum)

// -- use case : menjumlahkan bilangan faktorial
// let num = 4;
// let factorial = 1;

// for (let i = num; i >= 1; i--) {
//     factorial *= i
// }

// console.log(num, "! = ", factorial)

// -- use case : menentukan bilangan fibonacci
// let N = 15;
// let a = 1
// let b = 1
// let next;

// 0, 1, 1, 2, 3, 5, 8, dst.

// for (let i = 1; i <= N; i++) {
//     if (i == 1) {
//         next = a
//     } else if (i == 2) {
//         next = b
//     } else {
//         next = a + b;
//         a = b;
//         b = next;
//     }
//     console.log(next)
// }