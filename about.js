const shareButton = document.querySelector(".share-btn");
const whoContent = document.querySelector(".who-content");

shareButton.addEventListener("mouseleave", () => {
  shareButton.classList.add("reverse");

  // Optional: Remove the class after animation completes
  setTimeout(() => {
    shareButton.classList.remove("reverse");
  }, 1000); // 1000 ms = 1s (duration of your animation)
});

const trapezoids = document.querySelectorAll(".trapezoid");

// for loop
for (let i = 0; i < trapezoids.length; i++) {
  const trapezoid = trapezoids[i];

  trapezoid.addEventListener("click", () => {
    trapezoids.forEach((t) => t.classList.remove("active"));
    trapezoid.classList.add("active");

    const paragraphs = document.querySelectorAll(".paragraph");
    //remove all paragraphs
    paragraphs.forEach((paragraph) => {
      paragraph.remove();
    });

    //add paragraph
    if (i === 0) {
      const paragraph1 = document.createElement("p");
      paragraph1.classList.add("paragraph");
      paragraph1.innerText =
        "Health for All Partnership Clinic is committed to making high-quality healthcare services available to all people, regardless of their background or financial situation.";
      whoContent.appendChild(paragraph1);
      const paragraph2 = document.createElement("p");
      paragraph2.classList.add("paragraph");
      paragraph2.innerText =
        "We at Health for All believe that excellent health is a basic human right. Our clinic was founded with the goal of bridging healthcare disparities and creating a friendly, inclusive environment where everyone feels appreciated and cared for. We endeavor to improve the health and well-being of our community one patient at a time.";
      whoContent.appendChild(paragraph2);
    } else if (i === 1) {
      const paragraph1 = document.createElement("p");
      paragraph1.classList.add("paragraph");
      paragraph1.innerText =
        "We provide complete medical services at Health for All Partnership Clinic, including check-ups, treatments, and disease management. Our staff is committed to providing compassionate and patient-centered treatment. We make quality healthcare accessible and cheap for everyone through health awareness activities and modern technologies. Our top priority is your well-being.";
      whoContent.appendChild(paragraph1);
    } else if (i === 2) {
      const paragraph1 = document.createElement("p");
      paragraph1.classList.add("paragraph");
      paragraph1.innerText =
        "Through strategic collaborations, we hope to pool resources, skills, and information in order to produce comprehensive healthcare solutions that suit the different requirements of our community. We may enhance the range of services we provide by working with other healthcare facilities. ";
      whoContent.appendChild(paragraph1);
      const paragraph2 = document.createElement("p");
      paragraph2.classList.add("paragraph");
      paragraph2.innerText =
        "Thanks to our partnerships with community organizations, we can carry out effective health awareness campaigns, educational programs, and preventive care initiatives.";
      whoContent.appendChild(paragraph2);
      const paragraph3 = document.createElement("p");
      paragraph3.classList.add("paragraph");
      paragraph3.innerText =
        "By working together, we can reach people who may encounter obstacles when it comes to accessing healthcare. Our collaborative efforts ensure that no one is left behind.";
      whoContent.appendChild(paragraph3);
    }
  });
}
