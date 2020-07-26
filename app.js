var list=document.getElementById("list")
function add(){
    var todo = document.getElementById("todo-item");
    var li = document.createElement("li")
    var item =document.createTextNode(todo.value);
li.appendChild(item)

list.appendChild(li)
todo.value="";

var delBtn=document.createElement("button")
var delText=document.createTextNode("Delete")
delBtn.appendChild(delText)
li.appendChild(delBtn)
delBtn.setAttribute("onclick","delFunc(this)")

var editBtn=document.createElement("button")
var editText=document.createTextNode("Edit")
editBtn.appendChild(editText)
li.appendChild(editBtn)
editBtn.setAttribute("onclick","editFunc(this)")

delBtn.setAttribute("class","add")

editBtn.setAttribute("class","add")

}

function delFunc(e){
e.parentNode.remove();
}


function delAll(){
    list.innerHTML=""
}
function editFunc(e){
// console.log(e.parentNode.childNodes[0]);
var val=e.parentNode.firstChild.nodeValue;
var editVal=prompt("Enter edit text",val)
e.parentNode.firstChild.nodeValue=editVal;
}