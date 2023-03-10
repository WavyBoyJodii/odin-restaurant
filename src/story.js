import './style3.css';
import './style2.css';
import './style.css';
import Logo from './img/chicken-art.jpg';
import { contentDiv, frame, mainPage } from '.';
import { toHome, toMenu, toStory } from './unnapend';
import chickenManArt from './img/chickenman.png';

export default function initStory() {
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

  const chickenMan = new Image();
  chickenMan.src = chickenManArt;
  chickenMan.classList.add('chicken-photo');

  const story = document.createElement('p');
  story.textContent =
    "The story of our fried chicken restaurant begins with a family recipe that has been passed down for generations. The founder, Jodii, grew up watching his grandmother prepare the perfect fried chicken using a secret blend of herbs and spices. After years of honing his own technique, Jodii decided to share his family's recipe with the world. He opened his first restaurant in a small town in the southern United States and soon became known for his crispy, juicy chicken. Today, the restaurant has expanded to multiple locations across the country, but the original recipe remains unchanged, ensuring that customers can taste the same mouthwatering chicken that Jodii's grandmother used to make.";
  story.classList.add('story');

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

  mainPage.classList.add('story-main');
  mainPage.append(bizLogo, navDiv, chickenMan, story, socialNavDiv);
  frame.appendChild(mainPage);
  contentDiv.appendChild(frame);
}
