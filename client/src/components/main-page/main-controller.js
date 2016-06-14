function MainController() {
    var mc = this;
    mc.title = 'My AngularJS Workspace';

    mc.setTitle = function(title) {
        mc.title = title;
    };
}

module.exports = MainController;