require.config({
    baseUrl: "/src/js",
    paths: {
        text: "lib/text",
        jquery: "lib/jquery",
        underscore: "lib/underscore",
        backbone: "lib/backbone",
        backboneLocalStorage: "lib/Backbone.localStorage"
    }
});

define(
    [
        "backbone",
        "AppRouter"
    ],
    function (Backbone, AppRouter) {

        function App() {
            this.initialise = function () {
                new AppRouter();
                Backbone.history.start();
            };
        }
        new App().initialise();
        return App;
    }
);
