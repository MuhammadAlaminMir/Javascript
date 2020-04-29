//Creating Own Custom Error

class CustomError extends Error {
    constructor(msg) {
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }
}

try {
    console.log("I am line 1");
    throw new Error("I am your error");
    console.log("I am line 1");
} catch (e) {
    console.log(e.message);
    console.log("this a custom err");
}
