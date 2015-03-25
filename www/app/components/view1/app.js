angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'app/components/view1/view1.html',
            controller: 'View1Ctrl'
        });
        $routeProvider.when('/view1/:key', {
            templateUrl: 'app/components/view1/view1.html',
            controller: 'View1Ctrl'
        });
    }]);
