//* Destructuring variables/assignments



//! Destructuring array
const perkenalan = ['halo', 'nama', 'saya', 'Ardy'];

//? seteleh destructuring
// const [salam, satu, dua, nama] = perkenalan


//? skipping items
const [indexsalam, , , indexnama] = perkenalan


//?swap items
let a = 1;
let b = 2;

[a, b] = [b, a];


//? returns value pada funtion
function coba() {
    return [1, 2];
}

const [x, y] = coba();


//?  rest parameter -> mengembalikan array baru berisi sejumlah nilai array yg di rest
const angka = [1, 2, 3, 4, 5];
const [c, ...values] = angka;





//! Destructuring object
// const user = {
//     nama: 'John Doe',
//     umur: 25,
// }


//? setelah destructuring
// const {
//     nama,
//     umur
// } = user


//? Assigment tanpa deklrasi object
// ({
//     nama,
//     umur
// } = {
//     nama: 'John Doe',
//     umur: 25
// })


//? Assign ke variabel baru
// const user = {
//     nama: 'John Doe',
//     umur: 25
// }

// const {
//     nama: n,
//     umur: u
// } = user


//? memberikan nilai default pada properti
// const user = {
//     nama: 'John Doe',
//     umur: 25
// }

// const {
//     nama,
//     umur,
//     email = 'email@default.com'
// } = user


//? memberikan nilai default pada properti + assign ke variabel baru
// const user = {
//     nama: 'John Doe',
//     umur: 25
// }

// const {
//     nama: n,
//     umur: u,
//     email: e = 'email@default.com'
// } = user


//? rest parameter -> mengembalikan object baru berisi sejumlah nilai properti yg di rest
// const user = {
//     nama: 'John Doe',
//     umur: 25,
//     email: 'email@default.com'
// }

// const {
//     nama,
//     ...value
// } = user


//? mengambil field pada object, setelah dikirim sebagai parameter untuk function
const user = {
    id: 123,
    nama: 'John Doe',
    umur: 25,
    email: 'email@default.com'
}

//sebelum destructuring
// function getId(user) {
//     return user.id;
// }

// setelah destructuring -> mengembalikan object baru berisi sejumlah nilai pada return
function getId({
    id
}) {
    return id
}


console.log(getId(user));