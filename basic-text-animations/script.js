gsap.from("h1",{
    y:40,
    duration:1,
    delay:.5,
    opacity:"0",
    stagger:{
        each:.2,
        from:"last"
    }
})
// stagger property is used to create a delay between animations for multiple elements