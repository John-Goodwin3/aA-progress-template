function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish("Nemo");

/********************************* Scenario 1 *********************************/
eat(); // expect: in the function eat(), 'this' keyword is referring to the global
// object, so it will print out "object [global]"

// actual: this would have printed out "object [global]", but because
// function eat() referred to this.name (same as object.name),
// undefined printed out

/********************************* Scenario 2 *********************************/
nemo.eat = eat;
nemo.eat(); // expect: this should return an error, because 'this' keyword in the eat()
// function refers to the values of global object, while the nemo
// object is an instance of Fish

// actual: Nemo printed out correctly because 'this' keyword refered
// to the value of nemo, which is an instnaceof Fish object

/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat(); // expect: 'this' is set to the global object, and since 'nemo.eat = eat'
// the nemo object !instanceof global object, it will print undefined

// actual: result as expected

/********************************* Scenario 4 *********************************/
nemo.swim(); // expect: 'this' refers to the Fish object, which is storing the
// function swim(), and since nemo is an instanceof Fish, it will
// print as expected

/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // expect: will result in an error because you are assigning the
// function itself to the variable
