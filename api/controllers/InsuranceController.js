/**
 * InsuranceController
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
      appenders: ['insurance'],
      level: 'error'
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
        Insurance.create({ ins_MortID:ins_MortID, ins_MlSID:ins_MlSID, ins_appraisalValue: incomingAppraisalval}).exec(
        function (err){
            if (err) { 
                res.send( { error: "Database Error: Could not insert into table" }); 
            }
            res.send({ regSuccess: "Application was submitted successfully!"});
            sails.log("record inserted successfully");
        });
        logger.info('Insurance Request Received from real estate broker: ends..');

    },
  
    updateInsurance:function(req,res)
    {
        var mortid = req.body.submitted_mortid;
        var firstName = req.body.submitted_firstname;
        var lastName = req.body.submitted_lastname;
        var incval = req.body.submitted_incvalue;
        var deduval = req.body.submitted_deduvalue
 
        logger.info('Insurance Approval Update: begins..');
        Insurance.update({ ins_MortID: mortid }).set({ firstname: firstName, lastname: lastName, insured_value: incval, deductible_value: deduval }).exec(function (err) {
            if (err) {
                sails.log("could not update record");
            }
            sails.log("updated successfully");
            res.send({ Success: true });
        });
        logger.info('Insurance Approval Update: ends..');
 
    }
};

