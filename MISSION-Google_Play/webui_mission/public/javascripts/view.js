define(["./loader", "./ajax"], function(loader, ajax) {
	var pages = 0;


	return {

		addRow : function() {
			return loader.addRow();
		},

		loadCluster : function() {
			return loader.loadCluster();
		},

		loadNewPage : function() {
			return loader.loadNewPage();
		},

		addNewPage : function() {
			return loader.addNewPage();
		},

		loadaCard : function() {
			ajax.call("GET", "/data/book.json", function(ajax) {
				//console.log(ajax.responseText);
				var result = JSON.parse(ajax.responseText);
				for(var i = 0; i < result.weeklyMore.length; i++) {
					//console.log(result.weeklyMore[i].title + "/" + result.weeklyMore[i].author);
				}
				loader.loadaCard(result);
			});
		}
	}
});
