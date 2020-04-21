//while loop

// var i = 0


// while (i < 10) {
//     console.log('alamin');
//     i++
// }

var isRunning = true

while (isRunning) {
    var rand = Math.round(Math.random() * 10)
    if ( rand === 9){
        console.log('winner winner chicken dinner')
        isRunning = false
    }
    else {
        console.log('You have got' + rand )
    }

}
//while loop use when loop based on condition
//at fast give a statement while then give it a condition into a fast bracket
//then give into a body the value 
//in simple while loop at last give it a increment (i++)