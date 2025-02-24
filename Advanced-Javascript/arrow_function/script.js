//! Arrow functions -> bentuk lain yg lebih ringkas dari function expressions

//* function expressions
// const sayHello = function () {
//     console.log('Hello');
// };

// sayHello();



//* arrow functions tanpa parameter
// const sayHello = () => {
//     return console.log('Hello');
// }

//? jika hanya 1 baris blok kode bisa gunakan implisit return
// const sayHello = () => console.log('Hello');

// sayHello();



//* arrow functions dengan 1 parameter
// const sayHello = (name) => {
//     return console.log(`Hello ${name}`);
// }

//? jika hanya 1 parameter bisa tulis parameter tanpa kurung buka dan tutup
// const sayHello = name => {
//     return console.log(`Hello ${name}`);
// }
//? jika hanya 1 baris blok kode bisa gunakan implisit return
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Fathandi');



//* arrow functions dengan 2 parameter
// const sayHello = (name, time) => {
//     return console.log(`Hello ${name}! Selamat ${time} :)`);
// }

//? jika hanya 1 baris blok kode bisa gunakan implisit return
// const sayHello = (name, time) => console.log(`Hello ${name}! Selamat ${time} :)`);

// sayHello('Ardy', 'Pagi');


//! studi kasus arrow functions dengan mapping mengembalikan array dan object

let students = ['Ardy Wirasaputra', 'Cici Awalia', 'Putra'];

//? mapping mengembalikan array
//* tanpa arrow functions
// const numberOfLetters = students.map(function (name) {
//     return name.length;
// })

//* dengan arrow functions
// const numberOfLetters = students.map(name => name.length)


//? mapping mengembalikan object
//* tanpa arrow functions
// const numberOfLetters = students.map(function (name) {
//     return {
//         name: name,
//         length: name.length,
//     }
// });

//* dengan arrow functions
const numberOfLetters = students.map(name => ({
    name: name,
    length: name.length
}))


console.log(numberOfLetters);