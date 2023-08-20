'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// from
// 🔴 195. Passing Arguments to Event Handlers
// Menu fade animation
const nav = document.querySelector('.nav');

// 🔴 194. Building a Tabbed Component
// Clicking on the different tab(button) the content is changed
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

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

// 🔴 188. Implementing Smooth Scrolling

// Button scrolling
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

////////////////////////////////////////////
// Page navigation
// from 🔴 192. Event Delegation: Implementing Page Navigation
// една функция която е свързана със всеки един елемент nav__link
// a function that connects to every single element nav__link

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// 🚨 ℹ️ 🚨
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
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

// 🔴 189. Types of Events and Event Handlers

/*
// new way
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

// after creating and named function of the EventListener
// we are able to delete it if we need

h1.addEventListener('mouseenter', alertH1);

// after using removeEventListener we are able ot see the vent ONLY ONE'S
// h1.removeEventListener('mouseenter', alertH1);

// testing time to remove the eventListener
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// The third way to manipulate eventListener is in th HTML
// you can see it in index.html line 44 <!-- <h1 onclick="alert('HTML alert')"> -->

// We can use on event property directly on the element
// old way
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };
// But even this new way is above addEventListener
*/

// 🔴 190. Event Propagation: Bubbling and Capturing

// 🔴 191. Event Propagation in Practice

/*
// rgb(255, 255, 255);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min); // this is the formula to generate random integer
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation
  // in general in not good to use it but if some situations can be ery helpful
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

//

// THIS IS DIFFERENT WAY THO CHANGE THE BACKGROUND COLOR: https://stackoverflow.com/

// function changeBackground(color) {
//   document.body.style.background = color;
// }

// window.addEventListener('load', function () {
//   changeBackground('red');
// });

*/

// 🔴 192. Event Delegation: Implementing Page Navigation
// GO TO line 75

// 🔴 193. DOM Traversing - walking through DOM (selecting elements)

const h1 = document.querySelector('h1');

// Going downwards: child
// console.log(h1.querySelectorAll('.highlight')); // all elements with className highlight
// console.log(h1.childNodes); // every element effected from highlight + the children
// console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going UPwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // the closest  header
h1.closest('h1').style.background = 'var(--gradient-primary)'; // the closest h1

// Going sideways: siblings
/*
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // in this way we have ALL the elements(siblings)
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)'; 
  // reduce the different from h1 elements  by 50%
});
*/

// 🔴 194. Building a Tabbed Component
// Clicking on the different tab(button) the content is changed

// go to line 16
//////////////////////////////////////

// Taking all the TABs and attack event handler
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active the classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate the content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// 🔴 195. Passing Arguments to Event Handlers
// GO TO LINE 12
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// 🔴 196. Implementing a Sticky Navigation: The Scroll Event
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// 🔴 197. A Better Way: The Intersection Observer API
// Sticky navigation

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// Sticky NAV BAR
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// 🔴 198. Revealing Elements on Scroll
// implementing class: section--hidden in the html tag in every section

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserver(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
