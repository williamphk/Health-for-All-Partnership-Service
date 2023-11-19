const shareButton = document.querySelector(".share-btn");

shareButton.addEventListener("mouseleave", () => {
  shareButton.classList.add("reverse");

  // Optional: Remove the class after animation completes
  setTimeout(() => {
    shareButton.classList.remove("reverse");
  }, 1000); // 1000 ms = 1s (duration of your animation)
});

const trapezoids = document.querySelectorAll(".trapezoid");

trapezoids.forEach((trapezoid) => {
  trapezoid.addEventListener("click", () => {
    trapezoids.forEach((t) => t.classList.remove("active"));
    trapezoid.classList.add("active");
  });
});
