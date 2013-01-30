define(["collection/Presentation"], function (Presentation) {

    var presentation;

    beforeEach(function () {
        presentation = new Presentation();
    });

    describe("Presentation", function () {

        it("it should be defined", function () {
            expect(presentation).toBeDefined();
        });

    });
});