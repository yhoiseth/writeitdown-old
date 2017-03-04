/** global: browser */

let myStepDefinitionsWrapper = function () {
    this.When(/^I visit the homepage$/, function () {
        browser.url('http://localhost:3000');
    });

    this.Then(/^I see the app name$/, function () {
        let title = browser.getTitle();
        expect(title).to.equal('Write it down');
    });

    this.Given(/^I already have a user account$/, function () {
        let username = 'testuser';

        let getUserByUsername = server.execute(function(username) {
            const {Accounts} = require('meteor/accounts-base');

            let user = Accounts.findUserByUsername(username);

            return user;
        }, username);

        let user = getUserByUsername;

        if (!user) {
            server.execute(function(username) {
                const {Accounts} = require('meteor/accounts-base');

                Accounts.createUser({'username': username});
            }, username);
        }

        expect(getUserByUsername).not.to.equal(undefined);
    });
};

module.exports = myStepDefinitionsWrapper;
