var view = (function() {
	var pages = 0;


	var loader = (function() {
		function loadCard(id) {
			var newCardContainer = document.createElement("div");
			newCardContainer.className = "cardContainer";

			newCard = document.createElement("div");
			newCard.className = "card";
			newCard.innerHTML = id + " content";

			newCardContainer.appendChild(newCard);
			return newCardContainer;
		}

		function loadRow() {
			var newCardHolder = document.createElement("div");
			var fragment = document.createDocumentFragment()
			newCardHolder.className = "cardHolder";
			for(var i=0; i<5; i++) {
				fragment.appendChild(loadCard(i));	
			}
			newCardHolder.appendChild(fragment);
			return newCardHolder;
		}

		function addRow(clusterId) {
			document.getElementById(clusterId).appendChild(loadRow());
		}

		function loadCluster() {
			// 한 줄을 가진 cluster 생성
			
			var id = 142
			var newClusterContainer = document.createElement("div");
			newClusterContainer.className = "clusterContainer";

			var newCluster = document.createElement("div");
			newCluster.className = "cluster";

			var newClusterHeading = document.createElement("h1");
			newClusterHeading.className = "clusterHeading";
			newClusterHeading.innerHTML = "123" + ". Cluster"
			var newCardHolder = document.createElement("div");
			newCardHolder.className = "cardHolder";
			newCardHolder.id = "cardHolder" + id.toString();
			newCardHolder.innerHTML = "";

			newCardHolder.appendChild(loadRow());

			newCluster.appendChild(newClusterHeading);
			newCluster.appendChild(newCardHolder);
			newClusterContainer.appendChild(newCluster);
			return newClusterContainer;
		}

		function loadPage(pageNum) {
			var newPage = document.createElement("div");
			newPage.className = "mainPage";

			for(var i=0; i<5; i++) {
				newPage.appendChild(loadCluster());
			}
			
			return newPage;
		}

		return {
			addRow : function() {
				return addRow();
			},

			loadCluster : function() {
				return loadCluster();
			},

			addNewPage : function() {
				document.getElementById("mainContainer").appendChild(loadPage());
			}, 

			loadNewPage : function() {
				document.getElementById("mainContainer").innerHTML = "";
				this.addNewPage();
			}

		}
	})();


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
		}
	}
})();
