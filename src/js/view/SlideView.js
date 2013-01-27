define([
    "backbone",
    "underscore",
    "jquery",
    "text!/src/html/templates/slide.html"
],
    function (Backbone, _, $, slideTemplate) {

    return Backbone.View.extend({
        id: "slide",
        tagName: "section",
        template: _.template(slideTemplate),
        events: {
            "click .next": "next",
            "click .previous": "previous",
            "click #saveslide": "save"
        },
        initialize: function () {

        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        next: function () {

        },
        previous: function () {

        },
        save: function () {
            var title = $("#title").val();
            var content = $("#content").val();
            this.model.save({ title: title, content: content}, {
                success: function () {

                }
            });
        }
    });
});