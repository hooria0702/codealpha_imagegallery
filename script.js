const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const filterButtons = document.querySelectorAll(".filters button");

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showLightbox();
  });
});

function showLightbox() {
  lightbox.classList.remove("hidden");
  lightboxImg.src = images[currentIndex].src;
}

// Close
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Next / Prev
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox();
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + images.length) % images.length;
  showLightbox();
});

// Filters
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.filter;

    images.forEach(img => {
      if (category === "all" || img.dataset.category === category) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("hidden")) return;

  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    showLightbox();
  }

  if (e.key === "ArrowLeft") {
    currentIndex =
      (currentIndex - 1 + images.length) % images.length;
    showLightbox();
  }

  if (e.key === "Escape") {
    lightbox.classList.add("hidden");
  }
});

