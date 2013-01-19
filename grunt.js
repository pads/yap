/*global module: true */
module.exports = function (grunt) {

    grunt.initConfig({
        jasmine: {
            amd: true,
            specs: "test/*Spec.js",
            template: "test/CustomRunner.tmpl",
            helpers: [
                "src/js/lib/require.js",
                "test/RequireConfig.js"
            ],
            junit: {
                output: "junit/"
            }
        },
        lint: {
            files: ["grunt.js", "src/js/**/!(backbone|jquery|require|underscore).js", "test/*.js"]
        },
        jshint: {
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                quotmark: "double",
                trailing: true,
                maxlen: 120,
                undef: true,
                unused: true,
                boss: true,
                browser: true,
                sub: true
            },
            globals: {
                define: true,
                require: true,
                describe: true,
                beforeEach: true,
                it: true,
                expect: true
            }
        },
        watch: {
            files: ["<config:lint.files>"],
            tasks: ["lint", "jasmine"]
        }
    });

    grunt.loadNpmTasks("grunt-volo");
    grunt.loadNpmTasks("grunt-jasmine-runner");

    grunt.registerTask("default", "lint jasmine");
};