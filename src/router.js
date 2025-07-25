const router = {
  '': () => import('./pages/home-page.js'),
  '#/game': () => import('./pages/game-page.js'),
  '#/game-over': () => import('./pages/game-over-page.js'),
  '#/details': () => import('./pages/code-block-details-page.js'),
  '#/progress': () => import('./pages/progress-page.js'),
};

const outlet = document.getElementById('app');

const renderRoute = async () => {
  const path = location.hash || '';
  const load = router[path] || router[''];
  const { render } = await load();
  outlet.innerHTML = '';
  render(outlet);
};

window.addEventListener('hashchange', renderRoute);

export const startRouter = () => {
  renderRoute();
};
