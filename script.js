
// ===============================
// AOS Animation
// ===============================

AOS.init({

    duration:1000,

    once:true

});




// ===============================
// Loading Screen
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
// Navbar Shadow
// ===============================


window.addEventListener("scroll",()=>{


    const navbar=document.querySelector(".navbar");


    if(window.scrollY>50){


        navbar.style.background="#111";

        navbar.style.boxShadow=
        "0 5px 20px rgba(0,0,0,.3)";


    }

    else{


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


        let top=section.offsetTop-150;


        if(scrollY>=top){


            current=section.id;


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


const typingElement=
document.querySelector(".hero h3");



if(typingElement){


const words=[


"Web Developer",

"IT Officer",

"Physics Instructor",

"Frontend Developer"


];


let wordIndex=0;

let charIndex=0;

let deleting=false;



function typing(){


let word=words[wordIndex];



if(!deleting){


typingElement.innerHTML=
word.substring(0,charIndex++);



if(charIndex>word.length){


deleting=true;


setTimeout(typing,1200);


return;


}



}

else{


typingElement.innerHTML=
word.substring(0,charIndex--);



if(charIndex<0){


deleting=false;


wordIndex++;


if(wordIndex>=words.length){

wordIndex=0;

}


}


}



setTimeout(
typing,
deleting ? 50 : 100
);



}


typing();


}






// ===============================
// Dark Mode
// ===============================


const darkButton=
document.createElement("button");


darkButton.id="darkToggle";


darkButton.innerHTML="🌙";


document.body.appendChild(darkButton);




let darkMode=
localStorage.getItem("darkMode");



if(darkMode==="enabled"){


document.body.classList.add("dark-mode");


darkButton.innerHTML="☀️";


}




darkButton.onclick=()=>{


document.body.classList.toggle(
"dark-mode"
);



if(
document.body.classList.contains(
"dark-mode"
)
){


localStorage.setItem(
"darkMode",
"enabled"
);



darkButton.innerHTML="☀️";


}

else{


localStorage.setItem(
"darkMode",
"disabled"
);



darkButton.innerHTML="🌙";


}


};






// ===============================
// Card Animation
// ===============================


const cards=
document.querySelectorAll(".card");



const observer=
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform=
"translateY(0)";


}


});


});



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


/*

EmailJS Setup:

1. Create account:
https://www.emailjs.com/

2. Add your:

Public Key
Service ID
Template ID


Replace below values


*/


if(typeof emailjs !== "undefined"){


emailjs.init({

publicKey:
"YOUR_PUBLIC_KEY"


});


}



const contactForm=
document.querySelector("#contact-form");



if(contactForm){



contactForm.addEventListener(
"submit",
function(e){


e.preventDefault();



emailjs.sendForm(


"YOUR_SERVICE_ID",


"YOUR_TEMPLATE_ID",


this


)

.then(()=>{


alert(
"Message Sent Successfully!"
);


this.reset();


})


.catch(()=>{


alert(
"Message Failed!"
);


});



});



}






// ===============================
// Image Animation
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
// Console
// ===============================


console.log(
"Portfolio By Dipto Kanto Das"
);