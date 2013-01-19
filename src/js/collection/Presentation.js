define(["backbone", "model/Slide"], function (Backbone, Slide) {

    return Backbone.Collection.extend({
        model: Slide
    });
});