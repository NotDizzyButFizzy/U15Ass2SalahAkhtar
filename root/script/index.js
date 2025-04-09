document.addEventListener("DOMContentLoaded", () => {
  // === Burger Menu Toggle ===
  const burger = document.getElementById("burger");
  const nav = document.getElementById("main-nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // === Close mobile nav when link is clicked
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("active");
      }
    });
  });

  // === Modal Logic ===
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

  // Close on ❌
  document.querySelectorAll(".close").forEach(btn => {
    const targetId = btn.dataset.close;
    btn.addEventListener("click", () => {
      const modal = document.getElementById(targetId);
      hideModal(modal);
    });
  });

  // Close when clicking outside the modal box
  window.addEventListener("click", (e) => {
    if (e.target === loginModal) hideModal(loginModal);
    if (e.target === signupModal) hideModal(signupModal);
  });
});
