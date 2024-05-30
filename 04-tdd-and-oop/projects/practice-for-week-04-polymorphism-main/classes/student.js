const Person = require("./person");

class Student extends Person {
  constructor(firstName, lastName, age, major, gpa) {
    super(firstName, lastName, age);
    this.major = major;
    this.gpa = gpa;
  }

  introduce() {
    return `Hello. I am ${this.firstName} ${this.lastName}, and I study ${this.major}.`;
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

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
