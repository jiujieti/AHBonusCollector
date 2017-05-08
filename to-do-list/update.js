
var addItem = document.querySelector(".addItem");
addItem.addEventListener("click", insertItem);

var submitItem = document.querySelector(".submitItem");
submitItem.focus();

var itemId = 0;

// add a new list item in list with button of delete
function insertItem() {
    // create a new list item with the input string
    var newItem = String(submitItem.value);
    var newEle = document.createElement("li");
    var text = document.createTextNode(newItem + "\t");
    newEle.appendChild(text);
    
    // add a ordered ID to the created new list item
    newEle.setAttribute("id", "item" + itemId);

    // add a delete button to the new list item
    var newButton = document.createElement("button");
    var buttonText = document.createTextNode("Delete this item");
    newButton.appendChild(buttonText);

    // add a class and an id to the new created
    newButton.setAttribute("class", "deleteItem");
    newButton.setAttribute("id", "bt" + itemId);
    newButton.addEventListener("click", removeItem(), true);
    
    // append created button to the list item
    newEle.appendChild(newButton);
    
    // add the created list item to the list
    var paras = document.getElementById("l1");
    paras.appendChild(newEle);

    itemId++;
}

function removeItem() {
    alert();
}