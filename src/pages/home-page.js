import { navigate } from '../router.js';

export const render = (root) => {
  root.innerHTML = `
    <h1>Welcome to VimType!<h1>
    <button id="playBtn">Play</button>
    <button id="quitBtn">Quit</button>
  `;

  root.querySelector('#playBtn').onclick = () => navigate('/game');
};
