const buttonAdd = document.querySelector(".btn-add");
const taskInput = document.querySelector(".task-input");
buttonAdd.addEventListener('click',()=>{
    if(taskInput.value.length == 0){
        taskInput.placeholder = "Please Enter a Task!";
        // Verficy if input is empty  
    }
})