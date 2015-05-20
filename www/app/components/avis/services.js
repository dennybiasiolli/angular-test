'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.avis')
    .service('DonatoriRest', ['$http', function($http){
        var service = {};
        service.getDonatori = function(filtri){
            return $http.get('app/components/avis/donatori.json', {filtri: filtri});
        };
        return service;
    }]);
;
