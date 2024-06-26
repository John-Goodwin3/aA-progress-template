const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  // Your code here
  console.log("  Type 'r' for Rock")
  console.log("  Type 'p' for Paper")
  console.log("  Type 's' for Scissors")
  console.log("  Type 'q' to quit")
  console.log("  Type 'h' for a list of valid commands\n")
}

function getWinner(move1, move2) {
  // Your code here
  if (move1 === move2) {
    return 0
  } else if (
    (move1 === 'r' && move2 === 's') ||
    (move1 === 's' && move2 === 'p') ||
    (move1 === 'p' && move2 === 'r')
  ) {
    return 1
  } else {
    return -1
  }
}

function getCPUMove() {
  // Your code here
  const moves = ['r', 'p', 's'];
  const randomIndex = Math.floor(Math.random() * moves.length)
  return moves[randomIndex]
}

function processMove(cmd, cpu) {
  // Your code here
  const moves = {
    r: 'r' ,
    p: 'p',
    s: 's'
  }

  const playerMove = moves[cmd];
  const cpuMove = moves[cpu];

  console.log(`You pick ${playerMove}, computer picks ${cpuMove}.`)

  if (cmd === cpu) {
    console.log("You tie.\n");
  } else if ((cmd === 'r' && cpu === 's') ||
  (cmd === 'p' && cpu === 'r') ||
  (cmd === 's' && cpu === 'p')) {
    console.log("You win!\n")
  } else {
    console.log("You lose...\n")
  }
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      console.log("  Type 'r' for Rock");
      console.log("  Type 'p' for Paper");
      console.log("  Type 's' for Scissors");
      console.log("  Type 'q' to quit");
      console.log("  Type 'h' for a list of valid commands\n");
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){
      const validMoveKeys = Object.keys(VALID_MOVES);
      const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
      const cpu = validMoveKeys[randomIndex];

      console.log(`You pick ${cmd}, computer picks ${cpu}.`);

      if (cmd === cpu) { // tie
        console.log("You tie.\n");
        ties++;
      }
      else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
        console.log("You win!\n");
        wins++;
      } else { // loss
        console.log("You lose...\n");
        losses++;
      }
    } else {
      console.log("\nInvalid command.\n");
      console.log("  Type 'r' for Rock");
      console.log("  Type 'p' for Paper");
      console.log("  Type 's' for Scissors");
      console.log("  Type 'q' to quit");
      console.log("  Type 'h' for a list of valid commands\n");
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};