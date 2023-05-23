//EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
// console.log(document.domain);
// console.log(document.title);
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

// console.log(document.getElementById("header-title"p 
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
// console.log(headerTitle);

// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);     //it pays attention to the styling it is biggest differnce between the innerTExt and textcontent

// headerTitle.innerHTML = "<h3>Hello</h3>"
// headerTitle.style.borderBottom ="solid 3px #000"
header.style.borderBottom ="solid 3px #000"

