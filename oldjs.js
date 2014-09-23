	<script type="text/javascript">
		window.addEventListener('scroll', setTopBar, false);

		function setAutoLoad() {
			var scroll = getNowScroll.Y;
			var num = 2;

			if((scroll/3000) == 1) {
				loadNewPage();
			}
		}


		function loadNewPage(num) {
			var newPage = document.createElement("div");
			newPage.className = "mainPage";

			for(var i=0; i<5; i++) {
				var id = ((num*100)+i);
				var newClusterContainer = document.createElement("div");
				newClusterContainer.className = "clusterContainer";

				var newCluster = document.createElement("div");
				newCluster.className = "cluster";

				var newClusterHeading = document.createElement("h1");
				newClusterHeading.className = "clusterHeading";
				newClusterHeading.innerHTML = i + ". Cluster"
				var newCardHolder = document.createElement("div");
				newCardHolder.className = "cardHolder";
				newCardHolder.id = "cardHolder" + id.toString();
				newCardHolder.innerHTML = "";

				newCluster.appendChild(newClusterHeading);
				newCluster.appendChild(newCardHolder);

				newClusterContainer.appendChild(newCluster);
				newPage.appendChild(newClusterContainer);
			}
			document.getElementById("mainContainer").appendChild(newPage);

			for(var i = 0; i < 5; i++) {
				var id = ((num*100)+i);
				reload("cardHolder" + id.toString());
			}
		}

		function setTopBar() {
			var scroll = getNowScroll().Y;

			if(scroll>=60) {
				document.getElementById("navContainer").className = "navContainer sticky";
				document.getElementById("actionBarContainer").className = "actionBarContainer sticky";
				document.getElementById("mainBeginning").className = "mainBeginning_sticky";
			} else {
				document.getElementById("navContainer").className = "navContainer";
				document.getElementById("actionBarContainer").className = "actionBarContainer";
				document.getElementById("mainBeginning").className = "";
			}
		}

		function getNowScroll() {
			var de = document.documentElement;
			var b = document.body;
			var now = {};

			now.X = document.all ? (!de.scrollLeft ? b.scrollLeft : de.scrollLeft) : (window.pageXOffset ? window.pageXOffset : window.scrollX);
			now.Y = document.all ? (!de.scrollTop ? b.scrollTop : de.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY);

			return now;
		}


		window.addEventListener('resize', reload);
		function getWidth(elementId) {
			var wid = document.getElementById(elementId).clientWidth;
			return wid;
		}

		function reload(elementId) {
			document.getElementById(elementId).innerHTML = "";

			for(i=0; i<Math.floor(getWidth(elementId)/160); i++) {
				newCardContainer = document.createElement("div");
				newCardContainer.className = "cardContainer";

				newCard = document.createElement("div");
				newCard.className = "card";
				newCard.innerHTML = i + " content";

				newCardContainer.appendChild(newCard);

				document.getElementById(elementId).appendChild(newCardContainer);
			}
		}
	</script>