gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
});

// scroll down arrow animation
gsap.to(".arrow", { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });

// --- PROGRESS BAR ---
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
});



// --- RED PANEL ---
gsap.from(".line-1", {
    scrollTrigger: {
        trigger: ".line-1",
        scrub: true,
        start: "top bottom",
        end: "top top"
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none"
});


// --- ORANGE PANEL ---
gsap.from(".line-2", {
    scrollTrigger: {
        trigger: ".orange",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
        pinSpacing: false
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none"
});


// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".purple",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
        pinSpacing: false
    }
});

tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
    .from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
    .to(".purple", { backgroundColor: "#28a92b" }, 0);



gsap.utils.toArray("nav a").forEach(function(a) {
    a.addEventListener("click", function(e) {
        e.preventDefault();
        gsap.to(window, { duration: 0.5, scrollTo: e.target.getAttribute("href") });
    });
});