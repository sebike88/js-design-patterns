class Person {
  constructor(name) {
    this.name = name;
    this.canTalk = true;
  }

  greet() {
    if (this.canTalk) {
      console.log(`Hi, i am ${this.name}`);
    }
  }
}


//subclass(or child) of Person
// Employee extends same as Employee.prototype = Object.create(Person.prototype);
class Employee extends Person {
  constructor(name, title) {
    super(name) // same as Person.call(this, name);
    this.title = title;
  }

  greet() {
    if (this.canTalk) {
      console.log(`Hi, i am ${this.name}, the ${this.title}`);
    }
  }
}

///same as employee
class Customer extends Person {
  constructor(name) {
    super(name)
  }
}

class Mime extends Person {
  constructor(name) {
    super(name);
    this.canTalk = false
  }
}

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();
//