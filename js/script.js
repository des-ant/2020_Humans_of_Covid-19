// // Resize window, responsive
// function resize() {
//   let height = window.innerHeight;
//   var panels = document.querySelectorAll(".panel");
//   var i;
//   for (i = 0; i < panels.length; i++) {
//     panels[i].style.setProperty("height", `${height}px`);
//   }
// }

// // Resize on load
// resize();

// // We listen to the resize event
// window.addEventListener('resize', resize());

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

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