/**
 * RErealestate.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
  
      firstName : {
          type : 'string',
          required : true
      },
      lastName : {
          type : 'string',
          required : true
      },
      mlsId : {
          type : 'string',
          required : true,
      },
      mortId :{
          type : 'string',
          required : true
      },
      appraisalValue : {
          type : 'number',
      }
    },
  };
  