'use strict';

angular.module('myApp.version.version-directive', [])

    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])

    .directive('fullAppVersion', ['version', function(version) {
        return{
            template: '<div>Angular seed app: v' + version + '</div>',
        }
    }])
;
