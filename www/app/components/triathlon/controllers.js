'use strict';

var triathlonCtrl = function($scope, $rootScope, $routeParams, $location, TriathlonRest) {
    $rootScope.titolo = 'Triathlon';

    $scope.loadDatiGare = function() {
        // Use timeout to simulate a 650ms request.
        $scope.gare = [];
        return TriathlonRest.getDatiGare().
        success(function(data, status, headers, config) {
            $scope.gare = data;
        }).
        error(function(data, status, headers, config) {
            $scope.gare = [];
        });
    };
};

angular.module('myApp.triathlon')
    .controller('triathlonCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'TriathlonRest', triathlonCtrl]);