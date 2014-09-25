define(['./view'], function(view) {
	var moreButton_toggle = true;
	var genreDropdown_toggle = true;
	var scrollMax = 100;



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
		}
	}	
});