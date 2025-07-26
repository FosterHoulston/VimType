import { navigate } from '../router.js';

export const render = (root) => {
  root.innerHTML = `
    <h1>This is the game over screen<h1>
    <button id="progressBtn">View Progress</button>
    <button id="playAgainBtn">Play Again</button>
    <button id="homeBtn">Home Page</button>
    <button id="codeDetailsBtn">About the code block</button>
  `;
  root.querySelector('#progressBtn').onclick = () => navigate('/progress');
  root.querySelector('#playAgainBtn').onclick = () => navigate('/game');
  root.querySelector('#homeBtn').onclick = () => navigate('/');
  root.querySelector('#codeDetailsBtn').onclick = () =>
    navigate('/code-details');
};
