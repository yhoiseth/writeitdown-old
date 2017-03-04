import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  getCurrentUser() {
    console.log(Meteor.userId());
    console.log(Meteor.user());
    console.log(this.userId);

    return Meteor.user();
  }
});
