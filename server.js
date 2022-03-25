// Set up a crud server with http

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const jsonFile = require(path.join(__dirname, "books.json"));

app.use(express.json());

// POST Route:Create
app.post("/api/create", (req, res) => {
  //Write to json file
  const data = JSON.stringify(req.body);
  // convert json to object

  try {
    let temp = jsonFile;
    temp = { books: [...temp.books, req.body] };
    fs.writeFile(
      path.join(__dirname, "books.json"),
      JSON.stringify(temp),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    res.send("Book added");
  } catch (err) {
    res.send("Failed to save");
  }
});

// GET Route:Read
app.get("/api/read", (req, res) => {
  res.json(jsonFile);
});

// PUT Route:Update
app.put("/api/update", (req, res) => {
  //Find the index of the book to update
  try {
    const index = jsonFile.books.findIndex((book) => book.id === req.body.id);
    if (index === -1) {
      res.send("Book not found");
      return;
    }
    //Update the book
    jsonFile.books[index] = req.body;
    //Write to json file
    fs.writeFile(
      path.join(__dirname, "books.json"),
      JSON.stringify(jsonFile),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  } catch (err) {
    res.send("Failed to update");
  }
  res.send("Book updated");
});

// DELETE Route:Delete
app.delete("/api/delete", (req, res) => {
  try {
    //Find the index of the book to delete
    const index = jsonFile.books.findIndex((book) => book.id === req.body.id);
    if (index === -1) {
      res.send("Book not found");
      return;
    }
    //Delete the book
    jsonFile.books.splice(index, 1);
    //Write to json file
    fs.writeFile(
      path.join(__dirname, "books.json"),
      JSON.stringify(jsonFile),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    res.send("Book deleted");
  } catch (err) {
    res.send("Failed to delete");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
