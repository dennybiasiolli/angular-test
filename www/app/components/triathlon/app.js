angular.module('myApp.triathlon', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/triathlon', {
            templateUrl: 'app/components/triathlon/triathlon.html',
            controller: 'triathlonCtrl'
        });
    }]);
