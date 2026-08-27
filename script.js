const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  formStatus.textContent = 'Sending...';
  formStatus.className = 'form-status';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      formStatus.textContent = 'Thanks! Your message has been sent — we will get back to you soon.';
      formStatus.classList.add('success');
      contactForm.reset();
    } else {
      formStatus.textContent = 'Something went wrong. Please try again or call us directly.';
      formStatus.classList.add('error');
    }
  } catch (error) {
    formStatus.textContent = 'Something went wrong. Please try again or call us directly.';
    formStatus.classList.add('error');
  }
});
