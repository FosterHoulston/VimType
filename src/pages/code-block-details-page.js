import { navigate } from '../router.js';

export const render = (root) => {
  root.innerHTML = `
    <h1>This is the Code block details page<h1>
    <button id="detailsBackBtn">Back</button>
  `;
  root.querySelector('#detailsBackBtn').onclick = () => navigate('/game-over');
};
