const myLibrary = []

const newBookButton = document.querySelector(".addNewBook");
console.log(newBookButton)
newBookButton.addEventListener("click", newBook);

function Book(title, author, isRead){
    this.title=title
    this.author=author
    this.isRead=isRead
}

function addBookToLibrary(){
    //do stuff
}

function displayBooks(){
    //loop through array and show books
}

function newBook(){
    //will be a button, and will ask user for info on book such as title and author
    console.log("Button Pressed")
}


