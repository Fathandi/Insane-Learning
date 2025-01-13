# JavaScript Fundamentals

This repository contains examples and explanations of fundamental JavaScript concepts, including object literals, function declarations, constructor functions, prototypes, execution context, hoisting, scope, closures, and arrow functions.

## **Part 1: Object-Oriented Programming in JavaScript**

### **1. Object Literal**
- Objects are created using the object literal syntax.
- Example:
  ```javascript
  let student1 = {
      nama: 'Rizky',
      energy: 10,
      makan: function(porsi){ 
          this.energy += porsi;
          console.log(`selamat datang  ${this.nama}, selamat makan!`);
      }
  }
  ```

### **2. Function Declaration with `Object.create()`**
- Objects are created using a function declaration and `Object.create()` to inherit methods.
- Example:
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
- Objects are created using the `new` keyword with a constructor function.
- Example:
  ```javascript
  function Constructor_Mahasiswa(nama, energy){
      this.nama = nama;
      this.energy = energy;
      this.makan = function(porsi){ /* ... */ };
      this.main = function(jam){ /* ... */ };
  }
  ```

### **4. Prototype**
- Methods are added to the prototype of a constructor function.
- Example:
  ```javascript
  function Prototype_Mahasiswa(nama, energy){
      this.nama = nama;
      this.energy = energy;
  }

  Prototype_Mahasiswa.prototype.makan = function(porsi){ /* ... */ };
  Prototype_Mahasiswa.prototype.main = function(jam){ /* ... */ };
  ```

### **5. Prototype with Class Syntax**
- ES6 class syntax is used to define a class with methods.
- Example:
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
- JavaScript code is executed in two phases: **creation phase** and **execution phase**.
- Example:
  ```javascript
  var studentName = 'Rizky';
  console.log(studentName);
  ```

### **2. Hoisting**
- Variables and functions are hoisted to the top of their scope.
- Example:
  ```javascript
  console.log(ExecutionContextsayHello());
  function ExecutionContextsayHello(){ /* ... */ }
  ```

### **3. Scope**
- Variables have function scope or block scope depending on how they are declared.
- Example:
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

## **Part 3: Closures**

### **1. Basic Closure**
- A function inside another function that retains access to the outer function's variables.
- Example:
  ```javascript
  function init(){
      return function (nama){
          console.log(nama);
      }
  }
  let panggilNama = init();
  panggilNama('japril');
  ```

### **2. Closure with Parameters**
- Example:
  ```javascript
  function ucapkanSalam(waktu){
      return function(nama){
          console.log(`Halo ${nama}, selamat ${waktu}`);
      }
  }
  let selamatPagi = ucapkanSalam('Pagi');
  selamatPagi('Rizky');
  ```

### **3. Closure with Counter**
- Example:
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
- Example:
  ```javascript
  const tampilNama2 = nama => `nama saya adalah ${nama}`;
  ```

### **2. Arrow Function with Multiple Parameters**
- Example:
  ```javascript
  const tampilNama3 = (nama, waktu) => {
      return `${waktu}, nama saya adalah ${nama}` };
  ```

### **3. Implicit Return**
- Example:
  ```javascript
  const tampilNama4 = nama => `${nama} adalah nama saya`;
  ```

### **4. Arrow Function with No Parameters**
- Example:
  ```javascript
  const sayHello = () => `Hello World`;
  ```

### **5. Using Arrow Functions with `map`**
- Example:
  ```javascript
  let students = ['Rizky', 'Japril', 'Yudi'];
  let jumlahHurufArrow = students.map(nama => ({
      nama: nama,
      jumlah: nama.length
  }));
  ```

---

## **Part 5: `this` Keyword in JavaScript**

### **1. `this` in Constructor Functions**
- Example:
  ```javascript
  const constructorPerson = function() {
      this.nama = 'Japril';
      this.umur = 33;
      this.CFhaloBang = function() {
          return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`;
      }
  }
  ```

### **2. `this` in Arrow Functions**
- Example:
  ```javascript
  const arrowPerson = function() {
      this.nama = 'Rizky';
      this.umur = '15';
      this.AFhaloBang = () => {
          return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`;
      }
  }
  ```

### **3. `this` in Object Literals**
- Example:
  ```javascript
  const ObLiteralPerson = {
      nama: 'Japril',
      umur: 55,
      OLhaloBang: function() {
          return `Hello, nama saya ${this.nama} dan umur saya ${this.umur}`;
      }
  }
  ```

### **4. `this` in SetInterval with Arrow Function**
- Example:
  ```javascript
  const constructorPerson_2 = function() {
      this.nama = 'Japril';
      this.umur = 33;
      setInterval(() => {
          console.log(this.umur++);
      }, 500);
  }
  ```

### **5. `this` in Event Listeners**
- Example:
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
          this.classList.toggle(dua);
      }, 6000);
  });
  ```

---

## **Conclusion**

This repository serves as a comprehensive guide to understanding JavaScript fundamentals, focusing on object-oriented programming, execution context, closures, arrow functions, and the `this` keyword. Each section provides examples to illustrate the concepts effectively.
