define(['./view'], function(view) {
	var moreButton_toggle = true;
	var genreDropdown_toggle = true;
	var scrollMax = 100;

	var iX, iY, fX, fY;
	var target;


	function onMoreButtonClicked(source) {
		if(moreButton_toggle) {
			view.loadFullClusterPage(source.id.split('n')[1]);
		} else {
			view.loadNewPage();
		}
		moreButton_toggle = !moreButton_toggle;
	}

	function onGenreDropdownClicked(source) {
		if(genreDropdown_toggle) {
			view.loadGenreDropdown();
		} else {
			view.removeGenreDropdown();
		}
		genreDropdown_toggle = !genreDropdown_toggle;
	}

	function onGenreDropdownItemClicked(source) {
		view.loadFullClusterPage(source.id.split('m')[1]*100);
	}

	function onGenreEvent(source) {
		if(!genreDropdown_toggle) {
			view.removeGenreDropdown();
			genreDropdown_toggle = !genreDropdown_toggle;
		} else if(source.id === 'genreDropdown') {
			view.loadGenreDropdown();
			genreDropdown_toggle = !genreDropdown_toggle;
		}
	}

	function handleTouchEvent(source) {
		var moved;

		switch(source.type) {
			case 'touchstart' :
				iX = source.touches[0].clientX;
				iY = source.touches[0].clientY;
				for(target = source.target; target != undefined || target.hasOwnProperty('id') || target.id != 'mainContainer'; target = target.parentNode) {
					console.log(target);
					if(target.className == 'cardHolder') {
						break;
					}
				}
				break;
			case 'touchend':
				fX = source.changedTouches[0].clientX;
				fY = source.changedTouches[0].clientY;
				console.log(fX, iX);
				moved = {x : fX-iX, y : fY-iY};
				console.log(moved);
				if(Math.abs(moved.x)>30 && Math.abs(moved.y)<20) {
					if(moved.x<0) {
						target.querySelector('.cardContainer').className = 'cardContainerNone';

						console.log("moved Next");
					} else {
						console.log("prev");
						var imsi = target.querySelectorAll('.cardContainerNone');
						if(imsi.length != 0) {
							imsi[imsi.length-1].className = 'cardContainer';
						}
					}
				}
				break;

		}
	}

	return {
		onButtonClicked : function(e) {
			var source = e.srcElement;
			
			onGenreEvent(source);

			if(source.className === 'clusterButton') {
				onMoreButtonClicked(source);
			} else if(source.className === 'genreDropdownListItem') {
				onGenreDropdownItemClicked(source);
			}
		},

		onScrolled : function(e) {
			var current = window.scrollY;
			view.setTopBar(current>60);
		},

		handleTouchEvent : handleTouchEvent
	}	
});