// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
console.log(angka);

// For
// Mencari angka >= 3
const newAngka = [];
for (let i = 0; i < angka.length; i++){
    if(angka[i] >= 3){
        newAngka.push(angka[i]);
    }
}

console.log(newAngka);


// Filter
const newNumber = angka.filter(function(a){
    return a >= 3;
});

console.log(newNumber);


// Map
// Kalikan semua angka dengan 2
const xNumber = angka.map(a => a * 2);
console.log(xNumber);


// Reduce
// Mencari total angka
const addAngka = angka.reduce((accumulator, currentValue) => 
accumulator + currentValue, 0);
console.log(addAngka);


// Method Chaining
// Cari angka > 5
// Kalikan angka dengan 3
// Mencari total angka
const hasil = angka.filter(a => a > 5)
.map(a => a * 3)
.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(hasil);