/*==========================================
STICKY HEADER
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/*==========================================
HAMBURGER
==========================================*/

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{

    navMenu.classList.toggle("show");

});

/*==========================================
ACTIVE MENU
==========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link=>{

    if(link.getAttribute("href")==currentPage){

        link.classList.add("active");

    }

});

/*==========================================
COUNTER
==========================================*/

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter=>{

        const target = +counter.dataset.target;

        const speed = target / 120;

        const update = ()=>{

            const value = +counter.innerText;

            if(value < target){

                counter.innerText = Math.ceil(value + speed);

                setTimeout(update,20);

            }

            else{

                counter.innerText = target;

            }

        }

        update();

    });

}

const heroCounter = document.querySelector(".hero-counter");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            runCounter();

            observer.disconnect();

        }

    });

});

observer.observe(heroCounter);

/*==========================================
SCROLL REVEAL
==========================================*/

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            item.classList.add("active");

        }

    });

});

/*==========================================
SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*==========================================
BACK TO TOP
==========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


