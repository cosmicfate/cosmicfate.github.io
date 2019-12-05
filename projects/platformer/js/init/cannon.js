(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example:
        cannon.create.onTop(475);
        cannon.create.onTop(495);
        cannon.create.onTop(515);
        cannon.create.onTop(605);
        cannon.create.onTop(625);
        cannon.create.onTop(655);
        cannon.create.onBottom(475);
        cannon.create.onBottom(495);
        cannon.create.onBottom(515);
        cannon.create.onBottom(605);
        cannon.create.onBottom(625);
        cannon.create.onBottom(655);
        cannon.create.onLeft(458);
        cannon.create.onLeft(595);
        cannon.create.onRight(315);
        
        
};
})(window);

