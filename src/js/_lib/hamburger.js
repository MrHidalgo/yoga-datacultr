

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
	 */
	if(btn) {
		btn.addEventListener("click", (ev) => {
			const elem = ev.currentTarget;
			
			elem.classList.toggle("is-active");
			if(mobileContainer) {
				mobileContainer.classList.toggle("is-open");
			}
			
			hideScrollContainer.forEach((val, idx) => {
				val.classList.toggle("is-hideScroll");
			});
			
		});
	}

};
