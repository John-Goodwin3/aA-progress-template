// requires hello-message function
const helloMessage = require('../messages/hello-message');

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage.helloMessage);
module.exports.sayMessage = sayMessage;