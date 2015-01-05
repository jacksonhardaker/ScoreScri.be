requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min",
        "underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min",
        "backbone": "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
        "scorescribe": "../app/scorescribe.core"
    }
});

// Start the main app logic.
require(['jquery', 'underscore', 'scorescribe'],
function ($, _, ScoreScribe) {
    ScoreScribe.Parse.parse();
}); 