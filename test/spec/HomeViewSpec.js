define(["view/HomeView"], function (HomeView) {

    var homeView;

    beforeEach(function () {
        homeView = new HomeView();
    });

    describe("Home view", function () {

        it("it should be defined", function () {
            expect(homeView).toBeDefined();
        });

    });
});