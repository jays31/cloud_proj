/**
 * InsuranceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    updateAppraisalVal_Ins: function (req, res) {        
        var mlsId = req.body.reMIsID;
        var incomingAppraisalval = req.body.appraisalvalInput;
        
         
        RErealestate.update({mlsId:mlsId}).set({appraisalValue:incomingAppraisalval }).exec (function(err){
            if (err) {
                sails.log("could not update record");
            }

            sails.log("Updated successfully");
            res.send({Success:true, Message:"updated successfully"});
        });
       
    },
  

};

