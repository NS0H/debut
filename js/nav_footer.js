window.onscroll = function () {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
}

// document.addEventListener("DOMContentLoaded", function () {
//   const mainMenuItems = document.querySelectorAll("#mobile-menu li");

//   mainMenuItems.forEach(function (item) {
//     item.addEventListener("mouseover", function () {
//       const submenu = this.querySelector(".submenu");
//       if (submenu) {
//         submenu.style.display = "block";
//       }
//     });

//     item.addEventListener("mouseout", function () {
//       const submenu = this.querySelector(".submenu");
//       if (submenu) {
//         submenu.style.display = "none";
//       }
//     });

//     const subSubMenu = item.querySelector(".sub-submenu");
//     if (subSubMenu) {
//       item.addEventListener("mouseover", function () {
//         subSubMenu.style.display = "block";
//       });

//       item.addEventListener("mouseout", function () {
//         subSubMenu.style.display = "none";
//       });
//     }
//   });
// });

//   function toggleSubMenu1() {
//     const mobileMenu = document.getElementById("mobile-menu");
//   }

let rotationAngle1 = 0;
let rotationAngle2 = 0;

function toggleSubMenu1() {
  rotationAngle1 += 180; // Adjust the angle as needed
  const rotatingImage1 = document.getElementById("vector1");
  rotatingImage1.style.transform = `rotate(${rotationAngle1}deg)`;
}

function toggleSubMenu2() {
  rotationAngle2 += 180; // Adjust the angle as needed
  const rotatingImage2 = document.getElementById("vector2");
  rotatingImage2.style.transform = `rotate(${rotationAngle2}deg)`;
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggleImage1 = document.getElementById("vector1");
  const debutmenu = document.getElementById("debut");
  const menuToggleImage2 = document.getElementById("vector2");
  const currimenu = document.getElementById("curri");

  let menuVisible1 = false;
  let menuVisible2 = false;

  menuToggleImage1.addEventListener("click", function () {
    menuVisible1 = !menuVisible1;
    debutmenu.style.display = menuVisible1 ? "block" : "none";
  });

  menuToggleImage2.addEventListener("click", function () {
    menuVisible2 = !menuVisible2;
    currimenu.style.display = menuVisible2 ? "block" : "none";
  });
});
