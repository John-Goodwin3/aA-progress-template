const Employee = require("./employee.js");
const john = new Employee("John Wick", "Dog Lover");
const sayName = john.sayName.bind(john);

setTimeout(sayName, 2000);
const sayOccupation = john.sayOccupation.bind(john);
sayOccupation(sayOccupation, 3000);
