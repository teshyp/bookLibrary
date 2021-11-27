//Get Elements
const libList = document.getElementById("library-list");
const firstCard = document.getElementById("first-card");

// Event listeners

// Library object

let myLibrary = [
    {
        title: 'Harry Potter',
        author: 'J.K.Rowling',
        pages: 662,
        read: "Read",
    },
    {
        title: 'Yoga Book',
        author: 'Shiva',
        pages: 809,
        read: "Not read",
    }
];


// Constructor function to create book object
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Function to create book using input data
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
}

// Function to display books in library

function printBooks() {
    for (i = 0;i < myLibrary.length;i++) {

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("individual-card");
        libList.appendChild(cardDiv);

        let newTitleP = document.createElement("p");
        newTitleP.innerText = myLibrary[i].title;
        cardDiv.appendChild(newTitleP)

        let newAuthorP = document.createElement("p");
        newAuthorP.innerText = myLibrary[i].author;
        cardDiv.appendChild(newAuthorP)

        let pagesNo = document.createElement("p");
        pagesNo.innerText = myLibrary[i].pages;
        cardDiv.appendChild(pagesNo)

        let btnSpan = document.createElement("span");
        cardDiv.appendChild(btnSpan)

        let readBtn = document.createElement("button");
        readBtn.innerHTML = myLibrary[i].read;
        readBtn.classList.add("read-btn");
        readBtn.value = "not-read"
        btnSpan.appendChild(readBtn);

        let newDelBtn = document.createElement("button");
        newDelBtn.innerHTML = "Delete";
        newDelBtn.classList.add("delete-btn")
        btnSpan.appendChild(newDelBtn);

        console.log(myLibrary[i]);
    }
}

printBooks()

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status. - To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.


