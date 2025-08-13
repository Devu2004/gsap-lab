gsap.to(".page-2 h1",{
    transform:"translateX(-20%)",
    scrollTrigger:{
        trigger:".page-2",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -150%",
        pin:true,
        scrub:2
    }
})