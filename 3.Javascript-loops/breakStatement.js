

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
for (var i = 1; i < 10; i++){
    if(i % 5 === 0){
        break
    }
    else{
        console.log(i)
    }
}