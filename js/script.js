function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('img01');
  const images = document.querySelectorAll('.grid-item');
  const closeBtn = document.querySelector('.close');

  images.forEach(img => {
      img.addEventListener('click', () => {
          modal.style.display = 'block';
          modalImg.src = img.src;
      });
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      
  });

  modal.addEventListener('click', (e) => {
      if (e.target !== modalImg) {
          modal.style.display = 'none';
      }
  });
});
