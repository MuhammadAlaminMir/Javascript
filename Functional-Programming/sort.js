//sort, some & every function

//sort align data
var person = [
    {
        name : 'a',
        age : 20
    },


    {
        name : 'b',
        age : 23
    },


    {
        name : 'c',
        age : 21
    },
    {
        name : 'd',
        age : 26
    }
]

var arr = [3, 5, 4, 5,10, 6, 7, 8,2, 6, 7, 4, 0]

// arr.sort()
// console.log(arr)
// person.sort()
// console.log(person)

arr.sort(function (a, b){
    if (a > b){
        return -1
    }else if(a < b){
        return 1
    }else{
        return 0
    }
})
console.log(arr)

person.sort(function(a, b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})

console.log(person)

//every & some give only boolean value

var res1 =arr.every(function(value){ //.every for check every value
    return value % 2 === 0
})
console.log(res1)

var res2 =arr.every(function(value){
    return value >= 0
})
console.log(res2)

//.some for check some data 

var res3 = arr.some(function(value){
    return value % 2 === 1
})

console.log(res3)