/**
 * RErealestate.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    custname : {
        type : 'string',
        required : true
    },

    mlsid : {
        type : 'string',
        required : true,
    },

    brokrefID :{
        type : 'string',
        required : true
    },

    appraisalVal : {
        type : 'number',
    },

    marketDemandLevel : {
        type : 'string'
    }

  },

};

