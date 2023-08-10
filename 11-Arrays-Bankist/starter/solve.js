// from video 151
/*
const names = ['Alice', 'Bob', 'Charlie'];

names.forEach(name => {
  const firstLetter = name[0];
  console.log(firstLetter);
});
*/

// or this one

const user = 'Steven Thomas Williams'; // stw
const username = user
  .toLocaleLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');

console.log(username); // stw
