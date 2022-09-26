/* 
    Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari 
    sebuah object ke dalam satuan yang lebih kecil.
*/

// Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
let {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);


/* 
    Pastikan penamaannya sama seperti properti object-nya. Melalui nama variabel inilah nilai-nilai properti object akan dimasukkan secara otomatis. 
    Sehingga variabel firstName akan berisikan nilai profile.firstName, dst.
*/

/* 
    Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan. 
    Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya 
*/

 ({ lastName } = profile);

/* 
    Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda kurung jika variabel
    sudah dideklarasikan
*/

let { isMale = false } = profile;

/* 
    Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai 
    dari variabel tersebut menjadi undefined, Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti 
    tertentu jika tidak ditemukan. Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel
*/

//  Dalam proses destrukturisasi object kita bisa menggunakan penamaan variabel lokal yang berbeda

const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);