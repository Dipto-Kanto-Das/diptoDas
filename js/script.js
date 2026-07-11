// ===============================
// AOS Animation
// ===============================

AOS.init({

    duration:1000,
    once:true

});




// ===============================
// Loader
// ===============================


window.addEventListener("load",()=>{


    const loader=document.getElementById("loader");


    if(loader){


        setTimeout(()=>{


            loader.style.opacity="0";


            setTimeout(()=>{

                loader.style.display="none";

            },500);


        },1000);


    }


});





// ===============================
// Navbar Scroll Effect
// ===============================


window.addEventListener("scroll",()=>{


    const navbar=document.querySelector(".navbar");


    if(window.scrollY>50){


        navbar.style.background="#111";

        navbar.style.boxShadow=
        "0 5px 20px rgba(0,0,0,.3)";


    }

    else{


        navbar.style.background="transparent";

        navbar.style.boxShadow="none";


    }



});







// ===============================
// Active Navbar Link
// ===============================


const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");



window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


let sectionTop=
section.offsetTop-150;



if(scrollY>=sectionTop){


current=section.getAttribute("id");


}



});



navLinks.forEach(link=>{


link.classList.remove("active");



if(
link.getAttribute("href")
===
"#"+current
){


link.classList.add("active");


}



});


});







// ===============================
// Typing Effect
// ===============================


const typingText=document.querySelector(".hero h3");



if(typingText){



const words=[

"Web Developer",

"IT Officer",

"Physics Instructor"

];



let index=0;

let char=0;

let deleting=false;



function type(){



let word=words[index];



if(!deleting){



typingText.innerHTML=
word.substring(0,char++);



if(char>word.length){


deleting=true;


setTimeout(type,1200);

return;


}



}

else{


typingText.innerHTML=
word.substring(0,char--);



if(char<0){


deleting=false;


index++;



if(index>=words.length){

index=0;

}


}


}



setTimeout(
type,
deleting ? 60 : 120
);



}



type();



}








// ===============================
// Dark Mode
// ===============================



const darkBtn=
document.createElement("button");



darkBtn.id="darkToggle";


darkBtn.innerHTML="🌙";


document.body.appendChild(darkBtn);





let mode=
localStorage.getItem("theme");



if(mode==="dark"){


document.body.classList.add("dark-mode");


darkBtn.innerHTML="☀️";


}




darkBtn.addEventListener("click",()=>{


document.body.classList.toggle(
"dark-mode"
);



if(
document.body.classList.contains(
"dark-mode"
)
){


localStorage.setItem(
"theme",
"dark"
);


darkBtn.innerHTML="☀️";


}

else{


localStorage.setItem(
"theme",
"light"
);


darkBtn.innerHTML="🌙";


}



});








// ===============================
// Card Scroll Animation
// ===============================


const cards=document.querySelectorAll(".card");



const observer=new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{

threshold:0.2

}

);




cards.forEach(card=>{


card.style.opacity="0";


card.style.transform=
"translateY(40px)";


card.style.transition=
".6s";



observer.observe(card);



});






// ===============================
// EmailJS Contact Form
// ===============================

emailjs.init({
    publicKey: "uiEpzxs3vaGf_qArJ"
});


const contactForm = document.getElementById("contact-form");


if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();


let form = this;


// First: Send message to your Gmail

emailjs.sendForm(

"service_ejse2qx",

"template_lkfqtku",

form

)

.then(function(){

console.log("Owner Email Sent");


// Second: Auto Reply

return emailjs.sendForm(

"service_ejse2qx",

"template_mlaicxk",

form

);


})

.then(function(){

console.log("Auto Reply Sent");


alert(
"Message Sent Successfully!"
);


form.reset();


})


.catch(function(error){

console.log(error);

alert(error.text);

});


});

}
// ===============================
// Image Hover Animation
// ===============================


document.querySelectorAll("img")
.forEach(img=>{



img.addEventListener(
"mouseenter",
()=>{


img.style.transform=
"scale(1.05)";


});




img.addEventListener(
"mouseleave",
()=>{


img.style.transform=
"scale(1)";


});



});







// ===============================
// Console Message
// ===============================


console.log(
"Portfolio Website - Dipto Kanto Das"
);