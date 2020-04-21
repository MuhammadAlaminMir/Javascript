//Infinity for loop

while (true) {
    var rand = Math.round(Math.random() * 10)
    if ( rand === 9){
        console.log('winner winner chicken dinner')
        break
    }
    else {
        console.log('You have got' + rand )
    }

}

// for (; ;){
//     var rand = Math.round(Math.random() * 10)
//     if ( rand === 9){
//         console.log('winner winner chicken dinner')
//         break
//     }
//     else {
//         console.log('You have got' + rand )
//     }
// }