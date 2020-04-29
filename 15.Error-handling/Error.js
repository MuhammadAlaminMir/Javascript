//handling the error called  error handling
//js gives us Error constructor to handle error
//and the constructor basically gives us an object
//when runtime have an error that time we can thrown the error obj

//custom error is useful because when we saw the we can fix the problem easily
//sometime user give us wrong data and its gives us pain
//thats way sometime we have to make our own error to force user to give the right data

//A error has three parts
//1.message
//2.fileName
//3.lineNumber

//js give us some default error :
//like:

//1.refError

console.log(a);

//2. RangeError

let e = 2.7976931348623157e308;

if (e > Number.MAX_VALUE) {
    throw new RangeError("The Number is out of Range");
}
//3.syntax error

let a = alamin;

//Custom error

let n = 10;

if (n > 5) {
    throw new Error("N is greater then then 5 ");
}
