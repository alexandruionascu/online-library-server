/**
 * Borrow.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mySql',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      primaryKey: true
    },
    userId: {
      type: 'string'
    },
    bookId: {
      type: 'string'
    },
    start: {
      type: 'string'
    },
    end: {
      type: 'string'
    }
  }
};
