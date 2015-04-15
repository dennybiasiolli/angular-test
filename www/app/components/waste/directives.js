'use strict';

angular.module('myApp.waste')
    .directive('divAzienda', [function(){
        return{
            restrict: "EAC",
            scope: {
                az: "=azienda",
                searchKey: "=searchKey"
            },
            templateUrl: 'app/components/waste/waste_div-azienda.html'
        }
    }])
    .directive('divAziendaEdit', [function(){
        return{
            restrict: "EAC",
            scope: {
                az: "=azienda"
            },
            templateUrl: 'app/components/waste/waste_div-azienda-edit.html'
        }
    }])
;