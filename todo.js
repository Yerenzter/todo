let count = 0;

function DoneTask() {
  let taskContent = document.querySelectorAll(".task-content");
  
  for(let r=0; r < taskContent.length; r++) {
    taskContent[r].addEventListener("click", () => {
     taskContent[r].style.textDecoration = TrackIfDone() === 1
      ? "line-through"
      : "none";
    })
  }
}

function TrackIfDone() {
  return count = count === 1 ? 0 : 1;
}

function DeleteTask() {
  let taskList = document.querySelector("#task-list");
  let taskBox = document.querySelectorAll(".task-box");
  let taskDelete = document.querySelectorAll(".task-delete");

  for(let r=0; r < taskBox.length; r++) {
    taskDelete[r].addEventListener("click", () => {
      taskList.removeChild(taskBox[r]);
    });
  }
}

function CreateTaskItem(task) {
  let taskList = document.querySelector("#task-list");
  
  let taskBox = document.createElement("div");
  let taskLabel = document.createElement("div");
  let taskContent = document.createElement("span");
  let taskAction = document.createElement("div");
  let taskDelete = document.createElement("button");
  
  taskBox.className = "task-box";
  taskLabel.className = "task-label";
  taskContent.className = "task-content";
  taskAction.className = "task-action";
  taskDelete.className = "task-delete";
  
  taskContent.textContent = task;
  taskDelete.textContent = "×";
  
  taskLabel.appendChild(taskContent);
  taskAction.appendChild(taskDelete);
  taskBox.appendChild(taskLabel);
  taskBox.appendChild(taskAction);
  taskList.appendChild(taskBox);
}

function Validate(arg) {
  if(arg === "" || arg[0] === " ") alert("Empty value! So cannot add task.")
  else if(arg.length > 24) alert("Maximum characters is only 24! So cannot add task.");
  else if(arg.length <= 2) alert("2 characters below are not accepted! So cannot add task.")
  else CreateTaskItem(arg);
}

function AddTask() {
  let inputText = document.querySelector("#input-text");
  
  return (
    Validate(inputText.value),
    inputText.value = "",
    DoneTask(),
    DeleteTask()
  );
}