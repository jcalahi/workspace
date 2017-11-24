describe('App Controller', function() {
    var scope, controller, factory;

    beforeEach(function() {
        module('workspace');

        inject(function($rootScope, $controller, appFactory) {
            scope = $rootScope.$new();
            factory = appFactory;
            controller = $controller('AppController');
        });
    });

    it('should work set name', function() {
        controller.setName('julius');
        expect(controller.name).toEqual('julius');
    });

    it('should get name', function() {
        expect(controller.getName()).toBe(null);
    });

    it('should do console.log', function() {
        spyOn(console, 'log');
        controller.show();
        expect(console.log).toHaveBeenCalled();
    });

    it('should get the message from factory', function() {
        expect(controller.message).toBe('react');
    });
});