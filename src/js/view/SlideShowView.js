define([
    "backbone",
    "underscore",
    "jquery",
    "text!/src/html/templates/slideshow.html"
], function (Backbone, _, $, slideShowView) {

    var slideCounter = 0;

    return Backbone.View.extend({
        className: "slideshow",
        tagName: "section",
        template: _.template(slideShowView),
        events: {
            "click #firstslide": "firstSlide",
            "click #nextslide": "nextSlide",
            "click #previousslide": "previousSlide",
            "click #lastslide": "lastSlide"
        },
        render: function (index) {
            if (!index) {
                index = 0;
            }
            this.$el.html(this.template(this.collection.at(index).toJSON()));
            return this;
        },
        firstSlide: function () {
            slideCounter = 0;
            this.render(slideCounter);
        },
        nextSlide: function () {
            slideCounter++;
            this.render(slideCounter);
        },
        previousSlide: function () {
            slideCounter--;
            this.render(slideCounter);
        },
        lastSlide: function () {
            slideCounter = this.collection.length - 1;
            this.render(slideCounter);
        }
    });
});