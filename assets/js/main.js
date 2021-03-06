function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_button"),
  modalClose = document.querySelectorAll(".services_modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

var mixer = mixitup(".work_container", {
  selectors: {
    target: ".work_card",
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll(".work_items");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(`.home_data`);
sr.reveal(`.home_handle`, { delay: 700 });
sr.reveal(`.home_social, .home_scroll`, { delay: 900, origin: "bottom" });

if ($(".progress_line").length) {
  $(".progress_line").appear(
    function () {
      var el = $(this);
      var percent = el.data("width");
      $(el).css("width", percent + "%");
    },
    {
      accY: 0,
    }
  );
}

// const flightPath = {
//   curviness: 2.25,
//   autoRotate: true,
//   values: [
//     { x: 100, y: 10 },
//     { x: 800, y: 400 },
//     { x: 1000, y: 400 },
//     { x: 800, y: 400 },
//     { x: 1000, y: 500 },
//     { x: 10, y: 100 },
//     { x: 800, y: 400 },
//     { x: 1000, y: 400 },
//     { x: 800, y: 400 },
//     { x: 1000, y: 500 },
//     { x: -100, y: 750 },
//     { x: 350, y: -50 },
//     { x: 600, y: 100 },
//     { x: 800, y: 100 },
//     { x: -250, y: window.innerHeight },
//   ],
// };

// const tween = new TimelineLite();

// tween.add(
//   TweenLite.to(".paper-plane", 1, {
//     bezier: flightPath,
//     ease: Power1.easeInOut,
//   })
// );

// const controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
//   triggerElement: ".section",
//   duration: 1000,
//   triggerHook: 0,
// })
//   .setTween(tween)
// //   .addIndicators()
//   //   .setPin('body')
//   .addTo(controller);
