// A program that prompts users to input data
// Accepts input
// Display the result
// Exit the program

const readline = require('readline');

// Create an interface for reading input and output via the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message and prompt the user for their name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the user's input
  console.log(`Your name is: ${name}`);

  rl.close();
});

// Exit message when closing the program
rl.on('close', () => {
  console.log('This important software is now closing');
});


