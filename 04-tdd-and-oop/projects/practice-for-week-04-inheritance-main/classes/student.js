const Person = require("./person");

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, major, gpa) {
    super(firstName, lastName, age);
    this.major = major;
    this.gpa = gpa;
  }

  static compareGPA(student1, student2) {
    if (student1.gpa > student2.gpa) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student1.gpa < student2.gpa) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA.";
    }
  }
}

// Example usage:
const student1 = new Student("Alice", "Johnson", 20, "Computer Science", 3.8);
const student2 = new Student("Bob", "Smith", 22, "Mathematics", 3.9);

console.log(Student.compareGPA(student1, student2));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
