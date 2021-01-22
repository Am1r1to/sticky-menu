let vh = window.innerHeight; //  Hauteur du viewport
let nav = document.querySelector("nav");
let hNav=nav.offsetHeight; //  Hauteur de la navigation
let scroll= vh-hNav; 
console.log(scroll),

window.addEventListener('scroll', function(){
    let alreadyScrolled= window.pageYOffset; // Position (en cours) du scrol
    if (alreadyScrolled > scroll){
        nav.classList.add("fixed");
       
    } else{
        nav.classList.remove("fixed");
    }
})

