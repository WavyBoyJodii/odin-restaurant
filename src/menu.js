import './style2.css';
import './style.css';
import Logo from './img/chicken-art.jpg';
import { contentDiv, frame, mainPage } from '.';
import bakedChickenArt from './img/baked-chicken-wings-asian-style.jpg';
import chickenFingersArt from './img/chicken-fingers.jpg';
import grilledChickenArt from './img/grilled-chicken.jpg';
import tabakaChickenArt from './img/tabaka-chicken.jpg';
import { toHome, toMenu } from './unnapend';

export default function initMenu() {
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

  const contactNav = document.createElement('p');
  contactNav.textContent = 'Contact Us';
  contactNav.classList.add('nav-button');

  navDiv.append(homeNav, menuNav, storyNav, contactNav);

  const food1 = document.createElement('div');
  const bakedChicken = new Image();
  bakedChicken.src = bakedChickenArt;
  bakedChicken.classList.add('photos');
  const bakedMessage = document.createElement('p');
  bakedMessage.textContent =
    'Delicious, Juicy, Baked Chicken with a lemon zest seasoning';
  food1.classList.add('food1');
  food1.append(bakedChicken, bakedMessage);

  const food2 = document.createElement('div');
  const chickenFingers = new Image();
  chickenFingers.src = chickenFingersArt;
  chickenFingers.classList.add('photos');
  const fingersMessage = document.createElement('p');
  fingersMessage.textContent =
    'Deep Fried Buttermilk Southern Classic Chicken Tenders';
  food2.classList.add('food2');
  food2.append(chickenFingers, fingersMessage);

  const food3 = document.createElement('div');
  const grilledChicken = new Image();
  grilledChicken.src = grilledChickenArt;
  grilledChicken.classList.add('photos');
  const grilledMessage = document.createElement('p');
  grilledMessage.textContent =
    'Open Flame grilled cajun chicken, A midwest specialty';
  food3.classList.add('food3');
  food3.append(grilledChicken, grilledMessage);

  const food4 = document.createElement('div');
  const tabakaChicken = new Image();
  tabakaChicken.src = tabakaChickenArt;
  tabakaChicken.classList.add('photos');
  const tabakaMessage = document.createElement('p');
  tabakaMessage.textContent = 'Tabaka indian style chicken wings, very spicy';
  food4.classList.add('food4');
  food4.append(tabakaChicken, tabakaMessage);

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

  mainPage.classList.add('menu-main');
  mainPage.append(bizLogo, navDiv, food1, food2, food3, food4, socialNavDiv);
  frame.appendChild(mainPage);
  contentDiv.appendChild(frame);
}
