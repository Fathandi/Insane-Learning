// ========================================
// =                                      =
// =                Part 1                =
// =                                      =
// ========================================


// ========================================
// 1. Object Literal
// ========================================

let OL_Student_1 = {
    nama: 'Rizky',
    energy: 10,
    makan: function(porsi){ 
        this.energy += porsi;
        console.log('Object Literal OL_Student_1');
        console.log(`selamat datang  ${this.nama}, selamat makan!`);
    }
}
console.log(OL_Student_1.makan());

let OL_Student_2 = {
    nama: 'Japril',
    energy: 10,
    makan: function(porsi){
        this.energy += porsi;
        console.log('Object Literal OL_Student_2');
        console.log(`selamat datang  ${this.nama}, selamat makan!`);
    }
}
console.log(OL_Student_2.makan());


// ========================================
// 2. Function Declaration
// Object.create()
// ========================================

const FD_OC_MethodMahasiswa = {
    makan: function(porsi){
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    },
    main: function(jam){
        this.energy -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    },
    tidur: function(jam){
        this.energy += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur`);
    }
};

function Declaration_Mahasiswa(nama, energy){
    let mahasiswa = Object.create(FD_OC_MethodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
    return mahasiswa;
}

let FD_OC_StudentRizky = Declaration_Mahasiswa('Rizky', 10);
let FD_OC_StudentJapril = Declaration_Mahasiswa('Japril', 20);

// Contoh Pada FD_OC_StudentRizky
FD_OC_StudentRizky.makan(2);
// Contoh Pada FD_OC_StudentJapril
FD_OC_StudentJapril.tidur(2);


// ========================================
// 3. Constructor Function
// Keyword new
// ========================================

function CF_new_Mahasiswa(nama, energy){
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi){
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }

    this.main = function(jam){
        this.energy -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }
}

let studentRizkyConstructor = new CF_new_Mahasiswa('Rizky', 10);
let studentJaprilConstructor = new CF_new_Mahasiswa('Japril', 20);


// ========================================
// 4. Prototype
// ========================================

function Prototype_Mahasiswa(nama, energy){
    this.nama = nama;
    this.energy = energy;
}

Prototype_Mahasiswa.prototype.makan = function(porsi){
    this.energy += porsi;
    return `halo ${this.nama}, selamat makan`;
}

Prototype_Mahasiswa.prototype.main = function(jam){
    this.energy -= jam;
    return `halo ${this.nama}, selamat bermain`;
}

Prototype_Mahasiswa.prototype.tidur = function(jam){
    this.energy += jam * 2;
    return `halo ${this.nama}, selamat tidur`;
}

let studentRizkyPrototype = new Prototype_Mahasiswa('Rizky', 10);
let studentJaprilPrototype = new Prototype_Mahasiswa('Japril', 20);


// ========================================
// 5. Prototype Versi Class
// ========================================

class ClassPrototype_Mahasiswa {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;
    }

    makan(porsi) {
        this.energy += porsi;
        return `halo ${this.nama}, selamat makan`;
    }

    main(jam) {
        this.energy -= jam;
        return `halo ${this.nama}, selamat bermain`;
    }

    tidur(jam) {
        this.energy += jam * 2;
        return `halo ${this.nama}, selamat tidur`;
    }
}

let studentRizkyClass = new ClassPrototype_Mahasiswa('Rizky', 10);
let studentJaprilClass = new ClassPrototype_Mahasiswa('Japril', 20);
console.log(studentRizkyClass.makan(4));
console.log(studentJaprilClass.main(3));
console.log(studentRizkyClass.tidur(4));



// ========================================
// =                                      =
// =                Part 2                =
// =                                      =
// ========================================


// ========================================
// 1. Execution Context, Hoisting, Scope
// ========================================

var studentName = 'Rizky';
console.log(studentName);

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window


// creation phase


// ========================================
// Contoh 1
// ========================================

console.log(ExecutionContextsayHello());

var studentName = 'Rizky';
var age = 20;

function ExecutionContextsayHello(){
    return `halo ${studentName} berumur ${age} tahun`;
}


// function membuat execution context
// yang di dalamnya terdapat creation phase dan execution phase
// window
// argumen
// hoisting


// ========================================
// Contoh 2
// ========================================

var fullStudentName = 'Rizky Ramadhan';
var studentUsername = '@rizkyramadhan';
function cetakURL(studentUsername){
    var url = `https://github.com/`;
    return url + studentUsername;
}

console.log(cetakURL(`@japril`));


// ========================================
// Contoh 3
// ========================================

function a(){
    console.log('ini adalah function a');
    function b(){
        console.log('ini adalah function b');
        function c(){
            console.log('ini adalah function c');
        } c();
    } b();
} a();


// ========================================
// Contoh 4
// ========================================

function satu(){
    var studentName = 'rizky';
    console.log(studentName);
}

function dua(){
    console.log(studentName);
}

console.log(studentName);
var studentName = 'japril';
satu();
dua('yudi');
console.log(studentName);



// ========================================
// =                                      =
// =                Part 3                =
// =                                      =
// ========================================


// ========================================
// Contoh 1
// ========================================

function init(){
    // let nama = 'Rizky';
    return function (nama){
        console.log(nama);
    }
}
let panggilNama = init();
panggilNama('japril');
panggilNama('rizky');
panggilNama('yudi');


// ========================================
// Contoh 2
// ========================================

function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Halo ${nama}, selamat ${waktu}`);
    }
}
let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

selamatPagi('Rizky');
selamatSiang('Japril');
selamatMalam('Yudi');
console.dir(selamatMalam);


// ========================================
// Contoh 3
// ========================================

let add = (function(){
    let addCounter = 0;
    return function(){
        return ++addCounter;
    } 
})();
addCounter = 100; // Tidak mempengaruhi closure
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());



// ========================================
// =                                      =
// =                Part 4                =
// =                                      =
// ========================================


// Function Expression
const tampilNama = function(nama, waktu){
    return `${waktu}, nama saya adalah ${nama}`;
}
console.log(tampilNama('Rizky', 'Pagi'));


// Arrow Function
// Contoh 1  satu parameter 
const tampilNama2 = nama => `nama saya adalah ${nama}`;
console.log(tampilNama2('Yudi'));

// Contoh 2 dua parameter
const tampilNama3 = (nama, waktu) => {
    return `${waktu}, nama saya adalah ${nama}`;
    }
console.log(tampilNama3('Japril', 'Siang'));

// Contoh 3 implisit return
const tampilNama4 = nama => `${nama} adalah nama saya`;
console.log(tampilNama4('Rizky'));

// Contoh 4 zero parameter & implisit return
const sayHello = () => `Hello World`;
console.log(sayHello());


// Contoh 5 Function Map 
let students = ['Rizky', 'Japril', 'Yudi'];

// Function Normal
function jumlahHurufNormal(nama) {
    return nama.length;
}
let jumlahHuruf = students.map(jumlahHurufNormal);
console.log(jumlahHuruf);

// Function Exression
let jumlahHurufExpression = students.map(function(nama){
    return nama.length;
});
console.log(jumlahHurufExpression);

// Arrow Function
// let jumlahHurufArrow = students.map(nama => nama.length);
// console.log(jumlahHurufArrow);
let jumlahHurufArrow = students.map(nama => ({
    nama: nama,
    jumlah: nama.length}));
console.table(jumlahHurufArrow);



// ========================================
// =                                      =
// =                Part 5                =
// =                                      =
// ========================================


// This pada Arrow Function
// Constructor Function
const constructorPerson = function() {
    this.nama = 'Japril';
    this.umur = 33;
    this.CFhaloBang = function() {
        return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`;
    }
}
let JaprilConstructor = new constructorPerson();


// Arrow Function
const arrowPerson = function() {
    this.nama = 'Rizky';
    this.umur = '15';
    this.AFhaloBang = () => {
        return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`
    }
}
const RizkyArrow = new arrowPerson();


// Object Literal
const ObLiteralPerson = {
    nama: 'Japril',
    umur: 55,
    // OLhaloBang: () => {
    //     console.log(this);
    //     return `Hello, nama saya ${nama} dan umur saya ${umur}`
    // }
    OLhaloBang: function() {
        return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`
    }
}


// Constructor Function 2
const constructorPerson_2 = function() {
    this.nama = 'Japril';
    this.umur = 33;
    this.CFhaloBang_2 = function() {
        return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`;
    }
    setInterval( () => {
        console.log(this.umur++);
    }, 99999);
}
let JaprilConstructor_2 = new constructorPerson_2();


// Arrow Function DOM
const box = document.querySelector('.box');
box.addEventListener('click', function(){
    // let that = this;
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        console.log(this);
        this.classList.toggle(dua);
    },6000);
});



// ========================================
// =                                      =
// =                Part 6                =
// =                                      =
// ========================================



// Higher Order Function
// Contoh 1
function kerjakanTugas(mataPelajaran, selesai){
    console.log(`Saya sedang mengerjakan tugas ${mataPelajaran} ...`);
    selesai(mataPelajaran);
}

function selesai(mataPelajaran){
    console.log(`Saya sudah selesai mengerjakan tugas ${mataPelajaran}`);
}

kerjakanTugas('Matematika', selesai);
kerjakanTugas('Bahasa Indonesia', selesai);
kerjakanTugas('Bahasa Inggris', selesai);
kerjakanTugas('Fisika', selesai);


// Contoh 2
function ucapkanSelamat(HOFwaktu){
    return function (HOFnama){
        console.log(`Selamat ${HOFwaktu} ${HOFnama}!`);
    }
}

let selamatTahunBaru = ucapkanSelamat('Selamat Tahun Baru 2025');
console.dir(selamatTahunBaru('Yudi'));


// Contoh 3
let HOFtotal = 0, count = 1;
while (count <= 10){
    HOFtotal += count;
    count++;
}
console.log(`Total ${count} = ${HOFtotal}`);

// Alternatif Contoh 3
// console.log(sum(range(1, 10)));


// Contoh 4
for (let i = 0; i < 3; i++){
    console.log(i);
}

// Alternatif Contoh 4
function repeatLog(n){
    for (let i = 0; i < n; i++){
        console.log(i);
    }
}
repeatLog(3);


// Implementasi Contoh 4 Action
function repeat(j, action){
    for (let i = 0; i < j; i++){
        action(i);
    }
}
repeat(10, console.log);
repeat(3, alert);
