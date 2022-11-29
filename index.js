const booksData = [];
const getBooksag = JSON.parse(localStorage.getItem('books'));

class BooksClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() { //eslint-disable-line
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const book = {
      Title: title,
      author,
    };

    const netBooks = JSON.parse(localStorage.getItem('books'));
    if (!netBooks) {
      booksData.push(book);
      localStorage.setItem('books', JSON.stringify(booksData));
    } else {
      netBooks.push(book);
      localStorage.setItem('books', JSON.stringify(netBooks));
    }
    location.reload(); //eslint-disable-line
  }

  showBooks() { //eslint-disable-line
    const divP = document.querySelector('#booksIn');
    const getBooks = JSON.parse(localStorage.getItem('books'));

    if (!getBooks || !getBooks[0]) {
      divP.innerHTML = '<div class="no-cards">No Books to Show...</div>';
    } else {
      for (let i = 0; i < getBooks.length; i += 1) {
        const temp = i;
        divP.innerHTML += `
        <div class="cards" data-id="${temp}">
            <p>"${getBooks[i].Title}" by ${getBooks[i].author}</p><button class="remove" data-id='${temp}'>Remove</button>
        </div>
        `;
      }
    }
  }

  del(id) { //eslint-disable-line
    getBooksag.splice(id, 1);
    localStorage.setItem('books', JSON.stringify(getBooksag));
  }
}

const addBtn = document.querySelector('#add');

addBtn.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if(title=="" || author == ""){//eslint-disable-line
    alert('Please fill the required Fields'); //eslint-disable-line
  } else {
    const bookAd = new BooksClass();
    bookAd.add();
  }
});

const booksh = new BooksClass();
booksh.showBooks();

const allBtns = document.querySelectorAll('.remove');
allBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    const remBook = new BooksClass();
    remBook.del(temp);
    location.reload(); //eslint-disable-line
  });
});