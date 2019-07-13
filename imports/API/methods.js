Meteor.methods({
    createUser (username, password, callback) {
        Accounts.createUser({username, password},callback);
    }
});
