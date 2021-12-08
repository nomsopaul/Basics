// let iAmGlobal = 'somevalue'

// if (true){
//     let iamLocal = 'somemorevalue'
//     console.log(iAmGlobal);
//     console.log(iamLocal);

// }

// console.log(iamLocal);
// console.log(iAmGlobal);

//Kings Problem

let king = 'John'

if (true){
    let king = 'Sam'

    if (true){
        let king = 'Nomso'
        console.log(king);
    }
}

if (true){
    console.log("I am second part " + king);
}