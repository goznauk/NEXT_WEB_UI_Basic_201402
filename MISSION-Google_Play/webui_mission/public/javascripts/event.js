define(['./view'], function(view) {
	var moreButton_toggle = true;
	var genreDropdown_toggle = true;

	function onButtonClicked(e) {
		var source = e.srcElement;
		if(source.className === 'clusterButton') {
			onMoreButtonClicked(source);
		}
	}

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
			
		}
	}


	return {
		onButtonClicked : onButtonClicked
	}	
});