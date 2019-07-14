import { Class } from 'meteor/jagi:astronomy';



const Message = Class.create({
    name: 'Message',
    collection: new Meteor.Collection,

    fields: {

        userName: {
            type: String,
            optional: true,

        },

        userMessage: {
            type: String,
            optional: true,

        },
    },

});


export default Message;