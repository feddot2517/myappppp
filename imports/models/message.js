import {Class} from 'meteor/jagi:astronomy';

const Message = Class.create({
  name: 'Message',
  collection: new Meteor.Collection('message'),

  fields: {
    from: {
      type: String,
      optional: true,

    },
    text: {
      type: String,
      optional: true,
    },
    color: {
      type: String,
      optional: true,
    },
  },
  behaviors: { timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
    } },

});

export default Message;