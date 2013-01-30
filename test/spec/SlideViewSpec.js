define(["view/SlideView"], function (SlideView) {

    var slideView;

    beforeEach(function () {
        slideView = new SlideView();
    });

    describe("Slide view", function () {

        it("it should be defined", function () {
            expect(slideView).toBeDefined();
        });


    });
});