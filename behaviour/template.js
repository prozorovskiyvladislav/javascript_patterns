class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  responsibilities() {

  }
  work() {
    return `${this.name} do ${this.responsibilities()} `
  }
  getPaid() {
    return `${this.name} earn ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  responsibilities() {
    return `Creating programms...`
  }
}
class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  responsibilities() {
    return `Testing programms...`
  }
}

const developer = new Developer("Vladislav", 1000);
console.log(developer.getPaid())
console.log(developer.work())
const tester = new Tester("Anna", 1001)
console.log(tester.getPaid())
console.log(tester.work())