/* =========================================
   Premium Projects JavaScript
   Dipto Kanto Das Portfolio
========================================= */



// ==========================
// AOS Animation
// ==========================

AOS.init({

    duration:1000,

    once:true

});





// ==========================
// Project Filter
// ==========================


const filterButtons = document.querySelectorAll(".filter-btn");

const projects = document.querySelectorAll(".project-item");



filterButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        // Remove Active Class

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });



        // Add Active Class

        button.classList.add("active");



        let filter = button.getAttribute("data-filter");



        projects.forEach(project=>{


            if(
                filter === "all" ||
                project.classList.contains(filter)
            ){


                project.style.display="block";


                setTimeout(()=>{

                    project.style.opacity="1";

                    project.style.transform="translateY(0)";


                },100);



            }

            else{


                project.style.opacity="0";

                project.style.transform="translateY(40px)";


                setTimeout(()=>{

                    project.style.display="none";

                },300);


            }


        });


    });


});







// ==========================
// Search Project
// ==========================


const searchBox = document.getElementById(
    "projectSearch"
);



if(searchBox){


searchBox.addEventListener(
"keyup",
function(){


let value = this.value.toLowerCase();



projects.forEach(project=>{


let text = project.innerText.toLowerCase();



if(text.includes(value)){


project.style.display="block";


}

else{


project.style.display="none";


}



});



});


}







// ==========================
// Card Animation
// ==========================


projects.forEach(project=>{


project.style.transition=".5s";

project.style.opacity="1";

project.style.transform="translateY(0)";


});







// ==========================
// Button Hover Sound Effect
// ==========================


const buttons = document.querySelectorAll(
".btn"
);


buttons.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{


button.style.transform=
"translateY(-4px)";


});



button.addEventListener(
"mouseleave",
()=>{


button.style.transform=
"translateY(0)";


});


});







// ==========================
// Lazy Loading Images
// ==========================


const images=document.querySelectorAll(
"img"
);



images.forEach(img=>{


img.setAttribute(
"loading",
"lazy"
);


});







// ==========================
// Navbar Scroll Effect
// ==========================


window.addEventListener(
"scroll",
()=>{


const navbar =
document.querySelector(
".navbar"
);



if(window.scrollY > 50){


navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.25)";


}

else{


navbar.style.boxShadow="none";


}


});







// ==========================
// Modal Loading Message
// ==========================


const demoModal =
document.getElementById(
"kspiDemo"
);



if(demoModal){


demoModal.addEventListener(
"show.bs.modal",
()=>{


console.log(
"Live Demo Opened"
);


});


}







// ==========================
// Page Loading Animation
// ==========================


window.addEventListener(
"load",
()=>{


document.body.style.opacity="1";


});







// ==========================
// Console
// ==========================


console.log(
"Premium Projects Page Loaded - Dipto Kanto Das"
);