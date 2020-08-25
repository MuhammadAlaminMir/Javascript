// Ajax = Asynchronous Javascript and xmt
//Ajax implementation with the help of Call back

//Every website gives up a  constructor/object thats called XmlHttp request
//using that constructor any website can pass http request to any website

//Http = (Hyper Text Transfer protocol)

//for get data from a website through ajax

//at fast we have to call the XmlHttpRequest
const xhr = new XMLHttpRequest();

//then give it the method like (get,post) and then give the site location
xhr.open("get", "http://jsonplaceholder.typicode.com/users");

//then declare a function onreadystatechange
xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.response); //json.parse for convert data to js array
            console.log(response);
        } else {
            console.log(xhr.status);
        }
    }
};

xhr.send();

//get request with the help of call back ******
//we can do this more easily with promise // we can see it into Promise.js

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response);
                callback(null, response);
            } else {
                callback(xhr.status, null);
            }
        }
    };
    xhr.send();
}

getRequest("http://jsonplaceholder.typicode.com/users", (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});

getRequest("http://jsonplaceholder.typicode.com/posts", (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});
