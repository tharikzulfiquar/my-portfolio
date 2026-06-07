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