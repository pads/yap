define(["backbone"], function (Backbone) {

    return Backbone.Model.extend({
        defaults: {
            title: "New slide",
            "title-placeholder": "Enter title here",
            content: "Enter content here",
            next: {
                title: ""
            },
            previous: {
                title: ""
            }
        }
    });
});