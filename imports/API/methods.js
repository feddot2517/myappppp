import Message from "../models/message";

Meteor.methods({
    'addUser'(username, password, callback) {
        Accounts.createUser({username, password},callback);
    }
});

Meteor.methods({
    'addMessage'(userName1  , userMessage1 ) {
        let usermessage = new Message({
            Name: userName1,
            Message: userMessage1,
        });
        usermessage.save();
    }
});

