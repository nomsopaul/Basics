// const myElement = document.querySelectorAll('#one')
// console.log(myElement);

// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am using JS'

const myPElements = document.querySelectorAll('P')

myPElements.forEach(function(p) {
    p.textContent ='I am changed using loop JS'
})

document.querySelector('button').addEventListener('click', (event) =>{
    event.target.textContent = 'I was clicked'

})

//track form

document.querySelector('#myform').addEventListener('change', (event)=>{
    console.log(event.target.value);
})