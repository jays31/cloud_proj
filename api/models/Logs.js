/**
 * Logs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    log: {
      type: 'string',
    },
    createdAt: { type: 'number', autoCreatedAt: false },
    updatedAt: { type: 'number', autoUpdatedAt: false },
  },
};

