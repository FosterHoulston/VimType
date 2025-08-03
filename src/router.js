const routes = {
  '/': () => import('./components/layout.js'),
  '/game': () => import('./pages/game-page.js'),
  '/game-over': () => import('./pages/game-over-page.js'),
  '/code-details': () => import('./pages/code-block-details-page.js'),
  '/profile': () => import('./pages/profile-page.js'),
};

const outlet = document.getElementById('app');

const renderRoute = async (pathname = window.location.pathname) => {
  const loader = routes[pathname] || routes['/'];
  const { render } = await loader();
  outlet.innerHTML = '';
  render(outlet);
};

export const navigate = (path) => {
  // avoids duplicate pushes
  if (path !== window.location.pathname) {
    history.pushState(null, '', path);
    renderRoute(path);
  }
};

export const startRouter = async () => {
  renderRoute();
};

// Navigates on forward and back page buttons.
window.addEventListener('popstate', () =>
  renderRoute(window.location.pathname)
);
