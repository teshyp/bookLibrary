//Get Elements
const libList = document.getElementById("library-list");
const firstCard = document.getElementById("first-card");
const addBtn = document.getElementById("add");
let newDelBtn;

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
        read: "To read",
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkein',
        pages: 309,
        read: "To read",
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        pages: 129,
        read: "To read",
    },
];

// Constructor function to create book object
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Function to create book object using input data
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    printSingleBook()
    console.log(newBook)
}

// Function to display new book to Library
function printSingleBook() {

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("individual-card");
    cardDiv.setAttribute("data-location", [myLibrary.length - 1])
    libList.appendChild(cardDiv);

    const newTitleP = document.createElement("p");
    newTitleP.classList.add("title");
    newTitleP.innerText = myLibrary[[myLibrary.length - 1]].title;
    cardDiv.appendChild(newTitleP)

    const newAuthorP = document.createElement("p");
    newAuthorP.classList.add("author");
    newAuthorP.innerText = myLibrary[[myLibrary.length - 1]].author;
    cardDiv.appendChild(newAuthorP)

    const pagesNo = document.createElement("p");
    pagesNo.classList.add("pages");
    pagesNo.innerText = myLibrary[[myLibrary.length - 1]].pages;
    cardDiv.appendChild(pagesNo)

    const btnSpan = document.createElement("span");
    cardDiv.appendChild(btnSpan);

    let readBtn = document.createElement("button");
    readBtn.innerHTML = myLibrary[myLibrary.length - 1].read;
    readBtn.classList.add("read-btn");
    readBtn.value = "To read"
    btnSpan.appendChild(readBtn);

    //Read Button togglge for new books
    readBtn.addEventListener("click", function () {
        if (this.value == "Read") {
            this.value = "To read";
            this.innerHTML = this.value;
            console.log(this.value)
        } else if (this.value == "To read") {
            this.value = "Read";
            this.innerHTML = this.value;
            console.log(this.value)
        }
    });

    const newDelBtn = document.createElement("button");
    newDelBtn.innerHTML = "Delete";
    newDelBtn.classList.add("delete-btn");
    newDelBtn.setAttribute("data-location", cardDiv.getAttribute("data-location"));
    btnSpan.appendChild(newDelBtn);

    //event listener to remove book from library
    delBookLocation = newDelBtn.getAttribute("data-location");
    newDelBtn.addEventListener("click", function () {
        let dataLocation = parseInt(this.getAttribute("data-location"));
        console.log("Delete button working on NEWLY added books" + dataLocation)
        myLibrary.splice(dataLocation, 1);
        cardDiv.remove(dataLocation);
    })
};

// Function to display all books in library
function printBooks() {
    for (i = 0;i < myLibrary.length;i++) {

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("individual-card");
        cardDiv.setAttribute("data-location", [i])
        libList.appendChild(cardDiv);

        const newTitleP = document.createElement("p");
        newTitleP.classList.add("title");
        newTitleP.innerText = myLibrary[i].title;
        cardDiv.appendChild(newTitleP)

        const newAuthorP = document.createElement("p");
        newAuthorP.classList.add("author");
        newAuthorP.innerText = myLibrary[i].author;
        cardDiv.appendChild(newAuthorP)

        const pagesNo = document.createElement("p");
        pagesNo.classList.add("pages");
        pagesNo.innerText = myLibrary[i].pages;
        cardDiv.appendChild(pagesNo)

        const btnSpan = document.createElement("span");
        cardDiv.appendChild(btnSpan);

        const readBtn = document.createElement("button");
        readBtn.classList.add("read-btn");
        readBtn.innerHTML = myLibrary[i].read;
        readBtn.value = myLibrary[i].read;
        btnSpan.appendChild(readBtn);

        //Read Button toggle - existing books
        readBtn.addEventListener("click", function () {
            if (this.value == "Read") {
                this.value = "To read";
                this.innerHTML = this.value;
                console.log(this.value)
            } else if (this.value == "To read") {
                this.value = "Read";
                this.innerHTML = this.value;
                console.log(this.value)
            }
        });

        const newDelBtn = document.createElement("button");
        newDelBtn.classList.add("delete-btn");
        newDelBtn.innerHTML = "Delete";
        newDelBtn.setAttribute("data-location", cardDiv.getAttribute("data-location"));
        btnSpan.appendChild(newDelBtn);

        // Delete book event listener
        newDelBtn.addEventListener("click", function () {
            let dataLocation = parseInt(this.getAttribute("data-location"));
            console.log("Delete button working: existing library" + dataLocation)
            myLibrary.splice(dataLocation, 1);
            cardDiv.remove(dataLocation);
        })

    }
}

//Adding new book objects to library
addBtn.addEventListener("click", function () {
    const bookTitle = document.getElementById("bookTitle").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const bookPages = document.getElementById("bookPages").value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, "To read");
})



printBooks()