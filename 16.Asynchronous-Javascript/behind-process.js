//Javascript Asynchronous Programming Behind Process

//We know that js behind scene use four Processing data structure to process data

//1.call stack : its process the  alignment of the function and then start executing one by one
//when its see an asynchronous item it give to the web api to process the item
//and its use lifo (last in fast out)

//2.Web api : Javascript engine have some api thats make js asynchronous
//web api collect all asynchronous item and process it one by one and the give it to task Queue
//the api is a functionality that help js work more efficiently

//3.Task Queue/ call back: In hare all our call back function are stored as list
//

//4.Event Loop : its understand the call back function alignment and when event loop see call stack is empty
//that time it take the item(line of code)and throw one by one in call stack
