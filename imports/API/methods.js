import Message from "../models/message";

Meteor.methods({
    'addUser'(username, password, callback) {
        Accounts.createUser({username, password},callback);
    }
});

Meteor.methods({
    'addMessage'(userName, userMessage ) {
        let usermessage = new Message({
            userName: userName,
            userMessage: userMessage,
        })
    }
});

Meteor.methods({

})

