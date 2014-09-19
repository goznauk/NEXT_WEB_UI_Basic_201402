define(
	function() {
		function loadCard(id, data) {
			var newCardContainer = document.createElement("div");
			newCardContainer.className = "cardContainer";

			newCard = document.createElement("div");
			newCard.className = "card";
			//newCard.innerHTML = id + " content";
			var html = "<h2>" + data.weeklyMore[id].title + "</h2><div><a href='" + data.weeklyMore[id].src + "'><img src='" + data.weeklyMore[id].imgSrc + "'></a></div>";
			console.log(html);
			newCard.innerHTML = html;


			newCardContainer.appendChild(newCard);
			return newCardContainer;
		}

		function loadRow(data) {
			var newCardHolder = document.createElement("div");
			var fragment = document.createDocumentFragment()
			newCardHolder.className = "cardHolder";
			for(var i=0; i<5; i++) {
				fragment.appendChild(loadCard(i, data));	
			}
			newCardHolder.appendChild(fragment);
			return newCardHolder;
		}

		function addRow(clusterId) {
			document.getElementById(clusterId).appendChild(loadRow());
		}

		function loadCluster(data) {
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

			newCardHolder.appendChild(loadRow(data));

			newCluster.appendChild(newClusterHeading);
			newCluster.appendChild(newCardHolder);
			newClusterContainer.appendChild(newCluster);
			return newClusterContainer;
		}

		function loadPage(data) {
			var newPage = document.createElement("div");
			newPage.className = "mainPage";

			for(var i=0; i<5; i++) {
				newPage.appendChild(loadCluster(data));
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

			addNewPage : function(data) {
				document.getElementById("mainContainer").appendChild(loadPage(data));
			}, 

			loadNewPage : function(data) {
				document.getElementById("mainContainer").innerHTML = "";
				this.addNewPage(data);
			},
			loadaCard : function(data) {
				document.getElementById("mainContainer").appendChild(loadCard(1, data));
			}

		}
	}
);