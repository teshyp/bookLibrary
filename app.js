let myLibrary = [
    {
        title: 'Harry Potter',
        author: 'J.K.Rowling',
        pages: '662',
        read: 'not read'
    },
    {
        title: 'Bhagvad Gita',
        author: 'Krishna',
        pages: '809',
        read: 'read',
    }
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
}

function printBooks() {
    for (i = 0;i < myLibrary.length;i++) {
        console.log(myLibrary[i]);
        // change inner html of dom elements
    }
}

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.


