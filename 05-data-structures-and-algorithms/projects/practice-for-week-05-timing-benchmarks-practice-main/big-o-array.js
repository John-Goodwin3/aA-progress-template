// arr.push()
// Time complexity: O(1) Space complexity: O(1) Justification: .push() mutates the input array inplace there by not using the array's length property to identify a valid length and placing the new element at that position, it also does'nt create an new array
// push on MDN
// arr.pop()
// Time complexity: O(1) Space complexity: O(1) Justification: .pop() works just like push()
// pop on MDN
// arr.shift()
// Time complexity: O(n) Space complexity: O(1) Justification: .shift() works like pop, but reverse position, 
// shift on MDN
// arr.unshift()
// Time complexity: O(n) Space complexity: O(1) Justification: .unshift() works like shift()
// unshift on MDN
// arr.splice()
// Time complexity: O(n) Space complexity: O(n) Justification: works in place, doesn't create new items, and uses the object length to find the index at constant time and space
// splice on MDN
// arr.slice()
// Time complexity: O(n) Space complexity: O(n) Justification: creates a new array, works on linear time because the item to splice may be anywhere
// slice on MDN
// arr.indexOf()
// Time complexity: O(n) Space complexity: O(1) Justification: worst case, the item is not found, it has to go throught the whole array to find that out, linear time and constant space complexities
// indexOf on MDN
// arr.map()
// Time complexity: O(n) Space complexity: O(n) Justification: creates an new array, and does work on each element of the input array, linear space and time
// map on MDN
// arr.filter()
// Time complexity: O(n) Space complexity: O(n) Justification: creates a new array, and does work on each element of the input array. Linear space and time
// filter on MDN
// arr.reduce()
// Time complexity: O(n) Space complexity: O(1) Justification: it does work on each element in the array, thereby working in linear time and constant space complexities
// reduce on MDN
// arr.reverse()
// Time complexity: O(n) Space complexity: O(1) Justification: it reverses an array in place but depends the length of the array, linear time and constant space complexities
// reverse on MDN
// [...arr]
// Time complexity: O(n) Space complexity: O(n) Justification: depends on the amount of input and creates new array, linear space and time
// spread on MDN