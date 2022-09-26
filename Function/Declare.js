// Fungsi dalam pemrograman juga digunakan untuk menghasilkan output berdasarkan input tertentu.

/*
    Fungsi dideklarasikan dengan keyword function dan nama fungsinya. Nama fungsi selalu diikuti dengan tanda kurung (parentheses) 
    tanpa spasi, lalu terdapat sepasang kurung kurawal yang berisi logika
*/

// Parameter merupakan data yang digunakan pada fungsi untuk diproses di dalamnya.

// Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikuti dengan nilai yang akan dikembalikan

function multiply(a, b) {
    return a * b;
}

let var1 = multiply(20, 10)

console.log(var1)

// Cara lain mendeklarasikan function

const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Randy', 'French'))

/*  
    Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. 
    Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.
*/

//  Ketika argumen lebih sedikit dari parameternya, maka parameter yang tidak terdefinisi akan bernilai undefined.

let exponentsFormula = function (baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);

/*
    Sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada parameter. 
    Nilai ini akan digunakan jika kita tidak memasukkan parameter.
*/

exponentsFormula = function (baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

// Rest parameter ini adalah kebalikan dari spread operator, Rest parameter juga dituliskan menggunakan three consecutive dots (...). 
// Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array.

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

/*
    ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai arrow function. Arrow function mirip 
    seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan 
    menggunakan tanda panah atau fat arrow ( => ).
*/

//  Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi.

const sayHello = (greet) => {
    console.log(`${greet}!`)
}

sayHello('Halo')

// Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung

const sayName = name => {
    console.log(`Nama saya ${name}`)
}

sayName("Leia");

// Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong

const sayPagi = () => {
    console.log("Selamat pagi semuanya!")
};

sayPagi();

//  Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal.

const sayMalam = () => console.log("Selamat malam semuanya!")

sayMalam();

// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).

multiply = (a, b) => a * b;

console.log(multiply(3, 4));
