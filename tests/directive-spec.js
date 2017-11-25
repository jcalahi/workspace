describe("App Directive", function() {
    var scope, template;

    beforeEach(function() {
        module("workspace");

        inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            scope.list = ['apple', 'orange', 'ensaymada'];
            scope.title = 'My Favorite Food';
            template = angular.element("<app-directive title='title' list='list'></app-directive>");
            $compile(template)(scope);
            scope.$digest();
        })
    });

    it("should be defined", inject(function($injector) {
        expect($injector.get("appDirectiveDirective")).toBeDefined();
    }));

    it("should display a title", function() {
        expect(template.find('h2')[0].innerText).toBe('My Favorite Food');
    });

    it("renders the length", function() {
        expect(template.find('ul').length).toEqual(3);
    });

    it("should increment the number of items when invoked", function() {
        var handler = template.isolateScope();
        handler.addToCart();
        expect(handler.items).toEqual(1);
    });

    it("should have this function", function() {
        var handler = template.isolateScope();
        spyOn(handler, "addToCart");
        template.find('li')[0].click();
        expect(handler.addToCart).toHaveBeenCalled();
    });
});