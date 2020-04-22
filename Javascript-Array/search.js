// Search Data

var arr = [2, 3, 4, 5, 56, 35 , 64, 43, 54, 123, 1 , 6, 78]

var find = 56

// for (var i = 0; i < arr.length; i++){
//     if (arr[i] === find){
//         console.log('Data found at index ', i)
//         break
//     } 
//     else{
//         console.log('data not found')
//         break
//     }
// }
var isFound = false

for (var i = 0; i < arr.length; i++){
         if (arr[i] === find){
             console.log('Data found at index ', i)
             isFound = true
            break
        } 
    }
if (!isFound){
    console.log('data not found')
}