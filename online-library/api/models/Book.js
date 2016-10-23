/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mySql',
  attributes: {
    id: {
      type: 'string',
      unique: true
    },
    title: {
      type: 'string'
    },
    author: {
      type: 'string'
    },
    description: {
      type: 'string',
      size: 5000
    },
    quotes: {
      type: 'json'
    },
    coverPicture: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    rating: {
      type: 'integer'
    }
  }
};
