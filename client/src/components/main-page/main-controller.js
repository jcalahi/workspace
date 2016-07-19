function MainController($timeout) {
    var mc = this;

    mc.title = 'My AngularJS Workspace';
    mc.number = 0;

    mc.setTitle = function(title) {
        mc.title = title;
    };

    mc.button = function() {
        $timeout(function() {
            mc.number = 1;
        }, 1000);
    };
}

module.exports = MainController;