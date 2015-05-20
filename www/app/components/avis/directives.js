'use strict';

angular.module('myApp.avis')
    .directive('divDonatoreEdit', [function(){
        return{
            restrict: "EAC",
            scope: {
                dd: "=donatore"
            },
            templateUrl: 'app/components/avis/avis_div-donatore-edit.html'
        }
    }])
;
