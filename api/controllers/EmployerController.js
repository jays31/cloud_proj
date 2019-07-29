/**
 * EmployerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

CryptoJS = require("crypto-js");
const log4js = require('log4js');
log4js.configure({
  appenders: {employer: {type: 'file',filename: 'loanApplication.log'}},
  categories: {default: {appenders: ['employer'],level: 'info'}}
});
const logger = log4js.getLogger('employer');

module.exports = {

  userLogin_805: function (req, res) {
    var useremail = req.body.employeeEmail;
    var userpassword = req.body.employeepwd
    sails.log(userpassword);
    //sails.log(useremail); decrypt incoming password below
    var passdecryptFromUser = (CryptoJS.AES.decrypt(userpassword.toString(), 'quick Oats')).toString(CryptoJS.enc.Utf8);
    sails.log(passdecryptFromUser);
    logger.info('Employee Login Begins..');

    Employer.find().where({
      employeeEmail: useremail
    }).exec(function (err, Employer) {
      if (err) {
        sails.log("ended in error");

        res.send({
          error: true
        });
      }

      sails.log(Employer);
      const userRecord = Employer[0];
      //   sails.log(userRecord.length()); derypt password stored in db
      var passdecrypt = (CryptoJS.AES.decrypt(userRecord.employeepwd.toString(), 'quick Oats')).toString(CryptoJS.enc.Utf8);


      if (Employer.length === 0) {
        res.send({
          wrongEmail: true
        });
        sails.log("email does not exist")
      }

      if (passdecrypt === passdecryptFromUser) {
        sails.log(userRecord.employeepwd);
        res.send({
          Success: true
        });

      } else {

        res.send({
          Success: false
        });

      }

      logger.info('Employee Login Begins..');

    });

  },

  approvalRequest_805: function (req, res) {
    var useremail = req.body.employeeEmail;
    sails.log(useremail);
    logger.info('Employer Approval Begins..');
    Employer.find().where({
      employeeEmail: useremail
    }).exec(function (err, Employee) {
      if (err) {
        sails.log("ended in error");

        res.send({
          error: 'User was not found.'
        });
      }

      sails.log(Employee);
      const recordFound = Employee[0];
      sails.log(recordFound.salary);

      if (recordFound.salary >= 50000) {
        res.send({
          Success: true,
          emp_salary: recordFound.salary,
          emp_employeddate: recordFound.employed_date
        });
      } else {

        res.send({
          Success: false,
          emp_salary: recordFound.salary,
          emp_employeddate: recordFound.employed_date
        });

      }
      logger.info('Employer Approval Ends..');
    });
  },


};
