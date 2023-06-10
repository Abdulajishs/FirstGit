var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form submit event
form.addEventListener('submit' , addItem);

//Delete event
itemList.addEventListener("click" , removeItem );

//Add Item
function addItem(e) {
    e.preventDefault();

    //get input value
    var newItem = document.getElementById("item").value;;

    //create new li element
    var li = document.createElement("li");

    //add class
    li.className = "list-group-item";
    // console.log(li);   //it works hit the submit button

    //add text node with input value
    li.appendChild(document.createTextNode(newItem)); 

    //create del button element
    var deleteBtn = document.createElement("button");

    //add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //Append text node 
    deleteBtn.appendChild(document.createTextNode("X"));

    //append button to li 
    li.appendChild(deleteBtn);

    //append li tpo list
    itemList.appendChild(li)
}


//Remove list
function removeItem(e) {
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
 