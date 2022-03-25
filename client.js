// Client cli for the server

const {
  createBook,
  readBooks,
  deleteBook,
  updateBook,
} = require("./utilities");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// Function to prompt user for input
function promptUser() {
  console.log(`
--------------Welcome to the Book Store--------------
1. Create a new book
2. Read all books
3. Update a book
4. Delete a book
5. Exit
`);
  readline.question("\nWhat would you like to do?", (answer) => {
    switch (answer) {
      case "1":
        createBook();
        break;
      case "2":
        readBooks();
        break;
      case "3":
        updateBook();
        break;
      case "4":
        deleteBook();
        break;
      case "5":
        readline.close();
        break;
      default:
        console.log("\nInvalid option");
        break;
    }
  });
}

readline.on("close", () => {
  console.log("\nGoodbye!");
  process.exit();
});

// While the user is not exiting, prompt them for input
promptUser();
