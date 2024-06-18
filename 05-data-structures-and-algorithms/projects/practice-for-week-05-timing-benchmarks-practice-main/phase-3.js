const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let arr = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    let startTime = Date.now();
    // console.time()
    arr.push(addNums(i));
    // console.timeEnd()
    let endTime = Date.now();

    console.log(`${endTime - startTime}: ms`);
  }
  return arr;
}

function addManyNums10Timing(increment) {
  let arr = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    // console.time()
    let startTime = Date.now();
    arr.push(addManyNums(i));
    let endTime = Date.now();
    // console.timeEnd()

    console.log(`${endTime - startTime}`);
  }
  return arr;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
