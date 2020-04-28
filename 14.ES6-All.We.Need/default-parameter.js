//Default Parameter
//default parameter is a default value
//when we call a function but don't give it the parameter its give us NaN
//thats why we can set a default value because when user didn't gives us a parameter that time our default
//will generate and give us a result

function sqr(n) {
    return n * n;
}

//old system to set default value

function sqr1(n) {
    if (!n) {
        n = 1;
    }
    return n * n;
}

//or

function sqe2(n) {
    n = n || 1;
    return n * n;
}

//but now in es6 we have a modern way to set default value
//just give a equal sign and give the value

function sqr(n = 1) {
    return n * n;
}
//es 6 version
//its also have a problem
//when we set default value and give a parameter null or undefined its gives as a big error

function greet(name, msg) {
    console.log(`${msg}! ${name}`);
}
greet("alamin", "hello");
