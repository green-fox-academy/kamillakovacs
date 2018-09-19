window.onload = () => {
  const host = 'http://localhost:3000/api';
  const http = new XMLHttpRequest();
  const bookstore = document.querySelector('#book-names');
  http.open('GET', `${host}/booknames/`, true);
  console.log(http);
  
  http.onload = () => {
    if (http.status === 200) {
      const bookNameList = JSON.parse(http.response).result;
      console.log(bookNameList)
      bookNameList.forEach((bookName) => {
        const newBookName = document.createElement('div');
        bookstore.appendChild(newBookName);
        newBookName.innerText = bookName.book_name;
      });
    }
  }
  http.send();
}
  