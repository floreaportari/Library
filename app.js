let myLibrary = [];
const libraryContainer = document.querySelector(".library-container");

let bookTitle = prompt("What is your fav book?");
let bookAuthor = prompt("Who is the author?");
let bookPages = prompt("How many pages does it have?");
let hasReadBook = prompt("Have you read the book?");

function Book(title, author, numPages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = numPages;
  this.hasRead = hasRead;
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, and ${
        this.hasRead === "yes" ? "have read" : "have not read"
      }`
    );
  };
}

function addBookToLibrary() {
  const newBook = new Book(
    `${bookTitle}`,
    `${bookAuthor}`,
    `${bookPages}`,
    `${hasReadBook}`
  );
  newBook.info();
  myLibrary.push(newBook);
  console.log(myLibrary);

  myLibrary.forEach((book) => {
    const newH1 = document.createElement("h1");
    newH1.textContent = `${book.title} by ${book.author} has ${book.pages}. I ${book.hasRead} the book!`;
    libraryContainer.appendChild(newH1);
  });
}

addBookToLibrary();
