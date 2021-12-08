
// if (true) {
//     console.log('I am inside the room')
// } else if (false) {
//     console.log('I am still inside if Block')
// } else {
//     console.log('notice this part')
// }


var whoIsHere = 'abc'

if (whoIsHere === 'user') {
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if (whoIsHere === 'teacher'){
    console.log('Greeting message for teacher')
    console.log('Allow access to his courses')
} else {
    console.log('MESSAGE: please verify your email address')
    console.log('Send user an email for verification')
    
}