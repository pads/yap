define(["/src/js/view/PresentationView.js"], function (PresentationView) {

    var presentationView;

    beforeEach(function () {
        presentationView = new PresentationView();
    });

    describe("Presentation view", function () {

        it("it should be defined", function () {
            expect(presentationView).toBeDefined();
        });


    });
});