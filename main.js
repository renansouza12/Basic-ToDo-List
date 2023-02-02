const buttonAdd = document.querySelector(".btn-add");
const taskInput = document.querySelector(".task-input");
const tasks = document.querySelector("#tasks");
buttonAdd.addEventListener('click',()=>{
    if(taskInput.value.length == 0){
        taskInput.placeholder = "Please Enter a Task!";
        // Verficy if input is empty  
    }else{
        tasks.innerHTML = `
            <div class="task">
                <span id="task-name">
                    ${taskInput.value}
                </span>
                <button class="delete">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
        `;
    }
})