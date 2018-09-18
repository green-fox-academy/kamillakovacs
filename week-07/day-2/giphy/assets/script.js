window.onload = () => {
  const host = 'http://localhost:3000/api';
  const http = new XMLHttpRequest();
  const giphyParent = document.querySelector('#first-16');
  http.open('GET', `${host}/giphy`, true);
  console.log(http);
  
  http.onload = () => {
    if (http.status === 200) {
      const giphyImages = JSON.parse(http.response).data;
      console.log(giphyImages)
      giphyImages.forEach((elem) => {
        const newGif = document.createElement('img');
        giphyParent.appendChild(newGif);
        newGif.setAttribute('src', elem.images.downsized_medium.url)
        


        
      });
    }
  }
  http.send();

  // fetch(`${host}/giphy/kittens&limit=16`)
  // .then((resp) => (resp.json()))
  // .then(response => {
  //   console.log(response);
  // });
}