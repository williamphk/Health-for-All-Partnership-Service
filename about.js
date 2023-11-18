const shareButton = document.querySelector(".share-btn");

shareButton.addEventListener("mouseleave", () => {
  shareButton.classList.add("reverse");

  // Optional: Remove the class after animation completes
  setTimeout(() => {
    shareButton.classList.remove("reverse");
  }, 1000); // 1000 ms = 1s (duration of your animation)
});
