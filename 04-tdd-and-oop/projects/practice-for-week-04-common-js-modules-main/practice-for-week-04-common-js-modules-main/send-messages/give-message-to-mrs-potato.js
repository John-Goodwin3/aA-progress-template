const sayHelloTo = require('../send-messages/say-Hello-To.js');

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");
module.exports = giveMessageToMrsPotato;