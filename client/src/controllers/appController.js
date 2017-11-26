(function() {
    'use strict';
    angular.module("workspace").controller("AppController", [
        '$state',
        'appFactory',
        function($state, appFactory) {
            var vm = this;
            vm.name = null;
            vm.setName = function(name) {
                vm.name = name;
            };
            vm.getName = function() {
                return vm.name;
            };

            vm.show = function() {
                console.log("Hello World");
            };
            
            vm.message = appFactory.getName();

            vm.goto = function() {
                $state.go('page1');
            };
        }
    ]);
})();