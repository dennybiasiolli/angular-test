'use strict';

/* Filters */

angular.module('myApp.waste')
    .filter('enphatize', function(){
    return function(text, searchKey){
        if(!text){
            return "";
        }
        if(!searchKey)
            return text;
        return text;
        //bypasso, se attivato imposta i termini di ricerca tutti in maiuscolo
        //var regEx = new RegExp(searchKey, "ig");
        //return text.replace(regEx, searchKey.toUpperCase());
    }
})
;
