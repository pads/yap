define([
    "backbone",
    "underscore",
    "jquery",
    "text!/src/html/templates/presentation.html",
    "model/Slide"
], function (Backbone, _, $, presentationTemplate, Slide) {

    return Backbone.View.extend({
        id: "presentation",
        tagName: "section",
        template: _.template(presentationTemplate),
        events: {
            "click #addslide": "addSlide",
            "click #editslide": "editSlide",
            "click #removeslide": "removeSlide"
        },
        render: function () {
            this.$el.html(this.template({ slides: this.collection.toJSON() }));
            return this;
        },
        addSlide: function () {
            this.collection.create({});
            this.render();
        },
        editSlide: function (event) {
            window.location.href = "#editslide/" + $(event.currentTarget).parent().attr("id");
        },
        removeSlide: function (event) {
            var slideId = $(event.currentTarget).parent().attr("id");
            this.collection.remove(slideId);
            this.render();
        }
    });
});