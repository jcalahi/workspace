(function() {
    'use strict';
    angular.module("workspace").controller("AppController", [
        function() {
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
        }
    ]);
})();