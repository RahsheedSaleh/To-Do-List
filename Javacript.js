let currentSpan = null;
let currentLi = null;

btn.addEventListener("click", () => {
    let list = document.querySelector("#taskList");
    let inputTask = document.querySelector("#input1");
    let task = inputTask.value;

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = task;

    let editBtn = document.createElement("button");
    editBtn.id = "editbtn";
    editBtn.innerText = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.id = "deletebtn";
    deleteBtn.innerText = "Delete";

    editBtn.onclick = () => {
        currentSpan = span;
        document.getElementById("editInput").value = span.textContent;
        document.getElementById("editModal").style.display = "flex";
    };

    deleteBtn.onclick = () => {
        currentLi = li;
        document.getElementById("deleteModal").style.display = "flex";
    };

    li.append(checkbox, span, editBtn, deleteBtn);
    list.appendChild(li);
    inputTask.value = "";
});

/* EDIT MODAL FUNCTIONS */
document.getElementById("saveEdit").onclick = () => {
    let newText = document.getElementById("editInput").value.trim();
    if(newText === ""){
        alert("Task cannot be empty");
        return;
    }
    currentSpan.textContent = newText;
    closeEditModal();
};

function closeEditModal(){
    document.getElementById("editModal").style.display = "none";
}

/* DELETE MODAL FUNCTIONS */
document.getElementById("confirmDelete").onclick = () => {
    currentLi.remove();
    closeDeleteModal();
};

function closeDeleteModal(){
    document.getElementById("deleteModal").style.display = "none";
}
