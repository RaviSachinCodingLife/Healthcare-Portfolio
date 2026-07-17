// Responsive Navigation Control Module
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-xmark");
});

// Close menu on navigation selection
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.classList.add("fa-bars");
    menuBtn.classList.remove("fa-xmark");
  });
});

// High-performance Typewriter Array Processor
const strings = [
  "Healthcare Management Professional",
  "Hospital Quality Specialist",
  "NABH & ISO Compliance Auditor",
  "Clinical Informatics Enthusiast",
];
let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;
const targetEl = document.getElementById("typewriter");

function processTypewriterEffect() {
  const currentString = strings[stringIndex];

  if (isDeleting) {
    targetEl.textContent = currentString.substring(0, charIndex - 1);
    charIndex--;
  } else {
    targetEl.textContent = currentString.substring(0, charIndex + 1);
    charIndex++;
  }

  let delta = 100 - Math.random() * 40;
  if (isDeleting) delta /= 2;

  if (!isDeleting && charIndex === currentString.length) {
    delta = 2000; // Pause at full line expression
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    stringIndex = (stringIndex + 1) % strings.length;
    delta = 500; // Pause before writing next string element
  }

  setTimeout(processTypewriterEffect, delta);
}

// Initialize script processing sequence on loading complete
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(processTypewriterEffect, 1000);
});

// Scroll Active Link Indicator State Machine
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
});

// 1. Initialize EmailJS with your Public Key
(function () {
  // Replace 'YOUR_PUBLIC_KEY' with the key from your EmailJS Account Dashboard
  emailjs.init("YOUR_PUBLIC_KEY");
})();

// 2. Handle Form Submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const btn = document.getElementById("submit-btn");
    const originalText = btn.innerHTML;

    // Visual feedback for user (loading state)
    btn.disabled = true;
    btn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin"></i> Dispatching...';

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with yours from EmailJS
    emailjs
      .sendForm("service_nn9c2nm", "template_iuittjn", this)
      .then(
        function () {
          alert("Message dispatched and sent successfully!");
          document.getElementById("contact-form").reset(); 
        },
        function (error) {
          alert("Failed to send message. Error: " + JSON.stringify(error));
        },
      )
      .finally(function () {
        // Restore button state
        btn.disabled = false;
        btn.innerHTML = originalText;
      });
  });
