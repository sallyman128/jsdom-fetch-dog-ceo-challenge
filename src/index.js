console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

addEventListener('DOMContentLoaded', function() {
  fetch(imgUrl)
  .then(resp => resp.json())
  
})