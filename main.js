const buttonAdd = document.querySelector(".btn-add");
const taskInput = document.querySelector(".task-input");
const tasks = document.querySelector("#tasks");


buttonAdd.addEventListener('click',()=>{
    if(taskInput.value.length == 0){
        taskInput.placeholder = "Please Enter a Task!";
        // Verficy if input is empty  
    }else{
        tasks.innerHTML += `
            <div class="task">
                <span id="task-name">
                    <input id="my-checkbox" type="checkbox">
                    ${taskInput.value}
                </span>
                <button class="delete">
                    <i class="fa-regular fa-circle-xmark fa-2xl"></i>
                </button>
            </div>
        `;//if input field isn't empty  add div

        var current_tasks = document.querySelectorAll(".delete");
        for(var i = 0; i< current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    document.getElementById("my-checkbox").addEventListener("click", () => {
        if(document.getElementById("my-checkbox").checked){
            document.getElementById("task-name").style.textDecoration ="line-through";
        }else{
            document.getElementById("task-name").style.textDecoration ="";
        }
    })
})
