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

    let user = server.execute(function (username) {
      const {Accounts} = require('meteor/accounts-base');

      let user = Accounts.findUserByUsername(username);

      if (!user) {
        user = Accounts.createUser({
          'username': username,
          'password': 'testpassword'
        });
      }

      return user;
    }, username);

    expect(user).not.to.equal(undefined);
  });

  this.Given(/^I am not logged in$/, function () {
    let user = server.execute(function () {
      const {Meteor} = require('meteor/meteor');

      return Meteor.user();
    });

    expect(user).to.equal(null);
  });

  this.When(/^I enter my username and password$/, function () {
    browser.waitForExist('#usernameInput', 5000);
    browser.setValue('#usernameInput', 'testuser');
    browser.setValue('#passwordInput', 'testpassword');
    browser.submitForm('#loginForm');
    browser.pause(5000);
  });

  this.Then(/^I should be logged in$/, function () {
    let loggedInUser = server.call('getCurrentUser');
    // let loggedInUser = server.execute(function () {
    //     const { Meteor } = require('meteor/meteor');
    //
    //     // setTimeout(function () {
    //     //   console.log('timing out');
    //     // }, 10000);
    //
    //     // let user = Meteor.user();
    //     let user = server.call;
    //
    //     console.log(user);
    //     console.log(Meteor.users.find().fetch());
    //
    //     return user;
    // });

    console.log(browser.log('browser'));



    expect(loggedInUser).not.to.equal(null);
  });
};

module.exports = myStepDefinitionsWrapper;
