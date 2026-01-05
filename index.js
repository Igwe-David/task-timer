const taskInput = document.getElementById("task-input");            
const timeInput = document.getElementById("time-input");            
const inputSection = document.querySelector(".input-section");      
const statusMessage = document.getElementById("status-message");    
const addTaskButton = document.getElementById("start-btn");         
const taskContainer = document.querySelector(".task-container");    
const taskDisplayed = document.getElementById("task-name");         
const timeDisplayed = document.getElementById("timer-display");     
const controlButtons = document.querySelector(".controls");         
const pauseButton = document.getElementById("pause-btn");           
const deleteButton = document.getElementById("delete-btn");         

addTaskButton.addEventListener("click", addTask);                   

function addTask(){                                                 
 if (taskInput.value === "") {                                      
  statusMessage.textContent = "Please Input a Task";                
  return;                                                           
}  else {                                                           
  let taskInputted = taskInput.value;                               
  taskInput.disabled = true;                                        
  timeInput.disabled = false;                                       

 if (timeInput.value === "" || timeInput.value < 0){                                       
   statusMessage.textContent = "PLease input the time for the task" 
   return;
 }                                                                  

else{                                                               
let timeInputted = timeInput.value;                                 
timeInput.disabled = true;                                          
statusMessage.style.display = "none";                               
inputSection.style.display = "none";                                

 displaytask(taskInputted, timeInputted);                                                                             
}}                                                                  
};  
                                                                 
function displaytask(task, time) {                                  
  taskDisplayed.innerText = task;                                   
  timeDisplayed.innerText = time;                                   
  taskContainer.style.display = "block";                            
  startCountdown(time);                                          
}     

let countDownTimer = null;
let totalSeconds = 0;
let isPaused = false;

function startCountdown(minutesInput) { 
 totalSeconds = parseInt(minutesInput, 10) * 60;
 countDownTimer = setInterval(runTimer, 1000);     
};

function runTimer(){    
 let m = Math.floor(totalSeconds / 60);                             
 let s = totalSeconds % 60;                                  

let displayMinutes = m.toString().padStart(2, "0");         
let displaySeconds = s.toString().padStart(2, "0");         

timeDisplayed.innerText = `${displayMinutes}:${displaySeconds}`;
        
totalSeconds --;                                                
console.log(totalSeconds);  

 if(totalSeconds <= 0){           
  clearInterval(countDownTimer);         
  timeDisplayed.innerText= "Finished";                  
  pauseButton.disabled = true;
  playSound();   
  deleteButton.disabled = false;                                            
    } else{
       pauseButton.disabled = false;
    }
  };

  pauseButton.addEventListener("click", pauseTimer);
    
   function pauseTimer(){
    if (!isPaused){
    clearInterval(countDownTimer);
    pauseButton.textContent="Resume";
    isPaused = true;
    deleteButton.disabled = false;
    } else {
    countDownTimer = setInterval(runTimer, 1000);
    isPaused = false;
    pauseButton.textContent = "Pause";
    deleteButton.disabled = true;
  }
   };

  deleteButton.addEventListener("click",deleteCurrentTask);

  function deleteCurrentTask(){
    inputSection.style.display = "flex";
    taskContainer.style.display = "none";
    taskInput.value = "";
    timeInput.value = "";
    taskInput.disabled = false;
    deleteButton.disabled = true;
    clearInterval(countDownTimer);
    countDownTimer = null;
    totalSeconds = 0;
    isPaused = false;
    pauseButton.textContent = "Pause";
    statusMessage.textContent = "";
    statusMessage.style.display = "block";
  };

  function playSound(){
   const audio = new Audio('tada.mp3');
   audio.play();
  };
    


                                                                    