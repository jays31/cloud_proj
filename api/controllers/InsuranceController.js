/**
 * InsuranceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    insertAppraisalVal_Ins: function (req, res) { 
        var ins_MortID = req.body.reMortID;
        var ins_MlSID = req.body.reMIsID;
        var incomingAppraisalval = req.body.appraisalvalInput;       

        Insurance.create({ ins_MortID:ins_MortID, ins_MlSID:ins_MlSID, ins_appraisalValue: incomingAppraisalval}).exec(
        function (err){
            if (err) { 
                res.send( { error: "Database Error: Could not insert into table" }); 
            }
            res.send({ regSuccess: "Application was submitted successfully!"});
            sails.log("record inserted successfully");
        });
    },
  

};

