class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw new Error("introducePeople only takes an array as an argument.");
    }

    for (let person of people) {
      if (!(person instanceof Person)) {
        throw new Error("All items in array must be Person class instances.");
      }
    }

    people.forEach(person => person.introduce());
  }
}

// Example usage:
try {
  const person1 = new Person("John", "Doe", 25);
  const person2 = new Person("Jane", "Smith", 30);
  
  Person.introducePeople([person1, person2]);
} catch (error) {
  console.error(error.message);
}

try {
  Person.introducePeople("Not an array"); // throw an error
} catch (error) {
  console.error(error.message);
}

try {
  Person.introducePeople([person1, "Not a Person instance"]); //  throw an error
} catch (error) {
  console.error(error.message);
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}