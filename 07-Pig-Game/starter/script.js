'use strict';

//Selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');

//Starting condition
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
// document.getElementsByClassName
// ('className')
// [0].style.visibility='hidden';
