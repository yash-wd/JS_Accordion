
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 

// ------------------------------------Accordion---------------------------------- 

const accordion = document.getElementsByClassName ("contentbox");

for ( i = 0; i < accordion.length; i++) {
   accordion [i].addEventListener('click', function(){
      this.classList.toggle('active')
   }) 
}