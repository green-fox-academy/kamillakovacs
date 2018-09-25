window.onload = () => {
  const host = 'http://localhost:3000/api';
  const http = new XMLHttpRequest();
  const giphyParent = document.querySelector('#giphys');
  http.open('GET', `${host}/giphy`, true);
  // console.log(http);
  
  http.onload = () => {
    if (http.status === 200) {
      const giphyImages = JSON.parse(http.response).data;
      console.log(giphyImages)
      giphyImages.forEach((elem) => {
        
        let newGif = document.createElement('img');
        newGif.classList.add('images');
        giphyParent.appendChild(newGif);
        
        newGif.setAttribute('src', elem.images.fixed_height_still.url);

        let imageButton = document.createElement('button');
        newGif.appendChild(imageButton);

        imageButton.onclick = () => {
          if (newGif.src === elem.images.fixed_height_still.url) {
            newGif.setAttribute('src', elem.images.original.url);
          } else {
            newGif.setAttribute('src', elem.images.fixed_height_still.url);
          }
        }
      });
    }
  }
  http.send();
}
