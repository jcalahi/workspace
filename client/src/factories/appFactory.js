(function() {
    'use strict';
    angular.module('workspace').factory('appFactory', [
        function() {
            return {
                getName: getName
            };

            function getName() {
                return 'react';
            }
        }
    ]);
})();