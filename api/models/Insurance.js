/**
 * Insurance.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    firstname : {
      type: 'string',
      required:true
    },
    lastname: {
      type: 'string',
      required:true
    },
    
    ins_MlsID:{
      type: 'number',
      required:true
    },

    ins_MortID: {
      type: 'number',
      required:false
    },
    
    insured_value:{
      type: 'number',
      required:false
    },
    deductible_value : {
      type: 'number',
      required:false
    },
 

  },

};

