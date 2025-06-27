const background = document.querySelector('.background');
const numStars = 20;
const stars = [];

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('img');
  star.src = 'img/star.svg';
  star.classList.add('star');
  
  
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';

  background.appendChild(star);

  stars.push({
    element: star,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.7), 
    vy: (Math.random() - 0.7),  
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 2
  });  
}

function animateStars() {
  stars.forEach(star => {
    star.x += star.vx;
    star.y += star.vy;
    star.rotation += star.rotationSpeed;

  
    if (star.x <= 0 || star.x >= window.innerWidth - 50) star.vx *= -1;
    if (star.y <= 0 || star.y >= window.innerHeight - 50) star.vy *= -1;

    star.element.style.left = star.x + 'px';
    star.element.style.top = star.y + 'px';
    star.element.style.transform = `rotate(${star.rotation}deg)`;
  });

  requestAnimationFrame(animateStars);
}

animateStars();
