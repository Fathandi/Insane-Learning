# JavaScript Fundamentals

Repository ini berisi contoh dan penjelasan tentang konsep dasar JavaScript, termasuk object literal, deklarasi fungsi, fungsi konstruktor, prototype, konteks eksekusi, hoisting, scope, closure, dan fungsi panah.

## **Part 1: Object-Oriented Programming in JavaScript**

### **1. Object Literal**
- Objek dibuat menggunakan sintaks object literal.
- Contoh:
  ```javascript
  let student1 = {
      nama: 'Rizky',
      energy: 10,
      makan: function(porsi){ /* ... */ }
  }
  ```

### **2. Function Declaration with `Object.create()`**
- Objek dibuat menggunakan deklarasi fungsi dan `Object.create()` untuk mewarisi metode.
- Contoh:
  ```javascript
  const methodMahasiswa = {
      makan: function(porsi){ /* ... */ },
      main: function(jam){ /* ... */ },
      tidur: function(jam){ /* ... */ }
  };

  function Declaration_Mahasiswa(nama, energy){
      let mahasiswa = Object.create(methodMahasiswa);
      mahasiswa.nama = nama;
      mahasiswa.energy = energy;
      return mahasiswa;
  }
  ```

### **3. Constructor Function**
- Objek dibuat menggunakan kata kunci `new` dengan fungsi konstruktor.
- Contoh:
  ```javascript
  function Constructor_Mahasiswa(nama, energy){
      this.nama = nama;
      this.energy = energy;
      this.makan = function(porsi){ /* ... */ };
      this.main = function(jam){ /* ... */ };
  }
  ```

### **4. Prototype**
- Metode ditambahkan ke prototype fungsi konstruktor.
- Contoh:
  ```javascript
  function Prototype_Mahasiswa(nama, energy){
      this.nama = nama;
      this.energy = energy;
  }

  Prototype_Mahasiswa.prototype.makan = function(porsi){ /* ... */ };
  Prototype_Mahasiswa.prototype.main = function(jam){ /* ... */ };
  ```

### **5. Prototype with Class Syntax**
- Sintaks kelas ES6 digunakan untuk mendefinisikan kelas dengan metode.
- Contoh:
  ```javascript
  class ClassPrototype_Mahasiswa {
      constructor(nama, energy) {
          this.nama = nama;
          this.energy = energy;
      }

      makan(porsi) { /* ... */ }
      main(jam) { /* ... */ }
      tidur(jam) { /* ... */ }
  }
  ```

---

## **Part 2: Execution Context, Hoisting, and Scope**

### **1. Execution Context**
- Kode JavaScript dijalankan dalam dua fase: **fase pembuatan** dan **fase eksekusi**.
- Contoh:
  ```javascript
  var studentName = 'Rizky';
  console.log(studentName);
  ```

### **2. Hoisting**
- Variabel dan fungsi diangkat ke atas scope.
- Contoh:
  ```javascript
  console.log(ExecutionContextsayHello());
  function ExecutionContextsayHello(){ /* ... */ }
  ```

### **3. Scope**
- Variabel memiliki scope fungsi atau scope blok tergantung pada cara deklarasi.
- Contoh:
  ```javascript
  function satu(){
      var studentName = 'rizky';
      console.log(studentName);
  }
  function dua(){
      console.log(studentName);
  }
  ```

---

## **Part 3: Closure**

### **1. Basic Closure**
- Fungsi di dalam fungsi lain yang mempertahankan akses ke variabel fungsi luar.
- Contoh:
  ```javascript
  function init(){
      return function (nama){
          console.log(nama);
      }
  }
  let panggilNama = init();
  panggilNama('japril');
  ```

### **2. Closure dengan Parameter**
- Contoh:
  ```javascript
  function ucapkanSalam(waktu){
      return function(nama){
          console.log(`Halo ${nama}, selamat ${waktu}`);
      }
  }
  let selamatPagi = ucapkanSalam('Pagi');
  selamatPagi('Rizky');
  ```

### **3. Closure dengan Penghitung**
- Contoh:
  ```javascript
  let add = (function(){
      let addCounter = 0;
      return function(){
          return ++addCounter;
      } 
  })();
  console.log(add());
  ```

---

## **Part 4: Arrow Functions**

### **1. Basic Arrow Function**
- Contoh:
  ```javascript
  const tampilNama ```javascript
  = nama => `nama saya adalah ${nama}`;
  console.log(tampilNama('Yudi'));
  ```

### **2. Arrow Function dengan Beberapa Parameter**
- Contoh:
  ```javascript
  const tampilNama3 = (nama, waktu) => {
      return `${waktu}, nama saya adalah ${nama}`;
  }
  console.log(tampilNama3('Japril', 'Siang'));
  ```

### **3. Implicit Return**
- Contoh:
  ```javascript
  const tampilNama4 = nama => `${nama} adalah nama saya`;
  console.log(tampilNama4('Rizky'));
  ```

### **4. Arrow Function Tanpa Parameter**
- Contoh:
  ```javascript
  const sayHello = () => `Hello World`;
  console.log(sayHello());
  ```

### **5. Menggunakan Arrow Function dengan `map`**
- Contoh:
  ```javascript
  let students = ['Rizky', 'Japril', 'Yudi'];
  let jumlahHurufArrow = students.map(nama => ({
      nama: nama,
      jumlah: nama.length
  }));
  console.table(jumlahHurufArrow);
  ```

---

## **Part 5: The `this` Keyword in JavaScript**

### **1. `this` dalam Fungsi Konstruktor**
- Contoh:
  ```javascript
  const constructorPerson = function() {
      this.nama = 'Japril';
      this.umur = 33;
      this.CFhaloBang = function() {
          return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`;
      }
  }
  let JaprilConstructor = new constructorPerson();
  ```

### **2. `this` dalam Arrow Function**
- Contoh:
  ```javascript
  const arrowPerson = function() {
      this.nama = 'Rizky';
      this.umur = '15';
      this.AFhaloBang = () => {
          return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`;
      }
  }
  const RizkyArrow = new arrowPerson();
  ```

### **3. `this` dalam Literal Objek**
- Contoh:
  ```javascript
  const ObLiteralPerson = {
      nama: 'Japril',
      umur: 55,
      OLhaloBang: function() {
          return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`;
      }
  }
  ```

### **4. `this` dalam SetInterval dengan Arrow Function**
- Contoh:
  ```javascript
  const constructorPerson_2 = function() {
      this.nama = 'Japril';
      this.umur = 33;
      this.CFhaloBang_2 = function() {
          return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`;
      }
      setInterval(() => {
          console.log(this.umur++);
      }, 99999);
  }
  let JaprilConstructor_2 = new constructorPerson_2();
  ```

### **5. `this` dalam Event Listeners**
- Contoh:
  ```javascript
  const box = document.querySelector('.box');
  box.addEventListener('click', function(){
      let satu = 'size';
      let dua = 'caption';
      if(this.classList.contains(satu)){
          [satu, dua] = [dua, satu];
      }
      this.classList.toggle(satu);
      setTimeout(() => {
          console.log(this);
          this.classList.toggle(dua);
      }, 6000);
  });
  ```

---

## **Part 6: Higher Order Functions**

### **1. Contoh Higher Order Function**
- Contoh:
  ```javascript
  function kerjakanTugas(mataPelajaran, selesai){
      console.log(`Saya sedang mengerjakan tugas ${mataPelajaran} ...`);
      selesai(mataPelajaran);
  }

  function selesai(mataPelajaran){
      console.log(`Saya sudah selesai mengerjakan tugas ${mataPelajaran}`);
  }

  kerjakanTugas('Matematika', selesai);
  ```

### **2. Higher Order Function dengan Closure**
- Contoh:
  ```javascript
  function ucapkanSelamat(HOFwaktu){
      return function (HOFnama){
          console.log(`Selamat ${HOFwaktu} ${HOFnama}!`);
      }
  }
  let selamatTahunBaru = ucapkanSelamat('Selamat Tahun Baru 2025');
  selamatTahunBaru('Yudi');
  ```

### **3. Menghitung Total dengan Loop**
- Contoh:
  ```javascript
  let HOFtotal = 0, count = 1;
  while (count <= 10){
      HOFtotal += count;
      count++;
  }
  console.log(`Total ${count} = ${HOFtotal}`);
  ```

### **4. Menggunakan Fungsi untuk Mengulang Log**
- Contoh:
  ```javascript
  function repeatLog(n){
      for (let i = 0; i < n; i++){
          console.log(i);
      }
  }
  repeatLog(3);
  ```

### **5. Implementasi Contoh 4 Action**
- Contoh:
  ```javascript
  function repeat(j, action){
      for (let i = 0; i < j; i++){
          action(i);
      }
  }
  repeat(10, console.log);
  repeat(3, alert);
  ```

---
