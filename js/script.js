gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Scroll down arrow animation
gsap.to(".arrow", { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });

// --- PROGRESS BAR ---
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 }
});

// Navigation bar
gsap.utils.toArray("nav a").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 0.5, scrollTo: e.target.getAttribute("href") });
  });
});

// sets up the class toggle on each scrolling text box
// so that it becomes opaque when in view and transparent when exiting
gsap.utils.toArray('.step').forEach(step => {
  ScrollTrigger.create({
    trigger: step,
    start: 'top 80%',
    end: 'bottom 20%',
    toggleClass: 'active',
    // markers: true,
    id: 'toggle-active-class'
  });
});

// First svg animation
// This pins the SVG animation wrapper when it hits the center of the viewport
// and releases the pin when the final textbox meets the bottom of the svg
// We use a function to define the end point to line up the top of the
// title box with the bottom of the svg
ScrollTrigger.create({
  trigger: '#svg-1-1',
  toggleActions: "play pause resume reset",
  endTrigger: '#title-2',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const svgHeight = document.querySelector('#svg-1-1')
      .offsetHeight;
    return `top ${svgHeight + (height - svgHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false,
  // markers: true,
  // scrub: true,
  id: 'svg-pin-1-1'
});

var t1 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-1-1',
    toggleActions: "play pause resume reset",
    endTrigger: '#title-2',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-1-1'
  }
});
// t1.to("#svg-1-1 #arms", {duration: 1, rotation: 90, x: 100}, 0)
// t1.to("#svg-1-1 #skirt", {duration: 1, scale: 2, ease:"back"}, 0.5)