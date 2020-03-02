// switch links

const switchLinks = document.querySelectorAll(".switch-link");
const infoSection = document.querySelectorAll(".info-section");

for (let i = 0; i < switchLinks.length; i++) {
   switchLinks[i].addEventListener("click", e => {
      switchLinks.forEach(el => {
         el.classList.remove("selected-link");
      });

      infoSection.forEach(el => {
         el.style.display = "none";
      });

      if (switchLinks[i].classList.contains("switch-link-1")) {
         switchLinks[i].classList.add("selected-link");
         infoSection[i].style.display = "block";
      }

      if (switchLinks[i].classList.contains("switch-link-2")) {
         switchLinks[i].classList.add("selected-link");
         infoSection[i].style.display = "block";
      }

      if (switchLinks[i].classList.contains("switch-link-3")) {
         switchLinks[i].classList.add("selected-link");
         infoSection[i].style.display = "block";
      }
   });
}
