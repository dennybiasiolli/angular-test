'use strict';

var wasteCtrl = function($scope, $rootScope, $routeParams, $location, AziendeRest) {
    $rootScope.titolo = 'Aziende';
    
    $scope.id = $routeParams.id;
    $scope.searchKey = $routeParams.searchKey;
    $scope.aziende = [];

    AziendeRest.getAziende($scope.id).
    success(function(data, status, headers, config) {
        if($scope.id){
            data = data.filter(function(d){
                if(d.id == $scope.id)
                    return d;
            });
        }
        $scope.aziende = data;
    }).
    error(function(data, status, headers, config) {
        $scope.aziende = null;
    });

    $scope.editAzienda = function(azienda){
        if(azienda){
            if(!azienda.id)
                $scope.aziende.push(azienda);
        }
        $location.path('/waste/aziende/');
    };
};

angular.module('myApp.waste')
    .controller('wasteCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'AziendeRest', wasteCtrl]);