define(['./loader', './ajax', './window'], function(loader, ajax, myWindow) {
	var pages = 1;

	return {
		loadNewPage : function() {
			ajax.call('GET', '/data/book2.json', function(ajax) {
				var result = JSON.parse(ajax.responseText);
				loader.loadNewPage(result);
			});
			window.scrollTo(0, 0);
		},

		addNewPage : function() {
			pages++;
			return loader.addNewPage();
		},

		loadFullClusterPage : function(id) {
			ajax.call('GET', '/data/book2.json', function(ajax) {
				var result = JSON.parse(ajax.responseText);
				loader.loadFullClusterPage(result, id);
			});
			window.scrollTo(0, 0);
		}
	}
});