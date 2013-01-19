define([
    "backbone",
    "jquery",
    "view/HomeView",
    "collection/Presentation",
    "view/PresentationView",
    "model/Slide"
], function (Backbone, $, HomeView, Presentation, PresentationView, Slide) {

    return Backbone.Router.extend({
        routes: {
            "home": "home",
            "newPresentation": "newPresentation"
        },
        home: function () {
            $("#container").html(new HomeView().render().el);
        },
        newPresentation: function () {
            $("#container").html(new PresentationView({ model: new Presentation({ model: new Slide() }) }).render().el);
        }
    });

});