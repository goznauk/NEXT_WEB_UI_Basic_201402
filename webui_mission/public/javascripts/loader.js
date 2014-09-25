define(['./cluster', './dropdown'], function (cluster, dropdown) {
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
		load : function(what, data, id) {
			console.log(what);
			var fn = eval('load' + what);
			console.log(fn);

			if(typeof(fn) === 'function') {
				fn(data, id);
			}
		},

		addNewPage : function(data) {
			document.getElementById('mainContainer').appendChild(loadPage(data));
		},

		loadNewPage : function(data) {
			document.getElementById('mainContainer').innerHTML = '';
			document.getElementById('mainContainer').appendChild(loadPage(data));
		},

		loadFullClusterPage : function(data, id) {
			document.getElementById('mainContainer').innerHTML = '';
			document.getElementById('mainContainer').appendChild(loadFullClusterPage(data, id));

		},

		loadGenreDropdown : function(data) {
			document.getElementById('genreDropdownSub').appendChild(dropdown.loadDropdown(data));
		},

		removeGenreDropdown : function() {
			document.getElementById('genreDropdownSub').innerHTML = '';
		}
	}
});