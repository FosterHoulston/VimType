import '../styles/components/header.css';

export const renderHeader = (mountPoint) => {
  mountPoint.innerHTML = `
    <div class="mainCntr">
      <div class="logo">
        <h1 class="logoFirst">Vim</h1>
	<h1 class="logoSecond">Type</h1>
      </div>
    </div>
  `;
};
