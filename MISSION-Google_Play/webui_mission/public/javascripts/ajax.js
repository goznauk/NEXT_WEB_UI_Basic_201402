define(
	function() {
		function getAjaxHttp() {
			var xmlHttp = new XMLHttpRequest();
			return xmlHttp;
		}

		//데이터 요청 보내기
		//ajax객체와 호출한 곳에서 넘겨준 콜백 메소드를 재호출해 준다.
		function requestAjaxData(ajax, type, url, callback){
			ajax.onreadystatechange = function() {
				if(ajax.readyState==4 && ajax.status==200) {
					eval(callback)(ajax);
				}
			}
			ajax.open(type, url, true);
			ajax.send();
		}
		
		//ajax작업처리
		function callAjax(type, url, callback){
			var ajax = getAjaxHttp();
			if(ajax == null){
				console.log("ajax null");
				return;
			}
			requestAjaxData(ajax, type, url, callback);
		}

		return {
			call : function(type, url, callback) {
				return callAjax(type, url, callback);
			}
		}
	}
);