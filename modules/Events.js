const add = document.querySelector('.add');
const display = document.querySelector('.display');
const contact = document.querySelector('.contact');
const listLink = document.getElementById('l-link');
const addLink = document.getElementById('a-link');
const contactLink = document.getElementById('c-link');

listLink.addEventListener('click', () => {
  display.style.display = 'flex';
  contact.style.display = 'none';
  add.style.display = 'none';
});
addLink.addEventListener('click', () => {
  display.style.display = 'none';
  contact.style.display = 'none';
  add.style.display = 'flex';
});
contactLink.addEventListener('click', () => {
  display.style.display = 'none';
  contact.style.display = 'flex';
  add.style.display = 'none';
});