'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.view1')
    .service('NewsRest', ['$http', function($http){
        var service = {};
        service.getNews = function(){
            return $http({method: 'GET', url: 'app/components/view1/news.json'});
        };
        return service;
    }]);
;
