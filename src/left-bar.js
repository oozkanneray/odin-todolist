export default function leftBar(){
    const content = document.querySelector("#content");
    const leftRight = document.createElement("div");
    leftRight.classList.add("left-right");


    const leftBar = document.createElement("div");
    leftBar.classList.add("left-bar");

    const input1 = document.createElement("input")
    input1.classList.add("nonfavorTask");
    input1.setAttribute("type","button");
    input1.value = "Tasks";
    const input2 = document.createElement("input")
    input2.classList.add("favorTask")
    input2.setAttribute("type","button");
    input2.value = "Favorite Task";
    const input3 = document.createElement("input")
    input3.classList.add("allTask")
    input3.classList.add("borderRadius")
    input3.setAttribute("type","button");
    input3.value = "All Tasks";

    const newTask = document.createElement("div")
    newTask.classList.add("new-task")

    const newTaskText = document.createElement("p")
    newTaskText.classList.add("new-task-text");
    newTaskText.textContent = "Add New Task"

    const newTaskAddBtn = document.createElement("button");
    newTaskAddBtn.classList.add("new-task-addBtn");
    newTaskAddBtn.addEventListener("click", function(){
        const addCardContainer = document.querySelector(".addCardContainer");
        addCardContainer.style.display = "flex";
    })

    const fafa = document.createElement("i");
    fafa.classList.add("fa");
    fafa.classList.add("fa-plus")


    content.appendChild(leftRight);
    leftRight.appendChild(leftBar);
    leftBar.appendChild(input1);
    leftBar.appendChild(input2);
    leftBar.appendChild(input3);
    leftBar.appendChild(newTask)
    newTask.appendChild(newTaskText);
    newTask.appendChild(newTaskAddBtn)
    newTaskAddBtn.appendChild(fafa)
}