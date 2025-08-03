/* This is the main page layout. */
import '../styles/components/layout.css';

import '../styles/components/layout.css';

export const render = (root) => {
  root.innerHTML = `
    <div class="mainCntr">
      <header class="siteHeader"></header>
      <main class="siteBody"></main>
      <footer class="siteFooter"></footer>
    </div>
  `;

  import('./header.js').then(({ renderHeader }) =>
    renderHeader(root.querySelector('.siteHeader'))
  );
  import('./footer.js').then(({ renderFooter }) =>
    renderFooter(root.querySelector('.siteFooter'))
  );
};
