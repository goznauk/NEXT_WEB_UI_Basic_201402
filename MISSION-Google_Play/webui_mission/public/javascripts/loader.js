define(['./cluster'], function(cluster) {
	function loadPage(data) {
		var newPage = document.createElement('div');
		newPage.className = 'mainPage';

		for(var i=0; i<=5; i++) {
			newPage.appendChild(cluster.loadCluster(i*100, data));
		}
		
		return newPage;
	}

	function loadFullClusterPage(data, id) {
		var newPage = document.createElement('div');
		newPage.className = 'mainPage';
		newPage.appendChild(cluster.loadFullCluster(parseInt(id), data));
		
		return newPage;
	}

	return {
		addNewPage : function(data) {
			document.getElementById('mainContainer').appendChild(loadPage(data));
		},

		loadNewPage : function(data) {
			document.getElementById('mainContainer').innerHTML = '';
			this.addNewPage(data);
		},

		loadFullClusterPage : function(data, id) {
			document.getElementById('mainContainer').innerHTML = '';
			document.getElementById('mainContainer').appendChild(loadFullClusterPage(data, id));
		}
	}
});