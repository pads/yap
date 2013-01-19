require.config({
    baseUrl: "/src/js",
    paths: {
        jquery: "lib/jquery",
        underscore: "lib/underscore",
        backbone: "lib/backbone"
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
