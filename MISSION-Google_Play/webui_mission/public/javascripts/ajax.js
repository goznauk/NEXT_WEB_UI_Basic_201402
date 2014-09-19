define(
	function() {
		function getAjaxHttp() {
			var xmlHttp = new XMLHttpRequest();
			return xmlHttp;
		}

		function callAjax(type, url, callback){
			var ajax = getAjaxHttp();
			if(ajax === null) {
				console.log("ajax null");
				return;
			}
			requestAjaxData(ajax, type, url, callback);
		}

		function requestAjaxData(ajax, type, url, callback){
			ajax.onreadystatechange = function() {
				if(ajax.readyState==4 && ajax.status==200) {
					eval(callback)(ajax);
				}
			};
			ajax.open(type, url, true);
			ajax.send();
		}
		
		return {
			call : function(type, url, callback) {
				return callAjax(type, url, callback);
			}
		};
	}
);