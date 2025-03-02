const accordion = document.getElementsByClassName("faq-card_summary");

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener(("click"), function(){
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
