//Destructuring functions

//?destructuring return functions pada array
// function kalkulasi(a, b) {
//     return [a + b, a * b, a - b, a / b];
// }

// sebelum destructuring functions
// const jumlah = kalkulasi(2, 3)[0];
// const kali = kalkulasi(2, 3)[1];
// const kurang = kalkulasi(2, 3)[2];
// const bagi = kalkulasi(2, 3)[3];

// setelah destructuring functions
// const [jumlah, kali, kurang, bagi] = kalkulasi(2, 3);





//? destructuring return functions pada object
// function kalkulasi(a, b) {
//     return {
//         jumlah: a + b,
//         kali: a * b,
//         kurang: a - b,
//         bagi: a / b,
//     };
// }

//setelah destructuring functions
// const {
//     bagi,
//     jumlah,
//     kurang,
//     kali
// } = kalkulasi(2, 3)





//? destruction functions argument -> akan sangat terpakai  apabila object nya kompleks
const mhs1 = {
    nama: 'ardy',
    nim: 181011450168,
    umur: 23,
    alamat: {
        kota: 'Tangerang Selatan',
        kelurahan: 'rempoa'
    }
}

//sebelum desturing functions arguments
// function dataMhs(mhs) {
//     return `Halo nama saya ${mhs.nama}, dengan nim ${mhs.nim} dan umur ${mhs.umur}. saya tinggali di kota ${mhs.alamat.kota} kelurahan ${mhs.alamat.kelurahan}`
// }

// console.log(dataMhs(mhs1));


//setelah desturing functions arguments
function dataMhs({
    nama,
    nim,
    umur,
    alamat: {
        kota,
        kelurahan
    }
}) {
    return `Halo nama saya ${nama}, dengan nim ${nim} dan umur ${umur}. saya tinggali di kota ${kota} kelurahan ${kelurahan}`
}

console.log(dataMhs(mhs1));