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
                Backbone.history.start();
                var appRouter = new AppRouter();
                appRouter.navigate("home", { trigger: true });
            };
        }
        new App().initialise();
        return App;
    }
);
