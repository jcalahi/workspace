(function() {
    'use strict';
    angular.module('workspace').directive('buttonDir', [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'src/directives/buttonDirective.html'
            };
        }
    ]);
})();