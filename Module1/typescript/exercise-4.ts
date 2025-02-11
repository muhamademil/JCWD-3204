// Task 1 : create triangle pattern
function createTrianglePattern(height: number) {
    let count = 1;
    let result = "";

    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            let numStr = count < 10 ? "0" + count : "" + count
            result += numStr + " ";
            count++
        }
        result += "\n"
    }
    console.log(result)
}

// createTrianglePattern(10)

// Task 2 : fizz buzz
function fizzBuzz(n: number) {
    let result = "" // menyimpan output sebagai string

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz"
        } else if (i % 3 === 0) {
            result += "Fizz"
        } else if (i % 5 === 0) {
            result += "Buzz"
        } else {
            // let numStr = "" // konversi angka ke string secara manual
            // let temp = i;
            // while (temp > 0) {
            //     let digit = temp % 10; // ambil digit terakhir
            //     console.log("digit ; ", digit)
            //     numStr = String.fromCharCode(48 + digit) + numStr; // konversi angka ke karakter ASCII
            //     console.log("numStr : ", numStr)
            //     temp = (temp - digit) / 10; // hapus digit terakhir
            //     console.log("temp : ", temp)
            // }
            result += i
        }
        if (i < n) {
            result += "," // tambahkan koma kecuali untuk angka terakhir
        }
    }
    console.log(result)
}

// fizzBuzz(15)

// Task 3 : Body Mass Index (BMI)
function calculateBMI(weight: number, height: number) {
    let bmi = weight / (height * height) // rumus BMI
    let category = "" // untuk menentukan kategori

    // -- pakai if else
    // if (bmi < 18.5) {
    //     category = "less weight"
    // } else if (bmi >= 18.5 && bmi <= 24.9) {
    //     category = "ideal"
    // } else if (bmi >= 25 && bmi <= 29.9) {
    //     category = "overweight"
    // } else if (bmi >= 30 && bmi <= 39) {
    //     category = "very overweight"
    // } else {
    //     category = "obesity"
    // }

    // -- pakai switch case
    switch (true) {
        case bmi < 18.5:
            category = "less weight"
            break;
        case bmi >= 18.5 && bmi <= 24.9:
            category = "ideal"
            break;
        case bmi >= 25 && bmi <= 29.9:
            category = "overweight"
            break;
        case bmi >= 30 && bmi <= 39:
            category = "very overweight"
            break;
        default:
            category = "obesity"
            break
    }

    return category
}

// console.log(calculateBMI(50, 1.7))
// console.log(calculateBMI(65, 1.7))
// console.log(calculateBMI(80, 1.7))
// console.log(calculateBMI(95, 1.7))

// Task 4 : Remove odd numbers
function removeOddNumbers(arr: number[]) {
    let evenNumbers: number[] = []
    let index = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers[index] = arr[i] // menambahkan elemen ke array secara manual
            index++; // menambahkan index untuk elemen berikutnya
        }
    }
    return evenNumbers
}

// console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Task 5 : Split string into words
function splitStringIntoWords(str: string) {
    let words: string[] = []
    let word = ''
    let index = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            word += str[i]; // tambahkan karakter ke kata saat ini
        } else {
            if (word !== " ") {
                words[index] = word; // simpan kata ke dalam array
                index++; // pindah ke indeks berikutnya
                word = ""; // reset kata
            }
        }
    }
    // menambahkan kata terakhir jika ada
    if (word !== " ") {
        words[index] = word
    }
    return words
}

console.log(splitStringIntoWords("Hello World"))