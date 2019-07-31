/**
 * InsuranceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var request = require('request');
const log4js = require('log4js');
log4js.configure({
  appenders: {
    insurance: {
      type: 'file',
      filename: 'loanApplication.log'
    }
  },
  categories: {
    default: {
      appenders: ['insurance'],
      level: 'info'
    }
  }
});
const logger = log4js.getLogger('insurance');

module.exports = {
  insertAppraisalVal_Ins: function (req, res) {
    var ins_MortID = req.body.reMortID;
    var ins_MlSID = req.body.reMIsID;
    var incomingAppraisalval = req.body.appraisalvalInput;

    logger.info('Insurance Request Received from real estate broker: begins..');
    var log_t = 'Insurance Request Received from real estate broker: begins..';
    logger.info(log_t);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_t) });

    Insurance.create({ ins_MortID: ins_MortID, ins_MlSID: ins_MlSID, ins_appraisalValue: incomingAppraisalval }).exec(
      function (err) {
        if (err) {
          res.send({ error: "Database Error: Could not insert into table" });
          var log_u = 'Database Error: Could not insert into table';
          logger.info(log_u);
          request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_u) });
        }
        res.send({ regSuccess: "Application was submitted successfully!" });
        var log_v = 'Application was submitted successfully!';
        logger.info(log_v);
        request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_v) });
      });
    logger.info('Insurance Request Received from real estate broker: ends..');
    var log_w = 'Insurance Request Received from real estate broker: ends..';
    logger.info(log_w);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_w) });
  },

  updateInsurance: function (req, res) {
    var mortid = req.body.submitted_mortid;
    var firstName = req.body.submitted_firstname;
    var lastName = req.body.submitted_lastname;
    var incval = req.body.submitted_incvalue;
    var deduval = req.body.submitted_deduvalue

    logger.info('Insurance Approval Update: begins..');
    var log_x = 'Insurance Approval Update: begins..';
    logger.info(log_x);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_x) });

    Insurance.update({ ins_MortID: mortid }).set({ firstname: firstName, lastname: lastName, insured_value: incval, deductible_value: deduval }).exec(function (err) {
      if (err) {
        sails.log("could not update record");
        var log_y = 'could not update record';
        logger.info(log_y);
        request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_y) });
      }
      res.send({ Success: true });
    });
    logger.info('Insurance Approval Update: ends..');
    var log_z = 'Insurance Approval Update: ends..';
    logger.info(log_z);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_z) });
  }
};