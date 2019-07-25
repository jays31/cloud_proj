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
      required:false
    },
    lastname: {
      type: 'string',
      required:false
    },
    
    ins_MortID: {
      type: 'number',
      required:false
    },

    ins_MlSID: {
      type: 'number',
      required:false
    },


    ins_appraisalValue: {
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

