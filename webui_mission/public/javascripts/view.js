define(['./loader', './ajax', './window'], function(loader, ajax, myWindow) {
	var pages = 1;

	function getDataFromBookJson(callback) {
		var overlay = document.querySelector('#mainContainerOverlay');
		overlay.style.display = 'block';
		var iTime = new Date().getTime();
		var now = iTime;

		ajax.call('GET', '/data/book.json', function(ajax) {
			var result = JSON.parse(ajax.responseText);
			
			//위장 시간 지연 - db처리 시간 흉내내기 
			while((now-iTime)<Math.floor(Math.random()*500) + 1000) {
				now = new Date().getTime();
			}

			callback(result);

			overlay.style.display = 'none';
		});
	}

	return {
		loadNewPage : function() {
			getDataFromBookJson(function(result) {
				loader.loadNewPage(result);
			});

			window.scrollTo(0, 0);
		},

		addNewPage : function() {
			pages++;
			return loader.addNewPage();
		},

		loadFullClusterPage : function(id) {
			getDataFromBookJson(function(result) {
				loader.loadFullClusterPage(result, id);
			});

			window.scrollTo(0, 0);
		},

		loadGenreDropdown : function() {
			getDataFromBookJson(function(result) {
				loader.loadGenreDropdown(result);
			})
			
		},

		removeGenreDropdown : function() {
			return loader.removeGenreDropdown();
		},

		setTopBar : function(state) {
			if(state) {
				document.getElementById("navContainer").className = "navContainer sticky";
				document.getElementById("actionBarContainer").className = "actionBarContainer sticky";
				document.getElementById("mainBeginning").className = "mainBeginning_sticky";
			} else {
				document.getElementById("navContainer").className = "navContainer";
				document.getElementById("actionBarContainer").className = "actionBarContainer";
				document.getElementById("mainBeginning").className = "";
			}
		}
	}
});