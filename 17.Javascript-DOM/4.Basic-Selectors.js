//Dom give us some way select html element they are:(id, className , Name, TagName)
//and the selection is like this:
//at fast we have to declare a variable to store it like

let selectId = document.getElementById("give the id as string"); //for select Id

//when we have multiply or plural item that time our methods name (getElements) we have to add s

let selectClassName = document.getElementsByClassName(
    "give the className as a string"
); //for select class name

let selectName = document.getElementsByName("give the name as string"); //for select Name

let selectTagName = document.getElementsByTagNameNS(
    "give the tag name as string "
); //for select tag

//when we using the getElementSomething that time we only get the html Element node
