/**
 * EmployerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var request = require('request');
CryptoJS = require("crypto-js");
const log4js = require('log4js');
log4js.configure({
  appenders: { employer: { type: 'file', filename: 'loanApplication.log' } },
  categories: { default: { appenders: ['employer'], level: 'info' } }
});
const logger = log4js.getLogger('employer');

module.exports = {

  userLogin_805: function (req, res) {
    var useremail = req.body.employeeEmail;
    var userpassword = req.body.employeepwd
    sails.log(userpassword);
    var log_l = userpassword;
    logger.info(log_l);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_l) });

    var passdecryptFromUser = (CryptoJS.AES.decrypt(userpassword.toString(), 'quick Oats')).toString(CryptoJS.enc.Utf8);
    logger.info('Employee Login Begins..');
    var log_m = 'Employee Login Begins..';
    logger.info(log_m);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_m) });

    Employer.find().where({
      employeeEmail: useremail
    }).exec(function (err, Employer) {
      if (err) {
        sails.log("ended in error");
        var log_n = 'ended in error';
        logger.info(log_n);
        request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_n) });

        res.send({
          error: true
        });
      }

      sails.log(Employer);
      sails.log(Employer.length);

    

      if (Employer.length === 0) {
        res.send({
          wrongEmail: true
        });
        sails.log("email does not exist")
        var log_o = 'email does not exist';
        logger.info(log_o);
        request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_o) });
      }

      const userRecord = Employer[0];
      var passdecrypt = (CryptoJS.AES.decrypt(userRecord.employeepwd.toString(), 'quick Oats')).toString(CryptoJS.enc.Utf8);

      if (passdecrypt === passdecryptFromUser) {
        res.send({
          Success: true
        });
      } else {
        res.send({
          Success: false
        });
      }
      logger.info('Employee Login Begins..');
      var log_p = 'Employee Login Begins..';
      logger.info(log_p);
      request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_p) });
    });
  },

  approvalRequest_805: function (req, res) {
    var useremail = req.body.employeeEmail;
    sails.log(useremail);
    logger.info('Employer Approval Begins..');
    var log_q = 'Employer Approval Begins..';
    logger.info(log_q);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_q) });

    Employer.find().where({
      employeeEmail: useremail
    }).exec(function (err, Employee) {
      if (err) {
        sails.log("ended in error");
        var log_r = 'ended in error';
        logger.info(log_r);
        request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_r) });

        res.send({
          error: 'User was not found.'
        });
      }
      const recordFound = Employee[0];
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
      var log_s = 'Employer Approval Ends..';
      logger.info(log_s);
      request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_s) });
    });
  },
};
