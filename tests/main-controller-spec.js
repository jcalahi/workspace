//var MainController = require('../client/src/components/main-page/main-controller.js');

describe('MainController', function() {

    var controller, timeout;

    beforeEach(inject(function($timeout) {
        timeout = $timeout;
        controller = new MainController(timeout);
    }));

    it('should be defined', function() {
        expect(controller).toEqual(jasmine.any(Object));
    });

    it('should set default title', function() {
        expect(controller.title).toEqual('My AngularJS Workspace');
    });

    describe('setTitle method', function() {
        it('should set new title', function() {
            controller.setTitle('new title');
            expect(controller.title).toBe('new title');
        });
    });

    describe('click button', function() {
        it('should update the value after 1000ms', function() {
            controller.button();
            timeout.flush();
            expect(controller.number).toEqual(1);
        });
    });

});