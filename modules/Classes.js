/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
// Creat Book class
class Book {
  constructor(title, author) {
    this.bookid = Math.random().toFixed(1);
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  // Add a new book
  addBook(newItem) {
    this.books.push(newItem);
    localStorage.setItem('DB', JSON.stringify(this.books));
    showcase(newItem);
  }

  // remove a book
  remove(bookid) {
    const rm = document.getElementById(bookid);
    rm.remove();
    this.books = this.books.filter((x) => x.bookid !== bookid);
    localStorage.setItem('DB', JSON.stringify(this.books));
  }
}
const storeBook = new Library();
const showcase = (index) => {
  const bookList = document.querySelector('.library');
  const items = document.createElement('tr');
  items.setAttribute('id', index.bookid);
  items.classList.add('items');
  items.innerHTML = `<th> "${index.title}" by ${index.author}</th>`;
  const rmbtn = document.createElement('button');
  rmbtn.innerHTML = 'Remove';
  rmbtn.setAttribute('id', 'removebtn');
  rmbtn.addEventListener('click', () => storeBook.remove(index.bookid));
  items.appendChild(rmbtn);
  bookList.appendChild(items);
};
// fetch values from input
const getInput = () => {
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const addItem = new Book(title, author);
  return addItem;
};

const error = () => {
  const span = document.querySelector('.alert');
  span.textContent = 'Fields required';
  span.style.color = 'red';
  setTimeout(() => span.remove(), 3000);
};
// Add button
const addNewBook = document.getElementById('addbtn');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
addNewBook.addEventListener('click', (event) => {
  if (title.value === '' || author.value === '') {
    event.preventDefault();
    error();
  } else {
    const book = getInput();
    storeBook.addBook(book);
  }
});
window.onload = () => {
  storeBook.books = JSON.parse(localStorage.getItem('DB' || '[]'));
  if (storeBook.books === null) {
    storeBook.books = [];
    return;
  }
  storeBook.books.forEach((item) => showcase(item));
};