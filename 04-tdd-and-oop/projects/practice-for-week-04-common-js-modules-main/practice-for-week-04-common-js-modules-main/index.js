//imports
const giveMessageToMrsPotato = require(".../send-messages/give-message-to-mrs-potato.js");
const sayHelloTo = require(".../send-messages/say-hello-to.js");
const messages = require(".../messages/index.js");
const msg1 = messages.message1;
const msg2 = messages.message2;
const msg3 = messages.message3;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
