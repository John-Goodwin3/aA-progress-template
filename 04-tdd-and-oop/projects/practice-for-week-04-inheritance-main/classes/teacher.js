const Person = require("./person");

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, subject, yearsOfExperience) {
    super(firstName, lastName, age);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    return teachers.reduce(
      (total, teacher) => (total += teacher.yearsOfExperience),
      0
    );
  }
}

const teacher1 = new Teacher("John", "Doe", 40, "Mathematics", 15);
const teacher2 = new Teacher("Jane", "Smith", 35, "Science", 10);
const teacher3 = new Teacher("Emily", "Johnson", 50, "History", 20);

const teachers = [teacher1, teacher2, teacher3];

console.log(Teacher.combinedYearsOfExperience(teachers)); // Output: 45

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
