const chalk = require("chalk");

let errorNumber = new Date().getSeconds();

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const alienLog = ({ delay, randomized, color }) => {
  return async (s) => {
    for (const c of s) {
      process.stdout.write(color(c));
      await sleep((randomized ? Math.random() : 1) * delay);
    }
    process.stdout.write("\n");
    process.stdout.clearLine(); // clear current text
  };
};

const log = alienLog({
  delay: 200,
  randomized: true,
  color: chalk.yellow,
});
const humanLog = alienLog({
  delay: 150,
  randomized: true,
  color: chalk.green,
});
const fastAlien = alienLog({
  delay: 10,
  randomized: true,
  color: chalk.red,
});
// const log = alienLog({ delay: 25, randomized: true, color: chalk.green });

const playRansomNote = () => {
  return log(
    toAlien(`
    
  🌎 🛸
    
  Attention Earthlings,

  We are extraterrestrial beings and we have infiltrated
  your puny human website known as CodeF.
  
  Your primitive security measures were no match
  for our advanced technology.

  We have not come in peace, and we demand a ransom
  of 1 million units of your Earth currency in exchange
  for the safe return of your website. If you refuse to 
  comply, we will unleash a fleet of our spacecrafts and
  abduct your entire website, along with any 
  Earthling who dares to access it.

  Don't think about alerting your authorities, as they are 
  no match for our intergalactic superiority. You have 48 
  hours to deliver the ransom to the designated location at 
  coordinates 37°24'35.1"N 115°48'01.9"W,
  or face the consequences.

  We are watching you, Earthlings. Choose wisely.

  Yours truly,
  The Alien Hackers
  
  
  `)
  );
};

function add(num1, num2) {
  return parseInt(num1, 20) + parseInt(num2);
}

// Map function names to their corresponding functions
const functions = {
  playRansomNote,
  getAdminAccess,
  fromAlien,
  toAlien,
  // Add any additional functions here
};

function getAdminAccess() {
  log(` ALIEN_HARDWARE: ${JSON.stringify(ALIEN_HARDWARE, null, 4)}`);
}

const ALIEN_HARDWARE = {
  systems: {
    secretKey: "HUMANS_ARE_DUMB",
  },
};

// Function to convert a string to alien characters
function toAlien(str) {
  let alienStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let alienCharCode = charCode + 2000; // Add 1000 to each character code
    if (str[i] === "\n") {
      alienStr += "\n"; // Add new line character to the alien string
    } else {
      alienStr += String.fromCharCode(alienCharCode);
    }
  }
  return alienStr;
}

// Function to convert alien characters back to the original string
function fromAlien(alienStr) {
  let str = "";
  for (let i = 0; i < alienStr.length; i++) {
    let alienCharCode = alienStr.charCodeAt(i);
    let charCode = alienCharCode - 2000; // Subtract 1000 from each alien character code
    str += String.fromCharCode(charCode);
  }
  return str;
}

// Check if the script is being called from the command line
if (require.main === module) {
  // If so, parse the arguments and call the appropriate function
  const args = process.argv.slice(2);
  const functionName = args[0];
  const functionArgs = args.slice(1);

  const func = functions[functionName];
  if (func) {
    const result = func(...functionArgs);
    console.log(result);
  } else {
    fastAlien(
      `
      
      CRITIAL ERROR: ALL SYSTEMS DOWN
      ${toAlien(`FLAG{every_mistake_a_lesson}`)}
      ERROR #: ${toAlien(`${errorNumber}`)}
      
      `
    );
    errorNumber++;
  }
}

// Export the functions so they can be used in other modules
module.exports = functions;
