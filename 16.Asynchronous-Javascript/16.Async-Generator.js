async function* myAsyncGenerator() {
    let i = 0;

    while (true) {
        if (i > 5) return;
        yield await Promise.resolve(i++);
    }
}

(async function () {
    for await (let v of myAsyncGenerator()) {
        console.log(v);
    }
})();
