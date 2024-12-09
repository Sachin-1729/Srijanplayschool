const audio = document.querySelector('#audio');
  let hasInteracted = false;

  // First user interaction (click anywhere on the page)
  window.addEventListener('click', () => {
    if (!hasInteracted) {
      hasInteracted = true;
      console.log('User interaction detected, autoplay is enabled!');
    }
  });

  // Scroll event listener
  window.addEventListener('scroll', () => {
    if (hasInteracted && audio.paused) {
      audio.play().then(() => {
        console.log('Audio is playing.');
      }).catch(error => {
        console.log('Autoplay failed due to browser restrictions:', error);
      });
    }
  });

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
