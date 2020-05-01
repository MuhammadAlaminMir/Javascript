//Making Asynchronous Iterator

//Sometimes we have declare or make  a collection of Promise
//that time we want an Iterator but iterator is synchronous

//Now we will see how to make Asynchronous Iterator

let asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                if (i < 5) {
                    return Promise.resolve({
                        value: i++,
                        done: false,
                    });
                } else {
                    return Promise.resolve({
                        done: true,
                    });
                }
            },
        };
    },
};

let iterate = asyncIterable[Symbol.asyncIterator]();

// (async function () {
//     // let v = await iterate.next();
//     // console.log(v);
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
// })();

//we can create for of loop in hare but its name will change :
//async for wait loop

(async function () {
    for await (let v of asyncIterable) {
        console.log(v);
    }
})();
