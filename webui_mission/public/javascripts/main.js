require(['view', 'window', 'event'], function(view, mWindow, mEvent) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    view.loadNewPage();

    window.addEventListener('scroll', mEvent.onScrolled, false);
    window.addEventListener('scroll',function() {

        if((mWindow.getScroll() - mWindow.getSize()[1]) === -237)
            {
              //  console.log(mWindow.getScroll()+"zz");
            }
        }, false);
    window.addEventListener('resize', function() { console.log(mWindow.getSize()); }, false);
    document.addEventListener('touchstart', mEvent.handleTouchEvent, false);
    document.addEventListener('touchend', mEvent.handleTouchEvent, false);
    document.addEventListener('click', mEvent.onButtonClicked, false);

});