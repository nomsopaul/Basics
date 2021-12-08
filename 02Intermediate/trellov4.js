const myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube videos']

// console.log(myTodos.indexOf('Buy bread'));


const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record youtube videos',
    isDone: true,
}]

// const index = newTodos.findIndex(function(todo, index){
// console.log(todo);

//     return todo.title === 'Go to Gym'
// })
// console.log(index);

//Method 1

// const findTodo = function(myTodos, title){
//     const index = myTodos.findIndex(function(todo, index){
//         return todo.title.toLowercase() === title.toLowercase()
//     })
//     return anyTodos[index]
// }

// let printMe = findTodo(newTodos, 'Go To gym',)
// console.log(printMe);

const findTodo = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowercase() === title.toLowercase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos, 'Go To gym')
console.log(printMe);
