import './style.css';
import './style2.css';
import initHome from './home';
import initMenu from './menu';

console.log('app is up and running');

export const contentDiv = document.getElementById('content');
export const frame = document.createElement('div');
export const mainPage = document.createElement('div');
frame.id = 'case';
// mainPage.classList.add('main');

initMenu();
