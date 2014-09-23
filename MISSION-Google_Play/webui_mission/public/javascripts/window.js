define({
	getSize : function() {
		var mWidth = window.innerWidth;
		var mHeight = window.innerHeight;

		return [mWidth, mHeight];
	},

	getScroll : function() {
		var de = document.documentElement;
		var b = document.body;
		var scroll = {};

		scroll = document.all ? (!de.scrollTop ? b.scrollTop : de.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY);

		return scroll;
	}
});