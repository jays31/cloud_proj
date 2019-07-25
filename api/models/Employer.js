/**
 * Employer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    empId: {
      type: 'number',
      required:true
    },
    employeeEmail:{
      type: 'string',
      required:true
    },
    employeepwd:{
      type: 'string',
      required:true
    },
    firstName : {
      type: 'string',
      required:true
    },
    lastName : {
      type: 'string',
      required:true
    },
    salary: {
      type: 'number',
      required:true
    },

    employed_date: {
      type: 'string',
      required:false
    },
  },

};

