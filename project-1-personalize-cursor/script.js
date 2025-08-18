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
    gsap.to(cursor,{
        scale:2
    })

})