btn.addEventListener("click", ()=>{
    let list = document.querySelector("#taskList");
    let inputTask = document.querySelector("#input1");
    let task = inputTask.value;
    let btn = document.querySelector("#btn");
    let input = document.createElement("input");
    input.type = "checkbox";
    let edit = document.createElement("button");
    edit.id = "editbtn";
    edit.innerText = "Edit";
    let delete1 = document.createElement("button");
    delete1.id = "deletebtn";
    delete1.innerText = "Delete";

    if(task === ""){
    return alert("Please enter a task.");
    }
    let li = document.createElement("li");
    let spantag = document.createElement("span");
    spantag.id = "span1";
    spantag.textContent = task;
    li.appendChild(input);
    li.appendChild(spantag);
    edit.onclick = function(){
        let newText1 = prompt("Edit your task ");

        if(newText1.trim() === ""){
            return alert("Please enter a task");
        }else{
            spantag.textContent = newText1;
        }
    };
    delete1.onclick = function(){
        li.remove();
    }
    li.appendChild(edit);
    li.appendChild(delete1);
    list.appendChild(li);
    inputTask.value = "";

});