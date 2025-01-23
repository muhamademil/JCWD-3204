// case 1 : konversi dari variabel hari ke tahun, bulan, dan hari

// let totalDays = 400;
let totalDays = 366;
let years = (totalDays - (totalDays % 365)) / 365;
let remainingDays = totalDays % 365;
let months = (remainingDays - (remainingDays % 30)) / 30;
let days = remainingDays % 30;

// console.log('years : ',years)
// console.log('remaining days : ', remainingDays)
// console.log('months : ', months)

// console.log(400 % 365)

// Output
// console.log(years, " years,", months, " months,", days, " days")

// case 2 : mencari selisih tanggalan
let firstDate = "2022-01-20"
let secondDate = "2022-01-22"

let firstDateSplitted = firstDate.split("-")
let secondDateSplitted = secondDate.split("-")

// -- cara 1 untuk case 2

// let firstTotalDays = (firstDateSplitted[0] * 1 * 365) + (firstDateSplitted[1] * 1 * 30) + (firstDateSplitted[2] * 1)
// let secondTotalDays = (secondDateSplitted[0] * 1 * 365) + (secondDateSplitted[1] * 1 * 30) + (secondDateSplitted[2] * 1)

// console.log(firstTotalDays)
// console.log(secondTotalDays)

// console.log(firstDateSplitted)
// console.log(secondDateSplitted)

// -- cara 2 untuk case 2

let firstDateConverted = firstDateSplitted[2]
let secondDateConverted = secondDateSplitted[2]

console.log(secondDateConverted - firstDateConverted)

