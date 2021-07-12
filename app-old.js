/* Global Variables */
const button = document.querySelector('.btn');
const table = document.querySelector('tbody');
const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	// Variables
	const titleInput = document.querySelector('#title');
	const authorInput = document.querySelector('#author');
	const pagesInput = document.querySelector('#pages');
	const readInput = document.querySelector('input[name="read"]:checked');

	if (titleInput.value == '' && authorInput.value == '' && pagesInput.value == '') {
		console.log('Enter a book.');
	} else {
		const newBook = document.createElement('tr');

		const newTitle = document.createElement('td');
		newTitle.textContent = titleInput.value;
		newBook.appendChild(newTitle);

		const newAuthor = document.createElement('td');
		newAuthor.textContent = authorInput.value;
		newBook.appendChild(newAuthor);

		const newPages = document.createElement('td');
		newPages.textContent = pagesInput.value;
		newBook.appendChild(newPages);

		const newRead = document.createElement('td');
		newRead.textContent = readInput.value;
		newBook.appendChild(newRead);

		table.appendChild(newBook);
	}
}

button.addEventListener('click', addBookToLibrary);
