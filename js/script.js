
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){

    // 1st way

    // if(links.classList.contains("show-links")){
    //     links.classList.remove('show-links');
    // }else{
    //     links.classList.add("show-links");
    // }


    // 2nd way
    
    links.classList.toggle("show-links");
})