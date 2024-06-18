// Adds up positive integers from 1-n
let startTime = Date.now()
function addNums(n) {
let sum = 0;
  for (let i = 1; i<= n; i++) {
    sum += i
  }
return sum
}
let endTime = Date.now()

const runTime = startTime - endTime


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let sum = 0;
    for (let i = 1; i <= n; i++) {
     sum += addNums(i)
    }
    return sum 
  }



module.exports = [addNums, addManyNums];