//find length
var str = 'some string'
// console.log(str.charAt(5))
var length = 0

while (true){
    if (str.charAt(length) == ''){
        break
    }else{
        length++
    }
}
 console.log(length)

console.log(str.length)