const loginNav = document.getElementById('login-nav');
const loginOpen = document.getElementById('loginopen');
const closelog = document.querySelectorAll('.fa-close');

// displays login form
loginNav.addEventListener('click', () => {
  loginOpen.style.display = 'flex';
});

// closes login form
closelog.forEach((logop) => logop.addEventListener('click', () => {
  loginOpen.style.display = 'none';
}));
