/**
 * PropertyInsurance.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    mlsId:{
      type: 'string',
      required: true
    },
    insuranceQuote:{
      type: 'number',
      required:true
    },
    mortId:{
      type: 'string',
      required:true
    },
    insuredValue : {
      type: 'number',
      required:true
    },
    deductibleValue : {
      type: 'number',
      required:true
    },
    insReqName: {
      type: 'number',
      required:true
    },
  },

};

