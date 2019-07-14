import { Class } from 'meteor/jagi:astronomy';

const Message = Class.create({
    name: 'Message',
    collection: new Meteor.Collection('message'),

    fields: {
        Name: {
            type: String,
            optional: true,

        },
        Message: {
            type: String,
            optional: true,

        },
    },

});

export default Message;