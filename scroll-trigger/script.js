gsap.from(".box-1",{
    rotate:360,
    duration:1,
    delay:1,
    scale:0,
   
})
gsap.from(".container h1, .container p",{
    opacity:0,
    duration:1,
    delay:1,
    y:50,
    stagger:.5,
     scrollTrigger:{
        trigger:".container h1, .container p",
        scroller:"body",
        markers:false,
        start:"top 60%",
        end:"top 30%",
        scrub:1, 
        // scrub is used for runing the effect smoothly with page
        pin:true
        // pin is used for pin the element 
    }
})