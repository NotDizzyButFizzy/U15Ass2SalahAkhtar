document.addEventListener("DOMContentLoaded", () => {
  // === Burger Menu ===
  const burger = document.getElementById("burger");
  const nav = document.getElementById("main-nav");

  burger?.addEventListener("click", () => {
    nav?.classList.toggle("active");
  });

  // === Close Nav on Mobile Click ===
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav?.classList.remove("active");
      }
    });
  });

  // === Modal Handling ===
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");

  const showModal = (modal) => {
    if (modal) modal.style.display = "flex";
  };
  const hideModal = (modal) => {
    if (modal) modal.style.display = "none";
  };

  loginBtn?.addEventListener("click", () => showModal(loginModal));
  signupBtn?.addEventListener("click", () => showModal(signupModal));

  document.querySelectorAll(".close").forEach(btn => {
    const targetId = btn.dataset.close;
    btn.addEventListener("click", () => {
      const modal = document.getElementById(targetId);
      hideModal(modal);
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) hideModal(loginModal);
    if (e.target === signupModal) hideModal(signupModal);
  });
});
// === Partner Slideshow ===
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("partner-slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active");
}
