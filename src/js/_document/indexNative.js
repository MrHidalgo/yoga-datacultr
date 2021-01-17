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
			afterRender: function(){
				setTimeout(() => {
					$('#pagepiling').addClass('is-load');
				}, 150);
			}
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
	
	window.addEventListener('load', (ev) => {
		initNative();
	}, false);
})();
