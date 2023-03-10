import initHome from './home';
import initMenu from './menu';
import initStory from './story';
import { contentDiv, frame, mainPage } from '.';

function unappendAll() {
  initHome().navDiv.replaceChildren();
  initHome().splashMessage.replaceChildren();
  initHome().socialNavDiv.replaceChildren();
  mainPage.replaceChildren();
  frame.replaceChildren();
  contentDiv.replaceChildren();
}
export function toMenu() {
  mainPage.className = '';
  unappendAll();
  initMenu();
}
export function toHome() {
  mainPage.className = '';
  unappendAll();
  initHome();
}
export function toStory() {
  mainPage.className = '';
  unappendAll();
  initStory();
}
