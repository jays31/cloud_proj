/**
 * RErealestateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var request = require('request');
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
    var log_aa = 'Initiate Appraisal Request by Customer begins..';
    logger.info(log_aa);
    request.get({ url: 'http://localhost:1337/logs/create?log=' + (log_aa) });

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
    var log_ab = 'Initiate Appraisal Request by Customer ends..';
    logger.info(log_ab);
    request.get({ url: 'http://localhost:1337/logs/create?log=' + (log_ab) });

  },

  updateAppraisalValue_805: function (req, res) {
    var mlsId = req.body.reMIsID;
    var incomingAppraisalval = req.body.appraisalvalInput;
    logger.info('Update Appraisal Request by Real-estate Broker begins..');
    var log_ac = 'Update Appraisal Request by Real-estate Broker begins..';
    logger.info(log_ac);
    request.get({ url: 'http://localhost:1337/logs/create?log=' + (log_ac) });

    RErealestate.update({
      mlsId: mlsId
    }).set({
      appraisalValue: incomingAppraisalval
    }).exec(function (err) {
      if (err) {
        sails.log("could not update record");
        var log_ad = 'could not update record';
        logger.info(log_ad);
        request.get({ url: 'http://localhost:1337/logs/create?log=' + (log_ad) });
      }
      res.send({
        Success: true,
        Message: "updated successfully"
      });
    });
    logger.info('Update Appraisal Request by Real-estate Broker ends..');
    var log_ae = 'Update Appraisal Request by Real-estate Broker ends..';
    logger.info(log_ae);
    request.get({ url: 'http://localhost:1337/logs/create?log=' + (log_ae) });
  },

};
