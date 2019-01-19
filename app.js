var mainDiv = document.getElementById('mainDiv');

var heading = document.createElement('h1')
heading.setAttribute("id","h1")
var headingText = document.createTextNode("TODO APP")
heading.appendChild(headingText)
mainDiv.appendChild(heading)

var inputField = document.createElement('input',"text");
inputField.setAttribute('id',"userInp")

inputField.style.border="1px solid black"
inputField.style.height="50px"
inputField.style.width="800px"

mainDiv.appendChild(inputField)

var btn= document.createElement('button');
btn.setAttribute("id",'submitBtn')
var btnText = document.createTextNode("Add")
btn.setAttribute('onclick',"addData()")

btn.style.height="50px"
btn.style.width="100px"
btn.style.marginLeft="50px"
btn.style.borderRadius="50px"

btn.appendChild(btnText)
mainDiv.appendChild(btn)

//delete All
var delAllBtn = document.createElement('button')
var delAllBtnText= document.createTextNode("Delete All")
delAllBtn.setAttribute("id",'delAllBtn')
delAllBtn.addEventListener("click",function(){
    ulList.remove()
})
console.log(delAllBtn)
delAllBtn.appendChild(delAllBtnText)
mainDiv.appendChild(delAllBtn)

delAllBtn.style.height="50px"
delAllBtn.style.width="100px"
delAllBtn.style.marginLeft="50px"
delAllBtn.style.borderRadius="50px"

var inp
var ulList
var liList

var listDiv = document.createElement('div')
listDiv.setAttribute('id',"list")


function addData(){
     inp= document.getElementById('userInp').value;
    var clearField = document.getElementById('userInp').value=" ";
   
    ulList = document.createElement('ul')
    ulList.setAttribute('id',"userList")
    console.log(ulList)

    var editBtn = document.createElement('button')
    var editBtnText= document.createTextNode("Update")
    editBtn.setAttribute('onclick',"updateData()")
    editBtn.setAttribute("id",'update')

    var delBtn = document.createElement('img')
    delBtn.setAttribute("id",'delete')
    delBtn.setAttribute("src",'Images/delete.png')
   
    delBtn.addEventListener("click",function(){
        delBtn.parentNode.remove()
    })
    
    liList = document.createElement('li')
    liList.setAttribute('id',"userLiList")

    liList.style.height="50px"
    liList.style.width="800px"
    liList.style.listStyleType="none"
    liList.style.margin="5% 0%  0% 12.5%";

   var displayData = document.createTextNode(inp);

   liList.appendChild(displayData);
   
   liList.appendChild(delBtn)

   editBtn.appendChild(editBtnText)
   liList.appendChild(editBtn)
   ulList.appendChild(liList)
  
   listDiv.appendChild(ulList)
  
}
mainDiv.appendChild(listDiv)

//

function updateData(){
    var eidtion= document.getElementById('userLiList').firstChild;
    console.log(eidtion)
    var input = prompt("enter edition")
    eidtion=input
    console.log(eidtion)
    liList=eidtion
   console.log(liList)
    ulList.appendChild(liList)
   
    listDiv.appendChild(ulList)
}


