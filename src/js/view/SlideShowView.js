define([
    "backbone",
    "underscore",
    "jquery",
    "text!/src/html/templates/slideshow.html"
], function (Backbone, _, $, slideShowView) {

    var KEY_ENTER = 13;
    var KEY_LEFT = 37;
    var KEY_UP = 38;
    var KEY_RIGHT = 39;
    var KEY_DOWN = 40;

    var slideCounter = 0;

    return Backbone.View.extend({
        className: "slideshow",
        tagName: "section",
        template: _.template(slideShowView),
        events: {
            "click #firstslide": "firstSlide",
            "click #nextslide": "nextSlide",
            "click #previousslide": "previousSlide",
            "click #lastslide": "lastSlide",
            "click #fullscreen": "fullScreen"
        },
        initialize: function () {
            _.bindAll(this, "navigate");
            document.onkeydown = this.navigate;
        },
        render: function (index) {
            if (!index) {
                index = 0;
            }
            this.$el.html(this.template(this.collection.at(index).toJSON()));
            return this;
        },
        firstSlide: function () {
            slideCounter = 0;
            this.render(slideCounter);
        },
        nextSlide: function () {
            slideCounter++;
            this.render(slideCounter);
        },
        previousSlide: function () {
            slideCounter--;
            this.render(slideCounter);
        },
        lastSlide: function () {
            slideCounter = this.collection.length - 1;
            this.render(slideCounter);
        },
        fullScreen: function () {
            if (this.el.webkitRequestFullscreen) {
                this.el.webkitRequestFullscreen();
            } else if (this.el.mozRequestFullScreen) {
                this.el.mozRequestFullScreen();
            }
        },
        navigate: function (event) {
            switch (event.keyCode) {
            case KEY_ENTER:
                this.fullScreen();
                break;
            case KEY_LEFT:
                this.previousSlide();
                break;
            case KEY_UP:
                this.lastSlide();
                break;
            case KEY_RIGHT:
                this.nextSlide();
                break;
            case KEY_DOWN:
                this.firstSlide();
                break;
            }
        }
    });
});