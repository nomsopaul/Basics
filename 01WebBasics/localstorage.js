localStorage.setItem('hero', 'thor');
localStorage.setItem('todo', 'ask for salary');
var myHero = localStorage.getItem('hero');
console.log(myHero);

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo', 'Come to work');
console.log(localStorage.getItem("todo"));
localStorage.clear();

// localStorage.removeItem('hero');
console.log(myHero);

