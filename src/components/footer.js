import '../styles/components/footer.css';

export const renderFooter = (mountPoint) => {
  mountPoint.innerHTML = `
    <div class="mainCntr">
      <div class="keyShortcutsCntr>
        <div class="keyShortcutCntr">
	  <div class="keyContainer">
	    this is a key container item
	  </div>
	</div>
      </div>
    </div>
  `;
};
