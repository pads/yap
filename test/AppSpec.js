require(["/src/js/App.js"], function (App) {

    var app;

    beforeEach(function () {
        app = new App();
    });

    describe("YAP application", function () {

        it("should be defined", function () {
            expect(app).not.toBeUndefined();
        });
    });
});
