define(["backbone", "backboneLocalStorage"], function (Backbone, LocalStorage) {

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
        },
        localStorage: new LocalStorage("SlideModel")
    });
});