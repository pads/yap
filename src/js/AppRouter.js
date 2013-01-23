define([
    "backbone",
    "jquery",
    "view/HomeView",
    "collection/Presentation",
    "view/PresentationView",
    "model/Slide",
    "view/SlideView"
], function (Backbone, $, HomeView, Presentation, PresentationView, Slide, SlideView) {

    return Backbone.Router.extend({
        routes: {
            "home": "home",
            "newpresentation": "newPresentation",
            "editslide/:id": "editSlide"
        },
        home: function () {
            $("#container").html(new HomeView().render().el);
        },
        newPresentation: function () {
            $("#container").html(new PresentationView({ model: new Presentation() }).render().el);
        },
        editSlide: function (id) {
            var slide = new Slide({ id: id});
            slide.fetch({
                success: function () {
                    $("#container").html(new SlideView({ model: slide }).render().el);
                }
            });
        }
    });

});