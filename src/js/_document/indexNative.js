/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const pageFullHeight = () => {
		$('#fullpage').fullpage({
			sectionSelector: '.section',
			fixedElements: '#header',
			navigation: true,
			verticalCentered: true,
			responsiveWidth: 1024,
			responsiveHeight: 768,
			afterRender: function(){
				setTimeout(() => {
					$('#fullpage').addClass('is-load');
				}, 300);
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
