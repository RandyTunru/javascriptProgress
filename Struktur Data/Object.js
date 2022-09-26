/*
    Object berisi pasangan key dan value, Key harus berupa string dan dituliskan sebelum titik dua (:), 
    lalu diikuti dengan value-nya, Meskipun key merupakan string, kita tidak perlu menuliskan tanda petik 
    kecuali ada karakter khusus seperti spasi.
*/

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};

/*
    Untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik dan 
    diikuti nama propertinya 
*/
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

/*  Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya maka kita perlu menggunakan bracket */

console.log(`Saya berasal dari ${user["home world"]}`);

/*  Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=). */

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

/*  
    Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, maka nilai di dalamnya 
    akan tergantikan dengan nilai yang baru. Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, maka 
    property baru akan ditambahkan ke object. 
*/

spaceship.class = "Light freighter";

console.log(spaceship);

/*  Kita juga dapat menghapus property pada object menggunakan keyword delete */

delete spaceship.manufacturer;

console.log(spaceship);