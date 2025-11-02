const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector("button");
addButton.addEventListener("click", function(){
    if(inputBox.value===''){
        alert("You must write something to add the task")

    }
    else{
        let task =document.createElement("li")
        task.innerHTML=inputBox.value;
        listContainer.appendChild(task);
        let cross = document.createElement("span")
        cross.innerHTML="\u00d7";
        task.appendChild(cross);
    }
    inputBox.value="";
    saveData();
}, false);

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();