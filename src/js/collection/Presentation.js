define(["backbone", "model/Slide", "backboneLocalStorage"], function (Backbone, Slide, LocalStorage) {

    return Backbone.Collection.extend({
        model: Slide,
        localStorage: new LocalStorage("PresentationCollection")
    });
});