/**
 * BrokerMortgageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

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
  },

  employerApprovalUpdate_805: function (req, res) {
    var mortId = req.body.mortId;
    var salary = req.body.employee_salary;
    var employed_date = req.body.employeestartdate;
    var employerConfirmationStatus = req.body.approvalStatus;

    logger.info('Initiate Employer Approval Status Update, received from employer: begins..');

    BrokerMortgage.update({
      id: mortId
    }).set({
      salary: salary,
      employed_date: employed_date,
      employerConfirmationStatus: employerConfirmationStatus
    }).exec(function (err) {
      if (err) {
        sails.log("could not update record");
      }

      sails.log("updated successfully");
    });
    logger.info('Initiate Employer Approval Status Update, received from employer: ends..');
  },

  updateBrokerRE: function (req, res) {
    var mortID = req.body.reMortID;
    var incomingAppraisalval = req.body.appraisalvalInput;
    var status = "Approved";

    logger.info('Initiate Real-estate Appraisal Status Update , received from Real-estate Broker: begins..');
    BrokerMortgage.update({
      id: mortID
    }).set({
      reAppraisalStatus: status,
      appraisalValue: incomingAppraisalval
    }).exec(function (err) {
      if (err) {
        sails.log("could not update appraisal record");
      }

      sails.log("appraisal updated successfully");
    });
    logger.info('Initiate Real-estate Appraisal Status Update , received from Real-estate Broker: ends..');
  },


  updateBrokerINC: function (req, res) {
    var mortId = req.body.mortId;
    var IncStatus = req.body.incstatus;

    logger.info('Initiate Insurance Status Update, received from Insurance Agent: begins..');
    BrokerMortgage.update({
      id: mortId
    }).set({
      insuranceStatus: IncStatus
    }).exec(function (err) {
      if (err) {
        sails.log("could not update record");
      }

      sails.log("updated successfully");
    });
    logger.info('Initiate Insurance Status Update, received from Insurance Agent: ends..');
  },
};
