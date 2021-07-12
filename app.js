/* 00 Global Variables */
const button = document.querySelector('.btn');
const table = document.querySelector('tbody');
const myLibrary = [];

// 01 Book object constructor and prototype methods
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read == no ? 'not yet read' : 'read';
}

Book.prototype.info = function () {
	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

// 02 Populate library with one book and display table
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 452, 'yes');
myLibrary.push(theHobbit);
displayBooks();

// 03 Display books
function displayBooks() {
	table.innerHTML = '';

	myLibrary.map((book) => {
		const newRow = document.createElement('tr');

		const newTitle = document.createElement('td');
		newTitle.textContent = book.title;
		newRow.appendChild(newTitle);

		const newAuthor = document.createElement('td');
		newAuthor.textContent = book.author;
		newRow.appendChild(newAuthor);

		const newPages = document.createElement('td');
		newPages.textContent = book.pages;
		newRow.appendChild(newPages);

		const newRead = document.createElement('td');
		newRead.textContent = book.read;
		newRow.appendChild(newRead);

		table.appendChild(newRow);
	});
}

function addBookToLibrary() {
	// Get values from user input
	const titleInput = document.querySelector('#title');
	const authorInput = document.querySelector('#author');
	const pagesInput = document.querySelector('#pages');
	const readInput = document.querySelector('input[name="read"]:checked');

	if (titleInput.value == '' && authorInput.value == '' && pagesInput.value == '') {
		alert('Enter a book.');
	} else {
		// Store input values in a new Book object
		const newBook = new Book(
			titleInput.value,
			authorInput.value,
			pagesInput.value,
			readInput.value
		);

		console.log(newBook.info());

		// Add Book object to the myLibrary array
		myLibrary.push(newBook);
		console.table(myLibrary);
		displayBooks();
	}
}

button.addEventListener('click', addBookToLibrary);
