let buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener("click", function (){
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    })
})

// //////////////////////// DAILY FUNCTION

// WORK

document.querySelector(".btn-daily").addEventListener("click", function(){
    document.querySelector(".work-hours").textContent = "5hrs"
    document.querySelector(".work-previous").textContent = "Yesterday - 7hrs"

    // PLAY

    document.querySelector(".play-hours").textContent = "1hrs"
    document.querySelector(".play-previous").textContent = "Yesterday - 2hrs"
    
    // STUDY

    document.querySelector(".study-hours").textContent = "0hrs"
    document.querySelector(".study-previous").textContent = "Yesterday - 1hrs"
  
    // EXERCISE

    document.querySelector(".exercise-hours").textContent = "1hrs"
    document.querySelector(".exercise-previous").textContent = "Yesterday - 1hrs"
    
    // SOCIAL

    document.querySelector(".social-hours").textContent = "1hrs"
    document.querySelector(".social-previous").textContent = "Yesterday - 3hrs"
   
    // SELFCARE

    document.querySelector(".selfCare-hours").textContent = "0hrs"
    document.querySelector(".selfCare-previous").textContent = "Yesterday - 1hrs"

});

// //////////////////////// WEEKLY FUNCTION  **DEFAULT**

document.querySelector(".btn-weekly").addEventListener("click", function(){
    
    // WORK
    document.querySelector(".card-hours").textContent = "32hrs"
    document.querySelector(".previous-hours").textContent = "Last Week - 36hrs"

    // PLAY
    document.querySelector(".play-hours").textContent = "10hrs"
    document.querySelector(".play-previous").textContent = "Last Week - 8hrs"
   
    // STUDY
    document.querySelector(".study-hours").textContent = "4hrs"
    document.querySelector(".study-previous").textContent = "Last Week - 7hrs"
   
    // EXERCISE
    document.querySelector(".exercise-hours").textContent = "4hrs"
    document.querySelector(".exercise-previous").textContent = "Last Week - 5hrs"
    
    // SOCIAL
    document.querySelector(".social-hours").textContent = "5hrs"
    document.querySelector(".social-previous").textContent = "Last Week - 10hrs"
    
    // SELFCARE
    document.querySelector(".selfCare-hours").textContent = "2hrs"
    document.querySelector(".selfCare-previous").textContent = "Last Week - 2hrs"

});

// //////////////////////// MONTHLY FUNCTION

document.querySelector(".btn-monthly").addEventListener("click", function(){

    // work
    document.querySelector(".card-hours").textContent = "103hrs"
    document.querySelector(".previous-hours").textContent = "Last Month - 128hrs"
   
    // PLAY
    document.querySelector(".play-hours").textContent = "23hrs"
    document.querySelector(".play-previous").textContent = "Last Month - 29hrs"
    
    // STUDY
    document.querySelector(".study-hours").textContent = "13hrs"
    document.querySelector(".study-previous").textContent = "Last Month - 19hrs"
    
    // EXERCISE
    document.querySelector(".exercise-hours").textContent = "11hrs"
    document.querySelector(".exercise-previous").textContent = "Last Month - 18hrs"
    
    // SOCIAL    
    document.querySelector(".social-hours").textContent = "21hrs"
    document.querySelector(".social-previous").textContent = "Last Month - 23hrs"
    
    // SELFCARE
    document.querySelector(".selfCare-hours").textContent = "7hrs"
    document.querySelector(".selfCare-previous").textContent = "Last Month - 11hrs"

});
