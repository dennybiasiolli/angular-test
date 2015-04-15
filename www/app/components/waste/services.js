'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.waste')
    .service('AziendeRest', ['$http', function($http){
        var service = {};
        service.getAziende = function(idAzienda){
            return $http.get('app/components/waste/ditte.json');
        };
        return service;
    }]);
;
