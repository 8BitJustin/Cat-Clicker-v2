const images = document.getElementsByClassName('kitteh-img');
let counter = document.getElementById('counter');
const kittehOneName = document.getElementById('kitteh-one-name').innerHTML = 'Tyler';
const kittehTwoName = document.getElementById('kitteh-two-name').innerHTML = 'Skyler';

for (let i = 0; i < images.length; i++) {
    // Adds event listner to image. On click, console says 'clicked', and the counter increments by 1
    images[i].addEventListener('click', function() {
        console.log('clicked!');
        counter.innerText++;
    });
  }

