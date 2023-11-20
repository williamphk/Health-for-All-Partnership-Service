const shareButton = document.querySelector(".share-btn");
const paragraphWrapper = document.querySelector(".paragraph-wrapper");
const title = document.querySelector(".title");

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

    const whoContent = document.querySelector(".who-content");
    //remove only children
    whoContent.innerHTML = "";

    //add paragraph
    if (i === 0) {
      //   <div class="who-content mb-5 text-white px-5">
      //   <h2 class="py-5 text-center title">WHO WE ARE?</h2>
      //   <div class="row px-5 content-wrapper">
      //     <div class="paragraph-wrapper col-md-6">
      //       <p class="paragraph px-5">
      //         Health for All Partnership Clinic is committed to making
      //         high-quality healthcare services available to all people,
      //         regardless of their background or financial situation.
      //       </p>
      //       <p class="paragraph px-5">
      //         We at Health for All believe that excellent health is a basic
      //         human right. Our clinic was founded with the goal of bridging
      //         healthcare disparities and creating a friendly, inclusive
      //         environment where everyone feels appreciated and cared for. We
      //         endeavor to improve the health and well-being of our community
      //         one patient at a time.
      //       </p>
      //     </div>
      //     <img
      //       src="images/about_who-we-are.png"
      //       alt="who we are"
      //       class="img-fluid col-md-6"
      //     />
      //   </div>
      // </div>

      //  recreate the html structure above after removing the children
      const title = document.createElement("h2");

      title.classList.add("py-5", "text-center");
      title.innerText = "WHO WE ARE?";
      whoContent.appendChild(title);

      const row = document.createElement("div");
      row.classList.add("row", "px-5");
      whoContent.appendChild(row);

      const paragraphWrapper = document.createElement("div");
      paragraphWrapper.classList.add("col-md-6");
      row.appendChild(paragraphWrapper);

      const paragraph1 = document.createElement("p");
      paragraph1.classList.add("px-5");
      paragraph1.innerText =
        "Health for All Partnership Clinic is committed to making high-quality healthcare services available to all people, regardless of their background or financial situation.";
      paragraphWrapper.appendChild(paragraph1);

      const paragraph2 = document.createElement("p");
      paragraph2.classList.add("px-5");
      paragraph2.innerText =
        "We at Health for All believe that excellent health is a basic human right. Our clinic was founded with the goal of bridging healthcare disparities and creating a friendly, inclusive environment where everyone feels appreciated and cared for. We endeavor to improve the health and well-being of our community one patient at a time.";
      paragraphWrapper.appendChild(paragraph2);

      const img = document.createElement("img");
      img.classList.add("img-fluid", "col-md-6");
      img.src = "images/about_who-we-are.png";
      img.alt = "who we are";
      row.appendChild(img);
    } else if (i === 1) {
      //   <div class="who-content mb-5 text-white px-5">
      //   <h2 class="py-5 text-center title">OUR SERVICES</h2>
      //   <div
      //     class="content-wrapper d-flex flex-column justify-content-center align-items-center"
      //   >
      //     <img
      //       src="images/about_our-services.png"
      //       alt="our services"
      //       class="img-fluid mb-5 w-50"
      //     />
      //     <p class="paragraph w-50">
      //       We provide complete medical services at Health for All Partnership
      //       Clinic, including check-ups, treatments, and disease management.
      //       Our staff is committed to providing compassionate and
      //       patient-centered treatment. We make quality healthcare accessible
      //       and cheap for everyone through health awareness activities and
      //       modern technologies. Our top priority is your well-being.
      //     </p>
      //   </div>
      // </div>

      //  recreate the html structure above after removing the children

      const title = document.createElement("h2");

      title.classList.add("py-5", "text-center");
      title.innerText = "OUR SERVICES";
      whoContent.appendChild(title);

      const contentWrapper = document.createElement("div");
      contentWrapper.classList.add(
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center"
      );
      whoContent.appendChild(contentWrapper);

      const img = document.createElement("img");
      img.classList.add("img-fluid", "mb-5", "w-50");
      img.src = "images/about_our-services.png";
      img.alt = "our services";
      contentWrapper.appendChild(img);

      const paragraph = document.createElement("p");
      paragraph.classList.add("w-50");

      paragraph.innerText =
        "We provide complete medical services at Health for All Partnership Clinic, including check-ups, treatments, and disease management. Our staff is committed to providing compassionate and patient-centered treatment. We make quality healthcare accessible and cheap for everyone through health awareness activities and modern technologies. Our top priority is your well-being.";
      contentWrapper.appendChild(paragraph);
    } else if (i === 2) {
      //   <div class="who-content mb-5 text-white px-5">
      //   <h2 class="py-5 text-center">PARTNERSHIP STRATEGY</h2>
      //   <div class="row gx-5 align-items-center justify-content-center my-5">
      //     <div class="col-md-1">
      //       <img
      //         src="images/about_partnership-strategy1.png"
      //         alt="partner-strategy"
      //         class="img-fluid"
      //       />
      //     </div>
      //     <div class="col-md-5">
      //       <p>
      //         Through strategic collaborations, we hope to pool resources,
      //         skills, and information in order to produce comprehensive
      //         healthcare solutions that suit the different requirements of our
      //         community. We may enhance the range of services we provide by
      //         working with other healthcare facilities.
      //       </p>
      //     </div>
      //   </div>
      //   <div class="row align-items-center justify-content-center my-5">
      //     <div class="col-md-1">
      //       <img
      //         src="images/about_partnership-strategy2.png"
      //         alt="partner-strategy"
      //         class="img-fluid"
      //       />
      //     </div>
      //     <div class="col-md-5">
      //       <p>
      //         Thanks to our partnerships with community organizations, we can
      //         carry out effective health awareness campaigns, educational
      //         programs, and preventive care initiatives.
      //       </p>
      //     </div>
      //   </div>
      //   <div class="row align-items-center justify-content-center my-5">
      //     <div class="col-md-1">
      //       <img
      //         src="images/about_partnership-strategy3.png"
      //         alt="partner-strategy"
      //         class="img-fluid h-75"
      //       />
      //     </div>
      //     <div class="col-md-5">
      //       <p>
      //         By working together, we can reach people who may encounter
      //         obstacles when it comes to accessing healthcare. Our
      //         collaborative efforts ensure that no one is left behind.
      //       </p>
      //     </div>
      //   </div>
      // </div>

      //  recreate the html structure above after removing the children

      const title = document.createElement("h2");

      title.classList.add("py-5", "text-center");
      title.innerText = "PARTNERSHIP STRATEGY";
      whoContent.appendChild(title);

      const row1 = document.createElement("div");
      row1.classList.add(
        "row",
        "gx-5",
        "align-items-center",
        "justify-content-center",
        "my-5"
      );
      whoContent.appendChild(row1);

      const col1 = document.createElement("div");
      col1.classList.add("col-md-1");
      row1.appendChild(col1);

      const img1 = document.createElement("img");
      img1.classList.add("img-fluid");
      img1.src = "images/about_partnership-strategy1.png";
      img1.alt = "partner-strategy";
      col1.appendChild(img1);

      const col2 = document.createElement("div");
      col2.classList.add("col-md-5");
      row1.appendChild(col2);

      const paragraph1 = document.createElement("p");
      paragraph1.innerText =
        "Through strategic collaborations, we hope to pool resources, skills, and information in order to produce comprehensive healthcare solutions that suit the different requirements of our community. We may enhance the range of services we provide by working with other healthcare facilities.";
      col2.appendChild(paragraph1);

      const row2 = document.createElement("div");
      row2.classList.add(
        "row",
        "align-items-center",
        "justify-content-center",
        "my-5"
      );
      whoContent.appendChild(row2);

      const col3 = document.createElement("div");
      col3.classList.add("col-md-1");
      row2.appendChild(col3);

      const img2 = document.createElement("img");
      img2.classList.add("img-fluid");
      img2.src = "images/about_partnership-strategy2.png";
      img2.alt = "partner-strategy";
      col3.appendChild(img2);

      const col4 = document.createElement("div");
      col4.classList.add("col-md-5");
      row2.appendChild(col4);

      const paragraph2 = document.createElement("p");
      paragraph2.innerText =
        "Thanks to our partnerships with community organizations, we can carry out effective health awareness campaigns, educational programs, and preventive care initiatives.";
      col4.appendChild(paragraph2);

      const row3 = document.createElement("div");
      row3.classList.add(
        "row",
        "align-items-center",
        "justify-content-center",
        "my-5"
      );
      whoContent.appendChild(row3);

      const col5 = document.createElement("div");
      col5.classList.add("col-md-1");
      row3.appendChild(col5);

      const img3 = document.createElement("img");
      img3.classList.add("img-fluid", "h-75");
      img3.src = "images/about_partnership-strategy3.png";
      img3.alt = "partner-strategy";
      col5.appendChild(img3);

      const col6 = document.createElement("div");
      col6.classList.add("col-md-5");
      row3.appendChild(col6);

      const paragraph3 = document.createElement("p");
      paragraph3.innerText =
        "By working together, we can reach people who may encounter obstacles when it comes to accessing healthcare. Our collaborative efforts ensure that no one is left behind.";
      col6.appendChild(paragraph3);
    }
  });
}
