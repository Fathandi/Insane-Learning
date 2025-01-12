# JavaScript Fundamentals

This repository contains examples and explanations of fundamental JavaScript concepts, including object literals, function declarations, constructor functions, prototypes, execution context, hoisting, scope, closures, and arrow functions.

## Table of Contents

1. [Part 1: Object-Oriented Programming](#part-1-object-oriented-programming)
2. [Part 2: Execution Context, Hoisting, and Scope](#part-2-execution-context-hoisting-and-scope)
3. [Part 3: Closures](#part-3-closures)
4. [Part 4: Arrow Functions](#part-4-arrow-functions)
5. [Part 5: `this` Keyword in Arrow Functions](#part-5-this-keyword-in-arrow-functions)

---

## Part 1: Object-Oriented Programming

### 1. Object Literal
- Demonstrates how to create objects using object literals.
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
