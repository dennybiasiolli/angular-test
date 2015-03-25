'use strict';

angular.module('myApp.view1')
    .directive('articolo', [function(){
        return{
            restrict: "EAC",
            scope: {
                articolo: "=news",
                searchKey: "=searchKey"
            },
            templateUrl: 'app/components/view1/view1_articolo.html'
        }
    }])
;