import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'submit #loginForm'(event) {
    event.preventDefault();
    let username = $('#usernameInput').val();
    let password = $('#passwordInput').val();

    Meteor.loginWithPassword(username, password);
  }
});
