// A program that prompts users to input data
// Accepts input
// Display the result
// Exit the program

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write("This important software is now closing\n");
  process.exit();
});

