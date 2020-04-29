//try catch error handler system
//we can declare it anywhere
//we can also set final block

function makeWords(text) {
    // try catch block

    try {
        let str = text.trim();
        let words = str.split();
        return words;
    } catch (e) {
        console.log(e.message);
    }

    // let str = text.trim();
    // let words = str.split(" ");
    // return words;
}

//let words = makeWords("     I am    a programmer"); //normal user

let words = makeWords(234); //legend

console.log(words);

try {
    console.log("I am line 1");
    throw new Error("i am the error");
    console.log("I am line 3");
    console.log("I am line 4");
} catch (e) {
    console.log(e.message);
} finally {
    console.log("I am finally block ");
}
