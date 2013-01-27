define([
    "backbone",
    "underscore",
    "jquery",
    "text!/src/html/templates/presentation.html"
], function (Backbone, _, $, presentationTemplate) {

    var slideCounter = 1;

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
            this.collection.create({ title: "Slide " + slideCounter });
            slideCounter++;
            this.render();
        },
        editSlide: function (event) {
            window.location.href = "#editslide/" + $(event.currentTarget).parent().attr("id");
        },
        removeSlide: function (event) {
            var view = this;
            var slideId = $(event.currentTarget).parent().attr("id");
            var slide = this.collection.find(function (model) {
                return model.get("id") === slideId;
            });
            slide.destroy({
                success: function () {
                    view.collection.remove(slideId);
                    view.render();
                }
            });
        }
    });
});