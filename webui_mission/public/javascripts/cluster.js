define(function() {
	var column = 12, row = 1;

	function loadCard(id, data) {
		var clusterNum = Math.floor(id/100);
		var cardNum = Math.floor(id%100);

		var newCardContainer = document.createElement("div");
		newCardContainer.className = 'cardContainer';

		newCard = document.createElement('div');
		newCard.className = 'card';


		var html = '<a href="' + data.lists[clusterNum].list[cardNum].src + '"><div class="cardImgContainer"><img src="' + "https://encrypted.google.com/books/images/frontcover/VvCTIS-i28IC?fife=w160-rw" + '"></div><h2>' + data.lists[clusterNum].list[cardNum].title + '</h2></div></a>';
		newCard.innerHTML = html;

		newCardContainer.appendChild(newCard);
		return newCardContainer;
	}

	function loadRow(id, data) {
		var newCardHolder = document.createElement('div');
		var fragment = document.createDocumentFragment();
		newCardHolder.className = 'cardHolder';
		newCardHolder.id = 'cardHolder' + id.toString();
		newCardHolder.innerHTML = '';

		for(var i=1; i<Math.min(column, data.lists[Math.floor(id/100)].list.length); i++) {
			fragment.appendChild(loadCard(id + i, data));
		}
		newCardHolder.appendChild(fragment);
		return newCardHolder;
	}

	function addRow(clusterId) {
		document.getElementById(clusterId).appendChild(loadRow());
	}

	function loadCluster(id, data) {
		// 한 줄을 가진 cluster 생성		
		var newClusterContainer = document.createElement('div');
		newClusterContainer.className = 'clusterContainer';

		var newCluster = document.createElement('div');
		newCluster.className = 'cluster';

		var newClusterHeading = document.createElement('h1');
		newClusterHeading.className = 'clusterHeading';
		newClusterHeading.innerHTML = id/100 +". "+ data.lists[id/100].listname;

		var newClusterButton = document.createElement('div');
		newClusterButton.className = 'clusterButton';
		newClusterButton.id = 'clusterButton' + id;
		newClusterButton.innerHTML = 'More';

		newCluster.appendChild(newClusterHeading);
		newCluster.appendChild(newClusterButton);
		newCluster.appendChild(loadRow(id, data));
		newClusterContainer.appendChild(newCluster);
		return newClusterContainer;
	}

	return {
		loadCluster : loadCluster,
		loadFullCluster : function(id, data) {
			column = 50;
			var cluster = this.loadCluster(id, data);
			cluster.children[0].children[2].className = 'cardHolder full';
			cluster.children[0].children[1].innerHTML = '되돌아가기';
			return cluster;
		}
	}
});