import { navigate } from '../router.js';

export const render = (root) => {
  root.innerHTML = `
    <h1>This is the progress page<h1>
    <button id="progressBackBtn">Back</button>
  `;
  root.querySelector('#progressBackBtn').onclick = () => navigate('/game-over');
};
