const sectionOneEmail = document.getElementById('section-one-email')
const sectionOneSubmit = document.querySelector('.section-one-submit')
const sectionThreeEmail = document.getElementById('section-three-email')
const sectionThreeSubmit = document.querySelector('.section-three-submit')


sectionOneSubmit.onclick = () => {
  const emailError = document.querySelector('.section-one-email-error');
  const inputValue = sectionOneEmail.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (inputValue === '' || !emailRegex.test(inputValue)) {
    emailError.style.display = 'block';
    sectionOneEmail.classList.add('error-border');
  } else {
    emailError.style.display = 'none';
    sectionOneEmail.classList.remove('error-border');
  }
};

sectionThreeSubmit.onclick = () => {
  const emailError = document.querySelector('.section-three-email-error');
  const inputValue = sectionThreeEmail.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (inputValue === '' || !emailRegex.test(inputValue)) {
    emailError.style.display = 'block';
    sectionThreeEmail.classList.add('error-border');
  } else {
    emailError.style.display = 'none';
    sectionThreeEmail.classList.remove('error-border');
  }
};


