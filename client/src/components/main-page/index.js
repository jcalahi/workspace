var MainController = require('./main-controller.js');
var mainDirective = require('./main-directive.js');

require('angular').module('workspace')
    .controller('MainController', [MainController])
    .directive('mainDirective', [mainDirective]);