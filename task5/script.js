let form = document.querySelector('#form');
let textimput = document.querySelector('#textimput');
let text = document.querySelector('#duplicatefield');

textimput.addEventListener('keypress', (event) => {
   text.textContent = text.textContent + event.key;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(text.textContent);
    text.textContent = '';
    form.reset();
});