var john = {
    name: 'Name is John',
    age: 30,
    isActive: true
}

var marry = {
    name: 'Name is Mary',
    age: 24,
    isActive: true
}

var sam = {
    name: 'Name is Sam',
    age: 29,
    isActive: false
}

let users = new Map()

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

// console.log(users.size);

// console.log(users.get('sam'));

// console.log(users.values());

// for (const value of users.values()) {
//     console.log(value.age);
// }

// for (const [key, value] of users.entries()) {
//     console.log(key + ' = ' + value.age);
// }

users.forEach((value, key) => console.log(key + ' = ' + value.name))

var arrofArr = [['one', '1'], ['two', '2'], ['three', '3']]

var newMap = new Map(arrofArr)

console.log(newMap);