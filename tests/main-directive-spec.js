describe('MainDirective', function() {

    var compile, scope, compiledElement, dir;

    beforeEach(function() {
        inject(function($compile, $rootScope) {
            compile = $compile;
            scope = $rootScope.$new();
        });

        dir = new mainDirective();

        compiledElement = compile('<main-directive></main-directive>')(scope);
        scope.$digest();
    });

    it('should be defined', inject(function($injector) {
        //expect($injector.get('mainDirectiveDirective')).toBeDefined();
        expect(dir).toBeDefined();
    }));

    it('should replace div', function() {
        var element = angular.element(dir.template);
        compile(element)(scope);
        scope.$digest();
        //expect(element.find('main-directive').length).toEqual(1);
    });

});