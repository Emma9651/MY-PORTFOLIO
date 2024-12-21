const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar:nth-child(1)');
const bar2 = document.querySelector('.bar:nth-child(2)');
const bar3 = document.querySelector('.bar:nth-child(3)');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
  bar1.classList.toggle('active');
  bar2.classList.toggle('active');
  bar3.classList.toggle('active');
});


//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;
