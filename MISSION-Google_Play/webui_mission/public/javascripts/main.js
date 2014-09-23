require(['view', 'window', 'event'], function(view, mWindow, mEvent) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    view.loadNewPage();

    console.log(mWindow.getScroll());
    console.log(mWindow.getSize());
    window.addEventListener('scroll', function() { console.log(mWindow.getScroll()); }, false);
    window.addEventListener('resize', function() { console.log(mWindow.getSize()); }, false);



    document.addEventListener('click', mEvent.onMoreButtonClicked, false);
});