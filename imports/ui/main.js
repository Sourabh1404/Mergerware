import './main.html';
import './login.html';
import './register.html';

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      console.log(error.reason);
    } else {
      console.log('Login successful');
      // Redirect or perform additional actions after login
    }
  });
}

function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    console.log('Passwords do not match');
    return;
  }

  Meteor.call('users.register', email, password, (error, userId) => {
    if (error) {
      console.log(error.reason);
    } else {
      console.log('Registration successful');
      // Redirect or perform additional actions after registration
    }
  });
}
