/**
 * RErealestateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const log4js = require('log4js');
log4js.configure({
  appenders: {
    realEstate: {
      type: 'file',
      filename: 'loanApplication.log'
    }
  },
  categories: {
    default: {
      appenders: ['realEstate'],
      level: 'info'
    }
  }
});
const logger = log4js.getLogger('realEstate');


module.exports = {
  createAppraisalRequest: function (req, res) {
    var firstName = req.body.submitted_firstname;
    var lastName = req.body.submitted_lastname;
    var mlsId = req.body.submitted_mlsId;
    var mortId = req.body.submitted_mortId;
    logger.info('Initiate Appraisal Request by Customer begins..');
    RErealestate.create({
      firstName: firstName,
      lastName: lastName,
      mlsId: mlsId,
      mortId: mortId
    }).exec(
      function (err) {
        if (err) {
          res.send({
            error: "Database Error: Could not data into table"
          });
        }
        res.send({
          regSuccess: "Appraisal Request was submitted successfully!"
        });
      });
    logger.info('Initiate Appraisal Request by Customer ends..');

  },

  updateAppraisalValue_805: function (req, res) {
    var mlsId = req.body.reMIsID;
    var incomingAppraisalval = req.body.appraisalvalInput;
    logger.info('Update Appraisal Request by Real-estate Broker begins..');
    RErealestate.update({
      mlsId: mlsId
    }).set({
      appraisalValue: incomingAppraisalval
    }).exec(function (err) {
      if (err) {
        sails.log("could not update record");
      }

      sails.log("Updated successfully");
      res.send({
        Success: true,
        Message: "updated successfully"
      });
    });
    logger.info('Update Appraisal Request by Real-estate Broker ends..');
  },

};
