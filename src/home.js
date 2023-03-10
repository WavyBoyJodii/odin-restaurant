import './style.css';
import './style2.css';
import Logo from './img/chicken-art.jpg';
import bigChicken from './img/big-chicken-art.jpg';
import squig from './img/squiggly-line.png';
import { contentDiv, frame, mainPage } from '.';
import { toHome, toMenu, toStory } from './unnapend';

export default function initHome() {
  // const contentDiv = document.getElementById('content');
  // const frame = document.createElement('div');
  // const mainPage = document.createElement('div');

  const bizLogo = new Image();
  bizLogo.src = Logo;
  bizLogo.classList.add('biz');

  const navDiv = document.createElement('div');
  navDiv.classList.add('nav');

  const homeNav = document.createElement('p');
  homeNav.textContent = 'Home';
  homeNav.classList.add('nav-button');
  homeNav.addEventListener('click', toHome);

  const menuNav = document.createElement('p');
  menuNav.textContent = 'Menu';
  menuNav.classList.add('nav-button');
  menuNav.addEventListener('click', toMenu);

  const storyNav = document.createElement('p');
  storyNav.textContent = 'Our Story';
  storyNav.classList.add('nav-button');
  storyNav.addEventListener('click', toStory);

  navDiv.append(homeNav, menuNav, storyNav);

  const mainPhoto = new Image();
  mainPhoto.src = bigChicken;
  mainPhoto.classList.add('main-photo');

  const bigName = document.createElement('p');
  bigName.textContent = "Jodii's wings";
  bigName.classList.add('name');

  const squigLine = new Image();
  squigLine.src = squig;
  squigLine.classList.add('name-art');

  const splashMessage = document.createElement('div');
  splashMessage.classList.add('splashMessage');

  const message1 = document.createElement('div');
  message1.textContent = `Chicken So Tasty`;

  const message2 = document.createElement('div');
  message2.textContent = `Chicken So Tender`;
  message2.style.color = '#ed3c20';

  const message3 = document.createElement('div');
  message3.textContent = `Jodii's Wings`;

  splashMessage.append(message1, message2, message3);

  const smallSplash = document.createElement('p');
  smallSplash.textContent =
    "A world of delectable treasures awaits you. Welcome to Jodii's Wings, the premier Northen/Southern fusion chicken restaurant in NYC. Having worked in several 5 star restaurants Jodii is combining high class dining with the simple pleasures of chicken wings rated the best wing restaurnt by TimeOut magazine, we are here to please!";
  smallSplash.classList.add('smallSplash');

  const orderButton = document.createElement('button');
  orderButton.textContent = 'Order Here';
  orderButton.classList.add('orderButton');

  const socialNavDiv = document.createElement('div');
  socialNavDiv.classList.add('social-nav');

  const instaNav = document.createElement('p');
  instaNav.textContent = 'Instagram';
  instaNav.classList.add('social-nav-button');

  const faceNav = document.createElement('p');
  faceNav.textContent = 'Facebook';
  faceNav.classList.add('social-nav-button');

  const twitNav = document.createElement('p');
  twitNav.textContent = 'Twitter';
  twitNav.classList.add('social-nav-button');

  socialNavDiv.append(instaNav, faceNav, twitNav);

  // frame.id = 'case';
  // mainPage.classList.add('main');

  mainPage.classList.add('main');
  mainPage.append(
    bizLogo,
    navDiv,
    mainPhoto,
    bigName,
    squigLine,
    splashMessage,
    smallSplash,
    orderButton,
    socialNavDiv
  );
  frame.appendChild(mainPage);
  contentDiv.appendChild(frame);
  return { navDiv, splashMessage, socialNavDiv };
}
