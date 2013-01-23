define(["/src/js/model/Slide.js"], function (Slide) {

    var slide;

    beforeEach(function () {
        slide = new Slide();
    });

    describe("Slide", function () {

        it("should have the correct default title", function () {
            expect(slide.get("title")).toBe("New slide");
        });

        it("should have the correct default title placeholder", function () {
            expect(slide.get("titleplaceholder")).toBe("Enter title here");
        });

        it("should have the correct default contents", function () {
            expect(slide.get("content")).toBe("Enter content here");
        });

        it("should have a placeholder to the next slide", function () {
            expect(slide.get("next")).toEqual({ title: "" });
        });

        it("should have a placeholder to the previous slide", function () {
            expect(slide.get("previous")).toEqual({ title: "" });
        });
    });
});