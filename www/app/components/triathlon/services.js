'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.triathlon')
    .service('TriathlonRest', ['$http', function($http){
        var service = {};
        service.getDatiGare = function(){
            return $http.get('app/components/triathlon/DatiGare.json');
        };
        return service;
    }]);
;
