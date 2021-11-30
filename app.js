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
    newTitleP.innerText = myLibrary[[myLibrary.length - 1]].title;
    newTitleP.setAttribute("data-location", [myLibrary.length - 1])
    cardDiv.appendChild(newTitleP)

    const newAuthorP = document.createElement("p");
    newAuthorP.innerText = myLibrary[[myLibrary.length - 1]].author;
    newAuthorP.setAttribute("data-location", [myLibrary.length - 1])
    cardDiv.appendChild(newAuthorP)

    const pagesNo = document.createElement("p");
    pagesNo.innerText = myLibrary[[myLibrary.length - 1]].pages;
    pagesNo.setAttribute("data-location", [myLibrary.length - 1])
    cardDiv.appendChild(pagesNo)

    const btnSpan = document.createElement("span");
    btnSpan.setAttribute("data-location", [myLibrary.length - 1])
    cardDiv.appendChild(btnSpan);

    let readBtn = document.createElement("button");
    readBtn.innerHTML = myLibrary[myLibrary.length - 1].read;
    readBtn.classList.add("read-btn");
    readBtn.setAttribute("data-location", myLibrary.length - 1);
    readBtn.value = "not-read"
    btnSpan.appendChild(readBtn);

    const newDelBtn = document.createElement("button");
    newDelBtn.innerHTML = "Delete";
    newDelBtn.classList.add("delete-btn");
    newDelBtn.setAttribute("data-location", myLibrary.length - 1);
    btnSpan.appendChild(newDelBtn);

    delBookLocation = newDelBtn.getAttribute("data-location");

    //event listener to remove book from library
    newDelBtn.addEventListener("click", function () {
        let dataLocation = parseInt(this.getAttribute("data-location"));
        console.log(dataLocation)
        for (i = 0;i <= myLibrary.length;i++) {
            if (dataLocation == i) {
                myLibrary.splice(i, 1);
                cardDiv.remove()
                console.log("Del btn working")
            }
        }
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
        newTitleP.innerText = myLibrary[i].title;
        newTitleP.setAttribute("data-location", [i])
        cardDiv.appendChild(newTitleP)

        const newAuthorP = document.createElement("p");
        newAuthorP.innerText = myLibrary[i].author;
        newAuthorP.setAttribute("data-location", [i])
        cardDiv.appendChild(newAuthorP)

        const pagesNo = document.createElement("p");
        pagesNo.innerText = myLibrary[i].pages;
        pagesNo.setAttribute("data-location", [i])
        cardDiv.appendChild(pagesNo)

        const btnSpan = document.createElement("span");
        btnSpan.setAttribute("data-location", [i])
        cardDiv.appendChild(btnSpan);

        const readBtn = document.createElement("button");
        readBtn.innerHTML = myLibrary[i].read;
        readBtn.classList.add("read-btn");
        readBtn.setAttribute("data-location", [i]);
        readBtn.value = "not-read"
        btnSpan.appendChild(readBtn);

        const newDelBtn = document.createElement("button");
        newDelBtn.innerHTML = "Delete";
        newDelBtn.classList.add("delete-btn");
        newDelBtn.setAttribute("data-location", [i]);
        btnSpan.appendChild(newDelBtn);

        newDelBtn.addEventListener("click", function () {
            let dataLocation = parseInt(this.getAttribute("data-location"));
            console.log(dataLocation)
            for (i = 0;i <= myLibrary.length;i++) {
                if (dataLocation == i) {
                    myLibrary.splice(i, 1);
                    console.log("Del btn working")
                    cardDiv.remove()
                }
            }
            // console.log(this.getAttribute("data-location"))
        })

    }
}

//Adding new book objects to library
addBtn.addEventListener("click", function () {
    const bookTitle = document.getElementById("bookTitle").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const bookPages = document.getElementById("bookPages").value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, "Not Read");

})


// function delBook(delBookLocation) {
//     for (i = 0;i < myLibrary.length;i++) {
//         if (delBookLocation === myLibrary[i]) {
//             myLibrary.splice(i, 1);
//             console.log(myLibrary)
//             printBooks()
//         }
//     }
// }


printBooks()



// Add a button on each book’s display to change its read status. - To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.