'use strict';

/* Filters */

angular.module('myApp.view1')
    .filter('enphatize', function(){
    return function(text, searchKey){
        if(!text){
            return "";
        }
        if(!searchKey)
            return text;
        var regEx = new RegExp(searchKey, "ig");
        return text.replace(regEx, searchKey.toUpperCase());
    }
})
;
