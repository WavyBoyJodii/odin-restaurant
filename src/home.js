import './style.css';
import Logo from './img/chicken-art.jpg';
import bigChicken from './img/big-chicken-art.jpg';
import squig from './img/squiggly-line.png';

export default function initHome() {
  const contentDiv = document.getElementById('content');
  const frame = document.createElement('div');
  const mainPage = document.createElement('div');

  const bizLogo = new Image();
  bizLogo.src = Logo;
  bizLogo.classList.add('biz');

  const navDiv = document.createElement('div');
  navDiv.classList.add('nav');

  const homeNav = document.createElement('p');
  homeNav.textContent = 'Home';
  homeNav.classList.add('nav-button');

  const menuNav = document.createElement('p');
  menuNav.textContent = 'Menu';
  menuNav.classList.add('nav-button');

  const storyNav = document.createElement('p');
  storyNav.textContent = 'Our Story';
  storyNav.classList.add('nav-button');

  const contactNav = document.createElement('p');
  contactNav.textContent = 'Contact Us';
  contactNav.classList.add('nav-button');

  navDiv.append(homeNav, menuNav, storyNav, contactNav);

  const mainPhoto = new Image();
  mainPhoto.src = bigChicken;
  mainPhoto.classList.add('main-photo');

  const bigName = document.createElement('p');
  bigName.textContent = "Jodii's wings";
  bigName.classList.add('name');

  const squigLine = new Image();
  squigLine.src = squig;
  squigLine.classList.add('name-art');

  frame.id = 'case';
  mainPage.classList.add('main');

  mainPage.append(bizLogo, navDiv, mainPhoto, bigName, squigLine);
  frame.appendChild(mainPage);
  contentDiv.appendChild(frame);
}
