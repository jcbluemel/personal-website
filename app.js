document.addEventListener('DOMContentLoaded', () => {

  // save 'page' divs in variables for access
  const main = document.querySelector("#main");
  const aboutMe = document.querySelector("#about-me");
  const contact = document.querySelector("#contact");
  const resume = document.querySelector("#resume");

  // if nav button is clicked, fade in that 'page' and hide all others
  document.querySelector("#main-btn").addEventListener('click', () => {
    main.style.display = 'flex';
    main.style.animation = 'fadeIn linear .75s';
    aboutMe.style.display = 'none';
    contact.style.display = 'none';
    resume.style.display = 'none';
  })
  document.querySelector("#about-me-btn").addEventListener('click', () => {
    main.style.display = 'none';
    aboutMe.style.display = 'block';
    aboutMe.style.animation = 'fadeIn linear .75s';
    contact.style.display = 'none';
    resume.style.display = 'none';
  })
  document.querySelector("#contact-btn").addEventListener('click', () => {
    main.style.display = 'none';
    aboutMe.style.display = 'none';
    contact.style.display = 'block';
    contact.style.animation = 'fadeIn linear .75s';
    resume.style.display = 'none';
  })
  document.querySelector("#resume-btn").addEventListener('click', () => {
    main.style.display = 'none';
    aboutMe.style.display = 'none';
    contact.style.display = 'none';
    resume.style.display = 'block';
    resume.style.animation = 'fadeIn linear .75s';
  })

});