var timeline = gsap.timeline()

timeline.from(".name",{
    y:-20,
    opacity:0,
    duration:1,
    delay:1
})
timeline.from(".right p, .right .btn",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:.5
})