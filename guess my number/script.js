'use strict'

// DOM is a structured of HTML documents.

/*
console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 2;
console.log(document.querySelector('.guess').value); // to fetch the value (whatever is given by the user) and print it into the console
*/
/*
const fetch = function() {
    console.log(document.querySelector('.guess').value);
}
document.querySelector('.check').addEventListener('click', fetch);
*/


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const popup = document.querySelector('#popup');
const closePopup = document.querySelector('#closePopup');

const showPopup = function () {
    popup.classList.remove('hide'); // Remove hide animation
    popup.classList.add('show');   // Add show animation
    popup.style.display = 'flex';  // Ensure popup is visible
    createSparkles();
}

closePopup.addEventListener('click', function() {
    popup.classList.remove('show'); // Remove show animation
  popup.classList.add('hide');   // Add hide animation

  // Delay hiding the popup completely to allow animation
  setTimeout(() => {
    popup.style.display = 'none';
    removeSparkles(); // Remove sparkles after hiding
  }, 400);
})

function createSparkles() {
    for (let i = 0; i<100; i++){
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        popup.appendChild(sparkle);
    }
}

function removeSparkles() {
    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach(sparkle => sparkle.remove());
}

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);  // to fetch the value (whatever is given by the user) and print it into the console
    console.log(guess, typeof guess);
    if(!guess) { // if any number is not given
        displayMessage('⛔ No number!');

    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
            showPopup();
        }
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
    } else if (guess !== secretNumber) {
        if(score > 1){
            displayMessage(guess > secretNumber  ? `${guess} Too High 📈` : `${guess} is Too Low 📉`);
            document.querySelector('.guess').value = '';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

});