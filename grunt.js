module.exports = function(grunt) {

    grunt.initConfig({
        jasmine : {
            amd: true,
            specs : "test/*Spec.js",
            template: "test/CustomRunner.tmpl",
            helpers: [
                "src/js/lib/require.js",
                "test/RequireConfig.js"
            ],
            junit: {
                output: "junit/"
            }
        }
    });

    grunt.loadNpmTasks("grunt-volo");
    grunt.loadNpmTasks("grunt-jasmine-runner");

    grunt.registerTask("default", "jasmine");
};