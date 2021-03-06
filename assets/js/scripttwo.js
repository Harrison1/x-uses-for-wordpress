(function() {

	$(document).ready(function() {

		var optionstwo = {
			ovalWidth: 400,
			ovalHeight: 50,
			offsetX: 100,
			offsetY: 325,
			angle: 0,
			activeItem: 0,
			duration: 350,
			className: 'itemtwo'
		}

		var carouseltwo = $('.carouseltwo').CircularCarousel(optionstwo);

		/* Fires when an item is about to start it's activate animation */
		carouseltwo.on('itemBeforeActive', function(e, item) {
			$(item).css('box-shadow', '0 0 20px blue');
		});

		/* Fires after an item finishes it's activate animation */
		carouseltwo.on('itemActive', function(e, item) {
			$(item).css('box-shadow', '0 0 20px green');
		});

		/* Fires when an active item starts it's de-activate animation */
		carouseltwo.on('itemBeforeDeactivate', function(e, item) {
			$(item).css('box-shadow', '0 0 20px yellow');
		});

		/* Fires after an active item has finished it's de-activate animation */
		carouseltwo.on('itemAfterDeactivate', function(e, item) {
			$(item).css('box-shadow', '');
		});

		/* Manaully click an item anywhere in the carousel */
		$('.carouseltwo .itemtwo').click(function(e) {
			var index = $(this).index('li');
			carouseltwo.cycleActiveTo(index);
			e.preventDefault();
		});
	
	});

})();