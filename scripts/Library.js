document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("main-nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Modals
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");

  loginBtn?.addEventListener("click", () => {
    loginModal.style.display = "flex";
  });

  signupBtn?.addEventListener("click", () => {
    signupModal.style.display = "flex";
  });

  document.querySelectorAll(".close").forEach(closeBtn => {
    const modalId = closeBtn.dataset.close;
    closeBtn.addEventListener("click", () => {
      document.getElementById(modalId).style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) loginModal.style.display = "none";
    if (e.target === signupModal) signupModal.style.display = "none";
  });
});
