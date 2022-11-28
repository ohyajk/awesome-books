const booksArr = [];
const booksIn = document.querySelector('#booksIn');

const add = document.querySelector('#add');

add.addEventListener('click', () => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const model = { title: title.value, author: author.value };
  const getBooks1 = JSON.parse(localStorage.getItem('books'));

  if (getBooks1 === undefined) {
    booksArr.push(model);
    localStorage.setItem('books', JSON.stringify(booksArr));
  } else {
    getBooks1.push(model);
    localStorage.setItem('books', JSON.stringify(getBooks1));
  }
  window.reload();
});

const getBooks = JSON.parse(localStorage.getItem('books'));
if (getBooks === undefined) {
  booksIn.innerHTML += '<div></div>';
} else {
  for (let i = 0; i < getBooks.length; i + 1) {
    const temp = i;
    booksIn.innerHTML += `<p>Title : ${getBooks[i].title}</p><p>Author : ${getBooks[i].author}</p><button class="btn-rem" data-id="${temp}">Remove</button>`;
  }
}
const btnRems = document.querySelectorAll('.btn-rem');
btnRems.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let target = e.currentTarget.dataset;
    target = +target.id[target.id.length - 1];
    const getBooks2 = JSON.parse(localStorage.getItem('books'));
    getBooks2.splice(target, 1);
    localStorage.setItem('books', JSON.stringify(getBooks2));
    window.reload();
  });
});
