/** global: browser */
/** global: server */
/** global: Package */

let myStepDefinitionsWrapper = function () {
    this.Before(function () {
        server.execute(function () {
            Package['xolvio:cleaner'].resetDatabase();
        });
    });

    this.When(/^I visit the homepage$/, function () {
        browser.url('http://localhost:3000');
    });

    this.Then(/^I see the app name$/, function () {
        let title = browser.getTitle();
        expect(title).to.equal('Write it down');
    });

    this.Given(/^I already have a user account$/, function () {
        let username = 'testuser';

        let user = server.execute(function(username) {
            const {Accounts} = require('meteor/accounts-base');

            let user = Accounts.findUserByUsername(username);

            if (!user) {
                user = Accounts.createUser({'username': username});
            }

            return user;
        }, username);

        expect(user).not.to.equal(undefined);
    });
};

module.exports = myStepDefinitionsWrapper;
