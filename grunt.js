/*global module: true */
module.exports = function (grunt) {

    grunt.initConfig({
        jasmine: {
            amd: true,
            specs: "test/spec/*.js",
            template: "test/CustomRunner.tmpl",
            helpers: [
                "src/js/lib/require.js",
                "test/helper/RequireConfig.js",
                "test/helper/sinon-1.5.2.js"
            ],
            junit: {
                output: "junit/"
            },
            phantomjs: {
                "proxy-type": "none"
            }
        },
        lint: {
            files: ["grunt.js", "src/js/**/!(*ackbone*|jquery|require|text|underscore).js", "test/*.js"]
        },
        csslint: {
            lint: {
                src: "src/css/*.css"
            }
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
            files: ["<config:csslint.lint.src>", "<config:lint.files>"],
            tasks: ["csslint", "lint", "jasmine"]
        },
        clean: ["build"],
        requirejs: {
            compile: {
                options: {
                    name: "App",
                    baseUrl: "src/js",
                    mainConfigFile: "src/js/App.js",
                    optimize: "uglify2",
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    useSourceUrl: true,
                    out: "build/App.js"
                }
            }
        },
        dependencygraph: {
            targetPath: "src/js",
            outputPath: "build/dependency_graph",
            format: "amd"
        },
        replace: {
            dev: {
                options: {
                    variables: {
                        "app": "/src/js/App.js"
                    }
                },
                files: {
                    "build/": ["src/html/yap.html"]
                }
            },
            production: {
                options: {
                    variables: {
                        "app": "/build/App.js"
                    }
                },
                files: {
                    "build/": ["src/html/yap.html"]
                }
            }
        }
    });

    grunt.registerTask("default", "csslint lint jasmine");

    grunt.loadNpmTasks("grunt-volo");
    grunt.loadNpmTasks("grunt-jasmine-runner");
    grunt.loadNpmTasks("grunt-css");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-replace");
    grunt.loadNpmTasks("grunt-dependencygraph");

    grunt.registerTask("build", "Build the application for deployment", function (env) {
        if (env === "production") {
            grunt.task.run("clean default requirejs replace:production");
        } else {
            grunt.task.run("clean default replace:dev");
        }
    });
};