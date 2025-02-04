// -- var : strict level 1

// --------- contoh 1
function testVar() {
    if (true) {
        var message = "Hello from var"
    }
    console.log(message) // -> bisa diakses meskipun dideklarasikan di dalam blok if
}
// testVar()

// --------- contoh 2
var x = 20;
var x = 10;
// console.log(x)

// -- let : strict level 2

// -------- contoh 1
function testLet() {
    if (true) {
        let message = "Hello from let"
    }
    // console.log(message) // -> muncul error, karena message undefined
}

// -------- contoh 2
let a = 20;
a = 10; // -> bisa diubah nilainya (tidak boleh dibuatkan variabel lain dengan nama yang sama)
// console.log(a)

// -- const : strict level 3

// -------- contoh 1
const PI = 3.14;
// PI = 3.14159 // -> tidak bisa diupdate
// const PI = 3.14159 // -> tidak bisa diredeclare

// -------- contoh 2
function testConst() {
    if (true) {
        const message = "Hello from const"
    }
    // console.log(message) // -> tidak terdefinisi
}