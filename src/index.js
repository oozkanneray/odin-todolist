import header from "./header";
import leftBar from "./left-bar.js";
import { right,taskRight } from "./right.js";

let allTask = [];

class Todo{
    constructor(todo,favor){
        this.todo = todo;
        this.favor = favor;
    }
}
    header();
    leftBar();
    right();

    

const addBtn = document.querySelector(".addCard-addBtn");
const allTaskBtn = document.querySelector(".allTask");
const favorTask = document.querySelector(".favorTask");
const nonFavorTask = document.querySelector(".nonfavorTask");

nonFavorTask.onclick = () =>{
    document.querySelector(".tasks").innerHTML = ""

    allTask.forEach(e => {
        if(!e.favor){
            taskRight(e.todo,allTask)
        }
    });
}

allTaskBtn.onclick = () =>{
    document.querySelector(".tasks").innerHTML = ""

    allTask.forEach(e => {
        if(e.favor){
            taskRight(e.todo,allTask)
            document.querySelectorAll(".fa-star").forEach(s => {
                s.style.color = "yellow";
            });
        }
        else if(!e.favor){
            taskRight(e.todo,allTask)
            document.querySelectorAll(".fa-star").forEach(s => {
                s.style.color = "black";
            });
        }
    });
}

favorTask.onclick = () =>{
    document.querySelector(".tasks").innerHTML = ""
    allTask.forEach(e => {
        if(e.favor){
            taskRight(e.todo,allTask)
            document.querySelectorAll(".fa-star").forEach(s => {
                s.style.color = "yellow"
            });
        }
    });
}

addBtn.onclick = () => {
    const input = document.querySelector(".addinput")
    const addCardContainer = document.querySelector(".addCardContainer");

    if(input.value != ""){
        allTask.push(new Todo(input.value,false))
        taskRight(input.value,allTask)
        input.value = "";
        addCardContainer.style.display = "none";
        input.placeholder = "Input Here"
    }else {
        input.placeholder = "ENTER HERE"
    }
    
}   