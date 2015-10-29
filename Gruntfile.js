module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify: {
        //	options: {
        //		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //	},
        //	build: {
        //		src: 'client/app.js',
        //		dest: 'server/public/assets/scripts/app.min.js'
        //	}
        //},
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "angular-route/angular-route.min.js",
                    "angular-animate/angular-animate.min.js",
                    "angular-aria/angular-aria.min.js",
                    "angular-material/angular-material.min.js",
                    "angular-route/angular-route.min.js.map",
                    "bootstrap/dist/*/*",
                    "angular-leaflet-directive/dist/angular-leaflet-directive.min.js",
                    "angular-simple-logger/dist/angular-simple-logger.min.js",
                    "angular-mapbox/dist/angular-mapbox.min.js",
                    "angular-bootstrap/ui-bootstrap.min.js",
                    "angular-messages/angular-messages.min.js",
                    "angular-material/angular-material.min.css"
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy']);

};
