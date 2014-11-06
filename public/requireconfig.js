require.config({
    map: {
        '*': {
            'css': 'bower_components/require-css/css', //Allows loading css with requirejs
            'text': 'bower_components/text/text' //loading files as text (such as .html or txt files)
        }
    },
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'handlebars': 'bower_components/handlebars/handlebars'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});