//Getting all required elements
const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearBtn = document.querySelector(".clear-button");

// we will call this function while checking-unchecking, adding, deleting the task
function allTasks(){
    let tasks = document.querySelectorAll(".pending");

    // if 'tasks' length is 0 then pending num text content will be no, if not pending num value will be task's length
    pendingNum.textContent = tasks.length === 0 ? "0" :tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0) {
        todoLists.style.marginTop = "20px";
        clearBtn.style.pointerEvents = "auto";
        return
    }
    todoLists.style.marginTop = "0";
    clearBtn.style.pointerEvents = "none";
}

// //add tasks when we put value in textarea and press enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //the trim func removes space of front and back of input value
    console.log(inputVal);

//if enter button is clicked and input value length is >0
    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = ` <li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox">
        <span class="task"> ${inputVal} </span>
        <i class="uil uil-trash" onclick="deleteTask(this )"></i>
       </li>`;

       todoLists.insertAdjacentHTML("beforeend", liTag); //inserting li tag inside todolists div
       inputField.value = ""; //removing value from input field
       allTasks();
    }
});

//checking and unchecking checkbox 
function handleStatus(e) {
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

//deleting tasks when delete icon is clicked
function deleteTask(e){
    e.parentElement.remove(); //getting parent element and removing it
    allTasks();
}

//deleting all tasks when clear all is clicked
clearBtn.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
});
