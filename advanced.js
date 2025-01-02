// ========================================
// =                                      =
// =                Part 1                =
// =                                      =
// ========================================


// ========================================
// 1. Object Literal
// ========================================

let mahasiswa1 = {
    nama: 'Rizky',
    energy: 10,
    makan: function(porsi){ 
        this.energy += porsi;
        console.log(`selamat datang  ${this.nama}, selamat makan!`);
    }
}

let mahasiswa2 = {
    nama: 'Japril',
    energy: 10,
    makan: function(porsi){
        this.energy += porsi;
        console.log(`selamat datang  ${this.nama}, selamat makan!`);
    }
}


// ========================================
// 2. Function Declaration
// Object.create()
// ========================================

const methodMahasiswa = {
    makan : function(porsi){
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan`)
    },

    main : function(jam){
        this.energy -= jam;
        console.log(`halo ${this.nama}, selamat bermain`)
    },

    tidur : function(jam){
        this.energy += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur`)
    }
};
function Mahasiswa(nama, energy){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    return mahasiswa;
}

let Rizky = Mahasiswa('Rizky', 10);
let Japril = Mahasiswa('Japril', 20);


// ========================================
// 3. Constructor Function
// Keyword New
// ========================================

function Mahasiswa(nama, energy){
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi){
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan`)
    }

    this.main = function(jam){
        this.energy -= jam;
        console.log(`halo ${this.nama}, selamat bermain`)
    }
}

let Rizky = new Mahasiswa('Rizky', 10);
let Japril = new Mahasiswa('Japril', 20);



// ========================================
// 4. Prototype
// ========================================

function Mahasiswa(nama, energy){
    this.nama = nama;
    this.energy = energy;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energy += porsi;
    return `halo ${this.nama}, selamat makan`;
}

Mahasiswa.prototype.main = function(jam){
    this.energy -= jam;
    return `halo ${this.nama}, selamat bermain`;
}

Mahasiswa.prototype.tidur = function(jam){
    this.energy += jam * 2;
    return `halo ${this.nama}, selamat tidur`;
}

let Rizky = new Mahasiswa('Rizky', 10);
let Japril = new Mahasiswa('Japril', 20);



// ========================================
// 5. Prototype Versi Class
// ========================================

class Mahasiswa {
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

let Rizky = new Mahasiswa('Rizky', 10);
let Japril = new Mahasiswa('Japril', 20);
console.log(Rizky.makan(5));
console.log(Japril.main(3));
console.log(Rizky.tidur(4));



// ========================================
// =                                      =
// =                Part 2                =
// =                                      =
// ========================================


// ========================================
// 1. Execution Context, Hoisting, Scope
// ========================================

var nama = 'Rizky';
console.log(nama);

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

console.log(sayHello());

var nama = 'Rizky';
var umur = 20;

function sayHello(){
    return `halo ${nama} berumur ${umur} tahun`;
}


// function membuat execution context
// yang di dalamnya terdapat creation phase dan execution phase
// window
// argumen
// hoisting


// ========================================
// Contoh 2
// ========================================

var nama = 'Rizky Ramadhan';
var username = '@rizkyramadhan';

function cetakURL(username){
    var url = `https://github.com/`;
    return url + username;
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
    var nama = 'rizky';
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = 'japril';
satu();
dua('yudi');
console.log(nama);
