document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".content");
    const navLinks = document.querySelectorAll("ul a");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    const navbar = document.querySelector(".navbar");
  
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        logo.style.width = "70px";
        logo.style.height = "70px";
        navbar.style.height = "70px";// Nastavi vysku navbaru podla novej velkosti loga
        logoBox.style.marginTop = "5px";
      } else {
        logo.style.width = "220px";
        logo.style.height = "220px";
        navbar.style.height = "70px"; // Nastavi vysku navbaru podla novej velkosti loga
        logoBox.style.marginTop = "160px";
      }
    });
  });