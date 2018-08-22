const image = document.getElementById('kitteh-img');
let counter = document.getElementById('counter');

// Adds event listner to image. On click, console says 'clicked', and the counter increments by 1
image.addEventListener('click', function() {
    console.log('clicked!');
    counter.innerText++;
});