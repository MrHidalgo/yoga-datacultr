/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const pageFullHeight = () => {
		$('#pagepiling').pagepiling({
			sectionSelector: '.section',
			scrollingSpeed: 400,
		});
	};
	
	
	const downArrow = () => {
		$('.main__arrow').on('click', (ev) => {
			$('#pp-nav li').eq(1).find('a').trigger('click');
		});
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initHamburger();
		// ==========================================

		// callback
		pageFullHeight();
		downArrow();
		// ==========================================
	};
	initNative();
})();
