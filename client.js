// Client cli for the server

// Function to prompt user for input
function promptUser() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter a command: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

promptUser();
