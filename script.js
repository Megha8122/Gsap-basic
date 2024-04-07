var tl = gsap.timeline()


tl.from("#nav-img, #nav h3, #nav-part3",{
    y:-100,
    stagger:0.2,
    delay:0.5
})

tl.from("#main h1",{
     y: 100,
     opacity:0,
     stagger:0.3
})

tl.from(".images",{
    x:150,
    duration: 1,
    stagger: 0.5,
    yoyo: true,
    opacity:0,
    zIndex: -1
})
tl.from(".play",{
    scale:0,
    opacity:0,
    duration:3
})
tl.to(".play",{
    scale: 0.8,
    yoyo: true,
    repeat: -1
})
gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        scrub: 5
    }
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:"#page2 #box"
})
gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:"#page3 #box"
})