//! higher order function menggunakan filter, map, reduce



//* for -> mencari angka >= 3
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = [];

// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


//* filter -> mencari angka >= 3
const angka2 = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka2 = angka2.filter(value => value >= 3)

console.log(newAngka2)


//* map -> kalikan semua angka dengan 2
const angka3 = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka3 = angka3.map(value => value * 2)

console.log(newAngka3);


//* reduce -> menjumlahkan nilai yang terdapat didalam array
//* reduce((akumulasi, nilaSaatIni),nilaiAwal)
const angka5 = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka5 = angka5.reduce((akumulasi, nilaiSaatIni) => akumulasi + nilaiSaatIni, 0);

console.log(newAngka5);


//* method chaining -> mencari angka >= 5, lalu kalikan 3, dan jumlahkan nilai nya.
const angka6 = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka6 = angka6.filter(value => value >= 5).map(value => value * 3).reduce((akumulasi, nilaiSaatIni) => nilaiSaatIni + akumulasi, 0);

console.log(newAngka6);