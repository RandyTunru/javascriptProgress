/*  
    Spread operator digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. 
    Spread operator dituliskan dengan tiga titik (...). 
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);

console.log(...favorites);

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru.

const others = ["Cake", "Pie", "Donut"];

let allFavorites = [favorites, others]; //Perintah ini akan menghasilkan array yang memiliki 2 elemen yaitu 2 array

console.log(allFavorites);

allFavorites = [...favorites, ...others]; //Sedangkan perintah ini akan menghasilkan array yang menampung seluruh elemen dari favorites dan others

// Spread operator juga bisa digunakan untuk object literals.

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj1 = { ...obj1, ...obj2 };

console.log(newObj1);

const obj2Extended = { lastName: 'Kenobi', gender: 'M' , age: 32};

const newObj2 = { ...obj1, ...obj2Extended }; 

//Jika object yang lebih kanan memiliki key yang sama dengan object sebelumnya maka akan mengganti value dari key-value pair sebelumnya

console.log(newObj2); 
