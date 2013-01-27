define([
    "backbone",
    "jquery",
    "view/HomeView",
    "collection/Presentation",
    "view/PresentationView",
    "model/Slide",
    "view/SlideView"
], function (Backbone, $, HomeView, Presentation, PresentationView, Slide, SlideView) {

    var presentation = new Presentation();

    return Backbone.Router.extend({
        routes: {
            "home": "home",
            "loadpresentation": "loadPresentation",
            "editslide/:id": "editSlide"
        },
        home: function () {
            $("#container").html(new HomeView().render().el);
        },
        loadPresentation: function () {
            var presentationView = new PresentationView({ collection: presentation});
            presentation.fetch({
                success: function () {
                    $("#container").html(presentationView.render().el);
                }
            });
        },
        editSlide: function (id) {
            var slide = presentation.find(function (model) {
                return model.get("id") === id;
            });
            $("#container").html(new SlideView({ model: slide }).render().el);
        }
    });

});