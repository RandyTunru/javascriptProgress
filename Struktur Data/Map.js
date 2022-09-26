/*
    Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map 
    memperbolehkan key dengan tipe data apa pun
*/

const myMap = new Map(); //Cara untuk mendeklarasikan suatu map

//Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi

const myMap1 = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

//kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). 

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));

//Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().

capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

//Untuk mengecheck apakah suatu key ada dalam map gunakan metode has().

console.log(capital.has("Jakarta"));
console.log(capital.has("Kuala Lumpur"));

//Untuk menghapus suatu key-value pair, gunakan metode delete().

capital.delete("Tokyo") //return True jika key ada dan terhapus, return False jika tidak ditemukan
console.log(capital)