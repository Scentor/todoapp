var txta = document.getElementById("todo")
var parent = document.getElementById("todolist")







function Addtodo(){
    var txtb = txta.value
    var inptodo = document.createElement("li")
    inptodo.setAttribute("class","list-group-item d-flex flex-row justify-content-between align-items-center text-light bg-dark")
    var inptxt = document.createTextNode(txtb)
    inptodo.appendChild(inptxt)
    parent.appendChild(inptodo)
    txta.value= " "
    var container = document.createElement("div")
    container.setAttribute("class","bg-dark")


    var delbtn = document.createElement("button")
    var dlttxt = document.createTextNode("Delete")
    delbtn.setAttribute("onclick","del(this)")
    delbtn.setAttribute("class","btn btn-primary mx-2 ")
    delbtn.appendChild(dlttxt)
    inptodo.appendChild(container)

    var editbtn = document.createElement("button")
    var edttxt = document.createTextNode("Edit")
    editbtn.setAttribute("onclick","edit(this)")
    editbtn .setAttribute("class","btn btn-danger mx-2  ")
    editbtn.appendChild(edttxt)
    

    container.appendChild(delbtn)
    container.appendChild(editbtn)
}

function del(element){
    
    element.parentNode.parentNode.remove()
}

function edit(element){
    element.parentNode.parentNode.firstChild.nodeValue=prompt("Enter Edit text")
}

function clr(){
    parent.innerHTML = " "
}



