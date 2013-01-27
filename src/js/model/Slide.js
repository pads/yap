define(["backbone"], function (Backbone) {

    return Backbone.Model.extend({
        defaults: {
            title: "",
            titleplaceholder: "Enter title here",
            content: "",
            contentplaceholder: "Enter content here",
            next: {
                title: ""
            },
            previous: {
                title: ""
            }
        }
    });
});