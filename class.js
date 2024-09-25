class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("Alice", 25);
  person1.greet(); // Output: Hi, I'm Alice, 25 years old.
  