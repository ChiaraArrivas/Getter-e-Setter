class Person {

  #firstName = "";
  #lastName = "";
  #age = 0;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    if (typeof (age) === "number") {
      this.#age = age;
    } else {
      this.#age = Number(age)
    }
  }
  set firstName(newFirstName) {
    this.#firstName = newFirstName;
  }
  get firstName() {
    return this.#firstName;
  }

  set lastName(newlastName) {
    this.#lastName = newlastName;
  }
  get lastName() {
    return this.#lastName
  }

  set age(newAge) {
    this.#age = newAge;
  }
  get age() {
    return this.#age
  }

  get fullName() {
    return this.#firstName + " " + this.#lastName
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);