/*
    Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan 
    array menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada 
    penamaan propertinya.
*/

let favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/*
    Sebenarnya kita bebas untuk menentukan nama dari variabel lokal. Yang terpenting adalah urutan ketika deklarasi variabelnya 
    saja. Kita juga bisa memilih nilai pada index tertentu untuk destrukturisasi pada array. Contohnya, jika ingin mengambil 
    nilai ketiga dari array, kita tidak perlu menyiapkan variabel lokal untuk menampung nilai array pertama, kedua, atau pun 
    keempat.
*/
 
const [, , thirdElement ] = favorites;
 
console.log(thirdElement);

/* 
    Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya 
    dengan tanda kurung.
*/

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);

/*
    Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array, 
    maka variabel tersebut akan bernilai undefined
*/

favorites = ["Seafood"];
[myFood, herFood] = favorites

console.log(myFood);
console.log(herFood);

//Pada destructuring array kita juga dapat memberikan nilai default pada variabel yang tidak dapat terjangkau oleh array

[myFood, herFood = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);
