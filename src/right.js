
export function right(){

    const leftRight = document.querySelector(".left-right");
    const right = document.createElement("div");
    right.classList.add("right")

    const tasks = document.createElement("div")
    tasks.classList.add("tasks")

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    leftRight.appendChild(right);
    right.appendChild(tasks);
}



export function taskRight(a,allTask){
    const tasks = document.querySelector(".tasks")
    
    const task = document.createElement("div");
    task.classList.add("task");

    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");

    const taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.innerHTML = a

    const taskRight = document.createElement("div");
    taskRight.classList.add("task-right");

    const taskRightBtn1 = document.createElement("button");
    const taskRightBtn2 = document.createElement("button");
    const taskRightBtn3 = document.createElement("button");
    taskRightBtn1.classList.add("task-edit");
    taskRightBtn2.classList.add("task-delete");

    const taskRightBtn1i = document.createElement("i");
    const taskRightBtn2i = document.createElement("i");
    const taskRightBtn3i = document.createElement("i"); 
    taskRightBtn1i.classList.add("fa");
    taskRightBtn1i.classList.add("fa-pencil")
    taskRightBtn1i.addEventListener("click",function(){
    document.querySelector(".renameCardContainer").style.display = "flex";

    document.querySelector(".renameBtn").onclick = () =>{
            const index = allTask.findIndex(obj =>{
                return obj.todo === taskText.innerHTML
            })
            allTask[index].todo = document.querySelector(".renameInput").value;
            taskText.innerHTML = document.querySelector(".renameInput").value;
            document.querySelector(".renameCardContainer").style.display = "none";
            
        }
        
    })

    taskRightBtn2i.classList.add("fa");
    taskRightBtn2i.classList.add("fa-trash")
    taskRightBtn2i.addEventListener("click",function(){
        const index = allTask.findIndex(obj =>{
            return obj.todo === taskText.innerHTML
        })
        allTask.splice(index,1)
        tasks.removeChild(task);
    })
    taskRightBtn3i.classList.add("fa");
    taskRightBtn3i.classList.add("fa-star")
    taskRightBtn3i.addEventListener("click",function(){
        const index = allTask.findIndex(obj =>{
            return obj.todo === taskText.innerHTML
        })
        if(taskRightBtn3i.style.color == "yellow"){
            taskRightBtn3i.style.color = "black";
            allTask[index].favor = false;
        }
        else{
            taskRightBtn3i.style.color = "yellow"
            allTask[index].favor = true;
           }
    })
  

    taskRightBtn1.appendChild(taskRightBtn1i);
    taskRightBtn2.appendChild(taskRightBtn2i)
    taskRightBtn3.appendChild(taskRightBtn3i)
    taskRight.appendChild(taskRightBtn1);
    taskRight.appendChild(taskRightBtn2);
    taskRight.appendChild(taskRightBtn3);

    tasks.appendChild(task);
    task.appendChild(taskLeft);
    task.appendChild(taskRight)
    taskLeft.appendChild(taskText);


  
}
