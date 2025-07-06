const navbar = document.getElementById('navbar');
const toggle = document.getElementById('toggle');
const hamburger = document.getElementById('hamburger-menu');


// hamburger.addEventListener('mouseenter', () => {
//   navbar.classList.add('opacity-100');
//   navbar.classList.remove('opacity-0');
// });

// hamburger.addEventListener('mouseleave', () => {
//   // Delay supaya mouse bisa pindah ke navbar tanpa langsung hilang
//   setTimeout(() => {
//     if (!navbar.matches(':hover') && !hamburger.matches(':hover')) {
//       navbar.classList.add('opacity-0');
//       navbar.classList.remove('opacity-100');
//     }
//   }, 100);
// });

// navbar.addEventListener('mouseleave', () => {
//   if (!hamburger.matches(':hover')) {
//     navbar.classList.add('opacity-0');
//     navbar.classList.remove('opacity-100');
//   }
// });

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    navbar.classList.remove('opacity-0' );
    navbar.classList.add('opacity-100' );
  } else {
    navbar.classList.add('opacity-0' );
    navbar.classList.remove('opacity-100' );
  }
});

// Deteksi klik di luar navbar dan hamburger
document.addEventListener('click', (event) => {
  // Jika navbar sedang terbuka
  if (toggle.checked) {
    // Jika klik bukan di navbar dan bukan di hamburger
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
      navbar.classList.add('opacity-0');
      navbar.classList.remove('opacity-100');
    }
  }
});
