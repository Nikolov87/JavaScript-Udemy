'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////

// 🔴 184. Project:"Bankist" Website
// adding line 22 btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); // forEach
// and deleting for loop

// 🔴 185. How the DOM Really Works

// 🔴 186. Selecting, Creating and Deleting Elemets

/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Create and inserting elements
// .insertAdjacentHTML - for more info see file ReadMe.md
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Ddelete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove(); // after clicking of the message, the message is gone
    message.parentElement.removeChild(message);
  });
*/

// 🔴 187. Style, Attributes and Classes
/*
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 25 + 'px';

// changing color
document.documentElement.style.setProperty('--color-primary', 'orangered');

// changing attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src);
console.log(logo.className); // nav__logo

logo.alt = 'Beautiful minimalist logo';

// non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer')); // undefined
logo.setAttribute('company', 'Bankist'); // null

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attributes
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// don't use way to describe className
logo.clasName = 'jonas';
*/

// 🔴 188. Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // e.target = btnScrollTo
  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // the old way to be done
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // new NEW way and work just the same
  section1.scrollIntoView({ behavior: 'smooth' });
});
