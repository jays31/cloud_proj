/**
 * BrokerMortgageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var request = require('request');
const log4js = require('log4js');
log4js.configure({
  appenders: {
    mortgageBroker: {
      type: 'file',
      filename: 'loanApplication.log'
    }
  },
  categories: {
    default: {
      appenders: ['mortgageBroker'],
      level: 'error'
    }
  }
});
const logger = log4js.getLogger('mortgageBroker');
console.log(logger);

module.exports = {

  // This method will be used to insert Broker Mortgage Request Details
  // into the database
  createMortgageRequest: function (req, res) {
    var userName = req.body.submitted_username;
    var password = req.body.submitted_password;
    var firstName = req.body.submitted_firstname;
    var lastName = req.body.submitted_lastname;
    var address = req.body.submitted_address;

    var phone = req.body.submitted_pnumber;
    var employerName = req.body.submitted_employer;
    var employeeEmail = req.body.submitted_email;
    var mortgageAmount = req.body.submitted_amount;
    var mlsId = req.body.submitted_mlsId;

    // Logging code
    logger.info('Mortgage Request Received: Inserting into database begins..');
    var log_a = 'Mortgage Request Received: Inserting into database begins..';
    logger.info(log_a);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_a) });


    BrokerMortgage.create({
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      currentAddress: address,
      phone: phone,
      mlsId: mlsId,
      currentEmployerName: employerName,
      employeeEmail: employeeEmail,
      mortgageAmount: mortgageAmount,
      mortgageStatus: 'Pending',
      insuranceStatus: 'Pending',
      employerConfirmationStatus: 'Pending',
      reAppraisalStatus: 'Pending'
    }).exec(
      function (err) {
        if (err) {
          res.send({
            error: "Database Error: Could not insert into table"
          });
        }
        res.send({
          regSuccess: "Application was submitted successfully!"
        });
      });
    logger.info('Mortgage Request Submitted: Inserting into database ends..');
    var log_b = 'Mortgage Request Submitted: Inserting into database ends..';
    logger.info(log_b);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_b) });

  },

  employerApprovalUpdate_805: function (req, res) {
    var mortId = req.body.mortId;
    var salary = req.body.employee_salary;
    var employed_date = req.body.employeestartdate;
    var employerConfirmationStatus = req.body.approvalStatus;

    logger.info('Initiate Employer Approval Status Update, received from employer: begins..');
    var log_c = 'Initiate Employer Approval Status Update, received from employer: begins..';
    logger.info(log_c);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_c) });

    BrokerMortgage.update({
      id: mortId
    }).set({
      salary: salary,
      employed_date: employed_date,
      employerConfirmationStatus: employerConfirmationStatus
    }).exec(function (err) {
      if (err) {
        sails.log("could not update record");
        var log_d = 'could not update record';
        logger.info(log_d);
        request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_d) });
      }
    });
    logger.info('Initiate Employer Approval Status Update, received from employer: ends..');
    var log_e = 'Initiate Employer Approval Status Update, received from employer: ends..';
    logger.info(log_e);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_e) });
  },

  updateBrokerRE: function (req, res) {
    var mortID = req.body.reMortID;
    var incomingAppraisalval = req.body.appraisalvalInput;
    var status = "Approved";

    logger.info('Initiate Real-estate Appraisal Status Update , received from Real-estate Broker: begins..');
    var log_f = 'Initiate Real-estate Appraisal Status Update , received from Real-estate Broker: begins..';
    logger.info(log_f);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_f) });

    BrokerMortgage.update({
      id: mortID
    }).set({
      reAppraisalStatus: status,
      appraisalValue: incomingAppraisalval
    }).exec(function (err) {
      if (err) {
        sails.log("could not update appraisal record");
        var log_g = 'could not update appraisal record';
        logger.info(log_g);
        request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_g) });
      }
    });
    logger.info('Initiate Real-estate Appraisal Status Update , received from Real-estate Broker: ends..');
    var log_h = 'Initiate Real-estate Appraisal Status Update , received from Real-estate Broker: ends..';
    logger.info(log_h);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_h) });
  },


  updateBrokerINC: function (req, res) {
    var mortId = req.body.mortId;
    var IncStatus = req.body.incstatus;
    var deductibleValue = req.body.deductibleValue;
    var insuredValue = req.body.insuredValue;

    logger.info('Initiate Insurance Status Update, received from Insurance Agent: begins..');
    var log_i = 'Initiate Insurance Status Update, received from Insurance Agent: begins..';
    logger.info(log_i);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_i) });

    BrokerMortgage.update({
      id: mortId
    }).set({
      insuranceStatus: IncStatus, deductibleValue: deductibleValue, insuredValue: insuredValue, mortgageStatus: 'Approved'
    }).exec(function (err) {
      if (err) {
        sails.log("could not update record");
        var log_j = 'could not update record';
        logger.info(log_j);
        request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_j) });
      }
    });
    logger.info('Initiate Insurance Status Update, received from Insurance Agent: ends..');
    var log_k = 'Initiate Insurance Status Update, received from Insurance Agent: ends..';
    logger.info(log_k);
    request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_k) });
  },
};
