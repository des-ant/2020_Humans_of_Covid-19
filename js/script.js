
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollToPlugin);

// Scroll down arrow animation
gsap.to(".arrow", { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });

// --- PROGRESS BAR ---
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 }
});

// // Navigation bar
// gsap.utils.toArray("nav ol li a").forEach(function (a) {
//   a.addEventListener("click", function (e) {
//     e.preventDefault();
//     gsap.to(window, { duration: 0.5, scrollTo: e.target.getAttribute("href") });
//   });
// });

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

// Spinning stars
var t2s = gsap.timeline({
  repeat: 1,
});
t2.add(t2s, 0);
t2s.set("#svg-2-1 #star-l-front", {opacity: 0, scale: 0.8});
t2s.set("#svg-2-1 #star-r-front", {opacity: 0, scale: 0.8});
t2s.to("#svg-2-1 #star-l-front", {
  motionPath: {
      path: "#svg-2-1 #path-l",
      align: "#svg-2-1 #path-l",
      alignOrigin: [0.5, 0.5],
      autoRotate: true
  },
  duration: 2,
  ease: "sine.inOut"
}, 0);
t2s.to("#svg-2-1 #star-l-front", {duration: 0.1, opacity: 1, ease: "none"}, 0.7);
t2s.to("#svg-2-1 #star-l-front", {duration: 1, scale: 1.3, ease: "sine.in"}, 0);
t2s.to("#svg-2-1 #star-l-front", {duration: 1, scale: 0.5, ease: "sine.out"}, 1);
t2s.to("#svg-2-1 #star-l-front", {duration: 0.1, opacity: 0, ease: "none"}, 1.3);
t2s.to("#svg-2-1 #star-l-back", {
  motionPath: {
      path: "#svg-2-1 #path-l",
      align: "#svg-2-1 #path-l",
      alignOrigin: [0.5, 0.5],
      autoRotate: true
  },
  duration: 2,
  ease: "sine.inOut"
}, 0);
t2s.to("#svg-2-1 #star-l-back", {duration: 0.1, opacity: 0, ease: "none"}, 0.7);
t2s.to("#svg-2-1 #star-l-back", {duration: 1, scale: 1.3, ease: "sine.in"}, 0);
t2s.to("#svg-2-1 #star-l-back", {duration: 1, scale: 0.5, ease: "sine.out"}, 1);
t2s.to("#svg-2-1 #star-l-back", {duration: 0.1, opacity: 1, ease: "none"}, 1.3);
// Star R
t2s.to("#svg-2-1 #star-r-front", {
  motionPath: {
      path: "#svg-2-1 #path-r",
      align: "#svg-2-1 #path-r",
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0,
      autoRotate: true
  },
  duration: 2,
  ease: "sine.outIn"
}, 0);
t2s.to("#svg-2-1 #star-r-front", {duration: 0.1, opacity: 1, ease: "none"}, 0.3);
t2s.to("#svg-2-1 #star-r-front", {duration: 1, scale: 1.3, ease: "sine.out"}, 0);
t2s.to("#svg-2-1 #star-r-front", {duration: 1, scale: 0.5, ease: "sine.in"}, 1);
t2s.to("#svg-2-1 #star-r-front", {duration: 0.1, opacity: 0, ease: "none"}, 1);
t2s.to("#svg-2-1 #star-r-back", {
  motionPath: {
      path: "#svg-2-1 #path-r",
      align: "#svg-2-1 #path-r",
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0,
      autoRotate: true
  },
  duration: 2,
  ease: "sine.outIn"
}, 0);
t2s.to("#svg-2-1 #star-r-back", {duration: 0.1, opacity: 0, ease: "none"}, 0.3);
t2s.to("#svg-2-1 #star-r-back", {duration: 1, scale: 1.3, ease: "sine.out"}, 0);
t2s.to("#svg-2-1 #star-r-back", {duration: 1, scale: 0.5, ease: "sine.in"}, 1);
t2s.to("#svg-2-1 #star-r-back", {duration: 0.1, opacity: 1, ease: "none"}, 1);
// Rotate head
// Animate eye brows
// State 1
t2.to("#svg-2-1 #brow-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 1.5);
t2.to("#svg-2-1 #brow-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 1.5);
// State 2
t2.to("#svg-2-1 #brow-r", {duration: 1, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 2.5);
t2.to("#svg-2-1 #brow-l", {duration: 1, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 2.5);
// Rotate body
t2.to("#svg-2-1 #girl", {duration: 1, ease: "back", rotation: 5, 
transformOrigin: "50% 90%"}, 0);
t2.to("#svg-2-1 #girl", {duration: 1, ease: "back", x: 10}, 0.25);
t2.to("#svg-2-1 #girl", {duration: 1, ease: "power4", rotation: 0, 
transformOrigin: "50% 90%"}, 1);
t2.to("#svg-2-1 #girl", {duration: 1, ease: "back", rotation: -5, 
transformOrigin: "50% 90%"}, 2);
t2.to("#svg-2-1 #girl", {duration: 1, ease: "back", x: 0}, 2.25);
t2.to("#svg-2-1 #girl", {duration: 1, ease: "power4", rotation: 0, 
transformOrigin: "50% 90%"}, 3);


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

// L arm
t3.to("#svg-2-4 #doctor2 #arm-l", {duration: 1, ease: "back", rotation: 5, 
transformOrigin: "90% 90%"}, 0.5);
t3.to("#svg-2-4 #doctor2 #arm-l", {duration: 1, ease: "back", rotation: 0, 
transformOrigin: "90% 90%"}, 1);
// Animate eye brows
// State 1
t3.to("#svg-2-4 #doctor2 #brow-r-2", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t3.to("#svg-2-4 #doctor2 #brow-l-2", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// State 2
t3.to("#svg-2-4 #doctor2 #brow-r-2", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t3.to("#svg-2-4 #doctor2 #brow-l-2", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
// doctor 1
t3.to("#svg-2-4 #brow-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 1);
t3.to("#svg-2-4 #brow-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 1);
// State 2
t3.to("#svg-2-4 #brow-r", {duration: 1, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 2.5);
t3.to("#svg-2-4 #brow-l", {duration: 1, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 2.5);
// Animate eyes
// State 1
t3.to("#svg-2-4 #doctor2 #eye-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t3.to("#svg-2-4 #doctor2 #eye-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// Move pupils
t3.to("#svg-2-4 #doctor2 #pupil-r", {duration: 0.1, ease: "bounce", x: -2}, 1);
t3.to("#svg-2-4 #doctor2 #pupil-l", {duration: 0.1, ease: "bounce", x: -2}, 1);
// Blink 1
t3.to("#svg-2-4 #doctor2 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t3.to("#svg-2-4 #doctor2 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t3.to("#svg-2-4 #doctor2 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t3.to("#svg-2-4 #doctor2 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// L eye
t3.to("#svg-2-4 #doctor2 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t3.to("#svg-2-4 #doctor2 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t3.to("#svg-2-4 #doctor2 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t3.to("#svg-2-4 #doctor2 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// Blink 2
t3.to("#svg-2-4 #doctor2 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t3.to("#svg-2-4 #doctor2 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t3.to("#svg-2-4 #doctor2 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t3.to("#svg-2-4 #doctor2 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// L eye
t3.to("#svg-2-4 #doctor2 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t3.to("#svg-2-4 #doctor2 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t3.to("#svg-2-4 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t3.to("#svg-2-4 #doctor2 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// State 2
t3.to("#svg-2-4 #doctor2 #eye-r", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t3.to("#svg-2-4 #doctor2 #eye-l", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);

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

// Animate eye brows
// State 1
t4.to("#svg-2-5 #brow-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t4.to("#svg-2-5 #brow-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// State 2
t4.to("#svg-2-5 #brow-r", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t4.to("#svg-2-5 #brow-l", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
// Animate eyes
// State 1
t4.to("#svg-2-5 #eye-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t4.to("#svg-2-5 #eye-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// Blink 1
t4.to("#svg-2-5 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t4.to("#svg-2-5 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t4.to("#svg-2-5 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t4.to("#svg-2-5 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// L eye
t4.to("#svg-2-5 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t4.to("#svg-2-5 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t4.to("#svg-2-5 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t4.to("#svg-2-5 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// Blink 2
t4.to("#svg-2-5 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t4.to("#svg-2-5 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t4.to("#svg-2-5 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t4.to("#svg-2-5 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// L eye
t4.to("#svg-2-5 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t4.to("#svg-2-5 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t4.to("#svg-2-5 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t4.to("#svg-2-5 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// State 2
t4.to("#svg-2-5 #eye-r", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t4.to("#svg-2-5 #eye-l", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
// Squiggly lines
var t4s = gsap.timeline({
  repeat: 7,
});
t4.add(t4s, 0);
t4s.set("#svg-2-5 #ball-1", {opacity: 0});
t4s.set("#svg-2-5 #ball-2", {opacity: 0});
t4s.set("#svg-2-5 #ball-3", {opacity: 0});
t4s.set("#svg-2-5 #wave-l", {opacity: 0});
t4s.set("#svg-2-5 #wave-r", {opacity: 0});
t4s.to("#svg-2-5 #ball-1", {duration: 0.1, ease: "power4.out", opacity: 1}, 0);
t4s.to("#svg-2-5 #ball-1", {duration: 0.1, ease: "power4.out", opacity: 0}, 0.1);
t4s.to("#svg-2-5 #ball-2", {duration: 0.1, ease: "power4.out", opacity: 1}, 0.1);
t4s.to("#svg-2-5 #ball-2", {duration: 0.1, ease: "power4.out", opacity: 0}, 0.2);
t4s.to("#svg-2-5 #ball-3", {duration: 0.1, ease: "power4.out", opacity: 1}, 0.2);
t4s.to("#svg-2-5 #ball-4", {duration: 0.1, ease: "power4.out", opacity: 0}, 0.3);
t4.to("#svg-2-5 #wave-l", {duration: 1, ease: "power4.out", opacity: 1}, 0);
t4.to("#svg-2-5 #wave-l", {duration: 1, ease: "power4.out", opacity: 0}, 1);
t4.to("#svg-2-5 #wave-l", {duration: 2, ease: "power4.out", x: -10, scaleY: 2, 
transformOrigin: "50% 50%"}, 0);
t4.to("#svg-2-5 #wave-r", {duration: 1, ease: "power4.out", opacity: 1}, 1);
t4.to("#svg-2-5 #wave-r", {duration: 1, ease: "power4.out", opacity: 0}, 2);
t4.to("#svg-2-5 #wave-r", {duration: 2, ease: "power4.out", x: 10, scaleY: 2, 
transformOrigin: "50% 50%"}, 1);

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

// Cough
var t5c = gsap.timeline({
  repeat: 1,
  repeatDelay: 0.5
});
t5.add(t5c, 0);
t5c.set("#svg-3-1 #lip", {scaleY: 0.2, y: 5});
t5c.set("#svg-3-1 #brow-l", {rotate: -10, transformOrigin: "50% 50%"});
t5c.set("#svg-3-1 #brow-r", {rotate: 10, transformOrigin: "50% 50%"});
t5c.to("#svg-3-1 #head", {duration: 0.1, ease: "bounce", x: 5, y: 10}, 0);
t5c.to("#svg-3-1 #lip", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 0);
t5c.to("#svg-3-1 #hair-l", {duration: 0.2, ease: "back", rotate: 10, 
transformOrigin: "100% 40%"}, 0);
t5c.to("#svg-3-1 #hair-r", {duration: 0.2, ease: "back", rotate: -10, 
transformOrigin: "0% 0%"}, 0);
t5c.to("#svg-3-1 #brow-l", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t5c.to("#svg-3-1 #brow-r", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t5c.to("#svg-3-1 #head", {duration: 0.1, ease: "bounce", x: 0, y: 0}, 0.1);
t5c.to("#svg-3-1 #lip", {duration: 0.1, ease: "power4.out", scaleY: 0.2, 
transformOrigin: "50% 100%"}, 0.1);
t5c.to("#svg-3-1 #hair-l", {duration: 0.2, ease: "back", rotate: 0, 
transformOrigin: "100% 40%"}, 0.2);
t5c.to("#svg-3-1 #hair-r", {duration: 0.2, ease: "back", rotate: 0, 
transformOrigin: "0% 0%"}, 0.2);
t5c.to("#svg-3-1 #brow-l", {duration: 0.2, ease: "power4.out", rotate: -10, 
transformOrigin: "50% 50%"}, 0.2);
t5c.to("#svg-3-1 #brow-r", {duration: 0.2, ease: "power4.out", rotate: 10, 
transformOrigin: "50% 50%"}, 0.2);

// Animate eyes
var t5g = gsap.timeline({
});
t5.add(t5g, 0);
// Girl
// Blink 1
t5g.to("#svg-3-1 #eye-r-2", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t5g.to("#svg-3-1 #eye-r-2", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
// L eye
t5g.to("#svg-3-1 #eye-l-2", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t5g.to("#svg-3-1 #eye-l-2", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
// Blink 2
t5g.to("#svg-3-1 #eye-r-2", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t5g.to("#svg-3-1 #eye-r-2", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
// L eye
t5g.to("#svg-3-1 #eye-l-2", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t5g.to("#svg-3-1 #eye-l-2", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
// Boy
var t5b = gsap.timeline({
});
t5.add(t5b, 1);
// Animate eyes
// Blink 1
t5b.to("#svg-3-1 #eye-r-3", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t5b.to("#svg-3-1 #eye-r-3", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
// L eye
t5b.to("#svg-3-1 #eye-l-3", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t5b.to("#svg-3-1 #eye-l-3", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
// Blink 2
t5b.to("#svg-3-1 #eye-r-3", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t5b.to("#svg-3-1 #eye-r-3", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
// L eye
t5b.to("#svg-3-1 #eye-l-3", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t5b.to("#svg-3-1 #eye-l-3", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
// Jump
var t5gj = gsap.timeline({
  repeat: 1,
  repeatDelay: 1
});
t5g.add(t5gj, 0);
t5gj.to("#svg-3-1 #girl", {duration: 0.1, ease: "bounce", y: -20}, 0);
t5gj.to("#svg-3-1 #arm-r-3", {duration: 0.1, ease: "bounce", rotate: -20, 
transformOrigin: "0% 10%"}, 0);
t5gj.to("#svg-3-1 #girl", {duration: 0.1, ease: "bounce", y: 0}, 0.1);
t5gj.to("#svg-3-1 #arm-r-3", {duration: 0.1, ease: "bounce", rotate: 0, 
transformOrigin: "0% 10%"}, 0.1);


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
  repeatDelay: 0.5,
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

// Sigh
t6.to("#svg-3-2 #head", {duration: 1, ease: "power4.out", rotate: 20, 
transformOrigin: "50% 100%"}, 0);
t6.to("#svg-3-2 #head", {duration: 2, ease: "power2.out", rotate: 0, 
transformOrigin: "50% 100%"}, 1);
t6.to("#svg-3-2 #brow-l", {duration: 1, ease: "power4.out", rotate: 10, 
transformOrigin: "50% 50%", y: -3}, 0);
t6.to("#svg-3-2 #brow-l", {duration: 2, ease: "power2.out", rotate: -10, 
transformOrigin: "50% 50%", y: 0}, 1);
t6.to("#svg-3-2 #brow-r", {duration: 1, ease: "power4.out", rotate: -10, 
transformOrigin: "50% 50%", y: -3}, 0);
t6.to("#svg-3-2 #brow-r", {duration: 2, ease: "power2.out", rotate: 10, 
transformOrigin: "50% 50%", y: 0}, 1);
t6.to("#svg-3-2 #shoulder-l", {duration: 1, ease: "power4.out", y: -5}, 0);
t6.to("#svg-3-2 #shoulder-l", {duration: 2, ease: "power2.out", y: 0}, 1);
t6.to("#svg-3-2 #shoulder-r", {duration: 1, ease: "power4.out", y: -5}, 0);
t6.to("#svg-3-2 #shoulder-r", {duration: 2, ease: "power2.out", y: 0}, 1);
t6.to("#svg-3-2 #arm-l", {duration: 1, ease: "power4.out", y: -5}, 0);
t6.to("#svg-3-2 #arm-l", {duration: 2, ease: "power2.out", y: 0}, 1);
t6.to("#svg-3-2 #arm-r", {duration: 1, ease: "power4.out", y: -5}, 0);
t6.to("#svg-3-2 #arm-r", {duration: 2, ease: "power2.out", y: 0}, 1);
t6.to("#svg-3-2 #shirt", {duration: 1, ease: "power4.out", y: -5}, 0);
t6.to("#svg-3-2 #shirt", {duration: 2, ease: "power2.out", y: 0}, 1);
t6.to("#svg-3-2 #hair-r", {duration: 1, ease: "back", rotate: -5, 
transformOrigin: "5% 20%"}, 1);
t6.to("#svg-3-2 #hair-r", {duration: 1, ease: "back", rotate: 0, 
transformOrigin: "5% 20%"}, 2);

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

t7.set("#svg-3-5 #lip", {scaleY: 0.2, y: 3});
t7.set("#svg-3-5 #droplets", {opacity: 0, scale: 0.2});
t7.set("#svg-3-5 #spark", {opacity: 0, scale: 0.2});
t7.set("#svg-3-5 #brow-l", {rotate: -10, transformOrigin: "50% 50%"});
t7.set("#svg-3-5 #brow-r", {rotate: 10, transformOrigin: "50% 50%"});
t7.to("#svg-3-5 #head", {duration: 0.1, ease: "bounce", x: 5, y: 10}, 0);
t7.to("#svg-3-5 #lip", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 50%"}, 0);
t7.to("#svg-3-5 #hair-l", {duration: 0.2, ease: "back", rotate: 10, 
transformOrigin: "80% 10%"}, 0);
t7.to("#svg-3-5 #hair-r", {duration: 0.2, ease: "back", rotate: -10, 
transformOrigin: "0% 20%"}, 0);
t7.to("#svg-3-5 #brow-l", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t7.to("#svg-3-5 #brow-r", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t7.to("#svg-3-5 #head", {duration: 0.1, ease: "bounce", x: 0, y: 0}, 0.1);
t7.to("#svg-3-5 #lip", {duration: 0.1, ease: "power4.out", scaleY: 0.2, 
transformOrigin: "50% 100%"}, 0.1);
t7.to("#svg-3-5 #hair-l", {duration: 0.2, ease: "back", rotate: 0, 
transformOrigin: "80% 10%"}, 0.2);
t7.to("#svg-3-5 #hair-r", {duration: 0.2, ease: "back", rotate: 0, 
transformOrigin: "0% 20%"}, 0.2);
t7.to("#svg-3-5 #brow-l", {duration: 0.2, ease: "power4.out", rotate: -10, 
transformOrigin: "50% 50%"}, 0.2);
t7.to("#svg-3-5 #brow-r", {duration: 0.2, ease: "power4.out", rotate: 10, 
transformOrigin: "50% 50%"}, 0.2);
t7.to("#svg-3-5 #arm-l", {duration: 0.3, ease: "power4.out", rotate: -3, 
transformOrigin: "10% 90%"}, 0);
t7.to("#svg-3-5 #arm-l", {duration: 0.4, ease: "back", rotate: 0, 
transformOrigin: "10% 90%"}, 0.3);
t7.to("#svg-3-5 #eye-l", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t7.to("#svg-3-5 #eye-r", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t7.to("#svg-3-5 #eye-l", {duration: 0.2, ease: "power4.out", rotate: -10, 
transformOrigin: "50% 50%"}, 0.2);
t7.to("#svg-3-5 #eye-r", {duration: 0.2, ease: "power4.out", rotate: 10, 
transformOrigin: "50% 50%"}, 0.2);
t7.to("#svg-3-5 #droplets", {duration: 1, ease: "power4.out", opacity: 1}, 0.2);
t7.to("#svg-3-5 #droplets", {duration: 1, ease: "power4.out", opacity: 0}, 1);
t7.to("#svg-3-5 #droplets", {duration: 2, ease: "power4.out", scale: 1}, 0.2);
t7.to("#svg-3-5 #spark", {duration: 1, ease: "power4.out", opacity: 1}, 1);
t7.to("#svg-3-5 #spark", {duration: 1, ease: "power4.out", opacity: 0}, 1.8);
t7.to("#svg-3-5 #spark", {duration: 2, ease: "power4.out", scale: 1, 
transformOrigin: "50% 50%"}, 1);

var t8 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-3-7',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-3-7',
    start: 'top 80%',
    end: 'bottom 20%',
    // markers: true,
    id: 'svg-3-7'
  }
});

// Wave
t8.set("#svg-3-7 #wave-l", {opacity: 0, scale: 0.2, y: 10});
t8.set("#svg-3-7 #wave-r", {opacity: 0, scale: 0.2, y: 20});
t8.to("#svg-3-7 #lip", {duration: 1, ease: "power4.out", scaleY: 0.3, 
transformOrigin: "50% 50%"}, 0);
t8.to("#svg-3-7 #lip", {duration: 1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 50%"}, 1);
t8.to("#svg-3-7 #arm-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "10% 90%"}, 0);
t8.to("#svg-3-7 #arm-r", {duration: 1, ease: "power4.out", rotation: 0, 
transformOrigin: "10% 90%"}, 1);
t8.to("#svg-3-7 #wave-l", {duration: 1, ease: "power4.out", opacity: 1}, 0);
t8.to("#svg-3-7 #wave-l", {duration: 1, ease: "power4.out", opacity: 0}, 1);
t8.to("#svg-3-7 #wave-l", {duration: 2, ease: "power4.out", scale: 1.5, 
transformOrigin: "50% 50%", x: 30}, 0);
t8.to("#svg-3-7 #wave-r", {duration: 1, ease: "power4.out", opacity: 1}, 0);
t8.to("#svg-3-7 #wave-r", {duration: 1, ease: "power4.out", opacity: 0}, 1);
t8.to("#svg-3-7 #wave-r", {duration: 2, ease: "power4.out", scale: 1.5, 
transformOrigin: "50% 50%", x: 30}, 0);
// Animate eye brows
// State 1
t8.to("#svg-3-7 #brow-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t8.to("#svg-3-7 #brow-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// State 2
t8.to("#svg-3-7 #brow-r", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t8.to("#svg-3-7 #brow-l", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
// Animate eyes
// State 1
t8.to("#svg-3-7 #eye-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t8.to("#svg-3-7 #eye-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// Blink 1
t8.to("#svg-3-7 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t8.to("#svg-3-7 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t8.to("#svg-3-7 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t8.to("#svg-3-7 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// L eye
t8.to("#svg-3-7 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t8.to("#svg-3-7 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t8.to("#svg-3-7 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t8.to("#svg-3-7 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// Blink 2
t8.to("#svg-3-7 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t8.to("#svg-3-7 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t8.to("#svg-3-7 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t8.to("#svg-3-7 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// L eye
t8.to("#svg-3-7 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t8.to("#svg-3-7 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t8.to("#svg-3-7 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t8.to("#svg-3-7 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// State 2
t8.to("#svg-3-7 #eye-r", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t8.to("#svg-3-7 #eye-l", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);

var t9 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-4-1',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-4-1',
    start: 'top 80%',
    end: 'bottom 20%',
    // markers: true,
    id: 'svg-4-1'
  }
});

t9.to("#svg-4-1 #head", {duration: 2, ease: "power2.out", rotate: -20, 
transformOrigin: "50% 90%"}, 0);
t9.to("#svg-4-1 #head", {duration: 2, ease: "power2.out", rotate: 0, 
transformOrigin: "50% 90%"}, 2);
t9.to("#svg-4-1 #brow-l", {duration: 1, ease: "power4.out", rotate: 5, 
transformOrigin: "50% 50%", y: -1}, 0);
t9.to("#svg-4-1 #brow-l", {duration: 2, ease: "power2.out", rotate: -5, 
transformOrigin: "50% 50%", y: 0}, 1);
t9.to("#svg-4-1 #brow-r", {duration: 1, ease: "power4.out", rotate: -5, 
transformOrigin: "50% 50%", y: -1}, 0);
t9.to("#svg-4-1 #brow-r", {duration: 2, ease: "power2.out", rotate: 5, 
transformOrigin: "50% 50%", y: 0}, 1);
t9.to("#svg-4-1 #head-3", {duration: 2, ease: "power2.out", rotate: 5, 
transformOrigin: "70% 90%"}, 0);
t9.to("#svg-4-1 #head-3", {duration: 2, ease: "power2.out", rotate: 0, 
transformOrigin: "70% 90%"}, 2);
t9.to("#svg-4-1 #brow-l-2", {duration: 2, ease: "power2.out", rotate: -5, 
transformOrigin: "50% 50%"}, 0);
t9.to("#svg-4-1 #brow-l-2", {duration: 2, ease: "power2.out", rotate: 0, 
transformOrigin: "50% 50%"}, 2);
t9.to("#svg-4-1 #brow-r-2", {duration: 2, ease: "power2.out", rotate: 5, 
transformOrigin: "50% 50%"}, 0);
t9.to("#svg-4-1 #brow-r-2", {duration: 2, ease: "power2.out", rotate: 0, 
transformOrigin: "50% 50%"}, 2);

var t10 = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: '#svg-4-2',
    toggleActions: "play pause resume reset",
    endTrigger: '#svg-4-2',
    start: 'top 80%',
    end: 'bottom 20%',
    // markers: true,
    id: 'svg-4-2'
  }
});

// Cough
t10.set("#svg-4-2 #lip", {scaleY: 0.2, y: 3});
t10.set("#svg-4-2 #droplets", {opacity: 0, scale: 0.2});
t10.set("#svg-4-2 #spark-l", {opacity: 0, scale: 0.2});
t10.set("#svg-4-2 #spark-r", {opacity: 0, scale: 0.2});
t10.set("#svg-4-2 #brow-l", {rotate: -10, transformOrigin: "50% 50%"});
t10.set("#svg-4-2 #brow-r", {rotate: 10, transformOrigin: "50% 50%"});
t10.set("#svg-4-2 #wave-l", {opacity: 0});
t10.set("#svg-4-2 #wave-r", {opacity: 0});
t10.to("#svg-4-2 #head", {duration: 0.1, ease: "bounce", x: 5, y: 10}, 0);
t10.to("#svg-4-2 #lip", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 50%"}, 0);
t10.to("#svg-4-2 #hair-l", {duration: 0.2, ease: "back", rotate: 10, 
transformOrigin: "80% 10%"}, 0);
t10.to("#svg-4-2 #hair-r", {duration: 0.2, ease: "back", rotate: -10, 
transformOrigin: "0% 20%"}, 0);
t10.to("#svg-4-2 #brow-l", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t10.to("#svg-4-2 #brow-r", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t10.to("#svg-4-2 #head", {duration: 0.1, ease: "bounce", x: 0, y: 0}, 0.1);
t10.to("#svg-4-2 #lip", {duration: 0.1, ease: "power4.out", scaleY: 0.2, 
transformOrigin: "50% 100%"}, 0.1);
t10.to("#svg-4-2 #hair-l", {duration: 0.2, ease: "back", rotate: 0, 
transformOrigin: "80% 10%"}, 0.2);
t10.to("#svg-4-2 #hair-r", {duration: 0.2, ease: "back", rotate: 0, 
transformOrigin: "0% 20%"}, 0.2);
t10.to("#svg-4-2 #brow-l", {duration: 0.2, ease: "power4.out", rotate: -10, 
transformOrigin: "50% 50%"}, 0.2);
t10.to("#svg-4-2 #brow-r", {duration: 0.2, ease: "power4.out", rotate: 10, 
transformOrigin: "50% 50%"}, 0.2);
t10.to("#svg-4-2 #arm-l", {duration: 0.3, ease: "power4.out", rotate: -3, 
transformOrigin: "10% 90%"}, 0);
t10.to("#svg-4-2 #arm-l", {duration: 0.4, ease: "back", rotate: 0, 
transformOrigin: "10% 90%"}, 0.3);
t10.to("#svg-4-2 #eye-l", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t10.to("#svg-4-2 #eye-r", {duration: 0.2, ease: "power4.out", rotate: 0, 
transformOrigin: "50% 50%"}, 0);
t10.to("#svg-4-2 #eye-l", {duration: 0.2, ease: "power4.out", rotate: -10, 
transformOrigin: "50% 50%"}, 0.2);
t10.to("#svg-4-2 #eye-r", {duration: 0.2, ease: "power4.out", rotate: 10, 
transformOrigin: "50% 50%"}, 0.2);
t10.to("#svg-4-2 #droplets", {duration: 1, ease: "power4.out", opacity: 1}, 0.2);
t10.to("#svg-4-2 #droplets", {duration: 1, ease: "power4.out", opacity: 0}, 1);
t10.to("#svg-4-2 #droplets", {duration: 2, ease: "power4.out", scale: 1}, 0.2);
t10.to("#svg-4-2 #spark-l", {duration: 1, ease: "power4.out", opacity: 1}, 1);
t10.to("#svg-4-2 #spark-l", {duration: 1, ease: "power4.out", opacity: 0}, 1.8);
t10.to("#svg-4-2 #spark-l", {duration: 2, ease: "power4.out", scale: 1, 
transformOrigin: "50% 50%"}, 1);
t10.to("#svg-4-2 #spark-r", {duration: 1, ease: "power4.out", opacity: 1}, 0.5);
t10.to("#svg-4-2 #spark-r", {duration: 1, ease: "power4.out", opacity: 0}, 1.3);
t10.to("#svg-4-2 #spark-r", {duration: 2, ease: "power4.out", scale: 1, 
transformOrigin: "50% 50%"}, 0.5);
t10.to("#svg-4-2 #wave-l", {duration: 1, ease: "power4.out", opacity: 1}, 0);
t10.to("#svg-4-2 #wave-l", {duration: 1, ease: "power4.out", opacity: 0}, 1);
t10.to("#svg-4-2 #wave-l", {duration: 2, ease: "power4.out", x: -10, scaleY: 2, 
transformOrigin: "50% 50%"}, 0);
t10.to("#svg-4-2 #wave-r", {duration: 1, ease: "power4.out", opacity: 1}, 1);
t10.to("#svg-4-2 #wave-r", {duration: 1, ease: "power4.out", opacity: 0}, 2);
t10.to("#svg-4-2 #wave-r", {duration: 2, ease: "power4.out", x: 10, scaleY: 2, 
transformOrigin: "50% 50%"}, 1);

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

var t11 = gsap.timeline({
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

// Bubbles
var t11b = gsap.timeline({
  repeat: 7
});
t11.add(t11b, 0);
t11b.to("#svg-4-3 #bubble-l", {duration: 0.25, ease: "power4.out", scaleY: 1.1, 
transformOrigin: "50% 50%"}, 0);
t11b.to("#svg-4-3 #bubble-l", {duration: 0.25, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 50%"}, 0.25);
t11b.to("#svg-4-3 #bubble-r", {duration: 0.25, ease: "power4.out", scaleY: 1.05, 
transformOrigin: "50% 50%"}, 0);
t11b.to("#svg-4-3 #bubble-r", {duration: 0.25, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 50%"}, 0.25);
t11b.to("#svg-4-3 #circle-l", {duration: 0.25, ease: "power4.out", y: 15}, 0);
t11b.to("#svg-4-3 #circle-l", {duration: 0.25, ease: "power4.out", y: 0}, 0.25);
t11b.to("#svg-4-3 #circle-r", {duration: 0.25, ease: "power4.out", y: 15}, 0);
t11b.to("#svg-4-3 #circle-r", {duration: 0.25, ease: "power4.out", y: 0}, 0.25);
// Animate eye brows
// State 1
t11.to("#svg-4-3 #brow-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t11.to("#svg-4-3 #brow-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// State 2
t11.to("#svg-4-3 #brow-r", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t11.to("#svg-4-3 #brow-l", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
// Animate eyes
// State 1
t11.to("#svg-4-3 #eye-r", {duration: 1, ease: "power4.out", rotation: 10, 
transformOrigin: "50% 50%"}, 0);
t11.to("#svg-4-3 #eye-l", {duration: 1, ease: "power4.out", rotation: -10, 
transformOrigin: "50% 50%"}, 0);
// Blink 1
t11.to("#svg-4-3 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t11.to("#svg-4-3 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t11.to("#svg-4-3 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t11.to("#svg-4-3 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// L eye
t11.to("#svg-4-3 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1);
t11.to("#svg-4-3 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1);
t11.to("#svg-4-3 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.1);
t11.to("#svg-4-3 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.1);
// Blink 2
t11.to("#svg-4-3 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t11.to("#svg-4-3 #lid-r", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t11.to("#svg-4-3 #pupil-r", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t11.to("#svg-4-3 #lid-r", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// L eye
t11.to("#svg-4-3 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 0, 
transformOrigin: "50% 100%"}, 1.75);
t11.to("#svg-4-3 #lid-l", {duration: 0.1, ease: "power4.out", y: 4}, 1.75);
t11.to("#svg-4-3 #pupil-l", {duration: 0.1, ease: "power4.out", scaleY: 1, 
transformOrigin: "50% 100%"}, 1.85);
t11.to("#svg-4-3 #lid-l", {duration: 0.1, ease: "power4.out", y: 0}, 1.85);
// State 2
t11.to("#svg-4-3 #eye-r", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);
t11.to("#svg-4-3 #eye-l", {duration: 0.5, ease: "back", rotation: 0, 
transformOrigin: "50% 50%"}, 3);

var t12 = gsap.timeline({
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

// Breathe
t12.to("#svg-4-5 #top", {duration: 2, ease: "back", scaleY: 1.05, scaleX: 1.025, 
transformOrigin: "50% 50%"}, 0);
t12.to("#svg-4-5 #top", {duration: 2, ease: "back", scaleY: 1, scaleX: 1,
transformOrigin: "50% 50%"}, 2);
t12.to("#svg-4-5 #neck", {duration: 2, ease: "back", scaleY: 0.9, 
transformOrigin: "50% 0%"}, 0);
t12.to("#svg-4-5 #neck", {duration: 2, ease: "back", scaleY: 1,
transformOrigin: "50% 0%"}, 2);
t12.to("#svg-4-5 #arm-l", {duration: 2, ease: "back", y: -5, x: -2}, 0);
t12.to("#svg-4-5 #arm-l", {duration: 2, ease: "back", y: 0, x: 0}, 2);
t12.to("#svg-4-5 #arm-r", {duration: 2, ease: "back", y: -5, x: 2}, 0);
t12.to("#svg-4-5 #arm-r", {duration: 2, ease: "back", y: 0, x: 0}, 2);
t12.to("#svg-4-5 #hair-l", {duration: 2, ease: "back", rotate: -5, 
transformOrigin: "90% 10%"}, 0);
t12.to("#svg-4-5 #hair-r", {duration: 2, ease: "back", rotate: 5, 
transformOrigin: "20% 10%"}, 0);
t12.to("#svg-4-5 #hair-l", {duration: 2, ease: "back", rotate: 0, 
transformOrigin: "90% 10%"}, 2);
t12.to("#svg-4-5 #hair-r", {duration: 2, ease: "back", rotate: 0, 
transformOrigin: "20% 10%"}, 2);
t12.to("#svg-4-5 #hair-back", {duration: 2, ease: "back", y: -5, x: -2}, 0);
t12.to("#svg-4-5 #hair-back", {duration: 2, ease: "back", y: 0, x: 0}, 2);

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

var t13 = gsap.timeline({
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

var t14 = gsap.timeline({
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

var t15 = gsap.timeline({
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

