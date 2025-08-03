import { navigate } from '../router.js';

export const render = (root) => {
  root.innerHTML = `
    <h1>This is the game page<h1>
    <h3>This is sample game text<h3>
    <button id="tempGameOverBtn">Game Over</button>
  `;
  root.querySelector('#tempGameOverBtn').onclick = () => navigate('/game-over');
};
