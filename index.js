function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  // document.getElementById("menu-bg").classList.toggle("change-bg");
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoHeight: true,
  // slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 5,
    },
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var rellax = new Rellax(".rellax", {
  // wrapper:'.main2'
});

//POPUP

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("close-button");
  let scrollTimer;

  // Function to show the pop-up
  function showPopup() {
    document.body.style.overflow = "hidden";
    popup.style.display = "block";
  }

  // Function to close the pop-up
  function closePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
    window.removeEventListener("scroll", timer);
  }

  function timer() {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(showPopup, 2000);
  }

  // Show the pop-up after 2 seconds of scrolling
  window.addEventListener("scroll", timer);

  // Close the pop-up when the 'X' button is clicked
  closeButton.addEventListener("click", closePopup);
});

//DARK MODE

document.documentElement.setAttribute("data-theme", "light");

let dark = false;

var checkbox = document.getElementById("dark-mode");

checkbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "light" : "dark"
    );
    dark = !dark;
  } else {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "light" : "dark"
    );
    dark = !dark;
  }
});
