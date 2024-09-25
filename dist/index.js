"use strict";
// วรดร สังข์อ่อง 1650706425
var Genre;
(function (Genre) {
    Genre["Fantasy"] = "Fantasy";
    Genre["Adventure"] = "Adventure";
    Genre["Fiction"] = "Fiction";
})(Genre || (Genre = {}));
class Library {
    constructor() {
        this.books = [];
        this.nextId = 1;
    }
    addBook(book) {
        const newBook = Object.assign(Object.assign({}, book), { id: this.nextId++ });
        this.books.push(newBook);
        console.log(`Added: ${newBook.title}`);
    }
    listBooks() {
        console.log("Current Books in Inventory:");
        this.books.forEach(book => {
            console.log(`${book.id}: ${book.title} by ${book.author} - ${book.genre} (${book.publishedYear}) - Available: ${book.availability}`);
        });
    }
    searchBooks(key, value) {
        const results = this.books.filter(book => book[key] === value);
        console.log(`Search results for ${key} = ${value}:`);
        results.forEach(book => console.log(`${book.id}: ${book.title} by ${book.author}`));
    }
    updateBook(id, updatedFields) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = Object.assign(Object.assign({}, this.books[bookIndex]), updatedFields);
            console.log(`Updated book ID ${id}`);
        }
        else {
            console.log(`Book ID ${id} not found.`);
        }
    }
    deleteBook(id) {
        this.books = this.books.filter(book => book.id !== id);
        console.log(`Deleted book ID ${id}`);
    }
}
console.log("วรดร สังข์อ่อง 1650706425");
// Instantiate the Library and Add Books
const library = new Library();
library.addBook({
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    genre: Genre.Fantasy,
    publishedYear: 1996,
    availability: true
});
library.addBook({
    title: "A Clash of Kings",
    author: "George R.R. Martin",
    genre: Genre.Fantasy,
    publishedYear: 1998,
    availability: true
});
library.addBook({
    title: "A Storm of Swords",
    author: "George R.R. Martin",
    genre: Genre.Fantasy,
    publishedYear: 2000,
    availability: true
});
// List all books
library.listBooks();
// Search for a book by title
library.searchBooks("title", "A Game of Thrones");
// Update a book's availability
library.updateBook(1, { availability: false });
// Delete a book
library.deleteBook(2);
// Final List of Books
library.listBooks();
