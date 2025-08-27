// Fade-in animation on scroll
function revealOnScroll() {
  const fadeEls = document.querySelectorAll(".fade-in");
  const windowHeight = window.innerHeight;
  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 60) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form fake submit animation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.querySelector("button").textContent = "Sending...";
      setTimeout(() => {
        form.querySelector("button").textContent = "Sent!";
        setTimeout(() => {
          form.reset();
          form.querySelector("button").textContent = "Send Inquiry";
        }, 1500);
      }, 1200);
    });
  }
});
