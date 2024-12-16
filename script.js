const page1Animation = () => {
    var tl = gsap.timeline();
    tl.from("nav h2, nav ul li, nav button", {
        y: -50,
        duration: 0.7,
        delay: 0.5,
        stagger: 0.1,
    });
    tl.from("#hero h1", {
        opacity: 0,
        duration: 0.5,
        y: 20,
    });
    tl.from("#hero p, #hero button", {
        opacity: 0,
        duration: 0.5,
        y: 20,
        stagger: 0.3,
    });
    tl.from(
        "#hero img",
        {
            x: 100,
            opacity: 0,
            duration: 1,
        },
        "-=0.5",
    );
    tl.from("#brandLogo img", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
    });
};
const page2Animation = () => {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#card",
            scroller: "body",
            start: "top 60%",
            end: "top 40% ",
            scrub: 2,
        },
    });
    tl2.from("#services h1, #services p", {
        opacity: 0,
        duration: 0.8,
        x: -150,
    });
    tl2.from(
        "#card1, #card3",
        {
            x: -150,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
        },
        "anim",
    );
    tl2.from(
        "#card2, #card4",
        {
            x: 150,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
        },
        "anim",
    );
    gsap.to("#pinTxt h1", {
        transform: "translateX(-300%)",
        duration: 1,
        scrollTrigger: {
            trigger: "#pinTxt h1",
            scroller: "body",
            scrub: 4,
            start: "top -15%",
            end: "top -100%",
            pin: true,
        },
    });
};
page1Animation();
page2Animation();
