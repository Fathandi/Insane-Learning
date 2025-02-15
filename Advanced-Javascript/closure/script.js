// function perkalian(a) {
//     return function (b) {
//         return a * b;
//     }
// }


// // perkalian basis lima
// var kaliLima = perkalian(5);
// // kaliLima(10); // 5 x 10
// console.dir(kaliLima);



// function planetCrypton() {

//     let superPower = 'yes';
//     let takutCryptonite = 'yes';

//     let superman = function () {
//         return 'superman: ' + superPower + takutCryptonite;
//     }

//     return superman;

// }

// let superman = planetCrypton();
// console.dir(superman);


// function perkalian(a) {
//     return function (b) {
//         return a * b;
//     }
// }

// let kembalian = perkalian();
// console.dir(kembalian);



// function perkalian(a) {
//     var x = 3;
//     var y = 5;

//     return function (b) {
//         return console.log(a * b * x * y);
//     }
// }

// //kali basis 7
// var kaliBebas = perkalian(7);
// kaliBebas(4);
// console.dir(kaliBebas);



// function sayName(name) {
//     var prefix = 'My Name is ';

//     return function (gelar) {
//         return prefix + name + gelar;
//     }
// }

// var agus = sayName('Agus');
// var sayAgus = agus('S.kom');

// console.dir(agus);


//! WPU

// function init() {
//     let name = 'Ardy';

//     function showName() {
//         console.log(name);
//     }
//     return showName();
// }

// init();





//* tanpa parameter
// function init() {
//     let name = 'Ardy';

//     function showName() {
//         console.log(name);
//     }
//     return showName;
// }

// let callName = init(); //->
// callName(); // ->

// //* atau bisa juga seperti ini
// // init()();





//* dengan parameter
// function init() {
//     function showName(name) {
//         console.log(name);
//     }
//     return showName;
// }

//* atau bisa juga seperti ini
// function init() {
//     return function (name) {
//         console.log(name);
//     }
// }

// let callName = init();
// callName('ardywirasaputra');

//* atau bisa juga seperti ini
// init()('ardywirasaputra');





//* function factory
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Hallo ${nama}, selamat ${waktu}!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Ardy');
// selamatSiang('Cici');
// selamatMalam('Putra');

//* atau bisa juga seperti ini
// ucapkanSalam('Pagi')('Cici');
// ucapkanSalam('Siang')('Putra');
// ucapkanSalam('Malam')('Ardy');





//* private methods
// let add = function () {
//     let counter = 0;
//     return function () {
//         return console.log(++counter);
//     }
// };

// counter = 100; //! tidak mempengaruhi

// let a = add();
// a();
// a();
// a();

//* atau bisa juga seperti ini
let add = (function () {
    let counter = 0;
    return function () {
        return console.log(++counter);
    }
})();

counter = 100; //! tidak mempengaruhi

add();
add();
add();






// const button = document.querySelector('button');

// button.addEventListener('click', (function () {
//     let counter = 0;
//     return function () {
//         console.log(++counter);
//     }
// })())







//! Scooping and closure

for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(`The number is ${i}`);
    }, 1000);
}


// for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(`The number is ${i}`);
//     }, 1000);
// }