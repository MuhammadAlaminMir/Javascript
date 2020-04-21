//Nested loop

// 1
// 1 2
// 1 2 3
// 1 2 3 4 
// 1 2 3 4 5

var n = 5

for (var i = 1; i <= n; i++){
    var result = ''
    for(var j = 1; j <= i; j++){
        result += j + " "
    }
    console.log(result)
}

var n = 10

for (var i = 1; i <= n; i++){
    var result = ''
    for(var j = 1; j <= n; j++){
        result += '* '
    }
    console.log(result)
}