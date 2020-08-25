//Call back function
//its means the function was declare fast and give it a parameter and some task/functionality
//we can declare a new function and send it to the past function then past function will get it and
//work with it and at last we got a value/data from multiply function like:

function sample(a, b, cb) {
    var c = a - b;
    var d = a + b;
    var result = cb(c, d);
    return result;
}
function sum(a, b) {
    return a + b;
}

var result = sample(5, 10, sum);
console.log(result);

var result2 = sample(5, 10, function (c, d) {
    return c - d;
});
console.log(result2);
