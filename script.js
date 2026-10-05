window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const loginCard = document.getElementById("login-card");

  setTimeout(() => {
    loader.style.display = "none";
    loginCard.classList.remove("hidden");
  }, 3000); // 3 seconds
});
