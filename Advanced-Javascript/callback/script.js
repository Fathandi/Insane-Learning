//! simulasi callback asynchronous menggunakan setTimeout
// const getCake = callback => {
//     let cake = null;
//     console.log('Sedang membuat kue, silakan tunggu ....');

//     setTimeout(() => {
//         cake = 'Kue Selesai!';
//         callback(cake);
//     }, 3000);
// };

// getCake(cake => console.log(cake));


//! callback synchronous
//? function halo(nama) {
//     alert(`halo, nama saya ${nama}`);
// }

// function tampilkanNama(callback) {
//     let name = prompt('Masukkan nama saya');
//     callback(name);
// }

//? tampilkanNama(halo);

// tampilkanNama(nama => alert(`nama saya ${nama}`));


//! callback asynchronous

//? tanpa asynchronous callback ketika ada pengambilan data yang membutuhkan waktu maka kode dibawahnya harus menunggu sampai waktu yg berjalan selesai
// const mhs = [{
//         "nama": "Ardy Wirasaputra",
//         "nim": "181011450168",
//         "email": "ardywirasaputra@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Cici Awalia",
//         "nim": "181011450123",
//         "email": "ciciawalia@gmail.com",
//         "jurusan": "Teknik Industri",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Zahra Devita",
//         "nim": "181011450321",
//         "email": "zahradevita@gmail.com",
//         "jurusan": "Teknik Mesin",
//         "idDosenWali": 1
//     }
// ]

// console.log("mulai");
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nim)
// })
// console.log("selesai");



//? dengan asynchronous maka kode yg dibawahnya tidak perlu menunggu waktu yg berjalan

// console.log("mulai");

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error()
//             }
//         }
//     }

//     xhr.open("get", url);
//     xhr.send();
// }

// getDataMahasiswa("./data/mahasiswa.json", results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, (e) => {
//     console.log(e.responseText)
// });
// console.log("selesai");


//? asynchronous callback dengan JQuery

console.log("mulai");

$.ajax({
    url: "./data/mahasiswa.json",
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama))
    },
    error: (e) => {
        console.log(e.responseText);
    }
})

console.log("selesai");