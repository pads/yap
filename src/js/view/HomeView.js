define(["backbone", "underscore", "text!/src/html/templates/home.html"], function (Backbone, _, homeTemplate) {

    return Backbone.View.extend({
        className: "home",
        tagName: "section",
        template: _.template(homeTemplate),
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
});