//Infinity for loop
// when we don't give any condition into for loop it will run infinite time
// it is very dangerous to use infinity loop because it can crash the browser or computer

while (true) {
  var rand = Math.round(Math.random() * 10);
  if (rand === 9) {
    console.log("winner winner chicken dinner");
    break;
  } else {
    console.log("You have got" + rand);
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
