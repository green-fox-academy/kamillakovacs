window.onload = () => {
  const host = 'http://localhost:3000/api';
  const http = new XMLHttpRequest();
  const bookstore = document.querySelector('#book-list');
  http.open('GET', `${host}/booknames/`, true);
  console.log(http);
  
  http.onload = () => {
    if (http.status === 200) {
      const bookNameList = JSON.parse(http.response).result;
      console.log(bookNameList)
      bookNameList.forEach((bookName) => {
        const newTR = document.createElement('tr');
        const newBookName = document.createElement('td');
        const newBookAuthor = document.createElement('td');
        const newBookCat = document.createElement('td');
        const newBookPub = document.createElement('td');
        const newBookPrice = document.createElement('td');

        newTR.appendChild(newBookName);
        newTR.appendChild(newBookAuthor);
        newTR.appendChild(newBookCat);
        newTR.appendChild(newBookPub);
        newTR.appendChild(newBookPrice);
  
        bookstore.appendChild(newTR);

        newBookName.innerText = bookName.book_name;
        newBookAuthor.innerText = bookName.aut_name;
        newBookCat.innerText = bookName.cate_descrip;
        newBookPub.innerText = bookName.pub_name;
        newBookPrice.innerText = `$ ${bookName.book_price}`;
      }); 
    }
  }
  http.send();
}

