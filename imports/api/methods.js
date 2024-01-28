import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'users.register'(email, password) {
    // Validate input
    check(email, String);
    check(password, String);

    // Additional validation and security checks can be added here

    // Create the user
    const userId = Accounts.createUser({
      email: email,
      password: password,
    });

    return userId;
  },
});
