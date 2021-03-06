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
			responsiveWidth: 768,
			responsiveHeight: 768,
			afterRender: function(){
				setTimeout(() => {
					$('#fullpage').addClass('is-load');
				}, 300);
			},
			onLeave: function(origin, destination, direction) {
				if(destination > 1) {
					$('#header .logo').animate({opacity: 0}, 550);
				} else {
					$('#header .logo').animate({opacity: 1}, 550);
				}
				
				if(destination === 2) {
					$.each($('.about__content > *'), (idx, el) => {
						$(el).addClass(' animate__animated animate__fadeInUp');
					});
				}
				
				if(destination === 6) {
					$.each($('.view__content > *'), (idx, el) => {
						$(el).addClass(' animate__animated animate__fadeInUp');
					});
				}
			}
		});
	};
	
	
	const downArrow = () => {
		$('.main__arrow').on('click', (ev) => {
			$('#fp-nav li').eq(1).find('a').trigger('click');
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
		initSmoothScroll();
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
