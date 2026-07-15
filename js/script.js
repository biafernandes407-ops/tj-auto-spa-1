// HEADER

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

// ANIMAÇÃO

const elementos = document.querySelectorAll(

".about,.packages,.before-after,.reviews,.contact"

);

const aparecer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

elementos.forEach(el=>{

el.classList.add("hidden");

aparecer.observe(el);

});
// MENU MOBILE

const toggle=document.querySelector(".menu-toggle");

const menu=document.querySelector(".menu");

toggle.addEventListener("click",()=>{

menu.classList.toggle("active");

});
document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});