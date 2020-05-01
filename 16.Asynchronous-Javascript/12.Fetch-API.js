//using fetch we can get data any api in point

//fetch return us a promise like:

const Base_URL = "http://jsonplaceholder.typicode.com/users";

let res = fetch(`${Base_URL}/1`)
    .then((res) => res.json())
    //console.log(res);   //fetch have a problem fetch can't get exact response
    // console.log(res.json());   //json gives us a resolved promise but its not a good solution
    //we can chin then block

    .then((data) => {
        console.log(data);
        return Promise.resolve("we can return a promise into then block");
    }) //and console it as a child of data and to got the str we have to make another then block
    .then((str) => {
        console.log(str);
    })
    .catch((reject) => {
        console.log(reject);
    });
