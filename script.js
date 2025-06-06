// Newsletter subscription logic
function subscribeNewsletter() {
  const email = document.querySelector(".newsletter input").value;
  if (!email || !email.includes("@")) {
    alert("Please enter a valid email address.");
  } else {
    alert(`Thanks for subscribing with ${email}!`);
  }
}

// Toggle mobile menu
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");
}
// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// Typewriter effect
const phrases = ["Welcome to Mithila Stack"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function loopTypewriter() {
  typewriterElement.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }

  const speed = isDeleting ? 50 : 150;
  setTimeout(loopTypewriter, speed);
}
loopTypewriter();
// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};
backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
// Background slideshow for hero section
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  const heroImages = [
   "assets/team-img.jpg",
  "assets/bg2.jpg",
  "assets/bg3.jpg"
  ];
  let currentImageIndex = 0;

  function changeHeroBackground() {
    if (!hero) return;
    hero.style.backgroundImage = `url(${heroImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
  }

  changeHeroBackground();
  setInterval(changeHeroBackground, 2000);
});

