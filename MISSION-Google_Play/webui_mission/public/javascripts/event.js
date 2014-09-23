define(['./view'], function(view) {
	var toggle = true;

	function onMoreButtonClicked(e) {
		var cluster = e.srcElement;
		if(cluster.className == 'clusterButton') {
			if(toggle) {
				view.loadFullClusterPage(cluster.id.split('n')[1]);
			} else {
				view.loadNewPage();
			}
			toggle = !toggle;
		}
	}



	return {
		onMoreButtonClicked : onMoreButtonClicked
	}	
});