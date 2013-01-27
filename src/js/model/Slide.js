define(["backbone"], function (Backbone) {

    return Backbone.Model.extend({
        defaults: {
            title: "New slide",
            titleplaceholder: "Enter title here",
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