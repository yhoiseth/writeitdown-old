/** global: browser */

module.exports = function() {
    this.When(/^I visit the homepage$/, function () {
        browser.url('http://localhost:3000');
    });

    this.Then(/^I see the app name$/, function () {
        let title = browser.getTitle();
        expect(title).to.equal('Write it down');
    });
};
