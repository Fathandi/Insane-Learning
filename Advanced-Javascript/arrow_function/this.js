//! arrow function tidak memiliki konsep this, artinya arrow function mengabaikan/,melewati this dan akan mencari ke lexical scope

//? bisa karena arrow function mengabaikan this dan akhirnya nya mengacu pada lexical scope Mahasiswa karena terdapat this 
// const Mahasiswa = function () {
//     this.nama = 'Ardy';
//     this.nim = '123456789';
//     this.sayHello = () => {
//         console.log(`Hello nama saya ${this.nama}, dengan nim ${this.nim}`);
//         // console.log(this);
//     }
// }

// const Ardy = new Mahasiswa();
// Ardy.sayHello();



//? tidak bisa karena arrow function mengabaikan this dan akhirnya mengacu pada object window
// const mahasiswa = {
//     nama: 'Ardy',
//     nim: '123456789',
//     sayHello: () => {
//         console.log(`Hello nama saya ${this.nama}, dengan nim ${this.nim}`);
//         // console.log(this);
//     }
// }

// mahasiswa.sayHello();





// const Mahasiswa = function () {
//     this.nama = 'Ardy';
//     this.nim = '123456789';
//     this.sayHello = function () {
//         console.log(`Hello nama saya ${this.nama}, dengan nim ${this.nim}`);
//         // console.log(this);
//     }

//     //? tidak bisa karena this menggunakan declaration function mengacu pada object window
//     // setInterval(function () {
//     //     console.log(this.nim++);
//     //     console.log(this);
//     // }, 1000)

//     //? bisa karena this menggunakan arrow function mengabaikan this dan ahirnya mengacu pada lexical scope Mahasiswa karena terdapat this
//     setInterval(() => {
//         console.log(this.nim++);
//         // console.log(this);
//     }, 1000)
// }

// const Ardy = new Mahasiswa();