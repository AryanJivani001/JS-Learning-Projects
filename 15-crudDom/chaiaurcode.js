document.addEventListener('DOMContentLoaded', function () {
  const bookForm = document.getElementById('book-form');
  const bookList = document.getElementById('book-list');

  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const yearInput = document.getElementById('year');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const year = yearInput.value.trim();

    if (title && author && year) {
      addBookToList(title, author, year);
      clearForm([titleInput, authorInput, yearInput]);
    }
    else{
        alert("Please fill all the fields");
    }
  });

  function addBookToList(title, author, year) {
    const bookItem = document.createElement('section');
    bookItem.classList.add('book-item');

    const titleDiv = document.createElement('div');
    titleDiv.textContent = title;

    const authorDiv = document.createElement('div');
    authorDiv.textContent = author;

    const yearDiv = document.createElement('div');
    yearDiv.textContent = year;

    const markDiv = document.createElement('button');
    markDiv.textContent = "❌"
    markDiv.addEventListener('click', function () {
      bookList.removeChild(bookItem);
    })
  
    bookItem.appendChild(titleDiv);
    bookItem.appendChild(authorDiv);
    bookItem.appendChild(yearDiv);
    bookItem.appendChild(markDiv);

    bookList.appendChild(bookItem);
  }

  function clearForm(inputs) {
    inputs.forEach(input => (input.value = ''));
  }
});
