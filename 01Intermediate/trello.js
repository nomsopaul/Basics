// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


// // console.log(days[0]);

// // days.forEach(function (day) {
// //   console.log(`start with ${index+1} --${day}`);

// // }

// for (let index = days.length -1; index >= 0; index--) {
//     console.log(days[index]);

// }


const myTodos = [];

myTodos.push('Buy Bread')
myTodos.push('Record videos for youtubers')
myTodos.push('Go to Gym')

myTodos.forEach(function(todo, index) {
    console.log(`your task no. ${index + 1} is: ${todo}`);

})