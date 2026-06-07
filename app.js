const cursorOuter = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.custom-cursor-dot');

// coordinates on mouse move
document.addEventListener('mousemove', (e) => {
  cursorOuter.style.left = e.clientX + 'px';
  cursorOuter.style.top = e.clientY + 'px';
  
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';
});

// playful expanding animation when hovering
document.querySelectorAll('a, button, .project-card').forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursorOuter.classList.add('hovering');
  });
  link.addEventListener('mouseleave', () => {
    cursorOuter.classList.remove('hovering');
  });
});

// Array of words you want to rotate through
const words = ["Java.", "C#.", "PHP.", "SQL.", "C Language."];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const dynamicWordElement = document.querySelector(".dynamic-word");

function typeEffect() {
  const currentWord = words[wordIndex];
  
  // Determine if we are adding or removing characters
  if (isDeleting) {
    // Cut off the last character
    dynamicWordElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Add the next character
    dynamicWordElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Baseline typing speed (ms per character)
  let typingSpeed = isDeleting ? 50 : 120;

  // Case 1: Word is fully typed out
  if (!isDeleting && charIndex === currentWord.length) {
    // Pause dramatically at the complete word
    typingSpeed = 2000; 
    isDeleting = true;
  } 
  // Case 2: Word is completely deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    // Move onto the next word in the array safely
    wordIndex = (wordIndex + 1) % words.length;
    // Brief pause before starting to type the next word
    typingSpeed = 500;
  }

  // Recursively fire the function again after the specified speed interval
  setTimeout(typeEffect, typingSpeed);
}

// Kick off the loop once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});