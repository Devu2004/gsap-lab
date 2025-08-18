let initialpath = 'M 10 80 Q 960 80 1520 80'
let finalpath = 'M 10 80 Q 960 80 1520 80'
let string = document.querySelector(".string")

string.addEventListener('mousemove',(e)=>{
    initialpath = `M 10 80 Q ${e.x} ${e.y} 1520 80`
    gsap.to('svg path',{
        attr:{d:initialpath},
        duration:0.2,
        ease:"power3.out"
    })
})
string.addEventListener('mouseleave',(e)=>{
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.2,
        ease:"elastic.out(1,0.2)"
    })
})