// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel 

let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* 
    Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. 
    Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan 
    posisi nilai yang ingin diakses.
*/

console.log(myArray[1]);

/* Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined */

console.log("Panjang nilai myArray adalah " + myArray.length + ".");
console.log(myArray[5]);

/* 
    Untuk menambahkan data ke dalam array, kita bisa menggunakan metode push(). 
    Fungsi push ini akan menambahkan data di akhir array.
*/

myArray.push('JavaScript');
console.log(myArray);

// Untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().

myArray.pop();
console.log(myArray);

// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array 

myArray.shift();
console.log(myArray);

// Metode unshift() digunakan untuk menambahkan elemen di awal array. 

myArray.unshift("Apple");
console.log(myArray);

// Untuk menghapus elemen pada index tertentu, gunakan metode splice()

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);