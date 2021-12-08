let myTodos = {
    day:'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function (todo, meet = 0) {
    todo.meetings = todo.meetings + meet;
}

let meetDone = function (todo, meet = 0) {
    todo.meetDone = todo.meetDone - meet;

}

let resetDay = function(todo) {
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummary = function(todo) {
    let meetleft = todo.meetings + todo.meetDone
    return `You have ${meetleft} meetings today!`
}

addMeeting(myTodos, 4)

addMeeting(myTodos, 8)

meetDone(myTodos, 5)

console.log(myTodos);

console.log(getSummary(myTodos));