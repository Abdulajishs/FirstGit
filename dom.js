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

console.log(document.getElementsByTagName("li"));
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "HELLO 2";
li[2].style.backgroundColor = "green"

//Gives error
// items.style.backgroundColor = "yellow" //it's not working

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "yellow"
}

// for (let i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = "bold";
//     }