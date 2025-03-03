const accordion = document.querySelectorAll(".faq-card_summary");

// Hide/Show answer when question is clicked
for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener(("click"), faqToggle);
}

// Hide/Show answer using keyboard navigation

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("keydown",function(event){
        if(event.key ===  "Enter" || event.key === " " || event.key === "Tab"){
            faqToggle.call(this);
        }
    });
}

// Hide/Show answer main function
function faqToggle(){
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
    }else{
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}