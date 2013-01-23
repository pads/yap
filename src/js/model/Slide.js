define(["backbone", "backboneLocalStorage"], function (Backbone, LocalStorage) {

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
        },
        localStorage: new LocalStorage("SlideModel")
    });
});