import { navigate } from '../router.js';

export const render = (root) => {
  root.innerHTML = `
    <div 
      id="main-container"
      style="
        border: 2px solid red;
      "
    >
      <div
        id="header-container"
	style="
	"
      >
      </div>
      <h1>Welcome to VimType!<h1>
      <button id="playBtn">Play</button>
      <button id="quitBtn">Quit</button>
    </div>
  `;

  root.querySelector('#playBtn').onclick = () => navigate('/game');
};
