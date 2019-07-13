Meteor.methods({
    'addUser'(username, password, callback) {
        Accounts.createUser({username, password},callback);
    }
});
