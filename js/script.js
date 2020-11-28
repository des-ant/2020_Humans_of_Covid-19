
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
gsap.utils.toArray("nav ol li a").forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 0.5, scrollTo: e.target.getAttribute("href") });
  });
});

/* Set the left margin of the sidebar to 0 to make it visible on screen */
function openNav() {
  document.getElementById("mySidebar").style.left = "0";
}

/* Set the left margin of the sidebar to -250px to hide if from screen */
function closeNav() {
  document.getElementById("mySidebar").style.left = "-250px";
}

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

// This pins the SVG animation wrapper when it hits the center of the viewport
// and releases the pin when the final textbox meets the bottom of the svg
// We use a function to define the end point to line up the top of the
// title box with the bottom of the svg
ScrollTrigger.create({
  trigger: '#svg-1-1',
  toggleActions: "play pause resume reset",
  endTrigger: '#svg-end-1-1',
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

// Svg animation
var t1 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-1-1',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-end-1-1',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-1-1'
  }
});
// L arm
t1.to("#svg-1-1 #arm-l", {duration: 1, ease: "back", rotation: -5, 
transformOrigin: "10% 90%"}, 0);
t1.to("#svg-1-1 #arm-l", {duration: 1, ease: "back", rotation: 0, 
transformOrigin: "10% 90%"}, 2);
// Animate eye brows
// State 1
t1.to("#svg-1-1 #brow-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t1.to("#svg-1-1 #brow-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// State 2
t1.to("#svg-1-1 #brow-r", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t1.to("#svg-1-1 #brow-l", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
// Animate eyes
// State 1
t1.to("#svg-1-1 #eye-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t1.to("#svg-1-1 #eye-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// Blink 1
t1.to("#svg-1-1 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t1.to("#svg-1-1 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t1.to("#svg-1-1 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t1.to("#svg-1-1 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// L eye
t1.to("#svg-1-1 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t1.to("#svg-1-1 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t1.to("#svg-1-1 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t1.to("#svg-1-1 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// Blink 2
t1.to("#svg-1-1 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t1.to("#svg-1-1 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t1.to("#svg-1-1 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t1.to("#svg-1-1 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// L eye
t1.to("#svg-1-1 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t1.to("#svg-1-1 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t1.to("#svg-1-1 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t1.to("#svg-1-1 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// State 2
t1.to("#svg-1-1 #eye-r", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t1.to("#svg-1-1 #eye-l", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);


ScrollTrigger.create({
  trigger: '#svg-2-1',
  toggleActions: "play pause resume reset",
  endTrigger: '#svg-end-2-1',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const svgHeight = document.querySelector('#svg-2-1')
      .offsetHeight;
    return `top ${svgHeight + (height - svgHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false,
  // markers: true,
  // scrub: true,
  id: 'svg-pin-2-1'
});

var t2 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-2-1',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-end-2-1',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-2-1'
  }
});

var t3 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-2-4',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-2-4',
    start: 'top 80%',
    end: 'bottom 20%',
    // markers: true,
    id: 'svg-2-4'
  }
});

ScrollTrigger.create({
  trigger: '#svg-2-5',
  toggleActions: "play pause resume reset",
  endTrigger: '#svg-end-2-5',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const svgHeight = document.querySelector('#svg-2-5')
      .offsetHeight;
    return `top ${svgHeight + (height - svgHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false,
  // markers: true,
  // scrub: true,
  id: 'svg-pin-2-5'
});

var t4 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-2-5',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-end-2-5',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-2-5'
  }
});

var t5 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-3-1',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-3-1',
    start: 'top 80%',
    end: 'bottom 20%',
    // markers: true,
    id: 'svg-3-1'
  }
});

ScrollTrigger.create({
  trigger: '#svg-3-2',
  toggleActions: "play pause resume reset",
  endTrigger: '#svg-end-3-2',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const svgHeight = document.querySelector('#svg-3-2')
      .offsetHeight;
    return `top ${svgHeight + (height - svgHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false,
  // markers: true,
  // scrub: true,
  id: 'svg-pin-3-2'
});

var t6 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-3-2',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-end-3-2',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-3-2'
  }
});

ScrollTrigger.create({
  trigger: '#svg-3-5',
  toggleActions: "play pause resume reset",
  endTrigger: '#svg-end-3-5',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const svgHeight = document.querySelector('#svg-3-5')
      .offsetHeight;
    return `top ${svgHeight + (height - svgHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false,
  // markers: true,
  // scrub: true,
  id: 'svg-pin-3-5'
});

var t7 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-3-5',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-end-3-5',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-3-5'
  }
});

var t8 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-3-7',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-end-3-7',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-3-7'
  }
});

ScrollTrigger.create({
  trigger: '#svg-4-3',
  toggleActions: "play pause resume reset",
  endTrigger: '#svg-end-4-3',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const svgHeight = document.querySelector('#svg-4-3')
      .offsetHeight;
    return `top ${svgHeight + (height - svgHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false,
  // markers: true,
  // scrub: true,
  id: 'svg-pin-4-3'
});

var t9 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-4-3',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-end-4-3',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-4-3'
  }
});

var t10 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-4-5',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-4-5',
    start: 'top 80%',
    end: 'bottom 20%',
    // markers: true,
    id: 'svg-4-5'
  }
});

ScrollTrigger.create({
  trigger: '#svg-5-1',
  toggleActions: "play pause resume reset",
  endTrigger: '#svg-end-5-1',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const svgHeight = document.querySelector('#svg-5-1')
      .offsetHeight;
    return `top ${svgHeight + (height - svgHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false,
  // markers: true,
  // scrub: true,
  id: 'svg-pin-5-1'
});

var t11 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-5-1',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-end-5-1',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-5-1'
  }
});

ScrollTrigger.create({
  trigger: '#svg-6-1',
  toggleActions: "play pause resume reset",
  endTrigger: '#svg-end-6-1',
  start: 'center center',
  end: () => {
    const height = window.innerHeight;
    const svgHeight = document.querySelector('#svg-6-1')
      .offsetHeight;
    return `top ${svgHeight + (height - svgHeight) / 2}px`;
  },
  pin: true,
  pinSpacing: false,
  // markers: true,
  // scrub: true,
  id: 'svg-pin-6-1'
});

var t12 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-6-1',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-end-6-1',
    start: 'top 80%',
    end: 'top 20%',
    // markers: true,
    id: 'svg-6-1'
  }
});

var t13 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-8-1',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-8-1',
    start: 'top 80%',
    end: 'bottom 20%',
    // markers: true,
    id: 'svg-8-1'
  }
});

