//EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
// console.log(document.domain);
// console.log(document.title);g
// console.log(document.URL);

// document.title= 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


//GETELEMENTBYID//

// console.log(document.getElementById("header-title");
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);

// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);     //it pays attention to the styling it is biggest differnce between the innerTExt and textcontent
// headerTitle.innerHTML = "<h3>Hello</h3>"
// headerTitle.style.borderBottom ="solid 3px #000"
// header.style.borderBottom ="solid 3px #000"



// //GETELEMENTBYCLASSNAME

// console.log(document.getElementsByClassName("list-group-item"));
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "HELLO 2";
// items[2].style.backgroundColor = "green"

// //Gives error
// // items.style.backgroundColor = "yellow" //it's not working

// // for (let i = 0; i < items.length; i++) {
// //     items[i].style.backgroundColor = "yellow"
// // }

// for (let i = 0; i < items.length; i++) {
//         items[i].style.fontWeight = "bold";
//     }


//GETELEMENTBYTAGNAME
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "HELLO 2";
// li[2].style.backgroundColor = "green"

//Gives error
// items.style.backgroundColor = "yellow" //it's not working

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "yellow"
// }

// for (let i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = "bold";
//     }

//QUERYSELECTOR

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");  
// input.value = "Hello World"; // it can defaultly grab fixed input only

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector
// (".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector
// (".list-group-item:nth-child(2)");
// secondItem.style.color = "yellow";


//QUERYSELECTORALL
// var titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "HELLO";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i <  odd.length; i++) {
//     odd[i].style.backgroundColor = "#f4f4f4"; 
//     even[i].style.backgroundColor = "#ccc";       
// }

//DELIVERABLE

// var secondItems = document.querySelector
// (".list-group-item:nth-child(2)");
// secondItems.style.background = "green";

// var thirdItems = document.querySelector
// (".list-group-item:nth-child(3)");
// thirdItems.style.visibility = "hidden";


// var items = document.querySelectorAll(".list-group-item");
// console.log(items);
// items[1].style.color = "green";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for (let i = 0; i <  odd.length; i++) {
//     odd[i].style.backgroundColor = "green"; 
// }

//TRANSVERSING DOM
// var listItems = document.querySelector("#items");
//ParentNode
// console.log(listItems.parentNode);
// listItems.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(listItems.parentNode.parentNode);

//ParentElement
// console.log(listItems.parentElement);
// listItems.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(listItems.parentElement.parentElement);

//childNode
// console.log(listItems.childNodes);

// console.log(listItems.children);
// console.log(listItems.children[1]);
// listItems.children[1].style.backgroundColor = "yellow";

//firstChild
// console.log(listItems.firstChild);
//firstElementChild
// console.log(listItems.firstElementChild);
// listItems.firstElementChild.textContent = "Hello 1"

//lastChild
// console.log(listItems.lastChild);
//lastElementChild
// console.log(listItems.lastElementChild);
// listItems.lastElementChild.textContent = "Hello 4"

//nextSibling
// console.log(listItems.nextSibling);
//nextElementSibling
// console.log(listItems.nextElementSibling);

//previousSibling
// console.log(listItems.previousSibling);
//previousElementSibling
// console.log(listItems.previousElementSibling);
// listItems.previousElementSibling.style.color = "green";

//createElement
var newDiv = document.createElement("div");

//add class
newDiv.className = "hello";

//add id
newDiv.id = "hello1";

//add Attribute
newDiv.setAttribute ("title" , "hellodiv");

//create text node
var newDivText = document.createTextNode("Hello World");

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

// console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv,h1);

//ADD HElllo world before Item 1
var newSpan = document.createElement("span");
newSpan.className = "world";
newSpan.id = "world1";
newSpan.setAttribute("title" , "worldspan");

var newSpanText = document.createTextNode("Helllo World");

newSpan.appendChild(newSpanText);

var ul = document.querySelector(".list-group")
var li = document.querySelector(".list-group-item")

ul.insertBefore(newSpanText,li)

console.log(newSpan);