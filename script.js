
//for the side bar manipulation.
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}








document.addEventListener('DOMContentLoaded', function(){
    const button1click = document.getElementById('button1');
    const taskadder = document.getElementById('taskadder');
    const taskview = document.getElementById('taskview');
    const button2click = document.getElementById('button2');
    

    button1click.addEventListener('click', function(){
        if(taskadder.style.display === 'none'){
            taskadder.style.display = 'block';
        }
        else{
            taskadder.style.display= 'none';
        }
       
    })
    
    button2click.addEventListener('click', function(){
        if(taskview.style.display === 'none'){
            taskview.style.display = 'block';
        }
        else{
            taskview.style.display= 'none';
        }
       
    })
})
//the task system


function addTask() {
    
    var taskInput = document.getElementById('taskInput').value;
    var taskType = document.getElementById('taskTypeSelect').value;
    if (taskInput !== '') {
        var newDate = new Date();
        var dateString = newDate.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '');
        var li = document.createElement('li');
         //creating for the text
         var task = document.createElement('div');
         task.classList.add('task');
       
         

        // createing the date
        var date = document.createElement('div');
        date.classList.add('time');
        date.appendChild(document.createTextNode(dateString));
      
        // Assigning icon based on task type
     var iconClass = '';
        switch (taskType) {
            case 'schooltask':
                iconClass = '<span class="material-symbols-outlined">school</span>';
                break;
            case 'worktask':
                iconClass = '<span class="material-symbols-outlined">work</span>';
                break;
            case 'gym':
                iconClass = '<span class="material-symbols-outlined">fitness_center</span>';
                break;
            case 'home':
                iconClass = '<span class="material-symbols-outlined">home</span>';
                break;
            case 'traveling':
                iconClass = '<span class="material-symbols-outlined">flight_takeoff</span>';
                break;
            case 'sport':
                iconClass = '<span class="material-symbols-outlined">sports_soccer</span>';
                break;
            case 'personal':
                iconClass = '<span class="material-symbols-outlined">settings_accessibility</span>';
                    break;
            default:
                iconClass = 'default-icon';
        }
        
        task.innerHTML = `${taskInput}     ${iconClass}`

       
        li.appendChild(task);
        li.appendChild(date);
  
        // Adding the li to the taskList
        var taskList = document.getElementById('taskview');
        var checkdiv = document.createElement('div');
        checkdiv.classList.add('type')
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkdiv.appendChild(checkbox)
        checkbox.addEventListener('change', function() {
          if (this.checked) {
              checkdiv.style.backgroundColor = 'green';
              var completeText = document.createElement('div');
              completeText.appendChild(document.createTextNode('Task Complete'));
              completeText.className = 'complete-text';
              li.appendChild(completeText);
          } else {
              checkdiv.style.backgroundColor = 'yellow';
              var completeText = li.querySelector('.complete-text');
              if (completeText) {
                  li.removeChild(completeText);
              }
          }
        });
      
        li.insertBefore(checkdiv, li.firstChild);
        
       
  
        // Clearing the input field
        document.getElementById('taskInput').value = '';
        if(document.getElementById('taskInput').value == ''){
            var addedText = document.createElement('div');
            addedText.appendChild(document.createTextNode('Task Added'));
            addedText.className = 'added-text';
            const li  = document.getElementById('added');
            li.appendChild(addedText);
        }
       
  
  
  
  
  
  
        
  
        // Create and append the delete and update buttons
        var deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('Delete'));
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(deleteBtn);



        var updateBtn = document.createElement('button');
    updateBtn.appendChild(document.createTextNode('Update'));
     updateBtn.onclick = function() {
    var text = li.children[1];
    var input = document.createElement('input');
    input.type = 'text';
    input.value = text.textContent;
    input.onblur = function() {
        if (input.value.trim() !== '') {
            text.textContent = input.value;
        }
        li.removeChild(input);
    };
    
    // Remove any existing input before adding a new one
    var existingInput = li.querySelector('input[type="text"]');
    if (existingInput) {
        li.removeChild(existingInput);
    }
    
    li.insertBefore(input, updateBtn);
};
li.appendChild(updateBtn);
}
taskList.appendChild(li);
   
  }
  
  
      document.addEventListener('DOMContentLoaded', () => {
          // Calling the task list
          document.getElementById('button1').addEventListener('click', function() {
             
            
            var form = document.querySelector('.selecting');
            if (form.style.display === 'none') {
              form.style.display = 'block';
              console.log("updated");
            } else {
              form.style.display = 'none';
              console.log("updated");
            }
          });
     
        
          // Calling form list
     document.getElementById('pro').addEventListener('click', function(){
      const alter = document.querySelector('.Myform')
          alter.style.display = 'block';
          console.log("updated");
       
     })
   

     })
      
          