const displayImg = document.getElementById('img-display-id');
const imgSmall = document.querySelectorAll('.img-small');
let displayCount = document.getElementById('img-display-count');
let listCount = 0;

for(let i = 0; i < imgSmall.length; i++) {
    imgSmall[i].addEventListener('click', function() {
        console.log('clicked');
        displayImg.src = imgSmall[i].src;
        listCount = imgSmall[i].previousElementSibling.innerText;
        document.getElementById('img-display-count').innerText = listCount;
        document.getElementById('img-display-name').innerText = imgSmall[i].parentNode.firstElementChild.innerText;
    });
};

displayImg.addEventListener('click', function() {
    displayCount.innerText++;
    listCount++;
    console.log(listCount);
});


















/**
 * Script for first version, kept as reference
 */

// const imageOne = document.getElementById('kitteh-img-one');
// const imageTwo = document.getElementById('kitteh-img-two');
// const images = document.querySelectorAll('.kitteh-img');
// let firstCounter = document.getElementById('firstCounter');
// let secondCounter = document.getElementById('secondCounter');
// let totalCounter = document.getElementById('totalCounter');

// // Creates names for kittehs. Simple names could have been given, but what fun is that?
// const kittehOneName = document.getElementById('kitteh-one-name');
// const kittehTwoName = document.getElementById('kitteh-two-name');
// const names = ['Tigger', 'Tiger', 'Max', 'Sirena', 'Sammie', 'Smokey', 'Kitty', 'Sassy', 'Shadow', 'Simba', 'Patch', 'Lucky', 'Misty', 'Princess', 'Boots', 'Oliver', 'Lucy', 'Precious', 'Oscar', 'Fluffy', 'Whiskers'];
// function randomNames(names) {
//     return names[Math.floor(Math.random()*names.length)];
// };
// kittehOneName.innerHTML = randomNames(names);
// kittehTwoName.innerHTML = randomNames(names);
// if (kittehOneName.innerHTML === kittehTwoName.innerHTML) {
//     console.log('Match, rerolling kittehTwoName');
//     kittehTwoName.innerHTML = randomNames(names);
// };

// // Adds event listner to each image. On click, console says which is clicked and the counter increments by 1
// imageOne.addEventListener('click', function() {
//     console.log('one clicked!');
//     firstCounter.innerText++;
// });
// imageTwo.addEventListener('click', function() {
//     console.log('two clicked!');
//     secondCounter.innerText++;
// });
// for (let i = 0; i < images.length; i++) {
//     // Adds event listner to both images. On click, console says 'total clicked', and the total counter increments by 1
//     images[i].addEventListener('click', function() {
//         console.log('total clicked!');
//         totalCounter.innerText++;
//     });
// };