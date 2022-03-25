const Axios = require("axios");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
const baseUrl = "http://localhost:3000/api/";

const createBook = () => {
  //Create new book with user input (id, title, description)
  readline.question("\nEnter the book id: ", (id) => {
    readline.question("\nEnter the book title: ", (title) => {
      readline.question("\nEnter the book description: ", (description) => {
        //Write to json file
        try {
          //Using Axios to create a new book
          const data = JSON.stringify({ id, title, description });
          Axios.post(baseUrl + "create", { data }).then((res) =>
            console.log(res.data)
          );
        } catch (err) {
          console.log("Failed to save");
        }
      });
    });
  });
};

const deleteBook = () => {
  //Delete a book with user input (id)
  readline.question("\nEnter the book id: ", (id) => {
    try {
      //Using axios to delete a book
      const data = JSON.stringify({ id });
      Axios.delete(baseUrl + "delete", { data }).then((res) =>
        console.log(res.data)
      );
    } catch (err) {
      console.log("Failed to delete");
    }
  });
};

const readBooks = () => {
  //Read all books
  try {
    //Using axios to read all books
    Axios.get(baseUrl + "read").then((res) => console.log(res.data));
  } catch (err) {
    console.log("Failed to read");
  }
};

const updateBook = () => {
  //Update a book with user input (id, title, description)
  readline.question("\nEnter the book id: ", (id) => {
    readline.question("\nEnter the book title: ", (title) => {
      readline.question("\nEnter the book description: ", (description) => {
        //Write to json file
        try {
          //Using axios to update a book
          const data = JSON.stringify({ id, title, description });
          Axios.put(baseUrl + "update", { data }).then((res) =>
            console.log(res.data)
          );
        } catch (err) {
          console.log("Failed to update");
        }
      });
    });
  });
};

module.exports = {
  createBook,
  deleteBook,
  readBooks,
  updateBook,
};
