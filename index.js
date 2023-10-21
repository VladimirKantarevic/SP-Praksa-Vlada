function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// SLIDE SHOW
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

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
  if (slideIndex > slides.length) { slideIndex = 1 }
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
    }
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

var rellax = new Rellax('.rellax', {
  // wrapper:'.main2'
});


// //dark mode
// const darkModeToggle = document.getElementById("dark-mode-toggle");
// const body = document.body;

// // Check for user's preference in local storage
// if (localStorage.getItem("dark-mode") === "enabled") {
//   body.classList.add("dark-mode");
// }

// darkModeToggle.addEventListener("click", () => {
//   if (body.classList.contains("dark-mode")) {
//     body.classList.remove("dark-mode");
//     localStorage.setItem("dark-mode", "disabled");
//   } else {
//     body.classList.add("dark-mode");
//     localStorage.setItem("dark-mode", "enabled");
//   }
// });

//popup
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const closeButton = document.getElementById('close-button');
  let scrollTimer;

  // Function to show the pop-up
  function showPopup() {
      document.body.style.overflow = 'hidden';
      popup.style.display = 'block';
  }

  // Function to close the pop-up
  function closePopup() {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
  }

  // Show the pop-up after 2 seconds of scrolling
  window.addEventListener('scroll', function() {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(showPopup, 2000);
  });

  // Close the pop-up when the 'X' button is clicked
  closeButton.addEventListener('click', closePopup);
});




