document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll(".nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Update active nav link
        document
          .querySelectorAll(".nav-link")
          .forEach((link) => link.classList.remove("active"));
        this.classList.add("active");

        // Scroll animation
        const navHeight = document.querySelector(".main-nav").offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Add highlight effect to section
        targetSection.classList.add("section-highlight");
        setTimeout(() => {
          targetSection.classList.remove("section-highlight");
        }, 1500);
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY + 100;

    // Get all sections and find the one that's currently in view
    document
      .querySelectorAll("section[id], header[id], footer[id]")
      .forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          // Update active nav link
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.remove("active");
            if (
              link.getAttribute("href") ===
              "#" + section.getAttribute("id")
            ) {
              link.classList.add("active");
            }
          });
        }
      });
  });
});
