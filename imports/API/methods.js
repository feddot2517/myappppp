import Message from "../models/message";

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


Meteor.methods({
  'addUser'(username, password, callback) {
    Accounts.createUser({
      username,
      password,
      profile: {color: getRandomColor()}
    }, callback);
  }
});

Meteor.methods({
  'addMessage'(user, text) {
    const {username, profile} = user;
    const userMessage = new Message({
      from: username,
      color: profile.color,
      text,
    });
    userMessage.save();
  }
});

