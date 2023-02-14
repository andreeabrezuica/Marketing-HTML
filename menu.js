const PMenu= document.querySelector('#menu .icon');
const POpen=document.querySelector('#cuprins');
const PClose=document.querySelector('#cuprins .c-button');
const PLink=document.querySelectorAll('#cuprins nav ul li a');

 PMenu.addEventListener('click',()=>{
 cuprins.classList.add('show');
 document.body.style.overflow="hidden";
})

PClose.addEventListener('click', ()=>{
    cuprins.classList.remove('show');
    document.body.style.overflow="initial";
})

PLink.forEach(link =>{
    link.addEventListener('click', ()=>{
        cuprins.classList.remove('show');
        document.body.style.overflow="initial";   
    })
})