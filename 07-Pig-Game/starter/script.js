'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
// is this line of code if
//is in side of the function each time click the button ROLL DICE will start from 0

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`; // This line of code change the png img with random one

  // 3. Check for rolled 1: if true, swich to next player

  if (dice !== 1) {
    // Add dice 🎲 to the current score
    currentScore += dice;
    current0El.textContent = currentScore; //CHANGE LATER
  } else {
    // Switch to next player
  }
});
