define([
    "backbone",
    "underscore",
    "text!/src/html/templates/presentation.html",
    "model/Slide"
], function (Backbone, _, presentationTemplate, Slide) {

    return Backbone.View.extend({
        id: "presentation",
        tagName: "section",
        template: _.template(presentationTemplate),
        events: {
            "click #addslide": "addSlide",
            "click #removeslide": "removeSlide"
        },
        render: function () {
            this.$el.html(this.template({ slides: this.model.toJSON() }));
            return this;
        },
        addSlide: function () {
            this.model.add(new Slide());
            this.render();
        },
        removeSlide: function () {
            this.model.remove();
            this.render();
        }
    });
});