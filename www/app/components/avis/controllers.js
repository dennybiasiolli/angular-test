'use strict';

var avisCtrl = function($scope, $rootScope, $routeParams, $location, DonatoriRest) {
    $rootScope.titolo = 'Donatori';

    $scope.id = $routeParams.id;
    $scope.searchKey = $routeParams.searchKey;
    $scope.filtri = [];
    //$scope.filtri.StatoDonatore = 'Attivo';
    $scope.donatori = [];

    $scope.currentPage = 0;
    $scope.pageSize = 20;
    $scope.numberOfPages=function(){
        return Math.ceil($scope.donatori.length/$scope.pageSize);
    }

    $scope.aggiornaFiltro = function(filtri){
        $scope.currentPage = 0;
        $scope.refreshDonatori(filtri);
    };

    $scope.refreshDonatori = function(filtri){
        $scope.donatori = DonatoriRest.getDonatori(filtri).
        success(function(data, status, headers, config) {
            if(filtri){
                data = data.filter(function(d){
                    var retVal = d;
                    if(filtri.id){
                        if(d.id != $scope.id)
                            return null;
                    }
                    if(filtri.searchKey){
                        var strNominativo = d.Cognome.toLowerCase() + " " + d.Nome.toLowerCase();
                        if(d.NumTessera != filtri.searchKey && strNominativo.indexOf(filtri.searchKey.toLowerCase()) == -1)
                            return null;
                    }
                    if(filtri.NumTessera){
                        if(d.NumTessera != filtri.NumTessera)
                            return null;
                    }
                    if(filtri.StatoDonatore){
                        if(d.StatoDonatore.toLowerCase() != filtri.StatoDonatore.toLowerCase())
                            return null;
                    }
                    if(filtri.Cognome){
                        if(d.Cognome.toLowerCase().indexOf(filtri.Cognome.toLowerCase()) == -1)
                            return null;
                    }
                    if(filtri.Nome){
                        if(d.Nome.toLowerCase().indexOf(filtri.Nome.toLowerCase()) == -1)
                            return null;
                    }
                    if(filtri.Sesso){
                        if(d.Sesso.toLowerCase() != filtri.Sesso.toLowerCase())
                            return null;
                    }
                    if(filtri.GruppoSanguigno){
                        if(d.GruppoSanguigno.toLowerCase() != filtri.GruppoSanguigno.toLowerCase())
                            return null;
                    }
                    if(filtri.Rh){
                        if(d.Rh.toLowerCase() != filtri.Rh.toLowerCase())
                            return null;
                    }
                    if(filtri.DaDataNascita){
                        var dataNascita = new Date(d.DataNascita);
                        if(dataNascita < filtri.DaDataNascita)
                            return null;
                    }
                    if(filtri.ADataNascita){
                        var dataNascita = new Date(d.DataNascita);
                        if(dataNascita > filtri.ADataNascita)
                            return null;
                    }
                    if(filtri.DaDataIscrizione){
                        var dataIscrizione = new Date(d.DataIscrizione);
                        if(dataIscrizione < filtri.DaDataIscrizione)
                            return null;
                    }
                    if(filtri.ADataIscrizione){
                        var dataIscrizione = new Date(d.DataIscrizione);
                        if(dataIscrizione > filtri.ADataIscrizione)
                            return null;
                    }
                    return retVal;
                });
            }
            $scope.donatori = data;
        }).
        error(function(data, status, headers, config) {
            $scope.donatori = null;
        });
    };

    $scope.editDonatore = function(donatore){
        if(donatore){
            if(!donatore.id)
                $scope.donatori.push(donatore);
        }
        $location.path('/avis/donatori/');
    };

    $scope.refreshDonatori();
};

angular.module('myApp.avis')
    .controller('avisCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'DonatoriRest', avisCtrl]);
