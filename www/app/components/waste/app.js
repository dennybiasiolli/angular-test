angular.module('myApp.waste', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/waste', {
            templateUrl: 'app/components/waste/waste.html',
            controller: 'wasteCtrl'
        });
        $routeProvider.when('/waste/aziende/', {
            templateUrl: 'app/components/waste/waste.html',
            controller: 'wasteCtrl'
        });
        $routeProvider.when('/waste/aziende/:searchKey', {
            templateUrl: 'app/components/waste/waste.html',
            controller: 'wasteCtrl'
        });
        $routeProvider.when('/waste/azienda/:id', {
            templateUrl: 'app/components/waste/waste_azienda.html',
            controller: 'wasteCtrl'
        });
    }]);
