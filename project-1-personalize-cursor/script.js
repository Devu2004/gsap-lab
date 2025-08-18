let main = document.querySelector('#main');
let cursor = document.querySelector('.cursor')
let image = document.querySelector("#image")

main.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:2,
        ease :"elastic.out(1,0.5)",
    })
})
image.addEventListener("mouseenter",function(){
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale:3,
        border:".5px solid white",
        background:"#ffffffd7"
    })
})
image.addEventListener("mouseleave",function(){
cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        border:"",
        background:"white"
    })
})