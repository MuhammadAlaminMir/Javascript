// insert and remove element in an array

var arr = [1, 2, 3, 4, 5, 6,]

// insert 0 to index 0

arr.push(7); // add a element at last in a array
//console.log(arr);

arr.unshift(0)//add a element at fast in a array

arr.splice(3, 0, 10, 11)//to add a element in a specific location

/**(add ) fast declare .splice then give the starting index, then 
 * give value how much element he delete, then give it the new value
*/

//arr[] = undefined 

//arr.pop() / for remove the last element

//arr.shift() / for remove the fast element

arr.splice(3, 2)//only for remove element fo any index

console.log(arr)
