angular.module('myApp.avis', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/avis', {
            templateUrl: 'app/components/avis/avis.html',
            controller: 'avisCtrl'
        });
        $routeProvider.when('/avis/donatori/', {
            templateUrl: 'app/components/avis/avis.html',
            controller: 'avisCtrl'
        });
        $routeProvider.when('/avis/donatori/:searchKey', {
            templateUrl: 'app/components/avis/avis.html',
            controller: 'avisCtrl'
        });
        $routeProvider.when('/avis/donatore/:id', {
            templateUrl: 'app/components/avis/avis_donatore.html',
            controller: 'avisCtrl'
        });
    }]);
