let pr1=document.getElementsByClassName('s11')[0],
    pr2=document.getElementsByClassName('s12')[0],
    pr3=document.getElementsByClassName('s13')[0],
    pr4=document.getElementsByClassName('s14')[0];
console.log(document.documentElement.scrollTop);
window.onscroll=function(){

    if(document.documentElement.scrollTop>680){
        pr1.style.width="90%";
        pr2.style.width="80%";
        pr3.style.width="70%";
        pr4.style.width="75%";
    }
};
console.log(document.getElementById('bullet').children[0]);
console.log(document.querySelectorAll('#bullet div'))
let 
bullet1=document.getElementById('bullet').children[0],
bullet2=document.getElementById('bullet').children[1],
bullet3=document.getElementById('bullet').children[2],
h3=document.getElementById('h3');

bullet1.onclick=function(){
    h3.innerHTML='mahmoud farghaly'
}
bullet2.onclick=function(){
    h3.innerHTML='mohamed adel'
}
bullet3.onclick=function(){
    h3.innerHTML='abdelrahman mohamed'
}

console.log(document.querySelectorAll('.links li a'));
let links=document.querySelectorAll('.links li a');

links.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({behavior:'smooth'})
    })
})
let slide=document.getElementsByClassName('slide')[0],
    icon=document.getElementsByClassName('fas fa-star')[0];
icon.onclick=function(){
slide.classList.toggle('open')
}

$('.bullet div').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
});